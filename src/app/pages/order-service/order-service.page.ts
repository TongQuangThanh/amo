import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertService } from '../../services/alert/alert.service';
import * as moment from 'moment';

@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.page.html',
  styleUrls: ['./order-service.page.scss'],
})
export class OrderServicePage implements OnInit {

  userName:string;
  phone:number;
  address:string;
  departmentID:string;
  listDepartment: any;
  message: string;
  timeOrder: any;
  isErrorAddress:boolean=false;
  isErrorTime:boolean=false;
  // latitude: any;
  // longitude: any;
  serviceID: string;
  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private apiService: ApiService,
    private loading: LoadingService,
    private geolocation: Geolocation,
    private navCtrl: NavController,
    private authService: AuthService) { 
      const profile = this.authService.getProfile();
      if(profile){
        this.userName = profile.displayName;
        this.phone = profile.phone;
      }
      this.listDepartment = [];
      this.serviceID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getUserApar()
  }

  getUserApar(){
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

  changeValueDepartment(event){
    // this.departmentID = event.detail.value;
    for(let item in this.listDepartment){
      if (this.listDepartment[item].apartment._id == event.detail.value){
        this.address = this.listDepartment[item].campaign.address;
        break;
      }
    }
  }

  orderSericeForm(event){
    const self = this;
    if(this.address && this.address.length > 0){
      this.isErrorAddress = false;
    }else{
      this.isErrorAddress = true;
    }

    if(this.timeOrder && this.timeOrder.length > 0){
      this.isErrorTime = false;
    }else{
      this.isErrorTime = true;
    }

    if(this.isErrorAddress || this.isErrorTime){
      return;
    }
    this.loading.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      self.requestOrder(resp.coords.latitude, resp.coords.longitude);
     }).catch((error) => {
      self.requestOrder("", "");
     });
  }

  requestOrder(latitude:any, longitude:any){
    const self = this;
    const params = {
      service: this.serviceID,
      appointAt: moment(this.timeOrder),
      phone: this.phone,
      address: this.address,
      latitude: latitude,
      longitude: longitude,
      name: this.userName,
      message: this.message
    };
    this.apiService.addServiceLog(params).subscribe(result => {
      self.loading.dismiss();
      self.alertService.presentToast("add order request success");
      self.navCtrl.back();
    },
    error => {
      self.alertService.presentToast(JSON.stringify(error));
      self.loading.dismiss();
    });
  }
}
