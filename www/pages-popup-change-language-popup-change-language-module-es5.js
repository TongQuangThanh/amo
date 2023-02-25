(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-change-language-popup-change-language-module"], {
    /***/
    "QBwn":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/popup-change-language/popup-change-language-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: PopupChangeLanguagePageRoutingModule */

    /***/
    function QBwn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupChangeLanguagePageRoutingModule", function () {
        return PopupChangeLanguagePageRoutingModule;
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


      var _popup_change_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popup-change-language.page */
      "nEMZ");

      var routes = [{
        path: '',
        component: _popup_change_language_page__WEBPACK_IMPORTED_MODULE_3__["PopupChangeLanguagePage"]
      }];

      var PopupChangeLanguagePageRoutingModule = function PopupChangeLanguagePageRoutingModule() {
        _classCallCheck(this, PopupChangeLanguagePageRoutingModule);
      };

      PopupChangeLanguagePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupChangeLanguagePageRoutingModule
      });
      PopupChangeLanguagePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupChangeLanguagePageRoutingModule_Factory(t) {
          return new (t || PopupChangeLanguagePageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupChangeLanguagePageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupChangeLanguagePageRoutingModule, [{
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
    "VAiG":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/popup-change-language/popup-change-language.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: PopupChangeLanguagePageModule */

    /***/
    function VAiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupChangeLanguagePageModule", function () {
        return PopupChangeLanguagePageModule;
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


      var _popup_change_language_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popup-change-language-routing.module */
      "QBwn");
      /* harmony import */


      var _popup_change_language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popup-change-language.page */
      "nEMZ");

      var PopupChangeLanguagePageModule = function PopupChangeLanguagePageModule() {
        _classCallCheck(this, PopupChangeLanguagePageModule);
      };

      PopupChangeLanguagePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupChangeLanguagePageModule
      });
      PopupChangeLanguagePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupChangeLanguagePageModule_Factory(t) {
          return new (t || PopupChangeLanguagePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_change_language_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupChangeLanguagePageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupChangeLanguagePageModule, {
          declarations: [_popup_change_language_page__WEBPACK_IMPORTED_MODULE_6__["PopupChangeLanguagePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_change_language_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupChangeLanguagePageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupChangeLanguagePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_change_language_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupChangeLanguagePageRoutingModule"]],
            declarations: [_popup_change_language_page__WEBPACK_IMPORTED_MODULE_6__["PopupChangeLanguagePage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-popup-change-language-popup-change-language-module-es5.js.map