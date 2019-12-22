import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service'
import { UtilsService } from '../../utils/utils.service';

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
  buttonTitle :string;
  serviceID :string;
  isDisplayButton :boolean;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    const newID = this.route.snapshot.paramMap.get('id');
    this.newTitle = "";
    this.isDisplayButton = false;
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

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  backScreen(event){
    this.navCtrl.back({
      animated: true,
      animationDirection: 'back'
    });
  }

}
