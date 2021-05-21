import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController, IonContent } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ConstService } from '../../utils/const.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-categories-list',
  templateUrl: './service-categories-list.page.html',
  styleUrls: ['./service-categories-list.page.scss'],
})
export class ServiceCategoriesListPage implements OnInit {
  data_shop_house: any;
  getShopProductSubscriber: Subscription;
  numberRecordOnPage: number;
  category_id: any;
  category_name: any;
  currentPage: number;
  listCategories = [];

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
    this.data_shop_house = {};
    const category_id = this.route.snapshot.paramMap.get('categoryId');
    const category_name = this.route.snapshot.paramMap.get('categoryName');
    this.category_id = category_id;

    this.category_name = category_name;
  }

  ionViewWillEnter() {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getListCategories(this.category_id);
  }
  loadData(event) {
    this.currentPage++;
  }

  getListCategories(categoryGroupId: string) {
    this.loading.present();
    this.apiService.getListSubCateV2(categoryGroupId).subscribe(res => {
      this.listCategories = res.shopHouseSubCategoriesV2;
      console.warn(this.listCategories);
      
      this.loading.dismiss();
    })
  }

  redirectToCategory(id: string, name: string, choosenCate: string) {
    this.navCtrl.navigateForward('/user-shop-by-category/' + id + '/' + name + '/' + choosenCate);
  }

}
