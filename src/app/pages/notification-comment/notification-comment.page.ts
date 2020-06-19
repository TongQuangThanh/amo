import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service'
import { Platform, NavController } from '@ionic/angular';
import { AlertService } from '../../services/alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-notification-comment',
  templateUrl: './notification-comment.page.html',
  styleUrls: ['./notification-comment.page.scss'],
})
export class NotificationCommentPage {

  listArticlesComment: any;
  currentPage: number;
  numberRecordOnPage: number;
  articleID:string;
  heightScreen:number;
  editorMsg:any;
  apartment: string;
  profile: any;

  constructor(
    private translate: TranslateService,
    private alertService: AlertService,
    private apiService: ApiService,
    private loading: LoadingService,
    private route: ActivatedRoute,
    private platform: Platform,
    private authService: AuthService
  ) {
    this.profile = this.authService.getProfile();
    this.listArticlesComment = [];
    this.apartment = "";
    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 70- 60;
    });
    this.articleID = this.route.snapshot.paramMap.get('id');
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
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
        self.getArticleComment(self.currentPage, self.numberRecordOnPage, self.articleID, '', null)
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
        console.log(result.comments);
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
    },
    error => {
      self.loading.dismiss();
    });
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  doRefresh(event) {
    this.currentPage = 1;
    this.numberRecordOnPage = ConstService.NUMBER_RECORD_ON_PAGE;
    this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
  }

  loadData(event) {
    this.currentPage++;
    this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
  }
  
  convertText(textInput:string){
    return textInput.replace(/\n/ig, '<br/>');;
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
}
