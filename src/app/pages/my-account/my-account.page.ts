import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { AlertService } from '../../services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { ModalController } from '@ionic/angular';

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
  userName: string;
  selectedLanguage:string;

  constructor(
    private translate: TranslateService,
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private authService: AuthService,
    public actionSheetController: ActionSheetController,
    private translateConfigService: TranslateConfigService,
    
  ) { 
    // this.listCountries = ConstService.LIST_COUNTRIES;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    const profile = this.authService.getProfile();
    if(profile && this.userName != profile.displayName){
      this.userName = profile.displayName;
    }
  }
  async selectLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: this.translate.instant('MY_ACCOUNT.language'),
      cssClass: 'select-language',
      buttons: [{
        text: this.translate.instant('MY_ACCOUNT.vn'),
        icon: 'checkmark-circle',
        cssClass : 'select-language-btn selected-btn',
        handler: () => {
          this.languageChanged('vi');          
        }
      }, {
        text: this.translate.instant('MY_ACCOUNT.en'),
        cssClass : 'select-language-btn',
        handler: () => {
          this.languageChanged('en');
        }
      }]
    });
    await actionSheet.present();
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
        self.avatar = result.profile.avatar != null ? result.profile.avatar : '../assets/icon/avatar-red.svg';
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
        self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.message_update_sucess'));
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.message_update_fail'));
    });
  }

  changeToSetting(){
    this.navCtrl.navigateForward('/setting');
  }

  callHelpCenter(){
    this.alertService.presentToast(this.translate.instant('COMMON.maintain'));
  }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('/landing');
  }

  languageChanged(language:string){
    this.selectedLanguage = language;
    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem('lang', language);
  }

  changePassword(){
    this.navCtrl.navigateForward('/change-password');
  }

  

}
