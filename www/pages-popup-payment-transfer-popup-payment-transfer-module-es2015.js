(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-payment-transfer-popup-payment-transfer-module"],{

/***/ "7Ogg":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/popup-payment-transfer/popup-payment-transfer.page.ts ***!
  \*****************************************************************************/
/*! exports provided: PopupPaymentTransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentTransferPage", function() { return PopupPaymentTransferPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "zzaN");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












class PopupPaymentTransferPage {
    constructor(translateConfigService, modalController, navParams, clipboard, translate, alertService) {
        this.translateConfigService = translateConfigService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.clipboard = clipboard;
        this.translate = translate;
        this.alertService = alertService;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    ngOnInit() {
        this.dataTransfer = this.navParams.data.transfer;
    }
    copyBankNumber() {
        this.clipboard.copy(this.dataTransfer.bankAccountNumber);
        this.alertService.presentToast(this.translate.instant('MY_HOME.message_copy'));
        // this.closeModal();
    }
    closeModal() {
        this.modalController.dismiss();
    }
}
PopupPaymentTransferPage.ɵfac = function PopupPaymentTransferPage_Factory(t) { return new (t || PopupPaymentTransferPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
PopupPaymentTransferPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupPaymentTransferPage, selectors: [["app-popup-payment-transfer"]], decls: 27, vars: 16, consts: [[1, "content-wrap"], [1, "content-container"], ["lines", "none", 1, "header-item"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], [1, "dialog-icon-money", 3, "src"], ["lines", "none", 1, "modal-item"], [1, "ion-text-title"], [1, "ion-text-message"], ["lines", "none", 1, "ion-info-bank_account"], [1, "bank_account_title"], [1, "back_account"], ["slot", "end", 1, "button-copy", 3, "click"], ["name", "copy-outline", "slot", "start", 1, "icon-copy"], [1, "button-copy-label"], [1, "bank-account-holder"]], template: function PopupPaymentTransferPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentTransferPage_Template_ion_buttons_click_3_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentTransferPage_Template_ion_button_click_20_listener() { return ctx.copyBankNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/icon/payment/money2.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "PAYMENT_INFOR.payment_transfer_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "PAYMENT_INFOR.payment_transfer_message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 12, "PAYMENT_INFOR.bank_account_management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataTransfer.bankAccountNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 14, "PAYMENT_INFOR.btn_copy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.dataTransfer.bankAccountHolder, " - ", ctx.dataTransfer.bankName, "");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor: gray;\n  --charShape: none;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33, 49, 63, 0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 0 20px 0 20px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f4f5f5;\n  margin: 0 28px 0px 28px;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.no-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.trash-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #FFC144;\n}\n\n.normal_message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313f;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.button-copy[_ngcontent-%COMP%] {\n  --ion-toolbar-color: rgba(0, 154, 201, 0.15);\n  --background-activated: rgba(0, 154, 201, 0.25);\n  --background-focused: rgba(0, 154, 201, 0.25);\n  --background-hover: rgba(0, 154, 201, 0.25);\n  --border-radius: 100px;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  height: 32px;\n  --min-height: 32px;\n  padding-left: 10px;\n  --background: #fef0ef;\n  font-family: Open Sans;\n  font-style: normal;\n  position: absolute;\n  right: 10px;\n  top: 18px;\n}\n\n.button-copy.md[_ngcontent-%COMP%] {\n  --box-shadow: none !important;\n  padding: 0;\n}\n\n.button-copy-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #FFC144;\n  padding-right: 10px;\n}\n\n.icon-copy[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  --background: #FFC144;\n  color: #FFC144;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 0px 25px 0px 20px;\n}\n\n.dialog-icon-money[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n}\n\n.ion-text-title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #221c1e;\n}\n\n.ion-text-message[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: #666666;\n  margin-bottom: 15px;\n}\n\n.ion-info-bank_account[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin: 0 15px;\n  --min-height: 100px;\n  margin-bottom: 20px;\n  --padding-bottom: 10px;\n}\n\n.ion-info-bank_account[_ngcontent-%COMP%]   .bank_account_title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  position: absolute;\n  top: 0px;\n  left: 0;\n}\n\n.ion-info-bank_account[_ngcontent-%COMP%]   .back_account[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 25px;\n  text-align: left;\n  color: #21313f;\n  position: absolute;\n  top: 18px;\n  left: 0;\n}\n\n.ion-info-bank_account[_ngcontent-%COMP%]   .bank-account-holder[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtcGF5bWVudC10cmFuc2Zlci9wb3B1cC1wYXltZW50LXRyYW5zZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGlDQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBREE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBRkE7RUFDRSxxQkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0NBQUE7RUFDQSx1QkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBU0Y7O0FBUEE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFVRjs7QUFQQTtFQUNFLDRDQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQVVGOztBQVJBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBV0Y7O0FBVEE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQWFGOztBQVZBO0VBQ0UseUJBQUE7QUFhRjs7QUFYQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBY0Y7O0FBWEE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBY0Y7O0FBWkE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFlRjs7QUFiQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFnQkY7O0FBZEU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQWdCSjs7QUFkRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QUFnQko7O0FBZEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFnQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3B1cC1wYXltZW50LXRyYW5zZmVyL3BvcHVwLXBheW1lbnQtdHJhbnNmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicm9vdCB7XHJcbiAgLS1ib3JkZXJDb2xvcjogZ3JheTtcclxuICAtLWNoYXJTaGFwZTogbm9uZTtcclxufVxyXG4uY29udGVudC13cmFwIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMzMsIDQ5LCA2MywgMCk7XHJcbn1cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuLmhlYWRlci1pdGVtIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xyXG59XHJcbi5tb2RhbC1pdGVtIHtcclxuICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XHJcbn1cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY1ZjU7XHJcbiAgbWFyZ2luOiAwIDI4cHggMHB4IDI4cHg7XHJcbn1cclxuLm1vZGFsLXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ubm8tbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4udHJhc2gtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcbi5ub3JtYWxfbWVzc2FnZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1jb3B5IHtcclxuICAtLWlvbi10b29sYmFyLWNvbG9yOiByZ2JhKDAsIDE1NCwgMjAxLCAwLjE1KTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDAsIDE1NCwgMjAxLCAwLjI1KTtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogcmdiYSgwLCAxNTQsIDIwMSwgMC4yNSk7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDAsIDE1NCwgMjAxLCAwLjI1KTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIC0tbWluLWhlaWdodDogMzJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmVmMGVmO1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDE4cHg7XHJcbn1cclxuLmJ1dHRvbi1jb3B5Lm1kIHtcclxuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5idXR0b24tY29weS1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjRkZDMTQ0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmljb24tY29weSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICBjb2xvcjogI0ZGQzE0NDtcclxufVxyXG5cclxuLm1vZGFsLWl0ZW0ge1xyXG4gIG1hcmdpbjogMHB4IDI1cHggMHB4IDIwcHg7XHJcbn1cclxuLmRpYWxvZy1pY29uLW1vbmV5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pb24tdGV4dC10aXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjIxYzFlO1xyXG59XHJcbi5pb24tdGV4dC1tZXNzYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uaW9uLWluZm8tYmFua19hY2NvdW50IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIC0tbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG5cclxuICAuYmFua19hY2NvdW50X3RpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLmJhY2tfYWNjb3VudCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzIxMzEzZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5iYW5rLWFjY291bnQtaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentTransferPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup-payment-transfer',
                templateUrl: './popup-payment-transfer.page.html',
                styleUrls: ['./popup-payment-transfer.page.scss'],
            }]
    }], function () { return [{ type: _translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"] }, { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "SYhx":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/popup-payment-transfer/popup-payment-transfer.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PopupPaymentTransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentTransferPageModule", function() { return PopupPaymentTransferPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popup_payment_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-payment-transfer-routing.module */ "Ti+O");
/* harmony import */ var _popup_payment_transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-payment-transfer.page */ "7Ogg");








class PopupPaymentTransferPageModule {
}
PopupPaymentTransferPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupPaymentTransferPageModule });
PopupPaymentTransferPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupPaymentTransferPageModule_Factory(t) { return new (t || PopupPaymentTransferPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _popup_payment_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentTransferPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupPaymentTransferPageModule, { declarations: [_popup_payment_transfer_page__WEBPACK_IMPORTED_MODULE_6__["PopupPaymentTransferPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _popup_payment_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentTransferPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentTransferPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _popup_payment_transfer_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentTransferPageRoutingModule"]
                ],
                declarations: [_popup_payment_transfer_page__WEBPACK_IMPORTED_MODULE_6__["PopupPaymentTransferPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ti+O":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/popup-payment-transfer/popup-payment-transfer-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PopupPaymentTransferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentTransferPageRoutingModule", function() { return PopupPaymentTransferPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_payment_transfer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-payment-transfer.page */ "7Ogg");






const routes = [
    {
        path: '',
        component: _popup_payment_transfer_page__WEBPACK_IMPORTED_MODULE_3__["PopupPaymentTransferPage"]
    }
];
class PopupPaymentTransferPageRoutingModule {
}
PopupPaymentTransferPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupPaymentTransferPageRoutingModule });
PopupPaymentTransferPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupPaymentTransferPageRoutingModule_Factory(t) { return new (t || PopupPaymentTransferPageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupPaymentTransferPageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentTransferPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-popup-payment-transfer-popup-payment-transfer-module-es2015.js.map