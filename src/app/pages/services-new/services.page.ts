import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  modeService: string = "All";
  listServiceCategory: any[];
  listServiceLog: any;
  heightScreen: number;
  list_data_silde_1: any;
  list_data_silde_2: any;
  getShopProductSubscriber: Subscription;
  currentPageNoti: number;
  numberRecordOnPageNoti: number;
  list_data_range: any;

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
    private datePipe: DatePipe
  ) {
      platform.ready().then((readySource) => {
        this.heightScreen = platform.height() - 120 - 90;
      });
  }
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay:true
  };
  slideOpts_1 = {
    initialSlide: 0,
    slidesPerView: 1.4,
    centeredSlides: false,
    spaceBetween: 0,
    autoplay:true
  };

  ngOnInit() {
    //this.listServiceCategory = [];
    //this.listServiceLog = [];
    // this.getRequestAll();
    this.list_data_silde_1 = [
      // {id: "1", url: "../assets/images/services/1.png", deadline: "Còn 10 ngày"},
      // {id: "2", url: "../assets/images/services/2.png", deadline: "Còn 11 ngày"},
      // {id: "3", url: "../assets/images/services/3.png", deadline: "Còn 12 ngày"},
      // {id: "4", url: "../assets/images/services/2.png", deadline: "Còn 13 ngày"},
      // {id: "5", url: "../assets/images/services/1.png", deadline: "Còn 14 ngày"}
    ]
    this.list_data_silde_2 = [
      // {id: "1", url: "../assets/images/services/3.png", deadline: "Khuyến mại", title: "Miến trộn quán cây xoài", text_place: "B1505 - Vinhome Riverside", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu"},
      // {id: "2", url: "../assets/images/services/3.png", deadline: "Khuyến mại", title: "Miến trộn quán cây xoài", text_place: "B1505 - Vinhome Riverside", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu"},
      // {id: "3", url: "../assets/images/services/3.png", deadline: "Khuyến mại", title: "Miến trộn quán cây xoài", text_place: "B1505 - Vinhome Riverside", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu"},
      // {id: "4", url: "../assets/images/services/3.png", deadline: "Khuyến mại", title: "Miến trộn quán cây xoài", text_place: "B1505 - Vinhome Riverside", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu"}
    ]
    this.list_data_range = {};
  }

  ionViewWillEnter(){
    this.listServiceCategory = [];
    this.listServiceLog = [];
    this.getServicePromotionCode();
    this.currentPageNoti = 1;
    this.numberRecordOnPageNoti = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getShopProducts(this.currentPageNoti, this.numberRecordOnPageNoti, '', null, true);
    this.getAllServiceSystem();
  }

  getServicePromotionCode() {
    const self = this;
    this.list_data_silde_1 = [];
    this.loading.present();
    this.apiService.getDataServicePromotionCode()
      .subscribe(result => {
        let data_promotion_code = result.promotionCodes;
        data_promotion_code.forEach(product => {
          let today = new Date();
          let endAt = new Date(product.endAt);
          var ageDate = Math.abs(endAt.getTime() - today.getTime());
          let deadline = Math.ceil(ageDate / (1000 * 3600 * 24));
          deadline = deadline ? deadline : 0;
          let deadline_convert = deadline == 0 ? "Khuyến mại" : "Còn " + deadline + "   ngày";
          let title = product.shopProduct.title;
          let money = product.shopProduct.price + 'đ';
          let detail = 'Cùng mua với bạn bè/hàng xóm để được nhận giảm giá cao nhất.';
          let actual_order = product.numberOrder+"/"+product.promotion2;
          let slider_value = product.numberOrder*100/product.promotion2 + '%';
          let moc_1 = "-0%";
          let moc_2 = "-"+product.promotionPercent1+"%";
          let moc_3 = "-"+product.promotionPercent2+"%";
          let object = {
            '_id' : product._id,
            'thumbnail': product.shopProduct.thumbnail,
            'bg_url': "../assets/images/services/1.png",
            'deadline' : deadline_convert,
            'title' : title,
            'money' : money,
            'detail' : detail,
            'actual_order' : actual_order,
            'slider_value' : slider_value,
            'moc_1' : moc_1,
            'moc_2' : moc_2,
            'moc_3' : moc_3,
          }
          self.list_data_range[product._id] = slider_value;
          this.list_data_silde_1.push(object);
        });
        console.log(result);
    },
    error => {
      self.loading.dismiss();
    });
  }

  getAllServiceSystem() {
    const self = this;
    this.loading.present();
    this.apiService.getListServiceGroup()
      .subscribe(result => {
        for(let i=0;i<result.serviceGroup.length;i+=4){
          let arrayServiceGroupTmp = [];
          if(i < result.serviceGroup.length){
            arrayServiceGroupTmp.push(result.serviceGroup[i]);
          }
          if(i + 1 < result.serviceGroup.length){
            arrayServiceGroupTmp.push(result.serviceGroup[i + 1]);
          }else{
            arrayServiceGroupTmp.push({
              _id: "",
              title: "",
              thumbnail: ""
            })
          }
          if(i + 2 < result.serviceGroup.length){
            arrayServiceGroupTmp.push(result.serviceGroup[i + 2]);
          }else{
            arrayServiceGroupTmp.push({
              _id: "",
              title: "",
              thumbnail: ""
            })
          }
          if(i + 3 < result.serviceGroup.length){
            arrayServiceGroupTmp.push(result.serviceGroup[i + 3]);
          }else{
            arrayServiceGroupTmp.push({
              _id: "",
              title: "",
              thumbnail: ""
            })
          }

          self.listServiceCategory.push(arrayServiceGroupTmp);
        }

        self.getAllServiceLog();
    },
    error => {
      self.loading.dismiss();
    });
  }

  getAllServiceLog() {
    var self = this;
    this.apiService.getListServiceLogs()
      .subscribe(result => {
        self.listServiceLog = result.serviceLogs;
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }
  getShopProducts(page: number, limit: number, search: string, event: any, isRefresh: boolean) {
    const self = this;
    this.list_data_silde_2 = [];
    if (this.getShopProductSubscriber) {
      this.getShopProductSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getShopProductSubscriber = this.apiService.getDataServiceShopProduct(page, limit, search)
      .subscribe(result => {
        let data_shop_product = result.shopProducts;
        data_shop_product.forEach(product => {
          let title = product.title;
          let deadline = "-5%";
          let text_place = "B1505 - Vinhome Riverside";
          let text_star_rate = product.stars;
          let text_tag = "Giảm 5% toàn menu";
          let object = {
            '_id' : product._id,
            'thumbnail': product.thumbnail,
            'title': title,
            'deadline': deadline,
            'text_place': text_place,
            'text_star_rate': text_star_rate,
            'text_tag': text_tag
          }
          this.list_data_silde_2.push(object);
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

  detailPage(event) {
    this.navCtrl.navigateForward('/service-list-by-category/' + event.currentTarget.id);
  }

  addNewService(event){
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    this.alertService.presentToast(this.translate.instant('COMMON.maintain'));
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }
  moveResidentMarketPage() {
    this.navCtrl.navigateForward('/resident-market');
  }
  moveCallTheCarPage() {
    this.navCtrl.navigateForward('/call-the-car');
  }
  moveGianHangDetailPage(event) {
    this.navCtrl.navigateForward('/gian-hang-detail/' + event.currentTarget.id);
  }
  moveHistoryPage() {
    this.navCtrl.navigateForward('/history');
  }
  moveRepairServicePage() {
    this.navCtrl.navigateForward('/repair-service');
  }
  getStyleRange1(_id) {
    return this.list_data_range[_id]
  }
}
