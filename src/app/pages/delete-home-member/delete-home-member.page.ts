import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ConstService } from '../../utils/const.service';
import { ActivatedRoute } from '@angular/router';
import { PopupDeleteMemberPage } from '../popup-delete-member/popup-delete-member.page';

@Component({
  selector: 'app-delete-home-member',
  templateUrl: './delete-home-member.page.html',
  styleUrls: ['./delete-home-member.page.scss'],
})
export class DeleteHomeMemberPage implements OnInit {
  selectedLanguage: string;
  memberObject: any;
  apartmentID: any;
  formRelationship: any;
  listCountry: any;
  avatarCountry: any;
  countryAlpha2: any;

  constructor(
    public modalController: ModalController,
    private translateConfigService: TranslateConfigService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.memberObject = JSON.parse(params['member'] || '');
      this.apartmentID = params['apartmentID'];
    });

    this.formRelationship = 0;
    this.listCountry = ConstService.LIST_COUNTRIES;
    this.countryAlpha2 = 'vn';
    this.avatarCountry = 'https://lipis.github.io/flag-icon-css/flags/4x3/vn.svg';
  }

  async deleteMemberModal() {
    var self = this;
    const modal = await this.modalController.create({
      component: PopupDeleteMemberPage,
      componentProps: {
        apartmentID: self.apartmentID,
        id: this.memberObject._id,
      },
      cssClass: 'delete-member-custom-class',
    });
    modal.onDidDismiss().then((dataReturned: any) => {
      if (dataReturned && dataReturned.data) {
        const dataReturnedResult = JSON.parse(dataReturned.data);
        if (dataReturnedResult.message == 'success') {
          this.navCtrl.back();
        }
      }
    });
    return await modal.present();
  }
}
