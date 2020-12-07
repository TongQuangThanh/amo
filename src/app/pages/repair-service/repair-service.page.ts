import { Component, OnInit, ViewChild  } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController, IonContent  } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ConstService } from '../../utils/const.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repair-service',
  templateUrl: './repair-service.page.html',
  styleUrls: ['./repair-service.page.scss'],
})
export class RepairServicePage implements OnInit {
  data_shop_house: any;
  getShopProductSubscriber: Subscription;
  numberRecordOnPage: number;
  category_id: any;
  category_name: any;
  currentPage: number;
  listDataMarket: any;
  listDataMarketSearch: any;
  isItemAvailable: boolean;
  search_value: string;

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.data_shop_house = {};
    this.listDataMarket = [];
    this.listDataMarketSearch = [];
    const category_id = this.route.snapshot.paramMap.get('category');
    const category_name = this.route.snapshot.paramMap.get('category_name');
    this.category_id = category_id;
    this.category_name = category_name;
    this.isItemAvailable = false;
    this.search_value = "";
  }
  ionViewWillEnter(){
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getDataUserShopByCategory(this.currentPage, this.numberRecordOnPage, '', null, true);
  }
  getDataUserShopByCategory(page: number, limit: number, search: string, event: any, isRefresh: boolean) {
    const self = this;
    if (isRefresh) {
      this.listDataMarket = [];
      this.listDataMarketSearch = [];
    }
    if (this.getShopProductSubscriber) {
      this.getShopProductSubscriber.unsubscribe();
    }
    this.loading.present(); 
    this.getShopProductSubscriber = this.apiService.getDataUserShopByCategory(page, 1000, this.category_id)
      .subscribe(result => {
        let data_shop_product = result.requestShopProducts;
        data_shop_product.forEach(product => {
          let title = product.title;
          let text_note = product.promotionKM ? product.promotionKM : "";
          if (text_note != 'KM' && text_note != '') {
            text_note = '-'+text_note;
          }
          let type_note = product.promotionKM == "KM" ? 2 : 1;
          let text_place = 'AMO';
          if(product.apartment){
            try {
              text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
            } catch (e) {}
          }
          let text_star_rate = product.stars;
          let text_tag = product.promotion ? product.promotion : "";
          let object = {
            '_id' : product._id,
            'thumbnail': product.thumbnail ? product.thumbnail : '../../../assets/icon/reparing.svg',
            'title': title,
            'text_note': text_note,
            'type_note': type_note,
            'text_place': text_place,
            'text_star_rate': text_star_rate,
            'text_tag': text_tag,
            'carServiceType': product.carServiceType
          }
          self.listDataMarketSearch.push(object);
          self.listDataMarket = [].concat(self.listDataMarketSearch);
          if (self.isItemAvailable) {
            self.eventSearchData();
          }
        });
        if (event) {
          event.target.complete();
        }
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
    
  }
  loadData(event) {
    this.currentPage++;
    this.getDataUserShopByCategory(this.currentPage, this.numberRecordOnPage, '', event, false);
  }
  moveShopHousePage(object) {
    if (object.carServiceType == "technologyCar") {
      this.navCtrl.navigateForward('/call-the-car-detail/' + object._id);
    } else if (object.carServiceType == "oneTurn") {
      this.moveToBookingShopHouse(object);
    } else {
      this.navCtrl.navigateForward('/shop-house/' + object._id);
    }
  }
  moveToBookingShopHouse(object) {
    var self = this;
    this.getShopProducts(object, function() {
      if (self.data_shop_house['group_2'].length > 0) {
        self.data_shop_house['group_2'][0]['data'][0].number = 1;
        localStorage.setItem('data-shop-house', JSON.stringify(self.data_shop_house));
        self.navCtrl.navigateForward('/booking-shop-house');
      }
    });
  }
  getShopProducts(objectShop, callBack) {
    const self = this;
    this.data_shop_house = {};
    this.data_shop_house['carServiceType'] = objectShop.carServiceType;
    this.data_shop_house['group_1'] = [];
    this.data_shop_house['group_2'] = [];
    this.loading.present();
    this.apiService.getDataServiceShopProduct(objectShop._id)
      .subscribe(result => {
        let data_shop_product = result.shopProducts;
        data_shop_product.forEach(product => {
          if (product.requestShopProduct) {
            self.data_shop_house['_id'] = product.requestShopProduct._id;
            self.data_shop_house['text_title'] = product.requestShopProduct.title;
            if(product.requestShopProduct.apartment){
              self.data_shop_house['text_place'] = product.requestShopProduct.apartment.title + ' - ' + product.requestShopProduct.apartment.campaign.title;
            } else {
              self.data_shop_house['text_place'] = "AMO";
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
              self.data_shop_house.group_1.push(object);
            } else {
              let index = self.getIndexCategoryInList(product.category._id);
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
        callBack();
    },
    error => {
      self.loading.dismiss();
      callBack();
    });
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
  eventSearchData() {
    var self = this;
    // Reset items back to all of the items
    this.listDataMarket = [].concat(this.listDataMarketSearch);
    // set val to the value of the searchbar
    const val = this.convertTextVietnames(this.search_value);
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.listDataMarket = this.listDataMarket.filter((item) => {
          let data = self.convertTextVietnames(item['title']);
            return (data.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
    } else {
        this.isItemAvailable = false;
    }
  }
  convertTextVietnames(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
  }
}
