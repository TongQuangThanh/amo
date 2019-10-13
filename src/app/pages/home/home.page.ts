import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { LoadingService } from '../../services/loading/loading.service';

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
  loaderToShow: any;
  isLoading = false;

  constructor(
    private loading: LoadingService,
    private platform: Platform,
    private apiService: ApiService,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) {
    this.imageDefault = 'assets/common/no-thumbnail.png';
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.55 - 32;
    });
  }

  ngOnInit() {
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
    this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/new-detail/' + event.currentTarget.id);
  }
}
