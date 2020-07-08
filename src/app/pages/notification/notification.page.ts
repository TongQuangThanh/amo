import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  listArticles: any;
  currentPage: number;
  numberRecordOnPage: number;
  getArticleSubscriber: Subscription;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) { }
  ngOnInit() {
    // this.listArticles  = [];
    // this.currentPage = 1;
    // this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    // this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', null);
  }

  ionViewWillEnter(){
    this.listArticles  = [];
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', null, true);
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
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', event, false);
  }

  detailPage(event) {
    // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/notification-detail/' + event.currentTarget.id);
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', event, true);
  }

}
