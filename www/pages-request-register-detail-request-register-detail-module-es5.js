(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-register-detail-request-register-detail-module"], {
    /***/
    "8O0I":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/request-register-detail/request-register-detail.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: RequestRegisterDetailPageModule */

    /***/
    function O0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestRegisterDetailPageModule", function () {
        return RequestRegisterDetailPageModule;
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


      var _request_register_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./request-register-detail.page */
      "bLnj");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _request_register_detail_page__WEBPACK_IMPORTED_MODULE_5__["RequestRegisterDetailPage"]
      }];

      var RequestRegisterDetailPageModule = function RequestRegisterDetailPageModule() {
        _classCallCheck(this, RequestRegisterDetailPageModule);
      };

      RequestRegisterDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RequestRegisterDetailPageModule
      });
      RequestRegisterDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RequestRegisterDetailPageModule_Factory(t) {
          return new (t || RequestRegisterDetailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestRegisterDetailPageModule, {
          declarations: [_request_register_detail_page__WEBPACK_IMPORTED_MODULE_5__["RequestRegisterDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestRegisterDetailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_request_register_detail_page__WEBPACK_IMPORTED_MODULE_5__["RequestRegisterDetailPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bLnj":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/request-register-detail/request-register-detail.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: RequestRegisterDetailPage */

    /***/
    function bLnj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestRegisterDetailPage", function () {
        return RequestRegisterDetailPage;
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


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "KqBo");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["contentRequest"];
      var _c1 = ["content"];
      var _c2 = ["chat_input"];

      function RequestRegisterDetailPage_ion_col_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.listImage[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestRegisterDetailPage_ion_col_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.listImage[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestRegisterDetailPage_ion_col_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.listImage[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestRegisterDetailPage_ion_col_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r3.listImage[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestRegisterDetailPage_ion_col_14_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 31);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r9.listImage[2].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestRegisterDetailPage_ion_col_14_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 36);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r10.listImage[2].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestRegisterDetailPage_ion_col_14_ion_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r11.listImage.length - 3, "");
        }
      }

      function RequestRegisterDetailPage_ion_col_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RequestRegisterDetailPage_ion_col_14_img_3_Template, 1, 1, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RequestRegisterDetailPage_ion_col_14_img_4_Template, 1, 1, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RequestRegisterDetailPage_ion_col_14_ion_label_5_Template, 2, 1, "ion-label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r4.listImage[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.listImage.length == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.listImage.length > 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.listImage.length > 3);
        }
      }

      function RequestRegisterDetailPage_label_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST_DETAIL.read_more"));
        }
      }

      function RequestRegisterDetailPage_div_27_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 42);
        }

        if (rf & 2) {
          var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", msg_r12.createdBy.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestRegisterDetailPage_div_27_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r12.content);
        }
      }

      function RequestRegisterDetailPage_div_27_div_2_div_5_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 51);
        }

        if (rf & 2) {
          var attachments_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", attachments_r20.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestRegisterDetailPage_div_27_div_2_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestRegisterDetailPage_div_27_div_2_div_5_img_1_Template, 1, 1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", msg_r12.attachments);
        }
      }

      function RequestRegisterDetailPage_div_27_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RequestRegisterDetailPage_div_27_div_2_div_4_Template, 3, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RequestRegisterDetailPage_div_27_div_2_div_5_Template, 2, 1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r12.createdBy.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !msg_r12.attachments || msg_r12.attachments.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r12.attachments && msg_r12.attachments.length > 0);
        }
      }

      function RequestRegisterDetailPage_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestRegisterDetailPage_div_27_img_1_Template, 1, 1, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RequestRegisterDetailPage_div_27_div_2_Template, 6, 3, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r12 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("left", msg_r12.createdBy && msg_r12.createdBy._id !== ctx_r8.currentUser._id)("right", msg_r12.createdBy && msg_r12.createdBy._id === ctx_r8.currentUser._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r12.createdBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r12.createdBy);
        }
      }

      var RequestRegisterDetailPage = /*#__PURE__*/function () {
        function RequestRegisterDetailPage(camera, actionSheetController, translate, platform, loading, apiService, navCtrl, route) {
          var _this = this;

          _classCallCheck(this, RequestRegisterDetailPage);

          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.translate = translate;
          this.platform = platform;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.route = route;
          this.showEmojiPicker = false;
          this.listImage = [];

          this.blobToFile = function (theBlob, fileName) {
            var b = theBlob; //A Blob() is almost a File() - it's just missing the two properties below which we will add

            b.lastModifiedDate = new Date();
            b.name = fileName; //Cast to a File() type

            return theBlob;
          };

          var self = this;
          platform.ready().then(function (readySource) {
            self.widthListScreen = platform.width() * 0.8;
            self.heightScreen = platform.height() * 0.63;
            self.defineHeightScreen = _this.heightScreen;
          });
          _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].requestDetailComponentShare = this;
        }

        _createClass(RequestRegisterDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.list_image_select = [];
            this.requestTitle = "";
            this.requestContent = "";
            this.currentUser = JSON.parse(localStorage.getItem('profile'));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var requestID = this.route.snapshot.paramMap.get('id');
            this.getArticleDetail(requestID);
          }
        }, {
          key: "getArticleDetail",
          value: function getArticleDetail(requestID) {
            var _this2 = this;

            this.loading.present();
            var self = this;
            this.apiService.getRequestNewDetail(requestID).subscribe(function (result) {
              self.requestTitle = result.feedbacknew.title;
              self.requestContent = result.feedbacknew.content;
              self.createdAt = result.feedbacknew.createdAt;
              self.createBy = result.feedbacknew.createdBy != null ? result.feedbacknew.createdBy.displayName : "";
              self.feedbackID = result.feedbacknew._id;
              self.listImage = result.feedbacknew.attachments;

              if (self.listImage.length > 0) {
                _this2.heightScreen = self.defineHeightScreen - 100;
              }

              self.updateSizeContent();
              self.getListMessage(self.feedbackID);
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "getListMessage",
          value: function getListMessage(feedbackID) {
            var isRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var self = this;
            this.apiService.getListFeedbackNewReply(feedbackID).subscribe(function (result) {
              self.msgList = result.feedbacknewReplies.slice().reverse();
              self.scrollToBottom();

              if (isRefresh) {
                self.focus();
              }

              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "formatString",
          value: function formatString(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].formatString(stringDate);
          }
        }, {
          key: "formatStringFull",
          value: function formatStringFull(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].formatStringFull(stringDate);
          }
        }, {
          key: "backScreen",
          value: function backScreen(event) {
            this.navCtrl.back({
              animated: true,
              animationDirection: 'back'
            });
          }
        }, {
          key: "onFocus",
          value: function onFocus() {
            this.showEmojiPicker = false;
            this.content.resize();
            this.scrollToBottom();
          }
        }, {
          key: "switchEmojiPicker",
          value: function switchEmojiPicker() {
            this.showEmojiPicker = !this.showEmojiPicker;

            if (!this.showEmojiPicker) {
              this.focus();
            } else {
              this.setTextareaScroll();
            }

            this.content.resize();
            this.scrollToBottom();
          }
        }, {
          key: "updateSizeContent",
          value: function updateSizeContent() {
            var self = this;
            setTimeout(function () {
              self.heightScreen = self.messageInput.nativeElement.getBoundingClientRect().top - self.contentRequest.nativeElement.getBoundingClientRect().bottom - 2;
            }, 400);
          }
        }, {
          key: "sendMsg",
          value: function sendMsg() {
            var _this3 = this;

            if (!this.editorMsg.trim()) return;
            var self = this; // Mock message

            var id = Date.now().toString();
            var newMsg = {
              messageId: id,
              createdBy: {
                displayName: this.currentUser.displayName,
                _id: this.currentUser._id,
                avatar: this.currentUser.avatar == "" ? '../assets/icon/avatar-default.png' : this.currentUser.avatar
              },
              createdAt: new Date().toISOString(),
              content: this.editorMsg
            };
            this.pushNewMsg(newMsg);
            this.editorMsg = '';

            if (!this.showEmojiPicker) {
              this.focus();
            }

            var params = {
              content: newMsg.content
            };
            this.apiService.addFeedbackNewReply(self.feedbackID, params).subscribe(function (result) {
              var index = _this3.getMsgIndexById(id);

              if (index !== -1) {
                self.msgList[index].status = 'success';
              }
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "sendAttachmentImage",
          value: function sendAttachmentImage() {
            var _this4 = this;

            if (this.list_image_select.length == 0) return;
            var self = this; // // Mock message

            var id = Date.now().toString();
            var listAttachments = [];

            for (var i = 0; i < self.list_image_select.length; i++) {
              listAttachments.push(self.list_image_select[i].media);
            }

            var newMsg = {
              messageId: id,
              createdBy: {
                displayName: this.currentUser.displayName,
                _id: this.currentUser._id,
                avatar: this.currentUser.avatar == "" ? '../assets/icon/avatar-default.png' : this.currentUser.avatar
              },
              createdAt: new Date().toISOString(),
              content: " ",
              attachments: listAttachments
            };
            this.pushNewMsg(newMsg);
            this.editorMsg = '';

            if (!this.showEmojiPicker) {
              this.focus();
            }

            var params = {
              content: " ",
              attachments: listAttachments
            };
            this.apiService.addFeedbackNewReply(self.feedbackID, params).subscribe(function (result) {
              self.list_image_select = [];

              var index = _this4.getMsgIndexById(id);

              if (index !== -1) {
                self.msgList[index].status = 'success';
              }
            }, function (error) {
              self.loading.dismiss();
            });
          }
          /**
           * @name pushNewMsg
           * @param msg
           */

        }, {
          key: "pushNewMsg",
          value: function pushNewMsg(msg) {
            this.msgList.push(msg);
            this.scrollToBottom();
          }
        }, {
          key: "getMsgIndexById",
          value: function getMsgIndexById(id) {
            return this.msgList.findIndex(function (e) {
              return e.messageId === id;
            });
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            var self = this;
            setTimeout(function () {
              if (self.content.scrollToBottom) {
                self.content.scrollToBottom();
              }
            }, 400);
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.messageInput && this.messageInput.nativeElement) {
              this.messageInput.nativeElement.focus();
            }
          }
        }, {
          key: "setTextareaScroll",
          value: function setTextareaScroll() {
            var textarea = this.messageInput.nativeElement;
            textarea.scrollTop = textarea.scrollHeight;
          }
        }, {
          key: "trimString",
          value: function trimString(string, length) {
            return string.length > length ? string.substring(0, length) + "..." : string;
          } // select image

        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

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
                            _this5.checkPicturePermission(_this5.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: this.translate.instant('COMMON.form_select_image_camera'),
                          handler: function handler() {
                            _this5.checkPicturePermission(_this5.camera.PictureSourceType.CAMERA);
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
          key: "checkPicturePermission",
          value: function checkPicturePermission(sourceType) {
            this.pickImage(sourceType);
          }
        }, {
          key: "pickImage",
          value: function pickImage(sourceType) {
            var _this6 = this;

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

              var binaryBlob = _this6.convertBase64ToBlob(base64Define + imageData);

              var date = new Date().valueOf();
              var formData = new FormData();
              var fileName = "amoapp" + date + ".jpg";
              var myFile = self.blobToFile(binaryBlob, fileName);
              var payload = new FormData();
              payload.append('media', binaryBlob, fileName);

              _this6.apiService.uploadImage(payload).subscribe(function (result) {
                self.list_image_select = [];
                self.list_image_select.push(result);
                self.sendAttachmentImage();
              }, function (error) {});
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
        }]);

        return RequestRegisterDetailPage;
      }();

      RequestRegisterDetailPage.ɵfac = function RequestRegisterDetailPage_Factory(t) {
        return new (t || RequestRegisterDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      RequestRegisterDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RequestRegisterDetailPage,
        selectors: [["app-request-register-detail"]],
        viewQuery: function RequestRegisterDetailPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentRequest = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
          }
        },
        decls: 34,
        vars: 18,
        consts: [[1, "ion-no-border"], [1, "header-toolbar"], ["slot", "start"], ["text", "", "icon", "chevron-back"], [1, "card-content"], [1, "image-grid"], [1, "image-row"], ["class", "image-col", "size", "12", 4, "ngIf"], ["class", "image-col", "size", "6", 4, "ngIf"], ["class", "image-col", "size", "8", 4, "ngIf"], ["class", "image-col", "size", "4", 4, "ngIf"], [1, "box"], ["type", "checkbox", "id", "expanded"], [1, "text-content", 3, "innerHTML"], ["contentRequest", ""], ["for", "expanded", "role", "button", 4, "ngIf"], [1, "devider-line"], [1, "list-chat-content"], ["content", ""], [1, "chat-title"], [1, "message-wrap"], ["class", "message", 3, "left", "right", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "add-comment-item"], ["name", "image", "slot", "start", 1, "add-image-icon", 3, "click"], ["rows", "1", "auto-grow", "", 1, "input-area", 3, "placeholder", "ngModel", "ngModelChange"], ["name", "paper-plane", 1, "icon-send", "icon-send-default", 3, "click"], ["size", "12", 1, "image-col"], [1, "image-col-1", "image-col-left", 3, "src"], ["size", "6", 1, "image-col"], ["size", "8", 1, "image-col"], ["size", "4", 1, "image-col"], [1, "image-col-2", "image-col-right-top", 3, "src"], [1, "image-container"], ["class", "image-col-2 image-col-right-top", 3, "src", 4, "ngIf"], ["class", "image-col-2 image-col-right-bottom", 3, "src", 4, "ngIf"], ["class", "centered", 4, "ngIf"], [1, "image-col-2", "image-col-right-bottom", 3, "src"], [1, "centered"], ["for", "expanded", "role", "button"], [1, "message"], ["class", "user-img", "alt", "", 3, "src", 4, "ngIf"], ["class", "msg-detail", 4, "ngIf"], ["alt", "", 1, "user-img", 3, "src"], [1, "msg-detail"], [1, "msg-info"], ["class", "msg-content", 4, "ngIf"], ["class", "msg-content msg-images", 4, "ngIf"], [1, "msg-content"], [1, "line-breaker"], [1, "msg-content", "msg-images"], ["class", "", 3, "src", 4, "ngFor", "ngForOf"], [1, "", 3, "src"]],
        template: function RequestRegisterDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-grid", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RequestRegisterDetailPage_ion_col_10_Template, 2, 1, "ion-col", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RequestRegisterDetailPage_ion_col_11_Template, 2, 1, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RequestRegisterDetailPage_ion_col_12_Template, 2, 1, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RequestRegisterDetailPage_ion_col_13_Template, 2, 1, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RequestRegisterDetailPage_ion_col_14_Template, 6, 4, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card-content", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "p", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RequestRegisterDetailPage_label_19_Template, 3, 3, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-content", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RequestRegisterDetailPage_div_27_Template, 3, 6, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-icon", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestRegisterDetailPage_Template_ion_icon_click_30_listener() {
              return ctx.selectImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-textarea", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RequestRegisterDetailPage_Template_ion_textarea_ngModelChange_31_listener($event) {
              return ctx.editorMsg = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestRegisterDetailPage_Template_ion_icon_click_33_listener() {
              return ctx.sendMsg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.requestTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listImage.length == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listImage.length == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listImage.length == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listImage.length > 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listImage.length > 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.requestContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestContent.length > 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.heightScreen, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 14, "REQUEST_DETAIL.chat_title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.msgList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 16, "REQUEST_DETAIL.place_holder_input"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.editorMsg);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: [".card-content[_ngcontent-%COMP%] {\n  box-shadow: none;\n  margin: 0;\n}\n\n.text-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n}\n\nion-item.item-has-focus[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.add-comment-item[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-bottom: 10px;\n  margin-right: 6px;\n}\n\n.add-image-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #21313F;\n  margin-right: 18px;\n}\n\n.icon-send[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #D3D6D9;\n}\n\nion-item.item-has-value[_ngcontent-%COMP%]   .icon-send[_ngcontent-%COMP%] {\n  color: #009AC9;\n}\n\n.input-area[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n  background: #F4F5F5;\n  border-radius: 8px;\n  padding-left: 15px;\n  padding-right: 30px;\n  max-height: 110px;\n}\n\n.grid[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n\n.griditem[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.list-chat-content[_ngcontent-%COMP%] {\n  --overflow: auto;\n}\n\n.message-wrap[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7px 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 45px;\n  width: 24px;\n  height: 24px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313F;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 8px;\n  padding: 8px;\n  color: #fff;\n  width: auto;\n  max-width: 80%;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  background: #F4F5F5;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background: #F4F5F5;\n  float: left;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  padding-right: 34px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background-color: #21313F;\n  float: right;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #FFFFFF;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  background-color: #387ef5;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px;\n}\n\n.devider-line[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #F4F5F5;\n  width: 100%;\n}\n\n.chat-title[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px 16px 10px 16px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313F;\n}\n\n.msg-images[_ngcontent-%COMP%] {\n  background-color: unset !important;\n  padding: 0 !important;\n  border-radius: 0 !important;\n}\n\n.image-grid[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 16px;\n}\n\n.image-row[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.image-col[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 160px;\n  text-align: center;\n}\n\n.image-col-1[_ngcontent-%COMP%] {\n  height: 160px;\n  margin: 0 auto;\n}\n\n.image-col-2[_ngcontent-%COMP%] {\n  height: 80px;\n  margin: 0 auto;\n}\n\n.image-col-right-bottom[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313F;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 0;\n}\n\n.box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #009AC9;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%] {\n  outline: -webkit-focus-ring-color auto 5px;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + p[_ngcontent-%COMP%] {\n  -webkit-line-clamp: unset;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC1yZWdpc3Rlci1kZXRhaWwvcmVxdWVzdC1yZWdpc3Rlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLG9CQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBR0o7O0FBRkU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFLSjs7QUFKSTtFQUNFLFNBQUE7QUFPTjs7QUFOSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFTTjs7QUFSSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQVVOOztBQVRNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSx3QkFBQTtFQUNBLGtCQUFBO0FBWVI7O0FBWEk7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFjTjs7QUFiSTtFQUNFLGtCQUFBO0FBZ0JOOztBQWZJO0VBQ0UsT0FBQTtBQWtCTjs7QUFqQkk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBb0JOOztBQW5CTTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBc0JSOztBQXJCSTtFQUNFLG1CQUFBO0FBd0JOOztBQXZCTTtFQUNFLGlCQUFBO0FBMEJSOztBQXpCSTtFQUNFLFFBQUE7QUE0Qk47O0FBM0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQThCTjs7QUE3Qkk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZ0NOOztBQS9CTTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFrQ1I7O0FBaENBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQW1DRjs7QUFqQ0E7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBb0NGOztBQWpDQTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQW9DRjs7QUFqQ0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQW9DRjs7QUFsQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBcUNGOztBQW5DQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFzQ0Y7O0FBcENBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUF1Q0Y7O0FBckNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUF3Q0Y7O0FBL0JBO0VBRUUsWUFBQTtBQWlDRjs7QUEvQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBa0NGOztBQWhDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFtQ0Y7O0FBNUJFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUErQko7O0FBNUJFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQThCSjs7QUEzQkU7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBNkJKOztBQTFCRTtFQUNFLDBDQUFBO0FBNEJKOztBQXpCRTtFQUNFLHlCQUFBO0FBMkJKOztBQXhCRTtFQUNFLGFBQUE7QUEwQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0LXJlZ2lzdGVyLWRldGFpbC9yZXF1ZXN0LXJlZ2lzdGVyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250ZW50IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4udGV4dC1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzIxMzEzRjtcclxuICAvLyBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvLyAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLy8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgIFxyXG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLy8gY3VzdG9tIGFkZCBjb21tZW50XHJcbi5hZGQtY29tbWVudC1pdGVtIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuLmFkZC1pbWFnZS1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICMyMTMxM0Y7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG59XHJcbi5pY29uLXNlbmQge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiAjRDNENkQ5O1xyXG59XHJcbmlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIHtcclxuICAuaWNvbi1zZW5kIHtcclxuICAgIGNvbG9yOiAjMDA5QUM5O1xyXG4gIH1cclxufVxyXG4uaW5wdXQtYXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICMyMTMxM0Y7XHJcbiAgYmFja2dyb3VuZDogI0Y0RjVGNTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7ICAgXHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgbWF4LWhlaWdodDogMTEwcHg7XHJcbn1cclxuXHJcbi8vIGN1c3RvbSBpbWFnZSBncmlkXHJcbi5ncmlkIHtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG4uZ3JpZGl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gY3VzdG9tIGxpc3QgY2hhdFxyXG4ubGlzdC1jaGF0LWNvbnRlbnQge1xyXG4gIC0tb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCB7XHJcbiAgcGFkZGluZzogMCAxNnB4OyBcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogN3B4IDA7IH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC51c2VyLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7IH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHAge1xyXG4gICAgICBtYXJnaW46IDA7IH1cclxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHAge1xyXG4gICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzIxMzEzRjsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiA4MCU7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y0RjVGNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGNEY1RjU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XHJcbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDM0cHg7IH1cclxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAudXNlci1pbWcge1xyXG4gICAgICBsZWZ0OiAwOyB9XHJcbiAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcclxuICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzIxMzEzRjsgfVxyXG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xyXG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xyXG4gICAgICAgIGxlZnQ6IC01cHg7IH1cclxuICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzNHB4OyB9XHJcbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAudXNlci1pbWcge1xyXG4gICAgICByaWdodDogMDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCBpb24tc3Bpbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRvcDogNTBweDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzMTNGO1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAtNXB4OyBcclxufVxyXG4uZGV2aWRlci1saW5lIHtcclxuICBoZWlnaHQ6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjRjRGNUY1O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaGF0LXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDIwcHggMTZweCAxMHB4IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNGO1xyXG5cclxufVxyXG4ubXNnLWltYWdlcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIGN1c3RvbSBpbWFnZSBnYWxsZXJ5XHJcbi5pbWFnZS1ncmlkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcbi5pbWFnZS1yb3cge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbWFnZS1jb2wge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmltYWdlLWNvbC0xIHtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5pbWFnZS1jb2wtMiB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5pbWFnZS1jb2wtbGVmdCB7XHJcbiAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxufVxyXG4uaW1hZ2UtY29sLXJpZ2h0LXRvcCB7XHJcbiAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG4uaW1hZ2UtY29sLXJpZ2h0LWJvdHRvbSB7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxuICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyMTMxM0Y7XHJcbn1cclxuXHJcblxyXG4vL2N1c3RvbSBzaG93bW9yZSBwYXJhZ3JhcGhcclxuLmJveCB7XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwOUFDOTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzIH4gbGFiZWwge1xyXG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgcCB7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IHVuc2V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestRegisterDetailPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-request-register-detail',
            templateUrl: './request-register-detail.page.html',
            styleUrls: ['./request-register-detail.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, {
          contentRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contentRequest']
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['content']
          }],
          messageInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chat_input']
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-request-register-detail-request-register-detail-module-es5.js.map