import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { PopupPaymentFunctionPage } from '../popup-payment-function/popup-payment-function.page';
import { PopupIframePaymentPage } from '../popup-iframe-payment/popup-iframe-payment.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.page.html',
  styleUrls: ['./payment-confirm.page.scss'],
})
export class PaymentConfirmPage implements OnInit {
  paymentMethodList = [];
  titlePage: string;
  totalCash: number;
  paidAmount: number;
  listPaymentContent: any;
  paymentStartAt: string;
  paymentEndAt: string;
  paymentID: string;
  paymentStatus: any;
  paymentType: any = "payment_cash";
  paymentUpdateAt = '';
  paymentCategory = null;
  paymentSelected = null;
  epayUserInfo = null;
  promotionMoney = 0;
  urlPayment: any;

  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    public apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private alertController: AlertController,
    private iab: InAppBrowser
  ) {}
  ngOnInit() {
    // this.epayUserInfo = this.apiService.getEpayUserStored();
    this.paymentID = this.route.snapshot.paramMap.get('id');
    this.listPaymentContent = [];
    this.paymentType = 'payment_cash';
    this.getPaymentDetail(this.paymentID);
    // this.dumyPaymentMethod();
  }

  getPaymentDetail(paymentID: string) {
    const self = this;
    this.loading.present();
    this.apiService.getPaymentDetail(paymentID).subscribe(
      (result) => {
        self.totalCash = result.paymentBill.total;
        self.paidAmount = result.paymentBill.paidAmount;
        self.titlePage = result.paymentBill.payment.title;
        self.paymentStartAt = result.paymentBill.payment.paymentStartAt;
        self.paymentCategory = result.paymentBill.category;
        self.paymentEndAt = result.paymentBill.payment.paymentEndAt;
        self.listPaymentContent = result.paymentBill.content;
        self.paymentStatus = result.paymentBill.status;
        this.paymentUpdateAt = result.paymentBill.updatedAt;
        let today = new Date();
        let endAt = new Date(result.paymentBill.payment.paymentEndAt);
        if (today > endAt && self.paymentStatus == 'publish') {
          self.paymentStatus = 'outdate';
        }
        self.loading.dismiss();
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  formatMoney(stringValue) {
    let n = parseInt(stringValue);
    return n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
    });
  }

  convertText(textInput: string) {
    if (textInput && textInput.length > 0) {
      return textInput.replace(/\n/gi, '<br/>');
    } else {
      return '';
    }
  }

  showListComment() {
    this.navCtrl.navigateForward('/payment-comment/' + this.paymentID);
  }

  async changePaymentModal() {
    const modalChangePayemt = await this.modalController.create({
      component: PopupPaymentFunctionPage,
      componentProps: {
        paymentCate: this.paymentCategory,
        paymentMethodList: this.paymentMethodList,
      },
    });
    modalChangePayemt.onDidDismiss().then((result: any) => {
      if (result || result.data) {
        this.paymentSelected = result.data.paymentSelected;
      }
    });
    return await modalChangePayemt.present();
  }

  async payTheBill() {
    const modalPay = await this.modalController.create({
      component: PopupIframePaymentPage,
      componentProps: {
        paymentID: this.paymentID, 
        totalCash: this.totalCash, 
        titlePage: this.titlePage, 
        promotionMoney: this.promotionMoney,
        urlPayment: this.urlPayment
      },
    });
    modalPay.onDidDismiss().then((result: any) => {
      const data = JSON.parse(result.data || '');
      if (!data || data.result == 1) {
        // this.navCtrl.navigateForward('/payment-fail');
        return;
      }
      // this.navCtrl.navigateForward('/payment-success');
    });
    return await modalPay.present();
  }

  openPayment() {
    // this.presentAlert(this.translate.instant('PAYMENT_INFOR.alert_comming_soon'));
    var self = this;
    // this.apiService.epaypayment(this.totalCash).subscribe((result) => {
    //   console.log(result);
    //   this.urlPayment = result.url;
    //   this.payTheBill();
    // });
    if(this.paymentType == 'payment_cash'){
      this.changePaymentModal();
    }else{
      this.loading.present();
      this.apiService.momoPayment(this.totalCash - this.promotionMoney - this.paidAmount).subscribe((result) => {
        self.loading.dismiss();
        if(result.resultCode == 0){
          self.openURLAccuracyEpay(result.deeplink);
        }else{
          self.navCtrl.navigateForward('/payment-fail');
        }
        // this.urlPayment = result.url;
        // this.payTheBill();
      },
      (error) => {
        self.loading.dismiss();
      });
    }
  }

  openURLAccuracyEpay(url: string){
    const browser = this.iab.create(url ,'_system', 'location=yes, enableviewportscale=yes');
    browser.show();
  }

  // dumyPaymentMethod() {
  //   this.paymentMethodList = [];
  //   this.epayUserInfo = this.apiService.getEpayUserStored();
  //   if (!this.epayUserInfo) {
  //     return;
  //   }
  //   this.paymentMethodList = [
  //     {
  //       key: 1,
  //       name: this.translate.instant('PAYMENT_INFOR.payment_wallet_title'),
  //       content: this.formatMoney(this.epayUserInfo.user_info.balance) + 'đ',
  //       money: this.epayUserInfo.user_info.balance,
  //       isSelected: true,
  //     },
  //     // {
  //     //   key: 2,
  //     //   name: this.translate.instant('PAYMENT_INFOR.modal_change_vietcombank'),
  //     //   content: this.translate.instant('PAYMENT_INFOR.modal_change_ref'),
  //     //   isSelected: false,
  //     // },
  //   ];
  //   this.paymentSelected = this.paymentMethodList[0];
  // }

  async presentAlert(message) {
    var self = this;
    const alert = await this.alertController.create({
      cssClass: 'comming-soon-payment-class',
      header: self.translate.instant('COMMON.information'),
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
