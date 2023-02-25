(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-detail-new-detail-module"], {
    /***/
    "Qk/J":
    /*!*****************************************************!*\
      !*** ./src/app/pages/new-detail/new-detail.page.ts ***!
      \*****************************************************/

    /*! exports provided: NewDetailPage */

    /***/
    function QkJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewDetailPage", function () {
        return NewDetailPage;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _popup_share_info_popup_share_info_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../popup-share-info/popup-share-info.page */
      "Et2Y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function NewDetailPage_ion_img_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 22);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.thumbnail);
        }
      }

      function NewDetailPage_ion_img_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 23);
        }
      }

      function NewDetailPage_section_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NewDetailPage_section_34_Template_ion_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.orderService($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.buttonTitle == "" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "NEW_DETAIL.default_button_order") : ctx_r2.buttonTitle);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "display": a0
        };
      };

      var NewDetailPage = /*#__PURE__*/function () {
        function NewDetailPage(platform, sanitizer, loading, apiService, navCtrl, route, modalController) {
          var _this = this;

          _classCallCheck(this, NewDetailPage);

          this.platform = platform;
          this.sanitizer = sanitizer;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.route = route;
          this.modalController = modalController;
          this.commentsCount = 0;
          this.isLiked = false;
          this.apartment = '';
          this.createBy = '';
          this.platform.ready().then(function (readySource) {
            _this.heightScreen = platform.height() * 0.58 - 18;
          });
        }

        _createClass(NewDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.showHeader = 1;
            this.newID = this.route.snapshot.paramMap.get('id');
            this.newTitle = '';
            this.isDisplayButton = false;
            this.newContent = '';
            this.thumbnail = '../../../assets/common/no-thumbnail.png';
            this.getDefaulUserDeparment();
            this.getNewDetail();
          }
        }, {
          key: "getDefaulUserDeparment",
          value: function getDefaulUserDeparment() {
            var self = this;
            this.apiService.getListUserApartment().subscribe(function (result) {
              if (result.userApartments.length > 0) {
                self.apartment = result.userApartments[0]._id;
              }
            }, function (error) {});
          }
        }, {
          key: "getNewDetail",
          value: function getNewDetail() {
            this.loading.present();
            var self = this;
            this.apiService.getPosteDetail(this.newID).subscribe(function (result) {
              self.createBy = result.post.createdBy != null ? result.post.createdBy.displayName : '';
              self.newTitle = result.post.title;
              self.newContent = self.sanitizer.bypassSecurityTrustHtml(result.post.content);
              self.thumbnail = result.post.thumbnail;
              self.updatedAt = result.post.updatedAt;
              self.createdBy = result.post.createdBy.displayName;
              self.totalViewers = result.post.totalViewers;
              self.buttonTitle = result.post.titleButton;
              self.serviceID = result.post.serviceID;

              if (self.serviceID != null && self.serviceID != '') {
                self.isDisplayButton = true;
              }

              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "updateVideoUrl",
          value: function updateVideoUrl(urlVideo) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo);
          }
        }, {
          key: "formatString",
          value: function formatString(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"].formatString(stringDate);
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
          key: "addCountPostClick",
          value: function addCountPostClick() {
            this.apiService.countUserButtonPost(this.newID).subscribe(function (result) {}, function (error) {});
          }
        }, {
          key: "orderService",
          value: function orderService(event) {
            if (event && event.stopPropagation) {
              event.stopPropagation();
            }

            this.addCountPostClick();
            this.navCtrl.navigateForward('/order-service/' + this.serviceID);
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            var position_y = document.getElementById('content-news').getClientRects()[0];

            if (position_y['y'] > 45) {
              this.showHeader = 1;
            } else {
              this.showHeader = 2;
            }
          }
        }, {
          key: "getStyleHeader",
          value: function getStyleHeader(index) {
            if (index == this.showHeader) {
              return '';
            } else {
              return 'none';
            }
          }
        }, {
          key: "shareInfoModal",
          value: function shareInfoModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var self, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      self = this;
                      _context.next = 3;
                      return this.modalController.create({
                        component: _popup_share_info_popup_share_info_page__WEBPACK_IMPORTED_MODULE_8__["PopupShareInfoPage"],
                        componentProps: {
                          transfer: {
                            createBy: self.createBy,
                            apartment: self.apartment,
                            articleId: self.newID,
                            commentsCount: self.commentsCount,
                            isLiked: self.isLiked,
                            isPost: true
                          }
                        },
                        cssClass: 'popupPaymentTransfer-page-custom'
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (res) {
                        if (res && res.data) {
                          _this2.isLiked = res.data;
                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "postLike",
          value: function postLike() {
            var _this3 = this;

            var likeStatus = 'none';

            if (!this.isLiked) {
              likeStatus = 'like';
            }

            this.apiService.postPostLike(this.newID, likeStatus).subscribe(function (response) {
              if (response.postLike.statusLike === 'like') {
                _this3.isLiked = true;
              } else {
                _this3.isLiked = false;
              }
            });
          }
        }]);

        return NewDetailPage;
      }();

      NewDetailPage.ɵfac = function NewDetailPage_Factory(t) {
        return new (t || NewDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]));
      };

      NewDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NewDetailPage,
        selectors: [["app-new-detail"]],
        decls: 35,
        vars: 19,
        consts: [["id", "main-header-toolbar", 1, "ion-no-border", 3, "ngStyle"], ["slot", "start", 1, "back-button"], ["id", "", "text", "", "icon", "chevron-back"], ["id", "sub-header-toolbar", 1, "ion-no-border", "w3-animate-top", 3, "ngStyle"], [1, "header-splash"], ["lines", "none", 2, "margin-top", "10px"], [1, "ion-text-wrap", "content-two-line"], ["slot", "start", 1, "btn-header-back"], ["fullscreen", "", 3, "scrollEvents", "ionScroll"], [3, "src", 4, "ngIf"], ["src", "assets/common/no-thumbnail.png", 4, "ngIf"], ["button", "", 1, "custom-card", "margin-none"], ["lines", "none", 1, "ion-item-title"], ["id", "content-news"], [1, "text-node", "information-node"], [1, "ion-float-left", "padding-none", "card-bottom"], [1, "card-bottom-label"], ["item-start", "", "name", "custom-oval", "src", "assets/icon/custom-oval.svg", 1, "card-bottom-icon", "custom-oval"], [1, "ion-float-left", "padding-none", "card-bottom", "margin-left-0"], [1, "line-break-content"], [1, "article-content", 2, "width", "100%", 3, "innerHTML"], ["class", "full-width function-section", 4, "ngIf"], [3, "src"], ["src", "assets/common/no-thumbnail.png"], [1, "full-width", "function-section"], ["expand", "block", 1, "button-common", "button-common-active", 3, "click"]],
        template: function NewDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-header", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-toolbar", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card-title", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-buttons", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScroll", function NewDetailPage_Template_ion_content_ionScroll_11_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NewDetailPage_ion_img_12_Template, 1, 1, "ion-img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NewDetailPage_ion_img_13_Template, 1, 0, "ion-img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-card-title", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-list", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-card", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, NewDetailPage_section_34_Template, 4, 3, "section", 21);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.getStyleHeader(1)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.getStyleHeader(2)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.newTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.thumbnail != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.thumbnail == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.newTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.formatString(ctx.updatedAt), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.createdBy, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.totalViewers, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 13, "NOTIFICATION.view"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.newContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDisplayButton == true);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: [".sub-header-toolbar[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\n.ion-item-title[_ngcontent-%COMP%] {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  margin-top: 15px;\n  --min-height: 25px;\n}\n\n.content-two-line[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #221c1e;\n}\n\n.row-height-note[_ngcontent-%COMP%] {\n  height: 2.5em;\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n  -webkit-margin-start: 0px;\n  margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n  margin-inline-end: 0px;\n}\n\n.btn-back-custom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4.27%;\n  right: 92%;\n  top: 6.3%;\n  bottom: 91.9%;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-header[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0);\n  --ion-color-base: transparent !important;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.back-button[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  padding-right: 5px;\n}\n\n.comment-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  text-transform: none;\n  --background-activated: rgba(196, 196, 196, 0.5);\n  border-radius: 5px;\n  --border-radius: 5px;\n  padding: 0px 16px 0px 16px;\n}\n\n.padding5[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.attachments-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.attachments-div[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.attachments-card[_ngcontent-%COMP%] {\n  background: none;\n  margin-top: 0;\n  margin-bottom: 5px;\n  box-shadow: none;\n  width: 100%;\n}\n\n.attachments-text[_ngcontent-%COMP%] {\n  color: #009ac9;\n  font-style: italic;\n  text-decoration: underline;\n}\n\n.attachments-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 5px;\n}\n\n.middle-dot[_ngcontent-%COMP%] {\n  font-size: 4px;\n  margin-bottom: 2px;\n}\n\n.text-node[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n  margin-bottom: 5px;\n  padding-top: 10px;\n}\n\n.information-node[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 15px;\n}\n\n.margin-left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.card-bottom[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n  background: none;\n  margin-top: 0;\n  margin-bottom: 5px;\n  margin-right: 10px;\n  margin-left: 0;\n  box-shadow: none;\n}\n\n.card-bottom-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  vertical-align: middle;\n}\n\n.card-bottom-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.custom-margin-10[_ngcontent-%COMP%] {\n  margin-left: -10px !important;\n}\n\n.custom-oval[_ngcontent-%COMP%] {\n  font-size: 4px;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n.clear-both[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.image-caption-big[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: inline-block;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  color: #666666;\n}\n\n.line-break-content[_ngcontent-%COMP%] {\n  border-top: 1px dashed #c4c4c4;\n  margin: 0 15px;\n}\n\nion-footer[_ngcontent-%COMP%]    > ion-toolbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.comment-button[_ngcontent-%COMP%] {\n  background: #FFC144;\n  --background-focused: #FFC144;\n  --background-hover: #FFC144;\n  --background: #FFC144;\n  --background-activated: #c5433a;\n  mix-blend-mode: normal;\n  border-radius: 5px;\n  left: 4.27%;\n  width: 91.46%;\n  height: 44px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #ffffff;\n  margin-top: 13px;\n  margin-bottom: 13px;\n}\n\n.message-wrap[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.msg-grid[_ngcontent-%COMP%] {\n  --ion-grid-padding: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7px 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 45px;\n  width: 24px;\n  height: 24px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313f;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin-top: 5px;\n  border-radius: 8px;\n  padding: 8px;\n  color: #fff;\n  width: auto;\n  max-width: 100%;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding: 0;\n  width: auto;\n  max-width: 100%;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background: #f4f5f5;\n  float: left;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n  margin-left: 34px;\n}\n\n.msg-time-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #7a838c;\n  margin-right: 30px;\n}\n\n.btn-reply[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313f;\n  margin-right: 30px;\n}\n\n.add-comment-item[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-bottom: 8px;\n  margin-right: 6px;\n  margin-top: 10px;\n}\n\n.add-image-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #21313f;\n  margin-right: 18px;\n}\n\n.icon-send[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #d3d6d9;\n}\n\nion-item.item-has-value[_ngcontent-%COMP%]   .icon-send[_ngcontent-%COMP%] {\n  color: #009ac9;\n}\n\nion-item.item-has-focus[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.input-area[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  background: #f4f5f5;\n  border-radius: 8px;\n  padding: 0 30px 0 15px;\n  max-height: 110px;\n}\n\n.input-area.md[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px -10px 30px rgba(33, 49, 63, 0.1);\n}\n\n.reply-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313f;\n}\n\n.reply-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.cancel-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #7a838c;\n  text-align: end;\n}\n\n.w3-animate-top[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #221c1e;\n  -webkit-animation: animatetop 0.5s;\n          animation: animatetop 0.5s;\n}\n\n.share-info[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  box-shadow: 0px 1px 10px rgba(234, 122, 110, 0.25);\n  background: #ffffff;\n}\n\n.share-info-item[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.share-info-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 16px;\n  display: block;\n  margin: auto;\n}\n\n.share-info-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  line-height: 20px;\n  font-size: 14px;\n  color: #666666;\n}\n\n.share-info-title.liked[_ngcontent-%COMP%] {\n  color: #FFC144;\n}\n\n.share-info-text[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-size: 10px;\n  color: #666666;\n}\n\n.share-info[_ngcontent-%COMP%]   .ion-col-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 40px;\n}\n\n.share-info[_ngcontent-%COMP%]   .footer-grid-col[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n\n.share-info[_ngcontent-%COMP%]   .ion-col-break[_ngcontent-%COMP%] {\n  max-width: 1px;\n  background: #eae9e9;\n  padding: 0px;\n  height: 40px;\n}\n\n.header-splash[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #c4c4c4;\n}\n\n.footer-area[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  bottom: 0px;\n}\n\n@-webkit-keyframes animatetop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes animatetop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LWRldGFpbC9uZXctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUVBLDRCQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBRUUsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0Usb0NBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFD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QTtFQUNBLGNBQUE7QUF5Q0o7O0FBdkNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBeUNKOztBQXZDRTtFQUNFLGdCQUFBO0FBeUNKOztBQXZDRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBeUNKOztBQXJDQTtFQUNFLGtDQUFBO0FBd0NGOztBQXRDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQXlDRjs7QUF0Q0E7RUFDRTtJQUNFLFVBQUE7RUF5Q0Y7RUF2Q0E7SUFDRSxVQUFBO0VBeUNGO0FBQ0Y7O0FBL0NBO0VBQ0U7SUFDRSxVQUFBO0VBeUNGO0VBdkNBO0lBQ0UsVUFBQTtFQXlDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3LWRldGFpbC9uZXctZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItaGVhZGVyLXRvb2xiYXIge1xyXG4gIGhlaWdodDogMjAlO1xyXG59XHJcbi5pb24taXRlbS10aXRsZSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICAtLW1pbi1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmNvbnRlbnQtdHdvLWxpbmUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC8vIG1heC1oZWlnaHQ6IDQ0cHg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjMjIxYzFlO1xyXG59XHJcblxyXG4ucm93LWhlaWdodC1ub3RlIHtcclxuICBoZWlnaHQ6IDIuNWVtO1xyXG59XHJcblxyXG4uY3VzdG9tLWNhcmQge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAtd2Via2l0LW1hcmdpbi1zdGFydDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG4uYnRuLWJhY2stY3VzdG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNC4yNyU7XHJcbiAgcmlnaHQ6IDkyJTtcclxuICB0b3A6IDYuMyU7XHJcbiAgYm90dG9tOiA5MS45JTtcclxufVxyXG5cclxuLm1hcmdpbi1sZWZ0LTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2stYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG59XHJcbi5jb21tZW50LWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDBweCAxNnB4IDBweCAxNnB4O1xyXG59XHJcblxyXG4ucGFkZGluZzUge1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuLmF0dGFjaG1lbnRzLW5vZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYXR0YWNobWVudHMtZGl2IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5hdHRhY2htZW50cy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmF0dGFjaG1lbnRzLXRleHQge1xyXG4gIGNvbG9yOiAjMDA5YWM5O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uYXR0YWNobWVudHMtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5taWRkbGUtZG90IHtcclxuICBmb250LXNpemU6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuLnRleHQtbm9kZSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5pbmZvcm1hdGlvbi1ub2RlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4ubWFyZ2luLWxlZnQtMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLmNhcmQtYm90dG9tIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzIyMWMxZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5jYXJkLWJvdHRvbS1pY29uIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uY2FyZC1ib3R0b20tbGFiZWwge1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jdXN0b20tbWFyZ2luLTEwIHtcclxuICBtYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcclxufVxyXG4uY3VzdG9tLW92YWwge1xyXG4gIGZvbnQtc2l6ZTogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmNsZWFyLWJvdGgge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5pbWFnZS1jYXB0aW9uLWJpZyB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbn1cclxuLmFydGljbGUtY29udGVudCB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcbi5saW5lLWJyZWFrLWNvbnRlbnQge1xyXG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2M0YzRjNDtcclxuICBtYXJnaW46IDAgMTVweDtcclxufVxyXG5pb24tZm9vdGVyID4gaW9uLXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvbW1lbnQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjRkZDMTQ0O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogI0ZGQzE0NDtcclxuICAtLWJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2M1NDMzYTtcclxuICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBsZWZ0OiA0LjI3JTtcclxuICB3aWR0aDogOTEuNDYlO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogMTNweDtcclxuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xyXG59XHJcblxyXG4vLyBjdXN0b20gY29tbWVudCBkaXNwbGF5XHJcbi5tZXNzYWdlLXdyYXAge1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG4ubXNnLWdyaWQge1xyXG4gIC0taW9uLWdyaWQtcGFkZGluZzogMDtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogN3B4IDA7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAudXNlci1pbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHAge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy10aW1lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjVmNTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy10aW1lIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwge1xyXG4gIHBhZGRpbmctbGVmdDogMzRweDtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLnVzZXItaW1nIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWRldGFpbCAubXNnLXRpbWUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLnJlcGx5IHtcclxuICBtYXJnaW4tbGVmdDogMzRweDtcclxufVxyXG4ubXNnLXRpbWUtbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBjb2xvcjogIzdhODM4YztcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmJ0bi1yZXBseSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLy8gY3VzdG9tIGFkZCBjb21tZW50IC8vXHJcbi5hZGQtY29tbWVudC1pdGVtIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5hZGQtaW1hZ2UtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG4uaWNvbi1zZW5kIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICBjb2xvcjogI2QzZDZkOTtcclxufVxyXG5pb24taXRlbS5pdGVtLWhhcy12YWx1ZSB7XHJcbiAgLmljb24tc2VuZCB7XHJcbiAgICBjb2xvcjogIzAwOWFjOTtcclxuICB9XHJcbn1cclxuaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uaW5wdXQtYXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMCAzMHB4IDAgMTVweDtcclxuICBtYXgtaGVpZ2h0OiAxMTBweDtcclxufVxyXG4uaW5wdXQtYXJlYS5tZCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmZvb3Rlci1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAtMTBweCAzMHB4IHJnYmEoMzMsIDQ5LCA2MywgMC4xKTtcclxufVxyXG4ucmVwbHktbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG59XHJcbi5yZXBseS1uYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2FuY2VsLWxhYmVsIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4udzMtYW5pbWF0ZS10b3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRldG9wIDAuNXM7XHJcbn1cclxuLnNoYXJlLWluZm8ge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMjM0LCAxMjIsIDExMCwgMC4yNSk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgJi1pdGVtIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gICYtaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gICYtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG5cclxuICAgICYubGlrZWQge1xyXG4gICAgICBjb2xvcjogI0ZGQzE0NDtcclxuICAgIH1cclxuICB9XHJcbiAgJi10ZXh0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgfVxyXG4gIC5pb24tY29sLWltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gIH1cclxuICAuZm9vdGVyLWdyaWQtY29sIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5pb24tY29sLWJyZWFrIHtcclxuICAgIG1heC13aWR0aDogMXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VhZTllOTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItc3BsYXNoIHtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYzRjNGM0O1xyXG59XHJcbi5mb290ZXItYXJlYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3R0b206IDBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewDetailPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-new-detail',
            templateUrl: './new-detail.page.html',
            styleUrls: ['./new-detail.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZeRj":
    /*!*******************************************************!*\
      !*** ./src/app/pages/new-detail/new-detail.module.ts ***!
      \*******************************************************/

    /*! exports provided: NewDetailPageModule */

    /***/
    function ZeRj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewDetailPageModule", function () {
        return NewDetailPageModule;
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


      var _new_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-detail.page */
      "Qk/J");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _new_detail_page__WEBPACK_IMPORTED_MODULE_5__["NewDetailPage"]
      }];

      var NewDetailPageModule = function NewDetailPageModule() {
        _classCallCheck(this, NewDetailPageModule);
      };

      NewDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NewDetailPageModule
      });
      NewDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NewDetailPageModule_Factory(t) {
          return new (t || NewDetailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewDetailPageModule, {
          declarations: [_new_detail_page__WEBPACK_IMPORTED_MODULE_5__["NewDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewDetailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_new_detail_page__WEBPACK_IMPORTED_MODULE_5__["NewDetailPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-new-detail-new-detail-module-es5.js.map