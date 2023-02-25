(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-success-payment-success-module"],{

/***/ "766F":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-success/payment-success.page.ts ***!
  \***************************************************************/
/*! exports provided: PaymentSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessPage", function() { return PaymentSuccessPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utils.service */ "GUvF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










class PaymentSuccessPage {
    constructor(loading, platform, apiService, navCtrl) {
        this.loading = loading;
        this.platform = platform;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        // data
        this.listPaymentBills = [];
        this.segmentModel = 'all';
        this.myDate = new Date().toISOString();
        this.totalPayment = 0;
        this.platform.ready().then((readySource) => {
            this.heightScreen = platform.height() - 250;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() { }
    goBackHome() {
        this.navCtrl.navigateForward('/dashboard/home');
    }
    formatString(stringDate) {
        return _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"].formatString(stringDate);
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
}
PaymentSuccessPage.ɵfac = function PaymentSuccessPage_Factory(t) { return new (t || PaymentSuccessPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"])); };
PaymentSuccessPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentSuccessPage, selectors: [["app-payment-success"]], decls: 39, vars: 20, consts: [["slot", "fixed", 1, "payment-success-container", "no-scroll", 3, "scrollEvents"], [1, "ion-no-border", "payment-success-header"], ["src", "../assets/icon/payment/payment-success.svg", 1, "icon-history"], [1, "header-title"], [1, "payment-success-card"], ["lines", "none", 1, "payment-item-money"], [1, "success-money"], [1, "devider-line-payment"], ["lines", "none", 1, "payment-card-item", "padding-top-item"], [1, "label-left"], [1, "label-right"], ["lines", "none", 1, "payment-card-item"], ["lines", "none", 1, "payment-card-item", "padding-bottom-item"], [1, "label-right", "label-text"], ["lines", "none", 1, "ion-item-back"], [1, "default-button", "btn-default", 3, "click"]], template: function PaymentSuccessPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "V\u00ED AMOPAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "31/12/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "#123456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-text", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ph\u00ED d\u1ECBch v\u1EE5 chung c\u01B0 th\u00E1ng 10/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ion-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentSuccessPage_Template_ion_button_click_36_listener() { return ctx.goBackHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollEvents", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, "PAYMENT_RESULT.success_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.formatMoney("150000"), "\u0111");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, "PAYMENT_RESULT.success_resource"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 12, "PAYMENT_RESULT.success_time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, "PAYMENT_RESULT.success_code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 16, "PAYMENT_RESULT.success_content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 18, "PAYMENT_RESULT.success_back_btn"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".no-scroll[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.padding-top-item[_ngcontent-%COMP%] {\n  --padding-top: 15px !important;\n}\n\n.padding-bottom-item[_ngcontent-%COMP%] {\n  --padding-bottom: 15px !important;\n}\n\n.payment-success-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.payment-success-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 110px;\n  font-size: 20px;\n  line-height: 27px;\n  color: #ffffff;\n}\n\n.payment-success-container[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  --background: #FFC144;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%] {\n  background: #d8d8d8;\n  border-radius: 12px;\n  margin: 0px 15px;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%]   .success-money[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 50px;\n  line-height: 68px;\n  text-align: center;\n  color: #0e9347;\n  padding: 10px 0;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%]   .payment-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 25px;\n  color: #221c1e;\n  margin-left: 20px;\n  margin-bottom: 5px;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%]   .label-left[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 19px;\n  color: #666666;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%]   .label-right[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  text-align: right;\n  color: #221c1e;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%]   .ion-item-back[_ngcontent-%COMP%] {\n  --padding-top: 15px !important;\n  --padding-bottom: 20px !important;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .payment-success-card[_ngcontent-%COMP%]   .ion-item-back[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 20px;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .devider-line-payment[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .devider-line-payment[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 93px;\n  left: -16px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  z-index: 99;\n  background: #FFC144;\n}\n\n.payment-success-container[_ngcontent-%COMP%]   .devider-line-payment[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 93px;\n  right: -16px;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  z-index: 99;\n  background: #FFC144;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1zdWNjZXNzL3BheW1lbnQtc3VjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFESTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdOOztBQURJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdOOztBQURJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBR047O0FBRE07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR1I7O0FBRE07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUdSOztBQURNO0VBQ0UsWUFBQTtBQUdSOztBQUFJO0VBQ0UsOEJBQUE7RUFDQSxpQ0FBQTtBQUVOOztBQURNO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQUdSOztBQUdFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBRUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUFOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC1zdWNjZXNzL3BheW1lbnQtc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tc2Nyb2xsIHtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcC1pdGVtIHtcclxuICAtLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS1pdGVtIHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXltZW50LXN1Y2Nlc3MtaGVhZGVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgaGVpZ2h0OiAxNTZweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuaGVhZGVyLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiAxMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcbi5wYXltZW50LXN1Y2Nlc3MtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIC0tYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICAucGF5bWVudC1zdWNjZXNzLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2Q4ZDhkODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgLnN1Y2Nlc3MtbW9uZXkge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNjhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzBlOTM0NztcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLnBheW1lbnQtdGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIC5wYXltZW50LWNhcmQtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAubGFiZWwtbGVmdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICB9XHJcbiAgICAgIC5sYWJlbC1yaWdodCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICAgIH1cclxuICAgICAgLmxhYmVsLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlvbi1pdGVtLWJhY2sge1xyXG4gICAgICAtLXBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgLmRlZmF1bHQtYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZGV2aWRlci1saW5lLXBheW1lbnQge1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNlOWU5ZTk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDkzcHg7XHJcbiAgICAgIGxlZnQ6IC0xNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA5M3B4O1xyXG4gICAgICByaWdodDogLTE2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentSuccessPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-success',
                templateUrl: './payment-success.page.html',
                styleUrls: ['./payment-success.page.scss'],
            }]
    }], function () { return [{ type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }]; }, null); })();


/***/ }),

/***/ "yfNd":
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-success/payment-success.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessPageModule", function() { return PaymentSuccessPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payment_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-success.page */ "766F");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
        component: _payment_success_page__WEBPACK_IMPORTED_MODULE_6__["PaymentSuccessPage"]
    }
];
class PaymentSuccessPageModule {
}
PaymentSuccessPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentSuccessPageModule });
PaymentSuccessPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentSuccessPageModule_Factory(t) { return new (t || PaymentSuccessPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentSuccessPageModule, { declarations: [_payment_success_page__WEBPACK_IMPORTED_MODULE_6__["PaymentSuccessPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentSuccessPageModule, [{
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
                declarations: [_payment_success_page__WEBPACK_IMPORTED_MODULE_6__["PaymentSuccessPage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-payment-success-payment-success-module-es2015.js.map