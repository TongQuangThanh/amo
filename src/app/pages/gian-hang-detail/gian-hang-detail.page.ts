import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gian-hang-detail',
  templateUrl: './gian-hang-detail.page.html',
  styleUrls: ['./gian-hang-detail.page.scss'],
})
export class GianHangDetailPage implements OnInit {
  data_gian_hang: any;
  total_money: any;

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
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
    this.data_gian_hang = {
      text_title: "Miến trộn quán cây xoài - Đống Đa, Hà Nội",
      text_place: "B1506 - Vinhome Riverside",
      text_star_rate: "4.5",
      text_tag: "",
      image: "../assets/images/services/8.png",
      sub_image: "../assets/images/services/1.png",
      group_1: [
        {id: "1", url: "../assets/images/services/1.png", deadline: "Còn 10 ngày"},
        {id: "2", url: "../assets/images/services/2.png", deadline: "Còn 10 ngày"},
      ],
      group_2: [
        {id: "1", image: "../assets/images/services/6.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
        {id: "2", image: "../assets/images/services/7.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
      ],
      group_3: [
        {
          id_tab: "1",
          title: "Miến trộn",
          data: [
            {id: "1", image: "../assets/images/services/6.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
            {id: "2", image: "../assets/images/services/7.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
            {id: "3", image: "../assets/images/services/6.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
          ]
        },
        {
          id_tab: "2",
          title: "Miến nước",
          data: [
            {id: "1", image: "../assets/images/services/7.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
            {id: "2", image: "../assets/images/services/6.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
            {id: "3", image: "../assets/images/services/7.png", title: "Miến trộn Bò, Giò, Đậu", money: "35000", note: "Đầy đủ bò, giò, đậu thơm ngon", number: "0"},
          ]
        }
      ]
    }
    this.total_money = "";
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
        total = total + product.number * product.money;
      }
    });
    self.data_gian_hang.group_3.forEach(object => {
      object.data.forEach(product => {
        if (product.number > 0) {
          total = total + product.number * product.money;
        }
      });
    });
    if (total > 0) {
      this.total_money = " - " + total.toString();
    }
  }
  goToPageGioHang() {
    localStorage.setItem('data', JSON.stringify(this.data_gian_hang));
    this.navCtrl.navigateForward('/gio-hang');
  }
}
