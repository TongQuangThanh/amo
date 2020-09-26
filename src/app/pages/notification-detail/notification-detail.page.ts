import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams, Platform } from '@ionic/angular';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service';
import { NotificationCommentPage } from '../notification-comment/notification-comment.page'
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
// import { PreviewAnyFile } from '@ionic-native/preview-any-file';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.page.html',
  styleUrls: ['./notification-detail.page.scss'],
})
export class NotificationDetailPage implements OnInit {

  @ViewChild("comment_input") inputField: ElementRef;

  heightScreen: number;
  articleTitle: string;
  articleContent: string;
  thumbnail: string;
  readsCount: number;
  commentsCount: number;
  sharesCount: number;
  attachments: any;
  createdAt: string;
  createBy: string;
  articleID:string;
  listArticlesComment: any;
  currentPage: number;
  profile: any;
  showHeader: number;
  apartment: string;
  numberRecordOnPage: number;
  editorMsg:any;
  showReply: boolean;

  constructor(
    private translate: TranslateService,
    private platform: Platform,
    private iab: InAppBrowser,
    // private previewAnyFile: PreviewAnyFile,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertService: AlertService,
    public modalController: ModalController) { 
      this.profile = this.authService.getProfile();
      this.listArticlesComment = [];
      this.currentPage = 1;
      this.apartment = "";
      this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    }
  ngOnInit() {
    this.showHeader = 1;
    this.showReply = false;
    this.articleID = this.route.snapshot.paramMap.get('id');
    this.articleTitle = "";
    this.articleContent = "";
    this.thumbnail = "../../../assets/common/no-thumbnail.png";
    
    this.getArticleDetail(this.articleID);
    this.getDefaulUserDeparment();
  }

  getDefaulUserDeparment(){
    this.loading.present();
    const self = this;
    this.apiService.getListUserApartment()
      .subscribe(result => {
        if(result.userApartments.length > 0){
          self.apartment = result.userApartments[0]._id;
        }
        self.loading.dismiss();
        console.log(result.userApartments);
        self.getArticleComment(self.currentPage, self.numberRecordOnPage, self.articleID, '', null)
    },
    error => {
      self.loading.dismiss();
    });
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
        self.commentsCount = result.article.commentsCount;
        self.sharesCount = result.article.sharesCount;
        self.createdAt = result.article.createdAt;
        self.createBy = result.article.createdBy != null ? result.article.createdBy.displayName : "";
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  getArticleComment(page: number, limit: number, articleID: string, search: string, event: any) {
    this.loading.present();
    const self = this;
    this.apiService.getListArticleComment(page, limit, articleID, search)
      .subscribe(result => {
        if(result.comments.length > 0){
          if(self.currentPage <= 1){
            self.listArticlesComment = result.comments;
          }else{
            self.listArticlesComment = self.listArticlesComment.concat(result.comments);
          }
          
        }
        if (event) {
          event.target.complete();
        }
        self.loading.dismiss();
        if(self.inputField.nativeElement){
          self.inputField.nativeElement.focus();
        }
    },
    error => {
      self.loading.dismiss();
    });
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  showListComment(){
    this.navCtrl.navigateForward('/notification-comment/' + this.articleID);
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

  convertText(textInput:string){
    return textInput.replace(/\n/ig, '<br/>');;
  }

  onScroll(event) {
    let position_y = document.getElementById('content-noti').getClientRects()[0];
    if(position_y['y'] > 45){
      this.showHeader = 1;
    }else{
      this.showHeader = 2;
    }
  }
  getStyleHeader(index) {
    if (index == this.showHeader) {
      return '';
    } else {
      return 'none';
    }
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
  }

  sendMsg(){
    if(this.apartment == ""){
      this.alertService.presentToast(this.translate.instant('NOTIFICATION_COMMENT.msg_apartment_not_correct'));
    }
    this.loading.present();
    const self = this;
    const params = {
      content: this.editorMsg,
      apartment: this.apartment
    }
    this.apiService.sendArticleComment(params, this.articleID)
      .subscribe(result => {
        self.loading.dismiss();
        self.editorMsg = "";
        self.doRefresh(null);
    },
    error => {
      self.editorMsg = "";
      self.loading.dismiss();
    });
  }
  
  replyComment() {
    var x = document.getElementById("reply-item");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }
  cancelReplyComment() {
    var x = document.getElementById("reply-item");
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  }
}
