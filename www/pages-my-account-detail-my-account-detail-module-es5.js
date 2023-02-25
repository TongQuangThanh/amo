(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-account-detail-my-account-detail-module"], {
    /***/
    "hbNz":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/my-account-detail/my-account-detail-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: MyAccountDetailPageRoutingModule */

    /***/
    function hbNz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAccountDetailPageRoutingModule", function () {
        return MyAccountDetailPageRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _my_account_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-account-detail.page */
      "llz1");

      var routes = [{
        path: '',
        component: _my_account_detail_page__WEBPACK_IMPORTED_MODULE_3__["MyAccountDetailPage"]
      }];

      var MyAccountDetailPageRoutingModule = function MyAccountDetailPageRoutingModule() {
        _classCallCheck(this, MyAccountDetailPageRoutingModule);
      };

      MyAccountDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MyAccountDetailPageRoutingModule
      });
      MyAccountDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MyAccountDetailPageRoutingModule_Factory(t) {
          return new (t || MyAccountDetailPageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyAccountDetailPageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAccountDetailPageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "lU32":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/my-account-detail/my-account-detail.module.ts ***!
      \*********************************************************************/

    /*! exports provided: MyAccountDetailPageModule */

    /***/
    function lU32(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAccountDetailPageModule", function () {
        return MyAccountDetailPageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _my_account_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-account-detail-routing.module */
      "hbNz");
      /* harmony import */


      var _my_account_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-account-detail.page */
      "llz1");

      var MyAccountDetailPageModule = function MyAccountDetailPageModule() {
        _classCallCheck(this, MyAccountDetailPageModule);
      };

      MyAccountDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MyAccountDetailPageModule
      });
      MyAccountDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MyAccountDetailPageModule_Factory(t) {
          return new (t || MyAccountDetailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_account_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAccountDetailPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyAccountDetailPageModule, {
          declarations: [_my_account_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_account_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAccountDetailPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAccountDetailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_account_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyAccountDetailPageRoutingModule"]],
            declarations: [_my_account_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountDetailPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "llz1":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/my-account-detail/my-account-detail.page.ts ***!
      \*******************************************************************/

    /*! exports provided: MyAccountDetailPage */

    /***/
    function llz1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAccountDetailPage", function () {
        return MyAccountDetailPage;
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


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../translate-config.service */
      "ZjVV");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _utils_const_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../utils/const.service */
      "KQOL");
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "KqBo");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MyAccountDetailPage_ion_select_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", object_r1.alpha2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.name);
        }
      }

      var MyAccountDetailPage = /*#__PURE__*/function () {
        function MyAccountDetailPage(loading, apiService, navCtrl, translate, translateConfigService, alertService, camera, actionSheetController) {
          _classCallCheck(this, MyAccountDetailPage);

          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.translate = translate;
          this.translateConfigService = translateConfigService;
          this.alertService = alertService;
          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.formPhoneCode = 84;
          this.list_image_select = [];
          this.isChangeAvatar = false;
          this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        }

        _createClass(MyAccountDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserProfile();
            this.listCountry = _utils_const_service__WEBPACK_IMPORTED_MODULE_8__["ConstService"].LIST_COUNTRIES;
            this.countryAlpha2 = "vn";
            this.avatarCountry = "https://lipis.github.io/flag-icon-css/flags/4x3/vn.svg";
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            var self = this;
            this.loading.present();
            this.apiService.getUserProfile().subscribe(function (result) {
              self.displayName = result.profile.displayName;
              self.email = result.profile.email;
              self.phone = result.profile.phone;
              self.gender = result.profile.gender;
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
          key: "addHomeMember",
          value: function addHomeMember() {
            this.navCtrl.navigateForward('/add-home-member');
          }
        }, {
          key: "updateAccount",
          value: function updateAccount() {
            var _this = this;

            var self = this;
            var params = {
              email: self.email,
              displayName: self.displayName,
              phone: self.phone,
              gender: self.gender,
              dateOfBirth: self.dateOfBirth,
              personalLiscence: self.personalLiscence
            };
            this.loading.present();
            this.apiService.updateUserProfile(params).subscribe(function (result) {
              localStorage.setItem('profile', JSON.stringify(result.profile));

              if (self.isChangeAvatar) {
                self.updateAvatar();
              } else {
                self.loading.dismiss();
                self.alertService.presentToast(_this.translate.instant('MY_ACCOUNT.message_update_sucess'));
              }
            }, function (error) {
              self.loading.dismiss();
              self.alertService.presentToast(_this.translate.instant('MY_ACCOUNT.message_update_fail'));
            });
          }
        }, {
          key: "updateAvatar",
          value: function updateAvatar() {
            var _this2 = this;

            var self = this;
            var params = {
              avatar: self.avatar
            };
            this.apiService.postUpdateAvatar(params).subscribe(function (result) {
              self.loading.dismiss();
              self.alertService.presentToast(_this2.translate.instant('MY_ACCOUNT.message_update_sucess'));
            }, function (error) {
              self.loading.dismiss();
              self.alertService.presentToast(_this2.translate.instant('MY_ACCOUNT.message_update_fail'));
            });
          }
        }, {
          key: "onChangeCountry",
          value: function onChangeCountry() {
            var _this3 = this;

            this.listCountry.forEach(function (country) {
              if (country.alpha2 == _this3.countryAlpha2) {
                _this3.formPhoneCode = country.phoneCode;
                _this3.avatarCountry = "https://lipis.github.io/flag-icon-css/flags/4x3/" + country.alpha2.toLowerCase() + ".svg";
              }
            });
          } // select image

        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: this.translate.instant('COMMON.form_select_image_title'),
                        buttons: [{
                          text: this.translate.instant('COMMON.form_select_image_library'),
                          handler: function handler() {
                            _this4.checkPicturePermission(_this4.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: this.translate.instant('COMMON.form_select_image_camera'),
                          handler: function handler() {
                            _this4.checkPicturePermission(_this4.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: this.translate.instant('COMMON.form_select_image_cancel'),
                          role: 'cancel'
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
          key: "checkPicturePermission",
          value: function checkPicturePermission(sourceType) {
            this.pickImage(sourceType);
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            var _this5 = this;

            var self = this;
            var options = {
              quality: 80,
              sourceType: sourceType,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.PNG,
              mediaType: this.camera.MediaType.PICTURE,
              targetWidth: 800,
              targetHeight: 800
            };
            this.camera.getPicture(options).then(function (imageData) {
              var base64 = 'data:image/png;base64,';
              var date = new Date().valueOf();
              var imageName = date + '.png';

              var binaryBlob = _this5.convertBase64ToBlob(base64 + imageData); //var binaryBlob = atob(imageData);
              //const imageFile = new File([binaryBlob], imageName, { type: 'image/png' });


              var payload = new FormData();
              payload.append('media', binaryBlob, imageName);

              _this5.apiService.uploadImage(payload).subscribe(function (result) {
                if (result) {
                  self.isChangeAvatar = true;
                  self.avatar = result.media.url;
                }
              }, function (error) {});
            }, function (err) {// Handle error
              // alert(err);
            });
          }
        }, {
          key: "convertBase64ToBlob",
          value: function convertBase64ToBlob(base64) {
            var info = this.getInfoFromBase64(base64);
            var sliceSize = 512;
            var byteCharacters = window.atob(info.rawBase64);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              byteArrays.push(new Uint8Array(byteNumbers));
            }

            return new Blob(byteArrays, {
              type: info.mime
            });
          }
        }, {
          key: "getInfoFromBase64",
          value: function getInfoFromBase64(base64) {
            var meta = base64.split(',')[0];
            var rawBase64 = base64.split(',')[1].replace(/\s/g, '');
            var mime = /:([^;]+);/.exec(meta)[1];
            var extension = /\/([^;]+);/.exec(meta)[1];
            return {
              mime: mime,
              extension: extension,
              meta: meta,
              rawBase64: rawBase64
            };
          }
        }]);

        return MyAccountDetailPage;
      }();

      MyAccountDetailPage.ɵfac = function MyAccountDetailPage_Factory(t) {
        return new (t || MyAccountDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]));
      };

      MyAccountDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MyAccountDetailPage,
        selectors: [["app-my-account-detail"]],
        decls: 59,
        vars: 34,
        consts: [[1, "ion-no-border", "account-detail-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "my-account-avatar"], [1, "account-avatar", 3, "click"], [3, "src"], ["name", "camera", 1, "icon-camera"], [1, "account-detail-content"], ["lines", "none", 1, "input-item"], ["name", "custom-user", "src", "/assets/icon/account/user.svg", "slot", "start", 1, "input-icon"], ["position", "floating", 1, "input-floating-label"], ["type", "text", "name", "userName", 1, "input-text", 3, "ngModel", "ngModelChange"], ["name", "custom-mail", "src", "/assets/icon/account/user-mail.svg", "slot", "start", 1, "input-icon"], ["type", "text", "name", "userEmail", 1, "input-text", 3, "ngModel", "ngModelChange"], ["size", "5", 1, "no-padding", "padding-right-10"], ["name", "flag-vn", "slot", "start", 1, "input-icon", 3, "src"], [1, "label-phone-code"], ["value", "male", 1, "input-text", "select-text", "opacity-0", 3, "ngModel", "ionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "no-padding", "padding-left-10"], ["type", "number", 1, "input-text", "no-floating-label", 3, "ngModel", "ngModelChange"], ["size", "6", 1, "no-padding", "padding-right-10"], ["name", "custom-gift", "src", "/assets/icon/account/birthday.svg", "slot", "start", 1, "input-icon"], ["displayFormat", "DD/MM/YYYY", 1, "input-text", "input-text-50", 3, "ngModel", "ngModelChange"], ["size", "6", 1, "no-padding", "padding-left-10"], ["name", "custom-gift", "src", "/assets/icon/account/gender.svg", "slot", "start", 1, "input-icon"], [1, "input-text", "select-text", 3, "ngModel", "ngModelChange"], ["value", "female"], ["value", "male"], ["expand", "block", 1, "button-common", "button-send", "btn-active", 3, "click"], [3, "value"]],
        template: function MyAccountDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-avatar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountDetailPage_Template_ion_avatar_click_7_listener() {
              return ctx.selectImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyAccountDetailPage_Template_ion_input_ngModelChange_16_listener($event) {
              return ctx.displayName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyAccountDetailPage_Template_ion_input_ngModelChange_22_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ion-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function MyAccountDetailPage_Template_ion_select_ionChange_29_listener() {
              return ctx.onChangeCountry();
            })("ngModelChange", function MyAccountDetailPage_Template_ion_select_ngModelChange_29_listener($event) {
              return ctx.countryAlpha2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, MyAccountDetailPage_ion_select_option_30_Template, 2, 2, "ion-select-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-col", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyAccountDetailPage_Template_ion_input_ngModelChange_33_listener($event) {
              return ctx.phone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-col", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "ion-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-datetime", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyAccountDetailPage_Template_ion_datetime_ngModelChange_41_listener($event) {
              return ctx.dateOfBirth = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-col", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-select", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyAccountDetailPage_Template_ion_select_ngModelChange_48_listener($event) {
              return ctx.gender = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-select-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-select-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyAccountDetailPage_Template_ion_button_click_55_listener() {
              return ctx.updateAccount();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 18, "MY_ACCOUNT_DETAIL.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 20, "MY_ACCOUNT_DETAIL.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.displayName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 22, "MY_ACCOUNT_DETAIL.email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.avatarCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx.formPhoneCode, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.countryAlpha2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listCountry);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 24, "MY_ACCOUNT_DETAIL.DOB"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dateOfBirth);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 26, "MY_ACCOUNT_DETAIL.gender"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gender);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 28, "MY_ACCOUNT_DETAIL.female"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 30, "MY_ACCOUNT_DETAIL.male"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 32, "MY_ACCOUNT_DETAIL.btn_save"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["ion-button.md[_ngcontent-%COMP%]   .button-native[_ngcontent-%COMP%] {\n  --padding-start: 0 !important;\n}\n\n.error-input[_ngcontent-%COMP%] {\n  border: 1px solid #FFC144;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  color: #FFC144;\n}\n\n.account-back-button[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\n\n.input-num[_ngcontent-%COMP%] {\n  color: #21313f;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.input-flag-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 5px;\n}\n\n.change-pass-button[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.pass-hide-icon[_ngcontent-%COMP%] {\n  margin: 19px 13px 17px 2px;\n  font-size: 18px;\n}\n\n.clear-input[_ngcontent-%COMP%] {\n  color: #d3d6d9;\n}\n\n.check-valid[_ngcontent-%COMP%] {\n  color: #009ac9;\n}\n\n.check-unvalid[_ngcontent-%COMP%] {\n  color: #FFC144;\n}\n\n.check-success[_ngcontent-%COMP%] {\n  color: #51d2b5;\n}\n\n[_ngcontent-%COMP%]::slotted(ion-buttons) {\n  --min-height: 32px;\n}\n\n.button-save[_ngcontent-%COMP%] {\n  --ion-toolbar-color: rgba(0, 154, 201, 0.15);\n  --background-activated: rgba(0, 154, 201, 0.25);\n  --background-focused: rgba(0, 154, 201, 0.25);\n  --background-hover: rgba(0, 154, 201, 0.25);\n  --border-radius: 100px;\n  padding: 0 12px;\n  margin-right: 14px;\n  height: 32px;\n  --min-height: 32px;\n}\n\n.button-save.md[_ngcontent-%COMP%] {\n  --box-shadow: none !important;\n  padding: 0;\n}\n\n.button-save-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #009ac9;\n}\n\n.icon-save[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #009ac9;\n}\n\n.icon-bottom[_ngcontent-%COMP%] {\n  bottom: -3px;\n}\n\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.padding-left-10[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.padding-right-10[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.margin-left-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n\n.pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.label-phone-code[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  overflow: auto;\n  text-overflow: initial;\n  pointer-events: none;\n  position: absolute;\n}\n\n.opacity-0[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.account-detail-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 155px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.account-detail-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.account-detail-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.account-detail-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.account-detail-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #f9fcff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.my-account-avatar[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n\n.my-account-avatar[_ngcontent-%COMP%]   .account-avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 100px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.my-account-avatar[_ngcontent-%COMP%]   .icon-camera[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #FFC144;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 185px;\n  margin: 0 auto;\n}\n\n.account-detail-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background: #f9fcff;\n  --background: #f9fcff;\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --padding-top: 65px;\n}\n\n.account-detail-content[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  height: 60px;\n  --background: #fbfbfb !important;\n  margin-bottom: 10px;\n  mix-blend-mode: normal;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\n.account-detail-content[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.account-detail-content[_ngcontent-%COMP%]   .button-send[_ngcontent-%COMP%] {\n  --background: #FFC144 !important;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #ffffff !important;\n  margin-top: 40px;\n  margin-bottom: 10px;\n}\n\n.account-detail-content[_ngcontent-%COMP%]   ion-datetime.ios[_ngcontent-%COMP%] {\n  padding-bottom: 0px !important;\n  padding-top: 0 !important;\n}\n\n.account-detail-content[_ngcontent-%COMP%]   ion-select.ios[_ngcontent-%COMP%] {\n  padding-bottom: 5px !important;\n  padding-top: 0 !important;\n}\n\n.account-detail-content[_ngcontent-%COMP%]   .input-text-50[_ngcontent-%COMP%] {\n  --padding-end: 0;\n  --padding-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktYWNjb3VudC1kZXRhaWwvbXktYWNjb3VudC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsNkJBQUE7QUFBSjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBRUY7O0FBQUE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0FBUUY7O0FBTkE7RUFDRSw0Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsNkNBQUE7RUFDQSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFVRjs7QUFSQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFXRjs7QUFUQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVRBO0VBQ0UsWUFBQTtBQVlGOztBQVZBO0VBQ0UsVUFBQTtBQWFGOztBQVhBO0VBQ0Usa0JBQUE7QUFjRjs7QUFaQTtFQUNFLG1CQUFBO0FBZUY7O0FBYkE7RUFDRSx5QkFBQTtBQWdCRjs7QUFkQTtFQUNFLG9CQUFBO0FBaUJGOztBQWZBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsVUFBQTtBQW1CRjs7QUFmQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBa0JGOztBQWpCRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFtQko7O0FBbEJJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQW9CTjs7QUFqQkU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQW1CSjs7QUFqQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBbUJKOztBQWhCQTtFQUNFLFlBQUE7QUFtQkY7O0FBbEJFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFvQko7O0FBbEJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFvQko7O0FBakJBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBb0JGOztBQWxCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBb0JKOztBQW5CSTtFQUNFLGtCQUFBO0FBcUJOOztBQWxCRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQW9CSjs7QUFqQkU7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0FBbUJKOztBQWpCRTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUFtQko7O0FBakJFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQW1CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LWFjY291bnQtZGV0YWlsL215LWFjY291bnQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ubWQge1xyXG4gIC5idXR0b24tbmF0aXZlIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uZXJyb3ItaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkMxNDQ7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gIGNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcbi5hY2NvdW50LWJhY2stYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtbnVtIHtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuLmlucHV0LWZsYWctaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jaGFuZ2UtcGFzcy1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5wYXNzLWhpZGUtaWNvbiB7XHJcbiAgbWFyZ2luOiAxOXB4IDEzcHggMTdweCAycHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5jbGVhci1pbnB1dCB7XHJcbiAgY29sb3I6ICNkM2Q2ZDk7XHJcbn1cclxuLmNoZWNrLXZhbGlkIHtcclxuICBjb2xvcjogIzAwOWFjOTtcclxufVxyXG4uY2hlY2stdW52YWxpZCB7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbn1cclxuLmNoZWNrLXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjNTFkMmI1O1xyXG59XHJcbjo6c2xvdHRlZChpb24tYnV0dG9ucykge1xyXG4gIC0tbWluLWhlaWdodDogMzJweDtcclxufVxyXG4uYnV0dG9uLXNhdmUge1xyXG4gIC0taW9uLXRvb2xiYXItY29sb3I6IHJnYmEoMCwgMTU0LCAyMDEsIDAuMTUpO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMCwgMTU0LCAyMDEsIDAuMjUpO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiByZ2JhKDAsIDE1NCwgMjAxLCAwLjI1KTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMCwgMTU0LCAyMDEsIDAuMjUpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgcGFkZGluZzogMCAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTRweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgLS1taW4taGVpZ2h0OiAzMnB4O1xyXG59XHJcbi5idXR0b24tc2F2ZS5tZCB7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uYnV0dG9uLXNhdmUtbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG59XHJcbi5pY29uLXNhdmUge1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG59XHJcblxyXG4uaWNvbi1ib3R0b20ge1xyXG4gIGJvdHRvbTogLTNweDtcclxufVxyXG4ubm8tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ucGFkZGluZy1sZWZ0LTEwIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnBhZGRpbmctcmlnaHQtMTAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvaW50ZXItZXZlbnRzLW5vbmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5sYWJlbC1waG9uZS1jb2RlIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLm9wYWNpdHktMCB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLy8gbmV3IGNzcyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5hY2NvdW50LWRldGFpbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgLmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIC0taWNvbi1mb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDFweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDAgMCAjZjlmY2ZmO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxufVxyXG4ubXktYWNjb3VudC1hdmF0YXIge1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICAuYWNjb3VudC1hdmF0YXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmljb24tY2FtZXJhIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxODVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG4uYWNjb3VudC1kZXRhaWwtY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBiYWNrZ3JvdW5kOiAjZjlmY2ZmO1xyXG4gIC0tYmFja2dyb3VuZDogI2Y5ZmNmZjtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTVweDtcclxuICAtLXBhZGRpbmctdG9wOiA2NXB4O1xyXG5cclxuICAuaW5wdXQtaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAuaW5wdXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ1dHRvbi1zZW5kIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGQzE0NCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAvLyBjdXN0b20gZmxvYXRpbmcgaW5wdXRcclxuICBpb24tZGF0ZXRpbWUuaW9zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3QuaW9zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbnB1dC10ZXh0LTUwIHtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyAccountDetailPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-my-account-detail',
            templateUrl: './my-account-detail.page.html',
            styleUrls: ['./my-account-detail.page.scss']
          }]
        }], function () {
          return [{
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }, {
            type: _translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"]
          }, {
            type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
          }, {
            type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-my-account-detail-my-account-detail-module-es5.js.map