import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popup-delete-member',
  templateUrl: './popup-delete-member.page.html',
  styleUrls: ['./popup-delete-member.page.scss'],
})
export class PopupDeleteMemberPage {
  idMember: any;
  
  constructor(
    private apiService: ApiService,
    private loading: LoadingService,
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    
  }

  ngOnInit() {
    this.idMember = this.navParams.data.id;
  }
  deleteMember(){
    var self = this;
    const params = {
      memberId: self.idMember
    };
    this.loading.present();
    this.apiService.deleteApartmentMember(params)
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
