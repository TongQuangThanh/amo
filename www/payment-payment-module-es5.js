(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"], {
    /***/
    "mDHw":
    /*!*************************************************!*\
      !*** ./src/app/pages/payment/payment.module.ts ***!
      \*************************************************/

    /*! exports provided: PaymentPageModule */

    /***/
    function mDHw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
        return PaymentPageModule;
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


      var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payment.page */
      "uV3x");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
      }];

      var PaymentPageModule = function PaymentPageModule() {
        _classCallCheck(this, PaymentPageModule);
      };

      PaymentPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PaymentPageModule
      });
      PaymentPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PaymentPageModule_Factory(t) {
          return new (t || PaymentPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentPageModule, {
          declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uV3x":
    /*!***********************************************!*\
      !*** ./src/app/pages/payment/payment.page.ts ***!
      \***********************************************/

    /*! exports provided: PaymentPage */

    /***/
    function uV3x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
        return PaymentPage;
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


      var src_app_utils_const_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/utils/const.service */
      "KQOL");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function PaymentPage_ion_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.need_payment"));
        }
      }

      function PaymentPage_ion_label_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.need_payment_inactive"));
        }
      }

      function PaymentPage_ion_label_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.need_payment_no_pay"));
        }
      }

      function PaymentPage_ion_label_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.formatMoney(ctx_r3.totalPayment), "\u0111");
        }
      }

      function PaymentPage_ion_label_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.formatMoney(ctx_r4.listPaymentBills[0].total), "\u0111");
        }
      }

      function PaymentPage_ion_label_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.payment_list_title"));
        }
      }

      function PaymentPage_ion_label_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.payment_list_title_inactive"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          inOutDays: a0
        };
      };

      function PaymentPage_ion_card_18_ng_container_2_ion_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r14.formatString(item_r8.updatedAt), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "PAYMENT.paid_in_days", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r8.inOutDays)), " ");
        }
      }

      function PaymentPage_ion_card_18_ng_container_2_ion_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r15.formatString(item_r8.updatedAt), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "PAYMENT.paid_out_days", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r8.inOutDays)), " ");
        }
      }

      function PaymentPage_ion_card_18_ng_container_2_ion_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.formatString(item_r8.updatedAt));
        }
      }

      function PaymentPage_ion_card_18_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentPage_ion_card_18_ng_container_2_ion_label_1_Template, 3, 7, "ion-label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentPage_ion_card_18_ng_container_2_ion_label_2_Template, 3, 7, "ion-label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentPage_ion_card_18_ng_container_2_ion_label_3_Template, 2, 1, "ion-label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r8.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "publish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "outdate");
        }
      }

      function PaymentPage_ion_card_18_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.formatString(item_r8.updatedAt));
        }
      }

      function PaymentPage_ion_card_18_ion_badge_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_unpaid"));
        }
      }

      function PaymentPage_ion_card_18_ion_badge_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_outdate"));
        }
      }

      function PaymentPage_ion_card_18_ion_button_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.btn_paid_label"));
        }
      }

      function PaymentPage_ion_card_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentPage_ion_card_18_Template_ion_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var item_r8 = ctx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.detailPage(item_r8._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentPage_ion_card_18_ng_container_2_Template, 4, 3, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentPage_ion_card_18_ng_container_3_Template, 3, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaymentPage_ion_card_18_ion_badge_4_Template, 3, 3, "ion-badge", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaymentPage_ion_card_18_ion_badge_5_Template, 3, 3, "ion-badge", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-text", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaymentPage_ion_card_18_ion_button_16_Template, 3, 3, "ion-button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : item_r8.campaign.settingPaymentMode) == "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : item_r8.campaign.settingPaymentMode) != "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.status == "publish" && (item_r8 == null ? null : item_r8.campaign.settingPaymentMode) == "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.status == "outdate" && (item_r8 == null ? null : item_r8.campaign.settingPaymentMode) == "active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r8 == null ? null : item_r8.payment == null ? null : item_r8.payment.title, " - ", item_r8 == null ? null : item_r8.apartment.title, " ", item_r8 == null ? null : item_r8.campaign.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "PAYMENT.number_money_label"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.formatMoney(item_r8.total), "\u0111");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r8 == null ? null : item_r8.campaign.settingPaymentMode) == "active");
        }
      }

      var PaymentPage = /*#__PURE__*/function () {
        function PaymentPage(loading, platform, apiService, navCtrl) {
          var _this = this;

          _classCallCheck(this, PaymentPage);

          this.loading = loading;
          this.platform = platform;
          this.apiService = apiService;
          this.navCtrl = navCtrl; // data

          this.listPaymentBills = [];
          this.numberRecordOnPage = src_app_utils_const_service__WEBPACK_IMPORTED_MODULE_2__["ConstService"].NUMBER_RECORD_ON_PAGE;
          this.segmentModel = 'all';
          this.myDate = new Date().toISOString();
          this.totalPayment = 0;
          this.platform.ready().then(function (readySource) {
            _this.heightScreen = platform.height() - 250;
          });
        }

        _createClass(PaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentPage = 1;
            this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', null, true);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "getPaymentLogs",
          value: function getPaymentLogs(page, limit, category, search, event, isRefresh) {
            var _this2 = this;

            this.loading.present();
            var self = this;

            if (event) {
              event.target.complete();
            }

            this.apiService.getListPayment(page, limit, category, search, 'publish').subscribe(function (result) {
              self.loading.dismiss();

              if (!result.paymentBills || result.paymentBills.length == 0) {
                return;
              }

              if (isRefresh) {
                _this2.listPaymentBills = [];
                _this2.totalPayment = 0;
              }

              result.paymentBills.forEach(function (bill) {
                if (bill.payment) {
                  var today = new Date();
                  var endAt = new Date(bill.payment.endAt);

                  if (today > endAt && bill.status == 'publish') {
                    bill.status = 'outdate';
                  }

                  bill.inOutDays = _this2.getDiffDays(today, endAt);

                  _this2.listPaymentBills.push(bill);

                  _this2.totalPayment += +bill.total;
                }
              });
            }, function (error) {
              self.loading.dismiss();
            }, function () {
              self.loading.dismiss();

              if (event) {
                event.target.complete();
              }
            });
          }
        }, {
          key: "loadData",
          value: function loadData($event) {
            this.currentPage++;
            this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', $event, false);
          }
        }, {
          key: "paymentHistoryClick",
          value: function paymentHistoryClick() {
            this.navCtrl.navigateForward('/payment-history');
          }
        }, {
          key: "detailPage",
          value: function detailPage(id) {
            this.navCtrl.navigateForward('/payment-infor/' + id);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.currentPage = 1;
            this.getPaymentLogs(this.currentPage, this.numberRecordOnPage, '', '', event, true);
          }
        }, {
          key: "formatString",
          value: function formatString(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"].formatString(stringDate);
          }
        }, {
          key: "formatMoney",
          value: function formatMoney(stringValue) {
            var n = parseInt(stringValue);

            if (n) {
              return n.toFixed(0).replace(/./g, function (c, i, a) {
                return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
              });
            } else {
              return '-';
            }
          }
        }, {
          key: "getDiffDays",
          value: function getDiffDays(startDate, endDate) {
            var diffTime = Math.abs(endDate.getTime() - startDate.getTime());
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          }
        }]);

        return PaymentPage;
      }();

      PaymentPage.ɵfac = function PaymentPage_Factory(t) {
        return new (t || PaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]));
      };

      PaymentPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaymentPage,
        selectors: [["app-payment"]],
        decls: 21,
        vars: 13,
        consts: [[1, "ion-no-border", "payment-header"], [1, "button-history", 3, "click"], ["src", "assets/icon/payment/time-circle.svg", 1, "icon-history"], [1, "label_history"], ["class", "header-sub-title", 4, "ngIf"], ["class", "header-title", 4, "ngIf"], [1, "has-header", "payment-container"], ["slot", "fixed", "pullMin", "100", 3, "ionRefresh"], ["pullingIcon", "circles", "refreshingSpinner", "", "refreshingText", ""], ["lines", "none", 1, "payment-list-title"], [4, "ngIf"], [1, "payment-ion-list"], ["class", "payment-card", 3, "click", 4, "ngFor", "ngForOf"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], [1, "header-sub-title"], [1, "header-title"], [1, "payment-card", 3, "click"], ["lines", "none", 1, "payment-card-item"], [3, "ngSwitch", 4, "ngIf"], ["class", "badge-status badge-unpaid", 4, "ngIf"], ["class", "badge-status badge-outdate", 4, "ngIf"], [1, ""], [1, "payment-title"], [1, "devider-line-payment"], ["lines", "none", 1, "payment-money-item"], ["fixed", "", "slot", "start", 1, "money-title"], [1, "mone-number"], ["class", "btn-paid", "slot", "end", 4, "ngIf"], [3, "ngSwitch"], ["slot", "start", "class", "update-time", 4, "ngSwitchCase"], ["slot", "start", "class", "update-time", 4, "ngSwitchDefault"], ["slot", "start", 1, "update-time"], [1, "badge-status", "badge-unpaid"], [1, "badge-status", "badge-outdate"], ["slot", "end", 1, "btn-paid"]],
        template: function PaymentPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentPage_Template_ion_button_click_1_listener() {
              return ctx.paymentHistoryClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaymentPage_ion_label_6_Template, 3, 3, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaymentPage_ion_label_7_Template, 3, 3, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaymentPage_ion_label_8_Template, 3, 3, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PaymentPage_ion_label_9_Template, 2, 1, "ion-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaymentPage_ion_label_10_Template, 2, 1, "ion-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-refresher", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function PaymentPage_Template_ion_refresher_ionRefresh_12_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ion-refresher-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PaymentPage_ion_label_15_Template, 3, 3, "ion-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaymentPage_ion_label_16_Template, 3, 3, "ion-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-list", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PaymentPage_ion_card_18_Template, 17, 12, "ion-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-infinite-scroll", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function PaymentPage_Template_ion_infinite_scroll_ionInfinite_19_listener($event) {
              return ctx.loadData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-infinite-scroll-content", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 11, "PAYMENT.label_history"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPaymentBills.length > 0 && ctx.listPaymentBills[0].campaign.settingPaymentMode == "active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPaymentBills.length > 0 && ctx.listPaymentBills[0].campaign.settingPaymentMode != "active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPaymentBills.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPaymentBills.length > 0 && ctx.listPaymentBills[0].campaign.settingPaymentMode == "active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPaymentBills.length > 0 && ctx.listPaymentBills[0].campaign.settingPaymentMode != "active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPaymentBills.length > 0 && ctx.listPaymentBills[0].campaign.settingPaymentMode == "active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPaymentBills.length > 0 && ctx.listPaymentBills[0].campaign.settingPaymentMode != "active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.heightScreen, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listPaymentBills);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBadge"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["ion-header[_ngcontent-%COMP%] {\n  position: fixed;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: none;\n}\nsuper-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-transform: unset;\n  font-size: 16px;\n  line-height: 24px;\n  color: #7a838c;\n}\nsuper-tab-button.active[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: bold;\n}\n.balance-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  right: 16px;\n  top: 30px;\n  height: 125px;\n  border-radius: 8px;\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n}\n.title-blance-content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 16px;\n  display: flex;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #556080;\n}\n.total-cash-blance-content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  right: 16px;\n  display: flex;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #556080;\n}\n.total-cash-blance-content-unit[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 28px;\n  color: #556080;\n  margin-left: 5px;\n}\n.list-payment-content[_ngcontent-%COMP%] {\n  top: 186px;\n  overflow: auto;\n  position: absolute;\n}\n.list-payment-item[_ngcontent-%COMP%] {\n  margin: 16px;\n  --background: #ffffff;\n  border-bottom: 1px solid #f5f5f5;\n  border-radius: 0px !important;\n}\n.button-pay-now[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  width: 8em;\n  height: 2em;\n  text-transform: none;\n  --box-shadow: none;\n  padding: 0;\n}\n.title-payment-item[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  \n  color: #556080;\n}\n.total-payment-item[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  color: #556080;\n}\n.node-payment-item[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  display: block;\n  color: #bbbfcc;\n}\n.custom-infinite-scroll[_ngcontent-%COMP%] {\n  min-height: 5px;\n}\n.list-view-custom[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.avatar-done[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-left: -7px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 14px;\n  \n  text-align: center;\n  color: #01bcc4;\n}\n.avatar-out-of-date[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-left: -7px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 14px;\n  \n  text-align: center;\n  color: #FFC144;\n}\n.avatar-paying[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-left: -7px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 14px;\n  \n  text-align: center;\n  color: #fac440;\n}\n.div-avatar-content-big[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-block;\n  text-align: center;\n  width: 33%;\n  height: 100%;\n}\n.image-caption-big[_ngcontent-%COMP%] {\n  \n  display: block;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  margin-top: 5px;\n  font-size: 0.8em;\n  line-height: 1em;\n  text-align: center;\n  color: #556080;\n}\n.img-avatar-big[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.clear-balance-rect[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 80%;\n  background: #f5f5f5;\n  border-radius: 10px;\n  position: absolute;\n  top: 33%;\n  left: 10%;\n}\n\n.header-infor[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0%;\n  top: 0%;\n  width: 100%;\n  height: 20%;\n  background: #FFC144;\n}\n.title-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 36%;\n  width: 91.46%;\n}\n.title-chip-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 26px;\n  line-height: 40px;\n  color: #ffffff;\n}\n.title-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  --background: transparent;\n}\n.amountPay-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4.27%;\n  width: 91.46%;\n  top: 15%;\n}\n.function-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(20% + 60px);\n  height: 8.11%;\n  padding-top: 4px;\n  background: #ffffff;\n  border-bottom: 1px solid #f4f5f5;\n}\n.function-content-tab[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(30% + 20px);\n  padding-top: 4px;\n  background: #ffffff;\n  box-shadow: none;\n  width: 100%;\n}\n.function-content-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  width: 100%;\n}\n.div-amountPay-content-big[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n  border: 1px solid #ffffff;\n}\n.content-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  border: none;\n  margin: 0 16px;\n  display: flex;\n  align-items: center;\n}\n.content-item-label[_ngcontent-%COMP%] {\n  \n  display: block;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 54px;\n  text-align: left;\n  color: #21313f;\n}\n.amountPay-number[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 54px;\n  color: #21313f;\n  text-align: right;\n}\n.amountPay-unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.div-fee-segment[_ngcontent-%COMP%] {\n  clear: both;\n  display: block;\n}\n.button-tab-custom[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: none;\n}\n.segment-toolbar[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f4f5f5;\n  background: transparent;\n  box-shadow: none;\n}\n.segment-content[_ngcontent-%COMP%] {\n  background: transparent;\n  --background-checked: transparent;\n}\n.segment-content-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n  margin: 0;\n}\n.segment-card-content[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n  border-bottom: 1px solid #f4f5f5;\n  margin: 0 16px;\n}\n.segment-card-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  margin: 0;\n}\n.ion-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nion-item.item-top[_ngcontent-%COMP%] {\n  --min-height: 30px;\n}\n.detail-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #21313f;\n}\n.text-node[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n}\n.information-node[_ngcontent-%COMP%] {\n  display: block;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n  background: none;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 10px;\n  margin-left: 0;\n  box-shadow: none;\n}\n.card-bottom-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  vertical-align: middle;\n}\n.card-bottom-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.custom-oval[_ngcontent-%COMP%] {\n  font-size: 4px;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n.image-caption-big[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n}\n.btn-payment[_ngcontent-%COMP%] {\n  --background: #FFC144;\n  text-transform: none;\n  --background-focused: #FFC144;\n  --background-hover: #FFC144;\n  --background-activated: #ca5149;\n  --border-radius: 4px;\n  font-size: 14px;\n  margin: 0;\n  height: 32px;\n  --box-shadow: none;\n}\n.custom-last-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.payment-fee[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #21313f;\n  margin: 0;\n}\nion-col[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.information-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.information-col[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.super-tabs-content[_ngcontent-%COMP%] {\n  top: calc(17% + 60px);\n  height: 75%;\n}\n[_nghost-%COMP%] {\n  --super-tabs-toolbar-background: black;\n  --st-indicator-color: #FFC144;\n  --st-indicator-width: 30px;\n  --ion-color-base: transparent;\n}\n.button-tab-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  text-transform: none !important;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #7a838c;\n}\n.no-scroll[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n.payment-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.payment-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 90px;\n  font-size: 32px;\n  line-height: 44px;\n  color: #ffffff;\n}\n.payment-header[_ngcontent-%COMP%]   .header-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 15px;\n  right: 15px;\n  top: 65px;\n  font-size: 12px;\n  line-height: 16px;\n  color: #ffffff;\n  opacity: 0.6;\n  text-align: center;\n}\n.payment-header[_ngcontent-%COMP%]   .button-history[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 12px;\n  position: absolute;\n  right: -5px;\n  top: 55px;\n  font-weight: 600;\n  width: 85px;\n  height: 32px;\n  --background: #ffffff;\n  --border-radius: 100px 0px 0px 100px;\n  z-index: 999;\n}\n.payment-header[_ngcontent-%COMP%]   .button-history[_ngcontent-%COMP%]   .label_history[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 18px;\n  color: #221c1e;\n  margin-left: 5px;\n}\n.payment-container[_ngcontent-%COMP%] {\n  --background: rgba(249, 252, 255, 1);\n}\n.payment-container[_ngcontent-%COMP%]   .payment-list-title[_ngcontent-%COMP%] {\n  margin-top: 155px;\n  --background:rgba(249, 252, 255, 1);\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-list-title[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 10px;\n  left: 20px;\n  border-bottom: 2px solid #FFC144;\n  width: 30px;\n  z-index: 99;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%] {\n  background: #f9fcff;\n  overflow-y: auto;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  margin: 10px 15px;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .update-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  min-width: 70%;\n  margin-right: 0px;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .payment-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 25px;\n  color: #221c1e;\n  margin-left: 20px;\n  margin-bottom: 5px;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%] {\n  height: 30px;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  color: #ffffff;\n  border-radius: 0px 8px;\n  width: 90px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-paid[_ngcontent-%COMP%] {\n  background: #33a54c;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-unpaid[_ngcontent-%COMP%] {\n  background: #FFC144;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-pending[_ngcontent-%COMP%] {\n  background: #f2c94c;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-outdate[_ngcontent-%COMP%] {\n  background: #e23a28;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .devider-line-payment[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .devider-line-payment[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 43px;\n  left: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .devider-line-payment[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 43px;\n  right: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .money-title[_ngcontent-%COMP%] {\n  max-width: 55px;\n  margin-right: 0px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n  font-weight: 600;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .mone-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  color: #FFC144;\n  margin-right: 0px;\n}\n.payment-container[_ngcontent-%COMP%]   .payment-ion-list[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .btn-paid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  --background: linear-gradient(180deg, #ffc144 0%, #ee9a1c 100%);\n  border-radius: 8px;\n  font-size: 14px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjtBQUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUY7QUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUdGO0FBREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxrQkFBQTtBQUdGO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUY7QUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUdGO0FBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0Y7QUFBQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFHRjtBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUdGO0FBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLGNBQUE7QUFFRjtBQUNBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7QUFMRjtBQVFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFMRjtBQVFBO0VBQ0UsMERBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMRjtBQVFBO0VBQ0UsWUFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBTEY7QUFRQSxr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QSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFTUjtBQVBNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwrREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFTUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxufVxyXG5zdXBlci10YWItYnV0dG9uIGlvbi1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzdhODM4YztcclxufVxyXG5zdXBlci10YWItYnV0dG9uLmFjdGl2ZSBpb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5iYWxhbmNlLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxNnB4O1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIHRvcDogMzBweDtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDIzLCAyMSwgNDgsIDAuMTAyNTQ2KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgyMywgMjEsIDQ4LCAwLjEwMjU0Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4udGl0bGUtYmxhbmNlLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgbGVmdDogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM1NTYwODA7XHJcbn1cclxuXHJcbi50b3RhbC1jYXNoLWJsYW5jZS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjNTU2MDgwO1xyXG59XHJcbi50b3RhbC1jYXNoLWJsYW5jZS1jb250ZW50LXVuaXQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGNvbG9yOiAjNTU2MDgwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5saXN0LXBheW1lbnQtY29udGVudCB7XHJcbiAgdG9wOiAxODZweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5saXN0LXBheW1lbnQtaXRlbSB7XHJcbiAgbWFyZ2luOiAxNnB4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbi1wYXktbm93IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiA4ZW07XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi50aXRsZS1wYXltZW50LWl0ZW0ge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuICBjb2xvcjogIzU1NjA4MDtcclxufVxyXG5cclxuLnRvdGFsLXBheW1lbnQtaXRlbSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgY29sb3I6ICM1NTYwODA7XHJcbn1cclxuXHJcbi5ub2RlLXBheW1lbnQtaXRlbSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNiYmJmY2M7XHJcbn1cclxuXHJcbi5jdXN0b20taW5maW5pdGUtc2Nyb2xsIHtcclxuICBtaW4taGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5saXN0LXZpZXctY3VzdG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5hdmF0YXItZG9uZSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBjb2xvcjogIzAxYmNjNDtcclxufVxyXG5cclxuLmF2YXRhci1vdXQtb2YtZGF0ZSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBjb2xvcjogI0ZGQzE0NDtcclxufVxyXG5cclxuLmF2YXRhci1wYXlpbmcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgY29sb3I6ICNmYWM0NDA7XHJcbn1cclxuXHJcbi5kaXYtYXZhdGFyLWNvbnRlbnQtYmlnIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZS1jYXB0aW9uLWJpZyB7XHJcbiAgLyogTWFrZSB0aGUgY2FwdGlvbiBhIGJsb2NrIHNvIGl0IG9jY3VwaWVzIGl0cyBvd24gbGluZS4gKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNTU2MDgwO1xyXG59XHJcblxyXG4uaW1nLWF2YXRhci1iaWcge1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmNsZWFyLWJhbGFuY2UtcmVjdCB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzMlO1xyXG4gIGxlZnQ6IDEwJTtcclxufVxyXG5cclxuLyogY3VzdG9tIGhlYWRlciAqL1xyXG4uaGVhZGVyLWluZm9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMCU7XHJcbiAgdG9wOiAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG59XHJcbi50aXRsZS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNiU7XHJcbiAgd2lkdGg6IDkxLjQ2JTtcclxufVxyXG4udGl0bGUtY2hpcC1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnRpdGxlLWNoaXAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYW1vdW50UGF5LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA0LjI3JTtcclxuICB3aWR0aDogOTEuNDYlO1xyXG4gIHRvcDogMTUlO1xyXG59XHJcbi5mdW5jdGlvbi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDIwJSArIDYwcHgpO1xyXG4gIGhlaWdodDogOC4xMSU7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNWY1O1xyXG59XHJcbi5mdW5jdGlvbi1jb250ZW50LXRhYiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogY2FsYygzMCUgKyAyMHB4KTtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZnVuY3Rpb24tY29udGVudC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1JTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGl2LWFtb3VudFBheS1jb250ZW50LWJpZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDIzLCAyMSwgNDgsIDAuMTAyNTQ2KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4uY29udGVudC1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDAgMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnQtaXRlbS1sYWJlbCB7XHJcbiAgLyogTWFrZSB0aGUgY2FwdGlvbiBhIGJsb2NrIHNvIGl0IG9jY3VwaWVzIGl0cyBvd24gbGluZS4gKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogNTRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG59XHJcbi5hbW91bnRQYXktbnVtYmVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmFtb3VudFBheS11bml0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmRpdi1mZWUtc2VnbWVudCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJ1dHRvbi10YWItY3VzdG9tIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLy8gLnN1cGVyLXRhYi1idXR0b24tbGFiZWwge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuLy8gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogIzdBODM4QztcclxuLy8gfVxyXG4uc2VnbWVudC10b29sYmFyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjVmNTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi8vIC5zZWdtZW50LXRvb2xiYXIgc3VwZXItdGFiLWJ1dHRvbiB7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuLy8gfVxyXG4uc2VnbWVudC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNlZ21lbnQtY29udGVudC1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uc2VnbWVudC1jYXJkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNWY1O1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcbi5zZWdtZW50LWNhcmQtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmlvbi1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKiBjdXN0b20gbGlzdCAqL1xyXG5pb24taXRlbS5pdGVtLXRvcCB7XHJcbiAgLS1taW4taGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5kZXRhaWwtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG59XHJcbi50ZXh0LW5vZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG59XHJcbi5pbmZvcm1hdGlvbi1ub2RlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvLyBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uY2FyZC1ib3R0b20ge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5jYXJkLWJvdHRvbS1pY29uIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uY2FyZC1ib3R0b20tbGFiZWwge1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jdXN0b20tb3ZhbCB7XHJcbiAgZm9udC1zaXplOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uaW1hZ2UtY2FwdGlvbi1iaWcge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG59XHJcbi5idG4tcGF5bWVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRkZDMTQ0O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0ZGQzE0NDtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjY2E1MTQ5O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uY3VzdG9tLWxhc3QtY29sIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucGF5bWVudC1mZWUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbmZvcm1hdGlvbi1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcbi5pbmZvcm1hdGlvbi1jb2wge1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnN1cGVyLXRhYnMtY29udGVudCB7XHJcbiAgdG9wOiBjYWxjKDE3JSArIDYwcHgpO1xyXG4gIGhlaWdodDogNzUlO1xyXG59XHJcbjpob3N0IHtcclxuICAtLXN1cGVyLXRhYnMtdG9vbGJhci1iYWNrZ3JvdW5kOiBibGFjaztcclxuICAtLXN0LWluZGljYXRvci1jb2xvcjogI0ZGQzE0NDtcclxuICAtLXN0LWluZGljYXRvci13aWR0aDogMzBweDtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudDtcclxufVxyXG4uYnV0dG9uLXRhYi1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbn1cclxuXHJcbi5uby1zY3JvbGwge1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLy8gbmV3IGNzcyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5wYXltZW50LWhlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTQ0O1xyXG4gIGhlaWdodDogMTU2cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMDAlLzAgMCA1MCUgNTAlO1xyXG5cclxuICAuaGVhZGVyLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA5MHB4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmhlYWRlci1zdWItdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA2NXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJ1dHRvbi1oaXN0b3J5IHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC01cHg7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4IDBweCAwcHggMTAwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgXHJcbiAgICAubGFiZWxfaGlzdG9yeSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucGF5bWVudC1jb250YWluZXIge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDksIDI1MiwgMjU1LCAxKTtcclxuICAucGF5bWVudC1saXN0LXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYmEoMjQ5LCAyNTIsIDI1NSwgMSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGQzE0NDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGF5bWVudC1pb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjUyLCAyNTUsIDEpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAucGF5bWVudC1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgLnVwZGF0ZS10aW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnBheW1lbnQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICAucGF5bWVudC1jYXJkLWl0ZW0ge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuYmFkZ2Utc3RhdHVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYWRnZS1wYWlkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzNhNTRjO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYWRnZS11bnBhaWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJhZGdlLXBlbmRpbmcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmM5NGM7XHJcbiAgICAgIH1cclxuICAgICAgLmJhZGdlLW91dGRhdGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlMjNhMjg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGV2aWRlci1saW5lLXBheW1lbnQge1xyXG4gICAgICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNDNweDtcclxuICAgICAgICBsZWZ0OiAtOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgICAgfVxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDQzcHg7XHJcbiAgICAgICAgcmlnaHQ6IC04cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucGF5bWVudC1tb25leS1pdGVtIHtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAubW9uZXktdGl0bGUge1xyXG4gICAgICAgIG1heC13aWR0aDogNTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgICAubW9uZS1udW1iZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogI0ZGQzE0NDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLXBhaWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZjMTQ0IDAlLCAjZWU5YTFjIDEwMCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-payment',
            templateUrl: './payment.page.html',
            styleUrls: ['./payment.page.scss']
          }]
        }], function () {
          return [{
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=payment-payment-module-es5.js.map