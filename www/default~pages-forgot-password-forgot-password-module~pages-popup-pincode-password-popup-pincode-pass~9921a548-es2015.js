(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-forgot-password-forgot-password-module~pages-popup-pincode-password-popup-pincode-pass~9921a548"],{

/***/ "JbAG":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/popup-pincode-password/popup-pincode-password.page.ts ***!
  \*****************************************************************************/
/*! exports provided: PopupPincodePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPincodePasswordPage", function() { return PopupPincodePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













function PopupPincodePasswordPage_ion_col_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function PopupPincodePasswordPage_ion_col_14_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const controlItem_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onKeyUp($event, controlItem_r4, i_r5); })("keydown", function PopupPincodePasswordPage_ion_col_14_Template_input_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onKeyDown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const controlItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", controlItem_r4);
} }
function PopupPincodePasswordPage_ion_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PINCODE_PASSWORD.wrong_code"));
} }
function PopupPincodePasswordPage_ion_spinner_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 22);
} }
function PopupPincodePasswordPage_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.timmerCount);
} }
class PopupPincodePasswordPage {
    constructor(apiService, loading, modalController, navParams) {
        this.apiService = apiService;
        this.loading = loading;
        this.modalController = modalController;
        this.navParams = navParams;
        this.color = "gray";
        this.isHidden = false;
        this.codeSize = 4;
        this.isChecking = false;
        this.isError = false;
        this.initiateBuilder();
    }
    ngOnInit() {
        this.phoneNumber = this.navParams.data.phoneNumber;
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
        this.pinCodeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        for (let i = 0; i < this.codeSize; i++) {
            let formController = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
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
        this.apiService.forgotPassword(this.phoneNumber).subscribe(result => {
        }, error => {
        });
        this.setupPreventResentCode();
    }
    checkingPincode(pinCodeValue) {
        const self = this;
        this.isChecking = true;
        this.loading.present();
        this.apiService.verifyTokenCode(this.phoneNumber, pinCodeValue)
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
                token: pinCodeValue
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
PopupPincodePasswordPage.ɵfac = function PopupPincodePasswordPage_Factory(t) { return new (t || PopupPincodePasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"])); };
PopupPincodePasswordPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopupPincodePasswordPage, selectors: [["app-popup-pincode-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 30, vars: 14, consts: [[1, "content-container"], ["lines", "none", 1, "header-item"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], [1, "ion-text-center", "modal-item"], ["lines", "none", 1, "note-style"], [1, "ion-text-wrap", "label-text"], ["lines", "none", 1, "padding-none", "margin-none"], [1, "pinCodeGrid"], [1, "form-class", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["class", "wrong-code", 4, "ngIf"], ["lines", "none", 1, "image-item"], ["name", "crescent", "class", "image-icon-check", 4, "ngIf"], ["lines", "none", 1, "label-item", "ion-text-center"], [1, "timecounter-label"], ["class", "timecounter", 4, "ngIf"], [1, "label-item", "ion-text-center"], ["disabled", "!isEnableResentCode", 1, "btn-resend", 3, "click"], [1, "btn-resend-label"], ["ng-pattern", "/^[0-9]*$/", "ng-maxlength", "1", "maxlength", "1", "type", "number", 1, "pinCodeInput", 3, "formControlName", "keyup", "keydown"], [1, "wrong-code"], ["name", "crescent", 1, "image-icon-check"], [1, "timecounter"]], template: function PopupPincodePasswordPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupPincodePasswordPage_Template_ion_buttons_click_3_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-grid", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PopupPincodePasswordPage_ion_col_14_Template, 2, 1, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PopupPincodePasswordPage_ion_label_15_Template, 3, 3, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PopupPincodePasswordPage_ion_spinner_17_Template, 1, 0, "ion-spinner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PopupPincodePasswordPage_span_22_Template, 2, 1, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-toolbar", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupPincodePasswordPage_Template_ion_button_click_26_listener() { return ctx.resentPinCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 10, "PINCODE_PASSWORD.timecounter"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEnableResentCode == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 12, "PINCODE_PASSWORD.btn_resend_code"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33,49,63,0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n}\n\n.header-item.ios[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  padding: 0 10px;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.modal-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #FFC144;\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  width: 1% !important;\n}\n\n.pinCodeInput[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n  min-width: 40px;\n  min-height: 40px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #c4c4c4;\n  font-size: 24px;\n  text-align: center;\n  -webkit-text-security: var(--charShape);\n  -moz-text-security: var(--charShape);\n}\n\n.pinCodeGrid[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n\n.pinCodeInput[disabled][_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e3e3e3;\n  background-color: transparent;\n}\n\n.image-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.image-icon-check[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  --color: #FFC144;\n}\n\n.label-item[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.note-style[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  color: #556080;\n}\n\n.btn-done[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  color: #556080;\n}\n\n.wrong-code[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  text-align: left;\n  color: #FFC144;\n}\n\n.margin-top-16[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.btn-resend[_ngcontent-%COMP%] {\n  --background-focused:transparent;\n  --background-hover:transparent;\n  --background: transparent;\n  --ion-toolbar-color: transparent;\n  --box-shadow: none;\n}\n\n.btn-resend-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #009AC9;\n}\n\n.timecounter-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7A838C;\n}\n\n.timecounter[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtcGluY29kZS1wYXNzd29yZC9wb3B1cC1waW5jb2RlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSw4QkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUlKOztBQUZBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQUtKOztBQUhBO0VBQ0ksc0JBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVNKOztBQU5BO0VBQ0ksb0JBQUE7QUFTSjs7QUFOQTtFQUNJLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0FBT0o7O0FBSEE7RUFDSSxjQUFBO0FBTUo7O0FBRkE7RUFDRyxnQ0FBQTtFQUNBLDZCQUFBO0FBS0g7O0FBRkE7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0FBS0o7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFIQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFIQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wdXAtcGluY29kZS1wYXNzd29yZC9wb3B1cC1waW5jb2RlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvb3R7XHJcbiAgICAtLWJvcmRlckNvbG9yOmdyYXk7XHJcbiAgICAtLWNoYXJTaGFwZTpub25lO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29udGVudC13cmFwIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgzMyw0OSw2MywwKTtcclxufVxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG4uaGVhZGVyLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xyXG59XHJcbi5oZWFkZXItaXRlbS5pb3Mge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxufVxyXG4ubW9kYWwtaXRlbSB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4ubW9kYWwtdG9vbGJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubW9kYWwtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogI0ZGQzE0NDtcclxufVxyXG5cclxuLmNvbDpsYXN0LWNoaWxkIHtcclxuICAgIHdpZHRoOjElICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5waW5Db2RlSW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDIzLCAyMSwgNDgsIDAuMTAyNTQ2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC8vd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8vaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtdGV4dC1zZWN1cml0eTp2YXIoLS1jaGFyU2hhcGUpO1xyXG4gICAgLW1vei10ZXh0LXNlY3VyaXR5OiB2YXIoLS1jaGFyU2hhcGUpO1xyXG59XHJcblxyXG5cclxuLnBpbkNvZGVHcmlke1xyXG4gICAgZGlyZWN0aW9uOiBsdHI7XHJcbn1cclxuXHJcblxyXG4ucGluQ29kZUlucHV0W2Rpc2FibGVkXXtcclxuICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlM2UzZTM7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaW1hZ2UtaXRlbSB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxufVxyXG5cclxuLmltYWdlLWljb24tY2hlY2sge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgLS1jb2xvcjogI0ZGQzE0NDtcclxufVxyXG4ubGFiZWwtaXRlbSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLm5vdGUtc3R5bGUgLmxhYmVsLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAjNTU2MDgwO1xyXG59XHJcblxyXG4uYnRuLWRvbmV7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIGNvbG9yOiAjNTU2MDgwO1xyXG59XHJcblxyXG4ud3JvbmctY29kZXtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNGRkMxNDQ7XHJcbn1cclxuXHJcbi5tYXJnaW4tdG9wLTE2e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuLmJ0bi1yZXNlbmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tdG9vbGJhci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1yZXNlbmQtbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA5QUM5O1xyXG59XHJcbi50aW1lY291bnRlci1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM3QTgzOEM7XHJcbn1cclxuLnRpbWVjb3VudGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupPincodePasswordPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-popup-pincode-password',
                templateUrl: './popup-pincode-password.page.html',
                styleUrls: ['./popup-pincode-password.page.scss'],
            }]
    }], function () { return [{ type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-forgot-password-forgot-password-module~pages-popup-pincode-password-popup-pincode-pass~9921a548-es2015.js.map