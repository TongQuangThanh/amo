import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController } from '@ionic/angular';

import { ApartmentCodeRegisterPage } from '../auth/apartment-code-register/apartment-code-register.page';
import { PopupBuildingManagementPhonePage } from '../popup-building-management-phone/popup-building-management-phone.page';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.page.html',
  styleUrls: ['./my-home.page.scss'],
})
export class MyHomePage implements OnInit {
  departmentID:string;
  listDepartment: any;

  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
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

  // async addApartment() {
  //   const modal = await this.modalController.create({
  //     component: ApartmentCodeRegisterPage,
  //     componentProps: {
  //     },
  //     cssClass: "custom-modal-wrapper"
  //   });

  //   modal.onDidDismiss().then((dataReturned:any) => {
  //     if (dataReturned !== null) {
  //       const dataReturnedResult = JSON.parse(dataReturned.data);
  //       if(dataReturnedResult.result == '0'){
  //         this.getListUserApar();
  //       }else{

  //       }
  //     }
  //   });
  //   return await modal.present();
  // }

  addNewHome(){
    this.navCtrl.navigateForward('/add-home');
  }

  async buildingManagementPhoneModal($event, phoneNumber) {
    $event.stopPropagation();
    const modal = await this.modalController.create({
      component: PopupBuildingManagementPhonePage,
      componentProps: {
        "phoneNumber": phoneNumber,
      },
      cssClass: 'buildingManagementPhone-custom-class'
    });
    return await modal.present();
  }
}
