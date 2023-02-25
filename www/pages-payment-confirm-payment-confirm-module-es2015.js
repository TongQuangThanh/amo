(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-confirm-payment-confirm-module"],{

/***/ "3Mjr":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-confirm/payment-confirm.page.ts ***!
  \***************************************************************/
/*! exports provided: PaymentConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmPage", function() { return PaymentConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _popup_payment_function_popup_payment_function_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup-payment-function/popup-payment-function.page */ "u6YQ");
/* harmony import */ var _popup_payment_success_popup_payment_success_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popup-payment-success/popup-payment-success.page */ "8Q1X");
/* harmony import */ var _popup_iframe_payment_popup_iframe_payment_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popup-iframe-payment/popup-iframe-payment.page */ "zzVl");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





















function PaymentConfirmPage_ion_list_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/payment/bag.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.type.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.formatMoney(item_r2.amount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.convertText(item_r2.description), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function PaymentConfirmPage_ion_button_68_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentConfirmPage_ion_button_68_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PAYMENT_INFOR.pay_now"));
} }
class PaymentConfirmPage {
    constructor(modalController, loading, apiService, navCtrl, route, translate, alertController, iab) {
        this.modalController = modalController;
        this.loading = loading;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.translate = translate;
        this.alertController = alertController;
        this.iab = iab;
        this.paymentMethodList = [];
        this.paymentType = "payment_cash";
        this.paymentUpdateAt = '';
        this.paymentCategory = null;
        this.paymentSelected = null;
        this.epayUserInfo = null;
        this.promotionMoney = 0;
    }
    ngOnInit() {
        // this.epayUserInfo = this.apiService.getEpayUserStored();
        this.paymentID = this.route.snapshot.paramMap.get('id');
        this.listPaymentContent = [];
        this.paymentType = 'payment_cash';
        this.getPaymentDetail(this.paymentID);
        // this.dumyPaymentMethod();
    }
    getPaymentDetail(paymentID) {
        const self = this;
        this.loading.present();
        this.apiService.getPaymentDetail(paymentID).subscribe((result) => {
            self.totalCash = result.paymentBill.total;
            self.paidAmount = result.paymentBill.paidAmount;
            self.titlePage = result.paymentBill.payment.title;
            self.paymentStartAt = result.paymentBill.payment.paymentStartAt;
            self.paymentCategory = result.paymentBill.category;
            self.paymentEndAt = result.paymentBill.payment.paymentEndAt;
            self.listPaymentContent = result.paymentBill.content;
            self.paymentStatus = result.paymentBill.status;
            this.paymentUpdateAt = result.paymentBill.updatedAt;
            let today = new Date();
            let endAt = new Date(result.paymentBill.payment.paymentEndAt);
            if (today > endAt && self.paymentStatus == 'publish') {
                self.paymentStatus = 'outdate';
            }
            self.loading.dismiss();
        }, (error) => {
            self.loading.dismiss();
        });
    }
    formatMoney(stringValue) {
        let n = parseInt(stringValue);
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    convertText(textInput) {
        if (textInput && textInput.length > 0) {
            return textInput.replace(/\n/gi, '<br/>');
        }
        else {
            return '';
        }
    }
    showListComment() {
        this.navCtrl.navigateForward('/payment-comment/' + this.paymentID);
    }
    changePaymentModal(paymentType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const self = this;
            const modalChangePayemt = yield this.modalController.create({
                component: _popup_payment_function_popup_payment_function_page__WEBPACK_IMPORTED_MODULE_7__["PopupPaymentFunctionPage"],
                componentProps: {
                    paymentCate: this.paymentCategory,
                    paymentMethodList: this.paymentMethodList,
                    paymentType: paymentType
                },
            });
            modalChangePayemt.onDidDismiss().then((result) => {
                if (result && result.data && result.data.confirm) {
                    // self.paymentSelected = result.data.paymentSelected;
                    self.payTheBillOnlineOrCash(result.data.paymentSelected);
                }
            });
            return yield modalChangePayemt.present();
        });
    }
    paymentSuccessShow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const self = this;
            const popupPaymentSuccessPage = yield this.modalController.create({
                component: _popup_payment_success_popup_payment_success_page__WEBPACK_IMPORTED_MODULE_8__["PopupPaymentSuccessPage"],
                componentProps: {},
            });
            return yield popupPaymentSuccessPage.present();
        });
    }
    payTheBill() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modalPay = yield this.modalController.create({
                component: _popup_iframe_payment_popup_iframe_payment_page__WEBPACK_IMPORTED_MODULE_9__["PopupIframePaymentPage"],
                componentProps: {
                    paymentID: this.paymentID,
                    totalCash: this.totalCash,
                    titlePage: this.titlePage,
                    promotionMoney: this.promotionMoney,
                    urlPayment: this.urlPayment
                },
            });
            modalPay.onDidDismiss().then((result) => {
                const data = JSON.parse(result.data || '');
                if (!data || data.result == 1) {
                    // this.navCtrl.navigateForward('/payment-fail');
                    return;
                }
                // this.navCtrl.navigateForward('/payment-success');
            });
            return yield modalPay.present();
        });
    }
    payTheBillOnlineOrCash(paymentSelected) {
        this.loading.present();
        const self = this;
        const params = {
            bill: this.paymentID,
            type: paymentSelected,
            bank: "",
            amount: this.totalCash,
            note: ""
        };
        this.apiService.postPayTheBill(params)
            .subscribe(result => {
            self.loading.dismiss();
            self.paymentSuccessShow();
            // self.navCtrl.navigateForward('/popup-payment-success');
        }, error => {
            self.loading.dismiss();
            // self.navCtrl.navigateForward('/payment-fail');
        });
    }
    openPayment() {
        // this.presentAlert(this.translate.instant('PAYMENT_INFOR.alert_comming_soon'));
        var self = this;
        // this.apiService.epaypayment(this.totalCash).subscribe((result) => {
        //   console.log(result);
        //   this.urlPayment = result.url;
        //   this.payTheBill();
        // });
        if (this.paymentType == 'payment_cash') {
            this.changePaymentModal(this.paymentType);
        }
        else if (this.paymentType == 'payment_transfer') {
            this.changePaymentModal(this.paymentType);
        }
        else {
            this.loading.present();
            this.apiService.momoPayment(this.totalCash - this.promotionMoney - this.paidAmount).subscribe((result) => {
                self.loading.dismiss();
                if (result.resultCode == 0) {
                    self.openURLAccuracyEpay(result.deeplink);
                }
                else {
                    self.navCtrl.navigateForward('/payment-fail');
                }
                // this.urlPayment = result.url;
                // this.payTheBill();
            }, (error) => {
                self.loading.dismiss();
            });
        }
    }
    openURLAccuracyEpay(url) {
        const browser = this.iab.create(url, '_system', 'location=yes, enableviewportscale=yes');
        browser.show();
    }
    // dumyPaymentMethod() {
    //   this.paymentMethodList = [];
    //   this.epayUserInfo = this.apiService.getEpayUserStored();
    //   if (!this.epayUserInfo) {
    //     return;
    //   }
    //   this.paymentMethodList = [
    //     {
    //       key: 1,
    //       name: this.translate.instant('PAYMENT_INFOR.payment_wallet_title'),
    //       content: this.formatMoney(this.epayUserInfo.user_info.balance) + 'đ',
    //       money: this.epayUserInfo.user_info.balance,
    //       isSelected: true,
    //     },
    //     // {
    //     //   key: 2,
    //     //   name: this.translate.instant('PAYMENT_INFOR.modal_change_vietcombank'),
    //     //   content: this.translate.instant('PAYMENT_INFOR.modal_change_ref'),
    //     //   isSelected: false,
    //     // },
    //   ];
    //   this.paymentSelected = this.paymentMethodList[0];
    // }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            const alert = yield this.alertController.create({
                cssClass: 'comming-soon-payment-class',
                header: self.translate.instant('COMMON.information'),
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
}
PaymentConfirmPage.ɵfac = function PaymentConfirmPage_Factory(t) { return new (t || PaymentConfirmPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"])); };
PaymentConfirmPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentConfirmPage, selectors: [["app-payment-confirm"]], decls: 69, vars: 42, consts: [[1, "ion-no-border", "payment-confirm-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "header-sub-title"], [1, "payment-confirm-content"], [1, "confirm_detail_title"], [1, "section-content", "margin-top-10"], ["lines", "none", 1, "fee-item", "confirm-bill-title"], [1, "devider-line-confirm-item"], ["class", "section-content-fee", 4, "ngFor", "ngForOf"], [1, "section-content-fee"], ["lines", "none", 1, "fee-item", "ion-no-padding"], [1, "fee-detail"], [1, "amount-number-total", "ion-float-right"], [1, "promotion-value", "ion-float-right"], [1, "amount-number", "ion-float-right"], ["lines", "none", 1, "fee-item", "ion-no-padding", 2, "margin", "0 15px"], [1, "icon-parking", 3, "src"], [1, "fee-title"], [3, "ngModel", "ngModelChange"], ["slot", "start", "color", "success", "value", "payment_cash"], ["slot", "start", "color", "success", "value", "payment_transfer"], ["disabled", "disabled"], ["slot", "start", "color", "success", "value", "payment_online"], [1, "ion-toolbar-payment"], ["class", "amo-button btn-default", 3, "click", 4, "ngIf"], ["lines", "none", 1, "item-fee-detail", "ion-no-padding"], [1, "fee-detail", 3, "innerHTML"], [1, "amo-button", "btn-default", 3, "click"]], template: function PaymentConfirmPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PaymentConfirmPage_ion_list_18_Template, 10, 4, "ion-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-item", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-radio-group", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PaymentConfirmPage_Template_ion_radio_group_ngModelChange_51_listener($event) { return ctx.paymentType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "ion-radio", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "ion-radio", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "ion-radio", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-toolbar", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, PaymentConfirmPage_ion_button_68_Template, 3, 3, "ion-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 20, "PAYMENT_INFOR.payment_confirm_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 22, "PAYMENT_INFOR.payment_confirm_sub_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 24, "PAYMENT_INFOR.payment_confirm_detail_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.titlePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listPaymentContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 26, "PAYMENT_INFOR.payment_confirm_amount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.formatMoney(ctx.totalCash), "\u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 28, "PAYMENT_INFOR.payment_confirm_promotion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.formatMoney(ctx.promotionMoney), "\u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 30, "PAYMENT_INFOR.payment_paidAmount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.formatMoney(ctx.paidAmount), "\u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 32, "PAYMENT_INFOR.payment_confirm_total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.formatMoney(ctx.totalCash - ctx.promotionMoney - ctx.paidAmount), "\u0111 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/payment/credit-card.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 34, "PAYMENT_INFOR.payment_method"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.paymentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 36, "PAYMENT_INFOR.payment_cash"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 38, "PAYMENT_INFOR.payment_transfer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 40, "PAYMENT_INFOR.payment_online"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalCash - ctx.promotionMoney - ctx.paidAmount > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.item-no-border[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.padding-left-0[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.padding-right-0[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n.margin-right-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n\n\n.cf[_ngcontent-%COMP%]:before, .cf[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.cf[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.cf[_ngcontent-%COMP%] {\n  *zoom: 1;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background-color: #FFC144;\n  height: 165px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  display: block;\n  width: 25px;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%]   .header-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 15px;\n  right: 15px;\n  top: 97px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #f9fcff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.payment-card[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  position: absolute;\n  top: 90px;\n  left: 0;\n  right: 0;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  margin: 10px 15px;\n  z-index: 99;\n}\n\n.payment-card[_ngcontent-%COMP%]   .update-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  min-width: 70%;\n  margin-right: 0px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  color: #221c1e;\n  padding: 0 20px;\n  margin-bottom: 5px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  color: #ffffff;\n  border-radius: 0px 8px;\n  width: 90px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-paid[_ngcontent-%COMP%] {\n  background: #33a54c;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-unpaid[_ngcontent-%COMP%] {\n  background: #FFC144;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-pending[_ngcontent-%COMP%] {\n  background: #f2c94c;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-outdate[_ngcontent-%COMP%] {\n  background: #e23a28;\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 42px;\n  left: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 42px;\n  right: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .money-title[_ngcontent-%COMP%] {\n  max-width: 55px;\n  margin-right: 0px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n  font-weight: 600;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .mone-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  color: #FFC144;\n  margin-right: 0px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .btn-paid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  --background: linear-gradient(180deg, #ffc144 0%, #ee9a1c 100%);\n  border-radius: 8px;\n  font-size: 14px;\n  color: #ffffff;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  --background: rgba(249, 252, 255, 1);\n  --padding-end: 15px;\n  --padding-start: 15px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .confirm_detail_title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 16px;\n  color: #221c1e;\n  font-weight: 600;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .confirm-bill-title[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 27px;\n  color: #221c1e;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .section-content-fee[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .icon-parking[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .amount-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #FFC144;\n  margin-right: 0px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .amount-number-total[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #221c1e;\n  text-align: right;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .promotion-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n  text-align: right;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  font-weight: 600;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .icon-view-detail[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 20px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .item-fee-detail[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: height 0.09s all linear;\n  box-shadow: none;\n  --min-height: 30px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-detail[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313f;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-due-date[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-due-date[_ngcontent-%COMP%]   .due-date[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #221c1e;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%] {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  margin-top: 30px;\n  text-align: center;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  margin-left: -15px;\n  width: 100vw;\n  border-radius: 10px;\n  padding-bottom: 10px;\n  \n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: normal;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .btn-pay-not-active[_ngcontent-%COMP%] {\n  --background: #d3d6d9;\n  --ion-toolbar-color: #d3d6d9;\n  --background-activated: #c5c7c9;\n  --background-focused: #c5c7c9;\n  --background-hover: #c5c7c9;\n  --border-radius: 8px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  margin: 10px;\n  --min-height: 50px;\n  --padding-start: 10px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  font-size: 32px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  left: 40px;\n  right: 0;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-money[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 40px;\n  right: 0;\n  bottom: 3px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-money[_ngcontent-%COMP%]   .money-insufficient[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n  opacity: 0.4;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-change[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  font-size: 14px;\n  line-height: 24px;\n  color: #FFC144;\n}\n\n.devider-line-confirm-item[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1jb25maXJtL3BheW1lbnQtY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBQUEsYUFBQTs7QUFFQTs7RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0dBRUUsT0FEQTtBQUVGOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQURFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUdKOztBQUZJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFJTjs7QUFERTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBR0o7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7QUFHSjs7QUFERTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFHSjs7QUFERTtFQUNFLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxtQkFBQTtBQUdKOztBQURFO0VBQ0UsbUJBQUE7QUFHSjs7QUFERTtFQUNFLG1CQUFBO0FBR0o7O0FBREU7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUlOOztBQUZJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBSU47O0FBREU7RUFDRSxlQUFBO0FBR0o7O0FBRkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFGSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSU47O0FBRkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUlOOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFGRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSEk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUtOOztBQUhJO0VBQ0UsY0FBQTtBQUtOOztBQUhJO0VBQ0Usd0JBQUE7QUFLTjs7QUFKTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQU1SOztBQUpNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU1SOztBQUpNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFNUjs7QUFKTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTVI7O0FBSEk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLTjs7QUFISTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUtOOztBQUhJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFLTjs7QUFISTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUtOOztBQURJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUdOOztBQURJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFHTjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBQ0k7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFDSTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQUNOOztBQUVJO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBTjs7QUFFTTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBQVI7O0FBRU07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUVNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFDUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ1Y7O0FBRU07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQVI7O0FBTUE7RUFDRSwwQkFBQTtBQUhGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC1jb25maXJtL3BheW1lbnQtY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXRvcC0xMCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLml0ZW0tbm8tYm9yZGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWxlZnQtMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5wYWRkaW5nLXJpZ2h0LTAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuLm1hcmdpbi1yaWdodC0xMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBDTEVBUkZJWCAqL1xyXG5cclxuLmNmOmJlZm9yZSxcclxuLmNmOmFmdGVyIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5jZjphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jZiB7XHJcbiAgKnpvb206IDE7XHJcbn1cclxuXHJcbi5wYXltZW50LWNvbmZpcm0taGVhZGVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgaGVpZ2h0OiAxNjVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgLmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIC0taWNvbi1mb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA1N3B4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmhlYWRlci1zdWItdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgdG9wOiA5N3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgcmlnaHQ6IC0xcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggMCAwIHJnYmEoMjQ5LCAyNTIsIDI1NSwgMSk7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5wYXltZW50LWNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgei1pbmRleDogOTk7XHJcblxyXG4gIC51cGRhdGUtdGltZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgbWluLXdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLnBheW1lbnQtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5wYXltZW50LWNhcmQtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5iYWRnZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDhweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5iYWRnZS1wYWlkIHtcclxuICAgIGJhY2tncm91bmQ6ICMzM2E1NGM7XHJcbiAgfVxyXG4gIC5iYWRnZS11bnBhaWQge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICB9XHJcbiAgLmJhZGdlLXBlbmRpbmcge1xyXG4gICAgYmFja2dyb3VuZDogI2YyYzk0YztcclxuICB9XHJcbiAgLmJhZGdlLW91dGRhdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2UyM2EyODtcclxuICB9XHJcbiAgLmRldmlkZXItbGluZS1pbmZvLXBheW1lbnQge1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNlOWU5ZTk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDQycHg7XHJcbiAgICAgIGxlZnQ6IC04cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDQycHg7XHJcbiAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAucGF5bWVudC1tb25leS1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIC5tb25leS10aXRsZSB7XHJcbiAgICAgIG1heC13aWR0aDogNTVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLm1vbmUtbnVtYmVyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5idG4tcGFpZCB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmMxNDQgMCUsICNlZTlhMWMgMTAwJSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnBheW1lbnQtY29uZmlybS1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDksIDI1MiwgMjU1LCAxKTtcclxuICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAuY29uZmlybV9kZXRhaWxfdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuY29uZmlybS1iaWxsLXRpdGxlIHtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLWNvbnRlbnQtZmVlIHtcclxuICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZmVlLWl0ZW0ge1xyXG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgIC5pY29uLXBhcmtpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuYW1vdW50LW51bWJlciB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hbW91bnQtbnVtYmVyLXRvdGFsIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgLnByb21vdGlvbi12YWx1ZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5mZWUtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzIxMzEzZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5pY29uLXZpZXctZGV0YWlsIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5pdGVtLWZlZS1kZXRhaWwge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4wOXMgYWxsIGxpbmVhcjtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLS1taW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmZlZS1kZXRhaWwge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzIxMzEzZjtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlY3Rpb24tZHVlLWRhdGUge1xyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIH1cclxuICAgIC5kdWUtZGF0ZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pb24tdG9vbGJhci1wYXltZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLyogRk9STSAqL1xyXG5cclxuICAgIC5idG4tZGVmYXVsdCB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuZGVmYXVsdC1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1wYXktbm90LWFjdGl2ZSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2QzZDZkOTtcclxuICAgICAgLS1pb24tdG9vbGJhci1jb2xvcjogI2QzZDZkOTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2M1YzdjOTtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNjNWM3Yzk7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogI2M1YzdjOTtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBheW1lbnQtZnVudGlvbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuXHJcbiAgICAgIC53YWxsZXQtaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC53YWxsZXQtdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgfVxyXG4gICAgICAud2FsbGV0LW1vbmV5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDNweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgLm1vbmV5LWluc3VmZmljaWVudCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAud2FsbGV0LWNoYW5nZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogI0ZGQzE0NDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRldmlkZXItbGluZS1jb25maXJtLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaymentConfirmPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-payment-confirm',
                templateUrl: './payment-confirm.page.html',
                styleUrls: ['./payment-confirm.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }, { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"] }]; }, null); })();


/***/ }),

/***/ "mZDy":
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-confirm/payment-confirm.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmPageModule", function() { return PaymentConfirmPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payment_confirm_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-confirm.page */ "3Mjr");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









const routes = [
    {
        path: '',
        component: _payment_confirm_page__WEBPACK_IMPORTED_MODULE_5__["PaymentConfirmPage"]
    }
];
class PaymentConfirmPageModule {
}
PaymentConfirmPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaymentConfirmPageModule });
PaymentConfirmPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaymentConfirmPageModule_Factory(t) { return new (t || PaymentConfirmPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentConfirmPageModule, { declarations: [_payment_confirm_page__WEBPACK_IMPORTED_MODULE_5__["PaymentConfirmPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentConfirmPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_payment_confirm_page__WEBPACK_IMPORTED_MODULE_5__["PaymentConfirmPage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-payment-confirm-payment-confirm-module-es2015.js.map