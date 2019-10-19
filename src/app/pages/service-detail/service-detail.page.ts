import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ConstService } from '../../utils/const.service'
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {

  serviceTitle: string;
  serviceContent: string;
  createAt: string;
  createdBy : string;
  thumbnail: string;
  totalViewers : number;
  serviceID : string;
  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.serviceID = this.route.snapshot.paramMap.get('id');
    this.serviceTitle = "";
    this.serviceContent = "";
    this.thumbnail = "../../../assets/common/no-thumbnail.png";
    
    this.getNewDetail(this.serviceID);
  }

  getNewDetail(serviceID: string) {
    const self = this;
    this.loading.present();
    this.apiService.getServiceDetail(serviceID)
      .subscribe(result => {
        self.serviceTitle = result.service.title;
        self.serviceContent = result.service.content + "</br></br></br>";
        self.thumbnail = result.service.thumbnail;
        self.createAt = result.service.createAt;
        self.createdBy = result.service.partner;
        self.totalViewers = result.service.totalViewers;
        self.loading.dismiss()
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

  orderService(event) {
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    this.navCtrl.navigateForward('/order-service/' + event.currentTarget.id);
  }

}
