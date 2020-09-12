import { Component, OnInit, ViewChild  } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController, IonContent  } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ConstService } from '../../utils/const.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repair-service',
  templateUrl: './repair-service.page.html',
  styleUrls: ['./repair-service.page.scss'],
})
export class RepairServicePage implements OnInit {
  getShopProductSubscriber: Subscription;
  numberRecordOnPage: number;
  category_id: any;
  category_name: any;
  currentPage: number;
  listDataMarket: any;
  listDataMarketSearch: any;
  isItemAvailable: boolean;
  search_value: string;

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listDataMarket = [];
    this.listDataMarketSearch = [];
    const category_id = this.route.snapshot.paramMap.get('category');
    const category_name = this.route.snapshot.paramMap.get('category_name');
    this.category_id = category_id;
    this.category_name = category_name;
    this.isItemAvailable = false;
    this.search_value = "";
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
      this.listDataMarketSearch = [];
    }
    if (this.getShopProductSubscriber) {
      this.getShopProductSubscriber.unsubscribe();
    }
    this.loading.present(); 
    this.getShopProductSubscriber = this.apiService.getDataUserShopByCategory(page, 1000, this.category_id)
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
            'thumbnail': product.thumbnail ? product.thumbnail : '../../../assets/icon/reparing.svg',
            'title': title,
            'text_note': text_note,
            'type_note': type_note,
            'text_place': text_place,
            'text_star_rate': text_star_rate,
            'text_tag': text_tag
          }
          self.listDataMarketSearch.push(object);
          self.listDataMarket = [].concat(self.listDataMarketSearch);
          if (self.isItemAvailable) {
            self.eventSearchData();
          }
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
  moveGianHangDetailPage(id) {
    this.navCtrl.navigateForward('/gian-hang-detail/' + id);
  }
  eventSearchData() {
      // Reset items back to all of the items
      this.listDataMarket = [].concat(this.listDataMarketSearch);
      // set val to the value of the searchbar
      const val = this.search_value;
      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
          this.isItemAvailable = true;
          this.listDataMarket = this.listDataMarket.filter((item) => {
              return (item['title'].toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
      } else {
          this.isItemAvailable = false;
      }
  }
}
