import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-registration-success',
  templateUrl: './popup-registration-success.page.html',
  styleUrls: ['./popup-registration-success.page.scss'],
})
export class PopupRegistrationSuccessPage implements OnInit {
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
    const navigationState : NavigationExtras = {
      state: {
        isReload: true
      },
    };
    this.navCtrl.navigateForward(['/dashboard/requests'], navigationState);
  }

}
