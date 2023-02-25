(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-registration-success-popup-registration-success-module"],{

/***/ "wlWw":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/popup-registration-success/popup-registration-success.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PopupRegistrationSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupRegistrationSuccessPageModule", function() { return PopupRegistrationSuccessPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popup_registration_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-registration-success-routing.module */ "ybSG");
/* harmony import */ var _popup_registration_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-registration-success.page */ "6HEc");








class PopupRegistrationSuccessPageModule {
}
PopupRegistrationSuccessPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupRegistrationSuccessPageModule });
PopupRegistrationSuccessPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupRegistrationSuccessPageModule_Factory(t) { return new (t || PopupRegistrationSuccessPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _popup_registration_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupRegistrationSuccessPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupRegistrationSuccessPageModule, { declarations: [_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_6__["PopupRegistrationSuccessPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _popup_registration_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupRegistrationSuccessPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupRegistrationSuccessPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _popup_registration_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupRegistrationSuccessPageRoutingModule"]
                ],
                declarations: [_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_6__["PopupRegistrationSuccessPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ybSG":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/popup-registration-success/popup-registration-success-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: PopupRegistrationSuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupRegistrationSuccessPageRoutingModule", function() { return PopupRegistrationSuccessPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_registration_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-registration-success.page */ "6HEc");






const routes = [
    {
        path: '',
        component: _popup_registration_success_page__WEBPACK_IMPORTED_MODULE_3__["PopupRegistrationSuccessPage"]
    }
];
class PopupRegistrationSuccessPageRoutingModule {
}
PopupRegistrationSuccessPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupRegistrationSuccessPageRoutingModule });
PopupRegistrationSuccessPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupRegistrationSuccessPageRoutingModule_Factory(t) { return new (t || PopupRegistrationSuccessPageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupRegistrationSuccessPageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupRegistrationSuccessPageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-registration-success-popup-registration-success-module-es2015.js.map