import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

import { PopupSelectApartmentPage } from '../popup-select-apartment/popup-select-apartment.page';

@Component({
  selector: 'app-registration-parking',
  templateUrl: './registration-parking.page.html',
  styleUrls: ['./registration-parking.page.scss'],
})
export class RegistrationParkingPage implements OnInit {
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
}
