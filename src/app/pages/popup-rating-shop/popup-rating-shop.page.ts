import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-popup-rating-shop',
  templateUrl: './popup-rating-shop.page.html',
  styleUrls: ['./popup-rating-shop.page.scss'],
})
export class PopupRatingShopPage implements OnInit {
  message: string = '';
  orderHistoryId = '';
  rating_value_popup = 50;

  constructor(
    private modalController: ModalController,
    private translate: TranslateService,
    private apiService: ApiService,
    private loading: LoadingService,
    private navParams: NavParams,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    this.orderHistoryId = this.navParams.data.orderHistoryId;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  convertFormatMoney(value) {
    value = value.toString();
    let convert1 = '';
    let convert2 = '';
    let count1 = value.length;
    for (let i = 1; i <= count1; i++) {
      if (i % 3 == 0 && i != count1) {
        convert1 = convert1 + value[count1 - i] + '.';
      } else {
        convert1 = convert1 + value[count1 - i];
      }
    }
    let count2 = convert1.length;
    for (let i = 1; i <= count2; i++) {
      convert2 = convert2 + convert1[count2 - i];
    }
    return convert2;
  }

  eventSendRating() {
    var self = this;
    this.loading.present();
    var data_rate = 0;
    if (self.rating_value_popup > 87) {
      data_rate = 5;
    } else if (self.rating_value_popup > 67) {
      data_rate = 4;
    } else if (self.rating_value_popup > 47) {
      data_rate = 3;
    } else if (self.rating_value_popup > 27) {
      data_rate = 2;
    } else if (self.rating_value_popup > 7) {
      data_rate = 1;
    } else {
      data_rate = 0;
    }
    this.apiService.putOrderProductRateStarShop(self.orderHistoryId, data_rate, self.message).subscribe(
      (result) => {
        self.alertService.presentToast(this.translate.instant('COMMON.message_rate_user_success'));
        self.loading.dismiss();
        this.modalController.dismiss();
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }
}
