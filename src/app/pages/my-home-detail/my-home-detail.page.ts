import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

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
  _apartmentID: any;
  // profile:any;
  constructor(
    public modalController: ModalController,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { 
    // this.profile = this.authService.getProfile();
  }

  ngOnInit() {
    const apartmentID = this.route.snapshot.paramMap.get('id');
    this._apartmentID = apartmentID;
    this.getListUserApar(apartmentID);
  }

  getListUserApar(apartmentID: string){
    var self = this;
    this.loading.present();
    this.apiService.getUserApartment(apartmentID)
      .subscribe(result => {
        self.apartment = result.userApartment;
        self.listVehicle = self.apartment.apartment.vehicles;
        self.apartmentTitle = self.apartment.campaign.title;
        self.listMembers = self.apartment.apartment.members;
        self.loading.dismiss()
        // console.log(self.apartment);
    },
    error => {
      self.loading.dismiss();
    });
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

  async deleteMemberModal() {
    const modal = await this.modalController.create({
      component: PopupDeleteMemberPage,
      cssClass: 'delete-member-custom-class'
    });
    return await modal.present();
  }

  async deleteVehicleModal() {
    const modal = await this.modalController.create({
      component: PopupDeleteVehiclePage,
      cssClass: 'delete-vehicle-custom-class'
    });
    return await modal.present();
  }

  resetApartmentCode(){
    this.navCtrl.navigateForward('/reset-apartment-code');
  }

  addMember(){
    this.navCtrl.navigateForward('/add-home-member');
  }
  addVehicle(){
    this.navCtrl.navigateForward('/register-keep-vehicle');
  }

}
