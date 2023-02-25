(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-shop-by-category-user-shop-by-category-module"],{

/***/ "ZriD":
/*!***************************************************************************!*\
  !*** ./src/app/pages/user-shop-by-category/user-shop-by-category.page.ts ***!
  \***************************************************************************/
/*! exports provided: UserShopByCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShopByCategoryPage", function() { return UserShopByCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/api.service */ "oZWX");
/* harmony import */ var _utils_const_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/const.service */ "KQOL");
/* harmony import */ var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loading/loading.service */ "vglk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_shop_house_booking_shop_house_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../booking-shop-house/booking-shop-house.page */ "w97y");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function UserShopByCategoryPage_ion_slide_7_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 22);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function UserShopByCategoryPage_ion_slide_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slide", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserShopByCategoryPage_ion_slide_7_Template_ion_slide_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const cate_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.categoryClick(cate_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UserShopByCategoryPage_ion_slide_7_img_5_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cate_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx_r0.selected_category == cate_r4._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", cate_r4.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cate_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.selected_category == cate_r4._id);
} }
function UserShopByCategoryPage_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserShopByCategoryPage_span_11_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const tagSearch_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.searchByTag(tagSearch_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tagSearch_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("tag-text ", tagSearch_r8.selected ? "selected" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tagSearch_r8.name);
} }
function UserShopByCategoryPage_ion_item_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "SHOP_BY_CATE.no_service"), " ");
} }
function UserShopByCategoryPage_ion_item_17_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const object_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r11.text_star_rate);
} }
function UserShopByCategoryPage_ion_item_17_span_30_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserShopByCategoryPage_ion_item_17_span_30_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const shopTag_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.shopTagClick(shopTag_r15._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shopTag_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("tag-text ", (shopTag_r15 == null ? null : shopTag_r15.isSelected) ? "tag-selected-highlight" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" #", shopTag_r15.title, " ");
} }
function UserShopByCategoryPage_ion_item_17_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserShopByCategoryPage_ion_item_17_Template_ion_col_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const object_r11 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.moveShopHousePage(object_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserShopByCategoryPage_ion_item_17_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const object_r11 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.moveShopHousePage(object_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserShopByCategoryPage_ion_item_17_div_16_Template, 4, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UserShopByCategoryPage_ion_item_17_span_30_Template, 2, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const object_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", object_r11._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", object_r11 == null ? null : object_r11.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r11.text_note);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", object_r11 == null ? null : object_r11.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", object_r11.text_star_rate != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", object_r11 == null ? null : object_r11.numberEvaluation, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 13, "SHOP_BY_CATE.rating"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", object_r11 == null ? null : object_r11.numberOrder, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 15, "SHOP_BY_CATE.setup"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 17, "SHOP_BY_CATE.price_from"), " ", object_r11.lowestPrice, " \u0111 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", object_r11.shopHouseTag);
} }
class UserShopByCategoryPage {
    constructor(loading, apiService, navCtrl, route, modalController, translate) {
        this.loading = loading;
        this.apiService = apiService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.translate = translate;
        this.currentPageSearch = 1;
        this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_4__["ConstService"].NUMBER_RECORD_ON_PAGE;
        this.slideOpts = {
            // initialSlide: 0,
            slidesPerView: 4.1,
            centeredSlides: false,
            spaceBetween: 0,
            autoplay: false,
        };
        this.listCategories = [];
        this.selected_category = '';
        this.listTagShop = [];
        this.shopTagSelect = [];
        this.listSearchTag = [
            { name: 'Giá rẻ nhất', value: 1, selected: false },
            { name: 'Đánh giá cao nhất', value: 2, selected: false },
            { name: 'Ưa chuộng nhất', value: 3, selected: false },
        ];
    }
    ngOnInit() {
        this.shopTagSelect = [];
        this.data_shop_house = {};
        this.selected_category = this.route.snapshot.paramMap.get('selected_category');
        this.category_id = this.route.snapshot.paramMap.get('category');
        this.category_name = this.route.snapshot.paramMap.get('category_name');
        this.listDataMarket = [];
        this.getListCategories(this.category_id);
        this.searchShopByTagsAndCateV2();
        // this.getTagsOfShopV2();
    }
    ionViewWillEnter() { }
    getListCategories(categoryGroupId) {
        this.apiService.getListSubCateV2(categoryGroupId).subscribe((res) => {
            this.listCategories = res.shopHouseSubCategoriesV2;
            this.slideOpts.slidesPerView = this.listCategories.length;
        }, () => { });
    }
    getTagsOfShopV2() {
        this.apiService.getTagsOfShopV2().subscribe((res) => { }, (err) => { });
    }
    // getBySubCategory() {
    //   const self = this;
    //   this.loading.present();
    //   this.apiService.getListShopV2(this.selected_category).subscribe(
    //     (result) => {
    //       let data_shop_product = result.shopHousesV2;
    //       this.mappingShopProduct(data_shop_product);
    //       self.loading.dismiss();
    //     },
    //     (error) => {
    //       self.loading.dismiss();
    //     }
    //   );
    // }
    loadData(event) {
        this.currentPageSearch++;
        this.searchShopByTagsAndCateV2(event);
    }
    moveShopHousePage(object) {
        if (object.carServiceType == 'technologyCar') {
            this.navCtrl.navigateForward('/call-the-car-detail/' + object._id);
        }
        else if (object.carServiceType == 'oneTurn') {
            this.moveToBookingShopHouse(object);
        }
        else {
            this.navCtrl.navigateForward('/shop-house/' + object._id);
        }
    }
    moveToBookingShopHouse(object) {
        var self = this;
        this.getShopProducts(object, function () {
            if (self.data_shop_house['group_2'].length > 0) {
                self.data_shop_house['group_2'][0]['data'][0].number = 1;
                localStorage.setItem('data-shop-house', JSON.stringify(self.data_shop_house));
                this.goToPageBookingShopHouse();
            }
        });
    }
    goToPageBookingShopHouse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _booking_shop_house_booking_shop_house_page__WEBPACK_IMPORTED_MODULE_7__["BookingShopHousePage"],
                cssClass: 'booking-shop-house-modal-css',
            });
            return yield modal.present();
        });
    }
    getShopProducts(objectShop, callBack) {
        const self = this;
        this.data_shop_house = {};
        this.data_shop_house['carServiceType'] = objectShop.carServiceType;
        this.data_shop_house['group_1'] = [];
        this.data_shop_house['group_2'] = [];
        this.loading.present();
        this.apiService.getDataServiceShopProduct(objectShop._id).subscribe((result) => {
            let data_shop_product = result.shopProducts;
            data_shop_product.forEach((product) => {
                if (product.requestShopProduct) {
                    self.data_shop_house['_id'] = product.requestShopProduct._id;
                    self.data_shop_house['text_title'] = product.requestShopProduct.title;
                    if (product.requestShopProduct.apartment) {
                        self.data_shop_house['text_place'] =
                            product.requestShopProduct.apartment.title + ' - ' + product.requestShopProduct.apartment.campaign.title;
                    }
                    else {
                        self.data_shop_house['text_place'] = 'AMO';
                    }
                    self.data_shop_house['text_star_rate'] = product.requestShopProduct.stars;
                    let thumbnail = product.requestShopProduct.thumbnail;
                    let logo = product.requestShopProduct.thumbnail;
                    if (product.requestShopProduct.attachments && product.requestShopProduct.attachments.length > 1) {
                        logo = product.requestShopProduct.attachments[0].url;
                        thumbnail = product.requestShopProduct.attachments[1].url;
                    }
                    self.data_shop_house['thumbnail'] = thumbnail;
                    self.data_shop_house['logo'] = logo;
                    let time_open = 'Luôn mở cửa';
                    if (product.requestShopProduct.timeOpen) {
                        time_open = product.requestShopProduct.timeOpen;
                    }
                    self.data_shop_house['time_open'] = time_open;
                    if (product.promotionCodes && product.promotionCodes.length > 0 && product.promotionCodes[0].type == 'groupon') {
                        let promotionCodes = product.promotionCodes[0];
                        let deadline_convert = '';
                        if (promotionCodes.endAt) {
                            let today = new Date();
                            let endAt = new Date(promotionCodes.endAt);
                            var ageDate = Math.abs(endAt.getTime() - today.getTime());
                            let deadline = Math.ceil(ageDate / (1000 * 3600 * 24));
                            deadline = deadline ? deadline : 0;
                            deadline_convert = deadline == 0 ? 'Khuyến mại' : 'Còn ' + deadline + '   ngày';
                        }
                        let title = product.title;
                        let money = product.price;
                        if (product.discountProducts && product.discountProducts.length > 0) {
                            let today = new Date();
                            let startAt = new Date(product.discountProducts[0].startAt);
                            let endAt = new Date(product.discountProducts[0].endAt);
                            if (startAt <= today && today <= endAt) {
                                money = product.discountProducts[0].discountValue;
                            }
                        }
                        let slider_value = (promotionCodes.numberOrder * 100) / promotionCodes.promotion2;
                        let range_position_value = (promotionCodes.promotion1 * 100) / promotionCodes.promotion2;
                        let discount = 0;
                        if (promotionCodes.numberOrder >= promotionCodes.promotion1 && promotionCodes.numberOrder < promotionCodes.promotion2) {
                            discount = promotionCodes.promotionPercent1 / 100;
                        }
                        else if (promotionCodes.numberOrder == promotionCodes.promotion2) {
                            discount = promotionCodes.promotionPercent2 / 100;
                        }
                        money = money - money * discount;
                        let detail = promotionCodes.title;
                        let actual_order = promotionCodes.numberOrder + '/' + promotionCodes.promotion2;
                        let moc_1 = '-0%';
                        let moc_2 = '-' + promotionCodes.promotionPercent1 + '%';
                        let moc_3 = '-' + promotionCodes.promotionPercent2 + '%';
                        let background_image = '';
                        let object = {
                            _id: product._id,
                            _id_requestShopProduct: product.requestShopProduct._id,
                            thumbnail: product.thumbnail,
                            bg_url: '../assets/images/services/1.png',
                            deadline: deadline_convert,
                            title: title,
                            money: self.convertFormatMoney(money),
                            detail: detail,
                            excerpt: product.excerpt,
                            actual_order: actual_order,
                            slider_value: slider_value,
                            range_position_value: range_position_value,
                            moc_1: moc_1,
                            moc_2: moc_2,
                            moc_3: moc_3,
                            number: 0,
                            background_image: background_image,
                        };
                        self.data_shop_house.group_1.push(object);
                    }
                    else {
                        let index = self.getIndexCategoryInList(product.category._id);
                        if (index < 0) {
                            self.data_shop_house['group_2'].push({
                                id_tab: product.category._id,
                                title: product.category.title,
                                data: [],
                            });
                            index = self.data_shop_house['group_2'].length - 1;
                        }
                        let title = product.title;
                        let money = product.price;
                        if (product.discountProducts && product.discountProducts.length > 0) {
                            let today = new Date();
                            let startAt = new Date(product.discountProducts[0].startAt);
                            let endAt = new Date(product.discountProducts[0].endAt);
                            if (startAt <= today && today <= endAt) {
                                money = product.discountProducts[0].discountValue;
                            }
                        }
                        let object = {
                            _id: product._id,
                            image: product.thumbnail,
                            title: title,
                            money: self.convertFormatMoney(money),
                            note: product.excerpt,
                            number: 0,
                        };
                        self.data_shop_house.group_2[index].data.push(object);
                    }
                }
            });
            self.loading.dismiss();
            callBack();
        }, (error) => {
            self.loading.dismiss();
            callBack();
        });
    }
    getIndexCategoryInList(id_tab) {
        var self = this;
        let index = -1;
        let index_value = -1;
        self.data_shop_house.group_2.forEach((object) => {
            index++;
            if (object.id_tab == id_tab) {
                index_value = index;
            }
        });
        return index_value;
    }
    convertFormatMoney(value) {
        if (value.toString() == '') {
            return '';
        }
        value = value.toString();
        let convert1 = '';
        let convert2 = '';
        let count1 = value.length;
        for (let i = 1; i <= count1; i++) {
            if (i % 3 == 0 && i != count1) {
                convert1 = convert1 + value[count1 - i] + '.';
            }
            else {
                convert1 = convert1 + value[count1 - i];
            }
        }
        let count2 = convert1.length;
        for (let i = 1; i <= count2; i++) {
            convert2 = convert2 + convert1[count2 - i];
        }
        return convert2;
    }
    categoryClick(cateId) {
        this.selected_category = cateId;
        this.shopTagSelect = [];
        this.currentPageSearch = 1;
        this.listDataMarket = [];
        this.searchShopByTagsAndCateV2();
    }
    shopTagClick(tagId) {
        console.warn(tagId);
        const tagIndex = this.shopTagSelect.findIndex((item) => item == tagId);
        if (tagIndex != -1) {
            this.shopTagSelect.splice(tagIndex, 1);
        }
        else {
            this.shopTagSelect.push(tagId);
        }
        this.listDataMarket = [];
        this.currentPageSearch = 1;
        this.searchShopByTagsAndCateV2();
    }
    searchShopByTagsAndCateV2(event = null) {
        this.loading.present();
        this.apiService
            .searchShopByTagsAndCateV2(this.currentPageSearch, this.numberRecordOnPage, this.shopTagSelect, [this.selected_category], this.orderMode)
            .subscribe((result) => {
            const data_shop_product = result.shopHousesV2;
            this.mappingShopProduct(data_shop_product);
            this.loading.dismiss();
            if (event) {
                event.target.complete();
            }
        }, (error) => {
            this.loading.dismiss();
            if (event) {
                event.target.complete();
            }
        });
    }
    mappingShopProduct(data_shop_product) {
        data_shop_product.forEach((product) => {
            let text_note = product.promotionKM ? product.promotionKM : '';
            if (text_note && text_note != 'KM') {
                text_note = '-' + text_note;
            }
            else if (text_note == 'KM') {
                text_note = this.translate.instant('SHOP_BY_CATE.promotion');
            }
            let type_note = product.promotionKM == 'KM' ? 2 : 1;
            let text_place = 'AMO';
            if (product.apartment) {
                text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
            }
            let text_tag = product.promotion ? product.promotion : '';
            const content = product.promotion || product.content.replace(/(<([^>]+)>)/gi, '');
            let thumbnailUrl = product.thumbnail;
            if (!thumbnailUrl && product.attachments && product.attachments.length > 1) {
                thumbnailUrl = product.attachments[1].url;
            }
            const shopHouseTagList = product.shopHouseTag.map((item) => {
                const tagSelect = this.shopTagSelect.find((tag) => tag == item._id);
                if (tagSelect) {
                    item.isSelected = true;
                }
                else {
                    item.isSelected = false;
                }
                return item;
            });
            this.listDataMarket.push({
                _id: product._id,
                thumbnail: thumbnailUrl ? thumbnailUrl : 'assets/common/no-thumbnail.png',
                title: product.title,
                text_note: text_note,
                type_note: type_note,
                text_place: text_place,
                text_star_rate: product.stars,
                text_tag: text_tag,
                carServiceType: product.carServiceType,
                time_open: product.timeOpen || '',
                content: content,
                numberOrder: product.numberOrder || 0,
                numberEvaluation: product.numberEvaluation || 0,
                shopHouseTag: shopHouseTagList,
                lowestPrice: product.lowestPrice
            });
        });
    }
    searchByTag(tagType) {
        const selectedTag = this.listSearchTag.find(el => el.value === tagType);
        if (selectedTag.selected === true) {
            selectedTag.selected = false;
            this.orderMode = undefined;
            this.listDataMarket = [];
            this.currentPageSearch = 1;
        }
        else if (selectedTag.selected == false) {
            this.unselectSearchTag(tagType);
            selectedTag.selected = true;
            this.orderMode = tagType;
            this.listDataMarket = [];
            this.currentPageSearch = 1;
        }
        else {
            return;
        }
        this.searchShopByTagsAndCateV2();
    }
    unselectSearchTag(val) {
        this.listSearchTag.forEach(element => {
            if (element.value !== val) {
                element.selected = false;
            }
        });
    }
}
UserShopByCategoryPage.ɵfac = function UserShopByCategoryPage_Factory(t) { return new (t || UserShopByCategoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
UserShopByCategoryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserShopByCategoryPage, selectors: [["app-user-shop-by-category"]], decls: 20, vars: 10, consts: [[1, "service-cate-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "categories-wrapper"], ["pager", "false", 1, "header-slider", 3, "options"], ["class", "category-slide", 3, "click", 4, "ngFor", "ngForOf"], [1, "curve-header"], ["slot", "fixed", 1, "shop-content", 3, "scrollEvents"], [1, "tag-container", "row"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "list-title"], [1, "list-view-custom"], ["class", "ion-item-class", 4, "ngIf"], ["class", "ion-item-class ion-no-padding", 3, "id", 4, "ngFor", "ngForOf"], ["threshold", "50px", 1, "infinite-scroll-block", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], [1, "category-slide", 3, "click"], [1, "category-item", "active", 3, "ngClass"], [1, "category-img", 3, "src"], [1, "cate-title"], ["class", "category-img-checked", "src", "assets/icon/service-info/checked.svg", 4, "ngIf"], ["src", "assets/icon/service-info/checked.svg", 1, "category-img-checked"], [3, "click"], [1, "ion-item-class"], [1, "ion-item-class", "ion-no-padding", 3, "id"], [1, "ion-no-padding", "category-item-grid"], ["size", "3", 1, "ion-no-padding", 3, "click"], [1, "div-logo"], [1, "shop-image", 3, "src"], [1, "note-2"], ["size", "9", 1, "ion-no-padding"], [1, "group-1-text-title"], [1, "font-weight-bold"], [1, "group-1-shop-description"], [1, "group-1-text-star"], ["class", "group-1-text-star-1", 4, "ngIf"], [1, "group-1-text-sold"], [1, "margin-right-10"], [1, "margin-left-10"], [1, "group-1-price"], [1, "price-from"], [1, "group-1-list-tag", "row"], [1, "group-1-text-star-1"], ["src", "../assets/icon/svg/icon-star.svg", 1, "group-1-icon-star"], [1, "class-label-rate"]], template: function UserShopByCategoryPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-slides", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserShopByCategoryPage_ion_slide_7_Template, 6, 6, "ion-slide", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserShopByCategoryPage_span_11_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserShopByCategoryPage_ion_item_16_Template, 4, 3, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UserShopByCategoryPage_ion_item_17_Template, 31, 19, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-infinite-scroll", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function UserShopByCategoryPage_Template_ion_infinite_scroll_ionInfinite_18_listener($event) { return ctx.loadData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-infinite-scroll-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.category_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.slideOpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listSearchTag);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, "SHOP_BY_CATE.supplier_highlight"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listDataMarket.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDataMarket);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.button-add-new-market[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  border-radius: 15px;\n  height: 25px;\n  top: calc(50% - 15px);\n  font-size: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 6px;\n  padding-right: 11px;\n}\n\n.button-add-new-market[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.padding-bottom-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.padding-bottom-15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.button-1[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-grid;\n  text-align: center;\n  width: 100%;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.class-image-button[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-25[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.text-button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 10px;\n}\n\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.padding-start-0[_ngcontent-%COMP%] {\n  --padding-start: 0;\n}\n\n.ion-align-self-end[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #009ac9;\n}\n\n.margin-right-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.margin-top-5[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.margin-right-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.group-1-icon-place[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.group-1-text-place[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313f;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.group-1-text-star[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313f;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  margin-left: 10px;\n}\n\n.group-1-icon-star[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 5px;\n}\n\n.group-1-icon-tag[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.ion-item-class[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #e9e9e9;\n  margin: 0px 15px;\n  padding: 10px 0px;\n  --inner-border-width: 0px;\n}\n\n.div-logo[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n  width: 90px;\n  height: 80px;\n}\n\n.div-logo[_ngcontent-%COMP%]   .shop-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.note-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0px;\n  left: 0;\n  background-color: #fdbc3f;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #fff;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 8px;\n  line-height: 7px;\n}\n\n.note-2[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0px;\n  left: 0;\n  background: #fdbc3f;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #ffffff;\n  font-size: 8px;\n  line-height: 10px;\n}\n\n.width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.group-1-text-star-2[_ngcontent-%COMP%] {\n  width: 70%;\n  display: inline-flex;\n}\n\n.shop-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\n.shop-content[_ngcontent-%COMP%]   .list-tag[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px 15px 0 15px;\n}\n\n.shop-content[_ngcontent-%COMP%]   .list-tag[_ngcontent-%COMP%]   .tag-item[_ngcontent-%COMP%] {\n  background-color: rgba(196, 196, 196, 0.2);\n  border-radius: 10px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n\n.shop-content[_ngcontent-%COMP%]   .list-tag[_ngcontent-%COMP%]   .tag-item[_ngcontent-%COMP%]   .tag-text[_ngcontent-%COMP%] {\n  color: #666666;\n  padding: 5px 7px 5px 8px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  display: inline-block;\n}\n\n.list-view-custom[_ngcontent-%COMP%] {\n  min-height: 100%;\n  overflow: hidden;\n}\n\n.infinite-scroll-block[_ngcontent-%COMP%] {\n  background: #fff;\n}\n\n.list-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  padding: 10px 15px;\n  position: relative;\n  background: #fff;\n  margin-top: 15px;\n}\n\n.list-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 2px;\n  width: 30px;\n  background: #FFC144;\n  position: absolute;\n  bottom: 4px;\n  left: 15px;\n}\n\n.group-1-text-star-1[_ngcontent-%COMP%] {\n  max-width: 20%;\n  display: inline-flex;\n  margin-right: 5px;\n}\n\n.group-1-shop-description[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding: 5px 0;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.group-1-price[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding: 6px 0 6px 0;\n}\n\n.group-1-price[_ngcontent-%COMP%]   .price-from[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  color: #FFC144;\n  line-height: 19px;\n}\n\n.group-1-list-tag[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 20px;\n  margin-top: 7px;\n}\n\n.group-1-list-tag[_ngcontent-%COMP%]   .tag-text[_ngcontent-%COMP%] {\n  background-color: rgba(196, 196, 196, 0.2);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  margin-right: 2px;\n  color: #666666;\n  padding: 0 5px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 20px;\n  white-space: nowrap;\n  margin-top: 3px;\n}\n\n.group-1-list-tag[_ngcontent-%COMP%]   .tag-selected-highlight[_ngcontent-%COMP%] {\n  background-color: #e64037;\n  color: #ffffff;\n}\n\n.group-1-text-sold[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 10px;\n  line-height: 20px;\n  color: #666666;\n  opacity: 0.4;\n  padding-top: 2px;\n}\n\n.group-1-tags[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 15px;\n  margin-top: 10px;\n}\n\n.group-1-tags[_ngcontent-%COMP%]   .group-1-text-tag[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n  border-radius: 6px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 20px;\n  text-align: center;\n  color: #666666;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.group-1-tags[_ngcontent-%COMP%]   .group-1-text-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 5px 10px;\n}\n\n.ion-no-padding[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.category-item-grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.group-1-text-title[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: flex-end;\n  display: inline-flex;\n  padding: 0px 10px;\n  color: #21313f;\n  margin-left: 10px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n}\n\n.service-cate-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 165px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  position: absolute;\n  left: 45px;\n  right: 15px;\n  top: 55px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.service-cate-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #ffffff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .categories-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 110px;\n  left: 15px;\n  right: 15px;\n  overflow: hidden;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .categories-wrapper[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  background: #fff;\n  border-radius: 10px;\n  min-width: calc(100vw / 4 - 15px);\n  max-width: 78px;\n  height: 100px;\n  overflow: hidden;\n  margin: 5px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 17px;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .categories-wrapper[_ngcontent-%COMP%]   .category-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .categories-wrapper[_ngcontent-%COMP%]   .category-item.active[_ngcontent-%COMP%] {\n  border: 1px solid #FFC144;\n  box-shadow: 0px 0px 20px rgba(249, 115, 104, 0.15);\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .categories-wrapper[_ngcontent-%COMP%]   .category-item.active[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #FFC144;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .categories-wrapper[_ngcontent-%COMP%]   .category-img-checked[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  top: 6px;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .categories-wrapper[_ngcontent-%COMP%]   .curve-header[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0 0;\n  background: #ffffff;\n  height: 70px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 135px;\n}\n\n.service-cate-header[_ngcontent-%COMP%]   .categories-wrapper[_ngcontent-%COMP%]   .cate-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-align: center;\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  margin: 0 auto;\n  font-size: 12px;\n  line-height: 1.3;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 5px;\n}\n\n.no-scroll[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.badge-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 8px;\n  line-height: 10px;\n  color: #ffffff;\n  border-radius: 8px 0;\n  width: 66px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n  z-index: 99;\n  background-color: #fdbc3f;\n}\n\n.category-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.tag-container[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  display: flex;\n  justify-content: center;\n  margin-left: 0;\n  max-width: 100%;\n}\n\n.tag-container[_ngcontent-%COMP%]   .tag-text[_ngcontent-%COMP%] {\n  background-color: rgba(196, 196, 196, 0.2);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  margin: 0 5px;\n  color: #666666;\n  padding: 3px 5px;\n  white-space: nowrap;\n  margin-top: 3px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n}\n\n.tag-container[_ngcontent-%COMP%]   .tag-text.selected[_ngcontent-%COMP%] {\n  background-color: #e64037;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1zaG9wLWJ5LWNhdGVnb3J5L3VzZXItc2hvcC1ieS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0Usb0JBQUE7QUFJRjs7QUFGQTtFQUNFLG9CQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsY0FBQTtBQU9GOztBQUxBO0VBQ0UsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLGdCQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJBO0VBQ0UsZ0JBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0FBWUY7O0FBVkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFhRjs7QUFWQTtFQUNFLGlCQUFBO0FBYUY7O0FBWEE7RUFDRSxlQUFBO0FBY0Y7O0FBWkE7RUFDRSxrQkFBQTtBQWVGOztBQWJBO0VBQ0UsaUJBQUE7QUFnQkY7O0FBYkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBaUJGOztBQWZBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJB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cC1ieS1jYXRlZ29yeS91c2VyLXNob3AtYnktY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnV0dG9uLWFkZC1uZXctbWFya2V0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDE1cHgpO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCA2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTFweDtcclxufVxyXG4uYnV0dG9uLWFkZC1uZXctbWFya2V0IGltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5wYWRkaW5nLWJvdHRvbS0yMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZGRpbmctYm90dG9tLTE1IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4uYnV0dG9uLTEge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uY2xhc3MtaW1hZ2UtYnV0dG9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubWFyZ2luLXRvcC0yMCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubWFyZ2luLXRvcC0yNSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4udGV4dC1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5mb250LXdlaWdodC1ib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wYWRkaW5nLXN0YXJ0LTAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufVxyXG4uaW9uLWFsaWduLXNlbGYtZW5kIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzAwOWFjOTtcclxufVxyXG5cclxuLm1hcmdpbi1yaWdodC01IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ubWFyZ2luLXRvcC01IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLm1hcmdpbi1yaWdodC0xMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tYXJnaW4tbGVmdC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5ncm91cC0xLWljb24tcGxhY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZ3JvdXAtMS10ZXh0LXBsYWNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5ncm91cC0xLXRleHQtc3RhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmdyb3VwLTEtaWNvbi1zdGFyIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5ncm91cC0xLWljb24tdGFnIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmlvbi1pdGVtLWNsYXNzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNlOWU5ZTk7XHJcbiAgbWFyZ2luOiAwcHggMTVweDtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcblxyXG4uZGl2LWxvZ28ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICAuc2hvcC1pbWFnZSB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxufVxyXG4ubm90ZS0xIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYzNmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDdweDtcclxufVxyXG4ubm90ZS0yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmRiYzNmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuLndpZHRoLTEwMCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ncm91cC0xLXRleHQtc3Rhci0yIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4vLyB1cGRhdGUgY3NzXHJcbi5zaG9wLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAubGlzdC10YWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAwIDE1cHg7XHJcbiAgICAudGFnLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAudGFnLXRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHggNXB4IDhweDtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qtdmlldy1jdXN0b20ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmluZmluaXRlLXNjcm9sbC1ibG9jayB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmxpc3QtdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmdyb3VwLTEtdGV4dC1zdGFyLTEge1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZ3JvdXAtMS1zaG9wLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxuICAvLyAubGFiZWwtZGVzY3JpcHRpb24ge1xyXG4gIC8vICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAvLyAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAvLyAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLy8gICBmb250LXNpemU6IDEycHg7XHJcbiAgLy8gICBsaW5lLWhlaWdodDogMjBweDtcclxuICAvLyAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gIC8vIH1cclxufVxyXG5cclxuLmdyb3VwLTEtcHJpY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmc6IDZweCAwIDZweCAwO1xyXG4gIC5wcmljZS1mcm9tIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JvdXAtMS1saXN0LXRhZyB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG4gIC50YWctdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuICAudGFnLXNlbGVjdGVkLWhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgNjQsIDU1LCAxKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuLmdyb3VwLTEtdGV4dC1zb2xkIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbi5ncm91cC0xLXRhZ3Mge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIC5ncm91cC0xLXRleHQtdGFnIHtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmlvbi1uby1wYWRkaW5nIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1pdGVtLWdyaWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3JvdXAtMS10ZXh0LXRpdGxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxufVxyXG5cclxuLnNlcnZpY2UtY2F0ZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgaGVpZ2h0OiAxNjVweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgLmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIC0taWNvbi1mb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjVweDtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICByaWdodDogLTFweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCAwIDAgI2ZmZmZmZjtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yaWVzLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMTBweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xyXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogY2FsYygxMDB2dyAvIDQgLSAxNXB4KTtcclxuICAgICAgbWF4LXdpZHRoOiA3OHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTdweDtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5LWl0ZW0uYWN0aXZlIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzE0NDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMjQ5LCAxMTUsIDEwNCwgMC4xNSk7XHJcblxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnktaW1nLWNoZWNrZWQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgIHRvcDogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJ2ZS1oZWFkZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMTM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGUtdGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tc2Nyb2xsIHtcclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iYWRnZS1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDhweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHggMDtcclxuICB3aWR0aDogNjZweDtcclxuICAvLyBoZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB6LWluZGV4OiA5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYzNmO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktaW1nIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4udGFnLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgLnRhZy10ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDY0LCA1NSwgMSk7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserShopByCategoryPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-shop-by-category',
                templateUrl: './user-shop-by-category.page.html',
                styleUrls: ['./user-shop-by-category.page.scss'],
            }]
    }], function () { return [{ type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] }, { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "ja/P":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/user-shop-by-category/user-shop-by-category.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UserShopByCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserShopByCategoryPageModule", function() { return UserShopByCategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_shop_by_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-shop-by-category.page */ "ZriD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "k6Iy");











const routes = [
    {
        path: '',
        component: _user_shop_by_category_page__WEBPACK_IMPORTED_MODULE_5__["UserShopByCategoryPage"]
    }
];
class UserShopByCategoryPageModule {
}
UserShopByCategoryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserShopByCategoryPageModule });
UserShopByCategoryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserShopByCategoryPageModule_Factory(t) { return new (t || UserShopByCategoryPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserShopByCategoryPageModule, { declarations: [_user_shop_by_category_page__WEBPACK_IMPORTED_MODULE_5__["UserShopByCategoryPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
        _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserShopByCategoryPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                    _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ],
                declarations: [_user_shop_by_category_page__WEBPACK_IMPORTED_MODULE_5__["UserShopByCategoryPage"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-user-shop-by-category-user-shop-by-category-module-es2015.js.map