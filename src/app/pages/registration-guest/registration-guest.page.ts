import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

import { PopupSelectApartmentPage } from '../popup-select-apartment/popup-select-apartment.page';
import { PopupRegistrationSuccessPage } from '../popup-registration-success/popup-registration-success.page';

@Component({
  selector: 'app-registration-guest',
  templateUrl: './registration-guest.page.html',
  styleUrls: ['./registration-guest.page.scss'],
})
export class RegistrationGuestPage implements OnInit {
  selectedLanguage:string;

  constructor(
    public modalController: ModalController,
    private translateConfigService: TranslateConfigService,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  async selectApartmentModal() {
    const modal = await this.modalController.create({
      component: PopupSelectApartmentPage,
      cssClass: 'popupSelectApartment-page-custom'
    });
    return await modal.present();
  }

  async popupRegistrationSuccessModal() {
    const modal = await this.modalController.create({
      component: PopupRegistrationSuccessPage,
      cssClass: 'popupRegistrationSuccess-page-custom'
    });
    return await modal.present();
  }
}
