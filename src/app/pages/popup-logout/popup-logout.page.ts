import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-popup-logout',
  templateUrl: './popup-logout.page.html',
  styleUrls: ['./popup-logout.page.scss'],
})
export class PopupLogoutPage implements OnInit {
  selectedLanguage:string;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private authService: AuthService,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('/landing');
    this.closeModal();
  }
}
