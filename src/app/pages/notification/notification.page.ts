import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  listArticles: any;
  currentPage: number;
  numberRecordOnPage: number;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) { }
  ngOnInit() {
    this.listArticles  = [];
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', null);
  }

  getArticles(page: number, limit: number, category: string, search: string, event: any) {
    this.loading.present();
    const self = this;
    this.apiService.getListArticle(page, limit, category, search)
      .subscribe(result => {
        self.listArticles = self.listArticles.concat(result.articles);
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
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', event);
  }

  detailPage(event) {
    // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/notificationDetail/' + event.currentTarget.id);
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', event);
  }

}
