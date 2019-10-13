import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  modeService: string = "All";
  listRequestAll: any;
  listRequestRegistion: any;
  currentPage: number;
  numberRecordOnPage: number;
  loaderToShow: any;
  heightScreen: number;
  heightScreenSub: number;

  constructor(
    public loadingController: LoadingController,
    private apiService: ApiService,
    private navCtrl: NavController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions) {
      const self = this;
      platform.ready().then((readySource) => {
        self.heightScreen = platform.height() - 120 - 90;
        self.heightScreenSub = self.heightScreen;
      });
  }

  ngOnInit() {
    this.listRequestAll  = [];
    this.listRequestRegistion = [];
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', null, false);
  }

  getRequestAll(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    this.showLoader();
    this.apiService.getListRequest(page, limit, category, search)
      .subscribe(result => {
        this.listRequestAll = this.listRequestAll.concat(result.feedbacks);
        if (event) {
          event.target.complete();
        }

        this.loadingController.dismiss();
    });
  }

  loadData(event) {
    this.currentPage++;
    this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', event, false);
  }

  detailPage(event) {
    console.log(event);
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Loading content'
    }).then((res) => {
      res.present();
    });
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', event, true);
  }
}
