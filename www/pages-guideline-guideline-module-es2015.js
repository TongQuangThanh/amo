(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-guideline-guideline-module"],{

/***/ "E5pf":
/*!***************************************************!*\
  !*** ./src/app/pages/guideline/guideline.page.ts ***!
  \***************************************************/
/*! exports provided: GuidelinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelinePage", function() { return GuidelinePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../translate-config.service */ "ZjVV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






class GuidelinePage {
    constructor(translateConfigService) {
        this.translateConfigService = translateConfigService;
        this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }
    ngOnInit() {
    }
}
GuidelinePage.ɵfac = function GuidelinePage_Factory(t) { return new (t || GuidelinePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"])); };
GuidelinePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuidelinePage, selectors: [["app-guideline"]], decls: 12, vars: 3, consts: [[1, "ion-no-border", "guideline-header"], [1, "back-button"], ["color", "light", "text", "", "icon", "chevron-back", 1, "ion-back-button"], [1, "header-title"], [1, "paragraph"], [1, "guideline-content"]], template: function GuidelinePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "GUIDELINE.title"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".paragraph[_ngcontent-%COMP%] {\n  margin: 20px 20px;\n}\n\n.guideline-content[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 21px;\n  color: #21313F;\n}\n\n.guideline-header[_ngcontent-%COMP%] {\n  background-color: #FFC144;\n  height: 135px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.guideline-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 60px;\n}\n\n.guideline-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   .ion-back-button[_ngcontent-%COMP%] {\n  --icon-font-size: 22px;\n  margin-left: 0;\n  width: 25px;\n}\n\n.guideline-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: Open Sans;\n  font-style: normal;\n  font-weight: bold;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  top: 57px;\n  font-size: 28px;\n  line-height: 41px;\n  color: #ffffff;\n}\n\n.guideline-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 25px;\n  left: -1px;\n  right: -1px;\n  box-shadow: 0 30px 0 0 #ffffff;\n  height: 20px;\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3VpZGVsaW5lL2d1aWRlbGluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFFTjs7QUFETTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFHUjs7QUFBSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRU47O0FBQUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBRU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ndWlkZWxpbmUvZ3VpZGVsaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhZ3JhcGgge1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbn1cclxuLmd1aWRlbGluZS1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogIzIxMzEzRjtcclxufVxyXG5cclxuXHJcbi5ndWlkZWxpbmUtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxNDQ7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmJhY2stYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICB0b3A6IDYwcHg7XHJcbiAgICAgIC5pb24tYmFjay1idXR0b24ge1xyXG4gICAgICAgIC0taWNvbi1mb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTVweDtcclxuICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgIHRvcDogNTdweDtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDFweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAyNXB4O1xyXG4gICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICByaWdodDogLTFweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAzMHB4IDAgMCAjZmZmZmZmO1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidelinePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guideline',
                templateUrl: './guideline.page.html',
                styleUrls: ['./guideline.page.scss'],
            }]
    }], function () { return [{ type: _translate_config_service__WEBPACK_IMPORTED_MODULE_1__["TranslateConfigService"] }]; }, null); })();


/***/ }),

/***/ "l1Ah":
/*!*****************************************************!*\
  !*** ./src/app/pages/guideline/guideline.module.ts ***!
  \*****************************************************/
/*! exports provided: GuidelinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelinePageModule", function() { return GuidelinePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _guideline_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guideline-routing.module */ "sIfA");
/* harmony import */ var _guideline_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guideline.page */ "E5pf");








class GuidelinePageModule {
}
GuidelinePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuidelinePageModule });
GuidelinePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuidelinePageModule_Factory(t) { return new (t || GuidelinePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _guideline_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuidelinePageRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuidelinePageModule, { declarations: [_guideline_page__WEBPACK_IMPORTED_MODULE_6__["GuidelinePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _guideline_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuidelinePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidelinePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    _guideline_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuidelinePageRoutingModule"]
                ],
                declarations: [_guideline_page__WEBPACK_IMPORTED_MODULE_6__["GuidelinePage"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sIfA":
/*!*************************************************************!*\
  !*** ./src/app/pages/guideline/guideline-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GuidelinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelinePageRoutingModule", function() { return GuidelinePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _guideline_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guideline.page */ "E5pf");






const routes = [
    {
        path: '',
        component: _guideline_page__WEBPACK_IMPORTED_MODULE_3__["GuidelinePage"]
    }
];
class GuidelinePageRoutingModule {
}
GuidelinePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuidelinePageRoutingModule });
GuidelinePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuidelinePageRoutingModule_Factory(t) { return new (t || GuidelinePageRoutingModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuidelinePageRoutingModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuidelinePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-guideline-guideline-module-es2015.js.map