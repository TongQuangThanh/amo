import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-popup-open-market',
  templateUrl: './popup-open-market.page.html',
  styleUrls: ['./popup-open-market.page.scss'],
})
export class PopupOpenMarketPage implements OnInit {
  constructor(private modalController: ModalController,  private navCtrl: NavController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
    this.navCtrl.navigateForward('/resident-market');
  }
}
