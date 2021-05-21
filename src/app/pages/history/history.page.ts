import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ConstService } from 'src/app/utils/const.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { PopupChangeTimeOrderPage } from '../popup-change-time-order/popup-change-time-order.page';
import { PopupRatingShopPage } from '../popup-rating-shop/popup-rating-shop.page';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  heightScreen: number;
  // data
  listHistory = [];
  listOrderProcessing = [];
  listOrderFinished = [];
  listOrderAcceptedUser = [];
  listOrderAcceptedProvider = [];
  listCancelUser = [];
  listCancelProvider = [];
  listDataConvert: any;
  currentPageAll = 1;
  currentPagePaid = 1;
  currentPageUnpaid = 1;
  currentPagePending = 1;
  currentPageOutdate = 1;
  numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
  activeTabIndex = 0;

  constructor(
    private loading: LoadingService,
    private platform: Platform,
    private apiService: ApiService,
    private navCtrl: NavController,
    public alertController: AlertController,
    private translate: TranslateService,
    public modalController: ModalController
  ) {
    this.platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 250;
    });
  }

  ngOnInit() {
    this.getListOrderHistorysV2(this.currentPageAll, this.numberRecordOnPage, '', '', null, true);
  }

  ionViewWillEnter() {}

  getListOrderHistorysV2(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean, status = '') {
    this.loading.present();
    const self = this;
    this.apiService.getListOrderHistorysV2(page, limit, category, search, status).subscribe(
      (result) => {
        self.loading.dismiss();
        if (event) {
          event.target.complete();
        }
        const ordersHistory = result?.ordersHistoryV2 || result?.ordersHistory;
        if (!ordersHistory || ordersHistory.length == 0) {
          return;
        }
        const dataFilter = [];
        ordersHistory.forEach((item) => {
          if (item.orderInfor) {
            const apartment = item?.shopHouse?.apartment;
            let address = 'AMO';
            if (apartment) {
              address = `${apartment?.title} - ${apartment?.campaign?.title}`;
            }
            const historyInfo = {
              _id: item._id,
              title: item.shopHouse.title,
              icon: item.shopHouse.thumbnail,
              status: item.status,
              listOrder: item.orderInfor,
              totalOrders: item.orderInfor.length,
              totalCost: item.orderInfor.reduce((total, order) => {
                return total + order.price * order.number;
              }, 0),
              // show/hide action buttons
              showActions: false,
              createdBy: item.createdBy,
              shopHouseId: item.shopHouse._id,
              address: address,
              timeDeliver: item.timeDeliver,
            };
            dataFilter.push(historyInfo);
          }
        });
        this.pushDataRequest(dataFilter, isRefresh);
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  paymentHistoryClick() {
    this.navCtrl.navigateForward('/payment-history');
  }

  detailPage(id) {
    this.navCtrl.navigateForward('/payment-infor/' + id);
  }

  loadData($event) {
    this.allApiRequest($event, true);
  }

  doRefresh(event) {
    this.listHistory = [];
    this.listOrderProcessing = [];
    this.listOrderFinished = [];
    this.listOrderAcceptedUser = [];
    this.listOrderAcceptedProvider = [];
    this.listCancelUser = [];
    this.listCancelProvider = [];
    this.currentPageAll = 1;
    this.currentPagePaid = 1;
    this.currentPageUnpaid = 1;
    this.currentPagePending = 1;
    this.currentPageOutdate = 1;
    this.allApiRequest(event);
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

  onTabChange($event) {
    this.activeTabIndex = $event.detail.index;
    this.allApiRequest(null);
  }

  allApiRequest(event, isLoadMore = false) {
    switch (this.activeTabIndex) {
      case 1:
        if (!isLoadMore && this.listOrderProcessing.length == 0) {
          this.getListOrderHistorysV2(this.currentPagePaid, this.numberRecordOnPage, '', '', event, false, 'processing');
        } else if (isLoadMore) {
          this.currentPagePaid++;
          this.getListOrderHistorysV2(this.currentPagePaid, this.numberRecordOnPage, '', '', event, false, 'processing');
        }
        break;
      case 2:
        if (!isLoadMore && this.listOrderAcceptedProvider.length == 0) {
          this.getListOrderHistorysV2(this.currentPageOutdate, this.numberRecordOnPage, '', '', event, false, 'accepted-provider');
        } else if (isLoadMore) {
          this.currentPageOutdate++;
          this.getListOrderHistorysV2(this.currentPageOutdate, this.numberRecordOnPage, '', '', event, false, 'accepted-provider');
        }
        break;
      case 3:
        if (!isLoadMore && this.listOrderAcceptedUser.length == 0) {
          this.getListOrderHistorysV2(this.currentPagePending, this.numberRecordOnPage, '', '', event, false, 'accepted-user');
        } else if (isLoadMore) {
          this.currentPagePending++;
          this.getListOrderHistorysV2(this.currentPagePending, this.numberRecordOnPage, '', '', event, false, 'accepted-user');
        }
        break;
      case 4:
        if (!isLoadMore && this.listOrderFinished.length == 0) {
          this.getListOrderHistorysV2(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'finish');
        } else if (isLoadMore) {
          this.currentPageUnpaid++;
          this.getListOrderHistorysV2(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'finish');
        }
        break;
      case 5:
        if (!isLoadMore && this.listCancelUser.length == 0) {
          this.getListOrderHistorysV2(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'cancel-user');
        } else if (isLoadMore) {
          this.currentPageUnpaid++;
          this.getListOrderHistorysV2(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'cancel-user');
        }
        break;
      case 6:
        if (!isLoadMore && this.listCancelProvider.length == 0) {
          this.getListOrderHistorysV2(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'cancel-provider');
        } else if (isLoadMore) {
          this.currentPageUnpaid++;
          this.getListOrderHistorysV2(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'cancel-provider');
        }
        break;
      default:
        if (!isLoadMore && this.listHistory.length == 0) {
          this.getListOrderHistorysV2(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
        } else if (isLoadMore) {
          this.currentPageAll++;
          this.getListOrderHistorysV2(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
        }
        break;
    }
  }

  pushDataRequest(data, isRefresh) {
    switch (this.activeTabIndex) {
      case 1:
        if (isRefresh) {
          this.listOrderProcessing = data;
        } else {
          this.listOrderProcessing.push(...data);
        }
        break;
      case 2:
        if (isRefresh) {
          this.listOrderAcceptedProvider = data;
        } else {
          this.listOrderAcceptedProvider.push(...data);
        }
        break;
      case 3:
        if (isRefresh) {
          this.listOrderAcceptedUser = data;
        } else {
          this.listOrderAcceptedUser.push(...data);
        }
        break;
      case 4:
        if (isRefresh) {
          this.listOrderFinished = data;
        } else {
          this.listOrderFinished.push(...data);
        }
        break;
      case 5:
        if (isRefresh) {
          this.listCancelUser = data;
        } else {
          this.listCancelUser.push(...data);
        }
        break;
      case 6:
        if (isRefresh) {
          this.listCancelProvider = data;
        } else {
          this.listCancelProvider.push(...data);
        }
        break;
      default:
        if (isRefresh) {
          this.listHistory = data;
        } else {
          this.listHistory.push(...data);
        }
        break;
    }
  }

  eventButtonCancel(id: any) {
    var self = this;
    this.loading.present();
    this.apiService.putOrderProductCancelUser(id).subscribe(
      (result) => {
        self.loading.dismiss();
        self.doRefresh(null);
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  async presentAlert(message) {
    var self = this;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: self.translate.instant('COMMON.information'),
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  moveToChatToShopPage(object) {
    localStorage.setItem('data-order-history', JSON.stringify(object));
    this.navCtrl.navigateForward('/chat-to-shop');
  }

  goback() {
    this.navCtrl.navigateForward('/dashboard/services');
  }

  async changeScheduleOrderClick(item: any) {
    const modal = await this.modalController.create({
      component: PopupChangeTimeOrderPage,
      componentProps: {
        orderHistory: item,
      },
      cssClass: 'change-time-order-modal-css',
    });
    modal.onDidDismiss().then((res: any) => {
      if (!res || !res.data) {
        return;
      }
      const orderTimeDeliver = res.data;
      switch (this.activeTabIndex) {
        case 0:
          const orderAllChange = this.listHistory.find((item) => item._id == orderTimeDeliver._id);
          if (orderAllChange) {
            orderAllChange.timeDeliver = orderTimeDeliver.timeDeliver;
            this.listHistory = [...this.listHistory];
          }
          break;
        case 2:
          const orderProviderChange = this.listOrderAcceptedProvider.find((item) => item._id == orderTimeDeliver._id);
          if (orderProviderChange) {
            orderProviderChange.timeDeliver = orderTimeDeliver.timeDeliver;
            this.listOrderAcceptedProvider = [...this.listOrderAcceptedProvider];
          }
          break;
        case 3:
          const orderUserChange = this.listOrderAcceptedUser.find((item) => item._id == orderTimeDeliver._id);
          if (orderUserChange) {
            orderUserChange.timeDeliver = orderTimeDeliver.timeDeliver;
            this.listOrderAcceptedUser = [...this.listOrderAcceptedUser];
          }
          break;
        default:
          break;
      }
    });
    return await modal.present();
  }

  async ratingOrderClick(orderHistoryId: any) {
    const modal = await this.modalController.create({
      component: PopupRatingShopPage,
      componentProps: {
        orderHistoryId: orderHistoryId,
      },
      cssClass: 'rating-shop-modal-css',
    });
    return await modal.present();
  }
  paymentOrderClick(id: any) {
    // this.loading.present();
    // this.apiService.putOrderProductCancelUser(id).subscribe(
    //   (result) => {
    //     this.loading.dismiss();
    //   },
    //   (error) => {
    //     this.loading.dismiss();
    //   }
    // );
  }
}
