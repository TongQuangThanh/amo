import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '../../services/alert/alert.service';
import { DatePipe, Location } from '@angular/common';

import { PopupDeleteMemberPage } from '../popup-delete-member/popup-delete-member.page';
import { PopupDeleteVehiclePage } from '../popup-delete-vehicle/popup-delete-vehicle.page';

@Component({
  selector: 'app-my-home-detail',
  templateUrl: './my-home-detail.page.html',
  styleUrls: ['./my-home-detail.page.scss'],
})
export class MyHomeDetailPage implements OnInit {

  apartment: any;
  listVehicle: any;
  vehicleEnable: boolean= false;
  listMembers:any;
  apartmentTitle:string;
  memberEnable: boolean= false;
  _userApartmentID: any;
  _apartmentID: any;
  // profile:any;
  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private translate: TranslateService,
    private alertService: AlertService,
    private datePipe: DatePipe,

  ) { 
    // this.profile = this.authService.getProfile();
  }

  ngOnInit() {
    const userApartmentID = this.route.snapshot.paramMap.get('id');
    this._userApartmentID = userApartmentID;
  }

  ionViewWillEnter() {
    this.getListUserApar(this._userApartmentID);
  }

  getListUserApar(userApartmentID: string){
    var self = this;
    this.loading.present();
    this.apiService.getUserApartment(userApartmentID)
      .subscribe(result => {
        self.apartment = result.userApartment;
        self.listVehicle = self.apartment.apartment.vehicles;
        self.apartmentTitle = self.apartment.campaign.title;
        self.listMembers = self.apartment.apartment.members;
        // check data
        self.listVehicle.forEach(element => {
          if (element.type && element.type != null) {
            element.type = self.getNameVehicle(element.type);
          } else {
            element.type = self.getNameVehicle('orther');
          }
        });
        // check data
        self.listMembers.forEach(element => {
          if (element.relationShip && element.relationShip != null) {
            element.relationShip = self.getNameRelationShip(element.relationShip);
          } else {
            element.relationShip = self.getNameRelationShip(0);
          }
          if (element.dateOfBirth && element.dateOfBirth != null) {
            element.dateOfBirth = this.datePipe.transform(element.dateOfBirth,"dd/MM/yyyy");
          } else {
            element.dateOfBirth = "N/A";
          }
        });
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }
  getNameVehicle(type) {
    var name = this.translate.instant('INBOX_31.vehicle_option_orther');
    switch(type) {
      case 'motorbike':
        name = this.translate.instant('INBOX_31.vehicle_option_motobike');
        break;
      case 'car': 
        name = this.translate.instant('INBOX_31.vehicle_option_car');
        break;
      case 'bike':
        name = this.translate.instant('INBOX_31.vehicle_option_bike');
        break;
    }
    return name;
  }
  getNameRelationShip(index) {
    var name = this.translate.instant('ADD_HOME_MEMBER.guest');
    switch(index) {
      case 1:
        name = this.translate.instant('ADD_HOME_MEMBER.wife');
        break;
      case 2: 
        name = this.translate.instant('ADD_HOME_MEMBER.husband');
        break;
      case 3:
        name = this.translate.instant('ADD_HOME_MEMBER.father');
        break;
      case 4:
        name = this.translate.instant('ADD_HOME_MEMBER.mother');
        break;
      case 5:
        name = this.translate.instant('ADD_HOME_MEMBER.son');
        break;
      case 6:
        name = this.translate.instant('ADD_HOME_MEMBER.daughter');
        break;
      case 7:
        name = this.translate.instant('ADD_HOME_MEMBER.brother');
        break;
      case 8:
        name = this.translate.instant('ADD_HOME_MEMBER.sister');
        break;
      case 9:
        name = this.translate.instant('ADD_HOME_MEMBER.relative');
        break;
      case 10:
        name = this.translate.instant('ADD_HOME_MEMBER.friend');
        break;
      case 11:
        name = this.translate.instant('ADD_HOME_MEMBER.housemaid');
        break;
      case 12:
        name = this.translate.instant('ADD_HOME_MEMBER.guest');
        break;
    }
    return name;
  }

  toggleGroupVehicle(){
    this.vehicleEnable = !this.vehicleEnable;
  }

  isGroupVehicleShown(){
    return this.vehicleEnable;
  }

  isGroupVehicleMember(){
    return this.memberEnable;
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

  async deleteMemberModal(id) {
    var self = this;
    const modal = await this.modalController.create({
      component: PopupDeleteMemberPage,
      componentProps: {
        apartmentID: self.apartment.apartment._id,
        id
      },
      cssClass: 'delete-member-custom-class'
    });
    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned && dataReturned.data) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
        if (dataReturnedResult.message == "success") {
          self.getListUserApar(self._userApartmentID);
        }
      }
    });
    return await modal.present();
  }

  async deleteVehicleModal(id) {
    var self = this;
    const modal = await this.modalController.create({
      component: PopupDeleteVehiclePage,
      componentProps: {
        apartmentID: self.apartment.apartment._id,
        id
      },
      cssClass: 'delete-vehicle-custom-class'
    });
    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned && dataReturned.data) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
        if (dataReturnedResult.message == "success") {
          self.getListUserApar(self._userApartmentID);
        }
      }
    });
    return await modal.present();
  }

  resetApartmentCode(){
    this.navCtrl.navigateForward('/reset-apartment-code');
  }

  addMember(){
    this.navCtrl.navigateForward('/add-home-member/'  + this.apartment.apartment._id);
  }
  addVehicle(){
    this.navCtrl.navigateForward('/register-keep-vehicle');
  }

}
