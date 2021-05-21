import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-popup-payment-function',
  templateUrl: './popup-payment-function.page.html',
  styleUrls: ['./popup-payment-function.page.scss'],
})
export class PopupPaymentFunctionPage implements OnInit {
  paymentMethodList = [];
  paymentCate: any;

  constructor(
    private modalController: ModalController,
    private clipboard: Clipboard,
    private alertService: AlertService,
    private translate: TranslateService,
    private translateConfigService: TranslateConfigService,
    private navParams: NavParams
  ) {
    this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.paymentCate = this.navParams.data.paymentCate;
    this.paymentMethodList = this.navParams.data.paymentMethodList || [];
  }

  changeBanksMethod(id: number) {
    this.paymentMethodList.forEach((item) => {
      if (item.key == id) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
  }

  closeModal() {
    this.modalController.dismiss({ paymentSelected: this.paymentMethodList.find(item => item.isSelected == true) });
  }

  copyBankNumber() {
    this.clipboard.copy(this.paymentCate?.transfer?.bankAccountNumber || '');
    this.alertService.presentToast(this.translate.instant('PAYMENT_INFOR.message_copy'));
  }

  formatMoney(stringValue) {
    let n = parseInt(stringValue);
    return n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
    });
  }
}
