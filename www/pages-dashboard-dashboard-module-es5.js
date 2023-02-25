(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
    /***/
    "/2RN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardPageModule */

    /***/
    function RN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
        return DashboardPageModule;
      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _dashboard_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard.router.module */
      "zjpb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard.page */
      "6ckw");

      var DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      DashboardPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DashboardPageModule
      });
      DashboardPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function DashboardPageModule_Factory(t) {
          return new (t || DashboardPageModule)();
        },
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _dashboard_router_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardPageModule, {
          declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _dashboard_router_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _dashboard_router_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"]],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "6ckw":
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /*! exports provided: DashboardPage */

    /***/
    function ckw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
        return DashboardPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = ["tabs"];

      var DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(apiService) {
          _classCallCheck(this, DashboardPage);

          this.apiService = apiService;
          this.tabIconEnable = false;
          this.iconSelected = 'home';
          this.serviceSelected = false;
          this.screenID = 'home';
          var userId = localStorage.getItem('playID');

          if (userId && userId.length > 0) {
            this.apiService.settingNotification({
              playerId: userId
            }).subscribe(function (result) {
              console.log("done " + userId);
            });
          }
        }

        _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "tabChanged",
          value: function tabChanged(event) {
            if (event.tab == 'services') {
              this.serviceSelected = true;
            } else {
              this.serviceSelected = false;
            }
          }
        }, {
          key: "isTabIconActiveShown",
          value: function isTabIconActiveShown() {
            return this.tabIconEnable;
          }
        }, {
          key: "iconTabServiceClick",
          value: function iconTabServiceClick() {
            this.tabs.select('services');
          }
        }, {
          key: "userRequestTab",
          value: function userRequestTab(screenID) {
            this.iconSelected = screenID;

            if (this.screenID != screenID) {
              this.screenID = screenID;
              this.apiService.userClickStatistic(screenID).subscribe(function (result) {}, function (error) {});
            }
          }
        }]);

        return DashboardPage;
      }();

      DashboardPage.ɵfac = function DashboardPage_Factory(t) {
        return new (t || DashboardPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      DashboardPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardPage,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t.first);
          }
        },
        decls: 31,
        vars: 16,
        consts: [[3, "ionTabsDidChange"], ["tabs", ""], ["vertical", "bottom", "horizontal", "center", "translucent", "true"], [3, "click"], [1, "fab-service-icon", 3, "src"], ["slot", "bottom", 1, "ion-no-border", "ion-tab-dashboard"], ["tab", "home", 1, "home", 3, "click"], [1, "tab-icon"], [1, "tab-label"], ["tab", "notification", 1, "noti", 3, "click"], ["tab", "services", 1, "service", 3, "click"], [1, "tab-icon-center"], ["tab", "requests", 1, "request", 3, "click"], ["tab", "payment", 1, "payment", 3, "click"]],
        template: function DashboardPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionTabsDidChange", function DashboardPage_Template_ion_tabs_ionTabsDidChange_0_listener($event) {
              return ctx.tabChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-fab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-fab-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPage_Template_ion_fab_button_click_3_listener() {
              return ctx.iconTabServiceClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-tab-bar", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPage_Template_ion_tab_button_click_6_listener() {
              return ctx.userRequestTab("home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-tab-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPage_Template_ion_tab_button_click_11_listener() {
              return ctx.userRequestTab("notification");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-tab-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPage_Template_ion_tab_button_click_16_listener() {
              return ctx.userRequestTab("service");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-tab-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPage_Template_ion_tab_button_click_21_listener() {
              return ctx.userRequestTab("request");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-tab-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPage_Template_ion_tab_button_click_26_listener() {
              return ctx.userRequestTab("chargeNotice");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", !ctx.serviceSelected ? "assets/icon/home/service.svg" : "assets/icon/home/service-active.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, "DASHBOARD.tab_home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 8, "DASHBOARD.tab_news"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 10, "DASHBOARD.tab_service"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, "DASHBOARD.tab_request"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 14, "DASHBOARD.tab_payment"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: [".tab-icon-center[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 30px;\n  padding: 2px 0;\n}\n\n.tab-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  padding: 5px 0;\n}\n\n.tab-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 11px;\n  line-height: 16px;\n  text-align: center;\n}\n\n.tab-selected[_ngcontent-%COMP%] {\n  color: #FFC144;\n  --font-weight: bold;\n}\n\n.ion-no-border[_ngcontent-%COMP%] {\n  --border: none;\n  box-shadow: 0px -10px 30px rgba(33, 49, 63, 0.1);\n}\n\n.noti.tab-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  content: url('news-active.svg');\n}\n\n.noti[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  content: url('news.svg');\n}\n\n.home.tab-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  content: url('home-active.svg');\n}\n\n.home[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  content: url('home.svg');\n}\n\n.payment.tab-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  content: url('payment-active.svg');\n}\n\n.payment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  content: url('payment.svg');\n}\n\n.request.tab-selected[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  content: url('inbox-active.svg');\n}\n\n.request[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  content: url('inbox.svg');\n}\n\nion-tab-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n\nion-tabs[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-bottom: env(safe-area-inset-bottom);\n  \n}\n\nion-tabs[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --box-shadow: none;\n  --background: none;\n  --background-activated: none;\n}\n\nion-tabs[_ngcontent-%COMP%]   .fab-vertical-bottom[_ngcontent-%COMP%] {\n  bottom: 20px;\n}\n\nion-tabs[_ngcontent-%COMP%]   .fab-service-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBRUY7O0FBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0VBQ0EsZ0RBQUE7QUFJRjs7QUFEQTtFQUNFLCtCQUFBO0FBSUY7O0FBRkE7RUFDRSx3QkFBQTtBQUtGOztBQUZBO0VBQ0UsK0JBQUE7QUFLRjs7QUFIQTtFQUNFLHdCQUFBO0FBTUY7O0FBSEE7RUFDRSxrQ0FBQTtBQU1GOztBQUpBO0VBQ0UsMkJBQUE7QUFPRjs7QUFKQTtFQUNFLGdDQUFBO0FBT0Y7O0FBTEE7RUFDRSx5QkFBQTtBQVFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdDO0VBQ0MsMENBQUE7RUFBNEMsaUJBQUE7QUFDOUM7O0FBQUU7RUFDQyxrQkFBQTtFQUNTLGtCQUFBO0VBQ0EsNEJBQUE7QUFFWjs7QUFDSTtFQUNJLFlBQUE7QUFDUjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItaWNvbi1jZW50ZXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAycHggMDtcclxufVxyXG4udGFiLWljb24ge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcbi50YWItbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvL21hcmdpbi10b3A6IDdweDtcclxufVxyXG4udGFiLXNlbGVjdGVkIHtcclxuICBjb2xvcjogI0ZGQzE0NDtcclxuICAtLWZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pb24tbm8tYm9yZGVyIHtcclxuICAtLWJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwcHggLTEwcHggMzBweCByZ2JhKDMzLCA0OSwgNjMsIDAuMSk7XHJcbn1cclxuXHJcbi5ub3RpLnRhYi1zZWxlY3RlZCBzcGFuIHtcclxuICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb24vc3ZnL25ld3MtYWN0aXZlLnN2Zyk7XHJcbn1cclxuLm5vdGkgc3BhbiB7XHJcbiAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29uL3N2Zy9uZXdzLnN2Zyk7XHJcbn1cclxuXHJcbi5ob21lLnRhYi1zZWxlY3RlZCBzcGFuIHtcclxuICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb24vc3ZnL2hvbWUtYWN0aXZlLnN2Zyk7XHJcbn1cclxuLmhvbWUgc3BhbiB7XHJcbiAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29uL3N2Zy9ob21lLnN2Zyk7XHJcbn1cclxuXHJcbi5wYXltZW50LnRhYi1zZWxlY3RlZCBzcGFuIHtcclxuICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb24vc3ZnL3BheW1lbnQtYWN0aXZlLnN2Zyk7XHJcbn1cclxuLnBheW1lbnQgc3BhbiB7XHJcbiAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29uL3N2Zy9wYXltZW50LnN2Zyk7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LnRhYi1zZWxlY3RlZCBzcGFuIHtcclxuICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb24vc3ZnL2luYm94LWFjdGl2ZS5zdmcpO1xyXG59XHJcbi5yZXF1ZXN0IHNwYW4ge1xyXG4gIGNvbnRlbnQ6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbi9zdmcvaW5ib3guc3ZnKTtcclxufVxyXG5cclxuLy8gLnNlcnZpY2UudGFiLXNlbGVjdGVkIHNwYW4ge1xyXG4vLyAgIGNvbnRlbnQ6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbi9ob21lL3NlcnZpY2UtYWN0aXZlLnN2Zyk7XHJcbi8vIH1cclxuLy8gLnNlcnZpY2Ugc3BhbiB7XHJcbi8vICAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29uL2hvbWUvc2VydmljZS5zdmcpO1xyXG4vLyB9XHJcblxyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuLy8gdGFiIGN1c3RvbVxyXG5pb24tdGFic3tcclxuXHRpb24tZmFiIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTsgLyogZml4IG5vdGNoIGlvcyovXHJcblx0XHRpb24tZmFiLWJ1dHRvbiB7XHJcblx0XHRcdC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxuICAgIC5mYWItdmVydGljYWwtYm90dG9tIHtcclxuICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZmFiLXNlcnZpY2UtaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, {
          tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabs', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "zjpb":
    /*!************************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.router.module.ts ***!
      \************************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function zjpb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.page */
      "6ckw");

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_2__["DashboardPage"],
        children: [{
          path: 'home',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | home-home-module */
              [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
              /*! ../home/home.module */
              "99Un")).then(function (m) {
                return m.HomePageModule;
              });
            }
          }]
        }, {
          path: 'notification',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | notification-notification-module */
              [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("notification-notification-module")]).then(__webpack_require__.bind(null,
              /*! ../notification/notification.module */
              "UUPU")).then(function (m) {
                return m.NotificationPageModule;
              });
            }
          }]
        }, {
          path: 'payment',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | payment-payment-module */
              [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("payment-payment-module")]).then(__webpack_require__.bind(null,
              /*! ../payment/payment.module */
              "mDHw")).then(function (m) {
                return m.PaymentPageModule;
              });
            }
          }]
        }, {
          path: 'services',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | services-new-services-module */
              "services-new-services-module").then(__webpack_require__.bind(null,
              /*! ../services-new/services.module */
              "N+V+")).then(function (m) {
                return m.ServicesPageModule;
              });
            }
          }]
        }, {
          path: 'requests',
          children: [{
            path: '',
            loadChildren: function loadChildren() {
              return Promise.all(
              /*! import() | requests-requests-module */
              [__webpack_require__.e("default~home-home-module~notification-notification-module~pages-add-home-member-add-home-member-modu~addf712b"), __webpack_require__.e("default~pages-popup-registration-type-popup-registration-type-module~requests-requests-module"), __webpack_require__.e("requests-requests-module")]).then(__webpack_require__.bind(null,
              /*! ../requests/requests.module */
              "hGdX")).then(function (m) {
                return m.RequestsPageModule;
              });
            }
          }]
        }]
      }, {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full'
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardRoutingModule
      });
      DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardRoutingModule_Factory(t) {
          return new (t || DashboardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map