import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gian-hang-detail',
  templateUrl: './gian-hang-detail.page.html',
  styleUrls: ['./gian-hang-detail.page.scss'],
})
export class GianHangDetailPage implements OnInit {
  data_gian_hang: any;
  total_money: any;
  disable_button_send: any;
  list_data_range: any;
  heightScreen: number;
  showHeader:number;

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
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay:true
  };
  ngOnInit() {
    // this.data_gian_hang = {}
    const data_id = this.route.snapshot.paramMap.get('id');
    this.getShopProducts(data_id);
    this.total_money = "";
    this.disable_button_send = "button-disable";
    this.showHeader = 1;
  }
  ionViewWillEnter(){
    
  }
  getShopProducts(_id) {
    const self = this;
    this.list_data_range = {};
    this.data_gian_hang = {};
    this.data_gian_hang['group_1'] = [];
    this.data_gian_hang['group_2'] = [];
    this.data_gian_hang['group_3'] = [{
      id_tab: "1",
      title: "Mặt hàng",
      data: []
    }];
    this.loading.present();
    this.apiService.getDataServiceShopProduct(_id)
      .subscribe(result => {
        let data_shop_product = result.shopProducts;
        data_shop_product.forEach(product => {
          if (product.requestShopProduct) {
            self.data_gian_hang['text_title'] = product.requestShopProduct.title;
            self.data_gian_hang['text_place'] = product.requestShopProduct.apartment.title + ' - ' + product.requestShopProduct.apartment.campaign.title;
            self.data_gian_hang['text_star_rate'] = product.requestShopProduct.stars;
            self.data_gian_hang['thumbnail'] = product.thumbnail;
            if (product.promotionCodes && product.promotionCodes.length > 0) {
              // let today = new Date();
              // let endAt = new Date(product.endAt);
              // var ageDate = Math.abs(endAt.getTime() - today.getTime());
              // let deadline = Math.ceil(ageDate / (1000 * 3600 * 24));
              // deadline = deadline ? deadline : 0;
              // let deadline_convert = deadline == 0 ? "Khuyến mại" : "Còn " + deadline + "   ngày";
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
              let promotionCodes = product.promotionCodes[0];
              let slider_value = (promotionCodes.numberOrder * 100) / promotionCodes.promotion2;
              let discount = 0;
              if (promotionCodes.numberOrder >= promotionCodes.promotion1 && promotionCodes.numberOrder < promotionCodes.promotion2) {
                discount = promotionCodes.promotionPercent1 / 100;
              } else if (promotionCodes.numberOrder == promotionCodes.promotion2) {
                discount = promotionCodes.promotionPercent2 / 100;
              }
              money = money - money * discount;
              let detail = 'Cùng mua với bạn bè/hàng xóm để được nhận giảm giá cao nhất.';
              let actual_order = promotionCodes.numberOrder + "/" + promotionCodes.promotion2;
              
              let moc_1 = "-0%";
              let moc_2 = "-" + promotionCodes.promotionPercent1 + "%";
              let moc_3 = "-" + promotionCodes.promotionPercent2 + "%";
              let object = {
                'id' : product._id,
                'thumbnail': product.thumbnail,
                'bg_url': "../assets/images/services/1.png",
                'deadline' : '',
                'title' : title,
                'money' : self.convertFormatMoney(money),
                'detail' : detail,
                'actual_order' : actual_order,
                'slider_value' : slider_value,
                'moc_1' : moc_1,
                'moc_2' : moc_2,
                'moc_3' : moc_3,
                'number': 0
              }
              self.list_data_range[product._id] = slider_value + '%';
              self.data_gian_hang.group_1.push(object);
            } else {
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
                id: product._id, 
                image: product.thumbnail, 
                title: title, 
                money: self.convertFormatMoney(money), 
                note: product.excerpt, 
                number: 0
              }
              self.data_gian_hang.group_3[0].data.push(object);
              
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
    return this.list_data_range[_id]
  }
  downNumberProduct(id) {
    var self = this;
    self.data_gian_hang.group_1.forEach(product => {
      if (product.id == id && product.number > 0) {
        product.number--;
      }
    });
    this.getTotalMoney();
  }
  upNumberProduct(id) {
    var self = this;
    self.data_gian_hang.group_1.forEach(product => {
      if (product.id == id  && product.number < 10000) {
        product.number++;
      }
    });
    this.getTotalMoney();
  }
  downNumberProduct_1(id_tab, id) {
    var self = this;
    self.data_gian_hang.group_3.forEach(object => {
      if (object.id_tab == id_tab) {
        object.data.forEach(product => {
          if (product.id == id && product.number > 0) {
            product.number--;
          }
        });
      }
    });
    this.getTotalMoney();
  }
  upNumberProduct_1(id_tab, id) {
    var self = this;
    self.data_gian_hang.group_3.forEach(object => {
      if (object.id_tab == id_tab) {
        object.data.forEach(product => {
          if (product.id == id && product.number < 1000) {
            product.number++;
          }
        });
      }
    });
    this.getTotalMoney();
  }
  selectAllEvent(id_tab) {
    var self = this;
    self.data_gian_hang.group_3.forEach(object => {
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
    self.data_gian_hang.group_1.forEach(product => {
      if (product.number > 0) {
        total = total + product.number * parseInt(product.money.replace('.', "").replace('đ', ""));
      }
    });
    self.data_gian_hang.group_3.forEach(object => {
      object.data.forEach(product => {
        if (product.number > 0) {
          total = total + product.number * parseInt(product.money.replace('.', "").replace('đ', ""));
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
  goToPageGioHang() {
    localStorage.setItem('data', JSON.stringify(this.data_gian_hang));
    this.navCtrl.navigateForward('/gio-hang');
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
    let position_y = document.getElementById('div-text-place').getClientRects()[0];
    if(position_y['y'] > 45){
      this.showHeader = 1;
    }else{
      this.showHeader = 2;
    }
  }
  getStyleHeader(index) {
    if (index == this.showHeader) {
      return '';
    } else {
      return 'none';
    }
  }
}
