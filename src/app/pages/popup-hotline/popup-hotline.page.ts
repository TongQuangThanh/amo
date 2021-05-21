import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { ApiService } from '../../services/api/api.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-popup-hotline',
  templateUrl: './popup-hotline.page.html',
  styleUrls: ['./popup-hotline.page.scss'],
})
export class PopupHotlinePage implements OnInit {
  selectedLanguage:string;
  phoneNumber: any;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private callNumber: CallNumber,
    private apiService: ApiService,
    private clipboard: Clipboard,
    private translate: TranslateService,
    private alertService: AlertService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.phoneNumber = "02438353456";
  }
  callEmergency(event){
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
    const campaignPhone = this.phoneNumber;
    this.callNumber.callNumber(campaignPhone, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  copyNumberPhone() {
    this.clipboard.copy(this.phoneNumber);
    this.alertService.presentToast(this.translate.instant('MY_HOME.message_copy'));
    this.closeModal();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
