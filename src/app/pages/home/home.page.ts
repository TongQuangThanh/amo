import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { LoadingService } from '../../services/loading/loading.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  imageDefault: string;
  heightScreen: number;
  // data
  listNews: any;
  listArticles: any;
  currentPage: number;
  numberRecordOnPage: number;
  currentPageNoti: number;
  numberRecordOnPageNoti: number;
  userName: string;
  avatar: string;
  getPostSubscriber: Subscription;
  getArticleSubscriber: Subscription;
  // popupThumbnail: string;
  // popupButtonTitle: string;
  // popupButtonStyle: any;
  // popupButtonColor: string;
  // popupLink: string;
  // isShowPopup: boolean;

  constructor(
    private loading: LoadingService,
    private platform: Platform,
    private apiService: ApiService,
    private navCtrl: NavController,
    private authService: AuthService,
    private nativePageTransitions: NativePageTransitions) {
    this.imageDefault = '../assets/common/no-thumbnail.png';
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.58 - 18;
    });
    // this.popupThumbnail = "";
    // this.popupButtonTitle = "";
    // this.popupLink = "";
    // this.isShowPopup = false;
    // this.getConfigPopup();
    const profile = this.authService.getProfile();
    UtilsService.isAppOpen = true;
    if(profile && this.userName != profile.displayName){
      this.userName = profile.displayName;
      
    }
    if(profile && profile.avatar && profile.avatar != "" && this.avatar != profile.avatar){
      this.avatar = profile.avatar;
    }else{
      this.avatar = '../assets/icon/avatar-default.svg';
    }
    this.apiService.userClickStatistic('home')
      .subscribe(result => {
        console.log(result)
    },
    error => {
      console.log(error)
    });

    if(UtilsService.notificationNavigatorLink != ""){
      this.navCtrl.navigateForward(UtilsService.notificationNavigatorLink);
      UtilsService.notificationNavigatorLink = "";
    }
  }

  ngOnInit() {
    const params = {
      playerId: localStorage.getItem('playID')
    };
    this.apiService.settingNotification(params)
      .subscribe(result => {
        console.log(result)
    },
    error => {
      console.log(error)
    });
  }
  
  ionViewWillEnter(){
    this.listNews  = [];
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.listArticles  = [];
    this.currentPageNoti = 1;
    this.numberRecordOnPageNoti = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', null, true);
    this.getArticles(this.currentPageNoti, this.numberRecordOnPageNoti, '', '', null, true);
  }

  // getConfigPopup() {
  //   const self = this;
  //   this.apiService.getPopupConfig()
  //     .subscribe(result => {
  //       self.popupThumbnail = result.popupConfig.thumbnail;
  //       self.popupButtonTitle = result.popupConfig.buttonTitle;
  //       if(self.popupButtonTitle != null && self.popupButtonTitle.length > 0){
  //         self.isShowPopup = true;
  //       }
  //       self.popupButtonColor= "color: red;";
  //       self.popupButtonStyle = { '--background': result.popupConfig.buttonColor, 'color': result.popupConfig.textColor };
  //       self.popupLink = result.popupConfig.link;

  //   },
  //   error => {
  //   });
  // }

  getNews(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    const self = this;
    if (this.getPostSubscriber) {
      this.getPostSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getPostSubscriber = this.apiService.getPosts(page, limit, category, search)
      .subscribe(result => {
        if (isRefresh) {
          self.listNews = result.posts;
        } else {
          self.listNews = self.listNews.concat(result.posts);
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

  getArticles(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    
    const self = this;
    if (this.getArticleSubscriber) {
      this.getArticleSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getArticleSubscriber = this.apiService.getListArticle(page, limit, category, search)
      .subscribe(result => {
        if (isRefresh) {
          self.listArticles = result.articles;
        } else {
          self.listArticles = self.listArticles.concat(result.articles);
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
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', event, false);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', event, true);
  }

  loadDataNoti(event) {
    this.currentPageNoti++;
    this.getArticles(this.currentPageNoti, this.numberRecordOnPageNoti, '', '', event, false);
  }

  doRefreshNoti(event) {
    this.currentPageNoti = 1;
    this.numberRecordOnPageNoti = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getArticles(this.currentPage, this.numberRecordOnPageNoti, '', '', event, true);
  }

  detailPage(event) {
    // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/new-detail/' + event.currentTarget.id);
  }
  detailPageNoti(event) {
    // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/notification-detail/' + event.currentTarget.id);
  }

  goToMyHome(){
    this.navCtrl.navigateForward('/my-home');
  }

  goToMyAccount(){
    this.navCtrl.navigateForward('/my-account');
  }

  createRequest(){
    this.navCtrl.navigateForward('/add-request');
  }

  changeCarBooking(){
    this.navCtrl.navigateForward('/call-the-car');
  }

  changeReparing(){
    this.navCtrl.navigateForward('/repair-service');
  }
  changeHelper(){
    this.navCtrl.navigateForward('/repair-service');
  }

  changeOther(){
    this.navCtrl.navigateForward('/repair-service');
  }
  
  changePayment(){
    this.navCtrl.navigateForward('/payment');
  }

  goToNotification(){
    this.navCtrl.navigateForward('/notification/notification.module');
  }

  goToNews(){
    this.navCtrl.navigateForward('/news');
  }

  onScroll(event) {
    if(event.detail.currentY >= 0 && event.detail.currentY % 3 ==0){
      const newHeight = 14 - event.detail.currentY/(20*2);
      const newtop = 35 - event.detail.currentY/(10);
      const newtop1 = 25 - event.detail.currentY/(20);
      const newtop2 = 33 - event.detail.currentY/(20);
      
      if(newHeight > 8){
        document.getElementById('main-header').style.display = "";
        document.getElementById('sub-header').style.display = "none";
        document.getElementById('main-header').style.transition = "height 0.5s ease-in-out";
        // document.getElementById('contentNews').style.height = newHeight + '%';
        // document.getElementById('content-button-child').style.top = newtop + '%';
        // document.getElementById('function-content-big').style.display = "";
        // document.getElementById('function-content-big').style.top = 'calc('+newtop1+'% + 26px)';
        // document.getElementById('function-content-small').style.display = "none";
        // document.getElementById('contentNews').style.display = "";
        // document.getElementById('new-content').style.top = 'calc('+newtop2+'% + 35px)';
        this.heightScreen = this.platform.height() * 0.58 - 18 + event.detail.currentY/1.5;
      }else{
        document.getElementById('main-header').style.display = "none";
        document.getElementById('sub-header').style.display = "";
        document.getElementById('sub-header').style.transition = "height 0.5s ease-in-out";
        // document.getElementById('contentNews').style.display = "none";
        // document.getElementById('function-content-small').style.display = "";
        // document.getElementById('function-content-small').style.top = 'calc('+9+'% + 26px)';
        // document.getElementById('new-content').style.top = 'calc(18% + 35px)'
        this.heightScreen = this.platform.height() * 0.72 - 18;
      }
    }
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

}
