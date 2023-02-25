(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-my-account-my-account-module~pages-popup-hotline-popup-hotline-module"],{

/***/ "0LNU":
/*!***********************************************************!*\
  !*** ./src/app/pages/popup-hotline/popup-hotline.page.ts ***!
  \***********************************************************/
/*! exports provided: PopupHotlinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupHotlinePage", function() { return PopupHotlinePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "zzaN");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















class PopupHotlinePage {
    constructor(translateConfigService, modalController, callNumber, apiService, clipboard, translate, alertService) {
        this.translateConfigService = translateConfigService;
        this.modalController = modalController;
        this.callNumber = callNumber;
        this.apiService = apiService;
        this.clipboard = clipboard;
        this.translate = translate;
        this.alertService = alertService;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    ngOnInit() {
        this.phoneNumber = "02438353456";
    }
    callEmergency(event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        const campaignPhone = this.phoneNumber;
        this.callNumber.callNumber(campaignPhone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    copyNumberPhone() {
        this.clipboard.copy(this.phoneNumber);
        this.alertService.presentToast(this.translate.instant('MY_HOME.message_copy'));
        this.closeModal();
    }
    closeModal() {
        this.modalController.dismiss();
    }
}
PopupHotlinePage.ɵfac = function PopupHotlinePage_Factory(t) { return new (t || PopupHotlinePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"])); };
PopupHotlinePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupHotlinePage, selectors: [["app-popup-hotline"]], decls: 22, vars: 10, consts: [[1, "content-wrap"], [1, "content-container"], ["lines", "none", 1, "header-item"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], ["lines", "none", 1, "ion-text-center"], [1, "trash-icon", 3, "src"], [1, "ion-text-center", "modal-item"], [1, "delete_message"], [1, "hotline-num"], ["lines", "none", 1, "ion-text-center", "modal-toolbar"], [1, "cancel-button", 3, "click"], [1, "cancel-button-label"], [1, "delete-button", 3, "click"], [1, "delete-button-label"]], template: function PopupHotlinePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupHotlinePage_Template_ion_buttons_click_3_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(024) 3836 3456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-toolbar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupHotlinePage_Template_ion_button_click_14_listener() { return ctx.copyNumberPhone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupHotlinePage_Template_ion_button_click_18_listener($event) { return ctx.callEmergency($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/icon/account/calling.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "MY_ACCOUNT.hotline_message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 6, "MY_ACCOUNT.copy_num"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 8, "MY_ACCOUNT.call"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33,49,63,0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.trash-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #FFC144;\n}\n\n.delete_message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313F;\n  margin-bottom: 0;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 44px;\n  --ion-toolbar-color: #D3D6D9;\n  --background-activated: #c5c7c9;\n  --background-focused: #c5c7c9;\n  --background-hover: #c5c7c9;\n  --border-radius: 8px;\n  margin: 0 10px;\n  --box-shadow: none !important;\n}\n\n.cancel-button-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313F;\n  text-transform: none;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 44px;\n  --ion-toolbar-color: #FFC144;\n  --background-activated: #c5433a;\n  --background-focused: #c5433a;\n  --background-hover: #c5433a;\n  --border-radius: 8px;\n  margin: 0 10px;\n  --box-shadow: none !important;\n}\n\n.delete-button-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #FFFFFF;\n  text-transform: none;\n}\n\n.hotline-num[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  color: #21313F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtaG90bGluZS9wb3B1cC1ob3RsaW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLDhCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBR0o7O0FBREE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQVNKOztBQVBBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFVSjs7QUFSQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQVdKOztBQVRBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFZSjs7QUFWQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wdXAtaG90bGluZS9wb3B1cC1ob3RsaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvb3R7XHJcbiAgICAtLWJvcmRlckNvbG9yOmdyYXk7XHJcbiAgICAtLWNoYXJTaGFwZTpub25lO1xyXG59XHJcbi5jb250ZW50LXdyYXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMzLDQ5LDYzLDApO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi5oZWFkZXItaXRlbSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbn1cclxuLm1vZGFsLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAyNHB4IDA7XHJcbn1cclxuLm1vZGFsLXRvb2xiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnRyYXNoLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgY29sb3I6ICNGRkMxNDQ7XHJcbn1cclxuLmRlbGV0ZV9tZXNzYWdlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIC0taW9uLXRvb2xiYXItY29sb3I6ICNEM0Q2RDk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjYzVjN2M5O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNjNWM3Yzk7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNjNWM3Yzk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhbmNlbC1idXR0b24tbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAtLWlvbi10b29sYmFyLWNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2M1NDMzYTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjYzU0MzNhO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYzU0MzNhO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5kZWxldGUtYnV0dG9uLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uaG90bGluZS1udW0ge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupHotlinePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup-hotline',
                templateUrl: './popup-hotline.page.html',
                styleUrls: ['./popup-hotline.page.scss'],
            }]
    }], function () { return [{ type: _translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }, { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Clipboard"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-my-account-my-account-module~pages-popup-hotline-popup-hotline-module-es2015.js.map