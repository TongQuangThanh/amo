import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController, AlertController  } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {
  data_history: any;
  data_history_order: any;
  rating_value: any;
  rating_value_popup: any;
  flag_show_hide_popup: any;
  flag_show_hide_popup_complain: any;
  form_note:any;
  form_user_complain:any;

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    public alertController: AlertController,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.data_history = {};
    this.rating_value = 0;
    this.rating_value_popup = 0;
    this.data_history_order = [];
    this.flag_show_hide_popup = false;
    this.flag_show_hide_popup_complain = false;
    this.form_note = "";
    this.form_user_complain = "";
    this.getDataOrderHistory();
  }
  async presentAlert(message) {
    var self = this;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: self.translate.instant('COMMON.information'),
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentAlertComplain(message) {
    var self = this;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: self.translate.instant('COMMON.complain'),
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  onRateChange(rating){
  }
  getDataOrderHistory(){
    var self = this;
    var data = JSON.parse(localStorage.getItem('data-order-history'));
    this.data_history = data;
    let index = data.orderInfor.length;
    data.orderInfor.forEach(product => {
      index--;
      let money = self.convertFormatMoney(product.number * product.price);
      let class_border = 'border-bottom-col';
      if (index == 0) {
        class_border = '';
      }
      let object = {
        _id: product._id,
        number: product.number,
        price: product.price,
        title: product.shopProduct.title,
        money: money,
        class_border: class_border
      }
      self.data_history_order.push(object);
    });
  }
  convertFormatMoney(value) {
    value = value.toString();
    let convert1 = "";
    let convert2 = "";
    let count1 = value.length;
    for(let i = 1; i <= count1; i++) {
      if (i % 3 == 0 && i != count1) {
        convert1 = convert1 + value[count1 - i] + '.';
      } else {
        convert1 = convert1 + value[count1 - i];
      }
    }
    let count2 = convert1.length
    for(let i = 1; i <= count2; i++) {
      convert2 = convert2 + convert1[count2 - i];
    }
    return convert2;
  }
  moveToChatToShopPage() {
    this.navCtrl.navigateForward('/chat-to-shop');
  }
  eventButtonClosePopup(i) {
    if (i == 1) {
      this.flag_show_hide_popup = false;
      this.rating_value_popup = 0;
    } else {
      this.flag_show_hide_popup_complain = false;
      this.form_user_complain = "";
    }
    
  }
  eventShowDialog(i) {
    if (i == 1) {
      if (this.rating_value_popup == 0) {
        this.flag_show_hide_popup = true;
      }
    } else {
      this.flag_show_hide_popup_complain = true;
    }
    
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
    this.apiService.putOrderProductRateStarUser(
      self.data_history._id,
      data_rate,
      self.form_note
    ).subscribe(result => {
      self.loading.dismiss();
      self.data_history.text_rate = data_rate;
      this.rating_value = this.rating_value_popup;
      self.flag_show_hide_popup = false;
      self.presentAlert(
        self.translate.instant('COMMON.message_rate_user_success')
      );
    },
    error => {
      self.loading.dismiss();
    });
  }
  eventButtonCancel() {
    var self = this;
    this.loading.present();
    this.apiService.putOrderProductCancelUser(
      self.data_history._id
    ).subscribe(result => {
      self.loading.dismiss();
      self.data_history.status = 'cancel-user';
      self.presentAlert(
        self.translate.instant('COMMON.message_cancel_success')
      );
    },
    error => {
      self.loading.dismiss();
    });
  }
  eventButtonConfirmUser() {
    var self = this;
    this.loading.present();
    this.apiService.putOrderHistoryUserConfirm(
      self.data_history._id
    ).subscribe(result => {
      self.loading.dismiss();
      self.data_history.status = 'accepted-user';
      self.presentAlert(
        self.translate.instant('COMMON.message_confirm_success')
      );
    },
    error => {
      self.loading.dismiss();
    });
  }
  eventButtonUserComplain() {
    var self = this;
    this.loading.present();
    this.apiService.putOrderHistoryUserComplain(
      self.data_history._id,
      self.form_user_complain
    ).subscribe(result => {
      self.loading.dismiss();
      self.presentAlert(
        self.translate.instant('COMMON.message_complain_success')
      );
    },
    error => {
      self.loading.dismiss();
    });
  }
  showComplainText(event, data) {
    this.presentAlertComplain(data.userComplain);
    event.preventDefault();
  }
}
