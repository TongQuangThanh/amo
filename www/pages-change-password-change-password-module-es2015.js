(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"],{

/***/ "RdAG":
/*!***************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function ChangePasswordPage_ion_label_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class ChangePasswordPage {
    constructor(translate, alertService, loading, apiService, navCtrl, authService) {
        this.translate = translate;
        this.alertService = alertService;
        this.loading = loading;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.errorMessage = "";
        this.errorOldPass = false;
        this.errorNewPass = false;
        this.errorConfirmPass = false;
        this.password_type = 'password';
        this.passwordToggleIcon = 'eye-off-outline';
        this.passwordOld_type = 'password';
        this.passwordOldToggleIcon = 'eye-off-outline';
        this.passwordNew_type = 'password';
        this.passwordNewToggleIcon = 'eye-off-outline';
    }
    ngOnInit() {
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
    togglePasswordOld() {
        //this.showPassword != this.showPassword;
        this.passwordOld_type = this.passwordOld_type === 'text' ? 'password' : 'text';
        if (this.passwordOldToggleIcon == 'eye-outline') {
            this.passwordOldToggleIcon = 'eye-off-outline';
        }
        else {
            this.passwordOldToggleIcon = 'eye-outline';
        }
    }
    togglePasswordNew() {
        //this.showPassword != this.showPassword;
        this.passwordNew_type = this.passwordNew_type === 'text' ? 'password' : 'text';
        if (this.passwordNewToggleIcon == 'eye-outline') {
            this.passwordNewToggleIcon = 'eye-off-outline';
        }
        else {
            this.passwordNewToggleIcon = 'eye-outline';
        }
    }
    checkNewPassword() {
        if (this.newPassword && this.newPassword.length >= 8) {
            return true;
        }
        return false;
    }
    checkConfirmPassword() {
        if (this.confirmPassword && this.confirmPassword.length >= 8 && this.newPassword && this.newPassword == this.confirmPassword) {
            return true;
        }
        return false;
    }
    checkIsEnabled() {
        if (this.oldPassword && this.oldPassword.length >= 8 && this.newPassword && this.newPassword.length >= 8 && this.confirmPassword && this.confirmPassword.length >= 8) {
            return true;
        }
        return false;
    }
    updateAccount() {
        var self = this;
        const params = {
            oldPassword: self.oldPassword,
            newPassword: self.newPassword
        };
        this.loading.present();
        this.apiService.changePassword(params)
            .subscribe(result => {
            self.loading.dismiss();
            if (result.message != "SUCCESS") {
                self.errorOldPass = false;
                self.errorNewPass = false;
                self.errorConfirmPass = false;
                self.errorMessage = result.message;
            }
            else {
                self.errorMessage = "";
                self.oldPassword = "";
                self.newPassword = "";
                self.confirmPassword = "";
                self.errorOldPass = false;
                self.errorNewPass = false;
                self.errorConfirmPass = false;
                self.alertService.presentToast(this.translate.instant('CHANGE_PASSWORD.message_change_pass_sucess'));
                setTimeout(function () {
                    self.logout();
                }, 1500);
            }
        }, error => {
            self.loading.dismiss();
            self.errorOldPass = false;
            self.errorNewPass = false;
            self.errorConfirmPass = false;
            self.errorMessage = error.error.message;
        });
    }
    changePass() {
        if (!this.oldPassword || this.oldPassword.length < 8) {
            this.errorOldPass = true;
            this.errorNewPass = false;
            this.errorConfirmPass = false;
            this.errorMessage = this.translate.instant('CHANGE_PASSWORD.error_length_old_password_message');
            return;
        }
        if (!this.newPassword || this.newPassword.length < 8) {
            this.errorOldPass = false;
            this.errorNewPass = true;
            this.errorConfirmPass = false;
            this.errorMessage = this.translate.instant('CHANGE_PASSWORD.error_length_new_password_message');
            return;
        }
        if (!this.confirmPassword || this.confirmPassword.length < 8) {
            this.errorOldPass = false;
            this.errorNewPass = false;
            this.errorConfirmPass = true;
            this.errorMessage = this.translate.instant('CHANGE_PASSWORD.error_length_confirm_password_message');
            return;
        }
        if (this.newPassword != this.confirmPassword) {
            this.errorNewPass = true;
            this.errorConfirmPass = true;
            this.errorMessage = this.translate.instant('CHANGE_PASSWORD.error_not_match_password_message');
            return;
        }
        this.updateAccount();
    }
    logout() {
        this.authService.logout();
        this.navCtrl.navigateRoot('/landing');
    }
}
ChangePasswordPage.ɵfac = function ChangePasswordPage_Factory(t) { return new (t || ChangePasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
ChangePasswordPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordPage, selectors: [["app-change-password"]], decls: 37, vars: 29, consts: [[1, "ion-no-border", "change-password-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "change-password-content"], [1, "change-password-input"], ["lines", "none", 1, "input-item"], ["name", "custom-locker", "src", "/assets/icon/account/lock.svg", "slot", "start", 1, "input-icon"], ["position", "floating", 1, "input-floating-label"], ["name", "oldPassword", 1, "input-text", 3, "ngModel", "type", "ngModelChange"], ["name", "checkmark-circle", "slot", "end", 1, "clear-input", "check-default"], ["slot", "end", 1, "pass-hide-icon", 3, "name", "click"], ["name", "newPassword", 1, "input-text", 3, "ngModel", "type", "ngModelChange"], ["name", "checkmark-circle", "slot", "end", 3, "ngClass"], ["name", "confirmPassword", 1, "input-text", 3, "ngModel", "type", "ngModelChange"], ["name", "checkmark-circle", "slot", "end", 1, "clear-input", "check-success", 3, "ngClass"], ["color", "danger", "class", "error-message ion-text-wrap", 4, "ngIf"], ["expand", "block", 1, "", 3, "ngClass", "disabled", "click"], [1, "button-change-pass-label"], ["color", "danger", 1, "error-message", "ion-text-wrap"]], template: function ChangePasswordPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordPage_Template_ion_input_ngModelChange_13_listener($event) { return ctx.oldPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordPage_Template_ion_icon_click_15_listener() { return ctx.togglePasswordOld(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordPage_Template_ion_input_ngModelChange_21_listener($event) { return ctx.newPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordPage_Template_ion_icon_click_23_listener() { return ctx.togglePasswordNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordPage_Template_ion_input_ngModelChange_29_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordPage_Template_ion_icon_click_31_listener() { return ctx.togglePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ChangePasswordPage_ion_label_32_Template, 2, 1, "ion-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordPage_Template_ion_button_click_33_listener() { return ctx.changePass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 19, "CHANGE_PASSWORD.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 21, "CHANGE_PASSWORD.place_holder_old_password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.oldPassword)("type", ctx.passwordOld_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.passwordOldToggleIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 23, "CHANGE_PASSWORD.place_holder_new_password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newPassword)("type", ctx.passwordNew_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.checkNewPassword() ? "clear-input check-default" : "clear-input check-success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.passwordNewToggleIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 25, "CHANGE_PASSWORD.place_holder_confirm_password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword)("type", ctx.password_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.checkConfirmPassword() ? "" : "error-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.passwordToggleIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.checkIsEnabled() ? "button-common change-pass-button" : "button-common change-pass-button button-common-active")("disabled", !ctx.checkIsEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 27, "CHANGE_PASSWORD.btn_change_pass"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".header-toolbar.ios[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.error-input[_ngcontent-%COMP%] {\n  border: 1px solid #FFC144;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  color: #FFC144;\n}\n\n.change-password-input[_ngcontent-%COMP%] {\n  margin: 20px 17px 0 17px;\n}\n\n.change-pass-button[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n}\n\n.change-password-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.change-password-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.change-password-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.change-password-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.change-password-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #ffffff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSx3QkFBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBR0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQURJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUdOOztBQUZNO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUlSOztBQURJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHTjs7QUFESTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFHTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10b29sYmFyLmlvcyB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxufVxyXG4uZXJyb3ItaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzE0NDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgICBjb2xvcjogI0ZGQzE0NDtcclxufVxyXG5cclxuLmNoYW5nZS1wYXNzd29yZC1pbnB1dCB7XHJcbiAgICBtYXJnaW46IDIwcHggMTdweCAwIDE3cHg7XHJcbn1cclxuLmNoYW5nZS1wYXNzLWJ1dHRvbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi8vIG5ldyBjc3MgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4uY2hhbmdlLXBhc3N3b3JkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgaGVpZ2h0OiAxNTZweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgICAtLWljb24tZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICB0b3A6IDU3cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgbGVmdDogLTFweDtcclxuICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMzBweCAwIDAgI2ZmZmZmZjtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.page.html',
                styleUrls: ['./change-password.page.scss'],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "wdPO":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password.page */ "RdAG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]
    }
];
class ChangePasswordPageModule {
}
ChangePasswordPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChangePasswordPageModule });
ChangePasswordPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChangePasswordPageModule_Factory(t) { return new (t || ChangePasswordPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangePasswordPageModule, { declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-change-password-change-password-module-es2015.js.map