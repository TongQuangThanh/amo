(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-service-categories-list-service-categories-list-module"],{

/***/ "QiG7":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/service-categories-list/service-categories-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceCategoriesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCategoriesListPage", function() { return ServiceCategoriesListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "KqBo");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utils_const_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/const.service */ "KQOL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















function ServiceCategoriesListPage_ion_col_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceCategoriesListPage_ion_col_12_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.redirectToCategory(item_r1.category._id, item_r1.category.title, item_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
} }
class ServiceCategoriesListPage {
    constructor(modalController, camera, actionSheetController, loading, navCtrl, apiService, route) {
        this.modalController = modalController;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.route = route;
        this.listCategories = [];
    }
    ngOnInit() {
        this.data_shop_house = {};
        const category_id = this.route.snapshot.paramMap.get('categoryId');
        const category_name = this.route.snapshot.paramMap.get('categoryName');
        this.category_id = category_id;
        this.category_name = category_name;
    }
    ionViewWillEnter() {
        this.currentPage = 1;
        this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_6__["ConstService"].NUMBER_RECORD_ON_PAGE;
        this.getListCategories(this.category_id);
    }
    loadData(event) {
        this.currentPage++;
    }
    getListCategories(categoryGroupId) {
        this.loading.present();
        this.apiService.getListSubCateV2(categoryGroupId).subscribe(res => {
            this.listCategories = res.shopHouseSubCategoriesV2;
            console.warn(this.listCategories);
            this.loading.dismiss();
        });
    }
    redirectToCategory(id, name, choosenCate) {
        this.navCtrl.navigateForward('/user-shop-by-category/' + id + '/' + name + '/' + choosenCate);
    }
}
ServiceCategoriesListPage.ɵfac = function ServiceCategoriesListPage_Factory(t) { return new (t || ServiceCategoriesListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
ServiceCategoriesListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceCategoriesListPage, selectors: [["app-service-categories-list"]], decls: 13, vars: 5, consts: [[1, "cate-service-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "header-sub-title"], [1, "screen-content"], [1, "list-view-custom"], [1, "ion-grid-class"], ["class", "ion-col-class", "size", "6", 4, "ngFor", "ngForOf"], ["size", "6", 1, "ion-col-class"], [1, "div-button-1", 3, "click"], [1, "div-1"], [1, "class-image-button", 3, "src"], [1, "div-2"], ["lines", "none"], [1, "cate-title"]], template: function ServiceCategoriesListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-grid", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServiceCategoriesListPage_ion_col_12_Template, 8, 2, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "SEVICE_CATEGORY.sub_title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCategories);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.ion-color-primary[_ngcontent-%COMP%] {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: #FFC144 !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\nsuper-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #7a838c;\n  text-transform: unset;\n}\n\nsuper-tab-button.active[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.ion-list-class[_ngcontent-%COMP%] {\n  padding-left: 17px;\n  padding-right: 17px;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  display: inline-grid;\n  vertical-align: middle;\n  align-items: center;\n}\n\n.line-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #f4f5f5;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.line-bottom-10[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n  border-bottom: 10px solid #f4f5f5;\n}\n\n.margin-top-15[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  z-index: 999;\n  bottom: 0px;\n  width: 100%;\n  padding: 10px 0px;\n  display: flex;\n}\n\n.padding-top-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.padding-bottom-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.text-area-1[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  max-height: 110px;\n}\n\n.div-text-area-1[_ngcontent-%COMP%] {\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.button-section[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --box-shadow: unset;\n}\n\n.shadow-section[_ngcontent-%COMP%] {\n  box-shadow: 0px -20px 20px 0px rgba(37, 34, 77, 0.1);\n}\n\n.label-message-left[_ngcontent-%COMP%] {\n  text-overflow: unset;\n  white-space: pre-wrap;\n  overflow: unset;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.div-label-message-left[_ngcontent-%COMP%] {\n  background: #e9ebec;\n  border-radius: 2px 8px 8px 8px;\n  padding: 10px 10px;\n}\n\n.ion-item-message[_ngcontent-%COMP%] {\n  --border-width: 0;\n  margin-bottom: 20px;\n}\n\n.div-avatar[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 10px;\n}\n\n.div-avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n\n.div-label-message-right[_ngcontent-%COMP%] {\n  background: #21313f;\n  border-radius: 8px 2px 8px 8px;\n  padding: 10px 10px;\n}\n\n.label-message-right[_ngcontent-%COMP%] {\n  text-overflow: unset;\n  white-space: pre-wrap;\n  overflow: unset;\n  font-size: 16px;\n  line-height: 24px;\n  color: #ffffff;\n}\n\n.div-button-1[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  height: 100px;\n  padding: 20px 5px;\n  margin: 0px;\n}\n\n.div-button-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  margin-left: calc(50% - 60px);\n  left: 5px;\n  top: 0;\n  position: absolute;\n  width: 17px;\n  height: 100%;\n  contain: strict;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);\n  --border-radius: 8px;\n  -webkit-padding-start: 17px;\n  padding-inline-start: 17px;\n  -webkit-padding-end: 17px;\n  padding-inline-end: 17px;\n}\n\n.ion-grid-class[_ngcontent-%COMP%] {\n  -webkit-padding-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 9px));\n          padding-inline-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 9px));\n  -webkit-padding-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 9px));\n          padding-inline-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 9px));\n}\n\n.screen-content[_ngcontent-%COMP%] {\n  --background: #f9fcff;\n}\n\n.list-view-custom[_ngcontent-%COMP%] {\n  min-height: 100%;\n  border-radius: 20px 20px 0 0;\n}\n\n.div-1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto;\n}\n\n.div-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\n\n.div-2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n\n.div-2[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --min-height: 25px;\n}\n\n.div-2[_ngcontent-%COMP%]   .cate-title[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center !important;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 14px;\n  color: #221c1e;\n}\n\n.class-image-button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.cate-service-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.cate-service-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.cate-service-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.cate-service-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 45px;\n  right: 15px;\n  top: 55px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.cate-service-header[_ngcontent-%COMP%]   .header-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 15px;\n  right: 15px;\n  top: 97px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.cate-service-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #f6f6f6;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS1jYXRlZ29yaWVzLWxpc3Qvc2VydmljZS1jYXRlZ29yaWVzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsMkVBQUE7RUFDQSx3Q0FBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUlGOztBQUZBOzs7Ozs7Ozs7Ozs7RUFZRSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7QUFPRjs7QUFKQTtFQUNFLGlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxvQkFBQTtBQVFGOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQVNGOztBQVBBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBVUY7O0FBUkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFUQTtFQUNFLG9EQUFBO0FBWUY7O0FBVkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBY0Y7O0FBWkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBZUY7O0FBYkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWlCRjs7QUFmQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFtQkY7O0FBakJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBb0JGOztBQWxCQTtFQUNFLGNBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBc0JGOztBQXBCQTtFQUNFLDREQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQXVCRjs7QUFyQkE7RUFDRSwrRUFBQTtVQUFBLDhFQUFBO0VBQ0EsNkVBQUE7VUFBQSw0RUFBQTtBQXdCRjs7QUFuQkE7RUFDRSxxQkFBQTtBQXNCRjs7QUFuQkE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0FBc0JGOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQXNCRjs7QUFwQkU7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FBcUJKOztBQWxCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXFCRjs7QUFwQkU7RUFDRSxrQkFBQTtBQXNCSjs7QUFwQkU7RUFDRSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBc0JKOztBQWxCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBcUJGOztBQWxCQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBcUJGOztBQXBCRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFzQko7O0FBckJJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXVCTjs7QUFwQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFzQko7O0FBcEJFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQXNCSjs7QUFwQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBc0JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VydmljZS1jYXRlZ29yaWVzLWxpc3Qvc2VydmljZS1jYXRlZ29yaWVzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaW9uLWNvbG9yLXByaW1hcnkge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNGRkMxNDQgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcclxufVxyXG5zdXBlci10YWItYnV0dG9uIGlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xyXG59XHJcbnN1cGVyLXRhYi1idXR0b24uYWN0aXZlIGlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uaW9uLWxpc3QtY2xhc3Mge1xyXG4gIHBhZGRpbmctbGVmdDogMTdweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTIwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5tYXJnaW4tbGVmdC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG5cclxuLmNlbnRlci1kaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGluZS1ib3R0b20ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY1ZjU7XHJcbn1cclxuLmNvbC0xLFxyXG4uY29sLTIsXHJcbi5jb2wtMyxcclxuLmNvbC00LFxyXG4uY29sLTUsXHJcbi5jb2wtNixcclxuLmNvbC03LFxyXG4uY29sLTgsXHJcbi5jb2wtOSxcclxuLmNvbC0xMCxcclxuLmNvbC0xMSxcclxuLmNvbC0xMiB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ubGluZS1ib3R0b20tMTAge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZjRmNWY1O1xyXG59XHJcbi5tYXJnaW4tdG9wLTE1IHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5mdW5jdGlvbi1zZWN0aW9uIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucGFkZGluZy10b3AtMTAge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5wYWRkaW5nLWJvdHRvbS0yMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnRleHQtYXJlYS0xIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgbWF4LWhlaWdodDogMTEwcHg7XHJcbn1cclxuLmRpdi10ZXh0LWFyZWEtMSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbi5idXR0b24tc2VjdGlvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMTtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gIC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OiAxO1xyXG4gIC0tYm94LXNoYWRvdzogdW5zZXQ7XHJcbn1cclxuLnNoYWRvdy1zZWN0aW9uIHtcclxuICBib3gtc2hhZG93OiAwcHggLTIwcHggMjBweCAwcHggcmdiYSgzNywgMzQsIDc3LCAwLjEpO1xyXG59XHJcbi5sYWJlbC1tZXNzYWdlLWxlZnQge1xyXG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBvdmVyZmxvdzogdW5zZXQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5kaXYtbGFiZWwtbWVzc2FnZS1sZWZ0IHtcclxuICBiYWNrZ3JvdW5kOiAjZTllYmVjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweCA4cHggOHB4IDhweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuLmlvbi1pdGVtLW1lc3NhZ2Uge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmRpdi1hdmF0YXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmRpdi1hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5kaXYtbGFiZWwtbWVzc2FnZS1yaWdodCB7XHJcbiAgYmFja2dyb3VuZDogIzIxMzEzZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHggMnB4IDhweCA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi5sYWJlbC1tZXNzYWdlLXJpZ2h0IHtcclxuICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgb3ZlcmZsb3c6IHVuc2V0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZGl2LWJ1dHRvbi0xIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uZGl2LWJ1dHRvbi0xIGltZyB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaW9uLWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDYwcHgpO1xyXG4gIGxlZnQ6IDVweDtcclxuICB0b3A6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxN3B4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb250YWluOiBzdHJpY3Q7XHJcbn1cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMDcpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogMTdweDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTdweDtcclxuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxN3B4O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTdweDtcclxufVxyXG4uaW9uLWdyaWQtY2xhc3Mge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA5cHgpKTtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1ncmlkLXBhZGRpbmcteHMsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDlweCkpO1xyXG59XHJcblxyXG4vLyB1cGRhdGUgY3NzXHJcblxyXG4uc2NyZWVuLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2Y5ZmNmZjtcclxufVxyXG5cclxuLmxpc3Qtdmlldy1jdXN0b20ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxufVxyXG5cclxuLmRpdi0xIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxufVxyXG4uZGl2LTIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5jYXRlLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gIH1cclxufVxyXG5cclxuLmNsYXNzLWltYWdlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uY2F0ZS1zZXJ2aWNlLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICAuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5oZWFkZXItc3ViLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogOTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDAgMCAjZjZmNmY2O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceCategoriesListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-categories-list',
                templateUrl: './service-categories-list.page.html',
                styleUrls: ['./service-categories-list.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }, { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }, { type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "o8v/":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/service-categories-list/service-categories-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ServiceCategoriesListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCategoriesListPageModule", function() { return ServiceCategoriesListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");
/* harmony import */ var _service_categories_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service-categories-list.page */ "QiG7");










const routes = [
    {
        path: '',
        component: _service_categories_list_page__WEBPACK_IMPORTED_MODULE_7__["ServiceCategoriesListPage"]
    }
];
class ServiceCategoriesListPageModule {
}
ServiceCategoriesListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceCategoriesListPageModule });
ServiceCategoriesListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceCategoriesListPageModule_Factory(t) { return new (t || ServiceCategoriesListPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceCategoriesListPageModule, { declarations: [_service_categories_list_page__WEBPACK_IMPORTED_MODULE_7__["ServiceCategoriesListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceCategoriesListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                    _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_service_categories_list_page__WEBPACK_IMPORTED_MODULE_7__["ServiceCategoriesListPage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-service-categories-list-service-categories-list-module-es2015.js.map