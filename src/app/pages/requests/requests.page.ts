import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { LoadingService } from '../../services/loading/loading.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';

import { PopupRegistrationTypePage } from '../popup-registration-type/popup-registration-type.page';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  modeService: string = 'All';
  listRequestAll = [];
  listRequestNew = [];
  listRequestProcessing = [];
  listRequestCompleted = [];
  currentPageAll = 1;
  currentPageNew = 1;
  currentPageProcess = 1;
  currentPageComplate = 1;

  numberRecordOnPage: number;
  heightScreen: number;
  heightScreenSub: number;
  activeTabIndex = 0;

  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private platform: Platform,
    private nativePageTransitions: NativePageTransitions,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const self = this;
    platform.ready().then((readySource) => {
      self.heightScreen = platform.height() - 120 - 90;
      self.heightScreenSub = self.heightScreen;
    });
  }

  ngOnInit() {
    this.modeService = 'All';
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.route.queryParams.subscribe((params) => {
      const stateData = this.router.getCurrentNavigation().extras.state;
      if(stateData && stateData.isReload) {
        this.activeTabIndex = 0;
        this.doRefresh(null);
        setTimeout(() => {
          let element: HTMLElement = document.getElementById('tab_all') as HTMLElement;
          if(element){
            element.click();
          }
        });
      } else {
        this.getListRequestRegister(this.currentPageAll, this.numberRecordOnPage, '', '', null, true); 
      }
    });
    
  }

  ionViewWillEnter() {}

  getListRequestRegister(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean, status: string = '') {
    const self = this;
    this.loading.present();
    if (event) {
      event.target.complete();
    }
    this.apiService.getListRequestRegister(page, limit, category, search, status).subscribe(
      (result) => {
        self.loading.dismiss();
        const feedbacks = result.feedbacknews;
        this.pushDataRequest(feedbacks, isRefresh);
      },
      (error) => {
        self.loading.dismiss();
      },
      () => {
        self.loading.dismiss();
        if (event) {
          event.target.complete();
        }
      }
    );
  }
  pushDataRequest(data, isRefresh) {
    switch (this.activeTabIndex) {
      case 1:
        if (isRefresh) {
          this.listRequestNew = data;
        } else {
          this.listRequestNew.push(...data);
        }
        break;
      case 2:
        if (isRefresh) {
          this.listRequestProcessing = data;
        } else {
          this.listRequestProcessing.push(...data);
        }
        break;
      case 3:
        if (isRefresh) {
          this.listRequestCompleted = data;
        } else {
          this.listRequestCompleted.push(...data);
        }
        break;
      default:
        if (isRefresh) {
          this.listRequestAll = data;
        } else {
          this.listRequestAll.push(...data);
        }
        break;
    }
  }

  loadData($event) {
    this.allApiRequest($event, true);
  }

  detailPage(event) {
    this.navCtrl.navigateForward('/request-detail/' + event.currentTarget.id);
  }

  detailRegisterPage(event) {
    this.navCtrl.navigateForward('/request-register-detail/' + event.currentTarget.id);
  }

  addRequest() {
    this.navCtrl.navigateForward('/add-request');
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  doRefresh(event) {
    this.listRequestAll = [];
    this.listRequestNew = [];
    this.listRequestProcessing = [];
    this.listRequestCompleted = [];
    this.currentPageAll = 1;
    this.currentPageNew = 1;
    this.currentPageProcess = 1;
    this.currentPageComplate = 1;
    this.allApiRequest(event, false);
  }

  async registrationTypeModal() {
    const modal = await this.modalController.create({
      component: PopupRegistrationTypePage,
      cssClass: 'popupRegistrationType-page-custom',
    });
    return await modal.present();
  }

  registrationNavigate(route: string) {
    this.navCtrl.navigateForward(route);
  }

  onTabChange($event) {
    this.activeTabIndex = $event.detail.index;
    this.allApiRequest(null);
  }

  allApiRequest(event, isLoadMore = false) {
    switch (this.activeTabIndex) {
      case 1:
        if (!isLoadMore && this.listRequestNew.length == 0) {
          this.getListRequestRegister(this.currentPageNew, this.numberRecordOnPage, '', '', event, false, 'new');
        } else if (isLoadMore) {
          this.currentPageNew++;
          this.getListRequestRegister(this.currentPageNew, this.numberRecordOnPage, '', '', event, false, 'new');
        }
        break;
      case 2:
        if (!isLoadMore && this.listRequestProcessing.length == 0) {
          this.getListRequestRegister(this.currentPageProcess, this.numberRecordOnPage, '', '', event, false, 'processing');
        } else if (isLoadMore) {
          this.currentPageProcess++;
          this.getListRequestRegister(this.currentPageProcess, this.numberRecordOnPage, '', '', event, false, 'processing');
        }
        break;
      case 3:
        if (!isLoadMore && this.listRequestCompleted.length == 0) {
          this.getListRequestRegister(this.currentPageComplate, this.numberRecordOnPage, '', '', event, false, 'completed');
        } else if (isLoadMore) {
          this.currentPageComplate++;
          this.getListRequestRegister(this.currentPageComplate, this.numberRecordOnPage, '', '', event, false, 'completed');
        }
        break;
      default:
        if (!isLoadMore && this.listRequestAll.length == 0) {
          this.getListRequestRegister(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
        } else if (isLoadMore) {
          this.currentPageAll++;
          this.getListRequestRegister(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
        }
        break;
    }
  }
}
