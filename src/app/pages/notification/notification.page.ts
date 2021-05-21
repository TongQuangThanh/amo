import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { IonContent, NavController } from '@ionic/angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  
  listArticlesNew = [];
  listArticlesNoti = [];
  currentPageNew = 1;
  currentPageNoti = 1;
  isNews: number;
  numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
  getArticleSubscriber: Subscription;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions
  ) {}

  ngOnInit() {
    this.isNews = 1;
    this.getArticles(this.currentPageNew, this.numberRecordOnPage, '', '', null, true);
  }

  ionViewWillEnter() {}

  getArticles(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    const self = this;
    if (this.getArticleSubscriber) {
      this.getArticleSubscriber.unsubscribe();
    }
    this.loading.present();
    if (this.isNews == 0) {
      this.getArticleSubscriber = this.apiService.getListArticle(page, limit, category, search).subscribe(
        (result) => {
          if (isRefresh) {
            self.listArticlesNoti = result.articles;
          } else {
            self.listArticlesNoti = self.listArticlesNoti.concat(result.articles);
          }
          if (event) {
            event.target.complete();
          }
          self.loading.dismiss();
        },
        (error) => {
          self.loading.dismiss();
        }
      );
    } else {
      this.getArticleSubscriber = this.apiService.getPosts(page, limit, category, search).subscribe(
        (result) => {
          if (isRefresh) {
            self.listArticlesNew = result.posts;
          } else {
            self.listArticlesNew = self.listArticlesNew.concat(result.posts);
          }
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
  }

  loadData(event) {
    if (this.isNews == 1) {
      this.currentPageNew++;
      this.getArticles(this.currentPageNew, this.numberRecordOnPage, '', '', event, false);
    } else {
      this.currentPageNoti++;
      this.getArticles(this.currentPageNoti, this.numberRecordOnPage, '', '', event, false);
    }
  }

  detailPage(data) {
    if (this.isNews == 0) {
      if(data?.survey) {
        localStorage.setItem('survey_data_stored', JSON.stringify(data));
        this.navCtrl.navigateForward(`/survey/${data._id}`);
      } else {
        this.navCtrl.navigateForward('/notification-detail/' + data._id);
      }
    } else {
      this.navCtrl.navigateForward('/new-detail/' + data._id);
    }
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  doRefresh(event) {
    if (this.isNews == 1) {
      this.currentPageNew = 1;
      this.getArticles(this.currentPageNew, this.numberRecordOnPage, '', '', event, true);
    } else {
      this.currentPageNoti = 1;
      this.getArticles(this.currentPageNoti, this.numberRecordOnPage, '', '', event, true);
    }
  }

  toNews(event) {
    if(this.isNews != 1) {
      this.content.scrollToTop();
    }
    this.isNews = 1;
    if (!this.listArticlesNew || this.listArticlesNew.length == 0) {
      this.getArticles(this.currentPageNew, this.numberRecordOnPage, '', '', null, true);
    }
  }

  toNot(event) {
    if(this.isNews != 0) {
      this.content.scrollToTop();
    }
    this.isNews = 0;
    if (!this.listArticlesNoti || this.listArticlesNoti.length == 0) {
      this.getArticles(this.currentPageNoti, this.numberRecordOnPage, '', '', null, true);
    }
  }
}
