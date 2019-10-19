import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertService } from '../../services/alert/alert.service'
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
  latitude: any;
  longitude: any;
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
    var self = this;
    this.geolocation.getCurrentPosition().then((resp) => {
      self.latitude = resp.coords.latitude;
      self.longitude = resp.coords.longitude;
      self.getUserApar();
     }).catch((error) => {
      self.latitude = "";
      self.longitude = "";
      self.getUserApar();
     });
    
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
    this.loading.present();
    const params = {
      service: this.serviceID,
      appointAt: moment(this.timeOrder),
      phone: this.phone,
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude,
      name: this.userName,
      message: this.address
    };
    this.apiService.addServiceLog(params).subscribe(result => {
      self.loading.dismiss();
      this.alertService.presentToast("add order request success");
      this.navCtrl.back();
    },
    error => {
      this.alertService.presentToast(JSON.stringify(error));
      self.loading.dismiss();
    });
  }
}
