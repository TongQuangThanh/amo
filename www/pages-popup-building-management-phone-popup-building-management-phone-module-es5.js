(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-building-management-phone-popup-building-management-phone-module"], {
    /***/
    "2wD5":
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/popup-building-management-phone/popup-building-management-phone.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: PopupBuildingManagementPhonePageModule */

    /***/
    function wD5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupBuildingManagementPhonePageModule", function () {
        return PopupBuildingManagementPhonePageModule;
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


      var _popup_building_management_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./popup-building-management-phone-routing.module */
      "r+yL");
      /* harmony import */


      var _popup_building_management_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./popup-building-management-phone.page */
      "z5Hz");

      var PopupBuildingManagementPhonePageModule = function PopupBuildingManagementPhonePageModule() {
        _classCallCheck(this, PopupBuildingManagementPhonePageModule);
      };

      PopupBuildingManagementPhonePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupBuildingManagementPhonePageModule
      });
      PopupBuildingManagementPhonePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupBuildingManagementPhonePageModule_Factory(t) {
          return new (t || PopupBuildingManagementPhonePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_building_management_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupBuildingManagementPhonePageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupBuildingManagementPhonePageModule, {
          declarations: [_popup_building_management_phone_page__WEBPACK_IMPORTED_MODULE_6__["PopupBuildingManagementPhonePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_building_management_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupBuildingManagementPhonePageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupBuildingManagementPhonePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _popup_building_management_phone_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupBuildingManagementPhonePageRoutingModule"]],
            declarations: [_popup_building_management_phone_page__WEBPACK_IMPORTED_MODULE_6__["PopupBuildingManagementPhonePage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "r+yL":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/popup-building-management-phone/popup-building-management-phone-routing.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: PopupBuildingManagementPhonePageRoutingModule */

    /***/
    function rYL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupBuildingManagementPhonePageRoutingModule", function () {
        return PopupBuildingManagementPhonePageRoutingModule;
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


      var _popup_building_management_phone_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popup-building-management-phone.page */
      "z5Hz");

      var routes = [{
        path: '',
        component: _popup_building_management_phone_page__WEBPACK_IMPORTED_MODULE_3__["PopupBuildingManagementPhonePage"]
      }];

      var PopupBuildingManagementPhonePageRoutingModule = function PopupBuildingManagementPhonePageRoutingModule() {
        _classCallCheck(this, PopupBuildingManagementPhonePageRoutingModule);
      };

      PopupBuildingManagementPhonePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopupBuildingManagementPhonePageRoutingModule
      });
      PopupBuildingManagementPhonePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PopupBuildingManagementPhonePageRoutingModule_Factory(t) {
          return new (t || PopupBuildingManagementPhonePageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupBuildingManagementPhonePageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupBuildingManagementPhonePageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-building-management-phone-popup-building-management-phone-module-es5.js.map