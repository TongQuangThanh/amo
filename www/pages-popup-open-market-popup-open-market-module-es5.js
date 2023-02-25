(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-open-market-popup-open-market-module"], {
    /***/
    "ilYD":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/popup-open-market/popup-open-market.module.ts ***!
      \*********************************************************************/

    /*! exports provided: PopupOpenMarketPageModule */

    /***/
    function ilYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupOpenMarketPageModule", function () {
        return PopupOpenMarketPageModule;
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


      var _popup_open_market_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popup-open-market-routing.module */
      "q/T2");
      /* harmony import */


      var _popup_open_market_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popup-open-market.page */
      "5d4O");

      var PopupOpenMarketPageModule = function PopupOpenMarketPageModule() {
        _classCallCheck(this, PopupOpenMarketPageModule);
      };

      PopupOpenMarketPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupOpenMarketPageModule
      });
      PopupOpenMarketPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupOpenMarketPageModule_Factory(t) {
          return new (t || PopupOpenMarketPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_open_market_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupOpenMarketPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupOpenMarketPageModule, {
          declarations: [_popup_open_market_page__WEBPACK_IMPORTED_MODULE_6__["PopupOpenMarketPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_open_market_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupOpenMarketPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupOpenMarketPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_open_market_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupOpenMarketPageRoutingModule"]],
            declarations: [_popup_open_market_page__WEBPACK_IMPORTED_MODULE_6__["PopupOpenMarketPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "q/T2":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/popup-open-market/popup-open-market-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: PopupOpenMarketPageRoutingModule */

    /***/
    function qT2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupOpenMarketPageRoutingModule", function () {
        return PopupOpenMarketPageRoutingModule;
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


      var _popup_open_market_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popup-open-market.page */
      "5d4O");

      var routes = [{
        path: '',
        component: _popup_open_market_page__WEBPACK_IMPORTED_MODULE_3__["PopupOpenMarketPage"]
      }];

      var PopupOpenMarketPageRoutingModule = function PopupOpenMarketPageRoutingModule() {
        _classCallCheck(this, PopupOpenMarketPageRoutingModule);
      };

      PopupOpenMarketPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupOpenMarketPageRoutingModule
      });
      PopupOpenMarketPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupOpenMarketPageRoutingModule_Factory(t) {
          return new (t || PopupOpenMarketPageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupOpenMarketPageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupOpenMarketPageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-open-market-popup-open-market-module-es5.js.map