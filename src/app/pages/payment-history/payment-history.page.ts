import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ConstService } from 'src/app/utils/const.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {
  heightScreen: number;
  // data
  listPaymentBills = [];
  listPaymentBillsPaid = [];
  listPaymentBillsUnpaid = [];
  listPaymentBillsPending = [];
  listPaymentBillsOutdate = [];
  listDataConvert: any;
  currentPageAll = 1;
  currentPagePaid = 1;
  currentPageUnpaid = 1;
  currentPagePending = 1;
  currentPageOutdate = 1;
  numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
  activeTabIndex = 0;

  constructor(private loading: LoadingService, private platform: Platform, private apiService: ApiService, private navCtrl: NavController) {
    this.platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 250;
    });
  }

  ngOnInit() {
    this.getPaymentLogs(this.currentPageAll, this.numberRecordOnPage, '', '', null, true);
  }

  ionViewWillEnter() {}

  getPaymentLogs(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean, status = '') {
    this.loading.present();
    const self = this;
    if (event) {
      event.target.complete();
    }
    this.apiService.getListPayment(page, limit, category, search, status).subscribe(
      (result) => {
        self.loading.dismiss();
        if (!result.paymentBills || result.paymentBills.length == 0) {
          return;
        }
        const dataFilter = [];
        result.paymentBills.forEach((bill) => {
          if (bill.payment) {
            const today = new Date();
            const endAt = new Date(bill.payment.endAt);
            if (today > endAt && bill.status == 'publish') {
              bill.status = 'outdate';
            }
            if (bill.status == 'publish' || bill.status == 'outdate') {
              bill.inOutDays = this.getDiffDays(today, endAt);
            }
            dataFilter.push(bill);
          }
        });
        this.pushDataRequest(dataFilter, isRefresh);
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

  paymentHistoryClick() {
    this.navCtrl.navigateForward('/payment-history');
  }

  detailPage(id) {
    this.navCtrl.navigateForward('/payment-infor/' + id);
  }

  loadData($event) {
    this.allApiRequest($event, true);
  }

  doRefresh(event) {
    this.listPaymentBills = [];
    this.listPaymentBillsPaid = [];
    this.listPaymentBillsUnpaid = [];
    this.listPaymentBillsPending = [];
    this.listPaymentBillsOutdate = [];
    this.currentPageAll = 1;
    this.currentPagePaid = 1;
    this.currentPageUnpaid = 1;
    this.currentPagePending = 1;
    this.currentPageOutdate = 1;
    this.allApiRequest(event);
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

  onTabChange($event) {
    this.activeTabIndex = $event.detail.index;
    this.allApiRequest(null);
  }

  allApiRequest(event, isLoadMore = false) {
    switch (this.activeTabIndex) {
      case 1:
        if (!isLoadMore && this.listPaymentBillsPaid.length == 0) {
          this.getPaymentLogs(this.currentPagePaid, this.numberRecordOnPage, '', '', event, false, 'completed');
        } else if (isLoadMore) {
          this.currentPagePaid++;
          this.getPaymentLogs(this.currentPagePaid, this.numberRecordOnPage, '', '', event, false, 'completed');
        }
        break;
      case 2:
        if (!isLoadMore && this.listPaymentBillsOutdate.length == 0) {
          this.getPaymentLogs(this.currentPageOutdate, this.numberRecordOnPage, '', '', event, false, 'outdate');
        } else if (isLoadMore) {
          this.currentPageOutdate++;
          this.getPaymentLogs(this.currentPageOutdate, this.numberRecordOnPage, '', '', event, false, 'outdate');
        }
        break;
      case 3:
        if (!isLoadMore && this.listPaymentBillsPending.length == 0) {
          this.getPaymentLogs(this.currentPagePending, this.numberRecordOnPage, '', '', event, false, 'pending');
        } else if (isLoadMore) {
          this.currentPagePending++;
          this.getPaymentLogs(this.currentPagePending, this.numberRecordOnPage, '', '', event, false, 'pending');
        }
        break;
      case 4:
        if (!isLoadMore && this.listPaymentBillsUnpaid.length == 0) {
          this.getPaymentLogs(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'publish');
        } else if (isLoadMore) {
          this.currentPageUnpaid++;
          this.getPaymentLogs(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'publish');
        }
        break;
      default:
        if (!isLoadMore && this.listPaymentBills.length == 0) {
          this.getPaymentLogs(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
        } else if (isLoadMore) {
          this.currentPageAll++;
          this.getPaymentLogs(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
        }
        break;
    }
  }

  pushDataRequest(data, isRefresh) {
    switch (this.activeTabIndex) {
      case 1:
        if (isRefresh) {
          this.listPaymentBillsPaid = data;
        } else {
          this.listPaymentBillsPaid.push(...data);
        }
        break;
      case 2:
        if (isRefresh) {
          this.listPaymentBillsOutdate = data;
        } else {
          this.listPaymentBillsOutdate.push(...data);
        }
        break;
      case 3:
        if (isRefresh) {
          this.listPaymentBillsPending = data;
        } else {
          this.listPaymentBillsPending.push(...data);
        }
        break;
      case 4:
        if (isRefresh) {
          this.listPaymentBillsUnpaid = data;
        } else {
          this.listPaymentBillsUnpaid.push(...data);
        }
        break;
      default:
        if (isRefresh) {
          this.listPaymentBills = data;
        } else {
          this.listPaymentBills.push(...data);
        }
        break;
    }
  }
}
