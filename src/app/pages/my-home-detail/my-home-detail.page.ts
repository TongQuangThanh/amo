import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';

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
  // profile:any;
  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { 
    // this.profile = this.authService.getProfile();
  }

  ngOnInit() {
    const apartmentID = this.route.snapshot.paramMap.get('id');
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

  toggleGroupMember(){
    this.memberEnable = !this.memberEnable;
  }

  isGroupVehicleMember(){
    return this.memberEnable;
  }

  formatString(stringDate: string) {
    return UtilsService.formatString(stringDate);
  }

}
