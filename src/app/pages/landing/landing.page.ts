import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TranslateConfigService } from '../../translate-config.service';
import { NavigationExtras } from '@angular/router';

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
    private authService: AuthService,
    private navCtrl: NavController,
    private translateConfigService: TranslateConfigService
  ) {
    this.phoneNumber = '';
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.menu.enable(false);
    this.navCtrl.setDirection('back', true, 'back');
  }

  ionViewWillEnter() {
    // this.authService.getToken().then((data) => {
    //   if (this.authService.isLoggedIn) {
    //     this.navCtrl.navigateRoot('/dashboard/home');
    //   }
    // });
    this.authService.getToken();
    if (this.authService.isLoggedIn) {
      this.navCtrl.navigateRoot('/dashboard/home');
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
