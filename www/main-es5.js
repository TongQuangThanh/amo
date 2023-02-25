(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\IT\source\project\thuannguyen\anhmo-mobile-new\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3oyl":
    /*!************************************************************************!*\
      !*** ./src/app/pages/auth/pincode-register/pincode-register.module.ts ***!
      \************************************************************************/

    /*! exports provided: PincodeRegisterPageModule */

    /***/
    function oyl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PincodeRegisterPageModule", function () {
        return PincodeRegisterPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _pincode_register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pincode-register.page */
      "9wPF");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var PincodeRegisterPageModule = function PincodeRegisterPageModule() {
        _classCallCheck(this, PincodeRegisterPageModule);
      };

      PincodeRegisterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PincodeRegisterPageModule
      });
      PincodeRegisterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PincodeRegisterPageModule_Factory(t) {
          return new (t || PincodeRegisterPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PincodeRegisterPageModule, {
          declarations: [_pincode_register_page__WEBPACK_IMPORTED_MODULE_4__["PincodeRegisterPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PincodeRegisterPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
            declarations: [_pincode_register_page__WEBPACK_IMPORTED_MODULE_4__["PincodeRegisterPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "5eKa":
    /*!******************************************************************!*\
      !*** ./src/app/components/confirm-modal/confirm-modal.module.ts ***!
      \******************************************************************/

    /*! exports provided: ConfirmModalPageModule */

    /***/
    function eKa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmModalPageModule", function () {
        return ConfirmModalPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _confirm_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-modal.page */
      "A9xp");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _confirm_modal_page__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalPage"]
      }];

      var ConfirmModalPageModule = function ConfirmModalPageModule() {
        _classCallCheck(this, ConfirmModalPageModule);
      };

      ConfirmModalPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ConfirmModalPageModule
      });
      ConfirmModalPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ConfirmModalPageModule_Factory(t) {
          return new (t || ConfirmModalPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfirmModalPageModule, {
          declarations: [_confirm_modal_page__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmModalPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_confirm_modal_page__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "5zL6":
    /*!*****************************************!*\
      !*** ./src/app/services/env.service.ts ***!
      \*****************************************/

    /*! exports provided: EnvService */

    /***/
    function zL6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvService", function () {
        return EnvService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var EnvService = {
        register: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/auth/register',
        login: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/auth/login',
        logout: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/auth/logout',
        forgotPassword: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/auth/forgotPassword',
        confirm: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/auth/confirm',
        confirmTokenCode: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/auth/confirmTokenCode',
        confirmSMSCode: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/auth/confirmSmsCode',
        resetPassword: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/auth/reset',
        changePassword: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/account/change-password',
        updateProfile: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/account/profile',
        resendActiveCode: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/account/resendActive',
        updateAvatar: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/account/update-avatar',
        notification: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/account/notification',
        articleCategory: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/article-category',
        articles: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/article?',
        articlesComment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/article-comment?',
        addArticlesComment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/article-comment/',
        articlesDetail: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/article/',
        apartment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/account/apartments',
        apartmentDetail: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/account/apartments/',
        apartmentUser: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/apartment/user',
        feedback_addnew: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedback',
        feedbacknew_addnew: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedbacknew',
        language: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/category/language',
        paymentBank: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/payment-bank',
        paymentLog: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/payment-log',
        payments: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/payment-bill?',
        paymentDetail: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/payment-bill/',
        paymentComment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/payment-comment',
        paymentCategory: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/payment-category',
        serviceGroup: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/service-group',
        serviceCategory: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/service-category',
        serviceLog: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/service-log',
        services: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/service?',
        serviceDetail: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/service/',
        // getVersion: Platform.OS === 'ios' ? '/public/app-version/ios' : '/public/app-version/android',
        feedback_addFile: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/media',
        getBanner: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/banner',
        getPost: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/post',
        postDetail: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/post/',
        feedbacks: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedback?',
        feedbacksnew: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedbacknew?',
        feedbacksDetail: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedback/',
        feedbacksNewDetail: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedbacknew/',
        feedbacksCategory: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedback-category/',
        userStatistic: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/user-statistic/',
        feedback_reply: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedback-reply/',
        feedbacknew_reply: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/feedbacknew-reply/',
        popupConfig: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/popup-config',
        countNotificationConfig: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/notification-common/count-user-click/',
        countPostClick: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/post/user-click/',
        countPopupConfigClick: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/popup-config/user-click/',
        media_addFile: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/media',
        // vund5
        servicePromotionCode: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/promotion-code',
        serviceShopProduct: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-product?',
        serviceServiceGroup: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/service-group',
        getUserShop: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/user-shop',
        getUserShopCheckShopOwner: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/user-shop/check-shop-owner',
        getUserShopByCategory: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/user-shop?',
        getUserShopTopData: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/user-shop/top/data',
        getShopProductCategory: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/user-shop-category',
        postRequestShopProduct: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/request-shop-product',
        getOrderHistory: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history',
        getOrderHistoryById: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history/id',
        putOrderHistoryRateStarUser: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-v2/rate-star-user',
        putOrderHistoryRateStarShop: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-v2/rate-star-shop',
        putOrderHistoryCancelUser: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-v2/cancel-user',
        putOrderHistoryCancelProvider: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-v2/cancel-provider',
        getServiceLog: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/service-log',
        getServiceLogById: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/service-log/id',
        orderHistoryComment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-comment',
        getOrderHistoryByProvider: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history/find-by-provider',
        putOrderHistoryProviderFinish: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history/provide-finish',
        putOrderHistoryProviderConfirm: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history/provide-confirm',
        putOrderHistoryUserConfirm: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history/user-confirm',
        putOrderHistoryUserComplain: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history/user-complain',
        // fixbug
        apartmentMember: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/apartment/member',
        apartmentVehicle: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/apartment/vehicle',
        userComment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/user-comment',
        // API ví điện tử
        registerEpay: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/epay-service/register-epay',
        getEpayUser: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/epay-service/get-epay-user',
        epayRechargeUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/epay-service/epay-recharge-url',
        epaypayment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/epay-service/epay-payment',
        epayPageApproved: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/epay-service/epay-page-approved',
        momoPayment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/momo-payment/payment',
        // post like { "statusLike": "like" } status: 'like' | 'unlike' | 'none'
        postLike: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/post-like/',
        addPostComment: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/post-comment/',
        addPostCommentReply: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/post-reply/',
        // article like { "statusLike": "like" } status: 'like' | 'unlike' | 'none'
        articleLike: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/article-like/',
        sendArticleReply: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/article-reply/',
        // ========================== Service shop V2 API's ===================================== //
        // Shop house category list
        shopHouseCategoryV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-house-category-v2',
        // Shop house sub categories list
        shopHouseSubCategpryV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-house-sub-category-v2',
        // List shops by sub category
        shopHouseV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-house-v2',
        requestHouseSaleV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/request-house-sale',
        // List product of shop
        productShopV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-product-v2',
        // List tag of shop
        tagShopV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-house-tag-v2',
        // search shop by tags , cate
        searchShop: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-house-v2/search',
        // get, set comment shop
        commentShopV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-product-comment-v2',
        // reply comment shop
        replycommentShopV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-product-reply-v2',
        //  order shop v2
        orderShopV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-v2',
        // get evaluations of Shop
        getEvaluationShopV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-v2/order-history-evaluation',
        //get shop of user
        userShopTopData: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/shop-house-v2/top/data',
        // get, set comment order
        commentOrderV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-comment-v2',
        // reply comment shop
        replycommentOrderV2: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-reply-v2',
        // change time delivery
        changeTimeDeliveryOrder: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/order-history-v2/change-time-delivery',
        // promotion code banner
        promotionCodeBanner: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/promotion-code-v2/banner',
        // post survey
        postSurvey: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base + '/article/survey'
      };
      /***/
    },

    /***/
    "6cjs":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic-super-tabs/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \****************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function cjs(module, exports, __webpack_require__) {
      var map = {
        "./super-tab-button_2.entry.js": ["UWEh", "common", 0],
        "./super-tab-indicator.entry.js": ["afC3", 1],
        "./super-tab_3.entry.js": ["XRr/", "common", 2]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "6cjs";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "82DV":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/pincode-password/pincode-password.page.ts ***!
      \*****************************************************************/

    /*! exports provided: PincodePasswordPage */

    /***/
    function DV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PincodePasswordPage", function () {
        return PincodePasswordPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function PincodePasswordPage_ion_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 15);
        }
      }

      function PincodePasswordPage__svg_svg_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "circle", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "animateTransform", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "animate", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "g", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "g", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "circle", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "animateTransform", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "animate", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "g", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "g", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "animateTransform", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "animate", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "g", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "g", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "circle", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "animateTransform", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "animate", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "g", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "animateTransform", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "animate", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "g", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "g", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "circle", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "animateTransform", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "animate", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "g", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "circle", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "animateTransform", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "animate", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "g", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "g", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "circle", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "animateTransform", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "animate", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PincodePasswordPage_ion_col_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function PincodePasswordPage_ion_col_17_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var controlItem_r5 = ctx.$implicit;
            var i_r6 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.onKeyUp($event, controlItem_r5, i_r6);
          })("keydown", function PincodePasswordPage_ion_col_17_Template_input_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.onKeyDown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var controlItem_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", controlItem_r5);
        }
      }

      function PincodePasswordPage_ion_label_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r3.timmerCount, ")");
        }
      }

      function PincodePasswordPage_ion_label_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PINCODE_PASSWORD.wrong_code"));
        }
      }

      var PincodePasswordPage = /*#__PURE__*/function () {
        function PincodePasswordPage(apiService, loading, modalController, navParams) {
          _classCallCheck(this, PincodePasswordPage);

          this.apiService = apiService;
          this.loading = loading;
          this.modalController = modalController;
          this.navParams = navParams;
          this.color = "gray";
          this.isHidden = false;
          this.codeSize = 4;
          this.isChecking = false;
          this.isError = false;
          this.initiateBuilder();
        }

        _createClass(PincodePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.phoneNumber = this.navParams.data.phoneNumber;
            this.setupPreventResentCode();
          }
        }, {
          key: "setupPreventResentCode",
          value: function setupPreventResentCode() {
            this.isEnableResentCode = false;
            var self = this;
            this.timmerCount = 30;
            this.timmer = setInterval(function () {
              if (self.timmerCount > 1) {
                self.timmerCount -= 1;
              } else {
                self.timmerCount = 0;
                self.isEnableResentCode = true;
              }
            }, 1000);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var stylebody = document.body.style;

            if (changes.color != undefined) {
              stylebody.setProperty('--borderColor', changes.color.currentValue);
            }

            if (changes.isHidden != undefined) {
              if (changes.isHidden.currentValue == false) {
                stylebody.setProperty('--charShape', 'none');
              } else {
                stylebody.setProperty('--charShape', 'disc');
              }
            }

            this.initiateBuilder();
          }
        }, {
          key: "initiateBuilder",
          value: function initiateBuilder() {
            this.pinCodeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});

            for (var i = 0; i < this.codeSize; i++) {
              var formController = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                value: '',
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
              this.pinCodeFormGroup.addControl('codeFiled' + i, formController);
            }

            var v_pinCodeArray = [];
            Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
              v_pinCodeArray.push(key);
            });
            this.pinCodeArray = v_pinCodeArray;
            this.pinCodeFormGroup.get('codeFiled0').enable();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var input = document.querySelectorAll('.pinCodeInput').item(0);
            input.focus();
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp($event, item, index) {
            var _this = this;

            var v_index;
            var reg = new RegExp("[0-9]");

            if ($event.key == "Backspace") {
              if (index == 0) {
                v_index = 0;
              } else {
                v_index = index - 1;
                this.pinCodeFormGroup.get('codeFiled' + index).disable();
              }
            } else {
              if (reg.test($event.target.value)) {
                if (index == this.codeSize - 1) {
                  v_index = this.codeSize - 1;
                } else {
                  v_index = index + 1;
                  this.pinCodeFormGroup.get('codeFiled' + v_index).enable();
                }
              }
            }

            var input = document.querySelectorAll('.pinCodeInput').item(v_index);
            input.focus();

            if (index == this.codeSize - 1 && $event.key != "Backspace") {
              var pinCodeValue = '';
              Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
                pinCodeValue += _this.pinCodeFormGroup.value[key];
              });

              if (this.pinCodeFormGroup.valid) {
                this.checkingPincode(pinCodeValue);
              } else {}
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown($event) {
            if ($event.key != "Backspace") {
              if ($event.target.value.length == 1) {
                return false;
              }
            }
          }
        }, {
          key: "resentPinCode",
          value: function resentPinCode() {
            if (!this.isEnableResentCode) {
              return;
            }

            this.apiService.forgotPassword(this.phoneNumber).subscribe(function (result) {}, function (error) {});
            this.setupPreventResentCode();
          }
        }, {
          key: "checkingPincode",
          value: function checkingPincode(pinCodeValue) {
            var _this2 = this;

            var self = this;
            this.isChecking = true;
            this.loading.present();
            this.apiService.verifyTokenCode(this.phoneNumber, pinCodeValue).subscribe(function (result) {
              self.isError = false;
              self.loading.dismiss();
              self.finishPinCode(pinCodeValue);
            }, function (error) {
              _this2.isError = true;
              _this2.isChecking = false;
              self.loading.dismiss();
            });
          }
        }, {
          key: "finishPinCode",
          value: function finishPinCode(pinCodeValue) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onClosedData = JSON.stringify({
                        result: "0",
                        message: "success",
                        token: pinCodeValue
                      });
                      _context.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      onClosedData = JSON.stringify({
                        result: "1",
                        message: "cancel",
                        token: ""
                      });
                      _context2.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return PincodePasswordPage;
      }();

      PincodePasswordPage.ɵfac = function PincodePasswordPage_Factory(t) {
        return new (t || PincodePasswordPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]));
      };

      PincodePasswordPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PincodePasswordPage,
        selectors: [["app-pincode-password"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 26,
        vars: 15,
        consts: [["slot", "start", 1, "btn-close-popup", 3, "click"], ["lines", "none", 1, "image-item"], ["class", "image-icon-check", "src", "/assets/common/check-circle-o.png", 4, "ngIf"], ["class", "image-icon-check", "width", "75px", "height", "75px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", "style", "shape-rendering: auto; animation-play-state: running; animation-delay: 0s; background: none;", 4, "ngIf"], ["lines", "none", 1, "form-class", "note-style"], [1, "ion-text-wrap", "label-text"], ["lines", "none", 1, "padding-none", "margin-none"], [1, "pinCodeGrid"], [1, "form-class", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["lines", "none", 1, "form-class", "margin-none", "margin-top-16"], ["slot", "start", "disabled", "!isEnableResentCode", 1, "btn-resend", 3, "click"], ["name", "arrow-round-down"], [4, "ngIf"], ["slot", "end", "class", "wrong-code", 4, "ngIf"], ["src", "/assets/common/check-circle-o.png", 1, "image-icon-check"], ["width", "75px", "height", "75px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 1, "image-icon-check", 2, "shape-rendering", "auto", "animation-play-state", "running", "animation-delay", "0s", "background", "none"], ["transform", "translate(80,50)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(0)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "1", "transform", "scale(1.04713 1.04713)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.875s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.875s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(71.21320343559643,71.21320343559643)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(45)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.875", "transform", "scale(1.05963 1.05963)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.75s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.75s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(50,80)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(90)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.75", "transform", "scale(1.07213 1.07213)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.625s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.625s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(28.786796564403577,71.21320343559643)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(135)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.625", "transform", "scale(1.08463 1.08463)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.5s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.5s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(20,50.00000000000001)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(180)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.5", "transform", "scale(1.09713 1.09713)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.375s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.375s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(28.78679656440357,28.786796564403577)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(225)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.375", "transform", "scale(1.00963 1.00963)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.25s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.25s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(49.99999999999999,20)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(270)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.25", "transform", "scale(1.02213 1.02213)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.125s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.125s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(71.21320343559643,28.78679656440357)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(315)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.125", "transform", "scale(1.03463 1.03463)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "0s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "0s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["ng-pattern", "/^[0-9]*$/", "ng-maxlength", "1", "maxlength", "1", "type", "number", 1, "pinCodeInput", 3, "formControlName", "keyup", "keydown"], ["slot", "end", 1, "wrong-code"]],
        template: function PincodePasswordPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePasswordPage_Template_ion_buttons_click_1_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PincodePasswordPage_ion_img_7_Template, 1, 0, "ion-img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PincodePasswordPage__svg_svg_8_Template, 41, 0, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-grid", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PincodePasswordPage_ion_col_17_Template, 2, 1, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-buttons", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodePasswordPage_Template_ion_buttons_click_19_listener() {
              return ctx.resentPinCode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PincodePasswordPage_ion_label_24_Template, 2, 1, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PincodePasswordPage_ion_label_25_Template, 3, 3, "ion-label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 9, "PINCODE_PASSWORD.btn_cancel"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 11, "PINCODE_PASSWORD.pincode_note"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.pinCodeFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pinCodeArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 13, "PINCODE_PASSWORD.btn_resend_code"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEnableResentCode == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError == true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  width: 1% !important;\n}\n\n.pinCodeInput[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n  width: 100% !important;\n  min-height: 40px;\n  height: 100%;\n  border: 1px solid #c4c4c4;\n  font-size: 24px;\n  text-align: center;\n  -webkit-text-security: var(--charShape);\n  -moz-text-security: var(--charShape);\n}\n\n.pinCodeGrid[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n\n.pinCodeInput[disabled][_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e3e3e3;\n  background-color: transparent;\n}\n\n.image-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.image-icon-check[_ngcontent-%COMP%] {\n  height: 66px;\n  width: 66px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.note-style[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  \n  color: #556080;\n}\n\n.btn-resend[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  color: #556080;\n}\n\n.btn-done[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  \n  color: #556080;\n}\n\n.wrong-code[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  text-align: right;\n  color: #FFC144;\n}\n\n.margin-top-16[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGluY29kZS1wYXNzd29yZC9waW5jb2RlLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUlBO0VBQ0csZ0NBQUE7RUFDQSw2QkFBQTtBQURIOztBQUlBO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFHQSxjQUFBO0FBSEo7O0FBTUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUdBLGNBQUE7QUFMSjs7QUFTQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBR0EsY0FBQTtBQVJBOztBQVlBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUFWQTs7QUFjQTtFQUNJLGdCQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9waW5jb2RlLXBhc3N3b3JkL3BpbmNvZGUtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicm9vdHtcclxuICAgIC0tYm9yZGVyQ29sb3I6Z3JheTtcclxuICAgIC0tY2hhclNoYXBlOm5vbmU7XHJcbn1cclxuXHJcbi5jb2w6bGFzdC1jaGlsZCB7XHJcbiAgICB3aWR0aDoxJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGluQ29kZUlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgyMywgMjEsIDQ4LCAwLjEwMjU0Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRleHQtc2VjdXJpdHk6dmFyKC0tY2hhclNoYXBlKTtcclxuICAgIC1tb3otdGV4dC1zZWN1cml0eTogdmFyKC0tY2hhclNoYXBlKTtcclxufVxyXG5cclxuXHJcbi5waW5Db2RlR3JpZHtcclxuICAgIGRpcmVjdGlvbjogbHRyO1xyXG59XHJcblxyXG5cclxuLnBpbkNvZGVJbnB1dFtkaXNhYmxlZF17XHJcbiAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTNlM2UzO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmltYWdlLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1pY29uLWNoZWNrIHtcclxuICAgIGhlaWdodDogNjZweDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuLmZvcm0tY2xhc3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5ub3RlLXN0eWxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAvKiBvciAxNzElICovXHJcblxyXG5cclxuICAgIGNvbG9yOiAjNTU2MDgwO1xyXG59XHJcblxyXG4uYnRuLXJlc2VuZHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuXHJcbiAgICBjb2xvcjogIzU1NjA4MDtcclxuXHJcbn1cclxuXHJcbi5idG4tZG9uZXtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxubGluZS1oZWlnaHQ6IDMzcHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG5cclxuY29sb3I6ICM1NTYwODA7XHJcblxyXG59XHJcblxyXG4ud3JvbmctY29kZXtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5saW5lLWhlaWdodDogMTlweDtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG5jb2xvcjogI0ZGQzE0NDtcclxuXHJcbn1cclxuXHJcbi5tYXJnaW4tdG9wLTE2e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PincodePasswordPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-pincode-password',
            templateUrl: './pincode-password.page.html',
            styleUrls: ['./pincode-password.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9ans":
    /*!***********************************************!*\
      !*** ./src/app/services/auth/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function ans(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../env.service */
      "5zL6"); // import { NativeStorage } from '@ionic-native/native-storage/ngx';


      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.isLoggedIn = false;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(phone, password) {
            var _this3 = this;

            var self = this;
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"].login, {
              phone: phone,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        // await self.storage.setItem('token', token);
                        localStorage.setItem('token', token['token']);
                        localStorage.setItem('profile', JSON.stringify(token['profile']));
                        self.token = token;
                        self.isLoggedIn = true;
                        return _context3.abrupt("return", token);

                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            }));
          }
        }, {
          key: "register",
          value: function register(fName, lName, email, password) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"].register, {
              fName: fName,
              lName: lName,
              email: email,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
              return result;
            }));
            ;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('profile');
            this.isLoggedIn = false;
            delete this.token;
          }
        }, {
          key: "user",
          value: function user() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: this.token.token_type + ' ' + this.token.access_token
            });
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"].apartmentUser, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
              return user;
            }));
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            if (localStorage.getItem('token')) {
              var profile = JSON.parse(localStorage.getItem('profile'));
              return profile;
            }

            return null;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            this.token = localStorage.getItem('token'); // return this.storage.getItem('token').then(data => {
            //   this.token = data;

            if (this.token != null) {
              this.isLoggedIn = true;
            } else {
              this.isLoggedIn = false;
              this.token = null;
            }

            return this.token; // });
          }
        }, {
          key: "getListArticle",
          value: function getListArticle() {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', '1').set('limit', '10').set('category', '').set('search', '').set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"].articles, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) {
              console.log(results);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9wPF":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/auth/pincode-register/pincode-register.page.ts ***!
      \**********************************************************************/

    /*! exports provided: PincodeRegisterPage */

    /***/
    function wPF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PincodeRegisterPage", function () {
        return PincodeRegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function PincodeRegisterPage_ion_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 15);
        }
      }

      function PincodeRegisterPage__svg_svg_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "circle", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "animateTransform", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "animate", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "g", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "g", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "circle", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "animateTransform", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "animate", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "g", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "g", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "circle", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "animateTransform", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "animate", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "g", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "g", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "circle", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "animateTransform", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "animate", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "g", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "g", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "circle", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "animateTransform", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "animate", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "g", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "g", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "circle", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "animateTransform", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "animate", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "g", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "g", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "circle", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "animateTransform", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "animate", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "g", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "g", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "circle", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "animateTransform", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "animate", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function PincodeRegisterPage_ion_col_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function PincodeRegisterPage_ion_col_17_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var controlItem_r5 = ctx.$implicit;
            var i_r6 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.onKeyUp($event, controlItem_r5, i_r6);
          })("keydown", function PincodeRegisterPage_ion_col_17_Template_input_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r10.onKeyDown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var controlItem_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", controlItem_r5);
        }
      }

      function PincodeRegisterPage_ion_label_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r3.timmerCount, ")");
        }
      }

      function PincodeRegisterPage_ion_label_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "PINCODE_PASSWORD.wrong_code"));
        }
      }

      var PincodeRegisterPage = /*#__PURE__*/function () {
        function PincodeRegisterPage(apiService, loading, modalController, navParams) {
          _classCallCheck(this, PincodeRegisterPage);

          this.apiService = apiService;
          this.loading = loading;
          this.modalController = modalController;
          this.navParams = navParams;
          this.color = "gray";
          this.isHidden = false;
          this.codeSize = 4;
          this.isChecking = false;
          this.isError = false;
          this.initiateBuilder();
        }

        _createClass(PincodeRegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.phoneNumber = this.navParams.data.phoneNumber;
            this.refCode = this.navParams.data.refCode;
            this.setupPreventResentCode();
          }
        }, {
          key: "setupPreventResentCode",
          value: function setupPreventResentCode() {
            this.isEnableResentCode = false;
            var self = this;
            this.timmerCount = 30;
            this.timmer = setInterval(function () {
              if (self.timmerCount > 1) {
                self.timmerCount -= 1;
              } else {
                self.timmerCount = 0;
                self.isEnableResentCode = true;
              }
            }, 1000);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var stylebody = document.body.style;

            if (changes.color != undefined) {
              stylebody.setProperty('--borderColor', changes.color.currentValue);
            }

            if (changes.isHidden != undefined) {
              if (changes.isHidden.currentValue == false) {
                stylebody.setProperty('--charShape', 'none');
              } else {
                stylebody.setProperty('--charShape', 'disc');
              }
            }

            this.initiateBuilder();
          }
        }, {
          key: "initiateBuilder",
          value: function initiateBuilder() {
            this.pinCodeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});

            for (var i = 0; i < this.codeSize; i++) {
              var formController = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                value: '',
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
              this.pinCodeFormGroup.addControl('codeFiled' + i, formController);
            }

            var v_pinCodeArray = [];
            Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
              v_pinCodeArray.push(key);
            });
            this.pinCodeArray = v_pinCodeArray;
            this.pinCodeFormGroup.get('codeFiled0').enable();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var input = document.querySelectorAll('.pinCodeInput').item(0);
            input.focus();
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp($event, item, index) {
            var _this4 = this;

            var v_index;
            var reg = new RegExp("[0-9]");

            if ($event.key == "Backspace") {
              if (index == 0) {
                v_index = 0;
              } else {
                v_index = index - 1;
                this.pinCodeFormGroup.get('codeFiled' + index).disable();
              }
            } else {
              if (reg.test($event.target.value)) {
                if (index == this.codeSize - 1) {
                  v_index = this.codeSize - 1;
                } else {
                  v_index = index + 1;
                  this.pinCodeFormGroup.get('codeFiled' + v_index).enable();
                }
              }
            }

            var input = document.querySelectorAll('.pinCodeInput').item(v_index);
            input.focus();

            if (index == this.codeSize - 1 && $event.key != "Backspace") {
              var pinCodeValue = '';
              Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
                pinCodeValue += _this4.pinCodeFormGroup.value[key];
              });

              if (this.pinCodeFormGroup.valid) {
                this.checkingPincode(pinCodeValue);
              } else {}
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown($event) {
            if ($event.key != "Backspace") {
              if ($event.target.value.length == 1) {
                return false;
              }
            }
          }
        }, {
          key: "resentPinCode",
          value: function resentPinCode() {
            if (!this.isEnableResentCode) {
              return;
            }

            var self = this;
            this.apiService.resentRegisterCode(this.phoneNumber).subscribe(function (result) {
              self.refCode = result.ref;
            }, function (error) {});
            this.setupPreventResentCode();
          }
        }, {
          key: "checkingPincode",
          value: function checkingPincode(pinCodeValue) {
            var _this5 = this;

            var self = this;
            this.isChecking = true;
            this.loading.present();
            this.apiService.confirmRegisterCode(this.phoneNumber, pinCodeValue).subscribe(function (result) {
              self.isError = false;
              self.loading.dismiss();
              self.finishPinCode(pinCodeValue);
            }, function (error) {
              _this5.isError = true;
              _this5.isChecking = false;
              self.loading.dismiss();
            });
          }
        }, {
          key: "finishPinCode",
          value: function finishPinCode(pinCodeValue) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      onClosedData = JSON.stringify({
                        result: "0",
                        message: "success",
                        token: pinCodeValue,
                        refCode: this.refCode
                      });
                      _context4.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      onClosedData = JSON.stringify({
                        result: "1",
                        message: "cancel",
                        token: ""
                      });
                      _context5.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return PincodeRegisterPage;
      }();

      PincodeRegisterPage.ɵfac = function PincodeRegisterPage_Factory(t) {
        return new (t || PincodeRegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]));
      };

      PincodeRegisterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PincodeRegisterPage,
        selectors: [["app-pincode-register"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 26,
        vars: 15,
        consts: [["slot", "start", 1, "btn-done", 3, "click"], ["lines", "none", 1, "image-item"], ["class", "image-icon-check", "src", "/assets/common/check-circle-o.png", 4, "ngIf"], ["class", "image-icon-check", "width", "75px", "height", "75px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", "style", "shape-rendering: auto; animation-play-state: running; animation-delay: 0s; background: none;", 4, "ngIf"], ["lines", "none", 1, "form-class", "note-style"], [1, "ion-text-wrap", "label-text"], ["lines", "none", 1, "padding-none", "margin-none"], [1, "pinCodeGrid"], [1, "form-class", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["lines", "none", 1, "form-class", "margin-none", "margin-top-16"], ["slot", "start", "disabled", "!isEnableResentCode", 1, "btn-resend", 3, "click"], ["name", "arrow-round-down"], [4, "ngIf"], ["slot", "end", "class", "wrong-code", 4, "ngIf"], ["src", "/assets/common/check-circle-o.png", 1, "image-icon-check"], ["width", "75px", "height", "75px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 1, "image-icon-check", 2, "shape-rendering", "auto", "animation-play-state", "running", "animation-delay", "0s", "background", "none"], ["transform", "translate(80,50)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(0)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "1", "transform", "scale(1.04713 1.04713)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.875s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.875s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(71.21320343559643,71.21320343559643)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(45)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.875", "transform", "scale(1.05963 1.05963)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.75s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.75s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(50,80)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(90)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.75", "transform", "scale(1.07213 1.07213)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.625s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.625s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(28.786796564403577,71.21320343559643)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(135)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.625", "transform", "scale(1.08463 1.08463)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.5s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.5s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(20,50.00000000000001)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(180)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.5", "transform", "scale(1.09713 1.09713)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.375s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.375s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(28.78679656440357,28.786796564403577)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(225)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.375", "transform", "scale(1.00963 1.00963)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.25s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.25s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(49.99999999999999,20)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(270)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.25", "transform", "scale(1.02213 1.02213)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.125s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.125s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(71.21320343559643,28.78679656440357)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(315)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.125", "transform", "scale(1.03463 1.03463)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "0s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "0s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["ng-pattern", "/^[0-9]*$/", "ng-maxlength", "1", "maxlength", "1", "type", "number", 1, "pinCodeInput", 3, "formControlName", "keyup", "keydown"], ["slot", "end", 1, "wrong-code"]],
        template: function PincodeRegisterPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodeRegisterPage_Template_ion_buttons_click_1_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PincodeRegisterPage_ion_img_7_Template, 1, 0, "ion-img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PincodeRegisterPage__svg_svg_8_Template, 41, 0, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-grid", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PincodeRegisterPage_ion_col_17_Template, 2, 1, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-buttons", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PincodeRegisterPage_Template_ion_buttons_click_19_listener() {
              return ctx.resentPinCode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PincodeRegisterPage_ion_label_24_Template, 2, 1, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, PincodeRegisterPage_ion_label_25_Template, 3, 3, "ion-label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 9, "PINCODE_PASSWORD.btn_cancel"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 11, "PINCODE_PASSWORD.pincode_note"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.pinCodeFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pinCodeArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 13, "PINCODE_PASSWORD.btn_resend_code"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEnableResentCode == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError == true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  width: 1% !important;\n}\n\n.pinCodeInput[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n  width: 100% !important;\n  min-height: 40px;\n  height: 100%;\n  border: 1px solid #c4c4c4;\n  font-size: 24px;\n  text-align: center;\n  -webkit-text-security: var(--charShape);\n  -moz-text-security: var(--charShape);\n}\n\n.pinCodeGrid[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n\n.pinCodeInput[disabled][_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e3e3e3;\n  background-color: transparent;\n}\n\n.image-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.image-icon-check[_ngcontent-%COMP%] {\n  height: 66px;\n  width: 66px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.note-style[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  \n  color: #556080;\n}\n\n.btn-resend[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  color: #556080;\n}\n\n.btn-done[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  \n  color: #556080;\n}\n\n.wrong-code[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  text-align: right;\n  color: #FFC144;\n}\n\n.margin-top-16[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9waW5jb2RlLXJlZ2lzdGVyL3BpbmNvZGUtcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0FBQ0o7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBSUE7RUFDRyxnQ0FBQTtFQUNBLDZCQUFBO0FBREg7O0FBSUE7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUdBLGNBQUE7QUFISjs7QUFNQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBR0EsY0FBQTtBQUxKOztBQVNBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFHQSxjQUFBO0FBUkE7O0FBWUE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQVZBOztBQWNBO0VBQ0ksZ0JBQUE7QUFYSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcGluY29kZS1yZWdpc3Rlci9waW5jb2RlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvb3R7XHJcbiAgICAtLWJvcmRlckNvbG9yOmdyYXk7XHJcbiAgICAtLWNoYXJTaGFwZTpub25lO1xyXG59XHJcblxyXG4uY29sOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6MSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpbkNvZGVJbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMjMsIDIxLCA0OCwgMC4xMDI1NDYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OnZhcigtLWNoYXJTaGFwZSk7XHJcbiAgICAtbW96LXRleHQtc2VjdXJpdHk6IHZhcigtLWNoYXJTaGFwZSk7XHJcbn1cclxuXHJcblxyXG4ucGluQ29kZUdyaWR7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxufVxyXG5cclxuXHJcbi5waW5Db2RlSW5wdXRbZGlzYWJsZWRde1xyXG4gICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UzZTNlMztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtaWNvbi1jaGVjayB7XHJcbiAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNsYXNzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ubm90ZS1zdHlsZSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgLyogb3IgMTcxJSAqL1xyXG5cclxuXHJcbiAgICBjb2xvcjogIzU1NjA4MDtcclxufVxyXG5cclxuLmJ0bi1yZXNlbmR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcblxyXG4gICAgY29sb3I6ICM1NTYwODA7XHJcblxyXG59XHJcblxyXG4uYnRuLWRvbmV7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDI0cHg7XHJcbmxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuXHJcbmNvbG9yOiAjNTU2MDgwO1xyXG5cclxufVxyXG5cclxuLndyb25nLWNvZGV7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxubGluZS1oZWlnaHQ6IDE5cHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG50ZXh0LWFsaWduOiByaWdodDtcclxuY29sb3I6ICNGRkMxNDQ7XHJcblxyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0xNntcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PincodeRegisterPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-pincode-register',
            templateUrl: './pincode-register.page.html',
            styleUrls: ['./pincode-register.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "A9xp":
    /*!****************************************************************!*\
      !*** ./src/app/components/confirm-modal/confirm-modal.page.ts ***!
      \****************************************************************/

    /*! exports provided: ConfirmModalPage */

    /***/
    function A9xp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmModalPage", function () {
        return ConfirmModalPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ConfirmModalPage = /*#__PURE__*/function () {
        function ConfirmModalPage() {
          _classCallCheck(this, ConfirmModalPage);
        }

        _createClass(ConfirmModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfirmModalPage;
      }();

      ConfirmModalPage.ɵfac = function ConfirmModalPage_Factory(t) {
        return new (t || ConfirmModalPage)();
      };

      ConfirmModalPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmModalPage,
        selectors: [["app-confirm-modal"]],
        decls: 14,
        vars: 0,
        consts: [["lines", "none", 1, "image-item", "header-infor"], ["lines", "none", 1, "image-item"], ["src", "/assets/common/delete-circle-o.png", 1, "image-icon-check"], [1, "label-confirm"], [1, "full-width", "function-section"], ["expand", "block", 1, "amo-button-custom", "amo-button-custom-1"], ["expand", "block", 1, "amo-button-custom", "amo-button-custom-2"]],
        template: function ConfirmModalPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to delete?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"]],
        styles: [".header-infor[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.header-infor[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  color: #556080;\n}\n\n.image-icon-check[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 45px;\n}\n\n.label-confirm[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  display: flex;\n}\n\n.amo-button-custom-1[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 0px 5px 0px 20px;\n  color: #556080;\n  --background: #dddfe6;\n}\n\n.amo-button-custom-2[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 0px 20px 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQU1KOztBQUpBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0FBT0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWluZm9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuLmhlYWRlci1pbmZvciBpb24tbGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjNTU2MDgwO1xyXG59XHJcbi5pbWFnZS1pY29uLWNoZWNrIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG4ubGFiZWwtY29uZmlybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZ1bmN0aW9uLXNlY3Rpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5hbW8tYnV0dG9uLWN1c3RvbS0xIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCAyMHB4O1xyXG4gICAgY29sb3I6ICM1NTYwODA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkZGRmZTY7XHJcbn1cclxuLmFtby1idXR0b24tY3VzdG9tLTIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCA1cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmModalPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-confirm-modal',
            templateUrl: './confirm-modal.page.html',
            styleUrls: ['./confirm-modal.page.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // base: 'http://localhost:3031',
        // baseDomain: 'localhost:3031',
        base: 'https://api.amoapp.net',
        baseDomain: 'api.amoapp.net',
        "static": 'https://static.amoapp.net/',
        message: 'https://messenger.amoapp.net'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CXCh":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/pincode-password/pincode-password.module.ts ***!
      \*******************************************************************/

    /*! exports provided: PincodePasswordPageModule */

    /***/
    function CXCh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PincodePasswordPageModule", function () {
        return PincodePasswordPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _pincode_password_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pincode-password.page */
      "82DV");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _pincode_password_page__WEBPACK_IMPORTED_MODULE_5__["PincodePasswordPage"]
      }];

      var PincodePasswordPageModule = function PincodePasswordPageModule() {
        _classCallCheck(this, PincodePasswordPageModule);
      };

      PincodePasswordPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PincodePasswordPageModule
      });
      PincodePasswordPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PincodePasswordPageModule_Factory(t) {
          return new (t || PincodePasswordPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PincodePasswordPageModule, {
          declarations: [_pincode_password_page__WEBPACK_IMPORTED_MODULE_5__["PincodePasswordPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PincodePasswordPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_pincode_password_page__WEBPACK_IMPORTED_MODULE_5__["PincodePasswordPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "GUvF":
    /*!****************************************!*\
      !*** ./src/app/utils/utils.service.ts ***!
      \****************************************/

    /*! exports provided: UtilsService */

    /***/
    function GUvF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
        return UtilsService;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

      var UtilsService = {
        formatString: function formatString(stringDate) {
          return moment__WEBPACK_IMPORTED_MODULE_0__(stringDate).format('DD/MM/YYYY');
        },
        formatStringFull: function formatStringFull(stringDate) {
          return moment__WEBPACK_IMPORTED_MODULE_0__(stringDate).format('DD/MM/YYYY hh:mm:ss');
        },
        checkPhoneNumber: function checkPhoneNumber(phoneNumber) {
          if (phoneNumber && phoneNumber.length >= 10 && phoneNumber.length <= 11 && phoneNumber[0] == '0') {
            return true;
          } else {
            return false;
          }
        },
        requestDetailComponentShare: null,
        isAppOpen: false,
        notificationNavigatorLink: ""
      };
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/code-push/ngx */
      "bFSS");
      /* harmony import */


      var _translate_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./translate-config.service */
      "ZjVV");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./utils/utils.service */
      "GUvF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0, a1) {
        return {
          "background": a0,
          "color": a1
        };
      };

      function AppComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_img_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.closePopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_2_Template_ion_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.changeScreenPopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.popupThumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.getButtonBackgroud(), ctx_r0.getButtonColor()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.popupButtonTitle);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, authService, navCtrl, alertService, oneSignal, codePush, router, apiService, translateConfigService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.authService = authService;
          this.navCtrl = navCtrl;
          this.alertService = alertService;
          this.oneSignal = oneSignal;
          this.codePush = codePush;
          this.router = router;
          this.apiService = apiService;
          this.translateConfigService = translateConfigService;
          splashScreen.hide();
          this.translateConfigService.setLanguageDefault();
          this.initializeApp();
          this.popupThumbnail = "";
          this.popupButtonTitle = "";
          this.popupLink = "";
          this.isShowPopup = false;
          this.getConfigPopup();
        }

        _createClass(AppComponent, [{
          key: "getConfigPopup",
          value: function getConfigPopup() {
            var self = this;
            this.apiService.getPopupConfig().subscribe(function (result) {
              //console.log(result.popupConfig)
              self.popupConfigId = result.popupConfig._id;
              self.popupThumbnail = result.popupConfig.thumbnail;
              self.popupButtonTitle = result.popupConfig.buttonTitle;

              if (self.popupButtonTitle != null && self.popupButtonTitle.length > 0) {
                self.isShowPopup = true;
              }

              self.popupButtonBackgroud = "#" + result.popupConfig.buttonColor;
              self.popupButtonColor = "#" + result.popupConfig.textColor;
              self.popupLink = result.popupConfig.link;
            }, function (error) {});
          }
        }, {
          key: "hex2Rgb",
          value: function hex2Rgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            } : null;
          }
        }, {
          key: "getButtonBackgroud",
          value: function getButtonBackgroud() {
            var colorRGB = this.hex2Rgb(this.popupButtonBackgroud); //console.log(colorRGB);

            var resultColorString = 'rgb(' + colorRGB.r + ', ' + colorRGB.g + ', ' + colorRGB.b + ')';
            return resultColorString;
          }
        }, {
          key: "getButtonColor",
          value: function getButtonColor() {
            var colorRGB = this.hex2Rgb(this.popupButtonColor);
            var resultColorString = 'rgb(' + colorRGB.r + ', ' + colorRGB.g + ', ' + colorRGB.b + ')';
            return resultColorString;
          }
        }, {
          key: "addCountPopupConfigClick",
          value: function addCountPopupConfigClick() {
            this.apiService.countUserPopupConfigClick(this.popupConfigId).subscribe(function (result) {
              console.log(result);
            }, function (error) {});
          }
        }, {
          key: "changeScreenPopup",
          value: function changeScreenPopup() {
            this.addCountPopupConfigClick();
            this.isShowPopup = false;
            this.navCtrl.navigateForward(this.popupLink);
          }
        }, {
          key: "closePopup",
          value: function closePopup() {
            this.isShowPopup = false;
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var self = this;
            this.platform.ready().then(function () {
              self.statusBar.styleDefault();
              self.setupPushOneSign();
              self.checkCodePush();
              self.translateConfigService.setLanguageDefault();
            });
          }
        }, {
          key: "checkCodePush",
          value: function checkCodePush() {
            this.codePush.sync({
              updateDialog: {
                appendReleaseDescription: true,
                optionalInstallButtonLabel: "Update",
                optionalIgnoreButtonLabel: "Cancel",
                descriptionPrefix: "\n\nChange log:\n"
              },
              installMode: _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_8__["InstallMode"].IMMEDIATE
            }).subscribe(function (data) {
              console.log('CODE PUSH SUCCESSFUL: ' + data);
            }, function (err) {
              console.log('CODE PUSH ERROR: ' + err);
            });
          }
        }, {
          key: "addCountUserClick",
          value: function addCountUserClick(popupID) {
            this.apiService.countNotificationUserClick(popupID).subscribe(function (result) {}, function (error) {});
          }
        }, {
          key: "setupPushOneSign",
          value: function setupPushOneSign() {
            var self = this;
            this.oneSignal.startInit('712abf97-1cbe-442b-8c16-d10e29e292a4'); // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(function (event) {});
            this.oneSignal.handleNotificationOpened().subscribe(function (openResult) {
              console.log(openResult);

              if (_utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].isAppOpen) {
                if (openResult.notification.payload.additionalData.type == "post") {
                  if (openResult.notification.payload.additionalData.popupConfig_id != null && openResult.notification.payload.additionalData.popupConfig_id != "") {
                    self.addCountUserClick(openResult.notification.payload.additionalData.popupConfig_id);
                  }

                  self.navCtrl.navigateForward('/new-detail/' + openResult.notification.payload.additionalData._id);
                }

                if (openResult.notification.payload.additionalData.type == "service") {
                  if (openResult.notification.payload.additionalData.popupConfig_id != null && openResult.notification.payload.additionalData.popupConfig_id != "") {
                    self.addCountUserClick(openResult.notification.payload.additionalData.popupConfig_id);
                  }

                  self.navCtrl.navigateForward('/service-detail/' + openResult.notification.payload.additionalData._id);
                } else if (openResult.notification.payload.additionalData.type == "feedbackReply" && self.router.url == "/request-detail/" + openResult.notification.payload.additionalData.feedback) {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].requestDetailComponentShare.getListMessage(openResult.notification.payload.additionalData.feedback, true);
                } else if (openResult.notification.payload.additionalData.type == "feedbackReply") {
                  self.navCtrl.navigateForward('/request-detail/' + openResult.notification.payload.additionalData.feedback);
                } else if (openResult.notification.payload.additionalData.type == "feedback") {
                  self.navCtrl.navigateForward('/request-detail/' + openResult.notification.payload.additionalData._id);
                } else if (openResult.notification.payload.additionalData.type == "feedbacknewReply" && self.router.url == "/request-detail/" + openResult.notification.payload.additionalData.feedback) {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].requestDetailComponentShare.getListMessage(openResult.notification.payload.additionalData.feedbacknew, true);
                } else if (openResult.notification.payload.additionalData.type == "feedbacknewReply") {
                  self.navCtrl.navigateForward('/request-detail/' + openResult.notification.payload.additionalData.feedbacknew);
                } else if (openResult.notification.payload.additionalData.type == "feedbacknew") {
                  self.navCtrl.navigateForward('/request-detail/' + openResult.notification.payload.additionalData._id);
                } else if (openResult.notification.payload.additionalData.type == "article") {
                  self.navCtrl.navigateForward('/notification-detail/' + openResult.notification.payload.additionalData._id);
                } else if (openResult.notification.payload.additionalData.type == "articleComment") {
                  self.navCtrl.navigateForward('/notification-detail/' + openResult.notification.payload.additionalData.article._id);
                } else if (openResult.notification.payload.additionalData.type == "articleReply") {
                  self.navCtrl.navigateForward('/notification-comment/' + openResult.notification.payload.additionalData.article._id);
                } else if (openResult.notification.payload.additionalData.type == "paymentBill") {
                  self.navCtrl.navigateForward('/payment-infor/' + openResult.notification.payload.additionalData._id);
                } else if (openResult.notification.payload.additionalData.type == "paymentLog") {
                  self.navCtrl.navigateForward('/payment-infor/' + openResult.notification.payload.additionalData.paymentBill);
                } else if (openResult.notification.payload.additionalData.type == "paymentComment") {
                  self.navCtrl.navigateForward('/payment-comment/' + openResult.notification.payload.additionalData.paymentBill);
                }
              } else {
                if (openResult.notification.payload.additionalData.type == "post") {
                  if (openResult.notification.payload.additionalData.popupConfig_id != null && openResult.notification.payload.additionalData.popupConfig_id != "") {
                    self.addCountUserClick(openResult.notification.payload.additionalData.popupConfig_id);
                  }

                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/new-detail/' + openResult.notification.payload.additionalData._id;
                }

                if (openResult.notification.payload.additionalData.type == "service") {
                  if (openResult.notification.payload.additionalData.popupConfig_id != null && openResult.notification.payload.additionalData.popupConfig_id != "") {
                    self.addCountUserClick(openResult.notification.payload.additionalData.popupConfig_id);
                  }

                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/service-detail/' + openResult.notification.payload.additionalData._id;
                } else if (openResult.notification.payload.additionalData.type == "feedbackReply") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/request-detail/' + openResult.notification.payload.additionalData.feedback;
                } else if (openResult.notification.payload.additionalData.type == "feedback") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/request-detail/' + openResult.notification.payload.additionalData._id;
                } else if (openResult.notification.payload.additionalData.type == "feedbacknewReply") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/request-detail/' + openResult.notification.payload.additionalData.feedbacknew;
                } else if (openResult.notification.payload.additionalData.type == "feedbacknew") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/request-detail/' + openResult.notification.payload.additionalData._id;
                } else if (openResult.notification.payload.additionalData.type == "article") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/notification-detail/' + openResult.notification.payload.additionalData._id;
                } else if (openResult.notification.payload.additionalData.type == "articleComment") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/notification-detail/' + openResult.notification.payload.additionalData.article._id;
                } else if (openResult.notification.payload.additionalData.type == "articleReply") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/notification-comment/' + openResult.notification.payload.additionalData.article._id;
                } else if (openResult.notification.payload.additionalData.type == "paymentBill") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/payment-infor/' + openResult.notification.payload.additionalData._id;
                } else if (openResult.notification.payload.additionalData.type == "paymentLog") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/payment-infor/' + openResult.notification.payload.additionalData.paymentBill;
                } else if (openResult.notification.payload.additionalData.type == "paymentComment") {
                  _utils_utils_service__WEBPACK_IMPORTED_MODULE_10__["UtilsService"].notificationNavigatorLink = '/payment-comment/' + openResult.notification.payload.additionalData.paymentBill;
                }
              }
            });
            this.oneSignal.iOSSettings({
              kOSSettingsKeyAutoPrompt: true,
              kOSSettingsKeyInAppLaunchURL: true
            });
            this.oneSignal.endInit();
            this.oneSignal.getIds().then(function (id) {
              localStorage.setItem('playID', id.userId);
              console.log(id);
              self.apiService.settingNotification({
                playerId: id.userId
              }).subscribe(function (result) {
                console.log("done " + id.userId);
              });
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_8__["CodePush"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 1,
        consts: [["main", ""], ["class", "backPopupLayput", 4, "ngIf"], [1, "backPopupLayput"], [1, "backPopup", 3, "click"], ["id", "popupThumbnail"], ["src", "../assets/icon/close.png", 1, "iconClose", 3, "click"], [1, "popupImage", 3, "src"], ["expand", "block", "type", "submit", 1, "transparentButton", "actitonButton", 3, "ngStyle", "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 7, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPopup == true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"]],
        styles: ["#popupThumbnail[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  z-index: 9999;\n}\n\n#popupButton[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10%;\n  width: 80%;\n  --background: rgb(255, 255, 255);\n  text-transform: none;\n  color: #ef6e92;\n  --background-activated: rgba(29, 25, 24, 0.5);\n  border-radius: 5px;\n  --border-radius: 5px;\n  padding: 0px 16px 0px 16px;\n}\n\n.iconClose[_ngcontent-%COMP%] {\n  width: 40px;\n  position: absolute;\n  right: -20px;\n  top: -20px;\n}\n\n.popupImage[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\nion-backdrop[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.backPopupLayput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  \n  position: fixed;\n  z-index: 1000;\n}\n\n.backPopup[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.6;\n}\n\n.transparentButton[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\n.actitonButton[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  border-radius: 10px;\n  position: absolute;\n  width: 80%;\n  margin-left: 10%;\n  bottom: -36px;\n  height: 50px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar, *[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBOztFQUVFLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb3B1cFRodW1ibmFpbHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuI3BvcHVwQnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDIzOSwxMTAsMTQ2KTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMjksIDI1LCAyNCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE2cHggMHB4IDE2cHg7XHJcbn1cclxuXHJcbi5pY29uQ2xvc2V7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICAgIHRvcDogLTIwcHg7XHJcbn1cclxuXHJcbi5wb3B1cEltYWdle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLWJhY2tkcm9we1xyXG4gICAgb3BhY2l0eTogMC41OztcclxufVxyXG5cclxuLmJhY2tQb3B1cExheXB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogLS1iYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0OyAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmJhY2tQb3B1cHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50QnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFjdGl0b25CdXR0b257XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgYm90dG9tOiAtMzZweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhcixcclxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
          }, {
            type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
          }, {
            type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
          }, {
            type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
          }, {
            type: _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_8__["CodePush"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
          }, {
            type: _translate_config_service__WEBPACK_IMPORTED_MODULE_9__["TranslateConfigService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "X07c":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/auth/apartment-code-register/apartment-code-register.page.ts ***!
      \************************************************************************************/

    /*! exports provided: ApartmentCodeRegisterPage */

    /***/
    function X07c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApartmentCodeRegisterPage", function () {
        return ApartmentCodeRegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ApartmentCodeRegisterPage_ion_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 12);
        }
      }

      function ApartmentCodeRegisterPage__svg_svg_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "circle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "animateTransform", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "animate", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "g", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "g", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "circle", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "animateTransform", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "animate", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "g", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "g", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "circle", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "animateTransform", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "animate", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "g", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "g", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "circle", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "animateTransform", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "animate", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "g", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "g", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "circle", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "animateTransform", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "animate", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "g", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "g", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "circle", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "animateTransform", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "animate", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "g", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "g", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "circle", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "animateTransform", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "animate", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "g", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "g", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "circle", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "animateTransform", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "animate", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ApartmentCodeRegisterPage_ion_col_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ApartmentCodeRegisterPage_ion_col_17_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var controlItem_r4 = ctx.$implicit;
            var i_r5 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.onKeyUp($event, controlItem_r4, i_r5);
          })("keydown", function ApartmentCodeRegisterPage_ion_col_17_Template_input_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.onKeyDown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var controlItem_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", controlItem_r4);
        }
      }

      function ApartmentCodeRegisterPage_ion_label_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "APARTMENT_CODE_REGISTER.wrong_code"));
        }
      }

      var ApartmentCodeRegisterPage = /*#__PURE__*/function () {
        function ApartmentCodeRegisterPage(apiService, loading, modalController, navParams) {
          _classCallCheck(this, ApartmentCodeRegisterPage);

          this.apiService = apiService;
          this.loading = loading;
          this.modalController = modalController;
          this.navParams = navParams;
          this.color = "gray";
          this.isHidden = false;
          this.codeSize = 6;
          this.isChecking = false;
          this.isError = false;
          this.initiateBuilder();
        }

        _createClass(ApartmentCodeRegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var stylebody = document.body.style;

            if (changes.color != undefined) {
              stylebody.setProperty('--borderColor', changes.color.currentValue);
            }

            if (changes.isHidden != undefined) {
              if (changes.isHidden.currentValue == false) {
                stylebody.setProperty('--charShape', 'none');
              } else {
                stylebody.setProperty('--charShape', 'disc');
              }
            }

            this.initiateBuilder();
          }
        }, {
          key: "initiateBuilder",
          value: function initiateBuilder() {
            this.pinCodeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});

            for (var i = 0; i < this.codeSize; i++) {
              var formController = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                value: '',
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
              this.pinCodeFormGroup.addControl('codeFiled' + i, formController);
            }

            var v_pinCodeArray = [];
            Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
              v_pinCodeArray.push(key);
            });
            this.pinCodeArray = v_pinCodeArray;
            this.pinCodeFormGroup.get('codeFiled0').enable();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var input = document.querySelectorAll('.pinCodeInput').item(0);
            input.focus();
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp($event, item, index) {
            var _this6 = this;

            var v_index;
            var reg = new RegExp("[A-Za-z0-9]");

            if ($event.key == "Backspace") {
              if (index == 0) {
                v_index = 0;
              } else {
                v_index = index - 1;
                this.pinCodeFormGroup.get('codeFiled' + index).disable();
              }
            } else {
              if (reg.test($event.target.value)) {
                if (index == this.codeSize - 1) {
                  v_index = this.codeSize - 1;
                } else {
                  v_index = index + 1;
                  this.pinCodeFormGroup.get('codeFiled' + v_index).enable();
                }
              }
            }

            var input = document.querySelectorAll('.pinCodeInput').item(v_index);
            input.focus();

            if (index == this.codeSize - 1 && $event.key != "Backspace") {
              var pinCodeValue = '';
              Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
                pinCodeValue += _this6.pinCodeFormGroup.value[key];
              });

              if (this.pinCodeFormGroup.valid) {
                this.checkingPincode(pinCodeValue);
              } else {}
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown($event) {
            if ($event.key != "Backspace") {
              if ($event.target.value.length == 1) {
                return false;
              }
            }
          }
        }, {
          key: "checkingPincode",
          value: function checkingPincode(pinCodeValue) {
            var _this7 = this;

            var self = this;
            this.isChecking = true;
            this.loading.present();
            this.apiService.addApartmentToUser(pinCodeValue.toUpperCase()).subscribe(function (result) {
              self.isError = false;
              self.loading.dismiss();
              self.finishPinCode();
            }, function (error) {
              _this7.isError = true;
              _this7.isChecking = false;
              self.loading.dismiss();
            });
          }
        }, {
          key: "finishPinCode",
          value: function finishPinCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      onClosedData = JSON.stringify({
                        result: "0",
                        message: "success"
                      });
                      _context6.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      onClosedData = JSON.stringify({
                        result: "1",
                        message: "cancel"
                      });
                      _context7.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return ApartmentCodeRegisterPage;
      }();

      ApartmentCodeRegisterPage.ɵfac = function ApartmentCodeRegisterPage_Factory(t) {
        return new (t || ApartmentCodeRegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]));
      };

      ApartmentCodeRegisterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ApartmentCodeRegisterPage,
        selectors: [["app-apartment-code-password"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 20,
        vars: 11,
        consts: [["slot", "start", 1, "btn-done", 3, "click"], ["lines", "none", 1, "image-item"], ["class", "image-icon-check", "src", "/assets/common/check-circle-o.png", 4, "ngIf"], ["class", "image-icon-check", "width", "75px", "height", "75px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", "style", "shape-rendering: auto; animation-play-state: running; animation-delay: 0s; background: none;", 4, "ngIf"], ["lines", "none", 1, "form-class", "note-style"], [1, "ion-text-wrap", "label-text"], ["lines", "none", 1, "padding-none", "margin-none"], [1, "pinCodeGrid"], [1, "form-class", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["lines", "none", 1, "form-class", "margin-none", "margin-top-16"], ["slot", "end", "class", "wrong-code", 4, "ngIf"], ["src", "/assets/common/check-circle-o.png", 1, "image-icon-check"], ["width", "75px", "height", "75px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 1, "image-icon-check", 2, "shape-rendering", "auto", "animation-play-state", "running", "animation-delay", "0s", "background", "none"], ["transform", "translate(80,50)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(0)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "1", "transform", "scale(1.04713 1.04713)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.875s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.875s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(71.21320343559643,71.21320343559643)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(45)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.875", "transform", "scale(1.05963 1.05963)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.75s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.75s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(50,80)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(90)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.75", "transform", "scale(1.07213 1.07213)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.625s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.625s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(28.786796564403577,71.21320343559643)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(135)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.625", "transform", "scale(1.08463 1.08463)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.5s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.5s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(20,50.00000000000001)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(180)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.5", "transform", "scale(1.09713 1.09713)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.375s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.375s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(28.78679656440357,28.786796564403577)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(225)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.375", "transform", "scale(1.00963 1.00963)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.25s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.25s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(49.99999999999999,20)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(270)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.25", "transform", "scale(1.02213 1.02213)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "-0.125s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "-0.125s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "translate(71.21320343559643,28.78679656440357)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["transform", "rotate(315)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["cx", "0", "cy", "0", "r", "10", "fill", "#fa7268", "fill-opacity", "0.125", "transform", "scale(1.03463 1.03463)", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "transform", "type", "scale", "begin", "0s", "values", "1.1 1.1;1 1", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", 2, "animation-play-state", "running", "animation-delay", "0s"], ["attributeName", "fill-opacity", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "values", "1;0", "begin", "0s", 2, "animation-play-state", "running", "animation-delay", "0s"], ["ng-pattern", "/^[A-Za-z0-9]*$/", "ng-maxlength", "1", "maxlength", "1", "type", "text", 1, "pinCodeInput", 3, "formControlName", "keyup", "keydown"], ["slot", "end", 1, "wrong-code"]],
        template: function ApartmentCodeRegisterPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApartmentCodeRegisterPage_Template_ion_buttons_click_1_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ApartmentCodeRegisterPage_ion_img_7_Template, 1, 0, "ion-img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ApartmentCodeRegisterPage__svg_svg_8_Template, 41, 0, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-grid", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ApartmentCodeRegisterPage_ion_col_17_Template, 2, 1, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ApartmentCodeRegisterPage_ion_label_19_Template, 3, 3, "ion-label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, "APARTMENT_CODE_REGISTER.btn_cancel"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "APARTMENT_CODE_REGISTER.apartmentcode_note"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.pinCodeFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pinCodeArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError == true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  width: 1% !important;\n}\n\n.pinCodeInput[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n  width: 100% !important;\n  min-height: 40px;\n  height: 100%;\n  border: 1px solid #c4c4c4;\n  font-size: 24px;\n  text-align: center;\n  -webkit-text-security: var(--charShape);\n  -moz-text-security: var(--charShape);\n  text-transform: uppercase;\n}\n\n.pinCodeGrid[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n\n.pinCodeInput[disabled][_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e3e3e3;\n  background-color: transparent;\n}\n\n.image-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.image-icon-check[_ngcontent-%COMP%] {\n  height: 66px;\n  width: 66px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.note-style[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  \n  color: #556080;\n}\n\n.btn-resend[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  color: #556080;\n}\n\n.btn-done[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  \n  color: #556080;\n}\n\n.wrong-code[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  \n  text-align: right;\n  color: #FFC144;\n}\n\n.margin-top-16[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9hcGFydG1lbnQtY29kZS1yZWdpc3Rlci9hcGFydG1lbnQtY29kZS1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUlBO0VBQ0csZ0NBQUE7RUFDQSw2QkFBQTtBQURIOztBQUlBO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFHQSxjQUFBO0FBSEo7O0FBTUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUdBLGNBQUE7QUFMSjs7QUFTQTtFQUNJLHNCQUFBO0VBQ0osa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBR0EsY0FBQTtBQVJBOztBQVlBO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUFWQTs7QUFjQTtFQUNJLGdCQUFBO0FBWEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2FwYXJ0bWVudC1jb2RlLXJlZ2lzdGVyL2FwYXJ0bWVudC1jb2RlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInJvb3R7XHJcbiAgICAtLWJvcmRlckNvbG9yOmdyYXk7XHJcbiAgICAtLWNoYXJTaGFwZTpub25lO1xyXG59XHJcblxyXG4uY29sOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6MSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpbkNvZGVJbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMjMsIDIxLCA0OCwgMC4xMDI1NDYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OnZhcigtLWNoYXJTaGFwZSk7XHJcbiAgICAtbW96LXRleHQtc2VjdXJpdHk6IHZhcigtLWNoYXJTaGFwZSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbn1cclxuXHJcblxyXG4ucGluQ29kZUdyaWR7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxufVxyXG5cclxuXHJcbi5waW5Db2RlSW5wdXRbZGlzYWJsZWRde1xyXG4gICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UzZTNlMztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtaWNvbi1jaGVjayB7XHJcbiAgICBoZWlnaHQ6IDY2cHg7XHJcbiAgICB3aWR0aDogNjZweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNsYXNzIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLm5vdGUtc3R5bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIC8qIG9yIDE3MSUgKi9cclxuXHJcblxyXG4gICAgY29sb3I6ICM1NTYwODA7XHJcbn1cclxuXHJcbi5idG4tcmVzZW5ke1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG5cclxuICAgIGNvbG9yOiAjNTU2MDgwO1xyXG5cclxufVxyXG5cclxuLmJ0bi1kb25le1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAyNHB4O1xyXG5saW5lLWhlaWdodDogMzNweDtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcblxyXG5jb2xvcjogIzU1NjA4MDtcclxuXHJcbn1cclxuXHJcbi53cm9uZy1jb2Rle1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogbm9ybWFsO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbmNvbG9yOiAjRkZDMTQ0O1xyXG5cclxufVxyXG5cclxuLm1hcmdpbi10b3AtMTZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApartmentCodeRegisterPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-apartment-code-password',
            templateUrl: './apartment-code-register.page.html',
            styleUrls: ['./apartment-code-register.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: LanguageLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageLoader", function () {
        return LanguageLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _translate_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./translate-config.service */
      "ZjVV");
      /* harmony import */


      var _inteceptors_inteceptors_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./inteceptors/inteceptors.service */
      "i7Ti");
      /* harmony import */


      var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/native-page-transitions/ngx */
      "CicV");
      /* harmony import */


      var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/onesignal/ngx */
      "wljF");
      /* harmony import */


      var _pages_pincode_password_pincode_password_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/pincode-password/pincode-password.module */
      "CXCh");
      /* harmony import */


      var _pages_auth_pincode_register_pincode_register_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/auth/pincode-register/pincode-register.module */
      "3oyl");
      /* harmony import */


      var _pages_auth_apartment_code_register_apartment_code_register_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/auth/apartment-code-register/apartment-code-register.module */
      "sWRi");
      /* harmony import */


      var _components_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/confirm-modal/confirm-modal.module */
      "5eKa");
      /* harmony import */


      var _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/code-push/ngx */
      "bFSS");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "KqBo");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "Wwn5");
      /* harmony import */


      var _ionic_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ionic/core */
      "MTcp");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @ionic-native/clipboard/ngx */
      "zzaN"); // import { NativeStorage } from '@ionic-native/native-storage/ngx';
      //import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


      function LanguageLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_13__["NativePageTransitions"], _translate_config_service__WEBPACK_IMPORTED_MODULE_11__["TranslateConfigService"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__["OneSignal"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__["InAppBrowser"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_21__["Camera"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_26__["CallNumber"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_23__["HTTP"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_22__["File"], _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_19__["CodePush"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _inteceptors_inteceptors_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
          multi: true
        }, _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_29__["Clipboard"] // NativeStorage
        ],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot({
          mode: 'ios',
          navAnimation: _ionic_core__WEBPACK_IMPORTED_MODULE_27__["mdTransitionAnimation"]
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_25__["SuperTabsModule"].forRoot(), _pages_pincode_password_pincode_password_module__WEBPACK_IMPORTED_MODULE_15__["PincodePasswordPageModule"], _pages_auth_pincode_register_pincode_register_module__WEBPACK_IMPORTED_MODULE_16__["PincodeRegisterPageModule"], _pages_auth_apartment_code_register_apartment_code_register_module__WEBPACK_IMPORTED_MODULE_17__["ApartmentCodeRegisterPageModule"], _components_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_18__["ConfirmModalPageModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], //NgbModule, 
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: LanguageLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_25__["SuperTabsModule"], _pages_pincode_password_pincode_password_module__WEBPACK_IMPORTED_MODULE_15__["PincodePasswordPageModule"], _pages_auth_pincode_register_pincode_register_module__WEBPACK_IMPORTED_MODULE_16__["PincodeRegisterPageModule"], _pages_auth_apartment_code_register_apartment_code_register_module__WEBPACK_IMPORTED_MODULE_17__["ApartmentCodeRegisterPageModule"], _components_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_18__["ConfirmModalPageModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot({
              mode: 'ios',
              navAnimation: _ionic_core__WEBPACK_IMPORTED_MODULE_27__["mdTransitionAnimation"]
            }), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_25__["SuperTabsModule"].forRoot(), _pages_pincode_password_pincode_password_module__WEBPACK_IMPORTED_MODULE_15__["PincodePasswordPageModule"], _pages_auth_pincode_register_pincode_register_module__WEBPACK_IMPORTED_MODULE_16__["PincodeRegisterPageModule"], _pages_auth_apartment_code_register_apartment_code_register_module__WEBPACK_IMPORTED_MODULE_17__["ApartmentCodeRegisterPageModule"], _components_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_18__["ConfirmModalPageModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], //NgbModule, 
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                useFactory: LanguageLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
              }
            }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"]],
            providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_13__["NativePageTransitions"], _translate_config_service__WEBPACK_IMPORTED_MODULE_11__["TranslateConfigService"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_14__["OneSignal"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_20__["InAppBrowser"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_21__["Camera"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_26__["CallNumber"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_23__["HTTP"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_22__["File"], _ionic_native_code_push_ngx__WEBPACK_IMPORTED_MODULE_19__["CodePush"], {
              provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
              useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicRouteStrategy"]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
              useClass: _inteceptors_inteceptors_service__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
              multi: true
            }, _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_29__["Clipboard"] // NativeStorage
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZjVV":
    /*!*********************************************!*\
      !*** ./src/app/translate-config.service.ts ***!
      \*********************************************/

    /*! exports provided: TranslateConfigService */

    /***/
    function ZjVV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function () {
        return TranslateConfigService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb"); // translate-config.service.ts


      var TranslateConfigService = /*#__PURE__*/function () {
        function TranslateConfigService(translate) {
          _classCallCheck(this, TranslateConfigService);

          this.translate = translate;
        }

        _createClass(TranslateConfigService, [{
          key: "getDefaultLanguage",
          value: function getDefaultLanguage() {
            var defaultLang = localStorage.getItem('lang');

            if (defaultLang && (defaultLang == "vi" || defaultLang == 'en')) {
              console.log(defaultLang);
              this.translate.setDefaultLang(defaultLang);
              return defaultLang;
            } else {
              var language = 'vi';
              console.log(language);
              this.translate.setDefaultLang(language);
              return language;
            }
          }
        }, {
          key: "setLanguageDefault",
          value: function setLanguageDefault() {
            this.setLanguage(this.getDefaultLanguage());
          }
        }, {
          key: "setLanguage",
          value: function setLanguage(setLang) {
            this.translate.use(setLang);
          }
        }]);

        return TranslateConfigService;
      }();

      TranslateConfigService.ɵfac = function TranslateConfigService_Factory(t) {
        return new (t || TranslateConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      TranslateConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TranslateConfigService,
        factory: TranslateConfigService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateConfigService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "i7Ti":
    /*!****************************************************!*\
      !*** ./src/app/inteceptors/inteceptors.service.ts ***!
      \****************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function i7Ti(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(router) {
          _classCallCheck(this, TokenInterceptor);

          this.router = router;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var token = localStorage.getItem('token');

            if (token) {
              request = request.clone({
                setHeaders: {
                  Authorization: 'Bearer ' + token
                }
              });
            } // if (!request.headers.has('Content-Type')) {
            //   request = request.clone({
            //     setHeaders: {
            //       'content-type': 'application/json',
            //     }
            //   });
            // }


            request = request.clone({
              headers: request.headers.set('Accept', 'application/json')
            });
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {// console.log('event--->>>', event);
              }

              return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              console.log(error.message);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }));
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 3],
        "./ion-alert.entry.js": ["Q8AI", "common", 4],
        "./ion-app_8.entry.js": ["hgI1", "common", 5],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 6],
        "./ion-back-button.entry.js": ["Nt02", "common", 7],
        "./ion-backdrop.entry.js": ["Q2Bp", 8],
        "./ion-button_2.entry.js": ["0Pbj", "common", 9],
        "./ion-card_5.entry.js": ["ydQj", "common", 10],
        "./ion-checkbox.entry.js": ["4fMi", "common", 11],
        "./ion-chip.entry.js": ["czK9", "common", 12],
        "./ion-col_3.entry.js": ["/CAe", 13],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 14],
        "./ion-fab_3.entry.js": ["uQcF", "common", 15],
        "./ion-img.entry.js": ["wHD8", 16],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 17],
        "./ion-input.entry.js": ["ercB", "common", 18],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 19],
        "./ion-item_8.entry.js": ["9bur", "common", 20],
        "./ion-loading.entry.js": ["cABk", "common", 21],
        "./ion-menu_3.entry.js": ["kyFE", "common", 22],
        "./ion-modal.entry.js": ["TvZU", "common", 23],
        "./ion-nav_2.entry.js": ["vnES", "common", 24],
        "./ion-popover.entry.js": ["qCuA", "common", 25],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 26],
        "./ion-radio_2.entry.js": ["h11V", "common", 27],
        "./ion-range.entry.js": ["XGij", "common", 28],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 29],
        "./ion-reorder_2.entry.js": ["smMY", "common", 30],
        "./ion-ripple-effect.entry.js": ["STjf", 31],
        "./ion-route_4.entry.js": ["k5eQ", "common", 32],
        "./ion-searchbar.entry.js": ["OR5t", "common", 33],
        "./ion-segment_2.entry.js": ["fSgp", "common", 34],
        "./ion-select_3.entry.js": ["lfGF", "common", 35],
        "./ion-slide_2.entry.js": ["5xYT", 36],
        "./ion-spinner.entry.js": ["nI0H", "common", 37],
        "./ion-split-pane.entry.js": ["NAQR", 38],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 39],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 40],
        "./ion-text.entry.js": ["ISmu", "common", 41],
        "./ion-textarea.entry.js": ["U7LX", "common", 42],
        "./ion-toast.entry.js": ["L3sA", "common", 43],
        "./ion-toggle.entry.js": ["IUOf", "common", 44],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 45]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "kyzu":
    /*!*************************************************!*\
      !*** ./src/app/services/alert/alert.service.ts ***!
      \*************************************************/

    /*! exports provided: AlertService */

    /***/
    function kyzu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(toastController) {
          _classCallCheck(this, AlertService);

          this.toastController = toastController;
        }

        _createClass(AlertService, [{
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 3000,
                        position: 'top',
                        color: 'dark'
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ɵfac = function AlertService_Factory(t) {
        return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]));
      };

      AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AlertService,
        factory: AlertService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oZWX":
    /*!*********************************************!*\
      !*** ./src/app/services/api/api.service.ts ***!
      \*********************************************/

    /*! exports provided: ApiService */

    /***/
    function oZWX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../env.service */
      "5zL6");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "XSEc");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, httpNative) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.httpNative = httpNative;
        }

        _createClass(ApiService, [{
          key: "getListArticle",
          value: function getListArticle(page, limit, category, search) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('category', category).set('search', search).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].articles, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListArticleComment",
          value: function getListArticleComment(page, limit, article, search) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('article', article).set('search', search).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].articlesComment, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "sendArticleComment",
          value: function sendArticleComment(params, articleID) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].addArticlesComment + articleID, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "sendArticleReply",
          value: function sendArticleReply(params, commentId) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].sendArticleReply + commentId, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getArticleDetail",
          value: function getArticleDetail(articleID) {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].articlesDetail + articleID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListPayment",
          value: function getListPayment(page, limit, category, search) {
            var status = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('category', category).set('search', search).set('_v', new Date().getTime().toString());

            if (status) {
              params = params.set('filter[status]', status);
            }

            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].payments, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getPaymentDetail",
          value: function getPaymentDetail(paymentID) {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].paymentDetail + paymentID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListPaymentComment",
          value: function getListPaymentComment(paymentBill) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('paymentBill', paymentBill).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].paymentComment, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "sendPaymentComment",
          value: function sendPaymentComment(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].paymentComment, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListRequest",
          value: function getListRequest(page, limit, category, search) {
            var status = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('category', category).set('search', search).set('_v', new Date().getTime().toString());

            if (status) {
              params = params.set('filter[status]', status);
            }

            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedbacks, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListRequestRegister",
          value: function getListRequestRegister(page, limit, category, search) {
            var status = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('category', category).set('search', search).set('_v', new Date().getTime().toString());

            if (status) {
              params = params.set('filter[status]', status);
            }

            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedbacksnew, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getPopupConfig",
          value: function getPopupConfig() {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].popupConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "countNotificationUserClick",
          value: function countNotificationUserClick(notificationId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].countNotificationConfig + notificationId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "countUserButtonPost",
          value: function countUserButtonPost(postId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].countPostClick + postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "countUserPopupConfigClick",
          value: function countUserPopupConfigClick(popupId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].countPopupConfigClick + popupId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getFeedbackCategory",
          value: function getFeedbackCategory(apartmentID) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('apartment', apartmentID).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedbacksCategory, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "addFeedback",
          value: function addFeedback(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedback_addnew, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "addFeedbackNew",
          value: function addFeedbackNew(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedbacknew_addnew, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getRequestDetail",
          value: function getRequestDetail(requestID) {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedbacksDetail + requestID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getRequestNewDetail",
          value: function getRequestNewDetail(requestID) {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedbacksNewDetail + requestID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListServiceGroup",
          value: function getListServiceGroup() {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].serviceGroup, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListServiceCategory",
          value: function getListServiceCategory(servicegroupID) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('group', servicegroupID).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].serviceCategory, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListServiceByGroup",
          value: function getListServiceByGroup(servicesGroupID) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', servicesGroupID).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].services, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListServiceLogs",
          value: function getListServiceLogs() {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].serviceLog, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "addServiceLog",
          value: function addServiceLog(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].serviceLog, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getServiceDetail",
          value: function getServiceDetail(serviceID) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].serviceDetail + serviceID, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getPosts",
          value: function getPosts(page, limit, category, search) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('search', search).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getPost, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getPosteDetail",
          value: function getPosteDetail(postID) {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].postDetail + postID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListUserApartment",
          value: function getListUserApartment() {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].apartment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getUserApartment",
          value: function getUserApartment(apartmentID) {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].apartmentDetail + apartmentID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].updateProfile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "updateUserProfile",
          value: function updateUserProfile(params) {
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].updateProfile, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "changePassword",
          value: function changePassword(params) {
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].changePassword, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].resetPassword, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "settingNotification",
          value: function settingNotification(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].notification, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword(phoneNumber) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].forgotPassword, {
              phone: phoneNumber
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "verifyTokenCode",
          value: function verifyTokenCode(phone, token) {
            var params = {
              phone: phone,
              token: token
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].confirmTokenCode, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "resentRegisterCode",
          value: function resentRegisterCode(phone) {
            var params = {
              phone: phone
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].register, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "confirmRegisterCode",
          value: function confirmRegisterCode(phone, code) {
            var params = {
              phone: phone,
              code: code
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].confirmSMSCode, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "confirmApartmentCode",
          value: function confirmApartmentCode(phone, ref, token, password) {
            var params = {
              phone: phone,
              ref: ref,
              password: password,
              code: token
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].confirm, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "addApartmentToUser",
          value: function addApartmentToUser(activeCode) {
            var params = {
              apartment: activeCode
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].apartment, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "userClickStatistic",
          value: function userClickStatistic(screenID) {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].userStatistic + screenID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListFeedbackReply",
          value: function getListFeedbackReply(feedbackID) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', '1').set('limit', '20').set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedback_reply + feedbackID, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListFeedbackNewReply",
          value: function getListFeedbackNewReply(feedbackID) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', '1').set('limit', '20').set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedbacknew_reply + feedbackID, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "addFeedbackReply",
          value: function addFeedbackReply(feedbackID, params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedback_reply + feedbackID, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "addFeedbackNewReply",
          value: function addFeedbackNewReply(feedbackID, params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].feedbacknew_reply + feedbackID, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(payload) {
            // const token = localStorage.getItem('token');
            // const headers = {
            //   Authorization: 'Bearer ' + token
            // };
            //this.httpNative.post(EnvService.media_addFile, payload, headers);
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].media_addFile, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getDataServicePromotionCode",
          value: function getDataServicePromotionCode() {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].servicePromotionCode, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getDataServiceShopProduct",
          value: function getDataServiceShopProduct(search_id) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('requestShopProduct', search_id).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].serviceShopProduct, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getDataUserShop",
          value: function getDataUserShop(page, limit, search) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('search', search).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getUserShopTopData, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getDataUserShopByCategory",
          value: function getDataUserShopByCategory(page, limit, category) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('category', category).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getUserShopByCategory, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getDataShopProductCategory",
          value: function getDataShopProductCategory() {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getShopProductCategory, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "postRequestionCreateUserShop",
          value: function postRequestionCreateUserShop(category, title, note) {
            var params = {
              category: category,
              title: title,
              note: note
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getUserShop, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "postRequestionOrderProduct",
          value: function postRequestionOrderProduct(orderInfor, paymentMode, appartment, timeDeliver, phone, note, requestShopProduct, address, latlng) {
            var params = {
              orderInfor: orderInfor,
              paymentMode: paymentMode,
              appartment: appartment,
              timeDeliver: timeDeliver,
              phone: phone,
              note: note,
              requestShopProduct: requestShopProduct,
              address: address,
              latlng: latlng
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getOrderHistory, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListOrderHistorys",
          value: function getListOrderHistorys(page, limit, category, search) {
            var status = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('category', category).set('search', search).set('_v', new Date().getTime().toString());

            if (status) {
              params = params.set('filter[status]', status);
            }

            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getOrderHistory, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListOrderHistorysByProvider",
          value: function getListOrderHistorysByProvider() {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getOrderHistoryByProvider, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListOrderHistoryComment",
          value: function getListOrderHistoryComment(orderHistoryId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('orderHistoryId', orderHistoryId).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].orderHistoryComment, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "postOrderHistoryComment",
          value: function postOrderHistoryComment(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].orderHistoryComment, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getDataCheckShopOwner",
          value: function getDataCheckShopOwner() {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getUserShopCheckShopOwner, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "putOrderHistoryProviderFinish",
          value: function putOrderHistoryProviderFinish(orderHistoryId) {
            var params = {
              orderHistoryId: orderHistoryId
            };
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].putOrderHistoryProviderFinish, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "putOrderHistoryProviderConfirm",
          value: function putOrderHistoryProviderConfirm(orderHistoryId) {
            var params = {
              orderHistoryId: orderHistoryId
            };
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].putOrderHistoryProviderConfirm, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "putOrderHistoryUserConfirm",
          value: function putOrderHistoryUserConfirm(orderHistoryId) {
            var params = {
              orderHistoryId: orderHistoryId
            };
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].putOrderHistoryUserConfirm, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "putOrderHistoryUserComplain",
          value: function putOrderHistoryUserComplain(orderHistoryId, userComplain) {
            var params = {
              orderHistoryId: orderHistoryId,
              userComplain: userComplain
            };
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].putOrderHistoryUserComplain, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "addApartmentMember",
          value: function addApartmentMember(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].apartmentMember, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "deleteApartmentMember",
          value: function deleteApartmentMember(params) {
            return this.http.request('delete', _env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].apartmentMember, {
              body: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "deleteApartmentVehicle",
          value: function deleteApartmentVehicle(params) {
            return this.http.request('delete', _env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].apartmentVehicle, {
              body: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getListPaymentCategory",
          value: function getListPaymentCategory() {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].paymentCategory, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "postPayTheBill",
          value: function postPayTheBill(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].paymentLog, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getPayTheBillHistory",
          value: function getPayTheBillHistory(paymentBill) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('paymentBill', paymentBill).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].paymentLog, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "postUserComment",
          value: function postUserComment(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].userComment, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "postUpdateAvatar",
          value: function postUpdateAvatar(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].updateAvatar, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // ==================  api  ví điện tử ============================
          // đăng kí thông tin mapping account
          // registerEpay(): Observable<any> {
          //   return this.http.post(EnvService.registerEpay, {}).pipe(map((results) => results));
          // }
          // lay thong tin tai khoan
          // getEpayUser(): Observable<any> {
          //   return this.http.post(EnvService.getEpayUser, {}).pipe(
          //     tap(async (result) => {
          //       if (result && result.user_info) {
          //         this.setEpayUserStored(result);
          //       } else {
          //         this.setEpayUserStored('');
          //       }
          //       return result;
          //     })
          //   );
          // }
          // nap tien vao tk ( cần liên kết tk ngân hang để nạp tiên)
          // epayRechargeUrl(amount: number): Observable<any> {
          //   const params = {
          //     amount: amount,
          //   };
          //   return this.http.post(EnvService.epayRechargeUrl, params).pipe(map((results) => results));
          // }
          // // thanh toan tiền
          // epaypayment(amount: number): Observable<any> {
          //   const params = {
          //     amount: amount,
          //   };
          //   return this.http.post(EnvService.epaypayment, params).pipe(map((results) => results));
          // }
          // // xac nhan hoặc hủy thanh toan tiền : 1: xác nhận thanh toán, -1: hủy thanh toán
          // epayPageApproved(status: number, transId: string): Observable<any> {
          //   const params = {
          //     confirm_stt: status,
          //     trans_id: transId,
          //   };
          //   return this.http.post(EnvService.epayPageApproved, params).pipe(map((results) => results));
          // }
          // getEpayUserStored() {
          //   const epayUser = localStorage.getItem('epay-user-stored');
          //   if (!epayUser) {
          //     return null;
          //   }
          //   return JSON.parse(epayUser);
          // }
          // setEpayUserStored(data) {
          //   localStorage.setItem('epay-user-stored', JSON.stringify(data || ''));
          // }
          // thanh toan tiền

        }, {
          key: "momoPayment",
          value: function momoPayment(amount) {
            var params = {
              amount: amount
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].momoPayment, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "postPostLike",
          value: function postPostLike(postId, statusLike) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].postLike + postId, {
              statusLike: statusLike
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "sendPostComment",
          value: function sendPostComment(params, articleID) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].addPostComment + articleID, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "sendPostReply",
          value: function sendPostReply(params, articleID) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].addPostCommentReply + articleID, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "postArticleLike",
          value: function postArticleLike(articleId, statusLike) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].articleLike + articleId, {
              statusLike: statusLike
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "getBanner",
          value: function getBanner() {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getBanner, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // ========================== Service shop V2 API's ===================================== //
          // Shop house category list

        }, {
          key: "getListShopHouseCateV2",
          value: function getListShopHouseCateV2() {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].shopHouseCategoryV2, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // Shop house sub categories list

        }, {
          key: "getListSubCateV2",
          value: function getListSubCateV2(cateId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', cateId).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].shopHouseSubCategpryV2, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // List shops by sub category

        }, {
          key: "getListShopV2",
          value: function getListShopV2(subcategory) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', subcategory).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].shopHouseV2, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // shophouse info detail

        }, {
          key: "getShopDetailV2",
          value: function getShopDetailV2(shophouseId) {
            return this.http.get("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].shopHouseV2, "/").concat(shophouseId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get shophouse of user

        }, {
          key: "getShopOfUserV2",
          value: function getShopOfUserV2() {
            return this.http.get("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].shopHouseV2, "/check-shop-owner")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get top shophouse of user

        }, {
          key: "getTopShopOfUserV2",
          value: function getTopShopOfUserV2() {
            return this.http.get("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].shopHouseV2, "/top/data")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // Register shop

        }, {
          key: "registerShopV2",
          value: function registerShopV2(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].shopHouseV2, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // request house sale

        }, {
          key: "requestHouseSaleV2",
          value: function requestHouseSaleV2(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].requestHouseSaleV2, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get tag of shop

        }, {
          key: "getTagsOfShopV2",
          value: function getTagsOfShopV2() {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].tagShopV2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // search shop by tags , cate

        }, {
          key: "searchShopByTagsAndCateV2",
          value: function searchShopByTagsAndCateV2(page, limit, tags, categories, orderMode) {
            var params = {
              tags: tags,
              categories: categories,
              page: page,
              limit: limit,
              orderMode: orderMode
            };
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].searchShop, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // List product of shop

        }, {
          key: "getProductShopV2",
          value: function getProductShopV2(shopId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('shopHouse', shopId).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].productShopV2, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // Product of detail

        }, {
          key: "getProducDetailV2",
          value: function getProducDetailV2(productId) {
            return this.http.get("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].productShopV2, "/").concat(productId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // count userview of shop

        }, {
          key: "getCountViewOfShopV2",
          value: function getCountViewOfShopV2(shopId) {
            return this.http.get("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].productShopV2, "/user-view/").concat(shopId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get comment shop

        }, {
          key: "getcommentShopV2",
          value: function getcommentShopV2(shopId) {
            return this.http.get("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].commentShopV2, "/").concat(shopId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // post comment shop

        }, {
          key: "postCommentShopV2",
          value: function postCommentShopV2(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].commentShopV2, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // post comment shop

        }, {
          key: "replyCommentShopV2",
          value: function replyCommentShopV2(commentId, params) {
            return this.http.post("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].replycommentShopV2, "/").concat(commentId), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get evaluations of Shop

        }, {
          key: "getEvaluationShopV2",
          value: function getEvaluationShopV2(shopId) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('_v', new Date().getTime().toString());
            return this.http.get("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].getEvaluationShopV2, "/").concat(shopId), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // order

        }, {
          key: "requestionOrderProductV2",
          value: function requestionOrderProductV2(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].orderShopV2, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get order history

        }, {
          key: "getListOrderHistorysV2",
          value: function getListOrderHistorysV2(page, limit, category, search) {
            var status = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('category', category).set('search', search).set('_v', new Date().getTime().toString());

            if (status) {
              params = params.set('filter[status]', status);
            }

            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].orderShopV2, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get shop of user

        }, {
          key: "getDataUserShopV2",
          value: function getDataUserShopV2(page, limit, search) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', page.toString()).set('limit', limit.toString()).set('search', search).set('_v', new Date().getTime().toString());
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].userShopTopData, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get comment shop

        }, {
          key: "getcommentOrderV2",
          value: function getcommentOrderV2(orderId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('orderHistoryId', orderId);
            return this.http.get("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].commentOrderV2), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // post comment shop

        }, {
          key: "postCommentOrderV2",
          value: function postCommentOrderV2(params) {
            return this.http.post(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].commentOrderV2, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // post comment shop

        }, {
          key: "replyCommentOrderV2",
          value: function replyCommentOrderV2(params) {
            return this.http.post("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].replycommentOrderV2), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // rating

        }, {
          key: "putOrderProductRateStarUser",
          value: function putOrderProductRateStarUser(orderHistoryId, stars, userComment) {
            var params = {
              orderHistoryId: orderHistoryId,
              stars: stars,
              userComment: userComment
            };
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].putOrderHistoryRateStarUser, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "putOrderProductRateStarShop",
          value: function putOrderProductRateStarShop(orderHistoryId, stars, userComment) {
            var params = {
              orderHistoryId: orderHistoryId,
              stars: stars,
              userComment: userComment
            };
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].putOrderHistoryRateStarShop, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // cancel order

        }, {
          key: "putOrderProductCancelUser",
          value: function putOrderProductCancelUser(orderHistoryId) {
            var params = {
              orderHistoryId: orderHistoryId
            };
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].putOrderHistoryCancelUser, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }, {
          key: "putOrderProductCancelProvider",
          value: function putOrderProductCancelProvider(orderHistoryId) {
            var params = {
              orderHistoryId: orderHistoryId
            };
            return this.http.put(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].putOrderHistoryCancelProvider, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // change time delivery

        }, {
          key: "changeTimeDeliveryOrder",
          value: function changeTimeDeliveryOrder(orderHistoryId, timeDeliver) {
            var params = {
              timeDeliver: timeDeliver
            };
            return this.http.put("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].changeTimeDeliveryOrder, "/").concat(orderHistoryId), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get promotion code banner

        }, {
          key: "promotionCodeBanner",
          value: function promotionCodeBanner() {
            return this.http.get(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].promotionCodeBanner).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          } // get survey

        }, {
          key: "postSurvey",
          value: function postSurvey(surveyId, surveyResult) {
            var params = {
              surveyResult: JSON.stringify(surveyResult)
            };
            return this.http.post("".concat(_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"].postSurvey, "/").concat(surveyId), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
              return results;
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sWRi":
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/auth/apartment-code-register/apartment-code-register.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ApartmentCodeRegisterPageModule */

    /***/
    function sWRi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApartmentCodeRegisterPageModule", function () {
        return ApartmentCodeRegisterPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _apartment_code_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./apartment-code-register.page */
      "X07c");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _apartment_code_register_page__WEBPACK_IMPORTED_MODULE_5__["ApartmentCodeRegisterPage"]
      }];

      var ApartmentCodeRegisterPageModule = function ApartmentCodeRegisterPageModule() {
        _classCallCheck(this, ApartmentCodeRegisterPageModule);
      };

      ApartmentCodeRegisterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ApartmentCodeRegisterPageModule
      });
      ApartmentCodeRegisterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ApartmentCodeRegisterPageModule_Factory(t) {
          return new (t || ApartmentCodeRegisterPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApartmentCodeRegisterPageModule, {
          declarations: [_apartment_code_register_page__WEBPACK_IMPORTED_MODULE_5__["ApartmentCodeRegisterPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApartmentCodeRegisterPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_apartment_code_register_page__WEBPACK_IMPORTED_MODULE_5__["ApartmentCodeRegisterPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      }, {
        path: 'landing',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-landing-landing-module */
          [__webpack_require__.e("default~pages-landing-landing-module~pages-popup-pincode-register-popup-pincode-register-module"), __webpack_require__.e("pages-landing-landing-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/landing/landing.module */
          "CXjK")).then(function (m) {
            return m.LandingPageModule;
          });
        }
      }, {
        path: 'login/:phone',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-login-login-module */
          "pages-auth-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/login/login.module */
          "qdgq")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'register-password/:phone/:token/:refCode',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-register-password-register-password-module */
          "pages-auth-register-password-register-password-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/register-password/register-password.module */
          "Zz1L")).then(function (m) {
            return m.RegisterPasswordPageModule;
          });
        }
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-dashboard-dashboard-module */
          "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./pages/dashboard/dashboard.module */
          "/2RN")).then(function (m) {
            return m.DashboardPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-forgot-password-forgot-password-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-popup-pincode-password-popup-pincode-pass~9921a548"), __webpack_require__.e("pages-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/forgot-password/forgot-password.module */
          "7CEM")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'new-password/:phone/:token',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-new-password-new-password-module */
          "pages-new-password-new-password-module").then(__webpack_require__.bind(null,
          /*! ./pages/new-password/new-password.module */
          "UHzO")).then(function (m) {
            return m.NewPasswordPageModule;
          });
        }
      }, {
        path: 'pincode-password',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/pincode-password/pincode-password.module */
          "CXCh")).then(function (m) {
            return m.PincodePasswordPageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-notification-notification-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("notification-notification-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/notification/notification.module */
          "UUPU")).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'notification-detail/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-notification-detail-notification-detail-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-new-detail-new-detail-module~pages-notification-detail-notification-detail-module~page~2c467832"), __webpack_require__.e("pages-notification-detail-notification-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/notification-detail/notification-detail.module */
          "cRUX")).then(function (m) {
            return m.NotificationDetailPageModule;
          });
        }
      }, {
        path: 'notification-comment/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-notification-comment-notification-comment-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("pages-notification-comment-notification-comment-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/notification-comment/notification-comment.module */
          "0dbA")).then(function (m) {
            return m.NotificationCommentPageModule;
          });
        }
      }, {
        path: 'service-categories-list/:categoryId/:categoryName',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-service-categories-list-service-categories-list-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("pages-service-categories-list-service-categories-list-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/service-categories-list/service-categories-list.module */
          "o8v/")).then(function (m) {
            return m.ServiceCategoriesListPageModule;
          });
        }
      }, {
        path: 'service-list-by-category/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-service-list-by-category-service-list-by-category-module */
          "pages-service-list-by-category-service-list-by-category-module").then(__webpack_require__.bind(null,
          /*! ./pages/service-list-by-category/service-list-by-category.module */
          "BCuW")).then(function (m) {
            return m.ServiceListByCategoryPageModule;
          });
        }
      }, {
        path: 'new-detail/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-new-detail-new-detail-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-new-detail-new-detail-module~pages-notification-detail-notification-detail-module~page~2c467832"), __webpack_require__.e("pages-new-detail-new-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/new-detail/new-detail.module */
          "ZeRj")).then(function (m) {
            return m.NewDetailPageModule;
          });
        }
      }, {
        path: 'payment-infor/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-infor-payment-infor-module */
          [__webpack_require__.e("default~pages-payment-infor-payment-infor-module~pages-popup-complain-popup-complain-module"), __webpack_require__.e("pages-payment-infor-payment-infor-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment-infor/payment-infor.module */
          "fmpE")).then(function (m) {
            return m.PaymentInforPageModule;
          });
        }
      }, {
        path: 'payment-comment/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-comment-payment-comment-module */
          "pages-payment-comment-payment-comment-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment-comment/payment-comment.module */
          "GwUG")).then(function (m) {
            return m.PaymentCommentPageModule;
          });
        }
      }, {
        path: 'payment-confirm/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-confirm-payment-confirm-module */
          [__webpack_require__.e("default~pages-payment-confirm-payment-confirm-module~pages-popup-payment-function-popup-payment-func~ed31a5a5"), __webpack_require__.e("default~pages-payment-confirm-payment-confirm-module~pages-popup-payment-success-popup-payment-success-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-payment-confirm-payment-confirm-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment-confirm/payment-confirm.module */
          "mZDy")).then(function (m) {
            return m.PaymentConfirmPageModule;
          });
        }
      }, {
        path: 'request-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-request-detail-request-detail-module */
          "pages-request-detail-request-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/request-detail/request-detail.module */
          "RfDh")).then(function (m) {
            return m.RequestDetailPageModule;
          });
        }
      }, {
        path: 'request-register-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-request-register-detail-request-register-detail-module */
          "pages-request-register-detail-request-register-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/request-register-detail/request-register-detail.module */
          "8O0I")).then(function (m) {
            return m.RequestRegisterDetailPageModule;
          });
        }
      }, {
        path: 'service-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-service-detail-service-detail-module */
          "pages-service-detail-service-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/service-detail/service-detail.module */
          "IkRN")).then(function (m) {
            return m.ServiceDetailPageModule;
          });
        }
      }, {
        path: 'order-service/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-order-service-order-service-module */
          "pages-order-service-order-service-module").then(__webpack_require__.bind(null,
          /*! ./pages/order-service/order-service.module */
          "ez0X")).then(function (m) {
            return m.OrderServicePageModule;
          });
        }
      }, {
        path: 'add-request',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-add-request-add-request-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-add-request-add-request-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/add-request/add-request.module */
          "VpPe")).then(function (m) {
            return m.AddRequestPageModule;
          });
        }
      }, {
        path: 'bill-payment/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-bill-payment-bill-payment-module */
          "pages-bill-payment-bill-payment-module").then(__webpack_require__.bind(null,
          /*! ./pages/bill-payment/bill-payment.module */
          "48Ox")).then(function (m) {
            return m.BillPaymentPageModule;
          });
        }
      }, {
        path: 'my-home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-my-home-my-home-module */
          [__webpack_require__.e("default~pages-my-home-my-home-module~pages-popup-building-management-phone-popup-building-management~a02c344f"), __webpack_require__.e("pages-my-home-my-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/my-home/my-home.module */
          "nE08")).then(function (m) {
            return m.MyHomePageModule;
          });
        }
      }, {
        path: 'my-home-detail/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-my-home-detail-my-home-detail-module */
          [__webpack_require__.e("default~pages-my-home-detail-my-home-detail-module~pages-popup-delete-vehicle-popup-delete-vehicle-module"), __webpack_require__.e("pages-my-home-detail-my-home-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/my-home-detail/my-home-detail.module */
          "GXVj")).then(function (m) {
            return m.MyHomeDetailPageModule;
          });
        }
      }, {
        path: 'my-account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-my-account-my-account-module */
          [__webpack_require__.e("default~pages-my-account-my-account-module~pages-popup-feedback-popup-feedback-module"), __webpack_require__.e("default~pages-my-account-my-account-module~pages-popup-hotline-popup-hotline-module"), __webpack_require__.e("default~pages-my-account-my-account-module~pages-popup-change-language-popup-change-language-module"), __webpack_require__.e("default~pages-my-account-my-account-module~pages-popup-logout-popup-logout-module"), __webpack_require__.e("pages-my-account-my-account-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/my-account/my-account.module */
          "/u1B")).then(function (m) {
            return m.MyAccountPageModule;
          });
        }
      }, {
        path: 'setting',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-setting-setting-module */
          "pages-setting-setting-module").then(__webpack_require__.bind(null,
          /*! ./pages/setting/setting.module */
          "hBK9")).then(function (m) {
            return m.SettingPageModule;
          });
        }
      }, {
        path: 'change-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-change-password-change-password-module */
          "pages-change-password-change-password-module").then(__webpack_require__.bind(null,
          /*! ./pages/change-password/change-password.module */
          "wdPO")).then(function (m) {
            return m.ChangePasswordPageModule;
          });
        }
      }, {
        path: 'family/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-family-family-module */
          "pages-family-family-module").then(__webpack_require__.bind(null,
          /*! ./pages/family/family.module */
          "QG8K")).then(function (m) {
            return m.FamilyPageModule;
          });
        }
      }, {
        path: 'family-detail/:apartment_id/:user_id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-family-detail-family-detail-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("pages-family-detail-family-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/family-detail/family-detail.module */
          "77uI")).then(function (m) {
            return m.FamilyDetailPageModule;
          });
        }
      }, {
        path: 'register-to-receive-goods',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-register-to-receive-goods-register-to-receive-goods-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-register-to-receive-goods-register-to-receive-goods-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/register-to-receive-goods/register-to-receive-goods.module */
          "//b2")).then(function (m) {
            return m.RegisterToReceiveGoodsPageModule;
          });
        }
      }, {
        path: 'register-for-shipping',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-register-for-shipping-register-for-shipping-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-register-for-shipping-register-for-shipping-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/register-for-shipping/register-for-shipping.module */
          "FUgn")).then(function (m) {
            return m.RegisterForShippingPageModule;
          });
        }
      }, {
        path: 'register-keep-vehicle',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-register-keep-vehicle-register-keep-vehicle-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-register-keep-vehicle-register-keep-vehicle-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/register-keep-vehicle/register-keep-vehicle.module */
          "qhkR")).then(function (m) {
            return m.RegisterKeepVehiclePageModule;
          });
        }
      }, {
        path: 'resident-market',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-resident-market-resident-market-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-booking-shop-house-booking-shop-house-module~pages-repair-service-repair-service-modul~433919b2"), __webpack_require__.e("pages-resident-market-resident-market-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/resident-market/resident-market.module */
          "YWp/")).then(function (m) {
            return m.ResidentMarketPageModule;
          });
        }
      }, {
        path: 'user-shop-by-category/:category/:category_name/:selected_category',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-shop-by-category-user-shop-by-category-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-booking-shop-house-booking-shop-house-module~pages-repair-service-repair-service-modul~433919b2"), __webpack_require__.e("pages-user-shop-by-category-user-shop-by-category-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-shop-by-category/user-shop-by-category.module */
          "ja/P")).then(function (m) {
            return m.UserShopByCategoryPageModule;
          });
        }
      }, {
        path: 'create-shop-house',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-create-shop-house-create-shop-house-module */
          [__webpack_require__.e("default~pages-create-shop-house-create-shop-house-module~pages-popup-open-market-popup-open-market-module"), __webpack_require__.e("pages-create-shop-house-create-shop-house-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/create-shop-house/create-shop-house.module */
          "3gSg")).then(function (m) {
            return m.CreateShopHousePageModule;
          });
        }
      }, {
        path: 'request-house-sale',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-request-house-sale-request-house-sale-module */
          [__webpack_require__.e("default~pages-popup-request-house-sale-success-popup-request-house-sale-success-module~pages-request~4f9ffd39"), __webpack_require__.e("pages-request-house-sale-request-house-sale-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/request-house-sale/request-house-sale.module */
          "riGv")).then(function (m) {
            return m.RequestHouseSalePageModule;
          });
        }
      }, {
        path: 'shop-house/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-shop-house-shop-house-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-booking-shop-house-booking-shop-house-module~pages-repair-service-repair-service-modul~433919b2"), __webpack_require__.e("pages-shop-house-shop-house-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/shop-house/shop-house.module */
          "frra")).then(function (m) {
            return m.ShopHousePageModule;
          });
        }
      }, {
        path: 'booking-shop-house',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-booking-shop-house-booking-shop-house-module */
          [__webpack_require__.e("default~pages-booking-shop-house-booking-shop-house-module~pages-repair-service-repair-service-modul~433919b2"), __webpack_require__.e("pages-booking-shop-house-booking-shop-house-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/booking-shop-house/booking-shop-house.module */
          "Ay1E")).then(function (m) {
            return m.BookingShopHousePageModule;
          });
        }
      }, {
        path: 'booking-product/:type',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-booking-product-booking-product-module */
          "pages-booking-product-booking-product-module").then(__webpack_require__.bind(null,
          /*! ./pages/booking-product/booking-product.module */
          "L0pk")).then(function (m) {
            return m.BookingProductPageModule;
          });
        }
      }, {
        path: 'call-the-car',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-call-the-car-call-the-car-module */
          "pages-call-the-car-call-the-car-module").then(__webpack_require__.bind(null,
          /*! ./pages/call-the-car/call-the-car.module */
          "V77Z")).then(function (m) {
            return m.CallTheCarPageModule;
          });
        }
      }, {
        path: 'call-the-car-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-call-the-car-detail-call-the-car-detail-module */
          "pages-call-the-car-detail-call-the-car-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/call-the-car-detail/call-the-car-detail.module */
          "M3TY")).then(function (m) {
            return m.CallTheCarDetailPageModule;
          });
        }
      }, {
        path: 'history',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-history-history-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-history-history-module~pages-popup-rating-shop-popup-rating-shop-module"), __webpack_require__.e("default~pages-history-history-module~pages-popup-change-time-order-popup-change-time-order-module"), __webpack_require__.e("pages-history-history-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/history/history.module */
          "6F3i")).then(function (m) {
            return m.HistoryPageModule;
          });
        }
      }, {
        path: 'history-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-history-detail-history-detail-module */
          "pages-history-detail-history-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/history-detail/history-detail.module */
          "1AGm")).then(function (m) {
            return m.HistoryDetailPageModule;
          });
        }
      }, {
        path: 'management-order',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-management-order-management-order-module */
          "pages-management-order-management-order-module").then(__webpack_require__.bind(null,
          /*! ./pages/management-order/management-order.module */
          "qbJL")).then(function (m) {
            return m.ManagementOrderPageModule;
          });
        }
      }, {
        path: 'management-order-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-management-order-detail-management-order-detail-module */
          "pages-management-order-detail-management-order-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/management-order-detail/management-order-detail.module */
          "aRo+")).then(function (m) {
            return m.ManagementOrderDetailPageModule;
          });
        }
      }, {
        path: 'chat-to-shop',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-chat-to-shop-chat-to-shop-module */
          "pages-chat-to-shop-chat-to-shop-module").then(__webpack_require__.bind(null,
          /*! ./pages/chat-to-shop/chat-to-shop.module */
          "dwbR")).then(function (m) {
            return m.ChatToShopPageModule;
          });
        }
      }, {
        path: 'repair-service/:category/:category_name',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-repair-service-repair-service-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-booking-shop-house-booking-shop-house-module~pages-repair-service-repair-service-modul~433919b2"), __webpack_require__.e("pages-repair-service-repair-service-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/repair-service/repair-service.module */
          "8lPP")).then(function (m) {
            return m.RepairServicePageModule;
          });
        }
      }, {
        path: 'repair-service-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-repair-service-detail-repair-service-detail-module */
          "pages-repair-service-detail-repair-service-detail-module").then(__webpack_require__.bind(null,
          /*! ./pages/repair-service-detail/repair-service-detail.module */
          "RXfm")).then(function (m) {
            return m.RepairServiceDetailPageModule;
          });
        }
      }, {
        path: 'repair-service-booking',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-repair-service-booking-repair-service-booking-module */
          "pages-repair-service-booking-repair-service-booking-module").then(__webpack_require__.bind(null,
          /*! ./pages/repair-service-booking/repair-service-booking.module */
          "jcGq")).then(function (m) {
            return m.RepairServiceBookingPageModule;
          });
        }
      }, {
        path: 'payment',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-payment-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("payment-payment-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment/payment.module */
          "mDHw")).then(function (m) {
            return m.PaymentPageModule;
          });
        }
      }, {
        path: 'payment-history',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-payment-history-payment-history-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("pages-payment-history-payment-history-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/payment-history/payment-history.module */
          "NYDq")).then(function (m) {
            return m.PaymentHistoryPageModule;
          });
        }
      }, {
        path: 'order-shop-history',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-order-shop-history-order-shop-history-module */
          "pages-order-shop-history-order-shop-history-module").then(__webpack_require__.bind(null,
          /*! ./pages/order-shop-history/order-shop-history.module */
          "RGXL")).then(function (m) {
            return m.OrderShopHistoryPageModule;
          });
        }
      }, {
        path: 'pop-delete-member',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-delete-member-popup-delete-member-module */
          [__webpack_require__.e("default~pages-delete-home-member-delete-home-member-module~pages-popup-delete-member-popup-delete-me~c45c1453"), __webpack_require__.e("pages-popup-delete-member-popup-delete-member-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-delete-member/popup-delete-member.module */
          "866C")).then(function (m) {
            return m.PopupDeleteMemberPageModule;
          });
        }
      }, {
        path: 'my-account-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-my-account-detail-my-account-detail-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("pages-my-account-detail-my-account-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/my-account-detail/my-account-detail.module */
          "lU32")).then(function (m) {
            return m.MyAccountDetailPageModule;
          });
        }
      }, {
        path: 'popup-building-management-phone',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-building-management-phone-popup-building-management-phone-module */
          [__webpack_require__.e("default~pages-my-home-my-home-module~pages-popup-building-management-phone-popup-building-management~a02c344f"), __webpack_require__.e("pages-popup-building-management-phone-popup-building-management-phone-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-building-management-phone/popup-building-management-phone.module */
          "2wD5")).then(function (m) {
            return m.PopupBuildingManagementPhonePageModule;
          });
        }
      }, {
        path: 'popup-booking-service',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-popup-booking-service-popup-booking-service-module */
          "pages-popup-booking-service-popup-booking-service-module").then(__webpack_require__.bind(null,
          /*! ./pages/popup-booking-service/popup-booking-service.module */
          "ml3T")).then(function (m) {
            return m.PopupBookingServiceModule;
          });
        }
      }, {
        path: 'popup-change-language',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-change-language-popup-change-language-module */
          [__webpack_require__.e("default~pages-my-account-my-account-module~pages-popup-change-language-popup-change-language-module"), __webpack_require__.e("pages-popup-change-language-popup-change-language-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-change-language/popup-change-language.module */
          "VAiG")).then(function (m) {
            return m.PopupChangeLanguagePageModule;
          });
        }
      }, {
        path: 'popup-hotline',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-hotline-popup-hotline-module */
          [__webpack_require__.e("default~pages-my-account-my-account-module~pages-popup-hotline-popup-hotline-module"), __webpack_require__.e("pages-popup-hotline-popup-hotline-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-hotline/popup-hotline.module */
          "i6rw")).then(function (m) {
            return m.PopupHotlinePageModule;
          });
        }
      }, {
        path: 'popup-feedback',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-feedback-popup-feedback-module */
          [__webpack_require__.e("default~pages-my-account-my-account-module~pages-popup-feedback-popup-feedback-module"), __webpack_require__.e("pages-popup-feedback-popup-feedback-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-feedback/popup-feedback.module */
          "m+bz")).then(function (m) {
            return m.PopupFeedbackPageModule;
          });
        }
      }, {
        path: 'popup-logout',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-logout-popup-logout-module */
          [__webpack_require__.e("default~pages-my-account-my-account-module~pages-popup-logout-popup-logout-module"), __webpack_require__.e("pages-popup-logout-popup-logout-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-logout/popup-logout.module */
          "jcO1")).then(function (m) {
            return m.PopupLogoutPageModule;
          });
        }
      }, {
        path: 'popup-request-house-sale-success',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-request-house-sale-success-popup-request-house-sale-success-module */
          [__webpack_require__.e("default~pages-popup-request-house-sale-success-popup-request-house-sale-success-module~pages-request~4f9ffd39"), __webpack_require__.e("pages-popup-request-house-sale-success-popup-request-house-sale-success-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-request-house-sale-success/popup-request-house-sale-success.module */
          "UfT6")).then(function (m) {
            return m.PopupRequestHouseSaleSuccessPageModule;
          });
        }
      }, {
        path: 'popup-request-house-sale',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-open-market-popup-open-market-module */
          [__webpack_require__.e("default~pages-create-shop-house-create-shop-house-module~pages-popup-open-market-popup-open-market-module"), __webpack_require__.e("pages-popup-open-market-popup-open-market-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-open-market/popup-open-market.module */
          "ilYD")).then(function (m) {
            return m.PopupOpenMarketPageModule;
          });
        }
      }, {
        path: 'terms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-terms-terms-module */
          "pages-terms-terms-module").then(__webpack_require__.bind(null,
          /*! ./pages/terms/terms.module */
          "91Gy")).then(function (m) {
            return m.TermsPageModule;
          });
        }
      }, {
        path: 'guideline',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-guideline-guideline-module */
          "pages-guideline-guideline-module").then(__webpack_require__.bind(null,
          /*! ./pages/guideline/guideline.module */
          "l1Ah")).then(function (m) {
            return m.GuidelinePageModule;
          });
        }
      }, {
        path: 'popup-delete-vehicle',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-delete-vehicle-popup-delete-vehicle-module */
          [__webpack_require__.e("default~pages-my-home-detail-my-home-detail-module~pages-popup-delete-vehicle-popup-delete-vehicle-module"), __webpack_require__.e("pages-popup-delete-vehicle-popup-delete-vehicle-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-delete-vehicle/popup-delete-vehicle.module */
          "vDhu")).then(function (m) {
            return m.PopupDeleteVehiclePageModule;
          });
        }
      }, {
        path: 'add-home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-home-add-home-module */
          "pages-add-home-add-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-home/add-home.module */
          "mpFu")).then(function (m) {
            return m.AddHomePageModule;
          });
        }
      }, {
        path: 'add-home-member/:apartmentID',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-add-home-member-add-home-member-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-add-home-member-add-home-member-module~pages-popup-owner-relationship-popup-owner-rela~bc09e0b9"), __webpack_require__.e("pages-add-home-member-add-home-member-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/add-home-member/add-home-member.module */
          "i32j")).then(function (m) {
            return m.AddHomeMemberPageModule;
          });
        }
      }, {
        path: 'delete-home-member',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-delete-home-member-delete-home-member-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-delete-home-member-delete-home-member-module~pages-popup-delete-member-popup-delete-me~c45c1453"), __webpack_require__.e("pages-delete-home-member-delete-home-member-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/delete-home-member/delete-home-member.module */
          "Ymi2")).then(function (m) {
            return m.DeleteHomeMemberPageModule;
          });
        }
      }, {
        path: 'add-home-vehicle',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-add-home-vehicle-add-home-vehicle-module */
          "pages-add-home-vehicle-add-home-vehicle-module").then(__webpack_require__.bind(null,
          /*! ./pages/add-home-vehicle/add-home-vehicle.module */
          "h92T")).then(function (m) {
            return m.AddHomeVehiclePageModule;
          });
        }
      }, {
        path: 'reset-apartment-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-reset-apartment-code-reset-apartment-code-module */
          "pages-auth-reset-apartment-code-reset-apartment-code-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/reset-apartment-code/reset-apartment-code.module */
          "YyW4")).then(function (m) {
            return m.ResetApartmentCodePageModule;
          });
        }
      }, {
        path: 'popup-owner-relationship',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-owner-relationship-popup-owner-relationship-module */
          [__webpack_require__.e("default~pages-add-home-member-add-home-member-module~pages-popup-owner-relationship-popup-owner-rela~bc09e0b9"), __webpack_require__.e("pages-popup-owner-relationship-popup-owner-relationship-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-owner-relationship/popup-owner-relationship.module */
          "6ihV")).then(function (m) {
            return m.PopupOwnerRelationshipPageModule;
          });
        }
      }, {
        path: 'news',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-news-news-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("pages-news-news-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/news/news.module */
          "qUUn")).then(function (m) {
            return m.NewsPageModule;
          });
        }
      }, {
        path: 'popup-payment-online',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-popup-payment-online-popup-payment-online-module */
          "pages-popup-payment-online-popup-payment-online-module").then(__webpack_require__.bind(null,
          /*! ./pages/popup-payment-online/popup-payment-online.module */
          "DUk0")).then(function (m) {
            return m.PopupPaymentOnlinePageModule;
          });
        }
      }, {
        path: 'popup-payment-transfer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-popup-payment-transfer-popup-payment-transfer-module */
          "pages-popup-payment-transfer-popup-payment-transfer-module").then(__webpack_require__.bind(null,
          /*! ./pages/popup-payment-transfer/popup-payment-transfer.module */
          "SYhx")).then(function (m) {
            return m.PopupPaymentTransferPageModule;
          });
        }
      }, {
        path: 'popup-payment-cash',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-popup-payment-cash-popup-payment-cash-module */
          "pages-popup-payment-cash-popup-payment-cash-module").then(__webpack_require__.bind(null,
          /*! ./pages/popup-payment-cash/popup-payment-cash.module */
          "q9bH")).then(function (m) {
            return m.PopupPaymentCashPageModule;
          });
        }
      }, {
        path: 'popup-payment-success',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-payment-success-popup-payment-success-module */
          [__webpack_require__.e("default~pages-payment-confirm-payment-confirm-module~pages-popup-payment-success-popup-payment-success-module"), __webpack_require__.e("pages-popup-payment-success-popup-payment-success-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-payment-success/popup-payment-success.module */
          "0Xou")).then(function (m) {
            return m.PopupPaymentSuccessPageModule;
          });
        }
      }, {
        path: 'popup-payment-function',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-payment-function-popup-payment-function-module */
          [__webpack_require__.e("default~pages-payment-confirm-payment-confirm-module~pages-popup-payment-function-popup-payment-func~ed31a5a5"), __webpack_require__.e("pages-popup-payment-function-popup-payment-function-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-payment-function/popup-payment-function.module */
          "RDOk")).then(function (m) {
            return m.PopupPaymentFunctionPageModule;
          });
        }
      }, {
        path: 'popup-registration-type',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-registration-type-popup-registration-type-module */
          [__webpack_require__.e("default~pages-popup-registration-type-popup-registration-type-module~requests-requests-module"), __webpack_require__.e("pages-popup-registration-type-popup-registration-type-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-registration-type/popup-registration-type.module */
          "13WI")).then(function (m) {
            return m.PopupRegistrationTypePageModule;
          });
        }
      }, {
        path: 'popup-select-time',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-popup-select-time-popup-select-time-module */
          "pages-popup-select-time-popup-select-time-module").then(__webpack_require__.bind(null,
          /*! ./pages/popup-select-time/popup-select-time.module */
          "Y6+c")).then(function (m) {
            return m.PopupSelectTimePageModule;
          });
        }
      }, {
        path: 'popup-registration-success',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-registration-success-popup-registration-success-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-popup-registration-success-popup-registration-success-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-registration-success/popup-registration-success.module */
          "wlWw")).then(function (m) {
            return m.PopupRegistrationSuccessPageModule;
          });
        }
      }, {
        path: 'registration-guest',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-registration-guest-registration-guest-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-registration-guest-registration-guest-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/registration-guest/registration-guest.module */
          "fG7f")).then(function (m) {
            return m.RegistrationGuestPageModule;
          });
        }
      }, {
        path: 'popup-select-apartment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-popup-select-apartment-popup-select-apartment-module */
          "pages-popup-select-apartment-popup-select-apartment-module").then(__webpack_require__.bind(null,
          /*! ./pages/popup-select-apartment/popup-select-apartment.module */
          "LYbk")).then(function (m) {
            return m.PopupSelectApartmentPageModule;
          });
        }
      }, {
        path: 'notification-poll',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-notification-poll-notification-poll-module */
          "pages-notification-poll-notification-poll-module").then(__webpack_require__.bind(null,
          /*! ./pages/notification-poll/notification-poll.module */
          "P4Zw")).then(function (m) {
            return m.NotificationPollPageModule;
          });
        }
      }, {
        path: 'popup-complain',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-complain-popup-complain-module */
          [__webpack_require__.e("default~pages-payment-infor-payment-infor-module~pages-popup-complain-popup-complain-module"), __webpack_require__.e("pages-popup-complain-popup-complain-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-complain/popup-complain.module */
          "bcoF")).then(function (m) {
            return m.PopupComplainPageModule;
          });
        }
      }, {
        path: 'popup-pincode-register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-pincode-register-popup-pincode-register-module */
          [__webpack_require__.e("default~pages-landing-landing-module~pages-popup-pincode-register-popup-pincode-register-module"), __webpack_require__.e("pages-popup-pincode-register-popup-pincode-register-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-pincode-register/popup-pincode-register.module */
          "WFDn")).then(function (m) {
            return m.PopupPincodeRegisterPageModule;
          });
        }
      }, {
        path: 'popup-pincode-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-pincode-password-popup-pincode-password-module */
          [__webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-popup-pincode-password-popup-pincode-pass~9921a548"), __webpack_require__.e("pages-popup-pincode-password-popup-pincode-password-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-pincode-password/popup-pincode-password.module */
          "GG1i")).then(function (m) {
            return m.PopupPincodePasswordPageModule;
          });
        }
      }, {
        path: 'popup-share-info',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-share-info-popup-share-info-module */
          [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-new-detail-new-detail-module~pages-notification-detail-notification-detail-module~page~2c467832"), __webpack_require__.e("pages-popup-share-info-popup-share-info-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-share-info/popup-share-info.module */
          "4xGo")).then(function (m) {
            return m.PopupShareInfoModule;
          });
        }
      }, {
        path: 'register-wallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-wallet-register-wallet-register-wallet-module */
          "pages-wallet-register-wallet-register-wallet-module").then(__webpack_require__.bind(null,
          /*! ./pages/wallet/register-wallet/register-wallet.module */
          "kL7N")).then(function (m) {
            return m.RegisterWalletModule;
          });
        }
      }, {
        path: 'popup-pincode-payment',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-iframe-payment-popup-iframe-payment-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-popup-iframe-payment-popup-iframe-payment-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-iframe-payment/popup-iframe-payment.module */
          "kAbz")).then(function (m) {
            return m.PopupPincodePaymentPageModule;
          });
        }
      }, {
        path: 'payment-success/:paymentID',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-success-payment-success-module */
          "pages-payment-success-payment-success-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment-success/payment-success.module */
          "yfNd")).then(function (m) {
            return m.PaymentSuccessPageModule;
          });
        }
      }, {
        path: 'payment-fail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-payment-fail-payment-fail-module */
          "pages-payment-fail-payment-fail-module").then(__webpack_require__.bind(null,
          /*! ./pages/payment-fail/payment-fail.module */
          "lA8v")).then(function (m) {
            return m.PaymentFailPageModule;
          });
        }
      }, {
        path: 'survey/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-survey-survey-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-survey-survey-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/survey/survey.module */
          "jCSH")).then(function (m) {
            return m.SurveyPageModule;
          });
        }
      }, {
        path: 'popup-shop-order-result',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-popup-shop-order-result-popup-shop-order-result-module */
          "pages-popup-shop-order-result-popup-shop-order-result-module").then(__webpack_require__.bind(null,
          /*! ./pages/popup-shop-order-result/popup-shop-order-result.module */
          "xYnX")).then(function (m) {
            return m.PopupShopOrderResultModule;
          });
        }
      }, {
        path: 'order-service-success',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-order-service-success-order-service-success-module */
          "pages-order-service-success-order-service-success-module").then(__webpack_require__.bind(null,
          /*! ./pages/order-service-success/order-service-success.module */
          "9VMO")).then(function (m) {
            return m.OrderServiceSuccessPageModule;
          });
        }
      }, {
        path: 'popup-rating-shop',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-rating-shop-popup-rating-shop-module */
          [__webpack_require__.e("default~pages-history-history-module~pages-popup-rating-shop-popup-rating-shop-module"), __webpack_require__.e("pages-popup-rating-shop-popup-rating-shop-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-rating-shop/popup-rating-shop.module */
          "ch6Z")).then(function (m) {
            return m.PopupRatingShopPageModule;
          });
        }
      }, {
        path: 'popup-change-time-order',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-change-time-order-popup-change-time-order-module */
          [__webpack_require__.e("default~pages-history-history-module~pages-popup-change-time-order-popup-change-time-order-module"), __webpack_require__.e("pages-popup-change-time-order-popup-change-time-order-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-change-time-order/popup-change-time-order.module */
          "IaWD")).then(function (m) {
            return m.PopupChangeTimeOrderPageModule;
          });
        }
      }, {
        path: 'popup-survey-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-popup-survey-detail-popup-survey-detail-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-popup-survey-detail-popup-survey-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/popup-survey-detail/popup-survey-detail.module */
          "YoyW")).then(function (m) {
            return m.PopupSurveyDetailPageModule;
          });
        }
      }, {
        path: 'survey-post-complete',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-survey-complete-survey-complete-module */
          "pages-survey-complete-survey-complete-module").then(__webpack_require__.bind(null,
          /*! ./pages/survey-complete/survey-complete.module */
          "h+4Y")).then(function (m) {
            return m.SurveyCompletePageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vglk":
    /*!*****************************************************!*\
      !*** ./src/app/services/loading/loading.service.ts ***!
      \*****************************************************/

    /*! exports provided: LoadingService */

    /***/
    function vglk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
          this.isLoading = false;
        }

        _createClass(LoadingService, [{
          key: "present",
          value: function present() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.isLoading = true;
                      _context9.next = 3;
                      return this.loadingController.create({
                        duration: 5000,
                        spinner: null,
                        message: '<img src="assets/icon/spinner/spinner.gif" />',
                        cssClass: 'custom-loading-css'
                      }).then(function (a) {
                        a.present().then(function () {
                          console.log('presented');

                          if (!_this8.isLoading) {
                            a.dismiss().then(function () {
                              return console.log('abort presenting');
                            });
                          }
                        });
                      });

                    case 3:
                      return _context9.abrupt("return", _context9.sent);

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.isLoading = false;
                      _context10.next = 3;
                      return this.loadingController.dismiss().then(function () {
                        return console.log('dismissed');
                      });

                    case 3:
                      return _context10.abrupt("return", _context10.sent);

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ɵfac = function LoadingService_Factory(t) {
        return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]));
      };

      LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoadingService,
        factory: LoadingService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadingService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _angular_compiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/compiler */
      "1uSB");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map