(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-account-my-account-module"], {
    /***/
    "/u1B":
    /*!*******************************************************!*\
      !*** ./src/app/pages/my-account/my-account.module.ts ***!
      \*******************************************************/

    /*! exports provided: MyAccountPageModule */

    /***/
    function u1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function () {
        return MyAccountPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-account.page */
      "2chW");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]
      }];

      var MyAccountPageModule = function MyAccountPageModule() {
        _classCallCheck(this, MyAccountPageModule);
      };

      MyAccountPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MyAccountPageModule
      });
      MyAccountPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MyAccountPageModule_Factory(t) {
          return new (t || MyAccountPageModule)();
        },
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyAccountPageModule, {
          declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAccountPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"]],
            declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "2chW":
    /*!*****************************************************!*\
      !*** ./src/app/pages/my-account/my-account.page.ts ***!
      \*****************************************************/

    /*! exports provided: MyAccountPage */

    /***/
    function chW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAccountPage", function () {
        return MyAccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _translate_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../translate-config.service */
      "ZjVV");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _popup_hotline_popup_hotline_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../popup-hotline/popup-hotline.page */
      "0LNU");
      /* harmony import */


      var _popup_feedback_popup_feedback_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../popup-feedback/popup-feedback.page */
      "OkWD");
      /* harmony import */


      var _popup_logout_popup_logout_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../popup-logout/popup-logout.page */
      "XTOB");
      /* harmony import */


      var _popup_change_language_popup_change_language_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../popup-change-language/popup-change-language.page */
      "nEMZ");

      var MyAccountPage = /*#__PURE__*/function () {
        function MyAccountPage(modalController, translate, alertService, loading, apiService, navCtrl, authService, actionSheetController, translateConfigService, iab) {
          _classCallCheck(this, MyAccountPage);

          this.modalController = modalController;
          this.translate = translate;
          this.alertService = alertService;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.authService = authService;
          this.actionSheetController = actionSheetController;
          this.translateConfigService = translateConfigService;
          this.iab = iab; // this.listCountries = ConstService.LIST_COUNTRIES;

          this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
          var profile = this.authService.getProfile();

          if (profile && this.userName != profile.displayName) {
            this.userName = profile.displayName;
            this.phone = profile.phone;
          }
        }

        _createClass(MyAccountPage, [{
          key: "selectLanguage",
          value: function selectLanguage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: this.translate.instant('MY_ACCOUNT.language'),
                        cssClass: 'select-language',
                        buttons: [{
                          text: this.translate.instant('MY_ACCOUNT.vn'),
                          icon: this.selectedLanguage === 'vi' ? 'checkmark-circle' : '',
                          cssClass: this.selectedLanguage === 'vi' ? 'select-language-btn selected-btn' : 'select-language-btn',
                          handler: function handler() {
                            _this.languageChanged('vi');
                          }
                        }, {
                          text: this.translate.instant('MY_ACCOUNT.en'),
                          cssClass: this.selectedLanguage === 'en' ? 'select-language-btn selected-btn' : 'select-language-btn',
                          icon: this.selectedLanguage === 'en' ? 'checkmark-circle' : '',
                          handler: function handler() {
                            _this.languageChanged('en');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserProfile();
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            var self = this;
            this.loading.present();
            this.apiService.getUserProfile().subscribe(function (result) {
              self.displayName = result.profile.displayName;
              self.email = result.profile.email;
              self.sex = result.profile.gender;
              self.nationality = result.profile.nationality;
              self.dateOfBirth = result.profile.dateOfBirth;
              self.personalLiscence = result.profile.personalLiscence;
              self.avatar = result.profile.avatar != null ? result.profile.avatar : '../assets/icon/avatar-default.png';
              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "updateAccount",
          value: function updateAccount() {
            var _this2 = this;

            var self = this;
            var params = {
              email: self.email,
              displayName: self.displayName,
              gender: self.sex,
              dateOfBirth: self.dateOfBirth,
              personalLiscence: self.personalLiscence
            };
            this.loading.present();
            this.apiService.updateUserProfile(params).subscribe(function (result) {
              localStorage.setItem('profile', JSON.stringify(result.profile));
              self.loading.dismiss();
              self.alertService.presentToast(_this2.translate.instant('MY_ACCOUNT.message_update_sucess'));
            }, function (error) {
              self.loading.dismiss();
              self.alertService.presentToast(_this2.translate.instant('MY_ACCOUNT.message_update_fail'));
            });
          }
        }, {
          key: "changeToSetting",
          value: function changeToSetting() {
            this.navCtrl.navigateForward('/setting');
          }
        }, {
          key: "callHelpCenter",
          value: function callHelpCenter() {
            this.alertService.presentToast(this.translate.instant('COMMON.maintain'));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.navCtrl.navigateRoot('/landing');
          }
        }, {
          key: "languageChanged",
          value: function languageChanged(language) {
            this.selectedLanguage = language;
            this.translateConfigService.setLanguage(this.selectedLanguage);
            localStorage.setItem('lang', language);
          }
        }, {
          key: "changeToMyAccountDetail",
          value: function changeToMyAccountDetail() {
            this.navCtrl.navigateForward('/my-account-detail');
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            this.navCtrl.navigateForward('/change-password');
          }
        }, {
          key: "changeToTerms",
          value: function changeToTerms() {
            var browser = this.iab.create("https://amoapp.com.vn/dieu-khoan-su-dung/", '_system', 'location=yes, enableviewportscale=yes');
            browser.show(); // this.navCtrl.navigateForward('/terms');
          }
        }, {
          key: "changeToGuideline",
          value: function changeToGuideline() {
            var browser = this.iab.create("https://amoapp.com.vn/chinh-sach-bao-mat/", '_system', 'location=yes, enableviewportscale=yes');
            browser.show(); // this.navCtrl.navigateForward('/guideline');
          }
        }, {
          key: "openToRateApp",
          value: function openToRateApp() {
            var browser = this.iab.create("http://onelink.to/umn6f2", "_system", "location=yes, enableviewportscale=yes");
            browser.show();
          }
        }, {
          key: "hotlineModal",
          value: function hotlineModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _popup_hotline_popup_hotline_page__WEBPACK_IMPORTED_MODULE_10__["PopupHotlinePage"],
                        cssClass: 'hotline-page-custom'
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "feedbackModal",
          value: function feedbackModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _popup_feedback_popup_feedback_page__WEBPACK_IMPORTED_MODULE_11__["PopupFeedbackPage"],
                        cssClass: 'feedback-page-custom'
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "logoutModal",
          value: function logoutModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _popup_logout_popup_logout_page__WEBPACK_IMPORTED_MODULE_12__["PopupLogoutPage"],
                        cssClass: 'logout-page-custom'
                      });

                    case 2:
                      modal = _context4.sent;
                      _context4.next = 5;
                      return modal.present();

                    case 5:
                      return _context4.abrupt("return", _context4.sent);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "changePasswordModal",
          value: function changePasswordModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var modal;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: _popup_change_language_popup_change_language_page__WEBPACK_IMPORTED_MODULE_13__["PopupChangeLanguagePage"],
                        cssClass: 'changepass-page-custom'
                      });

                    case 2:
                      modal = _context5.sent;
                      _context5.next = 5;
                      return modal.present();

                    case 5:
                      return _context5.abrupt("return", _context5.sent);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return MyAccountPage;
      }();

      MyAccountPage.ɵfac = function MyAccountPage_Factory(t) {
        return new (t || MyAccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_8__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]));
      };

      MyAccountPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MyAccountPage,
        selectors: [["app-my-account"]],
        decls: 77,
        vars: 55,
        consts: [[1, "ion-no-border", "my-account-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "account-avatar"], [3, "src"], [1, "account-name"], [1, "account-phone"], [1, "ion-button-edit", 3, "click"], [1, "my-account-content"], [1, "setting-label"], [1, "ion-list"], ["lines", "inset", "id", "setting-language", 1, "ion-list-item", 3, "click"], ["slot", "start", 1, "setting-item-icon", 3, "src"], [1, "setting-item-label"], ["slot", "end", 1, "setting-item-forward", 3, "src"], ["lines", "inset", 1, "ion-list-item"], ["slot", "end", "checked", "", 1, "setting-item-toggle"], ["lines", "inset", 1, "ion-list-item", 3, "click"], ["src", "/assets/icon/custom-terms.svg", "slot", "start", 1, "setting-item-icon", 3, "src"], ["lines", "none", 1, "ion-item-logout", 3, "click"], ["slot", "start", 1, "setting-item-icon", "logout-icon", 3, "src"], [1, "setting-item-label", "logout-label"], ["lines", "none", 1, "version-item-content"], [1, "version-label"]],
        template: function MyAccountPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-avatar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_button_click_9_listener() {
              return ctx.changeToMyAccountDetail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-list", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_item_click_17_listener() {
              return ctx.changePasswordModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-toggle", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_item_click_29_listener() {
              return ctx.changePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-list", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_item_click_39_listener() {
              return ctx.hotlineModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_item_click_45_listener() {
              return ctx.feedbackModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_item_click_51_listener() {
              return ctx.changeToTerms();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "ion-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_item_click_57_listener() {
              return ctx.changeToGuideline();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_item_click_63_listener() {
              return ctx.openToRateApp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ion-item", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountPage_Template_ion_item_click_69_listener() {
              return ctx.logoutModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "ion-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "AMO app 5.0.0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 31, "MY_ACCOUNT.btn_edit"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 33, "MY_ACCOUNT.setting"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/translate.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 35, "MY_ACCOUNT.language"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/arrow-down.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/notification.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 37, "MY_ACCOUNT.app_notification"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/lock.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 39, "MY_ACCOUNT.change_password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/arrow-down.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 41, "MY_ACCOUNT.app_infomation"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/calling.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 43, "MY_ACCOUNT.contact"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/arrow-down.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/chat.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 45, "MY_ACCOUNT.feedback"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/arrow-down.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/document.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 47, "MY_ACCOUNT.terms"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/arrow-down.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/work.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 49, "MY_ACCOUNT.guideline"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/arrow-down.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/star.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 51, "MY_ACCOUNT.vote"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/arrow-down.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/account/logout.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 53, "MY_ACCOUNT.btn_log_out"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["BooleanValueAccessor"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: [".list-md[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.button-native[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n  -webkit-padding-end: 0 !important;\n          padding-inline-end: 0 !important;\n  --padding-left: 0 !important;\n  --padding-right: 0 !important;\n}\n\n.DOB-custom[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  box-shadow: none;\n}\n\n.sex-custom[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  box-shadow: none;\n}\n\n.selection-width-85[_ngcontent-%COMP%] {\n  max-width: 85%;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n}\n\n.header-infor[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.center-avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  left: calc(50% - 50px);\n  top: 40px;\n}\n\n.form-margin[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\n.white-color[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.btn-save[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\n.logout-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  margin-top: 16px;\n}\n\n.logout-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 22px;\n  \n  text-align: center;\n  color: #FFC144;\n}\n\n.avatar-content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.row-avatar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.col-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.col-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: right;\n}\n\n.setting-none[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  height: 30px;\n}\n\n\n\n.setting-item[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\n.row-setting-item[_ngcontent-%COMP%] {\n  width: 97%;\n  margin-left: 10px;\n}\n\n.setting-item-last[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.action-sheet-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  color: #21313f;\n}\n\n.select-language[_ngcontent-%COMP%]   .action-sheet-group[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.select-language[_ngcontent-%COMP%]   .action-sheet-container[_ngcontent-%COMP%] {\n  --padding-left: 0;\n  --padding-right: 0;\n}\n\n.my-account-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 235px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.my-account-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.my-account-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.my-account-header[_ngcontent-%COMP%]   .account-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin-top: 20px;\n}\n\n.my-account-header[_ngcontent-%COMP%]   .account-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 28px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #ffffff;\n}\n\n.my-account-header[_ngcontent-%COMP%]   .account-phone[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 19px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #ffffff;\n  opacity: 0.6;\n}\n\n.my-account-header[_ngcontent-%COMP%]   .ion-button-edit[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  --background: #ffffff;\n  --color: #221c1e;\n  margin-top: 10px;\n}\n\n.my-account-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #f9fcff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.my-account-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background: #f9fcff;\n  --background: #f9fcff;\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .setting-label[_ngcontent-%COMP%] {\n  position: relative;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 35px;\n  color: #221c1e;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .setting-label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 20px;\n  left: 0;\n  border-bottom: 2px solid #FFC144;\n  width: 30px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  padding: 0 10px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-list[_ngcontent-%COMP%]   .ion-list-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --handle-box-shadow: none;\n  --inner-padding-end: 0px;\n  --border-color: #f3f4f5;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-list[_ngcontent-%COMP%]   .setting-item-toggle[_ngcontent-%COMP%] {\n  --background: #e6e6e6;\n  --background-checked: #FFC144;\n  --handle-background: #ffffff;\n  --handle-background-checked: #ffffff;\n  height: 30px;\n  width: 50px;\n  --handle-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);\n  padding: 5px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-list[_ngcontent-%COMP%]   .setting-item-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-list[_ngcontent-%COMP%]   .setting-item-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: right;\n  height: 50px;\n  margin: 0;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-list[_ngcontent-%COMP%]   .setting-item-forward[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 5px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .version-item-content[_ngcontent-%COMP%] {\n  --background: #f9fcff;\n  --padding-top: 30px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .version-item-content[_ngcontent-%COMP%]   .version-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #666666;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-item-logout[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-item-logout[_ngcontent-%COMP%]   .logout-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-align: right;\n  font-size: 16px;\n  line-height: 24px;\n  color: #FFC144;\n  height: 35px;\n}\n\n.my-account-content[_ngcontent-%COMP%]   .ion-item-logout[_ngcontent-%COMP%]   .logout-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  color: #FFC144;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYWNjb3VudC9teS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFDQTtFQUNFLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxpQ0FBQTtVQUFBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBSUY7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7QUFJRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQSxpQkFBQTs7QUFDQTtFQUNFLGVBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUhBO0VBQ0UsbUJBQUE7QUFNRjs7QUFGQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUZBO0VBQ0UsU0FBQTtBQUtGOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQU1GOztBQURBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFLSjs7QUFKSTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFNTjs7QUFIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBS0o7O0FBREE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUhJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFLTjs7QUFGRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBSU47O0FBRkk7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxZQUFBO0FBSU47O0FBRkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFJTjs7QUFGSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFGSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFJTjs7QUFERTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFGSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUlOOztBQURFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBRkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBSU47O0FBRkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1hY2NvdW50L215LWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtbWQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmJ1dHRvbi1uYXRpdmUge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4uRE9CLWN1c3RvbSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXgtY3VzdG9tIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5zZWxlY3Rpb24td2lkdGgtODUge1xyXG4gIG1heC13aWR0aDogODUlO1xyXG59XHJcblxyXG4uZnVuY3Rpb24tc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmhlYWRlci1pbmZvciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jZW50ZXItYXZhdGFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICB0b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5mb3JtLW1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuLndoaXRlLWNvbG9yIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tc2F2ZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9nb3V0LWl0ZW0ge1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5sb2dvdXQtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBjb2xvcjogI0ZGQzE0NDtcclxufVxyXG5cclxuLmF2YXRhci1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5yb3ctYXZhdGFyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29sLWF2YXRhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb2wtbGluayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc2V0dGluZy1ub25lIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLyogc2V0dGluZyBpdGVtICovXHJcbi5zZXR0aW5nLWl0ZW0ge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ucm93LXNldHRpbmctaXRlbSB7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnNldHRpbmctaXRlbS1sYXN0IHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4vLyBhY3Rpb24tc2hlZXRcclxuLmFjdGlvbi1zaGVldC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzIxMzEzZjtcclxufVxyXG5cclxuLnNlbGVjdC1sYW5ndWFnZSAuYWN0aW9uLXNoZWV0LWdyb3VwIHtcclxuICBib3R0b206IDA7XHJcbn1cclxuLnNlbGVjdC1sYW5ndWFnZSAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lciB7XHJcbiAgLS1wYWRkaW5nLWxlZnQ6IDA7XHJcbiAgLS1wYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4vLyBuZXcgY3NzID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi5teS1hY2NvdW50LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDIzNXB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICAuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWNjb3VudC1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuYWNjb3VudC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuYWNjb3VudC1waG9uZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG4gIC5pb24tYnV0dG9uLWVkaXQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMyMjFjMWU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDAgMCAjZjlmY2ZmO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm15LWFjY291bnQtY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBiYWNrZ3JvdW5kOiAjZjlmY2ZmO1xyXG4gIC0tYmFja2dyb3VuZDogI2Y5ZmNmZjtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuXHJcbiAgLnNldHRpbmctbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkMxNDQ7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgLmlvbi1saXN0LWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAtLWhhbmRsZS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZjNmNGY1O1xyXG4gICAgfVxyXG4gICAgLnNldHRpbmctaXRlbS10b2dnbGUge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRkZDMTQ0O1xyXG4gICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIC0taGFuZGxlLWJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuc2V0dGluZy1pdGVtLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5zZXR0aW5nLWl0ZW0tbGFiZWwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjMjEzMTNGO1xyXG4gICAgfVxyXG4gICAgLnNldHRpbmctaXRlbS1mb3J3YXJkIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52ZXJzaW9uLWl0ZW0tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWZjZmY7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgLnZlcnNpb24tbGFiZWwge1xyXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pb24taXRlbS1sb2dvdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgICAubG9nb3V0LWxhYmVsIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbiAgICAubG9nb3V0LWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyAccountPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-my-account',
            templateUrl: './my-account.page.html',
            styleUrls: ['./my-account.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
          }, {
            type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
          }, {
            type: _translate_config_service__WEBPACK_IMPORTED_MODULE_8__["TranslateConfigService"]
          }, {
            type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-my-account-my-account-module-es5.js.map