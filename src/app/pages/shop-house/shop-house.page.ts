import { Component, OnInit, ViewChild} from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-shop-house',
  templateUrl: './shop-house.page.html',
  styleUrls: ['./shop-house.page.scss'],
})
export class ShopHousePage implements OnInit {
  data_shop_house: any;
  total_money: any;
  disable_button_send: any;
  list_data_range: any;
  heightScreen: number;
  showHeader:number;
  position_product:number;
  flag_show_hide_popup: any;
  active_tabs: any;
  first_item: any;
  is_click_button: any;

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
    private route: ActivatedRoute,
  ) {
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.58 - 18;
    });
  }
  @ViewChild('content') private content: any;
  @ViewChild('sub_header') private sub_header: any;
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay:true
  };
  ngOnInit() {
    // this.data_shop_house = {}
    const data_id = this.route.snapshot.paramMap.get('id');
    this.getShopProducts(data_id);
    this.total_money = "";
    this.disable_button_send = "button-disable";
    this.showHeader = 1;
    this.position_product = 1;
    this.flag_show_hide_popup = false;
    this.active_tabs = 1;
    this.first_item = '';
    this.is_click_button = false;
  }
  ngAfterViewInit() {
  }
  ionViewWillEnter(){
  }
  slideToIndex(index: number) {
    this.superTabs.selectTab(index);
  }
  getShopProducts(_id) {
    const self = this;
    this.list_data_range = {};
    this.data_shop_house = {};
    this.data_shop_house['group_1'] = [];
    this.data_shop_house['group_2'] = [];
    this.loading.present();
    this.apiService.getDataServiceShopProduct(_id)
      .subscribe(result => {
        let data_shop_product = result.shopProducts;
        data_shop_product.forEach(product => {
          if (product.requestShopProduct) {
            self.data_shop_house['_id'] = product.requestShopProduct._id;
            self.data_shop_house['text_title'] = product.requestShopProduct.title;
            let text_place = '';
            try {
              text_place = product.requestShopProduct.apartment.title + ' - ' + product.requestShopProduct.apartment.campaign.title;
            } catch (e) {}
            self.data_shop_house['text_place'] = text_place;
            self.data_shop_house['text_star_rate'] = product.requestShopProduct.stars;
            let thumbnail = product.requestShopProduct.thumbnail;
            let logo = product.requestShopProduct.thumbnail;
            if (product.requestShopProduct.attachments && product.requestShopProduct.attachments.length > 1) {
              logo = product.requestShopProduct.attachments[0].url;
              thumbnail = product.requestShopProduct.attachments[1].url;
            }
            self.data_shop_house['thumbnail'] = thumbnail;
            self.data_shop_house['logo'] = logo;
            let time_open = "Luôn mở cửa";
            if (product.requestShopProduct.timeOpen) {
              time_open = product.requestShopProduct.timeOpen;
            }
            self.data_shop_house['time_open'] = time_open;
            if (product.promotionCodes && product.promotionCodes.length > 0 && product.promotionCodes[0].type == "groupon") {
              let promotionCodes = product.promotionCodes[0];
              let deadline_convert = '';
              if (promotionCodes.endAt) {
                let today = new Date();
                let endAt = new Date(promotionCodes.endAt);
                var ageDate = Math.abs(endAt.getTime() - today.getTime());
                let deadline = Math.ceil(ageDate / (1000 * 3600 * 24));
                deadline = deadline ? deadline : 0;
                deadline_convert = deadline == 0 ? "Khuyến mại" : "Còn " + deadline + "   ngày";
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
              let range_position_value = promotionCodes.promotion1*100/promotionCodes.promotion2;
              let discount = 0;
              if (promotionCodes.numberOrder >= promotionCodes.promotion1 && promotionCodes.numberOrder < promotionCodes.promotion2) {
                discount = promotionCodes.promotionPercent1 / 100;
              } else if (promotionCodes.numberOrder == promotionCodes.promotion2) {
                discount = promotionCodes.promotionPercent2 / 100;
              }
              money = money - money * discount;
              let detail = promotionCodes.title;
              let actual_order = promotionCodes.numberOrder + "/" + promotionCodes.promotion2;
              
              let moc_1 = "-0%";
              let moc_2 = "-" + promotionCodes.promotionPercent1 + "%";
              let moc_3 = "-" + promotionCodes.promotionPercent2 + "%";
              let background_image = '';
              let object = {
                '_id' : product._id,
                '_id_requestShopProduct' : product.requestShopProduct._id,
                'thumbnail': product.thumbnail,
                'bg_url': "../assets/images/services/1.png",
                'deadline' : deadline_convert,
                'title' : title,
                'money' : self.convertFormatMoney(money),
                'detail' : detail,
                'excerpt' : product.excerpt,
                'actual_order' : actual_order,
                'slider_value' : slider_value,
                'range_position_value' : range_position_value,
                'moc_1' : moc_1,
                'moc_2' : moc_2,
                'moc_3' : moc_3,
                'number': 0,
                'background_image' : background_image
              }
              self.list_data_range[product._id] = [slider_value + '%', range_position_value + '%'];
              self.data_shop_house.group_1.push(object);
            } else {
              let index = self.getIndexCategoryInList(product.category._id);
              if (self.first_item == '') {
                self.first_item = product.category._id;
              }
              if (index < 0) {
                self.data_shop_house['group_2'].push({
                  id_tab: product.category._id,
                  title: product.category.title,
                  data: []
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
                number: 0
              }
              self.data_shop_house.group_2[index].data.push(object);
            }
          }
        });
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }
  getStyleRange1(_id) {
    let range1 = this.list_data_range[_id][0];
    let range2 = 'calc(' + this.list_data_range[_id][1] + ' - 18px)'; 
    return [range1, range2];
  }
  downNumberProduct(id) {
    var self = this;
    self.data_shop_house.group_1.forEach(product => {
      if (product._id == id && product.number > 0) {
        product.number--;
      }
    });
    this.getTotalMoney();
  }
  upNumberProduct(id) {
    var self = this;
    self.data_shop_house.group_1.forEach(product => {
      if (product._id == id  && product.number < 10000) {
        product.number++;
      }
    });
    this.getTotalMoney();
  }
  downNumberProduct_1(id_tab, id) {
    var self = this;
    self.data_shop_house.group_2.forEach(object => {
      if (object.id_tab == id_tab) {
        object.data.forEach(product => {
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
    self.data_shop_house.group_2.forEach(object => {
      if (object.id_tab == id_tab) {
        object.data.forEach(product => {
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
    self.data_shop_house.group_2.forEach(object => {
      if (object.id_tab == id_tab) {
        object.data.forEach(product => {
          if (product.number == 0) {
            product.number++;
          }
        });
      }
    });
    this.getTotalMoney();
  }
  getTotalMoney(){
    var self = this;
    this.total_money = "";
    var total = 0;
    self.data_shop_house.group_1.forEach(product => {
      if (product.number > 0) {
        total = total + product.number * parseInt(product.money.replace(/\./g, "").replace(/đ/g, ""));
      }
    });
    self.data_shop_house.group_2.forEach(object => {
      object.data.forEach(product => {
        if (product.number > 0) {
          total = total + product.number * parseInt(product.money.replace(/\./g, "").replace(/đ/g, ""));
        }
      });
    });
    if (total > 0) {
      this.total_money = ": " + this.convertFormatMoney(total) + 'đ';
    }
    this.checkStatusButtonSend();
  }
  checkStatusButtonSend() {
    if (this.total_money != "") {
      this.disable_button_send = "";
    } else {
      this.disable_button_send = "button-disable";
    }
  }
  goToPageBookingShopHouse() {
    localStorage.setItem('data-shop-house', JSON.stringify(this.data_shop_house));
    this.navCtrl.navigateForward('/booking-shop-house');
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
  onScroll(event) {
    if (document.getElementById('div-element-place')) {
      let position_y = document.getElementById('div-element-place').getClientRects()[0];
      if(position_y['y'] > 50){
        this.slideToIndex(0);
        this.showHeader = 1;
      }else{
        if (this.showHeader == 1) {
          this.showHeader = 2;
          this.slideToIndex(0);
        } else {
          this.showHeader = 2;
        }
      }
    }
    if (document.getElementById('group-data-product')) {
      let position_y_product = document.getElementById('group-data-product').getClientRects()[0];
      this.position_product = position_y_product['y'];
    }
    if (!this.is_click_button) {
      this.checkActiveTabs(event);
    }
  }
  checkActiveTabs(event) {
    var self = this;
    var scrollTop = event.detail.scrollTop;
    if (this.showHeader == 2) {
      var index = 0;
      var tabs = 0;
      self.data_shop_house.group_2.forEach(object => {
        let top = document.getElementById(object.id_tab).offsetTop;
        let height_aphal = self.sub_header.el.offsetHeight
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
    } else if (this.position_product < 250 && this.position_product > 100 ) {
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
    let height_aphal = this.sub_header.el.offsetHeight
    this.content.scrollToPoint(0, top - height_aphal, 300);
    setTimeout(function(){
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
    self.data_shop_house.group_2.forEach(object => {
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
}