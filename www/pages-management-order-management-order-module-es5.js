(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-management-order-management-order-module"], {
    /***/
    "29VG":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/management-order/management-order.page.ts ***!
      \*****************************************************************/

    /*! exports provided: ManagementOrderPage */

    /***/
    function VG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagementOrderPage", function () {
        return ManagementOrderPage;
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


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "KqBo");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");

      function ManagementOrderPage_super_tab_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "super-tab-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r2.title);
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SERVICE_45.status_processing"));
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SERVICE_45.status_accepted_provider"));
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SERVICE_45.status_accepted_provider_groupon"));
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SERVICE_45.status_confirm_user"));
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SERVICE_45.status_accepted_user"));
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SERVICE_45.status_finish"));
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SERVICE_45.status_cancel_user"));
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SERVICE_45.status_cancel_provider"));
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagementOrderPage_super_tab_12_ion_grid_2_div_13_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r15.showComplainText($event, data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ManagementOrderPage_super_tab_12_ion_grid_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-col", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_5_Template, 3, 3, "ion-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_6_Template, 3, 3, "ion-label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_7_Template, 3, 3, "ion-label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_8_Template, 3, 3, "ion-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_9_Template, 3, 3, "ion-label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_10_Template, 3, 3, "ion-label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_11_Template, 3, 3, "ion-label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManagementOrderPage_super_tab_12_ion_grid_2_ion_label_12_Template, 3, 3, "ion-label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ManagementOrderPage_super_tab_12_ion_grid_2_div_13_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagementOrderPage_super_tab_12_ion_grid_2_Template_ion_col_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var data_r5 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r18.gotoManagementOrderDetail(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-row", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagementOrderPage_super_tab_12_ion_grid_2_Template_ion_row_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var data_r5 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r20.gotoManagementOrderDetail(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-col", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", data_r5.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.status == "processing");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.status == "accepted-provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.status == "accepted-provider-groupon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.status == "confirm-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.status == "accepted-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.status == "finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.status == "cancel-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.status == "cancel-provider");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.userComplain != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.date_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 17, "SERVICE_45.order_address"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.order_address);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", data_r5.money, "\u0111");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", data_r5.orderInfor.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 19, "SERVICE_45.label_product"), "");
        }
      }

      function ManagementOrderPage_super_tab_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "super-tab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ManagementOrderPage_super_tab_12_ion_grid_2_Template, 38, 21, "ion-grid", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", object_r3.data);
        }
      }

      var _c0 = function _c0() {
        return {
          debug: false,
          sideMenu: "left",
          allowElementScroll: true,
          nativeSmoothScroll: true
        };
      };

      var ManagementOrderPage = /*#__PURE__*/function () {
        function ManagementOrderPage(modalController, camera, actionSheetController, loading, navCtrl, apiService, datePipe, translate, alertController, alertService) {
          _classCallCheck(this, ManagementOrderPage);

          this.modalController = modalController;
          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.loading = loading;
          this.navCtrl = navCtrl;
          this.apiService = apiService;
          this.datePipe = datePipe;
          this.translate = translate;
          this.alertController = alertController;
          this.alertService = alertService;
        }

        _createClass(ManagementOrderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.data_history = [];
            this.getAllOrderHistorysByProvider();
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var self, alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self = this;
                      _context.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: self.translate.instant('COMMON.information'),
                        message: message,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlertComplain",
          value: function presentAlertComplain(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var self, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      self = this;
                      _context2.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: self.translate.instant('COMMON.complain'),
                        message: message,
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context2.sent;
                      _context2.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getAllOrderHistorysByProvider",
          value: function getAllOrderHistorysByProvider() {
            var _this = this;

            var self = this;
            this.loading.present();
            this.apiService.getListOrderHistorysByProvider().subscribe(function (result) {
              self.data_history = [{
                id_tab: "0",
                title: self.translate.instant('SERVICE_45.tab_all_title'),
                data: []
              }, {
                id_tab: "processing",
                title: self.translate.instant('SERVICE_45.tab_processing_title'),
                data: []
              }, {
                id_tab: "groupon",
                title: self.translate.instant('SERVICE_45.tab_groupon_title'),
                data: []
              }, {
                id_tab: "delivery",
                title: self.translate.instant('SERVICE_45.tab_accepted_title'),
                data: []
              }, {
                id_tab: "finish",
                title: self.translate.instant('SERVICE_45.tab_finish_title'),
                data: []
              }, {
                id_tab: "cancel",
                title: self.translate.instant('SERVICE_45.tab_cancel_title'),
                data: []
              }];
              result.ordersHistory.forEach(function (product) {
                var is_groupon = false;

                if (product.orderInfor.length == 1 && product.orderInfor[0].promotionCode) {
                  is_groupon = true;
                }

                var status_order = product.status;
                var id_tab = 'processing';

                if (status_order == 'processing') {
                  id_tab = "processing";
                } else if (status_order == 'accepted-provider') {
                  if (is_groupon) {
                    id_tab = "groupon";

                    if (product.userPromotionCodeConfirmText) {
                      status_order = "confirm-user";
                    } else {
                      status_order = "accepted-provider-groupon";
                    }
                  } else {
                    id_tab = "delivery";
                  }
                } else if (status_order == 'accepted-user') {
                  id_tab = "delivery";
                } else if (status_order == 'finish') {
                  id_tab = "finish";
                } else if (status_order == 'cancel-user') {
                  id_tab = "cancel";
                } else if (status_order == 'cancel-provider') {
                  id_tab = "cancel";
                }

                var index = self.getIndexCategoryInList(id_tab);

                if (index > -1) {
                  var money = 0;

                  if (product.orderInfor && product.orderInfor.length > 0) {
                    product.orderInfor.forEach(function (record) {
                      money = money + record.number * record.price;
                    });
                  }

                  var money_convert = self.convertFormatMoney(money);
                  var date = new Date(product.orderAt);

                  var date_convert = _this.datePipe.transform(date, "dd/MM/yyyy");

                  var order_address = product.appartment.title + ' - ' + product.appartment.campaign.title + ', ' + product.appartment.campaign.address;
                  var object = {
                    _id: product._id,
                    id_tab: id_tab,
                    status: status_order,
                    text_rate: product.starsProvider,
                    title: product.requestShopProduct ? product.requestShopProduct.title : "",
                    money: money_convert,
                    avatar: product.createdBy.avatar,
                    name: product.createdBy.displayName,
                    role: "CEO",
                    code_orders: product._id,
                    date_time: date_convert,
                    orderInfor: product.orderInfor,
                    createdBy: product.createdBy,
                    order_address: order_address,
                    is_groupon: is_groupon,
                    message: product.userPromotionCodeConfirmText ? product.userPromotionCodeConfirmText : "",
                    userComplain: product.userComplain ? product.userComplain : ""
                  };
                  self.data_history[index]['data'].push(object);
                  var index_all = self.getIndexCategoryInList("0");
                  self.data_history[index_all]['data'].push(object);
                }
              });
              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "gotoManagementOrderDetail",
          value: function gotoManagementOrderDetail(object) {
            localStorage.setItem('data-management-order', JSON.stringify(object));
            this.navCtrl.navigateForward('/management-order-detail');
          }
        }, {
          key: "convertFormatMoney",
          value: function convertFormatMoney(value) {
            value = value.toString();
            var convert1 = "";
            var convert2 = "";
            var count1 = value.length;

            for (var i = 1; i <= count1; i++) {
              if (i % 3 == 0 && i != count1) {
                convert1 = convert1 + value[count1 - i] + '.';
              } else {
                convert1 = convert1 + value[count1 - i];
              }
            }

            var count2 = convert1.length;

            for (var _i = 1; _i <= count2; _i++) {
              convert2 = convert2 + convert1[count2 - _i];
            }

            return convert2;
          }
        }, {
          key: "getIndexCategoryInList",
          value: function getIndexCategoryInList(id_tab) {
            var self = this;
            var index = -1;
            var index_value = -1;
            self.data_history.forEach(function (object) {
              index++;

              if (object.id_tab == id_tab) {
                index_value = index;
              }
            });
            return index_value;
          }
        }, {
          key: "moveToChatToShopPage",
          value: function moveToChatToShopPage(object) {
            localStorage.setItem('data-management-order', JSON.stringify(object));
            this.navCtrl.navigateForward('/chat-to-shop');
          }
        }, {
          key: "showComplainText",
          value: function showComplainText(event, data) {
            this.presentAlertComplain(data.userComplain);
            event.preventDefault();
          }
        }]);

        return ManagementOrderPage;
      }();

      ManagementOrderPage.ɵfac = function ManagementOrderPage_Factory(t) {
        return new (t || ManagementOrderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]));
      };

      ManagementOrderPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ManagementOrderPage,
        selectors: [["app-management-order"]],
        decls: 13,
        vars: 7,
        consts: [[1, "ion-no-border"], ["slot", "start"], ["text", "", "icon", "chevron-back"], ["activeTabIndex", "0", 1, "class-super-tabs", 3, "config"], ["slot", "top", "scrollable", "true", "scrollable-padding", "false"], [4, "ngFor", "ngForOf"], ["autoScrollTop", ""], ["class", "ion-padding hidden-overflow", 4, "ngFor", "ngForOf"], [1, ""], [1, "ion-padding", "hidden-overflow"], ["lines", "full", 1, "ion-no-margin", "ion-no-padding"], ["class", "ion-no-padding scroll-class line-bottom", 3, "id", 4, "ngFor", "ngForOf"], [1, "ion-no-padding", "scroll-class", "line-bottom", 3, "id"], [1, "ion-no-padding"], ["size", "8", 1, "center-div"], ["lines", "none", 1, "ion-no-padding"], ["class", "ion-label-1", 4, "ngIf"], ["class", "ion-label-2", 4, "ngIf"], ["class", "ion-label-3", 4, "ngIf"], ["class", "ion-label-4", 4, "ngIf"], ["class", "margin-left-10", 3, "click", 4, "ngIf"], ["size", "4", 3, "click"], [1, "item-date-time"], [1, "ion-no-padding", 3, "click"], ["size", "8", 1, ""], [1, "div-title-row-2-col-1"], [1, "font-weight-bold"], [1, "div-col-1"], [1, "order-address"], ["size", "4", 1, ""], [1, "div-title-row-2-col-2"], [1, "label-number-product"], [1, "ion-label-1"], [1, "ion-label-2"], [1, "ion-label-3"], [1, "ion-label-4"], [1, "margin-left-10", 3, "click"], ["src", "../assets/icon/svg/complaint.svg", "alt", "", 1, "img-responsive"]],
        template: function ManagementOrderPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "super-tabs", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "super-tabs-toolbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ManagementOrderPage_super_tab_button_10_Template, 3, 1, "super-tab-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "super-tabs-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManagementOrderPage_super_tab_12_Template, 3, 1, "super-tab", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "SERVICE_45.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data_history);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data_history);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabs"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabsToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabsContainer"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_9__["SuperTab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonImg"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.ion-color-primary[_ngcontent-%COMP%] {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: #FFC144 !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\nsuper-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-transform: unset;\n  font-size: 16px;\n  line-height: 24px;\n  color: #7A838C;\n}\n\nsuper-tab-button.active[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: bold;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start:0px ;\n}\n\n.ion-label-1[_ngcontent-%COMP%] {\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #fcf4db;\n  border-radius: 4px;\n  padding: 3px 15px;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #F2C94C;\n  font-weight: bold;\n}\n\n.ion-label-2[_ngcontent-%COMP%] {\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #D4EBF3;\n  border-radius: 4px;\n  padding: 3px 15px;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #009AC9;\n  font-weight: bold;\n}\n\n.ion-label-3[_ngcontent-%COMP%] {\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #dcf6f0;\n  border-radius: 4px;\n  padding: 3px 15px;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #51D2B5;\n  font-weight: bold;\n}\n\n.ion-label-4[_ngcontent-%COMP%] {\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #fbe0de;\n  border-radius: 4px;\n  padding: 3px 15px;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #FFC144;\n  font-weight: bold;\n}\n\n.div-status[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  padding-top: 5px;\n}\n\n.div-title-row-2-col-1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n}\n\n.div-title-row-2-col-2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #21313F;\n  font-weight: 500;\n  display: grid;\n}\n\n.item-date-time[_ngcontent-%COMP%] {\n  float: right;\n  --border-width: 0;\n}\n\n.item-date-time[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #7A838C;\n  margin: 0;\n}\n\n.group-2-col-2[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.group-2-col-2[_ngcontent-%COMP%]   .div-logo[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.group-2-col-2[_ngcontent-%COMP%]   .div-text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.div-col-1[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #7A838C;\n  margin-top: 4px;\n  display: flex;\n}\n\n.div-col-1[_ngcontent-%COMP%]   .order-address[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-right: 10px;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  display: inline-grid;\n  vertical-align: middle;\n  align-items: center;\n}\n\n.line-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #F4F5F5;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.avatar-class[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  -webkit-margin-end: 10px;\n          margin-inline-end: 10px;\n}\n\n.label-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 15px;\n  color: #21313F;\n  margin: 0;\n}\n\n.no-border[_ngcontent-%COMP%] {\n  --border-width: 0;\n}\n\n.div-button-chat[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.user-order-inf[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --min-height: 32px;\n}\n\n.label-number-product[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  text-align: right;\n  color: #7A838C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlbWVudC1vcmRlci9tYW5hZ2VtZW50LW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQ0FBQTtFQUNBLDJFQUFBO0VBQ0Esd0NBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSx3QkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVZBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQWFKOztBQVhBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFlSjs7QUFiQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBaUJKOztBQWZBO0VBQ0ksYUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxVQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0FBb0JKOztBQWxCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQXFCSjs7QUFuQkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBc0JKOztBQXBCQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUF3Qko7O0FBdEJBOzs7Ozs7Ozs7Ozs7RUFhSSxVQUFBO0FBd0JKOztBQXJCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBeUJKOztBQXZCQTtFQUNJLGlCQUFBO0FBMEJKOztBQXhCQTtFQUNJLFlBQUE7QUEyQko7O0FBekJBO0VBQ0ksa0JBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBNkJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuYWdlbWVudC1vcmRlci9tYW5hZ2VtZW50LW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pb24tY29sb3ItcHJpbWFyeSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogI0ZGQzE0NCAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xyXG59XHJcbnN1cGVyLXRhYi1idXR0b24gaW9uLWxhYmVse1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzdBODM4QztcclxufVxyXG5zdXBlci10YWItYnV0dG9uLmFjdGl2ZSBpb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tYXJnaW4tdG9wLTIwIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm1hcmdpbi10b3AtMTAge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubWFyZ2luLWxlZnQtMTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6MHB4XHJcbn1cclxuLmlvbi1sYWJlbC0xIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y0ZGI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGMkM5NEM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW9uLWxhYmVsLTIge1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RUJGMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDNweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwOUFDOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pb24tbGFiZWwtMyB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNmNmYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNTFEMkI1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmlvbi1sYWJlbC00IHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmUwZGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGl2LXN0YXR1cyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLmRpdi10aXRsZS1yb3ctMi1jb2wtMSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufVxyXG4uZGl2LXRpdGxlLXJvdy0yLWNvbC0yIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbi5pdGVtLWRhdGUtdGltZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG4uaXRlbS1kYXRlLXRpbWUgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM3QTgzOEM7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmdyb3VwLTItY29sLTIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZ3JvdXAtMi1jb2wtMiAuZGl2LWxvZ28ge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4uZ3JvdXAtMi1jb2wtMiAuZGl2LXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5kaXYtY29sLTEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzdBODM4QztcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmRpdi1jb2wtMSAub3JkZXItYWRkcmVzcyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5jZW50ZXItZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxpbmUtYm90dG9tIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjRGNUY1O1xyXG59XHJcbi5jb2wtMSwgXHJcbi5jb2wtMixcclxuLmNvbC0zLFxyXG4uY29sLTQsXHJcbi5jb2wtNSxcclxuLmNvbC02LFxyXG4uY29sLTcsXHJcbi5jb2wtOCxcclxuLmNvbC05LFxyXG4uY29sLTEwLFxyXG4uY29sLTExLFxyXG4uY29sLTEyXHJcbntcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5hdmF0YXItY2xhc3Mge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMTBweDtcclxufVxyXG4ubGFiZWwtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubm8tYm9yZGVyIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbi5kaXYtYnV0dG9uLWNoYXQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi51c2VyLW9yZGVyLWluZiBpb24taXRlbXtcclxuICAgIC0tbWluLWhlaWdodDogMzJweDtcclxufVxyXG4ubGFiZWwtbnVtYmVyLXByb2R1Y3Qge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjN0E4MzhDO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManagementOrderPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-management-order',
            templateUrl: './management-order.page.html',
            styleUrls: ['./management-order.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
          }, {
            type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qbJL":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/management-order/management-order.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ManagementOrderPageModule */

    /***/
    function qbJL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManagementOrderPageModule", function () {
        return ManagementOrderPageModule;
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


      var _management_order_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./management-order.page */
      "29VG");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");

      var routes = [{
        path: '',
        component: _management_order_page__WEBPACK_IMPORTED_MODULE_5__["ManagementOrderPage"]
      }];

      var ManagementOrderPageModule = function ManagementOrderPageModule() {
        _classCallCheck(this, ManagementOrderPageModule);
      };

      ManagementOrderPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ManagementOrderPageModule
      });
      ManagementOrderPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ManagementOrderPageModule_Factory(t) {
          return new (t || ManagementOrderPageModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagementOrderPageModule, {
          declarations: [_management_order_page__WEBPACK_IMPORTED_MODULE_5__["ManagementOrderPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagementOrderPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_management_order_page__WEBPACK_IMPORTED_MODULE_5__["ManagementOrderPage"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-management-order-management-order-module-es5.js.map