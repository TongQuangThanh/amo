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
    this.list_data_silde_1 = [];
    this.list_data_silde_2 = [];
    this.list_data_range = {};
    this.listServiceCategory = [];
    this.listServiceLog = [];
    this.getServicePromotionCode();
    this.currentPageNoti = 1;
    this.numberRecordOnPageNoti = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getDataUserShop(this.currentPageNoti, this.numberRecordOnPageNoti, '', null, true);
    this.getAllServiceSystem();
  }

  ionViewWillEnter(){
    // this.listServiceCategory = [];
    // this.listServiceLog = [];
    // this.getServicePromotionCode();
    // this.currentPageNoti = 1;
    // this.numberRecordOnPageNoti = ConstService.NUMBER_RECORD_ON_PAGE;
    // this.getDataUserShop(this.currentPageNoti, this.numberRecordOnPageNoti, '', null, true);
    // this.getAllServiceSystem();
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
          let slider_value = product.numberOrder*100/product.promotion2;
          let discount = 0;
          if (product.numberOrder >= product.promotion1 && product.numberOrder < product.promotion2) {
            discount = product.promotionPercent1 / 100;
          } else if (product.numberOrder == product.promotion2) {
            discount = product.promotionPercent2 / 100;
          }
          let money = self.convertFormatMoney(product.shopProduct.price - product.shopProduct.price * discount) + 'đ';
          let detail = 'Cùng mua với bạn bè/hàng xóm để được nhận giảm giá cao nhất.';
          let actual_order = product.numberOrder+"/"+product.promotion2;
          
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
          self.list_data_range[product._id] = slider_value + '%';
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
  getDataUserShop(page: number, limit: number, search: string, event: any, isRefresh: boolean) {
    const self = this;
    this.list_data_silde_2 = [];
    if (this.getShopProductSubscriber) {
      this.getShopProductSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getShopProductSubscriber = this.apiService.getDataUserShop(page, limit, search)
      .subscribe(result => {
        let data_shop_product = result.requestShopProducts;
        data_shop_product.forEach(product => {
          let title = product.title;
          let text_note = "KM";
          let text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
          let text_star_rate = product.stars;
          let text_tag = product.promotion ? product.promotion : "";
          let thumbnail = product.thumbnail;
          if (product.attachments && product.attachments.length > 0) {
            thumbnail = product.attachments[0].url;
          }
          let object = {
            '_id' : product._id,
            'thumbnail': thumbnail,
            'title': title,
            'text_note': text_note,
            'type_note': text_tag == "" ? 0 : 1,
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
  convertFormatMoney(value) {
    value = value.toString();
    let convert1 = "";
    let convert2 = "";
    let count1 = value.length;
    for(let i = 1; i <= count1; i++) {
      if (i % 3 == 0 && i != count1) {
        convert1 = convert1 + value[count1 - i] + '.';
      } else {
        convert1 = convert1 + value[count1 - i];
      }
    }
    let count2 = convert1.length
    for(let i = 1; i <= count2; i++) {
      convert2 = convert2 + convert1[count2 - i];
    }
    return convert2;
  }
}
