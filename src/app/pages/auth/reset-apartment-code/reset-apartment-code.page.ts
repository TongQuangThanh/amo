import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { LoadingService } from '../../../services/loading/loading.service';
import { ApiService } from '../../../services/api/api.service';
import { TranslateConfigService } from '../../../translate-config.service';

@Component({
  selector: 'app-reset-apartment-code',
  templateUrl: './reset-apartment-code.page.html',
  styleUrls: ['./reset-apartment-code.page.scss'],
})
export class ResetApartmentCodePage implements OnInit {
  selectedLanguage:string;
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
    private translateConfigService: TranslateConfigService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

}
