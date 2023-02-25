(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-comment-notification-comment-module"], {
    /***/
    "0dbA":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/notification-comment/notification-comment.module.ts ***!
      \***************************************************************************/

    /*! exports provided: NotificationCommentPageModule */

    /***/
    function dbA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationCommentPageModule", function () {
        return NotificationCommentPageModule;
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


      var _notification_comment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notification-comment.page */
      "pk1a");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _notification_comment_page__WEBPACK_IMPORTED_MODULE_5__["NotificationCommentPage"]
      }];

      var NotificationCommentPageModule = function NotificationCommentPageModule() {
        _classCallCheck(this, NotificationCommentPageModule);
      };

      NotificationCommentPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NotificationCommentPageModule
      });
      NotificationCommentPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NotificationCommentPageModule_Factory(t) {
          return new (t || NotificationCommentPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationCommentPageModule, {
          declarations: [_notification_comment_page__WEBPACK_IMPORTED_MODULE_5__["NotificationCommentPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationCommentPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_notification_comment_page__WEBPACK_IMPORTED_MODULE_5__["NotificationCommentPage"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "pk1a":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/notification-comment/notification-comment.page.ts ***!
      \*************************************************************************/

    /*! exports provided: NotificationCommentPage */

    /***/
    function pk1a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationCommentPage", function () {
        return NotificationCommentPage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _utils_const_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../utils/const.service */
      "KQOL");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/alert/alert.service */
      "kyzu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["chat_input"];

      function NotificationCommentPage_div_19_div_1_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r2.createdBy.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NotificationCommentPage_div_19_div_1_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
        }
      }

      function NotificationCommentPage_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationCommentPage_div_19_div_1_img_1_Template, 1, 1, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationCommentPage_div_19_div_1_img_2_Template, 1, 0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.createdBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.createdBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.createdBy.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.formatString(item_r2.createdAt));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.convertText(item_r2.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function NotificationCommentPage_div_19_div_2_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
        }

        if (rf & 2) {
          var itemRep_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", itemRep_r9.createdBy.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function NotificationCommentPage_div_19_div_2_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
        }
      }

      function NotificationCommentPage_div_19_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationCommentPage_div_19_div_2_img_1_Template, 1, 1, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationCommentPage_div_19_div_2_img_2_Template, 1, 0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemRep_r9 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemRep_r9.createdBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !itemRep_r9.createdBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemRep_r9.createdBy.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.formatString(itemRep_r9.createdAt));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.convertText(itemRep_r9.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function NotificationCommentPage_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationCommentPage_div_19_div_1_Template, 12, 5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationCommentPage_div_19_div_2_Template, 12, 5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.status == "approve" || item_r2.createdBy.phone == ctx_r1.profile.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.replies.reverse());
        }
      }

      var NotificationCommentPage = /*#__PURE__*/function () {
        function NotificationCommentPage(translate, alertService, apiService, loading, route, platform, authService) {
          var _this = this;

          _classCallCheck(this, NotificationCommentPage);

          this.translate = translate;
          this.alertService = alertService;
          this.apiService = apiService;
          this.loading = loading;
          this.route = route;
          this.platform = platform;
          this.authService = authService;
          this.profile = this.authService.getProfile();
          this.listArticlesComment = [];
          this.apartment = "";
          platform.ready().then(function (readySource) {
            _this.heightScreen = platform.height() - 70 - 60;
          });
          this.articleID = this.route.snapshot.paramMap.get('id');
          this.currentPage = 1;
          this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_3__["ConstService"].NUMBER_RECORD_ON_PAGE;
        }

        _createClass(NotificationCommentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDefaulUserDeparment();
          }
        }, {
          key: "getDefaulUserDeparment",
          value: function getDefaulUserDeparment() {
            this.loading.present();
            var self = this;
            this.apiService.getListUserApartment().subscribe(function (result) {
              if (result.userApartments.length > 0) {
                self.apartment = result.userApartments[0]._id;
              }

              self.loading.dismiss();
              self.getArticleComment(self.currentPage, self.numberRecordOnPage, self.articleID, '', null);
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "getArticleComment",
          value: function getArticleComment(page, limit, articleID, search, event) {
            this.loading.present();
            var self = this;
            this.apiService.getListArticleComment(page, limit, articleID, search).subscribe(function (result) {
              if (result.comments.length > 0) {
                if (self.currentPage <= 1) {
                  self.listArticlesComment = result.comments;
                } else {
                  self.listArticlesComment = self.listArticlesComment.concat(result.comments);
                }
              }

              if (event) {
                event.target.complete();
              }

              self.loading.dismiss();
              self.inputField.nativeElement.focus();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "formatString",
          value: function formatString(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"].formatString(stringDate);
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.currentPage = 1;
            this.numberRecordOnPage = _utils_const_service__WEBPACK_IMPORTED_MODULE_3__["ConstService"].NUMBER_RECORD_ON_PAGE;
            this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            this.currentPage++;
            this.getArticleComment(this.currentPage, this.numberRecordOnPage, this.articleID, '', event);
          }
        }, {
          key: "convertText",
          value: function convertText(textInput) {
            return textInput.replace(/\n/ig, '<br/>');
            ;
          }
        }, {
          key: "sendMsg",
          value: function sendMsg() {
            if (this.apartment == "") {
              this.alertService.presentToast(this.translate.instant('NOTIFICATION_COMMENT.msg_apartment_not_correct'));
            }

            this.loading.present();
            var self = this;
            var params = {
              content: this.editorMsg,
              apartment: this.apartment
            };
            this.apiService.sendArticleComment(params, this.articleID).subscribe(function (result) {
              self.loading.dismiss();
              self.editorMsg = "";
              self.doRefresh(null);
            }, function (error) {
              self.editorMsg = "";
              self.loading.dismiss();
            });
          }
        }]);

        return NotificationCommentPage;
      }();

      NotificationCommentPage.ɵfac = function NotificationCommentPage_Factory(t) {
        return new (t || NotificationCommentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]));
      };

      NotificationCommentPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationCommentPage,
        selectors: [["app-notification-comment"]],
        viewQuery: function NotificationCommentPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputField = _t.first);
          }
        },
        decls: 22,
        vars: 10,
        consts: [[1, "ion-no-border"], ["slot", "start"], ["text", ""], [1, "input-wrap"], [3, "placeholder", "ngModel", "ngModelChange"], ["chat_input", ""], ["item-right", "", 1, "button-send", 3, "click"], ["name", "ios-send", "ios", "ios-send", "md", "md-send"], [1, "list-home-content"], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "circles", "refreshingSpinner", "", "refreshingText", ""], [1, "list-chat-content"], [1, "message-wrap"], [4, "ngFor", "ngForOf"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "", "loadingText", ""], ["class", "message left", 4, "ngIf"], ["class", "message right", 4, "ngFor", "ngForOf"], [1, "message", "left"], ["class", "user-img", 3, "src", 4, "ngIf"], ["class", "user-img", "src", "../assets/icon/avatar-default.png", 4, "ngIf"], [1, "msg-detail"], [1, "msg-info"], [1, "msg-content"], [1, "triangle"], [3, "innerHTML"], [1, "user-img", 3, "src"], ["src", "../assets/icon/avatar-default.png", 1, "user-img"], [1, "message", "right"]],
        template: function NotificationCommentPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-textarea", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NotificationCommentPage_Template_ion_textarea_ngModelChange_9_listener($event) {
              return ctx.editorMsg = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationCommentPage_Template_ion_button_click_12_listener() {
              return ctx.sendMsg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ion-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-refresher", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionRefresh", function NotificationCommentPage_Template_ion_refresher_ionRefresh_15_listener($event) {
              return ctx.doRefresh($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-refresher-content", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-list", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NotificationCommentPage_div_19_Template, 3, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-infinite-scroll", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionInfinite", function NotificationCommentPage_Template_ion_infinite_scroll_ionInfinite_20_listener($event) {
              return ctx.loadData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-infinite-scroll-content", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "NOTIFICATION_COMMENT.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "NOTIFICATION_COMMENT.place_holder_input"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.editorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.heightScreen, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listArticlesComment.reverse());
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScrollContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: [".input-wrap[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-bottom: 14px;\n  display: flex;\n  position: absolute;\n  z-index: 9999;\n  bottom: 0px;\n  width: 100%;\n  background: white;\n}\n\n.input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px #c4c4c4;\n  border-style: solid;\n  border-radius: 4px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.list-home-content[_ngcontent-%COMP%] {\n  --offset-top: -16px !important;\n  --overflow: auto;\n}\n\nion-textarea[_ngcontent-%COMP%] {\n  border: 1px solid #c3c3c3;\n  height: 40px;\n  border-radius: 4px 0px 0px 4px;\n}\n\n.button-send[_ngcontent-%COMP%] {\n  --border-radius: 0px 4px 4px 0px;\n  padding: 0;\n  margin: 0;\n  height: 40px;\n}\n\n.message-wrap[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7px 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 45px;\n  width: 45px;\n  height: 45px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #888;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 5px;\n  padding: 8px;\n  border: 1px solid #ddd;\n  color: #fff;\n  width: auto;\n  max-width: 80%;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background-color: #fff;\n  float: left;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  color: #343434;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  padding-right: 60px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background-color: #387ef5;\n  float: right;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  background-color: #387ef5;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px;\n}\n\n.msg-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uLWNvbW1lbnQvbm90aWZpY2F0aW9uLWNvbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLE9BQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNBO0VBQ0ksZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUhJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUFNTjs7QUFMSTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQVFOOztBQVBNO0VBQ0UsU0FBQTtBQVVSOztBQVRNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBWVI7O0FBWE07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWNSOztBQWJRO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSx3QkFBQTtFQUNBLGtCQUFBO0FBZ0JWOztBQWZNO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FBa0JSOztBQWpCTTtFQUNFLGtCQUFBO0FBb0JSOztBQW5CTTtFQUNFLE9BQUE7QUFzQlI7O0FBckJNO0VBQ0UsY0FBQTtBQXdCUjs7QUF2QlE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQTBCVjs7QUF6Qk07RUFDRSxtQkFBQTtBQTRCUjs7QUEzQlE7RUFDRSxpQkFBQTtBQThCVjs7QUE3Qk07RUFDRSxRQUFBO0FBZ0NSOztBQS9CTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFrQ1I7O0FBakNNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBb0NSOztBQW5DUTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFzQ1Y7O0FBbkNBO0VBQ0ksU0FBQTtBQXNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi1jb21tZW50L25vdGlmaWNhdGlvbi1jb21tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC13cmFwIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5pbnB1dC13cmFwIHRleHRhcmVhIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBib3JkZXI6IDFweCAjYzRjNGM0O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGlzdC1ob21lLWNvbnRlbnQge1xyXG4gICAgLS1vZmZzZXQtdG9wOiAtMTZweCAhaW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcclxufVxyXG5cclxuLmJ1dHRvbi1zZW5ke1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHggNHB4IDRweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5tZXNzYWdlLXdyYXAge1xyXG4gICAgcGFkZGluZzogMCAxMHB4OyBcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMDsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAudXNlci1pbWcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbiAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjM2KTsgfVxyXG4gICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCBwIHtcclxuICAgICAgICBtYXJnaW46IDA7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWluZm8gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgIGNvbG9yOiAjODg4OyB9XHJcbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTsgfVxyXG4gICAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHNwYW4udHJpYW5nbGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBmbG9hdDogbGVmdDsgfVxyXG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjBweDsgfVxyXG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLnVzZXItaW1nIHtcclxuICAgICAgICBsZWZ0OiAwOyB9XHJcbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gICAgICAgIGNvbG9yOiAjMzQzNDM0OyB9XHJcbiAgICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcclxuICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAtNXB4OyB9XHJcbiAgICAgIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7IH1cclxuICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctaW5mbyB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxyXG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC51c2VyLWltZyB7XHJcbiAgICAgICAgcmlnaHQ6IDA7IH1cclxuICAgICAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCBpb24tc3Bpbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHRvcDogNTBweDsgfVxyXG4gICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cclxuICAgICAgICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODdlZjU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICAgICAgICByaWdodDogLTVweDsgXHJcbiAgfVxyXG5cclxuLm1zZy1jb250ZW50IHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationCommentPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notification-comment',
            templateUrl: './notification-comment.page.html',
            styleUrls: ['./notification-comment.page.scss']
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
          }, {
            type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
          }];
        }, {
          inputField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chat_input"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-notification-comment-notification-comment-module-es5.js.map