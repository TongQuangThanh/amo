import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-repair-service-booking',
  templateUrl: './repair-service-booking.page.html',
  styleUrls: ['./repair-service-booking.page.scss'],
})
export class RepairServiceBookingPage implements OnInit {
  listDepartment: any;
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


  data_repair: any;
  form_phone_number:any;
  form_phone_number_class:any;
  flag_show_hide_popup: any;
  total_money: any;
  
  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.getListApartment();
    this.button_active = 1;
    this.check_class_button();
    this.form_apartment_id = "";
    this.form_apartment_class = "";
    this.form_start_time = "";
    this.form_start_time_class = "";
    this.form_end_time = "";
    this.form_end_time_class = "";

    this.list_product = [];

    var data = JSON.parse(localStorage.getItem('data_repair'));
    this.data_repair = data;
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
    self.data_repair.group_2.forEach(product => {
      if (product.number > 0) {
        self.list_product.push(product);
      }
    });
    self.data_repair.group_3.forEach(object => {
      object.data.forEach(product => {
        if (product.number > 0) {
          self.list_product.push(product);
        }
      });
    });
  }
  check_class_button (){
    if (this.button_active == 1) {
      this.button_1_class = "button-active";
      this.button_2_class = "button-unactive";
    } else {
      this.button_2_class = "button-active";
      this.button_1_class = "button-unactive";
    }
  }
  ionChangePulldown1(event){
    if (this.form_apartment_id != '') {
      this.form_apartment_class = 'has-input-value';
    } else {
      this.form_apartment_class = "";
    }
  }
  ionChangeStartTime(){
    if (this.form_start_time != '') {
      this.form_start_time_class = 'has-input-value';
    } else {
      this.form_start_time_class = "";
    }
    // var date = new Date(this.form_start_time);
    // this.form_start_time_label = this.datePipe.transform(date,"dd/MM/yyyy hh:mm");
  }
  ionChangeEndTime(){
    if (this.form_end_time != '') {
      this.form_end_time_class = 'has-input-value';
    } else {
      this.form_end_time_class = "";
    }
    // var date = new Date(this.form_end_time);
    // this.form_end_time_label = this.datePipe.transform(date,"dd/MM/yyyy hh:mm");
  }
  getListApartment(){
    var self = this;
    this.loading.present();
    this.apiService.getListUserApartment()
      .subscribe(result => {
        console.log(result.userApartments);
        self.listDepartment = result.userApartments;
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
  }
  getTotalMoney(){
    var self = this;
    this.total_money = "";
    var total = 0;
    self.data_repair.group_2.forEach(product => {
      if (product.number > 0) {
        total = total + product.number * product.money;
      }
    });
    self.data_repair.group_3.forEach(object => {
      object.data.forEach(product => {
        if (product.number > 0) {
          total = total + product.number * product.money;
        }
      });
    });
    if (total > 0) {
      this.total_money = "" + total.toString();
    }
  }
  eventButton1(value) {
    this.button_active = value;
    this.check_class_button();
  }
  eventButtonSend() {
    this.flag_show_hide_popup = true;
  }
  eventButtonClosePopup() {
    this.flag_show_hide_popup = false;
  }
}
