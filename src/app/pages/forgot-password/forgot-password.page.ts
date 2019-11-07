import { Component, OnInit } from '@angular/core';
import { ConstService } from '../../utils/const.service'
import { ModalController } from '@ionic/angular';
import { PincodePasswordPage } from '../pincode-password/pincode-password.page';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { NavController } from '@ionic/angular';

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
    private apiService: ApiService) {
  }

  ngOnInit() {
  }

  checkIsEnabled() {
    if (this.phoneNumber && this.phoneNumber.length >= ConstService.PHONE_LENGTH_VN) {
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
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PincodePasswordPage,
      componentProps: {
        "phoneNumber": this.phoneNumber,
      },
      cssClass: "custom-modal-wrapper"
    });

    modal.onDidDismiss().then((dataReturned:any) => {
      console.log(1111);
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
