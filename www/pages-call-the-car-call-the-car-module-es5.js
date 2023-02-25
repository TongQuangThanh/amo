(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-call-the-car-call-the-car-module"], {
    /***/
    "V77Z":
    /*!***********************************************************!*\
      !*** ./src/app/pages/call-the-car/call-the-car.module.ts ***!
      \***********************************************************/

    /*! exports provided: CallTheCarPageModule */

    /***/
    function V77Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallTheCarPageModule", function () {
        return CallTheCarPageModule;
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


      var _call_the_car_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./call-the-car.page */
      "xRkv");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");

      var routes = [{
        path: '',
        component: _call_the_car_page__WEBPACK_IMPORTED_MODULE_5__["CallTheCarPage"]
      }];

      var CallTheCarPageModule = function CallTheCarPageModule() {
        _classCallCheck(this, CallTheCarPageModule);
      };

      CallTheCarPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CallTheCarPageModule
      });
      CallTheCarPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CallTheCarPageModule_Factory(t) {
          return new (t || CallTheCarPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CallTheCarPageModule, {
          declarations: [_call_the_car_page__WEBPACK_IMPORTED_MODULE_5__["CallTheCarPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallTheCarPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_call_the_car_page__WEBPACK_IMPORTED_MODULE_5__["CallTheCarPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xRkv":
    /*!*********************************************************!*\
      !*** ./src/app/pages/call-the-car/call-the-car.page.ts ***!
      \*********************************************************/

    /*! exports provided: CallTheCarPage */

    /***/
    function xRkv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallTheCarPage", function () {
        return CallTheCarPage;
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


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CallTheCarPage_ion_item_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CallTheCarPage_ion_item_9_Template_ion_item_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.detailPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", object_r1._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", object_r1.url_logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r1.text_place);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r1.text_star_rate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r1.text_tag);
        }
      }

      var CallTheCarPage = /*#__PURE__*/function () {
        function CallTheCarPage(translate, loading, apiService, navCtrl, alertService, platform) {
          _classCallCheck(this, CallTheCarPage);

          this.translate = translate;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.alertService = alertService;
          this.platform = platform;
        }

        _createClass(CallTheCarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listDataMarket = [{
              _id: "",
              url_logo: "../assets/images/services/4.png",
              title: "Dịch vụ đặt xe Caro",
              text_place: "31 Trần Duy Hưng - Cầu Giấy",
              text_star_rate: "4.5",
              text_tag: "Giảm giá vé 10%"
            }, {
              _id: "",
              url_logo: "../assets/images/services/5.png",
              title: "Đặt xe liên tỉnh HasonHaivan",
              text_place: "31 Trần Duy Hưng - Cầu Giấy",
              text_star_rate: "4.5",
              text_tag: "Giảm giá vé 15%"
            }, {
              _id: "",
              url_logo: "../assets/images/services/4.png",
              title: "Dịch vụ đặt xe Caro",
              text_place: "31 Trần Duy Hưng - Cầu Giấy",
              text_star_rate: "4.5",
              text_tag: "Giảm giá vé 10%"
            }, {
              _id: "",
              url_logo: "../assets/images/services/5.png",
              title: "Đặt xe liên tỉnh HasonHaivan",
              text_place: "31 Trần Duy Hưng - Cầu Giấy",
              text_star_rate: "4.5",
              text_tag: "Giảm giá vé 15%"
            }];
          }
        }, {
          key: "detailPage",
          value: function detailPage(event) {
            this.navCtrl.navigateForward('/call-the-car-detail/' + event.currentTarget.id);
          }
        }]);

        return CallTheCarPage;
      }();

      CallTheCarPage.ɵfac = function CallTheCarPage_Factory(t) {
        return new (t || CallTheCarPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      };

      CallTheCarPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CallTheCarPage,
        selectors: [["app-call-the-car"]],
        decls: 10,
        vars: 4,
        consts: [[1, "ion-no-border"], ["slot", "start"], ["text", ""], [1, "list-view-custom"], ["class", "ion-item-class ion-no-padding", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "ion-item-class", "ion-no-padding", 3, "id", "click"], ["slot", "start", 1, "div-logo"], [3, "src"], [1, "group-1-text-title"], [1, "font-weight-bold"], [1, "group-1-text-place"], ["src", "../assets/icon/svg/icon-place.svg", 1, "group-1-icon-place"], [1, "group-1-text-star"], ["src", "../assets/icon/svg/icon-star.svg", 1, "group-1-icon-star"], [1, "class-label-rate"], ["src", "../assets/icon/svg/icon-tag.svg", 1, "group-1-icon-tag"]],
        template: function CallTheCarPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CallTheCarPage_ion_item_9_Template, 18, 6, "ion-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "INBOX_36.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listDataMarket);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.button-add-new-market[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  border-radius: 15px;\n  height: 25px;\n  top: calc(50% - 15px);\n  font-size: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 6px;\n  padding-right: 11px;\n}\n\n.button-add-new-market[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.padding-bottom-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.padding-bottom-15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.button-1[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-grid;\n  text-align: center;\n  width: 100%;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.class-image-button[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-25[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.text-button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 10px;\n}\n\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.padding-start-0[_ngcontent-%COMP%] {\n  --padding-start:0;\n}\n\n.ion-align-self-end[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #009AC9;\n}\n\n.ion-no-padding[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.margin-right-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.margin-top-5[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.group-1-text-title[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: flex-end;\n  display: inline-flex;\n  padding: 10px 10px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n  font-weight: 500;\n}\n\n.group-1-icon-place[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.group-1-text-place[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313F;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  padding-bottom: 5px;\n}\n\n.group-1-text-star[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313F;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  padding-bottom: 10px;\n}\n\n.group-1-icon-star[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 3px;\n}\n\n.group-1-icon-tag[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 8px;\n}\n\n.ion-item-class[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #F4F5F5;\n  margin: 0px 20px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  --inner-border-width: 0px;\n}\n\n.class-label-rate[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.div-logo[_ngcontent-%COMP%] {\n  -webkit-margin-end: 10px;\n          margin-inline-end: 10px;\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsbC10aGUtY2FyL2NhbGwtdGhlLWNhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksb0JBQUE7QUFJSjs7QUFGQTtFQUNJLG9CQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtBQU9KOztBQUxBO0VBQ0ksZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLGlCQUFBO0FBWUo7O0FBVkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFhSjs7QUFYQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7QUFjSjs7QUFaQTtFQUNJLGlCQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0FBZ0JKOztBQWJBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBZkE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBcUJKOztBQWxCQTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksV0FBQTtBQXNCSjs7QUFwQkE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQXVCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGwtdGhlLWNhci9jYWxsLXRoZS1jYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ1dHRvbi1hZGQtbmV3LW1hcmtldCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTVweCk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweCA2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xyXG59XHJcbi5idXR0b24tYWRkLW5ldy1tYXJrZXQgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ucGFkZGluZy1ib3R0b20tMjAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZGRpbmctYm90dG9tLTE1IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi5idXR0b24tMSB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbi5jbGFzcy1pbWFnZS1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLm1hcmdpbi10b3AtMjAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubWFyZ2luLXRvcC0yNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi50ZXh0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmZvbnQtd2VpZ2h0LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucGFkZGluZy1zdGFydC0wIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDowO1xyXG59XHJcbi5pb24tYWxpZ24tc2VsZi1lbmQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzAwOUFDOTtcclxufVxyXG4uaW9uLW5vLXBhZGRpbmcge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuLm1hcmdpbi1yaWdodC01IHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZ3JvdXAtMS10ZXh0LXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAjMjEzMTNGO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uZ3JvdXAtMS1pY29uLXBsYWNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5ncm91cC0xLXRleHQtcGxhY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMjEzMTNGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5ncm91cC0xLXRleHQtc3RhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyMTMxM0Y7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5ncm91cC0xLWljb24tc3RhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLmdyb3VwLTEtaWNvbi10YWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmlvbi1pdGVtLWNsYXNzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjRGNUY1O1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xyXG59XHJcbi5jbGFzcy1sYWJlbC1yYXRlIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcbi5kaXYtbG9nbyB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallTheCarPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-call-the-car',
            templateUrl: './call-the-car.page.html',
            styleUrls: ['./call-the-car.page.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-call-the-car-call-the-car-module-es5.js.map