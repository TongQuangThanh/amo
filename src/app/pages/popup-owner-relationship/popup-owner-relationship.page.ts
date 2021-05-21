import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-popup-owner-relationship',
  templateUrl: './popup-owner-relationship.page.html',
  styleUrls: ['./popup-owner-relationship.page.scss'],
})
export class PopupOwnerRelationshipPage implements OnInit {
  selectedLanguage:string;
  selectedOption: any;

  constructor(
    private translate: TranslateService,
    private navParams: NavParams,
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.selectedOption = this.navParams.data.index;
  }
  selectOption(index) {
    var name = this.translate.instant('ADD_HOME_MEMBER.guest');
    switch(index) {
      case 1:
        name = this.translate.instant('ADD_HOME_MEMBER.wife');
        break;
      case 2: 
        name = this.translate.instant('ADD_HOME_MEMBER.husband');
        break;
      case 3:
        name = this.translate.instant('ADD_HOME_MEMBER.father');
        break;
      case 4:
        name = this.translate.instant('ADD_HOME_MEMBER.mother');
        break;
      case 5:
        name = this.translate.instant('ADD_HOME_MEMBER.son');
        break;
      case 6:
        name = this.translate.instant('ADD_HOME_MEMBER.daughter');
        break;
      case 7:
        name = this.translate.instant('ADD_HOME_MEMBER.brother');
        break;
      case 8:
        name = this.translate.instant('ADD_HOME_MEMBER.sister');
        break;
      case 9:
        name = this.translate.instant('ADD_HOME_MEMBER.relative');
        break;
      case 10:
        name = this.translate.instant('ADD_HOME_MEMBER.friend');
        break;
      case 11:
        name = this.translate.instant('ADD_HOME_MEMBER.housemaid');
        break;
      case 12:
        name = this.translate.instant('ADD_HOME_MEMBER.guest');
        break;
    }
    this.setData(name, index);
  }
  async setData(name, index) {
    const onClosedData = JSON.stringify({
      name: name,
      value: index
    });
    await this.modalController.dismiss(onClosedData);
  }
  closeModal() {
    this.modalController.dismiss();
  }
  checkOptionActive(index) {
    if (this.selectedOption == index) {
      return 'selected-color';
    } else {
      return '';
    }
  }
}
