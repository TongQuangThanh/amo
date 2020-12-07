import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popup-delete-vehicle',
  templateUrl: './popup-delete-vehicle.page.html',
  styleUrls: ['./popup-delete-vehicle.page.scss'],
})
export class PopupDeleteVehiclePage {
  selectedLanguage:string;
  idVehicle: any;
  apartmentID: any;

  constructor(
    private modalController: ModalController,
    private apiService: ApiService,
    private loading: LoadingService,
    private navParams: NavParams
  ) {
  }

  ngOnInit() {
    this.idVehicle = this.navParams.data.id;
    this.apartmentID = this.navParams.data.apartmentID;
  }

  deleteVehicle(){
    var self = this;
    const params = {
      apartment: self.apartmentID,
      vehicleId: self.idVehicle
    };
    this.loading.present();
    this.apiService.deleteApartmentVehicle(params)
      .subscribe(result => {
        self.loading.dismiss()
        self.finishPinCode();
    },
    error => {
      self.loading.dismiss();
    });
  }
  async finishPinCode(){
    const onClosedData = JSON.stringify({
      result: "0",
      message: "success"
    });
    await this.modalController.dismiss(onClosedData);
  }

  async closeModal() {
    const onClosedData = JSON.stringify({
      result: "1",
      message: "cancel"
    });
    await this.modalController.dismiss(onClosedData);
  }
}
