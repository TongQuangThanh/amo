import { Component, OnInit, ViewChild  } from '@angular/core';
import { Platform, NavController, NavParams } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  heightScreen: number;
  // data
  listPaymentBills: any;
  listDataConvert: any;
  currentPage: number;
  numberRecordOnPage: number;
  segmentModel: string = "all";
  today: any;
  myDate: String = new Date().toISOString();
  totalPayment: string = "-";

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private platform: Platform,
    private alertService: AlertService,
    private apiService: ApiService,
    private navCtrl: NavController,
    // public navParams: NavParams, 
    private nativePageTransitions: NativePageTransitions) {
      
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 200 - 44 - 50;
    });
  }

  ngOnInit() {
    this.listPaymentBills  = [];
  }

  ionViewWillEnter(){
    this.listPaymentBills  = [];
    this.currentPage = 1;
    this.numberRecordOnPage = 1000;
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', null, true);
  }

  getPaymentLogs(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    this.loading.present();
    const self = this;
    this.apiService.getListPayment(page, limit, category, search)
      .subscribe(result => {
        if (isRefresh) {
          const listPaymentNoNull = [];
          for(let i=0;i<result.paymentBills.length;i++){
            if(result.paymentBills[i].payment){
              listPaymentNoNull.push(result.paymentBills[i]);
            }
          }
          self.listPaymentBills = listPaymentNoNull;
        } else {
          for(let i=0;i<result.paymentBills.length;i++){
            if(result.paymentBills[i].payment){
              self.listPaymentBills.push(result.paymentBills[i]);
            }
          }
        }
        if (event) {
          event.target.complete();
        }
        self.convertDataPayment();
        if(page == 1){
          self.getTotalPayment();
        }
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  convertDataPayment() {
    var self = this;
    this.listDataConvert = [];
    self.listPaymentBills.forEach(payment => {
      if (self.listDataConvert.length == 0) {
        self.listDataConvert = [{
          id_tab: "0",
          title: self.translate.instant('PAYMENT.all_payment'),
          data: []
        }];
      }
      let index = self.getIndexCategoryInList(payment.category._id);
      if (index < 0) {
        self.listDataConvert.push({
          id_tab: payment.category._id,
          title: payment.category.title,
          data: []
        });
        index = self.listDataConvert.length - 1;
      }
      let today = new Date();
      let endAt = new Date(payment.payment.endAt);
      if (today > endAt && payment.status == "publish") {
        payment.status = "outdate";
      }
      self.listDataConvert[index]['data'].push(payment);
      let index_all = self.getIndexCategoryInList("0");
      self.listDataConvert[index_all]['data'].push(payment);
    });
  }
  getIndexCategoryInList(id_tab) {
    var self = this;
    let index = -1;
    let index_value = -1;
    self.listDataConvert.forEach(object => {
      index++;
      if (object.id_tab == id_tab) {
        index_value = index;
      }
    });
    return index_value;
  }

  getTotalPayment() {
    var self = this;
    var total = 0;
    // this.listPaymentBills.forEach(element => {
    //   var dateCreatePayment = new Date(element.createdAt);
    //   var currentDate = new Date();
    //   var startMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 0, 0, 0, 0);
    //   var previous = new Date(startMonth.setMonth(startMonth.getMonth()-1))

    //   if (element.status == 'publish' && (previous <= dateCreatePayment && dateCreatePayment <= currentDate)) {
    //     total += element.total;
    //   }
    // });
    if(this.listPaymentBills.length > 0){
      self.totalPayment = this.listPaymentBills[0].total;
    }
  }

  loadData(event) {
    this.currentPage++;
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', event, false);
  }

  detailPage(event) {
    // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/payment-infor/' + event.currentTarget.id);
  }

  paymentClick(event) {
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    this.alertService.presentToast(this.translate.instant('COMMON.maintain'));
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = 2000;
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', event, true);
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  formatMoney(stringValue) {
    let n = parseInt(stringValue);
    if (n) {
      return n.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
      });
    } else {
      return "-";
    }
  }

  paymentNow(){
    this.alertService.presentToast(this.translate.instant('COMMON.maintain'));
  }

}
