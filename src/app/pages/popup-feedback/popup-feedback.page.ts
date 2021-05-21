import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-popup-feedback',
  templateUrl: './popup-feedback.page.html',
  styleUrls: ['./popup-feedback.page.scss'],
})
export class PopupFeedbackPage implements OnInit {
  selectedLanguage:string;
  message: string = "";
  profile: any;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private translate: TranslateService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private loading: LoadingService,
    private alertService: AlertService,
    private authService: AuthService,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.profile = this.authService.getProfile();
  }

  sendFeedback() {
    var self = this;
    const params = {
      title: this.translate.instant('MY_ACCOUNT.feedback'),
      content: this.message
    };
    this.loading.present();
    this.apiService.postUserComment(params)
      .subscribe(result => {
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('MY_ACCOUNT.feedback_success'));
        self.closeModal();
    },
    error => {
      self.loading.dismiss();
      self.alertService.presentToast(this.translate.instant('COMMON.message_fail'));
      self.closeModal();
    });
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
