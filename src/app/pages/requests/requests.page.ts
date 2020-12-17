import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { LoadingService } from '../../services/loading/loading.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';

import { PopupRegistrationTypePage } from '../popup-registration-type/popup-registration-type.page';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  modeService: string = "All";
  listRequestAll: any;
  currentPage: number;
  numberRecordOnPage: number;
  listRequestRegistion: any;
  currentPageRegistion: number;
  numberRecordOnPageRegistion: number;
  heightScreen: number;
  heightScreenSub: number;
  getRequestSubscriber: Subscription;
  getRequestSubscriberRegistion: Subscription;

  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
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
    // this.listRequestAll  = [];
    // this.listRequestRegistion = [];
    // this.currentPage = 1;
    // this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    // this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', null, false);
  }

  ionViewWillEnter(){
    this.modeService = "All";
    this.listRequestAll  = [];
    this.listRequestRegistion = [];
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.currentPageRegistion = 1;
    this.numberRecordOnPageRegistion = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', null, true);
    this.getRequestRegisterAll(this.currentPageRegistion, this.numberRecordOnPageRegistion, '', '', null, true);
  }

  getRequestAll(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    const self = this;
    if (this.getRequestSubscriber) {
      this.getRequestSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getRequestSubscriber = this.apiService.getListRequest(page, limit, category, search)
      .subscribe(result => {
        if (isRefresh) {
          self.listRequestAll = result.feedbacks;
        } else {
          self.listRequestAll = self.listRequestAll.concat(result.feedbacks);
        }
        if (event) {
          event.target.complete();
        }

        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  getRequestRegisterAll(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    const self = this;
    if (this.getRequestSubscriberRegistion) {
      this.getRequestSubscriberRegistion.unsubscribe();
    }
    this.loading.present();
    this.getRequestSubscriberRegistion = this.apiService.getListRequestRegister(page, limit, category, search)
      .subscribe(result => {
        if (isRefresh) {
          self.listRequestRegistion = result.feedbacknews;
        } else {
          self.listRequestRegistion = self.listRequestRegistion.concat(result.feedbacknews);
        }
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
    this.currentPageRegistion++;
    this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', event, false);
    this.getRequestRegisterAll(this.currentPageRegistion, this.numberRecordOnPageRegistion, '', '', event, false);
  }

  detailPage(event) {
    //// this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/request-detail/' + event.currentTarget.id);
  }

  detailRegisterPage(event) {
    //// this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/request-register-detail/' + event.currentTarget.id);
  }

  addRequest(){
    //// this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/add-request');
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.currentPageRegistion = 1;
    this.numberRecordOnPageRegistion = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getRequestAll(this.currentPage, this.numberRecordOnPage, '', '', event, true);
    this.getRequestRegisterAll(this.currentPageRegistion, this.numberRecordOnPageRegistion, '', '', event, true);
  }

  async registrationTypeModal() {
    const modal = await this.modalController.create({
      component: PopupRegistrationTypePage,
      cssClass: 'popupRegistrationType-page-custom'
    });
    return await modal.present();
  }
}
