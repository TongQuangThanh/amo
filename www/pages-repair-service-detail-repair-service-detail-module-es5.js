(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-repair-service-detail-repair-service-detail-module"], {
    /***/
    "RXfm":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/repair-service-detail/repair-service-detail.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: RepairServiceDetailPageModule */

    /***/
    function RXfm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepairServiceDetailPageModule", function () {
        return RepairServiceDetailPageModule;
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


      var _repair_service_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./repair-service-detail.page */
      "SOlA");
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
        component: _repair_service_detail_page__WEBPACK_IMPORTED_MODULE_5__["RepairServiceDetailPage"]
      }];

      var RepairServiceDetailPageModule = function RepairServiceDetailPageModule() {
        _classCallCheck(this, RepairServiceDetailPageModule);
      };

      RepairServiceDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RepairServiceDetailPageModule
      });
      RepairServiceDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RepairServiceDetailPageModule_Factory(t) {
          return new (t || RepairServiceDetailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RepairServiceDetailPageModule, {
          declarations: [_repair_service_detail_page__WEBPACK_IMPORTED_MODULE_5__["RepairServiceDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepairServiceDetailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_repair_service_detail_page__WEBPACK_IMPORTED_MODULE_5__["RepairServiceDetailPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "SOlA":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/repair-service-detail/repair-service-detail.page.ts ***!
      \***************************************************************************/

    /*! exports provided: RepairServiceDetailPage */

    /***/
    function SOlA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepairServiceDetailPage", function () {
        return RepairServiceDetailPage;
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
      /* harmony import */


      var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-super-tabs/angular */
      "k6Iy");

      function RepairServiceDetailPage_ion_slide_24_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r3.deadline);
        }
      }

      function RepairServiceDetailPage_ion_slide_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RepairServiceDetailPage_ion_slide_24_div_3_Template, 3, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", object_r3.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", object_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", object_r3.deadline != "");
        }
      }

      function RepairServiceDetailPage_super_tab_button_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "super-tab-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r6.title);
        }
      }

      function RepairServiceDetailPage_super_tab_29_ion_row_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RepairServiceDetailPage_super_tab_29_ion_row_2_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var data_r9 = ctx.$implicit;

            var object_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.downNumberProduct_1(object_r7.id_tab, data_r9.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RepairServiceDetailPage_super_tab_29_ion_row_2_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var data_r9 = ctx.$implicit;

            var object_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.upNumberProduct_1(object_r7.id_tab, data_r9.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-col", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", data_r9.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9.note);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r9.money);
        }
      }

      function RepairServiceDetailPage_super_tab_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "super-tab", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RepairServiceDetailPage_super_tab_29_ion_row_2_Template, 18, 5, "ion-row", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", object_r7.data);
        }
      }

      var _c0 = function _c0() {
        return {
          debug: true,
          sideMenu: "left",
          allowElementScroll: true,
          nativeSmoothScroll: true
        };
      };

      var RepairServiceDetailPage = /*#__PURE__*/function () {
        function RepairServiceDetailPage(translate, loading, apiService, navCtrl, alertService, platform) {
          _classCallCheck(this, RepairServiceDetailPage);

          this.translate = translate;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.alertService = alertService;
          this.platform = platform;
          this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1.1,
            centeredSlides: true,
            spaceBetween: 10,
            autoplay: true
          };
        }

        _createClass(RepairServiceDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data_repair = {
              text_title: "Sửa chữa bảo dưỡng điều hòa",
              text_place: "Sửa chữa, bảo dưỡng, Nạp gas, Lắp mới, Dịch chuyển điều hòa, máy lạnh...",
              text_star_rate: "4.5",
              text_tag: "",
              image: "../assets/images/services/111.png",
              sub_image: "../assets/images/services/1.png",
              group_1: [{
                id: "1",
                url: "../assets/images/services/1.png",
                deadline: "Còn 10 ngày"
              }, {
                id: "2",
                url: "../assets/images/services/2.png",
                deadline: "Còn 10 ngày"
              }],
              group_2: [{
                id: "1",
                image: "../assets/images/services/6.png",
                title: "Miến trộn Bò, Giò, Đậu",
                money: "35000",
                note: "Đầy đủ bò, giò, đậu thơm ngon",
                number: "0"
              }, {
                id: "2",
                image: "../assets/images/services/7.png",
                title: "Miến trộn Bò, Giò, Đậu",
                money: "35000",
                note: "Đầy đủ bò, giò, đậu thơm ngon",
                number: "0"
              }],
              group_3: [{
                id_tab: "1",
                title: "Giá dịch vụ",
                data: [{
                  id: "1",
                  image: "../assets/images/services/6.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }, {
                  id: "2",
                  image: "../assets/images/services/7.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }, {
                  id: "3",
                  image: "../assets/images/services/6.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }]
              }, {
                id_tab: "2",
                title: "Giá vật tư",
                data: [{
                  id: "1",
                  image: "../assets/images/services/7.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }, {
                  id: "2",
                  image: "../assets/images/services/6.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }, {
                  id: "3",
                  image: "../assets/images/services/7.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }]
              }, {
                id_tab: "3",
                title: "Thông tin thêm  ",
                data: [{
                  id: "1",
                  image: "../assets/images/services/7.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }, {
                  id: "2",
                  image: "../assets/images/services/6.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }, {
                  id: "3",
                  image: "../assets/images/services/7.png",
                  title: "Miến trộn Bò, Giò, Đậu",
                  money: "35000",
                  note: "Đầy đủ bò, giò, đậu thơm ngon",
                  number: "0"
                }]
              }]
            };
            this.total_money = "";
          }
        }, {
          key: "downNumberProduct",
          value: function downNumberProduct(id) {
            var self = this;
            self.data_repair.group_2.forEach(function (product) {
              if (product.id == id && product.number > 0) {
                product.number--;
              }
            });
            this.getTotalMoney();
          }
        }, {
          key: "upNumberProduct",
          value: function upNumberProduct(id) {
            var self = this;
            self.data_repair.group_2.forEach(function (product) {
              if (product.id == id && product.number < 10000) {
                product.number++;
              }
            });
            this.getTotalMoney();
          }
        }, {
          key: "downNumberProduct_1",
          value: function downNumberProduct_1(id_tab, id) {
            var self = this;
            self.data_repair.group_3.forEach(function (object) {
              if (object.id_tab == id_tab) {
                object.data.forEach(function (product) {
                  if (product.id == id && product.number > 0) {
                    product.number--;
                  }
                });
              }
            });
            this.getTotalMoney();
          }
        }, {
          key: "upNumberProduct_1",
          value: function upNumberProduct_1(id_tab, id) {
            var self = this;
            self.data_repair.group_3.forEach(function (object) {
              if (object.id_tab == id_tab) {
                object.data.forEach(function (product) {
                  if (product.id == id && product.number < 1000) {
                    product.number++;
                  }
                });
              }
            });
            this.getTotalMoney();
          }
        }, {
          key: "selectAllEvent",
          value: function selectAllEvent(id_tab) {
            var self = this;
            self.data_repair.group_3.forEach(function (object) {
              if (object.id_tab == id_tab) {
                object.data.forEach(function (product) {
                  if (product.number == 0) {
                    product.number++;
                  }
                });
              }
            });
            this.getTotalMoney();
          }
        }, {
          key: "getTotalMoney",
          value: function getTotalMoney() {
            var self = this;
            this.total_money = "";
            var total = 0;
            self.data_repair.group_2.forEach(function (product) {
              if (product.number > 0) {
                total = total + product.number * product.money;
              }
            });
            self.data_repair.group_3.forEach(function (object) {
              object.data.forEach(function (product) {
                if (product.number > 0) {
                  total = total + product.number * product.money;
                }
              });
            });

            if (total > 0) {
              this.total_money = ": " + total.toString();
            }
          }
        }, {
          key: "moveRepairServiceBookingPage",
          value: function moveRepairServiceBookingPage() {
            localStorage.setItem('data_repair', JSON.stringify(this.data_repair));
            this.navCtrl.navigateForward('/repair-service-booking');
          }
        }]);

        return RepairServiceDetailPage;
      }();

      RepairServiceDetailPage.ɵfac = function RepairServiceDetailPage_Factory(t) {
        return new (t || RepairServiceDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      };

      RepairServiceDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RepairServiceDetailPage,
        selectors: [["app-repair-service-detail"]],
        decls: 34,
        vars: 14,
        consts: [[1, "ion-no-border"], ["slot", "start"], ["text", ""], ["fullscreen", ""], ["lines", "full", 1, "ion-no-margin", "ion-no-padding"], ["lines", "none", 1, "ion-no-padding"], [1, "image-page", 3, "src"], [1, "group-1-text-star"], ["src", "../assets/icon/svg/icon-star.svg", 1, "group-1-icon-star"], [1, "class-label-rate"], ["lines", "none", 1, "margin-top-20"], ["lines", "none", 1, "item-common"], [1, "ion-text-wrap", "title-1"], ["lines", "none", 1, ""], [1, "group-1-text-place"], ["lines", "none", 1, "line-1"], [1, "margin-top-20", 3, "options"], [4, "ngFor", "ngForOf"], ["activeTabIndex", "0", 1, "line-1", "class-super-tabs", "margin-top-20", 3, "config"], ["slot", "top", "scrollable", "true", "scrollable-padding", "false"], ["autoScrollTop", ""], ["class", "ion-padding hidden-overflow", 4, "ngFor", "ngForOf"], [1, "full-width", "function-section", "shadow-section"], ["expand", "block", 1, "amo-button-custom", "padding-0", 3, "click"], ["lines", "none", 1, "ion-no-padding", 3, "id"], [1, "", 3, "src"], ["class", "group-1-slider-title", 4, "ngIf"], [1, "group-1-slider-title"], [1, "ion-padding", "hidden-overflow"], [1, "ion-no-padding", "scroll-class", "margin-top-10"], ["class", "margin-top-25", 3, "id", 4, "ngFor", "ngForOf"], [1, "margin-top-25", 3, "id"], ["size", "8", 1, "ion-col-class", "group-2-col-2"], [1, "div-title-col-2"], [1, ""], [1, "div-note-col-2"], [1, "group-1-button-change-number"], [1, "button-3-1", 3, "click"], ["src", "../assets/icon/svg/tru.svg", 1, "icon-button-3"], [1, "group-1-label-1"], [1, "button-3-2", 3, "click"], ["src", "../assets/icon/svg/plus.svg", 1, "icon-button-3"], ["size", "4", 1, "ion-col-class", "group-2-col-3"]],
        template: function RepairServiceDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-list", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-slides", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RepairServiceDetailPage_ion_slide_24_Template, 4, 3, "ion-slide", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "super-tabs", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "super-tabs-toolbar", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RepairServiceDetailPage_super_tab_button_27_Template, 3, 1, "super-tab-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "super-tabs-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RepairServiceDetailPage_super_tab_29_Template, 3, 1, "super-tab", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RepairServiceDetailPage_Template_ion_button_click_31_listener() {
              return ctx.moveRepairServiceBookingPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data_repair.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data_repair.text_star_rate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data_repair.text_title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data_repair.text_place);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOpts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data_repair.group_1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data_repair.group_3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data_repair.group_3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 11, "NOTI_6.button_send"), "", ctx.total_money, "");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabs"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsToolbar"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsContainer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabButton"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\nion-header[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\n.ion-color-primary[_ngcontent-%COMP%] {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: #FFC144 !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\nsuper-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #7A838C;\n  text-transform: unset;\n}\n\nsuper-tab-button.active[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\nsuper-tabs-toolbar[_ngcontent-%COMP%]::after {\n  background-image: unset;\n}\n\nsuper-tab-button[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #F4F5F5;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.item-common[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #FBFBFB;\n  mix-blend-mode: normal;\n  border: 0px solid #D3D6D9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 17px;\n  margin-right: 17px;\n}\n\n.title-1[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 28px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.group-1-text-title[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: flex-end;\n  display: inline-flex;\n  padding: 10px 10px;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n  font-weight: 500;\n}\n\n.group-1-icon-place[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  margin-right: 10px;\n}\n\n.group-1-text-place[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313F;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  padding-bottom: 5px;\n}\n\n.group-1-text-place[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  white-space: unset;\n  text-align: left;\n}\n\n.group-1-text-star[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313F;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  position: absolute;\n  bottom: 10px;\n  right: 18px;\n  background: #FFFFFF;\n  opacity: 0.8;\n  border-radius: 100px;\n  padding: 1px 10px;\n}\n\n.group-1-icon-star[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.group-1-icon-tag[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 8px;\n}\n\n.ion-item-class[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #F4F5F5;\n  margin: 0px 20px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  --inner-border-width: 0px;\n}\n\n.class-label-rate[_ngcontent-%COMP%] {\n  width: 30px;\n  padding-top: 3px;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  z-index: 999;\n  bottom: 0px;\n  width: 100%;\n  padding: 10px 20px;\n  background-color: #ffffff;\n}\n\n.function-section[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.line-1[_ngcontent-%COMP%] {\n  border-top: 6px solid #F4F5F5;\n}\n\n.group-1-slider-title[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #009AC9;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.div-logo[_ngcontent-%COMP%] {\n  -webkit-margin-end: 10px;\n          margin-inline-end: 10px;\n  width: 70px;\n}\n\n.note-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 10px;\n  left: 0;\n  background-color: #EB5757;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.note-2[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 10px;\n  left: 0;\n  background-color: #009AC9;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.ion-grid-class[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 17px;\n  margin-right: 17px;\n}\n\n.group-1-button-change-number[_ngcontent-%COMP%] {\n  position: relative;\n  width: 110px;\n  height: 32px;\n  text-align: center;\n}\n\n.group-1-label-1[_ngcontent-%COMP%] {\n  line-height: 32px;\n  font-weight: 400;\n}\n\n.button-3-1[_ngcontent-%COMP%] {\n  background: #FBFBFB;\n  mix-blend-mode: normal;\n  border: 1px solid #D3D6D9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n}\n\n.button-3-2[_ngcontent-%COMP%] {\n  background: #FBFBFB;\n  mix-blend-mode: normal;\n  border: 1px solid #D3D6D9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  right: 0;\n}\n\n.icon-button-3[_ngcontent-%COMP%] {\n  margin-top: -1px;\n}\n\n.group-2-col-2[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.group-2-col-3[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.div-title-col-2[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.div-note-col-2[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #7A838C;\n}\n\n.div-note-col-2[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n\n.margin-bottom-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.margin-top-25[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.col-group-2-image[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  --border-width: 0;\n}\n\n.class-super-tabs[_ngcontent-%COMP%] {\n  height: 70%;\n}\n\n.group-3-sub-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 28px;\n  font-weight: 400;\n}\n\n.group-3-select-all[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 14px;\n  line-height: 20px;\n  color: #009AC9;\n}\n\n.scroll-class[_ngcontent-%COMP%] {\n  overflow: scroll;\n  height: 100%;\n}\n\n.hidden-overflow[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.margin-bottom-15[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.shadow-section[_ngcontent-%COMP%] {\n  box-shadow: 0px -20px 20px 0px rgba(37, 34, 77, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYWlyLXNlcnZpY2UtZGV0YWlsL3JlcGFpci1zZXJ2aWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLG9DQUFBO0VBQ0EsMkVBQUE7RUFDQSx3Q0FBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0FBTUo7O0FBSkE7RUFDSSx1QkFBQTtBQU9KOztBQUxBO0VBQ0ksZ0NBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFjSjs7QUFaQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFlSjs7QUFiQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFnQko7O0FBZEE7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFpQko7O0FBZkE7RUFFSSxpQkFBQTtBQWlCSjs7QUFmQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFrQko7O0FBZkE7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQW1CSjs7QUFoQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBbUJKOztBQWpCQTtFQUNJLFlBQUE7QUFvQko7O0FBbEJBO0VBQ0ksNkJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBc0JKOztBQXBCQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FBdUJKOztBQXJCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMEJKOztBQXhCQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQTJCSjs7QUF4QkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBMkJKOztBQXpCQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQTRCSjs7QUExQkE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksZ0JBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksa0JBQUE7QUErQko7O0FBN0JBO0VBQ0ksWUFBQTtBQWdDSjs7QUE5QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFpQ0o7O0FBL0JBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWtDSjs7QUFoQ0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksbUJBQUE7QUFvQ0o7O0FBbENBO0VBQ0ksbUJBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQXNDSjs7QUFwQ0E7RUFDSSxXQUFBO0FBdUNKOztBQXJDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBd0NKOztBQXRDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBeUNKOztBQXZDQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQTBDSjs7QUF4Q0E7RUFDSSxnQkFBQTtBQTJDSjs7QUF6Q0E7RUFDSSxtQkFBQTtBQTRDSjs7QUExQ0E7RUFDSSxvREFBQTtBQTZDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcGFpci1zZXJ2aWNlLWRldGFpbC9yZXBhaXItc2VydmljZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4uaW9uLWNvbG9yLXByaW1hcnkge1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3Q6ICNGRkMxNDQgIWltcG9ydGFudDtcclxuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcclxufVxyXG5zdXBlci10YWItYnV0dG9uIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjN0E4MzhDO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xyXG59XHJcbnN1cGVyLXRhYi1idXR0b24uYWN0aXZlIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbnN1cGVyLXRhYnMtdG9vbGJhcjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdW5zZXQ7XHJcbn1cclxuc3VwZXItdGFiLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y0RjVGNTtcclxufVxyXG4ubWFyZ2luLXRvcC0yMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLml0ZW0tY29tbW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0ZCRkJGQjtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjRDNENkQ5O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xyXG59XHJcbi50aXRsZS0xIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuLmdyb3VwLTEtdGV4dC10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmdyb3VwLTEtaWNvbi1wbGFjZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5ncm91cC0xLXRleHQtcGxhY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMjEzMTNGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5ncm91cC0xLXRleHQtcGxhY2UgaW9uLWxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmdyb3VwLTEtdGV4dC1zdGFyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyMTMxM0Y7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XHJcbn1cclxuLmdyb3VwLTEtaWNvbi1zdGFyIHtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4uZ3JvdXAtMS1pY29uLXRhZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uaW9uLWl0ZW0tY2xhc3Mge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNEY1RjU7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuLmNsYXNzLWxhYmVsLXJhdGUge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG59XHJcblxyXG4uZnVuY3Rpb24tc2VjdGlvbntcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5mdW5jdGlvbi1zZWN0aW9uIGlvbi1idXR0b257XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmxpbmUtMSB7XHJcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgI0Y0RjVGNTtcclxufVxyXG4uZ3JvdXAtMS1zbGlkZXItdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOUFDOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLmRpdi1sb2dvIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuLm5vdGUtMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUI1NzU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4ubm90ZS0yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlBQzk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMHB4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5pb24tZ3JpZC1jbGFzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbn1cclxuLmdyb3VwLTEtYnV0dG9uLWNoYW5nZS1udW1iZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uZ3JvdXAtMS1sYWJlbC0xIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uYnV0dG9uLTMtMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkJGQkZCO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0Q2RDk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5idXR0b24tMy0yIHtcclxuICAgIGJhY2tncm91bmQ6ICNGQkZCRkI7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QzRDZEOTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5pY29uLWJ1dHRvbi0zIHtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuLmdyb3VwLTItY29sLTIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi5ncm91cC0yLWNvbC0zIGlvbi1sYWJlbHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uZGl2LXRpdGxlLWNvbC0yIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmRpdi1ub3RlLWNvbC0yIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM3QTgzOEM7XHJcbn1cclxuLmRpdi1ub3RlLWNvbC0yIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubWFyZ2luLWJvdHRvbS0zMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTI1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmNvbC1ncm91cC0yLWltYWdlIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG4uY2xhc3Mtc3VwZXItdGFicyB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxufVxyXG4uZ3JvdXAtMy1zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5ncm91cC0zLXNlbGVjdC1hbGwge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwOUFDOTtcclxufVxyXG4uc2Nyb2xsLWNsYXNzIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhpZGRlbi1vdmVyZmxvdyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tYXJnaW4tYm90dG9tLTE1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnNoYWRvdy1zZWN0aW9uIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAtMjBweCAyMHB4IDBweCByZ2IoMzcgMzQgNzcgLyAxMCUpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepairServiceDetailPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-repair-service-detail',
            templateUrl: './repair-service-detail.page.html',
            styleUrls: ['./repair-service-detail.page.scss']
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
//# sourceMappingURL=pages-repair-service-detail-repair-service-detail-module-es5.js.map