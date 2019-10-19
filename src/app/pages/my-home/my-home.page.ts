import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.page.html',
  styleUrls: ['./my-home.page.scss'],
})
export class MyHomePage implements OnInit {

  departmentID:string;
  listDepartment: any;

  constructor(
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
    this.getListUserApar();
  }

  getListUserApar(){
    var self = this;
    this.loading.present();
    this.apiService.getListUserApartment()
      .subscribe(result => {
        self.listDepartment = result.userApartments;
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }

  detailPage(event) {
    // // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
    this.navCtrl.navigateForward('/my-home-detail/' + event.currentTarget.id);
  }

  callEmergency(event){
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    for(let item in this.listDepartment){
      if (this.listDepartment[item]._id == event.currentTarget.parentElement.parentElement.parentElement.id){
        const campaignPhone = this.listDepartment[item].campaign.phone;
        this.callNumber.callNumber(campaignPhone, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
        break;
      }
    }
  }

}
