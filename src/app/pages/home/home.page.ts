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

  constructor(
    private loading: LoadingService,
    private platform: Platform,
    private apiService: ApiService,
    private navCtrl: NavController,
    private authService: AuthService,
    private nativePageTransitions: NativePageTransitions) {
    this.imageDefault = 'assets/common/no-thumbnail.png';
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.58 - 28;
    });
  }

  ngAfterViewChecked(){
    const profile = this.authService.getProfile();
    if(profile && this.userName != profile.displayName){
      this.userName = profile.displayName;
      
    }
    if(profile && profile.avatar != "" && this.avatar != profile.avatar){
      this.avatar = profile.avatar;
    }
  }

  ngOnInit() {
    // this.listNews  = [];
    // this.currentPage = 1;
    // this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    // this.getNews(this.currentPage, this.numberRecordOnPage, '', '', null, false);
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
}
