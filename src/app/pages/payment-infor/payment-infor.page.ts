import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ConstService } from '../../utils/const.service'
import { LoadingService } from '../../services/loading/loading.service';
import { SelectorFlags } from '@angular/compiler/src/core';
import { UtilsService } from '../../utils/utils.service';
import { ModalController } from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';


import { PopupPaymentCashPage } from '../popup-payment-cash/popup-payment-cash.page';
import { PopupPaymentTransferPage } from '../popup-payment-transfer/popup-payment-transfer.page';
import { PopupPaymentOnlinePage } from '../popup-payment-online/popup-payment-online.page';
import { PopupPaymentSuccessPage } from '../popup-payment-success/popup-payment-success.page';
import { PopupComplainPage } from '../popup-complain/popup-complain.page';

@Component({
  selector: 'app-payment-infor',
  templateUrl: './payment-infor.page.html',
  styleUrls: ['./payment-infor.page.scss'],
})
export class PaymentInforPage implements OnInit {

  titlePage: string;
  totalCash: number;
  listPaymentContent: any;
  paymentStartAt: string;
  paymentEndAt : string;
  paymentCategoryTranfer: any;
  paymentID: string;
  managementFeeEnable: any;
  paymentStatus: any;
  paymentType: any;
  paymentCategoryCash: any;
  appartmentInfor: any;
  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private clipboard: Clipboard,
    private translate: TranslateService,
    private alertService: AlertService
  ) { }
  ngOnInit() {
    this.paymentID = this.route.snapshot.paramMap.get('id');
    this.listPaymentContent = [];
    this.paymentType = "cash";
    this.getPaymentDetail(this.paymentID);
  }

  getPaymentDetail(paymentID: string) {
    const self = this;
    this.loading.present();
    this.apiService.getPaymentDetail(paymentID)
      .subscribe(result => {
        self.totalCash = result.paymentBill.total;
        self.titlePage = result.paymentBill.payment.title;
        self.paymentStartAt = result.paymentBill.payment.paymentStartAt;
        self.paymentCategoryTranfer = result.paymentBill.category.transfer;
        self.paymentCategoryCash = result.paymentBill.category.cash;
        self.paymentEndAt = result.paymentBill.payment.paymentEndAt;
        self.listPaymentContent = result.paymentBill.content;
        self.paymentStatus = result.paymentBill.status;
        self.appartmentInfor = result.paymentBill.apartment.title + " - " + result.paymentBill.campaign.title;
        let today = new Date();
        let endAt = new Date(result.paymentBill.payment.paymentEndAt);
        if (today > endAt && self.paymentStatus  == "publish") {
          self.paymentStatus = "outdate";
        }
        self.managementFeeEnable = new Array(self.listPaymentContent.length).fill(false);
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  formatMoney(stringValue) {
    let n = parseInt(stringValue);
    return n.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
    });
  }

  convertText(textInput:string){
    if(textInput && textInput.length > 0){
      return textInput.replace(/\n/ig, '<br/>');
    }else{
      return "";
    }
  }

  backScreen(event){
    this.navCtrl.back({
      animated: true,
      animationDirection: 'back'
    });
  }

  showListComment(){
    this.navCtrl.navigateForward('/payment-comment/' + this.paymentID);
  }

  toggleGroupManagementFee(indexElement:number){
    this.managementFeeEnable[indexElement] = !this.managementFeeEnable[indexElement];
  }
  isGroupManagementFeeShown(indexElement:number){
    return this.managementFeeEnable[indexElement];
  }

  async paymentCashModal() {
    this.paymentType = "cash";
    var self = this;
    const modal = await this.modalController.create({
      component: PopupPaymentCashPage,
      componentProps: {
        cash: self.paymentCategoryCash,
        date: self.formatString(self.paymentEndAt)
      },
      cssClass: 'popupPaymentCash-page-custom'
    });
    return await modal.present();
  }
  async paymentTransferModal() {
    this.paymentType = "transfer";
    var self = this;
    const modal = await this.modalController.create({
      component: PopupPaymentTransferPage,
      componentProps: {
        transfer: self.paymentCategoryTranfer
      },
      cssClass: 'popupPaymentTransfer-page-custom'
    });
    return await modal.present();
  }
  async paymentOnlineModal() {
    this.paymentType = "online";
    const modal = await this.modalController.create({
      component: PopupPaymentOnlinePage,
      cssClass: 'popupPaymentOnline-page-custom'
    });
    return await modal.present();
  }
  async paymentSuccessModal() {
    const modal = await this.modalController.create({
      component: PopupPaymentSuccessPage,
      cssClass: 'popupPaymentSuccess-page-custom'
    });
    return await modal.present();
  }
  async paymentComplainModal() {
    var self = this;
    const modal = await this.modalController.create({
      component: PopupComplainPage,
      componentProps: {
        id: self.paymentID
      },
      cssClass: 'popupPaymentComplain-page-custom'
    });
    return await modal.present();
  }
  payTheBill() {
    this.loading.present();
    const self = this;
    const params = {
      bill: this.paymentID,
      type: this.paymentType,
      bank: "",
      amount: this.totalCash,
      note: ""
    }
    this.apiService.postPayTheBill(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.paymentSuccessModal();
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast(error.error.message);
    });
  }
}
