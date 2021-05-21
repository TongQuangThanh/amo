import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { TranslateService } from '@ngx-translate/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { LoadingService } from '../../services/loading/loading.service';
import { AlertService } from '../../services/alert/alert.service';


@Component({
  selector: 'app-popup-select-apartment',
  templateUrl: './popup-select-apartment.page.html',
  styleUrls: ['./popup-select-apartment.page.scss'],
})
export class PopupSelectApartmentPage implements OnInit {
  selectedLanguage:string;
  listDepartment: any = [];
  listDepartmentByID: any = {};
  idApartment: any;
  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private translate: TranslateService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private loading: LoadingService,
    private navParams: NavParams,
    private alertService: AlertService

  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.idApartment = this.navParams.data.idApartment;
    this.getListApartment();
  }

  getListApartment(){
    var self = this;
    this.loading.present();
    this.apiService.getListUserApartment()
      .subscribe(result => {
        self.listDepartment = result.userApartments;
        self.listDepartment.forEach(data =>{
          self.listDepartmentByID[data.apartment._id] = data;
        });
        self.loading.dismiss()
    },
    error => { 
      self.loading.dismiss();
    });
  }

  async selectApartment(id) {
    var name = this.listDepartmentByID[id].apartment.title + " - " + this.listDepartmentByID[id].campaign.title;
    const onClosedData = JSON.stringify({
      name: name,
      id: id
    });
    await this.modalController.dismiss(onClosedData);
  }

  async closeModal() {
    this.modalController.dismiss();
  }
  checkSelectOption(id) {
    if (this.idApartment == id) {
      return ['btn-select-active', 'active']
    } else {
      return ['', 'hide']
    }
  }
}
