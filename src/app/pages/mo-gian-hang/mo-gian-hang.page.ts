import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mo-gian-hang',
  templateUrl: './mo-gian-hang.page.html',
  styleUrls: ['./mo-gian-hang.page.scss'],
})
export class MoGianHangPage implements OnInit {

  form_type: any;
  form_type_class: any;
  form_name: any;
  form_name_class: any;
  form_note: any;
  listType: any;
  flag_show_hide_popup: any;
  disable_button_send: string;

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
  ) {
      
  }
  ngOnInit() {
    this.form_type = "";
    this.form_type_class = "";
    this.form_name = "";
    this.form_name_class = "";
    this.form_note = "";
    this.listType = [];
    this.flag_show_hide_popup = false;
    this.disable_button_send = "button-disable";
  }
  ionViewWillEnter(){
    this.getDataShopProductCategory();
  }
  getDataShopProductCategory() {
    const self = this;
    this.listType = [];
    
    this.loading.present();
    this.apiService.getDataShopProductCategory()
      .subscribe(result => {
        self.listType = result.requestShopProductCategory;
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }
  ionChangePulldown1(event) {
    if (this.form_type != '') {
      this.form_type_class = 'has-input-value';
    } else {
      this.form_type_class = '';
    }
    this.checkStatusButtonSend();
  }
  ionChangeTextBox1() {
    if (this.form_name != '') {
      this.form_name_class = 'has-input-value';
    } else {
      this.form_name_class = '';
    }
    this.checkStatusButtonSend();
  }
  eventButtonSend() {
    var self = this;
    this.loading.present();
    this.apiService.postRequestionCreateUserShop(this.form_type, this.form_name, this.form_note).subscribe(result => {
      self.loading.dismiss();
      self.flag_show_hide_popup = true;
    },
    error => {
      self.loading.dismiss();
    });
  }
  eventButtonClosePopup() {
    this.flag_show_hide_popup = false;
    this.form_type == "";
    this.form_name == "";
    this.form_note == "";
    this.navCtrl.navigateForward('/resident-market');
  }
  checkStatusButtonSend() {
    if (this.form_type != "" && this.form_name != "") {
      this.disable_button_send = "";
    } else {
      this.disable_button_send = "button-disable";
    }
  }
}

