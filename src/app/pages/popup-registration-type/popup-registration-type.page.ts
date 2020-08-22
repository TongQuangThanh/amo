import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-registration-type',
  templateUrl: './popup-registration-type.page.html',
  styleUrls: ['./popup-registration-type.page.scss'],
})
export class PopupRegistrationTypePage implements OnInit {
  selectedLanguage:string;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private navCtrl: NavController,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  registParking(){
    //// this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/register-keep-vehicle');
    this.closeModal();
  }

  registGuest(){
    //// this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/registration-guest');
    this.closeModal();
  }

  registKeepVehicle(){
    this.navCtrl.navigateForward('/register-keep-vehicle');
    this.closeModal();
  }
  eventButton3(){
    this.navCtrl.navigateForward('/register-to-receive-goods');
    this.closeModal();
  }
  eventButton4(){
    this.navCtrl.navigateForward('/register-for-shipping');
    this.closeModal();
  }
}
