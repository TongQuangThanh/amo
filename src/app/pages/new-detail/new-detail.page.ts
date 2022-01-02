import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { ModalController } from '@ionic/angular';
import { PopupShareInfoPage } from '../popup-share-info/popup-share-info.page';

import * as $ from 'jquery';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {
  newID: string;
  newTitle: string;
  newContent: any;
  updatedAt: string;
  createdBy: string;
  thumbnail: string;
  totalViewers: number;
  buttonTitle: string;
  serviceID: string;
  isDisplayButton: boolean;
  heightScreen: number;
  showHeader: number;
  commentsCount = 0;
  isLiked = false;
  apartment = '';
  createBy = '';

  constructor(
    private platform: Platform,
    private sanitizer: DomSanitizer,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public modalController: ModalController
  ) {
    this.platform.ready().then((readySource) => {
      this.heightScreen = platform.height() * 0.58 - 18;
    });
  }
  ngOnInit() {
    this.showHeader = 1;
    this.newID = this.route.snapshot.paramMap.get('id');
    this.newTitle = '';
    this.isDisplayButton = false;
    this.newContent = '';
    this.thumbnail = '../../../assets/common/no-thumbnail.png';
    this.getDefaulUserDeparment();
    this.getNewDetail();
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

  getNewDetail() {
    this.loading.present();
    const self = this;
    this.apiService.getPosteDetail(this.newID).subscribe(
      (result) => {
        self.createBy = result.post.createdBy != null ? result.post.createdBy.displayName : '';
        self.newTitle = result.post.title;
        self.newContent = self.sanitizer.bypassSecurityTrustHtml(result.post.content) as string;
        self.thumbnail = result.post.thumbnail;
        self.updatedAt = result.post.updatedAt;
        self.createdBy = result.post.createdBy.displayName;
        self.totalViewers = result.post.totalViewers;
        self.buttonTitle = result.post.titleButton;
        self.serviceID = result.post.serviceID;
        if (self.serviceID != null && self.serviceID != '') {
          self.isDisplayButton = true;
        }
        self.loading.dismiss();
      },
      (error) => {
        self.loading.dismiss();
      }
    );
  }

  updateVideoUrl(urlVideo: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo);
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  backScreen(event) {
    this.navCtrl.back({
      animated: true,
      animationDirection: 'back',
    });
  }

  addCountPostClick() {
    this.apiService.countUserButtonPost(this.newID).subscribe(
      (result) => {},
      (error) => {}
    );
  }

  orderService(event) {
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }

    this.addCountPostClick();
    this.navCtrl.navigateForward('/order-service/' + this.serviceID);
  }

  onScroll(event) {
    let position_y = document.getElementById('content-news').getClientRects()[0];
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

  async shareInfoModal() {
    var self = this;
    const modal = await this.modalController.create({
      component: PopupShareInfoPage,
      componentProps: {
        transfer: {
          createBy: self.createBy,
          apartment: self.apartment,
          articleId: self.newID,
          commentsCount: self.commentsCount,
          isLiked: self.isLiked,
          isPost: true,
        },
      },
      cssClass: 'popupPaymentTransfer-page-custom',
    });
    modal.onDidDismiss().then((res: any) => {
      if (res && res.data) {
        this.isLiked = res.data;
      }
    });
    return await modal.present();
  }

  postLike() {
    let likeStatus = 'none';
    if (!this.isLiked) {
      likeStatus = 'like';
    }

    this.apiService.postPostLike(this.newID, likeStatus).subscribe((response) => {
      if (response.postLike.statusLike === 'like') {
        this.isLiked = true;
      } else {
        this.isLiked = false;
      }
    });
  }
}
