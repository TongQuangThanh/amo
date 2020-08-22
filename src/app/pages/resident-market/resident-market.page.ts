import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resident-market',
  templateUrl: './resident-market.page.html',
  styleUrls: ['./resident-market.page.scss'],
})
export class ResidentMarketPage implements OnInit {

  listDataMarket: any;
  getShopProductSubscriber: Subscription;
  numberRecordOnPageNoti: number;
  currentPageNoti: number;

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
  ionViewWillEnter(){
    this.currentPageNoti = 1;
    this.numberRecordOnPageNoti = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getDataUserShop(this.currentPageNoti, this.numberRecordOnPageNoti, '', null, true);
  }
  getDataUserShop(page: number, limit: number, search: string, event: any, isRefresh: boolean) {
    const self = this;
    this.listDataMarket = [];
    if (this.getShopProductSubscriber) {
      this.getShopProductSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getShopProductSubscriber = this.apiService.getDataUserShop(page, limit, search)
      .subscribe(result => {
        let data_shop_product = result.shopProducts;
        // data_shop_product.forEach(product => {
        //   let title = product.title;
        //   let deadline = "-5%";
        //   let text_place = "B1505 - Vinhome Riverside";
        //   let text_star_rate = product.stars;
        //   let text_tag = "Giảm 5% toàn menu";
        //   let object = {
        //     '_id' : product._id,
        //     'thumbnail': product.thumbnail,
        //     'title': title,
        //     'deadline': deadline,
        //     'text_place': text_place,
        //     'text_star_rate': text_star_rate,
        //     'text_tag': text_tag
        //   }
        //   this.listDataMarket.push(object);
        // });

        if (event) {
          event.target.complete();
        }
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }
  moveToCreateGianHang() {
    this.navCtrl.navigateForward('/mo-gian-hang');
  }
  moveGianHangDetailPage(event) {
    this.navCtrl.navigateForward('/gian-hang-detail/' + event.currentTarget.id);
  }
}
