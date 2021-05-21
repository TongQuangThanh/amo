import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.page.html',
  styleUrls: ['./payment-success.page.scss'],
})
export class PaymentSuccessPage implements OnInit {
  heightScreen: number;
  // data
  listPaymentBills = [];
  listDataConvert: any;
  currentPage: number;
  numberRecordOnPage: number;
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
    
  }

  ionViewWillEnter() {}

  goBackHome() {
    this.navCtrl.navigateForward('/dashboard/home');
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
