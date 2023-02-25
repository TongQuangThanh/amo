(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-feedback-popup-feedback-module"], {
    /***/
    "gMDV":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/popup-feedback/popup-feedback-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PopupFeedbackPageRoutingModule */

    /***/
    function gMDV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupFeedbackPageRoutingModule", function () {
        return PopupFeedbackPageRoutingModule;
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


      var _popup_feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popup-feedback.page */
      "OkWD");

      var routes = [{
        path: '',
        component: _popup_feedback_page__WEBPACK_IMPORTED_MODULE_3__["PopupFeedbackPage"]
      }];

      var PopupFeedbackPageRoutingModule = function PopupFeedbackPageRoutingModule() {
        _classCallCheck(this, PopupFeedbackPageRoutingModule);
      };

      PopupFeedbackPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupFeedbackPageRoutingModule
      });
      PopupFeedbackPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupFeedbackPageRoutingModule_Factory(t) {
          return new (t || PopupFeedbackPageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupFeedbackPageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupFeedbackPageRoutingModule, [{
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
    "m+bz":
    /*!***************************************************************!*\
      !*** ./src/app/pages/popup-feedback/popup-feedback.module.ts ***!
      \***************************************************************/

    /*! exports provided: PopupFeedbackPageModule */

    /***/
    function mBz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupFeedbackPageModule", function () {
        return PopupFeedbackPageModule;
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


      var _popup_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popup-feedback-routing.module */
      "gMDV");
      /* harmony import */


      var _popup_feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popup-feedback.page */
      "OkWD");

      var PopupFeedbackPageModule = function PopupFeedbackPageModule() {
        _classCallCheck(this, PopupFeedbackPageModule);
      };

      PopupFeedbackPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupFeedbackPageModule
      });
      PopupFeedbackPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupFeedbackPageModule_Factory(t) {
          return new (t || PopupFeedbackPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupFeedbackPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupFeedbackPageModule, {
          declarations: [_popup_feedback_page__WEBPACK_IMPORTED_MODULE_6__["PopupFeedbackPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupFeedbackPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupFeedbackPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupFeedbackPageRoutingModule"]],
            declarations: [_popup_feedback_page__WEBPACK_IMPORTED_MODULE_6__["PopupFeedbackPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-popup-feedback-popup-feedback-module-es5.js.map