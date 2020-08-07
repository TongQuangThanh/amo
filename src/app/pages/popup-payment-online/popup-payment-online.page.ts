import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-payment-online',
  templateUrl: './popup-payment-online.page.html',
  styleUrls: ['./popup-payment-online.page.scss'],
})
export class PopupPaymentOnlinePage implements OnInit {
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
