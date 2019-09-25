import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingController } from '@ionic/angular';

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

  constructor(
    public loadingController: LoadingController,
    platform: Platform,
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
    this.numberRecordOnPage = 10;
    this.showLoader();
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', null, false);
  }

  getNews(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    this.apiService.getPosts(page, limit, category, search)
      .subscribe(result => {
        if (isRefresh) {
          this.listNews = result.posts;
        } else {
          this.listNews = this.listNews.concat(result.posts);
        }
        if (event) {
          event.target.complete();
        }

        if (!isRefresh) {
          this.loadingController.dismiss();
        }
    });
  }

  loadData(event) {
    this.currentPage++;
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', event, false);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = 10;
    this.getNews(this.currentPage, this.numberRecordOnPage, '', '', event, true);
  }

  detailPage(event) {
    console.log(event);
  }

  newClick(event) {
    console.log(event);
    event.stopPropagation();
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Loading content'
    }).then((res) => {
      res.present();
    });
  }

}
