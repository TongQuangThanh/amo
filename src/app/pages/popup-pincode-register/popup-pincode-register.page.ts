import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TranslateConfigService } from '../../translate-config.service';
import { Validators, FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-popup-pincode-register',
  templateUrl: './popup-pincode-register.page.html',
  styleUrls: ['./popup-pincode-register.page.scss'],
})
export class PopupPincodeRegisterPage implements OnInit {
  selectedLanguage:string;
  pinCodeArray: any[];
  pinCodeFormGroup: FormGroup;
  phoneNumber: string;
  color: string="gray";
  isHidden: boolean = false;
  codeSize: number = 4;
  isChecking:boolean= false;
  isError:boolean=false;
  isEnableResentCode: boolean;
  timmer:any;
  timmerCount: number;
  refCode: string;

  constructor(
    private translateConfigService: TranslateConfigService,
    private modalController: ModalController,
    private apiService: ApiService,
    private loading: LoadingService,
    private navParams: NavParams
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.initiateBuilder();
  }

  ngOnInit() {
    this.phoneNumber = this.navParams.data.phoneNumber;
    this.refCode = this.navParams.data.refCode;
    this.setupPreventResentCode();
  }

  setupPreventResentCode(){
    this.isEnableResentCode = false;
    var self = this;
    this.timmerCount = 30;
    this.timmer = setInterval(() => {
      if(self.timmerCount > 1){
        self.timmerCount -=1;
      }else{
        self.timmerCount = 0;
        self.isEnableResentCode = true;
      }
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    let stylebody = document.body.style;
    if (changes.color != undefined) {
      stylebody.setProperty('--borderColor', changes.color.currentValue);
    }
    if (changes.isHidden != undefined) {
      if (changes.isHidden.currentValue == false) {
        stylebody.setProperty('--charShape', 'none');
      } else {
        stylebody.setProperty('--charShape', 'disc');
      }
    }

    this.initiateBuilder();

  }

  initiateBuilder() {
    this.pinCodeFormGroup = new FormGroup({});

    for (let i = 0; i < this.codeSize; i++) {
      let formController: FormControl = new FormControl({ value: '', disabled: true }, [Validators.required]);
      this.pinCodeFormGroup.addControl('codeFiled' + i, formController);
    }

    let v_pinCodeArray: any[] = [];
    Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
      v_pinCodeArray.push(key);
    });

    this.pinCodeArray = v_pinCodeArray;
    this.pinCodeFormGroup.get('codeFiled0').enable();
  }
  ngAfterViewInit() {
    let input: HTMLElement = document.querySelectorAll('.pinCodeInput').item(0) as HTMLElement;
    input.focus();
  }


  onKeyUp($event: any, item: any, index: any) {
    let v_index;

    let reg = new RegExp("[0-9]");

    if ($event.key == "Backspace") {
      if (index == 0) {
        v_index = 0;
      } else {
        v_index = index - 1;
        this.pinCodeFormGroup.get('codeFiled' + index).disable();

      }
    } else {
      if (reg.test($event.target.value)) {

        if (index == this.codeSize - 1) {
          v_index = this.codeSize - 1;
        } else {
          v_index = index + 1;
          this.pinCodeFormGroup.get('codeFiled' + v_index).enable();

        }
      }
    }

    let input: HTMLElement = document.querySelectorAll('.pinCodeInput').item(v_index) as HTMLElement;
    input.focus();


    if (index == this.codeSize - 1 && $event.key != "Backspace") {
      let pinCodeValue: string = '';
      Object.keys(this.pinCodeFormGroup.value).forEach((key) => {
        pinCodeValue += this.pinCodeFormGroup.value[key];
      });

      if (this.pinCodeFormGroup.valid) {
        this.checkingPincode(pinCodeValue);
      } else {
      }
    }
  }

  onKeyDown($event: any) {
    if ($event.key != "Backspace") {

      if ($event.target.value.length == 1) {
        return false;
      }

    }
  }

  resentPinCode(){
    if(!this.isEnableResentCode){
      return;
    }
    var self = this;
    this.apiService.resentRegisterCode(this.phoneNumber).subscribe(result => {
      self.refCode = result.ref;
    },
    error => {
    });
    this.setupPreventResentCode();
  }

  checkingPincode(pinCodeValue:string){
    const self = this;
    this.isChecking = true;
    this.loading.present();
    this.apiService.confirmRegisterCode(this.phoneNumber, pinCodeValue)
      .subscribe(result => {
        console.log(result);
        self.isError = false;
        self.loading.dismiss();
        self.finishPinCode(pinCodeValue);
    },
    error => {
      this.isError = true;
      this.isChecking = false;
      self.loading.dismiss();
    });
  }

  async finishPinCode(pinCodeValue:string){
    const onClosedData = JSON.stringify({
      result: "0",
      message: "success",
      token: pinCodeValue,
      refCode: this.refCode
    });
    await this.modalController.dismiss(onClosedData);
  }

  async closeModal() {
    const onClosedData = JSON.stringify({
      result: "1",
      message: "cancel",
      token:""
    });
    await this.modalController.dismiss(onClosedData);
  }
  // closeModal() {
  //   this.modalController.dismiss();
  // }
}
