import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { ActivatedRoute } from '@angular/router';
import { ConstService } from 'src/app/utils/const.service';
@Component({
  selector: 'app-popup-share-info',
  templateUrl: './popup-share-info.page.html',
  styleUrls: ['./popup-share-info.page.scss'],
})
export class PopupShareInfoPage implements OnInit {
  @ViewChild('chat_input') inputField: ElementRef;
  @ViewChild('ionContent') ionContent: any;

  selectedLanguage: string;
  dataTransfer: any;
  editorMsg: any;
  articleID: string;
  currentPage: number = 1;
  listArticlesComment: any = [];
  numberRecordOnPage: number;
  apartment: string;
  commentsCount = 0;
  isLiked = false;
  isPostType = false;

  replyId: string = null;
  replyName: string = null;
  profileUser = null;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private navParams: NavParams,
    private clipboard: Clipboard,
    private translate: TranslateService,
    private alertService: AlertService,
    private apiService: ApiService,
    private loading: LoadingService,
    private route: ActivatedRoute
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
  }

  ngOnInit() {
    if (localStorage.getItem('profile')) {
      this.profileUser = JSON.parse(localStorage.getItem('profile'));
    }
    this.dataTransfer = this.navParams.data.transfer;
    this.isLiked = this.dataTransfer.isLiked;
    this.apartment = this.dataTransfer.apartment;
    this.articleID = this.dataTransfer.articleId;
    this.isPostType = this.dataTransfer.isPost ? this.dataTransfer.isPost : false;
    this.commentsCount = this.dataTransfer.commentsCount;
    this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', null);
  }

  getArticleComment(page: number, limit: number, articleID: string, search: string, event: any) {
    this.loading.present();
    const self = this;
    this.apiService.getListArticleComment(page, limit, articleID, search).subscribe(
      (result) => {
        if (result.comments.length > 0) {
          if (self.currentPage <= 1) {
            self.listArticlesComment = result.comments;
          } else {
            self.listArticlesComment = self.listArticlesComment.concat(result.comments);
          }
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

  closeModal() {
    this.modalController.dismiss({ isLiked: this.isLiked, commentsCount: this.commentsCount });
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
  }

  sendMsg() {
    if (!this.apartment || this.apartment == '') {
      this.alertService.presentToast(this.translate.instant('NOTIFICATION_COMMENT.msg_apartment_not_correct'));
    }
    this.loading.present();
    const self = this;
    const params = {
      content: this.editorMsg,
      apartment: this.apartment,
    };

    if (this.isPostType) {
      if (this.replyId !== null) {
        // send reply comment
        this.apiService.sendPostReply(params, this.replyId).subscribe(
          (res) => {
            self.loading.dismiss();
            self.editorMsg = '';
            // self.doRefresh(null);
          },
          (err) => {
            self.editorMsg = '';
            self.loading.dismiss();
          }
        );
      } else {
        this.apiService.sendPostComment(params, this.articleID).subscribe(
          (result) => {
            self.loading.dismiss();
            self.editorMsg = '';
            // self.doRefresh(null);
          },
          (error) => {
            self.editorMsg = '';
            self.loading.dismiss();
          }
        );
      }
    } else {
      if (this.replyId !== null) {
        // send reply comment
        this.apiService.sendArticleReply(params, this.replyId).subscribe(
          (res) => {
            const commentReply = res.commentReply;
            commentReply.createdBy = self.profileUser;
            const comment = self.listArticlesComment.find((item) => item._id == commentReply.comment);
            if (comment) {
              comment.replies.unshift(commentReply);
              self.listArticlesComment = [...self.listArticlesComment];
            }
            self.loading.dismiss();
            self.editorMsg = '';
          },
          (err) => {
            self.editorMsg = '';
            self.loading.dismiss();
          }
        );
      } else {
        // send comment
        this.apiService.sendArticleComment(params, this.articleID).subscribe(
          (result) => {
            const comment = result.comment;
            comment.createdBy = self.profileUser;
            self.listArticlesComment = [comment, ...this.listArticlesComment];
            self.commentsCount++;
            self.loading.dismiss();
            self.editorMsg = '';
            setTimeout(() => {
              self.ionContent.scrollToTop();
            });
          },
          (error) => {
            self.editorMsg = '';
            self.loading.dismiss();
          }
        );
      }
    }
  }

  replyComment(id: string, name: string) {
    this.replyId = id;
    this.replyName = name;
    document.getElementById('reply-item').focus();
  }

  cancelReplyComment() {
    this.replyId = null;
    this.replyName = null;
  }

  loadData(event) {
    this.currentPage++;
    this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
  }

  // public getTimeDiff(mesDate: string) {
  //   const curDate = new Date(mesDate) ;

  //   console.warn(Math.ceil((new Date() - curDate) / (1000 * 60 * 60)));
  //   return Math.ceil((new Date() - curDate) / (1000 * 60 * 60))
  // };

  time_ago(time) {
    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time);
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    let time_formats = [
      [60, this.translate.instant('TIME_AGO.seconds'), 1], // 60
      [120, this.translate.instant('TIME_AGO.a_minute'), this.translate.instant('TIME_AGO.a_minute_from')], // 60*2
      [3600, this.translate.instant('TIME_AGO.minutes'), 60], // 60*60, 60
      [7200, this.translate.instant('TIME_AGO.a_hour_ago'), this.translate.instant('TIME_AGO.a_hour_from')], // 60*60*2
      [86400, this.translate.instant('TIME_AGO.hours'), 3600], // 60*60*24, 60*60
      [172800, this.translate.instant('TIME_AGO.yesterday'), this.translate.instant('TIME_AGO.tomorrow')], // 60*60*24*2
      [604800, this.translate.instant('TIME_AGO.days'), 86400], // 60*60*24*7, 60*60*24
      [1209600, this.translate.instant('TIME_AGO.last_week'), this.translate.instant('TIME_AGO.next_week')], // 60*60*24*7*4*2
      [2419200, this.translate.instant('TIME_AGO.weeks'), 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, this.translate.instant('TIME_AGO.last_month'), this.translate.instant('TIME_AGO.next_month')], // 60*60*24*7*4*2
      [29030400, this.translate.instant('TIME_AGO.months'), 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, this.translate.instant('TIME_AGO.last_year'), this.translate.instant('TIME_AGO.next_year')], // 60*60*24*7*4*12*2
      [2903040000, this.translate.instant('TIME_AGO.years'), 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, this.translate.instant('TIME_AGO.last_century'), this.translate.instant('TIME_AGO.next_century')], // 60*60*24*7*4*12*100*2
      [58060800000, this.translate.instant('TIME_AGO.centuries'), 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    let seconds = (+new Date() - time) / 1000;
    let token = this.translate.instant('TIME_AGO.ago');
    let list_choice = 1;
    
    if (seconds == 0) {
      return this.translate.instant('TIME_AGO.just_now');
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = this.translate.instant('TIME_AGO.from_now');
      list_choice = 2;
    }
    let i = 0,
      format;
    while ((format = time_formats[i++])) {
      if (seconds < format[0]) {
        if (typeof format[2] == 'string') return format[list_choice];
        else return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    }

    return time;
  }

  postLike() {
    let likeStatus = 'none';
    if (!this.isLiked) {
      likeStatus = 'like';
    }

    if (this.isPostType) {
      this.apiService.postPostLike(this.articleID, likeStatus).subscribe((response) => {
        if (response.postLike.statusLike === 'like') {
          this.isLiked = true;
        } else {
          this.isLiked = false;
        }
      });
    } else {
      this.apiService.postArticleLike(this.articleID, likeStatus).subscribe((response) => {
        if (response?.articleLike?.statusLike === 'like') {
          this.isLiked = true;
        } else {
          this.isLiked = false;
        }
      });
    }
  }
}
