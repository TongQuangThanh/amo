(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-landing-landing-module~pages-popup-pincode-register-popup-pincode-register-module"],{

/***/ "Z3Km":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/popup-pincode-register/popup-pincode-register.page.ts ***!
  \*****************************************************************************/
/*! exports provided: PopupPincodeRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPincodeRegisterPage", function() { return PopupPincodeRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function PopupPincodeRegisterPage_ion_col_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function PopupPincodeRegisterPage_ion_col_14_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const controlItem_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onKeyUp($event, controlItem_r4, i_r5); })("keydown", function PopupPincodeRegisterPage_ion_col_14_Template_input_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onKeyDown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const controlItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", controlItem_r4);
} }
function PopupPincodeRegisterPage_ion_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PINCODE_PASSWORD.wrong_code"));
} }
function PopupPincodeRegisterPage_ion_spinner_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 23);
} }
function PopupPincodeRegisterPage_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.timmerCount);
} }
class PopupPincodeRegisterPage {
    constructor(translateConfigService, modalController, apiService, loading, navParams) {
        this.translateConfigService = translateConfigService;
        this.modalController = modalController;
        this.apiService = apiService;
        this.loading = loading;
        this.navParams = navParams;
        this.color = "gray";
        this.isHidden = false;
        this.codeSize = 4;
        this.isChecking = false;
        this.isError = false;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        this.initiateBuilder();
    }
    ngOnInit() {
        this.phoneNumber = this.navParams.data.phoneNumber;
        this.refCode = this.navParams.data.refCode;
        this.setupPreventResentCode();
    }
    setupPreventResentCode() {
        this.isEnableResentCode = false;
        var self = this;
        this.timmerCount = 30;
        this.timmer = setInterval(() => {
            if (self.timmerCount > 1) {
                self.timmerCount -= 1;
            }
            else {
                self.timmerCount = 0;
                self.isEnableResentCode = true;
            }
        }, 1000);
    }
    ngOnChanges(changes) {
        let stylebody = document.body.style;
        if (changes.color != undefined) {
            stylebody.setProperty('--borderColor', changes.color.currentValue);
        }
        if (changes.isHidden != undefined) {
            if (changes.isHidden.currentValue == false) {
                stylebody.setProperty('--charShape', 'none');
            }
            else {
                stylebody.setProperty('--charShape', 'disc');
            }
        }
        this.initiateBuilder();
    }
    initiateBuilder() {
        this.pinCodeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        for (let i = 0; i < this.codeSize; i++) {
            let formController = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.pinCodeFormGroup.addControl('codeFiled' + i, formController);
        }
        let v_pinCodeArray = [];
        Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
            v_pinCodeArray.push(key);
        });
        this.pinCodeArray = v_pinCodeArray;
        this.pinCodeFormGroup.get('codeFiled0').enable();
    }
    ngAfterViewInit() {
        let input = document.querySelectorAll('.pinCodeInput').item(0);
        input.focus();
    }
    onKeyUp($event, item, index) {
        let v_index;
        let reg = new RegExp("[0-9]");
        if ($event.key == "Backspace") {
            if (index == 0) {
                v_index = 0;
            }
            else {
                v_index = index - 1;
                this.pinCodeFormGroup.get('codeFiled' + index).disable();
            }
        }
        else {
            if (reg.test($event.target.value)) {
                if (index == this.codeSize - 1) {
                    v_index = this.codeSize - 1;
                }
                else {
                    v_index = index + 1;
                    this.pinCodeFormGroup.get('codeFiled' + v_index).enable();
                }
            }
        }
        let input = document.querySelectorAll('.pinCodeInput').item(v_index);
        input.focus();
        if (index == this.codeSize - 1 && $event.key != "Backspace") {
            let pinCodeValue = '';
            Object.keys(this.pinCodeFormGroup.value).forEach((key) => {
                pinCodeValue += this.pinCodeFormGroup.value[key];
            });
            if (this.pinCodeFormGroup.valid) {
                this.checkingPincode(pinCodeValue);
            }
            else {
            }
        }
    }
    onKeyDown($event) {
        if ($event.key != "Backspace") {
            if ($event.target.value.length == 1) {
                return false;
            }
        }
    }
    resentPinCode() {
        if (!this.isEnableResentCode) {
            return;
        }
        var self = this;
        this.apiService.resentRegisterCode(this.phoneNumber).subscribe(result => {
            self.refCode = result.ref;
        }, error => {
        });
        this.setupPreventResentCode();
    }
    checkingPincode(pinCodeValue) {
        const self = this;
        this.isChecking = true;
        this.loading.present();
        this.apiService.confirmRegisterCode(this.phoneNumber, pinCodeValue)
            .subscribe(result => {
            self.isError = false;
            self.loading.dismiss();
            self.finishPinCode(pinCodeValue);
        }, error => {
            this.isError = true;
            this.isChecking = false;
            self.loading.dismiss();
        });
    }
    finishPinCode(pinCodeValue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = JSON.stringify({
                result: "0",
                message: "success",
                token: pinCodeValue,
                refCode: this.refCode
            });
            yield this.modalController.dismiss(onClosedData);
        });
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onClosedData = JSON.stringify({
                result: "1",
                message: "cancel",
                token: ""
            });
            yield this.modalController.dismiss(onClosedData);
        });
    }
}
PopupPincodeRegisterPage.ɵfac = function PopupPincodeRegisterPage_Factory(t) { return new (t || PopupPincodeRegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"])); };
PopupPincodeRegisterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopupPincodeRegisterPage, selectors: [["app-popup-pincode-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 14, consts: [[1, "content-wrap"], [1, "content-container"], ["lines", "none", 1, "header-item"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], [1, "ion-text-center", "modal-item"], ["lines", "none", 1, "note-style"], [1, "ion-text-wrap", "label-text"], ["lines", "none", 1, "padding-none", "margin-none"], [1, "pinCodeGrid"], [1, "form-class", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["lines", "none", 1, "label-item", "ion-text-center"], ["slot", "end", "class", "wrong-code", 4, "ngIf"], ["lines", "none", 1, "image-item"], ["name", "crescent", "class", "image-icon-check", 4, "ngIf"], [1, "timecounter-label"], ["class", "timecounter", 4, "ngIf"], [1, "label-item", "ion-text-center"], ["disabled", "!isEnableResentCode", 1, "btn-resend", 3, "click"], [1, "btn-resend-label"], ["ng-pattern", "/^[0-9]*$/", "ng-maxlength", "1", "maxlength", "1", "type", "number", 1, "pinCodeInput", 3, "formControlName", "keyup", "keydown"], ["slot", "end", 1, "wrong-code"], ["name", "crescent", 1, "image-icon-check"], [1, "timecounter"]], template: function PopupPincodeRegisterPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupPincodeRegisterPage_Template_ion_buttons_click_3_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-grid", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PopupPincodeRegisterPage_ion_col_14_Template, 2, 1, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PopupPincodeRegisterPage_ion_label_16_Template, 3, 3, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PopupPincodeRegisterPage_ion_spinner_18_Template, 1, 0, "ion-spinner", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PopupPincodeRegisterPage_span_23_Template, 2, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-toolbar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupPincodeRegisterPage_Template_ion_button_click_27_listener() { return ctx.resentPinCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "PINCODE_PASSWORD.pincode_note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.pinCodeFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pinCodeArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 10, "PINCODE_PASSWORD.timecounter"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEnableResentCode == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 12, "PINCODE_PASSWORD.btn_resend_code"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33,49,63,0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding: 0 10px;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.modal-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #FFC144;\n}\n\n.delete_message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313F;\n  margin-bottom: 0;\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  width: 1% !important;\n}\n\n.pinCodeInput[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #c4c4c4;\n  font-size: 24px;\n  text-align: center;\n  -webkit-text-security: var(--charShape);\n  -moz-text-security: var(--charShape);\n}\n\n.pinCodeGrid[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n\n.pinCodeInput[disabled][_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e3e3e3;\n  background-color: transparent;\n}\n\n.image-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.image-icon-check[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.note-style[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  color: #556080;\n}\n\n.btn-done[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  color: #556080;\n}\n\n.wrong-code[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  text-align: center;\n  color: #FFC144;\n}\n\n.margin-top-16[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.btn-resend[_ngcontent-%COMP%] {\n  --background-focused:transparent;\n  --background-hover:transparent;\n  --background: transparent;\n  --ion-toolbar-color: transparent;\n  --box-shadow: none;\n}\n\n.btn-resend-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #009AC9;\n}\n\n.timecounter-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7A838C;\n}\n\n.timecounter[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtcGluY29kZS1yZWdpc3Rlci9wb3B1cC1waW5jb2RlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLDhCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBR0o7O0FBREE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSxvQkFBQTtBQVNKOztBQU5BO0VBQ0ksbUJBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7QUFTSjs7QUFOQTtFQUNJLGNBQUE7QUFTSjs7QUFOQTtFQUNHLGdDQUFBO0VBQ0EsNkJBQUE7QUFTSDs7QUFOQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7QUFTSjs7QUFOQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBU0o7O0FBTkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBU0o7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBU0o7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBU0o7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFOQTtFQUNJLGdCQUFBO0FBU0o7O0FBTEE7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFXSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcHVwLXBpbmNvZGUtcmVnaXN0ZXIvcG9wdXAtcGluY29kZS1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJyb290e1xyXG4gICAgLS1ib3JkZXJDb2xvcjpncmF5O1xyXG4gICAgLS1jaGFyU2hhcGU6bm9uZTtcclxufVxyXG4uY29udGVudC13cmFwIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgzMyw0OSw2MywwKTtcclxufVxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG4uaGVhZGVyLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xyXG59XHJcbi5tb2RhbC1pdGVtIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi5tb2RhbC10b29sYmFyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5tb2RhbC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcbi5kZWxldGVfbWVzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyMTMxM0Y7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDoxJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGluQ29kZUlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgyMywgMjEsIDQ4LCAwLjEwMjU0Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRleHQtc2VjdXJpdHk6dmFyKC0tY2hhclNoYXBlKTtcclxuICAgIC1tb3otdGV4dC1zZWN1cml0eTogdmFyKC0tY2hhclNoYXBlKTtcclxufVxyXG5cclxuLnBpbkNvZGVHcmlke1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuXHJcbi5waW5Db2RlSW5wdXRbZGlzYWJsZWRde1xyXG4gICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UzZTNlMztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtaWNvbi1jaGVjayB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNsYXNzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ubm90ZS1zdHlsZSAubGFiZWwtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NTYwODA7XHJcbn1cclxuXHJcbi5idG4tZG9uZXtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgY29sb3I6ICM1NTYwODA7XHJcbn1cclxuXHJcbi53cm9uZy1jb2Rle1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0xNntcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4uYnRuLXJlc2VuZCB7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3Zlcjp0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi10b29sYmFyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLXJlc2VuZC1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDlBQzk7XHJcbn1cclxuLnRpbWVjb3VudGVyLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzdBODM4QztcclxufVxyXG4udGltZWNvdW50ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjMjEzMTNGO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupPincodeRegisterPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-popup-pincode-register',
                templateUrl: './popup-pincode-register.page.html',
                styleUrls: ['./popup-pincode-register.page.scss'],
            }]
    }], function () { return [{ type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-landing-landing-module~pages-popup-pincode-register-popup-pincode-register-module-es2015.js.map