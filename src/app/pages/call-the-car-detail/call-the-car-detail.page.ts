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
  selector: 'app-call-the-car-detail',
  templateUrl: './call-the-car-detail.page.html',
  styleUrls: ['./call-the-car-detail.page.scss'],
})
export class CallTheCarDetailPage implements OnInit {
  id_service: any;
  place_from: any;
  place_to: any;
  place_from_class: any;
  place_to_class: any;

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
    private route: ActivatedRoute,
  ) {
    const id_service = this.route.snapshot.paramMap.get('id');
    this.id_service = id_service;
      
  }
  ngOnInit() {
    this.place_from = "";
    this.place_to = "";
    this.place_from_class = "";
    this.place_to_class = "";
  }
  ionChangeTextBox1() {
    if (this.place_from != '') {
      this.place_from_class = 'has-input-value';
    } else {
      this.place_from_class = '';
    }
  }
  ionChangeTextBox2() {
    if (this.place_to != '') {
      this.place_to_class = 'has-input-value';
    } else {
      this.place_to_class = '';
    }
  }
}
