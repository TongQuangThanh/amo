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
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
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
    this.getAllOrderHistorys();
  }
  getAllOrderHistorys() {
    var self = this;
    this.apiService.getListOrderHistorys()
      .subscribe(result => {
        self.data_history = [];
        result.ordersHistory.forEach(product => {
          if (self.data_history.length == 0) {
            self.data_history = [{
              id_tab: "0",
              title: self.translate.instant('SERVICE_35.tab_all_title'),
              data: []
            }];
          }
          let index = self.getIndexCategoryInList(product.requestShopProduct.category._id);
          if (index < 0) {
            self.data_history.push({
              id_tab: product.requestShopProduct.category._id,
              title: product.requestShopProduct.category.title,
              data: []
            });
            index = self.data_history.length - 1;
          }
          let money = 0;
          if (product.orderInfor && product.orderInfor.length > 0) {
            product.orderInfor.forEach(record => {
              money = money + record.number * record.price;
            })
          }
          let money_convert = self.convertFormatMoney(money);
          var date = new Date(product.orderAt);
          var date_convert = this.datePipe.transform(date,"dd/MM/yyyy hh:mm");
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
            createdBy: product.createdBy
          }
          self.data_history[index]['data'].push(object);

          let index_all = self.getIndexCategoryInList("0");
          self.data_history[index_all]['data'].push(object);
        });
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  gotoHistoryDetail(object) {
    localStorage.setItem('data-order-history', JSON.stringify(object));
    this.navCtrl.navigateForward('/history-detail');
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
    localStorage.setItem('data-order-history', JSON.stringify(object));
    this.navCtrl.navigateForward('/chat-to-shop');
  }
}
