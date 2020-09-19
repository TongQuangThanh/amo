import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController, AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-management-order',
  templateUrl: './management-order.page.html',
  styleUrls: ['./management-order.page.scss'],
})
export class ManagementOrderPage implements OnInit {
  data_history: any;

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private datePipe: DatePipe,
    private translate: TranslateService,
    public alertController: AlertController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.data_history = [];
    this.getAllOrderHistorysByProvider();
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
  getAllOrderHistorysByProvider() {
    var self = this;
    this.loading.present();
    this.apiService.getListOrderHistorysByProvider()
      .subscribe(result => {
        self.data_history = [
          {
            id_tab: "0",
            title: self.translate.instant('SERVICE_45.tab_all_title'),
            data: []
          },
          {
            id_tab: "processing",
            title: self.translate.instant('SERVICE_45.tab_processing_title'),
            data: []
          },
          {
            id_tab: "groupon",
            title: self.translate.instant('SERVICE_45.tab_groupon_title'),
            data: []
          },
          {
            id_tab: "delivery",
            title: self.translate.instant('SERVICE_45.tab_accepted_title'),
            data: []
          },
          {
            id_tab: "finish",
            title: self.translate.instant('SERVICE_45.tab_finish_title'),
            data: []
          },
          {
            id_tab: "cancel",
            title: self.translate.instant('SERVICE_45.tab_cancel_title'),
            data: []
          }
        ];
        result.ordersHistory.forEach(product => {
          var is_groupon = false;
          if (product.orderInfor.length == 1 && product.orderInfor[0].promotionCode) {
            is_groupon = true;
          }
          let status_order = product.status;
          let id_tab = 'processing';

          if (status_order == 'processing') {
            id_tab = "processing";
          } else if (status_order == 'accepted-provider') {
            if (is_groupon) {
              id_tab = "groupon";
              if (product.userPromotionCodeConfirmText) {
                status_order = "confirm-user";
              } else {
                status_order = "accepted-provider-groupon";
              }
            } else {
              id_tab = "delivery";
            }
          } else if (status_order == 'accepted-user') {
            id_tab = "delivery";
          } else if (status_order == 'finish') {
            id_tab = "finish";
          } else if (status_order == 'cancel-user') {
            id_tab = "cancel";
          } else if (status_order == 'cancel-provider') {
            id_tab = "cancel";
          }
          let index = self.getIndexCategoryInList(id_tab);
          if (index > -1) {
            let money = 0;
            if (product.orderInfor && product.orderInfor.length > 0) {
              product.orderInfor.forEach(record => {
                money = money + record.number * record.price;
              })
            }
            let money_convert = self.convertFormatMoney(money);
            var date = new Date(product.orderAt);
            var date_convert = this.datePipe.transform(date,"dd/MM/yyyy");
            var order_address = product.appartment.title + ' - ' + product.appartment.campaign.title + ', ' + product.appartment.campaign.address;
            let object = {
              _id: product._id,
              id_tab: id_tab,
              status: status_order,
              text_rate: product.starsProvider,
              title: product.requestShopProduct ? product.requestShopProduct.title : "",
              money: money_convert,
              avatar: product.createdBy.avatar,
              name: product.createdBy.displayName,
              role: "CEO",
              code_orders: product._id,
              date_time: date_convert,
              orderInfor: product.orderInfor,
              createdBy: product.createdBy,
              order_address: order_address,
              is_groupon: is_groupon,
              message: product.userPromotionCodeConfirmText ? product.userPromotionCodeConfirmText : "",
              userComplain: product.userComplain ? product.userComplain : ""
            }
            self.data_history[index]['data'].push(object);
            let index_all = self.getIndexCategoryInList("0");
            self.data_history[index_all]['data'].push(object);
          }
        });
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  gotoManagementOrderDetail(object) {
    localStorage.setItem('data-management-order', JSON.stringify(object));
    this.navCtrl.navigateForward('/management-order-detail');
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
  getIndexCategoryInList(id_tab) {
    var self = this;
    let index = -1;
    let index_value = -1;
    self.data_history.forEach(object => {
      index++;
      if (object.id_tab == id_tab) {
        index_value = index;
      }
    });
    return index_value;
  }
  moveToChatToShopPage(object) {
    localStorage.setItem('data-management-order', JSON.stringify(object));
    this.navCtrl.navigateForward('/chat-to-shop');
  }
  showComplainText(event, data) {
    this.presentAlertComplain(data.userComplain);
    event.preventDefault();
  }
}
