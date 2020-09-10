import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-shop-by-category',
  templateUrl: './user-shop-by-category.page.html',
  styleUrls: ['./user-shop-by-category.page.scss'],
})
export class UserShopByCategoryPage implements OnInit {

  listDataMarket: any;
  getShopProductSubscriber: Subscription;
  numberRecordOnPage: number;
  currentPage: number;
  category_id: any;
  category_name: any;
  

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
    private route: ActivatedRoute,
  ) {
      
  }
  ngOnInit() {
    const category_id = this.route.snapshot.paramMap.get('category');
    const category_name = this.route.snapshot.paramMap.get('category_name');
    this.category_id = category_id;
    this.category_name = category_name;
    this.listDataMarket = [];
  }
  ionViewWillEnter(){
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getDataUserShopByCategory(this.currentPage, this.numberRecordOnPage, '', null, true);
  }
  getDataUserShopByCategory(page: number, limit: number, search: string, event: any, isRefresh: boolean) {
    const self = this;
    if (isRefresh) {
      this.listDataMarket = [];
    }
    if (this.getShopProductSubscriber) {
      this.getShopProductSubscriber.unsubscribe();
    }
    this.loading.present(); 
    this.getShopProductSubscriber = this.apiService.getDataUserShopByCategory(page, limit, this.category_id)
      .subscribe(result => {
        let data_shop_product = result.requestShopProducts;
        data_shop_product.forEach(product => {
          let title = product.title;
          let text_note = product.promotionKM ? product.promotionKM : "";
          if (text_note != 'KM' && text_note != '') {
            text_note = '-'+text_note;
          }
          let type_note = product.promotionKM == "KM" ? 2 : 1;
          let text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
          let text_star_rate = product.stars;
          let text_tag = product.promotion ? product.promotion : "";
          let object = {
            '_id' : product._id,
            'thumbnail': product.thumbnail ? product.thumbnail : '',
            'title': title,
            'text_note': text_note,
            'type_note': type_note,
            'text_place': text_place,
            'text_star_rate': text_star_rate,
            'text_tag': text_tag
          }
          this.listDataMarket.push(object);
        });

        if (event) {
          event.target.complete();
        }
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }
  loadData(event) {
    this.currentPage++;
    this.getDataUserShopByCategory(this.currentPage, this.numberRecordOnPage, '', event, false);
  }
  moveToCreateGianHang() {
    this.navCtrl.navigateForward('/mo-gian-hang');
  }
  moveGianHangDetailPage(event) {
    this.navCtrl.navigateForward('/gian-hang-detail/' + event.currentTarget.id);
  }
}
