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

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
    private route: ActivatedRoute,
  ) {
      
  }
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay:true
  };
  ngOnInit() {
    // this.data_gian_hang = {
    //   text_title: "Miến trộn quán cây xoài - Đống Đa, Hà Nội",
    //   text_place: "B1506 - Vinhome Riverside",
    //   text_star_rate: "4.5",
    //   text_tag: "",
    //   image: "../assets/images/services/8.png",
    //   sub_image: "../assets/images/services/1.png",
    //   group_1: [
    //     {id: "1", url: "../assets/images/services/1.png", deadline: "Còn 10 ngày"},
    //     {id: "2", url: "../assets/images/services/2.png", deadline: "Còn 10 ngày"},
    //   ],
    //   group_2: [
    //     {id: "1", image: "../assets/images/services/6.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
    //     {id: "2", image: "../assets/images/services/7.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
    //   ],
    //   group_3: [
    //     {
    //       id_tab: "1",
    //       title: "Miến trộn",
    //       data: [
    //         {id: "1", image: "../assets/images/services/6.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
    //         {id: "2", image: "../assets/images/services/7.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
    //         {id: "3", image: "../assets/images/services/6.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
    //       ]
    //     },
    //     {
    //       id_tab: "2",
    //       title: "Miến nước",
    //       data: [
    //         {id: "1", image: "../assets/images/services/7.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
    //         {id: "2", image: "../assets/images/services/6.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
    //         {id: "3", image: "../assets/images/services/7.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
    //       ]
    //     }
    //   ]
    // }
    // this.data_gian_hang = {}
    const data_id = this.route.snapshot.paramMap.get('id');
    this.getShopProducts(data_id);
    this.total_money = "";
    this.disable_button_send = "button-disable";
  }
  ionViewWillEnter(){
    
  }
  getShopProducts(_id) {
    const self = this;
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
            let title = product.title;
            let money = self.convertFormatMoney(product.price) + "đ";
            if (product.discountProducts && product.discountProducts.length > 0) {
              let today = new Date();
              let startAt = new Date(product.discountProducts[0].startAt);
              let endAt = new Date(product.discountProducts[0].endAt);
              if (startAt <= today && today <= endAt) {
                money = self.convertFormatMoney(product.discountProducts[0].discountValue) + 'đ';
              }
            }

            let object = {
              id: product._id, 
              image: product.thumbnail, 
              title: title, 
              money: money, 
              note: product.excerpt, 
              number: 0
            }
            self.data_gian_hang.group_3[0].data.push(object);
          }
        });
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }
  downNumberProduct(id) {
    var self = this;
    self.data_gian_hang.group_2.forEach(product => {
      if (product.id == id && product.number > 0) {
        product.number--;
      }
    });
    this.getTotalMoney();
  }
  upNumberProduct(id) {
    var self = this;
    self.data_gian_hang.group_2.forEach(product => {
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
    self.data_gian_hang.group_2.forEach(product => {
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
}
