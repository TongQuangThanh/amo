(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-new-detail-new-detail-module~pages-notification-detail-notification-detail-module~page~2c467832"],{

/***/ "Et2Y":
/*!*****************************************************************!*\
  !*** ./src/app/pages/popup-share-info/popup-share-info.page.ts ***!
  \*****************************************************************/
/*! exports provided: PopupShareInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupShareInfoPage", function() { return PopupShareInfoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "zzaN");
/* harmony import */ var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert/alert.service */ "kyzu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");
/* harmony import */ var src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/loading/loading.service */ "vglk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_utils_const_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/const.service */ "KQOL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





















const _c0 = ["chat_input"];
const _c1 = ["ionContent"];
function PopupShareInfoPage_div_15_ion_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-img", 34);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r4.createdBy.avatar);
} }
function PopupShareInfoPage_div_15_ion_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-img", 35);
} }
function PopupShareInfoPage_div_15_div_18_ion_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-img", 34);
} if (rf & 2) {
    const reply_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", reply_r9.createdBy.avatar);
} }
function PopupShareInfoPage_div_15_div_18_ion_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ion-img", 35);
} }
function PopupShareInfoPage_div_15_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-avatar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopupShareInfoPage_div_15_div_18_ion_img_3_Template, 1, 1, "ion-img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupShareInfoPage_div_15_div_18_ion_img_4_Template, 1, 0, "ion-img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reply_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", reply_r9.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !reply_r9.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reply_r9.createdBy ? reply_r9.createdBy.displayName : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reply_r9.content);
} }
function PopupShareInfoPage_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-avatar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopupShareInfoPage_div_15_ion_img_3_Template, 1, 1, "ion-img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupShareInfoPage_div_15_ion_img_4_Template, 1, 0, "ion-img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupShareInfoPage_div_15_Template_ion_label_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r4 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.replyComment(item_r4._id, item_r4 == null ? null : item_r4.createdBy == null ? null : item_r4.createdBy.displayName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PopupShareInfoPage_div_15_div_18_Template, 10, 4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r4.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r4 == null ? null : item_r4.createdBy == null ? null : item_r4.createdBy.displayName) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.time_ago(item_r4.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "NOTIFICATION_COMMENT.reply"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.replies.reverse());
} }
function PopupShareInfoPage_ion_item_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupShareInfoPage_ion_item_19_Template_ion_label_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.cancelReplyComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "NOTIFICATION_COMMENT.reply_label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.replyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "NOTIFICATION_COMMENT.cancel_label"), " ");
} }
const _c2 = function (a0) { return { "liked": a0 }; };
class PopupShareInfoPage {
    constructor(translateConfigService, modalController, navParams, clipboard, translate, alertService, apiService, loading, route) {
        this.translateConfigService = translateConfigService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.clipboard = clipboard;
        this.translate = translate;
        this.alertService = alertService;
        this.apiService = apiService;
        this.loading = loading;
        this.route = route;
        this.currentPage = 1;
        this.listArticlesComment = [];
        this.commentsCount = 0;
        this.isLiked = false;
        this.isPostType = false;
        this.replyId = null;
        this.replyName = null;
        this.profileUser = null;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        this.numberRecordOnPage = src_app_utils_const_service__WEBPACK_IMPORTED_MODULE_9__["ConstService"].NUMBER_RECORD_ON_PAGE;
    }
    ngOnInit() {
        if (localStorage.getItem('profile')) {
            this.profileUser = JSON.parse(localStorage.getItem('profile'));
        }
        this.dataTransfer = this.navParams.data.transfer;
        this.isLiked = this.dataTransfer.isLiked;
        this.apartment = this.dataTransfer.apartment;
        this.articleID = this.dataTransfer.articleId;
        this.isPostType = this.dataTransfer.isPost ? this.dataTransfer.isPost : false;
        this.commentsCount = this.dataTransfer.commentsCount;
        this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', null);
    }
    getArticleComment(page, limit, articleID, search, event) {
        this.loading.present();
        const self = this;
        this.apiService.getListArticleComment(page, limit, articleID, search).subscribe((result) => {
            if (result.comments.length > 0) {
                if (self.currentPage <= 1) {
                    self.listArticlesComment = result.comments;
                }
                else {
                    self.listArticlesComment = self.listArticlesComment.concat(result.comments);
                }
            }
            if (event) {
                event.target.complete();
            }
            self.loading.dismiss();
        }, (error) => {
            self.loading.dismiss();
        });
    }
    closeModal() {
        this.modalController.dismiss({ isLiked: this.isLiked, commentsCount: this.commentsCount });
    }
    doRefresh(event) {
        this.currentPage = 1;
        this.numberRecordOnPage = src_app_utils_const_service__WEBPACK_IMPORTED_MODULE_9__["ConstService"].NUMBER_RECORD_ON_PAGE;
        this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
    }
    sendMsg() {
        if (!this.apartment || this.apartment == '') {
            this.alertService.presentToast(this.translate.instant('NOTIFICATION_COMMENT.msg_apartment_not_correct'));
        }
        this.loading.present();
        const self = this;
        const params = {
            content: this.editorMsg,
            apartment: this.apartment,
        };
        if (this.isPostType) {
            if (this.replyId !== null) {
                // send reply comment
                this.apiService.sendPostReply(params, this.replyId).subscribe((res) => {
                    self.loading.dismiss();
                    self.editorMsg = '';
                    // self.doRefresh(null);
                }, (err) => {
                    self.editorMsg = '';
                    self.loading.dismiss();
                });
            }
            else {
                this.apiService.sendPostComment(params, this.articleID).subscribe((result) => {
                    self.loading.dismiss();
                    self.editorMsg = '';
                    // self.doRefresh(null);
                }, (error) => {
                    self.editorMsg = '';
                    self.loading.dismiss();
                });
            }
        }
        else {
            if (this.replyId !== null) {
                // send reply comment
                this.apiService.sendArticleReply(params, this.replyId).subscribe((res) => {
                    const commentReply = res.commentReply;
                    commentReply.createdBy = self.profileUser;
                    const comment = self.listArticlesComment.find((item) => item._id == commentReply.comment);
                    if (comment) {
                        comment.replies.unshift(commentReply);
                        self.listArticlesComment = [...self.listArticlesComment];
                    }
                    self.loading.dismiss();
                    self.editorMsg = '';
                }, (err) => {
                    self.editorMsg = '';
                    self.loading.dismiss();
                });
            }
            else {
                // send comment
                this.apiService.sendArticleComment(params, this.articleID).subscribe((result) => {
                    const comment = result.comment;
                    comment.createdBy = self.profileUser;
                    self.listArticlesComment = [comment, ...this.listArticlesComment];
                    self.commentsCount++;
                    self.loading.dismiss();
                    self.editorMsg = '';
                    setTimeout(() => {
                        self.ionContent.scrollToTop();
                    });
                }, (error) => {
                    self.editorMsg = '';
                    self.loading.dismiss();
                });
            }
        }
    }
    replyComment(id, name) {
        this.replyId = id;
        this.replyName = name;
        document.getElementById('reply-item').focus();
    }
    cancelReplyComment() {
        this.replyId = null;
        this.replyName = null;
    }
    loadData(event) {
        this.currentPage++;
        this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
    }
    // public getTimeDiff(mesDate: string) {
    //   const curDate = new Date(mesDate) ;
    //   console.warn(Math.ceil((new Date() - curDate) / (1000 * 60 * 60)));
    //   return Math.ceil((new Date() - curDate) / (1000 * 60 * 60))
    // };
    time_ago(time) {
        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            case 'object':
                if (time.constructor === Date)
                    time = time.getTime();
                break;
            default:
                time = +new Date();
        }
        let time_formats = [
            [60, this.translate.instant('TIME_AGO.seconds'), 1],
            [120, this.translate.instant('TIME_AGO.a_minute'), this.translate.instant('TIME_AGO.a_minute_from')],
            [3600, this.translate.instant('TIME_AGO.minutes'), 60],
            [7200, this.translate.instant('TIME_AGO.a_hour_ago'), this.translate.instant('TIME_AGO.a_hour_from')],
            [86400, this.translate.instant('TIME_AGO.hours'), 3600],
            [172800, this.translate.instant('TIME_AGO.yesterday'), this.translate.instant('TIME_AGO.tomorrow')],
            [604800, this.translate.instant('TIME_AGO.days'), 86400],
            [1209600, this.translate.instant('TIME_AGO.last_week'), this.translate.instant('TIME_AGO.next_week')],
            [2419200, this.translate.instant('TIME_AGO.weeks'), 604800],
            [4838400, this.translate.instant('TIME_AGO.last_month'), this.translate.instant('TIME_AGO.next_month')],
            [29030400, this.translate.instant('TIME_AGO.months'), 2419200],
            [58060800, this.translate.instant('TIME_AGO.last_year'), this.translate.instant('TIME_AGO.next_year')],
            [2903040000, this.translate.instant('TIME_AGO.years'), 29030400],
            [5806080000, this.translate.instant('TIME_AGO.last_century'), this.translate.instant('TIME_AGO.next_century')],
            [58060800000, this.translate.instant('TIME_AGO.centuries'), 2903040000],
        ];
        let seconds = (+new Date() - time) / 1000;
        let token = this.translate.instant('TIME_AGO.ago');
        let list_choice = 1;
        if (seconds == 0) {
            return this.translate.instant('TIME_AGO.just_now');
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = this.translate.instant('TIME_AGO.from_now');
            list_choice = 2;
        }
        let i = 0, format;
        while ((format = time_formats[i++])) {
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        }
        return time;
    }
    postLike() {
        let likeStatus = 'none';
        if (!this.isLiked) {
            likeStatus = 'like';
        }
        if (this.isPostType) {
            this.apiService.postPostLike(this.articleID, likeStatus).subscribe((response) => {
                if (response.postLike.statusLike === 'like') {
                    this.isLiked = true;
                }
                else {
                    this.isLiked = false;
                }
            });
        }
        else {
            this.apiService.postArticleLike(this.articleID, likeStatus).subscribe((response) => {
                var _a;
                if (((_a = response === null || response === void 0 ? void 0 : response.articleLike) === null || _a === void 0 ? void 0 : _a.statusLike) === 'like') {
                    this.isLiked = true;
                }
                else {
                    this.isLiked = false;
                }
            });
        }
    }
}
PopupShareInfoPage.ɵfac = function PopupShareInfoPage_Factory(t) { return new (t || PopupShareInfoPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
PopupShareInfoPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupShareInfoPage, selectors: [["app-popup-share-info"]], viewQuery: function PopupShareInfoPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ionContent = _t.first);
    } }, decls: 27, vars: 16, consts: [[1, "content-wrap"], ["no-bounce", "", 1, "content-container"], ["lines", "none", 1, "header-item"], ["slot", "start", 1, "btn-close-popup", 3, "click"], ["name", "chevron-back", "color", "#666666"], [1, "header-comments-count"], ["slot", "end", 1, "share-info-title", 3, "ngClass", "click"], ["name", "heart", 1, "header-heart"], [1, "header-like"], ["ionContent", ""], ["class", "conversation-wrapper", 4, "ngFor", "ngForOf"], ["threshold", "50px", 1, "infinite-scroll", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], [1, "ion-no-border", "footer-content", "share-info"], ["id", "reply-item", "lines", "none", "class", "reply-item", 4, "ngIf"], ["lines", "none", 1, "add-comment-item"], [1, "comment-textarea"], ["rows", "1", "wrap", "soft", "maxlength", "500", "auto-grow", "", "id", "reply-item", 1, "input-area", 3, "ngModel", "placeholder", "ngModelChange"], ["chat_input", ""], ["lines", "none", 1, "ion-item-send-image"], ["src", "../assets/common/send.svg", 1, "icon-send", "icon-send-default", 3, "click"], [1, "conversation-wrapper"], [1, "conversation-item"], [1, "user-avatar-wrapper"], ["class", "user-avatar", 3, "src", 4, "ngIf"], ["class", "user-avatar", "src", "../assets/icon/avatar-default.png", 4, "ngIf"], [1, "user-text-wrapper"], [1, "user-name"], [1, "conversation-text"], [1, "conversation-actions"], [1, "action-time"], [1, "action-seperator"], [1, "action-reply", 3, "click"], ["class", "conversation-reply", 4, "ngFor", "ngForOf"], [1, "user-avatar", 3, "src"], ["src", "../assets/icon/avatar-default.png", 1, "user-avatar"], [1, "conversation-reply"], [1, "user-text-reply"], ["id", "reply-item", "lines", "none", 1, "reply-item"], [1, "reply-label"], [1, "reply-name"], [1, "cancel-label", 3, "click"]], template: function PopupShareInfoPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupShareInfoPage_Template_ion_buttons_click_3_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupShareInfoPage_Template_ion_buttons_click_8_listener() { return ctx.postLike(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-content", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PopupShareInfoPage_div_15_Template, 19, 9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-infinite-scroll", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function PopupShareInfoPage_Template_ion_infinite_scroll_ionInfinite_16_listener($event) { return ctx.loadData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-infinite-scroll-content", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PopupShareInfoPage_ion_item_19_Template, 9, 7, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-textarea", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PopupShareInfoPage_Template_ion_textarea_ngModelChange_22_listener($event) { return ctx.editorMsg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupShareInfoPage_Template_img_click_26_listener() { return ctx.sendMsg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.commentsCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "NOTIFICATION.commented"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.isLiked));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "NOTIFICATION.like_text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listArticlesComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.replyId !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 12, "REQUEST_DETAIL.place_holder_input"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editorMsg);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["root[_ngcontent-%COMP%] {\n  --borderColor: gray;\n  --charShape: none;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33, 49, 63, 0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  --padding-start: 10px;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 0 20px 0 20px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f4f5f5;\n  margin: 0 28px 0px 28px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  margin: 0 20px 30px 20px;\n  --min-height: 24px;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.no-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.trash-icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #FFC144;\n}\n\n.normal_message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313f;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.small_message[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: #21313f;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.back_account[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: left;\n  color: #21313f;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n\n.button-save[_ngcontent-%COMP%] {\n  --ion-toolbar-color: rgba(0, 154, 201, 0.15);\n  --background-activated: rgba(0, 154, 201, 0.25);\n  --background-focused: rgba(0, 154, 201, 0.25);\n  --background-hover: rgba(0, 154, 201, 0.25);\n  --border-radius: 100px;\n  --background: rgba(0, 154, 201, 0.15);\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n  height: 32px;\n  --min-height: 32px;\n}\n\n.button-save.md[_ngcontent-%COMP%] {\n  --box-shadow: none !important;\n  padding: 0;\n}\n\n.button-save-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #009ac9;\n  padding-right: 10px;\n}\n\n.icon-save[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: #009ac9;\n  padding-left: 10px;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-bottom: 0.5px dashed #c4c4c4;\n}\n\n.header-comments-count[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  color: #221c1e;\n}\n\n.header-heart[_ngcontent-%COMP%] {\n  color: #221C1E;\n  margin: 0 5px;\n}\n\n.header-like[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n  color: #221C1E;\n}\n\n.liked[_ngcontent-%COMP%]   .header-like[_ngcontent-%COMP%] {\n  color: #EA7A6E;\n}\n\n.liked[_ngcontent-%COMP%]   .header-heart[_ngcontent-%COMP%] {\n  color: #E34231;\n}\n\n.btn-close-popup[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-right: 10px;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  height: 75vh;\n  overflow-y: auto;\n  padding-bottom: 10px !important;\n  padding-top: 50px !important;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  background: #ffffff;\n  box-shadow: 0px 1px 10px rgba(234, 122, 110, 0.25);\n}\n\n.footer-content[_ngcontent-%COMP%]   .comment-textarea[_ngcontent-%COMP%] {\n  --background: #eff2f5;\n  --border-radius: 5px;\n  --inner-border-width: 0;\n  width: calc(100% - 15px);\n  margin-right: 10px;\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.footer-content[_ngcontent-%COMP%]   .ion-item-send-image[_ngcontent-%COMP%] {\n  width: 35px;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\n.footer-content[_ngcontent-%COMP%]   .ion-item-send-image[_ngcontent-%COMP%]   .icon-send[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n\n.input-area[_ngcontent-%COMP%] {\n  max-height: 100px;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 10px 15px;\n  padding-bottom: 10px;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .user-avatar-wrapper[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .user-text-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 8px 15px;\n  background: rgba(234, 122, 110, 0.05);\n  border-radius: 6px;\n  max-width: 85%;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .user-text-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-item[_ngcontent-%COMP%]   .user-text-wrapper[_ngcontent-%COMP%]   .conversation-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-actions[_ngcontent-%COMP%] {\n  text-align: end;\n  padding: 0 15px;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-actions[_ngcontent-%COMP%]   .action-time[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 20px;\n  color: #666666;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-actions[_ngcontent-%COMP%]   .action-seperator[_ngcontent-%COMP%] {\n  color: #666666;\n  font-size: 10px;\n  margin: 0 10px;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-actions[_ngcontent-%COMP%]   .action-reply[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 20px;\n  color: #ea7a6e;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-reply[_ngcontent-%COMP%] {\n  padding-left: 45px;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-reply[_ngcontent-%COMP%]   .user-avatar-wrapper[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-reply[_ngcontent-%COMP%]   .user-text-reply[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 8px;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-reply[_ngcontent-%COMP%]   .user-text-reply[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n}\n\n.conversation-wrapper[_ngcontent-%COMP%]   .conversation-reply[_ngcontent-%COMP%]   .user-text-reply[_ngcontent-%COMP%]   .conversation-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n}\n\n.reply-label[_ngcontent-%COMP%] {\n  font-family: Nunito Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313f;\n}\n\n.reply-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.cancel-label[_ngcontent-%COMP%] {\n  font-family: Nunito Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #7a838c;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtc2hhcmUtaW5mby9wb3B1cC1zaGFyZS1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGlDQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUdGOztBQURBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7QUFLRjs7QUFIQTtFQUNFLGdDQUFBO0VBQ0EsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFMQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFOQTtFQUNFLGdCQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVVGOztBQVJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBV0Y7O0FBVEE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFZRjs7QUFWQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQkFBQTtVQUFBLG9CQUFBO0FBYUY7O0FBWEE7RUFDRSw0Q0FBQTtF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QUdGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wdXAtc2hhcmUtaW5mby9wb3B1cC1zaGFyZS1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvb3Qge1xyXG4gIC0tYm9yZGVyQ29sb3I6IGdyYXk7XHJcbiAgLS1jaGFyU2hhcGU6IG5vbmU7XHJcbn1cclxuLmNvbnRlbnQtd3JhcCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMzLCA0OSwgNjMsIDApO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi5oZWFkZXItaXRlbSB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbn1cclxuLm1vZGFsLWl0ZW0ge1xyXG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcclxufVxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjVmNTtcclxuICBtYXJnaW46IDAgMjhweCAwcHggMjhweDtcclxufVxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBtYXJnaW46IDAgMjBweCAzMHB4IDIwcHg7XHJcbiAgLS1taW4taGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5tb2RhbC10b29sYmFyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLm5vLW1hcmdpbi1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnRyYXNoLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBjb2xvcjogI0ZGQzE0NDtcclxufVxyXG4ubm9ybWFsX21lc3NhZ2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLnNtYWxsX21lc3NhZ2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmJhY2tfYWNjb3VudCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMDtcclxufVxyXG4uYnV0dG9uLXNhdmUge1xyXG4gIC0taW9uLXRvb2xiYXItY29sb3I6IHJnYmEoMCwgMTU0LCAyMDEsIDAuMTUpO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMCwgMTU0LCAyMDEsIDAuMjUpO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiByZ2JhKDAsIDE1NCwgMjAxLCAwLjI1KTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMCwgMTU0LCAyMDEsIDAuMjUpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsIDE1NCwgMjAxLCAwLjE1KTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gIGhlaWdodDogMzJweDtcclxuICAtLW1pbi1oZWlnaHQ6IDMycHg7XHJcbn1cclxuLmJ1dHRvbi1zYXZlLm1kIHtcclxuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5idXR0b24tc2F2ZS1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMwMDlhYzk7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4uaWNvbi1zYXZlIHtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwOWFjOTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8vIE5ldyBjc3NcclxuLmhlYWRlci1pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBkYXNoZWQgI2M0YzRjNDtcclxufVxyXG5cclxuLmhlYWRlci1jb21tZW50cy1jb3VudCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMjIxYzFlO1xyXG59XHJcblxyXG4uaGVhZGVyLWhlYXJ0IHtcclxuICBjb2xvcjogIzIyMUMxRTtcclxuICBtYXJnaW46IDAgNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWxpa2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMjIxQzFFO1xyXG59XHJcbi5saWtlZCB7XHJcbiAgLmhlYWRlci1saWtlIHtcclxuICAgIGNvbG9yOiAjRUE3QTZFO1xyXG4gIH1cclxuICAuaGVhZGVyLWhlYXJ0IHtcclxuICAgIGNvbG9yOiAjRTM0MjMxO1xyXG4gIH1cclxufVxyXG4uYnRuLWNsb3NlLXBvcHVwIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIGhlaWdodDogNzV2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMjM0LCAxMjIsIDExMCwgMC4yNSk7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgLmNvbW1lbnQtdGV4dGFyZWEge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWZmMmY1O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICAuaW9uLWl0ZW0tc2VuZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAuaWNvbi1zZW5kIHtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1hcmVhIHtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNvbnZlcnNhdGlvbi13cmFwcGVyIHtcclxuICAuY29udmVyc2F0aW9uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAudXNlci1hdmF0YXItd3JhcHBlciB7XHJcbiAgICAgIC51c2VyLWF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItdGV4dC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAxMjIsIDExMCwgMC4wNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgbWF4LXdpZHRoOiA4NSU7XHJcblxyXG4gICAgICAudXNlci1uYW1lIHtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnZlcnNhdGlvbi10ZXh0IHtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnZlcnNhdGlvbi1hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbiAgICAuYWN0aW9uLXRpbWUge1xyXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zZXBlcmF0b3Ige1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tcmVwbHkge1xyXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZWE3YTZlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnZlcnNhdGlvbi1yZXBseSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICAudXNlci1hdmF0YXItd3JhcHBlciB7XHJcbiAgICAgIC51c2VyLWF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItdGV4dC1yZXBseSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG5cclxuICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb252ZXJzYXRpb24tdGV4dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXBseS1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxufVxyXG4ucmVwbHktbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNhbmNlbC1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE51bml0byBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupShareInfoPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup-share-info',
                templateUrl: './popup-share-info.page.html',
                styleUrls: ['./popup-share-info.page.scss'],
            }]
    }], function () { return [{ type: _translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"] }, { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Clipboard"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }, { type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: src_app_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { inputField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chat_input']
        }], ionContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ionContent']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-new-detail-new-detail-module~pages-notification-detail-notification-detail-module~page~2c467832-es2015.js.map