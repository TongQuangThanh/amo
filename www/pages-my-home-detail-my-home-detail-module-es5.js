(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-home-detail-my-home-detail-module"], {
    /***/
    "GXVj":
    /*!***************************************************************!*\
      !*** ./src/app/pages/my-home-detail/my-home-detail.module.ts ***!
      \***************************************************************/

    /*! exports provided: MyHomeDetailPageModule */

    /***/
    function GXVj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyHomeDetailPageModule", function () {
        return MyHomeDetailPageModule;
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


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _my_home_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-home-detail.page */
      "Tt0K");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _my_home_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyHomeDetailPage"]
      }];

      var MyHomeDetailPageModule = function MyHomeDetailPageModule() {
        _classCallCheck(this, MyHomeDetailPageModule);
      };

      MyHomeDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MyHomeDetailPageModule
      });
      MyHomeDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MyHomeDetailPageModule_Factory(t) {
          return new (t || MyHomeDetailPageModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyHomeDetailPageModule, {
          declarations: [_my_home_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyHomeDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyHomeDetailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_4__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_my_home_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyHomeDetailPage"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Tt0K":
    /*!*************************************************************!*\
      !*** ./src/app/pages/my-home-detail/my-home-detail.page.ts ***!
      \*************************************************************/

    /*! exports provided: MyHomeDetailPage */

    /***/
    function Tt0K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyHomeDetailPage", function () {
        return MyHomeDetailPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _popup_delete_vehicle_popup_delete_vehicle_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../popup-delete-vehicle/popup-delete-vehicle.page */
      "m+Nk");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");

      function MyHomeDetailPage_super_tabs_container_23_ion_card_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyHomeDetailPage_super_tabs_container_23_ion_card_50_Template_ion_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var member_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r4.deleteMember(member_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var member_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", member_r3._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", member_r3.relationShip, " - ", member_r3.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", member_r3.phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", member_r3.dateOfBirth, "");
        }
      }

      function MyHomeDetailPage_super_tabs_container_23_ion_card_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var vehicle_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", vehicle_r6._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vehicle_r6.model);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", vehicle_r6.type, "/", vehicle_r6.identity, "");
        }
      }

      function MyHomeDetailPage_super_tabs_container_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "super-tabs-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "super-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-textarea", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ion-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "super-tab", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-list", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-row", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-card-title", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-row", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-col", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " 1986-06-14");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, MyHomeDetailPage_super_tabs_container_23_ion_card_50_Template, 14, 5, "ion-card", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-card", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyHomeDetailPage_super_tabs_container_23_Template_ion_card_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.addMember();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "super-tab", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-list", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, MyHomeDetailPage_super_tabs_container_23_ion_card_61_Template, 7, 4, "ion-card", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, "MY_HOME_DETAIL.active_code"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r0.apartment.apartment.activeCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 17, "MY_HOME_DETAIL.address"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r0.apartment.campaign.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 19, "MY_HOME_DETAIL.area"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("value", "", ctx_r0.apartment.apartment.area, " m2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 21, "MY_HOME_DETAIL.apartment_type"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r0.apartment.apartment.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 23, "MY_HOME_DETAIL.btn_delete"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 25, "MY_HOME_DETAIL.owner"), " - ", ctx_r0.apartment.apartment.owner.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.apartment.apartment.owner.phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listMembers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 27, "MY_HOME_DETAIL.btn_add_member"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listVehicle);
        }
      }

      var _c0 = function _c0() {
        return {
          debug: true,
          sideMenu: "left",
          allowElementScroll: false,
          nativeSmoothScroll: true
        };
      };

      var MyHomeDetailPage = /*#__PURE__*/function () {
        // profile:any;
        function MyHomeDetailPage(modalController, loading, apiService, navCtrl, route, translate, alertService, datePipe) {
          _classCallCheck(this, MyHomeDetailPage);

          this.modalController = modalController;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.route = route;
          this.translate = translate;
          this.alertService = alertService;
          this.datePipe = datePipe;
          this.vehicleEnable = false;
          this.memberEnable = false; // this.profile = this.authService.getProfile();
        }

        _createClass(MyHomeDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var userApartmentID = this.route.snapshot.paramMap.get('id');
            this._userApartmentID = userApartmentID;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getListUserApar(this._userApartmentID);
          }
        }, {
          key: "getListUserApar",
          value: function getListUserApar(userApartmentID) {
            var _this = this;

            var self = this;
            this.loading.present();
            this.apiService.getUserApartment(userApartmentID).subscribe(function (result) {
              self.apartment = result.userApartment;
              self.listVehicle = self.apartment.apartment.vehicles;
              self.apartmentTitle = self.apartment.campaign.title;
              self.listMembers = self.apartment.apartment.members; // check data

              self.listVehicle.forEach(function (element) {
                if (element.type && element.type != null) {
                  element.type = self.getNameVehicle(element.type);
                } else {
                  element.type = self.getNameVehicle('orther');
                }
              }); // check data

              self.listMembers.forEach(function (element) {
                if (element.relationShip && element.relationShip != null) {
                  element.relationShip = self.getNameRelationShip(element.relationShip);
                } else {
                  element.relationShip = self.getNameRelationShip(0);
                }

                if (element.dateOfBirth && element.dateOfBirth != null) {
                  element.dateOfBirth = _this.datePipe.transform(element.dateOfBirth, 'dd/MM/yyyy');
                } else {
                  element.dateOfBirth = 'N/A';
                }
              });
              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "getNameVehicle",
          value: function getNameVehicle(type) {
            var name = this.translate.instant('INBOX_31.vehicle_option_orther');

            switch (type) {
              case 'motorbike':
                name = this.translate.instant('INBOX_31.vehicle_option_motobike');
                break;

              case 'car':
                name = this.translate.instant('INBOX_31.vehicle_option_car');
                break;

              case 'bike':
                name = this.translate.instant('INBOX_31.vehicle_option_bike');
                break;
            }

            return name;
          }
        }, {
          key: "getNameRelationShip",
          value: function getNameRelationShip(index) {
            var name = this.translate.instant('ADD_HOME_MEMBER.guest');

            switch (index) {
              case 1:
                name = this.translate.instant('ADD_HOME_MEMBER.wife');
                break;

              case 2:
                name = this.translate.instant('ADD_HOME_MEMBER.husband');
                break;

              case 3:
                name = this.translate.instant('ADD_HOME_MEMBER.father');
                break;

              case 4:
                name = this.translate.instant('ADD_HOME_MEMBER.mother');
                break;

              case 5:
                name = this.translate.instant('ADD_HOME_MEMBER.son');
                break;

              case 6:
                name = this.translate.instant('ADD_HOME_MEMBER.daughter');
                break;

              case 7:
                name = this.translate.instant('ADD_HOME_MEMBER.brother');
                break;

              case 8:
                name = this.translate.instant('ADD_HOME_MEMBER.sister');
                break;

              case 9:
                name = this.translate.instant('ADD_HOME_MEMBER.relative');
                break;

              case 10:
                name = this.translate.instant('ADD_HOME_MEMBER.friend');
                break;

              case 11:
                name = this.translate.instant('ADD_HOME_MEMBER.housemaid');
                break;

              case 12:
                name = this.translate.instant('ADD_HOME_MEMBER.guest');
                break;
            }

            return name;
          }
        }, {
          key: "toggleGroupVehicle",
          value: function toggleGroupVehicle() {
            this.vehicleEnable = !this.vehicleEnable;
          }
        }, {
          key: "isGroupVehicleShown",
          value: function isGroupVehicleShown() {
            return this.vehicleEnable;
          }
        }, {
          key: "isGroupVehicleMember",
          value: function isGroupVehicleMember() {
            return this.memberEnable;
          }
        }, {
          key: "formatString",
          value: function formatString(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"].formatString(stringDate);
          }
        }, {
          key: "deleteVehicleModal",
          value: function deleteVehicleModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var self, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self = this;
                      _context.next = 3;
                      return this.modalController.create({
                        component: _popup_delete_vehicle_popup_delete_vehicle_page__WEBPACK_IMPORTED_MODULE_10__["PopupDeleteVehiclePage"],
                        componentProps: {
                          apartmentID: self.apartment.apartment._id,
                          id: id
                        },
                        cssClass: 'delete-vehicle-custom-class'
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned && dataReturned.data) {
                          var dataReturnedResult = JSON.parse(dataReturned.data);

                          if (dataReturnedResult.message == "success") {
                            self.getListUserApar(self._userApartmentID);
                          }
                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "resetApartmentCode",
          value: function resetApartmentCode() {
            this.navCtrl.navigateForward('/reset-apartment-code');
          }
        }, {
          key: "addMember",
          value: function addMember() {
            this.navCtrl.navigateForward('/add-home-member/' + this.apartment.apartment._id);
          }
        }, {
          key: "deleteMember",
          value: function deleteMember(member) {
            var navigationExtras = {
              queryParams: {
                member: JSON.stringify(member),
                apartmentID: this.apartment.apartment._id
              }
            };
            this.navCtrl.navigateForward(['delete-home-member'], navigationExtras);
          }
        }, {
          key: "addVehicle",
          value: function addVehicle() {
            this.navCtrl.navigateForward('/register-keep-vehicle');
          }
        }]);

        return MyHomeDetailPage;
      }();

      MyHomeDetailPage.ɵfac = function MyHomeDetailPage_Factory(t) {
        return new (t || MyHomeDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]));
      };

      MyHomeDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MyHomeDetailPage,
        selectors: [["app-my-home-detail"]],
        decls: 24,
        vars: 14,
        consts: [["slot", "fixed", 1, "my-home-detail-content", "no-scroll", 3, "scrollEvents"], ["activeTabIndex", "0", 1, "super-tabs-content", 3, "config"], [1, "ion-no-border", "my-home-detail-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], ["no-border", "", "scrollable", "", "showIndicator", "true", "scrollablePadding", "false", 1, "segment-toolbar", "super-tabs-toolbar"], [1, "super-tab-button"], [1, "margin-none", "button-tab-label"], [1, "under_line"], ["class", "tab-container", "autoScrollTop", "", 4, "ngIf"], ["autoScrollTop", "", 1, "tab-container"], [1, "ion-padding"], ["lines", "none", 1, "input-item"], ["name", "custom-company", "src", "/assets/icon/custom-company.svg", "slot", "start", 1, "input-icon"], ["position", "floating", 1, "input-floating-label"], ["type", "text", "name", "activeCode", 1, "input-text", 3, "value"], ["lines", "none", 1, "custom-textarea", "custom-textarea-text"], ["name", "custom-location", "src", "/assets/icon/custom-location.svg", "slot", "start", 1, "input-icon"], ["position", "floating", 1, "item-inner"], ["autosize", "", 1, "textarea-text", 3, "value"], ["name", "custom-area", "src", "/assets/icon/custom-area.svg", "slot", "start", 1, "input-icon"], ["type", "text", "name", "area", 1, "input-text", 3, "value"], ["lines", "none", "disabled", "", 1, "input-item"], ["name", "custom-flag", "src", "/assets/icon/custom-flag.svg", "slot", "start", 1, "input-icon"], ["type", "text", "name", "status", 1, "input-text", 3, "value"], ["lines", "none", 1, "function-item", "ion-text-center"], [1, "delete-button"], [1, "delete-button-label"], [1, "no-padding"], [1, "list-content", "tranferant-background"], [1, "card-content"], [1, "member-card-item"], [1, "content-col"], [1, "title-name"], [1, "star"], ["src", "../assets/icon/star.svg"], [1, "member-card-item", "padding-bottom-15"], [1, "title-content"], ["src", "../assets/icon/phone.svg"], ["src", "../assets/icon/bod.svg"], ["class", "card-content", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "add-new-button", 3, "click"], [1, "add-new-icon"], [1, "margin-top-20"], ["src", "../assets/icon/add.svg"], [1, "add-new-label"], ["class", "card-content", 3, "id", 4, "ngFor", "ngForOf"], [1, "card-content", 3, "id", "click"], [1, "card-content", 3, "id"], [1, "title-content", "margin-bottom-15"]],
        template: function MyHomeDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "super-tabs", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-buttons", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-back-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "super-tabs-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "super-tab-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "super-tab-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "super-tab-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MyHomeDetailPage_super_tabs_container_23_Template, 62, 29, "super-tabs-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.apartmentTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "MY_HOME_DETAIL.apartment_info"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 9, "MY_HOME_DETAIL.members"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 11, "MY_HOME_DETAIL.vehicles"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.apartment != null);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTabsToolbar"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTabButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTabsContainer"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_11__["SuperTab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: [".my-home-detail-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 200px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.my-home-detail-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n.my-home-detail-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  display: block;\n  width: 25px;\n}\n.my-home-detail-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n.my-home-detail-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #f8f9fa;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.my-home-detail-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n}\n.my-home-detail-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 107px;\n  --background: red;\n  --super-tabs-toolbar-background: #FFC144;\n}\n.my-home-detail-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button[_ngcontent-%COMP%] {\n  height: 30px;\n  --st-label-color-active: #ffffff;\n  --st-label-color-inactive: #fffefe8f;\n}\n.my-home-detail-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button[_ngcontent-%COMP%]   .under_line[_ngcontent-%COMP%] {\n  width: 57px;\n  height: 2px;\n  margin-top: 5px;\n}\n.my-home-detail-content[_ngcontent-%COMP%]   .super-tabs-toolbar[_ngcontent-%COMP%]   .super-tab-button.active[_ngcontent-%COMP%]   .under_line[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n.item-accordion-vehicle[_ngcontent-%COMP%] {\n  height: 138px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: height 0.09s all linear;\n}\n.item-accordion-member[_ngcontent-%COMP%] {\n  height: 276px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: 0.09s all linear;\n}\n.item-accordion-inactive[_ngcontent-%COMP%] {\n  height: 0px;\n  margin: 0;\n}\nion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n[_nghost-%COMP%] {\n  --super-tabs-toolbar-background: black;\n  --st-indicator-color: #FFC144;\n  --st-indicator-width: 30px;\n  --ion-color-base: transparent;\n}\n.segment-toolbar[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n}\n.button-tab-custom[_ngcontent-%COMP%] {\n  border-radius: 0;\n  box-shadow: none;\n}\n.no-scroll[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.padding-left-10[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.padding-right-10[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.margin-left-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n.no-floating-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.custom-input[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.custom-input-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #7a838c;\n}\n.input-text-50[_ngcontent-%COMP%] {\n  --padding-end: 0;\n}\n.input-text-50.ios[_ngcontent-%COMP%] {\n  --padding-top: 0;\n}\n.custom-textarea[_ngcontent-%COMP%] {\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n.custom-textarea-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #7a838c;\n}\n.textarea-text[_ngcontent-%COMP%] {\n  color: #21313f;\n  margin-top: 0;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n}\n.input-flag-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.item-disabled[_ngcontent-%COMP%] {\n  opacity: 1;\n  --background: #f0f0f0;\n}\n.item-disabled[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%] {\n  color: #7a838c;\n}\n.select-text.ios[_ngcontent-%COMP%] {\n  --padding-top: 0;\n}\n.function-item[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.delete-button[_ngcontent-%COMP%] {\n  --background: #feeae8;\n  --background-focused: rgba(250, 114, 104, 0.25);\n  --background-hover: rgba(250, 114, 104, 0.25);\n  --ion-toolbar-color: #feeae8;\n  --background-activated: rgba(250, 114, 104, 0.25);\n  mix-blend-mode: normal;\n  --border-radius: 8px;\n  width: 100%;\n  height: 44px;\n  margin: 16px 10px;\n  --box-shadow: none;\n}\n.delete-button-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #FFC144;\n}\n.add-button-apa[_ngcontent-%COMP%] {\n  --background-focused: #bee6f3;\n  --background-hover: #bee6f3;\n  --background: #d4ebf3;\n  --ion-toolbar-color: #d4ebf3;\n  --background-activated: #bee6f3;\n  mix-blend-mode: normal;\n  --border-radius: 8px;\n  width: 180px;\n  height: 44px;\n  margin: 16px 10px 16px 10px;\n  --box-shadow: none;\n}\n.add-button-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: bold;\n  line-height: 15px;\n  text-align: center;\n  color: #01aeef;\n}\n.title-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #221c1e;\n  margin-bottom: 5px;\n}\n.title-content[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n  margin-bottom: 0;\n  opacity: 0.6;\n}\n.danger-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #FFC144;\n}\n.border-left[_ngcontent-%COMP%] {\n  border-left: 1px solid #f4f5f5;\n}\n.button-col[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  padding: 20px 21px;\n}\n.content-col[_ngcontent-%COMP%] {\n  padding: 10px 16px 0px 16px;\n}\n.list-content.md[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.card-content[_ngcontent-%COMP%] {\n  margin: 20px 16px 20px 16px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 5px;\n}\n.add-button[_ngcontent-%COMP%] {\n  --background: #009ac9;\n  --ion-toolbar-color: #009ac9;\n  --background-activated: #048ab3;\n  --background-focused: #048ab3;\n  --background-hover: #048ab3;\n  opacity: 0.8;\n  margin: 14px 10px;\n  --box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.1);\n  --color: #ffffff;\n}\n.add-button-icon[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  text-align: center;\n  text-transform: none;\n}\n.normal-button[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  --border-radius: 50%;\n  float: right;\n}\n.tab-container[_ngcontent-%COMP%] {\n  background: #f9fcff;\n  border-radius: 20px 20px 0px 0px;\n}\n.tranferant-background[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.star[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktaG9tZS1kZXRhaWwvbXktaG9tZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUVKO0FBREk7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUdOO0FBQUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBRUo7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0FBR047QUFGTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUlSO0FBQU07RUFDRSxtQkFBQTtBQUVSO0FBSUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7QUFERjtBQUdBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBQUY7QUFFQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFLQTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7QUFGRjtBQU1BO0VBQ0Usc0NBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7QUFIRjtBQU1BO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJQTtFQUNFLGtCQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7QUFERjtBQUdBO0VBQ0Usa0JBQUE7QUFBRjtBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUNBO0VBQ0UseUJBQUE7QUFFRjtBQUVBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQUVGO0FBQUE7RUFDRSxnQkFBQTtBQUdGO0FBREE7RUFDRSxnQkFBQTtBQUlGO0FBRkE7RUFFRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQUZBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQUlGO0FBRkE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUtGO0FBRkE7RUFDRSxlQUFBO0FBS0Y7QUFIQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQU1GO0FBTEU7RUFDRSxjQUFBO0FBT0o7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFPRjtBQUxBO0VBQ0UscUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFRRjtBQU5BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVNGO0FBUEE7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQVVGO0FBUkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVdGO0FBUkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVdGO0FBVEE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFZRjtBQVZBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBYUY7QUFYQTtFQUNFLDhCQUFBO0FBY0Y7QUFaQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBZUY7QUFiQTtFQUNFLDJCQUFBO0FBZ0JGO0FBWkE7RUFFRSxVQUFBO0FBY0Y7QUFaQTtFQUNFLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQWVGO0FBWkE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtBQWVGO0FBYkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxvQkFBQTtBQWVGO0FBYkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQWdCRjtBQWRBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtBQWlCRjtBQWZBO0VBQ0UsNkJBQUE7QUFrQkY7QUFoQkE7RUFDRSxZQUFBO0FBbUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktaG9tZS1kZXRhaWwvbXktaG9tZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWhvbWUtZGV0YWlsLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICAuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmhlYWRlci10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDFweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDAgMCAjZjhmOWZhO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm15LWhvbWUtZGV0YWlsLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgLnN1cGVyLXRhYnMtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6IDEwN3B4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAtLXN1cGVyLXRhYnMtdG9vbGJhci1iYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgLnN1cGVyLXRhYi1idXR0b24ge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIC0tc3QtbGFiZWwtY29sb3ItYWN0aXZlOiAjZmZmZmZmO1xyXG4gICAgICAtLXN0LWxhYmVsLWNvbG9yLWluYWN0aXZlOiAjZmZmZWZlOGY7XHJcbiAgICAgIC51bmRlcl9saW5lIHtcclxuICAgICAgICB3aWR0aDogNTdweDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdXBlci10YWItYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICAgIC51bmRlcl9saW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbS1hY2NvcmRpb24tdmVoaWNsZSB7XHJcbiAgaGVpZ2h0OiAxMzhweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4wOXMgYWxsIGxpbmVhcjtcclxufVxyXG4uaXRlbS1hY2NvcmRpb24tbWVtYmVyIHtcclxuICBoZWlnaHQ6IDI3NnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIHRyYW5zaXRpb246IDAuMDlzIGFsbCBsaW5lYXI7XHJcbn1cclxuLml0ZW0tYWNjb3JkaW9uLWluYWN0aXZlIHtcclxuICBoZWlnaHQ6IDBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLy8gaW9uLWhlYWRlciB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vIH1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIGN1c3RvbSBzdXBlci10YWJcclxuOmhvc3Qge1xyXG4gIC0tc3VwZXItdGFicy10b29sYmFyLWJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIC0tc3QtaW5kaWNhdG9yLWNvbG9yOiAjRkZDMTQ0O1xyXG4gIC0tc3QtaW5kaWNhdG9yLXdpZHRoOiAzMHB4O1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2VnbWVudC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5idXR0b24tdGFiLWN1c3RvbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5uby1zY3JvbGwge1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnBhZGRpbmctbGVmdC0xMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5wYWRkaW5nLXJpZ2h0LTEwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tYXJnaW4tbGVmdC0wIHtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBjdXN0b20taW5wdXRcclxuLm5vLWZsb2F0aW5nLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jdXN0b20taW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmN1c3RvbS1pbnB1dC10ZXh0IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICAvLyAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbn1cclxuLmlucHV0LXRleHQtNTAge1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuLmlucHV0LXRleHQtNTAuaW9zIHtcclxuICAtLXBhZGRpbmctdG9wOiAwO1xyXG59XHJcbi5jdXN0b20tdGV4dGFyZWEge1xyXG4gIC8vIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jdXN0b20tdGV4dGFyZWEtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG59XHJcbi50ZXh0YXJlYS10ZXh0IHtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZmxhZy1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLml0ZW0tZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4gIC5pbnB1dC10ZXh0IHtcclxuICAgIGNvbG9yOiAjN2E4MzhjO1xyXG4gIH1cclxufVxyXG4uc2VsZWN0LXRleHQuaW9zIHtcclxuICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gIC8vIC0tcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbn1cclxuLmZ1bmN0aW9uLWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZWVhZTg7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHJnYmEoMjUwLCAxMTQsIDEwNCwgMC4yNSk7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDI1MCwgMTE0LCAxMDQsIDAuMjUpO1xyXG4gIC0taW9uLXRvb2xiYXItY29sb3I6ICNmZWVhZTg7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgyNTAsIDExNCwgMTA0LCAwLjI1KTtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBtYXJnaW46IDE2cHggMTBweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmRlbGV0ZS1idXR0b24tbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbn1cclxuLmFkZC1idXR0b24tYXBhIHtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2JlZTZmMztcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNiZWU2ZjM7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZDRlYmYzO1xyXG4gIC0taW9uLXRvb2xiYXItY29sb3I6ICNkNGViZjM7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2JlZTZmMztcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgbWFyZ2luOiAxNnB4IDEwcHggMTZweCAxMHB4O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYWRkLWJ1dHRvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAxYWVlZjtcclxufVxyXG5cclxuLnRpdGxlLW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzIyMWMxZTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLnRpdGxlLWNvbnRlbnQge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMjIxYzFlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5kYW5nZXItdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcbi5ib3JkZXItbGVmdCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjRmNWY1O1xyXG59XHJcbi5idXR0b24tY29sIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMjBweCAyMXB4O1xyXG59XHJcbi5jb250ZW50LWNvbCB7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4IDBweCAxNnB4O1xyXG59XHJcblxyXG4vLyBjdXN0b20gbGlzdCBhcGFydG1lbnRzXHJcbi5saXN0LWNvbnRlbnQubWQge1xyXG4gIC8vIG1hcmdpbjogMTBweCAxNnB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luOiAyMHB4IDE2cHggMjBweCAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogIzAwOWFjOTtcclxuICAtLWlvbi10b29sYmFyLWNvbG9yOiAjMDA5YWM5O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMwNDhhYjM7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMwNDhhYjM7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiAjMDQ4YWIzO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBtYXJnaW46IDE0cHggMTBweDtcclxuICAtLWJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggcmdiYSgzMywgNDksIDYzLCAwLjEpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmFkZC1idXR0b24taWNvbiB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIC8vbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5ub3JtYWwtYnV0dG9uIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50YWItY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjlmY2ZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG59XHJcbi50cmFuZmVyYW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zdGFyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyHomeDetailPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-my-home-detail',
            templateUrl: './my-home-detail.page.html',
            styleUrls: ['./my-home-detail.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-my-home-detail-my-home-detail-module-es5.js.map