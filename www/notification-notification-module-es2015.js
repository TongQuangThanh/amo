(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "UUPU":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.page */ "kAio");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_5__["NotificationPage"]
    }
];
class NotificationPageModule {
}
NotificationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationPageModule });
NotificationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationPageModule_Factory(t) { return new (t || NotificationPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationPageModule, { declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_5__["NotificationPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_5__["NotificationPage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kAio":
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "CicV");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _utils_const_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/const.service */ "KQOL");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils.service */ "GUvF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














function NotificationPage_ion_list_17_ion_card_1_ion_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-img", 25);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.thumbnail);
} }
function NotificationPage_ion_list_17_ion_card_1_ion_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-img", 26);
} }
function NotificationPage_ion_list_17_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPage_ion_list_17_ion_card_1_Template_ion_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.detailPage(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationPage_ion_list_17_ion_card_1_ion_img_2_Template, 1, 1, "ion-img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationPage_ion_list_17_ion_card_1_ion_img_3_Template, 1, 0, "ion-img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-title", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.thumbnail != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.thumbnail == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.formatString(item_r3.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
} }
function NotificationPage_ion_list_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationPage_ion_list_17_ion_card_1_Template, 11, 5, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listArticlesNew);
} }
function NotificationPage_ion_list_18_ion_card_1_ion_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-img", 25);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r10.thumbnail);
} }
function NotificationPage_ion_list_18_ion_card_1_ion_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-img", 26);
} }
function NotificationPage_ion_list_18_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPage_ion_list_18_ion_card_1_Template_ion_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.detailPage(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationPage_ion_list_18_ion_card_1_ion_img_2_Template, 1, 1, "ion-img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationPage_ion_list_18_ion_card_1_ion_img_3_Template, 1, 0, "ion-img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-card-title", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.thumbnail != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.thumbnail == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.formatString(item_r10.updatedAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.title);
} }
function NotificationPage_ion_list_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationPage_ion_list_18_ion_card_1_Template, 11, 5, "ion-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listArticlesNoti);
} }
class NotificationPage {
    constructor(loading, apiService, navCtrl, nativePageTransitions) {
        this.loading = loading;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.listArticlesNew = [];
        this.listArticlesNoti = [];
        this.currentPageNew = 1;
        this.currentPageNoti = 1;
        this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_5__["ConstService"].NUMBER_RECORD_ON_PAGE;
    }
    ngOnInit() {
        this.isNews = 1;
        this.getArticles(this.currentPageNew, this.numberRecordOnPage, '', '', null, true);
    }
    ionViewWillEnter() { }
    getArticles(page, limit, category, search, event, isRefresh) {
        const self = this;
        if (this.getArticleSubscriber) {
            this.getArticleSubscriber.unsubscribe();
        }
        this.loading.present();
        if (this.isNews == 0) {
            this.getArticleSubscriber = this.apiService.getListArticle(page, limit, category, search).subscribe((result) => {
                if (isRefresh) {
                    self.listArticlesNoti = result.articles;
                }
                else {
                    self.listArticlesNoti = self.listArticlesNoti.concat(result.articles);
                }
                if (event) {
                    event.target.complete();
                }
                self.loading.dismiss();
            }, (error) => {
                self.loading.dismiss();
            });
        }
        else {
            this.getArticleSubscriber = this.apiService.getPosts(page, limit, category, search).subscribe((result) => {
                if (isRefresh) {
                    self.listArticlesNew = result.posts;
                }
                else {
                    self.listArticlesNew = self.listArticlesNew.concat(result.posts);
                }
                if (event) {
                    event.target.complete();
                }
                self.loading.dismiss();
            }, (error) => {
                self.loading.dismiss();
            });
        }
    }
    loadData(event) {
        if (this.isNews == 1) {
            this.currentPageNew++;
            this.getArticles(this.currentPageNew, this.numberRecordOnPage, '', '', event, false);
        }
        else {
            this.currentPageNoti++;
            this.getArticles(this.currentPageNoti, this.numberRecordOnPage, '', '', event, false);
        }
    }
    detailPage(data) {
        if (this.isNews == 0) {
            if (data === null || data === void 0 ? void 0 : data.survey) {
                localStorage.setItem('survey_data_stored', JSON.stringify(data));
                this.navCtrl.navigateForward(`/survey/${data._id}`);
            }
            else {
                this.navCtrl.navigateForward('/notification-detail/' + data._id);
            }
        }
        else {
            this.navCtrl.navigateForward('/new-detail/' + data._id);
        }
    }
    formatString(stringDate) {
        return _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].formatString(stringDate);
    }
    doRefresh(event) {
        if (this.isNews == 1) {
            this.currentPageNew = 1;
            this.getArticles(this.currentPageNew, this.numberRecordOnPage, '', '', event, true);
        }
        else {
            this.currentPageNoti = 1;
            this.getArticles(this.currentPageNoti, this.numberRecordOnPage, '', '', event, true);
        }
    }
    toNews(event) {
        if (this.isNews != 1) {
            this.content.scrollToTop();
        }
        this.isNews = 1;
        if (!this.listArticlesNew || this.listArticlesNew.length == 0) {
            this.getArticles(this.currentPageNew, this.numberRecordOnPage, '', '', null, true);
        }
    }
    toNot(event) {
        if (this.isNews != 0) {
            this.content.scrollToTop();
        }
        this.isNews = 0;
        if (!this.listArticlesNoti || this.listArticlesNoti.length == 0) {
            this.getArticles(this.currentPageNoti, this.numberRecordOnPage, '', '', null, true);
        }
    }
}
NotificationPage.ɵfac = function NotificationPage_Factory(t) { return new (t || NotificationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"])); };
NotificationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationPage, selectors: [["app-notification"]], viewQuery: function NotificationPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 23, vars: 15, consts: [[1, "page-header", "ion-no-border"], ["color", "#FFC144", 1, "ion-toolbar-title"], [1, "page-header-title"], [1, "custum-tab"], [1, "tab-btn", "tab-btn-left", 3, "click"], [1, "tab-btn", "tab-btn-right", 3, "click"], [1, "main-content"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "circles", "refreshingSpinner", "", "refreshingText", ""], ["class", "news", 4, "ngIf"], ["threshold", "100px", 1, "infinite-scroll", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], [1, "bottom-frame-wrapper"], [1, "bottom-frame"], [1, "news"], ["class", "info-card", "button", "", 3, "id", "click", 4, "ngFor", "ngForOf"], ["button", "", 1, "info-card", 3, "id", "click"], [1, "card-img"], [3, "src", 4, "ngIf"], ["src", "assets/common/no-thumbnail.png", 4, "ngIf"], [1, "badge-corner", "badge-corner-base"], [1, "badge-corner-right", "badge-corner-icon", "hide"], ["name", "custom-pined", "src", "assets/icon/custom-pined.svg", 1, "custom-pined"], ["lines", "none"], [1, "ion-text-wrap", "content-two-line", "content-title"], [3, "src"], ["src", "assets/common/no-thumbnail.png"]], template: function NotificationPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPage_Template_div_click_6_listener($event) { return ctx.toNews($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationPage_Template_div_click_10_listener($event) { return ctx.toNot($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-refresher", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function NotificationPage_Template_ion_refresher_ionRefresh_15_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-refresher-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NotificationPage_ion_list_17_Template, 2, 1, "ion-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NotificationPage_ion_list_18_Template, 2, 1, "ion-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-infinite-scroll", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function NotificationPage_Template_ion_infinite_scroll_ionInfinite_19_listener($event) { return ctx.loadData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-infinite-scroll-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "NEWS.top"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isNews == 1 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, "NEWS.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isNews != 1 ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, "NOTIFICATION.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNews == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNews != 1);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRefresherContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonImg"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".page-header[_ngcontent-%COMP%] {\n  z-index: 1;\n  color: #ffffff;\n}\n.page-header[_ngcontent-%COMP%]   .ion-toolbar-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 10px;\n  padding-top: 45px;\n}\n.page-header-title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 28px;\n  line-height: 41px;\n  -webkit-padding-start: 10px;\n          padding-inline-start: 10px;\n}\n.page-header-subtitle[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n}\n.page-header-icon[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 0px;\n}\n.page-header[_ngcontent-%COMP%]   .custum-tab[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  bottom: 8px;\n  left: 20px;\n  right: 20px;\n  background: #ffffff;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 20px;\n  color: black;\n  height: 32px;\n}\n.page-header[_ngcontent-%COMP%]   .custum-tab[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  color: #221C1E;\n  opacity: 0.6;\n}\n.page-header[_ngcontent-%COMP%]   .custum-tab[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #FFC144;\n  border-radius: 20px;\n  opacity: 1;\n  color: #F9FCFF;\n}\n.page-header[_ngcontent-%COMP%]   .custum-tab[_ngcontent-%COMP%]   .tab-btn-left[_ngcontent-%COMP%] {\n  margin-left: 2px;\n}\n.page-header[_ngcontent-%COMP%]   .custum-tab[_ngcontent-%COMP%]   .tab-btn-right[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n.ion-no-border[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  border-radius: 200%/0 0 150px 150px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.main-content[_ngcontent-%COMP%] {\n  top: 0px;\n  z-index: 2;\n  --border-radius: 20px 20px 0px 0px !important;\n  --background: none;\n  bottom: -10px;\n}\n.news-segment[_ngcontent-%COMP%] {\n  top: 110px;\n  position: absolute;\n  height: 35px;\n  border-radius: 17px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n}\n.news-segment[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  --color: #221c1e;\n  --border-color: transparent !important;\n  --background: #ffffff !important;\n  width: 100%;\n  height: 32px;\n}\n.news-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --color: #221c1e;\n  --border-color: transparent !important;\n  --background: #ffffff !important;\n  opacity: 0.6;\n}\n.news-segment[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%] {\n  background: #FFC144 !important;\n  --indicator-color: none !important;\n  --background: #FFC144 !important;\n  color: #ffffff;\n  opacity: 1;\n  border-bottom: 1px solid white;\n  border-radius: 16px;\n}\n.news[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n.title-info.ios[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  font-size: 26px;\n}\n.title-info.md[_ngcontent-%COMP%] {\n  -webkit-padding-start: 16px;\n          padding-inline-start: 16px;\n  font-size: 26px;\n}\n.info-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.1);\n  margin: 15px;\n  border-radius: 8px;\n}\n.subContentText[_ngcontent-%COMP%] {\n  max-height: 3.6em;\n  line-height: 1.8em;\n  height: 75%;\n  white-space: normal;\n}\n.row-height-note[_ngcontent-%COMP%] {\n  height: 2.5em;\n}\n.panding-15-right[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n.content-two-line[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n.content-title[_ngcontent-%COMP%] {\n  margin: 10px 15px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #221c1e;\n}\n.content-sub[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  max-height: 38px;\n  color: #556080;\n}\n.card-title[_ngcontent-%COMP%] {\n  padding: 15px 15px 0px 15px;\n}\n.title-text-header[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  padding-left: 10px;\n}\n.note-style[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #bbbfcc;\n}\n.card-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n}\n.badge-corner[_ngcontent-%COMP%]:empty {\n  display: inline-block;\n}\n.badge-corner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 30px;\n  padding: 0px 10px;\n  background-color: #fdbc3f;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 8px;\n  color: #ffffff;\n}\n.badge-corner-base[_ngcontent-%COMP%] {\n  background-color: #fdbc3f;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 30px;\n  text-align: center;\n}\n.badge-corner-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  background-color: #f2c94c;\n  border-top-left-radius: 0;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 0;\n  color: #ffffff;\n}\n.badge-corner-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 30px;\n  text-align: center;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n}\n.card-bottom-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.card-bottom-label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.sliding-background[_ngcontent-%COMP%] {\n  background: url('aparment.svg');\n  height: 560px;\n  width: 5076px;\n  -webkit-animation: slide 60s linear infinite;\n          animation: slide 60s linear infinite;\n}\nion-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n}\n.bottom-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  background-image: url(\"/assets/common/frame.png\");\n}\n.infinite-scroll[_ngcontent-%COMP%], .bottom-frame-wrapper[_ngcontent-%COMP%] {\n  background: #f6f7f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO1VBQUEsMEJBQUE7QUFFSjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUVKO0FBQUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUo7QUFBSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRU47QUFBSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQUk7RUFDRSxnQkFBQTtBQUVOO0FBQUk7RUFDRSxpQkFBQTtBQUVOO0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUVGO0FBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFHRjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUdKO0FBREU7RUFDRSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQUFBO0VBQ0UsZUFBQTtBQUdGO0FBQUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQUdGO0FBREE7RUFDRSwyQkFBQTtVQUFBLDBCQUFBO0VBQ0EsZUFBQTtBQUlGO0FBRkE7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUtGO0FBSEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTUY7QUFIQTtFQUNFLGFBQUE7QUFNRjtBQUhBO0VBQ0UsbUJBQUE7QUFNRjtBQUhBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQU1GO0FBSEE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNRjtBQUhBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUVBLGNBQUE7QUFLRjtBQUZBO0VBQ0UsMkJBQUE7QUFLRjtBQUhBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTUY7QUFIQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUFLRjtBQUZBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBS0Y7QUFIQTtFQUNFLHFCQUFBO0FBTUY7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FBT0Y7QUFMQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUUY7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQVNGO0FBUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVVGO0FBUkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBV0Y7QUFUQTtFQUNFLGVBQUE7QUFZRjtBQVZBO0VBQ0UsZ0JBQUE7QUFhRjtBQVZBO0VBQ0UsYUFBQTtBQWFGO0FBVkE7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtBQWFGO0FBWEE7RUFDRSxvQkFBQTtBQWNGO0FBWEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBY0Y7QUFYQTtFQUNFLG1CQUFBO0FBY0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciB7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICAuaW9uLXRvb2xiYXItdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIH1cclxuICAmLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcclxuICB9XHJcbiAgJi1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAmLWljb24ge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuICAuY3VzdHVtLXRhYiB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMzJweDtcclxuXHJcbiAgICAudGFiLWJ0biB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzIyMUMxRTtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGNvbG9yOiAjRjlGQ0ZGO1xyXG4gICAgfVxyXG4gICAgLnRhYi1idG4tbGVmdCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB9XHJcbiAgICAudGFiLWJ0bi1yaWdodCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uaW9uLW5vLWJvcmRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwMCUvMCAwIDE1MHB4IDE1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICBib3R0b206IC0xMHB4O1xyXG59XHJcbi5uZXdzLXNlZ21lbnQge1xyXG4gIHRvcDogMTEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogOTAlO1xyXG5cclxuICBpb24tc2VnbWVudCB7XHJcbiAgICAtLWNvbG9yOiAjMjIxYzFlO1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzIyMWMxZTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkMxNDQgIWltcG9ydGFudDtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkMxNDQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgfVxyXG59XHJcbi5uZXdzIHtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuXHJcbi50aXRsZS1pbmZvLmlvcyB7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcbi50aXRsZS1pbmZvLm1kIHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTZweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmluZm8tY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCByZ2JhKDMzLCA0OSwgNjMsIDAuMSk7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uc3ViQ29udGVudFRleHQge1xyXG4gIG1heC1oZWlnaHQ6IDMuNmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICBoZWlnaHQ6IDc1JTtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4ucm93LWhlaWdodC1ub3RlIHtcclxuICBoZWlnaHQ6IDIuNWVtO1xyXG59XHJcblxyXG4ucGFuZGluZy0xNS1yaWdodCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmNvbnRlbnQtdHdvLWxpbmUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuXHJcbi5jb250ZW50LXRpdGxlIHtcclxuICBtYXJnaW46IDEwcHggMTVweDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbn1cclxuXHJcbi5jb250ZW50LXN1YiB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuICBtYXgtaGVpZ2h0OiAzOHB4O1xyXG5cclxuICBjb2xvcjogIzU1NjA4MDtcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcclxufVxyXG4udGl0bGUtdGV4dC1oZWFkZXIge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubm90ZS1zdHlsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiAjYmJiZmNjO1xyXG59XHJcblxyXG4uY2FyZC1pbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5iYWRnZS1jb3JuZXI6ZW1wdHkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uYmFkZ2UtY29ybmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYzNmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmJhZGdlLWNvcm5lci1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYzNmO1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJhZGdlLWNvcm5lci1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJjOTRjO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmJhZGdlLWNvcm5lci1pY29uIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJkLWJvdHRvbSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbn1cclxuLmNhcmQtYm90dG9tLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uY2FyZC1ib3R0b20tbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2xpZGluZy1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29uL3N2Zy9hcGFybWVudC5zdmcnKTtcclxuICBoZWlnaHQ6IDU2MHB4O1xyXG4gIHdpZHRoOiA1MDc2cHg7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZSA2MHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG5cclxuLmJvdHRvbS1mcmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvY29tbW9uL2ZyYW1lLnBuZycpO1xyXG59XHJcblxyXG4uaW5maW5pdGUtc2Nyb2xsLCAuYm90dG9tLWZyYW1lLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNmY3Zjc7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification.page.html',
                styleUrls: ['./notification.page.scss'],
            }]
    }], function () { return [{ type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=notification-notification-module-es2015.js.map