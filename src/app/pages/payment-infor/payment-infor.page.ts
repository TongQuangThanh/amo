import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { ModalController } from '@ionic/angular';

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
  paymentEndAt: string;
  paymentCategoryTranfer: any;
  paymentID: string;
  managementFeeEnable: any;
  paymentStatus: any;
  settingPaymentMode: any;
  paymentType: any;
  paymentCategoryCash: any;
  paymentUpdateAt = '';
  appartment: any;
  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.paymentID = this.route.snapshot.paramMap.get('id');
    this.listPaymentContent = [];
    this.paymentType = 'cash';
    this.getPaymentDetail(this.paymentID);
  }

  getPaymentDetail(paymentID: string) {
    const self = this;
    this.loading.present();
    this.apiService.getPaymentDetail(paymentID).subscribe(
      (result) => {
        self.totalCash = result.paymentBill.total;
        self.titlePage = result.paymentBill.payment.title;
        self.paymentStartAt = result.paymentBill.payment.paymentStartAt;
        self.paymentCategoryTranfer = result.paymentBill.category.transfer;
        self.paymentCategoryCash = result.paymentBill.category.cash;
        self.paymentEndAt = result.paymentBill.payment.paymentEndAt;
        self.listPaymentContent = result.paymentBill.content;
        self.paymentStatus = result.paymentBill.status;
        self.settingPaymentMode = result.paymentBill.campaign.settingPaymentMode;
        self.appartment = result.paymentBill.apartment.title + " " + result.paymentBill.campaign.title;
        this.paymentUpdateAt = result.paymentBill.updatedAt;
        let today = new Date();
        let endAt = new Date(result.paymentBill.payment.paymentEndAt);
        if (today > endAt && self.paymentStatus == 'publish') {
          self.paymentStatus = 'outdate';
        }
        self.managementFeeEnable = new Array(self.listPaymentContent.length).fill(false);
        self.loading.dismiss();
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
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

  backScreen(event) {
    this.navCtrl.back({
      animated: true,
      animationDirection: 'back',
    });
  }

  showListComment() {
    this.navCtrl.navigateForward('/payment-comment/' + this.paymentID);
  }

  async paymentComplainModal() {
    var self = this;
    const modal = await this.modalController.create({
      component: PopupComplainPage,
      componentProps: {
        id: self.paymentID,
      },
      cssClass: 'popupPaymentComplain-page-custom',
    });
    return await modal.present();
  }

  goPaymentConfirm() {
    this.navCtrl.navigateForward('/payment-confirm/' + this.paymentID);
  }
}
