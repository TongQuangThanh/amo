import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resident-market',
  templateUrl: './resident-market.page.html',
  styleUrls: ['./resident-market.page.scss'],
})
export class ResidentMarketPage implements OnInit {

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
      {id: "", url_logo: "../assets/images/services/6.png", title: "Papai-Tiệm ăn Online 24h", text_place: "B1506 - Vinhome Riverside ", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu", text_note: "-5%", type_note: 1},
      {id: "", url_logo: "../assets/images/services/7.png", title: "TocoToco Trần Duy Hưng", text_place: "31 Trần Duy Hưng - Cầu Giấy", text_star_rate: "4.5", text_tag: "Mua 2 tặng 1", text_note: "KM", type_note: 2},
      {id: "", url_logo: "../assets/images/services/6.png", title: "Papai-Tiệm ăn Online 24h", text_place: "B1506 - Vinhome Riverside ", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu", text_note: "-5%", type_note: 1},
      {id: "", url_logo: "../assets/images/services/7.png", title: "TocoToco Trần Duy Hưng", text_place: "31 Trần Duy Hưng - Cầu Giấy", text_star_rate: "4.5", text_tag: "Mua 2 tặng 1", text_note: "KM", type_note: 2}
    ]
  }
  moveToCreateGianHang() {
    this.navCtrl.navigateForward('/mo-gian-hang');
  }
  moveGianHangDetailPage(event) {
    this.navCtrl.navigateForward('/gian-hang-detail/' + event.currentTarget.id);
  }
}
