import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-popup-change-time-order',
  templateUrl: './popup-change-time-order.page.html',
  styleUrls: ['./popup-change-time-order.page.scss'],
})
export class PopupChangeTimeOrderPage implements OnInit {
  message: string = '';
  orderHistory = null;
  timeDeliver = '';
  time_deliver_class = '';
  dateNow = new Date().toJSON();

  constructor(
    private modalController: ModalController,
    private translate: TranslateService,
    private apiService: ApiService,
    private loading: LoadingService,
    private navParams: NavParams,
    private alertService: AlertService,
  ) {}

  ngOnInit() {
    this.orderHistory = this.navParams.data.orderHistory;
    this.timeDeliver =  this.orderHistory?.timeDeliver
    this.ionChangeStartTime();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  eventSendRating() {
    this.loading.present();
    
    this.apiService.changeTimeDeliveryOrder(this.orderHistory._id, this.timeDeliver).subscribe(
      (result) => {
        this.alertService.presentToast(this.translate.instant('CHANGE_TIME_DELIVER_ORDER.success_alert'));
        this.loading.dismiss();
        this.modalController.dismiss(result.orderHistoryV2);
      },
      (error) => {
        this.loading.dismiss();
        this.alertService.presentToast(this.translate.instant('CHANGE_TIME_DELIVER_ORDER.error_alert'));
      }
    );
  }
  ionChangeStartTime(){
    if (this.timeDeliver != '') {
      this.time_deliver_class = 'has-input-value';
    } else {
      this.time_deliver_class = "";
    }
  }
}
