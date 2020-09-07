import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../../translate-config.service';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-my-account-detail',
  templateUrl: './my-account-detail.page.html',
  styleUrls: ['./my-account-detail.page.scss'],
})
export class MyAccountDetailPage implements OnInit {
  selectedLanguage:string;
  avatar:any;
  displayName: string;
  email: string;
  timeOrder: any;
  sex:any;
  nationality: any;
  dateOfBirth: any;
  personalLiscence: any;
  // listCountries:any;
  userName: string;
  phone: string;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private translate: TranslateService,
    private translateConfigService: TranslateConfigService,
    private alertService: AlertService,
  ) { 
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  
  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(){
    var self = this;
    this.loading.present();
    this.apiService.getUserProfile()
      .subscribe(result => {
        self.displayName = result.profile.displayName;
        self.email = result.profile.email;
        self.phone = result.profile.phone;
        self.sex = result.profile.gender;
        self.nationality = result.profile.nationality;
        self.dateOfBirth = result.profile.dateOfBirth;
        self.personalLiscence = result.profile.personalLiscence;
        self.avatar = result.profile.avatar != null ? result.profile.avatar : '../assets/icon/avatar-red.svg';
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }

  addHomeMember(){
    this.navCtrl.navigateForward('/add-home-member');
  }

  updateAccount(){
    var self = this;
    const params = {
      email: self.email,
      displayName: self.displayName,
      gender: self.sex,
      dateOfBirth: self.dateOfBirth,
      personalLiscence: self.personalLiscence
    };
    this.loading.present();
    this.apiService.updateUserProfile(params)
      .subscribe(result => {
        localStorage.setItem('profile', JSON.stringify(result.profile));
        self.loading.dismiss()
        self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.message_update_sucess'));
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.message_update_fail'));
    });
  }
}
