(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-history-payment-history-module"],{

/***/ "8esW":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-history/payment-history.page.ts ***!
  \***************************************************************/
/*! exports provided: PaymentHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryPage", function() { return PaymentHistoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_utils_const_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/const.service */ "KQOL");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utils.service */ "GUvF");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













const _c0 = function (a0) { return { inOutDays: a0 }; };
function PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_2_ion_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r14.formatString(item_r6.updatedAt), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "PAYMENT.paid_in_days", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r6.inOutDays)), " ");
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_2_ion_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r15.formatString(item_r6.updatedAt), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "PAYMENT.paid_out_days", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r6.inOutDays)), " ");
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_2_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.formatString(item_r6.updatedAt));
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_2_ion_label_1_Template, 3, 7, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_2_ion_label_2_Template, 3, 7, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_2_ion_label_3_Template, 2, 1, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r6.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "outdate");
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.formatString(item_r6.updatedAt));
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ion_badge_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_paid"), " ");
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ion_badge_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_unpaid"), " ");
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ion_badge_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.status_pending"), " ");
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ion_badge_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_outdate"), " ");
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_ion_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.btn_paid_label"), "");
} }
function PaymentHistoryPage_ion_list_38_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentHistoryPage_ion_list_38_ion_card_1_Template_ion_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const item_r6 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.detailPage(item_r6._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_2_Template, 4, 3, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentHistoryPage_ion_list_38_ion_card_1_ng_container_3_Template, 3, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaymentHistoryPage_ion_list_38_ion_card_1_ion_badge_4_Template, 3, 3, "ion-badge", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaymentHistoryPage_ion_list_38_ion_card_1_ion_badge_5_Template, 3, 3, "ion-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaymentHistoryPage_ion_list_38_ion_card_1_ion_badge_6_Template, 3, 3, "ion-badge", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaymentHistoryPage_ion_list_38_ion_card_1_ion_badge_7_Template, 3, 3, "ion-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PaymentHistoryPage_ion_list_38_ion_card_1_ion_button_18_Template, 3, 3, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r6 == null ? null : item_r6.campaign.settingPaymentMode) == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r6 == null ? null : item_r6.campaign.settingPaymentMode) != "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.status == "completed" && (item_r6 == null ? null : item_r6.campaign.settingPaymentMode) == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.status == "publish" && (item_r6 == null ? null : item_r6.campaign.settingPaymentMode) == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.status == "pending" && (item_r6 == null ? null : item_r6.campaign.settingPaymentMode) == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.status == "outdate" && (item_r6 == null ? null : item_r6.campaign.settingPaymentMode) == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r6 == null ? null : item_r6.payment == null ? null : item_r6.payment.title, " - ", item_r6 == null ? null : item_r6.campaign.title, " ", item_r6 == null ? null : item_r6.apartment.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "PAYMENT.number_money_label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.formatMoney(item_r6.total), "\u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r6.status == "publish" || item_r6.status == "outdate") && (item_r6 == null ? null : item_r6.campaign.settingPaymentMode) == "active");
} }
function PaymentHistoryPage_ion_list_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentHistoryPage_ion_list_38_ion_card_1_Template, 19, 14, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listPaymentBills);
} }
function PaymentHistoryPage_ion_list_39_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentHistoryPage_ion_list_39_ion_card_1_Template_ion_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.detailPage(item_r25._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-badge", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.formatString(item_r25.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "PAYMENT.badge_paid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r25 == null ? null : item_r25.payment == null ? null : item_r25.payment.title, " - ", item_r25 == null ? null : item_r25.campaign.title, " ", item_r25 == null ? null : item_r25.apartment.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, "PAYMENT.number_money_label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r24.formatMoney(item_r25.total), "\u0111");
} }
function PaymentHistoryPage_ion_list_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentHistoryPage_ion_list_39_ion_card_1_Template, 17, 11, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listPaymentBillsPaid);
} }
function PaymentHistoryPage_ion_list_40_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentHistoryPage_ion_list_40_ion_card_1_Template_ion_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.detailPage(item_r29._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-badge", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r28.formatString(item_r29.updatedAt), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, "PAYMENT.paid_out_days", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, item_r29.inOutDays)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 12, "PAYMENT.badge_outdate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r29 == null ? null : item_r29.payment == null ? null : item_r29.payment.title, " - ", item_r29 == null ? null : item_r29.campaign.title, " ", item_r29 == null ? null : item_r29.apartment.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "PAYMENT.number_money_label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r28.formatMoney(item_r29.total), "\u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 16, "PAYMENT.btn_paid_label"));
} }
function PaymentHistoryPage_ion_list_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentHistoryPage_ion_list_40_ion_card_1_Template, 21, 20, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.listPaymentBillsOutdate);
} }
function PaymentHistoryPage_ion_list_41_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentHistoryPage_ion_list_41_ion_card_1_Template_ion_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const item_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.detailPage(item_r33._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-badge", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.formatString(item_r33.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "PAYMENT.status_pending"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r33 == null ? null : item_r33.payment == null ? null : item_r33.payment.title, " - ", item_r33 == null ? null : item_r33.campaign.title, " ", item_r33 == null ? null : item_r33.apartment.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, "PAYMENT.number_money_label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r32.formatMoney(item_r33.total), "\u0111");
} }
function PaymentHistoryPage_ion_list_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentHistoryPage_ion_list_41_ion_card_1_Template, 17, 11, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.listPaymentBillsPending);
} }
function PaymentHistoryPage_ion_list_42_ion_card_1_ion_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r38.formatString(item_r37.updatedAt), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "PAYMENT.paid_in_days", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, item_r37.inOutDays)), " ");
} }
function PaymentHistoryPage_ion_list_42_ion_card_1_ion_badge_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.badge_unpaid"));
} }
function PaymentHistoryPage_ion_list_42_ion_card_1_ion_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT.btn_paid_label"));
} }
function PaymentHistoryPage_ion_list_42_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentHistoryPage_ion_list_42_ion_card_1_Template_ion_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const item_r37 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.detailPage(item_r37._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaymentHistoryPage_ion_list_42_ion_card_1_ion_label_2_Template, 3, 7, "ion-label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentHistoryPage_ion_list_42_ion_card_1_ion_badge_3_Template, 3, 3, "ion-badge", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaymentHistoryPage_ion_list_42_ion_card_1_ion_button_14_Template, 3, 3, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r37 == null ? null : item_r37.campaign.settingPaymentMode) == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r37 == null ? null : item_r37.campaign.settingPaymentMode) == "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r37 == null ? null : item_r37.payment == null ? null : item_r37.payment.title, " - ", item_r37 == null ? null : item_r37.campaign.title, " ", item_r37 == null ? null : item_r37.apartment.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "PAYMENT.number_money_label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r36.formatMoney(item_r37.total), "\u0111");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r37 == null ? null : item_r37.campaign.settingPaymentMode) == "active");
} }
function PaymentHistoryPage_ion_list_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaymentHistoryPage_ion_list_42_ion_card_1_Template, 15, 10, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.listPaymentBillsUnpaid);
} }
const _c1 = function () { return { debug: false, sideMenu: "left", allowElementScroll: true, nativeSmoothScroll: true }; };
class PaymentHistoryPage {
    constructor(loading, platform, apiService, navCtrl) {
        this.loading = loading;
        this.platform = platform;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        // data
        this.listPaymentBills = [];
        this.listPaymentBillsPaid = [];
        this.listPaymentBillsUnpaid = [];
        this.listPaymentBillsPending = [];
        this.listPaymentBillsOutdate = [];
        this.currentPageAll = 1;
        this.currentPagePaid = 1;
        this.currentPageUnpaid = 1;
        this.currentPagePending = 1;
        this.currentPageOutdate = 1;
        this.numberRecordOnPage = src_app_utils_const_service__WEBPACK_IMPORTED_MODULE_2__["ConstService"].NUMBER_RECORD_ON_PAGE;
        this.activeTabIndex = 0;
        this.platform.ready().then((readySource) => {
            this.heightScreen = platform.height() - 250;
        });
    }
    ngOnInit() {
        this.getPaymentLogs(this.currentPageAll, this.numberRecordOnPage, '', '', null, true);
    }
    ionViewWillEnter() { }
    getPaymentLogs(page, limit, category, search, event, isRefresh, status = '') {
        this.loading.present();
        const self = this;
        if (event) {
            event.target.complete();
        }
        this.apiService.getListPayment(page, limit, category, search, status).subscribe((result) => {
            self.loading.dismiss();
            if (!result.paymentBills || result.paymentBills.length == 0) {
                return;
            }
            const dataFilter = [];
            result.paymentBills.forEach((bill) => {
                if (bill.payment) {
                    const today = new Date();
                    const endAt = new Date(bill.payment.endAt);
                    if (today > endAt && bill.status == 'publish') {
                        bill.status = 'outdate';
                    }
                    if (bill.status == 'publish' || bill.status == 'outdate') {
                        bill.inOutDays = this.getDiffDays(today, endAt);
                    }
                    dataFilter.push(bill);
                }
            });
            this.pushDataRequest(dataFilter, isRefresh);
        }, (error) => {
            self.loading.dismiss();
        }, () => {
            self.loading.dismiss();
            if (event) {
                event.target.complete();
            }
        });
    }
    paymentHistoryClick() {
        this.navCtrl.navigateForward('/payment-history');
    }
    detailPage(id) {
        this.navCtrl.navigateForward('/payment-infor/' + id);
    }
    loadData($event) {
        this.allApiRequest($event, true);
    }
    doRefresh(event) {
        this.listPaymentBills = [];
        this.listPaymentBillsPaid = [];
        this.listPaymentBillsUnpaid = [];
        this.listPaymentBillsPending = [];
        this.listPaymentBillsOutdate = [];
        this.currentPageAll = 1;
        this.currentPagePaid = 1;
        this.currentPageUnpaid = 1;
        this.currentPagePending = 1;
        this.currentPageOutdate = 1;
        this.allApiRequest(event);
    }
    formatString(stringDate) {
        return _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"].formatString(stringDate);
    }
    formatMoney(stringValue) {
        let n = parseInt(stringValue);
        if (n) {
            return n.toFixed(0).replace(/./g, function (c, i, a) {
                return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
            });
        }
        else {
            return '-';
        }
    }
    getDiffDays(startDate, endDate) {
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    onTabChange($event) {
        this.activeTabIndex = $event.detail.index;
        this.allApiRequest(null);
    }
    allApiRequest(event, isLoadMore = false) {
        switch (this.activeTabIndex) {
            case 1:
                if (!isLoadMore && this.listPaymentBillsPaid.length == 0) {
                    this.getPaymentLogs(this.currentPagePaid, this.numberRecordOnPage, '', '', event, false, 'completed');
                }
                else if (isLoadMore) {
                    this.currentPagePaid++;
                    this.getPaymentLogs(this.currentPagePaid, this.numberRecordOnPage, '', '', event, false, 'completed');
                }
                break;
            case 2:
                if (!isLoadMore && this.listPaymentBillsOutdate.length == 0) {
                    this.getPaymentLogs(this.currentPageOutdate, this.numberRecordOnPage, '', '', event, false, 'outdate');
                }
                else if (isLoadMore) {
                    this.currentPageOutdate++;
                    this.getPaymentLogs(this.currentPageOutdate, this.numberRecordOnPage, '', '', event, false, 'outdate');
                }
                break;
            case 3:
                if (!isLoadMore && this.listPaymentBillsPending.length == 0) {
                    this.getPaymentLogs(this.currentPagePending, this.numberRecordOnPage, '', '', event, false, 'pending');
                }
                else if (isLoadMore) {
                    this.currentPagePending++;
                    this.getPaymentLogs(this.currentPagePending, this.numberRecordOnPage, '', '', event, false, 'pending');
                }
                break;
            case 4:
                if (!isLoadMore && this.listPaymentBillsUnpaid.length == 0) {
                    this.getPaymentLogs(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'publish');
                }
                else if (isLoadMore) {
                    this.currentPageUnpaid++;
                    this.getPaymentLogs(this.currentPageUnpaid, this.numberRecordOnPage, '', '', event, false, 'publish');
                }
                break;
            default:
                if (!isLoadMore && this.listPaymentBills.length == 0) {
                    this.getPaymentLogs(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
                }
                else if (isLoadMore) {
                    this.currentPageAll++;
                    this.getPaymentLogs(this.currentPageAll, this.numberRecordOnPage, '', '', event, false);
                }
                break;
        }
    }
    pushDataRequest(data, isRefresh) {
        switch (this.activeTabIndex) {
            case 1:
                if (isRefresh) {
                    this.listPaymentBillsPaid = data;
                }
                else {
                    this.listPaymentBillsPaid.push(...data);
                }
                break;
            case 2:
                if (isRefresh) {
                    this.listPaymentBillsOutdate = data;
                }
                else {
                    this.listPaymentBillsOutdate.push(...data);
                }
                break;
            case 3:
                if (isRefresh) {
                    this.listPaymentBillsPending = data;
                }
                else {
                    this.listPaymentBillsPending.push(...data);
                }
                break;
            case 4:
                if (isRefresh) {
                    this.listPaymentBillsUnpaid = data;
                }
                else {
                    this.listPaymentBillsUnpaid.push(...data);
                }
                break;
            default:
                if (isRefresh) {
                    this.listPaymentBills = data;
                }
                else {
                    this.listPaymentBills.push(...data);
                }
                break;
        }
    }
}
PaymentHistoryPage.ɵfac = function PaymentHistoryPage_Factory(t) { return new (t || PaymentHistoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"])); };
PaymentHistoryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentHistoryPage, selectors: [["app-payment"]], decls: 45, vars: 27, consts: [[1, "ion-no-border", "payment-history-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "super-tabs-content", 3, "activeTabIndex", "config", "tabChange"], ["slot", "top", "scrollable", "true", "no-border", "", "scrollable-padding", "false", 1, "super-tabs-toolbar"], [1, "super-tab-button"], [1, "tab-button-label"], [1, "under_line"], ["slot", "fixed", 1, "payment-history-content", 3, "scrollEvents"], ["slot", "fixed", "pullMin", "100", 3, "ionRefresh"], ["pullingIcon", "circles", "refreshingSpinner", "", "refreshingText", ""], [4, "ngIf"], ["threshold", "150px", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], ["class", "payment-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "payment-card", 3, "click"], ["lines", "none", 1, "payment-card-item"], [3, "ngSwitch", 4, "ngIf"], ["class", "badge-status badge-paid", 4, "ngIf"], ["class", "badge-status badge-unpaid", 4, "ngIf"], ["class", "badge-status badge-pending", 4, "ngIf"], ["class", "badge-status badge-outdate", 4, "ngIf"], [1, ""], [1, "payment-title"], [1, "devider-line-detail-payment"], ["lines", "none", 1, "payment-money-item"], ["fixed", "", "slot", "start", 1, "money-title"], [1, "mone-number"], ["class", "btn-paid", "slot", "end", 4, "ngIf"], [3, "ngSwitch"], ["slot", "start", "class", "update-time", 4, "ngSwitchCase"], ["slot", "start", "class", "update-time", 4, "ngSwitchDefault"], ["slot", "start", 1, "update-time"], [1, "badge-status", "badge-paid"], [1, "badge-status", "badge-unpaid"], [1, "badge-status", "badge-pending"], [1, "badge-status", "badge-outdate"], ["slot", "end", 1, "btn-paid"], ["slot", "start", "class", "update-time", 4, "ngIf"]], template: function PaymentHistoryPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "super-tabs", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function PaymentHistoryPage_Template_super_tabs_tabChange_6_listener($event) { return ctx.onTabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "super-tabs-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "super-tab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "super-tab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "super-tab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "super-tab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "super-tab-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "super-tabs-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "super-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-refresher", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function PaymentHistoryPage_Template_ion_refresher_ionRefresh_36_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ion-refresher-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PaymentHistoryPage_ion_list_38_Template, 2, 1, "ion-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PaymentHistoryPage_ion_list_39_Template, 2, 1, "ion-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PaymentHistoryPage_ion_list_40_Template, 2, 1, "ion-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PaymentHistoryPage_ion_list_41_Template, 2, 1, "ion-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PaymentHistoryPage_ion_list_42_Template, 2, 1, "ion-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-infinite-scroll", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function PaymentHistoryPage_Template_ion_infinite_scroll_ionInfinite_43_listener($event) { return ctx.loadData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "ion-infinite-scroll-content", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 14, "PAYMENT.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeTabIndex", ctx.activeTabIndex)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 16, "PAYMENT.all_payment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, "PAYMENT.badge_paid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 20, "PAYMENT.badge_outdate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 22, "PAYMENT.status_pending"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 24, "PAYMENT.badge_unpaid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollEvents", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTabIndex == 4);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabs"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabsToolbar"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabButton"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabsContainer"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".no-scroll[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n[_nghost-%COMP%] {\n  --super-tabs-toolbar-background: black;\n  --st-indicator-color: #FFC144;\n  --st-indicator-width: 30px;\n  --ion-color-base: transparent;\n}\n\n.payment-history-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 160px;\n  min-height: 160px !important;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  display: block;\n  width: 25px;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.payment-history-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #f9fcff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .super-tabs-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  width: 98%;\n  height: 55px;\n  position: absolute;\n  bottom: 0;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .super-tabs-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%] {\n  --background: red;\n  --super-tabs-toolbar-background: #FFC144;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .super-tabs-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button[_ngcontent-%COMP%] {\n  height: 35px;\n  --st-label-color-active: #ffffff;\n  --st-label-color-inactive: #fffefe8f;\n  padding: 0 5px;\n  min-width: 80px;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .super-tabs-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button[_ngcontent-%COMP%]   .tab-button-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 15px;\n  display: flex;\n  align-items: center;\n  color: #ffffff;\n  opacity: 0.4;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .super-tabs-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button[_ngcontent-%COMP%]   .under_line[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 2px;\n  margin-top: 5px;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .super-tabs-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button.active[_ngcontent-%COMP%]   .tab-button-label[_ngcontent-%COMP%] {\n  color: #ffffff;\n  opacity: 1;\n}\n\n.payment-history-header[_ngcontent-%COMP%]   .super-tabs-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button.active[_ngcontent-%COMP%]   .under_line[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\n.payment-history-content[_ngcontent-%COMP%] {\n  --background: #f9fcff;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: #f9fcff;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  margin: 10px 15px;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .update-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  min-width: 70%;\n  margin-right: 0px;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .payment-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 25px;\n  color: #221c1e;\n  margin-left: 20px;\n  margin-bottom: 5px;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  color: #ffffff;\n  border-radius: 0px 8px;\n  width: 90px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-paid[_ngcontent-%COMP%] {\n  background: #33a54c;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-unpaid[_ngcontent-%COMP%] {\n  background: #FFC144;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-pending[_ngcontent-%COMP%] {\n  background: #f2c94c;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-card[_ngcontent-%COMP%]   .badge-outdate[_ngcontent-%COMP%] {\n  background: #e23a28;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .devider-line-detail-payment[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .devider-line-detail-payment[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 43px;\n  left: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .devider-line-detail-payment[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 43px;\n  right: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .money-title[_ngcontent-%COMP%] {\n  max-width: 55px;\n  margin-right: 0px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n  font-weight: 600;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .mone-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  color: #FFC144;\n  margin-right: 0px;\n}\n\n.payment-history-content[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .btn-paid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  --background: linear-gradient(180deg, #ffc144 0%, #ee9a1c 100%);\n  border-radius: 8px;\n  font-size: 14px;\n  color: #ffffff;\n}\n\n.ion-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1oaXN0b3J5L3BheW1lbnQtaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0NBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFFSjs7QUFESTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBR047O0FBQUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUFFO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUVKOztBQURJO0VBQ0UsaUJBQUE7RUFDQSx3Q0FBQTtBQUdOOztBQUZNO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlSOztBQUhRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFLVjs7QUFIUTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUtWOztBQURRO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFHVjs7QUFEUTtFQUNFLG1CQUFBO0FBR1Y7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUNFO0VBQ0UsbUJBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRU47O0FBQUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRU47O0FBQUk7RUFDRSxZQUFBO0FBRU47O0FBQUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRU47O0FBQUk7RUFDRSxtQkFBQTtBQUVOOztBQUFJO0VBQ0UsbUJBQUE7QUFFTjs7QUFBSTtFQUNFLG1CQUFBO0FBRU47O0FBQUk7RUFDRSxtQkFBQTtBQUVOOztBQUVFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFDTjs7QUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUNOOztBQUVFO0VBQ0UsZUFBQTtBQUFKOztBQUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ047O0FBQ0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUNJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwrREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDTjs7QUFHQTtFQUNFLFVBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtaGlzdG9yeS9wYXltZW50LWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXNjcm9sbCB7XHJcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgLS1zdXBlci10YWJzLXRvb2xiYXItYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgLS1zdC1pbmRpY2F0b3ItY29sb3I6ICNGRkMxNDQ7XHJcbiAgLS1zdC1pbmRpY2F0b3Itd2lkdGg6IDMwcHg7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYXltZW50LWhpc3RvcnktaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTQ0O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgbWluLWhlaWdodDogMTYwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgLmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIC0taWNvbi1mb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjVweDtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICByaWdodDogLTFweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCAwIDAgI2Y5ZmNmZjtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICB9XHJcbiAgLnN1cGVyLXRhYnMtY29udGVudCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC5zdXBlci10YWJzLXRvb2xiYXIge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgLS1zdXBlci10YWJzLXRvb2xiYXItYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICAgICAgLnN1cGVyLXRhYi1idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAtLXN0LWxhYmVsLWNvbG9yLWFjdGl2ZTogI2ZmZmZmZjtcclxuICAgICAgICAtLXN0LWxhYmVsLWNvbG9yLWluYWN0aXZlOiAjZmZmZWZlOGY7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgIC50YWItYnV0dG9uLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuZGVyX2xpbmUge1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnN1cGVyLXRhYi1idXR0b24uYWN0aXZlIHtcclxuICAgICAgICAudGFiLWJ1dHRvbi1sYWJlbCB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51bmRlcl9saW5lIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wYXltZW50LWhpc3RvcnktY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmY2ZmO1xyXG4gIGlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmOWZjZmY7XHJcbiAgfVxyXG4gIC5wYXltZW50LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgIC51cGRhdGUtdGltZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAucGF5bWVudC10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgLnBheW1lbnQtY2FyZC1pdGVtIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmJhZGdlLXN0YXR1cyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggOHB4O1xyXG4gICAgICB3aWR0aDogOTBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5iYWRnZS1wYWlkIHtcclxuICAgICAgYmFja2dyb3VuZDogIzMzYTU0YztcclxuICAgIH1cclxuICAgIC5iYWRnZS11bnBhaWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgfVxyXG4gICAgLmJhZGdlLXBlbmRpbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjJjOTRjO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlLW91dGRhdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTIzYTI4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRldmlkZXItbGluZS1kZXRhaWwtcGF5bWVudCB7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogNDNweDtcclxuICAgICAgbGVmdDogLThweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgYmFja2dyb3VuZDogIHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDQzcHg7XHJcbiAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAgcmdiKDAgMCAwIC8gMTAlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBheW1lbnQtbW9uZXktaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAubW9uZXktdGl0bGUge1xyXG4gICAgICBtYXgtd2lkdGg6IDU1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5tb25lLW51bWJlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogI0ZGQzE0NDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXBhaWQge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZjMTQ0IDAlLCAjZWU5YTFjIDEwMCUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pb24tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentHistoryPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment-history.page.html',
                styleUrls: ['./payment-history.page.scss'],
            }]
    }], function () { return [{ type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }]; }, null); })();


/***/ }),

/***/ "NYDq":
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-history/payment-history.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryPageModule", function() { return PaymentHistoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payment_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-history.page */ "8esW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
        component: _payment_history_page__WEBPACK_IMPORTED_MODULE_6__["PaymentHistoryPage"]
    }
];
class PaymentHistoryPageModule {
}
PaymentHistoryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentHistoryPageModule });
PaymentHistoryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentHistoryPageModule_Factory(t) { return new (t || PaymentHistoryPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentHistoryPageModule, { declarations: [_payment_history_page__WEBPACK_IMPORTED_MODULE_6__["PaymentHistoryPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentHistoryPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                ],
                declarations: [_payment_history_page__WEBPACK_IMPORTED_MODULE_6__["PaymentHistoryPage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-payment-history-payment-history-module-es2015.js.map