(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-board/game-board.component */ "./src/app/game-board/game-board.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");





var routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: 'gameStart', component: _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_3__["GameBoardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <script>\n    var myVar;    \n    function showImage(){\n      alert(\"inside show Image\");\n        if(this.gameStatus)\n        {\n          stopFunction();\n        }\n        $(\"#status\").click();\n        myVar = setTimeout(showImage, 2000);\n        alert(\"exit show Image\")\n    }\n    function stopFunction(){\n        clearTimeout(myVar); // stop the timer\n    }\n    $(document).onload(function(){\n      console.log(\"inside show Image\");\n        showImage();\n    });\n    </script>\n</head>\n<app-menu></app-menu>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'cj-app';
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['']);
    };
    AppComponent.prototype.playGame = function () {
        this.router.navigateByUrl('gameStart');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _lead_dashboard_lead_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lead-dashboard/lead-dashboard.component */ "./src/app/lead-dashboard/lead-dashboard.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game-board/game-board.component */ "./src/app/game-board/game-board.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _lead_dashboard_lead_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["LeadDashboardComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _game_board_game_board_component__WEBPACK_IMPORTED_MODULE_10__["GameBoardComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game-board/game-board.component.html":
/*!******************************************************!*\
  !*** ./src/app/game-board/game-board.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div>\n  <h1 class=\"headerMessage\">{{gameStatus}}</h1>\n  </div>\n  <div class=\"board\">\n    <div class=\"game\"><p class=\"gameId\">#GameId- {{player.gameId}}</p></div>\n  <div class=\"player\"><p class=\"aboveMessage\">player Id- <b><span style=\"font-size:15px;\">{{player.playerId}}</span></b></p></div>\n    <div class=\"ticket\">\n      <div style=\"float: left;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[1].showGreen\">{{boxNumb[1].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[2].showGreen\">{{boxNumb[2].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[3].showGreen\">{{boxNumb[3].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[1].showCross\">&#10006; {{boxNumb[1].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[2].showCross\">&#10006; {{boxNumb[2].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[3].showCross\">&#10006; {{boxNumb[3].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[1].showCross && !boxNumb[1].showGreen\" >{{boxNumb[1].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[2].showCross && !boxNumb[2].showGreen\">{{boxNumb[2].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[3].showCross && !boxNumb[3].showGreen\">{{boxNumb[3].num}}</div>\n      </div>\n      <div  style=\"float: right;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[4].showGreen\">{{boxNumb[4].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[5].showGreen\">{{boxNumb[5].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[6].showGreen\">{{boxNumb[6].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[4].showCross\">&#10006; {{boxNumb[4].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[5].showCross\">&#10006; {{boxNumb[5].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[6].showCross\">&#10006; {{boxNumb[6].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[4].showCross && !boxNumb[4].showGreen\" >{{boxNumb[4].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[5].showCross && !boxNumb[5].showGreen\">{{boxNumb[5].num}} </div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[6].showCross && !boxNumb[6].showGreen\">{{boxNumb[6].num}}</div>\n      </div>\n      <div style=\"float: left;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[7].showGreen\">{{boxNumb[7].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[8].showGreen\">{{boxNumb[8].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[9].showGreen\">{{boxNumb[9].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[7].showCross\">&#10006; {{boxNumb[7].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[8].showCross\">&#10006; {{boxNumb[8].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[9].showCross\">&#10006; {{boxNumb[9].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[7].showCross && !boxNumb[7].showGreen\" >{{boxNumb[7].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[8].showCross && !boxNumb[8].showGreen\">{{boxNumb[8].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[9].showCross && !boxNumb[9].showGreen\">{{boxNumb[9].num}}</div>\n      </div>\n      <div  style=\"float: right;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[10].showGreen\">{{boxNumb[10].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[11].showGreen\">{{boxNumb[11].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[12].showGreen\">{{boxNumb[12].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[10].showCross\">&#10006; {{boxNumb[10].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[11].showCross\">&#10006; {{boxNumb[11].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[12].showCross\">&#10006; {{boxNumb[12].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[10].showCross && !boxNumb[10].showGreen\" >{{boxNumb[10].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[11].showCross && !boxNumb[11].showGreen\">{{boxNumb[11].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[12].showCross && !boxNumb[12].showGreen\">{{boxNumb[12].num}}</div>\n      </div>\n      <div style=\"float: left;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[13].showGreen\">{{boxNumb[13].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[14].showGreen\">{{boxNumb[14].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[15].showGreen\">{{boxNumb[15].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[13].showCross\">&#10006; {{boxNumb[13].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[14].showCross\">&#10006; {{boxNumb[14].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[15].showCross\">&#10006; {{boxNumb[15].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[13].showCross && !boxNumb[13].showGreen\" >{{boxNumb[13].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[14].showCross && !boxNumb[14].showGreen\">{{boxNumb[14].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[15].showCross && !boxNumb[15].showGreen\">{{boxNumb[15].num}}</div>\n      </div>\n      <div  style=\"float: right;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[16].showGreen\">{{boxNumb[16].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[17].showGreen\">{{boxNumb[17].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[18].showGreen\">{{boxNumb[18].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[16].showCross\">&#10006; {{boxNumb[16].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[17].showCross\">&#10006; {{boxNumb[17].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[18].showCross\">&#10006; {{boxNumb[18].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[16].showCross && !boxNumb[16].showGreen\" >{{boxNumb[16].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[17].showCross && !boxNumb[17].showGreen\">{{boxNumb[17].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[18].showCross && !boxNumb[18].showGreen\">{{boxNumb[18].num}}</div>\n      </div>\n      <div style=\"float: left;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[19].showGreen\">{{boxNumb[19].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[20].showGreen\">{{boxNumb[20].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[21].showGreen\">{{boxNumb[21].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[19].showCross\">&#10006; {{boxNumb[19].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[20].showCross\">&#10006; {{boxNumb[20].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[21].showCross\">&#10006; {{boxNumb[21].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[19].showCross && !boxNumb[19].showGreen\" >{{boxNumb[19].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[20].showCross && !boxNumb[20].showGreen\">{{boxNumb[20].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[21].showCross && !boxNumb[21].showGreen\">{{boxNumb[21].num}}</div>\n      </div>\n      <div  style=\"float: right;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[22].showGreen\">{{boxNumb[22].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[23].showGreen\">{{boxNumb[23].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[24].showGreen\">{{boxNumb[24].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[22].showCross\">&#10006; {{boxNumb[22].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[23].showCross\">&#10006; {{boxNumb[23].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[24].showCross\">&#10006; {{boxNumb[24].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[22].showCross && !boxNumb[22].showGreen\" >{{boxNumb[22].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[23].showCross && !boxNumb[23].showGreen\">{{boxNumb[23].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[24].showCross && !boxNumb[24].showGreen\">{{boxNumb[24].num}}</div>\n      </div>\n      <div  style=\"float: left;\">\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[25].showGreen\">{{boxNumb[25].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[26].showGreen\">{{boxNumb[26].num}}</div>\n        <div class=\"block1\" style=\"background-color: green;\" *ngIf=\"boxNumb[27].showGreen\">{{boxNumb[27].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[25].showCross\">&#10006; {{boxNumb[25].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[26].showCross\">&#10006; {{boxNumb[26].num}}</div>\n        <div class=\"block1\" *ngIf=\"boxNumb[27].showCross\">&#10006; {{boxNumb[27].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[25].showCross && ! boxNumb[25].showGreen\" >{{boxNumb[25].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[26].showCross && ! boxNumb[26].showGreen\">{{boxNumb[26].num}}</div>\n        <div class=\"block1\" *ngIf=\"! boxNumb[27].showCross && ! boxNumb[27].showGreen\">{{boxNumb[27].num}}</div>\n      </div>\n    </div>\n\n    <p class=\"belowMessage\">#StayAtHomeTambola</p>\n  </div>\n  <button id=\"start\" class=\"btn btn-primary\" style=\"margin-top: 3%;margin-left: 50%;\" (click)=startGame()>Start Game</button>\n  <button id=\"end\" class=\"btn btn-primary\" style=\"margin-top: 3%;margin-left: 50%; display: none;\" (click)=endGame()>End Game</button>\n  <button id=\"status\" (click)=checkStatusGame() style=\"display: none;\">  </button>\n  <button id=\"endstatus\" (click)=checkStatusEndGame() style=\"display: none;\">  </button>\n  <input id=\"statusText\" style=\"display: none;\"value={{gameStart}}>\n  <input id=\"statusGame\" style=\"display: none;\" value=\"{{gameStatus}}\">\n  <button id=\"numberDrawn\" (click)=numberDrawn() style=\"display: none;\">  </button>\n</div>"

/***/ }),

/***/ "./src/app/game-board/game-board.component.scss":
/*!******************************************************!*\
  !*** ./src/app/game-board/game-board.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  background-color: orange;\n  width: 600px;\n  height: 400px;\n  border: 1px solid orangered;\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-top: 5%; }\n\n.ticket {\n  background-color: white;\n  width: 544px;\n  height: 150px;\n  border: 2px solid black;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: .9%; }\n\n.block1 {\n  background-color: white;\n  width: 60px;\n  height: 49px;\n  border: 1px solid black;\n  border-top: 0px;\n  color: black;\n  font-size: large;\n  font-weight: 900; }\n\n.headerMessage {\n  margin-top: 8%;\n  margin-left: 35%;\n  font-family: 'Dancing Script', cursive;\n  font-size: 30px;\n  color: palevioletred;\n  margin-bottom: 30px; }\n\n.belowMessage {\n  margin-top: 8%;\n  margin-left: 35%;\n  font-weight: 500;\n  font-size: large;\n  font-style: italic;\n  font-family: Apple Chancery, cursive; }\n\n.player {\n  background-color: white;\n  width: 180px;\n  height: 30px;\n  border: 1px solid black;\n  margin-top: 3%;\n  margin-left: 7%;\n  border-radius: 25px; }\n\n.aboveMessage {\n  margin-left: 10%;\n  font-size: 12px;\n  font-style: italic;\n  font-family: Apple Chancery, cursive; }\n\n.game {\n  height: 30px;\n  margin-left: 7%;\n  margin-top: 10%;\n  font-size: large;\n  font-style: italic;\n  font-weight: 600;\n  font-family: Apple Chancery, cursive; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtYm9hcmQvQzpcXFVzZXJzXFxUaGlzIHBjXFxEZXNrdG9wXFx0YW1ib2xhLWZyb250ZW5kXFx0YW1ib2xhXFxzcmNcXGFwcC9nYW1lLWJvYXJkXFxnYW1lLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdoQjtFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBRUUsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdkMsZUFBZTtFQUNkLG9CQUFtQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFJdEI7RUFFSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG9DQUFvQyxFQUFBOztBQUd4QztFQUVJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUd2QjtFQUVJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG9DQUFvQyxFQUFBOztBQUd4QztFQUVJLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9DQUFvQyxFQUFBIiwiZmlsZSI6ImdhbWUtYm9hcmQvZ2FtZS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm9hcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnRpY2tldCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA1NDRweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAuOSU7XHJcbiAgfVxyXG5cclxuICAuYmxvY2sxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlck1lc3NhZ2Vcclxue1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XHJcblx0ICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjpwYWxldmlvbGV0cmVkO1xyXG5cdCAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuXHJcbi5iZWxvd01lc3NhZ2Vcclxue1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXN0eWxlOml0YWxpYztcclxuICAgIGZvbnQtZmFtaWx5OiBBcHBsZSBDaGFuY2VyeSwgY3Vyc2l2ZTtcclxufVxyXG5cclxuLnBsYXllclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4uYWJvdmVNZXNzYWdlXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7ICAgICAgICAgICBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtc3R5bGU6aXRhbGljO1xyXG4gICAgZm9udC1mYW1pbHk6IEFwcGxlIENoYW5jZXJ5LCBjdXJzaXZlO1xyXG59XHJcblxyXG4uZ2FtZVxyXG57XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1zdHlsZTppdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEFwcGxlIENoYW5jZXJ5LCBjdXJzaXZlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/game-board/game-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/game-board/game-board.component.ts ***!
  \****************************************************/
/*! exports provided: Player, NumberDrawnResponse, BoxNumb, GameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDrawnResponse", function() { return NumberDrawnResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxNumb", function() { return BoxNumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoardComponent", function() { return GameBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lead_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lead-service.service */ "./src/app/lead-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Player = /** @class */ (function () {
    function Player(gameId, playerId, numbArray, allNumberCrossed) {
        this.gameId = gameId;
        this.playerId = playerId;
        this.numbArray = numbArray;
        this.allNumberCrossed = allNumberCrossed;
    }
    return Player;
}());

var NumberDrawnResponse = /** @class */ (function () {
    function NumberDrawnResponse(player, isWinner, numbDrawn) {
        this.player = player;
        this.isWinner = isWinner;
        this.numbDrawn = numbDrawn;
    }
    return NumberDrawnResponse;
}());

var BoxNumb = /** @class */ (function () {
    function BoxNumb(num, pos, showGreen, showCross) {
        this.num = num;
        this.pos = pos;
        this.showCross = showCross;
        this.showGreen = showGreen;
    }
    return BoxNumb;
}());

var GameBoardComponent = /** @class */ (function () {
    function GameBoardComponent(leadService, actroute, router) {
        this.leadService = leadService;
        this.actroute = actroute;
        this.router = router;
        this.numTurn = 1;
    }
    GameBoardComponent.prototype.ngOnInit = function () {
        this.createGameBoard();
        this.gameStatus = 'Game is Yet to be Started';
    };
    GameBoardComponent.prototype.createGameBoard = function () {
        var _this = this;
        this.leadService.startGameBoard().subscribe(function (response) {
            _this.setResponsePlayer(response);
        });
    };
    GameBoardComponent.prototype.setResponsePlayer = function (response) {
        this.player = response;
        this.boxNumb = this.player.numbArray;
        for (var i = 1; i < 28; i++) {
            if (this.boxNumb[i].num == 0) {
                this.boxNumb[i].num = null;
            }
        }
    };
    GameBoardComponent.prototype.checkStatusGame = function () {
        var _this = this;
        this.leadService.checkGameStatus(this.player.gameId).subscribe(function (response) {
            _this.gameStart = response;
        });
        if (this.gameStart) {
            this.gameStatus = "Game Started";
        }
    };
    GameBoardComponent.prototype.checkStatusEndGame = function () {
        var _this = this;
        this.leadService.checkGameEndStatus(this.player.gameId).subscribe(function (response) {
            _this.gameEnd = response;
        });
        if (this.gameEnd) {
            this.gameStatus = "Game Ended";
        }
    };
    GameBoardComponent.prototype.numberDrawn = function () {
        var _this = this;
        if (this.gameStatus === "Game Ended") {
            this.gameStatus = "Game Ended";
            this.gameStart = false;
        }
        else {
            this.leadService.randomNumberDrawn(this.numTurn, this.player).subscribe(function (response) {
                _this.player = response.player;
                _this.boxNumb = _this.player.numbArray;
                for (var i = 1; i < 28; i++) {
                    if (_this.boxNumb[i].num == 0) {
                        _this.boxNumb[i].num = null;
                    }
                }
                _this.isWinner = response.isWinner;
                _this.numbDrawn = response.numbDrawn;
                if (_this.numbDrawn == 0) {
                    _this.gameStatus = "Game Ended";
                }
                else
                    _this.gameStatus = "Number Drawn :" + _this.numbDrawn;
            });
            this.numTurn = this.numTurn + 1;
            if (this.isWinner || this.numTurn == 100) {
                this.endGame();
            }
        }
    };
    GameBoardComponent.prototype.startGame = function () {
        var _this = this;
        this.leadService.startGame(this.player.gameId).subscribe(function (response) {
            _this.gameStatus = response;
        });
        this.gameStart = true;
    };
    GameBoardComponent.prototype.endGame = function () {
        var _this = this;
        this.leadService.endGame(this.player.gameId).subscribe(function (response) {
            _this.gameStatus = "Game Ended";
        });
        this.gameStart = false;
        this.gameStatus = "Game Ended";
    };
    GameBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-board',
            template: __webpack_require__(/*! ./game-board.component.html */ "./src/app/game-board/game-board.component.html"),
            styles: [__webpack_require__(/*! ./game-board.component.scss */ "./src/app/game-board/game-board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lead_service_service__WEBPACK_IMPORTED_MODULE_2__["LeadServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GameBoardComponent);
    return GameBoardComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\n    <img src=\"../assets/homepage.jpg\">\n    <button class=\"btn\" (click)=\"playGame()\">Let's Play</button>\n  </div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  padding-top: 5%;\n  width: 100%;\n  height: auto; }\n\n.container .btn {\n  position: absolute;\n  top: 59%;\n  left: 79%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  background-color: #555;\n  color: white;\n  font-size: 17px;\n  padding: 12px 24px;\n  border: none;\n  cursor: pointer;\n  border-radius: 5px; }\n\n.container .btn:hover {\n  background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS9DOlxcVXNlcnNcXFRoaXMgcGNcXERlc2t0b3BcXHRhbWJvbGEtZnJvbnRlbmRcXHRhbWJvbGFcXHNyY1xcYXBwL2hvbWUtcGFnZVxcaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdyQjtFQUNHLHVCQUF1QixFQUFBIiwiZmlsZSI6ImhvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIC5idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1OSU7XHJcbiAgICBsZWZ0OiA3OSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gLmNvbnRhaW5lciAuYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router) {
        this.router = router;
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);
    }
    HomePageComponent.prototype.playGame = function () {
        this.router.navigateByUrl('gameStart');
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/lead-dashboard/lead-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/lead-dashboard/lead-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n  <div class=\"row\" style=\"margin-top: 21px !important;\">\n    <button class=\"btn btn-success add_lead_modal_btn\" data-toggle=\"modal\" data-target=\"#addLeadModal\" style=\"background-color: black;\">Add Lead</button>\n  </div>\n  <p></p>\n \n  <table class=\"table table-bordered table-hover leads_table\" style=\"border-width: 2px;\">\n    <thead class=\"thead-dark\">\n    <tr>\n      <th>{{row1}}</th>\n\n      <th>{{row2}}</th>\n\n      <th>{{row3}}</th>\n\n      <th>{{row4}}</th>\n\n      <th>{{row5}}</th>\n\n      <th>{{row6}}</th>\n    </tr>\n  </thead>\n    <tr *ngFor=\"let lead of leads\">\n\n      <td>\n        {{lead.first_name}} {{lead.last_name}}\n      </td>\n      <td>\n        {{lead.email}}\n      </td>\n      <td>\n        {{lead.mobile}}\n      </td>\n      <td>\n        {{lead.location_type}}\n      </td>\n      <td>\n        {{lead.location_string}}\n      </td>\n      <td>\n        <button (click)=setUpdateId(lead.id) data-toggle=\"modal\" data-target=\"#updateLeadModal\" class=\"update_lead_modal_btn\" style=\"background-color: black;color: white;\">Mark Update</button><span\n        style=\"color: transparent\"><b>//</b></span>\n        <button (click)=setDeleteId(lead.id) data-toggle=\"modal\" data-target=\"#deleteLeadModal\" class=\"delete_lead_modal_btn\" style=\"background-color: black;color: white;\">Delete</button> \n      </td>\n\n    </tr>\n  </table>\n\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addLeadModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addLeadModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: black;color: white;\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size: 20px;font-weight: 700;padding: 1px;\">Add Lead</h5>\n        <button type=\"button\" #addclosebutton class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form #myForm=\"ngForm\" class=\"add_lead_form\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5>First Name <span class=\"required\">*</span></h5> \n               <input type=\"text\" class=\"form-control\" name=\"first_name\" id=\"first_name\" required  [(ngModel)]=\"leadLists.first_name\" /> \n            </div>\n            <div class=\"col\">\n            <h5>Last Name <span class=\"required\">*</span></h5> \n              <input type=\"text\" class=\"form-control\" name=\"last_name\" id=\"last_name\" required  [(ngModel)]=\"leadLists.last_name\" />\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5>Email Address <span class=\"required\">*</span></h5> \n              <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" required  [(ngModel)]=\"leadLists.email\" />\n            </div>\n            <div class=\"col\">\n              <h5>Mobile<span class=\"required\">*</span></h5> \n              <input type=\"text\" class=\"form-control\" name=\"mobile\" id=\"mobile\" required [(ngModel)]=\"leadLists.mobile\" />\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5>Location Type<span class=\"required\">*</span></h5> \n          <select name=\"location_type\" style=\"height: 35px !important;\" class=\"form-control\" required [(ngModel)]=\"leadLists.location_type\">\n            <option value=\"State\">State</option>\n            <option value=\"City\">City</option>\n            <option value=\"Country\" selected>Country</option>\n          </select> \n            </div>\n            <div class=\"col\">\n              <h5>Location String<span class=\"required\">*</span></h5>\n              <input type=\"text\"  class=\"form-control\"  name=\"location_string\" id=\"location_string\" required [(ngModel)]=\"leadLists.location_string\" />\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" style=\"background-color: white;color: black;\">Close</button>\n        <button type=\"button\" (click)=\"addLead()\"  [disabled]=\"!myForm.form.valid\" class=\"btn btn-primary add_lead_btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"updateLeadModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: black;color: white;\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size: 20px;font-weight: 700;padding: 1px;\">Mark Communication</h5>\n        <button type=\"button\" #updateclosebutton class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form class=\"update_lead_form\">\n          <input id=\"feed_id\" name=\"cid\" [(ngModel)]=\"updateId\" hidden />\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5><b>Communication</b></h5>\n               <textarea class=\"form-control\" name=\"communication\" id=\"Communication\" required rows=\"8\" cols=\"100\" [(ngModel)]=\"markLead.communication\" ></textarea>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" style=\"background-color: white;color: black;\">Close</button>\n        <button type=\"button\" (click)=\"updateLead(updateId)\" class=\"btn btn-primary update_lead_btn\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"deleteLeadModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: black;color: white;\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\" style=\"font-size: 20px;font-weight: 700;padding: 1px;\">Do you wish to delete this Lead?</h5>\n        <button type=\"button\" #deleteclosebutton class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" style=\"color: white;\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"delete_lead_form\">\n        <button type=\"button\" (click)=\"deleteLead(deleteId)\"  class=\"btn btn-primary  delete_lead_btn\" style=\"margin-left:150px;background-color: red;color: white;\">Delete</button>\n\n         <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" style=\"margin-left:20px;background-color: black;color: white;\">Cancel</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n       \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/lead-dashboard/lead-dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/lead-dashboard/lead-dashboard.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  padding-top: 20px; }\n\n.required {\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQtZGFzaGJvYXJkL0M6XFxVc2Vyc1xcVGhpcyBwY1xcRGVza3RvcFxcdGFtYm9sYS1mcm9udGVuZFxcdGFtYm9sYVxcc3JjXFxhcHAvbGVhZC1kYXNoYm9hcmRcXGxlYWQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6ImxlYWQtZGFzaGJvYXJkL2xlYWQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDs7XG59XG5cbi5yZXF1aXJlZHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lead-dashboard/lead-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lead-dashboard/lead-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: LeadList, MarkLead, LeadDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadList", function() { return LeadList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkLead", function() { return MarkLead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadDashboardComponent", function() { return LeadDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lead_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lead-service.service */ "./src/app/lead-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LeadList = /** @class */ (function () {
    function LeadList(id, updated_at, created_at, first_name, last_name, mobile, email, location_type, location_string, status, communication, tags) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.mobile = mobile;
        this.email = email;
        this.location_string = location_string;
        this.location_type = location_type;
        this.communication = communication;
    }
    return LeadList;
}());

var MarkLead = /** @class */ (function () {
    function MarkLead(communication) {
        this.communication = communication;
    }
    return MarkLead;
}());

var LeadDashboardComponent = /** @class */ (function () {
    function LeadDashboardComponent(leadService, actroute, router) {
        this.leadService = leadService;
        this.actroute = actroute;
        this.router = router;
        this.title = 'Lead Table';
        this.row1 = 'Name';
        this.row2 = 'Email';
        this.row3 = 'Mobile Num';
        this.row4 = 'Location Type';
        this.row5 = 'Location string';
        this.row6 = 'Action';
    }
    LeadDashboardComponent.prototype.ngOnInit = function () {
        this.leadLists = new LeadList(null, null, null, null, null, null, null, null, null, null, null, null);
        this.markLead = new MarkLead('');
        this.fetchAllLeads();
        this.updateId = '';
    };
    LeadDashboardComponent.prototype.fetchAllLeads = function () {
        var _this = this;
        this.leadService.retrieveAllLeads().subscribe(function (response) {
            console.log(response);
            _this.leads = response;
        });
    };
    LeadDashboardComponent.prototype.setUpdateId = function (id) {
        this.updateId = id;
    };
    ;
    LeadDashboardComponent.prototype.setDeleteId = function (id) {
        this.deleteId = id;
    };
    LeadDashboardComponent.prototype.deleteLead = function (id) {
        var _this = this;
        this.leadService.deleteLeadById(id).subscribe(function (response) {
            console.log(response);
            _this.fetchAllLeads();
            _this.deleteclosebutton.nativeElement.click();
        });
    };
    LeadDashboardComponent.prototype.updateLead = function (id) {
        var _this = this;
        this.leadService.updateLead(this.markLead, id).subscribe(function (response) {
            console.log(response);
            _this.fetchAllLeads();
            _this.updateclosebutton.nativeElement.click();
        });
    };
    LeadDashboardComponent.prototype.addLead = function () {
        var _this = this;
        console.log(this.leadLists);
        this.leadService.createLead(this.leadLists).subscribe(function (data) {
            console.log(data);
            _this.fetchAllLeads();
            _this.addclosebutton.nativeElement.click();
            _this.leadLists = new LeadList(null, null, null, null, null, null, null, null, null, null, null, null);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addclosebutton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeadDashboardComponent.prototype, "addclosebutton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('updateclosebutton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeadDashboardComponent.prototype, "updateclosebutton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteclosebutton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeadDashboardComponent.prototype, "deleteclosebutton", void 0);
    LeadDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lead-dashboard',
            template: __webpack_require__(/*! ./lead-dashboard.component.html */ "./src/app/lead-dashboard/lead-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./lead-dashboard.component.scss */ "./src/app/lead-dashboard/lead-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lead_service_service__WEBPACK_IMPORTED_MODULE_2__["LeadServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LeadDashboardComponent);
    return LeadDashboardComponent;
}());



/***/ }),

/***/ "./src/app/lead-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/lead-service.service.ts ***!
  \*****************************************/
/*! exports provided: LeadServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadServiceService", function() { return LeadServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var LeadServiceService = /** @class */ (function () {
    function LeadServiceService(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    LeadServiceService.prototype.retrieveAllLeads = function () {
        return this.httpClient.get(this.url + "/api/leads/?location_string=India");
    };
    LeadServiceService.prototype.deleteLeadById = function (id) {
        return this.httpClient.delete(this.url + "/api/leads/" + id);
    };
    LeadServiceService.prototype.createLead = function (leadLists) {
        return this.httpClient.post(this.url + "/api/leads/", leadLists);
    };
    LeadServiceService.prototype.updateLead = function (markLead, id) {
        return this.httpClient.put(this.url + "/api/mark_lead/" + id, markLead);
    };
    LeadServiceService.prototype.startGameBoard = function () {
        return this.httpClient.get(this.url + "/showBoard?isFirstTime=true");
    };
    LeadServiceService.prototype.checkGameStatus = function (id) {
        return this.httpClient.get(this.url + "/getGameStatus/" + id);
    };
    LeadServiceService.prototype.checkGameEndStatus = function (id) {
        return this.httpClient.get(this.url + "/checkGameEnd/" + id);
    };
    LeadServiceService.prototype.startGame = function (id) {
        return this.httpClient.get(this.url + "/startGame?gameId=" + id);
    };
    LeadServiceService.prototype.endGame = function (id) {
        return this.httpClient.get(this.url + "/endGame?gameId=" + id);
    };
    LeadServiceService.prototype.randomNumberDrawn = function (turnNum, player) {
        return this.httpClient.post(this.url + "/numberDrawn/" + turnNum, player);
    };
    LeadServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LeadServiceService);
    return LeadServiceService;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\" style=\"text-align: center;\">\n  <div class = \"navbar-brand center\" style=\"text-align: center;\">\n      <a href=\" \" class=\"text-white\"><b style=\"margin: autos; font-size: 50px; color: white;\">T</b><span style=\"color: grey;\">AMBOLA GAME</span></a>\n  </div>\n</nav>\n</header>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  margin: auto;\n  width: 60%;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvQzpcXFVzZXJzXFxUaGlzIHBjXFxEZXNrdG9wXFx0YW1ib2xhLWZyb250ZW5kXFx0YW1ib2xhXFxzcmNcXGFwcC9tZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhLEVBQUEiLCJmaWxlIjoibWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    if (window) {
        window.console.log = function () { };
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\This pc\Desktop\tambola-frontend\tambola\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map