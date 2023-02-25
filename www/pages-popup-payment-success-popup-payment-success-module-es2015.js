(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-payment-success-popup-payment-success-module"],{

/***/ "0Xou":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/popup-payment-success/popup-payment-success.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PopupPaymentSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentSuccessPageModule", function() { return PopupPaymentSuccessPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popup_payment_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-payment-success-routing.module */ "ClQz");
/* harmony import */ var _popup_payment_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-payment-success.page */ "8Q1X");








class PopupPaymentSuccessPageModule {
}
PopupPaymentSuccessPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupPaymentSuccessPageModule });
PopupPaymentSuccessPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupPaymentSuccessPageModule_Factory(t) { return new (t || PopupPaymentSuccessPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _popup_payment_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentSuccessPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupPaymentSuccessPageModule, { declarations: [_popup_payment_success_page__WEBPACK_IMPORTED_MODULE_6__["PopupPaymentSuccessPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _popup_payment_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentSuccessPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentSuccessPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _popup_payment_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupPaymentSuccessPageRoutingModule"]
                ],
                declarations: [_popup_payment_success_page__WEBPACK_IMPORTED_MODULE_6__["PopupPaymentSuccessPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ClQz":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/popup-payment-success/popup-payment-success-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PopupPaymentSuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentSuccessPageRoutingModule", function() { return PopupPaymentSuccessPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_payment_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-payment-success.page */ "8Q1X");






const routes = [
    {
        path: '',
        component: _popup_payment_success_page__WEBPACK_IMPORTED_MODULE_3__["PopupPaymentSuccessPage"]
    }
];
class PopupPaymentSuccessPageRoutingModule {
}
PopupPaymentSuccessPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupPaymentSuccessPageRoutingModule });
PopupPaymentSuccessPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupPaymentSuccessPageRoutingModule_Factory(t) { return new (t || PopupPaymentSuccessPageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupPaymentSuccessPageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentSuccessPageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-payment-success-popup-payment-success-module-es2015.js.map