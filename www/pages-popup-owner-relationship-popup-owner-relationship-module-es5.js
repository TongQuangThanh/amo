(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-owner-relationship-popup-owner-relationship-module"], {
    /***/
    "6ihV":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/popup-owner-relationship/popup-owner-relationship.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: PopupOwnerRelationshipPageModule */

    /***/
    function ihV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupOwnerRelationshipPageModule", function () {
        return PopupOwnerRelationshipPageModule;
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


      var _popup_owner_relationship_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popup-owner-relationship-routing.module */
      "uvYY");
      /* harmony import */


      var _popup_owner_relationship_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popup-owner-relationship.page */
      "gFyw");

      var PopupOwnerRelationshipPageModule = function PopupOwnerRelationshipPageModule() {
        _classCallCheck(this, PopupOwnerRelationshipPageModule);
      };

      PopupOwnerRelationshipPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupOwnerRelationshipPageModule
      });
      PopupOwnerRelationshipPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupOwnerRelationshipPageModule_Factory(t) {
          return new (t || PopupOwnerRelationshipPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_owner_relationship_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupOwnerRelationshipPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupOwnerRelationshipPageModule, {
          declarations: [_popup_owner_relationship_page__WEBPACK_IMPORTED_MODULE_6__["PopupOwnerRelationshipPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_owner_relationship_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupOwnerRelationshipPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupOwnerRelationshipPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_owner_relationship_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupOwnerRelationshipPageRoutingModule"]],
            declarations: [_popup_owner_relationship_page__WEBPACK_IMPORTED_MODULE_6__["PopupOwnerRelationshipPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uvYY":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/popup-owner-relationship/popup-owner-relationship-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: PopupOwnerRelationshipPageRoutingModule */

    /***/
    function uvYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupOwnerRelationshipPageRoutingModule", function () {
        return PopupOwnerRelationshipPageRoutingModule;
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


      var _popup_owner_relationship_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popup-owner-relationship.page */
      "gFyw");

      var routes = [{
        path: '',
        component: _popup_owner_relationship_page__WEBPACK_IMPORTED_MODULE_3__["PopupOwnerRelationshipPage"]
      }];

      var PopupOwnerRelationshipPageRoutingModule = function PopupOwnerRelationshipPageRoutingModule() {
        _classCallCheck(this, PopupOwnerRelationshipPageRoutingModule);
      };

      PopupOwnerRelationshipPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupOwnerRelationshipPageRoutingModule
      });
      PopupOwnerRelationshipPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupOwnerRelationshipPageRoutingModule_Factory(t) {
          return new (t || PopupOwnerRelationshipPageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupOwnerRelationshipPageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupOwnerRelationshipPageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-owner-relationship-popup-owner-relationship-module-es5.js.map