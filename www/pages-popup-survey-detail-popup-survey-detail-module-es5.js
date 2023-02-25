(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-survey-detail-popup-survey-detail-module"], {
    /***/
    "YoyW":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/popup-survey-detail/popup-survey-detail.module.ts ***!
      \*************************************************************************/

    /*! exports provided: PopupSurveyDetailPageModule */

    /***/
    function YoyW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupSurveyDetailPageModule", function () {
        return PopupSurveyDetailPageModule;
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


      var _popup_survey_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popup-survey-detail-routing.module */
      "ofGW");
      /* harmony import */


      var _popup_survey_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popup-survey-detail.page */
      "EKRP");

      var PopupSurveyDetailPageModule = function PopupSurveyDetailPageModule() {
        _classCallCheck(this, PopupSurveyDetailPageModule);
      };

      PopupSurveyDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: PopupSurveyDetailPageModule
      });
      PopupSurveyDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function PopupSurveyDetailPageModule_Factory(t) {
          return new (t || PopupSurveyDetailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _popup_survey_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupSurveyDetailPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopupSurveyDetailPageModule, {
          declarations: [_popup_survey_detail_page__WEBPACK_IMPORTED_MODULE_6__["PopupSurveyDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _popup_survey_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupSurveyDetailPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupSurveyDetailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _popup_survey_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupSurveyDetailPageRoutingModule"]],
            declarations: [_popup_survey_detail_page__WEBPACK_IMPORTED_MODULE_6__["PopupSurveyDetailPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ofGW":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/popup-survey-detail/popup-survey-detail-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: PopupSurveyDetailPageRoutingModule */

    /***/
    function ofGW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupSurveyDetailPageRoutingModule", function () {
        return PopupSurveyDetailPageRoutingModule;
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


      var _popup_survey_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popup-survey-detail.page */
      "EKRP");

      var routes = [{
        path: '',
        component: _popup_survey_detail_page__WEBPACK_IMPORTED_MODULE_3__["PopupSurveyDetailPage"]
      }];

      var PopupSurveyDetailPageRoutingModule = function PopupSurveyDetailPageRoutingModule() {
        _classCallCheck(this, PopupSurveyDetailPageRoutingModule);
      };

      PopupSurveyDetailPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupSurveyDetailPageRoutingModule
      });
      PopupSurveyDetailPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupSurveyDetailPageRoutingModule_Factory(t) {
          return new (t || PopupSurveyDetailPageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupSurveyDetailPageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupSurveyDetailPageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-survey-detail-popup-survey-detail-module-es5.js.map