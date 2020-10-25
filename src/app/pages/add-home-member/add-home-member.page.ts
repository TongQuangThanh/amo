import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ConstService } from '../../utils/const.service'
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service';
import { ApiService } from '../../services/api/api.service';
import { TranslateService } from '@ngx-translate/core';

import { PopupOwnerRelationshipPage } from '../popup-owner-relationship/popup-owner-relationship.page';

@Component({
  selector: 'app-add-home-member',
  templateUrl: './add-home-member.page.html',
  styleUrls: ['./add-home-member.page.scss'],
})
export class AddHomeMemberPage implements OnInit {
  selectedLanguage:string;
  formName:string = "";
  formRelationship: any;
  formRelationshipName: any = "";
  formPersonalLicense: any = "";
  formPhoneCode: any = 84;
  formPhoneNumber: any = "";
  formDateOfBirth: any = "";
  formGender: any = "";
  formNationality: any = "";
  listCountry: any;
  avatarCountry: any;
  countryAlpha2: any;

  constructor(
    public modalController: ModalController,
    private translateConfigService: TranslateConfigService,
    private translate: TranslateService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private loading: LoadingService,
    private alertService: AlertService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.formRelationship = 0;
    this.listCountry = ConstService.LIST_COUNTRIES;
    this.countryAlpha2 = "vn"
    this.avatarCountry = "https://lipis.github.io/flag-icon-css/flags/4x3/vn.svg";
  }

  // selectRelationship() {
  //   this.navCtrl.navigateForward('/popup-feedback');
  // }

  async selectRelationship() {
    var self = this;
    const modal = await this.modalController.create({
      component: PopupOwnerRelationshipPage,
      componentProps: {
        index: self.formRelationship
      },
      cssClass: 'selectRelationship-page-custom'
    });
    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned && dataReturned.data) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
        self.formRelationship = dataReturnedResult.value;
        self.formRelationshipName = dataReturnedResult.name;
      }
    });
    return await modal.present();
  }
  
  onChangeCountry() {
    this.listCountry.forEach(country => {
      if (country.alpha2 == this.countryAlpha2) {
        this.formPhoneCode = country.phoneCode;
        this.avatarCountry = "https://lipis.github.io/flag-icon-css/flags/4x3/"+country.alpha2.toLowerCase()+".svg";
      }
    });
  }
  addMember() {
    var self = this;
    const params = {
      name: this.formName,
      phone: this.formPhoneNumber,
      email: "",
      dateOfBirth: this.formDateOfBirth,
      personalLicense: this.formPersonalLicense,
      nationality: "",
      gender: this.formGender,
      relationShip: this.formRelationship,
      phoneCode: this.formPhoneCode
    };
    this.loading.present();
    this.apiService.addApartmentMember(params)
    .subscribe(result => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('COMMON.message_success'));
      self.navCtrl.back();
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('COMMON.message_fail'));
    });
  }
}
