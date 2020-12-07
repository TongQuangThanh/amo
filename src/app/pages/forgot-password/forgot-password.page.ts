import { Component, OnInit } from '@angular/core';
import { ConstService } from '../../utils/const.service'
import { ModalController } from '@ionic/angular';
import { PopupPincodePasswordPage } from '../popup-pincode-password/popup-pincode-password.page';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { NavController } from '@ionic/angular';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  phoneNumber: string;
  constructor(
    private loading: LoadingService,
    public modalController: ModalController,
    private navCtrl: NavController,
    private alertService: AlertService,
    private translate: TranslateService,
    private apiService: ApiService) {
  }

  ngOnInit() {
  }

  checkIsEnabled() {
    if (this.phoneNumber && this.phoneNumber.toString().length >= ConstService.PHONE_LENGTH_VN) {
      return true;
    }
    return false;
  }

  sendSMS(){
    var self = this;
    this.loading.present();
    this.apiService.forgotPassword(this.phoneNumber).subscribe(result => {
      self.loading.dismiss();
      self.presentModal();
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('FORGOT_PASSWORD.error_message'));
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PopupPincodePasswordPage,
      componentProps: {
        "phoneNumber": this.phoneNumber,
      },
      cssClass: "custom-pincode-wrapper"
    });

    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned !== null) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
        if(dataReturnedResult.result == '0'){
          this.navCtrl.navigateRoot('/new-password/' + this.phoneNumber + "/" + dataReturnedResult.token);
        }else{

        }
      }
    });

    return await modal.present();
  }

}
