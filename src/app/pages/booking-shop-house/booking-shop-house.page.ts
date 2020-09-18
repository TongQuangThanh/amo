import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-booking-shop-house',
  templateUrl: './booking-shop-house.page.html',
  styleUrls: ['./booking-shop-house.page.scss'],
})
export class BookingShopHousePage implements OnInit {
  listDepartment: any;
  listDepartmentByID: any;
  check_box_1: boolean;
  check_box_2: boolean;
  tip_value: any;
  show_popup_tip: any;
  button_active: any;
  button_1_class: any;
  button_2_class: any;
  form_apartment_id:any;
  form_apartment_class:any;
  form_start_time: any;
  form_start_time_class: any;
  form_end_time: any;
  form_end_time_class: any;
  list_product: any;
  form_note:any;
  is_change_number: any;


  data_shop_house: any;
  form_phone_number:any;
  form_phone_number_class:any;
  flag_show_hide_popup: any;
  total_money: any;

  orderInfor: any;
  paymentMode: any;
  customerInfor: any;
  
  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private datePipe: DatePipe,
    private location: Location
  ) { }

  ngOnInit() {
    this.listDepartmentByID = {};
    this.getListApartment();
    this.button_active = 0;
    this.check_class_button();
    this.form_apartment_id = "";
    this.form_apartment_class = "";
    this.form_start_time = "";
    this.form_start_time_class = "";
    this.form_end_time = "";
    this.form_end_time_class = "";
    this.form_note = "";
    this.list_product = [];
    this.orderInfor = [];
    this.paymentMode = 0;
    this.customerInfor = {
      appartment: '',
      timeDeliver: '',
      note: '',
    };

    var data = JSON.parse(localStorage.getItem('data-shop-house'));
    if (data.carServiceType && data.carServiceType == 'oneTurn') {
      this.is_change_number = false;
    } else {
      this.is_change_number = true;
    }
    this.data_shop_house = data;
    this.form_phone_number = "";
    this.form_phone_number_class = "";
    this.getListProduct();
    this.flag_show_hide_popup = false;
    this.total_money = "";
    this.getTotalMoney();
  }
  getListProduct() {
    var self = this;
    this.list_product = [];
    self.data_shop_house.group_2.forEach(object => {
      object.data.forEach(product => {
        if (product.number > 0) {
          let money = parseInt(product.money.replace(/\./g, "").replace(/đ/g, ""));
          product['money_convert'] = self.convertFormatMoney(money);
          self.list_product.push(product);
        }
      });
    });
  }
  check_class_button (){
    if (this.button_active == 0) {
      this.button_1_class = "button-active";
      this.button_2_class = "button-unactive";
    } else {
      this.button_2_class = "button-active";
      this.button_1_class = "button-unactive";
    }
  }
  ionChangePulldownApartment(event){
    if (this.form_apartment_id != '') {
      this.form_apartment_class = 'has-input-value';
    } else {
      this.form_apartment_class = "";
    }
    this.checkStatusButtonSend();
  }
  downNumberProduct(id) {
    var self = this;
    self.list_product.forEach(object => {
      if (object._id == id && object.number > 0) {
        object.number--;
      }
    });
    this.getTotalMoney();
  }
  upNumberProduct(id) {
    var self = this;
    self.list_product.forEach(object => {
      if (object._id == id && object.number < 1000) {
        object.number++;
      }
    });
    this.getTotalMoney();
  }
  ionChangeStartTime(){
    if (this.form_start_time != '') {
      this.form_start_time_class = 'has-input-value';
    } else {
      this.form_start_time_class = "";
    }
    this.checkStatusButtonSend();
    // var date = new Date(this.form_start_time);
    // this.form_start_time_label = this.datePipe.transform(date,"dd/MM/yyyy HH:mm");
  }
  ionChangeEndTime(){
    if (this.form_end_time != '') {
      this.form_end_time_class = 'has-input-value';
    } else {
      this.form_end_time_class = "";
    }
    this.checkStatusButtonSend();
    // var date = new Date(this.form_end_time);
    // this.form_end_time_label = this.datePipe.transform(date,"dd/MM/yyyy HH:mm");
  }
  getListApartment(){
    var self = this;
    this.loading.present();
    this.apiService.getListUserApartment()
      .subscribe(result => {
        self.listDepartment = result.userApartments;
        self.listDepartment.forEach(data =>{
          self.listDepartmentByID[data.apartment ._id] = data;
        });
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }

  ionChangeTextBox1() {
    if (this.form_phone_number != '') {
      this.form_phone_number_class = 'has-input-value';
    } else {
      this.form_phone_number_class = '';
    }
    this.checkStatusButtonSend();
  }
  getTotalMoney(){
    var self = this;
    this.total_money = "";
    var total = 0;
    self.list_product.forEach(object => {
      if (object.number > 0) {
        total = total + object.number * parseInt(object.money.replace(/\./g, "").replace(/đ/g, ""));
      }
    });
    if (total > 0) {
      this.total_money = ": " + this.convertFormatMoney(total) + 'đ';
    }
  }
  eventButton1(value) {
    this.button_active = value;
    this.check_class_button();
  }
  eventButtonSend() {
    var self = this;
    let dataApartment = self.listDepartmentByID[this.form_apartment_id];
    this.form_phone_number = dataApartment.apartment.owner.phone;
    this.loading.present();
    this.paymentMode = this.button_active;
    var requestShopProduct = self.data_shop_house._id;
    this.orderInfor = [];
    self.list_product.forEach(object => {
      if (object.number > 0) {
        let money = parseInt(object.money.replace(/\./g, "").replace(/đ/g, ""));
        self.orderInfor.push({
          shopProduct: object._id,
          price: money,
          number: object.number
        });
      }
    });
    this.apiService.postRequestionOrderProduct(
      this.orderInfor, 
      this.paymentMode.toString(), 
      this.form_apartment_id, 
      this.form_start_time, 
      this.form_phone_number, 
      this.form_note,
      requestShopProduct
    ).subscribe(result => {
      self.loading.dismiss();
      self.flag_show_hide_popup = true;
    },
    error => {
      self.loading.dismiss();
    });
  }
  eventButtonClosePopup() {
    this.flag_show_hide_popup = false;
    this.location.back();
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
  checkStatusButtonSend() {
    if (this.form_apartment_id != "" && this.form_start_time != "" && this.total_money != "") {
      return "";
    } else {
      return "button-disable";
    }
  }
}
