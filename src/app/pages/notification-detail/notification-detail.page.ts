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
// import { PreviewAnyFile } from '@ionic-native/preview-any-file';

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
    // private previewAnyFile: PreviewAnyFile,
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
        console.log(1111);
        let url_online= "";
        const fileExtensition = element.fileName.split('.').pop().toLowerCase();
        if(fileExtensition == 'png' || fileExtensition == 'jpg' || fileExtensition == "pdf"){
          url_online = element.url
        }else{
          url_online = 'https://docs.google.com/viewer?url='+ element.url + '&embedded=true';
        }
        // window.open(url_online, '_blank', 'location=yes')
        // window.location.assign(url_online);
        const browser = this.iab.create(url_online, "_system", "location=yes,enableviewportscale=yes");
        browser.show();
        // PreviewAnyFile.preview(element.url)
        //   .then((res: any) => console.log(res))
        //   .catch((error: any) => console.error(error));
        return;
      }
    });
  }
}
