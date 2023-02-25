(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-my-account-my-account-module~pages-popup-change-language-popup-change-language-module"], {
    /***/
    "nEMZ":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/popup-change-language/popup-change-language.page.ts ***!
      \***************************************************************************/

    /*! exports provided: PopupChangeLanguagePage */

    /***/
    function nEMZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupChangeLanguagePage", function () {
        return PopupChangeLanguagePage;
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


      var _translate_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../translate-config.service */
      "ZjVV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var PopupChangeLanguagePage = /*#__PURE__*/function () {
        function PopupChangeLanguagePage(translateConfigService, modalController) {
          _classCallCheck(this, PopupChangeLanguagePage);

          this.translateConfigService = translateConfigService;
          this.modalController = modalController;
          this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
        }

        _createClass(PopupChangeLanguagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }, {
          key: "languageChanged",
          value: function languageChanged(language) {
            this.selectedLanguage = language;
            this.translateConfigService.setLanguage(this.selectedLanguage);
            localStorage.setItem('lang', language);
            this.modalController.dismiss();
          }
        }]);

        return PopupChangeLanguagePage;
      }();

      PopupChangeLanguagePage.ɵfac = function PopupChangeLanguagePage_Factory(t) {
        return new (t || PopupChangeLanguagePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]));
      };

      PopupChangeLanguagePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopupChangeLanguagePage,
        selectors: [["app-popup-change-language"]],
        decls: 20,
        vars: 13,
        consts: [[1, "content-wrap"], [1, "content-container"], ["lines", "none", 1, "header-item", "ion-no-padding"], [1, "popup-title"], ["slot", "end", 1, "btn-close-popup", 3, "click"], ["name", "close"], ["lines", "none", 3, "ngClass", "click"], [1, "select-title"], ["slot", "end", 1, "btn-done"], ["name", "checkmark-circle", 3, "ngClass"]],
        template: function PopupChangeLanguagePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-buttons", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupChangeLanguagePage_Template_ion_buttons_click_6_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupChangeLanguagePage_Template_ion_item_click_8_listener() {
              return ctx.languageChanged("vi");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-title", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-buttons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-item", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupChangeLanguagePage_Template_ion_item_click_14_listener() {
              return ctx.languageChanged("en");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-title", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-buttons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ion-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "MY_ACCOUNT.language"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedLanguage == "vi" ? "select-item ion-no-padding btn-language-active" : "select-item ion-no-padding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "MY_ACCOUNT.vn"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedLanguage == "vi" ? "active" : "hide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedLanguage == "en" ? "select-item ion-no-padding btn-language-active" : "select-item ion-no-padding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, "MY_ACCOUNT.en"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selectedLanguage == "en" ? "active" : "hide");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["root[_ngcontent-%COMP%] {\n  --borderColor:gray;\n  --charShape:none;\n}\n\nion-buttons.md[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\nion-title.md[_ngcontent-%COMP%] {\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n\n.content-wrap[_ngcontent-%COMP%] {\n  --background: rgba(33,49,63,0);\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  background: #ffffff;\n  display: block;\n  justify-content: end;\n}\n\n.header-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  display: flex;\n  height: 60px;\n}\n\n.select-item[_ngcontent-%COMP%] {\n  display: flex;\n  height: 60px;\n}\n\n.popup-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: center;\n  color: #21313F;\n}\n\n.select-title[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #21313F;\n}\n\n.modal-item[_ngcontent-%COMP%] {\n  margin: 20px 18px 15px 18px;\n}\n\n.modal-toolbar[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-bottom: 20px;\n}\n\n.setting-item-label[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n  height: 54px;\n  margin-left: 30px;\n}\n\n.setting-item-forward[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  margin-right: 16px;\n}\n\n.btn-item[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --background-activated: #F4F5F5;\n  --background-focused: #F4F5F5;\n  --background-hover: #F4F5F5;\n}\n\n.btn-language[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n}\n\n.btn-language-active[_ngcontent-%COMP%] {\n  background: #F4F5F5;\n}\n\n.hide[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #FFC144;\n  font-size: 20px;\n}\n\n.btn-close[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9wdXAtY2hhbmdlLWxhbmd1YWdlL3BvcHVwLWNoYW5nZS1sYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtVQUFBLHFCQUFBO0FBR0o7O0FBREE7RUFDSSw4QkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUUo7O0FBTkE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLDJCQUFBO0FBVUo7O0FBUkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFZSjs7QUFWQTtFQUdJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQWVKOztBQWJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFnQko7O0FBZEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBaUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9wdXAtY2hhbmdlLWxhbmd1YWdlL3BvcHVwLWNoYW5nZS1sYW5ndWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJyb290e1xyXG4gICAgLS1ib3JkZXJDb2xvcjpncmF5O1xyXG4gICAgLS1jaGFyU2hhcGU6bm9uZTtcclxufVxyXG5pb24tYnV0dG9ucy5tZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5pb24tdGl0bGUubWQge1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xyXG59XHJcbi5jb250ZW50LXdyYXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDMzLDQ5LDYzLDApO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcbi5oZWFkZXItaXRlbSB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5zZWxlY3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5wb3B1cC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMjEzMTNGO1xyXG59XHJcbi5zZWxlY3QtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMjEzMTNGO1xyXG59XHJcbi5tb2RhbC1pdGVtIHtcclxuICAgIG1hcmdpbjogMjBweCAxOHB4IDE1cHggMThweDtcclxufVxyXG4ubW9kYWwtdG9vbGJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2V0dGluZy1pdGVtLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zZXR0aW5nLWl0ZW0tZm9yd2FyZCB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5idG4taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjRGNUY1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICNGNEY1RjU7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICNGNEY1RjU7XHJcbn1cclxuLmJ0bi1sYW5ndWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG4uYnRuLWxhbmd1YWdlLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNUY1O1xyXG59XHJcbi5oaWRlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJ0bi1jbG9zZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupChangeLanguagePage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-popup-change-language',
            templateUrl: './popup-change-language.page.html',
            styleUrls: ['./popup-change-language.page.scss']
          }]
        }], function () {
          return [{
            type: _translate_config_service__WEBPACK_IMPORTED_MODULE_2__["TranslateConfigService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-my-account-my-account-module~pages-popup-change-language-popup-change-language-module-es5.js.map