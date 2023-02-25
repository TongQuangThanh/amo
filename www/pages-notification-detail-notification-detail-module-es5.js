(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-detail-notification-detail-module"], {
    /***/
    "8dpY":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/notification-detail/notification-detail.page.ts ***!
      \***********************************************************************/

    /*! exports provided: NotificationDetailPage */

    /***/
    function dpY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationDetailPage", function () {
        return NotificationDetailPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/api/api.service */
      "oZWX");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/loading/loading.service */
      "vglk");
      /* harmony import */


      var _utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../utils/utils.service */
      "GUvF");
      /* harmony import */


      var _popup_share_info_popup_share_info_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../popup-share-info/popup-share-info.page */
      "Et2Y");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function NotificationDetailPage_ion_img_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 33);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.thumbnail);
        }
      }

      function NotificationDetailPage_ion_img_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-img", 34);
        }
      }

      function NotificationDetailPage_div_33_ion_card_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDetailPage_div_33_ion_card_2_Template_ion_card_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r5.detailAttachment($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", item_r4._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r4.fileName, " ");
        }
      }

      function NotificationDetailPage_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NotificationDetailPage_div_33_ion_card_2_Template, 4, 2, "ion-card", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.attachments);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "display": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "liked": a0
        };
      };

      var NotificationDetailPage = /*#__PURE__*/function () {
        function NotificationDetailPage(iab, loading, sanitizer, apiService, navCtrl, route, authService, modalController) {
          _classCallCheck(this, NotificationDetailPage);

          this.iab = iab;
          this.loading = loading;
          this.sanitizer = sanitizer;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.route = route;
          this.authService = authService;
          this.modalController = modalController;
          this.likesCount = 0;
          this.isLiked = false;
          this.profile = this.authService.getProfile();
          this.apartment = '';
        }

        _createClass(NotificationDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.showHeader = 1;
            this.articleID = this.route.snapshot.paramMap.get('id');
            this.articleTitle = '';
            this.articleContent = '';
            this.thumbnail = '../../../assets/common/no-thumbnail.png';
            this.getArticleDetail(this.articleID);
            this.getDefaulUserDeparment();
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
          key: "getArticleDetail",
          value: function getArticleDetail(articleID) {
            var _this = this;

            var self = this;
            this.loading.present();
            this.apiService.getArticleDetail(articleID).subscribe(function (result) {
              var article = result.article;
              self.articleTitle = article.title;
              self.articleContent = self.sanitizer.bypassSecurityTrustHtml(article.content);
              ;
              self.thumbnail = article.thumbnail;
              self.attachments = article.attachments;
              self.readsCount = article.readsCount;
              self.commentsCount = article.commentsCount || 0;
              self.sharesCount = article.sharesCount;
              self.createdAt = article.createdAt;
              self.createBy = article.createdBy != null ? article.createdBy.displayName : '';
              _this.likesCount = article.likesCount;
              _this.isLiked = (result === null || result === void 0 ? void 0 : result.userLike) == 1 ? true : false;
              self.loading.dismiss();
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "formatString",
          value: function formatString(stringDate) {
            return _utils_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"].formatString(stringDate);
          }
        }, {
          key: "showListComment",
          value: function showListComment() {
            this.navCtrl.navigateForward('/notification-comment/' + this.articleID);
          }
        }, {
          key: "detailAttachment",
          value: function detailAttachment(event) {
            var _this2 = this;

            this.attachments.forEach(function (element) {
              if (element.id == event.currentTarget.id) {
                var url_online = '';
                var fileExtensition = element.fileName.split('.').pop().toLowerCase();

                if (fileExtensition == 'png' || fileExtensition == 'jpg' || fileExtensition == 'pdf') {
                  url_online = element.url;
                } else {
                  url_online = 'https://docs.google.com/viewer?url=' + element.url + '&embedded=true';
                }

                var browser = _this2.iab.create(url_online, '_system', 'location=yes,enableviewportscale=yes');

                browser.show();
                return;
              }
            });
          }
        }, {
          key: "convertText",
          value: function convertText(textInput) {
            return textInput.replace(/\n/gi, '<br/>');
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            var position_y = document.getElementById('content-noti').getClientRects()[0];

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
          key: "commentNotificationModal",
          value: function commentNotificationModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var self, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // this.paymentType = "transfer";
                      self = this;
                      _context.next = 3;
                      return this.modalController.create({
                        component: _popup_share_info_popup_share_info_page__WEBPACK_IMPORTED_MODULE_9__["PopupShareInfoPage"],
                        componentProps: {
                          transfer: {
                            createBy: self.createBy,
                            apartment: self.apartment,
                            articleId: self.articleID,
                            commentsCount: self.commentsCount,
                            isLiked: self.isLiked
                          }
                        },
                        cssClass: 'popupPaymentTransfer-page-custom'
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned && dataReturned.data) {
                          var dataReturnedLike = dataReturned.data.isLiked;

                          if (dataReturnedLike != _this3.isLiked) {
                            if (dataReturnedLike) {
                              _this3.likesCount++;
                            } else {
                              _this3.likesCount--;
                            }
                          }

                          _this3.isLiked = dataReturnedLike;
                          _this3.commentsCount = dataReturned.data.commentsCount;
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
            var _this4 = this;

            var likeStatus = 'none';

            if (!this.isLiked) {
              likeStatus = 'like';
            }

            this.apiService.postArticleLike(this.articleID, likeStatus).subscribe(function (response) {
              var _a;

              if (((_a = response === null || response === void 0 ? void 0 : response.articleLike) === null || _a === void 0 ? void 0 : _a.statusLike) === 'like') {
                _this4.likesCount++;
                _this4.isLiked = true;
              } else {
                _this4.likesCount--;
                _this4.isLiked = false;
              }
            });
          }
        }]);

        return NotificationDetailPage;
      }();

      NotificationDetailPage.ɵfac = function NotificationDetailPage_Factory(t) {
        return new (t || NotificationDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]));
      };

      NotificationDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NotificationDetailPage,
        selectors: [["app-notification-detail"]],
        decls: 66,
        vars: 42,
        consts: [["id", "main-header-toolbar", 1, "ion-no-border", 3, "ngStyle"], ["slot", "start", 1, "back-button"], ["id", "", "text", "", "icon", "chevron-back"], ["id", "sub-header-toolbar", 1, "ion-no-border", "w3-animate-top", 3, "ngStyle"], [1, "header-splash"], ["lines", "none", 2, "margin-top", "10px"], [1, "ion-text-wrap", "content-two-line"], ["slot", "start", 1, "btn-header-back"], ["fullscreen", "", 3, "scrollEvents", "ionScroll"], [3, "src", 4, "ngIf"], ["src", "assets/common/no-thumbnail.png", 4, "ngIf"], ["button", "", 1, "custom-card", "margin-none"], ["lines", "none", 1, "ion-item-title"], ["id", "content-noti", 1, ""], [1, "text-node", "information-node"], [1, "ion-float-left", "padding-none", "card-bottom"], [1, "card-bottom-label"], ["item-start", "", "name", "custom-oval", "src", "assets/icon/custom-oval.svg", 1, "card-bottom-icon", "custom-oval"], [1, "ion-float-left", "padding-none", "card-bottom", "margin-left-0"], ["class", "clear-both attachments-div", 4, "ngIf"], [1, "line-break-content"], [1, "full-width", "article-content", 3, "innerHTML"], [1, "ion-no-border", "footer-content", "share-info"], [1, "footer-grid-col", 3, "click"], [1, "ion-col-img"], ["src", "/assets/icon/svg/news/like.svg", 1, "share-info-img"], [1, "ion-text-left"], [1, "share-info-title", 3, "ngClass"], [1, "ion-text-left", "landing-text"], [1, "share-info-text"], [1, "ion-col-break"], ["src", "/assets/icon/svg/news/comment.svg", 1, "share-info-img"], [1, "share-info-title"], [3, "src"], ["src", "assets/common/no-thumbnail.png"], [1, "clear-both", "attachments-div"], [1, "text-node", "attachments-node"], ["class", "ion-float-left padding-none attachments-card", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "ion-float-left", "padding-none", "attachments-card", 3, "id", "click"], [1, "attachments-text"], ["name", "custom-attach-active", "src", "assets/icon/custom-attach-active.svg", 1, "attachments-icon"]],
        template: function NotificationDetailPage_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionScroll", function NotificationDetailPage_Template_ion_content_ionScroll_11_listener($event) {
              return ctx.onScroll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NotificationDetailPage_ion_img_12_Template, 1, 1, "ion-img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NotificationDetailPage_ion_img_13_Template, 1, 0, "ion-img", 10);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ion-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, NotificationDetailPage_div_33_Template, 3, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-footer", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-col", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDetailPage_Template_ion_col_click_39_listener() {
              return ctx.postLike();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-col", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "ion-img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "ion-col", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-col", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationDetailPage_Template_ion_col_click_53_listener() {
              return ctx.commentNotificationModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-col", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "ion-img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c0, ctx.getStyleHeader(1)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c0, ctx.getStyleHeader(2)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.articleTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.heightScreen, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollEvents", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.thumbnail != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.thumbnail == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.articleTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.formatString(ctx.createdAt), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](27, 22, ctx.createBy, 0, 14), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.readsCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 26, "NOTIFICATION.readed"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.attachments && ctx.attachments.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.articleContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c1, ctx.isLiked));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 28, "NOTIFICATION.like_text"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.likesCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 30, "NOTIFICATION.liked"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 32, "NOTIFICATION.comment_text"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.commentsCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 34, "NOTIFICATION.commented"), "");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
        styles: [".sub-header-toolbar[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\n.content-two-line[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 22px;\n  color: #221c1e;\n}\n\n.ion-item-title[_ngcontent-%COMP%] {\n  --padding-start: 15px;\n  --inner-padding-end: 15px;\n  margin-top: 15px;\n  --min-height: 25px;\n}\n\n.row-height-note[_ngcontent-%COMP%] {\n  height: 2.5em;\n}\n\n.custom-card[_ngcontent-%COMP%] {\n  box-shadow: none;\n  -webkit-margin-start: 0px;\n  margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n  margin-inline-end: 0px;\n}\n\n.btn-back-custom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 4.27%;\n  right: 92%;\n  top: 6.3%;\n  bottom: 91.9%;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-header[_ngcontent-%COMP%] {\n  position: fixed;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0);\n  --ion-color-base: transparent !important;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.back-button[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  padding-right: 5px;\n}\n\n.comment-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  text-transform: none;\n  --background-activated: rgba(196, 196, 196, 0.5);\n  border-radius: 5px;\n  --border-radius: 5px;\n  padding: 0px 16px 0px 16px;\n}\n\n.padding5[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.attachments-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.attachments-div[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.attachments-card[_ngcontent-%COMP%] {\n  background: none;\n  margin-top: 0;\n  margin-bottom: 5px;\n  box-shadow: none;\n  width: 100%;\n}\n\n.attachments-text[_ngcontent-%COMP%] {\n  color: #009ac9;\n  font-style: italic;\n  text-decoration: underline;\n}\n\n.attachments-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 5px;\n}\n\n.middle-dot[_ngcontent-%COMP%] {\n  font-size: 4px;\n  margin-bottom: 2px;\n}\n\n.text-node[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n  margin-bottom: 5px;\n  padding-top: 10px;\n}\n\n.information-node[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 15px;\n}\n\n.margin-left-0[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.card-bottom[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #221c1e;\n  background: none;\n  margin-top: 0;\n  margin-bottom: 5px;\n  margin-right: 10px;\n  margin-left: 0;\n  box-shadow: none;\n}\n\n.card-bottom-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  vertical-align: middle;\n}\n\n.card-bottom-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.custom-margin-10[_ngcontent-%COMP%] {\n  margin-left: -10px !important;\n}\n\n.custom-oval[_ngcontent-%COMP%] {\n  font-size: 4px;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n\n.clear-both[_ngcontent-%COMP%] {\n  clear: both;\n}\n\n.image-caption-big[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #7a838c;\n}\n\n.article-content[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: inline-block;\n  font-family: Open Sans;\n  font-style: normal;\n  font-size: 14px;\n  line-height: 22px;\n  color: #666666;\n}\n\n.line-break-content[_ngcontent-%COMP%] {\n  border-top: 1px dashed #c4c4c4;\n  margin: 0 15px;\n}\n\nion-footer[_ngcontent-%COMP%]    > ion-toolbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n\n.comment-button[_ngcontent-%COMP%] {\n  background: #FFC144;\n  --background-focused: #FFC144;\n  --background-hover: #FFC144;\n  --background: #FFC144;\n  --background-activated: #c5433a;\n  mix-blend-mode: normal;\n  border-radius: 5px;\n  left: 4.27%;\n  width: 91.46%;\n  height: 44px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #ffffff;\n  margin-top: 13px;\n  margin-bottom: 13px;\n}\n\n.message-wrap[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.msg-grid[_ngcontent-%COMP%] {\n  --ion-grid-padding: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7px 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 45px;\n  width: 24px;\n  height: 24px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313f;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin-top: 5px;\n  border-radius: 8px;\n  padding: 8px;\n  color: #fff;\n  width: auto;\n  max-width: 100%;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding: 0;\n  width: auto;\n  max-width: 100%;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background: #f4f5f5;\n  float: left;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  padding-left: 34px;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-time[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n}\n\n.message-wrap[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%] {\n  margin-left: 34px;\n}\n\n.msg-time-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #7a838c;\n  margin-right: 30px;\n}\n\n.btn-reply[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313f;\n  margin-right: 30px;\n}\n\n.add-comment-item[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-bottom: 8px;\n  margin-right: 6px;\n  margin-top: 10px;\n}\n\n.add-image-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #21313f;\n  margin-right: 18px;\n}\n\n.icon-send[_ngcontent-%COMP%] {\n  font-size: 24px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: #d3d6d9;\n}\n\nion-item.item-has-value[_ngcontent-%COMP%]   .icon-send[_ngcontent-%COMP%] {\n  color: #009ac9;\n}\n\nion-item.item-has-focus[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.input-area[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n  background: #f4f5f5;\n  border-radius: 8px;\n  padding: 0 30px 0 15px;\n  max-height: 110px;\n}\n\n.input-area.md[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px -10px 30px rgba(33, 49, 63, 0.1);\n}\n\n.reply-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313f;\n}\n\n.reply-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.cancel-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #7a838c;\n  text-align: end;\n}\n\n.w3-animate-top[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #221c1e;\n  -webkit-animation: animatetop 0.5s;\n          animation: animatetop 0.5s;\n}\n\n.share-info[_ngcontent-%COMP%] {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  box-shadow: 0px 1px 10px rgba(234, 122, 110, 0.25);\n  background: #ffffff;\n}\n\n.share-info-item[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.share-info-img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 16px;\n  display: block;\n  margin: auto;\n}\n\n.share-info-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  line-height: 20px;\n  font-size: 14px;\n  color: #666666;\n}\n\n.share-info-title.liked[_ngcontent-%COMP%] {\n  color: #FFC144;\n}\n\n.share-info-text[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-size: 10px;\n  color: #666666;\n}\n\n.share-info[_ngcontent-%COMP%]   .ion-col-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 40px;\n}\n\n.share-info[_ngcontent-%COMP%]   .footer-grid-col[_ngcontent-%COMP%] {\n  max-height: 50px;\n}\n\n.share-info[_ngcontent-%COMP%]   .ion-col-break[_ngcontent-%COMP%] {\n  max-width: 1px;\n  background: #eae9e9;\n  padding: 0px;\n  height: 40px;\n}\n\n.header-splash[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid #c4c4c4;\n}\n\n.footer-area[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  bottom: 0px;\n}\n\n@-webkit-keyframes animatetop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes animatetop {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uLWRldGFpbC9ub3RpZmljYXRpb24tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBRUEsNEJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBRUUsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0Usb0NBQUE7RUFDQSx3Q0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFJRjs7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LGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUF3Q0o7O0FBdENFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBd0NKOztBQXRDRTtFQUNFLGdCQUFBO0FBd0NKOztBQXRDRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBd0NKOztBQXBDQTtFQUNFLGtDQUFBO0FBdUNGOztBQXJDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQXdDRjs7QUFqQ0E7RUFDRTtJQUNFLFVBQUE7RUFvQ0Y7RUFsQ0E7SUFDRSxVQUFBO0VBb0NGO0FBQ0Y7O0FBMUNBO0VBQ0U7SUFDRSxVQUFBO0VBb0NGO0VBbENBO0lBQ0UsVUFBQTtFQW9DRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uLWRldGFpbC9ub3RpZmljYXRpb24tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItaGVhZGVyLXRvb2xiYXIge1xyXG4gIGhlaWdodDogMjAlO1xyXG59XHJcbi5jb250ZW50LXR3by1saW5lIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAvLyBtYXgtaGVpZ2h0OiA0NHB4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogIzIyMWMxZTtcclxufVxyXG4uaW9uLWl0ZW0tdGl0bGUge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgLS1taW4taGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ucm93LWhlaWdodC1ub3RlIHtcclxuICBoZWlnaHQ6IDIuNWVtO1xyXG59XHJcblxyXG4uY3VzdG9tLWNhcmQge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAtd2Via2l0LW1hcmdpbi1zdGFydDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcblxyXG4uYnRuLWJhY2stY3VzdG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNC4yNyU7XHJcbiAgcmlnaHQ6IDkyJTtcclxuICB0b3A6IDYuMyU7XHJcbiAgYm90dG9tOiA5MS45JTtcclxufVxyXG5cclxuLm1hcmdpbi1sZWZ0LTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBpb24tYmFjay1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIH1cclxufVxyXG4uY29tbWVudC1idXR0b24ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwcHggMTZweCAwcHggMTZweDtcclxufVxyXG5cclxuLnBhZGRpbmc1IHtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi5hdHRhY2htZW50cy1ub2RlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmF0dGFjaG1lbnRzLWRpdiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uYXR0YWNobWVudHMtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hdHRhY2htZW50cy10ZXh0IHtcclxuICBjb2xvcjogIzAwOWFjOTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmF0dGFjaG1lbnRzLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4ubWlkZGxlLWRvdCB7XHJcbiAgZm9udC1zaXplOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcbi50ZXh0LW5vZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uaW5mb3JtYXRpb24tbm9kZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcbi5jYXJkLWJvdHRvbSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyMjFjMWU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uY2FyZC1ib3R0b20taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmNhcmQtYm90dG9tLWxhYmVsIHtcclxuICAvLyBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uY3VzdG9tLW1hcmdpbi0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RvbS1vdmFsIHtcclxuICBmb250LXNpemU6IDRweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5jbGVhci1ib3RoIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4uaW1hZ2UtY2FwdGlvbi1iaWcge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG59XHJcbi5hcnRpY2xlLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxufVxyXG4ubGluZS1icmVhay1jb250ZW50IHtcclxuICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNjNGM0YzQ7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuaW9uLWZvb3RlciA+IGlvbi10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb21tZW50LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI0ZGQzE0NDtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogI0ZGQzE0NDtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6ICNGRkMxNDQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRkZDMTQ0O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNjNTQzM2E7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbGVmdDogNC4yNyU7XHJcbiAgd2lkdGg6IDkxLjQ2JTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxufVxyXG5cclxuLy8gY3VzdG9tIGNvbW1lbnQgZGlzcGxheVxyXG4ubWVzc2FnZS13cmFwIHtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuLm1zZy1ncmlkIHtcclxuICAtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDdweCAwO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLnVzZXItaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHAge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctaW5mbyBwIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctdGltZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UubGVmdCAubXNnLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY1ZjU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctdGltZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDM0cHg7XHJcbn1cclxuLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC51c2VyLWltZyB7XHJcbiAgbGVmdDogMDtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy10aW1lIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxufVxyXG4ubWVzc2FnZS13cmFwIC5yZXBseSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM0cHg7XHJcbn1cclxuLm1zZy10aW1lLWxhYmVsIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgY29sb3I6ICM3YTgzOGM7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5idG4tcmVwbHkge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi8vIGN1c3RvbSBhZGQgY29tbWVudCAvL1xyXG4uYWRkLWNvbW1lbnQtaXRlbSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYWRkLWltYWdlLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuLmljb24tc2VuZCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgY29sb3I6ICNkM2Q2ZDk7XHJcbn1cclxuaW9uLWl0ZW0uaXRlbS1oYXMtdmFsdWUge1xyXG4gIC5pY29uLXNlbmQge1xyXG4gICAgY29sb3I6ICMwMDlhYzk7XHJcbiAgfVxyXG59XHJcbmlvbi1pdGVtLml0ZW0taGFzLWZvY3VzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmlucHV0LWFyZWEge1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIGJhY2tncm91bmQ6ICNmNGY1ZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDAgMzBweCAwIDE1cHg7XHJcbiAgbWF4LWhlaWdodDogMTEwcHg7XHJcbn1cclxuLmlucHV0LWFyZWEubWQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggLTEwcHggMzBweCByZ2JhKDMzLCA0OSwgNjMsIDAuMSk7XHJcbn1cclxuLnJlcGx5LWxhYmVsIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxufVxyXG4ucmVwbHktbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNhbmNlbC1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGNvbG9yOiAjN2E4MzhjO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnczLWFuaW1hdGUtdG9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjMjIxYzFlO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZXRvcCAwLjVzO1xyXG59XHJcbi5zaGFyZS1pbmZvIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDIzNCwgMTIyLCAxMTAsIDAuMjUpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG4gICYtaXRlbSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAmLWltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAmLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuXHJcbiAgICAmLmxpa2VkIHtcclxuICAgICAgY29sb3I6ICNGRkMxNDQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtdGV4dCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gIH1cclxuICAuaW9uLWNvbC1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICB9XHJcbiAgLmZvb3Rlci1ncmlkLWNvbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuaW9uLWNvbC1icmVhayB7XHJcbiAgICBtYXgtd2lkdGg6IDFweDtcclxuICAgIGJhY2tncm91bmQ6ICNlYWU5ZTk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXNwbGFzaCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2M0YzRjNDtcclxufVxyXG4uZm9vdGVyLWFyZWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5saWtlZCB7XHJcbiAgLy8gY29sb3I6IDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationDetailPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-notification-detail',
            templateUrl: './notification-detail.page.html',
            styleUrls: ['./notification-detail.page.scss']
          }]
        }], function () {
          return [{
            type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]
          }, {
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
          }, {
            type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cRUX":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/notification-detail/notification-detail.module.ts ***!
      \*************************************************************************/

    /*! exports provided: NotificationDetailPageModule */

    /***/
    function cRUX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationDetailPageModule", function () {
        return NotificationDetailPageModule;
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


      var _notification_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notification-detail.page */
      "8dpY");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _notification_detail_page__WEBPACK_IMPORTED_MODULE_5__["NotificationDetailPage"]
      }];

      var NotificationDetailPageModule = function NotificationDetailPageModule() {
        _classCallCheck(this, NotificationDetailPageModule);
      };

      NotificationDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NotificationDetailPageModule
      });
      NotificationDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NotificationDetailPageModule_Factory(t) {
          return new (t || NotificationDetailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotificationDetailPageModule, {
          declarations: [_notification_detail_page__WEBPACK_IMPORTED_MODULE_5__["NotificationDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationDetailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_notification_detail_page__WEBPACK_IMPORTED_MODULE_5__["NotificationDetailPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-notification-detail-notification-detail-module-es5.js.map