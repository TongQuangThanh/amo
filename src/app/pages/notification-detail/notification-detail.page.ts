import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { PopupShareInfoPage } from '../popup-share-info/popup-share-info.page';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.page.html',
  styleUrls: ['./notification-detail.page.scss'],
})
export class NotificationDetailPage implements OnInit {
  heightScreen: number;
  O;
  articleTitle: string;
  articleContent: string;
  thumbnail: string;
  readsCount: number;
  commentsCount: number;
  sharesCount: number;
  attachments: any;
  createdAt: string;
  createBy: string;
  articleID: string;
  profile: any;
  showHeader: number;
  apartment: string;
  likesCount = 0;
  isLiked = false;
  

  constructor(
    private iab: InAppBrowser,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private authService: AuthService,
    public modalController: ModalController
  ) {
    this.profile = this.authService.getProfile();
    this.apartment = '';
  }
  ngOnInit() {
    this.showHeader = 1;
    this.articleID = this.route.snapshot.paramMap.get('id');
    this.articleTitle = '';
    this.articleContent = '';
    this.thumbnail = '../../../assets/common/no-thumbnail.png';
    this.getArticleDetail(this.articleID);
    this.getDefaulUserDeparment();
  }

  getDefaulUserDeparment() {
    const self = this;
    this.apiService.getListUserApartment().subscribe(
      (result) => {
        if (result.userApartments.length > 0) {
          self.apartment = result.userApartments[0]._id;
        }
      },
      (error) => {}
    );
  }

  getArticleDetail(articleID) {
    const self = this;
    this.loading.present();
    this.apiService.getArticleDetail(articleID).subscribe(
      (result) => {
        const article =  result.article;
        self.articleTitle = article.title;
        self.articleContent = article.content;
        self.thumbnail = article.thumbnail;
        self.attachments = article.attachments;
        self.readsCount = article.readsCount;
        self.commentsCount = article.commentsCount || 0;
        self.sharesCount = article.sharesCount;
        self.createdAt = article.createdAt;
        self.createBy = article.createdBy != null ? article.createdBy.displayName : '';
        this.likesCount = article.likesCount;
        this.isLiked = result?.userLike == 1 ? true : false;
        self.loading.dismiss();
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  showListComment() {
    this.navCtrl.navigateForward('/notification-comment/' + this.articleID);
  }

  detailAttachment(event) {
    this.attachments.forEach((element) => {
      if (element.id == event.currentTarget.id) {
        let url_online = '';
        const fileExtensition = element.fileName.split('.').pop().toLowerCase();
        if (fileExtensition == 'png' || fileExtensition == 'jpg' || fileExtensition == 'pdf') {
          url_online = element.url;
        } else {
          url_online = 'https://docs.google.com/viewer?url=' + element.url + '&embedded=true';
        }
        const browser = this.iab.create(url_online, '_system', 'location=yes,enableviewportscale=yes');
        browser.show();
        return;
      }
    });
  }

  convertText(textInput: string) {
    return textInput.replace(/\n/gi, '<br/>');
  }

  onScroll(event) {
    let position_y = document.getElementById('content-noti').getClientRects()[0];
    if (position_y['y'] > 45) {
      this.showHeader = 1;
    } else {
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

  async commentNotificationModal() {
    // this.paymentType = "transfer";
    var self = this;
    const modal = await this.modalController.create({
      component: PopupShareInfoPage,
      componentProps: {
        transfer: {
          createBy: self.createBy,
          apartment: self.apartment,
          articleId: self.articleID,
          commentsCount: self.commentsCount,
          isLiked: self.isLiked,
        },
      },
      cssClass: 'popupPaymentTransfer-page-custom',
    });
    modal.onDidDismiss().then((dataReturned: any) => {
      if (dataReturned && dataReturned.data) {
        const dataReturnedLike = dataReturned.data.isLiked;
        if(dataReturnedLike != this.isLiked) {
          if (dataReturnedLike) {
            this.likesCount++;
          } else {
            this.likesCount--;
          }
        }
        this.isLiked = dataReturnedLike;
        this.commentsCount = dataReturned.data.commentsCount;
       
      }
    });
    return await modal.present();
  }

  postLike() {
    let likeStatus = 'none';
    if (!this.isLiked) {
      likeStatus = 'like';
    }

    this.apiService.postArticleLike(this.articleID, likeStatus).subscribe((response) => {
      if (response?.articleLike?.statusLike === 'like') {
        this.likesCount++;
        this.isLiked = true;
      } else {
        this.likesCount--;
        this.isLiked = false;
      }
    });
  }
}
