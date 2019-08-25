import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, Platform, NavController, ToastController } from '@ionic/angular';
import { RegisterPage } from '../auth/register/register.page';
import { LoginPage } from '../auth/login/login.page';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  selectedLanguage: string;
  isenabled: boolean;

  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: NativeStorage,
    private platform: Platform,
    private translateConfigService: TranslateConfigService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.isenabled = false;
    this.menu.enable(false);
  }

  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        this.navCtrl.navigateRoot('/dashboard');
      }
    });
  }

  ngOnInit() {

  }

  checkIsEnabled() {
    return !this.isenabled;
  }

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  async register() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }
}
