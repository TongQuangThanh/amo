(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-new-services-module"], {
    /***/
    "N+V+":
    /*!*******************************************************!*\
      !*** ./src/app/pages/services-new/services.module.ts ***!
      \*******************************************************/

    /*! exports provided: ServicesPageModule */

    /***/
    function NV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function () {
        return ServicesPageModule;
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


      var _services_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services.page */
      "PTgh");
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
        component: _services_page__WEBPACK_IMPORTED_MODULE_5__["ServicesPage"]
      }];

      var ServicesPageModule = function ServicesPageModule() {
        _classCallCheck(this, ServicesPageModule);
      };

      ServicesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ServicesPageModule
      });
      ServicesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ServicesPageModule_Factory(t) {
          return new (t || ServicesPageModule)();
        },
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesPageModule, {
          declarations: [_services_page__WEBPACK_IMPORTED_MODULE_5__["ServicesPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_services_page__WEBPACK_IMPORTED_MODULE_5__["ServicesPage"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PTgh":
    /*!*****************************************************!*\
      !*** ./src/app/pages/services-new/services.page.ts ***!
      \*****************************************************/

    /*! exports provided: ServicesPage */

    /***/
    function PTgh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicesPage", function () {
        return ServicesPage;
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


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ServicesPage_div_12_ion_slide_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r5 == null ? null : item_r5.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function ServicesPage_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServicesPage_div_12_ion_slide_2_Template, 2, 1, "ion-slide", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.slideOpts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listPromotionCodeBanner);
        }
      }

      function ServicesPage_ion_col_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-col", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesPage_ion_col_16_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var item_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.detailPage(item_r6._id, item_r6.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r6._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);
        }
      }

      function ServicesPage_ion_label_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "SEVICE_NEW.see_more_labe"));
        }
      }

      function ServicesPage_ion_slides_25_ion_slide_1_ion_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ServicesPage_ion_slides_25_ion_slide_1_ion_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", object_r10.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r10.text_note);
        }
      }

      function ServicesPage_ion_slides_25_ion_slide_1_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r10.text_tag);
        }
      }

      function ServicesPage_ion_slides_25_ion_slide_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesPage_ion_slides_25_ion_slide_1_Template_ion_card_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.moveShopHousePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServicesPage_ion_slides_25_ion_slide_1_ion_item_2_Template, 2, 0, "ion-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServicesPage_ion_slides_25_ion_slide_1_ion_item_3_Template, 4, 2, "ion-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-card-content", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServicesPage_ion_slides_25_ion_slide_1_div_12_Template, 4, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", object_r10._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !object_r10.thumbnail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", object_r10.thumbnail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", object_r10.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r10.text_star_rate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", object_r10.text_tag != "");
        }
      }

      function ServicesPage_ion_slides_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-slides", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServicesPage_ion_slides_25_ion_slide_1_Template, 13, 6, "ion-slide", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.slideOpts_1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.list_data_silde_2);
        }
      }

      var ServicesPage = /*#__PURE__*/function () {
        function ServicesPage(translate, loading, apiService, navCtrl, alertService, platform, datePipe) {
          var _this = this;

          _classCallCheck(this, ServicesPage);

          this.translate = translate;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.alertService = alertService;
          this.platform = platform;
          this.datePipe = datePipe;
          this.modeService = 'All';
          this.listPromotionCodeBanner = [];
          this.slideOpts = {
            loop: true,
            initialSlide: 0,
            slidesPerView: 0.99,
            centeredSlides: true,
            spaceBetween: 0,
            autoplay: {
              disableOnInteraction: false
            },
            pagination: {
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true
            }
          };
          this.slideOpts_1 = {
            loop: true,
            initialSlide: 0,
            slidesPerView: 1.4,
            centeredSlides: false,
            spaceBetween: 0,
            autoplay: {
              disableOnInteraction: false
            }
          };
          this.slideOpts_2 = {
            initialSlide: 0,
            slidesPerView: 1.1,
            centeredSlides: true,
            spaceBetween: 0
          };
          platform.ready().then(function (readySource) {
            _this.heightScreen = platform.height() - 120 - 90;
            _this.widthScreen = platform.width();
          });
        }

        _createClass(ServicesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.list_data_silde_1 = [];
            this.list_data_silde_2 = [];
            this.list_data_range = {};
            this.listServiceCategory = [];
            this.show_slider = false;
            this.display_button_management = false; //this.getServicePromotionCode();

            this.currentPageNoti = 1;
            this.numberRecordOnPageNoti = 5;
            this.getDataUserShop(this.currentPageNoti, this.numberRecordOnPageNoti, '', null, true);
            this.getAllServiceSystem();
            this.getDataCheckShopOwner();
            this.getPromotionCodeBanner();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.height_slider_1 = this.widthScreen / 1.1 * (9 / 16);
          }
        }, {
          key: "getDataCheckShopOwner",
          value: function getDataCheckShopOwner() {
            var self = this;
            this.apiService.getDataCheckShopOwner().subscribe(function (result) {
              if (result.requestShopProducts && result.requestShopProducts.length > 0) {
                self.display_button_management = true;
              }

              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
              self.display_button_management = false;
            });
          }
        }, {
          key: "getAllServiceSystem",
          value: function getAllServiceSystem() {
            var self = this;
            this.loading.present();
            this.apiService.getListShopHouseCateV2().subscribe(function (result) {
              self.loading.dismiss();

              if (result && result.shopCategories) {
                self.listServiceCategory = result.shopCategories;
              }
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "getDataUserShop",
          value: function getDataUserShop(page, limit, search, event, isRefresh) {
            var _this2 = this;

            var self = this;

            if (isRefresh) {
              this.list_data_silde_2 = [];
            }

            if (this.getShopProductSubscriber) {
              this.getShopProductSubscriber.unsubscribe();
            }

            this.loading.present();
            this.getShopProductSubscriber = this.apiService.getDataUserShopV2(page, limit, search).subscribe(function (result) {
              var data_shop_product = (result === null || result === void 0 ? void 0 : result.shopHousesV2) || [];
              data_shop_product.forEach(function (product) {
                var title = product.title;
                var text_note = product.promotionKM ? product.promotionKM : '';

                if (text_note && text_note != 'KM') {
                  text_note = '-' + text_note;
                } else if (text_note == 'KM') {
                  text_note = _this2.translate.instant('SHOP_BY_CATE.promotion');
                }

                var type_note = product.promotionKM == 'KM' ? 2 : 1;
                var text_place = 'AMO';

                if (product.apartment) {
                  text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
                }

                var text_star_rate = product.stars;
                var text_tag = product.promotion ? product.promotion : '';
                var thumbnailUrl = product.thumbnail;

                if (!thumbnailUrl && product.attachments && product.attachments.length > 1) {
                  thumbnailUrl = product.attachments[1].url;
                }

                var object = {
                  _id: product._id,
                  thumbnail: thumbnailUrl ? thumbnailUrl : 'assets/common/no-thumbnail.png',
                  title: title,
                  text_note: text_note,
                  type_note: type_note,
                  text_place: text_place,
                  text_star_rate: text_star_rate,
                  text_tag: text_tag
                };

                _this2.list_data_silde_2.push(object);
              });

              if (event) {
                event.target.complete();
              }

              self.loading.dismiss();
              self.show_slider = true;
            }, function (error) {
              self.show_slider = true;
              self.loading.dismiss();
            });
          }
        }, {
          key: "getPromotionCodeBanner",
          value: function getPromotionCodeBanner() {
            var _this3 = this;

            this.apiService.promotionCodeBanner().subscribe(function (result) {
              _this3.listPromotionCodeBanner = result.promotionCodesV2;

              _this3.loading.dismiss();
            }, function (error) {
              _this3.loading.dismiss();
            });
          }
        }, {
          key: "detailPage",
          value: function detailPage(id, name) {
            this.navCtrl.navigateForward('/service-categories-list/' + id + '/' + name);
          }
        }, {
          key: "addNewService",
          value: function addNewService(event) {
            if (event && event.stopPropagation) {
              event.stopPropagation();
            }

            this.alertService.presentToast(this.translate.instant('COMMON.maintain'));
          }
        }, {
          key: "formatString",
          value: function formatString(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"].formatString(stringDate);
          }
        }, {
          key: "moveResidentMarketPage",
          value: function moveResidentMarketPage() {
            this.navCtrl.navigateForward('/resident-market');
          }
        }, {
          key: "moveCallTheCarPage",
          value: function moveCallTheCarPage() {
            this.navCtrl.navigateForward('/call-the-car');
          }
        }, {
          key: "moveShopHousePage",
          value: function moveShopHousePage(event) {
            this.navCtrl.navigateForward('/shop-house/' + event.currentTarget.id);
          }
        }, {
          key: "moveHistoryPage",
          value: function moveHistoryPage() {
            this.navCtrl.navigateForward('/history');
          }
        }, {
          key: "moveCreateShopHouse",
          value: function moveCreateShopHouse() {
            this.navCtrl.navigateForward('/create-shop-house');
          }
        }, {
          key: "moveRequestHouseSale",
          value: function moveRequestHouseSale() {
            this.navCtrl.navigateForward('/request-house-sale');
          }
        }, {
          key: "moveManagementOrderPage",
          value: function moveManagementOrderPage() {
            this.navCtrl.navigateForward('/management-order');
          }
        }, {
          key: "moveRepairServicePage",
          value: function moveRepairServicePage() {
            this.navCtrl.navigateForward('/repair-service');
          }
        }, {
          key: "getStyleRange1",
          value: function getStyleRange1(_id) {
            var range1 = this.list_data_range[_id][0];
            var range2 = 'calc(' + this.list_data_range[_id][1] + ' - 18px)';
            var color = this.list_data_range[_id][2];
            var background = this.list_data_range[_id][3];
            return [range1, range2, color, background];
          }
        }, {
          key: "convertFormatMoney",
          value: function convertFormatMoney(value) {
            value = value.toString();
            var convert1 = '';
            var convert2 = '';
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
          key: "eventClickGroupPon",
          value: function eventClickGroupPon(object, type) {
            if (type == 'advertisement') {
              this.navCtrl.navigateForward('/shop-house/' + object.id_shop);
            } else {
              localStorage.setItem('data-booking-product', JSON.stringify(object));
              this.navCtrl.navigateForward('/booking-product/' + 'groupon');
            }
          }
        }, {
          key: "getHeightSlider",
          value: function getHeightSlider() {
            return this.height_slider_1 + 'px';
          }
        }]);

        return ServicesPage;
      }();

      ServicesPage.ɵfac = function ServicesPage_Factory(t) {
        return new (t || ServicesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]));
      };

      ServicesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ServicesPage,
        selectors: [["app-services"]],
        decls: 44,
        vars: 29,
        consts: [[1, "service-header-title"], [1, "service-header-sub-title"], [1, "button-history", 3, "click"], ["src", "../assets/icon/svg/History.svg", 1, "icon-home"], [1, "font-weight-bold"], ["class", "header-slider-wrapper", 4, "ngIf"], [1, "service-category"], [1, "service-category-row"], ["size", "3", "class", "ion-col", 4, "ngFor", "ngForOf"], [1, "group-2-style"], [1, ""], ["size", "12", 1, "group-2-label-1", "ion-align-self-start"], ["size", "6", 1, "font-weight-bold", "group-2-label-2", "ion-align-self-end", 3, "click"], [4, "ngIf"], [3, "options", 4, "ngIf"], [1, "margin-bottom-20", "margin-top-10", 3, "options"], ["lines", "none", 1, "ion-no-padding", "width-100"], [1, "resident-market-no-data"], [1, "resident-market-info-block"], [1, "ion-label-1"], [1, "ion-label-2"], [1, "", 3, "click"], [1, "resident-market-image-block"], ["src", "../assets/icon/svg/Store.svg", "alt", "", 1, "img-responsive"], [1, "bottom-frame"], [1, "header-slider-wrapper"], ["pager", "true", 1, "header-slider", 3, "options"], [4, "ngFor", "ngForOf"], [3, "src"], ["size", "3", 1, "ion-col"], [1, "col-content", 3, "id", "click"], [1, "class-image-button", 3, "src"], [1, "cate-title"], [3, "options"], [1, "margin-right-5", "margin-top-5", "border-radius-8", "market-slide-card", 3, "id", "click"], ["lines", "none", "class", "ion-no-padding", 4, "ngIf"], [1, "ion-no-padding", "padding-bottom-15"], [1, "font-weight-bold", "group-1-text-title"], [1, "group-1-text-star"], [1, "group-1-text-star-1"], ["src", "../assets/icon/svg/icon-star.svg", 1, "group-1-icon-star"], [1, "class-label-rate"], ["class", "group-1-text-star-2", 4, "ngIf"], ["lines", "none", 1, "ion-no-padding"], ["src", "assets/common/no-thumbnail.png", "alt", "", 1, "slider-item-image"], ["alt", "", 1, "slider-item-image", 3, "src"], [1, "note-2"], [1, "group-1-text-star-2"], ["src", "../assets/icon/svg/icon-tag.svg", 1, "group-1-icon-tag"]],
        template: function ServicesPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesPage_Template_button_click_7_listener() {
              return ctx.moveHistoryPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServicesPage_div_12_Template, 3, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-grid", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ServicesPage_ion_col_16_Template, 6, 3, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-grid", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-row", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-col", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesPage_Template_ion_col_click_23_listener() {
              return ctx.moveResidentMarketPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ServicesPage_ion_label_24_Template, 3, 3, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ServicesPage_ion_slides_25_Template, 2, 2, "ion-slides", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-slides", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-slide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesPage_Template_button_click_37_listener() {
              return ctx.moveRequestHouseSale();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "ion-img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ion-no-border ", ctx.listPromotionCodeBanner && ctx.listPromotionCodeBanner.length > 0 ? "header-margin-bottom" : "", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 15, "SEVICE_NEW.title_service"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 17, "SEVICE_NEW.sub_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 19, "SEVICE_NEW.label_history"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listPromotionCodeBanner && ctx.listPromotionCodeBanner.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listServiceCategory);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 21, "SEVICE_NEW.request_house_sale_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list_data_silde_2.length != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list_data_silde_2.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.slideOpts_2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 23, "SEVICE_NEW.house_sale_label_1"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 25, "SEVICE_NEW.house_sale_label_2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 27, "SEVICE_NEW.house_sale_btn_create"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: [".header-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 26px;\n  line-height: 40px;\n  color: #21313f;\n  height: 40px;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-title.md[_ngcontent-%COMP%] {\n  -webkit-padding-start: 16px;\n          padding-inline-start: 16px;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-title.ios[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.group-button-header[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n\n.button-manager[_ngcontent-%COMP%] {\n  background-color: #e6f5fa;\n  color: #009ac9;\n  border-radius: 15px;\n  font-size: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px 10px;\n}\n\n.button-history[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .button-manager[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.padding-bottom-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.padding-bottom-15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.class-image-button[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 40px;\n  height: 40px;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-25[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.text-button[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #221c1e;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n  width: 50px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.padding-start-0[_ngcontent-%COMP%] {\n  --padding-start: 0;\n}\n\n.ion-align-self-end[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #009ac9;\n}\n\n.ion-align-self-start[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.group-2-style[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.group-2-label-1[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n}\n\n.group-2-label-1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 1px;\n  left: 5px;\n  border-bottom: 2px solid #FFC144;\n  width: 30px;\n}\n\n.group-2-label-2[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: right;\n  color: #FFC144;\n}\n\n.note-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0px;\n  left: 0;\n  background-color: #eb5757;\n  border-radius: 8px 0px;\n  padding: 3px 20px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n.note-2[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0px;\n  left: 0;\n  background-color: #fdbc3f;\n  border-radius: 8px 0px;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 15px;\n  color: #ffffff;\n}\n\n.ion-no-padding[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.margin-right-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.margin-top-5[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.group-1-text-title[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: flex-end;\n  padding: 10px 10px 5px 10px;\n  font-size: 16px;\n  color: #21313f;\n  font-weight: 600;\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  margin: 0 auto;\n  line-height: 1.5;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.group-1-icon-place[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.group-1-text-place[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313f;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  padding-right: 8px;\n}\n\n.group-1-text-star[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  font-size: 14px;\n  color: #21313f;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  padding-right: 8px;\n}\n\n.group-1-icon-star[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.group-1-icon-tag[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.ion-grid-class[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.market-slide-card[_ngcontent-%COMP%] {\n  height: 230px !important;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.group-1-text-star-1[_ngcontent-%COMP%] {\n  width: 25%;\n  display: inline-flex;\n}\n\n.group-1-text-star-2[_ngcontent-%COMP%] {\n  width: 75%;\n  display: inline-flex;\n}\n\n.group-1-text-star-2[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.group-1-text-place[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.border-radius-8[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%] {\n  background: #97171b;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 10px 30px rgba(33, 49, 63, 0.1);\n  border-radius: 10px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .img-responsive[_ngcontent-%COMP%] {\n  border-radius: 8px 0px 8px 0px;\n  overflow: hidden;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .range-1[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #ffffff;\n  border-radius: 16px;\n  width: 50%;\n  height: 4px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .range-2[_ngcontent-%COMP%] {\n  background: #ffffff;\n  opacity: 0.3;\n  border-radius: 16px;\n  width: 100%;\n  height: 4px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-1[_ngcontent-%COMP%]   .col-8[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #ffffff;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-1[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #f4f5f5;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-2[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  white-space: normal;\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  max-height: 60px;\n  -webkit-box-orient: vertical;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: right;\n  color: #ffffff;\n  display: block;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  margin-top: 5px;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-5[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  margin-top: 5px;\n  position: absolute;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  margin-top: 5px;\n  position: absolute;\n  right: 0;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .div-promotion-code[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-3[_ngcontent-%COMP%]   .item-1[_ngcontent-%COMP%] {\n  vertical-align: initial;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-3[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  vertical-align: initial;\n}\n\n.div-promotion-code[_ngcontent-%COMP%]   .promotion-code-3[_ngcontent-%COMP%]   .item-2[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 5px;\n}\n\n.group-1-deadline[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #009ac9;\n  border-radius: 8px 0px;\n  padding: 2px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n.resident-market-no-data[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #cce7ef;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.ion-no-border[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  border-radius: 200%/0 0 40px 40px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0px;\n  padding-top: 44px;\n}\n\n.header-margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 90px;\n}\n\n.service-header-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.service-header-sub-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #ffffff;\n}\n\n.button-history[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #000000;\n  border-radius: 15px 0 0 15px;\n  font-size: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 7px 10px;\n  position: absolute;\n  right: 0;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n}\n\n.header-slider-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  height: 120px;\n  top: 125px;\n  --bullet-background: red;\n}\n\n.header-slider-wrapper[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 15px;\n}\n\n.header-slider-wrapper[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 15px;\n  -o-object-fit: unset !important;\n     object-fit: unset !important;\n}\n\n.header-slider-wrapper[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]     .swiper-wrapper {\n  height: 100px !important;\n}\n\n.header-slider-wrapper[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]     .swiper-pagination {\n  bottom: 0px;\n}\n\n.header-slider-wrapper[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]     .swiper-pagination .swiper-pagination-bullet {\n  width: 10.3px;\n  height: 3px;\n  background: #221c1e80;\n  border-radius: 6px;\n  margin: 0 1.1px;\n}\n\n.header-slider-wrapper[_ngcontent-%COMP%]   .header-slider[_ngcontent-%COMP%]     .swiper-pagination .swiper-pagination-bullet-active {\n  background: #FFC144;\n}\n\n.class-image-button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.bottom-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  background-image: url(\"/assets/common/frame.png\");\n}\n\n.resident-market-no-data[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(60, 189, 253, 0.1) !important;\n  border: 1px dashed #3cbdfd;\n  padding: 10px 15px;\n}\n\n.resident-market-no-data[_ngcontent-%COMP%]   .resident-market-info-block[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n\n.resident-market-no-data[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.resident-market-no-data[_ngcontent-%COMP%]   .ion-label-1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: left;\n  color: #21313f;\n}\n\n.resident-market-no-data[_ngcontent-%COMP%]   .ion-label-2[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 20px;\n  text-align: left;\n  color: #21313f;\n  margin-top: 3px;\n  margin-bottom: 13px;\n}\n\n.resident-market-no-data[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffc144 0%, #ee9a1c 100%);\n  border-radius: 8px;\n  padding: 5px 10px;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.slider-item-image[_ngcontent-%COMP%] {\n  border-radius: 8px 8px 0px 0px;\n  width: 100%;\n  height: 130px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.service-category[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  margin-top: 20px;\n}\n\n.service-category[_ngcontent-%COMP%]   .service-category-row[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\n.service-category[_ngcontent-%COMP%]   .service-category-row[_ngcontent-%COMP%]   .ion-col[_ngcontent-%COMP%] {\n  -webkit-padding-start: 2px;\n          padding-inline-start: 2px;\n  -webkit-padding-end: 2px;\n          padding-inline-end: 2px;\n}\n\n.service-category[_ngcontent-%COMP%]   .service-category-row[_ngcontent-%COMP%]   .ion-col[_ngcontent-%COMP%]   .cate-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-align: center;\n  display: block;\n  display: -webkit-box;\n  max-width: 100%;\n  margin: 0 auto;\n  font-size: 12px;\n  line-height: 1.5;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 4px;\n}\n\n.service-category[_ngcontent-%COMP%]   .service-category-row[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%] {\n  vertical-align: top;\n  text-align: center;\n  width: 100%;\n  height: 100px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding-top: 10px;\n  padding-left: 2px;\n  padding-right: 2px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMtbmV3L3NlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtVQUFBLDBCQUFBO0FBRUY7O0FBQUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FBR0Y7O0FBREE7RUFDRSw4QkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLFFBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTs7RUFFRSxrQkFBQTtBQUlGOztBQUZBO0VBQ0Usb0JBQUE7QUFLRjs7QUFIQTtFQUNFLG9CQUFBO0FBTUY7O0FBSEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtBQVFGOztBQU5BO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBU0Y7O0FBUEE7RUFDRSxnQkFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVZBO0VBQ0UsZ0JBQUE7QUFhRjs7QUFYQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFjRjs7QUFaQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7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Rjs7QUE3Q0U7RUFDRSxlQUFBO0FBK0NKOztBQTlDSTtFQUNFLDBCQUFBO1VBQUEseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FBZ0ROOztBQS9DTTtFQUNFLGdCQUFBO0VBR0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQStDUjs7QUE1Q0k7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUE4Q04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy1uZXcvc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbmlvbi10b29sYmFyIGlvbi10aXRsZS5tZCB7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE2cHg7XHJcbn1cclxuaW9uLXRvb2xiYXIgaW9uLXRpdGxlLmlvcyB7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uZ3JvdXAtYnV0dG9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgLy8gaGVpZ2h0OiAyNXB4O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcbi5idXR0b24tbWFuYWdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjVmYTtcclxuICBjb2xvcjogIzAwOWFjOTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIC8vIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcclxufVxyXG5cclxuLmJ1dHRvbi1oaXN0b3J5IGltZyxcclxuLmJ1dHRvbi1tYW5hZ2VyIGltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5wYWRkaW5nLWJvdHRvbS0yMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZGRpbmctYm90dG9tLTE1IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNsYXNzLWltYWdlLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTIwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTI1IHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi50ZXh0LWJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMjIxYzFlO1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcclxuICB3aWR0aDogNTBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmZvbnQtd2VpZ2h0LWJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnBhZGRpbmctc3RhcnQtMCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG59XHJcbi5pb24tYWxpZ24tc2VsZi1lbmQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG59XHJcbi5pb24tYWxpZ24tc2VsZi1zdGFydCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uZ3JvdXAtMi1zdHlsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5ncm91cC0yLWxhYmVsLTEge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBjb2xvcjogIzIyMWMxZTtcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxcHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGQzE0NDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxufVxyXG4uZ3JvdXAtMi1sYWJlbC0yIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICNGRkMxNDQ7XHJcbn1cclxuLm5vdGUtMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHRvcDogMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViNTc1NztcclxuICBib3JkZXItcmFkaXVzOiA4cHggMHB4O1xyXG4gIHBhZGRpbmc6IDNweCAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG4ubm90ZS0yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYzNmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XHJcbiAgcGFkZGluZzogM3B4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5pb24tbm8tcGFkZGluZyB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcbi5tYXJnaW4tcmlnaHQtNSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLm1hcmdpbi10b3AtNSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5ncm91cC0xLXRleHQtdGl0bGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uZ3JvdXAtMS1pY29uLXBsYWNlIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmdyb3VwLTEtdGV4dC1wbGFjZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbi5ncm91cC0xLXRleHQtc3RhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcbi5ncm91cC0xLWljb24tc3RhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4uZ3JvdXAtMS1pY29uLXRhZyB7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuLmlvbi1ncmlkLWNsYXNzIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5tYXJrZXQtc2xpZGUtY2FyZCB7XHJcbiAgaGVpZ2h0OiAyMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sLTEsXHJcbi5jb2wtMixcclxuLmNvbC0zLFxyXG4uY29sLTQsXHJcbi5jb2wtNSxcclxuLmNvbC02LFxyXG4uY29sLTcsXHJcbi5jb2wtOCxcclxuLmNvbC05LFxyXG4uY29sLTEwLFxyXG4uY29sLTExLFxyXG4uY29sLTEyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5yb3cge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uZ3JvdXAtMS10ZXh0LXN0YXItMSB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uZ3JvdXAtMS10ZXh0LXN0YXItMiB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uZ3JvdXAtMS10ZXh0LXN0YXItMiBpb24tbGFiZWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uZ3JvdXAtMS10ZXh0LXBsYWNlIGlvbi1sYWJlbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5ib3JkZXItcmFkaXVzLTgge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLy8gY3NzIHByb21vdGlvbi1jb2RlXHJcbi5kaXYtcHJvbW90aW9uLWNvZGUge1xyXG4gIGJhY2tncm91bmQ6ICM5NzE3MWI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggcmdiYSgzMywgNDksIDYzLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmRpdi1wcm9tb3Rpb24tY29kZSAuaW1nLXJlc3BvbnNpdmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHggOHB4IDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnJhbmdlLTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDRweDtcclxufVxyXG4uZGl2LXByb21vdGlvbi1jb2RlIC5yYW5nZS0yIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNHB4O1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTEgLmNvbC04IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRpdi1wcm9tb3Rpb24tY29kZSAucHJvbW90aW9uLWNvZGUtMSAuY29sLTQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogI2Y0ZjVmNTtcclxufVxyXG4uZGl2LXByb21vdGlvbi1jb2RlIC5wcm9tb3Rpb24tY29kZS0yIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgbWF4LWhlaWdodDogNjBweDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZGl2LXByb21vdGlvbi1jb2RlIC5wcm9tb3Rpb24tY29kZS00IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTYge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLmRpdi1wcm9tb3Rpb24tY29kZSBpb24tY29sIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTMgLml0ZW0tMSB7XHJcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XHJcbn1cclxuLmRpdi1wcm9tb3Rpb24tY29kZSAucHJvbW90aW9uLWNvZGUtMyBzdmcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xyXG59XHJcbi5kaXYtcHJvbW90aW9uLWNvZGUgLnByb21vdGlvbi1jb2RlLTMgLml0ZW0tMiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmdyb3VwLTEtZGVhZGxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5YWM5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHg7XHJcbiAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVzaWRlbnQtbWFya2V0LW5vLWRhdGEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2U3ZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gdXBkYXRlIHRoZW1lIGNzc1xyXG5cclxuLmlvbi1uby1ib3JkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgaGVpZ2h0OiAxNTZweDtcclxuICBib3JkZXItcmFkaXVzOiAyMDAlLzAgMCA0MHB4IDQwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NHB4O1xyXG59XHJcbi5oZWFkZXItbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxufVxyXG5cclxuLnNlcnZpY2UtaGVhZGVyLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWhlYWRlci1zdWItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uLWhpc3Rvcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMTVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuXHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmhlYWRlci1zbGlkZXItd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB0b3A6IDEyNXB4O1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJlZDtcclxuICAuaGVhZGVyLXNsaWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLnN3aXBlci1zbGlkZSA+IGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLnN3aXBlci13cmFwcGVyIHtcclxuICAgICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgICAgICB3aWR0aDogMTAuM3B4O1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjFjMWU4MDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEuMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2xhc3MtaW1hZ2UtYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5ib3R0b20tZnJhbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2NvbW1vbi9mcmFtZS5wbmcnKTtcclxufVxyXG5cclxuLnJlc2lkZW50LW1hcmtldC1uby1kYXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgMTg5LCAyNTMsIDAuMSkgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgIzNjYmRmZDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblxyXG4gIC5yZXNpZGVudC1tYXJrZXQtaW5mby1ibG9jayB7XHJcbiAgICAvLyB3aWR0aDogY2FsYygoMTAwJSAvIDMgKiAyKSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzaWRlbnQtbWFya2V0LW5vLWRhdGEgaW9uLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZXNpZGVudC1tYXJrZXQtbm8tZGF0YSAuaW9uLWxhYmVsLTEge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG59XHJcbi5yZXNpZGVudC1tYXJrZXQtbm8tZGF0YSAuaW9uLWxhYmVsLTIge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcbn1cclxuXHJcbi5yZXNpZGVudC1tYXJrZXQtbm8tZGF0YSBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmMxNDQgMCUsICNlZTlhMWMgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG4uc2xpZGVyLWl0ZW0taW1hZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5zZXJ2aWNlLWNhdGVnb3J5IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIC5zZXJ2aWNlLWNhdGVnb3J5LXJvdyB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAuaW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAycHg7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMnB4O1xyXG4gICAgICAuY2F0ZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAvLyBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbC1jb250ZW50IHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-services',
            templateUrl: './services.page.html',
            styleUrls: ['./services.page.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=services-new-services-module-es5.js.map