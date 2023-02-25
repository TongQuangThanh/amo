(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-shop-history-order-shop-history-module"], {
    /***/
    "/nu9":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/order-shop-history/order-shop-history.page.ts ***!
      \*********************************************************************/

    /*! exports provided: OrderShopHistoryPage */

    /***/
    function nu9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderShopHistoryPage", function () {
        return OrderShopHistoryPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var OrderShopHistoryPage = /*#__PURE__*/function () {
        function OrderShopHistoryPage() {
          _classCallCheck(this, OrderShopHistoryPage);
        }

        _createClass(OrderShopHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrderShopHistoryPage;
      }();

      OrderShopHistoryPage.ɵfac = function OrderShopHistoryPage_Factory(t) {
        return new (t || OrderShopHistoryPage)();
      };

      OrderShopHistoryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderShopHistoryPage,
        selectors: [["app-order-shop-history"]],
        decls: 5,
        vars: 0,
        template: function OrderShopHistoryPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "orderShopHistory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-content");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLXNob3AtaGlzdG9yeS9vcmRlci1zaG9wLWhpc3RvcnkucGFnZS5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderShopHistoryPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-shop-history',
            templateUrl: './order-shop-history.page.html',
            styleUrls: ['./order-shop-history.page.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "6j+R":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/order-shop-history/order-shop-history-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: OrderShopHistoryPageRoutingModule */

    /***/
    function jR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderShopHistoryPageRoutingModule", function () {
        return OrderShopHistoryPageRoutingModule;
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


      var _order_shop_history_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-shop-history.page */
      "/nu9");

      var routes = [{
        path: '',
        component: _order_shop_history_page__WEBPACK_IMPORTED_MODULE_2__["OrderShopHistoryPage"]
      }];

      var OrderShopHistoryPageRoutingModule = function OrderShopHistoryPageRoutingModule() {
        _classCallCheck(this, OrderShopHistoryPageRoutingModule);
      };

      OrderShopHistoryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderShopHistoryPageRoutingModule
      });
      OrderShopHistoryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderShopHistoryPageRoutingModule_Factory(t) {
          return new (t || OrderShopHistoryPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderShopHistoryPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderShopHistoryPageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RGXL":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/order-shop-history/order-shop-history.module.ts ***!
      \***********************************************************************/

    /*! exports provided: OrderShopHistoryPageModule */

    /***/
    function RGXL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderShopHistoryPageModule", function () {
        return OrderShopHistoryPageModule;
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


      var _order_shop_history_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./order-shop-history-routing.module */
      "6j+R");
      /* harmony import */


      var _order_shop_history_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-shop-history.page */
      "/nu9");

      var OrderShopHistoryPageModule = function OrderShopHistoryPageModule() {
        _classCallCheck(this, OrderShopHistoryPageModule);
      };

      OrderShopHistoryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderShopHistoryPageModule
      });
      OrderShopHistoryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderShopHistoryPageModule_Factory(t) {
          return new (t || OrderShopHistoryPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _order_shop_history_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderShopHistoryPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderShopHistoryPageModule, {
          declarations: [_order_shop_history_page__WEBPACK_IMPORTED_MODULE_5__["OrderShopHistoryPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _order_shop_history_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderShopHistoryPageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderShopHistoryPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _order_shop_history_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderShopHistoryPageRoutingModule"]],
            declarations: [_order_shop_history_page__WEBPACK_IMPORTED_MODULE_5__["OrderShopHistoryPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-order-shop-history-order-shop-history-module-es5.js.map