(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-change-time-order-popup-change-time-order-module"], {
    /***/
    "IaWD":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/popup-change-time-order/popup-change-time-order.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: PopupChangeTimeOrderPageModule */

    /***/
    function IaWD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupChangeTimeOrderPageModule", function () {
        return PopupChangeTimeOrderPageModule;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _popup_change_time_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popup-change-time-order-routing.module */
      "NR4E");
      /* harmony import */


      var _popup_change_time_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popup-change-time-order.page */
      "Mk8m");

      var PopupChangeTimeOrderPageModule = function PopupChangeTimeOrderPageModule() {
        _classCallCheck(this, PopupChangeTimeOrderPageModule);
      };

      PopupChangeTimeOrderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupChangeTimeOrderPageModule
      });
      PopupChangeTimeOrderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupChangeTimeOrderPageModule_Factory(t) {
          return new (t || PopupChangeTimeOrderPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_change_time_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupChangeTimeOrderPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupChangeTimeOrderPageModule, {
          declarations: [_popup_change_time_order_page__WEBPACK_IMPORTED_MODULE_6__["PopupChangeTimeOrderPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_change_time_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupChangeTimeOrderPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupChangeTimeOrderPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_change_time_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupChangeTimeOrderPageRoutingModule"]],
            declarations: [_popup_change_time_order_page__WEBPACK_IMPORTED_MODULE_6__["PopupChangeTimeOrderPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "NR4E":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/popup-change-time-order/popup-change-time-order-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: PopupChangeTimeOrderPageRoutingModule */

    /***/
    function NR4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupChangeTimeOrderPageRoutingModule", function () {
        return PopupChangeTimeOrderPageRoutingModule;
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


      var _popup_change_time_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popup-change-time-order.page */
      "Mk8m");

      var routes = [{
        path: '',
        component: _popup_change_time_order_page__WEBPACK_IMPORTED_MODULE_3__["PopupChangeTimeOrderPage"]
      }];

      var PopupChangeTimeOrderPageRoutingModule = function PopupChangeTimeOrderPageRoutingModule() {
        _classCallCheck(this, PopupChangeTimeOrderPageRoutingModule);
      };

      PopupChangeTimeOrderPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupChangeTimeOrderPageRoutingModule
      });
      PopupChangeTimeOrderPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupChangeTimeOrderPageRoutingModule_Factory(t) {
          return new (t || PopupChangeTimeOrderPageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupChangeTimeOrderPageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupChangeTimeOrderPageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-change-time-order-popup-change-time-order-module-es5.js.map