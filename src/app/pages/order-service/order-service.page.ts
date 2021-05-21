import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertService } from '../../services/alert/alert.service';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

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
  location:string;
  apartment: string;

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;

  // latitude: any;
  // longitude: any;
  serviceID: string;
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private apiService: ApiService,
    private loading: LoadingService,
    //private geolocation: Geolocation,
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
        if(self.listDepartment.length > 0){
          self.departmentID = self.listDepartment[0]._id;
          self.address = self.listDepartment[0].campaign.address;
          self.location = self.listDepartment[0].campaign.latlng;
          self.apartment = self.listDepartment[0].apartment.title + " - " + self.listDepartment[0].apartment.campaign.title;
        }
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }

  changeValueDepartment(event){
    for(let item in this.listDepartment){
      if (this.listDepartment[item].apartment._id == event.detail.value){
        this.address = this.listDepartment[item].campaign.address;
        this.location = this.listDepartment[item].campaign.latlng;
        this.apartment = this.listDepartment[item].apartment.title + " - " + this.listDepartment[item].apartment.campaign.title;
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
    this.requestOrder();
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   self.requestOrder(resp.coords.latitude, resp.coords.longitude);
    //  }).catch((error) => {
    //   self.requestOrder("", "");
    //  });
  }

  requestOrder(){
    const self = this;
    const params = {
      service: this.serviceID,
      appointAt: moment(this.timeOrder),
      phone: this.phone,
      address: this.address,
      location: this.location,
      name: this.userName,
      message: this.message,
      apartmentOrder: this.apartment
    };
    this.apiService.addServiceLog(params).subscribe(result => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('ORDER_SERVICE.msg_order_success'));
      self.navCtrl.back();
    },
    error => {
      self.alertService.presentToast(this.translate.instant('ORDER_SERVICE.msg_order_fail'));
      self.loading.dismiss();
    });
  }
}
