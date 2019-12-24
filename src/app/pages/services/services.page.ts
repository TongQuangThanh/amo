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

  ngOnInit() {
    // this.listServiceCategory = [];
    // this.listServiceLog = [];
    // this.getRequestAll();
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
}
