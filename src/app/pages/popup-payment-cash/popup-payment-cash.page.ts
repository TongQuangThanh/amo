import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-payment-cash',
  templateUrl: './popup-payment-cash.page.html',
  styleUrls: ['./popup-payment-cash.page.scss'],
})
export class PopupPaymentCashPage implements OnInit {
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
