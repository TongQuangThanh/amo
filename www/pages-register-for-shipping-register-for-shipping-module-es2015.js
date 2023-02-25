(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-for-shipping-register-for-shipping-module"],{

/***/ "FUgn":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/register-for-shipping/register-for-shipping.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterForShippingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterForShippingPageModule", function() { return RegisterForShippingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _register_for_shipping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-for-shipping.page */ "xWwb");









const routes = [
    {
        path: '',
        component: _register_for_shipping_page__WEBPACK_IMPORTED_MODULE_6__["RegisterForShippingPage"]
    }
];
class RegisterForShippingPageModule {
}
RegisterForShippingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterForShippingPageModule });
RegisterForShippingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterForShippingPageModule_Factory(t) { return new (t || RegisterForShippingPageModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterForShippingPageModule, { declarations: [_register_for_shipping_page__WEBPACK_IMPORTED_MODULE_6__["RegisterForShippingPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterForShippingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_register_for_shipping_page__WEBPACK_IMPORTED_MODULE_6__["RegisterForShippingPage"]],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xWwb":
/*!***************************************************************************!*\
  !*** ./src/app/pages/register-for-shipping/register-for-shipping.page.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterForShippingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterForShippingPage", function() { return RegisterForShippingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "KqBo");
/* harmony import */ var _popup_registration_success_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popup-registration-success/popup-registration-success.page */ "6HEc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




















function RegisterForShippingPage_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_24.apartment_placeHolder_1"));
} }
function RegisterForShippingPage_ion_select_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r7.apartment._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.apartment.title + " - " + item_r7.campaign.title);
} }
function RegisterForShippingPage_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_24.datetime_start_placeHolder"));
} }
function RegisterForShippingPage_ion_grid_33_ion_col_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterForShippingPage_ion_grid_33_ion_col_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const image_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.deleteImageToList(image_r9.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterForShippingPage_ion_grid_33_ion_col_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterForShippingPage_ion_grid_33_ion_col_2_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.showAllImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r11.number_of_image - 4, "");
} }
function RegisterForShippingPage_ion_grid_33_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterForShippingPage_ion_grid_33_ion_col_2_button_3_Template, 3, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterForShippingPage_ion_grid_33_ion_col_2_div_4_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r9.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.number_of_image <= 4 || image_r9.index < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.number_of_image > 4 && image_r9.index == 3);
} }
function RegisterForShippingPage_ion_grid_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterForShippingPage_ion_grid_33_ion_col_2_Template, 5, 3, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterForShippingPage_ion_grid_33_Template_ion_item_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.selectImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.list_image_1);
} }
function RegisterForShippingPage_ion_item_34_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterForShippingPage_ion_item_34_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.selectImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "INBOX_29.add_image_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "INBOX_29.add_image_sub_label"));
} }
function RegisterForShippingPage_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 46);
} }
function RegisterForShippingPage_div_43_ion_col_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterForShippingPage_div_43_ion_col_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const image_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.deleteImageToList(image_r22.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r22.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function RegisterForShippingPage_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterForShippingPage_div_43_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.eventButtonClosePopupImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterForShippingPage_div_43_ion_col_12_Template, 6, 1, "ion-col", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterForShippingPage_div_43_Template_ion_item_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.selectImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.list_image);
} }
class RegisterForShippingPage {
    constructor(modalController, loading, navCtrl, apiService, datePipe, translate, alertService, actionSheetController, camera) {
        this.modalController = modalController;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.datePipe = datePipe;
        this.translate = translate;
        this.alertService = alertService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        // image dialog
        this.flag_show_all_image = false;
        this.list_image_select = [];
        this.list_image = [];
        this.list_image_1 = [];
        this.number_of_image = 0;
        this.blobToFile = (theBlob, fileName) => {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return theBlob;
        };
    }
    ngOnInit() {
        this.listDepartmentByID = {};
        this.getListApartment();
        this.button_active = 1;
        this.check_class_button();
        this.form_apartment_id = '';
        this.form_apartment_class = '';
        this.form_start_time = '';
        this.form_start_time_class = '';
        this.form_end_time = '';
        this.form_end_time_class = '';
        this.form_note = '';
        this.list_product = [
            { index: 1, name_product: '', number_of_product: 0, class: '' },
            { index: 2, name_product: '', number_of_product: 0, class: '' },
        ];
    }
    check_class_button() {
        if (this.button_active == 1) {
            this.button_1_class = 'button-active';
            this.button_2_class = 'button-unactive';
        }
        else {
            this.button_2_class = 'button-active';
            this.button_1_class = 'button-unactive';
        }
    }
    ionChangePulldown1(event) {
        if (this.form_apartment_id != '') {
            this.form_apartment_class = 'has-input-value';
        }
        else {
            this.form_apartment_class = '';
        }
    }
    ionChangeStartTime() {
        if (this.form_start_time != '') {
            this.form_start_time_class = 'has-input-value';
        }
        else {
            this.form_start_time_class = '';
        }
        // var date = new Date(this.form_start_time);
        // this.form_start_time_label = this.datePipe.transform(date,"dd/MM/yyyy HH:mm");
    }
    ionChangeEndTime() {
        if (this.form_end_time != '') {
            this.form_end_time_class = 'has-input-value';
        }
        else {
            this.form_end_time_class = '';
        }
        // var date = new Date(this.form_end_time);
        // this.form_end_time_label = this.datePipe.transform(date,"dd/MM/yyyy HH:mm");
    }
    getListApartment() {
        var self = this;
        this.loading.present();
        this.apiService.getListUserApartment().subscribe((result) => {
            //self.listDepartment = result.userApartments;
            self.listDepartment = [];
            for (var i = 0; i < result.userApartments.length; i++) {
                if (result.userApartments[i].campaign.settingRequestTranferGood == "active") {
                    self.listDepartment.push(result.userApartments[i]);
                }
            }
            self.listDepartment.forEach((data, index) => {
                if (index == 0) {
                    this.form_apartment_id = data.apartment._id;
                    this.form_apartment_class = 'has-input-value';
                }
                self.listDepartmentByID[data.apartment._id] = data;
            });
            self.loading.dismiss();
        }, (error) => {
            self.loading.dismiss();
        });
    }
    eventButton1(value) {
        this.button_active = value;
        this.check_class_button();
    }
    addProduct() {
        var self = this;
        self.list_product.push({ index: self.list_product.length + 1, name_product: '', number_of_product: 0, class: '' });
    }
    downNumberProduct(index) {
        var self = this;
        self.list_product.forEach((product) => {
            if (product.index == index && product.number_of_product > 0) {
                product.number_of_product--;
            }
        });
    }
    upNumberProduct(index) {
        var self = this;
        self.list_product.forEach((product) => {
            if (product.index == index && product.number_of_product < 10000) {
                product.number_of_product++;
            }
        });
    }
    ionchangGroup1TextBox() {
        var self = this;
        self.list_product.forEach((product) => {
            if (product.name_product != '') {
                product.class = 'has-input-value';
            }
            else {
                product.class = '';
            }
        });
    }
    eventButtonRegisterNew() {
        var self = this;
        let dataApartment = self.listDepartmentByID[this.form_apartment_id];
        let transferGoods = [];
        self.list_product.forEach((product) => {
            if (product.number_of_product > 0) {
                transferGoods.push({
                    name: product.name_product,
                    number: product.number_of_product,
                });
            }
        });
        let list_attachment = [];
        self.list_image.forEach((image) => {
            list_attachment.push(image.media);
        });
        const params = {
            // category: "",
            title: this.translate.instant('INBOX_24.title'),
            content: this.form_note,
            campaign: dataApartment.campaign._id,
            apartment: this.form_apartment_id,
            // createdBy: "",
            attachments: list_attachment,
            type: 'transfer',
            transferType: this.button_active == 1 ? 'income' : 'outcome',
            transferDateStart: this.form_start_time,
            transferDateEnd: this.form_start_time,
            transferGoods: transferGoods,
        };
        this.loading.present();
        this.apiService.addFeedbackNew(params).subscribe((result) => {
            self.loading.dismiss();
            // self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_sucess'));
            // self.navCtrl.back();
            this.registrationSuccessModal();
        }, (error) => {
            self.loading.dismiss();
            self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_fail'));
        });
    }
    registrationSuccessModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _popup_registration_success_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_9__["PopupRegistrationSuccessPage"],
                componentProps: {}
            });
            return yield modal.present();
        });
    }
    checkActiveButton() {
        var self = this;
        // let is_input_product = false;
        // self.list_product.forEach((product) => {
        //   if (product.name_product != '' && product.number_of_product > 0) {
        //     is_input_product = true;
        //   }
        // });
        if (this.form_apartment_id == '' ||
            this.form_start_time == '' ||
            // || this.form_end_time == ''
            this.form_note == ''
        //  || is_input_product == false
        ) {
            return 'button-inactive';
        }
        else {
            return 'button-active';
        }
    }
    // image
    breakListImage() {
        var self = this;
        var index = 0;
        this.list_image_1 = [];
        this.number_of_image = self.list_image.length;
        for (var i = 0; i < self.number_of_image; i++) {
            self.list_image[i].index = index;
            index++;
            if (index < 5) {
                self.list_image_1.push(self.list_image[i]);
            }
        }
    }
    deleteImageToList(index) {
        var self = this;
        this.list_image.forEach((element) => {
            if (element.index == index) {
                self.list_image.splice(index, 1);
            }
        });
        this.breakListImage();
    }
    showAllImage() {
        this.flag_show_all_image = true;
    }
    eventButtonClosePopupImage() {
        this.flag_show_all_image = false;
    }
    selectImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.translate.instant('COMMON.form_select_image_title'),
                buttons: [
                    {
                        text: this.translate.instant('COMMON.form_select_image_library'),
                        handler: () => {
                            this.checkPicturePermission(this.camera.PictureSourceType.PHOTOLIBRARY);
                        },
                    },
                    {
                        text: this.translate.instant('COMMON.form_select_image_camera'),
                        handler: () => {
                            this.checkPicturePermission(this.camera.PictureSourceType.CAMERA);
                        },
                    },
                    {
                        text: this.translate.instant('COMMON.form_select_image_cancel'),
                        role: 'cancel',
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    checkPicturePermission(sourceType) {
        this.pickImage(sourceType);
    }
    pickImage(sourceType) {
        var self = this;
        const options = {
            quality: 80,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then((imageData) => {
            const base64Define = 'data:image/jpeg;base64,';
            var binaryBlob = this.convertBase64ToBlob(base64Define + imageData);
            const date = new Date().valueOf();
            const formData = new FormData();
            var fileName = 'amoapp' + date + '.jpg';
            var myFile = self.blobToFile(binaryBlob, fileName);
            const payload = new FormData();
            payload.append('media', binaryBlob, fileName);
            this.loading.present();
            this.apiService.uploadImage(payload).subscribe((result) => {
                self.loading.dismiss();
                self.list_image_select.push(result);
                self.convertListImage();
            }, (error) => {
                self.loading.dismiss();
            });
        }, (err) => { });
    }
    convertBase64ToBlob(base64) {
        const info = this.getInfoFromBase64(base64);
        const sliceSize = 512;
        const byteCharacters = window.atob(info.rawBase64);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            byteArrays.push(new Uint8Array(byteNumbers));
        }
        return new Blob(byteArrays, { type: info.mime });
    }
    getInfoFromBase64(base64) {
        const meta = base64.split(',')[0];
        const rawBase64 = base64.split(',')[1].replace(/\s/g, '');
        const mime = /:([^;]+);/.exec(meta)[1];
        const extension = /\/([^;]+);/.exec(meta)[1];
        return {
            mime,
            extension,
            meta,
            rawBase64,
        };
    }
    convertListImage() {
        var self = this;
        for (var i = 0; i < self.list_image_select.length; i++) {
            self.list_image.push({
                index: 0,
                src: self.list_image_select[i].media.url,
                media: self.list_image_select[i].media,
            });
        }
        self.list_image_select = [];
        self.breakListImage();
    }
}
RegisterForShippingPage.ɵfac = function RegisterForShippingPage_Factory(t) { return new (t || RegisterForShippingPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"])); };
RegisterForShippingPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterForShippingPage, selectors: [["app-register-for-shipping"]], decls: 44, vars: 43, consts: [[1, "ion-no-border"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "header-sub-title"], [1, "register-tranfer-content"], ["lines", "full", 1, "ion-no-margin", "ion-no-padding"], ["lines", "none", 1, "margin-top-10"], ["lines", "none", 1, "item-common"], ["src", "../assets/icon/request/home.svg", 1, "icon-home"], ["src", "../assets/icon/svg/Down.svg", 1, "icon-pulldown-down"], ["class", "pulldown-1-placeholder", 4, "ngIf"], ["interface", "action-sheet", "name", "form_apartment_id", 1, "pulldown-apartment-select", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["lines", "none"], ["src", "../assets/icon/request/time.svg", 1, "icon-home"], ["name", "form_start_time", "displayFormat", "DD/MM/YYYY HH:mm", "min", "2000", "max", "2050", 1, "datetime-commom", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], ["lines", "none", 1, "item-text-area"], ["rows", "4", "cols", "20", 1, "text-area-1", 3, "ngModel", "placeholder", "ngModelChange"], ["class", "ion-grid-class", 4, "ngIf"], ["lines", "none", "class", "ion-no-padding item-photo-grap background-fbfbfb", 3, "click", 4, "ngIf"], [1, "full-width", "function-section"], ["expand", "block"], ["expand", "block", 3, "click"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["class", "modal popup-show-full-image", "tabindex", "-1", "role", "dialog", 4, "ngIf"], [1, "pulldown-1-placeholder"], [3, "value"], [1, "ion-grid-class"], ["class", "ion-col-class", "size", "4", "size-md", "", 4, "ngFor", "ngForOf"], ["size", "4", "size-md", "", 1, "ion-col-class"], ["lines", "none", 1, "ion-item-for-image", "ion-item-image-add", 3, "click"], [1, "image-add-item"], ["src", "../assets/icon/request/add-image.svg", 1, "image-class"], ["lines", "none", 1, "ion-item-for-image"], [1, "image-class", 3, "src"], ["type", "button", "class", "close-image-icon", 3, "click", 4, "ngIf"], ["class", "mask-multiple-image", 3, "click", 4, "ngIf"], ["type", "button", 1, "close-image-icon", 3, "click"], ["aria-hidden", "true"], [1, "mask-multiple-image", 3, "click"], ["lines", "none", 1, "ion-no-padding", "item-photo-grap", "background-fbfbfb", 3, "click"], [1, "icon-camera-container"], ["src", "../assets/icon/request/image.svg", 1, "icon-camera"], [1, "camera-label"], [1, "camera-sub-label"], [1, "modal-backdrop", "fade", "show"], ["tabindex", "-1", "role", "dialog", 1, "modal", "popup-show-full-image"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "div-header-title"], [1, "modal-body"], ["lines", "none", "id", "area-show-image", 1, "area-show-image"]], template: function RegisterForShippingPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RegisterForShippingPage_label_15_Template, 3, 3, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterForShippingPage_Template_ion_select_ngModelChange_17_listener($event) { return ctx.form_apartment_id = $event; })("ionChange", function RegisterForShippingPage_Template_ion_select_ionChange_17_listener($event) { return ctx.ionChangePulldown1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterForShippingPage_ion_select_option_19_Template, 2, 2, "ion-select-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterForShippingPage_label_24_Template, 3, 3, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-datetime", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterForShippingPage_Template_ion_datetime_ngModelChange_26_listener($event) { return ctx.form_start_time = $event; })("ionChange", function RegisterForShippingPage_Template_ion_datetime_ionChange_26_listener() { return ctx.ionChangeStartTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterForShippingPage_Template_ion_textarea_ngModelChange_30_listener($event) { return ctx.form_note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RegisterForShippingPage_ion_grid_33_Template, 7, 1, "ion-grid", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RegisterForShippingPage_ion_item_34_Template, 9, 6, "ion-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterForShippingPage_Template_ion_button_click_39_listener() { return ctx.eventButtonRegisterNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, RegisterForShippingPage_div_42_Template, 1, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RegisterForShippingPage_div_43_Template, 17, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 29, "INBOX_24.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 31, "INBOX_24.sub_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_apartment_id != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_apartment_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 33, "INBOX_24.apartment_placeHolder_2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_apartment_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDepartment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_start_time != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_start_time_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 35, "INBOX_24.datetime_start_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_start_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 37, "INBOX_24.inf_product_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_note);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.number_of_image != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.number_of_image == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("amo-button-custom inactive_button ", ctx.checkActiveButton(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 39, "INBOX_24.button_send"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("amo-button-custom active_button ", ctx.checkActiveButton(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 41, "INBOX_24.button_send"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flag_show_all_image == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flag_show_all_image == true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  margin-top: 45px;\n}\n\n.item-apartment-pulldown[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  \n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.icon-home[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 15px;\n  position: absolute;\n}\n\n.icon-pulldown-down[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .pulldown-apartment-select[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.pulldown-apartment-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding-left: 50px;\n  background: #fbfbfb;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-right: 17px;\n  height: 100%;\n}\n\nion-select[_ngcontent-%COMP%]::part(icon) {\n  display: none;\n  opacity: 1;\n}\n\n.pulldown-1-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.5;\n  z-index: 999;\n  font-size: 12px;\n  margin-left: 50px;\n  top: 7px;\n  pointer-events: none;\n}\n\n.pulldown-1-placeholder-init[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.5;\n  z-index: 999;\n  margin-left: 50px;\n  pointer-events: none;\n}\n\n.pulldown-1-text-select[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  padding-top: 20px;\n  padding-bottom: 0px;\n  padding-right: 17px;\n  position: absolute;\n  z-index: 99;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  background-color: #fbfbfb;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.margin-left-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.text-box-1[_ngcontent-%COMP%] {\n  --padding-start: 50px !important;\n  --padding-end: 20px !important;\n  background-color: #fbfbfb;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --border-width: 1px;\n}\n\n.icon-dollar[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 15px;\n  position: absolute;\n  opacity: 0.5;\n}\n\n.icon-dollar-active[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 15px;\n  position: absolute;\n}\n\n.label-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n  opacity: 0.5;\n}\n\n.label-1-active[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n}\n\n.pointer-events-all[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n.line-1[_ngcontent-%COMP%] {\n  padding-top: 6px;\n  background: #f4f5f5;\n}\n\n.no-border[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.item-tip[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  \n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 20px;\n}\n\n.button-tip[_ngcontent-%COMP%] {\n  background-color: #fbfbfb !important;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-right: 15px;\n  padding: 10px;\n}\n\n.button-tip-active[_ngcontent-%COMP%] {\n  background-color: #009ac9 !important;\n  color: #ffffff;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-right: 15px;\n  padding: 10px;\n}\n\n.button-tip[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.button-tip-active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.group-button-tip[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  display: flex;\n}\n\n.checkbox-common[_ngcontent-%COMP%] {\n  --background-checked: #009ac9;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  background-color: #00000005;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  pointer-events: none;\n  bottom: 0px;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 24px 24px 0px 0px;\n}\n\n.close[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem -1rem;\n}\n\n.popup-item-input[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #f4f5f5;\n}\n\n.modal-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.div-header-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.popup-btn-ok[_ngcontent-%COMP%] {\n  background: #d9f0f7;\n  border-radius: 8px;\n  color: #009ac9;\n  width: 160px;\n  height: 44px;\n  margin: 0 auto;\n}\n\n.button-1-text[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  z-index: 99;\n}\n\n.button-1-icon[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n}\n\nion-item[_ngcontent-%COMP%]   .button-active[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  border: 1px solid #009ac9;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  position: absolute;\n}\n\n.button-unactive[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  position: absolute;\n}\n\n.margin-right-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.margin-left-5[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .datetime-commom[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.datetime-commom[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding-left: 50px;\n  background: #fbfbfb;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-right: 17px;\n  height: 100%;\n}\n\n.button-3-1[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n}\n\n.button-3-2[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  right: 0;\n}\n\n.icon-button-3[_ngcontent-%COMP%] {\n  margin-top: -1px;\n}\n\n.group-1-label-1[_ngcontent-%COMP%] {\n  vertical-align: sub;\n  margin-top: 5px;\n}\n\n.margin-0[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.group-1-button-change-number[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 120px;\n  height: 32px;\n  text-align: center;\n}\n\n.margin-bottom-15[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.margin-top-15[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.margin-bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.group-1-button-custom[_ngcontent-%COMP%] {\n  --background: #d4ebf3;\n  border-radius: 8px;\n  --background-activated: #d4ebf3;\n  width: 100%;\n  height: 100%;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #009ac9;\n}\n\n.font-weight-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .text-box-1[_ngcontent-%COMP%] {\n  --padding-top: 25px;\n  --padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.button-inactive[_ngcontent-%COMP%] {\n  --background: #d3d6d9 !important;\n  color: #ffffff !important;\n}\n\n.active_button.button-inactive[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.inactive_button.button-active[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.ion-no-border[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.ion-no-border[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.ion-no-border[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.ion-no-border[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.ion-no-border[_ngcontent-%COMP%]   .header-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 15px;\n  right: 15px;\n  top: 97px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.ion-no-border[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #ffffff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .item-text-area[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin: 0px 15px 10px 15px;\n  --background: transparent !important;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .item-text-area[_ngcontent-%COMP%]   .text-area-1[_ngcontent-%COMP%] {\n  --padding-start: 17px !important;\n  background: #fbfbfb;\n  margin-top: 0px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .ion-grid-class[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 15px;\n  padding: 0;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .ion-col-class[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%] {\n  width: 100%;\n  mix-blend-mode: normal;\n  background: #ebf8ff;\n  border: 1px dashed #a7dff4;\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin: 0px 15px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  padding: 20px 0;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%]   .icon-camera[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 24px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%]   .camera-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 15px;\n  color: #01aeef;\n  margin-top: 5px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%]   .camera-sub-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 15px;\n  color: #01aeef;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .ion-item-for-image[_ngcontent-%COMP%] {\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 75px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .ion-item-for-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100px;\n  height: 75px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .ion-item-image-add[_ngcontent-%COMP%] {\n  border: unset !important;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .ion-item-image-add[_ngcontent-%COMP%]   .image-add-item[_ngcontent-%COMP%] {\n  border: 1px dashed #a7dff4 !important;\n  background: #ebf8ff !important;\n  width: 100px;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .ion-item-image-add[_ngcontent-%COMP%]   .image-add-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto !important;\n  height: auto !important;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .close-image-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  line-height: 0;\n  color: #fff;\n  position: absolute;\n  z-index: 999;\n  background-color: #009ac9;\n  top: 2px;\n  right: 2px;\n  opacity: 1;\n  border-radius: 8px;\n  width: 16px;\n  height: 16px;\n  text-shadow: none;\n  padding: 0;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .mask-multiple-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(100% - 10px);\n  height: calc(100% - 10px);\n  background-color: #000000;\n  z-index: 99999;\n  opacity: 0.5;\n  top: 5px;\n  bottom: 5px;\n  left: 5px;\n  right: 5px;\n  border-radius: 8px;\n  color: #ffffff;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .area-show-image[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 400px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .popup-show-full-image[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .icon-add-image[_ngcontent-%COMP%] {\n  padding: 24px 0;\n}\n\n.register-tranfer-content[_ngcontent-%COMP%]   .item-common[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  height: 60px;\n  margin: 0px 15px 10px 15px;\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItZm9yLXNoaXBwaW5nL3JlZ2lzdGVyLWZvci1zaGlwcGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FBU0Y7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFVRjs7QUFQQTtFQUNFLGdCQUFBO0FBVUY7O0FBUkE7RUFD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RSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWlESjs7QUEvQ0U7RUFDRSxlQUFBO0FBaURKOztBQTlDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0FBZ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItZm9yLXNoaXBwaW5nL3JlZ2lzdGVyLWZvci1zaGlwcGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mdW5jdGlvbi1zZWN0aW9uIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcbi5pdGVtLWFwYXJ0bWVudC1wdWxsZG93biB7XHJcbiAgLyogQmFja2dyb3VuZGJveCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAvKiBUZXh0L1BsYWNlaG9sZGVyICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmljb24taG9tZSB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaWNvbi1wdWxsZG93bi1kb3duIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG59XHJcbi5oYXMtaW5wdXQtdmFsdWUgLnB1bGxkb3duLWFwYXJ0bWVudC1zZWxlY3Qge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wdWxsZG93bi1hcGFydG1lbnQtc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5wdWxsZG93bi0xLXBsYWNlaG9sZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgdG9wOiA3cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5wdWxsZG93bi0xLXBsYWNlaG9sZGVyLWluaXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5wdWxsZG93bi0xLXRleHQtc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXJnaW4tdG9wLTIwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5tYXJnaW4tbGVmdC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLml0ZW0tbmF0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tbGVmdC0yMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnRleHQtYm94LTEge1xyXG4gIC0tcGFkZGluZy1zdGFydDogNTBweCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDIwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gIC0tcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5pb24tY2hlY2tib3gge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuLmljb24tZG9sbGFyIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uaWNvbi1kb2xsYXItYWN0aXZlIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5sYWJlbC0xIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4ubGFiZWwtMS1hY3RpdmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnBvaW50ZXItZXZlbnRzLWFsbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG4ubGluZS0xIHtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNGY1ZjU7XHJcbn1cclxuLm5vLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuLml0ZW0tdGlwIHtcclxuICAvKiBCYWNrZ3JvdW5kYm94ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIC8qIFRleHQvUGxhY2Vob2xkZXIgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5idXR0b24tdGlwIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmJ1dHRvbi10aXAtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWM5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmJ1dHRvbi10aXAgbGFiZWwge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5idXR0b24tdGlwLWFjdGl2ZSBsYWJlbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmdyb3VwLWJ1dHRvbi10aXAge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2hlY2tib3gtY29tbW9uIHtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzAwOWFjOTtcclxufVxyXG5cclxuLy8gcG9wdXBcclxuXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDU7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3R0b206IDBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMHB4IDBweDtcclxufVxyXG4uY2xvc2Uge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICBtYXJnaW46IC0xcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xyXG59XHJcbi5wb3B1cC1pdGVtLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZjRmNWY1O1xyXG59XHJcbi5tb2RhbC1oZWFkZXIgbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuLmRpdi1oZWFkZXItdGl0bGUge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi5wb3B1cC1idG4tb2sge1xyXG4gIGJhY2tncm91bmQ6ICNkOWYwZjc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24tMS10ZXh0IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG4uYnV0dG9uLTEtaWNvbiB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbmlvbi1pdGVtIC5idXR0b24tYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDlhYzk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYnV0dG9uLXVuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ubWFyZ2luLXJpZ2h0LTUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5tYXJnaW4tbGVmdC01IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5oYXMtaW5wdXQtdmFsdWUgLmRhdGV0aW1lLWNvbW1vbSB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmRhdGV0aW1lLWNvbW1vbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5idXR0b24tMy0xIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLmJ1dHRvbi0zLTIge1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLmljb24tYnV0dG9uLTMge1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuLmdyb3VwLTEtbGFiZWwtMSB7XHJcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLm1hcmdpbi0wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmdyb3VwLTEtYnV0dG9uLWNoYW5nZS1udW1iZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWFyZ2luLWJvdHRvbS0xNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubWFyZ2luLXRvcC0xNSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4ubWFyZ2luLWJvdHRvbS01IHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmdyb3VwLTEtYnV0dG9uLWN1c3RvbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDRlYmYzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZDRlYmYzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDlhYzk7XHJcbn1cclxuLmZvbnQtd2VpZ2h0LTYwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaGFzLWlucHV0LXZhbHVlIC50ZXh0LWJveC0xIHtcclxuICAtLXBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmJ1dHRvbi1pbmFjdGl2ZSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDNkNmQ5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlX2J1dHRvbi5idXR0b24taW5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaW5hY3RpdmVfYnV0dG9uLmJ1dHRvbi1hY3RpdmUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gbmV3IGNzcyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5pb24tbm8tYm9yZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTQ0O1xyXG4gIGhlaWdodDogMTU2cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogNjBweDtcclxuICAgIC5pb24tYmFjay1idXR0b24ge1xyXG4gICAgICAtLWljb24tZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmhlYWRlci1zdWItdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA5N3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgcmlnaHQ6IC0xcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggMCAwICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVnaXN0ZXItdHJhbmZlci1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG5cclxuICAuaXRlbS10ZXh0LWFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAudGV4dC1hcmVhLTEge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW9uLWdyaWQtY2xhc3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmlvbi1jb2wtY2xhc3Mge1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI0QzRDZEOTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgLml0ZW0tcGhvdG8tZ3JhcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWJmOGZmO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNhN2RmZjQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTVweDtcclxuXHJcbiAgICAuaWNvbi1jYW1lcmEtY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAgICAgLmljb24tY2FtZXJhIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNhbWVyYS1sYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDFhZWVmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuY2FtZXJhLXN1Yi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDFhZWVmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW9uLWl0ZW0tZm9yLWltYWdlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gIH1cclxuICAuaW9uLWl0ZW0tZm9yLWltYWdlIGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICB9XHJcblxyXG4gIC5pb24taXRlbS1pbWFnZS1hZGQge1xyXG4gICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5pbWFnZS1hZGQtaXRlbSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjYTdkZmY0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlYmY4ZmYgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY2xvc2UtaW1hZ2UtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlhYzk7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5tYXNrLW11bHRpcGxlLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmFyZWEtc2hvdy1pbWFnZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG4gIC5wb3B1cC1zaG93LWZ1bGwtaW1hZ2UgLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmljb24tYWRkLWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDI0cHggMDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWNvbW1vbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterForShippingPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register-for-shipping',
                templateUrl: './register-for-shipping.page.html',
                styleUrls: ['./register-for-shipping.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }, { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-register-for-shipping-register-for-shipping-module-es2015.js.map