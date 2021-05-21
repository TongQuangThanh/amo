import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ConstService } from 'src/app/utils/const.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  heightScreen: number;
  // data
  listPaymentBills = [];
  listDataConvert: any;
  currentPage: number;
  numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
  segmentModel: string = 'all';
  today: any;
  myDate: String = new Date().toISOString();
  totalPayment = 0;

  constructor(private loading: LoadingService, private platform: Platform, private apiService: ApiService, private navCtrl: NavController) {
    this.platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 250;
    });
  }

  ngOnInit() {
    this.currentPage = 1;
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', null, true);
  }

  ionViewWillEnter() {}

  getPaymentLogs(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    this.loading.present();
    const self = this;
    if (event) {
      event.target.complete();
    }
    this.apiService.getListPayment(page, limit, category, search, 'publish').subscribe(
      (result) => {
        self.loading.dismiss();
        if (!result.paymentBills || result.paymentBills.length == 0) {
          return;
        }
        if(isRefresh) {
          this.listPaymentBills = [];
          this.totalPayment = 0;
        }
        result.paymentBills.forEach((bill) => {
          if (bill.payment) {
            let today = new Date();
            let endAt = new Date(bill.payment.endAt);
            if (today > endAt && bill.status == 'publish') {
              bill.status = 'outdate';
            }
            bill.inOutDays = this.getDiffDays(today, endAt);
            this.listPaymentBills.push(bill);
            this.totalPayment += +bill.total;
          }
        });
      },
      (error) => {
        self.loading.dismiss();
      },
      () => {
        self.loading.dismiss();
        if (event) {
          event.target.complete();
        }
      }
    );
  }

  loadData($event) {
    this.currentPage++;
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', $event, false);
  }

  paymentHistoryClick() {
    this.navCtrl.navigateForward('/payment-history');
  }

  detailPage(id) {
    this.navCtrl.navigateForward('/payment-infor/' + id);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', event, true);
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  formatMoney(stringValue) {
    let n = parseInt(stringValue);
    if (n) {
      return n.toFixed(0).replace(/./g, function (c, i, a) {
        return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
      });
    } else {
      return '-';
    }
  }
  getDiffDays(startDate: Date, endDate: Date) {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
