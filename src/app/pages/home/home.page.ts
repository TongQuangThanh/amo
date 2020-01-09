import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { LoadingService } from '../../services/loading/loading.service';
import { AuthService } from 'src/app/services/auth/auth.service';

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
  currentPage: number;
  numberRecordOnPage: number;
  userName: string;
  avatar: string;
  popupThumbnail: string;
  popupButtonTitle: string;
  popupButtonStyle: any;
  popupButtonColor: string;
  popupLink: string;
  isShowPopup: boolean;

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
    this.popupThumbnail = "";
    this.popupButtonTitle = "";
    this.popupLink = "";
    this.isShowPopup = false;
    this.getConfigPopup();
    const profile = this.authService.getProfile();
    if(profile && this.userName != profile.displayName){
      this.userName = profile.displayName;
      
    }
    if(profile && profile.avatar && profile.avatar != "" && this.avatar != profile.avatar){
      this.avatar = profile.avatar;
    }else{
      this.avatar = '../assets/icon/avatar-default.png';
    }
    this.apiService.userClickStatistic('home')
      .subscribe(result => {
        console.log(result)
    },
    error => {
      console.log(error)
    });
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
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', null, false);
  }

  getConfigPopup() {
    const self = this;
    this.apiService.getPopupConfig()
      .subscribe(result => {
        self.popupThumbnail = result.popupConfig.thumbnail;
        self.popupButtonTitle = result.popupConfig.buttonTitle;
        if(self.popupButtonTitle != null && self.popupButtonTitle.length > 0){
          self.isShowPopup = true;
        }
        self.popupButtonColor= "color: red;";
        self.popupButtonStyle = { '--background': result.popupConfig.buttonColor, 'color': result.popupConfig.textColor };
        self.popupLink = result.popupConfig.link;

    },
    error => {
    });
  }

  getNews(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    const self = this;
    this.loading.present();
    this.apiService.getPosts(page, limit, category, search)
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

  loadData(event) {
    this.currentPage++;
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', event, false);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', event, true);
  }

  detailPage(event) {
    // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/new-detail/' + event.currentTarget.id);
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

  changeRoomService(){
    this.navCtrl.navigateForward('/service-detail/5dd89f2e4f49f84a7ecd1b5d');
  }

  changeReparing(){
    this.navCtrl.navigateForward('/service-detail/5e100f3ad010aa572bc9497c');
  }
  changeFood(){
    this.navCtrl.navigateForward('/service-detail/5dcbac0447a69d3e4ebae1a3');
  }

  changeOther(){
    this.navCtrl.navigateForward('/service-list-by-category/5dcbaa0647a69d3e4ebae19e');
  }
  
  changePayment(){
    // this.navCtrl.navigateForward('/service-list-by-category/5cbc3fad1f4b43178ea16a10');
  }

  onScroll(event) {
    if(event.detail.currentY >= 0 && event.detail.currentY % 3 ==0){
      const newHeight = 14 - event.detail.currentY/(20*2);
      const newtop = 35 - event.detail.currentY/(10);
      const newtop1 = 25 - event.detail.currentY/(20);
      const newtop2 = 33 - event.detail.currentY/(20);
      
      if(newHeight > 9){
        document.getElementById('contentNews').style.height = newHeight + '%';
        document.getElementById('content-button-child').style.top = newtop + '%';
        document.getElementById('function-content-big').style.display = "";
        document.getElementById('function-content-big').style.top = 'calc('+newtop1+'% + 26px)';
        document.getElementById('function-content-small').style.display = "none";
        document.getElementById('contentNews').style.display = "";
        document.getElementById('new-content').style.top = 'calc('+newtop2+'% + 35px)';
        this.heightScreen = this.platform.height() * 0.58 - 18 + event.detail.currentY/1.5;
      }else{
        document.getElementById('function-content-big').style.display = "none";
        document.getElementById('contentNews').style.display = "none";
        document.getElementById('function-content-small').style.display = "";
        document.getElementById('function-content-small').style.top = 'calc('+9+'% + 26px)';
        document.getElementById('new-content').style.top = 'calc(18% + 35px)'
        this.heightScreen = this.platform.height() * 0.72 - 18;
      }
    }
  }

  changeScreenPopup(){
    this.navCtrl.navigateForward(this.popupLink);
  }
  closePopup(){
    this.isShowPopup = false;
  }
}
