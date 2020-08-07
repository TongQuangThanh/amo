import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-delete-vehicle',
  templateUrl: './popup-delete-vehicle.page.html',
  styleUrls: ['./popup-delete-vehicle.page.scss'],
})
export class PopupDeleteVehiclePage implements OnInit {
  selectedLanguage:string;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
