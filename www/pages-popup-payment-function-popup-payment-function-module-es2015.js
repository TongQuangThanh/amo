(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-payment-function-popup-payment-function-module"],{

/***/ "RDOk":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/popup-payment-function/popup-payment-function.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PopupPaymentFunctionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentFunctionPageModule", function() { return PopupPaymentFunctionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popup_payment_function_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-payment-function-routing.module */ "l2pi");
/* harmony import */ var _popup_payment_function_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-payment-function.page */ "u6YQ");








class PopupPaymentFunctionPageModule {
}
PopupPaymentFunctionPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupPaymentFunctionPageModule });
PopupPaymentFunctionPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupPaymentFunctionPageModule_Factory(t) { return new (t || PopupPaymentFunctionPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _popup_payment_function_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentFunctionPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupPaymentFunctionPageModule, { declarations: [_popup_payment_function_page__WEBPACK_IMPORTED_MODULE_6__["PopupPaymentFunctionPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _popup_payment_function_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentFunctionPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentFunctionPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _popup_payment_function_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentFunctionPageRoutingModule"]
                ],
                declarations: [_popup_payment_function_page__WEBPACK_IMPORTED_MODULE_6__["PopupPaymentFunctionPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "l2pi":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/popup-payment-function/popup-payment-function-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PopupPaymentFunctionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentFunctionPageRoutingModule", function() { return PopupPaymentFunctionPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_payment_function_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-payment-function.page */ "u6YQ");






const routes = [
    {
        path: '',
        component: _popup_payment_function_page__WEBPACK_IMPORTED_MODULE_3__["PopupPaymentFunctionPage"]
    }
];
class PopupPaymentFunctionPageRoutingModule {
}
PopupPaymentFunctionPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupPaymentFunctionPageRoutingModule });
PopupPaymentFunctionPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupPaymentFunctionPageRoutingModule_Factory(t) { return new (t || PopupPaymentFunctionPageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupPaymentFunctionPageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentFunctionPageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-payment-function-popup-payment-function-module-es2015.js.map