(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "ARrX":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _popup_pincode_register_popup_pincode_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup-pincode-register/popup-pincode-register.page */ "Z3Km");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















const PHONE_LENGTH_VN = 10;
class LandingPage {
    constructor(menu, loading, authService, navCtrl, translateConfigService, apiService, modalController) {
        this.menu = menu;
        this.loading = loading;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.apiService = apiService;
        this.modalController = modalController;
        this.phoneNumber = '';
        this.errorMessage = "";
        this.errorInputPhone = false;
        this.menu.enable(false);
        this.navCtrl.setDirection('back', true, 'back');
    }
    ionViewWillEnter() {
        var self = this;
        this.authService.getToken();
        if (this.authService.isLoggedIn) {
            this.loading.present();
            this.apiService.getUserProfile()
                .subscribe(result => {
                localStorage.setItem('profile', JSON.stringify(result.profile));
                self.loading.dismiss();
                self.navCtrl.navigateRoot('/dashboard/home');
            }, error => {
                self.loading.dismiss();
                self.authService.logout();
            });
        }
    }
    ngOnInit() {
    }
    checkIsEnabled() {
        if (this.phoneNumber && this.phoneNumber.length >= PHONE_LENGTH_VN) {
            this.errorInputPhone = false;
            return true;
        }
        return false;
    }
    ChangeLogin() {
        //this.navCtrl.navigateForward('/login/' + this.phoneNumber);
        this.navCtrl.navigateForward('/login/');
    }
    sendSMS() {
        var self = this;
        this.loading.present();
        this.apiService.resentRegisterCode(this.phoneNumber).subscribe(result => {
            self.loading.dismiss();
            self.refCode = result.ref;
            self.presentModal();
        }, error => {
            self.errorMessage = error.error.message;
            self.loading.dismiss();
        });
    }
    SkipLogin() {
        if (this.phoneNumber && this.phoneNumber.length >= PHONE_LENGTH_VN) {
            this.errorInputPhone = false;
            this.sendSMS();
        }
        else {
            this.errorInputPhone = true;
        }
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _popup_pincode_register_popup_pincode_register_page__WEBPACK_IMPORTED_MODULE_7__["PopupPincodeRegisterPage"],
                componentProps: {
                    "phoneNumber": this.phoneNumber,
                    "refCode": this.refCode
                },
                cssClass: "pincode-modal-custom"
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    const dataReturnedResult = JSON.parse(dataReturned.data);
                    if (dataReturnedResult.result == '0') {
                        this.navCtrl.navigateForward('/register-password/' + this.phoneNumber + "/" + dataReturnedResult.token + "/" + dataReturnedResult.refCode);
                    }
                    else {
                    }
                }
            });
            return yield modal.present();
        });
    }
}
LandingPage.ɵfac = function LandingPage_Factory(t) { return new (t || LandingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_4__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
LandingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LandingPage, selectors: [["app-landing"]], decls: 21, vars: 12, consts: [[1, "image-logo"], [1, "center"], ["src", "/assets/icon/AMO_Logo_WhiteBgr.png", 1, "ion-align-self-end"], [1, "landing-white-bg"], [1, "ion-text-center"], [1, "label-text-title"], [1, "ion-text-center", "landing-text"], [1, "label-text"], ["expand", "block", 1, "button-common", "button-next", "button-common-active", 3, "click"], [1, "button-next-label"], ["expand", "block", 1, "button-common", "button-next", 3, "click"], [1, "button-skip-label"], ["src", "/assets/icon/splash-page.svg", 1, "image-footer"]], template: function LandingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingPage_Template_ion_button_click_12_listener() { return ctx.ChangeLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingPage_Template_ion_button_click_16_listener() { return ctx.SkipLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-img", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "LANDING.content_text_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 6, "LANDING.content_text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 8, "LANDING.login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 10, "LANDING.skip"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".image-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 35%;\n}\n\n.landing-white-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25%;\n  width: 100%;\n  height: 30%;\n  background: #FFFFFF;\n  border-radius: 24px 24px 0px 0px;\n}\n\n.image-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40%;\n  left: 0%;\n  right: 0%;\n  bottom: 0%;\n}\n\n.landing-text-title[_ngcontent-%COMP%] {\n  margin: 10px auto;\n}\n\n.landing-text[_ngcontent-%COMP%] {\n  margin: 5px 30px;\n}\n\n.landing-input[_ngcontent-%COMP%] {\n  margin: 20px 17px 0 17px;\n}\n\n.landing-errorMessage[_ngcontent-%COMP%] {\n  margin: 0px 17px;\n}\n\n.ion-align-self-end[_ngcontent-%COMP%] {\n  width: 108px;\n}\n\n.label-text-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 36px;\n  text-align: center;\n  color: #FFC144;\n}\n\n.label-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 22px;\n  color: #221C1E;\n  opacity: 0.6;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.ion-text-wrap[_ngcontent-%COMP%] {\n  padding-left: -16px;\n}\n\n.button-next[_ngcontent-%COMP%] {\n  --box-shadow: none;\n  --ion-toolbar-color: #D3D6D9;\n  opacity: 1;\n  margin-bottom: 10px;\n}\n\n.button-next.ios[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin-top: 15px;\n}\n\n.button-next.md[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.button-next-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 16px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.button-common-active[_ngcontent-%COMP%] {\n  --ion-toolbar-color: #FFC144;\n  --background-focused: #df594f;\n  --background-hover:#df594f;\n  --background-activated: #df594f;\n}\n\n.button-skip[_ngcontent-%COMP%] {\n  height: 19px;\n  margin-bottom: 20px;\n  border: 0px;\n  --box-shadow: none;\n  --ion-toolbar-color: transparent;\n  --background-activated: var(--ion-color-primary-shade, #ffffff);\n  --background-focused: var(--ion-color-primary-shade, #ffffff);\n  --background-hover: var(--ion-color-primary-tint, #ffffff);\n  --background-activated-opacity: 0;\n  --background-focused-opacity: 0;\n  --background-hover-opacity: 0;\n}\n\n.button-skip-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n}\n\n.button-skip-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  margin-left: 10px;\n  color: #21313F;\n}\n\n.clear-background[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: transparent;\n}\n\n.error-input[_ngcontent-%COMP%] {\n  border: 1px solid #FFC144;\n}\n\n.clear-input[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\nion-item.item-has-value[_ngcontent-%COMP%]   .clear-input[_ngcontent-%COMP%] {\n  color: #D3D6D9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksd0JBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0FBUUo7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxtQkFBQTtBQWFKOztBQVhBO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQWNKOztBQVpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0FBZ0JKOztBQWRBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBaUJKOztBQWZBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFrQko7O0FBWkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtEQUFBO0VBQ0EsNkRBQUE7RUFDQSwwREFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQWVKOztBQWJBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWdCSjs7QUFkQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWlCSjs7QUFmQTtFQUNJLHlCQUFBO0VBQ0EsbUNBQUE7QUFrQko7O0FBaEJBO0VBQ0kseUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksY0FBQTtBQW9CSjs7QUFqQkk7RUFDRSxjQUFBO0FBb0JOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1sb2dve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzUlO1xyXG4gIH1cclxuICAubGFuZGluZy13aGl0ZS1iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDBweCAwcHg7XHJcbn1cclxuLmltYWdlLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYm90dG9tOiAwJTtcclxufVxyXG4ubGFuZGluZy10ZXh0LXRpdGxlIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcbi5sYW5kaW5nLXRleHQge1xyXG4gICAgbWFyZ2luOiA1cHggMzBweDtcclxufVxyXG4ubGFuZGluZy1pbnB1dCB7XHJcbiAgICBtYXJnaW46IDIwcHggMTdweCAwIDE3cHg7XHJcbn1cclxuLmxhbmRpbmctZXJyb3JNZXNzYWdlIHtcclxuICAgIG1hcmdpbjogMHB4IDE3cHg7XHJcbn1cclxuLmlvbi1hbGlnbi1zZWxmLWVuZCB7XHJcbiAgICB3aWR0aDogMTA4cHg7XHJcbn1cclxuLmxhYmVsLXRleHQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGQzE0NDtcclxufVxyXG4ubGFiZWwtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICMyMjFDMUU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuLmlucHV0LXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufVxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uaW9uLXRleHQtd3JhcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC0xNnB4O1xyXG59XHJcbi5idXR0b24tbmV4dCB7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWlvbi10b29sYmFyLWNvbG9yOiAjRDNENkQ5O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmJ1dHRvbi1uZXh0LmlvcyB7XHJcbiAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5idXR0b24tbmV4dC5tZCB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuLmJ1dHRvbi1uZXh0LWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uYnV0dG9uLWNvbW1vbi1hY3RpdmUge1xyXG4gICAgLS1pb24tdG9vbGJhci1jb2xvcjogI0ZGQzE0NDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZGY1OTRmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiNkZjU5NGY7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZGY1OTRmO1xyXG59XHJcbi8vIC5ib3R0b20tdG9vbGJhciB7XHJcbi8vICAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICAvLyBib3R0b206IDA7XHJcbi8vIH1cclxuLmJ1dHRvbi1za2lwIHtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC0taW9uLXRvb2xiYXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICNmZmZmZmYpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjZmZmZmZmKTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgI2ZmZmZmZik7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDA7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDA7XHJcbn1cclxuLmJ1dHRvbi1za2lwLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufVxyXG4uYnV0dG9uLXNraXAtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICMyMTMxM0Y7XHJcbn1cclxuLmNsZWFyLWJhY2tncm91bmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5lcnJvci1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZDMTQ0O1xyXG59XHJcbi5jbGVhci1pbnB1dCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5pb24taXRlbS5pdGVtLWhhcy12YWx1ZSB7XHJcbiAgICAuY2xlYXItaW5wdXQge1xyXG4gICAgICBjb2xvcjogI0QzRDZEOTtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.page.html',
                styleUrls: ['./landing.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_4__["TranslateConfigService"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }]; }, null); })();


/***/ }),

/***/ "CXjK":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing.page */ "ARrX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






// import { LoginPage } from '../auth/login/login.page';
// import { RegisterPage } from '../auth/register/register.page';



const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_5__["LandingPage"]
    }
];
class LandingPageModule {
}
LandingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingPageModule });
LandingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingPageModule_Factory(t) { return new (t || LandingPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageModule, { declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_5__["LandingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_5__["LandingPage"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map