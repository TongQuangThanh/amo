import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-call-the-car',
  templateUrl: './call-the-car.page.html',
  styleUrls: ['./call-the-car.page.scss'],
})
export class CallTheCarPage implements OnInit {

  listDataMarket: any;

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
    this.listDataMarket = [
      {_id: "", url_logo: "../assets/images/services/4.png", title: "Dịch vụ đặt xe Caro", text_place: "31 Trần Duy Hưng - Cầu Giấy", text_star_rate: "4.5", text_tag: "Giảm giá vé 10%"},
      {_id: "", url_logo: "../assets/images/services/5.png", title: "Đặt xe liên tỉnh HasonHaivan", text_place: "31 Trần Duy Hưng - Cầu Giấy", text_star_rate: "4.5", text_tag: "Giảm giá vé 15%"},
      {_id: "", url_logo: "../assets/images/services/4.png", title: "Dịch vụ đặt xe Caro", text_place: "31 Trần Duy Hưng - Cầu Giấy", text_star_rate: "4.5", text_tag: "Giảm giá vé 10%"},
      {_id: "", url_logo: "../assets/images/services/5.png", title: "Đặt xe liên tỉnh HasonHaivan", text_place: "31 Trần Duy Hưng - Cầu Giấy", text_star_rate: "4.5", text_tag: "Giảm giá vé 15%"}
    ]
  }

  detailPage(event) {
    this.navCtrl.navigateForward('/call-the-car-detail/' + event.currentTarget.id);
  }
}
