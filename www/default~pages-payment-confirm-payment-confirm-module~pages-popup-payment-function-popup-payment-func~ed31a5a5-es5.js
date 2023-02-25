(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-payment-confirm-payment-confirm-module~pages-popup-payment-function-popup-payment-func~ed31a5a5"], {
    /***/
    "u6YQ":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/popup-payment-function/popup-payment-function.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: PopupPaymentFunctionPage */

    /***/
    function u6YQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupPaymentFunctionPage", function () {
        return PopupPaymentFunctionPage;
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


      var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "zzaN");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/translate-config.service */
      "ZjVV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PopupPaymentFunctionPage_ion_card_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentFunctionPage_ion_card_9_Template_ion_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.copyBankNumber();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/icon/payment/money2.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "PAYMENT_INFOR.modal_change_account_number"), "", ctx_r0.paymentCate == null ? null : ctx_r0.paymentCate.transfer == null ? null : ctx_r0.paymentCate.transfer.bankAccountNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/icon/payment/copy.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.paymentCate == null ? null : ctx_r0.paymentCate.transfer == null ? null : ctx_r0.paymentCate.transfer.bankAccountHolder, " - ", ctx_r0.paymentCate == null ? null : ctx_r0.paymentCate.transfer == null ? null : ctx_r0.paymentCate.transfer.bankName, "");
        }
      }

      function PopupPaymentFunctionPage_ion_card_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentFunctionPage_ion_card_10_Template_ion_icon_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.copyBankNumber1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/icon/payment/money2.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "PAYMENT_INFOR.modal_change_account_number"), "", ctx_r1.paymentCate == null ? null : ctx_r1.paymentCate.transfer1 == null ? null : ctx_r1.paymentCate.transfer1.bankAccountNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/icon/payment/copy.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.paymentCate == null ? null : ctx_r1.paymentCate.transfer1 == null ? null : ctx_r1.paymentCate.transfer1.bankAccountHolder, " - ", ctx_r1.paymentCate == null ? null : ctx_r1.paymentCate.transfer1 == null ? null : ctx_r1.paymentCate.transfer1.bankName, "");
        }
      }

      function PopupPaymentFunctionPage_ion_card_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "../assets/icon/payment/money1.svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "PAYMENT_INFOR.modal_change_cash"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.paymentCate == null ? null : ctx_r2.paymentCate.cash == null ? null : ctx_r2.paymentCate.cash.description);
        }
      }

      var PopupPaymentFunctionPage = /*#__PURE__*/function () {
        function PopupPaymentFunctionPage(modalController, clipboard, alertService, translate, translateConfigService, navParams) {
          _classCallCheck(this, PopupPaymentFunctionPage);

          this.modalController = modalController;
          this.clipboard = clipboard;
          this.alertService = alertService;
          this.translate = translate;
          this.translateConfigService = translateConfigService;
          this.navParams = navParams;
          this.paymentMethodList = [];
          this.translateConfigService.getDefaultLanguage();
        }

        _createClass(PopupPaymentFunctionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.paymentCate = this.navParams.data.paymentCate;
            this.paymentMethodList = this.navParams.data.paymentMethodList || [];
            this.paymentType = this.navParams.data.paymentType;
          }
        }, {
          key: "changeBanksMethod",
          value: function changeBanksMethod(id) {
            this.paymentMethodList.forEach(function (item) {
              if (item.key == id) {
                item.isSelected = true;
              } else {
                item.isSelected = false;
              }
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss({});
          }
        }, {
          key: "acceptPayment",
          value: function acceptPayment() {
            var paymentType = "cash";

            if (this.paymentType == 'payment_transfer') {
              paymentType = "transfer";
            } else if (this.paymentType == 'payment_online') {
              paymentType = "online";
            }

            this.modalController.dismiss({
              paymentSelected: paymentType,
              confirm: "ok"
            });
          }
        }, {
          key: "copyBankNumber",
          value: function copyBankNumber() {
            var _a, _b;

            this.clipboard.copy(((_b = (_a = this.paymentCate) === null || _a === void 0 ? void 0 : _a.transfer) === null || _b === void 0 ? void 0 : _b.bankAccountNumber) || '');
            this.alertService.presentToast(this.translate.instant('PAYMENT_INFOR.message_copy'));
          }
        }, {
          key: "copyBankNumber1",
          value: function copyBankNumber1() {
            var _a, _b;

            this.clipboard.copy(((_b = (_a = this.paymentCate) === null || _a === void 0 ? void 0 : _a.transfer1) === null || _b === void 0 ? void 0 : _b.bankAccountNumber) || '');
            this.alertService.presentToast(this.translate.instant('PAYMENT_INFOR.message_copy'));
          }
        }, {
          key: "formatMoney",
          value: function formatMoney(stringValue) {
            var n = parseInt(stringValue);
            return n.toFixed(0).replace(/./g, function (c, i, a) {
              return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
            });
          }
        }]);

        return PopupPaymentFunctionPage;
      }();

      PopupPaymentFunctionPage.ɵfac = function PopupPaymentFunctionPage_Factory(t) {
        return new (t || PopupPaymentFunctionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]));
      };

      PopupPaymentFunctionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupPaymentFunctionPage,
        selectors: [["app-popup-payment-function"]],
        decls: 12,
        vars: 6,
        consts: [[1, "modal-content-wrap"], [1, "modal-content-container"], ["lines", "none", 1, "header-item"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], ["lines", "none", 1, "modal-title"], [1, "amo-button", "btn-default", 3, "click"], ["class", "ion-no-padding modal-card-item", 4, "ngIf"], [1, "ion-no-padding", "modal-card-item"], ["lines", "none", 1, "card-ion-item"], ["slot", "start", 1, "card-item-icon", 3, "src"], [1, "card-item-title"], [1, "card-icon-copy", 3, "src", "click"], [1, "card-item-sub-title"]],
        template: function PopupPaymentFunctionPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentFunctionPage_Template_ion_buttons_click_3_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-toolbar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentFunctionPage_Template_ion_button_click_6_listener() {
              return ctx.acceptPayment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PopupPaymentFunctionPage_ion_card_9_Template, 10, 8, "ion-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PopupPaymentFunctionPage_ion_card_10_Template, 10, 8, "ion-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PopupPaymentFunctionPage_ion_card_11_Template, 9, 5, "ion-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "PAYMENT_INFOR.confirm"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentType == "payment_transfer" && (ctx.paymentCate == null ? null : ctx.paymentCate.transfer));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentType == "payment_transfer" && (ctx.paymentCate == null ? null : ctx.paymentCate.transfer1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentType == "payment_cash");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["root[_ngcontent-%COMP%] {\n  --borderColor: gray;\n  --charShape: none;\n}\n\n.modal-content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33, 49, 63, 0);\n}\n\n.modal-content-container[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 25px;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  --min-height: 30px;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 30px;\n  justify-content: center;\n  margin: 0;\n  margin-right: -10px;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #221c1e;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-ion-item-active[_ngcontent-%COMP%] {\n  --background: #f974682e !important;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-ion-item[_ngcontent-%COMP%] {\n  --background: #f9fcff;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  --min-height: 50px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-ion-item[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  font-size: 32px;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-ion-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  left: 40px;\n  right: 0;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-ion-item[_ngcontent-%COMP%]   .item-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 40px;\n  right: 0;\n  bottom: 0px;\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-ion-item[_ngcontent-%COMP%]   .item-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  font-size: 12px;\n  line-height: 24px;\n  color: #FFC144;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .other-bank[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  color: #FFC144;\n  margin: 10px 0;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-card-item[_ngcontent-%COMP%] {\n  --background: #f9fcff;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  margin: 10px 0;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-card-item[_ngcontent-%COMP%]   .card-ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-card-item[_ngcontent-%COMP%]   .card-item-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-right: 10px;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-card-item[_ngcontent-%COMP%]   .card-item-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-card-item[_ngcontent-%COMP%]   .card-item-sub-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666666;\n  padding-left: 50px;\n  margin-bottom: 0;\n  margin-top: -12px;\n}\n\n.modal-content-container[_ngcontent-%COMP%]   .modal-card-item[_ngcontent-%COMP%]   .card-item-right[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 24px;\n  color: #FFC144;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtcGF5bWVudC1mdW5jdGlvbi9wb3B1cC1wYXltZW50LWZ1bmN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGlDQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFHRjs7QUFERTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFGSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFJTjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREU7RUFDRSxrQ0FBQTtBQUdKOztBQURFO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUZJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFJTjs7QUFGSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSU47O0FBRkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFGSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREU7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR0o7O0FBRkk7RUFDRSxxQkFBQTtBQUlOOztBQUZJO0VBQ0UsZUFBQTtFQUNELGtCQUFBO0FBSUw7O0FBRkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFGSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSU47O0FBRkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3B1cC1wYXltZW50LWZ1bmN0aW9uL3BvcHVwLXBheW1lbnQtZnVuY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicm9vdCB7XHJcbiAgLS1ib3JkZXJDb2xvcjogZ3JheTtcclxuICAtLWNoYXJTaGFwZTogbm9uZTtcclxufVxyXG4ubW9kYWwtY29udGVudC13cmFwIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMzMsIDQ5LCA2MywgMCk7XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuXHJcbiAgLmhlYWRlci1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICAuYnRuLWNsb3NlLXBvcHVwIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gIH1cclxuICAubW9kYWwtaW9uLWl0ZW0tYWN0aXZlIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5NzQ2ODJlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tb2RhbC1pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWZjZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIC0tbWluLWhlaWdodDogNTBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC5pdGVtLWljb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS10aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1zdWItdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDQwcHg7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1yaWdodCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgfVxyXG4gIH1cclxuICAub3RoZXItYmFuayB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIC5tb2RhbC1jYXJkLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmY2ZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYigwIDAgMCAvIDUlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgLmNhcmQtaW9uLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1pdGVtLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaXRlbS10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaXRlbS1zdWItdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaXRlbS1yaWdodCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentFunctionPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-popup-payment-function',
            templateUrl: './popup-payment-function.page.html',
            styleUrls: ['./popup-payment-function.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
          }, {
            type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]
          }, {
            type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }, {
            type: src_app_translate_config_service__WEBPACK_IMPORTED_MODULE_5__["TranslateConfigService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-payment-confirm-payment-confirm-module~pages-popup-payment-function-popup-payment-func~ed31a5a5-es5.js.map