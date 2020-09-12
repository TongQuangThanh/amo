import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-register-for-shipping',
  templateUrl: './register-for-shipping.page.html',
  styleUrls: ['./register-for-shipping.page.scss'],
})
export class RegisterForShippingPage implements OnInit {
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
  form_note: any;
  
  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private datePipe: DatePipe,
    private translate: TranslateService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.listDepartmentByID = {};
    this.getListApartment();
    this.button_active = 1;
    this.check_class_button();
    this.form_apartment_id = "";
    this.form_apartment_class = "";
    this.form_start_time = "";
    this.form_start_time_class = "";
    this.form_end_time = "";
    this.form_end_time_class = "";
    this.form_note = "";
    this.list_product = [
      {'index': 1, 'name_product': '', 'number_of_product': 0, 'class': ''},
      {'index': 2, 'name_product': '', 'number_of_product': 0, 'class': ''}
    ]

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
        self.listDepartment.forEach(data =>{
          self.listDepartmentByID[data.apartment ._id] = data;
        });
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }
  eventButton1(value) {
    this.button_active = value;
    this.check_class_button();
  }
  addProduct() {
    var self = this;
    self.list_product.push(
      {'index': self.list_product.length + 1, 'name_product': '', 'number_of_product': 0, 'class': ''}
    )
  }
  downNumberProduct(index) {
    var self = this;
    self.list_product.forEach(product => {
      if (product.index == index && product.number_of_product > 0) {
        product.number_of_product--;
      }
    });
  }
  upNumberProduct(index) {
    var self = this;
    self.list_product.forEach(product => {
      if (product.index == index  && product.number_of_product < 10000) {
        product.number_of_product++;
      }
    });
  }
  ionchangGroup1TextBox() {
    var self = this;
    self.list_product.forEach(product => {
      if (product.name_product != '') {
        product.class = 'has-input-value';
      } else {
        product.class = '';
      }
    });
  }
  eventButtonRegisterNew() {
    var self = this;
    let dataApartment = self.listDepartmentByID[this.form_apartment_id];
    let transferGoods = [];
    self.list_product.forEach(product => {
      if (product.number_of_product > 0) {
        transferGoods.push({
          name: product.name_product,
          number: product.number_of_product
        });
      }
    })
    const params = {
      // category: "",
      title: this.translate.instant('INBOX_24.title'),
      content: this.form_note,
      campaign: dataApartment.campaign._id,
      apartment: this.form_apartment_id,
      // createdBy: "",
      attachments: [],
      type: "transfer",

      transferType: this.button_active == 1 ? 'income' : 'outcome',
      transferDateStart: this.form_start_time,
      transferDateEnd: this.form_end_time,
      transferGoods: transferGoods
    };

    this.loading.present();
    this.apiService.addFeedback(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_sucess'));
        self.navCtrl.back();
      },
      error => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_fail'));
      }
    );
  }
  checkActiveButton() {
    if (this.form_apartment_id == '' 
      || this.form_start_time == ''
      || this.form_end_time == ''
      || this.form_note == ''
    ) {
      return 'button-inactive'
    } else {
      return "button-active";
    }
  }
}
