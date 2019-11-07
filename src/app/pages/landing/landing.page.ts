import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TranslateConfigService } from '../../translate-config.service';
import { NavigationExtras } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { PincodeRegisterPage } from '../auth/pincode-register/pincode-register.page';

const PHONE_LENGTH_VN = 10;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  phoneNumber: string;
  errorInputPhone: boolean;
  constructor(
    private menu: MenuController,
    private loading: LoadingService,
    private authService: AuthService,
    private navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    private apiService: ApiService,
    public modalController: ModalController,
  ) {
    this.phoneNumber = '';
    this.errorInputPhone = false;
    this.menu.enable(false);
    this.navCtrl.setDirection('back', true, 'back');
  }

  ionViewWillEnter() {
    var self = this;
    this.authService.getToken();
    if (this.authService.isLoggedIn) {
      this.loading.present();
      this.apiService.getUserProfile()
        .subscribe(result => {
          localStorage.setItem('profile', JSON.stringify(result.profile));
          self.loading.dismiss()
          self.navCtrl.navigateRoot('/dashboard/home');
      },
      error => {
        self.loading.dismiss();
        self.authService.logout();
      });
    }
  }

  ngOnInit() {

  }

  checkIsEnabled() {
    if (this.phoneNumber && this.phoneNumber.length >= PHONE_LENGTH_VN) {
      this.errorInputPhone = false;
      return true;
    }
    return false;
  }

  ChangeLogin() {
    this.navCtrl.navigateForward('/login/' + this.phoneNumber);
  }

  sendSMS(){
    var self = this;
    this.loading.present();
    this.apiService.resentRegisterCode(this.phoneNumber).subscribe(result => {
      self.loading.dismiss();
      self.presentModal();
    },
    error => {
      self.loading.dismiss();
    });
  }

  SkipLogin(){
    if (this.phoneNumber && this.phoneNumber.length >= PHONE_LENGTH_VN) {
      this.errorInputPhone = false;
      this.sendSMS();
    }else{
      this.errorInputPhone = true;
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PincodeRegisterPage,
      componentProps: {
        "phoneNumber": this.phoneNumber,
      },
      cssClass: "custom-modal-wrapper"
    });

    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned !== null) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
        if(dataReturnedResult.result == '0'){
          this.navCtrl.navigateForward('/register-password/' + this.phoneNumber + "/" + dataReturnedResult.token);
        }else{

        }
      }
    });

    return await modal.present();
  }
}
