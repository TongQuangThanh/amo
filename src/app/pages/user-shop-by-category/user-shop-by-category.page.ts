import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service';
import { LoadingService } from '../../services/loading/loading.service';
import { ActivatedRoute } from '@angular/router';
import { BookingShopHousePage } from '../booking-shop-house/booking-shop-house.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-shop-by-category',
  templateUrl: './user-shop-by-category.page.html',
  styleUrls: ['./user-shop-by-category.page.scss'],
})
export class UserShopByCategoryPage implements OnInit {
  data_shop_house: any;
  listDataMarket: any;
  category_id: any;
  category_name: any;
  currentPageSearch = 1;
  numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
  slideOpts = {
    // initialSlide: 0,
    slidesPerView: 4.1,
    centeredSlides: false,
    spaceBetween: 0,
    autoplay: false,
  };
  listCategories = [];
  selected_category: string = '';
  listTagShop = [];
  shopTagSelect = [];

  listSearchTag = [
    { name: 'Giá rẻ nhất', value: 1, selected: false },
    { name: 'Đánh giá cao nhất', value: 2, selected: false },
    { name: 'Ưa chuộng nhất', value: 3, selected: false },
  ]

  orderMode: number;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public modalController: ModalController,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.shopTagSelect = [];
    this.data_shop_house = {};
    this.selected_category = this.route.snapshot.paramMap.get('selected_category');
    this.category_id = this.route.snapshot.paramMap.get('category');
    this.category_name = this.route.snapshot.paramMap.get('category_name');
    this.listDataMarket = [];
    this.getListCategories(this.category_id);
    this.searchShopByTagsAndCateV2();
    // this.getTagsOfShopV2();
  }

  ionViewWillEnter() { }

  getListCategories(categoryGroupId: string) {
    this.apiService.getListSubCateV2(categoryGroupId).subscribe(
      (res) => {
        this.listCategories = res.shopHouseSubCategoriesV2;
        this.slideOpts.slidesPerView = this.listCategories.length;
      },
      () => { }
    );
  }

  getTagsOfShopV2() {
    this.apiService.getTagsOfShopV2().subscribe(
      (res) => { },
      (err) => { }
    );
  }

  // getBySubCategory() {
  //   const self = this;
  //   this.loading.present();
  //   this.apiService.getListShopV2(this.selected_category).subscribe(
  //     (result) => {
  //       let data_shop_product = result.shopHousesV2;
  //       this.mappingShopProduct(data_shop_product);
  //       self.loading.dismiss();
  //     },
  //     (error) => {
  //       self.loading.dismiss();
  //     }
  //   );
  // }
  loadData(event) {
    this.currentPageSearch++;
    this.searchShopByTagsAndCateV2(event);
  }
  moveShopHousePage(object) {
    if (object.carServiceType == 'technologyCar') {
      this.navCtrl.navigateForward('/call-the-car-detail/' + object._id);
    } else if (object.carServiceType == 'oneTurn') {
      this.moveToBookingShopHouse(object);
    } else {
      this.navCtrl.navigateForward('/shop-house/' + object._id);
    }
  }
  moveToBookingShopHouse(object) {
    var self = this;
    this.getShopProducts(object, function () {
      if (self.data_shop_house['group_2'].length > 0) {
        self.data_shop_house['group_2'][0]['data'][0].number = 1;
        localStorage.setItem('data-shop-house', JSON.stringify(self.data_shop_house));
        this.goToPageBookingShopHouse();
      }
    });
  }
  async goToPageBookingShopHouse() {
    const modal = await this.modalController.create({
      component: BookingShopHousePage,
      cssClass: 'booking-shop-house-modal-css',
    });
    return await modal.present();
  }

  getShopProducts(objectShop, callBack) {
    const self = this;
    this.data_shop_house = {};
    this.data_shop_house['carServiceType'] = objectShop.carServiceType;
    this.data_shop_house['group_1'] = [];
    this.data_shop_house['group_2'] = [];
    this.loading.present();
    this.apiService.getDataServiceShopProduct(objectShop._id).subscribe(
      (result) => {
        let data_shop_product = result.shopProducts;
        data_shop_product.forEach((product) => {
          if (product.requestShopProduct) {
            self.data_shop_house['_id'] = product.requestShopProduct._id;
            self.data_shop_house['text_title'] = product.requestShopProduct.title;
            if (product.requestShopProduct.apartment) {
              self.data_shop_house['text_place'] =
                product.requestShopProduct.apartment.title + ' - ' + product.requestShopProduct.apartment.campaign.title;
            } else {
              self.data_shop_house['text_place'] = 'AMO';
            }
            self.data_shop_house['text_star_rate'] = product.requestShopProduct.stars;
            let thumbnail = product.requestShopProduct.thumbnail;
            let logo = product.requestShopProduct.thumbnail;
            if (product.requestShopProduct.attachments && product.requestShopProduct.attachments.length > 1) {
              logo = product.requestShopProduct.attachments[0].url;
              thumbnail = product.requestShopProduct.attachments[1].url;
            }
            self.data_shop_house['thumbnail'] = thumbnail;
            self.data_shop_house['logo'] = logo;
            let time_open = 'Luôn mở cửa';
            if (product.requestShopProduct.timeOpen) {
              time_open = product.requestShopProduct.timeOpen;
            }
            self.data_shop_house['time_open'] = time_open;
            if (product.promotionCodes && product.promotionCodes.length > 0 && product.promotionCodes[0].type == 'groupon') {
              let promotionCodes = product.promotionCodes[0];
              let deadline_convert = '';
              if (promotionCodes.endAt) {
                let today = new Date();
                let endAt = new Date(promotionCodes.endAt);
                var ageDate = Math.abs(endAt.getTime() - today.getTime());
                let deadline = Math.ceil(ageDate / (1000 * 3600 * 24));
                deadline = deadline ? deadline : 0;
                deadline_convert = deadline == 0 ? 'Khuyến mại' : 'Còn ' + deadline + '   ngày';
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

              let slider_value = (promotionCodes.numberOrder * 100) / promotionCodes.promotion2;
              let range_position_value = (promotionCodes.promotion1 * 100) / promotionCodes.promotion2;
              let discount = 0;
              if (promotionCodes.numberOrder >= promotionCodes.promotion1 && promotionCodes.numberOrder < promotionCodes.promotion2) {
                discount = promotionCodes.promotionPercent1 / 100;
              } else if (promotionCodes.numberOrder == promotionCodes.promotion2) {
                discount = promotionCodes.promotionPercent2 / 100;
              }
              money = money - money * discount;
              let detail = promotionCodes.title;
              let actual_order = promotionCodes.numberOrder + '/' + promotionCodes.promotion2;

              let moc_1 = '-0%';
              let moc_2 = '-' + promotionCodes.promotionPercent1 + '%';
              let moc_3 = '-' + promotionCodes.promotionPercent2 + '%';
              let background_image = '';
              let object = {
                _id: product._id,
                _id_requestShopProduct: product.requestShopProduct._id,
                thumbnail: product.thumbnail,
                bg_url: '../assets/images/services/1.png',
                deadline: deadline_convert,
                title: title,
                money: self.convertFormatMoney(money),
                detail: detail,
                excerpt: product.excerpt,
                actual_order: actual_order,
                slider_value: slider_value,
                range_position_value: range_position_value,
                moc_1: moc_1,
                moc_2: moc_2,
                moc_3: moc_3,
                number: 0,
                background_image: background_image,
              };
              self.data_shop_house.group_1.push(object);
            } else {
              let index = self.getIndexCategoryInList(product.category._id);
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
            }
          }
        });
        self.loading.dismiss();
        callBack();
      },
      (error) => {
        self.loading.dismiss();
        callBack();
      }
    );
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
  convertFormatMoney(value) {
    if (value.toString() == '') {
      return '';
    }
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
  categoryClick(cateId: string) {
    this.selected_category = cateId;
    this.shopTagSelect = [];
    this.currentPageSearch = 1;
    this.listDataMarket = [];
    this.searchShopByTagsAndCateV2();
  }
  shopTagClick(tagId: string) {
    console.warn(tagId);

    const tagIndex = this.shopTagSelect.findIndex((item) => item == tagId);
    if (tagIndex != -1) {
      this.shopTagSelect.splice(tagIndex, 1);
    } else {
      this.shopTagSelect.push(tagId);
    }
    this.listDataMarket = [];
    this.currentPageSearch = 1;
    this.searchShopByTagsAndCateV2();
  }

  searchShopByTagsAndCateV2(event = null) {
    this.loading.present();
    this.apiService
      .searchShopByTagsAndCateV2(this.currentPageSearch, this.numberRecordOnPage, this.shopTagSelect, [this.selected_category], this.orderMode)
      .subscribe(
        (result) => {
          const data_shop_product = result.shopHousesV2;
          this.mappingShopProduct(data_shop_product);
          this.loading.dismiss();
          if (event) {
            event.target.complete();
          }
        },
        (error) => {
          this.loading.dismiss();
          if (event) {
            event.target.complete();
          }
        }
      );
  }
  mappingShopProduct(data_shop_product: any) {
    data_shop_product.forEach((product) => {
      let text_note = product.promotionKM ? product.promotionKM : '';
      if (text_note && text_note != 'KM') {
        text_note = '-' + text_note;
      } else if (text_note == 'KM') {
        text_note = this.translate.instant('SHOP_BY_CATE.promotion');
      }
      let type_note = product.promotionKM == 'KM' ? 2 : 1;
      let text_place = 'AMO';
      if (product.apartment) {
        text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
      }
      let text_tag = product.promotion ? product.promotion : '';
      const content = product.promotion || product.content.replace(/(<([^>]+)>)/gi, '');
      let thumbnailUrl = product.thumbnail;
      if (!thumbnailUrl && product.attachments && product.attachments.length > 1) {
        thumbnailUrl = product.attachments[1].url;
      }
      const shopHouseTagList = product.shopHouseTag.map((item) => {
        const tagSelect = this.shopTagSelect.find((tag) => tag == item._id);
        if (tagSelect) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
        return item;
      });
      this.listDataMarket.push({
        _id: product._id,
        thumbnail: thumbnailUrl ? thumbnailUrl : 'assets/common/no-thumbnail.png',
        title: product.title,
        text_note: text_note,
        type_note: type_note,
        text_place: text_place,
        text_star_rate: product.stars,
        text_tag: text_tag,
        carServiceType: product.carServiceType,
        time_open: product.timeOpen || '',
        content: content,
        numberOrder: product.numberOrder || 0,
        numberEvaluation: product.numberEvaluation || 0,
        shopHouseTag: shopHouseTagList,
        lowestPrice: product.lowestPrice
      });      
    });
  }

  searchByTag(tagType: number) {
    const selectedTag = this.listSearchTag.find(el => el.value === tagType);
    if (selectedTag.selected === true) {
      selectedTag.selected = false;
      this.orderMode = undefined;
      this.listDataMarket = [];
      this.currentPageSearch = 1;
    } else if (selectedTag.selected == false) {
      this.unselectSearchTag(tagType);
      selectedTag.selected = true
      this.orderMode = tagType;
      this.listDataMarket = [];
      this.currentPageSearch = 1;
    } else {
      return;
    }
    this.searchShopByTagsAndCateV2();
  }

  private unselectSearchTag(val) {
    this.listSearchTag.forEach(element => {
      if (element.value !== val) {
        element.selected = false;
      }
    });
  }

}

