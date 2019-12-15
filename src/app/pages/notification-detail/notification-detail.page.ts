import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service';
import { NotificationCommentPage } from '../notification-comment/notification-comment.page'
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.page.html',
  styleUrls: ['./notification-detail.page.scss'],
})
export class NotificationDetailPage implements OnInit {

  articleTitle: string;
  articleContent: string;
  thumbnail: string;
  readsCount: number;
  sharesCount: number;
  attachments: any;
  createdAt: string;
  createBy: string;
  articleID:string;

  constructor(
    private iab: InAppBrowser,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public modalController: ModalController) { }
  ngOnInit() {
    this.articleID = this.route.snapshot.paramMap.get('id');
    this.articleTitle = "";
    this.articleContent = "";
    this.thumbnail = "../../../assets/common/no-thumbnail.png";
    
    this.getArticleDetail(this.articleID);
  }

  getArticleDetail(articleID) {
    this.loading.present();
    const self = this;
    this.apiService.getArticleDetail(articleID)
      .subscribe(result => {
        self.articleTitle = result.article.title;
        self.articleContent = result.article.content;
        self.thumbnail = result.article.thumbnail;
        self.attachments = result.article.attachments;
        self.readsCount = result.article.readsCount;
        self.sharesCount = result.article.sharesCount;
        self.createdAt = result.article.createdAt;
        self.createBy = result.article.createdBy != null ? result.article.createdBy.displayName : "";
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  showListComment(){
    this.navCtrl.navigateForward('/notificationComment/' + this.articleID);
  }

  detailAttachment(event){
    console.log(event)
    this.attachments.forEach(element => {
      if(element.id == event.target.id){
        const browser = this.iab.create(element.url);
        browser.show();
        return;
      }
    });
  }
}
