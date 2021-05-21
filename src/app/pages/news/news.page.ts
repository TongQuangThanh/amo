import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  listPosts: any;
  currentPage: number;
  numberRecordOnPage: number;
  getPostSubscriber: Subscription;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.listPosts  = [];
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getListPosts(this.currentPage, this.numberRecordOnPage, '', '', null, true);
  }

  getListPosts(page: number, limit: number, category: string, search: string, event: any, isRefresh: boolean) {
    
    const self = this;
    if (this.getPostSubscriber) {
      this.getPostSubscriber.unsubscribe();
    }
    this.loading.present();
    this.getPostSubscriber = this.apiService.getPosts(page, limit, category, search)
      .subscribe(result => {
        if (isRefresh) {
          self.listPosts = result.posts;
        } else {
          self.listPosts = self.listPosts.concat(result.posts);
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
    this.getListPosts(this.currentPage, this.numberRecordOnPage, '', '', event, false);
  }

  detailPage(event) {
    // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/new-detail/' + event.currentTarget.id);
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getListPosts(this.currentPage, this.numberRecordOnPage, '', '', event, true);
  }

}
