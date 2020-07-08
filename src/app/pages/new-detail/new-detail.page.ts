import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service';
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
  createAt: string;
  createdBy : string;
  thumbnail: string;
  totalViewers : number;
  buttonTitle :string;
  serviceID :string;
  isDisplayButton :boolean;

  constructor(
    private sanitizer: DomSanitizer,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.newID = this.route.snapshot.paramMap.get('id');
    this.newTitle = "";
    this.isDisplayButton = false;
    this.newContent = "";
    this.thumbnail = "../../../assets/common/no-thumbnail.png";
    
    this.getNewDetail();
  }

  getNewDetail() {
    this.loading.present();
    const self = this;
    this.apiService.getPosteDetail(this.newID)
      .subscribe(result => {
        self.newTitle = result.post.title;
        self.newContent = self.sanitizer.bypassSecurityTrustHtml(result.post.content) as string;
        self.thumbnail = result.post.thumbnail;
        self.createAt = result.post.createAt;
        self.createdBy = result.post.createdBy.displayName;
        self.totalViewers = result.post.totalViewers;
        self.buttonTitle = result.post.titleButton;
        self.serviceID = result.post.serviceID;
        if(self.serviceID != null && self.serviceID != ""){
          self.isDisplayButton = true;
        }
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }

  updateVideoUrl(urlVideo: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo);
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  backScreen(event){
    this.navCtrl.back({
      animated: true,
      animationDirection: 'back'
    });
  }

  addCountPostClick(){
    this.apiService.countUserButtonPost(this.newID).subscribe(result => {
      console.log(result);
    },
    error => {
    });
  }

  orderService(event) {
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }

    this.addCountPostClick();
    this.navCtrl.navigateForward('/order-service/' + this.serviceID);
  }

}
