import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {

  newTitle: string;
  newContent: string;
  createAt: string;
  createdBy : string;
  thumbnail: string;
  totalViewers : number;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    const newID = this.route.snapshot.paramMap.get('id');
    this.newTitle = "";
    this.newContent = "";
    this.thumbnail = "../../../assets/common/no-thumbnail.png";
    
    this.getNewDetail(newID);
  }

  getNewDetail(newID) {
    this.loading.present();
    const self = this;
    this.apiService.getPosteDetail(newID)
      .subscribe(result => {
        self.newTitle = result.post.title;
        self.newContent = result.post.content;
        self.thumbnail = result.post.thumbnail;
        self.createAt = result.post.createAt;
        self.createdBy = result.post.createdBy.displayName;
        self.totalViewers = result.post.totalViewers;
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
    });
  }

}
