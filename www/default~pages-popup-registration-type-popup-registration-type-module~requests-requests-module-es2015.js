(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-popup-registration-type-popup-registration-type-module~requests-requests-module"],{

/***/ "Y4cL":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/popup-registration-type/popup-registration-type.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PopupRegistrationTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupRegistrationTypePage", function() { return PopupRegistrationTypePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







class PopupRegistrationTypePage {
    constructor(translateConfigService, modalController, navCtrl) {
        this.translateConfigService = translateConfigService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalController.dismiss();
    }
    registGuest() {
        //// this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
        this.navCtrl.navigateForward('/registration-guest');
        this.closeModal();
    }
    eventButton3() {
        this.navCtrl.navigateForward('/register-to-receive-goods');
        this.closeModal();
    }
    eventButton4() {
        this.navCtrl.navigateForward('/register-for-shipping');
        this.closeModal();
    }
    registKeepVehicle() {
        this.navCtrl.navigateForward('/register-keep-vehicle');
        this.closeModal();
    }
}
PopupRegistrationTypePage.ɵfac = function PopupRegistrationTypePage_Factory(t) { return new (t || PopupRegistrationTypePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"])); };
PopupRegistrationTypePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupRegistrationTypePage, selectors: [["app-popup-registration-type"]], decls: 35, vars: 15, consts: [[1, "content-wrap"], [1, "content-container"], ["lines", "none", 1, "header-item", "ion-no-padding"], [1, "popup-title"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], [1, "ion-align-items-center"], [1, "item-type", 3, "click"], ["name", "custom-car", "src", "assets/icon/custom-car.svg", 1, "item-icon"], [1, "item-label"], [1, ""], ["name", "custom-team", "src", "assets/icon/custom-team.svg", 1, "item-icon"], ["name", "custom-archive", "src", "assets/icon/custom-archive.svg", 1, "item-icon"], ["name", "custom-truck", "src", "assets/icon/custom-truck.svg", 1, "item-icon"]], template: function PopupRegistrationTypePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupRegistrationTypePage_Template_ion_buttons_click_6_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupRegistrationTypePage_Template_ion_col_click_10_listener() { return ctx.registKeepVehicle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupRegistrationTypePage_Template_ion_col_click_16_listener() { return ctx.registGuest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupRegistrationTypePage_Template_ion_col_click_23_listener() { return ctx.eventButton3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupRegistrationTypePage_Template_ion_col_click_29_listener() { return ctx.eventButton4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "REGISTRATION_TYPE.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, "REGISTRATION_TYPE.parking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 9, "REGISTRATION_TYPE.guest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 11, "REGISTRATION_TYPE.receive"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 13, "REGISTRATION_TYPE.shipping"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\nion-buttons.md[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\nion-title.md[_ngcontent-%COMP%] {\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33,49,63,0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  display: flex;\n  height: 60px;\n  border-bottom: 1px solid #F4F5F5;\n}\n\n.popup-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  color: #21313F;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 20px 18px 15px 18px;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 20px;\n}\n\n.item-type[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #FFC144;\n}\n\n.item-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n  display: block;\n}\n\n.item-bor[_ngcontent-%COMP%] {\n  border: 1px solid #D3D6D9;\n  border-radius: 8px;\n  display: inline-block;\n  width: 140px;\n  padding: 19px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtcmVnaXN0cmF0aW9uLXR5cGUvcG9wdXAtcmVnaXN0cmF0aW9uLXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7VUFBQSxxQkFBQTtBQUdKOztBQURBO0VBQ0ksOEJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFIQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBTUo7O0FBSkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFPSjs7QUFMQTtFQUNJLDJCQUFBO0FBUUo7O0FBTkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVlKOztBQVZBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFhSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcHVwLXJlZ2lzdHJhdGlvbi10eXBlL3BvcHVwLXJlZ2lzdHJhdGlvbi10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvb3R7XHJcbiAgICAtLWJvcmRlckNvbG9yOmdyYXk7XHJcbiAgICAtLWNoYXJTaGFwZTpub25lO1xyXG59XHJcbmlvbi1idXR0b25zLm1kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbmlvbi10aXRsZS5tZCB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcbn1cclxuLmNvbnRlbnQtd3JhcCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMzMsNDksNjMsMCk7XHJcbn1cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuLmhlYWRlci1pdGVtIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y0RjVGNTtcclxufVxyXG4ucG9wdXAtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufVxyXG4ubW9kYWwtaXRlbSB7XHJcbiAgICBtYXJnaW46IDIwcHggMThweCAxNXB4IDE4cHg7XHJcbn1cclxuLm1vZGFsLXRvb2xiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLml0ZW0tdHlwZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaXRlbS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcbi5pdGVtLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pdGVtLWJvciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDNENkQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgcGFkZGluZzogMTlweCAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupRegistrationTypePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup-registration-type',
                templateUrl: './popup-registration-type.page.html',
                styleUrls: ['./popup-registration-type.page.scss'],
            }]
    }], function () { return [{ type: _translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-popup-registration-type-popup-registration-type-module~requests-requests-module-es2015.js.map