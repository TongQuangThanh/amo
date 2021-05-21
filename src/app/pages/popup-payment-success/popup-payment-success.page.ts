import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-payment-success',
  templateUrl: './popup-payment-success.page.html',
  styleUrls: ['./popup-payment-success.page.scss'],
})
export class PopupPaymentSuccessPage implements OnInit {
  selectedLanguage:string;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }
  listPayment(){
    var self = this;
    this.closeModal();
    setTimeout(function() {
      self.navCtrl.navigateForward('dashboard/payment');
    }, 300);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
