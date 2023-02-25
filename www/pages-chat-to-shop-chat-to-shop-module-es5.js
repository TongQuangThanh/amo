(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-to-shop-chat-to-shop-module"], {
    /***/
    "df2B":
    /*!*********************************************************!*\
      !*** ./src/app/pages/chat-to-shop/chat-to-shop.page.ts ***!
      \*********************************************************/

    /*! exports provided: ChatToShopPage */

    /***/
    function df2B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatToShopPage", function () {
        return ChatToShopPage;
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


      var _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/alert/alert.service */
      "kyzu");
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

      var _c0 = ["content"];

      function ChatToShopPage_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-avatar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r4.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.name);
        }
      }

      function ChatToShopPage_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.message);
        }
      }

      function ChatToShopPage_div_8_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r4.images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ChatToShopPage_div_8_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r4.message);
        }
      }

      function ChatToShopPage_div_8_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", message_r4.images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ChatToShopPage_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatToShopPage_div_8_div_1_Template, 5, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatToShopPage_div_8_div_2_Template, 3, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatToShopPage_div_8_div_3_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatToShopPage_div_8_div_4_Template, 3, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatToShopPage_div_8_div_5_Template, 2, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ion-item-message ", ctx_r1.getMarginTop(message_r4), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r4.type == "left" && (message_r4.message != "" || message_r4.images != ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r4.type == "left" && message_r4.message != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r4.type == "left" && message_r4.message == "" && message_r4.images != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r4.type == "right" && message_r4.message != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r4.type == "right" && message_r4.message == "" && message_r4.images != "");
        }
      }

      function ChatToShopPage_ion_button_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ChatToShopPage_ion_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatToShopPage_ion_button_18_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.eventButtonSendMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ChatToShopPage = /*#__PURE__*/function () {
        function ChatToShopPage(modalController, camera, actionSheetController, loading, navCtrl, apiService, route, translate, alertService) {
          _classCallCheck(this, ChatToShopPage);

          this.modalController = modalController;
          this.camera = camera;
          this.actionSheetController = actionSheetController;
          this.loading = loading;
          this.navCtrl = navCtrl;
          this.apiService = apiService;
          this.route = route;
          this.translate = translate;
          this.alertService = alertService;

          this.blobToFile = function (theBlob, fileName) {
            var b = theBlob; //A Blob() is almost a File() - it's just missing the two properties below which we will add

            b.lastModifiedDate = new Date();
            b.name = fileName; //Cast to a File() type

            return theBlob;
          };
        }

        _createClass(ChatToShopPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data_history = JSON.parse(localStorage.getItem('data-order-history'));
            this.flag_user = "";
            this.data_chat = [{
              type: 'left',
              avatar: "../assets/images/services/9.jpg",
              message: "Chào ban, chúng tôi có thể giúp gì được cho bạn",
              images: ""
            }, {
              type: 'left',
              avatar: "../assets/images/services/9.jpg",
              message: "",
              images: "../assets/images/services/9.jpg"
            }, {
              type: 'right',
              avatar: "../assets/images/services/9.jpg",
              message: "Tôi đặt hàng lâu rồi mà không thấy shop giao đến"
            }, {
              type: 'right',
              avatar: "../assets/images/services/9.jpg",
              message: "",
              images: "../assets/images/services/9.jpg"
            }];
            this.message_content = "";
            this.list_image_select = [];
            this.getAllOrderHistoryComment();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.content.scrollToBottom(0);
          }
        }, {
          key: "getMarginTop",
          value: function getMarginTop(message) {
            if (this.flag_user != message.type) {
              this.flag_user = message.type;
              return 'margin-top-20';
            } else {
              return '';
            }
          }
        }, {
          key: "getAllOrderHistoryComment",
          value: function getAllOrderHistoryComment() {
            var self = this;
            this.data_chat = [];
            this.loading.present();
            this.apiService.getcommentOrderV2(this.data_history._id).subscribe(function (result) {
              var listComment = result.orderHistoryCommentsV2;
              listComment.forEach(function (comment) {
                var type = 'left';

                if (comment.createdBy._id == self.data_history.createdBy._id) {
                  type = 'right';
                }

                if (comment.attachments.length > 0) {
                  comment.attachments.forEach(function (attachments) {
                    var object = {
                      type: type,
                      avatar: comment.createdBy.avatar,
                      name: comment.createdBy.displayName,
                      message: "",
                      images: attachments.url
                    };
                    self.data_chat.push(object);
                  });
                } else {
                  var object = {
                    type: type,
                    avatar: comment.createdBy.avatar,
                    name: comment.createdBy.displayName,
                    message: comment.content,
                    images: ""
                  };
                  self.data_chat.push(object);
                }
              });
              self.loading.dismiss();
              setTimeout(function () {
                self.content.scrollToBottom(100);
              }, 200);
            }, function (error) {
              self.loading.dismiss();
            });
          }
        }, {
          key: "eventButtonSendMessage",
          value: function eventButtonSendMessage() {
            var self = this;
            var param = {
              orderHistoryId: this.data_history._id,
              attachments: [],
              content: self.message_content
            };
            this.loading.present();
            this.apiService.postCommentOrderV2(param).subscribe(function (result) {
              self.data_chat.push({
                type: 'right',
                avatar: "",
                message: self.message_content
              });
              self.message_content = "";
              self.loading.dismiss();
              setTimeout(function () {
                self.content.scrollToBottom(100);
              }, 200);
            }, function (error) {
              self.loading.dismiss();
              self.alertService.presentToast('Send message fail');
            });
          }
        }, {
          key: "eventSendImage",
          value: function eventSendImage() {
            var self = this;
            var listAttachments = [];
            var data_chat_image = [];

            for (var i = 0; i < self.list_image_select.length; i++) {
              listAttachments.push(self.list_image_select[i].media);
              data_chat_image.push({
                type: 'right',
                avatar: "",
                message: "",
                images: self.list_image_select[i].media.url
              });
            }

            var param = {
              orderHistoryId: this.data_history._id,
              attachments: listAttachments,
              content: " "
            };
            if (listAttachments.length == 0) return;
            this.loading.present();
            this.apiService.postCommentOrderV2(param).subscribe(function (result) {
              self.data_chat = self.data_chat.concat(data_chat_image);
              self.list_image_select = [];
              self.loading.dismiss();
              setTimeout(function () {
                self.content.scrollToBottom(100);
              }, 300);
            }, function (error) {
              self.loading.dismiss();
              self.alertService.presentToast('Send image fail');
            });
          } // select image

        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

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
                            _this.checkPicturePermission(_this.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: this.translate.instant('COMMON.form_select_image_camera'),
                          handler: function handler() {
                            _this.checkPicturePermission(_this.camera.PictureSourceType.CAMERA);
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
            var _this2 = this;

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

              var binaryBlob = _this2.convertBase64ToBlob(base64Define + imageData);

              var date = new Date().valueOf();
              var formData = new FormData();
              var fileName = "amoapp" + date + ".jpg";
              var myFile = self.blobToFile(binaryBlob, fileName);
              var payload = new FormData();
              payload.append('media', binaryBlob, fileName);

              _this2.apiService.uploadImage(payload).subscribe(function (result) {
                self.list_image_select = [];
                self.list_image_select.push(result);
                self.eventSendImage();
              }, function (error) {});
            }, function (err) {});
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

        return ChatToShopPage;
      }();

      ChatToShopPage.ɵfac = function ChatToShopPage_Factory(t) {
        return new (t || ChatToShopPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]));
      };

      ChatToShopPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ChatToShopPage,
        selectors: [["app-chat-to-shop"]],
        viewQuery: function ChatToShopPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        decls: 19,
        vars: 8,
        consts: [[1, "order-chat-header"], [1, "back-button"], ["text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], ["content", ""], ["lines", "full", 1, "ion-no-margin", "ion-no-padding", "padding-top-10", "padding-bottom-20", "ion-list-class"], [3, "class", 4, "ngFor", "ngForOf"], [1, "full-width", "function-section", "shadow-section", "center-div"], [1, "col-2", "center-div"], ["expand", "block", 1, "button-section", 3, "click"], ["src", "../assets/icon/svg/icon-select-image.svg", 1, "icon-select-image"], [1, "col-8", "center-div", "div-text-area-1"], ["auto-grow", "true", "rows", "1", 1, "text-area-1", 3, "placeholder", "ngModel", "ngModelChange"], ["expand", "block", "class", "button-section", 4, "ngIf"], ["expand", "block", "class", "button-section", 3, "click", 4, "ngIf"], ["class", "div-avatar", 4, "ngIf"], ["class", "col-7 div-label-message-left", 4, "ngIf"], ["class", "col-7 div-image-message-left", 4, "ngIf"], ["class", "col-7 div-label-message-right", "slot", "end", 4, "ngIf"], ["class", "col-7 div-image-message-right", "slot", "end", 4, "ngIf"], [1, "div-avatar"], [3, "src"], [1, "col-7", "div-label-message-left"], [1, "label-message-left"], [1, "col-7", "div-image-message-left"], [1, "", 3, "src"], ["slot", "end", 1, "col-7", "div-label-message-right"], [1, "label-message-right"], ["slot", "end", 1, "col-7", "div-image-message-right"], ["expand", "block", 1, "button-section"], ["src", "../assets/icon/svg/icon-send-inactive.svg", 1, "icon-send-inactive"], ["src", "../assets/icon/svg/icon-send-active.svg", 1, "icon-send-active"]],
        template: function ChatToShopPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-list", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChatToShopPage_div_8_Template, 6, 8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatToShopPage_Template_ion_button_click_11_listener() {
              return ctx.selectImage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-textarea", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatToShopPage_Template_ion_textarea_ngModelChange_14_listener($event) {
              return ctx.message_content = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ChatToShopPage_ion_button_17_Template, 2, 0, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ChatToShopPage_ion_button_18_Template, 2, 0, "ion-button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data_history.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data_chat);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, "SEVICE_10.placeholder_textarea"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.message_content);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message_content == "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message_content != "");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonAvatar"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n}\n\n.ion-color-primary[_ngcontent-%COMP%] {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: #FFC144 !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\nsuper-tab-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #7a838c;\n  text-transform: unset;\n}\n\nsuper-tab-button.active[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.order-chat-header[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  background-color: #ffffff;\n  height: 60px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.order-chat-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 13px;\n}\n\n.order-chat-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 5px;\n  display: block;\n  width: 25px;\n  color: #666666;\n}\n\n.order-chat-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #221c1e;\n  margin-left: 35px;\n}\n\n.ion-list-class[_ngcontent-%COMP%] {\n  padding-left: 17px;\n  padding-right: 17px;\n}\n\n.margin-top-20[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.margin-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.center-div[_ngcontent-%COMP%] {\n  display: inline-grid;\n  vertical-align: middle;\n  align-items: center;\n}\n\n.line-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #f4f5f5;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.line-bottom-10[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n  border-bottom: 10px solid #f4f5f5;\n}\n\n.margin-top-15[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.function-section[_ngcontent-%COMP%] {\n  z-index: 999;\n  bottom: 0px;\n  width: 100%;\n  padding: 10px 0px;\n  display: flex;\n}\n\n.padding-top-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.padding-bottom-20[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.text-area-1[_ngcontent-%COMP%] {\n  padding-left: 13px;\n  max-height: 110px;\n}\n\n.div-text-area-1[_ngcontent-%COMP%] {\n  border: 1px solid #d3d6d9;\n  box-sizing: border-box;\n  border-radius: 8px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.button-section[_ngcontent-%COMP%] {\n  --background: transparent;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --background-activated-opacity: 1;\n  --background-focused-opacity: 1;\n  --background-hover-opacity: 1;\n  --box-shadow: unset;\n}\n\n.shadow-section[_ngcontent-%COMP%] {\n  box-shadow: 0px -20px 20px 0px rgba(37, 34, 77, 0.1);\n}\n\n.label-message-left[_ngcontent-%COMP%] {\n  text-overflow: unset;\n  white-space: pre-wrap;\n  overflow: unset;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.div-label-message-left[_ngcontent-%COMP%] {\n  background: #e9ebec;\n  border-radius: 8px;\n  padding: 10px 10px;\n  margin-left: 35px;\n}\n\n.div-image-message-left[_ngcontent-%COMP%] {\n  margin-left: 35px;\n}\n\n.ion-item-message[_ngcontent-%COMP%] {\n  --border-width: 0;\n  margin-bottom: 10px;\n  --min-height: 0px;\n}\n\n.div-avatar[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.div-avatar[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 18px;\n  color: #21313f;\n}\n\n.div-avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n}\n\n.div-label-message-right[_ngcontent-%COMP%] {\n  background: #21313f;\n  border-radius: 8px;\n  padding: 10px 10px;\n  float: right;\n  margin-top: 5px;\n}\n\n.label-message-right[_ngcontent-%COMP%] {\n  text-overflow: unset;\n  white-space: pre-wrap;\n  overflow: unset;\n  font-size: 16px;\n  line-height: 24px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC10by1zaG9wL2NoYXQtdG8tc2hvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUNBO0VBQ0Usb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdDQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFEQTtFQUNFLGNBQUE7QUFJRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUFJRjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFLSjs7QUFKSTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFNTjs7QUFIRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBS0o7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGlCQUFBO0FBUUY7O0FBTkE7RUFDRSx3QkFBQTtFQUNBLG9CQUFBO0FBU0Y7O0FBTkE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFQQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQVVGOztBQVJBOzs7Ozs7Ozs7Ozs7RUFZRSxVQUFBO0FBV0Y7O0FBVEE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFZRjs7QUFWQTtFQUNFLGdCQUFBO0FBYUY7O0FBWEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7QUFhRjs7QUFWQTtFQUNFLGlCQUFBO0FBYUY7O0FBWEE7RUFDRSxvQkFBQTtBQWNGOztBQVpBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQWVGOztBQWJBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBZ0JGOztBQWRBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBaUJGOztBQWZBO0VBQ0Usb0RBQUE7QUFrQkY7O0FBaEJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFtQkY7O0FBakJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsaUJBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBc0JGOztBQXBCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXVCRjs7QUFyQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBdUJKOztBQXBCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUF1QkY7O0FBckJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF3QkY7O0FBdEJBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBeUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhdC10by1zaG9wL2NoYXQtdG8tc2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pb24tY29sb3ItcHJpbWFyeSB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDogI0ZGQzE0NCAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xyXG59XHJcbnN1cGVyLXRhYi1idXR0b24gaW9uLWxhYmVsIHtcclxuICBjb2xvcjogIzdhODM4YztcclxuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XHJcbn1cclxuc3VwZXItdGFiLWJ1dHRvbi5hY3RpdmUgaW9uLWxhYmVsIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm9yZGVyLWNoYXQtaGVhZGVyIHtcclxuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gIC5iYWNrLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgLmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgIC0taWNvbi1mb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oZWFkZXItdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjMjIxYzFlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgfVxyXG59XHJcbi5pb24tbGlzdC1jbGFzcyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbn1cclxuLm1hcmdpbi10b3AtMjAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm1hcmdpbi10b3AtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG59XHJcblxyXG4uY2VudGVyLWRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5saW5lLWJvdHRvbSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjVmNTtcclxufVxyXG4uY29sLTEsXHJcbi5jb2wtMixcclxuLmNvbC0zLFxyXG4uY29sLTQsXHJcbi5jb2wtNSxcclxuLmNvbC02LFxyXG4uY29sLTcsXHJcbi5jb2wtOCxcclxuLmNvbC05LFxyXG4uY29sLTEwLFxyXG4uY29sLTExLFxyXG4uY29sLTEyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5saW5lLWJvdHRvbS0xMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNmNGY1ZjU7XHJcbn1cclxuLm1hcmdpbi10b3AtMTUge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmZ1bmN0aW9uLXNlY3Rpb24ge1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBib3R0b206IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcC0xMCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLnBhZGRpbmctYm90dG9tLTIwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4udGV4dC1hcmVhLTEge1xyXG4gIHBhZGRpbmctbGVmdDogMTNweDtcclxuICBtYXgtaGVpZ2h0OiAxMTBweDtcclxufVxyXG4uZGl2LXRleHQtYXJlYS0xIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmQ5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmJ1dHRvbi1zZWN0aW9uIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAxO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6IDE7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDE7XHJcbiAgLS1ib3gtc2hhZG93OiB1bnNldDtcclxufVxyXG4uc2hhZG93LXNlY3Rpb24ge1xyXG4gIGJveC1zaGFkb3c6IDBweCAtMjBweCAyMHB4IDBweCByZ2JhKDM3LCAzNCwgNzcsIDAuMSk7XHJcbn1cclxuLmxhYmVsLW1lc3NhZ2UtbGVmdCB7XHJcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIG92ZXJmbG93OiB1bnNldDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuLmRpdi1sYWJlbC1tZXNzYWdlLWxlZnQge1xyXG4gIGJhY2tncm91bmQ6ICNlOWViZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICBtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG4uZGl2LWltYWdlLW1lc3NhZ2UtbGVmdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbn1cclxuLmlvbi1pdGVtLW1lc3NhZ2Uge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgLS1taW4taGVpZ2h0OiAwcHg7XHJcbn1cclxuLmRpdi1hdmF0YXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogIzIxMzEzZjtcclxuICB9XHJcbn1cclxuLmRpdi1hdmF0YXIgaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5kaXYtbGFiZWwtbWVzc2FnZS1yaWdodCB7XHJcbiAgYmFja2dyb3VuZDogIzIxMzEzZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmxhYmVsLW1lc3NhZ2UtcmlnaHQge1xyXG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBvdmVyZmxvdzogdW5zZXQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatToShopPage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-chat-to-shop',
            templateUrl: './chat-to-shop.page.html',
            styleUrls: ['./chat-to-shop.page.scss']
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
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }, {
            type: _services_alert_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
          }];
        }, {
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['content']
          }]
        });
      })();
      /***/

    },

    /***/
    "dwbR":
    /*!***********************************************************!*\
      !*** ./src/app/pages/chat-to-shop/chat-to-shop.module.ts ***!
      \***********************************************************/

    /*! exports provided: ChatToShopPageModule */

    /***/
    function dwbR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatToShopPageModule", function () {
        return ChatToShopPageModule;
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


      var _chat_to_shop_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-to-shop.page */
      "df2B");
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
        component: _chat_to_shop_page__WEBPACK_IMPORTED_MODULE_5__["ChatToShopPage"]
      }];

      var ChatToShopPageModule = function ChatToShopPageModule() {
        _classCallCheck(this, ChatToShopPageModule);
      };

      ChatToShopPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ChatToShopPageModule
      });
      ChatToShopPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ChatToShopPageModule_Factory(t) {
          return new (t || ChatToShopPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatToShopPageModule, {
          declarations: [_chat_to_shop_page__WEBPACK_IMPORTED_MODULE_5__["ChatToShopPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatToShopPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            declarations: [_chat_to_shop_page__WEBPACK_IMPORTED_MODULE_5__["ChatToShopPage"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-chat-to-shop-chat-to-shop-module-es5.js.map