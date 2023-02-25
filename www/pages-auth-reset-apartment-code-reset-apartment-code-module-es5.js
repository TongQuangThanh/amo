(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-reset-apartment-code-reset-apartment-code-module"], {
    /***/
    "/aUq":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/auth/reset-apartment-code/reset-apartment-code.page.ts ***!
      \******************************************************************************/

    /*! exports provided: ResetApartmentCodePage */

    /***/
    function aUq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetApartmentCodePage", function () {
        return ResetApartmentCodePage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function ResetApartmentCodePage_ion_col_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ResetApartmentCodePage_ion_col_13_Template_input_keyup_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var controlItem_r3 = ctx.$implicit;
            var i_r4 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onKeyUp($event, controlItem_r3, i_r4);
          })("keydown", function ResetApartmentCodePage_ion_col_13_Template_input_keydown_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.onKeyDown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var controlItem_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", controlItem_r3);
        }
      }

      function ResetApartmentCodePage_ion_label_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "APARTMENT_CODE_REGISTER.wrong_code"));
        }
      }

      function ResetApartmentCodePage_ion_spinner_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-spinner", 17);
        }
      }

      var ResetApartmentCodePage = /*#__PURE__*/function () {
        function ResetApartmentCodePage(apiService, loading, modalController) {
          _classCallCheck(this, ResetApartmentCodePage);

          this.apiService = apiService;
          this.loading = loading;
          this.modalController = modalController;
          this.color = "gray";
          this.isHidden = false;
          this.codeSize = 6;
          this.isChecking = false;
          this.isError = false;
          this.initiateBuilder();
        }

        _createClass(ResetApartmentCodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var stylebody = document.body.style;

            if (changes.color != undefined) {
              stylebody.setProperty('--borderColor', changes.color.currentValue);
            }

            if (changes.isHidden != undefined) {
              if (changes.isHidden.currentValue == false) {
                stylebody.setProperty('--charShape', 'none');
              } else {
                stylebody.setProperty('--charShape', 'disc');
              }
            }

            this.initiateBuilder();
          }
        }, {
          key: "initiateBuilder",
          value: function initiateBuilder() {
            this.pinCodeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});

            for (var i = 0; i < this.codeSize; i++) {
              var formController = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
                value: '',
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
              this.pinCodeFormGroup.addControl('codeFiled' + i, formController);
            }

            var v_pinCodeArray = [];
            Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
              v_pinCodeArray.push(key);
            });
            this.pinCodeArray = v_pinCodeArray;
            this.pinCodeFormGroup.get('codeFiled0').enable();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var input = document.querySelectorAll('.pinCodeInput').item(0);
            input.focus();
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp($event, item, index) {
            var _this = this;

            var v_index;
            var reg = new RegExp("[A-Za-z0-9]");

            if ($event.key == "Backspace") {
              if (index == 0) {
                v_index = 0;
              } else {
                v_index = index - 1;
                this.pinCodeFormGroup.get('codeFiled' + index).disable();
              }
            } else {
              if (reg.test($event.target.value)) {
                if (index == this.codeSize - 1) {
                  v_index = this.codeSize - 1;
                } else {
                  v_index = index + 1;
                  this.pinCodeFormGroup.get('codeFiled' + v_index).enable();
                }
              }
            }

            var input = document.querySelectorAll('.pinCodeInput').item(v_index);
            input.focus();

            if (index == this.codeSize - 1 && $event.key != "Backspace") {
              var pinCodeValue = '';
              Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
                pinCodeValue += _this.pinCodeFormGroup.value[key];
              });

              if (this.pinCodeFormGroup.valid) {
                this.checkingPincode(pinCodeValue);
              } else {}
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown($event) {
            if ($event.key != "Backspace") {
              if ($event.target.value.length == 1) {
                return false;
              }
            }
          }
        }, {
          key: "checkingPincode",
          value: function checkingPincode(pinCodeValue) {
            var _this2 = this;

            var self = this;
            this.isChecking = true;
            this.loading.present();
            this.apiService.addApartmentToUser(pinCodeValue.toUpperCase()).subscribe(function (result) {
              self.isError = false;
              self.loading.dismiss();
              self.finishPinCode();
            }, function (error) {
              _this2.isError = true;
              _this2.isChecking = false;
              self.loading.dismiss();
            });
          }
        }, {
          key: "finishPinCode",
          value: function finishPinCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      onClosedData = JSON.stringify({
                        result: "0",
                        message: "success"
                      });
                      _context.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var onClosedData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      onClosedData = JSON.stringify({
                        result: "1",
                        message: "cancel"
                      });
                      _context2.next = 3;
                      return this.modalController.dismiss(onClosedData);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ResetApartmentCodePage;
      }();

      ResetApartmentCodePage.ɵfac = function ResetApartmentCodePage_Factory(t) {
        return new (t || ResetApartmentCodePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]));
      };

      ResetApartmentCodePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ResetApartmentCodePage,
        selectors: [["app-reset-apartment-code"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 22,
        vars: 10,
        consts: [[1, "ion-no-border"], [1, "login-header"], ["color", "light", "text", "", "icon", "chevron-back"], [1, "login-title"], [1, "ion-padding"], ["lines", "none", 1, "padding-none", "margin-none"], [1, "pinCodeGrid"], [1, "", 3, "formGroup"], [4, "ngFor", "ngForOf"], ["lines", "none", 1, "margin-none"], ["class", "wrong-code", 4, "ngIf"], ["lines", "none", 1, "note-style"], [1, "ion-text-wrap", "label-text"], ["lines", "none", 1, "image-item"], ["name", "crescent", "class", "image-icon-check", 4, "ngIf"], ["ng-pattern", "/^[A-Za-z0-9]*$/", "ng-maxlength", "1", "maxlength", "1", "type", "text", 1, "pinCodeInput", 3, "formControlName", "keyup", "keydown"], [1, "wrong-code"], ["name", "crescent", 1, "image-icon-check"]],
        template: function ResetApartmentCodePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-grid", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ResetApartmentCodePage_ion_col_13_Template, 2, 1, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ResetApartmentCodePage_ion_label_15_Template, 3, 3, "ion-label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ResetApartmentCodePage_ion_spinner_21_Template, 1, 0, "ion-spinner", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "APARTMENT_CODE_REGISTER.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.pinCodeFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pinCodeArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isError == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 8, "APARTMENT_CODE_REGISTER.apartmentcode_note"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isChecking == true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSpinner"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: [".col[_ngcontent-%COMP%]:last-child {\n  width: 1% !important;\n}\n\n.pinCodeInput[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 0px 20px rgba(23, 21, 48, 0.102546);\n  border-radius: 8px;\n  min-width: 40px;\n  min-height: 40px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #c4c4c4;\n  font-size: 24px;\n  text-align: center;\n  -webkit-text-security: var(--charShape);\n  -moz-text-security: var(--charShape);\n}\n\n.pinCodeGrid[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n\n.pinCodeInput[disabled][_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e3e3e3;\n  background-color: transparent;\n}\n\n.image-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.image-icon-check[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  --color: #FFC144;\n}\n\n.label-item[_ngcontent-%COMP%] {\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.note-style[_ngcontent-%COMP%]   .label-text[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n}\n\n.btn-done[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 33px;\n  color: #556080;\n}\n\n.wrong-code[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 19px;\n  text-align: left;\n  color: #FFC144;\n}\n\n.margin-top-16[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  margin: 15px 0;\n  position: absolute;\n  left: 4.27%;\n  width: 91.46%;\n  bottom: 0;\n  padding: 0;\n  --box-shadow: none;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.pincode-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center !important;\n  align-content: center !important;\n  border: 1px solid #D3D6D9;\n  border-radius: 8px;\n  margin: 10px 5px;\n  text-align: center;\n  height: 44px;\n  text-transform: uppercase;\n}\n\nion-input.has-focus[_ngcontent-%COMP%] {\n  border: 1px solid #009AC9;\n}\n\nion-item.item-has-focus[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.button-qrcode[_ngcontent-%COMP%] {\n  --ion-toolbar-color: rgba(0, 154, 201, 0);\n  --background-activated: rgba(0, 154, 201, 0);\n  --background-focused: rgba(0, 154, 201, 0);\n  --background-hover: rgba(0, 154, 201, 0);\n}\n\n.button-qrcode.md[_ngcontent-%COMP%] {\n  --box-shadow: none !important;\n  padding: 0;\n}\n\n.icon-qrcode[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: #21313F;\n}\n\n.icon-qrcode.ios[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.login-header[_ngcontent-%COMP%] {\n  background: #FFC144;\n  color: #fff;\n  padding: 54px 15px 25px 15px;\n  border-radius: 0 0 20px 20px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  margin-bottom: 25px;\n}\n\n.login-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url(/assets/icon/login/login-header.svg);\n  background-repeat: no-repeat;\n  width: 200px;\n  height: 80px;\n  position: absolute;\n  top: 42px;\n  opacity: 0.5;\n  right: -80px;\n}\n\n.login-header[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9yZXNldC1hcGFydG1lbnQtY29kZS9yZXNldC1hcGFydG1lbnQtY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7QUFESjs7QUFLQTtFQUNJLGNBQUE7QUFGSjs7QUFNQTtFQUNHLGdDQUFBO0VBQ0EsNkJBQUE7QUFISDs7QUFNQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFLQTtFQUNJLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlDQUFBO0VBQ0EsNENBQUE7RUFDQSwwQ0FBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFESTtFQUNJLFdBQUE7RUFDQSwwREFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUFJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9yZXNldC1hcGFydG1lbnQtY29kZS9yZXNldC1hcGFydG1lbnQtY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sOmxhc3QtY2hpbGQge1xyXG4gICAgd2lkdGg6MSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBpbkNvZGVJbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMjMsIDIxLCA0OCwgMC4xMDI1NDYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgLy93aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10ZXh0LXNlY3VyaXR5OnZhcigtLWNoYXJTaGFwZSk7XHJcbiAgICAtbW96LXRleHQtc2VjdXJpdHk6IHZhcigtLWNoYXJTaGFwZSk7XHJcbn1cclxuXHJcblxyXG4ucGluQ29kZUdyaWR7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxufVxyXG5cclxuXHJcbi5waW5Db2RlSW5wdXRbZGlzYWJsZWRde1xyXG4gICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UzZTNlMztcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbWFnZS1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtaWNvbi1jaGVjayB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAtLWNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcbi5sYWJlbC1pdGVtIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWNsYXNzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ubm90ZS1zdHlsZSAubGFiZWwtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufVxyXG5cclxuLmJ0bi1kb25le1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICBjb2xvcjogIzU1NjA4MDtcclxufVxyXG5cclxuLndyb25nLWNvZGV7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjRkZDMTQ0O1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0xNntcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b257XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQuMjclO1xyXG4gICAgd2lkdGg6IDkxLjQ2JTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5waW5jb2RlLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEM0Q2RDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDEwcHggNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5pb24taW5wdXQuaGFzLWZvY3VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDlBQzk7XHJcbn1cclxuaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tcXJjb2RlIHtcclxuICAgIC0taW9uLXRvb2xiYXItY29sb3I6IHJnYmEoMCwgMTU0LCAyMDEsIDApOztcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMCwgMTU0LCAyMDEsIDApO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHJnYmEoMCwgMTU0LCAyMDEsIDApO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDAsIDE1NCwgMjAxLCAwKTsgXHJcbn1cclxuLmJ1dHRvbi1xcmNvZGUubWQge1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5pY29uLXFyY29kZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMjEzMTNGO1xyXG59XHJcbi5pY29uLXFyY29kZS5pb3Mge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1NHB4IDE1cHggMjVweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pY29uL2xvZ2luL2xvZ2luLWhlYWRlci5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0MnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICByaWdodDogLTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLXRpdGxlIHtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResetApartmentCodePage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-reset-apartment-code',
            templateUrl: './reset-apartment-code.page.html',
            styleUrls: ['./reset-apartment-code.page.scss']
          }]
        }], function () {
          return [{
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YyW4":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/auth/reset-apartment-code/reset-apartment-code.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ResetApartmentCodePageModule */

    /***/
    function YyW4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetApartmentCodePageModule", function () {
        return ResetApartmentCodePageModule;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _reset_apartment_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset-apartment-code-routing.module */
      "iuNV");
      /* harmony import */


      var _reset_apartment_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset-apartment-code.page */
      "/aUq");

      var ResetApartmentCodePageModule = function ResetApartmentCodePageModule() {
        _classCallCheck(this, ResetApartmentCodePageModule);
      };

      ResetApartmentCodePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ResetApartmentCodePageModule
      });
      ResetApartmentCodePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ResetApartmentCodePageModule_Factory(t) {
          return new (t || ResetApartmentCodePageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _reset_apartment_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetApartmentCodePageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetApartmentCodePageModule, {
          declarations: [_reset_apartment_code_page__WEBPACK_IMPORTED_MODULE_6__["ResetApartmentCodePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _reset_apartment_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetApartmentCodePageRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetApartmentCodePageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _reset_apartment_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetApartmentCodePageRoutingModule"]],
            declarations: [_reset_apartment_code_page__WEBPACK_IMPORTED_MODULE_6__["ResetApartmentCodePage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "iuNV":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/auth/reset-apartment-code/reset-apartment-code-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: ResetApartmentCodePageRoutingModule */

    /***/
    function iuNV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetApartmentCodePageRoutingModule", function () {
        return ResetApartmentCodePageRoutingModule;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _reset_apartment_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset-apartment-code.page */
      "/aUq");

      var routes = [{
        path: '',
        component: _reset_apartment_code_page__WEBPACK_IMPORTED_MODULE_6__["ResetApartmentCodePage"]
      }];

      var ResetApartmentCodePageRoutingModule = function ResetApartmentCodePageRoutingModule() {
        _classCallCheck(this, ResetApartmentCodePageRoutingModule);
      };

      ResetApartmentCodePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ResetApartmentCodePageRoutingModule
      });
      ResetApartmentCodePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ResetApartmentCodePageRoutingModule_Factory(t) {
          return new (t || ResetApartmentCodePageRoutingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResetApartmentCodePageRoutingModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetApartmentCodePageRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-auth-reset-apartment-code-reset-apartment-code-module-es5.js.map