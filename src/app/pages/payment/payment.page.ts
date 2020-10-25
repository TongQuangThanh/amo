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
  currentPage: number;
  numberRecordOnPage: number;
  segmentModel: string = "all";
  today: any;
  myDate: String = new Date().toISOString();
  totalPayment: any;

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
    // this.listPaymentBills  = [];
    // this.currentPage = 1;
    // this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    // this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', null, false);
    this.today = Date.now();
    console.log(this.today + "is today")
  }

  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
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
          ///self.listPaymentBills = result.paymentBills;
          const listPaymentNoNull = [];
          for(let i=0;i<result.paymentBills.length;i++){
            if(result.paymentBills[i].payment){
              listPaymentNoNull.push(result.paymentBills[i]);
            }
          }
          self.listPaymentBills = listPaymentNoNull;
        } else {
          //self.listPaymentBills = self.listPaymentBills.concat(result.paymentBills);
          for(let i=0;i<result.paymentBills.length;i++){
            if(result.paymentBills[i].payment){
              self.listPaymentBills.push(result.paymentBills[i]);
            }
          }
        }
        
        console.log('paymentbill'+self.listPaymentBills)
        if (event) {
          event.target.complete();
        }
        self.loading.dismiss();
        self.getTotalPayment();
    },
    error => {
      self.loading.dismiss();
    });
  }

  getTotalPayment() {
    var self = this;
    self.totalPayment = 0;
    this.listPaymentBills.forEach(element => {
      if (element.status == 'publish') {
        self.totalPayment += element.total;
      }
    });
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
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', event, true);
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

  paymentNow(){
    this.alertService.presentToast(this.translate.instant('COMMON.maintain'));
  }

}
