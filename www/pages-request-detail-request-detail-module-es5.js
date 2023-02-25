(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-detail-request-detail-module"], {
    /***/
    "+Yw/":
    /*!*************************************************************!*\
      !*** ./src/app/pages/request-detail/request-detail.page.ts ***!
      \*************************************************************/

    /*! exports provided: RequestDetailPage */

    /***/
    function Yw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestDetailPage", function () {
        return RequestDetailPage;
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

      function RequestDetailPage_ion_badge_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST.status_new"));
        }
      }

      function RequestDetailPage_ion_badge_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST.status_processing"));
        }
      }

      function RequestDetailPage_ion_badge_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST.status_done"));
        }
      }

      function RequestDetailPage_ion_badge_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "REQUEST.status_cancelled"));
        }
      }

      function RequestDetailPage_div_15_ion_item_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.detailRequest.category == null ? null : ctx_r7.detailRequest.category.title);
        }
      }

      function RequestDetailPage_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RequestDetailPage_div_15_ion_item_5_Template, 4, 1, "ion-item", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r4.detailRequest.apartment == null ? null : ctx_r4.detailRequest.apartment.title) + " - " + (ctx_r4.detailRequest.campaign == null ? null : ctx_r4.detailRequest.campaign.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.detailRequest.category == null ? null : ctx_r4.detailRequest.category.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.detailRequest.content);
        }
      }

      function RequestDetailPage_div_25_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 41);
        }

        if (rf & 2) {
          var msg_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", msg_r8.createdBy.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestDetailPage_div_25_div_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r8.content);
        }
      }

      function RequestDetailPage_div_25_div_2_div_5_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 50);
        }

        if (rf & 2) {
          var attachments_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", attachments_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RequestDetailPage_div_25_div_2_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestDetailPage_div_25_div_2_div_5_img_1_Template, 1, 1, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", msg_r8.attachments);
        }
      }

      function RequestDetailPage_div_25_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RequestDetailPage_div_25_div_2_div_4_Template, 3, 1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RequestDetailPage_div_25_div_2_div_5_Template, 2, 1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r8.createdBy.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !msg_r8.attachments || msg_r8.attachments.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r8.attachments && msg_r8.attachments.length > 0);
        }
      }

      function RequestDetailPage_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RequestDetailPage_div_25_img_1_Template, 1, 1, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RequestDetailPage_div_25_div_2_Template, 6, 3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r8 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("left", msg_r8.createdBy && msg_r8.createdBy._id !== ctx_r6.currentUser._id)("right", msg_r8.createdBy && msg_r8.createdBy._id === ctx_r6.currentUser._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r8.createdBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", msg_r8.createdBy);
        }
      }

      var RequestDetailPage = /*#__PURE__*/function () {
        function RequestDetailPage(camera, actionSheetController, translate, platform, loading, apiService, navCtrl, route) {
          var _this = this;

          _classCallCheck(this, RequestDetailPage);

          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.translate = translate;
          this.platform = platform;
          this.loading = loading;
          this.apiService = apiService;
          this.navCtrl = navCtrl;
          this.route = route;
          this.editorMsg = '';
          this.showEmojiPicker = false;
          this.listImage = [];
          this.detailRequest = {};
          this.isExpand = false;

          this.blobToFile = function (theBlob, fileName) {
            var b = theBlob; //A Blob() is almost a File() - it's just missing the two properties below which we will add

            b.lastModifiedDate = new Date();
            b.name = fileName; //Cast to a File() type

            return theBlob;
          };

          var self = this;
          platform.ready().then(function (readySource) {
            self.widthListScreen = platform.width() * 0.8;
            self.heightScreen = platform.height() * 0.80;
            self.defineHeightScreen = _this.heightScreen;
          });
          _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__["UtilsService"].requestDetailComponentShare = this;
        }

        _createClass(RequestDetailPage, [{
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
              _this2.detailRequest = result.feedbacknew;
              self.requestTitle = result.feedbacknew.title;
              self.requestContent = result.feedbacknew.content;
              self.createdAt = result.feedbacknew.createdAt;
              self.createBy = result.feedbacknew.createdBy != null ? result.feedbacknew.createdBy.displayName : "";
              self.feedbackID = result.feedbacknew._id;
              self.listImage = result.feedbacknew.attachments;

              if (self.listImage.length > 0) {
                _this2.heightScreen = self.defineHeightScreen - 100;
              } // self.updateSizeContent();


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

        return RequestDetailPage;
      }();

      RequestDetailPage.ɵfac = function RequestDetailPage_Factory(t) {
        return new (t || RequestDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      RequestDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RequestDetailPage,
        selectors: [["app-request-detail"]],
        viewQuery: function RequestDetailPage_Query(rf, ctx) {
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
        decls: 32,
        vars: 18,
        consts: [[1, "ion-no-border", "request-header-detail"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "request-card"], ["lines", "none", 1, "request-card-item"], ["slot", "start", 1, "update-time"], ["slot", "end", "class", "badge-status badge-danger", 4, "ngIf"], ["slot", "end", "class", "badge-status badge-warning", 4, "ngIf"], ["slot", "end", "class", "badge-status badge-success", 4, "ngIf"], ["slot", "end", "class", "badge-status badge-cancel", 4, "ngIf"], [1, ""], [1, "request-title"], [1, "devider-line-custom", "margin-top-10"], ["class", "detail-content-block", 4, "ngIf"], [1, "button-expand", 3, "click"], [1, "expand-label"], [3, "src"], [1, "request-detail-content"], [1, "list-chat-content"], ["content", ""], [1, "message-wrap"], ["class", "message", 3, "left", "right", 4, "ngFor", "ngForOf"], [1, "ion-no-border"], ["lines", "none", 1, "add-comment-item"], ["slot", "start", 1, "add-image-icon", 3, "src", "click"], ["rows", "1", "auto-grow", "", 1, "input-area", 3, "placeholder", "ngModel", "ionFocus", "ngModelChange"], [1, "icon-send", "icon-send-default", 3, "src", "click"], ["slot", "end", 1, "badge-status", "badge-danger"], ["slot", "end", 1, "badge-status", "badge-warning"], ["slot", "end", 1, "badge-status", "badge-success"], ["slot", "end", 1, "badge-status", "badge-cancel"], [1, "detail-content-block"], ["lines", "none", 1, "ion-item-block"], ["src", "../assets/icon/request/home.svg", 1, "ion-icon"], [1, "ion-item-lable"], ["lines", "none", "class", "ion-item-block", 4, "ngIf"], [1, "ion-text"], ["src", "../assets/icon/request/danger.svg", 1, "ion-icon"], [1, "message"], ["class", "user-img", "alt", "", 3, "src", 4, "ngIf"], ["class", "msg-detail", 4, "ngIf"], ["alt", "", 1, "user-img", 3, "src"], [1, "msg-detail"], [1, "msg-info"], ["class", "msg-content", 4, "ngIf"], ["class", "msg-content msg-images", 4, "ngIf"], [1, "msg-content"], [1, "line-breaker"], [1, "msg-content", "msg-images"], ["class", "", 3, "src", 4, "ngFor", "ngForOf"], [1, "", 3, "src"]],
        template: function RequestDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RequestDetailPage_ion_badge_7_Template, 3, 3, "ion-badge", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RequestDetailPage_ion_badge_8_Template, 3, 3, "ion-badge", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RequestDetailPage_ion_badge_9_Template, 3, 3, "ion-badge", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RequestDetailPage_ion_badge_10_Template, 3, 3, "ion-badge", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-text", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RequestDetailPage_div_15_Template, 8, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestDetailPage_Template_div_click_16_listener() {
              return ctx.isExpand = !ctx.isExpand;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-content", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-content", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RequestDetailPage_div_25_Template, 3, 6, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-footer", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-icon", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestDetailPage_Template_ion_icon_click_28_listener() {
              return ctx.selectImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-textarea", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionFocus", function RequestDetailPage_Template_ion_textarea_ionFocus_29_listener() {
              return ctx.isExpand = false;
            })("ngModelChange", function RequestDetailPage_Template_ion_textarea_ngModelChange_29_listener($event) {
              return ctx.editorMsg = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-icon", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestDetailPage_Template_ion_icon_click_31_listener() {
              return ctx.sendMsg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formatString(ctx.detailRequest.updatedAt));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detailRequest.status == "new");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detailRequest.status == "processing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detailRequest.status == "completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detailRequest.status == "cancelled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.detailRequest.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExpand);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 14, !ctx.isExpand ? "REQUEST_DETAIL.display_info" : "REQUEST_DETAIL.collapse"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", !ctx.isExpand ? "../assets/icon/svg/Down.svg" : "../assets/icon/svg/up.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.msgList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "../assets/icon/request/camera.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 16, "REQUEST_DETAIL.place_holder_input"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.editorMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (ctx.editorMsg == null ? null : ctx.editorMsg.length) > 0 ? "../assets/icon/request/send.svg" : "../assets/icon/request/send-gray.svg");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBadge"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: [".card-content[_ngcontent-%COMP%] {\n  box-shadow: none;\n  margin: 0;\n}\n\n.text-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n}\n\nion-item.item-has-focus[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.add-comment-item[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-bottom: 10px;\n  margin-right: 6px;\n}\n\n.add-image-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #21313f;\n  margin-right: 0px;\n  position: absolute;\n  left: 25px;\n  bottom: 5px;\n  z-index: 999;\n}\n\n.icon-send[_ngcontent-%COMP%] {\n  font-size: 22px;\n  position: absolute;\n  right: 5px;\n  bottom: 10px;\n}\n\nion-item.item-has-value[_ngcontent-%COMP%]   .icon-send[_ngcontent-%COMP%] {\n  color: #009ac9;\n}\n\n.input-area[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313f;\n  background: #f4f5f5;\n  border-radius: 8px;\n  padding-left: 35px;\n  padding-right: 30px;\n  max-height: 110px;\n}\n\n.grid[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n\n.griditem[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 0;\n}\n\n.box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #009ac9;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%] {\n  outline: -webkit-focus-ring-color auto 5px;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + p[_ngcontent-%COMP%] {\n  -webkit-line-clamp: unset;\n}\n\n.box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.request-header-detail[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 156px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.request-header-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 55px;\n}\n\n.request-header-detail[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.request-header-detail[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #f8f9fa;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n\n.request-card[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  position: absolute;\n  min-height: 120px;\n  left: 15px;\n  right: 15px;\n  top: 100px;\n  z-index: 999;\n  background: #ffffff;\n  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin: 0;\n}\n\n.request-card[_ngcontent-%COMP%]   .request-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 22px;\n  color: #221c1e;\n  margin: 0 15px;\n}\n\n.request-card[_ngcontent-%COMP%]   .request-card-item[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n.request-card[_ngcontent-%COMP%]   .request-card-item[_ngcontent-%COMP%]   .update-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  color: #666666;\n  margin-left: -5px;\n}\n\n.request-card[_ngcontent-%COMP%]   .request-card-item[_ngcontent-%COMP%]   .badge-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  color: #ffffff;\n  border-radius: 0px 8px;\n  width: 80px;\n  height: 20px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n}\n\n.request-card[_ngcontent-%COMP%]   .request-card-item[_ngcontent-%COMP%]   .badge-danger[_ngcontent-%COMP%] {\n  background: #FFC144;\n}\n\n.request-card[_ngcontent-%COMP%]   .request-card-item[_ngcontent-%COMP%]   .badge-warning[_ngcontent-%COMP%] {\n  background: #f2c94c;\n}\n\n.request-card[_ngcontent-%COMP%]   .request-card-item[_ngcontent-%COMP%]   .badge-success[_ngcontent-%COMP%] {\n  background: #33a54c;\n}\n\n.request-card[_ngcontent-%COMP%]   .request-card-item[_ngcontent-%COMP%]   .badge-cancel[_ngcontent-%COMP%] {\n  background: #d3d6d9;\n}\n\n.request-card[_ngcontent-%COMP%]   .detail-content-block[_ngcontent-%COMP%]   .ion-item-block[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n}\n\n.request-card[_ngcontent-%COMP%]   .detail-content-block[_ngcontent-%COMP%]   .ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 5px;\n}\n\n.request-card[_ngcontent-%COMP%]   .detail-content-block[_ngcontent-%COMP%]   .ion-item-lable[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 24px;\n  color: #221c1e;\n  mix-blend-mode: normal;\n}\n\n.request-card[_ngcontent-%COMP%]   .detail-content-block[_ngcontent-%COMP%]   .ion-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n  color: #000000;\n  padding: 0 10px;\n  margin-top: 5px;\n}\n\n.request-card[_ngcontent-%COMP%]   .button-expand[_ngcontent-%COMP%] {\n  height: 35px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.request-card[_ngcontent-%COMP%]   .button-expand[_ngcontent-%COMP%]   .expand-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666666;\n}\n\n.request-detail-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  --padding-top: 85px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .list-chat-content[_ngcontent-%COMP%] {\n  --overflow: auto;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7px 0;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 45px;\n  width: 24px;\n  height: 24px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 18px;\n  color: #21313f;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 5px;\n  border-radius: 8px;\n  padding: 8px 10px;\n  color: #fff;\n  width: auto;\n  max-width: 80%;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  background: #f4f5f5;\n  border-radius: 2px;\n  height: 8px;\n  width: 8px;\n  top: 12px;\n  display: block;\n  border-style: solid;\n  border-color: #ddd;\n  border-width: 1px;\n  transform: rotate(45deg);\n  position: absolute;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  float: left;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313f;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.left[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  border-top-width: 0;\n  border-right-width: 0;\n  left: -5px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  background-color: #21313f;\n  float: right;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  min-width: 50px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%]   span.triangle[_ngcontent-%COMP%] {\n  background-color: #387ef5;\n  border-bottom-width: 0;\n  border-left-width: 0;\n  right: -5px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .devider-line[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f4f5f5;\n  width: 100%;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px 16px 10px 16px;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  color: #21313f;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .msg-images[_ngcontent-%COMP%] {\n  background-color: unset !important;\n  padding: 0 !important;\n  border-radius: 0 !important;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 16px;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .image-col[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 160px;\n  text-align: center;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .image-col-1[_ngcontent-%COMP%] {\n  height: 160px;\n  margin: 0 auto;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .image-col-2[_ngcontent-%COMP%] {\n  height: 80px;\n  margin: 0 auto;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .image-col-right-bottom[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n\n.request-detail-content[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: #21313f;\n}\n\n.devider-line-custom[_ngcontent-%COMP%] {\n  border: 1px dashed #e9e9e9;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC1kZXRhaWwvcmVxdWVzdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRUY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHRTtFQUNFLGNBQUE7QUFBSjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBS0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtFO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9FO0VBQ0UsMENBQUE7QUFMSjs7QUFRRTtFQUNFLHlCQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0FBUEo7O0FBYUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZGOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQVRKOztBQVVJO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQVJOOztBQVdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQVRKOztBQWFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFYRjs7QUFZRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFWSjs7QUFZRTtFQUNFLFlBQUE7QUFWSjs7QUFXSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVROOztBQVdJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVROOztBQVdJO0VBQ0UsbUJBQUE7QUFUTjs7QUFXSTtFQUNFLG1CQUFBO0FBVE47O0FBV0k7RUFDRSxtQkFBQTtBQVROOztBQVdJO0VBQ0UsbUJBQUE7QUFUTjs7QUFhSTtFQUNFLHFCQUFBO0FBWE47O0FBYUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFYTjs7QUFhSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQVhOOztBQWFJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBWE47O0FBY0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBYUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVhOOztBQWdCQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFiRjs7QUFlRTtFQUNFLGdCQUFBO0FBYko7O0FBZUU7RUFDRSxlQUFBO0FBYko7O0FBZUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFiSjs7QUFlRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBYko7O0FBZUU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFiSjs7QUFlRTtFQUNFLFNBQUE7QUFiSjs7QUFlRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFiSjs7QUFlRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFiSjs7QUFlRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBYko7O0FBZUU7RUFDRSxrQkFBQTtBQWJKOztBQWVFO0VBQ0UsT0FBQTtBQWJKOztBQWVFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWJKOztBQWVFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFiSjs7QUFlRTtFQUNFLG1CQUFBO0FBYko7O0FBZUU7RUFDRSxpQkFBQTtBQWJKOztBQWVFO0VBQ0UsUUFBQTtBQWJKOztBQWVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQWJKOztBQWVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFiSjs7QUFlRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFlRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFlRTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFiSjs7QUFlRTtFQUNFLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQWJKOztBQWdCRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBZEo7O0FBZ0JFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWdCRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQWRKOztBQWdCRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBZEo7O0FBZ0JFO0VBQ0UsWUFBQTtBQWRKOztBQWdCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFnQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBZEo7O0FBa0JBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0LWRldGFpbC9yZXF1ZXN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250ZW50IHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4udGV4dC1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBjb2xvcjogIzIxMzEzZjtcclxuICAvLyBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvLyAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLy8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbmlvbi1pdGVtLml0ZW0taGFzLWZvY3VzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8vIGN1c3RvbSBhZGQgY29tbWVudFxyXG4uYWRkLWNvbW1lbnQtaXRlbSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbi5hZGQtaW1hZ2UtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjMjEzMTNmO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG4uaWNvbi1zZW5kIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG59XHJcbmlvbi1pdGVtLml0ZW0taGFzLXZhbHVlIHtcclxuICAuaWNvbi1zZW5kIHtcclxuICAgIGNvbG9yOiAjMDA5YWM5O1xyXG4gIH1cclxufVxyXG4uaW5wdXQtYXJlYSB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgbWF4LWhlaWdodDogMTEwcHg7XHJcbn1cclxuXHJcbi8vIGN1c3RvbSBpbWFnZSBncmlkXHJcbi5ncmlkIHtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG4uZ3JpZGl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy9jdXN0b20gc2hvd21vcmUgcGFyYWdyYXBoXHJcbi5ib3gge1xyXG4gIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwOWFjOTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcclxuICAgIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDVweDtcclxuICB9XHJcblxyXG4gIGlucHV0OmNoZWNrZWQgKyBwIHtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIG5ldyBjc3MgPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLnJlcXVlc3QtaGVhZGVyLWRldGFpbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzE0NDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmJhY2stYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICAuaW9uLWJhY2stYnV0dG9uIHtcclxuICAgICAgLS1pY29uLWZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDAgMCAjZjhmOWZhO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlcXVlc3QtY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6IDEwMHB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIC5yZXF1ZXN0LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgfVxyXG4gIC5yZXF1ZXN0LWNhcmQtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAudXBkYXRlLXRpbWUge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICB9XHJcbiAgICAuYmFkZ2Utc3RhdHVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA4cHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmJhZGdlLWRhbmdlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkMxNDQ7XHJcbiAgICB9XHJcbiAgICAuYmFkZ2Utd2FybmluZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMmM5NGM7XHJcbiAgICB9XHJcbiAgICAuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzM2E1NGM7XHJcbiAgICB9XHJcbiAgICAuYmFkZ2UtY2FuY2VsIHtcclxuICAgICAgYmFja2dyb3VuZDogI2QzZDZkOTtcclxuICAgIH1cclxuICB9XHJcbiAgLmRldGFpbC1jb250ZW50LWJsb2NrIHtcclxuICAgIC5pb24taXRlbS1ibG9jayB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgIH1cclxuICAgIC5pb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaW9uLWl0ZW0tbGFibGUge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzIyMWMxZTtcclxuICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5pb24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ1dHRvbi1leHBhbmQge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAuZXhwYW5kLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXF1ZXN0LWRldGFpbC1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIC0tcGFkZGluZy10b3A6IDg1cHg7XHJcbiAgLy8gY3VzdG9tIGxpc3QgY2hhdFxyXG4gIC5saXN0LWNoYXQtY29udGVudCB7XHJcbiAgICAtLW92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIHtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZSAudXNlci1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctaW5mbyBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICMyMTMxM2Y7XHJcbiAgfVxyXG4gIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlIC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY1ZjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC51c2VyLWltZyB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLmxlZnQgLm1zZy1kZXRhaWwgLm1zZy1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzIxMzEzZjtcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5sZWZ0IC5tc2ctZGV0YWlsIC5tc2ctY29udGVudCBzcGFuLnRyaWFuZ2xlIHtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC5tc2ctZGV0YWlsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5tZXNzYWdlLXdyYXAgLm1lc3NhZ2UucmlnaHQgLm1zZy1kZXRhaWwgLm1zZy1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAubWVzc2FnZS13cmFwIC5tZXNzYWdlLnJpZ2h0IC51c2VyLWltZyB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCBpb24tc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNTBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMzEzZjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2Utd3JhcCAubWVzc2FnZS5yaWdodCAubXNnLWRldGFpbCAubXNnLWNvbnRlbnQgc3Bhbi50cmlhbmdsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgcmlnaHQ6IC01cHg7XHJcbiAgfVxyXG4gIC5kZXZpZGVyLWxpbmUge1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNWY1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jaGF0LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IDE2cHggMTBweCAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzZjtcclxuICB9XHJcbiAgLm1zZy1pbWFnZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLy8gY3VzdG9tIGltYWdlIGdhbGxlcnlcclxuICAuaW1hZ2UtZ3JpZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG4gIC5pbWFnZS1yb3cge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLmltYWdlLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmltYWdlLWNvbC0xIHtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmltYWdlLWNvbC0yIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuaW1hZ2UtY29sLXJpZ2h0LWJvdHRvbSB7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgfVxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzIxMzEzZjtcclxuICB9XHJcbn1cclxuXHJcbi5kZXZpZGVyLWxpbmUtY3VzdG9tIHtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgI2U5ZTllOTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestDetailPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-request-detail',
            templateUrl: './request-detail.page.html',
            styleUrls: ['./request-detail.page.scss']
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

    },

    /***/
    "RfDh":
    /*!***************************************************************!*\
      !*** ./src/app/pages/request-detail/request-detail.module.ts ***!
      \***************************************************************/

    /*! exports provided: RequestDetailPageModule */

    /***/
    function RfDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestDetailPageModule", function () {
        return RequestDetailPageModule;
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


      var _request_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./request-detail.page */
      "+Yw/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var routes = [{
        path: '',
        component: _request_detail_page__WEBPACK_IMPORTED_MODULE_5__["RequestDetailPage"]
      }];

      var RequestDetailPageModule = function RequestDetailPageModule() {
        _classCallCheck(this, RequestDetailPageModule);
      };

      RequestDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RequestDetailPageModule
      });
      RequestDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RequestDetailPageModule_Factory(t) {
          return new (t || RequestDetailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestDetailPageModule, {
          declarations: [_request_detail_page__WEBPACK_IMPORTED_MODULE_5__["RequestDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestDetailPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_request_detail_page__WEBPACK_IMPORTED_MODULE_5__["RequestDetailPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-request-detail-request-detail-module-es5.js.map