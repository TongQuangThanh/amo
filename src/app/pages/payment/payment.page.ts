import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  heightScreen: number;
  // data
  listPaymentBills: any;
  currentPage: number;
  numberRecordOnPage: number;
  loaderToShow: any;

  constructor(
    public loadingController: LoadingController,
    platform: Platform,
    private apiService: ApiService,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) {

    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 200 - 44 - 50;
    });
  }

  ngOnInit() {
    this.listPaymentBills  = [];
    this.currentPage = 1;
    this.numberRecordOnPage = 10;
    this.showLoader();
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', null);
  }

  getPaymentLogs(page: number, limit: number, category: string, search: string, event: any) {
    this.apiService.getListPaymentLog(page, limit, category, search)
      .subscribe(result => {
        this.listPaymentBills = this.listPaymentBills.concat(result.paymentBills);
        if (event) {
          event.target.complete();
        }
        this.loadingController.dismiss();
    });
  }

  loadData(event) {
    this.currentPage++;
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', event);
  }

  detailPage(event) {
    console.log(event);
  }

  paymentClick(event) {
    console.log(event);
    event.stopPropagation();
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Loading content'
    }).then((res) => {
      res.present();
    });
  }

  formatString(stringDate: string) {
    return moment(stringDate).format('DD-MM-YYYY');
  }
}
