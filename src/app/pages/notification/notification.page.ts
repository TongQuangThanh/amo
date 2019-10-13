import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingController } from '@ionic/angular';
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
  loaderToShow: any;

  constructor(
    public loadingController: LoadingController,
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
    this.showLoader();
    this.apiService.getListArticle(page, limit, category, search)
      .subscribe(result => {
        this.listArticles = this.listArticles.concat(result.articles);
        if (event) {
          event.target.complete();
        }
        this.loadingController.dismiss();
    });
  }

  loadData(event) {
    this.currentPage++;
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', event);
  }

  detailPage(event) {
    this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/notificationDetail/' + event.currentTarget.id);
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Loading content'
    }).then((res) => {
      res.present();
    });
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
