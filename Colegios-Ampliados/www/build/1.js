webpackJsonp([1],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, menu, translate, platform) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.dir = platform.dir();
        this.slides = [
            {
                title: "Colegios Ampliados",
                description: "Colegios ampliados",
                image: 'assets/img/ica-slidebox-img-1.png',
            },
            {
                title: "Hola Mudno",
                description: "Hola Mudno",
                image: 'assets/img/ica-slidebox-img-2.png',
            },
            {
                title: "Hola Mudno",
                description: "Hola Mudno",
                image: 'assets/img/ica-slidebox-img-3.png',
            }
        ];
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot('WelcomePage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"D:\Capacitacion\ProyectoAppfinal\Campo-alto-155-Colegios-Ampliados\Colegios-Ampliados\src\pages\tutorial\tutorial.html"*/'<ion-header no-shadow>\n\n  <ion-navbar>\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="primary">Saltar</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)">\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img [src]="slide.image" class="slide-image" />\n\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n\n      <p [innerHTML]="slide.description"></p>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <img src="assets/img/proyectologo.png" class="slide-image" />\n\n      <h2 class="slide-title">Ya estás listo para iniciar</h2>\n\n      <button ion-button icon-end large clear (click)="startApp()">\n\n        Empezar\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Capacitacion\ProyectoAppfinal\Campo-alto-155-Colegios-Ampliados\Colegios-Ampliados\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ })

});
//# sourceMappingURL=1.js.map