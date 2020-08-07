import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';

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

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private platform: Platform,
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
    // this.listServiceCategory = [];
    // this.listServiceLog = [];
    // this.getRequestAll();
    this.list_data_silde_1 = [
      {id: "1", url: "../assets/images/services/1.png", deadline: "Còn 10 ngày"},
      {id: "2", url: "../assets/images/services/2.png", deadline: "Còn 11 ngày"},
      {id: "3", url: "../assets/images/services/3.png", deadline: "Còn 12 ngày"},
      {id: "4", url: "../assets/images/services/2.png", deadline: "Còn 13 ngày"},
      {id: "5", url: "../assets/images/services/1.png", deadline: "Còn 14 ngày"}
    ]
    this.list_data_silde_2 = [
      {id: "1", url: "../assets/images/services/3.png", deadline: "Khuyến mại", title: "Miến trộn quán cây xoài", text_place: "B1505 - Vinhome Riverside", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu"},
      {id: "2", url: "../assets/images/services/3.png", deadline: "Khuyến mại", title: "Miến trộn quán cây xoài", text_place: "B1505 - Vinhome Riverside", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu"},
      {id: "3", url: "../assets/images/services/3.png", deadline: "Khuyến mại", title: "Miến trộn quán cây xoài", text_place: "B1505 - Vinhome Riverside", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu"},
      {id: "4", url: "../assets/images/services/3.png", deadline: "Khuyến mại", title: "Miến trộn quán cây xoài", text_place: "B1505 - Vinhome Riverside", text_star_rate: "4.5", text_tag: "Giảm 5% toàn menu"}
    ]
  }

  ionViewWillEnter(){
    this.listServiceCategory = [];
    this.listServiceLog = [];
    this.getRequestAll();
  }

  getRequestAll() {
    const self = this;
    this.loading.present();
    this.apiService.getListServiceGroup()
      .subscribe(result => {
        for(let i=0;i<result.serviceGroup.length;i+=3){
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

          self.listServiceCategory.push(arrayServiceGroupTmp);
        }

        self.getAllServiceLog();
    },
    error => {
      self.loading.dismiss();
    });
  }

  getAllServiceLog(){
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
}