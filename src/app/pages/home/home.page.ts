import { Directive, Input, Component, OnInit, ViewChild } from '@angular/core';
import { Platform, NavController, ToastController, AlertController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { LoadingService } from '../../services/loading/loading.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { timeout } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  imageDefault: string;
  heightScreen: number;
  // data
  firstDepartment = null;
  listArticles: any;
  currentPage = 1;
  numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
  userName: string;
  avatar: string;
  getPostSubscriber: Subscription;
  getArticleSubscriber: Subscription;
  screenID: string;
  tabIconEnable: boolean = false;
  iconSelected = '';
  showHeader: number;
  listPaymentBills: any;
  totalPayment: any;
  numberOfRecordPayment: any;
  idRecordPayment: any;
  isWallet = false;
  todatHours = new Date().getHours();
  epayUserInfo = null;
  listServiceCategory = [];

  overDateBill = [];
  isShowBill = true;
  listBanner = [];

  slideOpts = {
    loop: true,
    initialSlide: 0,
    slidesPerView: 0.99,
    centeredSlides: true,
    spaceBetween: 0,
    autoplay: {
      disableOnInteraction: false,
    },
    delay: 5000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };

  constructor(
    private route: NavController,
    private loading: LoadingService,
    private platform: Platform,
    private apiService: ApiService,
    private navCtrl: NavController,
    private authService: AuthService,
    private nativePageTransitions: NativePageTransitions,
    public toastController: ToastController,
    private translate: TranslateService,
    private alertController: AlertController,
  ) {
    this.imageDefault = '../assets/common/no-thumbnail.png';
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.58 - 18;
    });
    const profile = this.authService.getProfile();
    UtilsService.isAppOpen = true;
    if (profile && this.userName != profile.displayName) {
      this.userName = profile.displayName;
    }
    if (profile && profile.avatar && profile.avatar != '' && this.avatar != profile.avatar) {
      this.avatar = profile.avatar;
    } else {
      this.avatar = '../assets/icon/avatar-default.png';
    }
    this.apiService.userClickStatistic('home').subscribe(
      (result) => {},
      (error) => {}
    );

    if (UtilsService.notificationNavigatorLink != '') {
      this.navCtrl.navigateForward(UtilsService.notificationNavigatorLink);
      UtilsService.notificationNavigatorLink = '';
    }
  }

  ngOnInit() {
    this.showHeader = 1;
    this.listArticles = [];
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', null, true);
    // this.getEpayUser();
    this.getListUserApar();
    this.getAllServiceSystem();
    this.getPaymentLogs(1, 5, '', '', null, true);
    this.getBanner();
  }

  ionViewWillEnter() {
    // this.epayUserInfo = this.apiService.getEpayUserStored();
  }

  // Get bill: Copy paste từ payment.page.ts
  getPaymentLogs(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    this.apiService.getListPayment(page, limit, category, search, 'publish').subscribe(
      (result) => {
        if (isRefresh) {
          this.overDateBill = [];
        }
        if (!result.paymentBills || result.paymentBills.length == 0) {
          return;
        }
        result.paymentBills.forEach((bill) => {
          if (bill.payment) {
            let today = new Date();
            let endAt = new Date(bill.payment.endAt);
            if (today > endAt && bill.status == 'publish') {
              bill.status = 'outdate';
            }
            bill.inOutDays = this.getDiffDays(today, endAt);
            this.overDateBill.push(bill);
          }
        });
      },
      (error) => {}
    );
  }
  // ==========================

  // getEpayUser() {
  //   this.apiService.getEpayUser().subscribe(
  //     (result) => {
  //       if (result && result.user_info) {
  //         this.epayUserInfo = result;
  //       } else {
  //         this.epayUserInfo = null;
  //       }
  //     },
  //     (error) => {}
  //   );
  // }

  getBanner() {
    this.apiService.getBanner().subscribe(
      (result) => {
        if(!result || !result.banners) {
          return;
        }
       this.listBanner = result.banners;
      },
      (error) => {}
    );
  }


  getArticles(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    const self = this;
    if (this.getArticleSubscriber) {
      this.getArticleSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getArticleSubscriber = this.apiService.getListArticle(1, 2, category, search).subscribe(
      (result) => {
        self.listArticles = result.articles;
        if (event) {
          event.target.complete();
        }
        self.loading.dismiss();
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  getListUserApar() {
    this.apiService.getListUserApartment().subscribe(
      (result) => {
        if (!result || !result.userApartments || result.userApartments.length == 0) {
          return;
        }
        this.firstDepartment = result.userApartments[0];
      },
      (error) => {}
    );
  }

  getAllServiceSystem() {
    const self = this;
    this.apiService.getListShopHouseCateV2().subscribe(
      (result) => {
        if (result && result.shopCategories) {
          self.listServiceCategory = result.shopCategories.slice(0, 3);
        } else {
          self.listServiceCategory = [];
        }
      },
      (error) => {}
    );
  }

  doRefresh(event) {
    this.isShowBill = true;
    this.currentPage = 1;
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', event, true);
    // this.getEpayUser();
    this.getAllServiceSystem();
    this.getPaymentLogs(1, 5, '', '', null, true);
    this.getBanner();
  }

  detailPage(event) {
    this.navCtrl.navigateForward('/new-detail/' + event.currentTarget.id);
  }
  detailPageNoti(event) {
    this.navCtrl.navigateForward('/notification-detail/' + event.currentTarget.id);
  }

  goToMyHome() {
    this.navCtrl.navigateForward('/my-home');
  }

  goToMyAccount() {
    this.navCtrl.navigateForward('/my-account');
  }

  createRequest() {
    this.navCtrl.navigateForward('/add-request');
  }

  goToServices(service: any) {
    this.navCtrl.navigateForward('/service-categories-list/' + service._id + '/' + service.title);
  }

  changeOther() {
    this.navCtrl.navigateForward('/dashboard/services');
  }

  changePayment() {
    if (this.numberOfRecordPayment == 1) {
      this.gotoPaymentDetailPage();
    } else {
      this.navCtrl.navigateForward('/dashboard/payment');
    }
  }

  goToNotification() {
    this.navCtrl.navigateForward('/dashboard/notification');
    this.iconSelected = 'notification';
  }

  goToNews() {
    this.navCtrl.navigateForward('/news');
  }

  getStyleHeader(index) {
    if (index == this.showHeader) {
      return '';
    } else {
      return 'none';
    }
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  formatMoney(stringValue) {
    let n = parseInt(stringValue);
    if (n || n == 0) {
      return n.toFixed(0).replace(/./g, function (c, i, a) {
        return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
      });
    } else {
      return '-';
    }
  }
  gotoPaymentDetailPage() {
    this.navCtrl.navigateForward('/payment-infor/' + this.idRecordPayment);
  }

  registrationNavigate(route: string) {
    this.navCtrl.navigateForward(route);
  }

  getDiffDays(startDate: Date, endDate: Date) {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  async presentAlert() {
    var self = this;
    const alert = await this.alertController.create({
      cssClass: 'comming-soon-payment-class',
      header: self.translate.instant('COMMON.information'),
      message: this.translate.instant('PAYMENT_INFOR.alert_comming_soon'),
      buttons: ['OK']
    });
    await alert.present();
  }
}
