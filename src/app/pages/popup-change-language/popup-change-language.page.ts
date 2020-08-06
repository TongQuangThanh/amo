import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-popup-change-language',
  templateUrl: './popup-change-language.page.html',
  styleUrls: ['./popup-change-language.page.scss'],
})
export class PopupChangeLanguagePage implements OnInit {
  selectedLanguage:string;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  languageChanged(language:string){
    this.selectedLanguage = language;
    this.translateConfigService.setLanguage(this.selectedLanguage);
    localStorage.setItem('lang', language);
  }

}
