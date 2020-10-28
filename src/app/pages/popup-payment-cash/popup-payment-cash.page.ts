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
  date: any;
  cash: any;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private navParams: NavParams,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.date = this.navParams.data.date;
    this.cash = this.navParams.data.cash;
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
