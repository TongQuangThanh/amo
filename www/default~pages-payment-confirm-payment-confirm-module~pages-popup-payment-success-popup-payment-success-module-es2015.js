(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-payment-confirm-payment-confirm-module~pages-popup-payment-success-popup-payment-success-module"],{

/***/ "8Q1X":
/*!***************************************************************************!*\
  !*** ./src/app/pages/popup-payment-success/popup-payment-success.page.ts ***!
  \***************************************************************************/
/*! exports provided: PopupPaymentSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPaymentSuccessPage", function() { return PopupPaymentSuccessPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







class PopupPaymentSuccessPage {
    constructor(translateConfigService, modalController, navCtrl) {
        this.translateConfigService = translateConfigService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    ngOnInit() {
    }
    listPayment() {
        var self = this;
        this.closeModal();
        setTimeout(function () {
            self.navCtrl.navigateForward('dashboard/payment');
        }, 300);
    }
    closeModal() {
        this.modalController.dismiss();
    }
}
PopupPaymentSuccessPage.ɵfac = function PopupPaymentSuccessPage_Factory(t) { return new (t || PopupPaymentSuccessPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"])); };
PopupPaymentSuccessPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupPaymentSuccessPage, selectors: [["app-popup-payment-success"]], decls: 15, vars: 6, consts: [[1, "content-wrap"], [1, "content-container"], ["lines", "none", 1, "header-item"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], ["lines", "none", 1, "ion-text-center"], ["name", "checkmark-circle-outline", 1, "trash-icon"], [1, "ion-text-center", "modal-item"], [1, "normal-message"], [1, "ion-text-center", "modal-bottom", 3, "click"], [1, "extra-message"]], template: function PopupPaymentSuccessPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentSuccessPage_Template_ion_buttons_click_3_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-toolbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupPaymentSuccessPage_Template_ion_toolbar_click_11_listener() { return ctx.listPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, "PAYMENT_INFOR.payment_success_message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, "PAYMENT_INFOR.payment_another"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33,49,63,0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 0 0 70px 0;\n}\n\n.modal-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.trash-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #FFC144;\n}\n\n.normal-message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313F;\n  margin-bottom: 0;\n}\n\n.extra-message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #009AC9;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  width: 43.73%;\n  height: 44px;\n  --ion-toolbar-color: #D3D6D9;\n  --background-activated: #c5c7c9;\n  --background-focused: #c5c7c9;\n  --background-hover: #c5c7c9;\n  --border-radius: 8px;\n  margin: 0 10px;\n  --box-shadow: none !important;\n}\n\n.cancel-button-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313F;\n  text-transform: none;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  width: 43.73%;\n  height: 44px;\n  --ion-toolbar-color: #FFC144;\n  --background-activated: #c5433a;\n  --background-focused: #c5433a;\n  --background-hover: #c5433a;\n  --border-radius: 8px;\n  margin: 0 10px;\n  --box-shadow: none !important;\n}\n\n.delete-button-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #FFFFFF;\n  text-transform: none;\n}\n\n.hotline-num[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  color: #21313F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtcGF5bWVudC1zdWNjZXNzL3BvcHVwLXBheW1lbnQtc3VjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw4QkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVVKOztBQVJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBV0o7O0FBVEE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVlKOztBQVZBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBYUo7O0FBWEE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWNKOztBQVpBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBZUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3B1cC1wYXltZW50LXN1Y2Nlc3MvcG9wdXAtcGF5bWVudC1zdWNjZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvb3R7XHJcbiAgICAtLWJvcmRlckNvbG9yOmdyYXk7XHJcbiAgICAtLWNoYXJTaGFwZTpub25lO1xyXG59XHJcbi5jb250ZW50LXdyYXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMzLDQ5LDYzLDApO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi5oZWFkZXItaXRlbSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbn1cclxuLm1vZGFsLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIDAgNzBweCAwO1xyXG59XHJcbi5tb2RhbC1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ubW9kYWwtdG9vbGJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4udHJhc2gtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBjb2xvcjogI0ZGQzE0NDtcclxufVxyXG4ubm9ybWFsLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMjEzMTNGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uZXh0cmEtbWVzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA5QUM5O1xyXG59XHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0My43MyU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAtLWlvbi10b29sYmFyLWNvbG9yOiAjRDNENkQ5O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2M1YzdjOTtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjYzVjN2M5O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjYzVjN2M5O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYW5jZWwtYnV0dG9uLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyMTMxM0Y7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDMuNzMlO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgLS1pb24tdG9vbGJhci1jb2xvcjogI0ZGQzE0NDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNjNTQzM2E7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2M1NDMzYTtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2M1NDMzYTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uZGVsZXRlLWJ1dHRvbi1sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLmhvdGxpbmUtbnVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyMTMxM0Y7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupPaymentSuccessPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup-payment-success',
                templateUrl: './popup-payment-success.page.html',
                styleUrls: ['./popup-payment-success.page.scss'],
            }]
    }], function () { return [{ type: _translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-payment-confirm-payment-confirm-module~pages-popup-payment-success-popup-payment-success-module-es2015.js.map