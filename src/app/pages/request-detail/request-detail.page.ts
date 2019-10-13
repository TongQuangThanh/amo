import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit {

  requestTitle: string;
  requestContent: string;
  thumbnail: string;
  createdAt: string;
  createBy: string;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions) { }
  ngOnInit() {
    const requestID = this.route.snapshot.paramMap.get('id');
    this.requestTitle = "";
    this.requestContent = "";
    
    this.getArticleDetail(requestID);
  }

  getArticleDetail(requestID) {
    this.loading.present();
    const self = this;
    this.apiService.getRequestDetail(requestID)
      .subscribe(result => {
        self.requestTitle = result.feedback.title;
        self.requestContent = result.feedback.content;
        self.createdAt = result.feedback.createdAt;
        self.createBy = result.feedback.createdBy != null ? result.feedback.createdBy.displayName : "";
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
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
