import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';
import { LoadingService } from '../../services/loading/loading.service';
import { ApiService } from '../../services/api/api.service';
import { Platform, NavController } from '@ionic/angular';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.page.html',
  styleUrls: ['./add-home.page.scss'],
})
export class AddHomePage implements OnInit {
  selectedLanguage: string;
  isChecking: boolean = false;
  isError: boolean = false;
  // pincode
  pinCodeValue: string = '';
  pinCodeArray: any[];
  pinCodeFormGroup: FormGroup;
  phoneNumber: string;
  color: string = 'gray';
  isHidden: boolean = false;
  codeSize: number = 6;
  isValid: boolean = false;

  constructor(
    private translate: TranslateService,
    private apiService: ApiService,
    private loading: LoadingService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private translateConfigService: TranslateConfigService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.initiateBuilder();
  }

  ngOnInit() {}
  
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
    const input: HTMLElement = document.querySelectorAll('.pinCodeInput').item(0) as HTMLElement;
    input.focus();
  }

  onKeyUp($event: any, item: any, index: any) {
    let v_index;
    let reg = new RegExp('[0-9]');
    if ($event.key == 'Backspace') {
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
    if (index == this.codeSize - 1 && $event.key != 'Backspace') {
      this.pinCodeValue = '';
      Object.keys(this.pinCodeFormGroup.value).forEach((key) => {
        this.pinCodeValue += this.pinCodeFormGroup.value[key];
      });
      if (this.pinCodeFormGroup.valid) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    }
  }

  onKeyDown($event: any) {
    if ($event.key != 'Backspace') {
      if ($event.target.value.length == 1) {
        return false;
      }
    }
  }

  checkingPincode() {
    const self = this;
    this.isChecking = true;
    this.loading.present();
    this.apiService.addApartmentToUser(this.pinCodeValue.toUpperCase()).subscribe(
      (result) => {
        self.isError = false;
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('COMMON.message_success'));
        setTimeout(function () {
          self.goToMyHome();
        }, 1000);
      },
      (error) => {
        this.isError = true;
        this.isChecking = false;
        self.loading.dismiss();
        self.alertService.presentToast(this.translate.instant('COMMON.message_fail'));
      }
    );
  }

  goToMyHome() {
    this.navCtrl.navigateForward('/my-home');
  }
}
