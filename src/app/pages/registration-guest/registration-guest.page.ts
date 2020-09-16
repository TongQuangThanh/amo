import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { DatePipe, Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  selector: 'app-registration-guest',
  templateUrl: './registration-guest.page.html',
  styleUrls: ['./registration-guest.page.scss'],
})
export class RegistrationGuestPage implements OnInit {
  selectedLanguage:string;
  listDepartmentByID: any;
  listDepartment: any;
  form_apartment_id:any;
  form_apartment_class:any;
  form_date_time: any;
  form_date_time_class: any;
  list_guest: any;
  form_note: any;
  flag_show_hide_popup: any;
  constructor(
    public modalController: ModalController,
    private translateConfigService: TranslateConfigService,
    private loading: LoadingService,
    private apiService: ApiService,
    private translate: TranslateService,
    private location: Location,
    private alertService: AlertService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.listDepartmentByID = {};
    this.flag_show_hide_popup = false;
    this.getListApartment();
    this.form_apartment_id = "";
    this.form_apartment_class = "";
    this.form_date_time = "";
    this.form_date_time_class = "";
    this.form_note = "";
    this.list_guest = {
      guestsNumber: 1,
      data_guest: [
        {
          guestsName: '',
          guestsIdentity: '',
          className: '',
          classIdentity: '',
          line: 'no-line'
        }
      ]
    };
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
  ionChangePulldown1(event){
    if (this.form_apartment_id != '') {
      this.form_apartment_class = 'has-input-value';
    } else {
      this.form_apartment_class = '';
    }
  }
  ionChangeDateTime(event){
    if (this.form_date_time != "") {
      this.form_date_time_class = 'has-input-value';
    } else {
      this.form_date_time_class = "";
    }
  }
  downNumberProduct() {
    var self = this;
    if (self.list_guest.guestsNumber > 1) {
      self.list_guest.guestsNumber--;
      this.list_guest.data_guest.pop();
    }
  }
  upNumberProduct() {
    var self = this;
    if (self.list_guest.guestsNumber < 100) {
      self.list_guest.guestsNumber++;
      this.list_guest.data_guest.push({
        guestsName: '',
        guestsIdentity: '',
        className: '',
        classIdentity: '',
        line: 'has-line'
      });
    }
  }
  ionchangTextBoxGuest() {
    var self = this;
    self.list_guest.data_guest.forEach(product => {
      if (product.guestsName != '') {
        product.className = 'has-input-value';
      } else {
        product.className = '';
      }
      if (product.guestsIdentity != '') {
        product.classIdentity = 'has-input-value';
      } else {
        product.classIdentity = '';
      }
    });
  }
  eventButtonRegisterNew() {
    var self = this;
    let dataApartment = self.listDepartmentByID[this.form_apartment_id];
    let guestInfor = [];
    self.list_guest.data_guest.forEach(guest => {
      guestInfor.push({
        guestsName: guest.guestsName,
        guestsIdentity: guest.guestsIdentity
      })
    });
    const params = {
      // category: "",
      title: this.translate.instant('REGISTRATION_GUEST.title'),
      content: this.form_note,
      campaign: dataApartment.campaign._id,
      apartment: this.form_apartment_id,
      // createdBy: "",
      attachments: [],
      type: "guests",
      guestsNumber: self.list_guest.guestsNumber,
      guestInfor: guestInfor,
      guestsDate: this.form_date_time
    };
    this.loading.present();
    this.apiService.addFeedback(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.flag_show_hide_popup = true;
      },
      error => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_fail'));
      }
    );
  }
  eventButtonClosePopup() {
    this.flag_show_hide_popup = false;
    this.location.back();
  }
  checkShowActiveButton() {
    var check_input_inf_guest = false;
    this.list_guest.data_guest.forEach(data => {
      if (data.guestsName == "" || data.guestsIdentity == "") {
        check_input_inf_guest = true;
      }
    });
    if (this.form_apartment_id == "" || this.form_date_time == "" || check_input_inf_guest) {
      return 'inactive_button';
    } else {
      return 'active_button';
    }
  }
}
