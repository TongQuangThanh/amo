(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-payment-online-popup-payment-online-module"],{

/***/ "DUk0":
/*!***************************************************************************!*\
  !*** ./src/app/pages/popup-payment-online/popup-payment-online.module.ts ***!
  \***************************************************************************/
/*! exports provided: PopupPaymentOnlinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentOnlinePageModule", function() { return PopupPaymentOnlinePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popup_payment_online_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-payment-online-routing.module */ "yHBk");
/* harmony import */ var _popup_payment_online_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-payment-online.page */ "SdbJ");








class PopupPaymentOnlinePageModule {
}
PopupPaymentOnlinePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupPaymentOnlinePageModule });
PopupPaymentOnlinePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupPaymentOnlinePageModule_Factory(t) { return new (t || PopupPaymentOnlinePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _popup_payment_online_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentOnlinePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupPaymentOnlinePageModule, { declarations: [_popup_payment_online_page__WEBPACK_IMPORTED_MODULE_6__["PopupPaymentOnlinePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _popup_payment_online_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentOnlinePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentOnlinePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _popup_payment_online_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentOnlinePageRoutingModule"]
                ],
                declarations: [_popup_payment_online_page__WEBPACK_IMPORTED_MODULE_6__["PopupPaymentOnlinePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "SdbJ":
/*!*************************************************************************!*\
  !*** ./src/app/pages/popup-payment-online/popup-payment-online.page.ts ***!
  \*************************************************************************/
/*! exports provided: PopupPaymentOnlinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentOnlinePage", function() { return PopupPaymentOnlinePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







class PopupPaymentOnlinePage {
    constructor(translateConfigService, modalController) {
        this.translateConfigService = translateConfigService;
        this.modalController = modalController;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalController.dismiss();
    }
}
PopupPaymentOnlinePage.ɵfac = function PopupPaymentOnlinePage_Factory(t) { return new (t || PopupPaymentOnlinePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
PopupPaymentOnlinePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupPaymentOnlinePage, selectors: [["app-popup-payment-online"]], decls: 34, vars: 6, consts: [[1, "content-wrap"], [1, "content-container"], ["lines", "none", 1, "header-item", "ion-no-padding"], [1, "popup-title"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], ["lines", "none", 1, "select-item", "ion-no-padding", "btn-language-active"], [1, "select-title"], ["src", "assets/icon/logo_VNPay.png"], ["slot", "end", 1, "btn-done"], ["name", "checkmark-circle", 1, "active"], ["lines", "none", 1, "select-item", "ion-no-padding"], ["src", "assets/icon/logo_Momo.png"], ["name", "checkmark-circle", 1, "hide"], ["src", "assets/icon/logo_AirPay.png"], ["src", "assets/icon/logo_ZaloPay.png"], ["lines", "none", 1, "select-item", "ion-no-padding", "no-padding-end"], [1, "select-title", "ion-no-padding"], [1, "add-button"], [1, "add-button-label"]], template: function PopupPaymentOnlinePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentOnlinePage_Template_ion_buttons_click_6_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-title", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "PAYMENT_INFOR.select_wallet"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 4, "PAYMENT_INFOR.btn_continue"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\nion-buttons.md[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\nion-title.md[_ngcontent-%COMP%] {\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33,49,63,0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  display: flex;\n  height: 60px;\n}\n\n.select-item[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n}\n\n.no-padding-end[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n}\n\n.popup-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  color: #21313F;\n}\n\n.select-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 0px;\n  text-align: center;\n  color: #21313F;\n}\n\n.select-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 20px 18px 15px 18px;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 20px;\n}\n\n.setting-item-label[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n  height: 54px;\n  margin-left: 30px;\n}\n\n.setting-item-forward[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  margin-right: 16px;\n}\n\n.btn-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --background-activated: #F4F5F5;\n  --background-focused: #F4F5F5;\n  --background-hover: #F4F5F5;\n}\n\n.btn-language[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n}\n\n.btn-language-active[_ngcontent-%COMP%] {\n  background: #F4F5F5;\n}\n\n.hide[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #009AC9;\n  font-size: 20px;\n}\n\n.add-button[_ngcontent-%COMP%] {\n  --background-focused: #bee6f3;\n  --background-hover:#bee6f3;\n  --background: #D4EBF3;\n  --ion-toolbar-color: #D4EBF3;\n  --background-activated: #bee6f3;\n  mix-blend-mode: normal;\n  --border-radius: 8px;\n  width: 92%;\n  height: 44px;\n  margin: 0 10px;\n  --box-shadow: none;\n}\n\n.add-button-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #009AC9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtcGF5bWVudC1vbmxpbmUvcG9wdXAtcGF5bWVudC1vbmxpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7VUFBQSxxQkFBQTtBQUdKOztBQURBO0VBQ0ksOEJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFIQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFPSjs7QUFMQTtFQUNJLHdCQUFBO0FBUUo7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksY0FBQTtBQVdKOztBQVRBO0VBQ0ksMkJBQUE7QUFZSjs7QUFWQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWNKOztBQVpBO0VBR0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFhSjs7QUFYQTtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWVKOztBQWJBO0VBQ0ksbUJBQUE7QUFnQko7O0FBZEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWlCSjs7QUFmQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBa0JKOztBQWZBO0VBQ0ksNkJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFtQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3B1cC1wYXltZW50LW9ubGluZS9wb3B1cC1wYXltZW50LW9ubGluZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJyb290e1xyXG4gICAgLS1ib3JkZXJDb2xvcjpncmF5O1xyXG4gICAgLS1jaGFyU2hhcGU6bm9uZTtcclxufVxyXG5pb24tYnV0dG9ucy5tZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5pb24tdGl0bGUubWQge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xyXG59XHJcbi5jb250ZW50LXdyYXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMzLDQ5LDYzLDApO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi5oZWFkZXItaXRlbSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5zZWxlY3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5uby1wYWRkaW5nLWVuZCB7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuLnBvcHVwLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyMTMxM0Y7XHJcbn1cclxuLnNlbGVjdC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufVxyXG4uc2VsZWN0LXRpdGxlIGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubW9kYWwtaXRlbSB7XHJcbiAgICBtYXJnaW46IDIwcHggMThweCAxNXB4IDE4cHg7XHJcbn1cclxuLm1vZGFsLXRvb2xiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNldHRpbmctaXRlbS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICMyMTMxM0Y7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uc2V0dGluZy1pdGVtLWZvcndhcmQge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG4uYnRuLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI0Y0RjVGNTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRjRGNUY1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjRjRGNUY1O1xyXG59XHJcbi5idG4tbGFuZ3VhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmJ0bi1sYW5ndWFnZS1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjVGNTtcclxufVxyXG4uaGlkZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDA5QUM5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjYmVlNmYzO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiNiZWU2ZjM7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNENEVCRjM7XHJcbiAgICAtLWlvbi10b29sYmFyLWNvbG9yOiAjRDRFQkYzO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2JlZTZmMztcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHdpZHRoOiA5MiU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYWRkLWJ1dHRvbi1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA5QUM5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentOnlinePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup-payment-online',
                templateUrl: './popup-payment-online.page.html',
                styleUrls: ['./popup-payment-online.page.scss'],
            }]
    }], function () { return [{ type: _translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }]; }, null); })();


/***/ }),

/***/ "yHBk":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/popup-payment-online/popup-payment-online-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PopupPaymentOnlinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentOnlinePageRoutingModule", function() { return PopupPaymentOnlinePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_payment_online_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-payment-online.page */ "SdbJ");






const routes = [
    {
        path: '',
        component: _popup_payment_online_page__WEBPACK_IMPORTED_MODULE_3__["PopupPaymentOnlinePage"]
    }
];
class PopupPaymentOnlinePageRoutingModule {
}
PopupPaymentOnlinePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupPaymentOnlinePageRoutingModule });
PopupPaymentOnlinePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupPaymentOnlinePageRoutingModule_Factory(t) { return new (t || PopupPaymentOnlinePageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupPaymentOnlinePageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentOnlinePageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-payment-online-popup-payment-online-module-es2015.js.map