import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-survey-detail',
  templateUrl: './popup-survey-detail.page.html',
  styleUrls: ['./popup-survey-detail.page.scss'],
})
export class PopupSurveyDetailPage implements OnInit {
  surveyData: any;

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
  }

  ngOnInit() {
    this.surveyData =  this.navParams.data.surveyData;
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
