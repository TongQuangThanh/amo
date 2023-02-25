(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["requests-requests-module"],{

/***/ "hGdX":
/*!***************************************************!*\
  !*** ./src/app/pages/requests/requests.module.ts ***!
  \***************************************************/
/*! exports provided: RequestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageModule", function() { return RequestsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requests.page */ "iXDg");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
        component: _requests_page__WEBPACK_IMPORTED_MODULE_6__["RequestsPage"]
    }
];
class RequestsPageModule {
}
RequestsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestsPageModule });
RequestsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestsPageModule_Factory(t) { return new (t || RequestsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestsPageModule, { declarations: [_requests_page__WEBPACK_IMPORTED_MODULE_6__["RequestsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                    _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_requests_page__WEBPACK_IMPORTED_MODULE_6__["RequestsPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iXDg":
/*!*************************************************!*\
  !*** ./src/app/pages/requests/requests.page.ts ***!
  \*************************************************/
/*! exports provided: RequestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPage", function() { return RequestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _utils_const_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/const.service */ "KQOL");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils.service */ "GUvF");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _popup_registration_type_popup_registration_type_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popup-registration-type/popup-registration-type.page */ "Y4cL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function RequestsPage_ion_list_56_ion_card_1_ion_badge_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST.status_new"));
} }
function RequestsPage_ion_list_56_ion_card_1_ion_badge_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST.status_processing"));
} }
function RequestsPage_ion_list_56_ion_card_1_ion_badge_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST.status_done"));
} }
function RequestsPage_ion_list_56_ion_card_1_ion_badge_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST.status_cancelled"));
} }
function RequestsPage_ion_list_56_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_ion_list_56_ion_card_1_Template_ion_card_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.detailPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RequestsPage_ion_list_56_ion_card_1_ion_badge_4_Template, 3, 3, "ion-badge", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RequestsPage_ion_list_56_ion_card_1_ion_badge_5_Template, 3, 3, "ion-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RequestsPage_ion_list_56_ion_card_1_ion_badge_6_Template, 3, 3, "ion-badge", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RequestsPage_ion_list_56_ion_card_1_ion_badge_7_Template, 3, 3, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.formatString(item_r5.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.status == "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.status == "processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.status == "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.status == "cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.title);
} }
function RequestsPage_ion_list_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestsPage_ion_list_56_ion_card_1_Template, 11, 7, "ion-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listRequestAll);
} }
function RequestsPage_ion_list_57_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_ion_list_57_ion_card_1_Template_ion_card_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.detailPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-badge", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.formatString(item_r13.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "REQUEST.status_new"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r13.title);
} }
function RequestsPage_ion_list_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestsPage_ion_list_57_ion_card_1_Template, 10, 6, "ion-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.listRequestNew);
} }
function RequestsPage_ion_list_58_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_ion_list_58_ion_card_1_Template_ion_card_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.detailPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.formatString(item_r17.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "REQUEST.status_processing"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r17.title);
} }
function RequestsPage_ion_list_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestsPage_ion_list_58_ion_card_1_Template, 10, 6, "ion-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listRequestProcessing);
} }
function RequestsPage_ion_list_59_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_ion_list_59_ion_card_1_Template_ion_card_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.detailPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-badge", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-text", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r21._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r20.formatString(item_r21.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "REQUEST.status_done"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r21.title);
} }
function RequestsPage_ion_list_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestsPage_ion_list_59_ion_card_1_Template, 10, 6, "ion-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.listRequestCompleted);
} }
const _c0 = function () { return { sideMenu: "left", allowElementScroll: true, nativeSmoothScroll: true }; };
class RequestsPage {
    constructor(modalController, loading, apiService, navCtrl, platform, nativePageTransitions, route, router) {
        this.modalController = modalController;
        this.loading = loading;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.nativePageTransitions = nativePageTransitions;
        this.route = route;
        this.router = router;
        this.modeService = 'All';
        // listApartment = [];
        this.isSettingRequestReceiver = false;
        this.isSettingRequestVisitors = false;
        this.isSettingRequestTranferGood = false;
        this.isSettingRequestParking = false;
        this.listRequestAll = [];
        this.listRequestNew = [];
        this.listRequestProcessing = [];
        this.listRequestCompleted = [];
        this.currentPageAll = 1;
        this.currentPageNew = 1;
        this.currentPageProcess = 1;
        this.currentPageComplate = 1;
        this.activeTabIndex = 0;
        const self = this;
        platform.ready().then((readySource) => {
            self.heightScreen = platform.height() - 120 - 90;
            self.heightScreenSub = self.heightScreen;
        });
    }
    ngOnInit() {
        var self = this;
        this.modeService = 'All';
        this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_5__["ConstService"].NUMBER_RECORD_ON_PAGE;
        this.route.queryParams.subscribe((params) => {
            const stateData = this.router.getCurrentNavigation().extras.state;
            if (stateData && stateData.isReload) {
                self.activeTabIndex = 0;
                self.doRefresh(null);
                setTimeout(() => {
                    let element = document.getElementById('tab_all');
                    if (element) {
                        element.click();
                    }
                });
            }
            else {
                self.apiService.getListUserApartment().subscribe((result) => {
                    for (var i = 0; i < result.userApartments.length; i++) {
                        if (result.userApartments[i].campaign.settingRequestReceiver == "active") {
                            self.isSettingRequestReceiver = true;
                        }
                        if (result.userApartments[i].campaign.settingRequestVisitors == "active") {
                            self.isSettingRequestVisitors = true;
                        }
                        if (result.userApartments[i].campaign.settingRequestTranferGood == "active") {
                            self.isSettingRequestTranferGood = true;
                        }
                        if (result.userApartments[i].campaign.settingRequestParking == "active") {
                            self.isSettingRequestParking = true;
                        }
                    }
                    self.getListRequestRegister(self.currentPageAll, self.numberRecordOnPage, '', '', null, true);
                });
            }
        });
    }
    ionViewWillEnter() { }
    getListRequestRegister(page, limit, category, search, event, isRefresh, status = '') {
        const self = this;
        this.loading.present();
        if (event) {
            event.target.complete();
        }
        this.apiService.getListRequestRegister(page, limit, category, search, status).subscribe((result) => {
            self.loading.dismiss();
            const feedbacks = result.feedbacknews;
            this.pushDataRequest(feedbacks, isRefresh);
        }, (error) => {
            self.loading.dismiss();
        }, () => {
            self.loading.dismiss();
            if (event) {
                event.target.complete();
            }
        });
    }
    pushDataRequest(data, isRefresh) {
        switch (this.activeTabIndex) {
            case 1:
                if (isRefresh) {
                    this.listRequestNew = data;
                }
                else {
                    this.listRequestNew.push(...data);
                }
                break;
            case 2:
                if (isRefresh) {
                    this.listRequestProcessing = data;
                }
                else {
                    this.listRequestProcessing.push(...data);
                }
                break;
            case 3:
                if (isRefresh) {
                    this.listRequestCompleted = data;
                }
                else {
                    this.listRequestCompleted.push(...data);
                }
                break;
            default:
                if (isRefresh) {
                    this.listRequestAll = data;
                }
                else {
                    this.listRequestAll.push(...data);
                }
                break;
        }
    }
    loadData($event) {
        this.allApiRequest($event, true);
    }
    detailPage(event) {
        this.navCtrl.navigateForward('/request-detail/' + event.currentTarget.id);
    }
    detailRegisterPage(event) {
        this.navCtrl.navigateForward('/request-register-detail/' + event.currentTarget.id);
    }
    addRequest() {
        this.navCtrl.navigateForward('/add-request');
    }
    formatString(stringDate) {
        return _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].formatString(stringDate);
    }
    doRefresh(event) {
        this.listRequestAll = [];
        this.listRequestNew = [];
        this.listRequestProcessing = [];
        this.listRequestCompleted = [];
        this.currentPageAll = 1;
        this.currentPageNew = 1;
        this.currentPageProcess = 1;
        this.currentPageComplate = 1;
        this.allApiRequest(event, false);
    }
    registrationTypeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _popup_registration_type_popup_registration_type_page__WEBPACK_IMPORTED_MODULE_8__["PopupRegistrationTypePage"],
                cssClass: 'popupRegistrationType-page-custom',
            });
            return yield modal.present();
        });
    }
    registrationNavigate(route) {
        this.navCtrl.navigateForward(route);
    }
    onTabChange($event) {
        this.activeTabIndex = $event.detail.index;
        this.allApiRequest(null);
    }
    allApiRequest(event, isLoadMore = false) {
        switch (this.activeTabIndex) {
            case 1:
                if (!isLoadMore && this.listRequestNew.length == 0) {
                    this.getListRequestRegister(this.currentPageNew, this.numberRecordOnPage, '', '', event, false, 'new');
                }
                else if (isLoadMore) {
                    this.currentPageNew++;
                    this.getListRequestRegister(this.currentPageNew, this.numberRecordOnPage, '', '', event, false, 'new');
                }
                break;
            case 2:
                if (!isLoadMore && this.listRequestProcessing.length == 0) {
                    this.getListRequestRegister(this.currentPageProcess, this.numberRecordOnPage, '', '', event, false, 'processing');
                }
                else if (isLoadMore) {
                    this.currentPageProcess++;
                    this.getListRequestRegister(this.currentPageProcess, this.numberRecordOnPage, '', '', event, false, 'processing');
                }
                break;
            case 3:
                if (!isLoadMore && this.listRequestCompleted.length == 0) {
                    this.getListRequestRegister(this.currentPageComplate, this.numberRecordOnPage, '', '', event, false, 'completed');
                }
                else if (isLoadMore) {
                    this.currentPageComplate++;
                    this.getListRequestRegister(this.currentPageComplate, this.numberRecordOnPage, '', '', event, false, 'completed');
                }
                break;
            default:
                if (!isLoadMore && this.listRequestAll.length == 0) {
                    this.getListRequestRegister(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
                }
                else if (isLoadMore) {
                    this.currentPageAll++;
                    this.getListRequestRegister(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
                }
                break;
        }
    }
}
RequestsPage.ɵfac = function RequestsPage_Factory(t) { return new (t || RequestsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
RequestsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RequestsPage, selectors: [["app-requests"]], decls: 70, vars: 41, consts: [[1, "request-background-color"], [1, "ion-no-border", "request-ion-header", "bar", "bar-header"], [1, "header-title"], [1, "request-category"], [1, "ion-align-items-center"], [3, "ngClass", "click"], [1, "item-icon-content"], ["name", "custom-archive", "src", "assets/icon/request/delivery-box.svg", 1, "item-icon"], [1, "item-label"], ["name", "custom-archive", "src", "assets/icon/request/user.svg", 1, "item-icon"], ["name", "custom-archive", "src", "assets/icon/request/cart.svg", 1, "item-icon"], ["name", "custom-archive", "src", "assets/icon/request/sports-car.svg", 1, "item-icon"], [1, "super-tabs-div"], [1, "super-tabs-content", "request-background-color", 3, "activeTabIndex", "config", "tabChange"], ["no-border", "", "slot", "top", "scrollable-padding", "false", 1, "segment-toolbar"], ["id", "tab_all", 1, "request-super-tab-button"], [1, "super-tab-button-label"], [1, "request-super-tab-button"], [1, "has-header", "request-background-color"], ["slot", "fixed", "pullMin", "100", 3, "ionRefresh"], ["pullingIcon", "circles", "refreshingSpinner", "", "refreshingText", ""], ["class", "request-background-color", 4, "ngIf"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], [1, "bottom-frame-wrapper"], [1, "bottom-frame"], [1, "toolbar-button"], ["color", "danger", 1, "reflect-button", 3, "click"], ["name", "custom-archive", "src", "assets/icon/request/reflect.svg", 1, "reflect-icon"], [1, "reflect-label"], ["class", "request-card", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "request-card", 3, "id", "click"], ["lines", "none", 1, "request-card-item"], ["slot", "start", 1, "update-time"], ["slot", "end", "class", "badge-status badge-danger", 4, "ngIf"], ["slot", "end", "class", "badge-status badge-warning", 4, "ngIf"], ["slot", "end", "class", "badge-status badge-success", 4, "ngIf"], ["slot", "end", "class", "badge-status badge-cancel", 4, "ngIf"], [1, ""], [1, "request-title"], ["slot", "end", 1, "badge-status", "badge-danger"], ["slot", "end", 1, "badge-status", "badge-warning"], ["slot", "end", 1, "badge-status", "badge-success"], ["slot", "end", 1, "badge-status", "badge-cancel"]], template: function RequestsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_Template_ion_col_click_8_listener() { return ctx.registrationNavigate("/register-to-receive-goods"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_Template_ion_col_click_14_listener() { return ctx.registrationNavigate("/registration-guest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_Template_ion_col_click_20_listener() { return ctx.registrationNavigate("/register-for-shipping"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_Template_ion_col_click_26_listener() { return ctx.registrationNavigate("/register-keep-vehicle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "super-tabs", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tabChange", function RequestsPage_Template_super_tabs_tabChange_33_listener($event) { return ctx.onTabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "super-tabs-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "super-tab-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "super-tab-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "super-tab-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "super-tab-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "super-tabs-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "super-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-refresher", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionRefresh", function RequestsPage_Template_ion_refresher_ionRefresh_54_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "ion-refresher-content", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, RequestsPage_ion_list_56_Template, 2, 1, "ion-list", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, RequestsPage_ion_list_57_Template, 2, 1, "ion-list", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, RequestsPage_ion_list_58_Template, 2, 1, "ion-list", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, RequestsPage_ion_list_59_Template, 2, 1, "ion-list", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-infinite-scroll", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function RequestsPage_Template_ion_infinite_scroll_ionInfinite_60_listener($event) { return ctx.loadData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "ion-infinite-scroll-content", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-toolbar", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-fab-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestsPage_Template_ion_fab_button_click_65_listener() { return ctx.addRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "ion-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 20, "REQUEST.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.isSettingRequestReceiver ? "item-icon-col disabled" : "item-icon-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 22, "REGISTRATION_TYPE.receive"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.isSettingRequestVisitors ? "item-icon-col disabled" : "item-icon-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 24, "REGISTRATION_TYPE.guest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.isSettingRequestTranferGood ? "item-icon-col disabled" : "item-icon-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 26, "REGISTRATION_TYPE.shipping"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.isSettingRequestParking ? "item-icon-col disabled" : "item-icon-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 28, "REGISTRATION_TYPE.parking"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeTabIndex", ctx.activeTabIndex)("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 30, "REQUEST.tab_all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 32, "REQUEST.status_new"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 34, "REQUEST.status_processing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 36, "REQUEST.status_done"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 38, "REQUEST.reflect_lable"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBadge"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTabs"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTabsToolbar"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTabButton"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTabsContainer"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".request-background-color[_ngcontent-%COMP%] {\n  background: #f9fcff !important;\n}\n.request-background-color[_ngcontent-%COMP%]   ion-infinite-scroll[_ngcontent-%COMP%] {\n  background: #f9fcff !important;\n}\n.request-ion-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  width: 100%;\n  height: 150px;\n  left: 0px;\n  top: 0px;\n  background: #FFC144;\n  border-radius: 200%/0 0 50px 50px;\n  margin-bottom: 30px;\n}\n.request-ion-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  right: 147px;\n  top: 44px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 41px;\n  display: flex;\n  align-items: center;\n  color: #ffffff;\n  background: #FFC144;\n  width: 100%;\n}\n.request-category[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  position: absolute;\n  height: 78px;\n  left: 15px;\n  right: 15px;\n  top: 98px;\n  background: #ffffff;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n}\n.request-category[_ngcontent-%COMP%]   .item-icon-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  padding: 0;\n}\n.request-category[_ngcontent-%COMP%]   .item-icon-col[_ngcontent-%COMP%]   .item-icon-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background: #fbe7e5;\n  border-radius: 8px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n.request-category[_ngcontent-%COMP%]   .item-icon-col[_ngcontent-%COMP%]   .item-icon-content[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.request-category[_ngcontent-%COMP%]   .item-icon-col[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 21px;\n}\n.super-tabs-div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n}\n[_nghost-%COMP%] {\n  --st-indicator-color: #FFC144;\n  --st-indicator-width: 10px;\n  --ion-color-base: transparent;\n  --st-label-color-active: #FFC144;\n  --st-label-color-inactive: #a7a4a5;\n}\n.segment-toolbar[_ngcontent-%COMP%] {\n  background: transparent;\n  margin-bottom: 15px;\n}\n.request-super-tab-button[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 35px;\n}\n.super-tab-button-label[_ngcontent-%COMP%] {\n  text-transform: none !important;\n  font-size: 14px;\n  line-height: 15px;\n  display: flex;\n  align-items: center;\n}\n.update-time[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n}\n.toolbar-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 40px;\n  --background: transparent;\n  right: 0;\n  width: 170px;\n}\n.toolbar-button[_ngcontent-%COMP%]   .reflect-button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  --border-radius: 50%;\n  float: right;\n  margin-right: 15px;\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translate(0%, -50%);\n  z-index: 99;\n}\n.toolbar-button[_ngcontent-%COMP%]   .reflect-button[_ngcontent-%COMP%]   .reflect-icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.toolbar-button[_ngcontent-%COMP%]   .reflect-label[_ngcontent-%COMP%] {\n  padding: 2px 29px 2px 11px;\n  line-height: 40px;\n  float: right;\n  color: #FFC144;\n  margin-right: 5px;\n  font-size: 12px;\n  border-radius: 20px;\n  background-color: #fbeae8;\n  width: 143px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  transform: translate(-15%, -50%);\n}\n.request-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin: 10px 15px;\n}\n.request-card[_ngcontent-%COMP%]   .request-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  color: #221c1e;\n  margin-left: 20px;\n}\n.request-card[_ngcontent-%COMP%]   .request-card-item[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.request-card[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  color: #ffffff;\n  border-radius: 0px 8px;\n  width: 80px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n}\n.request-card[_ngcontent-%COMP%]   .badge-danger[_ngcontent-%COMP%] {\n  background: #FFC144;\n}\n.request-card[_ngcontent-%COMP%]   .badge-warning[_ngcontent-%COMP%] {\n  background: #f2c94c;\n}\n.request-card[_ngcontent-%COMP%]   .badge-success[_ngcontent-%COMP%] {\n  background: #33a54c;\n}\n.request-card[_ngcontent-%COMP%]   .badge-cancel[_ngcontent-%COMP%] {\n  background: #d3d6d9;\n}\n.custom-infinite-scroll[_ngcontent-%COMP%] {\n  --color: #FFC144;\n  background: #f9fcff !important;\n}\n.footer-content[_ngcontent-%COMP%] {\n  background: #f9fcff !important;\n}\n.bottom-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  background-image: url(\"/assets/common/frame.png\");\n}\n.infinite-scroll[_ngcontent-%COMP%], .bottom-frame-wrapper[_ngcontent-%COMP%] {\n  background: #f9fcff;\n}\n.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdHMvcmVxdWVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjtBQUFFO0VBQ0UsOEJBQUE7QUFFSjtBQUNBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBRUY7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKO0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQUo7QUFFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFOO0FBRU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFSO0FBR0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRE47QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSEY7QUFNQTtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7QUFIRjtBQUtBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUZGO0FBSUE7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDTjtBQUVFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQUo7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREY7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFRTtFQUNFLFlBQUE7QUFBSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBR0E7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0FBQUY7QUFFQTtFQUNFLDhCQUFBO0FBQ0Y7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUVBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0cy9yZXF1ZXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWVzdC1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZjlmY2ZmICFpbXBvcnRhbnQ7XHJcbiAgaW9uLWluZmluaXRlLXNjcm9sbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmY2ZmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5yZXF1ZXN0LWlvbi1oZWFkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICBib3JkZXItcmFkaXVzOiAyMDAlLzAgMCA1MHB4IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgLmhlYWRlci10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE0N3B4O1xyXG4gICAgdG9wOiA0NHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5yZXF1ZXN0LWNhdGVnb3J5IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDc4cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6IDk4cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5pdGVtLWljb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5pdGVtLWljb24tY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmJlN2U1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgICAuaXRlbS1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pdGVtLWxhYmVsIHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN1cGVyLXRhYnMtZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLy8gY3VzdG9tIHN1cGVyLXRhYlxyXG46aG9zdCB7XHJcbiAgLS1zdC1pbmRpY2F0b3ItY29sb3I6ICNGRkMxNDQ7XHJcbiAgLS1zdC1pbmRpY2F0b3Itd2lkdGg6IDEwcHg7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQ7XHJcbiAgLS1zdC1sYWJlbC1jb2xvci1hY3RpdmU6ICNGRkMxNDQ7XHJcbiAgLS1zdC1sYWJlbC1jb2xvci1pbmFjdGl2ZTogI2E3YTRhNTtcclxufVxyXG4uc2VnbWVudC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucmVxdWVzdC1zdXBlci10YWItYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbi5zdXBlci10YWItYnV0dG9uLWxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnVwZGF0ZS10aW1lIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG5cclxuLnRvb2xiYXItYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA0MHB4O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG5cclxuICAucmVmbGVjdC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICAucmVmbGVjdC1pY29uIHtcclxuICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJlZmxlY3QtbGFiZWwge1xyXG4gICAgcGFkZGluZzogMnB4IDI5cHggMnB4IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZWFlODtcclxuICAgIHdpZHRoOiAxNDNweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUlLCAtNTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5yZXF1ZXN0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gIC5yZXF1ZXN0LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5yZXF1ZXN0LWNhcmQtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIC5iYWRnZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDhweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5iYWRnZS1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICB9XHJcbiAgLmJhZGdlLXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2YyYzk0YztcclxuICB9XHJcbiAgLmJhZGdlLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZDogIzMzYTU0YztcclxuICB9XHJcbiAgLmJhZGdlLWNhbmNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNkNmQ5O1xyXG4gIH1cclxufVxyXG4uY3VzdG9tLWluZmluaXRlLXNjcm9sbCB7XHJcbiAgLS1jb2xvcjogI0ZGQzE0NDtcclxuICBiYWNrZ3JvdW5kOiAjZjlmY2ZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvb3Rlci1jb250ZW50e1xyXG4gIGJhY2tncm91bmQ6ICNmOWZjZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvdHRvbS1mcmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvY29tbW9uL2ZyYW1lLnBuZycpO1xyXG59XHJcblxyXG4uaW5maW5pdGUtc2Nyb2xsLCAuYm90dG9tLWZyYW1lLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOWZjZmY7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-requests',
                templateUrl: './requests.page.html',
                styleUrls: ['./requests.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=requests-requests-module-es2015.js.map