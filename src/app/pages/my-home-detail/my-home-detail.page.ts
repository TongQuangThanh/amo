import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { NavController } from '@ionic/angular';

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
    private loading: LoadingService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
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

  // vund5
  goToFamilyMemberList() {
    this.navCtrl.navigateForward('/family/' + this._apartmentID);
  }

}
