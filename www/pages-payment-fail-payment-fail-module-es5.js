(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-fail-payment-fail-module"], {
    /***/
    "lA8v":
    /*!***********************************************************!*\
      !*** ./src/app/pages/payment-fail/payment-fail.module.ts ***!
      \***********************************************************/

    /*! exports provided: PaymentFailPageModule */

    /***/
    function lA8v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentFailPageModule", function () {
        return PaymentFailPageModule;
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


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _payment_fail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payment-fail.page */
      "ury8");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _payment_fail_page__WEBPACK_IMPORTED_MODULE_6__["PaymentFailPage"]
      }];

      var PaymentFailPageModule = function PaymentFailPageModule() {
        _classCallCheck(this, PaymentFailPageModule);
      };

      PaymentFailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PaymentFailPageModule
      });
      PaymentFailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PaymentFailPageModule_Factory(t) {
          return new (t || PaymentFailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentFailPageModule, {
          declarations: [_payment_fail_page__WEBPACK_IMPORTED_MODULE_6__["PaymentFailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentFailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_payment_fail_page__WEBPACK_IMPORTED_MODULE_6__["PaymentFailPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ury8":
    /*!*********************************************************!*\
      !*** ./src/app/pages/payment-fail/payment-fail.page.ts ***!
      \*********************************************************/

    /*! exports provided: PaymentFailPage */

    /***/
    function ury8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentFailPage", function () {
        return PaymentFailPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
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

      var PaymentFailPage = /*#__PURE__*/function () {
        function PaymentFailPage(loading, platform, apiService, navCtrl) {
          var _this = this;

          _classCallCheck(this, PaymentFailPage);

          this.loading = loading;
          this.platform = platform;
          this.apiService = apiService;
          this.navCtrl = navCtrl; // data

          this.listPaymentBills = [];
          this.segmentModel = 'all';
          this.myDate = new Date().toISOString();
          this.totalPayment = 0;
          this.platform.ready().then(function (readySource) {
            _this.heightScreen = platform.height() - 250;
          });
        }

        _createClass(PaymentFailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "goBackHome",
          value: function goBackHome() {
            this.navCtrl.navigateForward('/dashboard/home');
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return PaymentFailPage;
      }();

      PaymentFailPage.ɵfac = function PaymentFailPage_Factory(t) {
        return new (t || PaymentFailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]));
      };

      PaymentFailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaymentFailPage,
        selectors: [["app-payment-fail"]],
        decls: 18,
        vars: 13,
        consts: [["slot", "fixed", 1, "payment-fail-container", "no-scroll", 3, "scrollEvents"], ["src", "../assets/icon/payment/payment-fail.svg", 1, "icon-fail"], [1, "payment-fail-card"], ["lines", "none", 1, "payment-card-item", "padding-top-item"], [1, "payment-fail-title"], ["lines", "none", 1, "payment-card-item", "padding-bottom-item"], [1, "payment-fail-error"], ["expand", "block", 1, "fail-redo-btn", 3, "click"], [1, "go-back-home", 3, "click"]],
        template: function PaymentFailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-text", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentFailPage_Template_ion_button_click_11_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentFailPage_Template_ion_label_click_15_listener() {
              return ctx.goBackHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollEvents", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "PAYMENT_RESULT.fail_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "PAYMENT_RESULT.fail_error"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, "PAYMENT_RESULT.fail_redo_btn"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, "PAYMENT_RESULT.fail_back_home"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [".no-scroll[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.padding-top-item[_ngcontent-%COMP%] {\n  --padding-top: 15px !important;\n}\n\n.padding-bottom-item[_ngcontent-%COMP%] {\n  --padding-bottom: 15px !important;\n}\n\n.payment-fail-container[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  --background: #FFC144;\n}\n\n.payment-fail-container[_ngcontent-%COMP%]   .icon-fail[_ngcontent-%COMP%] {\n  width: 194px;\n  height: 180px;\n  margin: 0 auto;\n  margin-top: 100px;\n}\n\n.payment-fail-container[_ngcontent-%COMP%]   .payment-fail-card[_ngcontent-%COMP%] {\n  --background: #FFC144;\n  box-shadow: unset;\n  border-radius: unset;\n}\n\n.payment-fail-container[_ngcontent-%COMP%]   .payment-fail-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%] {\n  --background: #FFC144;\n}\n\n.payment-fail-container[_ngcontent-%COMP%]   .payment-fail-card[_ngcontent-%COMP%]   .payment-fail-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 36px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.payment-fail-container[_ngcontent-%COMP%]   .payment-fail-card[_ngcontent-%COMP%]   .payment-fail-error[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.payment-fail-container[_ngcontent-%COMP%]   .fail-redo-btn[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-radius: 10px;\n  --color: #FFC144;\n}\n\n.payment-fail-container[_ngcontent-%COMP%]   .go-back-home[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 100%;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1mYWlsL3BheW1lbnQtZmFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBREk7RUFDRSxxQkFBQTtBQUdOOztBQURJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHTjs7QUFESTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdOOztBQUFFO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50LWZhaWwvcGF5bWVudC1mYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1zY3JvbGwge1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBheW1lbnQtZmFpbC1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gIC5pY29uLWZhaWwge1xyXG4gICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG4gIC5wYXltZW50LWZhaWwtY2FyZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgLnBheW1lbnQtY2FyZC1pdGVtIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgfVxyXG4gICAgLnBheW1lbnQtZmFpbC10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgLnBheW1lbnQtZmFpbC1lcnJvciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mYWlsLXJlZG8tYnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC0tY29sb3I6ICNGRkMxNDQ7XHJcbiAgfVxyXG4gIC5nby1iYWNrLWhvbWUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentFailPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-payment-fail',
            templateUrl: './payment-fail.page.html',
            styleUrls: ['./payment-fail.page.scss']
          }]
        }], function () {
          return [{
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-payment-fail-payment-fail-module-es5.js.map