(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-keep-vehicle-register-keep-vehicle-module"],{

/***/ "MT81":
/*!***************************************************************************!*\
  !*** ./src/app/pages/register-keep-vehicle/register-keep-vehicle.page.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterKeepVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterKeepVehiclePage", function() { return RegisterKeepVehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "KqBo");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _popup_registration_success_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popup-registration-success/popup-registration-success.page */ "6HEc");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




















function RegisterKeepVehiclePage_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.apartment_label"));
} }
function RegisterKeepVehiclePage_ion_select_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r15.apartment._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15.apartment.title + " - " + item_r15.campaign.title);
} }
function RegisterKeepVehiclePage_label_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.fullname_placeHolder"));
} }
function RegisterKeepVehiclePage_label_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.vehicle_label"));
} }
function RegisterKeepVehiclePage_label_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.type_vihicle_placeHolder"));
} }
function RegisterKeepVehiclePage_label_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.model_vihicle_placeHolder"));
} }
function RegisterKeepVehiclePage_label_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.license_plates_placeHolder"));
} }
function RegisterKeepVehiclePage_label_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.datetime_placeHolder"));
} }
function RegisterKeepVehiclePage_ion_item_104_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_ion_item_104_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.selectImage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_ion_item_104_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.deleteImageForm(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.image_select_url_1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function RegisterKeepVehiclePage_ion_item_105_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_ion_item_105_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.selectImage(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "INBOX_31.image_before_label"));
} }
function RegisterKeepVehiclePage_ion_item_107_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_ion_item_107_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.selectImage(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_ion_item_107_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.deleteImageForm(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r10.image_select_url_2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function RegisterKeepVehiclePage_ion_item_108_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_ion_item_108_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.selectImage(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "INBOX_31.image_after_label"));
} }
function RegisterKeepVehiclePage_ion_button_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.button_send"), " ");
} }
function RegisterKeepVehiclePage_ion_button_111_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_ion_button_111_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.eventButtonRegisterNew(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.button_send"), " ");
} }
function RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.vehicle_option_car"));
} }
function RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.vehicle_option_motobike"));
} }
function RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.vehicle_option_bike"));
} }
function RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "INBOX_31.vehicle_option_orther"));
} }
function RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-checkbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_Template_ion_checkbox_ionChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const vehicle_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return vehicle_r30.isDelete = !vehicle_r30.isDelete; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_label_4_Template, 3, 3, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_label_5_Template, 3, 3, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_label_6_Template, 3, 3, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_label_7_Template, 3, 3, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", vehicle_r30.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "car");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "motorbike");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bike");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", vehicle_r30.model, "/", vehicle_r30.identity, "");
} }
function RegisterKeepVehiclePage_ion_card_content_114_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterKeepVehiclePage_ion_card_content_114_div_6_div_1_Template, 11, 6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r28.isExpand);
} }
function RegisterKeepVehiclePage_ion_card_content_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-content", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterKeepVehiclePage_ion_card_content_114_div_6_Template, 2, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_ion_card_content_114_Template_div_click_7_listener() { const item_r28 = ctx.$implicit; return item_r28.isExpand = !item_r28.isExpand; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r28.apartment.title, " - ", item_r28.apartment == null ? null : item_r28.apartment.campaign == null ? null : item_r28.apartment.campaign.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r28.apartment == null ? null : item_r28.apartment.campaign == null ? null : item_r28.apartment.campaign.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r28.apartment.vehicles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", !item_r28.isExpand ? "../assets/icon/svg/Down.svg" : "../assets/icon/svg/up.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { debug: true, sideMenu: "center", allowElementScroll: true, nativeSmoothScroll: true }; };
class RegisterKeepVehiclePage {
    constructor(modalController, camera, actionSheetController, loading, navCtrl, apiService, translate, alertService) {
        this.modalController = modalController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.translate = translate;
        this.alertService = alertService;
        this.listDepartment = [];
        this.list_image_select = [];
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
        this.getListApartment();
        this.tab2_form_apartment_id = '';
        this.tab2_form_apartment_class = '';
        this.form_apartment_id = '';
        this.form_apartment_class = '';
        this.form_fullname = '';
        this.form_fullname_class = '';
        this.form_vehicle_id = '';
        this.form_vehicle_class = '';
        this.form_hang_xe = '';
        this.form_hang_xe_class = '';
        this.form_model = '';
        this.form_model_class = '';
        this.form_bien_kiem_soat = '';
        this.form_bien_kiem_soat_class = '';
        this.form_date_time = '';
        this.form_date_time_class = '';
        this.list_vehicle = [];
        this.image_select_url_1 = '';
        this.image_select_url_2 = '';
        this.image_select_url_media_1 = {};
        this.image_select_url_media_2 = {};
        this.listDepartmentByID = {};
        this.form_note = '';
        this.form_note_tab2 = '';
    }
    getListApartment() {
        var self = this;
        this.loading.present();
        this.apiService.getListUserApartment().subscribe((result) => {
            self.listDepartment = [];
            for (var i = 0; i < result.userApartments.length; i++) {
                if (result.userApartments[i].campaign.settingRequestParking == "active") {
                    self.listDepartment.push(result.userApartments[i]);
                }
            }
            //self.listDepartment = result.userApartments;
            self.listDepartment.forEach((data, index) => {
                if (index == 0) {
                    this.form_apartment_id = data.apartment._id;
                    this.form_apartment_class = 'has-input-value';
                }
                self.listDepartmentByID[data.apartment._id] = data;
                data.isExpand = false;
            });
            self.loading.dismiss();
        }, (error) => {
            self.loading.dismiss();
        });
    }
    eventButtonRegisterNew() {
        var self = this;
        let dataApartment = self.listDepartmentByID[this.form_apartment_id];
        const params = {
            // category: "",
            title: this.translate.instant('INBOX_31.title'),
            content: this.form_note != '' ? this.form_note : ' ',
            campaign: dataApartment.campaign._id,
            apartment: this.form_apartment_id,
            // createdBy: "",
            attachments: [],
            type: 'parking',
            parkingFullName: this.form_fullname,
            parkingType: this.form_vehicle_id,
            parkingModel: this.form_model,
            parkingBrand: this.form_hang_xe,
            parkingLicense: this.form_bien_kiem_soat,
            parkingDate: this.form_date_time,
        };
        if (this.image_select_url_1 != '') {
            params['parkingIdentityImageFront'] = this.image_select_url_media_1;
            params.attachments.push(this.image_select_url_media_1);
        }
        if (this.image_select_url_2 != '') {
            params['parkingIdentityImageBack'] = this.image_select_url_media_2;
            params.attachments.push(this.image_select_url_media_2);
        }
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
    eventButtonRemoveVehicles() {
        var self = this;
        this.loading.present();
        const lengthDepartment = this.listDepartment.length;
        this.listDepartment.forEach((data, index) => {
            const vehicle = data.apartment.vehicles.find((item) => item.isDelete);
            if (vehicle) {
                const params = {
                    // category: "",
                    title: this.translate.instant('INBOX_31.title_tabs_cancel_registration'),
                    content: this.form_note_tab2 != '' ? this.form_note_tab2 : ' ',
                    campaign: data.apartment.campaign._id,
                    apartment: data.apartment._id,
                    // createdBy: "",
                    attachments: [],
                    type: 'cancel',
                    cancelType: vehicle.type,
                    cancelModel: vehicle.model,
                    cancelIdentity: vehicle.identity,
                };
                this.apiService.addFeedbackNew(params).subscribe((result) => {
                    if (lengthDepartment - 1 == index) {
                        self.loading.dismiss();
                    }
                    self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_sucess'));
                }, (error) => {
                    if (lengthDepartment - 1 == index) {
                        self.loading.dismiss();
                    }
                    self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_fail'));
                });
            }
        });
    }
    ionChangePulldown1(event) {
        if (this.form_apartment_id != '') {
            this.form_apartment_class = 'has-input-value';
        }
        else {
            this.form_apartment_class = '';
        }
    }
    ionChangePulldown2(event) {
        if (this.form_vehicle_id != '') {
            this.form_vehicle_class = 'has-input-value';
        }
        else {
            this.form_vehicle_class = '';
        }
    }
    ionChangeDateTime(event) {
        if (this.form_date_time != '') {
            this.form_date_time_class = 'has-input-value';
        }
        else {
            this.form_date_time_class = '';
        }
    }
    ionChangeTextBox1() {
        if (this.form_fullname != '') {
            this.form_fullname_class = 'has-input-value';
        }
        else {
            this.form_fullname_class = '';
        }
    }
    ionChangeTextBox2() {
        if (this.form_hang_xe != '') {
            this.form_hang_xe_class = 'has-input-value';
        }
        else {
            this.form_hang_xe_class = '';
        }
    }
    ionChangeTextBox3() {
        if (this.form_model != '') {
            this.form_model_class = 'has-input-value';
        }
        else {
            this.form_model_class = '';
        }
    }
    ionChangeTextBox4() {
        if (this.form_bien_kiem_soat != '') {
            this.form_bien_kiem_soat_class = 'has-input-value';
        }
        else {
            this.form_bien_kiem_soat_class = '';
        }
    }
    tab2_ionChangePulldown1(event) {
        var self = this;
        if (this.tab2_form_apartment_id != '') {
            this.tab2_form_apartment_class = 'has-input-value';
            let dataApartment = self.listDepartmentByID[this.tab2_form_apartment_id];
            self.list_vehicle = [];
            dataApartment.apartment.vehicles.forEach((vehicles) => {
                let phuongtien = '';
                if (vehicles.type == 'car') {
                    phuongtien = self.translate.instant('INBOX_31.vehicle_option_car');
                }
                else if (vehicles.type == 'motorbike') {
                    phuongtien = self.translate.instant('INBOX_31.vehicle_option_motobike');
                }
                else if (vehicles.type == 'bike') {
                    phuongtien = self.translate.instant('INBOX_31.vehicle_option_bike');
                }
                else {
                    phuongtien = self.translate.instant('INBOX_31.vehicle_option_orther');
                }
                let object = {
                    _id: vehicles._id,
                    phuongtien: phuongtien,
                    hang_xe: '',
                    model: vehicles.model,
                    bien_so: vehicles.identity,
                    checkbox: false,
                    vehicles: vehicles,
                };
                self.list_vehicle.push(object);
            });
        }
        else {
            this.tab2_form_apartment_class = '';
        }
    }
    ionChangeCheckBox(_id) {
        this.list_vehicle.forEach((data) => {
            if (data._id == _id) {
                data.checkbox = !data.checkbox;
            }
        });
    }
    convertListImage(_index) {
        var self = this;
        if (self.list_image_select.length > 0) {
            if (_index == 1) {
                this.image_select_url_1 = self.list_image_select[0].media.url;
                this.image_select_url_media_1 = self.list_image_select[0].media;
            }
            if (_index == 2) {
                this.image_select_url_2 = self.list_image_select[0].media.url;
                this.image_select_url_media_2 = self.list_image_select[0].media;
            }
        }
    }
    // select image
    selectImage(_index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.translate.instant('COMMON.form_select_image_title'),
                buttons: [
                    {
                        text: this.translate.instant('COMMON.form_select_image_library'),
                        handler: () => {
                            this.checkPicturePermission(this.camera.PictureSourceType.PHOTOLIBRARY, _index);
                        },
                    },
                    {
                        text: this.translate.instant('COMMON.form_select_image_camera'),
                        handler: () => {
                            this.checkPicturePermission(this.camera.PictureSourceType.CAMERA, _index);
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
    checkPicturePermission(sourceType, _index) {
        this.pickImage(sourceType, _index);
    }
    pickImage(sourceType, _index) {
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
            this.apiService.uploadImage(payload).subscribe((result) => {
                self.list_image_select = [];
                self.list_image_select.push(result);
                self.convertListImage(_index);
            }, (error) => { });
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
    deleteImageForm(_index) {
        if (_index == 1) {
            this.image_select_url_1 = '';
            this.image_select_url_media_1 = {};
        }
        if (_index == 2) {
            this.image_select_url_2 = '';
            this.image_select_url_media_1 = {};
        }
    }
    checkActiveButton() {
        let count = 0;
        this.listDepartment.forEach((data) => {
            const vehicles = data.apartment.vehicles.find((item) => item.isDelete);
            if (vehicles) {
                count++;
            }
        });
        if (count == 0) {
            return 'button-inactive';
        }
        else {
            return 'button-active';
        }
    }
}
RegisterKeepVehiclePage.ɵfac = function RegisterKeepVehiclePage_Factory(t) { return new (t || RegisterKeepVehiclePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"])); };
RegisterKeepVehiclePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterKeepVehiclePage, selectors: [["app-register-keep-vehicle"]], decls: 122, vars: 109, consts: [[1, "register-keep-vehicle-content"], ["activeTabIndex", "0", 3, "config"], [1, "ion-no-border"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], ["slot", "top", "scrollable", "false", "no-border", "", "scrollable-padding", "false", 1, "super-tabs-toolbar"], [1, "super-tab-button"], [1, "under_line"], ["autoScrollTop", ""], [1, "ion-padding"], ["lines", "full", 1, "ion-no-margin", "ion-no-padding"], ["lines", "none"], ["lines", "none", 1, "item-common"], ["src", "../assets/icon/request/home.svg", 1, "icon-home"], ["src", "../assets/icon/svg/Down.svg", 1, "icon-pulldown-down"], ["class", "pulldown-1-placeholder", 4, "ngIf"], ["interface", "action-sheet", "name", "form_apartment_id", 1, "pulldown-apartment-select", "pulldown-1", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["src", "../assets/icon/request/user.svg", 1, "icon-dollar-active"], ["type", "text", "type", "text", 1, "text-box-1", 3, "placeholder", "value", "ngModel", "ionChange", "ngModelChange"], [1, "devider-line-custom", "margin-top-10"], ["lines", "none", 1, "margin-top-10"], [1, "vehicle-title-block"], ["lines", "none", 1, "pointer-events-all"], ["src", "../assets/icon/request/sports-car.svg", 1, "icon-home"], ["data-text", "", "interface", "action-sheet", "name", "form_vehicle_id", 1, "pulldown-apartment-select", "pulldown-vehicle", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], ["value", "car"], ["value", "motorbike"], ["value", "bike"], ["value", "other"], [1, "ion-grid-class"], ["size", "6", "size-md", "", 1, "padding-left-0"], ["class", "pulldown-1-placeholder pulldown-placeholder-input ", 4, "ngIf"], ["type", "text", "type", "text", 1, "text-box-1", "text-box-input", 3, "placeholder", "value", "ngModel", "ionChange", "ngModelChange"], ["size", "6", "size-md", "", 1, "padding-right-0"], ["src", "../assets/icon/request/license-plate.svg", 1, "icon-dollar-active"], ["src", "../assets/icon/request/calendar.svg", 1, "icon-home"], ["name", "form_date_time", "displayFormat", "DD/MM/YYYY", "min", "2000", "max", "2050", 1, "pulldown-apartment-select", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], [1, "devider-line-custom", "margin-top-10", "margin-bottom-10"], ["size", "6", "size-md", "", 1, "ion-col-class", "padding-left-0"], ["lines", "none", "class", "ion-item-for-image", 3, "click", 4, "ngIf"], ["size", "6", "size-md", "", 1, "ion-col-class", "padding-right-0"], [1, "full-width", "function-section"], ["expand", "block", "class", "amo-button-custom button-inactive padding-0", 4, "ngIf"], ["expand", "block", "class", "amo-button-custom padding-0", 3, "click", 4, "ngIf"], [1, "ion-padding", "delete-keep-vehicle-tab"], ["lines", "none", "class", "margin-top-10 margin-bottom-10 item-delete-keep-vehicle", 4, "ngFor", "ngForOf"], ["expand", "block"], ["expand", "block", 3, "click"], [1, "pulldown-1-placeholder"], [3, "value"], [1, "pulldown-1-placeholder", "pulldown-placeholder-input"], ["lines", "none", 1, "ion-item-for-image", 3, "click"], [1, "image-class", 3, "src"], ["type", "button", 1, "close-image-icon", 3, "click"], ["aria-hidden", "true"], [1, "icon-camera-container"], ["src", "../assets/icon/request/image.svg"], [1, "camera-label"], ["expand", "block", 1, "amo-button-custom", "button-inactive", "padding-0"], ["expand", "block", 1, "amo-button-custom", "padding-0", 3, "click"], ["lines", "none", 1, "margin-top-10", "margin-bottom-10", "item-delete-keep-vehicle"], [1, "number-home"], [1, "address-home"], [4, "ngFor", "ngForOf"], [1, "button-expand", 3, "click"], [3, "src"], [4, "ngIf"], [1, "vehicle-name-block"], ["color", "secondary", "mode", "md", 1, "checkbox-common", 3, "ionChange"], [3, "ngSwitch"], ["class", "vehicle-name", 4, "ngSwitchCase"], ["class", "vehicle-name", 4, "ngSwitchDefault"], [1, "vehicle-info"], [1, "devider-line-custom"], [1, "vehicle-name"]], template: function RegisterKeepVehiclePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "super-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-back-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "super-tabs-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "super-tab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "super-tab-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "super-tabs-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "super-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RegisterKeepVehiclePage_label_26_Template, 3, 3, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterKeepVehiclePage_Template_ion_select_ngModelChange_28_listener($event) { return ctx.form_apartment_id = $event; })("ionChange", function RegisterKeepVehiclePage_Template_ion_select_ionChange_28_listener($event) { return ctx.ionChangePulldown1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RegisterKeepVehiclePage_ion_select_option_30_Template, 2, 2, "ion-select-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RegisterKeepVehiclePage_label_34_Template, 3, 3, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterKeepVehiclePage_Template_ion_input_ionChange_36_listener() { return ctx.ionChangeTextBox1(); })("ngModelChange", function RegisterKeepVehiclePage_Template_ion_input_ngModelChange_36_listener($event) { return ctx.form_fullname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, RegisterKeepVehiclePage_label_47_Template, 3, 3, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterKeepVehiclePage_Template_ion_select_ngModelChange_49_listener($event) { return ctx.form_vehicle_id = $event; })("ionChange", function RegisterKeepVehiclePage_Template_ion_select_ionChange_49_listener($event) { return ctx.ionChangePulldown2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-select-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-select-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-select-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-select-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-grid", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-col", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, RegisterKeepVehiclePage_label_69_Template, 3, 3, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterKeepVehiclePage_Template_ion_input_ionChange_71_listener() { return ctx.ionChangeTextBox2(); })("ngModelChange", function RegisterKeepVehiclePage_Template_ion_input_ngModelChange_71_listener($event) { return ctx.form_hang_xe = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "ion-col", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, RegisterKeepVehiclePage_label_76_Template, 3, 3, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "ion-input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterKeepVehiclePage_Template_ion_input_ionChange_78_listener() { return ctx.ionChangeTextBox3(); })("ngModelChange", function RegisterKeepVehiclePage_Template_ion_input_ngModelChange_78_listener($event) { return ctx.form_model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, RegisterKeepVehiclePage_label_83_Template, 3, 3, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "ion-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RegisterKeepVehiclePage_Template_ion_input_ionChange_85_listener() { return ctx.ionChangeTextBox4(); })("ngModelChange", function RegisterKeepVehiclePage_Template_ion_input_ngModelChange_85_listener($event) { return ctx.form_bien_kiem_soat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, RegisterKeepVehiclePage_label_91_Template, 3, 3, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ion-datetime", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterKeepVehiclePage_Template_ion_datetime_ngModelChange_93_listener($event) { return ctx.form_date_time = $event; })("ionChange", function RegisterKeepVehiclePage_Template_ion_datetime_ionChange_93_listener($event) { return ctx.ionChangeDateTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "ion-grid", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, RegisterKeepVehiclePage_ion_item_104_Template, 5, 1, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, RegisterKeepVehiclePage_ion_item_105_Template, 6, 3, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "ion-col", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, RegisterKeepVehiclePage_ion_item_107_Template, 5, 1, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, RegisterKeepVehiclePage_ion_item_108_Template, 6, 3, "ion-item", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](110, RegisterKeepVehiclePage_ion_button_110_Template, 3, 3, "ion-button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, RegisterKeepVehiclePage_ion_button_111_Template, 3, 3, "ion-button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "super-tab", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "ion-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, RegisterKeepVehiclePage_ion_card_content_114_Template, 9, 5, "ion-card-content", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "ion-button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "ion-button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterKeepVehiclePage_Template_ion_button_click_119_listener() { return ctx.eventButtonRemoveVehicles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](108, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 72, "INBOX_31.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 74, "INBOX_31.title_tabs_register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 76, "INBOX_31.title_tabs_cancel_registration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_apartment_id != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_apartment_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 78, "INBOX_31.apartment_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_apartment_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDepartment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_fullname != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_fullname_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 80, "INBOX_31.fullname_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.form_fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 82, "INBOX_31.vehicle_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_vehicle_id != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_vehicle_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 84, "INBOX_31.vehicle_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_vehicle_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 86, "INBOX_31.vehicle_option_car"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 88, "INBOX_31.vehicle_option_motobike"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 90, "INBOX_31.vehicle_option_bike"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 92, "INBOX_31.vehicle_option_orther"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_hang_xe != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_hang_xe_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 94, "INBOX_31.type_vihicle_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.form_hang_xe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_hang_xe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_model != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_model_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 96, "INBOX_31.model_vihicle_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.form_model);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_model);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_bien_kiem_soat != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_bien_kiem_soat_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](86, 98, "INBOX_31.license_plates_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.form_bien_kiem_soat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_bien_kiem_soat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_date_time != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_date_time_class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 100, "INBOX_31.datetime_placeHolder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_date_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](99, 102, "INBOX_31.area_image_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.image_select_url_1 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.image_select_url_1 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.image_select_url_2 != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.image_select_url_2 == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_apartment_id == "" || ctx.form_fullname == "" || ctx.form_vehicle_id == "" || ctx.form_hang_xe == "" || ctx.form_model == "" || ctx.form_bien_kiem_soat == "" || ctx.form_date_time == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_apartment_id != "" && ctx.form_fullname != "" && ctx.form_vehicle_id != "" && ctx.form_hang_xe != "" && ctx.form_model != "" && ctx.form_bien_kiem_soat != "" && ctx.form_date_time != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDepartment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("amo-button-custom button-inactive padding-0 inactive_button ", ctx.checkActiveButton(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 104, "INBOX_31.button_send"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("amo-button-custom padding-0 active_button ", ctx.checkActiveButton(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](121, 106, "INBOX_31.button_send"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabsToolbar"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabButton"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabsContainer"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.ion-color-primary[_ngcontent-%COMP%] {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: #FFC144 !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-top: 45px;\n}\n\n.item-apartment-pulldown[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.icon-home[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 17px;\n  position: absolute;\n}\n\n.icon-pulldown-down[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .pulldown-apartment-select[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.pulldown-apartment-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding-left: 50px;\n  background: #fbfbfb;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-right: 17px;\n  height: 100%;\n}\n\nion-select[_ngcontent-%COMP%]::part(icon) {\n  display: none;\n  opacity: 1;\n}\n\n.pulldown-1-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.5;\n  z-index: 999;\n  font-size: 12px;\n  margin-left: 50px;\n  top: 7px;\n  pointer-events: none;\n}\n\n.pulldown-1-placeholder-init[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.5;\n  z-index: 999;\n  margin-left: 50px;\n  pointer-events: none;\n}\n\n.pulldown-1-text-select[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  padding-top: 20px;\n  padding-bottom: 0px;\n  padding-right: 17px;\n  position: absolute;\n  z-index: 99;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  background-color: #fbfbfb;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.text-area-1[_ngcontent-%COMP%] {\n  --padding-start: 17px !important;\n  background: #fbfbfb;\n  margin-top: 0px;\n}\n\n.margin-left-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --border-width: 1px;\n}\n\n.icon-dollar[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 17px;\n  position: absolute;\n  opacity: 0.5;\n}\n\n.icon-dollar-active[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 17px;\n  position: absolute;\n}\n\n.label-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n  opacity: 0.5;\n  margin: 0;\n}\n\n.label-1-active[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n  margin: 0;\n}\n\n.pointer-events-all[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n.no-border[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.item-tip[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  \n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 20px;\n}\n\n.button-tip[_ngcontent-%COMP%] {\n  background-color: #fbfbfb !important;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-right: 15px;\n  padding: 10px 5px;\n  display: flex;\n}\n\n.button-tip-active[_ngcontent-%COMP%] {\n  background-color: #fbfbfb !important;\n  border: 1px solid #009ac9;\n  border-radius: 8px;\n  margin-right: 15px;\n  padding: 10px 5px;\n  display: flex;\n}\n\n.button-tip[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.button-tip-active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.group-button-tip[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  display: flex;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  background-color: #00000005;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  pointer-events: none;\n  bottom: 0px;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 24px 24px 0px 0px;\n}\n\n.close[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem -1rem;\n}\n\n.popup-item-input[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #f4f5f5;\n}\n\n.modal-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.div-header-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.popup-btn-ok[_ngcontent-%COMP%] {\n  background: #d9f0f7;\n  border-radius: 8px;\n  color: #009ac9;\n  width: 160px;\n  height: 44px;\n  margin: 0 auto;\n}\n\n.icon-camera[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 15px 0px;\n}\n\n.background-fbfbfb[_ngcontent-%COMP%] {\n  --background: #fbfbfb;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .text-box-1[_ngcontent-%COMP%] {\n  --padding-top: 25px;\n  --padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.has-input-value.label-1-active[_ngcontent-%COMP%], .has-input-value.label-1[_ngcontent-%COMP%] {\n  top: 25px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.ion-edit[_ngcontent-%COMP%] {\n  pointer-events: none;\n  margin-left: 15px;\n}\n\n.group-active[_ngcontent-%COMP%]   .ion-edit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.group-inactive[_ngcontent-%COMP%]   .ion-edit[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.button-tip-active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .button-tip[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.icon-camera[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 35px 0px;\n}\n\n.background-fbfbfb[_ngcontent-%COMP%] {\n  --background: #fbfbfb;\n}\n\n.margin-right-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.function-section-1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  width: calc(100% - 32px);\n}\n\n.padding-0[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 0px;\n}\n\n.label-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 45px;\n  margin: 0;\n}\n\n.label-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  left: 45px;\n  margin: 0;\n  color: #7a838c;\n  font-size: 14px;\n}\n\n.margin-top-30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\nion-checkbox[_ngcontent-%COMP%]::part(container) {\n  padding: 2px;\n}\n\n.font-weight-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.ion-no-border[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 195px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.ion-no-border[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.ion-no-border[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  display: block;\n  width: 25px;\n}\n\n.ion-no-border[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.ion-no-border[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #ffffff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 107px;\n  --background: red;\n  --super-tabs-toolbar-background: #FFC144;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button[_ngcontent-%COMP%] {\n  height: 30px;\n  --st-label-color-active: #ffffff;\n  --st-label-color-inactive: #fffefe8f;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button[_ngcontent-%COMP%]   .under_line[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 2px;\n  margin-top: 5px;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button.active[_ngcontent-%COMP%]   .under_line[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .item-text-area[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin: 0px 15px 10px 15px;\n  --background: transparent !important;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .item-text-area[_ngcontent-%COMP%]   .text-area-1[_ngcontent-%COMP%] {\n  --padding-start: 17px !important;\n  background: #fbfbfb;\n  margin-top: 0px;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .ion-grid-class[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .ion-col-class[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .item-common[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  height: 60px;\n  margin-bottom: 10px;\n  --background: transparent !important;\n}\n\n.register-keep-vehicle-content[_ngcontent-%COMP%]   .vehicle-title-block[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n}\n\n.devider-line-custom[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n}\n\n.text-box-1[_ngcontent-%COMP%] {\n  --padding-start: 50px !important;\n  --padding-end: 15px !important;\n  background-color: #fbfbfb;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n}\n\n.text-box-input[_ngcontent-%COMP%] {\n  --padding-start: 20px !important;\n}\n\n.pulldown-placeholder-input[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n\n.ion-grid-input[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.ion-col-class[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.ion-item-for-image[_ngcontent-%COMP%] {\n  --background: #ebf8ff;\n  border: 2px dashed #a7dff4;\n  box-sizing: border-box;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n}\n\n.ion-item-for-image[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  padding: 20px 0;\n}\n\n.ion-item-for-image[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%]   .icon-camera[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 24px;\n}\n\n.ion-item-for-image[_ngcontent-%COMP%]   .icon-camera-container[_ngcontent-%COMP%]   .camera-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 15px;\n  color: #01aeef;\n  margin-top: 5px;\n}\n\n.ion-item-for-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.close-image-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: normal;\n  line-height: 0;\n  color: #fff;\n  position: absolute;\n  z-index: 999;\n  background-color: #009ac9;\n  top: 3px;\n  right: 3px;\n  opacity: 1;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  text-shadow: none;\n  padding: 0;\n}\n\n.padding-left-0[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.padding-right-0[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n.image-class[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.button-inactive[_ngcontent-%COMP%] {\n  --background: #d3d6d9 !important;\n  color: #ffffff !important;\n}\n\n.active_button.button-inactive[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.inactive_button.button-active[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  padding-top: 0px;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%]   .item-delete-keep-vehicle[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  --background: transparent !important;\n  padding: 10px;\n  padding-bottom: 0px;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%]   .item-delete-keep-vehicle[_ngcontent-%COMP%]   .number-home[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #221c1e;\n  margin-bottom: 5px;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%]   .item-delete-keep-vehicle[_ngcontent-%COMP%]   .address-home[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n  opacity: 0.6;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%]   .item-delete-keep-vehicle[_ngcontent-%COMP%]   .vehicle-name-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%]   .item-delete-keep-vehicle[_ngcontent-%COMP%]   .vehicle-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #221c1e;\n  margin: 0px;\n  margin-left: 10px;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%]   .item-delete-keep-vehicle[_ngcontent-%COMP%]   .checkbox-common[_ngcontent-%COMP%] {\n  --background-checked: linear-gradient(180deg, #EA7A6E 0%, #E23A28 100%);\n  margin: 0px;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%]   .item-delete-keep-vehicle[_ngcontent-%COMP%]   .vehicle-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n  opacity: 0.6;\n  margin-left: 25px;\n}\n\n.delete-keep-vehicle-tab[_ngcontent-%COMP%]   .item-delete-keep-vehicle[_ngcontent-%COMP%]   .button-expand[_ngcontent-%COMP%] {\n  height: 30px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIta2VlcC12ZWhpY2xlL3JlZ2lzdGVyLWtlZXAtdmVoaWNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUNBO0VBQ0Usb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdDQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQVFGOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFD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QUFBO0VBQ0EsaUJBQUE7QUEwRE47O0FBeERJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUEwRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci1rZWVwLXZlaGljbGUvcmVnaXN0ZXIta2VlcC12ZWhpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlvbi1jb2xvci1wcmltYXJ5IHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjRkZDMTQ0ICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICM0YzhkZmYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mdW5jdGlvbi1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbn1cclxuXHJcbi5pdGVtLWFwYXJ0bWVudC1wdWxsZG93biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5pY29uLWhvbWUge1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMTdweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmljb24tcHVsbGRvd24tZG93biB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxufVxyXG4uaGFzLWlucHV0LXZhbHVlIC5wdWxsZG93bi1hcGFydG1lbnQtc2VsZWN0IHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ucHVsbGRvd24tYXBhcnRtZW50LXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4ucHVsbGRvd24tMS1wbGFjZWhvbGRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHRvcDogN3B4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ucHVsbGRvd24tMS1wbGFjZWhvbGRlci1pbml0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4ucHVsbGRvd24tMS10ZXh0LXNlbGVjdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0yMCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubWFyZ2luLXRvcC0xMCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubWFyZ2luLWxlZnQtMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5pdGVtLW5hdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG4udGV4dC1hcmVhLTEge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTdweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWxlZnQtMjAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tY2hlY2tib3gge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuLmljb24tZG9sbGFyIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uaWNvbi1kb2xsYXItYWN0aXZlIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5sYWJlbC0xIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmxhYmVsLTEtYWN0aXZlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ucG9pbnRlci1ldmVudHMtYWxsIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXI6IDBweDtcclxufVxyXG4uaXRlbS10aXAge1xyXG4gIC8qIEJhY2tncm91bmRib3ggKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgLyogVGV4dC9QbGFjZWhvbGRlciAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmJ1dHRvbi10aXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmIgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYnV0dG9uLXRpcC1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmIgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5YWM5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYnV0dG9uLXRpcCBsYWJlbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmJ1dHRvbi10aXAtYWN0aXZlIGxhYmVsIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uZ3JvdXAtYnV0dG9uLXRpcCB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi8vIHBvcHVwXHJcblxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDA1O1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDBweCAwcHg7XHJcbn1cclxuLmNsb3NlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAtMXJlbSAtMXJlbSAtMXJlbSAtMXJlbTtcclxufVxyXG4ucG9wdXAtaXRlbS1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4ubW9kYWwtaGVhZGVyIGxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG59XHJcbi5kaXYtaGVhZGVyLXRpdGxlIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4ucG9wdXAtYnRuLW9rIHtcclxuICBiYWNrZ3JvdW5kOiAjZDlmMGY3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogIzAwOWFjOTtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5pY29uLWNhbWVyYSB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuLmJhY2tncm91bmQtZmJmYmZiIHtcclxuICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxuLmhhcy1pbnB1dC12YWx1ZSAudGV4dC1ib3gtMSB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi53aWR0aC0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oYXMtaW5wdXQtdmFsdWUubGFiZWwtMS1hY3RpdmUsXHJcbi5oYXMtaW5wdXQtdmFsdWUubGFiZWwtMSB7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaW9uLWVkaXQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5ncm91cC1hY3RpdmUgLmlvbi1lZGl0IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5ncm91cC1pbmFjdGl2ZSAuaW9uLWVkaXQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uYnV0dG9uLXRpcC1hY3RpdmUgbGFiZWwsXHJcbi5idXR0b24tdGlwIGxhYmVsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmljb24tY2FtZXJhIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAzNXB4IDBweDtcclxufVxyXG4uYmFja2dyb3VuZC1mYmZiZmIge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG4ubWFyZ2luLXJpZ2h0LTEwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmZ1bmN0aW9uLXNlY3Rpb24tMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTZweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcbn1cclxuLnBhZGRpbmctMCB7XHJcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xyXG59XHJcbi5sYWJlbC10b3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDNweDtcclxuICBsZWZ0OiA0NXB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubGFiZWwtYm90dG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxcHg7XHJcbiAgbGVmdDogNDVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbmlvbi1jaGVja2JveDo6cGFydChjb250YWluZXIpIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLmZvbnQtd2VpZ2h0LTYwMCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLy8gbmV3IGNzcyA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi5pb24tbm8tYm9yZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTQ0O1xyXG4gIGhlaWdodDogMTk1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuYmFjay1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHRvcDogNjBweDtcclxuICAgIC5pb24tYmFjay1idXR0b24ge1xyXG4gICAgICAtLWljb24tZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNTdweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgcmlnaHQ6IC0xcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggMCAwICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVnaXN0ZXIta2VlcC12ZWhpY2xlLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgLnN1cGVyLXRhYnMtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6IDEwN3B4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAtLXN1cGVyLXRhYnMtdG9vbGJhci1iYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgLnN1cGVyLXRhYi1idXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIC0tc3QtbGFiZWwtY29sb3ItYWN0aXZlOiAjZmZmZmZmO1xyXG4gICAgICAtLXN0LWxhYmVsLWNvbG9yLWluYWN0aXZlOiAjZmZmZWZlOGY7XHJcbiAgICAgIC51bmRlcl9saW5lIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdXBlci10YWItYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICAgIC51bmRlcl9saW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pdGVtLXRleHQtYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDBweCAxNXB4IDEwcHggMTVweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIC50ZXh0LWFyZWEtMSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pb24tZ3JpZC1jbGFzcyB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pb24tY29sLWNsYXNzIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pdGVtLWNvbW1vbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnZlaGljbGUtdGl0bGUtYmxvY2sge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgfVxyXG59XHJcbi5kZXZpZGVyLWxpbmUtY3VzdG9tIHtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcclxufVxyXG4udGV4dC1ib3gtMSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTVweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTVweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi50ZXh0LWJveC1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnB1bGxkb3duLXBsYWNlaG9sZGVyLWlucHV0IHtcclxuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pb24tZ3JpZC1pbnB1dCB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIHNlbGVjdCBpbWFnZVxyXG4uaW9uLWNvbC1jbGFzcyB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0QzRDZEOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBtYXJnaW46IDVweDtcclxufVxyXG4uaW9uLWl0ZW0tZm9yLWltYWdlIHtcclxuICAtLWJhY2tncm91bmQ6ICNlYmY4ZmY7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNhN2RmZjQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgLmljb24tY2FtZXJhLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gICAgLmljb24tY2FtZXJhIHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIC5jYW1lcmEtbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgY29sb3I6ICMwMWFlZWY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmlvbi1pdGVtLWZvci1pbWFnZSBpbWcge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jbG9zZS1pbWFnZS1pY29uIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhYzk7XHJcbiAgdG9wOiAzcHg7XHJcbiAgcmlnaHQ6IDNweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ucGFkZGluZy1sZWZ0LTAge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4ucGFkZGluZy1yaWdodC0wIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbi5pbWFnZS1jbGFzcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLWluYWN0aXZlIHtcclxuICAtLWJhY2tncm91bmQ6ICNkM2Q2ZDkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5hY3RpdmVfYnV0dG9uLmJ1dHRvbi1pbmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbmFjdGl2ZV9idXR0b24uYnV0dG9uLWFjdGl2ZSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVsZXRlLWtlZXAtdmVoaWNsZS10YWIge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICAuaXRlbS1kZWxldGUta2VlcC12ZWhpY2xlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIC5udW1iZXItaG9tZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MtaG9tZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAudmVoaWNsZS1uYW1lLWJsb2NrIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC52ZWhpY2xlLW5hbWUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5jaGVja2JveC1jb21tb24ge1xyXG4gICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0VBN0E2RSAwJSwgI0UyM0EyOCAxMDAlKTs7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLnZlaGljbGUtaW5mbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1leHBhbmQge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterKeepVehiclePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register-keep-vehicle',
                templateUrl: './register-keep-vehicle.page.html',
                styleUrls: ['./register-keep-vehicle.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }, { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "qhkR":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/register-keep-vehicle/register-keep-vehicle.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterKeepVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterKeepVehiclePageModule", function() { return RegisterKeepVehiclePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_keep_vehicle_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-keep-vehicle.page */ "MT81");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");










const routes = [
    {
        path: '',
        component: _register_keep_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["RegisterKeepVehiclePage"]
    }
];
class RegisterKeepVehiclePageModule {
}
RegisterKeepVehiclePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterKeepVehiclePageModule });
RegisterKeepVehiclePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterKeepVehiclePageModule_Factory(t) { return new (t || RegisterKeepVehiclePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterKeepVehiclePageModule, { declarations: [_register_keep_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["RegisterKeepVehiclePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterKeepVehiclePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_register_keep_vehicle_page__WEBPACK_IMPORTED_MODULE_5__["RegisterKeepVehiclePage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-register-keep-vehicle-register-keep-vehicle-module-es2015.js.map