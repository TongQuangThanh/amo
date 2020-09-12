import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ConstService } from '../../utils/const.service'
import { LoadingService } from '../../services/loading/loading.service';
import { SelectorFlags } from '@angular/compiler/src/core';
import { UtilsService } from '../../utils/utils.service';
import { ModalController } from '@ionic/angular';

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
  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.paymentID = this.route.snapshot.paramMap.get('id');
    this.listPaymentContent = [];

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
        self.paymentEndAt = result.paymentBill.payment.paymentEndAt;
        self.listPaymentContent = result.paymentBill.content;
        self.paymentStatus = result.paymentBill.status;
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
    const modal = await this.modalController.create({
      component: PopupPaymentCashPage,
      cssClass: 'popupPaymentCash-page-custom'
    });
    return await modal.present();
  }
  async paymentTransferModal() {
    const modal = await this.modalController.create({
      component: PopupPaymentTransferPage,
      cssClass: 'popupPaymentTransfer-page-custom'
    });
    return await modal.present();
  }
  async paymentOnlineModal() {
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
    const modal = await this.modalController.create({
      component: PopupComplainPage,
      cssClass: 'popupPaymentComplain-page-custom'
    });
    return await modal.present();
  }
}
