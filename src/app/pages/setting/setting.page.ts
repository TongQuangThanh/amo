import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  selectedLanguage:string;
  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private navCtrl: NavController,
    private translateConfigService: TranslateConfigService
  ) { 
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('/landing');
  }

  changePassword(){
    this.navCtrl.navigateForward('/change-password');
  }

  languageChanged(language:string){
    this.selectedLanguage = language;
    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem('lang', language);
  }

}
