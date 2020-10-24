import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { Platform, NavController } from '@ionic/angular';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.page.html',
  styleUrls: ['./add-home.page.scss'],
})
export class AddHomePage implements OnInit {
  selectedLanguage:string;
  activeCode: string;
  isChecking:boolean= false;
  isError:boolean=false;

  constructor(
    private translate: TranslateService,
    private apiService: ApiService,
    private loading: LoadingService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private translateConfigService: TranslateConfigService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.activeCode = "";
  }

  checkIsEnabled() {
    if (this.activeCode && this.activeCode.length >= 6) {
      return true;
    }
    return false;
  }
  checkingPincode(){
    const self = this;
    this.isChecking = true;
    var pinCodeValue = this.activeCode;
    this.loading.present();
    this.apiService.addApartmentToUser(pinCodeValue.toUpperCase())
      .subscribe(result => {
        self.isError = false;
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('COMMON.message_success'));
        setTimeout(function() {
          self.goToMyHome();
        }, 1000);
    },
    error => {
      this.isError = true;
      this.isChecking = false;
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('COMMON.message_fail'));
    });
  }
  goToMyHome(){
    this.navCtrl.navigateForward('/my-home');
  }

}
