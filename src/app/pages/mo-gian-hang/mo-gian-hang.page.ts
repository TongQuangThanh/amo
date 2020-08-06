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
    this.listType = [
      {id: "1", name: "Thực phẩm, ăn uống"},
      {id: "2", name: "Chăm sóc sắc đẹp"},
      {id: "3", name: "Đồ gia dụng"},
      {id: "3", name: "Thời trang"}
    ];
    this.flag_show_hide_popup = false;
  }
  ionChangePulldown1(event) {
    if (this.form_type != '') {
      this.form_type_class = 'has-input-value';
    } else {
      this.form_type_class = '';
    }
  }
  ionChangeTextBox1() {
    if (this.form_name != '') {
      this.form_name_class = 'has-input-value';
    } else {
      this.form_name_class = '';
    }
  }
  eventButtonSend() {
    this.flag_show_hide_popup = true;
  }
  eventButtonClosePopup() {
    this.flag_show_hide_popup = false;
  }
}
