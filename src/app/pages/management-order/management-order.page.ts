import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
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
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.data_history = [];
    this.getAllOrderHistorysByProvider();
  }
  getAllOrderHistorysByProvider() {
    var self = this;
    this.apiService.getListOrderHistorysByProvider()
      .subscribe(result => {
        self.data_history = [];
        result.ordersHistory.forEach(product => {
          if (self.data_history.length == 0) {
            self.data_history = [{
              id_tab: "0",
              title: self.translate.instant('SERVICE_45.tab_all_title'),
              data: []
            }];
          }
          let index = self.getIndexCategoryInList(product.status);
          let status_order_translate = '';
          if (product.status == 'processing') {
            status_order_translate = self.translate.instant('SERVICE_45.tab_processing_title');
          } else if (product.status == 'accepted-provider') {
            status_order_translate = self.translate.instant('SERVICE_45.tab_accepted_provider_title');
          } else if (product.status == 'accepted-user') {
            status_order_translate = self.translate.instant('SERVICE_45.tab_accepted_user_title');
          } else if (product.status == 'finish') {
            status_order_translate = self.translate.instant('SERVICE_45.tab_finish_title');
          } else if (product.status == 'cancel-user') {
            status_order_translate = self.translate.instant('SERVICE_45.tab_cancel_user_title');
          } else if (product.status == 'cancel-provider') {
            status_order_translate = self.translate.instant('SERVICE_45.tab_cancel_provider_title');
          }
          if (index < 0 && status_order_translate != '') {
            self.data_history.push({
              id_tab: product.status,
              title: status_order_translate,
              data: []
            });
            index = self.data_history.length - 1;
          }
          if (status_order_translate != '') {
            let money = 0;
            if (product.orderInfor && product.orderInfor.length > 0) {
              product.orderInfor.forEach(record => {
                money = money + record.number * record.price;
              })
            }
            let money_convert = self.convertFormatMoney(money);
            var date = new Date(product.orderAt);
            var date_convert = this.datePipe.transform(date,"dd/MM/yyyy");
            var order_address = product.appartment.title + ' - ' + product.appartment.campaign.title + ', ' + product.appartment.campaign.address
            let object = {
              _id: product._id,
              status: product.status ? product.status : "",
              text_rate: product.stars,
              title: product.requestShopProduct ? product.requestShopProduct.title : "",
              money: money_convert,
              avatar: product.createdBy.avatar,
              name: product.createdBy.displayName,
              role: "CEO",
              code_orders: product._id,
              date_time: date_convert,
              orderInfor: product.orderInfor,
              createdBy: product.createdBy,
              order_address: order_address
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
    // localStorage.setItem('data-management-order', JSON.stringify(object));
    // this.navCtrl.navigateForward('/management-order-detail');
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
}
