import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-popup-building-management-phone',
  templateUrl: './popup-building-management-phone.page.html',
  styleUrls: ['./popup-building-management-phone.page.scss'],
})
export class PopupBuildingManagementPhonePage implements OnInit {
  selectedLanguage:string;
  listDepartment: any;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private loading: LoadingService,
    private callNumber: CallNumber,
    private apiService: ApiService,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
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

  closeModal() {
    this.modalController.dismiss();
  }
}
