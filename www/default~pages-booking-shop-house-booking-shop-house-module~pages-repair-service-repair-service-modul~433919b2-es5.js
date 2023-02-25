(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-booking-shop-house-booking-shop-house-module~pages-repair-service-repair-service-modul~433919b2"], {
    /***/
    "w97y":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/booking-shop-house/booking-shop-house.page.ts ***!
      \*********************************************************************/

    /*! exports provided: BookingShopHousePage */

    /***/
    function w97y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookingShopHousePage", function () {
        return BookingShopHousePage;
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


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function BookingShopHousePage_ion_row_14_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 49);
        }
      }

      function BookingShopHousePage_ion_row_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-row", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-col", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingShopHousePage_ion_row_14_Template_img_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var object_r6 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.downNumberProduct(object_r6._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingShopHousePage_ion_row_14_Template_img_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var object_r6 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.upNumberProduct(object_r6._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookingShopHousePage_ion_row_14_div_14_Template, 1, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var object_r6 = ctx.$implicit;
          var isLast_r7 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", object_r6._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r6.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", object_r6.money_convert, "\u0111");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](object_r6.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r7);
        }
      }

      function BookingShopHousePage_label_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "SEVICE_05.apartment_placeHolder_1"));
        }
      }

      function BookingShopHousePage_ion_select_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-select-option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r12.apartment._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.apartment.title + " - " + item_r12.campaign.title);
        }
      }

      function BookingShopHousePage_label_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "PAYMENT_INFOR.payment_confirm_time_receive"));
        }
      }

      function BookingShopHousePage_img_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 52);
        }
      }

      function BookingShopHousePage_img_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 52);
        }
      }

      var BookingShopHousePage = /*#__PURE__*/function () {
        function BookingShopHousePage(modalController, loading, navCtrl, apiService) {
          _classCallCheck(this, BookingShopHousePage);

          this.modalController = modalController;
          this.loading = loading;
          this.navCtrl = navCtrl;
          this.apiService = apiService;
          this.dateNow = new Date().toJSON();
        }

        _createClass(BookingShopHousePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.listDepartmentByID = {};
            this.getListApartment(); // this.button_active = 0;

            this.check_class_button();
            this.form_apartment_id = "";
            this.form_apartment_class = "";
            this.form_start_time = "";
            this.form_start_time_class = "";
            this.form_end_time = "";
            this.form_end_time_class = "";
            this.form_note = "";
            this.list_product = [];
            this.orderInfor = [];
            this.paymentMode = 0;
            this.customerInfor = {
              appartment: '',
              timeDeliver: '',
              note: ''
            };
            var data = JSON.parse(localStorage.getItem('data-shop-house'));

            if (data.carServiceType && data.carServiceType == 'oneTurn') {
              this.is_change_number = false;
            } else {
              this.is_change_number = true;
            }

            this.data_shop_house = data;
            this.form_phone_number = "";
            this.form_phone_number_class = "";
            this.getListProduct();
            this.flag_show_hide_popup = false;
            this.total_money = "";
            this.getTotalMoney();
          }
        }, {
          key: "getListProduct",
          value: function getListProduct() {
            var self = this;
            this.list_product = [];
            self.shop_info = self.data_shop_house.shopInfo;
            console.warn(self.shop_info);
            self.data_shop_house.group_2.forEach(function (object) {
              object.data.forEach(function (product) {
                if (product.number > 0) {
                  var money = parseInt(product.money.replace(/\./g, "").replace(/đ/g, ""));
                  product['money_convert'] = self.convertFormatMoney(money);
                  self.list_product.push(product);
                }
              });
            });
          }
        }, {
          key: "check_class_button",
          value: function check_class_button() {
            if (this.button_active == 0) {
              this.button_1_class = "button-active";
              this.button_2_class = "button-unactive";
            } else if (this.button_active == 1) {
              this.button_2_class = "button-active";
              this.button_1_class = "button-unactive";
            } else {
              this.button_2_class = "button-unactive";
              this.button_1_class = "button-unactive";
            }
          }
        }, {
          key: "ionChangePulldownApartment",
          value: function ionChangePulldownApartment(event) {
            if (this.form_apartment_id != '') {
              this.form_apartment_class = 'has-input-value';
            } else {
              this.form_apartment_class = "";
            }

            this.checkStatusButtonSend();
          }
        }, {
          key: "downNumberProduct",
          value: function downNumberProduct(id) {
            var self = this;
            self.list_product.forEach(function (object) {
              if (object._id == id && object.number > 0) {
                object.number--;
              }
            });
            this.getTotalMoney();
          }
        }, {
          key: "upNumberProduct",
          value: function upNumberProduct(id) {
            var self = this;
            self.list_product.forEach(function (object) {
              if (object._id == id && object.number < 1000) {
                object.number++;
              }
            });
            this.getTotalMoney();
          }
        }, {
          key: "ionChangeStartTime",
          value: function ionChangeStartTime() {
            if (this.form_start_time != '') {
              this.form_start_time_class = 'has-input-value';
            } else {
              this.form_start_time_class = "";
            }

            this.checkStatusButtonSend(); // let date = new Date(this.form_start_time);
            // this.form_start_time_label = this.datePipe.transform(date,"dd/MM/yyyy HH:mm");
          }
        }, {
          key: "ionChangeEndTime",
          value: function ionChangeEndTime() {
            if (this.form_end_time != '') {
              this.form_end_time_class = 'has-input-value';
            } else {
              this.form_end_time_class = "";
            }

            this.checkStatusButtonSend(); // let date = new Date(this.form_end_time);
            // this.form_end_time_label = this.datePipe.transform(date,"dd/MM/yyyy HH:mm");
          }
        }, {
          key: "getListApartment",
          value: function getListApartment() {
            var _this = this;

            var self = this;
            this.loading.present();
            this.apiService.getListUserApartment().subscribe(function (result) {
              self.listDepartment = result.userApartments;
              self.listDepartment.forEach(function (data, index) {
                if (index == 0) {
                  _this.form_apartment_id = data.apartment._id;
                }

                self.listDepartmentByID[data.apartment._id] = data;
              });
              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "ionChangeTextBox1",
          value: function ionChangeTextBox1() {
            if (this.form_phone_number != '') {
              this.form_phone_number_class = 'has-input-value';
            } else {
              this.form_phone_number_class = '';
            }

            this.checkStatusButtonSend();
          }
        }, {
          key: "getTotalMoney",
          value: function getTotalMoney() {
            var self = this;
            this.total_money = "";
            var total = 0;
            self.list_product.forEach(function (object) {
              if (object.number > 0) {
                total = total + object.number * parseInt(object.money.replace(/\./g, "").replace(/đ/g, ""));
              }
            });

            if (total > 0) {
              this.total_money = this.convertFormatMoney(total) + 'đ';
            }
          }
        }, {
          key: "eventButton1",
          value: function eventButton1(value) {
            this.button_active = value;
            this.check_class_button();
          }
        }, {
          key: "eventButtonSend",
          value: function eventButtonSend() {
            var _this2 = this;

            var self = this;
            var dataApartment = self.listDepartmentByID[this.form_apartment_id];
            this.form_phone_number = dataApartment.apartment.owner.phone;
            this.loading.present();
            this.paymentMode = this.button_active; // let requestShopProduct = self.data_shop_house._id;

            this.orderInfor = [];
            self.list_product.forEach(function (object) {
              if (object.number > 0) {
                var money = parseInt(object.money.replace(/\./g, "").replace(/đ/g, ""));
                self.orderInfor.push({
                  shopProduct: object._id,
                  price: money,
                  number: object.number
                });
              }
            });
            var params = {
              orderInfor: this.orderInfor,
              timeDeliver: this.form_start_time,
              note: this.form_note,
              phone: this.form_phone_number,
              address: dataApartment.campaign.title + " ," + dataApartment.campaign.address,
              location: dataApartment.campaign.latlng,
              paymentMode: this.paymentMode.toString(),
              appartment: this.form_apartment_id,
              shopHouse: this.data_shop_house.shopInfo._id
            };
            this.apiService.requestionOrderProductV2(params).subscribe(function (result) {
              self.loading.dismiss();

              _this2.modalController.dismiss();

              _this2.navCtrl.navigateForward('order-service-success');
            }, function (error) {
              self.loading.dismiss();
            });
          } // eventButtonClosePopup() {
          //   this.flag_show_hide_popup = false;
          //   this.location.back();
          // }
          // async orderResultModal() {
          //   const modal = await this.modalController.create({
          //     component: PopupShopOrderResultPage,
          //   });
          //   return await modal.present();
          // }

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
          key: "checkStatusButtonSend",
          value: function checkStatusButtonSend() {
            if (this.form_apartment_id != "" && this.form_start_time != "" && this.total_money != "" && (this.button_active === 1 || this.button_active === 0)) {
              return "";
            } else {
              return "button-disable";
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.modalController.dismiss();
          }
        }]);

        return BookingShopHousePage;
      }();

      BookingShopHousePage.ɵfac = function BookingShopHousePage_Factory(t) {
        return new (t || BookingShopHousePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      BookingShopHousePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookingShopHousePage,
        selectors: [["app-booking-shop-house"]],
        decls: 68,
        vars: 55,
        consts: [[1, "payment-confirm-header"], [1, "back-button"], ["color", "#666666", "text", "", "icon", "chevron-back", 1, "ion-back-button", 3, "click"], [1, "header-title"], [1, "payment-confirm-content"], ["lines", "full", 1, "ion-no-margin", "ion-no-padding", "ion-list"], [1, "ion-grid-class", "ion-no-padding"], ["size", "12", 1, "ion-col-class"], [1, "shop-icon", 3, "src"], [1, "shop-name"], [3, "id", 4, "ngFor", "ngForOf"], [1, "devider-line-info-payment"], ["size", "5", 1, "col-total-title"], [1, "payment-confirm-total-title"], ["size", "7", 1, "col-total-money"], [1, "payment-confirm-total-money"], ["lines", "none", 1, "payment-more-info", "booking-padding-12"], [1, "payment-more-info-title"], ["lines", "none"], ["lines", "none", 1, "item-common", "booking-padding-12"], ["src", "../assets/icon/request/home.svg", 1, "icon-home"], ["src", "../assets/icon/svg/Down.svg", 1, "icon-pulldown-down"], ["class", "pulldown-1-placeholder", 4, "ngIf"], ["interface", "action-sheet", "name", "form_apartment_id", 1, "pulldown-apartment-select", 3, "placeholder", "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "margin-top-10", "booking-padding-12"], ["lines", "none", 1, "item-common"], ["src", "../assets/icon/request/time.svg", 1, "icon-home"], ["name", "form_start_time", "displayFormat", "DD/MM/YYYY HH:mm", "max", "2050", 1, "datetime-commom", 3, "placeholder", "ngModel", "min", "ngModelChange", "ionChange"], ["lines", "none", 1, "margin-top-10", "margin-bottom-30"], ["rows", "4", "cols", "20", 1, "text-area-1", 3, "placeholder", "ngModel", "ngModelChange"], [1, "full-width", "function-section"], ["lines", "none", 1, "item-common", "no-border", "margin-right-5", 3, "click"], ["src", "../assets/icon/svg/money-1.svg", 1, "image-button-payment"], [1, "button-1-text", "padding-right-10"], ["class", "button-1-icon", "src", "../assets/icon/svg/Fill.svg", 4, "ngIf"], ["lines", "none", 1, "item-common", "no-border", "margin-left-5", 3, "click"], ["src", "../assets/icon/svg/money-2.svg", 1, "image-button-payment"], ["expand", "block", 3, "click"], [3, "id"], [1, "title-product"], ["size", "12"], ["size", "7", 1, "col-data-money"], [1, "font-weight-bold", "white-space-normal"], ["size", "5", 1, "group-1-button-change-number"], ["src", "../assets/common/minus.svg", 1, "icon-button-3", 3, "click"], [1, "booking-product-number"], ["src", "../assets/common/plus.svg", 1, "icon-button-3", 3, "click"], ["class", "devider-line-confirm-item", 4, "ngIf"], [1, "devider-line-confirm-item"], [1, "pulldown-1-placeholder"], [3, "value"], ["src", "../assets/icon/svg/Fill.svg", 1, "button-1-icon"]],
        template: function BookingShopHousePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingShopHousePage_Template_ion_back_button_click_2_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-grid", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BookingShopHousePage_ion_row_14_Template, 15, 5, "ion-row", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-col", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-item", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BookingShopHousePage_label_32_Template, 3, 3, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingShopHousePage_Template_ion_select_ngModelChange_34_listener($event) {
              return ctx.form_apartment_id = $event;
            })("ionChange", function BookingShopHousePage_Template_ion_select_ionChange_34_listener($event) {
              return ctx.ionChangePulldownApartment($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BookingShopHousePage_ion_select_option_36_Template, 2, 2, "ion-select-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-item", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, BookingShopHousePage_label_41_Template, 3, 3, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-datetime", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingShopHousePage_Template_ion_datetime_ngModelChange_43_listener($event) {
              return ctx.form_start_time = $event;
            })("ionChange", function BookingShopHousePage_Template_ion_datetime_ionChange_43_listener() {
              return ctx.ionChangeStartTime();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-item", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-item", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-textarea", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingShopHousePage_Template_ion_textarea_ngModelChange_47_listener($event) {
              return ctx.form_note = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ion-footer", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ion-item", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingShopHousePage_Template_ion_item_click_51_listener() {
              return ctx.eventButton1(0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, BookingShopHousePage_img_57_Template, 1, 0, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ion-item", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingShopHousePage_Template_ion_item_click_58_listener() {
              return ctx.eventButton1(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, BookingShopHousePage_img_64_Template, 1, 0, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ion-button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingShopHousePage_Template_ion_button_click_65_listener() {
              return ctx.eventButtonSend();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 37, "PAYMENT_INFOR.payment_confirm_booking"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.shop_info.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.shop_info.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list_product);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 39, "PAYMENT_INFOR.payment_confirm_total"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total_money);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 41, "SEVICE_05.detail_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form_apartment_id != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_apartment_class, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 43, "SEVICE_05.apartment_placeHolder_2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form_apartment_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listDepartment);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form_start_time != "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("width-100 ", ctx.form_start_time_class, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 45, "SEVICE_05.datetime_placeHolder"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("min", ctx.dateNow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form_start_time);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 47, "SEVICE_05.note_placeHolder"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form_note);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.button_1_class);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 49, "SEVICE_05.payment_methods_transfer"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.button_active == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.button_2_class);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 51, "SEVICE_05.payment_methods_cash"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.button_active == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("amo-button-custom ", ctx.checkStatusButtonSend(), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 53, "PAYMENT_INFOR.payment_confirm_btn_send"), " ");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding: 10px 15px;\n  background: #ffffff;\n  box-shadow: 0px 1px 10px rgba(234, 122, 110, 0.25);\n  border-radius: 10px 10px 0px 0px;\n}\n\n.item-common[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #ffffff;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.item-apartment-pulldown[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  \n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.icon-home[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 17px;\n  position: absolute;\n}\n\n.icon-pulldown-down[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .pulldown-apartment-select[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.pulldown-apartment-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding-left: 50px;\n  background: #fbfbfb;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-right: 17px;\n  height: 100%;\n}\n\nion-select[_ngcontent-%COMP%]::part(icon) {\n  display: none;\n  opacity: 1;\n}\n\n.pulldown-1-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.5;\n  z-index: 999;\n  font-size: 12px;\n  margin-left: 50px;\n  top: 7px;\n  pointer-events: none;\n}\n\n.pulldown-1-placeholder-init[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.5;\n  z-index: 999;\n  margin-left: 50px;\n  pointer-events: none;\n}\n\n.pulldown-1-text-select[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  padding-top: 20px;\n  padding-bottom: 0px;\n  padding-right: 17px;\n  position: absolute;\n  z-index: 99;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.item-native[_ngcontent-%COMP%] {\n  background-color: #fbfbfb;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.text-area-1[_ngcontent-%COMP%] {\n  --padding-start: 17px !important;\n  background: #fbfbfb;\n  margin-top: 0px;\n}\n\n.margin-left-20[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.text-box-1[_ngcontent-%COMP%] {\n  --padding-start: 50px !important;\n  --padding-end: 20px !important;\n  background-color: #fbfbfb;\n  --padding-top: 15px;\n  --padding-bottom: 15px;\n}\n\nion-checkbox[_ngcontent-%COMP%] {\n  --border-width: 1px;\n}\n\n.icon-dollar[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 15px;\n  position: absolute;\n  opacity: 0.5;\n}\n\n.icon-dollar-active[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 15px;\n  position: absolute;\n}\n\n.label-1[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n  opacity: 0.5;\n}\n\n.label-1-active[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  right: 15px;\n}\n\n.pointer-events-all[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n\n.line-1[_ngcontent-%COMP%] {\n  border-top: 6px solid #f4f5f5;\n}\n\n.no-border[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.item-tip[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  \n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  margin-left: 20px;\n}\n\n.button-tip[_ngcontent-%COMP%] {\n  background-color: #fbfbfb !important;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-right: 15px;\n  padding: 10px;\n}\n\n.button-tip-active[_ngcontent-%COMP%] {\n  background-color: #009ac9 !important;\n  color: #ffffff;\n  border: 1px solid #d3d6d9;\n  border-radius: 8px;\n  margin-right: 15px;\n  padding: 10px;\n}\n\n.button-tip[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.button-tip-active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.group-button-tip[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  display: flex;\n}\n\n.checkbox-common[_ngcontent-%COMP%] {\n  --background-checked: #009ac9;\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  background-color: #00000005;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  pointer-events: none;\n  bottom: 0px;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 24px 24px 0px 0px;\n}\n\n.close[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem -1rem;\n}\n\n.popup-item-input[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #f4f5f5;\n}\n\n.modal-header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.div-header-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: 0px solid #dee2e6;\n}\n\n.popup-btn-ok[_ngcontent-%COMP%] {\n  background: #d9f0f7;\n  border-radius: 8px;\n  color: #009ac9;\n  width: 160px;\n  height: 44px;\n  margin: 0 auto;\n}\n\n.button-1-text[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  z-index: 99;\n}\n\n.button-1-icon[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n}\n\n.button-active[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  border: 1px solid #FFC144;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  position: absolute;\n}\n\n.button-unactive[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  position: absolute;\n}\n\n.margin-right-5[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.margin-left-5[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .datetime-commom[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.datetime-commom[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding-left: 50px;\n  background: #fbfbfb;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-right: 17px;\n  height: 100%;\n}\n\n.button-3-1[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n}\n\n.button-3-2[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  right: 0;\n}\n\n.group-1-label-1[_ngcontent-%COMP%] {\n  vertical-align: sub;\n}\n\n.margin-0[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.text-white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.group-1-label-1[_ngcontent-%COMP%] {\n  line-height: 32px;\n  font-weight: 400;\n}\n\n.button-3-1[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n}\n\n.button-3-2[_ngcontent-%COMP%] {\n  background: #fbfbfb;\n  mix-blend-mode: normal;\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  right: 0;\n}\n\n.margin-bottom-15[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.margin-top-15[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.margin-bottom-5[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.group-1-button-custom[_ngcontent-%COMP%] {\n  --background: #d4ebf3;\n  border-radius: 8px;\n  --background-activated: #d4ebf3;\n  width: 100%;\n  height: 100%;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #009ac9;\n}\n\n.font-weight-600[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.has-input-value[_ngcontent-%COMP%]   .text-box-1[_ngcontent-%COMP%] {\n  --padding-top: 25px;\n  --padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.font-weight-500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.group-2-col-1[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 18px;\n  color: #009ac9;\n  border: 1px solid #f4f5f5;\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 5px 7px;\n}\n\n.group-2-col-3[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.div-title-col-2[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.div-note-col-2[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 18px;\n  color: #009ac9;\n}\n\n.div-note-col-2[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n\n.margin-bottom-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.margin-top-25[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.col-group-2-image[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  --border-width: 0;\n}\n\n.image-button-payment[_ngcontent-%COMP%] {\n  z-index: 99;\n  margin-left: 10px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.padding-right-10[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.icon-dollar-active[_ngcontent-%COMP%] {\n  z-index: 999;\n  pointer-events: none;\n  margin-left: 17px;\n  position: absolute;\n}\n\n.shadow-section[_ngcontent-%COMP%] {\n  box-shadow: 0px -20px 20px 0px rgba(37, 34, 77, 0.1);\n}\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  background-color: #00000005;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  margin: 0px;\n  pointer-events: none;\n  bottom: 0px;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 24px 24px 0px 0px;\n}\n\n.close[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 1.5rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.5;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem -1rem;\n}\n\n.popup-ion-item[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: grid;\n}\n\n.popup-text-1[_ngcontent-%COMP%] {\n  white-space: unset;\n  padding: 20px 15px;\n  font-size: 16px;\n  white-space: pre-line !important;\n}\n\n.popup-text-2[_ngcontent-%COMP%] {\n  white-space: unset;\n  font-size: 14px;\n  color: #009ac9;\n}\n\n.amo-button-custom[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 40px;\n  margin-top: 8px;\n}\n\n.text-total-left[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.text-total-right[_ngcontent-%COMP%] {\n  text-align: end;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.button-disable[_ngcontent-%COMP%] {\n  --background: #d3d6d9 !important;\n  text-transform: none;\n  --background-activated: rgba(250, 114, 104, 0.5);\n  border-radius: 8px;\n  --border-radius: 8px;\n  padding: 0px;\n  pointer-events: none;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background-color: #ffffff;\n  height: 60px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 13px;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 10px;\n  display: block;\n  width: 25px;\n  color: #666666;\n}\n\n.payment-confirm-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  color: #221c1e;\n  margin-left: 45px;\n}\n\n.payment-card[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  position: absolute;\n  top: 90px;\n  left: 0;\n  right: 0;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  margin: 10px 15px;\n  z-index: 99;\n}\n\n.payment-card[_ngcontent-%COMP%]   .update-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  min-width: 70%;\n  margin-right: 0px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  color: #221c1e;\n  padding: 0 20px;\n  margin-bottom: 5px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-card-item[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  color: #ffffff;\n  border-radius: 0px 8px;\n  width: 90px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-paid[_ngcontent-%COMP%] {\n  background: #33a54c;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-unpaid[_ngcontent-%COMP%] {\n  background: #FFC144;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-pending[_ngcontent-%COMP%] {\n  background: #f2c94c;\n}\n\n.payment-card[_ngcontent-%COMP%]   .badge-outdate[_ngcontent-%COMP%] {\n  background: #e23a28;\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 42px;\n  left: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.payment-card[_ngcontent-%COMP%]   .devider-line-info-payment[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 42px;\n  right: -8px;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .money-title[_ngcontent-%COMP%] {\n  max-width: 55px;\n  margin-right: 0px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n  font-weight: 600;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .mone-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 20px;\n  color: #FFC144;\n  margin-right: 0px;\n}\n\n.payment-card[_ngcontent-%COMP%]   .payment-money-item[_ngcontent-%COMP%]   .btn-paid[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  --background: linear-gradient(180deg, #ffc144 0%, #ee9a1c 100%);\n  border-radius: 8px;\n  font-size: 14px;\n  color: #ffffff;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  --background: #ffffff;\n  --padding-end: 0;\n  --padding-start: 0;\n  --offset-top: 1px !important;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-grid-class[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  margin: 10px 15px 0 15px;\n  overflow: hidden;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-grid-class[_ngcontent-%COMP%]   .col-total-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-grid-class[_ngcontent-%COMP%]   .col-total-title[_ngcontent-%COMP%]   .payment-confirm-total-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #666666;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-grid-class[_ngcontent-%COMP%]   .col-total-money[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-grid-class[_ngcontent-%COMP%]   .col-total-money[_ngcontent-%COMP%]   .payment-confirm-total-money[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  color: #FFC144;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .confirm_detail_title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 16px;\n  color: #221c1e;\n  font-weight: 600;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .title-product[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #666666;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .confirm-bill-title[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 27px;\n  color: #221c1e;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .section-content-fee[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .icon-parking[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 5px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .amount-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #FFC144;\n  margin-right: 0px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .amount-number-total[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #221c1e;\n  text-align: right;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-item[_ngcontent-%COMP%]   .promotion-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n  text-align: right;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  font-weight: 600;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .icon-view-detail[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 20px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .item-fee-detail[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: height 0.09s all linear;\n  box-shadow: none;\n  --min-height: 30px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .fee-detail[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313f;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-due-date[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .section-due-date[_ngcontent-%COMP%]   .due-date[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: right;\n  color: #221c1e;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%] {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  margin-top: 30px;\n  text-align: center;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\n  margin-left: -15px;\n  width: 100vw;\n  border-radius: 10px;\n  padding-bottom: 10px;\n  \n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: normal;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .default-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  margin: 10px;\n  --min-height: 50px;\n  --padding-start: 10px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  font-size: 32px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  left: 40px;\n  right: 0;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-money[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 40px;\n  right: 0;\n  bottom: 3px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-money[_ngcontent-%COMP%]   .money-insufficient[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n  opacity: 0.4;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-toolbar-payment[_ngcontent-%COMP%]   .payment-funtion[_ngcontent-%COMP%]   .wallet-change[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  font-size: 14px;\n  line-height: 24px;\n  color: #FFC144;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .col-data-money[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  color: #FFC144;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .group-1-button-change-number[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  position: relative;\n  width: 110px;\n  height: 32px;\n  text-align: right;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .group-1-button-change-number[_ngcontent-%COMP%]   .icon-button-3[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .group-1-button-change-number[_ngcontent-%COMP%]   .booking-product-number[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #221c1e;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .payment-more-info[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .payment-more-info[_ngcontent-%COMP%]   .payment-more-info-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n  position: relative;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .payment-more-info[_ngcontent-%COMP%]   .payment-more-info-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 2px;\n  width: 30px;\n  background: #FFC144;\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n}\n\n.payment-confirm-content[_ngcontent-%COMP%]   .ion-list[_ngcontent-%COMP%] {\n  background: #ffffff;\n  margin-bottom: 110px;\n}\n\n.devider-line-confirm-item[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  width: 100%;\n}\n\n.devider-line-info-payment[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  position: relative;\n  margin-top: 10px;\n}\n\n.devider-line-info-payment[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -10px;\n  left: -25px;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.devider-line-info-payment[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -10px;\n  right: -25px;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.shop-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  margin: 10px 10px 10px 0;\n}\n\n.shop-name[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 19px;\n  color: #221c1e;\n}\n\n.booking-padding-12[_ngcontent-%COMP%] {\n  margin: 0 15px 0 15px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZy1zaG9wLWhvdXNlL2Jvb2tpbmctc2hvcC1ob3VzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsZ0NBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVFGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFTRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QUFVRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBVUY7O0FBUkE7RUFDRSxrQkFBQTtF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QUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUE0QkY7O0FBekJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTRCRjs7QUF6QkE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBNEJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va2luZy1zaG9wLWhvdXNlL2Jvb2tpbmctc2hvcC1ob3VzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mdW5jdGlvbi1zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgyMzQsIDEyMiwgMTEwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxufVxyXG4uaXRlbS1jb21tb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5pdGVtLWFwYXJ0bWVudC1wdWxsZG93biB7XHJcbiAgLyogQmFja2dyb3VuZGJveCAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAvKiBUZXh0L1BsYWNlaG9sZGVyICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmljb24taG9tZSB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uaWNvbi1wdWxsZG93bi1kb3duIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG59XHJcbi5oYXMtaW5wdXQtdmFsdWUgLnB1bGxkb3duLWFwYXJ0bWVudC1zZWxlY3Qge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5wdWxsZG93bi1hcGFydG1lbnQtc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTdweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5wdWxsZG93bi0xLXBsYWNlaG9sZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgdG9wOiA3cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5wdWxsZG93bi0xLXBsYWNlaG9sZGVyLWluaXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5wdWxsZG93bi0xLXRleHQtc2VsZWN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXJnaW4tdG9wLTIwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTEwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5tYXJnaW4tbGVmdC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLml0ZW0tbmF0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWFyZWEtMSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tbGVmdC0yMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnRleHQtYm94LTEge1xyXG4gIC0tcGFkZGluZy1zdGFydDogNTBweCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDIwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gIC0tcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5pb24tY2hlY2tib3gge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuLmljb24tZG9sbGFyIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uaWNvbi1kb2xsYXItYWN0aXZlIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5sYWJlbC0xIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4ubGFiZWwtMS1hY3RpdmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnBvaW50ZXItZXZlbnRzLWFsbCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxufVxyXG4ubGluZS0xIHtcclxuICBib3JkZXItdG9wOiA2cHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXI6IDBweDtcclxufVxyXG4uaXRlbS10aXAge1xyXG4gIC8qIEJhY2tncm91bmRib3ggKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgLyogVGV4dC9QbGFjZWhvbGRlciAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmJ1dHRvbi10aXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmIgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYnV0dG9uLXRpcC1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlhYzkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYnV0dG9uLXRpcCBsYWJlbCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmJ1dHRvbi10aXAtYWN0aXZlIGxhYmVsIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uZ3JvdXAtYnV0dG9uLXRpcCB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jaGVja2JveC1jb21tb24ge1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDA5YWM5O1xyXG59XHJcblxyXG4vLyBwb3B1cFxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwNTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvdHRvbTogMHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICB9XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAwcHggMHB4O1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogLTFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XHJcbn1cclxuLnBvcHVwLWl0ZW0taW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5tb2RhbC1ib2R5IHtcclxuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4ubW9kYWwtaGVhZGVyIGxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG59XHJcbi5kaXYtaGVhZGVyLXRpdGxlIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4ucG9wdXAtYnRuLW9rIHtcclxuICBiYWNrZ3JvdW5kOiAjZDlmMGY3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBjb2xvcjogIzAwOWFjOTtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uLTEtdGV4dCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuLmJ1dHRvbi0xLWljb24ge1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0b3A6IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYnV0dG9uLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZDMTQ0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmJ1dHRvbi11bmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLm1hcmdpbi1yaWdodC01IHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ubWFyZ2luLWxlZnQtNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uaGFzLWlucHV0LXZhbHVlIC5kYXRldGltZS1jb21tb20ge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5kYXRldGltZS1jb21tb20ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uYnV0dG9uLTMtMSB7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZDk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5idXR0b24tMy0yIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5ncm91cC0xLWxhYmVsLTEge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcbn1cclxuLm1hcmdpbi0wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZ3JvdXAtMS1sYWJlbC0xIHtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5idXR0b24tMy0xIHtcclxuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLmJ1dHRvbi0zLTIge1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLm1hcmdpbi1ib3R0b20tMTUge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLm1hcmdpbi10b3AtMTUge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLm1hcmdpbi1ib3R0b20tNSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5ncm91cC0xLWJ1dHRvbi1jdXN0b20ge1xyXG4gIC0tYmFja2dyb3VuZDogI2Q0ZWJmMztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2Q0ZWJmMztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG59XHJcbi5mb250LXdlaWdodC02MDAge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmhhcy1pbnB1dC12YWx1ZSAudGV4dC1ib3gtMSB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjVweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb250LXdlaWdodC01MDAge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ncm91cC0yLWNvbC0xIGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNGY1ZjU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogNXB4IDdweDtcclxufVxyXG4vLyAuZ3JvdXAtMi1jb2wtMiB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcbi5ncm91cC0yLWNvbC0zIGlvbi1sYWJlbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5kaXYtdGl0bGUtY29sLTIgaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZGl2LW5vdGUtY29sLTIgaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICMwMDlhYzk7XHJcbn1cclxuLmRpdi1ub3RlLWNvbC0yIHtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5tYXJnaW4tYm90dG9tLTMwIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5tYXJnaW4tdG9wLTI1IHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5jb2wtZ3JvdXAtMi1pbWFnZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuLmltYWdlLWJ1dHRvbi1wYXltZW50IHtcclxuICB6LWluZGV4OiA5OTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5wYWRkaW5nLXJpZ2h0LTEwIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5pY29uLWRvbGxhci1hY3RpdmUge1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMTdweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLnNoYWRvdy1zZWN0aW9uIHtcclxuICBib3gtc2hhZG93OiAwcHggLTIwcHggMjBweCAwcHggcmdiKDM3IDM0IDc3IC8gMTAlKTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwNTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvdHRvbTogMHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiB1bnNldDtcclxuICB9XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHggMjRweCAwcHggMHB4O1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogLTFyZW0gLTFyZW0gLTFyZW0gLTFyZW07XHJcbn1cclxuLnBvcHVwLWlvbi1pdGVtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbi5wb3B1cC10ZXh0LTEge1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wb3B1cC10ZXh0LTIge1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMwMDlhYzk7XHJcbn1cclxuLmFtby1idXR0b24tY3VzdG9tIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLnRleHQtdG90YWwtbGVmdCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnRleHQtdG90YWwtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYnV0dG9uLWRpc2FibGUge1xyXG4gIC0tYmFja2dyb3VuZDogI2QzZDZkOSAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMjUwLCAxMTQsIDEwNCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ucGF5bWVudC1jb25maXJtLWhlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICAuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIC8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gbGVmdDogMTVweDtcclxuICAgIC8vIHJpZ2h0OiAxNXB4O1xyXG4gICAgLy8gdG9wOiA0NnB4O1xyXG4gICAgLy8gZm9udC1zaXplOiAyOHB4O1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICAvLyBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gIH1cclxuICAvLyAuaGVhZGVyLXN1Yi10aXRsZSB7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICBoZWlnaHQ6IDIycHg7XHJcbiAgLy8gICBsZWZ0OiAxNXB4O1xyXG4gIC8vICAgcmlnaHQ6IDE1cHg7XHJcbiAgLy8gICB0b3A6IDg2cHg7XHJcbiAgLy8gICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIC8vICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIC8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8vICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gICBjb2xvcjogI2ZmZmZmZjtcclxuICAvLyB9XHJcbiAgLy8gJjphZnRlciB7XHJcbiAgLy8gICBjb250ZW50OiAnJztcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIGJvdHRvbTogMjVweDtcclxuICAvLyAgIGxlZnQ6IC0xcHg7XHJcbiAgLy8gICByaWdodDogLTFweDtcclxuICAvLyAgIGJveC1zaGFkb3c6IDAgMzBweCAwIDAgcmdiYSgyNDksIDI1MiwgMjU1LCAxKTtcclxuICAvLyAgIGhlaWdodDogMjBweDtcclxuICAvLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAvLyB9XHJcbn1cclxuLnBheW1lbnQtY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDEwcHggMTVweDtcclxuICB6LWluZGV4OiA5OTtcclxuXHJcbiAgLnVwZGF0ZS10aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBtaW4td2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAucGF5bWVudC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLnBheW1lbnQtY2FyZC1pdGVtIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgLmJhZGdlLXN0YXR1cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggOHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmJhZGdlLXBhaWQge1xyXG4gICAgYmFja2dyb3VuZDogIzMzYTU0YztcclxuICB9XHJcbiAgLmJhZGdlLXVucGFpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gIH1cclxuICAuYmFkZ2UtcGVuZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJjOTRjO1xyXG4gIH1cclxuICAuYmFkZ2Utb3V0ZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTIzYTI4O1xyXG4gIH1cclxuICAuZGV2aWRlci1saW5lLWluZm8tcGF5bWVudCB7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA0MnB4O1xyXG4gICAgICBsZWZ0OiAtOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDQycHg7XHJcbiAgICAgIHJpZ2h0OiAtOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAucGF5bWVudC1tb25leS1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIC5tb25leS10aXRsZSB7XHJcbiAgICAgIG1heC13aWR0aDogNTVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLm1vbmUtbnVtYmVyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5idG4tcGFpZCB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmMxNDQgMCUsICNlZTlhMWMgMTAwJSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnBheW1lbnQtY29uZmlybS1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLW9mZnNldC10b3A6IDFweCAhaW1wb3J0YW50O1xyXG5cclxuICAuaW9uLWdyaWQtY2xhc3Mge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAxNXB4IDAgMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLmNvbC10b3RhbC10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5wYXltZW50LWNvbmZpcm0tdG90YWwtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sLXRvdGFsLW1vbmV5IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAucGF5bWVudC1jb25maXJtLXRvdGFsLW1vbmV5IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbmZpcm1fZGV0YWlsX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMjFjMWU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAudGl0bGUtcHJvZHVjdCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICB9XHJcbiAgLnNlY3Rpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5jb25maXJtLWJpbGwtdGl0bGUge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tY29udGVudC1mZWUge1xyXG4gICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIH1cclxuICAgIC5mZWUtaXRlbSB7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgLmljb24tcGFya2luZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5hbW91bnQtbnVtYmVyIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmFtb3VudC1udW1iZXItdG90YWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICAucHJvbW90aW9uLXZhbHVlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZlZS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjMjEzMTNmO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLmljb24tdmlldy1kZXRhaWwge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tZmVlLWRldGFpbCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjA5cyBhbGwgbGluZWFyO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZmVlLWRldGFpbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjMjEzMTNmO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VjdGlvbi1kdWUtZGF0ZSB7XHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgfVxyXG4gICAgLmR1ZS1kYXRlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlvbi10b29sYmFyLXBheW1lbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYigwIDAgMCAvIDIwJSk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAvKiBGT1JNICovXHJcblxyXG4gICAgLmJ0bi1kZWZhdWx0IHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5kZWZhdWx0LWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnBheW1lbnQtZnVudGlvbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuXHJcbiAgICAgIC53YWxsZXQtaWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC53YWxsZXQtdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgfVxyXG4gICAgICAud2FsbGV0LW1vbmV5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDNweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgLm1vbmV5LWluc3VmZmljaWVudCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAud2FsbGV0LWNoYW5nZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogI0ZGQzE0NDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbC1kYXRhLW1vbmV5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgfVxyXG4gIC5ncm91cC0xLWJ1dHRvbi1jaGFuZ2UtbnVtYmVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAuaWNvbi1idXR0b24tMyB7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB9XHJcbiAgICAuYm9va2luZy1wcm9kdWN0LW51bWJlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgfVxyXG4gIH1cclxuICAucGF5bWVudC1tb3JlLWluZm8ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgLnBheW1lbnQtbW9yZS1pbmZvLXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTNweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pb24tbGlzdCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjUyLCAyNTUsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDExMHB4O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXZpZGVyLWxpbmUtY29uZmlybS1pdGVtIHtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGV2aWRlci1saW5lLWluZm8tcGF5bWVudCB7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNlOWU5ZTk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIGxlZnQ6IC0yNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgfVxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIHJpZ2h0OiAtMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gVVBEQVRFIFZJRVcgQ1NTXHJcbi5zaG9wLWljb24ge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xyXG59XHJcblxyXG4uc2hvcC1uYW1lIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbn1cclxuXHJcbi5ib29raW5nLXBhZGRpbmctMTIge1xyXG4gIG1hcmdpbjogMCAxNXB4IDAgMTVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingShopHousePage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-booking-shop-house',
            templateUrl: './booking-shop-house.page.html',
            styleUrls: ['./booking-shop-house.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-booking-shop-house-booking-shop-house-module~pages-repair-service-repair-service-modul~433919b2-es5.js.map