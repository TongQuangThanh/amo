import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { PopupOwnerRelationshipPage } from '../popup-owner-relationship/popup-owner-relationship.page';

@Component({
  selector: 'app-add-home-member',
  templateUrl: './add-home-member.page.html',
  styleUrls: ['./add-home-member.page.scss'],
})
export class AddHomeMemberPage implements OnInit {
  selectedLanguage:string;

  constructor(
    public modalController: ModalController,
    private translateConfigService: TranslateConfigService,
    private navCtrl: NavController,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  // selectRelationship() {
  //   this.navCtrl.navigateForward('/popup-feedback');
  // }

  async selectRelationship() {
    const modal = await this.modalController.create({
      component: PopupOwnerRelationshipPage,
      cssClass: 'selectRelationship-page-custom'
    });
    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned !== null) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
      }
    });
    return await modal.present();
  }

}
