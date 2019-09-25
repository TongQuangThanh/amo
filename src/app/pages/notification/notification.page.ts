import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingController } from '@ionic/angular';

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
    this.numberRecordOnPage = 10;
    this.showLoader();
    this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', null);
  }

  getArticles(page: number, limit: number, category: string, search: string, event: any) {
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
    console.log(event.currentTarget.id);
    const options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };

    this.nativePageTransitions.slide(options);
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
    return moment(stringDate).format('DD-MM-YYYY');
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
