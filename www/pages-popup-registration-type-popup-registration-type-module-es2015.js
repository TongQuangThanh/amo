(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-registration-type-popup-registration-type-module"],{

/***/ "13WI":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/popup-registration-type/popup-registration-type.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PopupRegistrationTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupRegistrationTypePageModule", function() { return PopupRegistrationTypePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popup_registration_type_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-registration-type-routing.module */ "Tiaw");
/* harmony import */ var _popup_registration_type_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-registration-type.page */ "Y4cL");








class PopupRegistrationTypePageModule {
}
PopupRegistrationTypePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupRegistrationTypePageModule });
PopupRegistrationTypePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupRegistrationTypePageModule_Factory(t) { return new (t || PopupRegistrationTypePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _popup_registration_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupRegistrationTypePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupRegistrationTypePageModule, { declarations: [_popup_registration_type_page__WEBPACK_IMPORTED_MODULE_6__["PopupRegistrationTypePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _popup_registration_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupRegistrationTypePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupRegistrationTypePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _popup_registration_type_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupRegistrationTypePageRoutingModule"]
                ],
                declarations: [_popup_registration_type_page__WEBPACK_IMPORTED_MODULE_6__["PopupRegistrationTypePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Tiaw":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/popup-registration-type/popup-registration-type-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PopupRegistrationTypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupRegistrationTypePageRoutingModule", function() { return PopupRegistrationTypePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_registration_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-registration-type.page */ "Y4cL");






const routes = [
    {
        path: '',
        component: _popup_registration_type_page__WEBPACK_IMPORTED_MODULE_3__["PopupRegistrationTypePage"]
    }
];
class PopupRegistrationTypePageRoutingModule {
}
PopupRegistrationTypePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupRegistrationTypePageRoutingModule });
PopupRegistrationTypePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupRegistrationTypePageRoutingModule_Factory(t) { return new (t || PopupRegistrationTypePageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupRegistrationTypePageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupRegistrationTypePageRoutingModule, [{
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
//# sourceMappingURL=pages-popup-registration-type-popup-registration-type-module-es2015.js.map