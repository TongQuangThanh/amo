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

  pinCodeArray: any[];
  pinCodeFormGroup: FormGroup;
  color: string="gray";
  isHidden: boolean = false;
  codeSize: number = 6;
  isChecking:boolean= false;
  isError:boolean=false;
  refCode:string;
  
  constructor(
    private apiService: ApiService,
    private loading: LoadingService,
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
