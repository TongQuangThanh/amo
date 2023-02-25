(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-home-vehicle-add-home-vehicle-module"], {
    /***/
    "S4/P":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/add-home-vehicle/add-home-vehicle.page.ts ***!
      \*****************************************************************/

    /*! exports provided: AddHomeVehiclePage */

    /***/
    function S4P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddHomeVehiclePage", function () {
        return AddHomeVehiclePage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../translate-config.service */
      "ZjVV");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var AddHomeVehiclePage = /*#__PURE__*/function () {
        function AddHomeVehiclePage(translateConfigService) {
          _classCallCheck(this, AddHomeVehiclePage);

          this.translateConfigService = translateConfigService;
          this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        }

        _createClass(AddHomeVehiclePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddHomeVehiclePage;
      }();

      AddHomeVehiclePage.ɵfac = function AddHomeVehiclePage_Factory(t) {
        return new (t || AddHomeVehiclePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"]));
      };

      AddHomeVehiclePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddHomeVehiclePage,
        selectors: [["app-add-home-vehicle"]],
        decls: 8,
        vars: 3,
        consts: [[1, "ion-no-border"], [1, "header-toolbar"], ["slot", "start"], ["text", "", "icon", "chevron-back"]],
        template: function AddHomeVehiclePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-content");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, "ADD_HOME_VEHICLE.title"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1ob21lLXZlaGljbGUvYWRkLWhvbWUtdmVoaWNsZS5wYWdlLnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddHomeVehiclePage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-home-vehicle',
            templateUrl: './add-home-vehicle.page.html',
            styleUrls: ['./add-home-vehicle.page.scss']
          }]
        }], function () {
          return [{
            type: _translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "h92T":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/add-home-vehicle/add-home-vehicle.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AddHomeVehiclePageModule */

    /***/
    function h92T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddHomeVehiclePageModule", function () {
        return AddHomeVehiclePageModule;
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


      var _add_home_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-home-vehicle-routing.module */
      "mmS1");
      /* harmony import */


      var _add_home_vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-home-vehicle.page */
      "S4/P");

      var AddHomeVehiclePageModule = function AddHomeVehiclePageModule() {
        _classCallCheck(this, AddHomeVehiclePageModule);
      };

      AddHomeVehiclePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddHomeVehiclePageModule
      });
      AddHomeVehiclePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddHomeVehiclePageModule_Factory(t) {
          return new (t || AddHomeVehiclePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _add_home_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddHomeVehiclePageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddHomeVehiclePageModule, {
          declarations: [_add_home_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddHomeVehiclePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _add_home_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddHomeVehiclePageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddHomeVehiclePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _add_home_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddHomeVehiclePageRoutingModule"]],
            declarations: [_add_home_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddHomeVehiclePage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mmS1":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/add-home-vehicle/add-home-vehicle-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AddHomeVehiclePageRoutingModule */

    /***/
    function mmS1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddHomeVehiclePageRoutingModule", function () {
        return AddHomeVehiclePageRoutingModule;
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


      var _add_home_vehicle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-home-vehicle.page */
      "S4/P");

      var routes = [{
        path: '',
        component: _add_home_vehicle_page__WEBPACK_IMPORTED_MODULE_3__["AddHomeVehiclePage"]
      }];

      var AddHomeVehiclePageRoutingModule = function AddHomeVehiclePageRoutingModule() {
        _classCallCheck(this, AddHomeVehiclePageRoutingModule);
      };

      AddHomeVehiclePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddHomeVehiclePageRoutingModule
      });
      AddHomeVehiclePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddHomeVehiclePageRoutingModule_Factory(t) {
          return new (t || AddHomeVehiclePageRoutingModule)();
        },
        imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddHomeVehiclePageRoutingModule, {
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddHomeVehiclePageRoutingModule, [{
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
//# sourceMappingURL=pages-add-home-vehicle-add-home-vehicle-module-es5.js.map