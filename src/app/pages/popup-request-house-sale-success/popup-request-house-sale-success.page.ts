import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-popup-request-house-sale-success',
  templateUrl: './popup-request-house-sale-success.page.html',
  styleUrls: ['./popup-request-house-sale-success.page.scss'],
})
export class PopupRequestHouseSaleSuccessPage implements OnInit {
  constructor(private modalController: ModalController,  private navCtrl: NavController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
    this.navCtrl.navigateForward('/dashboard/services');
  }
}
