(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-repair-service-repair-service-module"], {
    /***/
    "8lPP":
    /*!***************************************************************!*\
      !*** ./src/app/pages/repair-service/repair-service.module.ts ***!
      \***************************************************************/

    /*! exports provided: RepairServicePageModule */

    /***/
    function lPP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepairServicePageModule", function () {
        return RepairServicePageModule;
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


      var _repair_service_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./repair-service.page */
      "To+M");
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
        component: _repair_service_page__WEBPACK_IMPORTED_MODULE_5__["RepairServicePage"]
      }];

      var RepairServicePageModule = function RepairServicePageModule() {
        _classCallCheck(this, RepairServicePageModule);
      };

      RepairServicePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RepairServicePageModule
      });
      RepairServicePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RepairServicePageModule_Factory(t) {
          return new (t || RepairServicePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RepairServicePageModule, {
          declarations: [_repair_service_page__WEBPACK_IMPORTED_MODULE_5__["RepairServicePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepairServicePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_repair_service_page__WEBPACK_IMPORTED_MODULE_5__["RepairServicePage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "To+M":
    /*!*************************************************************!*\
      !*** ./src/app/pages/repair-service/repair-service.page.ts ***!
      \*************************************************************/

    /*! exports provided: RepairServicePage */

    /***/
    function ToM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RepairServicePage", function () {
        return RepairServicePage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _utils_const_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../utils/const.service */
      "KQOL");
      /* harmony import */


      var _booking_shop_house_booking_shop_house_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../booking-shop-house/booking-shop-house.page */
      "w97y");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function RepairServicePage_ion_col_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RepairServicePage_ion_col_15_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var object_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.moveShopHousePage(object_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", object_r1.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](object_r1.title);
        }
      }

      var RepairServicePage = /*#__PURE__*/function () {
        function RepairServicePage(modalController, camera, actionSheetController, loading, navCtrl, apiService, route) {
          _classCallCheck(this, RepairServicePage);

          this.modalController = modalController;
          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.loading = loading;
          this.navCtrl = navCtrl;
          this.apiService = apiService;
          this.route = route;
        }

        _createClass(RepairServicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data_shop_house = {};
            this.listDataMarket = [];
            this.listDataMarketSearch = [];
            var category_id = this.route.snapshot.paramMap.get('category');
            var category_name = this.route.snapshot.paramMap.get('category_name');
            this.category_id = category_id;
            this.category_name = category_name;
            this.isItemAvailable = false;
            this.search_value = "";
            this.currentPage = 1;
            this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_7__["ConstService"].NUMBER_RECORD_ON_PAGE;
            this.getDataUserShopByCategory(this.currentPage, this.numberRecordOnPage, '', null, true);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "getDataUserShopByCategory",
          value: function getDataUserShopByCategory(page, limit, search, event, isRefresh) {
            var self = this;

            if (isRefresh) {
              this.listDataMarket = [];
              this.listDataMarketSearch = [];
            }

            if (this.getShopProductSubscriber) {
              this.getShopProductSubscriber.unsubscribe();
            }

            this.loading.present();
            this.getShopProductSubscriber = this.apiService.getDataUserShopByCategory(page, 1000, this.category_id).subscribe(function (result) {
              var data_shop_product = result.requestShopProducts;
              data_shop_product.forEach(function (product) {
                var title = product.title;
                var text_note = product.promotionKM ? product.promotionKM : "";

                if (text_note != 'KM' && text_note != '') {
                  text_note = '-' + text_note;
                }

                var type_note = product.promotionKM == "KM" ? 2 : 1;
                var text_place = 'AMO';

                if (product.apartment) {
                  try {
                    text_place = product.apartment.title + ' - ' + product.apartment.campaign.title;
                  } catch (e) {}
                }

                var text_star_rate = product.stars;
                var text_tag = product.promotion ? product.promotion : "";
                var object = {
                  '_id': product._id,
                  'thumbnail': product.thumbnail ? product.thumbnail : '../../../assets/icon/reparing.svg',
                  'title': title,
                  'text_note': text_note,
                  'type_note': type_note,
                  'text_place': text_place,
                  'text_star_rate': text_star_rate,
                  'text_tag': text_tag,
                  'carServiceType': product.carServiceType
                };
                self.listDataMarketSearch.push(object);
                self.listDataMarket = [].concat(self.listDataMarketSearch);

                if (self.isItemAvailable) {
                  self.eventSearchData();
                }
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
            this.getDataUserShopByCategory(this.currentPage, this.numberRecordOnPage, '', event, false);
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
                this.goToPageBookingShopHouse();
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
                        component: _booking_shop_house_booking_shop_house_page__WEBPACK_IMPORTED_MODULE_8__["BookingShopHousePage"],
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

                  if (product.requestShopProduct.apartment) {
                    self.data_shop_house['text_place'] = product.requestShopProduct.apartment.title + ' - ' + product.requestShopProduct.apartment.campaign.title;
                  } else {
                    self.data_shop_house['text_place'] = "AMO";
                  }

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
        }, {
          key: "eventSearchData",
          value: function eventSearchData() {
            var self = this; // Reset items back to all of the items

            this.listDataMarket = [].concat(this.listDataMarketSearch); // set val to the value of the searchbar

            var val = this.convertTextVietnames(this.search_value); // if the value is an empty string don't filter the items

            if (val && val.trim() !== '') {
              this.isItemAvailable = true;
              this.listDataMarket = this.listDataMarket.filter(function (item) {
                var data = self.convertTextVietnames(item['title']);
                return data.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            } else {
              this.isItemAvailable = false;
            }
          }
        }, {
          key: "convertTextVietnames",
          value: function convertTextVietnames(str) {
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
            return str;
          }
        }]);

        return RepairServicePage;
      }();

      RepairServicePage.ɵfac = function RepairServicePage_Factory(t) {
        return new (t || RepairServicePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
      };

      RepairServicePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RepairServicePage,
        selectors: [["app-repair-service"]],
        decls: 18,
        vars: 11,
        consts: [[1, "ion-no-border"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back"], [1, "service-header-title"], [1, "service-header-sub-title"], [1, "screen-content"], [1, "list-view-custom"], ["debounce", "500", 3, "placeholder", "ngModel", "ionChange", "ngModelChange"], [1, "ion-grid-class"], [1, "margin-top-5"], ["class", "ion-col-class", "size", "6", 4, "ngFor", "ngForOf"], ["threshold", "50px", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], ["size", "6", 1, "ion-col-class"], [1, "div-button-1", 3, "click"], [1, "div-1"], [1, "class-image-button", 3, "src"], [1, "div-2", "margin-top-20"], [1, "text-button"]],
        template: function RepairServicePage_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-searchbar", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RepairServicePage_Template_ion_searchbar_ionChange_11_listener() {
              return ctx.eventSearchData();
            })("ngModelChange", function RepairServicePage_Template_ion_searchbar_ngModelChange_11_listener($event) {
              return ctx.search_value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-grid", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-row", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RepairServicePage_ion_col_15_Template, 7, 2, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-infinite-scroll", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInfinite", function RepairServicePage_Template_ion_infinite_scroll_ionInfinite_16_listener($event) {
              return ctx.loadData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-infinite-scroll-content", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "SEVICE_33.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "SEVICE_NEW.sub_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, "SEVICE_33.placeholder_textbox_1"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search_value);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listDataMarket);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.ion-color-primary[_ngcontent-%COMP%] {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: #FFC144 !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\nsuper-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #7a838c;\n  text-transform: unset;\n}\n\nsuper-tab-button.active[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.ion-list-class[_ngcontent-%COMP%] {\n  padding-left: 17px;\n  padding-right: 17px;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  display: inline-grid;\n  vertical-align: middle;\n  align-items: center;\n}\n\n.line-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #f4f5f5;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.line-bottom-10[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n  border-bottom: 10px solid #f4f5f5;\n}\n\n.margin-top-15[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  z-index: 999;\n  bottom: 0px;\n  width: 100%;\n  padding: 10px 0px;\n  display: flex;\n}\n\n.padding-top-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.padding-bottom-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.text-area-1[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  max-height: 110px;\n}\n\n.div-text-area-1[_ngcontent-%COMP%] {\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.button-section[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --box-shadow: unset;\n}\n\n.shadow-section[_ngcontent-%COMP%] {\n  box-shadow: 0px -20px 20px 0px rgba(37, 34, 77, 0.1);\n}\n\n.label-message-left[_ngcontent-%COMP%] {\n  text-overflow: unset;\n  white-space: pre-wrap;\n  overflow: unset;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.div-label-message-left[_ngcontent-%COMP%] {\n  background: #e9ebec;\n  border-radius: 2px 8px 8px 8px;\n  padding: 10px 10px;\n}\n\n.ion-item-message[_ngcontent-%COMP%] {\n  --border-width: 0;\n  margin-bottom: 20px;\n}\n\n.div-avatar[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 10px;\n}\n\n.div-avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n\n.div-label-message-right[_ngcontent-%COMP%] {\n  background: #21313f;\n  border-radius: 8px 2px 8px 8px;\n  padding: 10px 10px;\n}\n\n.label-message-right[_ngcontent-%COMP%] {\n  text-overflow: unset;\n  white-space: pre-wrap;\n  overflow: unset;\n  font-size: 16px;\n  line-height: 24px;\n  color: #ffffff;\n}\n\n.div-button-1[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 15px 8px;\n  margin: 5px 5px;\n}\n\n.div-button-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  margin-left: calc(50% - 60px);\n  left: 5px;\n  top: 0;\n  position: absolute;\n  width: 17px;\n  height: 100%;\n  contain: strict;\n}\n\nion-searchbar[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);\n  --border-radius: 8px;\n  -webkit-padding-start: 17px;\n  padding-inline-start: 17px;\n  -webkit-padding-end: 17px;\n  padding-inline-end: 17px;\n}\n\n.ion-grid-class[_ngcontent-%COMP%] {\n  -webkit-padding-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 9px));\n          padding-inline-start: var(--ion-grid-padding-xs, var(--ion-grid-padding, 9px));\n  -webkit-padding-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 9px));\n          padding-inline-end: var(--ion-grid-padding-xs, var(--ion-grid-padding, 9px));\n}\n\n.ion-no-border[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 100px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  left: 5px;\n}\n\n.service-header-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.service-header-sub-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  color: #ffffff;\n  margin-top: 10px;\n}\n\n.screen-content[_ngcontent-%COMP%] {\n  --background: #FFC144;\n}\n\n.list-view-custom[_ngcontent-%COMP%] {\n  min-height: 100%;\n  border-radius: 20px 20px 0 0;\n  background-color: #ffffff;\n  padding-top: 10px;\n}\n\n.div-1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto;\n}\n\n.div-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 40px;\n}\n\n.div-2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwYWlyLXNlcnZpY2UvcmVwYWlyLXNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLG9DQUFBO0VBQ0EsMkVBQUE7RUFDQSx3Q0FBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0FBSUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSx3QkFBQTtFQUNBLG9CQUFBO0FBR0o7O0FBQUE7RUFDSSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUlKOztBQUZBOzs7Ozs7Ozs7Ozs7RUFZSSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7QUFPSjs7QUFKQTtFQUNJLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSxvQkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBVUo7O0FBUkE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFUQTtFQUNJLG9EQUFBO0FBWUo7O0FBVkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBY0o7O0FBWkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBZUo7O0FBYkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFnQko7O0FBZEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQWlCSjs7QUFmQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFtQko7O0FBakJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7QUFtQko7O0FBakJBO0VBQ0ksY0FBQTtBQW9CSjs7QUFsQkE7RUFDSSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFxQko7O0FBbkJBO0VBQ0ksNERBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBc0JKOztBQXBCQTtFQUNJLCtFQUFBO1VBQUEsOEVBQUE7RUFDQSw2RUFBQTtVQUFBLDRFQUFBO0FBdUJKOztBQWxCQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBcUJKOztBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFxQko7O0FBbEJBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXFCSjs7QUFsQkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFxQko7O0FBbEJBO0VBQ0kscUJBQUE7QUFxQko7O0FBbEJBO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFxQko7O0FBbEJBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBcUJKOztBQW5CSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7QUFxQlI7O0FBbEJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBcUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVwYWlyLXNlcnZpY2UvcmVwYWlyLXNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pb24tY29sb3ItcHJpbWFyeSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogI0ZGQzE0NCAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMzMTcxZTApICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xyXG59XHJcbnN1cGVyLXRhYi1idXR0b24gaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjN2E4MzhjO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xyXG59XHJcbnN1cGVyLXRhYi1idXR0b24uYWN0aXZlIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmlvbi1oZWFkZXIge1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uaW9uLWxpc3QtY2xhc3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTdweDtcclxufVxyXG4ubWFyZ2luLXRvcC0yMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTEwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG4uY2VudGVyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5saW5lLWJvdHRvbSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4uY29sLTEsXHJcbi5jb2wtMixcclxuLmNvbC0zLFxyXG4uY29sLTQsXHJcbi5jb2wtNSxcclxuLmNvbC02LFxyXG4uY29sLTcsXHJcbi5jb2wtOCxcclxuLmNvbC05LFxyXG4uY29sLTEwLFxyXG4uY29sLTExLFxyXG4uY29sLTEyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmxpbmUtYm90dG9tLTEwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4ubWFyZ2luLXRvcC0xNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5mdW5jdGlvbi1zZWN0aW9uIHtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNGY1ZjU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucGFkZGluZy10b3AtMTAge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLnBhZGRpbmctYm90dG9tLTIwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi50ZXh0LWFyZWEtMSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMTBweDtcclxufVxyXG4uZGl2LXRleHQtYXJlYS0xIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4uYnV0dG9uLXNlY3Rpb24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OiAxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgICAtLWJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcbi5zaGFkb3ctc2VjdGlvbiB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTIwcHggMjBweCAwcHggcmdiYSgzNywgMzQsIDc3LCAwLjEpO1xyXG59XHJcbi5sYWJlbC1tZXNzYWdlLWxlZnQge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBvdmVyZmxvdzogdW5zZXQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG4uZGl2LWxhYmVsLW1lc3NhZ2UtbGVmdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllYmVjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDhweCA4cHggOHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi5pb24taXRlbS1tZXNzYWdlIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZGl2LWF2YXRhciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmRpdi1hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4uZGl2LWxhYmVsLW1lc3NhZ2UtcmlnaHQge1xyXG4gICAgYmFja2dyb3VuZDogIzIxMzEzZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAycHggOHB4IDhweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG4ubGFiZWwtbWVzc2FnZS1yaWdodCB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIG92ZXJmbG93OiB1bnNldDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmRpdi1idXR0b24tMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgcGFkZGluZzogMTVweCA4cHg7XHJcbiAgICBtYXJnaW46IDVweCA1cHg7XHJcbn1cclxuLmRpdi1idXR0b24tMSBpbWcge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gNjBweCk7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbnRhaW46IHN0cmljdDtcclxufVxyXG5pb24tc2VhcmNoYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjA3KTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAxN3B4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE3cHg7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAxN3B4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxN3B4O1xyXG59XHJcbi5pb24tZ3JpZC1jbGFzcyB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLWdyaWQtcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgOXB4KSk7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1ncmlkLXBhZGRpbmcteHMsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDlweCkpO1xyXG59XHJcblxyXG4vLyB1cGRhdGUgY3NzXHJcblxyXG4uaW9uLW5vLWJvcmRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjRweDtcclxuICAgIGxlZnQ6IDVweDtcclxufVxyXG5cclxuLnNlcnZpY2UtaGVhZGVyLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWhlYWRlci1zdWItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNjcmVlbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGQzE0NDtcclxufVxyXG5cclxuLmxpc3Qtdmlldy1jdXN0b20ge1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXYtMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgIH1cclxufVxyXG4uZGl2LTIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RepairServicePage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-repair-service',
            templateUrl: './repair-service.page.html',
            styleUrls: ['./repair-service.page.scss']
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
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-repair-service-repair-service-module-es5.js.map