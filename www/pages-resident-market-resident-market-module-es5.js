(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resident-market-resident-market-module"], {
    /***/
    "Vcb3":
    /*!***************************************************************!*\
      !*** ./src/app/pages/resident-market/resident-market.page.ts ***!
      \***************************************************************/

    /*! exports provided: ResidentMarketPage */

    /***/
    function Vcb3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResidentMarketPage", function () {
        return ResidentMarketPage;
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
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _utils_const_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/const.service */
      "KQOL");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _booking_shop_house_booking_shop_house_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../booking-shop-house/booking-shop-house.page */
      "w97y");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ResidentMarketPage_ion_item_13_ion_col_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", object_r1.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.text_note);
        }
      }

      function ResidentMarketPage_ion_item_13_ion_col_4_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.text_star_rate);
        }
      }

      function ResidentMarketPage_ion_item_13_ion_col_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ResidentMarketPage_ion_item_13_ion_col_4_div_9_Template, 4, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.text_place);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", object_r1.text_star_rate != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"]("", object_r1.numberEvaluation, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 7, "SHOP_BY_CATE.rating"), " | ", object_r1.numberOrder, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "SHOP_BY_CATE.setup"), "");
        }
      }

      function ResidentMarketPage_ion_item_13_ion_col_5_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.text_star_rate);
        }
      }

      function ResidentMarketPage_ion_item_13_ion_col_5_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.text_tag);
        }
      }

      function ResidentMarketPage_ion_item_13_ion_col_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ResidentMarketPage_ion_item_13_ion_col_5_div_9_Template, 4, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResidentMarketPage_ion_item_13_ion_col_5_div_10_Template, 4, 1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.text_place);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", object_r1.text_star_rate != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", object_r1.text_tag != "");
        }
      }

      function ResidentMarketPage_ion_item_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResidentMarketPage_ion_item_13_Template_ion_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var object_r1 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.moveShopHousePage(object_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ResidentMarketPage_ion_item_13_ion_col_3_Template, 5, 2, "ion-col", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ResidentMarketPage_ion_item_13_ion_col_4_Template, 14, 11, "ion-col", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ResidentMarketPage_ion_item_13_ion_col_5_Template, 11, 4, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", object_r1._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", object_r1.thumbnail != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", object_r1.thumbnail != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", object_r1.thumbnail == "");
        }
      }

      var ResidentMarketPage = /*#__PURE__*/function () {
        function ResidentMarketPage(loading, apiService, navCtrl, modalController, translate) {
          _classCallCheck(this, ResidentMarketPage);

          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.translate = translate;
          this.listDataMarket = [];
        }

        _createClass(ResidentMarketPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data_shop_house = {};
            this.listDataMarket = [];
            this.currentPage = 1;
            this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_4__["ConstService"].NUMBER_RECORD_ON_PAGE;
            this.getDataUserShop(this.currentPage, this.numberRecordOnPage, '', null, true);
          }
        }, {
          key: "getDataUserShop",
          value: function getDataUserShop(page, limit, search, event, isRefresh) {
            var _this = this;

            var self = this;

            if (isRefresh) {
              this.listDataMarket = [];
            }

            if (this.getShopProductSubscriber) {
              this.getShopProductSubscriber.unsubscribe();
            }

            this.loading.present();
            this.getShopProductSubscriber = this.apiService.getDataUserShopV2(page, limit, search).subscribe(function (result) {
              var data_shop_product = (result === null || result === void 0 ? void 0 : result.shopHousesV2) || [];
              data_shop_product.forEach(function (product) {
                var title = product.title;
                var text_note = product.promotionKM ? product.promotionKM : "";

                if (text_note && text_note != 'KM') {
                  text_note = '-' + text_note;
                } else if (text_note == 'KM') {
                  text_note = _this.translate.instant('SHOP_BY_CATE.promotion');
                }

                var type_note = product.promotionKM == "KM" ? 2 : 1;
                var text_place = "AMO";

                if (product.apartment) {
                  text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
                }

                var text_star_rate = product.stars;
                var text_tag = product.promotion ? product.promotion : "";
                var thumbnailUrl = product.thumbnail;

                if (!thumbnailUrl && product.attachments && product.attachments.length > 1) {
                  thumbnailUrl = product.attachments[1].url;
                }

                var object = {
                  '_id': product._id,
                  'thumbnail': thumbnailUrl ? thumbnailUrl : 'assets/common/no-thumbnail.png',
                  'title': title,
                  'text_note': text_note,
                  'type_note': type_note,
                  'text_place': text_place,
                  'text_star_rate': text_star_rate,
                  'text_tag': text_tag,
                  'carServiceType': product.carServiceType,
                  'numberEvaluation': product.numberEvaluation || 0,
                  'numberOrder': product.numberOrder || 0
                };

                _this.listDataMarket.push(object);
              });

              if (event) {
                event.target.complete();
              }

              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            this.currentPage++;
            this.getDataUserShop(this.currentPage, this.numberRecordOnPage, '', event, false);
          }
        }, {
          key: "moveToCreateShopHouse",
          value: function moveToCreateShopHouse() {
            this.navCtrl.navigateForward('/create-shop-house');
          }
        }, {
          key: "moveShopHousePage",
          value: function moveShopHousePage(object) {
            if (object.carServiceType == "technologyCar") {
              this.navCtrl.navigateForward('/call-the-car-detail/' + object._id);
            } else if (object.carServiceType == "oneTurn") {
              this.moveToBookingShopHouse(object);
            } else {
              this.navCtrl.navigateForward('/shop-house/' + object._id);
            }
          }
        }, {
          key: "moveToBookingShopHouse",
          value: function moveToBookingShopHouse(object) {
            var self = this;
            this.getShopProducts(object, function () {
              if (self.data_shop_house['group_2'].length > 0) {
                self.data_shop_house['group_2'][0]['data'][0].number = 1;
                localStorage.setItem('data-shop-house', JSON.stringify(self.data_shop_house));
                self.navCtrl.navigateForward('/booking-shop-house');
              }
            });
          }
        }, {
          key: "goToPageBookingShopHouse",
          value: function goToPageBookingShopHouse() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _booking_shop_house_booking_shop_house_page__WEBPACK_IMPORTED_MODULE_6__["BookingShopHousePage"],
                        cssClass: 'booking-shop-house-modal-css'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getShopProducts",
          value: function getShopProducts(objectShop, callBack) {
            var self = this;
            this.data_shop_house = {};
            this.data_shop_house['carServiceType'] = objectShop.carServiceType;
            this.data_shop_house['group_1'] = [];
            this.data_shop_house['group_2'] = [];
            this.loading.present();
            this.apiService.getDataServiceShopProduct(objectShop._id).subscribe(function (result) {
              var data_shop_product = result.shopProducts;
              data_shop_product.forEach(function (product) {
                if (product.requestShopProduct) {
                  self.data_shop_house['_id'] = product.requestShopProduct._id;
                  self.data_shop_house['text_title'] = product.requestShopProduct.title;
                  self.data_shop_house['text_place'] = product.requestShopProduct.apartment.title + ' - ' + product.requestShopProduct.apartment.campaign.title;
                  self.data_shop_house['text_star_rate'] = product.requestShopProduct.stars;
                  var thumbnail = product.requestShopProduct.thumbnail;
                  var logo = product.requestShopProduct.thumbnail;

                  if (product.requestShopProduct.attachments && product.requestShopProduct.attachments.length > 1) {
                    logo = product.requestShopProduct.attachments[0].url;
                    thumbnail = product.requestShopProduct.attachments[1].url;
                  }

                  self.data_shop_house['thumbnail'] = thumbnail;
                  self.data_shop_house['logo'] = logo;
                  var time_open = "Luôn mở cửa";

                  if (product.requestShopProduct.timeOpen) {
                    time_open = product.requestShopProduct.timeOpen;
                  }

                  self.data_shop_house['time_open'] = time_open;

                  if (product.promotionCodes && product.promotionCodes.length > 0 && product.promotionCodes[0].type == "groupon") {
                    var promotionCodes = product.promotionCodes[0];
                    var deadline_convert = '';

                    if (promotionCodes.endAt) {
                      var today = new Date();
                      var endAt = new Date(promotionCodes.endAt);
                      var ageDate = Math.abs(endAt.getTime() - today.getTime());
                      var deadline = Math.ceil(ageDate / (1000 * 3600 * 24));
                      deadline = deadline ? deadline : 0;
                      deadline_convert = deadline == 0 ? "Khuyến mại" : "Còn " + deadline + "   ngày";
                    }

                    var title = product.title;
                    var money = product.price;

                    if (product.discountProducts && product.discountProducts.length > 0) {
                      var _today = new Date();

                      var startAt = new Date(product.discountProducts[0].startAt);

                      var _endAt = new Date(product.discountProducts[0].endAt);

                      if (startAt <= _today && _today <= _endAt) {
                        money = product.discountProducts[0].discountValue;
                      }
                    }

                    var slider_value = promotionCodes.numberOrder * 100 / promotionCodes.promotion2;
                    var range_position_value = promotionCodes.promotion1 * 100 / promotionCodes.promotion2;
                    var discount = 0;

                    if (promotionCodes.numberOrder >= promotionCodes.promotion1 && promotionCodes.numberOrder < promotionCodes.promotion2) {
                      discount = promotionCodes.promotionPercent1 / 100;
                    } else if (promotionCodes.numberOrder == promotionCodes.promotion2) {
                      discount = promotionCodes.promotionPercent2 / 100;
                    }

                    money = money - money * discount;
                    var detail = promotionCodes.title;
                    var actual_order = promotionCodes.numberOrder + "/" + promotionCodes.promotion2;
                    var moc_1 = "-0%";
                    var moc_2 = "-" + promotionCodes.promotionPercent1 + "%";
                    var moc_3 = "-" + promotionCodes.promotionPercent2 + "%";
                    var background_image = '';
                    var object = {
                      '_id': product._id,
                      '_id_requestShopProduct': product.requestShopProduct._id,
                      'thumbnail': product.thumbnail,
                      'bg_url': "../assets/images/services/1.png",
                      'deadline': deadline_convert,
                      'title': title,
                      'money': self.convertFormatMoney(money),
                      'detail': detail,
                      'excerpt': product.excerpt,
                      'actual_order': actual_order,
                      'slider_value': slider_value,
                      'range_position_value': range_position_value,
                      'moc_1': moc_1,
                      'moc_2': moc_2,
                      'moc_3': moc_3,
                      'number': 0,
                      'background_image': background_image
                    };
                    self.data_shop_house.group_1.push(object);
                  } else {
                    var index = self.getIndexCategoryInList(product.category._id);

                    if (index < 0) {
                      self.data_shop_house['group_2'].push({
                        id_tab: product.category._id,
                        title: product.category.title,
                        data: []
                      });
                      index = self.data_shop_house['group_2'].length - 1;
                    }

                    var _title = product.title;
                    var _money = product.price;

                    if (product.discountProducts && product.discountProducts.length > 0) {
                      var _today2 = new Date();

                      var _startAt = new Date(product.discountProducts[0].startAt);

                      var _endAt2 = new Date(product.discountProducts[0].endAt);

                      if (_startAt <= _today2 && _today2 <= _endAt2) {
                        _money = product.discountProducts[0].discountValue;
                      }
                    }

                    var _object = {
                      _id: product._id,
                      image: product.thumbnail,
                      title: _title,
                      money: self.convertFormatMoney(_money),
                      note: product.excerpt,
                      number: 0
                    };
                    self.data_shop_house.group_2[index].data.push(_object);
                  }
                }
              });
              self.loading.dismiss();
              callBack();
            }, function (error) {
              self.loading.dismiss();
              callBack();
            });
          }
        }, {
          key: "getIndexCategoryInList",
          value: function getIndexCategoryInList(id_tab) {
            var self = this;
            var index = -1;
            var index_value = -1;
            self.data_shop_house.group_2.forEach(function (object) {
              index++;

              if (object.id_tab == id_tab) {
                index_value = index;
              }
            });
            return index_value;
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
        }]);

        return ResidentMarketPage;
      }();

      ResidentMarketPage.ɵfac = function ResidentMarketPage_Factory(t) {
        return new (t || ResidentMarketPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]));
      };

      ResidentMarketPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ResidentMarketPage,
        selectors: [["app-resident-market"]],
        decls: 16,
        vars: 8,
        consts: [[1, "ion-no-border", "regident-market-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "button-add-new-market", 3, "click"], ["src", "assets/icon/market/store.svg", 1, "icon-home"], [1, "header-sub-title"], [3, "scrollEvents"], [1, "list-view-custom"], ["class", "ion-item-class ion-no-padding", 3, "id", "click", 4, "ngFor", "ngForOf"], ["threshold", "50px", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], [1, "ion-item-class", "ion-no-padding", 3, "id", "click"], [1, "ion-no-padding"], ["size", "3", "class", "ion-no-padding", 4, "ngIf"], ["size", "9", "class", "ion-no-padding", 4, "ngIf"], ["size", "12", "class", "ion-no-padding", 4, "ngIf"], ["size", "3", 1, "ion-no-padding"], [1, "div-logo"], [1, "shop-image", 3, "src"], [1, "note-2"], ["size", "9", 1, "ion-no-padding"], [1, "group-1-text-title"], [1, "font-weight-bold"], [1, "group-1-text-place"], ["src", "../assets/icon/market/icon-place.svg", 1, "group-1-icon-place"], [1, "group-1-text-star"], ["class", "group-1-text-star-1", 4, "ngIf"], [1, "group-1-text-sold"], [1, "group-1-text-star-1"], ["src", "../assets/icon/svg/icon-star.svg", 1, "group-1-icon-star"], [1, "class-label-rate"], ["size", "12", 1, "ion-no-padding"], ["src", "../assets/icon/svg/icon-place.svg", 1, "group-1-icon-place"], ["class", "group-1-text-star-2", 4, "ngIf"], [1, "group-1-text-star-2"], ["src", "../assets/icon/svg/icon-tag.svg", 1, "group-1-icon-tag"]],
        template: function ResidentMarketPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResidentMarketPage_Template_button_click_6_listener() {
              return ctx.moveToCreateShopHouse();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-content", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ResidentMarketPage_ion_item_13_Template, 6, 4, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-infinite-scroll", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function ResidentMarketPage_Template_ion_infinite_scroll_ionInfinite_14_listener($event) {
              return ctx.loadData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-infinite-scroll-content", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "INBOX_19.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, "INBOX_19.label_history"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDataMarket);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.padding-bottom-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.padding-bottom-15[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n\n.button-1[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-grid;\n  text-align: center;\n  width: 100%;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.class-image-button[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-25[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.text-button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 10px;\n}\n\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.padding-start-0[_ngcontent-%COMP%] {\n  --padding-start: 0;\n}\n\n.ion-align-self-end[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #009ac9;\n}\n\n.ion-no-padding[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.margin-right-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.margin-top-5[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.group-1-text-title[_ngcontent-%COMP%] {\n  width: 100%;\n  align-items: flex-end;\n  display: inline-flex;\n  padding: 0px 10px;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n  font-weight: 600;\n  margin-left: 10px;\n}\n\n.group-1-icon-place[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n  width: 14px;\n  height: 14px;\n}\n\n.group-1-text-place[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  margin-left: 10px;\n  margin-top: 5px;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n}\n\n.group-1-text-star[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  color: #21313f;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  margin-top: 5px;\n  margin-left: 10px;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n}\n\n.group-1-icon-star[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  margin-right: 3px;\n}\n\n.group-1-icon-tag[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.ion-item-class[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #e9e9e9;\n  margin: 0px 15px;\n  padding: 10px 0px;\n  --inner-border-width: 0px;\n}\n\n.class-label-rate[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.div-logo[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.div-logo[_ngcontent-%COMP%]   .shop-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.note-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0px;\n  left: 0;\n  background-color: #eb5757;\n  border-radius: 8px 0px;\n  padding: 3px 10px;\n  color: #fff;\n  font-size: 12px;\n  line-height: 15px;\n}\n\n.note-2[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  background-color: #fdbc3f;\n  border-radius: 8px 0px;\n  padding: 2px 10px;\n  font-size: 8px;\n  line-height: 10px;\n  color: #ffffff;\n  min-width: 40px;\n  text-align: center;\n}\n\n.width-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.group-1-text-star-1[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  display: inline-flex;\n}\n\n.group-1-text-star-2[_ngcontent-%COMP%] {\n  width: 70%;\n  display: inline-flex;\n}\n\n.regident-market-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.regident-market-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 45px;\n}\n\n.regident-market-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.regident-market-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 40px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.regident-market-header[_ngcontent-%COMP%]   .button-add-new-market[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 30px;\n  left: 23.2%;\n  right: 23.47%;\n  top: 90px;\n  margin: 0 auto;\n  border: 1px solid #ffffff;\n  box-sizing: border-box;\n  border-radius: 8px;\n  background-color: transparent;\n}\n\n.regident-market-header[_ngcontent-%COMP%]   .button-add-new-market[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.regident-market-header[_ngcontent-%COMP%]   .button-add-new-market[_ngcontent-%COMP%]   .header-sub-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n  color: #ffffff;\n}\n\n.regident-market-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #ffffff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.group-1-text-sold[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 20px;\n  color: #666666;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzaWRlbnQtbWFya2V0L3Jlc2lkZW50LW1hcmtldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDQTtFQUNFLG9CQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUxBO0VBQ0UsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0FBU0Y7O0FBUEE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFVRjs7QUFSQTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0FBWUY7O0FBVkE7RUFDRSxlQUFBO0FBYUY7O0FBVkE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFhRjs7QUFYQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWNGOztBQVpBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZUY7O0FBYkE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZ0JGOztBQWRBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQWlCRjs7QUFmQTtFQUNFLGlCQUFBO0FBa0JGOztBQWZBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFrQkY7O0FBaEJBO0VBRUUsZ0JBQUE7QUFrQkY7O0FBaEJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQW1CRjs7QUFsQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQW9CSjs7QUFqQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFvQkY7O0FBbEJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBcUJGOztBQW5CQTtFQUNFLFdBQUE7QUFzQkY7O0FBcEJBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQXVCRjs7QUFyQkE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUF3QkY7O0FBcEJBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF1QkY7O0FBdEJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXdCSjs7QUF2Qkk7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBeUJOOztBQXRCRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBd0JKOztBQXRCRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQXdCSjs7QUF2Qkk7RUFDRSxrQkFBQTtBQXlCTjs7QUF2Qkk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBeUJOOztBQXRCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUF3Qko7O0FBckJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUF3QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNpZGVudC1tYXJrZXQvcmVzaWRlbnQtbWFya2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbS0yMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnBhZGRpbmctYm90dG9tLTE1IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4uYnV0dG9uLTEge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uY2xhc3MtaW1hZ2UtYnV0dG9uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubWFyZ2luLXRvcC0yMCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4ubWFyZ2luLXRvcC0yNSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4udGV4dC1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5mb250LXdlaWdodC1ib2xkIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5wYWRkaW5nLXN0YXJ0LTAge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufVxyXG4uaW9uLWFsaWduLXNlbGYtZW5kIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzAwOWFjOTtcclxufVxyXG4uaW9uLW5vLXBhZGRpbmcge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxufVxyXG4ubWFyZ2luLXJpZ2h0LTUge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTUge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmdyb3VwLTEtdGV4dC10aXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBjb2xvcjogIzIyMWMxZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5ncm91cC0xLWljb24tcGxhY2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuLmdyb3VwLTEtdGV4dC1wbGFjZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcbi5ncm91cC0xLXRleHQtc3RhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcbi5ncm91cC0xLWljb24tc3RhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4uZ3JvdXAtMS1pY29uLXRhZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5pb24taXRlbS1jbGFzcyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZTllOWU5O1xyXG4gIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweDtcclxufVxyXG4uY2xhc3MtbGFiZWwtcmF0ZSB7XHJcbiAgLy8gd2lkdGg6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uZGl2LWxvZ28ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC5zaG9wLWltYWdlIHtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG59XHJcbi5ub3RlLTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjU3NTc7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDBweDtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuLm5vdGUtMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGJjM2Y7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDBweDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBmb250LXNpemU6IDhweDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53aWR0aC0xMDAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ncm91cC0xLXRleHQtc3Rhci0xIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmdyb3VwLTEtdGV4dC1zdGFyLTIge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi8vIG5ldyBjc3MgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4ucmVnaWRlbnQtbWFya2V0LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDQ1cHg7XHJcbiAgICAuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIC5idXR0b24tYWRkLW5ldy1tYXJrZXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGVmdDogMjMuMiU7XHJcbiAgICByaWdodDogMjMuNDclO1xyXG4gICAgdG9wOiA5MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1zdWItdGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgcmlnaHQ6IC0xcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggMCAwICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi5ncm91cC0xLXRleHQtc29sZCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResidentMarketPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-resident-market',
            templateUrl: './resident-market.page.html',
            styleUrls: ['./resident-market.page.scss']
          }]
        }], function () {
          return [{
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YWp/":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/resident-market/resident-market.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ResidentMarketPageModule */

    /***/
    function YWp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResidentMarketPageModule", function () {
        return ResidentMarketPageModule;
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


      var _resident_market_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resident-market.page */
      "Vcb3");
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
        component: _resident_market_page__WEBPACK_IMPORTED_MODULE_5__["ResidentMarketPage"]
      }];

      var ResidentMarketPageModule = function ResidentMarketPageModule() {
        _classCallCheck(this, ResidentMarketPageModule);
      };

      ResidentMarketPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ResidentMarketPageModule
      });
      ResidentMarketPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ResidentMarketPageModule_Factory(t) {
          return new (t || ResidentMarketPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResidentMarketPageModule, {
          declarations: [_resident_market_page__WEBPACK_IMPORTED_MODULE_5__["ResidentMarketPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResidentMarketPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_8__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_resident_market_page__WEBPACK_IMPORTED_MODULE_5__["ResidentMarketPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-resident-market-resident-market-module-es5.js.map