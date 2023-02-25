(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-infor-payment-infor-module"], {
    /***/
    "0plj":
    /*!***********************************************************!*\
      !*** ./src/app/pages/payment-infor/payment-infor.page.ts ***!
      \***********************************************************/

    /*! exports provided: PaymentInforPage */

    /***/
    function plj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentInforPage", function () {
        return PaymentInforPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _popup_complain_popup_complain_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../popup-complain/popup-complain.page */
      "W2if");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function PaymentInforPage_ion_item_4_ion_badge_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_paid"), " ");
        }
      }

      function PaymentInforPage_ion_item_4_ion_badge_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_unpaid"), " ");
        }
      }

      function PaymentInforPage_ion_item_4_ion_badge_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAYMENT.status_pending"), " ");
        }
      }

      function PaymentInforPage_ion_item_4_ion_badge_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_outdate"), " ");
        }
      }

      function PaymentInforPage_ion_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PaymentInforPage_ion_item_4_ion_badge_3_Template, 3, 3, "ion-badge", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PaymentInforPage_ion_item_4_ion_badge_4_Template, 3, 3, "ion-badge", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PaymentInforPage_ion_item_4_ion_badge_5_Template, 3, 3, "ion-badge", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PaymentInforPage_ion_item_4_ion_badge_6_Template, 3, 3, "ion-badge", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatString(ctx_r0.paymentUpdateAt));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.paymentStatus == "completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.paymentStatus == "publish");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.paymentStatus == "pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.paymentStatus == "outdate");
        }
      }

      function PaymentInforPage_ion_list_23_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 41);
        }
      }

      function PaymentInforPage_ion_list_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PaymentInforPage_ion_list_23_div_9_Template, 1, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;
          var isLast_r12 = ctx.last;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/payment/bag.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.type.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.formatMoney(item_r10.amount), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r1.convertText(item_r10.description), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !isLast_r12);
        }
      }

      function PaymentInforPage_ion_item_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "PAYMENT_INFOR.payment_history_title"));
        }
      }

      function PaymentInforPage_section_25_ion_list_1_ion_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAYMENT_INFOR.payment_cash"));
        }
      }

      function PaymentInforPage_section_25_ion_list_1_ion_label_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAYMENT_INFOR.payment_online"));
        }
      }

      function PaymentInforPage_section_25_ion_list_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 41);
        }
      }

      function PaymentInforPage_section_25_ion_list_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PaymentInforPage_section_25_ion_list_1_ion_label_3_Template, 3, 3, "ion-label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PaymentInforPage_section_25_ion_list_1_ion_label_4_Template, 3, 3, "ion-label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PaymentInforPage_section_25_ion_list_1_div_9_Template, 1, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r15 = ctx.$implicit;
          var isLast_r17 = ctx.last;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/payment/money1.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r15.type == "cash");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r15.type != "cash");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r14.formatMoney(item_r15.amount), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r14.convertText(item_r15.note), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !isLast_r17);
        }
      }

      function PaymentInforPage_section_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaymentInforPage_section_25_ion_list_1_Template, 10, 6, "ion-list", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.listPaymentHistoryContent);
        }
      }

      function PaymentInforPage_section_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "section", 45);
        }
      }

      function PaymentInforPage_ion_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentInforPage_ion_button_28_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.goPaymentConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAYMENT_INFOR.pay_now"));
        }
      }

      var PaymentInforPage = /*#__PURE__*/function () {
        function PaymentInforPage(modalController, loading, apiService, navCtrl, route) {
          _classCallCheck(this, PaymentInforPage);

          this.modalController = modalController;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.route = route;
          this.paymentUpdateAt = '';
        }

        _createClass(PaymentInforPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.paymentID = this.route.snapshot.paramMap.get('id');
            this.listPaymentContent = [];
            this.listPaymentHistoryContent = []; // this.paymentType = 'payment_cash';

            this.getPaymentDetail(this.paymentID);
          }
        }, {
          key: "getPaymentDetail",
          value: function getPaymentDetail(paymentID) {
            var _this = this;

            var self = this;
            this.loading.present();
            this.apiService.getPaymentDetail(paymentID).subscribe(function (result) {
              self.totalCash = result.paymentBill.total;
              self.totalCash = self.totalCash - result.paymentBill.paidAmount;

              if (self.totalCash < 0) {
                self.totalCash = 0;
              }

              self.titlePage = result.paymentBill.payment.title;
              self.paymentStartAt = result.paymentBill.payment.paymentStartAt;
              self.paymentCategoryTranfer = result.paymentBill.category.transfer;
              self.paymentCategoryCash = result.paymentBill.category.cash;
              self.paymentEndAt = result.paymentBill.payment.paymentEndAt;
              self.listPaymentContent = result.paymentBill.content;
              self.paymentStatus = result.paymentBill.status;
              self.settingPaymentMode = result.paymentBill.campaign.settingPaymentMode;
              self.appartment = result.paymentBill.apartment.title + " " + result.paymentBill.campaign.title;
              _this.paymentUpdateAt = result.paymentBill.updatedAt;
              var today = new Date();
              var endAt = new Date(result.paymentBill.payment.paymentEndAt);

              if (today > endAt && self.paymentStatus == 'publish') {
                self.paymentStatus = 'outdate';
              }

              self.managementFeeEnable = new Array(self.listPaymentContent.length).fill(false);
              self.loading.dismiss();
              self.loading.present();
              self.apiService.getPayTheBillHistory(paymentID).subscribe(function (resultHistory) {
                self.listPaymentHistoryContent = resultHistory.paymentLogs;
              }, function (errorHistory) {
                self.loading.dismiss();
              });
            }, function (error) {
              self.loading.dismiss();
            });
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
            return n.toFixed(0).replace(/./g, function (c, i, a) {
              return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
            });
          }
        }, {
          key: "convertText",
          value: function convertText(textInput) {
            if (textInput && textInput.length > 0) {
              return textInput.replace(/\n/gi, '<br/>');
            } else {
              return '';
            }
          }
        }, {
          key: "backScreen",
          value: function backScreen(event) {
            this.navCtrl.back({
              animated: true,
              animationDirection: 'back'
            });
          }
        }, {
          key: "showListComment",
          value: function showListComment() {
            this.navCtrl.navigateForward('/payment-comment/' + this.paymentID);
          }
        }, {
          key: "paymentComplainModal",
          value: function paymentComplainModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var self, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self = this;
                      _context.next = 3;
                      return this.modalController.create({
                        component: _popup_complain_popup_complain_page__WEBPACK_IMPORTED_MODULE_7__["PopupComplainPage"],
                        componentProps: {
                          id: self.paymentID
                        },
                        cssClass: 'popupPaymentComplain-page-custom'
                      });

                    case 3:
                      modal = _context.sent;
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goPaymentConfirm",
          value: function goPaymentConfirm() {
            this.navCtrl.navigateForward('/payment-confirm/' + this.paymentID);
          }
        }]);

        return PaymentInforPage;
      }();

      PaymentInforPage.ɵfac = function PaymentInforPage_Factory(t) {
        return new (t || PaymentInforPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      PaymentInforPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PaymentInforPage,
        selectors: [["app-payment-infor"]],
        decls: 32,
        vars: 19,
        consts: [[1, "ion-no-border", "payment-info-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "payment-card"], ["lines", "none", "class", "payment-card-item", 4, "ngIf"], [1, ""], [1, "payment-title"], [1, "devider-line-info-payment"], ["lines", "none", 1, "payment-money-item"], ["fixed", "", "slot", "start", 1, "money-title"], [1, "mone-number"], [1, "payment-info-content"], ["lines", "none", 1, "section-content", "section-due-date"], [1, "section-title"], [1, "due-date", "ion-float-right"], [1, "section-content", "margin-top-10"], ["class", "section-content-fee", 4, "ngFor", "ngForOf"], ["lines", "none", "class", "section-content section-due-date margin-top-10", 4, "ngIf"], ["class", "section-content margin-top-10", 4, "ngIf"], [1, "ion-toolbar-payment"], ["class", "margin-top-10 plan cf", 4, "ngIf"], ["class", "amo-button btn-default", 3, "click", 4, "ngIf"], [1, "default-button", "btn-default", 3, "click"], ["lines", "none", 1, "payment-card-item"], ["slot", "start", 1, "update-time"], ["class", "badge-status badge-paid", 4, "ngIf"], ["class", "badge-status badge-unpaid", 4, "ngIf"], ["class", "badge-status badge-pending", 4, "ngIf"], ["class", "badge-status badge-outdate", 4, "ngIf"], [1, "badge-status", "badge-paid"], [1, "badge-status", "badge-unpaid"], [1, "badge-status", "badge-pending"], [1, "badge-status", "badge-outdate"], [1, "section-content-fee"], ["lines", "none", 1, "fee-item", "ion-no-padding"], [1, "icon-parking", 3, "src"], [1, "fee-title"], [1, "amount-number", "ion-float-right"], ["lines", "none", 1, "item-fee-detail", "ion-no-padding"], [1, "fee-detail", 3, "innerHTML"], ["class", "devider-line-info-item", 4, "ngIf"], [1, "devider-line-info-item"], ["lines", "none", 1, "section-content", "section-due-date", "margin-top-10"], [1, "section-title-bold"], ["class", "fee-title", 4, "ngIf"], [1, "margin-top-10", "plan", "cf"], [1, "amo-button", "btn-default", 3, "click"]],
        template: function PaymentInforPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PaymentInforPage_ion_item_4_Template, 7, 5, "ion-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-text", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-content", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PaymentInforPage_ion_list_23_Template, 10, 5, "ion-list", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PaymentInforPage_ion_item_24_Template, 4, 3, "ion-item", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PaymentInforPage_section_25_Template, 2, 1, "section", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-toolbar", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PaymentInforPage_section_27_Template, 1, 0, "section", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PaymentInforPage_ion_button_28_Template, 3, 3, "ion-button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentInforPage_Template_ion_button_click_29_listener() {
              return ctx.paymentComplainModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settingPaymentMode == "active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.titlePage, " - ", ctx.appartment, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 13, "PAYMENT.number_money_label"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.formatMoney(ctx.totalCash), "\u0111");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 15, "PAYMENT_INFOR.payment_date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formatString(ctx.paymentEndAt));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listPaymentContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listPaymentHistoryContent.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listPaymentHistoryContent.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentStatus == "publish" || ctx.paymentStatus == "outdate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentStatus == "publish" || ctx.paymentStatus == "outdate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 17, "PAYMENT_INFOR.complain"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: [".payment-bank-infor-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  --min-height: 22px;\n  color: #556080;\n}\n\n.payment-bank-infor-text-detail[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  --min-height: 22px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.payment-bank-text-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 19px;\n  \n  --min-height: 24px;\n  color: #556080;\n}\n\n.icon-color[_ngcontent-%COMP%] {\n  color: #3880ff;\n}\n\n.payment-infor-card-top[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n}\n\n.payment-infor-card[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  border-bottom: 1px solid #f5f5f5;\n  border-radius: 0px !important;\n  box-shadow: none;\n}\n\n.custom-col-9[_ngcontent-%COMP%] {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.custom-col-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.section-grid[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.amountPay-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  color: #009ac9;\n  text-align: right;\n}\n\n.amountPay-unit[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  color: #009ac9;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.conplain-button[_ngcontent-%COMP%] {\n  background: #d3d6d9;\n  --background-focused: #d3d6d9;\n  --background-hover: #d3d6d9;\n  --background: #d3d6d9;\n  --background-activated: #b3b5b8;\n  mix-blend-mode: normal;\n  border-radius: 5px;\n  left: 4.27%;\n  height: 44px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313f;\n  margin-top: 13px;\n  margin-bottom: 13px;\n}\n\n.icon-management[_ngcontent-%COMP%] {\n  color: #51d2b5;\n  font-size: 24px;\n}\n\n.icon-water[_ngcontent-%COMP%] {\n  color: #009ac9;\n  font-size: 24px;\n}\n\n.fee-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 0;\n}\n\n.content-fee[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f4f5f5;\n}\n\n.item-no-border[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.padding-left-0[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.padding-right-0[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n.margin-right-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.payment-method-button[_ngcontent-%COMP%] {\n  --background-focused: #fbfbfb;\n  --background-hover: #fbfbfb;\n  --background: none;\n  --background-activated: #d3d6d9;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  --box-shadow: none;\n  width: 100%;\n  height: 60px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313f;\n  margin: 0;\n}\n\n.payment-method-button.ion-actived[_ngcontent-%COMP%] {\n  border: 1px solid #009ac9;\n}\n\n.payment-method-button-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n}\n\n.payment-method-button-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-right: 10px;\n}\n\n.payment-transfer[_ngcontent-%COMP%] {\n  margin: 20px 10px 20px 0;\n}\n\n.payment-cash[_ngcontent-%COMP%] {\n  margin: 20px 0 20px 10px;\n}\n\n.payment-fee[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n\n\n.cf[_ngcontent-%COMP%]:before, .cf[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.cf[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.cf[_ngcontent-%COMP%] {\n  *zoom: 1;\n}\n\n.payment-info-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background-color: #FFC144;\n  height: 165px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.payment-info-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.payment-info-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 10px;\n  display: block;\n  width: 25px;\n}\n\n.payment-info-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.payment-info-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #f9fcff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.payment-card[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  position: absolute;\n  top: 90px;\n  left: 0;\n  right: 0;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  margin: 10px 15px;\n  z-index: 99;\n}\n\n.payment-card[_ngcontent-%COMP%]   .update-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  min-width: 70%;\n  margin-right: 0px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  color: #221c1e;\n  padding: 0 20px;\n  margin-bottom: 5px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  color: #ffffff;\n  border-radius: 0px 8px;\n  width: 90px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-paid[_ngcontent-%COMP%] {\n  background: #33a54c;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-unpaid[_ngcontent-%COMP%] {\n  background: #FFC144;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-pending[_ngcontent-%COMP%] {\n  background: #f2c94c;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-outdate[_ngcontent-%COMP%] {\n  background: #e23a28;\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 42px;\n  left: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 42px;\n  right: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .money-title[_ngcontent-%COMP%] {\n  max-width: 55px;\n  margin-right: 0px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n  font-weight: 600;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .mone-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  color: #FFC144;\n  margin-right: 0px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .btn-paid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  --background: linear-gradient(180deg, #ffc144 0%, #ee9a1c 100%);\n  border-radius: 8px;\n  font-size: 14px;\n  color: #ffffff;\n}\n\n.payment-info-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  --background: rgba(249, 252, 255, 1);\n  --padding-top: 60px;\n  --padding-end: 15px;\n  --padding-start: 15px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .section-content-fee[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .icon-parking[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .amount-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #FFC144;\n  margin-right: 0px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  font-weight: 600;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .icon-view-detail[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 20px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .item-fee-detail[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: height 0.09s all linear;\n  box-shadow: none;\n  --min-height: 30px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-detail[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313f;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-due-date[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-due-date[_ngcontent-%COMP%]   .section-title-bold[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n  font-weight: bold;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .section-due-date[_ngcontent-%COMP%]   .due-date[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #221c1e;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%] {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  margin-top: 30px;\n  text-align: center;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  margin-left: -15px;\n  width: 100vw;\n  border-radius: 10px;\n  padding-top: 10px;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: normal;\n}\n\n.payment-info-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.devider-line-info-item[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1pbmZvci9wYXltZW50LWluZm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsbURBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUVFLGFBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFFRSxhQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7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QUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVVOOztBQU5FO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVFKOztBQVBJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBU047O0FBUEk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBU047O0FBSkE7RUFDRSwwQkFBQTtBQU9GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC1pbmZvci9wYXltZW50LWluZm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWJhbmstaW5mb3ItdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG5cclxuICAtLW1pbi1oZWlnaHQ6IDIycHg7XHJcbiAgY29sb3I6ICM1NTYwODA7XHJcbn1cclxuXHJcbi5wYXltZW50LWJhbmstaW5mb3ItdGV4dC1kZXRhaWwge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuICAtLW1pbi1oZWlnaHQ6IDIycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnBheW1lbnQtYmFuay10ZXh0LXRpdGxlIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjNTU2MDgwO1xyXG59XHJcblxyXG4uaWNvbi1jb2xvciB7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbn1cclxuXHJcbi5wYXltZW50LWluZm9yLWNhcmQtdG9wIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMjMsIDIxLCA0OCwgMC4xMDI1NDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnBheW1lbnQtaW5mb3ItY2FyZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sLTkge1xyXG4gIC1tcy1mbGV4OiAwIDAgNzUlO1xyXG4gIGZsZXg6IDAgMCA3NSU7XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcbn1cclxuLmN1c3RvbS1jb2wtMyB7XHJcbiAgLW1zLWZsZXg6IDAgMCAyNSU7XHJcbiAgZmxleDogMCAwIDI1JTtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxufVxyXG4uc2VjdGlvbi1ncmlkIHtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uYW1vdW50UGF5LW51bWJlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5hbW91bnRQYXktdW5pdCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY29ucGxhaW4tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZDNkNmQ5O1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjZDNkNmQ5O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI2QzZDZkOTtcclxuICAtLWJhY2tncm91bmQ6ICNkM2Q2ZDk7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2IzYjViODtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBsZWZ0OiA0LjI3JTtcclxuICAvLyB3aWR0aDogOTEuNDYlO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG59XHJcbi5pY29uLW1hbmFnZW1lbnQge1xyXG4gIGNvbG9yOiAjNTFkMmI1O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uaWNvbi13YXRlciB7XHJcbiAgY29sb3I6ICMwMDlhYzk7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5mZWUtY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG4uY29udGVudC1mZWUge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNWY1O1xyXG59XHJcblxyXG4uaXRlbS1uby1ib3JkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnBhZGRpbmctbGVmdC0wIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLnBhZGRpbmctcmlnaHQtMCB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG4ubWFyZ2luLXJpZ2h0LTEwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wYXltZW50LW1ldGhvZC1idXR0b24ge1xyXG4gIC8vIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNmYmZiZmI7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjZmJmYmZiO1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDNkNmQ5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAvLyBsZWZ0OiA0LjI3JTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ucGF5bWVudC1tZXRob2QtYnV0dG9uLmlvbi1hY3RpdmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5YWM5O1xyXG59XHJcbi5wYXltZW50LW1ldGhvZC1idXR0b24tbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxufVxyXG4ucGF5bWVudC1tZXRob2QtYnV0dG9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnBheW1lbnQtdHJhbnNmZXIge1xyXG4gIG1hcmdpbjogMjBweCAxMHB4IDIwcHggMDtcclxufVxyXG4ucGF5bWVudC1jYXNoIHtcclxuICBtYXJnaW46IDIwcHggMCAyMHB4IDEwcHg7XHJcbn1cclxuLnBheW1lbnQtZmVlIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLy8gY3NzIG5ldyAgPT09PT09PT09PT09PT09XHJcblxyXG4vKiBDTEVBUkZJWCAqL1xyXG5cclxuLmNmOmJlZm9yZSxcclxuLmNmOmFmdGVyIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5jZjphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jZiB7XHJcbiAgKnpvb206IDE7XHJcbn1cclxuXHJcbi5wYXltZW50LWluZm8taGVhZGVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgaGVpZ2h0OiAxNjVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgLmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIC0taWNvbi1mb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDFweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDAgMCByZ2JhKDI0OSwgMjUyLCAyNTUsIDEpO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxufVxyXG4ucGF5bWVudC1jYXJkIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDkwcHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG5cclxuICAudXBkYXRlLXRpbWUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIG1pbi13aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5wYXltZW50LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAucGF5bWVudC1jYXJkLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICAuYmFkZ2Utc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA4cHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAuYmFkZ2UtcGFpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzNhNTRjO1xyXG4gIH1cclxuICAuYmFkZ2UtdW5wYWlkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgfVxyXG4gIC5iYWRnZS1wZW5kaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmM5NGM7XHJcbiAgfVxyXG4gIC5iYWRnZS1vdXRkYXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMjNhMjg7XHJcbiAgfVxyXG4gIC5kZXZpZGVyLWxpbmUtaW5mby1wYXltZW50IHtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0MnB4O1xyXG4gICAgICBsZWZ0OiAtOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0MnB4O1xyXG4gICAgICByaWdodDogLThweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBheW1lbnQtbW9uZXktaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAubW9uZXktdGl0bGUge1xyXG4gICAgICBtYXgtd2lkdGg6IDU1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5tb25lLW51bWJlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogI0ZGQzE0NDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXBhaWQge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZjMTQ0IDAlLCAjZWU5YTFjIDEwMCUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wYXltZW50LWluZm8tY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNTIsIDI1NSwgMSk7XHJcbiAgLS1wYWRkaW5nLXRvcDogNjBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAuc2VjdGlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLnNlY3Rpb24tY29udGVudC1mZWUge1xyXG4gICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIH1cclxuICAgIC5mZWUtaXRlbSB7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgLmljb24tcGFya2luZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hbW91bnQtbnVtYmVyIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5mZWUtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzIxMzEzZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5pY29uLXZpZXctZGV0YWlsIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5pdGVtLWZlZS1kZXRhaWwge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4wOXMgYWxsIGxpbmVhcjtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1taW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmZlZS1kZXRhaWwge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzIxMzEzZjtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlY3Rpb24tZHVlLWRhdGUge1xyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi10aXRsZS1ib2xkIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmR1ZS1kYXRlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlvbi10b29sYmFyLXBheW1lbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAuYnRuLWRlZmF1bHQge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmRlZmF1bHQtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZXZpZGVyLWxpbmUtaW5mby1pdGVtIHtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaymentInforPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-payment-infor',
            templateUrl: './payment-infor.page.html',
            styleUrls: ['./payment-infor.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fmpE":
    /*!*************************************************************!*\
      !*** ./src/app/pages/payment-infor/payment-infor.module.ts ***!
      \*************************************************************/

    /*! exports provided: PaymentInforPageModule */

    /***/
    function fmpE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentInforPageModule", function () {
        return PaymentInforPageModule;
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


      var _payment_infor_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payment-infor.page */
      "0plj");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _payment_infor_page__WEBPACK_IMPORTED_MODULE_5__["PaymentInforPage"]
      }];

      var PaymentInforPageModule = function PaymentInforPageModule() {
        _classCallCheck(this, PaymentInforPageModule);
      };

      PaymentInforPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PaymentInforPageModule
      });
      PaymentInforPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PaymentInforPageModule_Factory(t) {
          return new (t || PaymentInforPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentInforPageModule, {
          declarations: [_payment_infor_page__WEBPACK_IMPORTED_MODULE_5__["PaymentInforPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentInforPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_payment_infor_page__WEBPACK_IMPORTED_MODULE_5__["PaymentInforPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-payment-infor-payment-infor-module-es5.js.map