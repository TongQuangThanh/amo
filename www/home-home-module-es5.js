(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "99Un":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function Un(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HomePageModule
      });
      HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HomePageModule_Factory(t) {
          return new (t || HomePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
          path: '',
          component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageModule, {
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
              path: '',
              component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
            }])],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "hsj+":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function hsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");
      /* harmony import */


      var _utils_const_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/const.service */
      "KQOL");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomePage_ion_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HOME.hello_morning"));
        }
      }

      function HomePage_ion_label_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HOME.hello_afternoon"), " ");
        }
      }

      function HomePage_ion_label_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HOME.hello_evening"));
        }
      }

      function HomePage_ion_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_button_11_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.presentAlert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "HOME.no_wallet_title"));
        }
      }

      function HomePage_ion_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_button_12_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.presentAlert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "HOME.wallet_money_title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.formatMoney(ctx_r4.epayUserInfo == null ? null : ctx_r4.epayUserInfo.user_info == null ? null : ctx_r4.epayUserInfo.user_info.balance), "\u0111");
        }
      }

      function HomePage_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx_r5.firstDepartment == null ? null : ctx_r5.firstDepartment.apartment == null ? null : ctx_r5.firstDepartment.apartment.title) + " - " + (ctx_r5.firstDepartment == null ? null : ctx_r5.firstDepartment.campaign.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.firstDepartment == null ? null : ctx_r5.firstDepartment.campaign == null ? null : ctx_r5.firstDepartment.campaign.address);
        }
      }

      function HomePage_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HOME.not_department_message"), " ");
        }
      }

      function HomePage_ion_item_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_item_21_Template_ion_item_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r18.detailPageNoti($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r16 = ctx.$implicit;
          var isLast_r17 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r16._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("lines", isLast_r17 ? "none" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.title);
        }
      }

      function HomePage_ion_item_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "HOME.not_noti_message"));
        }
      }

      function HomePage_div_65_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_div_65_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var item_r20 = ctx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.goToServices(item_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r20.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.title);
        }
      }

      function HomePage_div_71_ion_slide_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r24 == null ? null : item_r24.media == null ? null : item_r24.media.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function HomePage_div_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slides", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomePage_div_71_ion_slide_2_Template, 2, 1, "ion-slide", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r11.slideOpts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.listBanner);
        }
      }

      var HomePage = /*#__PURE__*/function () {
        function HomePage(route, loading, platform, apiService, navCtrl, authService, nativePageTransitions, toastController, translate, alertController) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.route = route;
          this.loading = loading;
          this.platform = platform;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.authService = authService;
          this.nativePageTransitions = nativePageTransitions;
          this.toastController = toastController;
          this.translate = translate;
          this.alertController = alertController; // data

          this.firstDepartment = null;
          this.currentPage = 1;
          this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_5__["ConstService"].NUMBER_RECORD_ON_PAGE;
          this.tabIconEnable = false;
          this.iconSelected = '';
          this.isWallet = false;
          this.todatHours = new Date().getHours();
          this.epayUserInfo = null;
          this.listServiceCategory = [];
          this.overDateBill = [];
          this.isShowBill = true;
          this.listBanner = [];
          this.slideOpts = {
            loop: true,
            initialSlide: 0,
            slidesPerView: 0.99,
            centeredSlides: true,
            spaceBetween: 0,
            autoplay: {
              disableOnInteraction: false
            },
            delay: 5000,
            pagination: {
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true
            }
          };
          this.imageDefault = '../assets/common/no-thumbnail.png';
          platform.ready().then(function (readySource) {
            _this.heightScreen = platform.height() * 0.58 - 18;
          });
          var profile = this.authService.getProfile();
          _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].isAppOpen = true;

          if (profile && this.userName != profile.displayName) {
            this.userName = profile.displayName;
          }

          if (profile && profile.avatar && profile.avatar != '' && this.avatar != profile.avatar) {
            this.avatar = profile.avatar;
          } else {
            this.avatar = '../assets/icon/avatar-default.png';
          }

          this.apiService.userClickStatistic('home').subscribe(function (result) {}, function (error) {});

          if (_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].notificationNavigatorLink != '') {
            this.navCtrl.navigateForward(_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].notificationNavigatorLink);
            _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].notificationNavigatorLink = '';
          }
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.showHeader = 1;
            this.listArticles = [];
            this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', null, true); // this.getEpayUser();

            this.getListUserApar();
            this.getAllServiceSystem();
            this.getPaymentLogs(1, 5, '', '', null, true);
            this.getBanner();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.epayUserInfo = this.apiService.getEpayUserStored();
          } // Get bill: Copy paste từ payment.page.ts

        }, {
          key: "getPaymentLogs",
          value: function getPaymentLogs(page, limit, category, search, event, isRefresh) {
            var _this2 = this;

            this.apiService.getListPayment(page, limit, category, search, 'publish').subscribe(function (result) {
              if (isRefresh) {
                _this2.overDateBill = [];
              }

              if (!result.paymentBills || result.paymentBills.length == 0) {
                return;
              }

              result.paymentBills.forEach(function (bill) {
                if (bill.payment) {
                  var today = new Date();
                  var endAt = new Date(bill.payment.endAt);

                  if (today > endAt && bill.status == 'publish') {
                    bill.status = 'outdate';
                  }

                  bill.inOutDays = _this2.getDiffDays(today, endAt);

                  _this2.overDateBill.push(bill);
                }
              });
            }, function (error) {});
          } // ==========================
          // getEpayUser() {
          //   this.apiService.getEpayUser().subscribe(
          //     (result) => {
          //       if (result && result.user_info) {
          //         this.epayUserInfo = result;
          //       } else {
          //         this.epayUserInfo = null;
          //       }
          //     },
          //     (error) => {}
          //   );
          // }

        }, {
          key: "getBanner",
          value: function getBanner() {
            var _this3 = this;

            this.apiService.getBanner().subscribe(function (result) {
              if (!result || !result.banners) {
                return;
              }

              _this3.listBanner = result.banners;
            }, function (error) {});
          }
        }, {
          key: "getArticles",
          value: function getArticles(page, limit, category, search, event, isRefresh) {
            var self = this;

            if (this.getArticleSubscriber) {
              this.getArticleSubscriber.unsubscribe();
            }

            this.loading.present();
            this.getArticleSubscriber = this.apiService.getListArticle(1, 2, category, search).subscribe(function (result) {
              self.listArticles = result.articles;

              if (event) {
                event.target.complete();
              }

              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "getListUserApar",
          value: function getListUserApar() {
            var _this4 = this;

            this.apiService.getListUserApartment().subscribe(function (result) {
              if (!result || !result.userApartments || result.userApartments.length == 0) {
                return;
              }

              _this4.firstDepartment = result.userApartments[0];
            }, function (error) {});
          }
        }, {
          key: "getAllServiceSystem",
          value: function getAllServiceSystem() {
            var self = this;
            this.apiService.getListShopHouseCateV2().subscribe(function (result) {
              if (result && result.shopCategories) {
                self.listServiceCategory = result.shopCategories.slice(0, 3);
              } else {
                self.listServiceCategory = [];
              }
            }, function (error) {});
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.isShowBill = true;
            this.currentPage = 1;
            this.getArticles(this.currentPage, this.numberRecordOnPage, '', '', event, true); // this.getEpayUser();

            this.getAllServiceSystem();
            this.getPaymentLogs(1, 5, '', '', null, true);
            this.getBanner();
          }
        }, {
          key: "detailPage",
          value: function detailPage(event) {
            this.navCtrl.navigateForward('/new-detail/' + event.currentTarget.id);
          }
        }, {
          key: "detailPageNoti",
          value: function detailPageNoti(event) {
            this.navCtrl.navigateForward('/notification-detail/' + event.currentTarget.id);
          }
        }, {
          key: "goToMyHome",
          value: function goToMyHome() {
            this.navCtrl.navigateForward('/my-home');
          }
        }, {
          key: "goToMyAccount",
          value: function goToMyAccount() {
            this.navCtrl.navigateForward('/my-account');
          }
        }, {
          key: "createRequest",
          value: function createRequest() {
            this.navCtrl.navigateForward('/add-request');
          }
        }, {
          key: "goToServices",
          value: function goToServices(service) {
            this.navCtrl.navigateForward('/service-categories-list/' + service._id + '/' + service.title);
          }
        }, {
          key: "changeOther",
          value: function changeOther() {
            this.navCtrl.navigateForward('/dashboard/services');
          }
        }, {
          key: "changePayment",
          value: function changePayment() {
            if (this.numberOfRecordPayment == 1) {
              this.gotoPaymentDetailPage();
            } else {
              this.navCtrl.navigateForward('/dashboard/payment');
            }
          }
        }, {
          key: "goToNotification",
          value: function goToNotification() {
            this.navCtrl.navigateForward('/dashboard/notification');
            this.iconSelected = 'notification';
          }
        }, {
          key: "goToNews",
          value: function goToNews() {
            this.navCtrl.navigateForward('/news');
          }
        }, {
          key: "getStyleHeader",
          value: function getStyleHeader(index) {
            if (index == this.showHeader) {
              return '';
            } else {
              return 'none';
            }
          }
        }, {
          key: "formatString",
          value: function formatString(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].formatString(stringDate);
          }
        }, {
          key: "formatMoney",
          value: function formatMoney(stringValue) {
            var n = parseInt(stringValue);

            if (n || n == 0) {
              return n.toFixed(0).replace(/./g, function (c, i, a) {
                return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
              });
            } else {
              return '-';
            }
          }
        }, {
          key: "gotoPaymentDetailPage",
          value: function gotoPaymentDetailPage() {
            this.navCtrl.navigateForward('/payment-infor/' + this.idRecordPayment);
          }
        }, {
          key: "registrationNavigate",
          value: function registrationNavigate(route) {
            this.navCtrl.navigateForward(route);
          }
        }, {
          key: "getDiffDays",
          value: function getDiffDays(startDate, endDate) {
            var diffTime = Math.abs(endDate.getTime() - startDate.getTime());
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var self, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self = this;
                      _context.next = 3;
                      return this.alertController.create({
                        cssClass: 'comming-soon-payment-class',
                        header: self.translate.instant('COMMON.information'),
                        message: this.translate.instant('PAYMENT_INFOR.alert_comming_soon'),
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ɵfac = function HomePage_Factory(t) {
        return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]));
      };

      HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomePage,
        selectors: [["app-home"]],
        viewQuery: function HomePage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        decls: 74,
        vars: 40,
        consts: [[1, "ion-no-border", "home-header"], ["id", "main-header"], ["slot", "start", 1, "btn-account", 3, "click"], [1, "avatar-custom"], [3, "src"], [1, "user-name-wrapper"], ["class", "hello-text", 4, "ngIf"], [1, "avatar-content-title"], ["class", "button-wallet", 3, "click", 4, "ngIf"], [1, "notification-block"], [1, "notification-header"], ["class", "notification-header-text", 4, "ngIf"], ["expand", "block", "fill", "clear", "shape", "round", 1, "notification-header-button", 3, "click"], ["name", "chevron-forward-outline", 1, "notification-expand"], [1, "notification-list"], [1, "list-notifications"], ["class", "notification", 3, "id", "lines", "click", 4, "ngFor", "ngForOf"], ["lines", "none", "class", "notification", 4, "ngIf"], [1, "home-page", 3, "scrollEvents"], ["content", ""], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "circles", "refreshingSpinner", "", "refreshingText", ""], [1, "request-category"], [1, "request-category-title"], [1, "request-categories-wrapper"], [1, "ion-align-items-center"], ["size", "3", 1, "item-icon-col", 3, "click"], [1, "item-icon-content"], ["name", "custom-archive", "src", "assets/icon/request/delivery-box.svg", 1, "item-icon"], [1, "cate-title"], ["name", "custom-archive", "src", "assets/icon/request/user.svg", 1, "item-icon"], ["name", "custom-archive", "src", "assets/icon/request/cart.svg", 1, "item-icon"], ["size", "3", 1, "item-icon-col"], [1, "item-icon-content", 3, "click"], ["name", "custom-archive", "src", "assets/icon/home/request.svg", 1, "item-icon"], [1, "function-title-block"], [1, "funtions-title"], [1, "funtions-title-2"], [1, "function-list"], ["class", "ion-float-left div-avatar-content", 3, "click", 4, "ngFor", "ngForOf"], [1, "ion-float-left", "div-avatar-content", 3, "click"], ["src", "../../../assets/icon/home/puzzle.svg", 1, "img-avatar"], ["class", "banner-content", 4, "ngIf"], [1, "footer-content"], ["src", "assets/common/frame.png"], [1, "hello-text"], [1, "button-wallet", 3, "click"], ["src", "../assets/icon/home/wallet.svg", 1, "icon-wallet"], [1, "no_wallet_title"], [1, "wallet_money_title"], [1, "wallet_money"], [1, "notification-header-text"], [1, "header-text-1"], [1, "header-text-2"], [1, "notification", 3, "id", "lines", "click"], ["name", "notifications", 1, "notification-icon"], [1, "notification-text"], ["lines", "none", 1, "notification"], [1, "notification-not-data"], [1, "img-avatar", 3, "src"], [1, "banner-content"], ["pager", "false", 1, "header-slider", 3, "options"], [4, "ngFor", "ngForOf"]],
        template: function HomePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_buttons_click_2_listener() {
              return ctx.goToMyAccount();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-avatar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomePage_ion_label_6_Template, 3, 3, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HomePage_ion_label_7_Template, 3, 3, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomePage_ion_label_8_Template, 3, 3, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HomePage_ion_button_11_Template, 5, 3, "ion-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HomePage_ion_button_12_Template, 7, 4, "ion-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomePage_div_15_Template, 5, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomePage_div_16_Template, 3, 3, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_17_listener() {
              return ctx.goToMyHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-list", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HomePage_ion_item_21_Template, 4, 3, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HomePage_ion_item_22_Template, 4, 3, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-content", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-refresher", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function HomePage_Template_ion_refresher_ionRefresh_25_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ion-refresher-content", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-grid", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-row", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-col", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_col_click_33_listener() {
              return ctx.registrationNavigate("/register-to-receive-goods");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-badge", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-col", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_col_click_39_listener() {
              return ctx.registrationNavigate("/registration-guest");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-badge", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-col", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_col_click_45_listener() {
              return ctx.registrationNavigate("/register-for-shipping");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-badge", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-col", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-badge", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_ion_badge_click_52_listener() {
              return ctx.registrationNavigate("/add-request");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, HomePage_div_65_Template, 4, 2, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_Template_div_click_66_listener() {
              return ctx.changeOther();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, HomePage_div_71_Template, 3, 2, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ion-footer", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todatHours <= 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todatHours > 12 && ctx.todatHours <= 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.todatHours > 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.epayUserInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.epayUserInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstDepartment);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.firstDepartment);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listArticles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.listArticles || ctx.listArticles.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.heightScreen, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 24, "HOME.request_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 26, "REGISTRATION_TYPE.receive"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 28, "REGISTRATION_TYPE.guest"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 30, "REGISTRATION_TYPE.shipping"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 32, "HOME.complain_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 34, "HOME.home-service"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 36, "HOME.home-service-2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listServiceCategory);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 38, "HOME.other"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listBanner && ctx.listBanner.length > 0);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: [".header-infor[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0%;\n  top: 0%;\n  width: 100%;\n  height: 17%;\n  background: #FFC144;\n}\n\n.header-toolbar[_ngcontent-%COMP%] {\n  --background: #FFC144;\n  --min-height: 100px;\n  margin: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --ion-background-color: #f9fcff;\n}\n\n.avatar-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4.27%;\n  top: 24%;\n  width: 91.46%;\n}\n\n.avatar-content-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  vertical-align: super;\n  color: #ffffff;\n  margin-left: 10px;\n}\n\n.total-cash[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3em;\n  left: 23%;\n}\n\n.font-cash-number[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.myhome-content-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  vertical-align: super;\n  color: #ffffff;\n  margin-left: 5px;\n}\n\n.amountPay-content[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: absolute;\n  left: 4.27%;\n  width: 91.46%;\n  top: 80px;\n}\n\n.title-top-new[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  color: #21313f;\n  margin-left: 16px;\n}\n\n.view-all-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 26px;\n  text-align: right;\n  color: #009ac9;\n  margin-right: 16px;\n}\n\n.subContentText[_ngcontent-%COMP%] {\n  max-height: 3.6em;\n  line-height: 1.8em;\n  height: 75%;\n  white-space: normal;\n}\n\n.row-height-note[_ngcontent-%COMP%] {\n  height: 2.5em;\n}\n\n.panding-15-right[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.content-two-line[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.content-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  --text-transform: capitalize;\n}\n\n.content-sub[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  max-height: 38px;\n  color: #556080;\n}\n\n.title-text-header[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  padding-left: 10px;\n}\n\n.card-content-custom[_ngcontent-%COMP%] {\n  width: 260px;\n  -webkit-margin-start: 0px;\n  margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n  margin-inline-end: 0px;\n  margin-left: 16px;\n  margin-top: 0px;\n  margin-right: 4px;\n  border-radius: 8px;\n  box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.1);\n}\n\n.card-content-custom[_ngcontent-%COMP%]:last-child {\n  margin-right: 16px;\n}\n\n.card-content-news[_ngcontent-%COMP%] {\n  width: auto;\n  -webkit-margin-start: 0px;\n  margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n  margin-inline-end: 0px;\n  margin: 20px 20px;\n  border-radius: 8px;\n  box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.1);\n}\n\n.list-home-content[_ngcontent-%COMP%] {\n  --offset-top: -16px !important;\n  height: 500px !important;\n}\n\n.list-view-custom[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.list-view-custom[_ngcontent-%COMP%]   .card-content-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.list-view-news[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.list-view-news[_ngcontent-%COMP%]   .card-content-new[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.div-avatar-content[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-block;\n  text-align: center;\n  width: 25%;\n  height: 100%;\n  position: relative;\n}\n\n.div-avatar-content[_ngcontent-%COMP%]   .img-discount[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5%;\n  top: 0%;\n  width: 16px;\n  height: 16px;\n}\n\n.img-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.img-avatar-big[_ngcontent-%COMP%] {\n  height: 1.5em;\n}\n\n.clear-avatar-rect[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 100%;\n  background: #f5f5f5;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n}\n\n.function-content-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  width: 100%;\n}\n\n.div-avatar-content-big[_ngcontent-%COMP%] {\n  width: 48%;\n  height: 80px;\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n  border: 1px solid #ffffff;\n}\n\n.content-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  border: none;\n}\n\n.image-caption-big[_ngcontent-%COMP%] {\n  \n  display: block;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  margin-top: 5px;\n  margin-left: 15px;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: left;\n  color: #009ac9;\n}\n\n.image-caption-pay[_ngcontent-%COMP%] {\n  display: block;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  margin-top: 5px;\n  margin-left: 15px;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: left;\n  color: #FFC144;\n}\n\n.balance-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  top: 30px;\n  height: 140px;\n  --background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n}\n\n.title-blance-content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 16px;\n  display: flex;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #556080;\n}\n\n.total-cash-blance-content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  right: 16px;\n  display: flex;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #556080;\n}\n\n.total-cash-blance-content-unit[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 28px;\n  color: #556080;\n  margin-left: 5px;\n}\n\n.clear-balance-rect[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 80%;\n  background: #f5f5f5;\n  border-radius: 10px;\n  position: absolute;\n  top: 35%;\n  left: 10%;\n}\n\n.button-my-home[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0 16px;\n  right: 0;\n  --background: #e46b64;\n}\n\n.button-my-home[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.button-avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  --background: transparent;\n}\n\n.btn-paynow[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.btn-new-request[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.request-detail[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  padding-left: 16px;\n  color: #7a838c;\n}\n\n.amountPay-number[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  color: #FFC144;\n  padding-left: 16px;\n}\n\n.amountPay-unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.content-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.card-bottom[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n}\n\n.card-bottom-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #7a838c;\n}\n\n.card-bottom-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-content-news[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.badge-corner[_ngcontent-%COMP%]:empty {\n  display: inline-block;\n}\n\n.badge-corner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 90px;\n  height: 25px;\n  padding: 0;\n  background-color: #009ac9;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 8px;\n  color: #ffffff;\n}\n\n.badge-corner-base[_ngcontent-%COMP%] {\n  background-color: #009ac9;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 25px;\n  text-align: center;\n}\n\n.badge-corner-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  background-color: #f2c94c;\n  border-top-left-radius: 0;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 0;\n  color: #ffffff;\n}\n\n.badge-corner-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 30px;\n  text-align: center;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.sub-header-toolbar[_ngcontent-%COMP%] {\n  background: #FFC144;\n  height: 30px;\n  margin: 0;\n}\n\n.sub-amountPay-content[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: absolute;\n  width: 100%;\n}\n\n.sub-function-content-button[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  --background: #ffffff;\n  box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.2);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.div-avatar-content-item[_ngcontent-%COMP%] {\n  width: 16.6666667%;\n  height: 80px;\n  padding-top: 30px;\n}\n\n.btn-other[_ngcontent-%COMP%] {\n  font-size: 24px;\n  border-bottom-right-radius: 8px;\n  background: #ffffff;\n}\n\n.btn-pay_now[_ngcontent-%COMP%] {\n  font-size: 24px;\n  border-bottom-left-radius: 8px;\n  background: #ffffff;\n}\n\n.btn-request_icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  background: #ffffff;\n}\n\n.btn-book-car[_ngcontent-%COMP%] {\n  font-size: 24px;\n  background: #ffffff;\n}\n\n.btn-helper[_ngcontent-%COMP%] {\n  font-size: 24px;\n  background: #ffffff;\n}\n\n.btn-repairing[_ngcontent-%COMP%] {\n  font-size: 24px;\n  background: #ffffff;\n}\n\n.img-avatar-small[_ngcontent-%COMP%] {\n  width: 24px;\n  margin-top: 15px;\n}\n\n.custom-infinite-scroll[_ngcontent-%COMP%] {\n  --color: #FFC144;\n}\n\n.w3-animate-top[_ngcontent-%COMP%] {\n  position: relative;\n  animation: slide-down 0.3s ease-out;\n  -webkit-animation: slide-down 0.3s ease-out;\n  -moz-animation: slide-down 0.3s ease-out;\n}\n\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes slide-down {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n\n.ion-no-border[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  border-radius: 200%/0 0 40px 40px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n}\n\n.service-header-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.service-header-sub-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #ffffff;\n}\n\n.home-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n}\n\n.home-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url(/assets/icon/home/home-header.svg);\n  width: 155px;\n  height: 90px;\n  position: absolute;\n  right: 0;\n  top: 8px;\n  opacity: 0.2;\n  background-repeat: no-repeat;\n}\n\n.home-header[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.home-header[_ngcontent-%COMP%]   .btn-account[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n\n.home-header[_ngcontent-%COMP%]   .avatar-custom[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.home-header[_ngcontent-%COMP%]   .button-wallet[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 12px;\n  position: absolute;\n  right: -5px;\n  top: 50px;\n  font-weight: 600;\n  width: 128px;\n  height: 32px;\n  --background: #ffffff;\n  --border-radius: 100px 0px 0px 100px;\n  z-index: 999;\n}\n\n.home-header[_ngcontent-%COMP%]   .button-wallet[_ngcontent-%COMP%]   .icon-wallet[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -6px;\n  right: 0;\n}\n\n.home-header[_ngcontent-%COMP%]   .button-wallet[_ngcontent-%COMP%]   .no_wallet_title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 12px;\n  display: flex;\n  align-items: center;\n  color: #FFC144;\n}\n\n.home-header[_ngcontent-%COMP%]   .button-wallet[_ngcontent-%COMP%]   .wallet_money_title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 20px;\n  font-size: 10px;\n  line-height: 12px;\n  display: flex;\n  align-items: center;\n  color: #7b7b7b;\n  font-weight: normal;\n}\n\n.home-header[_ngcontent-%COMP%]   .button-wallet[_ngcontent-%COMP%]   .wallet_money[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 3px;\n  left: 20px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 12px;\n  display: flex;\n  align-items: center;\n  color: #221c1e;\n}\n\n.user-name-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.user-name-wrapper[_ngcontent-%COMP%]   .hello-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 20px;\n  color: #ffffff;\n  margin-left: 10px;\n}\n\n.notification-block[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  top: 100px;\n  left: 15px;\n  right: 15px;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);\n  z-index: 2;\n  overflow: hidden;\n  max-height: 165px;\n}\n\n.notification-block[_ngcontent-%COMP%]   .notification-expand[_ngcontent-%COMP%] {\n  color: #666666;\n}\n\n.notification-header[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  padding-right: 0;\n  background-image: url(/assets/icon/home/notification-header.svg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.notification-header[_ngcontent-%COMP%]   .notification-header-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-top: 6px;\n}\n\n.notification-header[_ngcontent-%COMP%]   .notification-header-text[_ngcontent-%COMP%]   .header-text-1[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  color: #FFC144;\n}\n\n.notification-header[_ngcontent-%COMP%]   .notification-header-text[_ngcontent-%COMP%]   .header-text-2[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #7b7b7b;\n}\n\n.notification-header[_ngcontent-%COMP%]   .notification-header-button[_ngcontent-%COMP%] {\n  width: 41px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.notification-list[_ngcontent-%COMP%] {\n  max-height: 85px;\n  min-height: 60px;\n}\n\n.notification-list[_ngcontent-%COMP%]   .list-notifications[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  margin-bottom: 5px;\n}\n\n.notification-list[_ngcontent-%COMP%]   .list-notifications[_ngcontent-%COMP%]   .notification[_ngcontent-%COMP%] {\n  --border-style: dashed;\n  --border-color: #e9e9e9;\n  --min-height: 40px;\n  --padding-start: 10px;\n  --padding-end: 0px;\n}\n\n.notification-list[_ngcontent-%COMP%]   .notification-not-data[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 19px;\n  color: #7b7b7b;\n  text-align: center;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  color: #3cbdfd;\n}\n\n.notification-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n}\n\n.request-category[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  position: absolute;\n  height: 78px;\n  left: 15px;\n  right: 15px;\n  top: 125px;\n}\n\n.request-category[_ngcontent-%COMP%]   .item-icon-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  padding: 0;\n}\n\n.request-category[_ngcontent-%COMP%]   .item-icon-col[_ngcontent-%COMP%]   .item-icon-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #fbe7e5;\n  border-radius: 8px;\n}\n\n.request-category[_ngcontent-%COMP%]   .item-icon-col[_ngcontent-%COMP%]   .item-icon-content[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.request-category[_ngcontent-%COMP%]   .item-icon-col[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  color: #221c1e;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%] {\n  min-height: 75px;\n  max-height: 85px;\n  width: 100%;\n  position: relative;\n  border-color: 1px solid #FFC144;\n  margin-bottom: 30px;\n  background-image: url('noti-bill-img.png');\n  background-size: 100% 100%;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .noti-detail[_ngcontent-%COMP%] {\n  padding: 9px 107.5px 7px 16px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .noti-detail[_ngcontent-%COMP%]   .noti-total-bill[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  color: #221c1e;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .noti-detail[_ngcontent-%COMP%]   .noti-bill-item[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  color: #221c1e;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .noti-detail[_ngcontent-%COMP%]   .three-dots[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  color: #221c1e;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .noti-image[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 96px;\n  height: inherit;\n  position: absolute;\n  right: 8px;\n  bottom: 0px;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .pay-bill-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translate(0%, -50%);\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .pay-bill-button[_ngcontent-%COMP%]   .button-pay[_ngcontent-%COMP%] {\n  min-width: 75px;\n  border-radius: 4px;\n  background: linear-gradient(180deg, #FFC144 0%, #e23a28 100%);\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 10px;\n  line-height: 14px;\n  \n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px 5px;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .close-noti-bill[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -3px;\n  top: -6px;\n  width: 30px;\n  height: 30px;\n}\n\n.request-category[_ngcontent-%COMP%]   .notification-overdue-bill[_ngcontent-%COMP%]   .close-noti-bill[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #fbe7e5;\n  width: 14px;\n  height: 14px;\n}\n\n.request-category-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  padding: 10px 0;\n  position: relative;\n  color: #221c1e;\n}\n\n.request-category-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 2px;\n  width: 30px;\n  background: #FFC144;\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n}\n\n.function-title-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.function-title-block[_ngcontent-%COMP%]   .funtions-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n}\n\n.function-title-block[_ngcontent-%COMP%]   .funtions-title-2[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #7b7b7b;\n  margin-top: 5px;\n}\n\n.function-title-block[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 2px;\n  width: 30px;\n  background: #FFC144;\n  position: absolute;\n  top: 100%;\n  left: 0;\n}\n\n.request-categories-wrapper[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 20px;\n  border-bottom: 1px dashed #e9e9e9;\n  padding-left: 0;\n  padding-right: 0;\n  margin-bottom: 20px;\n}\n\n.cate-title[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  margin: 0 auto;\n  font-size: 12px;\n  line-height: 1.4;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 5px;\n  padding: 0px 5px;\n  color: #221c1e;\n}\n\n.function-list[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 100%;\n}\n\n.function-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4.27%;\n  width: 91.46%;\n  top: 245px;\n  z-index: 1;\n}\n\n.footer-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 98px;\n}\n\n.service-button[_ngcontent-%COMP%] {\n  background: #ee9a1c;\n  border-radius: 25px;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);\n  z-index: 5;\n  overflow: hidden;\n  width: 50px;\n  height: 50px;\n  margin: auto;\n}\n\n.menu-area[_ngcontent-%COMP%] {\n  width: 100%;\n  bottom: -20px;\n  position: fixed;\n}\n\n.banner-content[_ngcontent-%COMP%] {\n  margin-top: 35px;\n}\n\n.banner-content[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 15px;\n}\n\n.banner-content[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  -o-object-fit: unset !important;\n     object-fit: unset !important;\n}\n\n.banner-content[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]     .swiper-wrapper {\n  height: 160px !important;\n}\n\n.banner-content[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]     .swiper-pagination {\n  bottom: 0px;\n}\n\n.banner-content[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]     .swiper-pagination .swiper-pagination-bullet {\n  width: 10.3px;\n  height: 3px;\n  background: #221c1e80;\n  border-radius: 6px;\n  margin: 0 1.1px;\n}\n\n.banner-content[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]     .swiper-pagination .swiper-pagination-bullet-active {\n  background: #FFC144;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQUdGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFHRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0FBR0Y7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFHRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQUdGOztBQUFBO0VBQ0UsOEJBQUE7RUFFQSx3QkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBRTtFQUNFLHFCQUFBO0FBRUo7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBS0U7RUFDRSxjQUFBO0FBSEo7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLDBEQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBRUEscUJBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQU9BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7QUFKRjs7QUFNQTtFQUNFLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFERjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBSUEsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBS0Y7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUVBLCtDQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUlGOztBQUZBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFXRjs7QUFSQTtFQUNFLGdCQUFBO0FBV0Y7O0FBUkE7RUFDRSxrQkFBQTtFQUNBLG1DQUFBO0VBRUEsMkNBQUE7RUFDQSx3Q0FBQTtBQVVGOztBQVBBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQVVGO0VBUkE7SUFDRSxNQUFBO0lBQ0EsVUFBQTtFQVVGO0FBQ0Y7O0FBbEJBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQVVGO0VBUkE7SUFDRSxNQUFBO0lBQ0EsVUFBQTtFQVVGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtFQVNGO0VBUEE7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7RUFTRjtBQUNGOztBQVFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBREE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxzQkFBQTtBQUlGOztBQUhFO0VBQ0UsV0FBQTtFQUNBLHdEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBS0o7O0FBSEU7RUFDRSxnQkFBQTtBQUtKOztBQUhFO0VBQ0UsZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBS0o7O0FBRkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFISTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFLTjs7QUFISTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUtOOztBQUhJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUtOOztBQUhJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUtOOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFHRjs7QUFERTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQURFO0VBQ0UsY0FBQTtBQUdKOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUVGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFTjs7QUFDSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBQ0k7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ047O0FBRUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFERjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFETjs7QUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQVI7O0FBR0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUROOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0FBRko7O0FBR0k7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUROOztBQUVNO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUVNO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUVNO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUlNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRlI7O0FBS0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFITjs7QUFJTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUZSOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSE47O0FBSU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRlI7O0FBV0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBVEY7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFUSjs7QUFhQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBVkY7O0FBWUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBVko7O0FBWUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVZKOztBQWFFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FBWEo7O0FBZUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVpGOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBWkY7O0FBZUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLFVBQUE7QUFiRjs7QUFvQkU7RUFNRSxnQkFBQTtFQUNBLFlBQUE7QUF0Qko7O0FBMEJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBdkJGOztBQTBCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQXZCRjs7QUErQkE7RUFDRSxnQkFBQTtBQTVCRjs7QUE2QkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUEzQko7O0FBNEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0tBQUEsNEJBQUE7QUExQk47O0FBNEJJO0VBQ0Usd0JBQUE7QUExQk47O0FBNEJJO0VBQ0UsV0FBQTtBQTFCTjs7QUEyQk07RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBekJSOztBQTJCTTtFQUNFLG1CQUFBO0FBekJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItaW5mb3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwJTtcclxuICB0b3A6IDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTclO1xyXG4gIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbn1cclxuLmhlYWRlci10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgLS1taW4taGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8vQ3NzIGJhY2tncm91bmQtY29sb3IgaW9uXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZjlmY2ZmO1xyXG59XHJcblxyXG4uYXZhdGFyLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA0LjI3JTtcclxuICB0b3A6IDI0JTtcclxuICB3aWR0aDogOTEuNDYlO1xyXG59XHJcbi5hdmF0YXItY29udGVudC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4udG90YWwtY2FzaCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTNlbTtcclxuICBsZWZ0OiAyMyU7XHJcbn1cclxuXHJcbi5mb250LWNhc2gtbnVtYmVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubXlob21lLWNvbnRlbnQtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5hbW91bnRQYXktY29udGVudCB7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNC4yNyU7XHJcbiAgd2lkdGg6IDkxLjQ2JTtcclxuICB0b3A6IDgwcHg7XHJcbn1cclxuXHJcbi50aXRsZS10b3AtbmV3IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi52aWV3LWFsbC1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLnN1YkNvbnRlbnRUZXh0IHtcclxuICBtYXgtaGVpZ2h0OiAzLjZlbTtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuLnJvdy1oZWlnaHQtbm90ZSB7XHJcbiAgaGVpZ2h0OiAyLjVlbTtcclxufVxyXG5cclxuLnBhbmRpbmctMTUtcmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXR3by1saW5lIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4uY29udGVudC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIC0tdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jb250ZW50LXN1YiB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICBtYXgtaGVpZ2h0OiAzOHB4O1xyXG5cclxuICBjb2xvcjogIzU1NjA4MDtcclxufVxyXG5cclxuLnRpdGxlLXRleHQtaGVhZGVyIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudC1jdXN0b20ge1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICAtd2Via2l0LW1hcmdpbi1zdGFydDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCByZ2JhKDMzLCA0OSwgNjMsIDAuMSk7XHJcbn1cclxuLmNhcmQtY29udGVudC1jdXN0b206bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50LW5ld3Mge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gIC13ZWJraXQtbWFyZ2luLWVuZDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggcmdiYSgzMywgNDksIDYzLCAwLjEpO1xyXG59XHJcblxyXG4ubGlzdC1ob21lLWNvbnRlbnQge1xyXG4gIC0tb2Zmc2V0LXRvcDogLTE2cHggIWltcG9ydGFudDtcclxuICAvLyAtLW92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3Qtdmlldy1jdXN0b20ge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgLmNhcmQtY29udGVudC1jdXN0b20ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qtdmlldy1uZXdzIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuXHJcbiAgLy8gb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIC8vIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAuY2FyZC1jb250ZW50LW5ldyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5kaXYtYXZhdGFyLWNvbnRlbnQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmltZy1kaXNjb3VudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nLWF2YXRhciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaW1nLWF2YXRhci1iaWcge1xyXG4gIGhlaWdodDogMS41ZW07XHJcbn1cclxuXHJcbi5jbGVhci1hdmF0YXItcmVjdCB7XHJcbiAgd2lkdGg6IDFweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgyMywgMjEsIDQ4LCAwLjEwMjU0Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uZnVuY3Rpb24tY29udGVudC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1JTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdi1hdmF0YXItY29udGVudC1iaWcge1xyXG4gIHdpZHRoOiA0OCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDIzLCAyMSwgNDgsIDAuMTAyNTQ2KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvbnRlbnQtaXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pbWFnZS1jYXB0aW9uLWJpZyB7XHJcbiAgLyogTWFrZSB0aGUgY2FwdGlvbiBhIGJsb2NrIHNvIGl0IG9jY3VwaWVzIGl0cyBvd24gbGluZS4gKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDlhYzk7XHJcbn1cclxuLmltYWdlLWNhcHRpb24tcGF5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbn1cclxuXHJcbi5iYWxhbmNlLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxNnB4O1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIHRvcDogMzBweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG5cclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMjMsIDIxLCA0OCwgMC4xMDI1NDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnRpdGxlLWJsYW5jZS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjNTU2MDgwO1xyXG59XHJcblxyXG4udG90YWwtY2FzaC1ibGFuY2UtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMjJweDtcclxuICByaWdodDogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogIzU1NjA4MDtcclxufVxyXG4udG90YWwtY2FzaC1ibGFuY2UtY29udGVudC11bml0IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBjb2xvcjogIzU1NjA4MDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY2xlYXItYmFsYW5jZS1yZWN0IHtcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNSU7XHJcbiAgbGVmdDogMTAlO1xyXG59XHJcblxyXG4uYnV0dG9uLW15LWhvbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW46IDAgMTZweDtcclxuICByaWdodDogMDtcclxuICAtLWJhY2tncm91bmQ6ICNlNDZiNjQ7XHJcbn1cclxuLmJ1dHRvbi1teS1ob21lIGltZyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnV0dG9uLWF2YXRhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuLXBheW5vdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5idG4tbmV3LXJlcXVlc3Qge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnJlcXVlc3QtZGV0YWlsIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbn1cclxuXHJcbi5hbW91bnRQYXktbnVtYmVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcbi5hbW91bnRQYXktdW5pdCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY29udGVudC1pY29uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvdHRvbSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbn1cclxuLmNhcmQtYm90dG9tLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzdhODM4YztcclxufVxyXG4uY2FyZC1ib3R0b20tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmNhcmQtaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQtY29udGVudC1uZXdzIC5jYXJkLWltZyB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uYmFkZ2UtY29ybmVyOmVtcHR5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmJhZGdlLWNvcm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgLy8gYm9yZGVyLXRvcDogMjVweCBzb2xpZCAjODg4O1xyXG4gIC8vIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAvLyBib3JkZXItbGVmdDogNjZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhYzk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uYmFkZ2UtY29ybmVyLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhYzk7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmFkZ2UtY29ybmVyLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmM5NGM7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uYmFkZ2UtY29ybmVyLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8vIGN1c3RvbSBoZWFkZXIgc21hbGxcclxuLnN1Yi1oZWFkZXItdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5zdWItYW1vdW50UGF5LWNvbnRlbnQge1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vdG9wOiAzMHB4O1xyXG59XHJcbi5zdWItZnVuY3Rpb24tY29udGVudC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLy8gdG9wOiA0NHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggcmdiYSgzMywgNDksIDYzLCAwLjIpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG59XHJcbi5kaXYtYXZhdGFyLWNvbnRlbnQtaXRlbSB7XHJcbiAgLy8gd2lkdGg6IDUwJTtcclxuICB3aWR0aDogMTYuNjY2NjY2NyU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbi5idG4tb3RoZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmJ0bi1wYXlfbm93IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmJ0bi1yZXF1ZXN0X2ljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5idG4tYm9vay1jYXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbi5idG4taGVscGVyIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG4uYnRuLXJlcGFpcmluZyB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuLmltZy1hdmF0YXItc21hbGwge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20taW5maW5pdGUtc2Nyb2xsIHtcclxuICAtLWNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcblxyXG4udzMtYW5pbWF0ZS10b3Age1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb246IHNsaWRlLWRvd24gMC4zcyBlYXNlLW91dDtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWRvd24gMC4zcyBlYXNlLW91dDtcclxuICAtbW96LWFuaW1hdGlvbjogc2xpZGUtZG93biAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIGZyb20ge1xyXG4gICAgdG9wOiAtMzAwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5ALW1vei1rZXlmcmFtZXMgc2xpZGUtZG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVcGRhdGUgdGhlbWUgY3NzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4uaW9uLW5vLWJvcmRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwMCUvMCAwIDQwcHggNDBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNlcnZpY2UtaGVhZGVyLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWhlYWRlci1zdWItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaG9tZS1oZWFkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ljb24vaG9tZS9ob21lLWhlYWRlci5zdmcpO1xyXG4gICAgd2lkdGg6IDE1NXB4O1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIC5tYWluLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICAuYnRuLWFjY291bnQge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICB9XHJcbiAgLmF2YXRhci1jdXN0b20ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXdhbGxldCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwcHggMHB4IDBweCAxMDBweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIC5pY29uLXdhbGxldCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogLTZweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAubm9fd2FsbGV0X3RpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI0ZGQzE0NDtcclxuICAgIH1cclxuICAgIC53YWxsZXRfbW9uZXlfdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogM3B4O1xyXG4gICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzdiN2I3YjtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC53YWxsZXRfbW9uZXkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogM3B4O1xyXG4gICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1uYW1lLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLmhlbGxvLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXgtaGVpZ2h0OiAxNjVweDtcclxuICAubm90aWZpY2F0aW9uLWV4cGFuZCB7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ljb24vaG9tZS9ub3RpZmljYXRpb24taGVhZGVyLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG5cclxuICAubm90aWZpY2F0aW9uLWhlYWRlci10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuXHJcbiAgICAuaGVhZGVyLXRleHQtMSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXItdGV4dC0yIHtcclxuICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBjb2xvcjogIzdiN2I3YjtcclxuICAgIH1cclxuICB9XHJcbiAgLm5vdGlmaWNhdGlvbi1oZWFkZXItYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MXB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tbGlzdCB7XHJcbiAgbWF4LWhlaWdodDogODVweDtcclxuICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gIC5saXN0LW5vdGlmaWNhdGlvbnMge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIC5ub3RpZmljYXRpb24ge1xyXG4gICAgICAtLWJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogI2U5ZTllOTtcclxuICAgICAgLS1taW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm5vdGlmaWNhdGlvbi1ub3QtZGF0YSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzdiN2I3YjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taWNvbiB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIGNvbG9yOiAjM2NiZGZkO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMjIxYzFlO1xyXG59XHJcblxyXG4ucmVxdWVzdC1jYXRlZ29yeSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA3OHB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAxMjVweDtcclxuXHJcbiAgLml0ZW0taWNvbi1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLml0ZW0taWNvbi1jb250ZW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmYmU3ZTU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgLml0ZW0taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgIH1cclxuICB9XHJcbiAgLm5vdGlmaWNhdGlvbi1vdmVyZHVlLWJpbGwge1xyXG4gICAgbWluLWhlaWdodDogNzVweDtcclxuICAgIG1heC1oZWlnaHQ6IDg1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1jb2xvcjogMXB4IHNvbGlkICNGRkMxNDQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb24vbm90aS1iaWxsLWltZy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIC5ub3RpLWRldGFpbCB7XHJcbiAgICAgIHBhZGRpbmc6IDlweCAxMDcuNXB4IDdweCAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAubm90aS10b3RhbC1iaWxsIHtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICAgIH1cclxuICAgICAgLm5vdGktYmlsbC1pdGVtIHtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgfVxyXG4gICAgICAudGhyZWUtZG90cyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ub3RpLWltYWdlIHtcclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogOTZweDtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXktYmlsbC1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICByaWdodDogMTVweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG4gICAgICAuYnV0dG9uLXBheSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkZDMTQ0IDAlLCAjZTIzYTI4IDEwMCUpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xvc2Utbm90aS1iaWxsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogLTNweDtcclxuICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAuY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBjb2xvcjogI2ZiZTdlNTtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5vdGlmaS1ub3Qtb3ZlcmR1ZS1iaWxsIHtcclxuICAgIC8vIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVxdWVzdC1jYXRlZ29yeS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5mdW5jdGlvbi10aXRsZS1ibG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmZ1bnRpb25zLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgfVxyXG4gIC5mdW50aW9ucy10aXRsZS0yIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogIzdiN2I3YjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVxdWVzdC1jYXRlZ29yaWVzLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2U5ZTllOTtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2F0ZS10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGNvbG9yOiAjMjIxYzFlO1xyXG59XHJcblxyXG4uZnVuY3Rpb24tbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mdW5jdGlvbi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNC4yNyU7XHJcbiAgd2lkdGg6IDkxLjQ2JTtcclxuICB0b3A6IDI0NXB4O1xyXG5cclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRlbnQge1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyB0b3A6IDY3MHB4O1xyXG4gIGltZyB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBtYXJnaW46IGF1dG87XHJcbiAgICAvLyBsZWZ0OiAwO1xyXG4gICAgLy8gcmlnaHQ6IDA7XHJcbiAgICAvLyBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA5OHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNlcnZpY2UtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZWU5YTFjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB6LWluZGV4OiA1O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm1lbnUtYXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAtMjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLy8gLmJhbm5lci1jb250ZW50IHtcclxuLy8gICBpbWcge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4uYmFubmVyLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgLmhlYWRlci1zbGlkZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC5zd2lwZXItc2xpZGUgPiBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBvYmplY3QtZml0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICAgIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICAgICAgd2lkdGg6IDEwLjNweDtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjIxYzFlODA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAxLjFweDtcclxuICAgICAgfVxyXG4gICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
          }, {
            type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
          }, {
            type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
          }];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map