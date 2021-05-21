import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-popup-payment-transfer',
  templateUrl: './popup-payment-transfer.page.html',
  styleUrls: ['./popup-payment-transfer.page.scss'],
})
export class PopupPaymentTransferPage implements OnInit {
  selectedLanguage:string;
  dataTransfer: any;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private navParams: NavParams,
    private clipboard: Clipboard,
    private translate: TranslateService,
    private alertService: AlertService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.dataTransfer = this.navParams.data.transfer;
  }
  copyBankNumber() {
    this.clipboard.copy(this.dataTransfer.bankAccountNumber);
    this.alertService.presentToast(this.translate.instant('MY_HOME.message_copy'));
    // this.closeModal();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
