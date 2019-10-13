import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingController } from '@ionic/angular';
import { ConstService } from '../../utils/const.service'

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.page.html',
  styleUrls: ['./notification-detail.page.scss'],
})
export class NotificationDetailPage implements OnInit {

  articleTitle: string;
  articleContent: string;
  loaderToShow: any;
  thumbnail: string;
  readsCount: number;
  sharesCount: number;

  constructor(
    public loadingController: LoadingController,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions) { }
  ngOnInit() {
    const articleID = this.route.snapshot.paramMap.get('id');
    this.articleTitle = "";
    this.articleContent = "";
    this.thumbnail = "../../../assets/common/no-thumbnail.png";
    
    this.getArticleDetail(articleID);
  }

  getArticleDetail(articleID) {
    let self = this;
    this.showLoader();
    this.apiService.getArticleDetail(articleID)
      .subscribe(result => {
        self.articleTitle = result.article.title;
        self.articleContent = result.article.content;
        self.thumbnail = result.article.thumbnail;
        self.readsCount = result.article.readsCount;
        self.sharesCount = result.article.sharesCount;
        self.loadingController.dismiss();
    });
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

  backScreen(event){
    this.navCtrl.back({
      animated: true,
      animationDirection: 'back'
  })
  }
}
