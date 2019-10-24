import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { AlertService } from '../../services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  displayName: string;
  // phone: string;
  email: string;
  timeOrder: any;
  sex:any;
  nationality: any;
  dateOfBirth: any;
  personalLiscence: any;
  avatar:any;
  // listCountries:any;

  constructor(
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private authService: AuthService,
  ) { 
    // this.listCountries = ConstService.LIST_COUNTRIES;
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
        self.sex = result.profile.gender;
        self.nationality = result.profile.nationality;
        self.dateOfBirth = result.profile.dateOfBirth;
        self.personalLiscence = result.profile.personalLiscence;
        self.avatar = result.profile.avatar;
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
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
        self.alertService.presentToast("update successfully");
    },
    error => {
      self.loading.dismiss();
    });
  }

  changeToSetting(){
    this.navCtrl.navigateForward('/setting');
  }

  callHelpCenter(){
    this.alertService.presentToast("Function maintainal");
  }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('/landing');
  }

}
