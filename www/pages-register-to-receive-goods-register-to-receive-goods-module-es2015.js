(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-to-receive-goods-register-to-receive-goods-module"],{

/***/ "//b2":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/register-to-receive-goods/register-to-receive-goods.module.ts ***!
  \*************************************************************************************/
/*! exports provided: RegisterToReceiveGoodsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterToReceiveGoodsPageModule", function() { return RegisterToReceiveGoodsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _register_to_receive_goods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-to-receive-goods.page */ "FUwC");









const routes = [
    {
        path: '',
        component: _register_to_receive_goods_page__WEBPACK_IMPORTED_MODULE_6__["RegisterToReceiveGoodsPage"]
    }
];
class RegisterToReceiveGoodsPageModule {
}
RegisterToReceiveGoodsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterToReceiveGoodsPageModule });
RegisterToReceiveGoodsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterToReceiveGoodsPageModule_Factory(t) { return new (t || RegisterToReceiveGoodsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterToReceiveGoodsPageModule, { declarations: [_register_to_receive_goods_page__WEBPACK_IMPORTED_MODULE_6__["RegisterToReceiveGoodsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterToReceiveGoodsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_register_to_receive_goods_page__WEBPACK_IMPORTED_MODULE_6__["RegisterToReceiveGoodsPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FUwC":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/register-to-receive-goods/register-to-receive-goods.page.ts ***!
  \***********************************************************************************/
/*! exports provided: RegisterToReceiveGoodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterToReceiveGoodsPage", function() { return RegisterToReceiveGoodsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "KqBo");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _popup_registration_success_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popup-registration-success/popup-registration-success.page */ "6HEc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



















function RegisterToReceiveGoodsPage_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_29.apartment_placeHolder_1"));
} }
function RegisterToReceiveGoodsPage_ion_select_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r14.apartment._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r14.apartment.title + " - " + item_r14.campaign.title, " ");
} }
function RegisterToReceiveGoodsPage_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_29.date_time_placeHolder"));
} }
function RegisterToReceiveGoodsPage_ion_grid_33_ion_col_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_ion_grid_33_ion_col_2_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const image_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.deleteImageToList(image_r16.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterToReceiveGoodsPage_ion_grid_33_ion_col_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_ion_grid_33_ion_col_2_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r22.showAllImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r18.number_of_image - 4, "");
} }
function RegisterToReceiveGoodsPage_ion_grid_33_ion_col_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterToReceiveGoodsPage_ion_grid_33_ion_col_2_button_3_Template, 3, 0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterToReceiveGoodsPage_ion_grid_33_ion_col_2_div_4_Template, 3, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r16.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.number_of_image <= 4 || image_r16.index < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.number_of_image > 4 && image_r16.index == 3);
} }
function RegisterToReceiveGoodsPage_ion_grid_33_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterToReceiveGoodsPage_ion_grid_33_ion_col_2_Template, 5, 3, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_ion_grid_33_Template_ion_item_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.selectImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 44);
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
function RegisterToReceiveGoodsPage_ion_item_34_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_ion_item_34_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.selectImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 56);
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
function RegisterToReceiveGoodsPage_img_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 57);
} }
function RegisterToReceiveGoodsPage_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 58);
} }
function RegisterToReceiveGoodsPage_label_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_29.input_payment_placeHolder_2"));
} }
function RegisterToReceiveGoodsPage_div_56_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_56_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.selectTip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "10K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterToReceiveGoodsPage_div_56_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_56_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r38.selectTip(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "10K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterToReceiveGoodsPage_div_56_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_56_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r40.selectTip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "20K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterToReceiveGoodsPage_div_56_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_56_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.selectTip(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "20K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterToReceiveGoodsPage_div_56_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_56_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r44.selectTip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "30K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterToReceiveGoodsPage_div_56_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_56_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r46.selectTip(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "30K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterToReceiveGoodsPage_div_56_button_7_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_29.select_other"));
} }
function RegisterToReceiveGoodsPage_div_56_button_7_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r49.form_money_tip_value);
} }
function RegisterToReceiveGoodsPage_div_56_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_56_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r50.presentModal(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterToReceiveGoodsPage_div_56_button_7_label_1_Template, 3, 3, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterToReceiveGoodsPage_div_56_button_7_label_2_Template, 2, 1, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.form_money_tip_value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.form_money_tip_value != "");
} }
function RegisterToReceiveGoodsPage_div_56_button_8_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_29.select_other"));
} }
function RegisterToReceiveGoodsPage_div_56_button_8_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r53.form_money_tip_value);
} }
function RegisterToReceiveGoodsPage_div_56_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_56_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r54.presentModal(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterToReceiveGoodsPage_div_56_button_8_label_1_Template, 3, 3, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterToReceiveGoodsPage_div_56_button_8_label_2_Template, 2, 1, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.form_money_tip_value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.form_money_tip_value != "");
} }
function RegisterToReceiveGoodsPage_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterToReceiveGoodsPage_div_56_button_1_Template, 3, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterToReceiveGoodsPage_div_56_button_2_Template, 3, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterToReceiveGoodsPage_div_56_button_3_Template, 3, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterToReceiveGoodsPage_div_56_button_4_Template, 3, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RegisterToReceiveGoodsPage_div_56_button_5_Template, 3, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterToReceiveGoodsPage_div_56_button_6_Template, 3, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterToReceiveGoodsPage_div_56_button_7_Template, 4, 2, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegisterToReceiveGoodsPage_div_56_button_8_Template, 4, 2, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.tip_value != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.tip_value == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.tip_value != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.tip_value == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.tip_value != 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.tip_value == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.tip_value != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.tip_value == 4);
} }
function RegisterToReceiveGoodsPage_div_57_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_29.select_other"));
} }
function RegisterToReceiveGoodsPage_div_57_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r57.form_money_tip_value);
} }
function RegisterToReceiveGoodsPage_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "10K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "20K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "30K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterToReceiveGoodsPage_div_57_label_11_Template, 3, 3, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterToReceiveGoodsPage_div_57_label_12_Template, 2, 1, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.form_money_tip_value == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.form_money_tip_value != "");
} }
function RegisterToReceiveGoodsPage_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 73);
} }
function RegisterToReceiveGoodsPage_div_66_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_29.input_tip_placeHolder_2"));
} }
function RegisterToReceiveGoodsPage_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_66_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.eventButtonClosePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RegisterToReceiveGoodsPage_div_66_label_14_Template, 3, 3, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterToReceiveGoodsPage_div_66_Template_ion_input_ionChange_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.ionchangTextBoxTip1(); })("ngModelChange", function RegisterToReceiveGoodsPage_div_66_Template_ion_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r62.form_money_tip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "VN\u0110");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_66_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r63.eventButtonSavePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, "INBOX_29.popup_header_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.form_money_tip != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx_r11.form_money_tip_class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 14, "INBOX_29.input_tip_placeHolder_1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r11.form_money_tip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.form_money_tip);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", ctx_r11.form_money_tip_class, " label-1-active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 16, "INBOX_29.popup_button_save"));
} }
function RegisterToReceiveGoodsPage_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 73);
} }
function RegisterToReceiveGoodsPage_div_68_ion_col_12_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_68_ion_col_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67); const image_r65 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r66.deleteImageToList(image_r65.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r65.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function RegisterToReceiveGoodsPage_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_68_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r68.eventButtonClosePopupImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterToReceiveGoodsPage_div_68_ion_col_12_Template, 6, 1, "ion-col", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_div_68_Template_ion_item_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r70.selectImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 44);
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
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.list_image);
} }
class RegisterToReceiveGoodsPage {
    constructor(modalController, camera, actionSheetController, loading, platform, navCtrl, apiService, translate, alertService) {
        this.modalController = modalController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.loading = loading;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.translate = translate;
        this.alertService = alertService;
        this.list_image_select = [];
        this.blobToFile = (theBlob, fileName) => {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return theBlob;
        };
        platform.ready().then((readySource) => {
            this.heightScreen = platform.height() * 0.58 - 18;
        });
    }
    ngOnInit() {
        this.listDepartmentByID = {};
        this.receiverInfor = '';
        this.getListApartment();
        this.check_box_1 = false;
        this.check_box_2 = false;
        this.tip_value = 1;
        this.show_popup_tip = false;
        this.form_apartment_id = '';
        this.form_apartment_class = '';
        this.form_money_payment = '';
        this.form_money_payment_class = '';
        this.form_money_tip = '';
        this.form_money_tip_value = '';
        this.form_money_tip_class = '';
        this.list_image = [];
        this.flag_show_all_image = false;
        // this.form_note = "";
        this.form_date_time = '';
        this.form_date_time_class = '';
        this.breakListImage();
    }
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
    ionChangePulldown1(event) {
        if (this.form_apartment_id != '') {
            this.form_apartment_class = 'has-input-value';
        }
        else {
            this.form_apartment_class = '';
        }
    }
    ionchangTextBoxPayment1() {
        if (this.form_money_payment != '') {
            this.form_money_payment_class = 'has-input-value';
        }
        else {
            this.form_money_payment_class = '';
        }
    }
    ionchangTextBoxTip1() {
        if (this.form_money_tip != '') {
            this.form_money_tip_class = 'has-input-value';
        }
        else {
            this.form_money_tip_class = '';
        }
    }
    getListApartment() {
        var self = this;
        this.loading.present();
        this.apiService.getListUserApartment().subscribe((result) => {
            self.listDepartment = [];
            for (var i = 0; i < result.userApartments.length; i++) {
                if (result.userApartments[i].campaign.settingRequestReceiver == "active") {
                    self.listDepartment.push(result.userApartments[i]);
                }
            }
            // self.listDepartment = result.userApartments;
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
    ionChangeCheckBox1() {
        this.check_box_1 = !this.check_box_1;
    }
    ionChangeCheckBox2() {
        this.check_box_2 = !this.check_box_2;
    }
    selectTip(value) {
        this.tip_value = value;
    }
    presentModal(value) {
        this.tip_value = value;
        this.show_popup_tip = true;
    }
    eventButtonClosePopup() {
        this.show_popup_tip = false;
    }
    eventButtonSavePopup() {
        this.show_popup_tip = false;
        this.form_money_tip_value = this.form_money_tip;
    }
    ionChangeDateTime(event) {
        if (this.form_date_time != '') {
            this.form_date_time_class = 'has-input-value';
        }
        else {
            this.form_date_time_class = '';
        }
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
    eventButtonRegisterNew() {
        var self = this;
        let dataApartment = self.listDepartmentByID[this.form_apartment_id];
        let tip_value = 0;
        if (self.tip_value == 1) {
            tip_value = 10000;
        }
        else if (self.tip_value == 2) {
            tip_value = 20000;
        }
        else if (self.tip_value == 3) {
            tip_value = 30000;
        }
        else if (self.tip_value == 4) {
            tip_value = this.form_money_tip_value;
        }
        let list_attachment = [];
        self.list_image.forEach((image) => {
            list_attachment.push(image.media);
        });
        const params = {
            // category: "",
            title: this.translate.instant('INBOX_29.title'),
            content: this.receiverInfor,
            campaign: dataApartment.campaign._id,
            apartment: this.form_apartment_id,
            // createdBy: "",
            attachments: list_attachment,
            type: 'receiver',
            receiverInfor: this.receiverInfor,
            receiverPaymentHelps: this.check_box_1 == false ? 'notPayment' : 'payment',
            receiverPaymentHelpsValue: this.check_box_1 == true ? this.form_money_payment : 0,
            receiverPaymentTip: this.check_box_2 == false ? 'notPayment' : 'payment',
            receiverPaymentTipValue: this.check_box_2 == true ? tip_value : 0,
            receiverDate: this.form_date_time,
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
                component: _popup_registration_success_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_8__["PopupRegistrationSuccessPage"],
                componentProps: {}
            });
            return yield modal.present();
        });
    }
    // select image
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
        }, (err) => {
            // Handle error
            // alert(err);
        });
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
    checkActiveButton() {
        if (this.form_apartment_id == '' ||
            this.receiverInfor == '' ||
            // || this.form_note == ''
            this.form_date_time == '' ||
            (this.check_box_1 == true && this.form_money_payment == '') ||
            (this.check_box_2 == true && this.tip_value == 4 && this.form_money_tip_value == '')) {
            return 'button-inactive';
        }
        else {
            return 'button-active';
        }
    }
}
RegisterToReceiveGoodsPage.ɵfac = function RegisterToReceiveGoodsPage_Factory(t) { return new (t || RegisterToReceiveGoodsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"])); };
RegisterToReceiveGoodsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterToReceiveGoodsPage, selectors: [["app-register-to-receive-goods"]], decls: 69, vars: 65, consts: [[1, "ion-no-border", "receive-goods-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "header-sub-title"], [1, "register-receiver-content"], ["lines", "full", 1, "ion-no-margin", "ion-no-padding", "margin-top-10"], ["lines", "none"], ["lines", "none", 1, "item-common"], ["src", "../assets/icon/request/home.svg", 1, "icon-home"], ["src", "../assets/icon/svg/Down.svg", 1, "icon-pulldown-down"], ["class", "pulldown-1-placeholder", 4, "ngIf"], ["interface", "action-sheet", "name", "form_apartment_id", 1, "pulldown-apartment-select", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["src", "../assets/icon/request/time.svg", 1, "icon-home"], ["name", "form_date_time", "displayFormat", "DD/MM/YYYY HH:mm", "min", "2000", "max", "2050", 1, "pulldown-apartment-select", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], ["lines", "none", 1, "item-text-area"], ["rows", "4", "cols", "20", 1, "text-area-1", 3, "ngModel", "placeholder", "ngModelChange"], ["class", "ion-grid-class", 4, "ngIf"], ["lines", "none", "class", "ion-no-padding item-photo-grap background-fbfbfb", 3, "click", 4, "ngIf"], [1, "devider-line-custom", "margin-top-20"], ["lines", "none", 1, "margin-top-10"], ["color", "secondary", "mode", "md", 1, "margin-left-20", "checkbox-common", 3, "ionChange"], [1, "checkbox-label", "margin-top-10", "margin-left-10"], ["lines", "none", 1, "pointer-events-all"], ["class", "icon-dollar-active", "src", "../assets/icon/svg/icon-dollar.svg", 4, "ngIf"], ["class", "icon-dollar", "src", "../assets/icon/svg/icon-dollar.svg", 4, "ngIf"], ["type", "text", "type", "number", 1, "text-box-1", 3, "placeholder", "value", "ngModel", "disabled", "ionChange", "ngModelChange"], ["lines", "none", 1, "item-common", "no-border"], ["class", "group-button-tip group-active", 4, "ngIf"], ["class", "group-button-tip group-inactive", 4, "ngIf"], [1, "full-width", "function-section"], ["expand", "block"], ["expand", "block", 3, "click"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["class", "modal", "tabindex", "-1", "role", "dialog", 4, "ngIf"], ["class", "modal popup-show-full-image", "tabindex", "-1", "role", "dialog", 4, "ngIf"], [1, "pulldown-1-placeholder"], [3, "value"], [1, "ion-grid-class"], ["class", "ion-col-class", "size", "4", "size-md", "", 4, "ngFor", "ngForOf"], ["size", "4", "size-md", "", 1, "ion-col-class"], ["lines", "none", 1, "ion-item-for-image", "ion-item-image-add", 3, "click"], [1, "image-add-item"], ["src", "../assets/icon/request/add-image.svg", 1, "image-class"], ["lines", "none", 1, "ion-item-for-image"], [1, "image-class", 3, "src"], ["type", "button", "class", "close-image-icon", 3, "click", 4, "ngIf"], ["class", "mask-multiple-image", 3, "click", 4, "ngIf"], ["type", "button", 1, "close-image-icon", 3, "click"], ["aria-hidden", "true"], [1, "mask-multiple-image", 3, "click"], ["lines", "none", 1, "ion-no-padding", "item-photo-grap", "background-fbfbfb", 3, "click"], [1, "icon-camera-container"], ["src", "../assets/icon/request/image.svg", 1, "icon-camera"], [1, "camera-label"], [1, "camera-sub-label"], ["src", "../assets/icon/svg/icon-dollar.svg", 1, "icon-dollar-active"], ["src", "../assets/icon/svg/icon-dollar.svg", 1, "icon-dollar"], [1, "group-button-tip", "group-active"], ["class", "button-tip button-tip-size", 3, "click", 4, "ngIf"], ["class", "button-tip-active button-tip-size", 3, "click", 4, "ngIf"], ["class", "button-tip button-tip-other", 3, "click", 4, "ngIf"], ["class", "button-tip-active button-tip-other", 3, "click", 4, "ngIf"], [1, "button-tip", "button-tip-size", 3, "click"], [1, "button-tip-active", "button-tip-size", 3, "click"], [1, "button-tip", "button-tip-other", 3, "click"], [4, "ngIf"], ["src", "../assets/icon/svg/Edit.svg", 1, "ion-edit"], [1, "button-tip-active", "button-tip-other", 3, "click"], [1, "group-button-tip", "group-inactive"], ["disabled", "", 1, "button-tip", "button-tip-size"], ["disabled", "", 1, "button-tip", "button-tip-other"], [1, "modal-backdrop", "fade", "show"], ["tabindex", "-1", "role", "dialog", 1, "modal"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "div-header-title"], [1, "modal-body"], ["lines", "none", 1, "popup-item-input"], ["type", "number", 1, "text-box-1", 3, "placeholder", "value", "ngModel", "ionChange", "ngModelChange"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "popup-btn-ok", 3, "click"], ["tabindex", "-1", "role", "dialog", 1, "modal", "popup-show-full-image"], ["lines", "none", "id", "area-show-image", 1, "area-show-image"]], template: function RegisterToReceiveGoodsPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RegisterToReceiveGoodsPage_label_15_Template, 3, 3, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterToReceiveGoodsPage_Template_ion_select_ngModelChange_17_listener($event) { return ctx.form_apartment_id = $event; })("ionChange", function RegisterToReceiveGoodsPage_Template_ion_select_ionChange_17_listener($event) { return ctx.ionChangePulldown1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterToReceiveGoodsPage_ion_select_option_19_Template, 2, 2, "ion-select-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterToReceiveGoodsPage_label_24_Template, 3, 3, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-datetime", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterToReceiveGoodsPage_Template_ion_datetime_ngModelChange_26_listener($event) { return ctx.form_date_time = $event; })("ionChange", function RegisterToReceiveGoodsPage_Template_ion_datetime_ionChange_26_listener($event) { return ctx.ionChangeDateTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterToReceiveGoodsPage_Template_ion_textarea_ngModelChange_30_listener($event) { return ctx.receiverInfor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RegisterToReceiveGoodsPage_ion_grid_33_Template, 7, 1, "ion-grid", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RegisterToReceiveGoodsPage_ion_item_34_Template, 9, 6, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterToReceiveGoodsPage_Template_ion_checkbox_ionChange_37_listener() { return ctx.ionChangeCheckBox1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RegisterToReceiveGoodsPage_img_43_Template, 1, 0, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RegisterToReceiveGoodsPage_img_44_Template, 1, 0, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, RegisterToReceiveGoodsPage_label_45_Template, 3, 3, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterToReceiveGoodsPage_Template_ion_input_ionChange_47_listener() { return ctx.ionchangTextBoxPayment1(); })("ngModelChange", function RegisterToReceiveGoodsPage_Template_ion_input_ngModelChange_47_listener($event) { return ctx.form_money_payment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterToReceiveGoodsPage_Template_ion_checkbox_ionChange_50_listener() { return ctx.ionChangeCheckBox2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, RegisterToReceiveGoodsPage_div_56_Template, 9, 8, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, RegisterToReceiveGoodsPage_div_57_Template, 14, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterToReceiveGoodsPage_Template_ion_button_click_62_listener() { return ctx.eventButtonRegisterNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, RegisterToReceiveGoodsPage_div_65_Template, 1, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, RegisterToReceiveGoodsPage_div_66_Template, 24, 18, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, RegisterToReceiveGoodsPage_div_67_Template, 1, 0, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, RegisterToReceiveGoodsPage_div_68_Template, 17, 1, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 45, "INBOX_29.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 47, "INBOX_29.sub_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_apartment_id != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_apartment_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 49, "INBOX_29.apartment_placeHolder_2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_apartment_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDepartment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_date_time != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_date_time_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 51, "INBOX_29.date_time_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_date_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 53, "INBOX_29.inf_product_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.receiverInfor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.number_of_image != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.number_of_image == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 55, "INBOX_29.checkbox_support_payment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.check_box_1 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.check_box_1 == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_money_payment != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_money_payment_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 57, "INBOX_29.input_payment_placeHolder_1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.form_money_payment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", !ctx.check_box_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_money_payment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 59, "INBOX_29.checkbox_money_tip"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.check_box_2 == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.check_box_2 == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("amo-button-custom inactive_button ", ctx.checkActiveButton(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 61, "INBOX_29.button_send"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("amo-button-custom active_button ", ctx.checkActiveButton(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 63, "INBOX_29.button_send"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show_popup_tip == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show_popup_tip == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flag_show_all_image == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flag_show_all_image == true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.item-common[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  display: flex;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  height: 60px;\n  margin: 0px 15px 10px 15px;\n  --background: transparent !important;\n}\n\n.item-text-area[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin: 0px 15px 10px 15px;\n  --background: transparent !important;\n}\n\n.item-apartment-pulldown[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  \n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.icon-home[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 15px;\n  position: absolute;\n}\n\n.icon-pulldown-down[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .pulldown-apartment-select[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.pulldown-apartment-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding-left: 50px;\n  background: #fbfbfb;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-right: 17px;\n  height: 100%;\n}\n\n.pulldown-1-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.5;\n  z-index: 999;\n  font-size: 12px;\n  margin-left: 50px;\n  top: 7px;\n  pointer-events: none;\n}\n\nion-select[_ngcontent-%COMP%]::part(icon) {\n  display: none;\n  opacity: 1;\n}\n\n.pulldown-1-placeholder-init[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.5;\n  z-index: 999;\n  margin-left: 50px;\n  pointer-events: none;\n}\n\n.pulldown-1-text-select[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  padding-top: 20px;\n  padding-bottom: 0px;\n  padding-right: 17px;\n  position: absolute;\n  z-index: 99;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  background-color: #fbfbfb;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.text-area-1[_ngcontent-%COMP%] {\n  --padding-start: 17px !important;\n  background: #fbfbfb;\n  margin-top: 0px;\n}\n\n.margin-left-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.text-box-1[_ngcontent-%COMP%] {\n  --padding-start: 50px !important;\n  --padding-end: 60px !important;\n  background-color: #fbfbfb;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --border-width: 1px;\n}\n\n.icon-dollar[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 15px;\n  position: absolute;\n  opacity: 0.5;\n}\n\n.icon-dollar-active[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 15px;\n  position: absolute;\n}\n\n.label-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n  opacity: 0.5;\n  margin: 0;\n}\n\n.label-1-active[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n  margin: 0;\n}\n\n.pointer-events-all[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n.no-border[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.item-tip[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  \n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 20px;\n}\n\n.button-tip[_ngcontent-%COMP%] {\n  background-color: #fbfbfb !important;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-right: 15px;\n  padding: 10px 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-tip-active[_ngcontent-%COMP%] {\n  background-color: #fbfbfb !important;\n  border: 1px solid #009ac9;\n  border-radius: 8px;\n  margin-right: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.button-tip-size[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.button-tip-other[_ngcontent-%COMP%] {\n  margin-right: 0px;\n  max-width: 145px;\n  width: 100%;\n}\n\n.button-tip[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.button-tip-active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.group-button-tip[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  display: flex;\n  width: 100%;\n}\n\n.checkbox-common[_ngcontent-%COMP%] {\n  --background-checked: #009ac9;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  background-color: #00000005;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  pointer-events: none;\n  bottom: 0px;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 24px 24px 0px 0px;\n}\n\n.close[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem -1rem;\n}\n\n.popup-item-input[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.modal-body[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #f4f5f5;\n}\n\n.modal-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.div-header-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.popup-btn-ok[_ngcontent-%COMP%] {\n  background: #d9f0f7;\n  border-radius: 8px;\n  color: #009ac9;\n  width: 160px;\n  height: 44px;\n  margin: 0 auto;\n}\n\n.background-fbfbfb[_ngcontent-%COMP%] {\n  --background: #fbfbfb;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .text-box-1[_ngcontent-%COMP%] {\n  --padding-top: 25px;\n  --padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.has-input-value.label-1-active[_ngcontent-%COMP%], .has-input-value.label-1[_ngcontent-%COMP%] {\n  top: 25px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.ion-edit[_ngcontent-%COMP%] {\n  pointer-events: none;\n  margin-left: 15px;\n}\n\n.group-active[_ngcontent-%COMP%]   .ion-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.group-inactive[_ngcontent-%COMP%]   .ion-edit[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.button-tip-active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .button-tip[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\nion-checkbox[_ngcontent-%COMP%]::part(container) {\n  padding: 2px;\n}\n\n.font-weight-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.ion-grid-class[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 15px;\n  padding: 0;\n}\n\n.ion-col-class[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.ion-item-for-image[_ngcontent-%COMP%] {\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 75px;\n}\n\n.ion-item-for-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100px;\n  height: 75px;\n}\n\n.ion-item-image-add[_ngcontent-%COMP%] {\n  border: unset !important;\n}\n\n.ion-item-image-add[_ngcontent-%COMP%]   .image-add-item[_ngcontent-%COMP%] {\n  border: 1px dashed #a7dff4 !important;\n  background: #ebf8ff !important;\n  width: 100px;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n}\n\n.ion-item-image-add[_ngcontent-%COMP%]   .image-add-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto !important;\n  height: auto !important;\n}\n\n.close-image-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  line-height: 0;\n  color: #fff;\n  position: absolute;\n  z-index: 999;\n  background-color: #009ac9;\n  top: 2px;\n  right: 2px;\n  opacity: 1;\n  border-radius: 8px;\n  width: 16px;\n  height: 16px;\n  text-shadow: none;\n  padding: 0;\n}\n\n.mask-multiple-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(100% - 10px);\n  height: calc(100% - 10px);\n  background-color: #000000;\n  z-index: 99999;\n  opacity: 0.5;\n  top: 5px;\n  bottom: 5px;\n  left: 5px;\n  right: 5px;\n  border-radius: 8px;\n  color: #ffffff;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.area-show-image[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 400px;\n}\n\n.popup-show-full-image[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.icon-add-image[_ngcontent-%COMP%] {\n  padding: 24px 0;\n}\n\n.button-inactive[_ngcontent-%COMP%] {\n  --background: #d3d6d9 !important;\n  color: #ffffff !important;\n}\n\n.active_button.button-inactive[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.inactive_button.button-active[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.receive-goods-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.receive-goods-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.receive-goods-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.receive-goods-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.receive-goods-header[_ngcontent-%COMP%]   .header-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 15px;\n  right: 15px;\n  top: 97px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.receive-goods-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #ffffff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.register-receiver-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n}\n\n.register-receiver-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%] {\n  width: 100%;\n  mix-blend-mode: normal;\n  --background: #ebf8ff;\n  border: 1px dashed #a7dff4;\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin: 0px 15px;\n}\n\n.register-receiver-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  padding: 20px 0;\n}\n\n.register-receiver-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%]   .icon-camera[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 24px;\n}\n\n.register-receiver-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%]   .camera-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 15px;\n  color: #01aeef;\n  margin-top: 5px;\n}\n\n.register-receiver-content[_ngcontent-%COMP%]   .item-photo-grap[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%]   .camera-sub-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 15px;\n  color: #01aeef;\n}\n\n.register-receiver-content[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n}\n\n.register-receiver-content[_ngcontent-%COMP%]   .function-section[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  padding-top: 15px;\n  margin-top: 45px;\n  background: #ffffff;\n  box-shadow: 0px 1px 10px rgba(234, 122, 110, 0.25);\n  border-radius: 10px 10px 0px 0px;\n}\n\n.devider-line-custom[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItdG8tcmVjZWl2ZS1nb29kcy9yZWdpc3Rlci10by1yZWNlaXZlLWdvb2RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBV0Y7O0FBUkE7RUFDRSxnQkFBQTtBQVdGOztBQVRBO0VBQ0UsZ0JBQUE7QUFZRjs7QUFWQTtFQUNFLGlCQUFBO0FBYUY7O0FBWEE7RUFDRSx5QkFBQTtBQWNGOztBQVpBO0VBQ0Usd0JBQUE7RUFDQSxvQkFBQTtBQWVGOztBQVpBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFlRjs7QUFiQTtFQUNFLGlCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWlCRjs7QUFmQTtFQUNFLG1CQUFBO0FBa0JGOztBQWhCQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBbUJGOztBQWpCQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFvQkY7O0FBbEJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBcUJGOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBc0JGOztBQXBCQTtFQUNFLG1CQUFBO0FBdUJGOztBQXBCQTtFQUNFLFdBQUE7QUF1QkY7O0FBckJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUF3QkY7O0FBckJBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBd0JGOztBQXRCQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEwQkY7O0FBdkJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUEwQkY7O0FBdkJBO0VBQ0UsV0FBQTtBQTBCRjs7QUF4QkE7RUFDRSxXQUFBO0FBMkJGOztBQXpCQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsNkJBQUE7QUE2QkY7O0FBMUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBNkJGOztBQTFCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUE2QkY7O0FBM0JBO0VBQ0U7SUFDRSxnQkFBQTtFQThCRjtBQUNGOztBQTVCQTtFQUNFLGdDQUFBO0FBOEJGOztBQTVCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUErQkY7O0FBN0JBO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtBQWdDRjs7QUE5QkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBaUNGOztBQTlCQTs7RUFFRSxnQ0FBQTtBQWlDRjs7QUEvQkE7RUFDRSxtQkFBQTtBQWtDRjs7QUFoQ0E7RUFDRSxjQUFBO0FBbUNGOztBQWpDQTtFQUNFLDZCQUFBO0FBb0NGOztBQWxDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBcUNGOztBQWxDQTtFQUNFLHFCQUFBO0FBcUNGOztBQW5DQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXNDRjs7QUFwQ0E7RUFDRSxXQUFBO0FBdUNGOztBQXJDQTs7RUFFRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF3Q0Y7O0FBdENBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQXlDRjs7QUF2Q0E7RUFDRSxVQUFBO0FBMENGOztBQXhDQTtFQUNFLFlBQUE7QUEyQ0Y7O0FBekNBOztFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTRDRjs7QUExQ0E7RUFDRSxZQUFBO0FBNkNGOztBQTNDQTtFQUNFLGdCQUFBO0FBOENGOztBQTVDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBK0NGOztBQTdDQTtFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBK0NGOztBQTVDQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBK0NGOztBQTdDQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWdERjs7QUE3Q0E7RUFDRSx3QkFBQTtBQWdERjs7QUE5Q0U7RUFDRSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBZ0RKOztBQS9DSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFpRE47O0FBN0NBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFnREY7O0FBOUNBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWlERjs7QUEvQ0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQWtERjs7QUFoREE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQW1ERjs7QUFqREE7RUFDRSxlQUFBO0FBb0RGOztBQWxEQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUFxREY7O0FBbkRBO0VBQ0Usd0JBQUE7QUFzREY7O0FBcERBO0VBQ0Usd0JBQUE7QUF1REY7O0FBbERBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFxREY7O0FBcERFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXNESjs7QUFyREk7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBdUROOztBQXBERTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBc0RKOztBQXBERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFzREo7O0FBcERFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQXNESjs7QUFsREE7RUFDRSxzQkFBQTtBQXFERjs7QUFuREU7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBcURKOztBQW5ESTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXFETjs7QUFuRE07RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQXFEUjs7QUFuRE07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBcURSOztBQW5ETTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFxRFI7O0FBakRFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBbURKOztBQWpERTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQ0FBQTtBQW1ESjs7QUEvQ0E7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFrREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci10by1yZWNlaXZlLWdvb2RzL3JlZ2lzdGVyLXRvLXJlY2VpdmUtZ29vZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1jb21tb24ge1xyXG4gIC8qIEJhY2tncm91bmRib3ggKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW46IDBweCAxNXB4IDEwcHggMTVweDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW0tdGV4dC1hcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW46IDBweCAxNXB4IDEwcHggMTVweDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLWFwYXJ0bWVudC1wdWxsZG93biB7XHJcbiAgLyogQmFja2dyb3VuZGJveCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAvKiBUZXh0L1BsYWNlaG9sZGVyICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmljb24taG9tZSB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaWNvbi1wdWxsZG93bi1kb3duIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG59XHJcbi5oYXMtaW5wdXQtdmFsdWUgLnB1bGxkb3duLWFwYXJ0bWVudC1zZWxlY3Qge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wdWxsZG93bi1hcGFydG1lbnQtc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnB1bGxkb3duLTEtcGxhY2Vob2xkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICB0b3A6IDdweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnB1bGxkb3duLTEtcGxhY2Vob2xkZXItaW5pdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnB1bGxkb3duLTEtdGV4dC1zZWxlY3Qge1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMjAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm1hcmdpbi10b3AtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uaXRlbS1uYXRpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG5cclxuLnRleHQtYXJlYS0xIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE3cHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4ubWFyZ2luLWxlZnQtMjAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi50ZXh0LWJveC0xIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDUwcHggIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuaW9uLWNoZWNrYm94IHtcclxuICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcbi5pY29uLWRvbGxhciB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmljb24tZG9sbGFyLWFjdGl2ZSB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ubGFiZWwtMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICByaWdodDogMTVweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5sYWJlbC0xLWFjdGl2ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICByaWdodDogMTVweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnBvaW50ZXItZXZlbnRzLWFsbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG5cclxuLm5vLWJvcmRlciB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuLml0ZW0tdGlwIHtcclxuICAvKiBCYWNrZ3JvdW5kYm94ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIC8qIFRleHQvUGxhY2Vob2xkZXIgKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXRpcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbi10aXAtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOWFjOTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uLXRpcC1zaXplIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tdGlwLW90aGVyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXgtd2lkdGg6IDE0NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXRpcCBsYWJlbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmJ1dHRvbi10aXAtYWN0aXZlIGxhYmVsIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uZ3JvdXAtYnV0dG9uLXRpcCB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaGVja2JveC1jb21tb24ge1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDA5YWM5O1xyXG59XHJcbi8vIHBvcHVwXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwNTA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDU7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3R0b206IDBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMHB4IDBweDtcclxufVxyXG4uY2xvc2Uge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICBtYXJnaW46IC0xcmVtIC0xcmVtIC0xcmVtIC0xcmVtO1xyXG59XHJcbi5wb3B1cC1pdGVtLWlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHksXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjZjRmNWY1O1xyXG59XHJcbi5tb2RhbC1oZWFkZXIgbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDByZW07XHJcbn1cclxuLmRpdi1oZWFkZXItdGl0bGUge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi5wb3B1cC1idG4tb2sge1xyXG4gIGJhY2tncm91bmQ6ICNkOWYwZjc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWZiZmJmYiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG59XHJcbi5oYXMtaW5wdXQtdmFsdWUgLnRleHQtYm94LTEge1xyXG4gIC0tcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ud2lkdGgtMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGFzLWlucHV0LXZhbHVlLmxhYmVsLTEtYWN0aXZlLFxyXG4uaGFzLWlucHV0LXZhbHVlLmxhYmVsLTEge1xyXG4gIHRvcDogMjVweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmlvbi1lZGl0IHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4uZ3JvdXAtYWN0aXZlIC5pb24tZWRpdCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4uZ3JvdXAtaW5hY3RpdmUgLmlvbi1lZGl0IHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmJ1dHRvbi10aXAtYWN0aXZlIGxhYmVsLFxyXG4uYnV0dG9uLXRpcCBsYWJlbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbmlvbi1jaGVja2JveDo6cGFydChjb250YWluZXIpIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLmZvbnQtd2VpZ2h0LTYwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaW9uLWdyaWQtY2xhc3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5pb24tY29sLWNsYXNzIHtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjRDNENkQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIG1hcmdpbjogNXB4O1xyXG59XHJcbi5pb24taXRlbS1mb3ItaW1hZ2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcbi5pb24taXRlbS1mb3ItaW1hZ2UgaW1nIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG59XHJcblx0XHRcdFx0XHRcclxuLmlvbi1pdGVtLWltYWdlLWFkZCB7XHJcbiAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIC5pbWFnZS1hZGQtaXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2E3ZGZmNCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ViZjhmZiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY2xvc2UtaW1hZ2UtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWM5O1xyXG4gIHRvcDogMnB4O1xyXG4gIHJpZ2h0OiAycHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLm1hc2stbXVsdGlwbGUtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0b3A6IDVweDtcclxuICBib3R0b206IDVweDtcclxuICBsZWZ0OiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5hcmVhLXNob3ctaW1hZ2Uge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuLnBvcHVwLXNob3ctZnVsbC1pbWFnZSAubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbi5pY29uLWFkZC1pbWFnZSB7XHJcbiAgcGFkZGluZzogMjRweCAwO1xyXG59XHJcbi5idXR0b24taW5hY3RpdmUge1xyXG4gIC0tYmFja2dyb3VuZDogI2QzZDZkOSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZV9idXR0b24uYnV0dG9uLWluYWN0aXZlIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmluYWN0aXZlX2J1dHRvbi5idXR0b24tYWN0aXZlIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG5ldyBjc3MgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLnJlY2VpdmUtZ29vZHMtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTQ0O1xyXG4gIGhlaWdodDogMTU2cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogNjBweDtcclxuICAgIC5pb24tYmFjay1idXR0b24ge1xyXG4gICAgICAtLWljb24tZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmhlYWRlci1zdWItdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA5N3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgcmlnaHQ6IC0xcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggMCAwICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVnaXN0ZXItcmVjZWl2ZXItY29udGVudCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuXHJcbiAgLml0ZW0tcGhvdG8tZ3JhcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlYmY4ZmY7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2E3ZGZmNDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDBweCAxNXB4O1xyXG5cclxuICAgIC5pY29uLWNhbWVyYS1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gICAgICAuaWNvbi1jYW1lcmEge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgfVxyXG4gICAgICAuY2FtZXJhLWxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMWFlZWY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jYW1lcmEtc3ViLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMWFlZWY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNoZWNrYm94LWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gIH1cclxuICAuZnVuY3Rpb24tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgyMzQsIDEyMiwgMTEwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRldmlkZXItbGluZS1jdXN0b20ge1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterToReceiveGoodsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register-to-receive-goods',
                templateUrl: './register-to-receive-goods.page.html',
                styleUrls: ['./register-to-receive-goods.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }, { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-register-to-receive-goods-register-to-receive-goods-module-es2015.js.map