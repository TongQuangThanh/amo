(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-delete-vehicle-popup-delete-vehicle-module"],{

/***/ "vDhu":
/*!***************************************************************************!*\
  !*** ./src/app/pages/popup-delete-vehicle/popup-delete-vehicle.module.ts ***!
  \***************************************************************************/
/*! exports provided: PopupDeleteVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDeleteVehiclePageModule", function() { return PopupDeleteVehiclePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popup_delete_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-delete-vehicle-routing.module */ "zBYt");
/* harmony import */ var _popup_delete_vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-delete-vehicle.page */ "m+Nk");








class PopupDeleteVehiclePageModule {
}
PopupDeleteVehiclePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupDeleteVehiclePageModule });
PopupDeleteVehiclePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupDeleteVehiclePageModule_Factory(t) { return new (t || PopupDeleteVehiclePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _popup_delete_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupDeleteVehiclePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupDeleteVehiclePageModule, { declarations: [_popup_delete_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["PopupDeleteVehiclePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _popup_delete_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupDeleteVehiclePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupDeleteVehiclePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _popup_delete_vehicle_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupDeleteVehiclePageRoutingModule"]
                ],
                declarations: [_popup_delete_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["PopupDeleteVehiclePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zBYt":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/popup-delete-vehicle/popup-delete-vehicle-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PopupDeleteVehiclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDeleteVehiclePageRoutingModule", function() { return PopupDeleteVehiclePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_delete_vehicle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-delete-vehicle.page */ "m+Nk");






const routes = [
    {
        path: '',
        component: _popup_delete_vehicle_page__WEBPACK_IMPORTED_MODULE_3__["PopupDeleteVehiclePage"]
    }
];
class PopupDeleteVehiclePageRoutingModule {
}
PopupDeleteVehiclePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupDeleteVehiclePageRoutingModule });
PopupDeleteVehiclePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupDeleteVehiclePageRoutingModule_Factory(t) { return new (t || PopupDeleteVehiclePageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupDeleteVehiclePageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupDeleteVehiclePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-popup-delete-vehicle-popup-delete-vehicle-module-es2015.js.map