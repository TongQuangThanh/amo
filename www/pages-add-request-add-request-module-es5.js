(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-request-add-request-module"], {
    /***/
    "VpPe":
    /*!*********************************************************!*\
      !*** ./src/app/pages/add-request/add-request.module.ts ***!
      \*********************************************************/

    /*! exports provided: AddRequestPageModule */

    /***/
    function VpPe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRequestPageModule", function () {
        return AddRequestPageModule;
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


      var _add_request_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-request.page */
      "g2nv");
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "KqBo");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _add_request_page__WEBPACK_IMPORTED_MODULE_5__["AddRequestPage"]
      }];

      var AddRequestPageModule = function AddRequestPageModule() {
        _classCallCheck(this, AddRequestPageModule);
      };

      AddRequestPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddRequestPageModule
      });
      AddRequestPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddRequestPageModule_Factory(t) {
          return new (t || AddRequestPageModule)();
        },
        providers: [_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddRequestPageModule, {
          declarations: [_add_request_page__WEBPACK_IMPORTED_MODULE_5__["AddRequestPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRequestPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            providers: [_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]],
            declarations: [_add_request_page__WEBPACK_IMPORTED_MODULE_5__["AddRequestPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "g2nv":
    /*!*******************************************************!*\
      !*** ./src/app/pages/add-request/add-request.page.ts ***!
      \*******************************************************/

    /*! exports provided: AddRequestPage */

    /***/
    function g2nv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRequestPage", function () {
        return AddRequestPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _popup_registration_success_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../popup-registration-success/popup-registration-success.page */
      "6HEc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+"); // import { File, IWriteOptions, FileEntry } from '@ionic-native/file/ngx';


      function AddRequestPage_label_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REGISTRATION_GUEST.apartment"));
        }
      }

      function AddRequestPage_ion_select_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r10.apartment._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.apartment.title + " - " + item_r10.campaign.title);
        }
      }

      function AddRequestPage_label_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "ADD_REQUEST.category"));
        }
      }

      function AddRequestPage_ion_select_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r11._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11.title);
        }
      }

      function AddRequestPage_ion_grid_36_ion_col_2_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestPage_ion_grid_36_ion_col_2_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var image_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r16.deleteImageToList(image_r13.index);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddRequestPage_ion_grid_36_ion_col_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestPage_ion_grid_36_ion_col_2_div_4_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r19.showAllImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r15.number_of_image - 4, "");
        }
      }

      function AddRequestPage_ion_grid_36_ion_col_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddRequestPage_ion_grid_36_ion_col_2_button_3_Template, 3, 0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddRequestPage_ion_grid_36_ion_col_2_div_4_Template, 3, 1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r13.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.number_of_image <= 4 || image_r13.index < 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.number_of_image > 4 && image_r13.index == 3);
        }
      }

      function AddRequestPage_ion_grid_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AddRequestPage_ion_grid_36_ion_col_2_Template, 5, 3, "ion-col", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestPage_ion_grid_36_Template_ion_item_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.selectImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.list_image_1);
        }
      }

      function AddRequestPage_ion_item_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestPage_ion_item_37_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.selectImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "ADD_REQUEST.add_image_label"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "ADD_REQUEST.add_image_sub_label"));
        }
      }

      function AddRequestPage_ion_button_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ADD_REQUEST.btn_submit"));
        }
      }

      function AddRequestPage_ion_button_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestPage_ion_button_39_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.pushRequestToServer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "ADD_REQUEST.btn_submit"));
        }
      }

      function AddRequestPage_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 49);
        }
      }

      function AddRequestPage_div_41_ion_col_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestPage_div_41_ion_col_12_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

            var image_r28 = ctx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r29.deleteImageToList(image_r28.index);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var image_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", image_r28.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function AddRequestPage_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestPage_div_41_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r31.eventButtonClosePopupImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AddRequestPage_div_41_ion_col_12_Template, 6, 1, "ion-col", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddRequestPage_div_41_Template_ion_item_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r33.selectImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.list_image);
        }
      }

      var AddRequestPage = /*#__PURE__*/function () {
        function AddRequestPage(modalController, translate, camera, platform, // private diagnostic: Diagnostic,
        actionSheetController, // private file: File,
        navCtrl, apiService, loading, authService, alertService) {
          var _this = this;

          _classCallCheck(this, AddRequestPage);

          this.modalController = modalController;
          this.translate = translate;
          this.camera = camera;
          this.platform = platform;
          this.actionSheetController = actionSheetController;
          this.navCtrl = navCtrl;
          this.apiService = apiService;
          this.loading = loading;
          this.authService = authService;
          this.alertService = alertService;
          this.croppedImagepath = '';
          this.departmentID = '';
          this.departmentName = '';
          this.form_apartment_class = '';
          this.listImage = [];
          this.list_image_select = [];
          this.isErrorFormType = false;
          this.isErrorTitle = false;
          this.isErrorMessage = false;
          this.isErrorDepartmentID = false;
          this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
          };
          this.hasBaseDropZoneOver = false;

          this.blobToFile = function (theBlob, fileName) {
            var b = theBlob; //A Blob() is almost a File() - it's just missing the two properties below which we will add

            b.lastModifiedDate = new Date();
            b.name = fileName; //Cast to a File() type

            return theBlob;
          };

          platform.ready().then(function (readySource) {
            _this.widthListScreen = platform.width() * 0.8;
          });
        }

        _createClass(AddRequestPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form_type = '';
            this.form_type_class = '';
            this.getUserApar();
            this.list_image = [];
            this.flag_show_all_image = false;
            this.breakListImage();
          }
        }, {
          key: "ionChangePulldown1",
          value: function ionChangePulldown1(event) {
            if (this.form_type != '') {
              this.form_type_class = 'has-input-value';
            } else {
              this.form_type_class = '';
            }
          }
        }, {
          key: "breakListImage",
          value: function breakListImage() {
            var self = this;
            var index = 0;
            this.list_image_1 = [];
            this.number_of_image = self.list_image.length;

            for (var i = 0; i < self.number_of_image; i++) {
              self.list_image[i].index = index;
              index++;

              if (index < 5) {
                self.list_image_1.push(self.list_image[i]);
              }
            }
          }
        }, {
          key: "deleteImageToList",
          value: function deleteImageToList(index) {
            var self = this;
            this.list_image.forEach(function (element) {
              if (element.index == index) {
                self.list_image.splice(index, 1);
              }
            });
            this.breakListImage();
          }
        }, {
          key: "showAllImage",
          value: function showAllImage() {
            this.flag_show_all_image = true;
          }
        }, {
          key: "eventButtonClosePopupImage",
          value: function eventButtonClosePopupImage() {
            this.flag_show_all_image = false;
          }
        }, {
          key: "getFeedbackCategory",
          value: function getFeedbackCategory(apartmentID) {
            var self = this;
            this.loading.present();
            this.apiService.getFeedbackCategory(apartmentID).subscribe(function (result) {
              self.listTopic = result.feedbackCategories;
              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "getUserApar",
          value: function getUserApar() {
            var _this2 = this;

            var self = this;
            this.loading.present();
            this.apiService.getListUserApartment().subscribe(function (result) {
              self.listDepartment = result.userApartments;

              if (self.listDepartment.length > 0) {
                self.departmentID = self.listDepartment[0].apartment._id;
                self.departmentName = self.listDepartment[0].apartment.title + ' - ' + self.listDepartment[0].campaign.title;
                _this2.form_apartment_class = 'has-input-value';
                self.getFeedbackCategory(self.departmentID);
              }

              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "convertListImage",
          value: function convertListImage() {
            var self = this;

            for (var i = 0; i < self.list_image_select.length; i++) {
              self.list_image.push({
                index: 0,
                src: self.list_image_select[i].media.url,
                media: self.list_image_select[i].media
              });
            }

            self.list_image_select = [];
            self.breakListImage();
          }
        }, {
          key: "dataURItoBlob",
          value: function dataURItoBlob(dataURI) {
            var byteString = window.atob(dataURI);
            var arrayBuffer = new ArrayBuffer(byteString.length);
            var int8Array = new Uint8Array(arrayBuffer);

            for (var i = 0; i < byteString.length; i++) {
              int8Array[i] = byteString.charCodeAt(i);
            }

            var blob = new Blob([int8Array], {
              type: 'image/jpeg'
            });
            return blob;
          }
        }, {
          key: "checkPicturePermission",
          value: function checkPicturePermission(sourceType) {
            this.pickImage(sourceType);
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            var _this3 = this;

            var self = this;
            var options = {
              quality: 80,
              sourceType: sourceType,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              targetWidth: 800,
              targetHeight: 800,
              correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imageData) {
              var base64Define = 'data:image/jpeg;base64,';

              var binaryBlob = _this3.convertBase64ToBlob(base64Define + imageData);

              var date = new Date().valueOf();
              var formData = new FormData();
              var fileName = 'amoapp' + date + '.jpg';
              var myFile = self.blobToFile(binaryBlob, fileName);
              var payload = new FormData();
              payload.append('media', binaryBlob, fileName);

              _this3.loading.present();

              _this3.apiService.uploadImage(payload).subscribe(function (result) {
                self.loading.dismiss();
                self.list_image_select.push(result);
                self.convertListImage();
              }, function (error) {
                self.loading.dismiss();
              });
            }, function (err) {// Handle error
              // alert(err);
            });
          }
        }, {
          key: "convertBase64ToBlob",
          value: function convertBase64ToBlob(base64) {
            var info = this.getInfoFromBase64(base64);
            var sliceSize = 512;
            var byteCharacters = window.atob(info.rawBase64);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
              var slice = byteCharacters.slice(offset, offset + sliceSize);
              var byteNumbers = new Array(slice.length);

              for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
              }

              byteArrays.push(new Uint8Array(byteNumbers));
            }

            return new Blob(byteArrays, {
              type: info.mime
            });
          }
        }, {
          key: "getInfoFromBase64",
          value: function getInfoFromBase64(base64) {
            var meta = base64.split(',')[0];
            var rawBase64 = base64.split(',')[1].replace(/\s/g, '');
            var mime = /:([^;]+);/.exec(meta)[1];
            var extension = /\/([^;]+);/.exec(meta)[1];
            return {
              mime: mime,
              extension: extension,
              meta: meta,
              rawBase64: rawBase64
            };
          }
        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: this.translate.instant('COMMON.form_select_image_title'),
                        buttons: [{
                          text: this.translate.instant('COMMON.form_select_image_library'),
                          handler: function handler() {
                            _this4.checkPicturePermission(_this4.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: this.translate.instant('COMMON.form_select_image_camera'),
                          handler: function handler() {
                            _this4.checkPicturePermission(_this4.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: this.translate.instant('COMMON.form_select_image_cancel'),
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "checkActiveButton",
          value: function checkActiveButton() {
            var self = this;

            if (this.form_type && this.form_type.length > 0) {
              this.isErrorFormType = false;
            } else {
              this.isErrorFormType = true;
            }

            if (this.title && this.title.length > 0) {
              this.isErrorTitle = false;
            } else {
              this.isErrorTitle = true;
            }

            if (this.message && this.message.length > 0) {
              this.isErrorMessage = false;
            } else {
              this.isErrorMessage = true;
            }

            if (this.departmentID && this.departmentID.length > 0) {
              this.isErrorDepartmentID = false;
            } else {
              this.isErrorDepartmentID = true;
            }

            if (this.isErrorMessage || this.isErrorFormType || this.isErrorTitle || this.isErrorDepartmentID) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "pushRequestToServer",
          value: function pushRequestToServer() {
            var _this5 = this;

            var self = this;
            var list_attachment = [];
            self.list_image.forEach(function (image) {
              list_attachment.push(image.media);
            });
            var department = this.listDepartment.find(function (item) {
              return item.apartment._id == _this5.departmentID;
            });
            var params = {
              category: this.form_type,
              title: this.title,
              content: this.message,
              attachments: list_attachment,
              apartment: this.departmentID,
              type: 'None',
              campaign: department.campaign._id
            };
            this.loading.present();
            this.apiService.addFeedbackNew(params).subscribe(function (result) {
              self.loading.dismiss(); // self.alertService.presentToast(this.translate.instant('ADD_REQUEST.message_add_request_sucess'));
              // self.navCtrl.back();

              _this5.registrationSuccessModal();
            }, function (error) {
              self.loading.dismiss();
              self.alertService.presentToast(_this5.translate.instant('ADD_REQUEST.message_add_request_fail'));
            });
          }
        }, {
          key: "registrationSuccessModal",
          value: function registrationSuccessModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _popup_registration_success_popup_registration_success_page__WEBPACK_IMPORTED_MODULE_9__["PopupRegistrationSuccessPage"],
                        componentProps: {}
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ionChangePulldownDepartment",
          value: function ionChangePulldownDepartment(event) {
            if (this.departmentID != '') {
              this.form_apartment_class = 'has-input-value';
            } else {
              this.form_apartment_class = '';
            }

            this.getFeedbackCategory(this.departmentID);
            this.form_type = '';
            this.form_type_class = '';
          }
        }]);

        return AddRequestPage;
      }();

      AddRequestPage.ɵfac = function AddRequestPage_Factory(t) {
        return new (t || AddRequestPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]));
      };

      AddRequestPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddRequestPage,
        selectors: [["app-add-request"]],
        decls: 42,
        vars: 38,
        consts: [[1, "ion-no-border"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "header-sub-title"], [1, "reflect-screen-content"], ["lines", "none", 1, "input-item", "margin-top-10"], ["src", "../assets/icon/request/home.svg", 1, "icon-pulldown-left"], ["src", "../assets/icon/svg/Down.svg", 1, "icon-pulldown-down"], ["class", "pulldown-customize-placeholder", 4, "ngIf"], ["interface", "action-sheet", "name", "form_apartment_id", 1, "pulldown-customize", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "input-item"], ["src", "../assets/icon/request/danger.svg", 1, "icon-pulldown-left"], ["interface", "action-sheet", "name", "form_type", 1, "pulldown-customize", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], ["name", "custom-user", "src", "/assets/icon/request/document.svg", "slot", "start", 1, "input-icon"], ["position", "floating", 1, "input-floating-label"], ["type", "text", "value", "", 1, "input-text", 3, "ngModel", "ngModelChange"], ["lines", "none", 1, "textarea-item"], ["rows", "4", 1, "note-content", 3, "ngModel", "placeholder", "ngModelChange"], ["lines", "none", 1, "ion-no-padding"], ["class", "ion-grid-class", 4, "ngIf"], ["lines", "none", "class", "ion-no-padding item-common background-fbfbfb", 3, "click", 4, "ngIf"], ["expand", "block", "class", "button-common button-send margin-top-40", 4, "ngIf"], ["expand", "block", "class", "button-common button-common-active button-send margin-top-40", 3, "click", 4, "ngIf"], ["class", "modal-backdrop fade show", 4, "ngIf"], ["class", "modal popup-show-full-image", "tabindex", "-1", "role", "dialog", 4, "ngIf"], [1, "pulldown-customize-placeholder"], [3, "value"], [1, "ion-grid-class"], ["class", "ion-col-class", "size", "4", "size-md", "", 4, "ngFor", "ngForOf"], ["size", "4", "size-md", "", 1, "ion-col-class"], ["lines", "none", 1, "ion-item-for-image", "ion-item-image-add", 3, "click"], [1, "image-add-item"], ["src", "../assets/icon/request/add-image.svg", 1, "image-class"], ["lines", "none", 1, "ion-item-for-image"], [1, "image-class", 3, "src"], ["type", "button", "class", "close-image-icon", 3, "click", 4, "ngIf"], ["class", "mask-multiple-image", 3, "click", 4, "ngIf"], ["type", "button", 1, "close-image-icon", 3, "click"], ["aria-hidden", "true"], [1, "mask-multiple-image", 3, "click"], ["lines", "none", 1, "ion-no-padding", "item-common", "background-fbfbfb", 3, "click"], [1, "reflect-icon-camera"], ["src", "../assets/icon/request/image.svg", 1, "icon-camera"], [1, "camera-label"], [1, "camera-sub-label"], ["expand", "block", 1, "button-common", "button-send", "margin-top-40"], ["expand", "block", 1, "button-common", "button-common-active", "button-send", "margin-top-40", 3, "click"], [1, "modal-backdrop", "fade", "show"], ["tabindex", "-1", "role", "dialog", 1, "modal", "popup-show-full-image"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], [1, "div-header-title"], [1, "modal-body"], ["lines", "none", "id", "area-show-image", 1, "area-show-image"]],
        template: function AddRequestPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AddRequestPage_label_13_Template, 3, 3, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRequestPage_Template_ion_select_ngModelChange_15_listener($event) {
              return ctx.departmentID = $event;
            })("ionChange", function AddRequestPage_Template_ion_select_ionChange_15_listener($event) {
              return ctx.ionChangePulldownDepartment($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddRequestPage_ion_select_option_17_Template, 2, 2, "ion-select-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AddRequestPage_label_21_Template, 3, 3, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRequestPage_Template_ion_select_ngModelChange_23_listener($event) {
              return ctx.form_type = $event;
            })("ionChange", function AddRequestPage_Template_ion_select_ionChange_23_listener($event) {
              return ctx.ionChangePulldown1($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AddRequestPage_ion_select_option_25_Template, 2, 2, "ion-select-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRequestPage_Template_ion_input_ngModelChange_31_listener($event) {
              return ctx.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-textarea", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddRequestPage_Template_ion_textarea_ngModelChange_33_listener($event) {
              return ctx.message = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-item", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AddRequestPage_ion_grid_36_Template, 7, 1, "ion-grid", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AddRequestPage_ion_item_37_Template, 9, 6, "ion-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AddRequestPage_ion_button_38_Template, 4, 3, "ion-button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AddRequestPage_ion_button_39_Template, 4, 3, "ion-button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddRequestPage_div_40_Template, 1, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddRequestPage_div_41_Template, 17, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 26, "ADD_REQUEST.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 28, "ADD_REQUEST.sub_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.departmentID != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_apartment_class, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 30, "REGISTRATION_GUEST.apartment_placeholder"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.departmentID);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDepartment);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.form_type != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_type_class, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 32, "ADD_REQUEST.category"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form_type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listTopic);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 34, "ADD_REQUEST.title_request"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 36, "ADD_REQUEST.message_request"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.number_of_image != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.number_of_image == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.checkActiveButton());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkActiveButton());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flag_show_all_image == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flag_show_all_image == true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["div[scrollX][_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: auto;\n  display: flex;\n}\ndiv[scrollX][_ngcontent-%COMP%]   .scroll-item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\ndiv[scrollX][_ngcontent-%COMP%]   .selectable-icon[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 100px;\n  width: 100px;\n  margin-right: 10px;\n  padding: 0;\n}\ndiv[scrollX][_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: 0px;\n  width: 30px;\n}\ndiv[scrollX][_ngcontent-%COMP%]   .item-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-right: 10px;\n  padding: 0;\n  color: transparent;\n  --background: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  position: relative;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.file-input-container[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.file-input-container[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.height-item-button[_ngcontent-%COMP%] {\n  min-height: 50px;\n}\n.error-input[_ngcontent-%COMP%] {\n  border: 1px solid #FFC144;\n}\n.stack-label[_ngcontent-%COMP%] {\n  line-height: 2em;\n}\n.select-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #21313f;\n}\n.add-image-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n}\n.image-content[_ngcontent-%COMP%] {\n  height: 120px;\n  background: #f4f5f5;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  width: 100%;\n}\n.image-content-icon[_ngcontent-%COMP%] {\n  background: #f4f5f5;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  width: 100%;\n  padding: 31px 0;\n}\n.image-grid[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n.image-row[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.image-col[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n}\n.item-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  opacity: 0.1;\n}\n.ion-grid-class[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 15px;\n  padding: 0;\n}\n.ion-col-class[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.ion-item-for-image[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 75px;\n}\n.ion-item-for-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100px;\n  height: 75px;\n}\n.ion-item-image-add[_ngcontent-%COMP%] {\n  border: unset !important;\n}\n.ion-item-image-add[_ngcontent-%COMP%]   .image-add-item[_ngcontent-%COMP%] {\n  border: 1px dashed #a7dff4 !important;\n  background: #ebf8ff !important;\n  width: 100px;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n}\n.ion-item-image-add[_ngcontent-%COMP%]   .image-add-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto !important;\n  height: auto !important;\n}\n.close-image-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  line-height: 0;\n  color: #fff;\n  position: absolute;\n  z-index: 999;\n  background-color: #009ac9;\n  top: 2px;\n  right: 2px;\n  opacity: 1;\n  border-radius: 8px;\n  width: 16px;\n  height: 16px;\n  text-shadow: none;\n  padding: 0;\n}\n.mask-multiple-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(100% - 10px);\n  height: calc(100% - 10px);\n  background-color: #000000;\n  z-index: 99999;\n  opacity: 0.5;\n  top: 5px;\n  bottom: 5px;\n  left: 5px;\n  right: 5px;\n  border-radius: 8px;\n  color: #ffffff;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n.area-show-image[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 400px;\n}\n.popup-show-full-image[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.icon-add-image[_ngcontent-%COMP%] {\n  padding: 24px 0;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  background-color: #00000005;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  pointer-events: none;\n  bottom: 0px;\n}\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 24px 24px 0px 0px;\n}\n.close[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem -1rem;\n}\n.popup-item-input[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n.modal-body[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #f4f5f5;\n}\n.modal-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n.div-header-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\nion-select[_ngcontent-%COMP%]::part(icon) {\n  display: none;\n  opacity: 1;\n}\n.pulldown-customize[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding-left: 40px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-right: 17px;\n  height: 100%;\n  --placeholder-opacity: 0.7;\n  font-size: 16px !important;\n  --color: #7a838c !important;\n}\n.has-input-value[_ngcontent-%COMP%]   .pulldown-customize[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n.icon-pulldown-left[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  position: absolute;\n}\n.icon-pulldown-down[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  position: absolute;\n  right: 20px;\n}\n.pulldown-customize-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.6;\n  z-index: 999;\n  font-size: 14px;\n  margin-left: 40px;\n  top: 1px;\n  pointer-events: none;\n  font-family: Open Sans !important;\n  font-style: normal;\n  font-weight: normal;\n}\n.ion-no-border[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.ion-no-border[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n.ion-no-border[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n.ion-no-border[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n.ion-no-border[_ngcontent-%COMP%]   .header-sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 22px;\n  left: 15px;\n  right: 15px;\n  top: 97px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n}\n.ion-no-border[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #ffffff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n.reflect-screen-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  --padding-start: 15px;\n  --padding-end: 15px;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .textarea-item[_ngcontent-%COMP%] {\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  height: 105px;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  --placeholder-font-size: 16px;\n  --placeholder-font-family: Open Sans;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .note-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  mix-blend-mode: normal;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .note-content.md[_ngcontent-%COMP%] {\n  --padding-top: 0;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .item-common[_ngcontent-%COMP%] {\n  width: 100%;\n  mix-blend-mode: normal;\n  background: #ebf8ff;\n  border: 1px dashed #a7dff4;\n  box-sizing: border-box;\n  border-radius: 5px;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .background-fbfbfb[_ngcontent-%COMP%] {\n  --background: #fbfbfb;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .reflect-icon-camera[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  padding: 20px 0;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .reflect-icon-camera[_ngcontent-%COMP%]   .icon-camera[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  font-size: 24px;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .reflect-icon-camera[_ngcontent-%COMP%]   .camera-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 15px;\n  color: #01aeef;\n  margin-top: 5px;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .reflect-icon-camera[_ngcontent-%COMP%]   .camera-sub-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 15px;\n  color: #01aeef;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .ion-no-padding[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .margin-top-40[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .pointer-events-none[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.reflect-screen-content[_ngcontent-%COMP%]   .button-common[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXJlcXVlc3QvYWRkLXJlcXVlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtBQUNKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUo7QUFFRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBSUEsK0JBQUE7QUFDQTtFQUNFLGFBQUE7QUFERjtBQUlBO0VBQ0UsaUJBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBS0E7RUFDRSxnQkFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZGO0FBS0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRkY7QUFJQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREY7QUFHQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBRUY7QUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBR0Y7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUY7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QWRJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFnQk47QUFkSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFnQk47QUFkSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFnQk47QUFiRTtFQUNFLHNCQUFBO0FBZUo7QUFiRTtFQUNFLGdCQUFBO0FBZUo7QUFiRTtFQUNFLG9CQUFBO0FBZUo7QUFiRTtFQUNFLGtCQUFBO0FBZUo7QUFaQTtFQUNFLGdCQUFBO0FBZUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtcmVxdWVzdC9hZGQtcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbc2Nyb2xsWF0ge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLnNjcm9sbC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5zZWxlY3RhYmxlLWljb24ge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICB9XHJcbiAgLml0ZW0tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBIaWRlIGlvbi1jb250ZW50IHNjcm9sbGJhciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICBpbnB1dFt0eXBlPSdmaWxlJ10ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWlnaHQtaXRlbS1idXR0b24ge1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGQzE0NDtcclxufVxyXG5cclxuLnN0YWNrLWxhYmVsIHtcclxuICBsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcblxyXG4uc2VsZWN0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxufVxyXG5cclxuLmFkZC1pbWFnZS10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNWY1O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbWFnZS1jb250ZW50LWljb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY1ZjU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzFweCAwO1xyXG59XHJcbi5pbWFnZS1ncmlkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uaW1hZ2Utcm93IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5pbWFnZS1jb2wge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5pdGVtLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBvcGFjaXR5OiAwLjE7XHJcbn1cclxuXHJcbi8vIGN1c3RvbSBhZGQgaW1hZ2VcclxuLmlvbi1ncmlkLWNsYXNzIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uaW9uLWNvbC1jbGFzcyB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0QzRDZEOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBtYXJnaW46IDVweDtcclxufVxyXG4uaW9uLWl0ZW0tZm9yLWltYWdlIHtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbn1cclxuLmlvbi1pdGVtLWZvci1pbWFnZSBpbWcge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbn1cclxuLmlvbi1pdGVtLWltYWdlLWFkZCB7XHJcbiAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cclxuICAuaW1hZ2UtYWRkLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNhN2RmZjQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNlYmY4ZmYgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmNsb3NlLWltYWdlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWFjOTtcclxuICB0b3A6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5tYXNrLW11bHRpcGxlLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgbGVmdDogNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYXJlYS1zaG93LWltYWdlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbi5wb3B1cC1zaG93LWZ1bGwtaW1hZ2UgLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uaWNvbi1hZGQtaW1hZ2Uge1xyXG4gIHBhZGRpbmc6IDI0cHggMDtcclxufVxyXG4vLyBwb3B1cFxyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDA1O1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweCAyNHB4IDBweCAwcHg7XHJcbn1cclxuLmNsb3NlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAtMXJlbSAtMXJlbSAtMXJlbSAtMXJlbTtcclxufVxyXG4ucG9wdXAtaXRlbS1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5LFxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4ubW9kYWwtaGVhZGVyIGxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG59XHJcbi5kaXYtaGVhZGVyLXRpdGxlIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4vLyBwdWxsZG93blxyXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnB1bGxkb3duLWN1c3RvbWl6ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNztcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAtLWNvbG9yOiAjN2E4MzhjICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhhcy1pbnB1dC12YWx1ZSAucHVsbGRvd24tY3VzdG9taXplIHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaWNvbi1wdWxsZG93bi1sZWZ0IHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pY29uLXB1bGxkb3duLWRvd24ge1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbn1cclxuLnB1bGxkb3duLWN1c3RvbWl6ZS1wbGFjZWhvbGRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIHRvcDogMXB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgIWltcG9ydGFudDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLy8gbmV3IGNzc1xyXG4uaW9uLW5vLWJvcmRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICAuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNTdweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5oZWFkZXItc3ViLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogOTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDAgMCAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlZmxlY3Qtc2NyZWVuLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE1cHg7XHJcblxyXG4gIC50ZXh0YXJlYS1pdGVtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDVweDtcclxuICB9XHJcbiAgaW9uLXRleHRhcmVhIHtcclxuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1wbGFjZWhvbGRlci1mb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIH1cclxuICAubm90ZS1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzZjtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgfVxyXG4gIC5ub3RlLWNvbnRlbnQubWQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgLml0ZW0tY29tbW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQ6ICNlYmY4ZmY7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2E3ZGZmNDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIC5iYWNrZ3JvdW5kLWZiZmJmYiB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgfVxyXG4gIC5yZWZsZWN0LWljb24tY2FtZXJhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAgIC5pY29uLWNhbWVyYSB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuY2FtZXJhLWxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDFhZWVmO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuY2FtZXJhLXN1Yi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDFhZWVmO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW9uLW5vLXBhZGRpbmcge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICB9XHJcbiAgLm1hcmdpbi10b3AtNDAge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbiAgLnBvaW50ZXItZXZlbnRzLW5vbmUge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIC5idXR0b24tY29tbW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbn1cclxuLm1hcmdpbi10b3AtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddRequestPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-request',
            templateUrl: './add-request.page.html',
            styleUrls: ['./add-request.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }, {
            type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
          }, {
            type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-add-request-add-request-module-es5.js.map