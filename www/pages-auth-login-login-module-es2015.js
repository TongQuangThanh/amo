(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "NKrf":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/loading/loading.service */ "vglk");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/api/api.service */ "oZWX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function LoginPage_ion_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class LoginPage {
    constructor(authService, navCtrl, route, loading, apiService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.loading = loading;
        this.apiService = apiService;
        this.showPassword = false;
        this.password_type = 'password';
        this.passwordToggleIcon = 'eye-off-outline';
    }
    togglePassword() {
        //this.showPassword != this.showPassword;
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
        if (this.passwordToggleIcon == 'eye-outline') {
            this.passwordToggleIcon = 'eye-off-outline';
        }
        else {
            this.passwordToggleIcon = 'eye-outline';
        }
    }
    ngOnInit() {
        localStorage.removeItem('token');
        // this.route.queryParams.subscribe(params => {
        //   this.phone = params.phoneNumber;
        // });
        this.phone = this.route.snapshot.paramMap.get('phone');
    }
    checkIsEnabled() {
        if (this.phone && this.phone.length >= 8 && this.password && this.password.length >= 8) {
            return true;
        }
        return false;
    }
    login() {
        var self = this;
        this.loading.present();
        this.navCtrl.navigateRoot('/dashboard/home');
        // this.authService.login(this.phone, this.password).subscribe(
        //   data => {
        //    if (data) {
        //     self.errorMessage = '';
        //     var userId = localStorage.getItem('playID');
        //     if(userId && userId.length > 0){
        //       self.apiService.settingNotification({
        //         playerId: userId
        //       }).subscribe(result => {
        //         console.log("done " + userId)
        //       })
        //     }
        //     this.navCtrl.navigateRoot('/dashboard/home');
        //    }
        //   },
        //   (error:any) => {
        //     self.errorMessage = error.error.message;
        //     self.loading.dismiss();
        //   },
        //   () => {
        //     self.loading.dismiss();
        //   }
        // );
    }
    changeToForgotPass() {
        this.navCtrl.navigateForward('/forgot-password');
    }
}
LoginPage.ɵfac = function LoginPage_Factory(t) { return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
LoginPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPage, selectors: [["app-login"]], decls: 31, vars: 22, consts: [[1, "ion-no-border"], [1, "login-header"], [1, "login-title"], [1, "ion-padding"], [1, "login-input"], ["lines", "none", 1, "input-item"], ["name", "custom-mobile", "src", "/assets/icon/svg/profile.svg", "slot", "start", 1, "input-icon"], ["position", "floating", 1, "input-floating-label"], ["type", "tel", "name", "phone", 1, "input-text", 3, "ngModel", "ngModelChange"], ["lines", "none", 1, "input-item", "input-password"], ["name", "custom-locker", "src", "/assets/icon/custom-locker.svg", "slot", "start", 1, "input-icon"], ["name", "password", 1, "input-text", 3, "type", "ngModel", "ngModelChange"], ["slot", "end", 1, "pass-hide-icon", 3, "name", "click"], ["lines", "none", 1, "ion-text-center"], ["color", "danger", "class", "ion-text-wrap", 4, "ngIf"], [1, "bottom-toolbar", "clear-background"], ["expand", "block", 1, "", 3, "ngClass", "disabled", "click"], ["expand", "block", "routerDirection", "forward", 1, "button-skip", 3, "click"], [1, "button-skip-label"], ["color", "danger", 1, "ion-text-wrap"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_12_listener($event) { return ctx.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_18_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPage_Template_ion_icon_click_19_listener() { return ctx.togglePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginPage_ion_label_21_Template, 2, 1, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-toolbar", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_23_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_27_listener() { return ctx.changeToForgotPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, "LOGIN.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 14, "LOGIN.placeholder_phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, "LOGIN.placeholder_pass"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.password_type)("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.passwordToggleIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.checkIsEnabled() ? "button-common login-button" : "button-common login-button button-common-active")("disabled", !ctx.checkIsEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 18, "LOGIN.button_login_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 20, "LOGIN.forgot_pass_label"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".text-note[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.phone-input[_ngcontent-%COMP%] {\n  height: 3.5em;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.phone-input-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  --padding-start: 10px;\n  color: #7a838c;\n}\n\n.pass-input[_ngcontent-%COMP%] {\n  height: 3.5em;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.pass-input-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  --padding-start: 10px;\n  color: #7a838c;\n}\n\n.bottom-toolbar[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  --box-shadow: none;\n  --ion-toolbar-color: #d3d6d9;\n  opacity: 1;\n  margin-bottom: 20px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.login-button.ios[_ngcontent-%COMP%] {\n  padding: 0 12px;\n}\n\n.login-button.md[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.button-skip[_ngcontent-%COMP%] {\n  height: 19px;\n  margin-bottom: 20px;\n  border: 0px;\n  --box-shadow: none;\n  --ion-toolbar-color: transparent;\n  --background-activated: var(--ion-color-primary-shade, #ffffff);\n  --background-focused: var(--ion-color-primary-shade, #ffffff);\n  --background-hover: var(--ion-color-primary-tint, #ffffff);\n  --background-activated-opacity: 0;\n  --background-focused-opacity: 0;\n  --background-hover-opacity: 0;\n}\n\n.button-skip-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 100%;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #FFC144;\n}\n\n.padding-content[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n.padding-10[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.padding-0[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.margin-content[_ngcontent-%COMP%] {\n  margin-top: 11px;\n}\n\n.margin-20[_ngcontent-%COMP%] {\n  margin: 20px 0 0 0;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.clear-background[_ngcontent-%COMP%] {\n  --color-activated: #556080;\n  --background: transparent;\n  --background-activated: transparent;\n}\n\n.login-input[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.login-input[_ngcontent-%COMP%]   ion-item.input-item.item-has-focus[_ngcontent-%COMP%] {\n  border: 1px solid #FFC144;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 10px rgba(234, 122, 110, 0.25);\n}\n\n.pass-hide-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  margin-left: -16px;\n}\n\n.input-clear-icon[_ngcontent-%COMP%] {\n  --margin: 19px 13px 17px 2px;\n}\n\n.button-common-active[_ngcontent-%COMP%] {\n  --ion-toolbar-color: #FFC144;\n  --background-focused: #df594f;\n  --background-hover: #df594f;\n  --background-activated: #df594f;\n}\n\n.login-header[_ngcontent-%COMP%] {\n  background: #FFC144;\n  color: #fff;\n  padding: 54px 15px 25px 15px;\n  border-radius: 0 0 20px 20px;\n  position: relative;\n  overflow: hidden;\n}\n\n.login-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url(/assets/icon/login/login-header.svg);\n  background-repeat: no-repeat;\n  width: 200px;\n  height: 80px;\n  position: absolute;\n  top: 42px;\n  opacity: 0.5;\n  right: -80px;\n}\n\n.login-header[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.input-password[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUpBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrREFBQTtFQUNBLDZEQUFBO0VBQ0EsMERBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7QUFPRjs7QUFMQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxjQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtBQVNGOztBQU5BO0VBQ0UsYUFBQTtBQVNGOztBQVBBO0VBQ0UsWUFBQTtBQVVGOztBQVBBO0VBQ0UsZ0JBQUE7QUFVRjs7QUFQQTtFQUNFLGtCQUFBO0FBVUY7O0FBUEE7RUFDRSxlQUFBO0FBVUY7O0FBUkE7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0FBWUY7O0FBWEU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7QUFhSjs7QUFUQTtFQUNFLGVBQUE7QUFZRjs7QUFUQTtFQUNFLGtCQUFBO0FBWUY7O0FBVkE7RUFDRSw0QkFBQTtBQWFGOztBQVZBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFhRjs7QUFWQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBYUY7O0FBWEU7RUFDRSxXQUFBO0VBQ0EsMERBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFhSjs7QUFWRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFZSjs7QUFUQTtFQUNFLGtCQUFBO0FBWUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LW5vdGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG59XHJcblxyXG4ucGhvbmUtaW5wdXQge1xyXG4gIGhlaWdodDogMy41ZW07XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucGhvbmUtaW5wdXQtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG59XHJcbi5wYXNzLWlucHV0IHtcclxuICBoZWlnaHQ6IDMuNWVtO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnBhc3MtaW5wdXQtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG59XHJcbi5ib3R0b20tdG9vbGJhciB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAtLWlvbi10b29sYmFyLWNvbG9yOiAjZDNkNmQ5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5sb2dpbi1idXR0b24uaW9zIHtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbn1cclxuLmxvZ2luLWJ1dHRvbi5tZCB7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcbi5idXR0b24tc2tpcCB7XHJcbiAgaGVpZ2h0OiAxOXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIC0taW9uLXRvb2xiYXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjZmZmZmZmKTtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICNmZmZmZmYpO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgI2ZmZmZmZik7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAwO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDA7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDA7XHJcbn1cclxuLmJ1dHRvbi1za2lwLWxhYmVsIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbn1cclxuLnBhZGRpbmctY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLTEwIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5wYWRkaW5nLTAge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm1hcmdpbi1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAxMXB4O1xyXG59XHJcblxyXG4ubWFyZ2luLTIwIHtcclxuICBtYXJnaW46IDIwcHggMCAwIDA7XHJcbn1cclxuXHJcbi5pdGVtLW5hdGl2ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5jbGVhci1iYWNrZ3JvdW5kIHtcclxuICAtLWNvbG9yLWFjdGl2YXRlZDogIzU1NjA4MDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sb2dpbi1pbnB1dCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBpb24taXRlbS5pbnB1dC1pdGVtLml0ZW0taGFzLWZvY3VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkI0ZGQzE0NDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSgyMzQsIDEyMiwgMTEwLCAwLjI1KTtcclxuICB9XHJcbn1cclxuXHJcbi5wYXNzLWhpZGUtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG59XHJcbi5pbnB1dC1jbGVhci1pY29uIHtcclxuICAtLW1hcmdpbjogMTlweCAxM3B4IDE3cHggMnB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbW1vbi1hY3RpdmUge1xyXG4gIC0taW9uLXRvb2xiYXItY29sb3I6ICNGRkMxNDQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNkZjU5NGY7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZGY1OTRmO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNkZjU5NGY7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogNTRweCAxNXB4IDI1cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ljb24vbG9naW4vbG9naW4taGVhZGVyLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MnB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgcmlnaHQ6IC04MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcbi5pbnB1dC1wYXNzd29yZHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.page.html',
                styleUrls: ['./login.page.scss'],
            }]
    }], function () { return [{ type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "WDci":
/*!************************************!*\
  !*** ./src/app/components/mask.ts ***!
  \************************************/
/*! exports provided: Mask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mask", function() { return Mask; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class Mask {
    constructor(model, maskPattern) {
        this.model = model;
        this.dividers = maskPattern.replace(/\*/g, "").split("");
        this.dividers.push(" ");
        this.generatePattern(maskPattern);
    }
    onInputChange(event) {
        this.modelValue = this.getModelValue(event);
        let stringToFormat = this.modelValue;
        if (stringToFormat.length < 10) {
            stringToFormat = this.padString(stringToFormat);
        }
        this.viewValue = this.format(stringToFormat);
        this.writeValue(event.target, this.viewValue);
    }
    writeValue(target, value) {
        return target.value = value;
    }
    generatePattern(patternString) {
        this.placeHolderCounts = (patternString.match(/\*/g) || []).length;
        for (let i = 0; i < this.placeHolderCounts; i++) {
            patternString = patternString.replace('*', "{" + i + "}");
        }
        this.maskPattern = patternString;
    }
    format(s) {
        var formattedString = this.maskPattern;
        for (let i = 0; i < this.placeHolderCounts; i++) {
            formattedString = formattedString.replace("{" + i + "}", s.charAt(i));
        }
        return formattedString;
    }
    padString(s) {
        var pad = "          ";
        return (s + pad).substring(0, pad.length);
    }
    getModelValue(event) {
        var modelValue = event.target.value;
        for (var i = 0; i < this.dividers.length; i++) {
            while (modelValue.indexOf(this.dividers[i]) > -1) {
                modelValue = modelValue.replace(this.dividers[i], "");
            }
        }
        return modelValue;
    }
}
Mask.ɵfac = function Mask_Factory(t) { return new (t || Mask)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]("mask")); };
Mask.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Mask, selectors: [["", "mask", ""]], hostBindings: function Mask_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Mask_keyup_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mask, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mask]',
                host: {
                    '(keyup)': 'onInputChange($event)'
                },
                providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ["mask"]
            }] }]; }, null); })();


/***/ }),

/***/ "qdgq":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "NKrf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/mask */ "WDci");







// import { RegisterPage } from '../register/register.page';



const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
class LoginPageModule {
}
LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_components_mask__WEBPACK_IMPORTED_MODULE_7__["Mask"],
        _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [
                    _components_mask__WEBPACK_IMPORTED_MODULE_7__["Mask"],
                    _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es2015.js.map