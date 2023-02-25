(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shop-house-shop-house-module"],{

/***/ "frra":
/*!*******************************************************!*\
  !*** ./src/app/pages/shop-house/shop-house.module.ts ***!
  \*******************************************************/
/*! exports provided: ShopHousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHousePageModule", function() { return ShopHousePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shop_house_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-house.page */ "vTrG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");











const routes = [
    {
        path: '',
        component: _shop_house_page__WEBPACK_IMPORTED_MODULE_5__["ShopHousePage"]
    }
];
class ShopHousePageModule {
}
ShopHousePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShopHousePageModule });
ShopHousePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShopHousePageModule_Factory(t) { return new (t || ShopHousePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopHousePageModule, { declarations: [_shop_house_page__WEBPACK_IMPORTED_MODULE_5__["ShopHousePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopHousePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                    _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_shop_house_page__WEBPACK_IMPORTED_MODULE_5__["ShopHousePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vTrG":
/*!*****************************************************!*\
  !*** ./src/app/pages/shop-house/shop-house.page.ts ***!
  \*****************************************************/
/*! exports provided: ShopHousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHousePage", function() { return ShopHousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _utils_const_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/const.service */ "KQOL");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _booking_shop_house_booking_shop_house_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../booking-shop-house/booking-shop-house.page */ "w97y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");





















const _c0 = ["content"];
const _c1 = ["sub_header"];
function ShopHousePage_div_17_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.shopInfoData.stars);
} }
function ShopHousePage_div_17_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.shopInfoData.promotionKM);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.shopInfoData.promotion);
} }
function ShopHousePage_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ShopHousePage_div_17_div_7_Template, 4, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ShopHousePage_div_17_div_8_Template, 5, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.shopInfoData == null ? null : ctx_r1.shopInfoData.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.shopInfoData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.shopInfoData.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.shopInfoData.promotionKM);
} }
function ShopHousePage_ion_slides_19_ion_slide_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r11 == null ? null : item_r11.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ShopHousePage_ion_slides_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShopHousePage_ion_slides_19_ion_slide_1_Template, 2, 1, "ion-slide", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.slideOpts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.shopInfoData.attachments);
} }
const _c2 = function (a0) { return { "disabled": a0 }; };
function ShopHousePage_div_35_div_1_ion_grid_1_ion_row_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopHousePage_div_35_div_1_ion_grid_1_ion_row_4_Template_img_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const data_r17 = ctx.$implicit; const object_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r18.downNumberProduct_1(object_r15.id_tab, data_r17._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopHousePage_div_35_div_1_ion_grid_1_ion_row_4_Template_img_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const data_r17 = ctx.$implicit; const object_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.upNumberProduct_1(object_r15.id_tab, data_r17._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r17.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", data_r17.money, "\u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, data_r17.number === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r17.number);
} }
function ShopHousePage_div_35_div_1_ion_grid_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ShopHousePage_div_35_div_1_ion_grid_1_ion_row_4_Template, 19, 7, "ion-row", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const object_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", object_r15.id_tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", object_r15.data);
} }
function ShopHousePage_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShopHousePage_div_35_div_1_ion_grid_1_Template, 5, 3, "ion-grid", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.data_shop_house.group_2);
} }
function ShopHousePage_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SHOP_HOUSE.not_found_data"), " ");
} }
function ShopHousePage_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShopHousePage_div_35_div_1_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShopHousePage_div_35_div_2_Template, 3, 3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.data_shop_house.group_2.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.data_shop_house.group_2.length == 0);
} }
function ShopHousePage_div_36_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 81);
} }
function ShopHousePage_div_36_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 82);
} }
function ShopHousePage_div_36_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r27.isOpen ? "open-time-item-active" : "open-time-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r27.display, "");
} }
function ShopHousePage_div_36_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShopHousePage_div_36_div_19_div_1_Template, 2, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r25.shopOpenList);
} }
function ShopHousePage_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopHousePage_div_36_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.shopOpenTimeExpand = !ctx_r28.shopOpenTimeExpand; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ShopHousePage_div_36_img_17_Template, 1, 0, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ShopHousePage_div_36_img_18_Template, 1, 0, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ShopHousePage_div_36_div_19_Template, 2, 1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-row", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.shopInfoData == null ? null : ctx_r4.shopInfoData.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.shopInfoData == null ? null : ctx_r4.shopInfoData.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 8, ctx_r4.shopOpenTime ? ctx_r4.shopOpenTime : "SHOP_HOUSE.close"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.shopOpenTimeExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.shopOpenTimeExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.shopOpenTimeExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 10, "SHOP_HOUSE.about_shop"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.shopInfoData == null ? null : ctx_r4.shopInfoData.content, " ");
} }
function ShopHousePage_div_37_ion_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rating_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", (rating_r31 == null ? null : rating_r31.createdBy == null ? null : rating_r31.createdBy.avatar) ? rating_r31.createdBy.avatar : "assets/icon/service-info/user.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rating_r31 == null ? null : rating_r31.createdBy == null ? null : rating_r31.createdBy.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rating_r31 == null ? null : rating_r31.userComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rating_r31 == null ? null : rating_r31.starsProvider);
} }
function ShopHousePage_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ShopHousePage_div_37_ion_item_13_Template, 13, 4, "ion-item", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.shopInfoData == null ? null : ctx_r5.shopInfoData.stars, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r5.shopInfoData == null ? null : ctx_r5.shopInfoData.numberEvaluation, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, "SEVICE_29.rate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.listRatingShop);
} }
function ShopHousePage_ion_infinite_scroll_38_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-infinite-scroll", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function ShopHousePage_ion_infinite_scroll_38_Template_ion_infinite_scroll_ionInfinite_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.loadData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-infinite-scroll-content", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ShopHousePage_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.total_money);
} }
const _c3 = function (a0) { return { "display": a0 }; };
class ShopHousePage {
    constructor(translate, loading, apiService, navCtrl, alertService, platform, route, modalController) {
        this.translate = translate;
        this.loading = loading;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.platform = platform;
        this.route = route;
        this.modalController = modalController;
        this.currentTab = 0;
        this.currentEvaluationPage = 1;
        this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_4__["ConstService"].NUMBER_RECORD_ON_PAGE;
        this.shopId = '';
        this.shopInfoData = null;
        this.shopOpenList = [];
        this.shopOpenTime = '';
        this.shopOpenTimeExpand = false;
        this.listRatingShop = [];
        this.slideOptsShop = {
            initialSlide: 0,
            slidesPerView: 1.1,
            centeredSlides: true,
            spaceBetween: 10,
            autoplay: true,
        };
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 0.99,
            centeredSlides: true,
            spaceBetween: 0,
            autoplay: true,
        };
        platform.ready().then((readySource) => {
            this.heightScreen = platform.height() * 0.58 - 18;
        });
    }
    ngOnInit() {
        this.data_shop_house = {};
        this.data_shop_house['group_1'] = [];
        this.data_shop_house['group_2'] = [];
        const data_id = this.route.snapshot.paramMap.get('id');
        this.shopId = data_id;
        this.total_money = '';
        this.disable_button_send = 'button-disable';
        this.showHeader = 1;
        this.position_product = 1;
        this.flag_show_hide_popup = false;
        this.active_tabs = 1;
        this.first_item = '';
        this.is_click_button = false;
        this.getShopDetailV2(data_id);
        this.getShopProducts(data_id);
        this.getEvaluationShopV2();
    }
    ionViewWillEnter() { }
    slideToIndex(index) {
        this.superTabs.selectTab(index);
    }
    getShopDetailV2(_id) {
        this.apiService.getShopDetailV2(_id).subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.shopInfoData = result.shopHouseV2;
            if (!this.shopInfoData.logo && result.shopHouseV2.attachments && result.shopHouseV2.attachments.length > 0) {
                this.shopInfoData.logo = result.shopHouseV2.attachments[0].url;
            }
            if (this.shopInfoData.typeShop == 'AMO') {
                this.shopInfoData.phone = _utils_const_service__WEBPACK_IMPORTED_MODULE_4__["ConstService"].PHONE_AMO;
                this.shopInfoData.address = _utils_const_service__WEBPACK_IMPORTED_MODULE_4__["ConstService"].ADDRESS_AMO;
            }
            else {
                this.shopInfoData.phone = ((_b = (_a = this.shopInfoData) === null || _a === void 0 ? void 0 : _a.apartment) === null || _b === void 0 ? void 0 : _b.campaign.phone) ? this.shopInfoData.apartment.campaign.phone : '';
                this.shopInfoData.address = ((_c = this.shopInfoData) === null || _c === void 0 ? void 0 : _c.apartment) ? (((_e = (_d = this.shopInfoData) === null || _d === void 0 ? void 0 : _d.apartment) === null || _e === void 0 ? void 0 : _e.title) + ' - ' + ((_h = (_g = (_f = this.shopInfoData) === null || _f === void 0 ? void 0 : _f.apartment) === null || _g === void 0 ? void 0 : _g.campaign) === null || _h === void 0 ? void 0 : _h.title)) : '';
            }
            this.shopInfoData.content = this.shopInfoData.content.replace(/(<([^>]+)>)/gi, '');
            this.data_shop_house['shopInfo'] = this.shopInfoData;
            try {
                const timeOpenDetail = JSON.parse(this.shopInfoData.timeOpenDetail);
                this.shopOpenList = timeOpenDetail.map((item, index) => {
                    item.id = index + 1;
                    if (this.checkOpenShop(item.start, item.end)) {
                        item.display = `${this.translate.instant('SHOP_HOUSE.open')} - ${item.start} ${this.translate.instant('SHOP_HOUSE.to')} ${item.end}`;
                        item.isOpen = true;
                        this.shopOpenTime = item.display;
                        return item;
                    }
                    else {
                        item.display = `${item.start} ${this.translate.instant('SHOP_HOUSE.to')} ${item.end}`;
                        item.isOpen = false;
                        return item;
                    }
                });
            }
            catch (e) {
                this.shopOpenTime = `${this.translate.instant('SHOP_HOUSE.open_not_time')} ${this.shopInfoData.timeOpenDetail}`;
            }
        }, (error) => { });
    }
    getShopProducts(_id) {
        const self = this;
        this.data_shop_house['group_1'] = [];
        this.data_shop_house['group_2'] = [];
        this.loading.present();
        this.apiService.getProductShopV2(_id).subscribe((result) => {
            let data_shop_product = result.shopProductsV2;
            data_shop_product.forEach((product) => {
                let index = self.getIndexCategoryInList(product.category._id);
                if (self.first_item == '') {
                    self.first_item = product.category._id;
                }
                if (index < 0) {
                    self.data_shop_house['group_2'].push({
                        id_tab: product.category._id,
                        title: product.category.title,
                        data: [],
                    });
                    index = self.data_shop_house['group_2'].length - 1;
                }
                let title = product.title;
                let money = product.price;
                if (product.discountProducts && product.discountProducts.length > 0) {
                    let today = new Date();
                    let startAt = new Date(product.discountProducts[0].startAt);
                    let endAt = new Date(product.discountProducts[0].endAt);
                    if (startAt <= today && today <= endAt) {
                        money = product.discountProducts[0].discountValue;
                    }
                }
                let object = {
                    _id: product._id,
                    image: product.thumbnail,
                    title: title,
                    money: self.convertFormatMoney(money),
                    note: product.excerpt,
                    number: 0,
                };
                self.data_shop_house.group_2[index].data.push(object);
            });
            self.loading.dismiss();
        }, (error) => {
            self.loading.dismiss();
        });
    }
    getEvaluationShopV2(event = null) {
        this.loading.present();
        this.apiService.getEvaluationShopV2(this.shopId, this.currentEvaluationPage, this.numberRecordOnPage).subscribe((result) => {
            this.listRatingShop.push(...result.listOrdersHistory);
            if (event) {
                event.target.complete();
            }
            this.loading.dismiss();
        }, (error) => {
            if (event) {
                event.target.complete();
            }
            this.loading.dismiss();
        });
    }
    loadData(event) {
        this.currentEvaluationPage++;
        this.getEvaluationShopV2(event);
    }
    tabChange(event) {
        this.currentTab = event.detail.index;
    }
    // getStyleRange1(_id) {
    //   let range1 = this.list_data_range[_id][0];
    //   let range2 = 'calc(' + this.list_data_range[_id][1] + ' - 18px)';
    //   return [range1, range2];
    // }
    downNumberProduct(id) {
        var self = this;
        self.data_shop_house.group_1.forEach((product) => {
            if (product._id == id && product.number > 0) {
                product.number--;
            }
        });
        this.getTotalMoney();
    }
    upNumberProduct(id) {
        var self = this;
        self.data_shop_house.group_1.forEach((product) => {
            if (product._id == id && product.number < 10000) {
                product.number++;
            }
        });
        this.getTotalMoney();
    }
    downNumberProduct_1(id_tab, id) {
        var self = this;
        self.data_shop_house.group_2.forEach((object) => {
            if (object.id_tab == id_tab) {
                object.data.forEach((product) => {
                    if (product._id == id && product.number > 0) {
                        product.number--;
                    }
                });
            }
        });
        this.getTotalMoney();
    }
    upNumberProduct_1(id_tab, id) {
        var self = this;
        self.data_shop_house.group_2.forEach((object) => {
            if (object.id_tab == id_tab) {
                object.data.forEach((product) => {
                    if (product._id == id && product.number < 1000) {
                        product.number++;
                    }
                });
            }
        });
        this.getTotalMoney();
    }
    selectAllEvent(id_tab) {
        var self = this;
        self.data_shop_house.group_2.forEach((object) => {
            if (object.id_tab == id_tab) {
                object.data.forEach((product) => {
                    if (product.number == 0) {
                        product.number++;
                    }
                });
            }
        });
        this.getTotalMoney();
    }
    getTotalMoney() {
        var self = this;
        this.total_money = '';
        var total = 0;
        self.data_shop_house.group_1.forEach((product) => {
            if (product.number > 0) {
                total = total + product.number * parseInt(product.money.replace(/\./g, '').replace(/đ/g, ''));
            }
        });
        self.data_shop_house.group_2.forEach((object) => {
            object.data.forEach((product) => {
                if (product.number > 0) {
                    total = total + product.number * parseInt(product.money.replace(/\./g, '').replace(/đ/g, ''));
                }
            });
        });
        if (total > 0) {
            this.total_money = this.convertFormatMoney(total) + 'đ';
        }
        this.checkStatusButtonSend();
    }
    checkStatusButtonSend() {
        if (this.total_money != '') {
            this.disable_button_send = '';
        }
        else {
            this.disable_button_send = 'button-disable';
        }
    }
    // goToPageBookingShopHouse() {
    //   localStorage.setItem('data-shop-house', JSON.stringify(this.data_shop_house));
    //   this.navCtrl.navigateForward('/booking-shop-house');
    // }
    goToPageBookingShopHouse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.setItem('data-shop-house', JSON.stringify(this.data_shop_house));
            const modal = yield this.modalController.create({
                component: _booking_shop_house_booking_shop_house_page__WEBPACK_IMPORTED_MODULE_10__["BookingShopHousePage"],
                cssClass: 'booking-shop-house-modal-css',
            });
            return yield modal.present();
        });
    }
    convertFormatMoney(value) {
        value = value.toString();
        let convert1 = '';
        let convert2 = '';
        let count1 = value.length;
        for (let i = 1; i <= count1; i++) {
            if (i % 3 == 0 && i != count1) {
                convert1 = convert1 + value[count1 - i] + '.';
            }
            else {
                convert1 = convert1 + value[count1 - i];
            }
        }
        let count2 = convert1.length;
        for (let i = 1; i <= count2; i++) {
            convert2 = convert2 + convert1[count2 - i];
        }
        return convert2;
    }
    onScroll(event) {
        if (document.getElementById('shop_info')) {
            let position_y = document.getElementById('shop_info').getClientRects()[0];
            if (position_y['y'] > 10) {
                // this.slideToIndex(0);
                this.showHeader = 1;
            }
            else {
                if (this.showHeader == 1) {
                    this.showHeader = 2;
                    // this.slideToIndex(0);
                }
                else {
                    this.showHeader = 2;
                }
            }
        }
        if (document.getElementById('group-data-product')) {
            let position_y_product = document.getElementById('group-data-product').getClientRects()[0];
            this.position_product = position_y_product['y'];
        }
        // if (!this.is_click_button) {
        //   this.checkActiveTabs(event);
        // }
    }
    checkActiveTabs(event) {
        var self = this;
        var scrollTop = event.detail.scrollTop;
        if (this.showHeader == 2) {
            var index = 0;
            var tabs = 0;
            self.data_shop_house.group_2.forEach((object) => {
                let top = document.getElementById(object.id_tab).offsetTop;
                let height_aphal = self.sub_header.el.offsetHeight;
                if (scrollTop + 100 > top - height_aphal) {
                    tabs = index;
                }
                index++;
            });
            self.slideToIndex(tabs);
        }
    }
    getStyleHeaderPrduct() {
        if (this.position_product > 250) {
            return ['none', 0];
        }
        else if (this.position_product < 250 && this.position_product > 100) {
            let opacity = 1 - (this.position_product - 100) / 150;
            return ['', opacity];
        }
        else {
            return ['', 1];
        }
    }
    eventClickTabs(id_tab) {
        var self = this;
        if (this.is_click_button) {
            return;
        }
        self.is_click_button = true;
        let top = document.getElementById(id_tab).offsetTop;
        let height_aphal = this.sub_header.el.offsetHeight;
        this.content.scrollToPoint(0, top - height_aphal, 300);
        setTimeout(function () {
            self.is_click_button = false;
        }, 300);
    }
    getStyleHeader(index) {
        if (index == this.showHeader) {
            return '';
        }
        else {
            return 'none';
        }
    }
    getIndexCategoryInList(id_tab) {
        var self = this;
        let index = -1;
        let index_value = -1;
        self.data_shop_house.group_2.forEach((object) => {
            index++;
            if (object.id_tab == id_tab) {
                index_value = index;
            }
        });
        return index_value;
    }
    eventButtonClosePopup() {
        this.flag_show_hide_popup = false;
    }
    eventButtonShowPopup() {
        this.flag_show_hide_popup = true;
        this.slideToIndex(1);
    }
    eventClickGroupPon(object) {
        localStorage.setItem('data-booking-product', JSON.stringify(object));
        this.navCtrl.navigateForward('/booking-product/' + 'groupon');
    }
    getClassLabelProduct(object) {
        if (this.first_item == object.id_tab) {
            return '';
        }
        else {
            return 'line-product';
        }
    }
    checkOpenShop(startHour, endHour) {
        const currentDate = new Date();
        const startDate = new Date();
        const endDate = new Date();
        const startArray = startHour.split(':');
        const startHourNumber = startArray.length > 0 ? +startArray[0] : 0;
        const startMinutNumber = startArray.length == 2 ? +startArray[1] : 0;
        const endArray = endHour.split(':');
        const endHourNumber = endArray.length > 0 ? +endArray[0] : 0;
        const endMinutNumber = endArray.length == 2 ? +endArray[1] : 0;
        const currentTime = currentDate.getTime();
        startDate.setHours(startHourNumber, startMinutNumber, 0);
        const startTime = startDate.getTime();
        endDate.setHours(endHourNumber, endMinutNumber, 0);
        const endTime = endDate.getTime();
        if (currentTime > startTime && currentTime < endTime) {
            return true;
        }
        return false;
    }
}
ShopHousePage.ɵfac = function ShopHousePage_Factory(t) { return new (t || ShopHousePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"])); };
ShopHousePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShopHousePage, selectors: [["app-shop-house"]], viewQuery: function ShopHousePage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabs"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sub_header = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.superTabs = _t.first);
    } }, decls: 46, vars: 35, consts: [["id", "main-header-toolbar", 1, "ion-no-border", 3, "ngStyle"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "back-btn"], ["id", "sub-header-toolbar", 1, "ion-no-border", "w3-animate-top", "second-header", 3, "ngStyle"], [1, "header-splash"], ["lines", "none", 1, "ion-item-second"], ["slot", "start", 1, "logo-wrapper"], [1, "shop-logo-2", 3, "src"], [1, "ion-text-wrap", "content-two-line", "header-title"], ["slot", "start", 1, "back-button-second"], ["text", "", "icon", "chevron-back", 1, "back-btn-second"], ["id", "content_page", 3, "scrollEvents", "ionScroll"], ["content", ""], ["lines", "none", 1, "ion-no-padding"], [1, "image-page", 3, "src"], ["class", "group-1-logo", "id", "shop_info", 4, "ngIf"], ["pager", "false", "class", "discount-slider", 3, "options", 4, "ngIf"], [1, "super-tabs-shop-shouse", 3, "tabChange"], ["slot", "top"], [1, "super-tab-button"], ["autoScrollTop", "false"], ["class", "super-tabs-content", 4, "ngIf"], ["threshold", "50px", 3, "ionInfinite", 4, "ngIf"], [1, "full-width", "function-section", "shadow-section"], ["expand", "block", 3, "click"], [1, "pay-button-text"], [1, "btn-send-title"], ["class", "btn-send-title", 4, "ngIf"], ["id", "shop_info", 1, "group-1-logo"], [1, "logo-wrapper"], [1, "shop-logo", 3, "src"], [1, "title-wrapper"], [1, "ion-text-wrap", "title-1", "font-weight-bold"], [1, "service-infos"], ["class", "group-1-text-star", 4, "ngIf"], ["class", "group-1-text-discount", 4, "ngIf"], [1, "group-1-text-star"], ["src", "../assets/icon/svg/icon-star.svg", 1, "group-1-icon-star"], [1, "class-label-rate"], [1, "group-1-text-discount"], [1, "discount-icon"], [1, "class-label-promotion"], ["pager", "false", 1, "discount-slider", 3, "options"], [4, "ngFor", "ngForOf"], [3, "src"], [1, "super-tabs-content"], ["class", "group-data", 4, "ngIf"], ["class", "not-found-service", 4, "ngIf"], [1, "group-data"], ["class", "ion-no-padding pading-ion-grid padding-top-20 padding-bottom-10", 3, "id", 4, "ngFor", "ngForOf"], [1, "ion-no-padding", "pading-ion-grid", "padding-top-20", "padding-bottom-10", 3, "id"], [1, "title-shop-product"], [1, "serviec-title"], ["class", "row-data-product", 4, "ngFor", "ngForOf"], [1, "row-data-product"], ["size", "12", 1, "item", "ion-col-class", "group-2-col-1"], [1, "row", "div-title-col-2"], [1, "col-12"], [1, "white-space-normal"], [1, "div-note-col-2"], ["size", "12"], ["size", "7", 1, "col-data-money"], [1, "font-weight-bold", "white-space-normal"], ["size", "5", 1, "group-1-button-change-number"], ["src", "../assets/common/minus.svg", 1, "icon-button-3", 3, "ngClass", "click"], [1, "group-1-label-1", "font-weight-bold"], ["src", "../assets/common/plus.svg", 1, "icon-button-3", 3, "click"], [1, "not-found-service"], [1, "ion-no-padding", "pading-ion-grid", "padding-top-20", "padding-bottom-20"], [1, "service-general-infos"], [1, "info-icon"], ["src", "assets/icon/service-info/phone.svg"], [1, "info-label"], ["src", "assets/icon/service-info/map-pin.svg"], [1, "open-time-dropdown"], [1, "open-time-item-active", 3, "click"], ["src", "assets/icon/service-info/down.svg", 4, "ngIf"], ["src", "assets/icon/service-info/down.svg", "class", "icon-up", 4, "ngIf"], ["class", "open-time-expand", 4, "ngIf"], [1, "title-shop-product", "service-intro"], [1, "service-intro-text"], ["src", "assets/icon/service-info/down.svg"], ["src", "assets/icon/service-info/down.svg", 1, "icon-up"], [1, "open-time-expand"], [3, "class", 4, "ngFor", "ngForOf"], [1, "average-rating-wrapper"], [1, "average-rating-score"], [1, "average-rating-star"], ["src", "assets/icon/service-info/star.svg"], [1, "total-rating-text"], [1, "user-rating-wrapper"], [1, "user-rating-list"], [1, "user-rating-item"], [1, "user-rating-avatar"], [1, "user-rating-comment-wrapper"], [1, "user-name"], [1, "user-comment"], [1, "user-rating"], [1, "rating-value"], ["src", "assets/icon/service-info/star.svg", 1, "rating-star-img"], ["threshold", "50px", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""]], template: function ShopHousePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-card-title", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-buttons", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-back-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-content", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScroll", function ShopHousePage_Template_ion_content_ionScroll_13_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ShopHousePage_div_17_Template, 9, 4, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ShopHousePage_ion_slides_19_Template, 2, 2, "ion-slides", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "super-tabs", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tabChange", function ShopHousePage_Template_super_tabs_tabChange_20_listener($event) { return ctx.tabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "super-tabs-toolbar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "super-tab-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "super-tab-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "super-tab-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "super-tabs-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ShopHousePage_div_35_Template, 3, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ShopHousePage_div_36_Template, 27, 12, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ShopHousePage_div_37_Template, 14, 6, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ShopHousePage_ion_infinite_scroll_38_Template, 2, 0, "ion-infinite-scroll", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShopHousePage_Template_ion_button_click_40_listener() { return ctx.goToPageBookingShopHouse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ShopHousePage_div_45_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c3, ctx.getStyleHeader(1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c3, ctx.getStyleHeader(2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.shopInfoData == null ? null : ctx.shopInfoData.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.shopInfoData == null ? null : ctx.shopInfoData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", (ctx.shopInfoData == null ? null : ctx.shopInfoData.logo) ? ctx.shopInfoData == null ? null : ctx.shopInfoData.logo : ctx.shopInfoData == null ? null : ctx.shopInfoData.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.shopInfoData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ion-discount-meter-wrapper ", (ctx.shopInfoData == null ? null : ctx.shopInfoData.attachments) && ctx.shopInfoData.attachments.length > 0 ? "" : "ion-discount-height", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.shopInfoData == null ? null : ctx.shopInfoData.attachments) && ctx.shopInfoData.attachments.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 23, "SHOP_HOUSE.service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 25, "SHOP_HOUSE.supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 27, "SHOP_HOUSE.rating"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentTab == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentTab == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentTab == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentTab == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("amo-button-custom padding-0 ", ctx.disable_button_send, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 29, "SEVICE_29.button_send"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.total_money);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabs"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabsToolbar"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabsContainer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\nion-header[_ngcontent-%COMP%] {\n  position: fixed;\n  padding-top: 30px;\n}\n\n.button-back-custom[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.3);\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.ion-color-primary[_ngcontent-%COMP%] {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: #FFC144 !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\nsuper-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 15px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #221c1e;\n  opacity: 0.4;\n}\n\nsuper-tab-button.active[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #FFC144;\n  opacity: 1;\n}\n\nsuper-tabs-toolbar[_ngcontent-%COMP%]::after {\n  background-image: unset;\n}\n\nsuper-tab-button[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f4f5f5;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.item-common[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 0px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 17px;\n  margin-right: 17px;\n}\n\n.group-1-text-title[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313f;\n  margin-top: 10px;\n}\n\n.group-1-text-title[_ngcontent-%COMP%]   .div-1[_ngcontent-%COMP%] {\n  width: calc(100%- 20px);\n}\n\n.group-1-text-title[_ngcontent-%COMP%]   .div-2[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.group-1-icon-place[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  min-width: 10px;\n  margin-top: 1px;\n}\n\n.group-1-icon-info[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n\n.group-1-text-place[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313f;\n  margin-top: 10px;\n}\n\n.group-1-icon-star[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.group-1-icon-tag[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 8px;\n}\n\n.ion-item-class[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f4f5f5;\n  margin: 0px 20px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  --inner-border-width: 0px;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  z-index: 999;\n  bottom: 0px;\n  width: 100%;\n  padding: 10px 20px;\n  background-color: #ffffff;\n}\n\n.function-section[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.line-1[_ngcontent-%COMP%] {\n  border-top: 6px solid #f4f5f5;\n}\n\n.line-product[_ngcontent-%COMP%] {\n  border-top: 6px solid #f4f5f5;\n}\n\n.group-1-slider-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #009ac9;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.note-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 10px;\n  left: 0;\n  background-color: #eb5757;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.note-2[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 10px;\n  left: 0;\n  background-color: #009ac9;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.ion-grid-class[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.group-1-button-change-number[_ngcontent-%COMP%] {\n  position: relative;\n  width: 110px;\n  height: 32px;\n  text-align: right;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.group-1-label-1[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #221c1e;\n}\n\n.button-3-1[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n}\n\n.button-3-2[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  right: 0;\n}\n\n.icon-button-3[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.icon-button-3.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.2;\n}\n\n.group-2-col-2[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.group-2-col-3[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.div-title-col-2[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.div-title-col-2[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n}\n\n.div-note-col-2[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #221c1e;\n  opacity: 0.5;\n}\n\n.div-note-col-2[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n\n.margin-bottom-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.row-data-product[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #e9e9e9;\n  padding: 10px 0;\n}\n\n.col-group-2-image[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  --border-width: 0;\n}\n\n.class-super-tabs[_ngcontent-%COMP%] {\n  height: auto;\n  display: inherit;\n}\n\n.group-3-sub-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 28px;\n  font-weight: 400;\n}\n\n.group-3-select-all[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 14px;\n  line-height: 20px;\n  color: #009ac9;\n}\n\n.scroll-class[_ngcontent-%COMP%] {\n  overflow: scroll;\n  height: 100%;\n}\n\n.hidden-overflow[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.margin-bottom-15[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.shadow-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 10px rgba(234, 122, 110, 0.25);\n  border-radius: 10px 10px 0px 0px;\n}\n\n.div-logo[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.button-disable[_ngcontent-%COMP%] {\n  --background: #d3d6d9 !important;\n  text-transform: none;\n  --background-activated: rgba(250, 114, 104, 0.5);\n  border-radius: 8px;\n  --border-radius: 8px;\n  padding: 0px 16px 0px 16px;\n  pointer-events: none;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  background-color: #00000005;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  pointer-events: none;\n  bottom: 0px;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 24px 24px 0px 0px;\n}\n\n.close[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n\n.div-header-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem -1rem;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.modal-body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.popup-ion-item[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n}\n\n.popup-text-1[_ngcontent-%COMP%] {\n  white-space: unset;\n  padding: 20px 15px;\n  font-size: 16px;\n  white-space: pre-line !important;\n}\n\n.popup-text-2[_ngcontent-%COMP%] {\n  white-space: unset;\n  font-size: 14px;\n  color: #009ac9;\n}\n\n.div-promotion-code[_ngcontent-%COMP%] {\n  background: #97171b;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.1);\n  border-radius: 10px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%] {\n  border-radius: 8px 0px 8px 0px;\n  overflow: hidden;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .range-1[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #ffffff;\n  border-radius: 16px;\n  width: 50%;\n  height: 4px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .range-2[_ngcontent-%COMP%] {\n  background: #ffffff;\n  opacity: 0.3;\n  border-radius: 16px;\n  width: 100%;\n  height: 4px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-1[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #ffffff;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-1[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #f4f5f5;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  white-space: normal;\n  margin-top: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  max-height: 60px;\n  -webkit-box-orient: vertical;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  color: #ffffff;\n  display: block;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  margin-top: 5px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  margin-top: 5px;\n  position: absolute;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  margin-top: 5px;\n  position: absolute;\n  right: 0;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .div-promotion-code[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-3[_ngcontent-%COMP%]   .item-1[_ngcontent-%COMP%] {\n  vertical-align: initial;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-3[_ngcontent-%COMP%]   .item-2[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 5px;\n}\n\n.group-1-deadline[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #009ac9;\n  border-radius: 8px 0px;\n  padding: 2px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n.ion-sub-toolbar-2[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-bottom: 0;\n  --min-height: 0;\n}\n\n.ion-sub-toolbar-1[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.pading-ion-grid[_ngcontent-%COMP%] {\n  margin-left: 17px;\n  margin-right: 17px;\n}\n\n.title-shop-product[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n  margin-bottom: 10px;\n}\n\n.group-1-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 180px;\n  z-index: 2;\n  left: 0;\n  right: 0;\n  display: flex;\n  background: #fff;\n  border-radius: 20px 20px 0 0;\n  padding: 12px 15px 0 15px;\n  align-items: center;\n}\n\n.group-1-logo[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  width: 60px;\n  height: auto;\n  max-height: 60px;\n  border-radius: 30px;\n}\n\n.group-1-logo[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.title-wrapper[_ngcontent-%COMP%] {\n  width: calc(100% - 45px);\n  padding: 0 12px;\n  position: relative;\n}\n\n.title-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 26px;\n  color: #221c1e;\n  margin-bottom: 10px;\n}\n\n.group-1-text-star[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n}\n\n.group-1-text-star[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n\n.group-1-text-star[_ngcontent-%COMP%]   .class-label-rate[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n}\n\n.group-1-text-discount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n  margin-left: 20px;\n  overflow: hidden;\n}\n\n.group-1-text-discount[_ngcontent-%COMP%]   .discount-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  min-width: 16px;\n  background-image: url(/assets/icon/service-info/discount-icon.svg);\n  background-repeat: no-repeat;\n  background-size: 16px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 6px;\n  line-height: 17px;\n  text-align: center;\n  color: #ffffff;\n  margin-right: 3px;\n}\n\n.group-1-text-discount[_ngcontent-%COMP%]   .class-label-promotion[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 16px;\n  color: #666666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.service-infos[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 8px;\n}\n\n.ion-discount-meter-wrapper[_ngcontent-%COMP%] {\n  padding: 0 15px;\n  margin-top: 85px;\n  height: 134px;\n}\n\n.ion-discount-meter-wrapper[_ngcontent-%COMP%]   .discount-slider[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 15px;\n}\n\n.ion-discount-meter-wrapper[_ngcontent-%COMP%]   .discount-slider[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  -o-object-fit: unset !important;\n     object-fit: unset !important;\n}\n\n.ion-discount-height[_ngcontent-%COMP%] {\n  height: 0px !important;\n}\n\n.image-page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 205px;\n}\n\n.discount-meter[_ngcontent-%COMP%] {\n  width: 100%;\n  background: linear-gradient(180deg, #ffc144 0%, #ee9a1c 100%);\n  box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.1);\n  border-radius: 15px;\n  padding: 10px 15px;\n  color: #fff;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .discount-present-icon[_ngcontent-%COMP%] {\n  background-image: url(/assets/icon/service-info/present-icon.svg);\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 70px;\n  height: 60px;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  opacity: 0.5;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  width: 60%;\n  height: 40px;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%]   .milestones-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  z-index: 2;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%]   .milestones-wrapper[_ngcontent-%COMP%]   .mile-stone[_ngcontent-%COMP%] {\n  margin: 0 10%;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 20px;\n  color: #ffffff;\n  position: relative;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%]   .milestones-wrapper[_ngcontent-%COMP%]   .mile-stone[_ngcontent-%COMP%]::after {\n  content: \"\";\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 26px;\n  left: 0;\n  transform: translate(0, -50%);\n  background: #ffffff;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%]   .milestones-wrapper[_ngcontent-%COMP%]   .mile-stone[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%]   .milestones-wrapper[_ngcontent-%COMP%]   .mile-stone[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%]   .discount-progress[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50px;\n  position: absolute;\n  left: 0;\n  right: 10px;\n  top: 60%;\n  height: 5px;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .progress-wrapper[_ngcontent-%COMP%]   .discount-progress[_ngcontent-%COMP%]   .crurent-progress[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: 5px;\n  border-radius: 50px;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .discount-inof-item[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  margin-right: 30px;\n}\n\n.discount-meter[_ngcontent-%COMP%]   .discount-inof-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-right: 5px;\n}\n\n.not-found-service[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.serviec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.serviec-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 2px;\n  width: 30px;\n  background: #FFC144;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.pay-button-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n}\n\n.pay-button-text[_ngcontent-%COMP%]   .btn-send-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n}\n\n.service-info-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n\n.service-general-infos[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.service-general-infos[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n}\n\n.service-general-infos[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  color: #221c1e;\n  max-width: 90%;\n}\n\n.open-time-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 15px;\n  background: #F8FAF5;\n  border-radius: 20px;\n  padding: 10px 20px;\n  min-height: 40px;\n}\n\n.open-time-dropdown[_ngcontent-%COMP%]   .open-time-item-active[_ngcontent-%COMP%] {\n  --background: rgba(110, 165, 51, 0.05);\n  color: #6ea533;\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n}\n\n.open-time-dropdown[_ngcontent-%COMP%]   .open-time-expand[_ngcontent-%COMP%] {\n  border-top: 1px dashed #c8ccd0;\n  margin-top: 10px;\n  padding-top: 5px;\n}\n\n.open-time-dropdown[_ngcontent-%COMP%]   .open-time-expand[_ngcontent-%COMP%]   .open-time-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n.open-time-dropdown[_ngcontent-%COMP%]   .icon-up[_ngcontent-%COMP%] {\n  transform: matrix(1, 0, 0, -1, 0, 0);\n}\n\n.open-time-select[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.service-intro[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.service-intro-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n  margin-top: 20px;\n}\n\n.average-rating-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  background: rgba(5, 21, 51, 0.05);\n  border-radius: 10px;\n  padding: 12px;\n  position: relative;\n}\n\n.average-rating-wrapper[_ngcontent-%COMP%]   .average-rating-score[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 20px;\n  width: 35px;\n  height: 100%;\n  padding: 5px;\n  background-image: url(/assets/icon/service-info/rating-banner.svg);\n  background-repeat: no-repeat;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  text-align: center;\n  padding-right: 10px;\n}\n\n.average-rating-wrapper[_ngcontent-%COMP%]   .average-rating-score[_ngcontent-%COMP%]   .average-rating-star[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  margin-left: 5px;\n}\n\n.average-rating-wrapper[_ngcontent-%COMP%]   .total-rating-text[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 20px;\n  color: #221c1e;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%]   .user-rating-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n  margin: 20px 0;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%]   .user-rating-item[_ngcontent-%COMP%]   .user-rating-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%]   .user-rating-item[_ngcontent-%COMP%]   .user-rating-comment-wrapper[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: calc(100% - 30px - 50px - 15px);\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%]   .user-rating-item[_ngcontent-%COMP%]   .user-rating-comment-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 18px;\n  color: #221c1e;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%]   .user-rating-item[_ngcontent-%COMP%]   .user-rating-comment-wrapper[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #221c1e;\n  opacity: 0.6;\n  margin-top: 5px;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%]   .user-rating-item[_ngcontent-%COMP%]   .user-rating[_ngcontent-%COMP%] {\n  width: 33px;\n  height: 36px;\n  text-align: center;\n  background-image: url(/assets/icon/service-info/rating-banner-outline.svg);\n  background-repeat: no-repeat;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-position-x: center;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%]   .user-rating-item[_ngcontent-%COMP%]   .user-rating[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 15px;\n  color: #221C1E;\n}\n\n.user-rating-wrapper[_ngcontent-%COMP%]   .user-rating-list[_ngcontent-%COMP%]   .user-rating-item[_ngcontent-%COMP%]   .user-rating[_ngcontent-%COMP%]   .rating-star-img[_ngcontent-%COMP%] {\n  max-width: 10px;\n  padding-bottom: 5px;\n}\n\n.back-button[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  padding-right: 5px;\n}\n\n.back-button-second[_ngcontent-%COMP%] {\n  width: 40px;\n}\n\n.back-button-second[_ngcontent-%COMP%]   .back-btn-second[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  height: 40px;\n  color: black !important;\n  margin-left: 0;\n}\n\n.col-data-money[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  color: #FFC144;\n}\n\n.super-tab-button[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.shop-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.shop-logo-2[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  margin-left: 10px;\n}\n\n.second-header[_ngcontent-%COMP%] {\n  padding-top: 0;\n  -webkit-animation: animatetop 0.5s;\n  animation: animatetop 0.5s;\n  z-index: 999999;\n}\n\n.second-header[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  margin-inline: 0px 10px !important;\n}\n\n.second-header[_ngcontent-%COMP%]   .ion-item-second[_ngcontent-%COMP%] {\n  min-height: 38px !important;\n}\n\n.header-splash[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #c4c4c4;\n  --background: #fff;\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  color: #221c1e;\n}\n\n.super-tabs-shop-shouse[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n\n.super-tabs-content[_ngcontent-%COMP%] {\n  min-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC1ob3VzZS9zaG9wLWhvdXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUNBO0VBQ0Usd0JBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUNBO0VBQ0Usb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdDQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQ0FBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLHVCQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0FBWUY7O0FBVkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBYUY7O0FBWEE7RUFDRSxlQUFBO0FBY0Y7O0FBWkE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Es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QXJDQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBd0NGOztBQXJDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF3Q0Y7O0FBdENBO0VBQ0UsdUJBQUE7QUF5Q0Y7O0FBdkNBO0VBQ0UsaUJBQUE7QUEwQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG9wLWhvdXNlL3Nob3AtaG91c2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuLmJ1dHRvbi1iYWNrLWN1c3RvbSB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG59XHJcbiNzdWItaGVhZGVyIHtcclxuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uaW9uLWNvbG9yLXByaW1hcnkge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNGRkMxNDQgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcclxufVxyXG5zdXBlci10YWItYnV0dG9uIGlvbi1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcbnN1cGVyLXRhYi1idXR0b24uYWN0aXZlIGlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5zdXBlci10YWJzLXRvb2xiYXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1bnNldDtcclxufVxyXG5zdXBlci10YWItYnV0dG9uIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4ubWFyZ2luLXRvcC0yMCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubWFyZ2luLXRvcC0xMCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uaXRlbS1jb21tb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gIG1hcmdpbi1yaWdodDogMTdweDtcclxufVxyXG4uZ3JvdXAtMS10ZXh0LXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uZ3JvdXAtMS10ZXh0LXRpdGxlIC5kaXYtMSB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJS0gMjBweCk7XHJcbn1cclxuLmdyb3VwLTEtdGV4dC10aXRsZSAuZGl2LTIge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcbi5ncm91cC0xLWljb24tcGxhY2Uge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbi5ncm91cC0xLWljb24taW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5ncm91cC0xLXRleHQtcGxhY2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5ncm91cC0xLWljb24tc3RhciB7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4uZ3JvdXAtMS1pY29uLXRhZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5pb24taXRlbS1jbGFzcyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY1ZjU7XHJcbiAgbWFyZ2luOiAwcHggMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG4uZnVuY3Rpb24tc2VjdGlvbiB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5mdW5jdGlvbi1zZWN0aW9uIGlvbi1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4ubGluZS0xIHtcclxuICBib3JkZXItdG9wOiA2cHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4ubGluZS1wcm9kdWN0IHtcclxuICBib3JkZXItdG9wOiA2cHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4uZ3JvdXAtMS1zbGlkZXItdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWM5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5ub3RlLTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWI1NzU3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5ub3RlLTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWM5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5pb24tZ3JpZC1jbGFzcyB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5ncm91cC0xLWJ1dHRvbi1jaGFuZ2UtbnVtYmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGV4dC13aGl0ZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmdyb3VwLTEtbGFiZWwtMSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzIyMWMxZTtcclxufVxyXG4uYnV0dG9uLTMtMSB7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5idXR0b24tMy0yIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5pY29uLWJ1dHRvbi0zIHtcclxuICBtYXJnaW46IDAgNXB4O1xyXG5cclxuICAmLmRpc2FibGVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gIH1cclxufVxyXG4uZ3JvdXAtMi1jb2wtMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5ncm91cC0yLWNvbC0zIGlvbi1sYWJlbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5kaXYtdGl0bGUtY29sLTIgLmNvbC00IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZGl2LXRpdGxlLWNvbC0yIGlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbn1cclxuLmRpdi1ub3RlLWNvbC0yIGlvbi1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5kaXYtbm90ZS1jb2wtMiB7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubWFyZ2luLWJvdHRvbS0zMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ucm93LWRhdGEtcHJvZHVjdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZTllOWU5O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uY29sLWdyb3VwLTItaW1hZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbi5jbGFzcy1zdXBlci10YWJzIHtcclxuICAvLyBoZWlnaHQ6IDcwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxufVxyXG4uZ3JvdXAtMy1zdWItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5ncm91cC0zLXNlbGVjdC1hbGwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMwMDlhYzk7XHJcbn1cclxuLnNjcm9sbC1jbGFzcyB7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhpZGRlbi1vdmVyZmxvdyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ubWFyZ2luLWJvdHRvbS0xNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uc2hhZG93LXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMjM0LCAxMjIsIDExMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbn1cclxuLmRpdi1sb2dvIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uYnV0dG9uLWRpc2FibGUge1xyXG4gIC0tYmFja2dyb3VuZDogI2QzZDZkOSAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMjUwLCAxMTQsIDEwNCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMHB4IDE2cHggMHB4IDE2cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2wtMSxcclxuLmNvbC0yLFxyXG4uY29sLTMsXHJcbi5jb2wtNCxcclxuLmNvbC01LFxyXG4uY29sLTYsXHJcbi5jb2wtNyxcclxuLmNvbC04LFxyXG4uY29sLTksXHJcbi5jb2wtMTAsXHJcbi5jb2wtMTEsXHJcbi5jb2wtMTIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vLyBwb3B1cFxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDA1O1xyXG59XHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3R0b206IDBweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG59XHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4IDI0cHggMHB4IDBweDtcclxufVxyXG4uY2xvc2Uge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG4uZGl2LWhlYWRlci10aXRsZSAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogLTFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XHJcbn1cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5tb2RhbC1ib2R5IC50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5wb3B1cC1pb24taXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4ucG9wdXAtdGV4dC0xIHtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcclxufVxyXG4ucG9wdXAtdGV4dC0yIHtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG59XHJcblxyXG4vLyBjc3MgcHJvbW90aW9uLWNvZGVcclxuLmRpdi1wcm9tb3Rpb24tY29kZSB7XHJcbiAgYmFja2dyb3VuZDogIzk3MTcxYjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCByZ2JhKDMzLCA0OSwgNjMsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uZGl2LXByb21vdGlvbi1jb2RlIC5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDBweCA4cHggMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmRpdi1wcm9tb3Rpb24tY29kZSAucmFuZ2UtMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnJhbmdlLTIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbn1cclxuLmRpdi1wcm9tb3Rpb24tY29kZSAucHJvbW90aW9uLWNvZGUtMSB7XHJcbn1cclxuLmRpdi1wcm9tb3Rpb24tY29kZSAucHJvbW90aW9uLWNvZGUtMSAuY29sLTgge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZGl2LXByb21vdGlvbi1jb2RlIC5wcm9tb3Rpb24tY29kZS0xIC5jb2wtNCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZjRmNWY1O1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgbWF4LWhlaWdodDogNjBweDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZGl2LXByb21vdGlvbi1jb2RlIC5wcm9tb3Rpb24tY29kZS00IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTYge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLmRpdi1wcm9tb3Rpb24tY29kZSBpb24tY29sIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTMgLml0ZW0tMSB7XHJcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XHJcbn1cclxuLmRpdi1wcm9tb3Rpb24tY29kZSAucHJvbW90aW9uLWNvZGUtMyAuaXRlbS0yIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uZ3JvdXAtMS1kZWFkbGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhYzk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDBweDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi8vXHJcbi5ncm91cC1kYXRhIHtcclxuICAvLyBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KTtcclxuICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbi5pb24tc3ViLXRvb2xiYXItMiB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gIC0tbWluLWhlaWdodDogMDtcclxufVxyXG4uaW9uLXN1Yi10b29sYmFyLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5wYWRpbmctaW9uLWdyaWQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gIG1hcmdpbi1yaWdodDogMTdweDtcclxufVxyXG4udGl0bGUtc2hvcC1wcm9kdWN0IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIHVwZGF0ZSB0aGVtZSBjc3MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi5ncm91cC0xLWxvZ28ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE4MHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHggMCAxNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5sb2dvLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcbn1cclxuLmdyb3VwLTEtbG9nbyBpb24taW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnRpdGxlLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAudGl0bGUtMSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ncm91cC0xLXRleHQtc3RhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuXHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbiAgLmNsYXNzLWxhYmVsLXJhdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JvdXAtMS10ZXh0LWRpc2NvdW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5kaXNjb3VudC1pY29uIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgbWluLXdpZHRoOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaWNvbi9zZXJ2aWNlLWluZm8vZGlzY291bnQtaWNvbi5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgfVxyXG4gIC5jbGFzcy1sYWJlbC1wcm9tb3Rpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VydmljZS1pbmZvcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5pb24tZGlzY291bnQtbWV0ZXItd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDg1cHg7XHJcbiAgaGVpZ2h0OiAxMzRweDtcclxuICAuZGlzY291bnQtc2xpZGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAuc3dpcGVyLXNsaWRlID4gaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgb2JqZWN0LWZpdDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmlvbi1kaXNjb3VudC1oZWlnaHQge1xyXG4gIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmltYWdlLXBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjA1cHg7XHJcbn1cclxuXHJcbi5kaXNjb3VudC1tZXRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmYzE0NCAwJSwgI2VlOWExYyAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IHJnYmEoMzMsIDQ5LCA2MywgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgLmRpc2NvdW50LXByZXNlbnQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pY29uL3NlcnZpY2UtaW5mby9wcmVzZW50LWljb24uc3ZnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgLm1pbGVzdG9uZXMtd3JhcHBlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogMjtcclxuXHJcbiAgICAgIC5taWxlLXN0b25lIHtcclxuICAgICAgICBtYXJnaW46IDAgMTAlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDI2cHg7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGlzY291bnQtcHJvZ3Jlc3Mge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRvcDogNjAlO1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgIC5jcnVyZW50LXByb2dyZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaXNjb3VudC1pbm9mLWl0ZW0ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cclxuICAgIC5pbmZvLWljb24ge1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm5vdC1mb3VuZC1zZXJ2aWNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNlcnZpZWMtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXktYnV0dG9uLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICAuYnRuLXNlbmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWluZm8taWNvbiB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VydmljZS1nZW5lcmFsLWluZm9zIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAuaW5mby1pY29uIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuaW5mby1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcbi5vcGVuLXRpbWUtZHJvcGRvd24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI0Y4RkFGNTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIFxyXG4gIC5vcGVuLXRpbWUtaXRlbS1hY3RpdmUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDExMCwgMTY1LCA1MSwgMC4wNSk7XHJcbiAgICBjb2xvcjogIzZlYTUzMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5vcGVuLXRpbWUtZXhwYW5kIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2M4Y2NkMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgLm9wZW4tdGltZS1pdGVtIHtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pY29uLXVwIHtcclxuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIC0xLCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5vcGVuLXRpbWUtc2VsZWN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWludHJvIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5zZXJ2aWNlLWludHJvLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hdmVyYWdlLXJhdGluZy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNSwgMjEsIDUxLCAwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuYXZlcmFnZS1yYXRpbmctc2NvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaWNvbi9zZXJ2aWNlLWluZm8vcmF0aW5nLWJhbm5lci5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIC5hdmVyYWdlLXJhdGluZy1zdGFyIHtcclxuICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3RhbC1yYXRpbmctdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gIH1cclxufVxyXG5cclxuLnVzZXItcmF0aW5nLXdyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC51c2VyLXJhdGluZy1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC51c2VyLXJhdGluZy1pdGVtIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDIwcHggMDtcclxuXHJcbiAgICAgIC51c2VyLXJhdGluZy1hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnVzZXItcmF0aW5nLWNvbW1lbnQtd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHggLSA1MHB4IC0gMTVweCk7XHJcblxyXG4gICAgICAgIC51c2VyLW5hbWUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudXNlci1jb21tZW50IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXItcmF0aW5nIHtcclxuICAgICAgICB3aWR0aDogMzNweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ljb24vc2VydmljZS1pbmZvL3JhdGluZy1iYW5uZXItb3V0bGluZS5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICAgICAgLnJhdGluZy12YWx1ZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMyMjFDMUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYXRpbmctc3Rhci1pbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcblxyXG4gIC5iYWNrLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcbi5iYWNrLWJ1dHRvbi1zZWNvbmQge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIC5iYWNrLWJ0bi1zZWNvbmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY29sLWRhdGEtbW9uZXkge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbn1cclxuLnN1cGVyLXRhYi1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zaG9wLWxvZ28ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcblxyXG4uc2hvcC1sb2dvLTIge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWNvbmQtaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZXRvcCAwLjVzO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZXRvcCAwLjVzO1xyXG4gIHotaW5kZXg6IDk5OTk5OTtcclxuICAubG9nby13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1pbmxpbmU6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pb24taXRlbS1zZWNvbmQge1xyXG4gICAgbWluLWhlaWdodDogMzhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1zcGxhc2gge1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC0tcGFkZGluZy10b3A6IDVweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzIyMWMxZTtcclxufVxyXG4uc3VwZXItdGFicy1zaG9wLXNob3VzZSB7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN1cGVyLXRhYnMtY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShopHousePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-shop-house',
                templateUrl: './shop-house.page.html',
                styleUrls: ['./shop-house.page.scss'],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['content']
        }], sub_header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sub_header']
        }], superTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabs"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-shop-house-shop-house-module-es2015.js.map