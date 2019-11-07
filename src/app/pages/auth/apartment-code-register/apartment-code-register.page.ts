import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { LoadingService } from '../../../services/loading/loading.service';
import { ApiService } from '../../../services/api/api.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-apartment-code-password',
  templateUrl: './apartment-code-register.page.html',
  styleUrls: ['./apartment-code-register.page.scss'],
})
export class ApartmentCodeRegisterPage {

  pinCodeArray: any[];
  pinCodeFormGroup: FormGroup;
  phoneNumber: string;
  color: string="gray";
  isHidden: boolean = false;
  codeSize: number = 6;
  isChecking:boolean= false;
  isError:boolean=false;
  password:string;
  token:string;
  
  constructor(
    private apiService: ApiService,
    private loading: LoadingService,
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    this.initiateBuilder();
  }

  ngOnInit() {
    this.phoneNumber = this.navParams.data.phoneNumber;
    this.password = this.navParams.data.password;
    this.token = this.navParams.data.token;
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

    let reg = new RegExp("[a-zA-Z]");

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

  checkingPincode(pinCodeValue:string){
    const self = this;
    this.isChecking = true;
    this.loading.present();
    this.apiService.confirmApartmentCode(this.phoneNumber, pinCodeValue.toUpperCase(), this.token, this.password)
      .subscribe(result => {
        self.isError = false;
        self.loading.dismiss();
        self.finishPinCode(pinCodeValue.toUpperCase());
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
      token: pinCodeValue
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
}
