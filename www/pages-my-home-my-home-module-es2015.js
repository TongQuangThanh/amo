(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-home-my-home-module"],{

/***/ "5/ai":
/*!***********************************************!*\
  !*** ./src/app/pages/my-home/my-home.page.ts ***!
  \***********************************************/
/*! exports provided: MyHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHomePage", function() { return MyHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _popup_building_management_phone_popup_building_management_phone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup-building-management-phone/popup-building-management-phone.page */ "z5Hz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function MyHomePage_ion_card_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyHomePage_ion_card_12_Template_ion_card_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.detailPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-title", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-card-content", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyHomePage_ion_card_12_Template_ion_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.buildingManagementPhoneModal($event, item_r1.campaign.phone); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r2 <= 9 ? "0" + (i_r2 + 1) : i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.apartment.title + " - " + item_r1.campaign.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.campaign.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 6, "MY_HOME.hotline_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.campaign.phone, " ");
} }
class MyHomePage {
    constructor(modalController, loading, navCtrl, apiService, callNumber) {
        this.modalController = modalController;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.callNumber = callNumber;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getListUserApar();
    }
    getListUserApar() {
        var self = this;
        this.loading.present();
        this.apiService.getListUserApartment()
            .subscribe(result => {
            self.listDepartment = result.userApartments;
            self.loading.dismiss();
        }, error => {
            self.loading.dismiss();
        });
    }
    detailPage(event) {
        // // this.nativePageTransitions.slide(ConstService.ANIMATION_OPTION_LEFT);
        this.navCtrl.navigateForward('/my-home-detail/' + event.currentTarget.id);
    }
    callEmergency(event) {
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
        for (let item in this.listDepartment) {
            if (this.listDepartment[item]._id == event.currentTarget.parentElement.parentElement.parentElement.id) {
                const campaignPhone = this.listDepartment[item].campaign.phone;
                this.callNumber.callNumber(campaignPhone, true)
                    .then(res => console.log('Launched dialer!', res))
                    .catch(err => console.log('Error launching dialer', err));
                break;
            }
        }
    }
    // async addApartment() {
    //   const modal = await this.modalController.create({
    //     component: ApartmentCodeRegisterPage,
    //     componentProps: {
    //     },
    //     cssClass: "custom-modal-wrapper"
    //   });
    //   modal.onDidDismiss().then((dataReturned:any) => {
    //     if (dataReturned !== null) {
    //       const dataReturnedResult = JSON.parse(dataReturned.data);
    //       if(dataReturnedResult.result == '0'){
    //         this.getListUserApar();
    //       }else{
    //       }
    //     }
    //   });
    //   return await modal.present();
    // }
    addNewHome() {
        this.navCtrl.navigateForward('/add-home');
    }
    buildingManagementPhoneModal($event, phoneNumber) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            $event.stopPropagation();
            const modal = yield this.modalController.create({
                component: _popup_building_management_phone_popup_building_management_phone_page__WEBPACK_IMPORTED_MODULE_6__["PopupBuildingManagementPhonePage"],
                componentProps: {
                    "phoneNumber": phoneNumber,
                },
                cssClass: 'buildingManagementPhone-custom-class'
            });
            return yield modal.present();
        });
    }
}
MyHomePage.ɵfac = function MyHomePage_Factory(t) { return new (t || MyHomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"])); };
MyHomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyHomePage, selectors: [["app-my-home"]], decls: 21, vars: 10, consts: [[1, "ion-no-border", "my-home-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "header-sub-title"], [1, "header-radius"], [1, "main-content"], [1, "list-content"], ["class", "card-content", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "add-new-button", 3, "click"], [1, "add-new-icon"], [1, "margin-top-20"], ["src", "../assets/icon/add.svg"], [1, "add-new-label"], [1, "card-content", 3, "id", "click"], [1, "number-watermark", "ion-float-right"], [1, "number-watermark-text"], ["lines", "none", 1, "hotline-item"], [1, "home-title"], ["expand", "block", "fill", "clear", "shape", "round", 1, "modify-icon"], ["src", "../assets/icon/svg/modify.svg"], [1, "home-content"], [1, "home-address"], [1, "hotline-title"], ["slot", "end", 1, "hotline-number", "clear-background", 3, "click"], ["src", "assets/icon/home/calling.svg", 1, "hotline-icon"]], template: function MyHomePage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MyHomePage_ion_card_12_Template, 20, 8, "ion-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyHomePage_Template_ion_card_click_13_listener() { return ctx.addNewHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "MY_HOME.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 6, "MY_HOME.subtitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDepartment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 8, "MY_HOME.button_add"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".my-home-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.my-home-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n.my-home-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n.my-home-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n.my-home-header[_ngcontent-%COMP%]   .header-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 15px;\n  right: 15px;\n  top: 97px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n}\n.my-home-header[_ngcontent-%COMP%]   .header-radius[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -5px;\n  width: 100%;\n  height: 20px;\n  background: #ffffff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.pading-margin-none[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.button-call[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  --background: #556080;\n  --background-activated: #556080;\n  --background-checked: #556080;\n  --background-hover: #556080;\n}\n.custom-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.custom-col-9[_ngcontent-%COMP%] {\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n.custom-col-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n.home-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #221c1e;\n}\n.home-content[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.home-infor[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  color: #556080;\n}\n.home-address[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n  opacity: 0.6;\n}\n.content-two-line[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.button-call-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #ffffff;\n}\n.button-call-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nion-card-header[_ngcontent-%COMP%] {\n  padding: 5px 15px 0px 15px;\n}\n.hotline-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  --min-height: 35px;\n}\n.hotline-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n  opacity: 0.6;\n}\n.hotline-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #009ac9;\n  margin-right: 10px;\n}\n.hotline-number[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #FFC144;\n  margin-right: 0;\n  margin-left: 0;\n  --box-shadow: none !important;\n}\n.clear-background[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background-activated: transparent;\n}\n.function-item[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  --background: transparent;\n}\n.delete-button[_ngcontent-%COMP%] {\n  background: rgba(250, 114, 104, 0.15);\n  --background-focused: rgba(250, 114, 104, 0.45);\n  --background-hover: rgba(250, 114, 104, 0.45);\n  --background: rgba(250, 114, 104, 0.15);\n  --background-activated: rgba(250, 114, 104, 0.45);\n  mix-blend-mode: normal;\n  border-radius: 5px;\n  left: 16px;\n  width: 100%;\n  height: 44px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #FFC144;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  margin-right: 10px;\n}\n.add-button[_ngcontent-%COMP%] {\n  --background: #009ac9;\n  --ion-toolbar-color: #009ac9;\n  --background-activated: #048ab3;\n  --background-focused: #048ab3;\n  --background-hover: #048ab3;\n  opacity: 0.8;\n  margin: 14px 10px;\n  --box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.1);\n  --color: #ffffff;\n}\n.add-button-icon[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  text-align: center;\n  text-transform: none;\n}\n.normal-button[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  --border-radius: 50%;\n  float: right;\n}\n.add-button-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #009ac9;\n  padding: 10px 20px;\n}\n.number-watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n}\n.number-watermark-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 50px;\n  line-height: 75px;\n  color: #f4f5f5;\n}\n.list-content[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 20px 20px 0px 0px;\n  background-color: #f9fcff;\n  height: 100%;\n}\n.card-content[_ngcontent-%COMP%] {\n  margin: 20px 16px 20px 16px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 10x;\n}\n.modify-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: 0;\n}\n.header-toolbar[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.title[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.card-content-ios[_ngcontent-%COMP%] {\n  -webkit-padding-start: 15px;\n          padding-inline-start: 15px;\n  -webkit-padding-end: 15px;\n          padding-inline-end: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktaG9tZS9teS1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFFSjtBQURJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUdOO0FBQUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBRUo7QUFJQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBREY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFBRjtBQUVBO0VBQ0UsYUFBQTtFQUVBLGVBQUE7QUFDRjtBQUNBO0VBRUUsYUFBQTtFQUNBLGNBQUE7QUFFRjtBQUFBO0VBRUUsYUFBQTtFQUNBLGNBQUE7QUFHRjtBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUdGO0FBREE7RUFDRSxpQkFBQTtBQUlGO0FBRkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFLRjtBQUhBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFNRjtBQUpBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQU9GO0FBSkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBTUY7QUFIQTtFQUNFLGNBQUE7QUFNRjtBQUhBO0VBQ0UsMEJBQUE7QUFNRjtBQUpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFPRjtBQUxBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFRRjtBQU5BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNGO0FBUEE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQVVGO0FBUkE7RUFFRSx5QkFBQTtFQUNBLG1DQUFBO0FBVUY7QUFSQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFXRjtBQUpBO0VBQ0UscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFPRjtBQUxBO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUFRRjtBQU5BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0Esb0JBQUE7QUFRRjtBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFTRjtBQVBBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFVRjtBQVJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBV0Y7QUFUQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFZRjtBQVJBO0VBRUUsVUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBVUY7QUFSQTtFQUNFLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQVdGO0FBVEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFZRjtBQVZBO0VBQ0UsNkJBQUE7QUFhRjtBQVhBO0VBQ0UsNkJBQUE7QUFjRjtBQVpBO0VBQ0UsMkJBQUE7VUFBQSwwQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7QUFlRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LWhvbWUvbXktaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktaG9tZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgaGVpZ2h0OiAxNTZweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgLmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIC0taWNvbi1mb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDFweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAuaGVhZGVyLXN1Yi10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDk3cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgLmhlYWRlci1yYWRpdXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbn1cclxuLnBhZGluZy1tYXJnaW4tbm9uZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmJ1dHRvbi1jYWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNTU2MDgwO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM1NTYwODA7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM1NTYwODA7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjNTU2MDgwO1xyXG59XHJcbi5jdXN0b20tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5jdXN0b20tY29sLTkge1xyXG4gIC1tcy1mbGV4OiAwIDAgNzUlO1xyXG4gIGZsZXg6IDAgMCA3NSU7XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcbn1cclxuLmN1c3RvbS1jb2wtMyB7XHJcbiAgLW1zLWZsZXg6IDAgMCAyNSU7XHJcbiAgZmxleDogMCAwIDI1JTtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmhvbWUtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzIyMWMxZTtcclxufVxyXG4uaG9tZS1jb250ZW50IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG4uaG9tZS1pbmZvciB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICBjb2xvcjogIzU1NjA4MDtcclxufVxyXG4uaG9tZS1hZGRyZXNzIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzIyMWMxZTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuLmNvbnRlbnQtdHdvLWxpbmUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbi5idXR0b24tY2FsbC10ZXh0IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuXHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5idXR0b24tY2FsbC1pY29uIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiA1cHggMTVweCAwcHggMTVweDtcclxufVxyXG4uaG90bGluZS1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tbWluLWhlaWdodDogMzVweDtcclxufVxyXG4uaG90bGluZS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5ob3RsaW5lLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzAwOWFjOTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmhvdGxpbmUtbnVtYmVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjRkZDMTQ0O1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uY2xlYXItYmFja2dyb3VuZCB7XHJcbiAgLy8gLS1jb2xvci1hY3RpdmF0ZWQ6IzU1NjA4MDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5mdW5jdGlvbi1pdGVtIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC8vIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgLy8gLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAvLyByaWdodDogMTZweDtcclxuICAvLyBsZWZ0OiAxNnB4O1xyXG59XHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMTE0LCAxMDQsIDAuMTUpO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiByZ2JhKDI1MCwgMTE0LCAxMDQsIDAuNDUpO1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgyNTAsIDExNCwgMTA0LCAwLjQ1KTtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjUwLCAxMTQsIDEwNCwgMC4xNSk7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgyNTAsIDExNCwgMTA0LCAwLjQ1KTtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBsZWZ0OiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uYWRkLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDA5YWM5O1xyXG4gIC0taW9uLXRvb2xiYXItY29sb3I6ICMwMDlhYzk7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzA0OGFiMztcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzA0OGFiMztcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICMwNDhhYjM7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIG1hcmdpbjogMTRweCAxMHB4O1xyXG4gIC0tYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCByZ2JhKDMzLCA0OSwgNjMsIDAuMSk7XHJcbiAgLS1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uYWRkLWJ1dHRvbi1pY29uIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgLy9saW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLm5vcm1hbC1idXR0b24ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmFkZC1idXR0b24tbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDlhYzk7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcbi5udW1iZXItd2F0ZXJtYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm51bWJlci13YXRlcm1hcmstdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDc1cHg7XHJcbiAgY29sb3I6ICNmNGY1ZjU7XHJcbn1cclxuXHJcbi8vIGN1c3RvbSBsaXN0IGFwYXJ0bWVudHNcclxuLmxpc3QtY29udGVudCB7XHJcbiAgLy8gbWFyZ2luOiAxMHB4IDE2cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmY2ZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW46IDIwcHggMTZweCAyMHB4IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTB4O1xyXG59XHJcbi5tb2RpZnktaWNvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbi5oZWFkZXItdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY2FyZC1jb250ZW50LWlvcyB7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyHomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-my-home',
                templateUrl: './my-home.page.html',
                styleUrls: ['./my-home.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] }]; }, null); })();


/***/ }),

/***/ "nE08":
/*!*************************************************!*\
  !*** ./src/app/pages/my-home/my-home.module.ts ***!
  \*************************************************/
/*! exports provided: MyHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHomePageModule", function() { return MyHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _my_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-home.page */ "5/ai");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










const routes = [
    {
        path: '',
        component: _my_home_page__WEBPACK_IMPORTED_MODULE_5__["MyHomePage"]
    }
];
class MyHomePageModule {
}
MyHomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyHomePageModule });
MyHomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyHomePageModule_Factory(t) { return new (t || MyHomePageModule)(); }, providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyHomePageModule, { declarations: [_my_home_page__WEBPACK_IMPORTED_MODULE_5__["MyHomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyHomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]],
                declarations: [_my_home_page__WEBPACK_IMPORTED_MODULE_5__["MyHomePage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-my-home-my-home-module-es2015.js.map