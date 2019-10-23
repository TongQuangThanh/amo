import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TranslateConfigService } from '../../translate-config.service';
import { NavigationExtras } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';

const PHONE_LENGTH_VN = 10;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  selectedLanguage: string;
  phoneNumber: string;

  constructor(
    private menu: MenuController,
    private loading: LoadingService,
    private authService: AuthService,
    private navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    private apiService: ApiService
  ) {
    this.phoneNumber = '';
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.menu.enable(false);
    this.navCtrl.setDirection('back', true, 'back');
  }

  ionViewWillEnter() {
    var self = this;
    this.authService.getToken();
    if (this.authService.isLoggedIn) {
      this.loading.present();
      this.apiService.getUserProfile()
        .subscribe(result => {
          localStorage.setItem('profile', JSON.stringify(result.profile));
          self.loading.dismiss()
          self.navCtrl.navigateRoot('/dashboard/home');
      },
      error => {
        self.loading.dismiss();
        self.authService.logout();
      });
    }
  }

  ngOnInit() {

  }

  checkIsEnabled() {
    if (this.phoneNumber && this.phoneNumber.length >= PHONE_LENGTH_VN) {
      return true;
    }
    return false;
  }

  ChangeLogin() {
    const navigationExtras: NavigationExtras = {
        queryParams: {
          phoneNumber : this.phoneNumber
        }
    };
    this.navCtrl.navigateForward(['/login'], navigationExtras);
  }

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
}
