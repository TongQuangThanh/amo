import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { ConstService } from '../../utils/const.service'
import { LoadingService } from '../../services/loading/loading.service';
import { SelectorFlags } from '@angular/compiler/src/core';

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

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    const paymentID = this.route.snapshot.paramMap.get('id');
    this.listPaymentContent = [];

    this.getPaymentDetail(paymentID);
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
        console.log(self.paymentCategoryTranfer);
        self.paymentEndAt = result.paymentBill.payment.paymentEndAt;
        self.listPaymentContent = result.paymentBill.content;
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }

  formatString(stringDate: string) {
    return moment(stringDate).format('DD-MM-YYYY');
  }

  formatMoney(stringValue) {
    let n = parseInt(stringValue);
    return n.toFixed(0).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
    });
  }

  backScreen(event){
    this.navCtrl.back({
      animated: true,
      animationDirection: 'back'
    });
  }

}
