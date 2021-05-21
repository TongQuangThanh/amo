import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-shop-order-result',
  templateUrl: './popup-shop-order-result.page.html',
  styleUrls: ['./popup-shop-order-result.page.scss'],
})
export class PopupShopOrderResultPage implements OnInit {
  selectedLanguage: string;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    private translate: TranslateService,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
    this.navCtrl.back();
  }
}
