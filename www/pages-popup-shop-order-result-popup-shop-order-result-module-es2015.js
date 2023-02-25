(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popup-shop-order-result-popup-shop-order-result-module"],{

/***/ "M2Yk":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/popup-shop-order-result/popup-shop-order-result-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PopupShopOrderResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupShopOrderResultPageRoutingModule", function() { return PopupShopOrderResultPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_shop_order_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-shop-order-result.page */ "kIeV");






const routes = [
    {
        path: '',
        component: _popup_shop_order_result_page__WEBPACK_IMPORTED_MODULE_3__["PopupShopOrderResultPage"]
    }
];
class PopupShopOrderResultPageRoutingModule {
}
PopupShopOrderResultPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupShopOrderResultPageRoutingModule });
PopupShopOrderResultPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupShopOrderResultPageRoutingModule_Factory(t) { return new (t || PopupShopOrderResultPageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupShopOrderResultPageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupShopOrderResultPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kIeV":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/popup-shop-order-result/popup-shop-order-result.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PopupShopOrderResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupShopOrderResultPage", function() { return PopupShopOrderResultPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");








class PopupShopOrderResultPage {
    constructor(modalController, navCtrl, translateConfigService, translate) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.translateConfigService = translateConfigService;
        this.translate = translate;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss();
        this.navCtrl.back();
    }
}
PopupShopOrderResultPage.ɵfac = function PopupShopOrderResultPage_Factory(t) { return new (t || PopupShopOrderResultPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
PopupShopOrderResultPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupShopOrderResultPage, selectors: [["app-popup-shop-order-result"]], decls: 13, vars: 6, consts: [[1, "content-wrap"], [1, "content-container"], ["lines", "full", 1, "ion-no-margin", "ion-no-padding", "margin-top-10"], ["lines", "none", "id", "area-show-image", 1, "popup-ion-item"], ["src", "../assets/icon/svg/Outline.svg", 1, ""], [1, "popup-text-1"], ["lines", "none", "id", "area-show-image", 1, "popup-ion-item", 3, "click"], [1, "popup-text-2"]], template: function PopupShopOrderResultPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupShopOrderResultPage_Template_ion_item_click_9_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, "SEVICE_05.popup_text_information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, "SEVICE_05.order_another_service"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor: gray;\n  --charShape: none;\n}\n\nion-buttons.md[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\nion-title.md[_ngcontent-%COMP%] {\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33, 49, 63, 0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  display: flex;\n  height: 60px;\n  border-bottom: 1px solid #f4f5f5;\n}\n\n.popup-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  color: #21313f;\n}\n\n.close[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n\n.popup-ion-item[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n}\n\n.popup-text-1[_ngcontent-%COMP%] {\n  white-space: unset;\n  padding: 20px 0px;\n  font-size: 16px;\n  white-space: pre-line !important;\n}\n\n.popup-text-2[_ngcontent-%COMP%] {\n  white-space: unset;\n  font-size: 14px;\n  color: #009ac9;\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtc2hvcC1vcmRlci1yZXN1bHQvcG9wdXAtc2hvcC1vcmRlci1yZXN1bHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7VUFBQSxxQkFBQTtBQUdGOztBQURBO0VBQ0UsaUNBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFLRjs7QUFIQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBTUY7O0FBSkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFPRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFTRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wdXAtc2hvcC1vcmRlci1yZXN1bHQvcG9wdXAtc2hvcC1vcmRlci1yZXN1bHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicm9vdCB7XHJcbiAgLS1ib3JkZXJDb2xvcjogZ3JheTtcclxuICAtLWNoYXJTaGFwZTogbm9uZTtcclxufVxyXG5pb24tYnV0dG9ucy5tZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuaW9uLXRpdGxlLm1kIHtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XHJcbn1cclxuLmNvbnRlbnQtd3JhcCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMzLCA0OSwgNjMsIDApO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi5oZWFkZXItaXRlbSB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4ucG9wdXAtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4ucG9wdXAtaW9uLWl0ZW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuLnBvcHVwLXRleHQtMSB7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0O1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcclxufVxyXG4ucG9wdXAtdGV4dC0yIHtcclxuICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupShopOrderResultPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup-shop-order-result',
                templateUrl: './popup-shop-order-result.page.html',
                styleUrls: ['./popup-shop-order-result.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }, { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_3__["TranslateConfigService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "xYnX":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/popup-shop-order-result/popup-shop-order-result.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PopupShopOrderResultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupShopOrderResultModule", function() { return PopupShopOrderResultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _popup_shop_order_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup-shop-order-result-routing.module */ "M2Yk");
/* harmony import */ var _popup_shop_order_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-shop-order-result.page */ "kIeV");








class PopupShopOrderResultModule {
}
PopupShopOrderResultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupShopOrderResultModule });
PopupShopOrderResultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupShopOrderResultModule_Factory(t) { return new (t || PopupShopOrderResultModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
            _popup_shop_order_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupShopOrderResultPageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupShopOrderResultModule, { declarations: [_popup_shop_order_result_page__WEBPACK_IMPORTED_MODULE_6__["PopupShopOrderResultPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
        _popup_shop_order_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupShopOrderResultPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupShopOrderResultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                    _popup_shop_order_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopupShopOrderResultPageRoutingModule"]
                ],
                declarations: [_popup_shop_order_result_page__WEBPACK_IMPORTED_MODULE_6__["PopupShopOrderResultPage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-popup-shop-order-result-popup-shop-order-result-module-es2015.js.map