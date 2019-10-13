import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  modeService: string = "All";
  listServiceCategory: any[];
  listServiceLog: any;
  loaderToShow: any;
  heightScreen: number;

  constructor(
    public loadingController: LoadingController,
    private apiService: ApiService,
    private navCtrl: NavController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions) {
      platform.ready().then((readySource) => {
        this.heightScreen = platform.height() - 120 - 90;
      });
  }

  ngOnInit() {
    this.listServiceCategory = [];
    this.listServiceLog = [];
    this.getRequestAll();
  }

  getRequestAll() {
    this.showLoader();
    var self = this;
    this.apiService.getListServiceGroup()
      .subscribe(result => {
        for(let i=0;i<result.serviceGroup.length;i+=3){
          let arrayServiceGroupTmp = [];
          if(i < result.serviceGroup.length){
            arrayServiceGroupTmp.push(result.serviceGroup[i]);
          }
          if(i + 1 < result.serviceGroup.length){
            arrayServiceGroupTmp.push(result.serviceGroup[i + 1]);
          }
          if(i + 2 < result.serviceGroup.length){
            arrayServiceGroupTmp.push(result.serviceGroup[i + 2]);
          }

          self.listServiceCategory.push(arrayServiceGroupTmp);
        }
        self.getAllServiceLog();
    });
  }

  getAllServiceLog(){
    var self = this;
    this.apiService.getListServiceLogs()
      .subscribe(result => {
        self.listServiceLog = result.serviceLogs;
        self.loadingController.dismiss();
    });
  }

  detailPage(event) {
    this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/service-list-by-category/' + event.currentTarget.id);
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Loading content'
    }).then((res) => {
      res.present();
    });
  }
}
