import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  modeService: string = 'All';
  listServiceCategory: any[];
  heightScreen: number;
  widthScreen: number;
  list_data_silde_1: any;
  list_data_silde_2: any;
  getShopProductSubscriber: Subscription;
  currentPageNoti: number;
  numberRecordOnPageNoti: number;
  list_data_range: any;
  show_slider: any;
  height_slider_1: any;
  display_button_management: any;
  listPromotionCodeBanner = []

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
    private datePipe: DatePipe
  ) {
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 120 - 90;
      this.widthScreen = platform.width();
    });
  }
  slideOpts = {
    loop: true,
    initialSlide: 0,
    slidesPerView: 0.99,
    centeredSlides: true,
    spaceBetween: 0,
    autoplay: {
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };
  slideOpts_1 = {
    loop: true,
    initialSlide: 0,
    slidesPerView: 1.4,
    centeredSlides: false,
    spaceBetween: 0,
    autoplay: {
      disableOnInteraction: false,
    },
  };
  slideOpts_2 = {
    initialSlide: 0,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 0,
  };

  ngOnInit() {
    this.list_data_silde_1 = [];
    this.list_data_silde_2 = [];
    this.list_data_range = {};
    this.listServiceCategory = [];
    this.show_slider = false;
    this.display_button_management = false;
    //this.getServicePromotionCode();
    this.currentPageNoti = 1;
    this.numberRecordOnPageNoti = 5;
    this.getDataUserShop(this.currentPageNoti, this.numberRecordOnPageNoti, '', null, true);
    this.getAllServiceSystem();
    this.getDataCheckShopOwner();
    this.getPromotionCodeBanner();
  }

  ionViewWillEnter() {
    this.height_slider_1 = (this.widthScreen / 1.1) * (9 / 16);
  }
  getDataCheckShopOwner() {
    var self = this;
    this.apiService.getDataCheckShopOwner().subscribe(
      (result) => {
        if (result.requestShopProducts && result.requestShopProducts.length > 0) {
          self.display_button_management = true;
        }
        self.loading.dismiss();
      },
      (error) => {
        self.loading.dismiss();
        self.display_button_management = false;
      }
    );
  }

  getAllServiceSystem() {
    const self = this;
    this.loading.present();
    this.apiService.getListShopHouseCateV2().subscribe(
      (result) => {
        self.loading.dismiss();
        if (result && result.shopCategories) {
          self.listServiceCategory = result.shopCategories;
        }
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  getDataUserShop(page: number, limit: number, search: string, event: any, isRefresh: boolean) {
    const self = this;
    if (isRefresh) {
      this.list_data_silde_2 = [];
    }
    if (this.getShopProductSubscriber) {
      this.getShopProductSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getShopProductSubscriber = this.apiService.getDataUserShopV2(page, limit, search).subscribe(
      (result) => {
        let data_shop_product = result?.shopHousesV2 || [];
        data_shop_product.forEach((product) => {
          let title = product.title;
          let text_note = product.promotionKM ? product.promotionKM : '';
          if (text_note && text_note != 'KM') {
            text_note = '-' + text_note;
          } else if(text_note == 'KM') {
            text_note = this.translate.instant('SHOP_BY_CATE.promotion');
          }
          let type_note = product.promotionKM == 'KM' ? 2 : 1;
          let text_place = 'AMO';
          if (product.apartment) {
            text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
          }
          let text_star_rate = product.stars;
          let text_tag = product.promotion ? product.promotion : '';
          let thumbnailUrl = product.thumbnail;
          if (!thumbnailUrl && product.attachments && product.attachments.length > 1) {
            thumbnailUrl = product.attachments[1].url;
          }
          let object = {
            _id: product._id,
            thumbnail: thumbnailUrl ? thumbnailUrl : 'assets/common/no-thumbnail.png',
            title: title,
            text_note: text_note,
            type_note: type_note,
            text_place: text_place,
            text_star_rate: text_star_rate,
            text_tag: text_tag,
          };
          this.list_data_silde_2.push(object);
        });

        if (event) {
          event.target.complete();
        }
        self.loading.dismiss();
        self.show_slider = true;
      },
      (error) => {
        self.show_slider = true;
        self.loading.dismiss();
      }
    );
  }

  getPromotionCodeBanner() {
    this.apiService.promotionCodeBanner().subscribe(
      (result) => {
        this.listPromotionCodeBanner = result.promotionCodesV2;
        this.loading.dismiss();
      },
      (error) => {
        this.loading.dismiss();
      }
    );
  }

  detailPage(id, name) {
    this.navCtrl.navigateForward('/service-categories-list/' + id + '/' + name);
  }

  addNewService(event) {
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    this.alertService.presentToast(this.translate.instant('COMMON.maintain'));
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }
  moveResidentMarketPage() {
    this.navCtrl.navigateForward('/resident-market');
  }
  moveCallTheCarPage() {
    this.navCtrl.navigateForward('/call-the-car');
  }
  moveShopHousePage(event) {
    this.navCtrl.navigateForward('/shop-house/' + event.currentTarget.id);
  }
  moveHistoryPage() {
    this.navCtrl.navigateForward('/history');
  }
  moveCreateShopHouse() {
    this.navCtrl.navigateForward('/create-shop-house');
  }

  moveRequestHouseSale() {
    this.navCtrl.navigateForward('/request-house-sale');
  }
  moveManagementOrderPage() {
    this.navCtrl.navigateForward('/management-order');
  }
  moveRepairServicePage() {
    this.navCtrl.navigateForward('/repair-service');
  }
  getStyleRange1(_id) {
    let range1 = this.list_data_range[_id][0];
    let range2 = 'calc(' + this.list_data_range[_id][1] + ' - 18px)';
    let color = this.list_data_range[_id][2];
    let background = this.list_data_range[_id][3];
    return [range1, range2, color, background];
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
  eventClickGroupPon(object, type) {
    if (type == 'advertisement') {
      this.navCtrl.navigateForward('/shop-house/' + object.id_shop);
    } else {
      localStorage.setItem('data-booking-product', JSON.stringify(object));
      this.navCtrl.navigateForward('/booking-product/' + 'groupon');
    }
  }
  getHeightSlider() {
    return this.height_slider_1 + 'px';
  }

  // getServicePromotionCode() {
  //   const self = this;
  //   this.list_data_silde_1 = [];
  //   this.loading.present();
  //   this.apiService.getDataServicePromotionCode().subscribe(
  //     (result) => {
  //       let data_promotion_code = result.promotionCodes;
  //       data_promotion_code.forEach((product) => {
  //         let today = new Date();
  //         let endAt = new Date(product.endAt);
  //         var ageDate = Math.abs(endAt.getTime() - today.getTime());
  //         let deadline = Math.ceil(ageDate / (1000 * 3600 * 24));
  //         deadline = deadline ? deadline : 0;
  //         let deadline_convert = deadline == 0 ? 'Khuy???n m???i' : 'C??n ' + deadline + '   ng??y';
  //         let title = product.shopProduct.title;
  //         let slider_value = (product.numberOrder * 100) / product.promotion2;
  //         let range_position_value = (product.promotion1 * 100) / product.promotion2;
  //         let discount = 0;
  //         if (product.numberOrder >= product.promotion1 && product.numberOrder < product.promotion2) {
  //           discount = product.promotionPercent1 / 100;
  //         } else if (product.numberOrder == product.promotion2) {
  //           discount = product.promotionPercent2 / 100;
  //         }
  //         let money = self.convertFormatMoney(product.shopProduct.price - product.shopProduct.price * discount);
  //         let detail = product.title;
  //         let actual_order = product.numberOrder + '/' + product.promotion2;
  //         let stars = product.shopProduct.stars;
  //         let moc_1 = '-0%';
  //         let moc_2 = '-' + product.promotionPercent1 + '%';
  //         let moc_3 = '-' + product.promotionPercent2 + '%';
  //         let background_image = '';
  //         if (product.type == 'advertisement') {
  //           background_image = product.thumbnail;
  //         }
  //         let color_text = '#FFFFFF';
  //         let background_color = '#97171B';
  //         let object = {
  //           _id: product.shopProduct._id,
  //           _id_requestShopProduct: product.requestShopProduct._id,
  //           thumbnail: product.shopProduct.thumbnail,
  //           bg_url: '../assets/images/services/1.png',
  //           deadline: deadline_convert,
  //           title: title,
  //           money: money,
  //           detail: detail,
  //           excerpt: product.shopProduct.excerpt,
  //           actual_order: actual_order,
  //           slider_value: slider_value,
  //           range_position_value: range_position_value,
  //           moc_1: moc_1,
  //           moc_2: moc_2,
  //           moc_3: moc_3,
  //           type: product.type,
  //           stars: stars,
  //           id_shop: product.requestShopProduct._id,
  //           background_image: background_image,
  //           id_groupon: product._id,
  //         };
  //         if (product.type != 'advertisement') {
  //           self.list_data_range[product._id] = [slider_value + '%', range_position_value + '%', color_text, background_color];
  //         }
  //         self.list_data_silde_1.push(object);
  //       });
  //     },
  //     (error) => {
  //       self.loading.dismiss();
  //     }
  //   );
  // }
}
