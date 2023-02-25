(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-service-success-order-service-success-module"], {
    /***/
    "9VMO":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/order-service-success/order-service-success.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: OrderServiceSuccessPageModule */

    /***/
    function VMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderServiceSuccessPageModule", function () {
        return OrderServiceSuccessPageModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var _order_service_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-service-success-routing.module */
      "dSoa");
      /* harmony import */


      var _order_service_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-service-success.page */
      "dB6d");

      var OrderServiceSuccessPageModule = function OrderServiceSuccessPageModule() {
        _classCallCheck(this, OrderServiceSuccessPageModule);
      };

      OrderServiceSuccessPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OrderServiceSuccessPageModule
      });
      OrderServiceSuccessPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OrderServiceSuccessPageModule_Factory(t) {
          return new (t || OrderServiceSuccessPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _order_service_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderServiceSuccessPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderServiceSuccessPageModule, {
          declarations: [_order_service_success_page__WEBPACK_IMPORTED_MODULE_6__["OrderServiceSuccessPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _order_service_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderServiceSuccessPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderServiceSuccessPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _order_service_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderServiceSuccessPageRoutingModule"]],
            declarations: [_order_service_success_page__WEBPACK_IMPORTED_MODULE_6__["OrderServiceSuccessPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dB6d":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/order-service-success/order-service-success.page.ts ***!
      \***************************************************************************/

    /*! exports provided: OrderServiceSuccessPage */

    /***/
    function dB6d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderServiceSuccessPage", function () {
        return OrderServiceSuccessPage;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var OrderServiceSuccessPage = /*#__PURE__*/function () {
        function OrderServiceSuccessPage(navCtrl) {
          _classCallCheck(this, OrderServiceSuccessPage);

          this.navCtrl = navCtrl;
        }

        _createClass(OrderServiceSuccessPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBackHistory",
          value: function goBackHistory() {
            this.navCtrl.navigateForward('/history');
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return OrderServiceSuccessPage;
      }();

      OrderServiceSuccessPage.ɵfac = function OrderServiceSuccessPage_Factory(t) {
        return new (t || OrderServiceSuccessPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]));
      };

      OrderServiceSuccessPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderServiceSuccessPage,
        selectors: [["app-order-service-success"]],
        decls: 16,
        vars: 13,
        consts: [["slot", "fixed", 1, "order-success-container", "no-scroll", 3, "scrollEvents"], [1, "ion-no-border", "order-success-header"], ["src", "assets/icon/service-info/orderSuccess.svg", 1, "icon-history"], [1, "header-title"], [1, "order-card-item"], [1, "ion-item-back"], [1, "default-button", "btn-default", 3, "click"], [1, "order-link-item", 3, "click"]],
        template: function OrderServiceSuccessPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderServiceSuccessPage_Template_ion_button_click_10_listener() {
              return ctx.goBackHistory();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderServiceSuccessPage_Template_div_click_13_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollEvents", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "ORDER_SERVICE_RESULT.order_message"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "ORDER_SERVICE_RESULT.order_prompt"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "ORDER_SERVICE_RESULT.order_btn_status"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, "ORDER_SERVICE_RESULT.order_other_service"), " ");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: [".no-scroll[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.padding-top-item[_ngcontent-%COMP%] {\n  --padding-top: 15px !important;\n}\n\n.padding-bottom-item[_ngcontent-%COMP%] {\n  --padding-bottom: 15px !important;\n}\n\n.order-success-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background-color: #FFC144;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 130px;\n}\n\n.order-success-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 36px;\n  text-align: center;\n  color: #ffffff;\n  margin-top: 20px;\n}\n\n.order-success-container[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  --background: #FFC144;\n  border-radius: 12px;\n  margin: 0px 15px;\n}\n\n.order-success-container[_ngcontent-%COMP%]   .order-card-item[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n  margin-top: 10px;\n}\n\n.order-success-container[_ngcontent-%COMP%]   .order-link-item[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  font-size: 16px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #ffffff;\n  margin-top: 30px;\n}\n\n.order-success-container[_ngcontent-%COMP%]   .ion-item-back[_ngcontent-%COMP%] {\n  margin: 0 30px;\n  margin-top: 30px;\n}\n\n.order-success-container[_ngcontent-%COMP%]   .ion-item-back[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  font-size: 16px;\n  text-align: center;\n  color: #FFC144;\n  margin: 0;\n  border-radius: 10px;\n  --background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItc2VydmljZS1zdWNjZXNzL29yZGVyLXNlcnZpY2Utc3VjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUROIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItc2VydmljZS1zdWNjZXNzL29yZGVyLXNlcnZpY2Utc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tc2Nyb2xsIHtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcC1pdGVtIHtcclxuICAtLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS1pdGVtIHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vcmRlci1zdWNjZXNzLWhlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTQ0O1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcblxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbn1cclxuLm9yZGVyLXN1Y2Nlc3MtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAtLWJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW46IDBweCAxNXB4O1xyXG5cclxuICAub3JkZXItY2FyZC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWxpbmstaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1pdGVtLWJhY2sge1xyXG4gICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgIC5kZWZhdWx0LWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI0ZGQzE0NDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderServiceSuccessPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-service-success',
            templateUrl: './order-service-success.page.html',
            styleUrls: ['./order-service-success.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dSoa":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/order-service-success/order-service-success-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: OrderServiceSuccessPageRoutingModule */

    /***/
    function dSoa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderServiceSuccessPageRoutingModule", function () {
        return OrderServiceSuccessPageRoutingModule;
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


      var _order_service_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-service-success.page */
      "dB6d");

      var routes = [{
        path: '',
        component: _order_service_success_page__WEBPACK_IMPORTED_MODULE_3__["OrderServiceSuccessPage"]
      }];

      var OrderServiceSuccessPageRoutingModule = function OrderServiceSuccessPageRoutingModule() {
        _classCallCheck(this, OrderServiceSuccessPageRoutingModule);
      };

      OrderServiceSuccessPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderServiceSuccessPageRoutingModule
      });
      OrderServiceSuccessPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderServiceSuccessPageRoutingModule_Factory(t) {
          return new (t || OrderServiceSuccessPageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderServiceSuccessPageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderServiceSuccessPageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-order-service-success-order-service-success-module-es5.js.map