import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-payment-fail',
  templateUrl: './payment-fail.page.html',
  styleUrls: ['./payment-fail.page.scss'],
})
export class PaymentFailPage implements OnInit {
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

  ngOnInit() {}

  ionViewWillEnter() {}

  goBackHome() {
    this.navCtrl.navigateForward('/dashboard/home');
  }

  goBack() {
    this.navCtrl.back();
  }
}
