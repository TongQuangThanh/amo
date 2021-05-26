import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { ModalController } from '@ionic/angular';
import { BookingShopHousePage } from '../booking-shop-house/booking-shop-house.page';

@Component({
  selector: 'app-shop-house',
  templateUrl: './shop-house.page.html',
  styleUrls: ['./shop-house.page.scss'],
})
export class ShopHousePage implements OnInit {
  @ViewChild('content') private content: any;
  @ViewChild('sub_header') private sub_header: any;
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  currentTab = 0;
  currentEvaluationPage = 1;
  numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
  shopId = '';
  data_shop_house: any;
  total_money: any;
  disable_button_send: any;
  heightScreen: number;
  showHeader: number;
  position_product: number;
  flag_show_hide_popup: any;
  active_tabs: any;
  first_item: any;
  is_click_button: any;
  shopInfoData = null;
  shopOpenList = [];
  shopOpenTime = '';
  shopOpenTimeExpand = false;
  listRatingShop = [];
  slideOptsShop = {
    initialSlide: 0,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: true,
  };
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 0.99,
    centeredSlides: true,
    spaceBetween: 0,
    autoplay: true,
  };

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
    private route: ActivatedRoute,
    public modalController: ModalController
  ) {
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.58 - 18;
    });
  }
  ngOnInit() {
    this.data_shop_house = {};
    this.data_shop_house['group_1'] = [];
    this.data_shop_house['group_2'] = [];

    const data_id = this.route.snapshot.paramMap.get('id');
    this.shopId = data_id;
    this.total_money = '';
    this.disable_button_send = 'button-disable';
    this.showHeader = 1;
    this.position_product = 1;
    this.flag_show_hide_popup = false;
    this.active_tabs = 1;
    this.first_item = '';
    this.is_click_button = false;
    this.getShopDetailV2(data_id);
    this.getShopProducts(data_id);
    this.getEvaluationShopV2();
  }
  ionViewWillEnter() {}
  slideToIndex(index: number) {
    this.superTabs.selectTab(index);
  }
  getShopDetailV2(_id) {
    this.apiService.getShopDetailV2(_id).subscribe(
      (result) => {
        this.shopInfoData = result.shopHouseV2;
        if (!this.shopInfoData.logo && result.shopHouseV2.attachments && result.shopHouseV2.attachments.length > 0) {
          this.shopInfoData.logo = result.shopHouseV2.attachments[0].url;
        }
        if (this.shopInfoData.typeShop == 'AMO') {
          this.shopInfoData.phone = ConstService.PHONE_AMO;
          this.shopInfoData.address = ConstService.ADDRESS_AMO;
        } else {
          this.shopInfoData.phone = this.shopInfoData?.apartment?.campaign.phone ? this.shopInfoData.apartment.campaign.phone : '';
          this.shopInfoData.address = this.shopInfoData?.apartment?.title + ' - ' + this.shopInfoData?.apartment?.campaign?.title;
        }
        this.shopInfoData.content = this.shopInfoData.content.replace(/(<([^>]+)>)/gi, '');
        this.data_shop_house['shopInfo'] = this.shopInfoData;
        const timeOpenDetail = this.shopInfoData.timeOpenDetail ? JSON.parse(this.shopInfoData.timeOpenDetail) : [];
        this.shopOpenList = timeOpenDetail.map((item, index) => {
          item.id = index + 1;
          if (this.checkOpenShop(item.start, item.end)) {
            item.display = `${this.translate.instant('SHOP_HOUSE.open')} - ${item.start} ${this.translate.instant('SHOP_HOUSE.to')} ${
              item.end
            }`;
            item.isOpen = true;
            this.shopOpenTime = item.display;
            return item;
          } else {
            item.display = `${item.start} ${this.translate.instant('SHOP_HOUSE.to')} ${item.end}`;
            item.isOpen = false;
            return item;
          }
        });
      },
      (error) => {}
    );
  }
  getShopProducts(_id) {
    const self = this;
    this.data_shop_house['group_1'] = [];
    this.data_shop_house['group_2'] = [];
    this.loading.present();
    this.apiService.getProductShopV2(_id).subscribe(
      (result) => {
        let data_shop_product = result.shopProductsV2;
        data_shop_product.forEach((product) => {
          let index = self.getIndexCategoryInList(product.category._id);
          if (self.first_item == '') {
            self.first_item = product.category._id;
          }
          if (index < 0) {
            self.data_shop_house['group_2'].push({
              id_tab: product.category._id,
              title: product.category.title,
              data: [],
            });
            index = self.data_shop_house['group_2'].length - 1;
          }
          let title = product.title;
          let money = product.price;
          if (product.discountProducts && product.discountProducts.length > 0) {
            let today = new Date();
            let startAt = new Date(product.discountProducts[0].startAt);
            let endAt = new Date(product.discountProducts[0].endAt);
            if (startAt <= today && today <= endAt) {
              money = product.discountProducts[0].discountValue;
            }
          }
          let object = {
            _id: product._id,
            image: product.thumbnail,
            title: title,
            money: self.convertFormatMoney(money),
            note: product.excerpt,
            number: 0,
          };
          self.data_shop_house.group_2[index].data.push(object);
        });
        self.loading.dismiss();
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  getEvaluationShopV2(event = null) {
    this.loading.present();
    this.apiService.getEvaluationShopV2(this.shopId, this.currentEvaluationPage, this.numberRecordOnPage).subscribe(
      (result) => {
        this.listRatingShop.push(...result.listOrdersHistory);
        if (event) {
          event.target.complete();
        }
        this.loading.dismiss();
      },
      (error) => {
        if (event) {
          event.target.complete();
        }
        this.loading.dismiss();
      }
    );
  }

  loadData(event) {
    this.currentEvaluationPage++;
    this.getEvaluationShopV2(event);
  }

  tabChange(event) {
    this.currentTab = event.detail.index;
  }
  // getStyleRange1(_id) {
  //   let range1 = this.list_data_range[_id][0];
  //   let range2 = 'calc(' + this.list_data_range[_id][1] + ' - 18px)';
  //   return [range1, range2];
  // }
  downNumberProduct(id) {
    var self = this;
    self.data_shop_house.group_1.forEach((product) => {
      if (product._id == id && product.number > 0) {
        product.number--;
      }
    });
    this.getTotalMoney();
  }
  upNumberProduct(id) {
    var self = this;
    self.data_shop_house.group_1.forEach((product) => {
      if (product._id == id && product.number < 10000) {
        product.number++;
      }
    });
    this.getTotalMoney();
  }
  downNumberProduct_1(id_tab, id) {
    var self = this;
    self.data_shop_house.group_2.forEach((object) => {
      if (object.id_tab == id_tab) {
        object.data.forEach((product) => {
          if (product._id == id && product.number > 0) {
            product.number--;
          }
        });
      }
    });
    this.getTotalMoney();
  }
  upNumberProduct_1(id_tab, id) {
    var self = this;
    self.data_shop_house.group_2.forEach((object) => {
      if (object.id_tab == id_tab) {
        object.data.forEach((product) => {
          if (product._id == id && product.number < 1000) {
            product.number++;
          }
        });
      }
    });
    this.getTotalMoney();
  }
  selectAllEvent(id_tab) {
    var self = this;
    self.data_shop_house.group_2.forEach((object) => {
      if (object.id_tab == id_tab) {
        object.data.forEach((product) => {
          if (product.number == 0) {
            product.number++;
          }
        });
      }
    });
    this.getTotalMoney();
  }
  getTotalMoney() {
    var self = this;
    this.total_money = '';
    var total = 0;
    self.data_shop_house.group_1.forEach((product) => {
      if (product.number > 0) {
        total = total + product.number * parseInt(product.money.replace(/\./g, '').replace(/đ/g, ''));
      }
    });
    self.data_shop_house.group_2.forEach((object) => {
      object.data.forEach((product) => {
        if (product.number > 0) {
          total = total + product.number * parseInt(product.money.replace(/\./g, '').replace(/đ/g, ''));
        }
      });
    });
    if (total > 0) {
      this.total_money = this.convertFormatMoney(total) + 'đ';
    }
    this.checkStatusButtonSend();
  }
  checkStatusButtonSend() {
    if (this.total_money != '') {
      this.disable_button_send = '';
    } else {
      this.disable_button_send = 'button-disable';
    }
  }
  // goToPageBookingShopHouse() {
  //   localStorage.setItem('data-shop-house', JSON.stringify(this.data_shop_house));
  //   this.navCtrl.navigateForward('/booking-shop-house');
  // }
  async goToPageBookingShopHouse() {
    localStorage.setItem('data-shop-house', JSON.stringify(this.data_shop_house));
    const modal = await this.modalController.create({
      component: BookingShopHousePage,
      cssClass: 'booking-shop-house-modal-css',
    });
    return await modal.present();
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
  onScroll(event) {
    if (document.getElementById('shop_info')) {
      let position_y = document.getElementById('shop_info').getClientRects()[0];
      if (position_y['y'] > 10) {
        // this.slideToIndex(0);
        this.showHeader = 1;
      } else {
        if (this.showHeader == 1) {
          this.showHeader = 2;
          // this.slideToIndex(0);
        } else {
          this.showHeader = 2;
        }
      }
    }
    if (document.getElementById('group-data-product')) {
      let position_y_product = document.getElementById('group-data-product').getClientRects()[0];
      this.position_product = position_y_product['y'];
    }
    // if (!this.is_click_button) {
    //   this.checkActiveTabs(event);
    // }
  }
  checkActiveTabs(event) {
    var self = this;
    var scrollTop = event.detail.scrollTop;
    if (this.showHeader == 2) {
      var index = 0;
      var tabs = 0;
      self.data_shop_house.group_2.forEach((object) => {
        let top = document.getElementById(object.id_tab).offsetTop;
        let height_aphal = self.sub_header.el.offsetHeight;
        if (scrollTop + 100 > top - height_aphal) {
          tabs = index;
        }
        index++;
      });
      self.slideToIndex(tabs);
    }
  }
  getStyleHeaderPrduct() {
    if (this.position_product > 250) {
      return ['none', 0];
    } else if (this.position_product < 250 && this.position_product > 100) {
      let opacity = 1 - (this.position_product - 100) / 150;
      return ['', opacity];
    } else {
      return ['', 1];
    }
  }
  eventClickTabs(id_tab) {
    var self = this;
    if (this.is_click_button) {
      return;
    }
    self.is_click_button = true;
    let top = document.getElementById(id_tab).offsetTop;
    let height_aphal = this.sub_header.el.offsetHeight;
    this.content.scrollToPoint(0, top - height_aphal, 300);
    setTimeout(function () {
      self.is_click_button = false;
    }, 300);
  }
  getStyleHeader(index) {
    if (index == this.showHeader) {
      return '';
    } else {
      return 'none';
    }
  }
  getIndexCategoryInList(id_tab) {
    var self = this;
    let index = -1;
    let index_value = -1;
    self.data_shop_house.group_2.forEach((object) => {
      index++;
      if (object.id_tab == id_tab) {
        index_value = index;
      }
    });
    return index_value;
  }
  eventButtonClosePopup() {
    this.flag_show_hide_popup = false;
  }
  eventButtonShowPopup() {
    this.flag_show_hide_popup = true;
    this.slideToIndex(1);
  }
  eventClickGroupPon(object) {
    localStorage.setItem('data-booking-product', JSON.stringify(object));
    this.navCtrl.navigateForward('/booking-product/' + 'groupon');
  }
  getClassLabelProduct(object) {
    if (this.first_item == object.id_tab) {
      return '';
    } else {
      return 'line-product';
    }
  }

  checkOpenShop(startHour: String, endHour: String) {
    const currentDate = new Date();
    const startDate = new Date();
    const endDate = new Date();

    const startArray = startHour.split(':');
    const startHourNumber = startArray.length > 0 ? +startArray[0] : 0;
    const startMinutNumber = startArray.length == 2 ? +startArray[1] : 0;
    const endArray = endHour.split(':');
    const endHourNumber = endArray.length > 0 ? +endArray[0] : 0;
    const endMinutNumber = endArray.length == 2 ? +endArray[1] : 0;

    const currentTime = currentDate.getTime();
    startDate.setHours(startHourNumber, startMinutNumber, 0);
    const startTime = startDate.getTime();
    endDate.setHours(endHourNumber, endMinutNumber, 0);
    const endTime = endDate.getTime();
    if (currentTime > startTime && currentTime < endTime) {
      return true;
    }
    return false;
  }
}
