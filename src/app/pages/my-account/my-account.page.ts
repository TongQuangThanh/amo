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

import { PopupHotlinePage } from '../popup-hotline/popup-hotline.page';
import { PopupFeedbackPage } from '../popup-feedback/popup-feedback.page';
import { PopupLogoutPage } from '../popup-logout/popup-logout.page';
import { PopupChangeLanguagePage } from '../popup-change-language/popup-change-language.page';

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
  phone: string;
  selectedLanguage:string;

  constructor(
    public modalController: ModalController,
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
      this.phone = profile.phone;
    }
  }
  async selectLanguage() {
    const actionSheet = await this.actionSheetController.create({
      header: this.translate.instant('MY_ACCOUNT.language'),
      cssClass: 'select-language',
      buttons: [{
        text: this.translate.instant('MY_ACCOUNT.vn'),
        icon: this.selectedLanguage === 'vi' ? 'checkmark-circle' : '',
        cssClass : this.selectedLanguage === 'vi' ? 'select-language-btn selected-btn' : 'select-language-btn',
        handler: () => {
          this.languageChanged('vi');          
        }
      }, {
        text: this.translate.instant('MY_ACCOUNT.en'),
        cssClass : this.selectedLanguage === 'en' ? 'select-language-btn selected-btn' : 'select-language-btn',
        icon: this.selectedLanguage === 'en' ? 'checkmark-circle' : '',
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

  changeToMyAccountDetail(){
    this.navCtrl.navigateForward('/my-account-detail');
  }

  changePassword(){
    this.navCtrl.navigateForward('/change-password');
  }

  changeToTerms(){
    this.navCtrl.navigateForward('/terms');
  }

  changeToGuideline(){
    this.navCtrl.navigateForward('/guideline');
  }

  async hotlineModal() {
    const modal = await this.modalController.create({
      component: PopupHotlinePage,
      cssClass: 'hotline-page-custom'
    });
    return await modal.present();
  }

  async feedbackModal() {
    const modal = await this.modalController.create({
      component: PopupFeedbackPage,
      cssClass: 'feedback-page-custom'
    });
    return await modal.present();
  }

  async logoutModal() {
    const modal = await this.modalController.create({
      component: PopupLogoutPage,
      cssClass: 'logout-page-custom'
    });
    return await modal.present();
  }

  async changePasswordModal() {
    const modal = await this.modalController.create({
      component: PopupChangeLanguagePage,
      cssClass: 'changepass-page-custom'
    });
    return await modal.present();
  }
}
