import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-popup-building-management-phone',
  templateUrl: './popup-building-management-phone.page.html',
  styleUrls: ['./popup-building-management-phone.page.scss'],
})
export class PopupBuildingManagementPhonePage implements OnInit {
  selectedLanguage:string;
  listDepartment: any;
  phoneNumber: string;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private navParams: NavParams,
    private loading: LoadingService,
    private callNumber: CallNumber,
    private apiService: ApiService,
    private clipboard: Clipboard,
    private translate: TranslateService,
    private alertService: AlertService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.phoneNumber = this.navParams.data.phoneNumber;
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
  callEmergency(event){
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    const campaignPhone = this.phoneNumber;
    this.callNumber.callNumber(campaignPhone, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  copyNumberPhone() {
    this.clipboard.copy(this.phoneNumber);
    this.alertService.presentToast(this.translate.instant('MY_HOME.message_copy'));
    this.closeModal();
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
