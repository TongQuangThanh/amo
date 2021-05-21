import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { LoadingService } from '../../../services/loading/loading.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '../../../translate-config.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-register-wallet',
  templateUrl: './register-wallet.page.html',
  styleUrls: ['./register-wallet.page.scss'],
})
export class RegisterWalletPage implements OnInit {
  registerError = false;

  constructor(
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
  }

  openWalletNow() {
    this.registerError = false;
    this.loading.present();
    this.apiService.registerEpay().subscribe(
      (result) => {
        this.openURLAccuracyEpay(result.url);
        this.loading.dismiss();
        this.navCtrl.back();
      },
      (error) => {
        this.registerError = true;
        this.loading.dismiss();
      }
    );
  }

  
  openURLAccuracyEpay(url: string){
    const browser = this.iab.create(url ,'_system', 'location=yes, enableviewportscale=yes');
    browser.show();
  }
}
