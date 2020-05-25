(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Demo/demo.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Demo/demo.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"launcherBg\">\n        <div [ngStyle]=\"picStyle\" class=\"LogoContainer\">\n                <!-- <div [ngStyle]=\"abbrLogoStyle\" class=\"abbrLogo\">Demo</div> -->\n                <!-- <div class=\"fullLogo\">One.Stop.Music</div> -->\n\n                <img [hidden]=\"current!=in\" class=\"headerImg\" src=\"../../assets/icons/{{img}}\" alt=\"img\" *ngFor=\"let img of demoImages;let in = index\">\n                \n        </div>\n        <div [ngStyle]=\"bottomStyle\">\n                <div  class=\"dots\">\n                        <div role=\"button\" class=\"dot\" [ngClass]=\"{'act':current==in}\" *ngFor=\"let song of demoImages;let in = index\"></div>\n                        <!-- <div role=\"button\" class=\"dot\"></div>\n                        <div role=\"button\" class=\"dot\"></div>\n                        <div role=\"button\" class=\"dot\"></div>\n                        <div role=\"button\" class=\"dot\"></div> -->\n                        <button mat-stroked-button class=\"buttonNx\" (click)=\"buttonClicked()\" color=\"accent\">{{current != (demoImages.length-1)?'Next':'Go!'}}</button>\n    \n                </div>\n                <div role=\"button\" (click)=\"goToMusic()\" class=\"link\">Skip. Go to Player.</div>\n        </div>\n        \n        \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"osmApp\" [ngStyle]=\"appStyle\">\n    <div class=\"contentSection\" [ngStyle]=\"routerOutletStyle\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<i role=\"button\" [class]=\"icon\" style=\"font-size:36px;\" (click)=\"clicked()\"></i>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\" [ngClass]=\"{'isMobile':screenSz.isMobile}\">\n    <div class=\"appName\">\n        <img class=\"headerIco\" src=\"../../assets/icons/headerIcon.png\" alt=\"img\">\n        <!-- One.Stop.Music -->\n        <mat-icon role=\"button\" (click)=\"showInfo()\" class=\"icons\" svgIcon=\"info\" aria-hidden=\"false\" ></mat-icon>\n    </div>\n    <div class=\"userName\">\n       Welcome, {{username}}\n       <div class=\"logOut\">\n          <div role=\"button\" class=\"lgotext\" (click)=\"onLogout()\">{{ username=='Guest' ?'Login/Register':'Logout'}}</div> \n       </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/info-details.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/info-details.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title style=\"display: flex;justify-content: space-between;\">\r\n\r\n  <img class=\"headInf\" style=\"width: 40%;\" src=\"../../assets/icons/osm.png\" alt=\"img\">\r\n\r\n  <img class=\"headInf\" style=\"width: 55%;\" src=\"../../assets/icons/text.png\" alt=\"img\">\r\n\r\n</h1>\r\n<div mat-dialog-content>\r\n  <div style=\"display: flex;justify-content: flex-start;\">\r\n      <p (click)=\"created=true;cred=false;\" [ngClass]=\"{'focused':created}\" style=\"margin-right: 30px;\">Created By</p>\r\n      <p (click)=\"created=false;cred=true;\" [ngClass]=\"{'focused':cred}\">Credits</p>\r\n  </div>\r\n  <div *ngIf=\"created\">\r\n    <h3 class=\"name\">Soumyadip Chattopadhyay</h3>\r\n    <div class=\"contacts\">\r\n      \r\n      <mat-icon role=\"button\" (click)=\"WSRedirect()\" class=\"icons\" svgIcon=\"web\" aria-hidden=\"false\" ></mat-icon>\r\n      <mat-icon role=\"button\" (click)=\"FBRedirect()\" class=\"icons\" svgIcon=\"fb\" aria-hidden=\"false\" ></mat-icon>\r\n        <mat-icon role=\"button\" (click)=\"GMRedirect()\" class=\"icons\" svgIcon=\"gmail\" aria-hidden=\"false\" ></mat-icon>\r\n        <mat-icon role=\"button\" (click)=\"LIRedirect()\" class=\"icons\" svgIcon=\"lin\" aria-hidden=\"false\" ></mat-icon>\r\n        \r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"cred\">\r\n      Icons Sources:\r\n      \r\n<div style=\"font-size: 60%;\">Icons made by <a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a></div>\r\n<div style=\"font-size: 60%;\">Icons made by <a href=\"https://www.flaticon.com/authors/google\" title=\"Google\">Google</a> from <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a></div>\r\n\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions style=\"display: flex;justify-content: flex-end;\">\r\n  <button mat-button (click)=\"onNoClick()\">Close</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/logout-dialog.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/logout-dialog.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Hi {{data}}</h1>\r\n<div mat-dialog-content>\r\n  <p>Are you sure you want to exit?</p>\r\n</div>\r\n<div mat-dialog-actions style=\"display: flex;justify-content: flex-end;\">\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button mat-dialog-close=\"logout\" cdkFocusInitial>Proceed</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/launcher/launcher.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/launcher/launcher.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"launcherBg\">\n        <div [ngStyle]=\"logoStyle\" class=\"LogoContainer\">\n                <!-- <div [ngStyle]=\"abbrLogoStyle\" class=\"abbrLogo\">OSM</div>\n                <div class=\"fullLogo\">One.Stop.Music</div> -->\n\n                <img class=\"headerImg\" src=\"../../assets/icons/bann.png\" alt=\"img\">\n                \n        </div>\n        <div [ngStyle]=\"loginStyle\" class=\"spinner\">\n                <!-- <div [ngStyle]=\"loaderStyle\" class=\"loader\"></div> -->\n                <div [ngStyle]=\"loaderStyle\" class=\"container\">\n                        <div class=\"item-1\"></div>\n                        <div class=\"item-2\"></div>\n                        <div class=\"item-3\"></div>\n                        <div class=\"item-4\"></div>\n                        <div class=\"item-5\"></div>\n                </div>\n        </div>\n        <div [ngStyle]=\"errorStyle\" *ngIf=\"errorShow\" class=\"error\">\n                <i class=\"far fa-grin-beam-sweat\" style=\"color: #ff8282;font-size: 150%;\"></i>&nbsp;&nbsp; App taking too long to load. Please wait....\n        </div>\n        \n        <div [ngStyle]=\"errorStyle\" *ngIf=\"errorShowConf\" class=\"error\">\n                <i class=\"fas fa-exclamation-triangle\" style=\"color: #ff4747;font-size: 120%;\"></i> Error connecting to Network. Please retry....\n        </div>\n        \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-comp/modal-comp.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-comp/modal-comp.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title>Title: \n        <mat-form-field color=\"accent\">\n                <input [disabled]=\"noOfTru!=1\" maxlength=\"30\" matInput [(ngModel)]=\"titleText\">\n        </mat-form-field>\n</div>\n<div mat-dialog-content>\n    <div *ngIf=\"showLoading\" class=\"loader\">\n        <div class=\"loadText\">\n                Loading....\n        </div>\n    </div>\n    <div *ngIf=\"isEmptySearch\" class=\"loader\">\n            <div class=\"loadText\">\n                    No rows to Show\n            </div>\n        </div>\n        <mat-radio-group>\n            <div class=\"example-box\" role=\"button\" *ngFor=\"let song of searchResults;let in = index\">\n                    <div class=\"thumbNail\">\n                        <img [src]=\"song.thumbnailUrl\">\n                    </div>\n                    <div class=\"songTitle\">\n                            <div class=\"title\"> {{song.title | titlecase}}</div>\n                                <div class=\"chanell\">\n                                       By {{song.channelTitle}}\n                                </div>\n                    </div>\n                    <div class=\"closer\">\n                                <mat-checkbox class=\"example-margin\" (ngModelChange)=\"boolChange($event,in)\" [(ngModel)]=\"checkboxBool[in]\"></mat-checkbox>\n                    </div>\n            </div>\n             \n        </mat-radio-group>\n\n  \n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button [disabled]=\"noOfTru==0\" [mat-dialog-close]=\"sendData()\" cdkFocusInitial>Add to Queue</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music-add/music-add.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-add/music-add.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div *ngIf=\"mode=='web'\" class=\"adder\" >\n        <div class=\"box\">\n                <div class=\"boxItems\" [ngClass]=\"{'horizontal':!screenSt.isMobile}\">\n                        <input #input1 class=\"inputBox\" [(ngModel)]=\"searchInp\" (focus)=\"inputFocused=true\" (blur)=\"inputFocused=false\" type=\"text\" (keyup.enter)=\"openDialog(0)\" placeholder=\"Search / Add by url\" />\n                        <div class=\"buttons\">\n                                <mat-icon role=\"button\" (click)=\"openDialog(0)\" class=\"icons\" svgIcon=\"search\" aria-hidden=\"false\" ></mat-icon>\n                        </div>\n                        \n                </div>\n         \n        </div>\n    </div>\n\n    <div *ngIf=\"mode=='mobile'\" [ngClass]=\"{'hideSearch':hideSearch}\" class=\"adderMob\" >\n        <div [@openClose]=\"isOpen ? 'open' : 'closed'\" *ngIf=\"!hideSearch\" class=\"box\">\n                <input #input class=\"inputBox\" [(ngModel)]=\"searchInp\" (ngModelChange)=\"onChangeInput($event)\" (focus)=\"inputFocused=true\" (blur)=\"inputFocused=false\" type=\"text\" (keyup.enter)=\"openDialog(0)\" placeholder=\"Search / Add by url\" />\n                <i role=\"button\" (click)=\"openDialog(0)\" class=\"fas fa-search srch\"></i>\n                <div *ngIf=\"showSuggestions\" class=\"suggestions\">\n                        <div *ngIf=\"showSuggestionsLoading\" class=\"suggestion\">\n                                Loading....\n                        </div>\n                        <div role=\"button\" \n                        [hidden]=\"showSuggestionsLoading\" \n                        *ngFor=\"let suggestion of suggestions\" \n                        class=\"suggestion\"\n                        (click)=\"onSelectSuggestion(suggestion)\">\n                                {{suggestion}}\n                        </div>    \n                </div>\n        </div>\n        <div class=\"searIcon\">\n                <mat-icon role=\"button\" class=\"icon\" (click)=\"hideClick()\" [svgIcon]=\"hideSearch?'search':'cancel'\" aria-hidden=\"false\" ></mat-icon>\n        </div>\n  \n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div [ngStyle]=\"headerBarStyle\">\n    <app-header [username]=\"loggedInUser\"></app-header>\n</div>\n<div class=\"setBackground\" [ngStyle]=\"musicPlayerStyle\">\n    <div [ngStyle]=\"leftStyle\">\n        <div [ngStyle]=\"largePlayer?largePlayerStyle:playerStyle\">\n            <app-player \n                [queExpanded]=\"expanded\" \n                [playerQueue]=\"playerQueue\" \n                [currentIndex]=\"currentIndex\" \n                (onIndexChange)=\"onIndexChange($event)\" \n                [largePlayer]=\"largePlayer\"\n                (onLargePlayerChange)=\"onLargePlayerChange($event)\"></app-player>\n        </div>\n        <div [hidden]=\"lastScreenSz.isMobile || largePlayer\" [ngStyle]=\"adderStyle\">\n            <app-music-add\n            [mode]=\"'web'\"\n            [playlists]=\"playlists\"\n            [selectedPlaylist]=\"selectedPlaylist\"\n            (onAdd)=\"addVideo($event)\"></app-music-add>\n        </div>\n    </div>\n    <div [hidden]=\"largePlayer\" [ngStyle]=\"rightStyle\">\n        <app-queue \n            (onAdd)=\"addVideo($event)\"\n            [playerQueue]=\"playerQueue\"\n            [playlists]=\"playlists\"\n            [selectedPlaylist]=\"selectedPlaylist\"\n            [addable]=\"addable\"\n            [expanded]=\"expanded\"\n            [defaultPlaylist]=\"defaultPlaylist\"\n            (onAddPlaylist)=\"onAddPlaylist($event)\"\n            (onModifyPlaylist)=\"onModifyPlaylist($event)\"\n            (onDeletePlaylist)=\"onDeletePlaylist($event)\"\n            (onChangePlaylist)=\"onChangePlaylist($event)\"\n            (onExpCollapse)=\"onExpCollapse($event)\"\n            (onEditTitle)=\"onEditTitle($event)\"\n            (onChangePos)=\"onChangePos($event)\" [currentIndex]=\"currentIndex\" (onIndexChange)=\"onIndexChange($event)\" (onDoubleClic)=\"playSong($event)\"></app-queue>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'largePlayer':largePlayer}\"  class=\"playr\">\r\n  <div [hidden]=\"initializing\" #outpt class=\"screenSwap\">\r\n    <div [hidden]=\"!showYoutube\" class=\"videoOutput\">\r\n  \r\n      <youtube-player\r\n            [videoId]=\"id\"\r\n            (ready)=\"savePlayer($event)\"\r\n            (change)=\"onStateChange($event)\"\r\n          ></youtube-player>\r\n    \r\n    </div>\r\n\r\n    <div  class=\"soundBars\">\r\n      <div [hidden]=\"!largePlayer\"     \r\n      [ngClass]=\"{'largeThumb':largePlayer}\" class=\"thumbnail\">\r\n          <img [ngStyle]=\"imgStyle\" [src]=\"currentIndex>-1?'https://img.youtube.com/vi/'+playerQueue[currentIndex].videoId+'/hqdefault.jpg':''\" alt=\"img\">\r\n      </div>\r\n    </div>\r\n\r\n    <div  class=\"soundBars\">\r\n      <div [hidden]=\"!screenSt.isMobile\" [ngClass]=\"{'expanded':queExpanded}\" class=\"expandCollPL\">\r\n          <mat-icon role=\"button\" (click)=\"largePlayerChange()\" class=\"icons\" [ngClass]=\"{'isNotMobile':!screenSt.isMobile}\" [svgIcon]=\"largePlayer?'plisthd':'plist'\" aria-hidden=\"false\" ></mat-icon>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"queExpanded && !largePlayer\" class=\"soundBars\">\r\n      <div class=\"repeatButton\">\r\n          <mat-icon role=\"button\" (click)=\"changeRep()\" class=\"icons\" [ngClass]=\"{'isNotMobile':!screenSt.isMobile}\" [svgIcon]=\"repeatOn==1?'repeatOn':(repeatOn==2?'repeatOne':'repeatOff')\" aria-hidden=\"false\" ></mat-icon>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div [hidden]=\"!largePlayer\" class=\"soundBars\"> \r\n        <div class=\"repeatButton hd\">\r\n          <mat-icon role=\"button\" (click)=\"hdToggle()\" class=\"icons\" [svgIcon]=\"hdQuality?'hd':'sd'\" aria-hidden=\"false\" ></mat-icon>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div [hidden]=\"!largePlayer\" class=\"soundBars\"> \r\n      <div class=\"repeatButton up\">\r\n        \r\n        <i role=\"button\" (click)=\"largePlayerChange()\"  class=\"fas fa-angle-up\" ></i>\r\n      </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"queExpanded && !largePlayer\" class=\"soundBars\">\r\n      <div class=\"shuffle\">\r\n          <mat-icon role=\"button\" class=\"icons\" (click)=\"shuffleOn=!shuffleOn\" [ngClass]=\"{'isNotMobile':!screenSt.isMobile}\" [svgIcon]=\"shuffleOn?'shuffleOn':'shuffleOff'\" aria-hidden=\"false\" ></mat-icon>\r\n      </div>\r\n    </div>\r\n\r\n    <div [hidden]=\"playerState!=1 || showYoutube || (queExpanded && !largePlayer)\" class=\"soundBars\">\r\n        <div class=\"bars\">\r\n\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n            <div class=\"bar\"></div>\r\n        </div>\r\n    </div>\r\n    <div [hidden]=\"playerState==1 || showYoutube || (queExpanded && !largePlayer)\" class=\"soundBars\">\r\n      <div class=\"bars\"> \r\n          <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n            <div class=\"staticbar\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div [ngClass]=\"{'expanded':queExpanded}\" class=\"utubeTitle\" *ngFor=\"let song of playerQueue;let in = index\" >\r\n      <div class=\"titleNm\" *ngIf=\"in==currentIndex\">{{song.title | titlecase}} </div>\r\n    </div>\r\n    <div [ngClass]=\"{'expanded':queExpanded}\" class=\"ellFullTime\">\r\n        <div class=\"ellTime\">{{elapsedTime *1000 | date:'mm:ss':'GMT+0'}}</div>\r\n        <div class=\"fullTime\">{{songTime *1000 | date:'mm:ss':'GMT+0'}}</div>\r\n    </div>\r\n    <div [ngClass]=\"{'expanded':queExpanded}\" class=\"sliderPart\">\r\n        <input type=\"range\" min=\"1\" [max]=\"songTime\" [value]=\"loadedTime\" class=\"slider1\" id=\"myRange\">\r\n     </div>\r\n    <div [ngClass]=\"{'expanded':queExpanded}\" class=\"sliderPart\">\r\n       <input type=\"range\" min=\"1\" [max]=\"songTime\" [(ngModel)]=\"elapsedTime\" (ngModelChange)=\"onSLiderChange()\" class=\"slider\" id=\"myRange\">\r\n    </div>\r\n    \r\n    <div [ngClass]=\"{'expanded':queExpanded,'volClosed':!showVolSLider}\" class=\"utubeIcon left\">\r\n        <mat-icon role=\"button\" (click)=\"volToggle()\" class=\"icons\" [svgIcon]=\"volumeicons[volume]\" aria-hidden=\"false\" ></mat-icon>\r\n        <div *ngIf=\"showVolSLider\" class=\"volSlider\">\r\n            <input type=\"range\" min=\"0\" max=\"4\" [(ngModel)]=\"volume\" (ngModelChange)=\"onVolChange()\" class=\"slider\" id=\"myRange\">\r\n        </div>\r\n    </div>\r\n    <div [ngClass]=\"{'expanded':queExpanded,'volClosed':!showVolSLider}\" class=\"utubeIcon\">\r\n      <mat-icon role=\"button\" (click)=\"previous()\" class=\"icons\" svgIcon=\"prev\" aria-hidden=\"false\" ></mat-icon>\r\n      <mat-icon role=\"button\" (click)=\"playerState==1?pause():play()\" class=\"icons\" [svgIcon]=\"playerState==1?'pause':'play'\" aria-hidden=\"false\" ></mat-icon>\r\n      <!-- <mat-icon role=\"button\" (click)=\"pause()\" class=\"icons\" svgIcon=\"pause\" aria-hidden=\"false\" ></mat-icon> -->\r\n      <mat-icon role=\"button\" (click)=\"next()\" class=\"icons\" svgIcon=\"next\" aria-hidden=\"false\" ></mat-icon>\r\n    </div>\r\n    \r\n    \r\n  </div>\r\n  \r\n  <!-- <div class=\"controlButtons\">\r\n    <app-buttons icon=\"fa fa-play\" (buttonClicked)=\"play()\"></app-buttons>\r\n    <app-buttons icon=\"fa fa-pause\" (buttonClicked)=\"pause()\"></app-buttons>\r\n    \r\n  </div> -->\r\n  <div [hidden]=\"!initializing\" class=\"screenSwap\">\r\n    <div class=\"initText\">\r\n        <div hidden id=\"mininized\">max</div>\r\n       <div class=\"textIn\">\r\n          <!-- <div [ngStyle]=\"loaderStyle\" class=\"loader\"></div> -->\r\n          <div class=\"container\">\r\n            <div class=\"item-1\"></div>\r\n            <div class=\"item-2\"></div>\r\n            <div class=\"item-3\"></div>\r\n            <div class=\"item-4\"></div>\r\n            <div class=\"item-5\"></div>\r\n          </div>\r\n           <div style=\"padding-left: 20px;color: white;\">Initializing.....</div>\r\n      </div> \r\n    </div>\r\n  </div>\r\n  \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/queue/dialog-overview-example-dialog.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/queue/dialog-overview-example-dialog.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Confirm Remove</h1>\r\n<div mat-dialog-content>\r\n  <p>Remove {{data.title}} from {{data.type}}?</p>\r\n</div>\r\n<div mat-dialog-actions style=\"display: flex;justify-content: flex-end;\">\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"response\" cdkFocusInitial>Proceed</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/queue/modify-add-playlist-dialog.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/queue/modify-add-playlist-dialog.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title style=\"margin-bottom: 10px;\">{{data.type}} {{data.type=='Edit'?'Song':'Playlist'}}</h1>\r\n<div mat-dialog-content [ngStyle]=\"inputStyle\">\r\n  <p style=\"margin-bottom: 0;\">Title:</p>\r\n  <mat-form-field style=\"width: 90%;\" color=\"accent\">\r\n    <input autocomplete=\"off\" [maxlength]=\"data.type=='Edit'?30:10\" matInput [(ngModel)]=\"data.title\" (ngModelChange)=\"onNameChange()\" >\r\n  </mat-form-field>\r\n  <mat-error *ngIf=\"!validName || blankNm\" style=\"margin-bottom: 5px;font-size: 70%;\">Can't have same/blank name</mat-error>\r\n  <mat-checkbox [hidden]=\"data.type=='Edit'\" [(ngModel)]=\"data.default\" >Set as default</mat-checkbox>\r\n</div>\r\n<div mat-dialog-actions style=\"display: flex;justify-content: flex-end;\">\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button [disabled]=\"!validName || blankNm\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/queue/queue.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/queue/queue.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   \n    <div class=\"queue\" >\n        \n        \n        \n        <div class=\"box example-list\">\n                <div *ngIf=\"showExpand\" [ngClass]=\"{'sendBack':hideSearch}\" class=\"adderPart\">\n                        <app-music-add\n                        (onSearch)=\"hideSear($event)\"\n                        [mode]=\"'mobile'\"\n                        [playlists]=\"playlists\"\n                        [selectedPlaylist]=\"selectedPlaylist\"\n                        (onAdd)=\"addVideo($event)\"></app-music-add>\n                </div>\n                <div class=\"queueHeader\">\n                         <div class=\"dropbox\">\n                               <div role=\"button\" (click)=\"isClosed=!isClosed\" class=\"content\">\n                                    <mat-icon class=\"iconn\" svgIcon=\"pllist\" aria-hidden=\"false\" ></mat-icon>\n                                    <div class=\"playlistName\">\n                                        {{playlists[selectedPlaylist].playlist}}\n                                    </div>\n                                    <div class=\"arrow\">\n                                        <mat-icon class=\"icons\" [svgIcon]=\"isClosed?'down':'up'\" aria-hidden=\"false\" ></mat-icon>\n                                    </div>\n                               </div>\n                               <div [hidden]=\"!addable\" class=\"addPL\">\n                                <mat-icon (click)=\"addPL()\" class=\"icons\" [ngClass]=\"{'expand':!showExpand}\" svgIcon=\"addblack\" aria-hidden=\"false\" ></mat-icon>\n                               </div>\n                               <div [hidden]=\"isClosed\" class=\"optionList\">\n                                   <div class=\"listItems\" [ngClass]=\"{'selected':selectedPlaylist==in}\" *ngFor=\"let playlist of playlists;let in=index\">\n\n                                       <div (click)=\"selectPL(in)\" class=\"listItem\">\n                                           {{playlist.playlist}}\n                                       </div>\n                                       <div [hidden]=\"in==0\" class=\"border\"></div>\n                                       <div [hidden]=\"in==0\" class=\"optionIcon\">\n                                            <mat-icon (click)=\"editPL(in)\" class=\"icons\" svgIcon=\"edit\" aria-hidden=\"false\" ></mat-icon>\n                                            <mat-icon (click)=\"deletePL(in)\" class=\"icons\" svgIcon=\"delete\" aria-hidden=\"false\" ></mat-icon>\n                                       </div> \n                                       \n                                    </div>\n\n                               </div>\n                            </div>\n                            \n                   \n                        \n                    \n                    </div>\n\n                    <div *ngIf=\"isGuestQueue\" class=\"example-box loginDisclaimer\" role=\"button\">\n                            <div class=\"songTitle\">\n                                    Please <a href=\"/login\">Login</a>  to save your added items.\n                            </div>\n                    </div>\n                <div class=\"songList\" [ngClass]=\"{'smaller':isGuestQueue}\" #divToScroll cdkDropList  (cdkDropListDropped)=\"drop($event)\">\n                    \n                    <div class=\"example-box\" role=\"button\"  *ngFor=\"let song of playerQueue;let in = index\" (click)=\"playSong(in)\" [ngClass]=\"{'current':in==currentIndex}\" cdkDrag>\n                        <div [hidden]=\"in==currentIndex\" class=\"handler\">\n                            <mat-icon role=\"button\" class=\"icons\" svgIcon=\"drag\" aria-hidden=\"false\" cdkDragHandle></mat-icon>\n                        </div>\n                        <div class=\"thumbNail\">\n                            <img [src]=\"song.thumbnail\">\n                        </div>\n                        <div class=\"songTitle\">\n                                {{song.title | titlecase}}\n                        </div>\n                        <div [hidden]=\"in==currentIndex\" class=\"closer\">\n                                <mat-icon role=\"button\" (click)=\"remSong(in)\" class=\"icons\" svgIcon=\"cross\" aria-hidden=\"false\" ></mat-icon>\n                        </div>\n                        <div class=\"closer editIcon\">\n                                <mat-icon role=\"button\" (click)=\"editTitle(in)\" class=\"icons\" svgIcon=\"editttl\" aria-hidden=\"false\" ></mat-icon>\n                        </div>\n                       \n                \n                    </div>\n                </div>    \n                \n        </div>\n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/demo-dialog.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/demo-dialog.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Hi There!</h1>\r\n<div mat-dialog-content>\r\n  <p>Do You want a demo??</p>\r\n</div>\r\n<div mat-dialog-actions style=\"display: flex;justify-content: flex-end;\">\r\n  <button mat-button mat-dialog-close=\"skip\">Skip</button>\r\n  <button mat-button mat-dialog-close=\"demo\" cdkFocusInitial>Demo</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"setBackground\" [ngStyle]=\"loginContainer\">\r\n        <div [ngStyle]=\"logoStyle\" class=\"LogoContainer\">\r\n                <!-- <div [ngStyle]=\"abbrLogoStyle\" class=\"abbrLogo\">OSM</div>\r\n                <div class=\"fullLogo\">One.Stop.Music</div> -->\r\n                <img [ngStyle]=\"imgLogoStyle\" src=\"../../assets/icons/bann.png\" alt=\"img\">\r\n        </div>\r\n        \r\n        <div [ngStyle]=\"loginStyle\">\r\n                <div class=\"loginTabs\" [ngStyle]=\"tabTextStyle\" >\r\n                        <div \r\n                        class=\"loginTab\" \r\n                        [ngClass]=\"{'activeTab':loginSelected}\"\r\n                        role=\"button\"\r\n                        (click)=\"loginClicked()\"\r\n                        [ngStyle]=\"tabTextAlignStyle\">\r\n                        LOGIN\r\n                    </div>\r\n                    <div \r\n                        class=\"loginTab\" \r\n                        [ngClass]=\"{'activeTab':regSelected}\"\r\n                        role=\"button\"\r\n                        (click)=\"registerClicked()\"\r\n                        [ngStyle]=\"tabTextAlignStyle\">\r\n                        REGISTER\r\n                    </div>\r\n                </div>\r\n                <div [hidden]=\"regSelected\" class=\"loginFormSection\" [ngStyle]=\"inputTextStyle\">\r\n                        <div class=\"loginputField\">\r\n                                <mat-form-field color=\"accent\">\r\n                                        <input matInput \r\n                                        (focus)=\"inputFocused=true\" (blur)=\"inputFocused=false\"\r\n                                        #first\r\n                                        [(ngModel)]=\"username\" \r\n                                        placeholder=\"Username/Email\"\r\n                                        (ngModelChange)=\"onLoginUsernameChange($event)\"\r\n                                        (cdkAutofill)=\"onLoginAutofilled($event)\"\r\n                                        \r\n                                        >\r\n                                </mat-form-field>\r\n                                <mat-error *ngIf=\"invalidUsername\">{{errorUserMsg}}</mat-error>\r\n                        </div>\r\n                        <div class=\"loginputField\">\r\n                                <mat-form-field color=\"accent\">\r\n                                        <input matInput\r\n                                        (focus)=\"inputFocused=true\" (blur)=\"inputFocused=false\" \r\n                                        placeholder=\"Password\"\r\n                                        [(ngModel)]=\"pwd\"\r\n                                        (keyup.enter)=\"checkPasswordLogin()\"\r\n                                        (ngModelChange)=\"onPwdChange($event)\"\r\n                                        [type]=\"hidePwd ? 'password' : 'text'\">\r\n                                        <button mat-icon-button matSuffix (click)=\"hidePwd = !hidePwd\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                                <mat-icon>{{hidePwd ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                        </button>\r\n                                </mat-form-field>\r\n                                <mat-error *ngIf=\"invalidPassword\">Password must have 6-20 characters</mat-error>\r\n                               \r\n                        </div>\r\n                        <div class=\"loginButton\">\r\n                            <div class=\"buttons\">\r\n                                <button \r\n                                [ngStyle]=\"inputTextStyle\"\r\n                                [disabled]=\"invalidPassword || invalidUsername\"\r\n                                (click)=\"checkPasswordLogin()\" \r\n                                mat-raised-button>\r\n                                Login\r\n                            </button>\r\n                            <button \r\n                                [ngStyle]=\"inputTextStyle\" \r\n                                mat-raised-button\r\n                                (click)=\"openMusicGuest()\">\r\n                                Guest Login\r\n                            </button>\r\n                            </div>\r\n                            <mat-error *ngIf=\"loginError\">{{loginErrorMsg}}</mat-error>\r\n                            <mat-error *ngIf=\"showLoginText\" style=\"color: antiquewhite;\">Logging in....</mat-error>\r\n                        </div>\r\n                        \r\n        \r\n                </div>\r\n                <div [hidden]=\"loginSelected\" class=\"regFormSection\" [ngStyle]=\"inputTextStyle\">\r\n                        <div class=\"reginputField\">\r\n                                <mat-form-field color=\"accent\">\r\n                                        <input matInput\r\n                                        (focus)=\"inputFocused=true\" (blur)=\"inputFocused=false\"\r\n                                        [(ngModel)]=\"username\" \r\n                                        placeholder=\"Username\"\r\n                                        (ngModelChange)=\"onUsernameChange($event)\">\r\n                                </mat-form-field>\r\n                                <mat-error *ngIf=\"invalidUsername\">{{errorUserMsg}}</mat-error>\r\n                        </div>\r\n                        <div class=\"reginputField\">\r\n                                <mat-form-field color=\"accent\">\r\n                                        <input matInput\r\n                                        (focus)=\"inputFocused=true\" (blur)=\"inputFocused=false\"\r\n                                        [(ngModel)]=\"eml\" \r\n                                        placeholder=\"Email ID\"\r\n                                        (ngModelChange)=\"onEmailChange($event)\"\r\n                                       >\r\n                                </mat-form-field>\r\n                                <mat-error *ngIf=\"invalidEmail\">{{errorEmailMsg}}</mat-error>\r\n                        </div>\r\n                        <div class=\"reginputField\">\r\n                                <mat-form-field color=\"accent\">\r\n                                        <input matInput\r\n                                        (focus)=\"inputFocused=true\" (blur)=\"inputFocused=false\"\r\n                                        [(ngModel)]=\"pwd\"  \r\n                                        placeholder=\"Password\"\r\n                                        (ngModelChange)=\"onPwdChange($event)\"\r\n                                        [type]=\"hidePwd ? 'password' : 'text'\"\r\n                                       >\r\n                                       <button mat-icon-button matSuffix (click)=\"hidePwd = !hidePwd\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                                 <mat-icon>{{hidePwd ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                                        </button>\r\n                                </mat-form-field>\r\n                                <mat-error *ngIf=\"invalidPassword\">Password must have 6-20 characters</mat-error>\r\n                        </div>\r\n                        <div class=\"reginputField\">\r\n                                <mat-form-field color=\"accent\">\r\n                                        <input matInput\r\n                                        (focus)=\"inputFocused=true\" (blur)=\"inputFocused=false\"\r\n                                        [disabled]=\"!otpSentOnce\" \r\n                                        [(ngModel)]=\"otp\"\r\n                                        (ngModelChange)=\"onOTPChange($event)\" \r\n                                        placeholder=\"OTP\">\r\n                                </mat-form-field>\r\n                                <mat-error *ngIf=\"otpSentOnce && invalidOtp\">OTP doesn't match</mat-error>\r\n                        </div>\r\n                        <div class=\"regButton\">\r\n                            <button \r\n                                [ngStyle]=\"inputTextStyle\"\r\n                                [disabled]=\"invalidEmail || invalidPassword || invalidUsername\" \r\n                                mat-raised-button\r\n                                (click)=\"sendOTP()\">\r\n                                {{otpSentOnce?'Resend OTP':'Send OTP'}}\r\n                            </button>\r\n                                <button \r\n                                [ngStyle]=\"inputTextStyle\"\r\n                                [disabled]=\"!otpSentOnce || invalidEmail || invalidPassword || invalidUsername\" \r\n                                (click)=\"registerUser()\"\r\n                                mat-raised-button>Register</button>\r\n                        </div>\r\n        \r\n                </div>\r\n            </div>\r\n</div>\r\n\r\n\r\n    ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Demo/demo.component.scss":
/*!******************************************!*\
  !*** ./src/app/Demo/demo.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".launcherBg {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(45deg, #032d4c, #3a6073);\n}\n\n.LogoContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.link {\n  display: flex;\n  justify-content: center;\n  height: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  font-weight: lighter;\n  color: white;\n}\n\n.headerImg {\n  height: 95%;\n}\n\n.dot {\n  width: 1vh;\n  height: 1vh;\n  margin-top: 1.5vh;\n  margin-left: 0.5%;\n  border-radius: 1.5vh;\n  margin-right: 0.5%;\n  background: #64ffdb9f;\n  border: 2px solid black;\n}\n\n.dot.act {\n  background: rgba(1, 16, 20, 0.781);\n}\n\n.dots {\n  display: flex;\n  justify-content: center;\n  height: 50px;\n}\n\n.buttonNx {\n  position: absolute;\n  right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGVtby9EOlxcQW5ndWxhclxcT1NNL3NyY1xcYXBwXFxEZW1vXFxkZW1vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EZW1vL2RlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FDREY7O0FESUE7RUFDRSxrQ0FBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9EZW1vL2RlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxhdW5jaGVyQmd7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgICMwMzJkNGMsICMzYTYwNzMpO1xyXG59XHJcblxyXG4uTG9nb0NvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gXHJcbn1cclxuXHJcbi5saW5re1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXJJbWd7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbi5kb3R7XHJcbiAgd2lkdGg6IDF2aDtcclxuICBoZWlnaHQ6IDF2aDtcclxuICBtYXJnaW4tdG9wOiAxLjV2aDtcclxuICBtYXJnaW4tbGVmdDogMC41JTtcclxuICBib3JkZXItcmFkaXVzOiAxLjV2aDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNSU7XHJcbiAgYmFja2dyb3VuZDogIzY0ZmZkYjlmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZG90LmFjdHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDE2LCAyMCwgMC43ODEpO1xyXG59XHJcblxyXG4uZG90c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5idXR0b25OeHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbn0iLCIubGF1bmNoZXJCZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAzMmQ0YywgIzNhNjA3Myk7XG59XG5cbi5Mb2dvQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYWRlckltZyB7XG4gIGhlaWdodDogOTUlO1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDF2aDtcbiAgaGVpZ2h0OiAxdmg7XG4gIG1hcmdpbi10b3A6IDEuNXZoO1xuICBtYXJnaW4tbGVmdDogMC41JTtcbiAgYm9yZGVyLXJhZGl1czogMS41dmg7XG4gIG1hcmdpbi1yaWdodDogMC41JTtcbiAgYmFja2dyb3VuZDogIzY0ZmZkYjlmO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmRvdC5hY3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDE2LCAyMCwgMC43ODEpO1xufVxuXG4uZG90cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5idXR0b25OeCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/Demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/Demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var _demoStyle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demoStyle.service */ "./src/app/Demo/demoStyle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loginDataFetche.service */ "./src/app/services/loginDataFetche.service.ts");
/* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");







let DemoComponent = class DemoComponent {
    constructor(screenState, styleSetter, router, loginDtaFetcher) {
        this.screenState = screenState;
        this.styleSetter = styleSetter;
        this.router = router;
        this.loginDtaFetcher = loginDtaFetcher;
        this.errorShow = false;
        this.errorShowConf = false;
        this.current = 0;
        this.demoImages = [
            "demo.png",
            "demo1.jpg",
            "demo2.jpg",
            "demo5.jpg",
            "demo6.jpg",
            "demo3.jpg",
            "demo4.jpg"
        ];
    }
    ngOnInit() {
        this.screenState.screenSize.subscribe((scrSz) => {
            this.onScreensizeChange(scrSz);
        });
        //  this.router.navigateByUrl("/music"); 
    }
    onScreensizeChange(scrSz) {
        this.picStyle = this.styleSetter.picStyleSetter(scrSz);
        this.bottomStyle = this.styleSetter.bottomStyler(scrSz);
        this.fullLogoStyle = this.styleSetter.fullLogoStyler(scrSz);
        this.loginStyle = this.styleSetter.loginStyleSetter(scrSz);
        this.loaderStyle = this.styleSetter.loaderStyleSetter(scrSz);
        this.errorStyle = this.styleSetter.errorStyleSetter(scrSz);
    }
    goToMusic() {
        this.router.navigateByUrl("/music");
    }
    buttonClicked() {
        if (this.current == this.demoImages.length - 1) {
            this.goToMusic();
        }
        else {
            this.current++;
        }
    }
};
DemoComponent.ctorParameters = () => [
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
    { type: _demoStyle_service__WEBPACK_IMPORTED_MODULE_3__["demoStyleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_5__["LoginDataFetcher"] }
];
DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Demo/demo.component.html")).default,
        providers: [_demoStyle_service__WEBPACK_IMPORTED_MODULE_3__["demoStyleService"], _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_5__["LoginDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_6__["DataFetcher"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo.component.scss */ "./src/app/Demo/demo.component.scss")).default]
    })
], DemoComponent);



/***/ }),

/***/ "./src/app/Demo/demoStyle.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Demo/demoStyle.service.ts ***!
  \*******************************************/
/*! exports provided: demoStyleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoStyleService", function() { return demoStyleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let demoStyleService = class demoStyleService {
    constructor() {
    }
    loginStyleSetter(scrSz) {
        let boxSize = 0.4 * Math.min(scrSz.width, scrSz.height);
        return {
            'width': boxSize * 2 + 'px',
            'height': boxSize + 'px',
            'position': 'absolute',
            'top': (scrSz.height - boxSize) / 1.9 + 'px',
            'left': (scrSz.width - boxSize * 2) / 2 + 'px',
        };
    }
    errorStyleSetter(scrSz) {
        let boxSize = 0.1 * Math.min(scrSz.width, scrSz.height);
        return {
            'width': '100%',
            'height': boxSize + 'px',
            'position': 'absolute',
            'top': ((scrSz.height - boxSize) / 2 + boxSize + 50) + 'px',
            'text-align': 'center',
            'color': 'white'
        };
    }
    loaderStyleSetter(scrSz) {
        let boxSize = 0.4 * Math.min(scrSz.width, scrSz.height);
        return {
            'width': (boxSize * 2 - 2) + 'px',
            'height': boxSize - 16 + 'px',
            'margin-left': '1px'
        };
    }
    picStyleSetter(scrSz) {
        return {
            'width': (scrSz.width - 20) + 'px',
            'height': (scrSz.height - 100) + 'px',
            'padding': '10px',
        };
    }
    bottomStyler(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        return {
            'width': scrSz.width + 'px',
            'height': '80px',
        };
    }
    fullLogoStyler(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        return {
            'line-height': '1px',
        };
    }
};
demoStyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], demoStyleService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-player/music-player.component */ "./src/app/music-player/music-player.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./launcher/launcher.component */ "./src/app/launcher/launcher.component.ts");
/* harmony import */ var _Demo_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Demo/demo.component */ "./src/app/Demo/demo.component.ts");







const routes = [
    { path: 'music', component: _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_3__["MusicPlayerComponent"] },
    { path: 'demo', component: _Demo_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"] },
    { path: 'login', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: '', component: _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_5__["LauncherComponent"] },
    { path: '', redirectTo: 'launch', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerBar {\n  background-color: cadetblue;\n  margin: 0px;\n}\n\n.contentSection {\n  background-image: url('trianglify-lowres.png');\n  background-size: cover;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFuZ3VsYXJcXE9TTS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyQkFBQTtFQUNBLFdBQUE7QUNESjs7QURHQTtFQUlJLDhDQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5oZWFkZXJCYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uY29udGVudFNlY3Rpb257XHJcbiAgICAvL2JhY2tncm91bmQ6IHJnYigyNTIsNzAsMTA3KTtcclxuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1Miw3MCwxMDcsMSkgMCUsIHJnYmEoMjksNjcsODAsMSkgOTUlKTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90cmlhbmdsaWZ5LWxvd3Jlcy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iLCIuaGVhZGVyQmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNvbnRlbnRTZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy90cmlhbmdsaWZ5LWxvd3Jlcy5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW46IDBweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var _styleSetter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleSetter.service */ "./src/app/styleSetter.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let AppComponent = class AppComponent {
    constructor(iconRegistry, sanitizer, screenState, styleSetter) {
        this.iconRegistry = iconRegistry;
        this.screenState = screenState;
        this.styleSetter = styleSetter;
        this.title = 'OSM';
        iconRegistry.addSvgIcon('youtube', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/youtube.svg'));
        iconRegistry.addSvgIcon('ipod', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ipod.svg'));
        iconRegistry.addSvgIcon('play', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/playbt1.svg'));
        iconRegistry.addSvgIcon('pause', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pausse.svg'));
        iconRegistry.addSvgIcon('next', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/nxtIc.svg'));
        iconRegistry.addSvgIcon('prev', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/prevIc.svg'));
        iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
        iconRegistry.addSvgIcon('cross', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg'));
        iconRegistry.addSvgIcon('equalizer', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/equalizer.svg'));
        iconRegistry.addSvgIcon('playsimple', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/playsimple.svg'));
        iconRegistry.addSvgIcon('repeatOff', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/repeat.svg'));
        iconRegistry.addSvgIcon('repeatOn', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/repeatact.svg'));
        iconRegistry.addSvgIcon('repeatOne', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/repeatone.svg'));
        iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
        iconRegistry.addSvgIcon('up', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/uparrow.svg'));
        iconRegistry.addSvgIcon('curvearrow', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/curvearrow.svg'));
        iconRegistry.addSvgIcon('down', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow.svg'));
        iconRegistry.addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
        iconRegistry.addSvgIcon('editttl', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/editTtl.svg'));
        iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
        iconRegistry.addSvgIcon('addblack', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/addblack.svg'));
        iconRegistry.addSvgIcon('mute', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mute1.svg'));
        iconRegistry.addSvgIcon('one', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vol1.svg'));
        iconRegistry.addSvgIcon('two', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vol2.svg'));
        iconRegistry.addSvgIcon('three', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/volume3.svg'));
        iconRegistry.addSvgIcon('info', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/help.svg'));
        iconRegistry.addSvgIcon('gmail', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/gmail.svg'));
        iconRegistry.addSvgIcon('fb', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
        iconRegistry.addSvgIcon('lin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
        iconRegistry.addSvgIcon('web', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/web.svg'));
        iconRegistry.addSvgIcon('drag', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dragger.svg'));
        iconRegistry.addSvgIcon('plist', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vinyl.svg'));
        iconRegistry.addSvgIcon('plisthd', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/album.svg'));
        iconRegistry.addSvgIcon('shuffleOn', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/shuffleac.svg'));
        iconRegistry.addSvgIcon('shuffleOff', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/shuffle.svg'));
        iconRegistry.addSvgIcon('cancel', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cancel.svg'));
        iconRegistry.addSvgIcon('pllist', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/playlisticn.svg'));
        iconRegistry.addSvgIcon('hd', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/hd.svg'));
        iconRegistry.addSvgIcon('sd', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sd.svg'));
    }
    ngOnInit() {
        this.screenState.screenSize.subscribe((scrSz) => {
            this.onScreensizeChange(scrSz);
        });
        this.screenState.updatedScreenSize(window.innerWidth, window.innerHeight, this.checkIfMobile(window.innerWidth, window.innerHeight));
    }
    onResize(event) {
        this.screenState.updatedScreenSize(window.innerWidth, window.innerHeight, this.checkIfMobile(window.innerWidth, window.innerHeight));
    }
    checkIfMobile(wdt, hgt) {
        return (wdt / hgt) <= 1.3;
    }
    onScreensizeChange(scrSz) {
        console.log("screen size changed to", scrSz.width, "X", scrSz.height, " and is Mobile :", scrSz.isMobile);
        this.appStyle = this.styleSetter.appStyleSetter(scrSz);
        this.routerOutletStyle = this.styleSetter.routerOutletStyleSetter(scrSz);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
    { type: _styleSetter_service__WEBPACK_IMPORTED_MODULE_3__["styleSetterService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], AppComponent.prototype, "onResize", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"], _styleSetter_service__WEBPACK_IMPORTED_MODULE_3__["styleSetterService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-youtube-player */ "./node_modules/ng2-youtube-player/modules/ng2-youtube-player.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _music_add_music_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music-add/music-add.component */ "./src/app/music-add/music-add.component.ts");
/* harmony import */ var _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./queue/queue.component */ "./src/app/queue/queue.component.ts");
/* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./music-player/music-player.component */ "./src/app/music-player/music-player.component.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/buttons/buttons.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./launcher/launcher.component */ "./src/app/launcher/launcher.component.ts");
/* harmony import */ var _services_youtube_search_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/youtube-search.service */ "./src/app/services/youtube-search.service.ts");
/* harmony import */ var _services_youtube_search_injectables__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/youtube-search.injectables */ "./src/app/services/youtube-search.injectables.ts");
/* harmony import */ var _modal_comp_modal_comp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal-comp/modal-comp.component */ "./src/app/modal-comp/modal-comp.component.ts");
/* harmony import */ var angular_page_visibility__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-page-visibility */ "./node_modules/angular-page-visibility/fesm2015/angular-page-visibility.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var hammer_timejs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! hammer-timejs */ "./node_modules/hammer-timejs/hammer-time.js");
/* harmony import */ var hammer_timejs__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(hammer_timejs__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _Demo_demo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Demo/demo.component */ "./src/app/Demo/demo.component.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _music_add_music_add_component__WEBPACK_IMPORTED_MODULE_8__["MusicAddComponent"],
            _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["QueueComponent"],
            _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_10__["MusicPlayerComponent"],
            _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["SignUpComponent"],
            _launcher_launcher_component__WEBPACK_IMPORTED_MODULE_19__["LauncherComponent"],
            _modal_comp_modal_comp_component__WEBPACK_IMPORTED_MODULE_22__["ModalCompComponent"],
            _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["DialogOverviewExampleDialog"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["LogoutConfirmDialog"],
            _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["ModifyAddDialog"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["AppInfoDialog"],
            _Demo_demo_component__WEBPACK_IMPORTED_MODULE_26__["DemoComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["DemoConfirmDialog"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng2_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YoutubePlayerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__["TextFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            angular_page_visibility__WEBPACK_IMPORTED_MODULE_23__["AngularPageVisibilityModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"]
        ],
        providers: [_services_youtube_search_service__WEBPACK_IMPORTED_MODULE_20__["YouTubeSearchService"], _services_youtube_search_injectables__WEBPACK_IMPORTED_MODULE_21__["YouTubeServiceInjectables"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [
            _modal_comp_modal_comp_component__WEBPACK_IMPORTED_MODULE_22__["ModalCompComponent"],
            _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["DialogOverviewExampleDialog"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["LogoutConfirmDialog"],
            _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["ModifyAddDialog"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["AppInfoDialog"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__["DemoConfirmDialog"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/buttons/buttons.component.scss":
/*!************************************************!*\
  !*** ./src/app/buttons/buttons.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/buttons/buttons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/buttons/buttons.component.ts ***!
  \**********************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonsComponent = class ButtonsComponent {
    constructor() {
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    clicked() {
        this.buttonClicked.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonsComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ButtonsComponent.prototype, "buttonClicked", void 0);
ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buttons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buttons.component.scss */ "./src/app/buttons/buttons.component.scss")).default]
    })
], ButtonsComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  background: rgba(0, 0, 0, 0.7);\n  position: relative;\n  color: seashell;\n  border-radius: 2px;\n}\n\n.appName {\n  position: absolute;\n  left: 1%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: \"Cookie\", cursive;\n  font-size: 150%;\n}\n\n.appName .icons {\n  position: absolute;\n  top: 17%;\n  width: 3%;\n  height: 60%;\n}\n\n.appName .headerIco {\n  width: 28%;\n  height: 60%;\n  margin-top: 1%;\n  margin-right: 1%;\n}\n\n.userName {\n  right: 2%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: \"Cookie\", cursive;\n  font-size: 150%;\n  display: flex;\n}\n\n.isMobile .appName, .isMobile .userName {\n  font-size: 110%;\n}\n\n.logOut {\n  padding-left: 10px;\n  font-family: \"Ubuntu\", sans-serif;\n  font-size: 60%;\n  transform: translateY(20%);\n}\n\n.logOut .lgotext {\n  color: #69F0AE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxBbmd1bGFyXFxPU00vc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDRVI7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VSOztBRENBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0VKOztBRERJO0VBQ0ksY0FBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsMC43KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiBzZWFzaGVsbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmFwcE5hbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb29raWUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgLmljb25ze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MTclO1xyXG4gICAgICAgIHdpZHRoOiAzJTtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgIH1cclxuICAgIC5oZWFkZXJJY297XHJcbiAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gICAgfSAgICBcclxufVxyXG4udXNlck5hbWV7XHJcbiAgICByaWdodDogMiU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29va2llJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pc01vYmlsZSAuYXBwTmFtZSwuaXNNb2JpbGUgLnVzZXJOYW1le1xyXG4gICAgZm9udC1zaXplOiAxMTAlO1xyXG59XHJcblxyXG4ubG9nT3V0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDYwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gICAgLmxnb3RleHR7XHJcbiAgICAgICAgY29sb3I6ICM2OUYwQUU7XHJcbiAgICB9XHJcbn0iLCIuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHNlYXNoZWxsO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5hcHBOYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiQ29va2llXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cbi5hcHBOYW1lIC5pY29ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNyU7XG4gIHdpZHRoOiAzJTtcbiAgaGVpZ2h0OiA2MCU7XG59XG4uYXBwTmFtZSAuaGVhZGVySWNvIHtcbiAgd2lkdGg6IDI4JTtcbiAgaGVpZ2h0OiA2MCU7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4udXNlck5hbWUge1xuICByaWdodDogMiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiQ29va2llXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlzTW9iaWxlIC5hcHBOYW1lLCAuaXNNb2JpbGUgLnVzZXJOYW1lIHtcbiAgZm9udC1zaXplOiAxMTAlO1xufVxuXG4ubG9nT3V0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xufVxuLmxvZ091dCAubGdvdGV4dCB7XG4gIGNvbG9yOiAjNjlGMEFFO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, LogoutConfirmDialog, AppInfoDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutConfirmDialog", function() { return LogoutConfirmDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoDialog", function() { return AppInfoDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var _services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/youtube-search.service */ "./src/app/services/youtube-search.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let HeaderComponent = class HeaderComponent {
    constructor(screenState, dialog, router) {
        this.screenState = screenState;
        this.dialog = dialog;
        this.router = router;
    }
    ngOnInit() {
        this.screenState.screenSize.subscribe(screen => {
            this.screenSz = screen;
        });
    }
    onLogout() {
        if (this.username == 'Guest') {
            this.router.navigateByUrl("/login");
            return;
        }
        const dialogRef = this.dialog.open(LogoutConfirmDialog, {
            width: '250px',
            data: this.username
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            if (result && result == 'logout') {
                console.log("logged out");
                localStorage.setItem('loggedIn', 'false');
                localStorage.setItem('username', 'Guest');
                this.router.navigateByUrl("/login");
            }
        });
    }
    showInfo() {
        const dialogRef = this.dialog.open(AppInfoDialog, {
            width: '400px',
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "username", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        providers: [_services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__["YouTubeSearchService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);

let LogoutConfirmDialog = class LogoutConfirmDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
LogoutConfirmDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
LogoutConfirmDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'logout-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/logout-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], LogoutConfirmDialog);

let AppInfoDialog = class AppInfoDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.created = true;
        this.cred = false;
    }
    ngOnInit() {
    }
    FBRedirect() {
        window.open("https://www.facebook.com/soumyadip.chattopadhyay.1", "_blank");
    }
    LIRedirect() {
        window.open("https://www.linkedin.com/in/soumyadip-c-95106186", "_blank");
    }
    GMRedirect() {
        let emailTo = "soumya.c11@gmail.com";
        let emailCC = "onestopmusic.osm@yahoo.com";
        let emailSub = "One Stop Music Feedback/ Contact Creator";
        window.open('mailto:' + emailTo, '_blank');
    }
    WSRedirect() {
        window.open("https://soumyadip-me.github.io", "_blank");
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
AppInfoDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
AppInfoDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'info-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-details.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/info-details.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-details.scss */ "./src/app/header/info-details.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], AppInfoDialog);



/***/ }),

/***/ "./src/app/header/info-details.scss":
/*!******************************************!*\
  !*** ./src/app/header/info-details.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".abbr {\n  font-size: 150%;\n  font-family: \"Sedgwick Ave Display\", cursive;\n}\n\n.name {\n  font-family: \"Cookie\", cursive;\n  font-weight: 500;\n  font-size: 170%;\n  margin-top: 0;\n}\n\n.focused {\n  border-bottom: 2px solid rgba(255, 255, 255, 0.8);\n  padding-bottom: 10px;\n}\n\n.contacts {\n  display: flex;\n  justify-content: space-around;\n  padding-bottom: 15px;\n}\n\n.contacts .icons {\n  width: 40px;\n  height: 40px;\n  fill: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxBbmd1bGFyXFxPU00vc3JjXFxhcHBcXGhlYWRlclxcaW5mby1kZXRhaWxzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9pbmZvLWRldGFpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSw0Q0FBQTtBQ0NKOztBRENBO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRUo7O0FEQ0E7RUFDSSxpREFBQTtFQUNBLG9CQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ0VKOztBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaW5mby1kZXRhaWxzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJicntcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2VkZ3dpY2sgQXZlIERpc3BsYXknLCBjdXJzaXZlO1xyXG59XHJcbi5uYW1le1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb29raWUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTcwJTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5mb2N1c2Vke1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFjdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAuaWNvbnN7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGZpbGw6IGJsYWNrXHJcbiAgICB9XHJcbn0iLCIuYWJiciB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgZm9udC1mYW1pbHk6IFwiU2VkZ3dpY2sgQXZlIERpc3BsYXlcIiwgY3Vyc2l2ZTtcbn1cblxuLm5hbWUge1xuICBmb250LWZhbWlseTogXCJDb29raWVcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNzAlO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uZm9jdXNlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uY29udGFjdHMgLmljb25zIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZmlsbDogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/launcher/launcher.component.scss":
/*!**************************************************!*\
  !*** ./src/app/launcher/launcher.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".launcherBg {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(45deg, #032d4c, #3a6073);\n}\n\n.headerImg {\n  width: 100%;\n}\n\n.LogoContainer {\n  vertical-align: middle;\n}\n\n.abbrLogo {\n  font-size: 400%;\n  text-align: center;\n  font-family: \"Sedgwick Ave Display\", cursive;\n  -webkit-text-stroke: 1px black;\n  color: white;\n  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\n.fullLogo {\n  font-size: 150%;\n  text-align: center;\n  color: aliceblue;\n  font-family: \"Cookie\", cursive;\n}\n\n.loader {\n  border: 8px solid rgba(0, 0, 0, 0.8);\n  border-radius: 50%;\n  border-top: 8px solid #00968775;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\nbody {\n  overflow: hidden;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.item-1 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #009687bd;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@-webkit-keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n\n.item-1:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #009687bd;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 200ms;\n          animation-delay: 200ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n\n.item-2 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #009688;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n\n.item-2:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #009688;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 400ms;\n          animation-delay: 400ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n\n.item-3 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #42b1a7;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n\n.item-3:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #42b1a7;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 600ms;\n          animation-delay: 600ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n\n.item-4 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #009688;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n\n.item-4:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #009688;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 800ms;\n          animation-delay: 800ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n\n.item-5 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #64ffdbea;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n\n.item-5:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #64ffdbea;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 1000ms;\n          animation-delay: 1000ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF1bmNoZXIvRDpcXEFuZ3VsYXJcXE9TTS9zcmNcXGFwcFxcbGF1bmNoZXJcXGxhdW5jaGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXVuY2hlci9sYXVuY2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDRCw0Q0FBQTtFQUNDLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLCtGQUNJO0FDRlI7O0FEU0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDTko7O0FEU0E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDRCwwQ0FBQTtFQUE0QyxXQUFBO0VBQzNDLGtDQUFBO0FDTEo7O0FEUUU7RUFDRTtJQUFLLCtCQUFBO0VDSlA7RURLRTtJQUFPLGlDQUFBO0VDRlQ7QUFDRjs7QURJRTtFQUNFO0lBQUssdUJBQUE7RUNEUDtFREVFO0lBQU8seUJBQUE7RUNDVDtBQUNGOztBRHlCQTtFQUNFLGdCQUFBO0FDdkJGOztBRDBCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDdkJGOztBRDJCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBRUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN6Qko7O0FEYkU7RUFDRTtJQUNJLG1CQUFBO0VDZU47RURiRTtJQUVFLHFCQUFBO0VDY0o7RURaRTtJQUNFLFVBQUE7RUNjSjtBQUNGOztBRHhCRTtFQUNFO0lBQ0ksbUJBQUE7RUNlTjtFRGJFO0lBRUUscUJBQUE7RUNjSjtFRFpFO0lBQ0UsVUFBQTtFQ2NKO0FBQ0Y7O0FEZ0JJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNkTjs7QURURTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBRUEseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNXSjs7QURqREU7RUFDRTtJQUNJLG1CQUFBO0VDbUROO0VEakRFO0lBRUUscUJBQUE7RUNrREo7RURoREU7SUFDRSxVQUFBO0VDa0RKO0FBQ0Y7O0FEcEJJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNzQk47O0FEN0NFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQytDSjs7QURyRkU7RUFDRTtJQUNJLG1CQUFBO0VDdUZOO0VEckZFO0lBRUUscUJBQUE7RUNzRko7RURwRkU7SUFDRSxVQUFBO0VDc0ZKO0FBQ0Y7O0FEeERJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUMwRE47O0FEakZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ21GSjs7QUR6SEU7RUFDRTtJQUNJLG1CQUFBO0VDMkhOO0VEekhFO0lBRUUscUJBQUE7RUMwSEo7RUR4SEU7SUFDRSxVQUFBO0VDMEhKO0FBQ0Y7O0FENUZJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUM4Rk47O0FEckhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFFQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3VISjs7QUQ3SkU7RUFDRTtJQUNJLG1CQUFBO0VDK0pOO0VEN0pFO0lBRUUscUJBQUE7RUM4Sko7RUQ1SkU7SUFDRSxVQUFBO0VDOEpKO0FBQ0Y7O0FEaElJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNrSU4iLCJmaWxlIjoic3JjL2FwcC9sYXVuY2hlci9sYXVuY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGF1bmNoZXJCZ3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgIzAzMmQ0YywgIzNhNjA3Myk7XHJcbn1cclxuXHJcbi5oZWFkZXJJbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5Mb2dvQ29udGFpbmVye1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi5hYmJyTG9nb3tcclxuICAgIGZvbnQtc2l6ZTo0MDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBmb250LWZhbWlseTogJ1NlZGd3aWNrIEF2ZSBEaXNwbGF5JywgY3Vyc2l2ZTtcclxuICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OlxyXG4gICAgICAgIDNweCAzcHggMCAjMDAwLFxyXG4gICAgICAgIC0xcHggLTFweCAwICMwMDAsICBcclxuICAgICAgICAxcHggLTFweCAwICMwMDAsXHJcbiAgICAgICAgLTFweCAxcHggMCAjMDAwLFxyXG4gICAgICAgIDFweCAxcHggMCAjMDAwO1xyXG59XHJcblxyXG4uZnVsbExvZ297XHJcbiAgICBmb250LXNpemU6MTUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LWZhbWlseTogJ0Nvb2tpZScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICMwMDk2ODc3NTtcclxuICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG5cclxuXHJcbiAgJGNvbG9yLTQ6ICMwMDk2ODg7XHJcbiRjb2xvci0zOiAjNDJiMWE3O1xyXG4kY29sb3ItMjogIzAwOTY4ODtcclxuJGNvbG9yLTU6ICM2NGZmZGJlYTtcclxuJGNvbG9yLTE6ICMwMDk2ODdiZDtcclxuXHJcbiRjb2xvcjogJGNvbG9yLTEsICRjb2xvci0yLCAkY29sb3ItMywgJGNvbG9yLTQsICRjb2xvci01O1xyXG5cclxuQG1peGluIGFuaW0oKSB7XHJcbiAgQGtleWZyYW1lcyBzY2FsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDUwJSxcclxuICAgIDc1JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcclxuICAgIH1cclxuICAgIDc4JSwgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIDUge1xyXG4gIC5pdGVtLSN7JGl9IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ODNhMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgQGluY2x1ZGUgYW5pbSgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbnRoKCRjb2xvciwgJGkpO1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbnRoKCRjb2xvciwgJGkpO1xyXG4gICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgIGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDIwMG1zICogJGk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5sYXVuY2hlckJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDMyZDRjLCAjM2E2MDczKTtcbn1cblxuLmhlYWRlckltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uTG9nb0NvbnRhaW5lciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hYmJyTG9nbyB7XG4gIGZvbnQtc2l6ZTogNDAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTZWRnd2ljayBBdmUgRGlzcGxheVwiLCBjdXJzaXZlO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggMCAjMDAwLCAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XG59XG5cbi5mdWxsTG9nbyB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYWxpY2VibHVlO1xuICBmb250LWZhbWlseTogXCJDb29raWVcIiwgY3Vyc2l2ZTtcbn1cblxuLmxvYWRlciB7XG4gIGJvcmRlcjogOHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgIzAwOTY4Nzc1O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC8qIFNhZmFyaSAqL1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5pdGVtLTEge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjU4M2ExO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg3YmQ7XG4gIG1hcmdpbjogN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUsIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICB9XG4gIDc4JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLml0ZW0tMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODdiZDtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLml0ZW0tMiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmNTgzYTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gIG1hcmdpbjogN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUsIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICB9XG4gIDc4JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLml0ZW0tMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gIG9wYWNpdHk6IDAuNztcbiAgYW5pbWF0aW9uOiBzY2FsZSAycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwgMCwgMC40OSwgMS4wMik7XG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pdGVtLTMge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjU4M2ExO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJiMWE3O1xuICBtYXJnaW46IDdweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5Aa2V5ZnJhbWVzIHNjYWxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlLCA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcbiAgfVxuICA3OCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5pdGVtLTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJiMWE3O1xuICBvcGFjaXR5OiAwLjc7XG4gIGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xuICBhbmltYXRpb24tZGVsYXk6IDYwMG1zO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaXRlbS00IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2Y1ODNhMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgbWFyZ2luOiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQGtleWZyYW1lcyBzY2FsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSwgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG4gIH1cbiAgNzglLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uaXRlbS00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiA4MDBtcztcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLml0ZW0tNSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmNTgzYTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGZmZGJlYTtcbiAgbWFyZ2luOiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQGtleWZyYW1lcyBzY2FsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSwgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG4gIH1cbiAgNzglLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uaXRlbS01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0ZmZkYmVhO1xuICBvcGFjaXR5OiAwLjc7XG4gIGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xuICBhbmltYXRpb24tZGVsYXk6IDEwMDBtcztcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/launcher/launcher.component.ts":
/*!************************************************!*\
  !*** ./src/app/launcher/launcher.component.ts ***!
  \************************************************/
/*! exports provided: LauncherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LauncherComponent", function() { return LauncherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var _launcherStyle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./launcherStyle.service */ "./src/app/launcher/launcherStyle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loginDataFetche.service */ "./src/app/services/loginDataFetche.service.ts");
/* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");







let LauncherComponent = class LauncherComponent {
    constructor(screenState, styleSetter, router, loginDtaFetcher) {
        this.screenState = screenState;
        this.styleSetter = styleSetter;
        this.router = router;
        this.loginDtaFetcher = loginDtaFetcher;
        this.errorShow = false;
        this.errorShowConf = false;
    }
    ngOnInit() {
        this.screenState.screenSize.subscribe((scrSz) => {
            this.onScreensizeChange(scrSz);
        });
        setTimeout(() => {
            this.errorShow = true;
        }, 15000);
        this.loginDtaFetcher.getUser('Soumyadip').subscribe(name => {
            console.log(name == "Soumyadip");
            setTimeout(() => {
                (localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') == 'true') ?
                    this.router.navigateByUrl("/music") :
                    this.router.navigateByUrl("/login");
            }, 200);
        });
    }
    onScreensizeChange(scrSz) {
        this.logoStyle = this.styleSetter.logoStyleSetter(scrSz);
        this.abbrLogoStyle = this.styleSetter.abbrLogoStyler(scrSz);
        this.fullLogoStyle = this.styleSetter.fullLogoStyler(scrSz);
        this.loginStyle = this.styleSetter.loginStyleSetter(scrSz);
        this.loaderStyle = this.styleSetter.loaderStyleSetter(scrSz);
        this.errorStyle = this.styleSetter.errorStyleSetter(scrSz);
    }
};
LauncherComponent.ctorParameters = () => [
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
    { type: _launcherStyle_service__WEBPACK_IMPORTED_MODULE_3__["launcherStyleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_5__["LoginDataFetcher"] }
];
LauncherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-launcher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./launcher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/launcher/launcher.component.html")).default,
        providers: [_launcherStyle_service__WEBPACK_IMPORTED_MODULE_3__["launcherStyleService"], _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_5__["LoginDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_6__["DataFetcher"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./launcher.component.scss */ "./src/app/launcher/launcher.component.scss")).default]
    })
], LauncherComponent);



/***/ }),

/***/ "./src/app/launcher/launcherStyle.service.ts":
/*!***************************************************!*\
  !*** ./src/app/launcher/launcherStyle.service.ts ***!
  \***************************************************/
/*! exports provided: launcherStyleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launcherStyleService", function() { return launcherStyleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let launcherStyleService = class launcherStyleService {
    constructor() {
    }
    loginStyleSetter(scrSz) {
        let boxSize = 0.4 * Math.min(scrSz.width, scrSz.height);
        return {
            'width': boxSize * 2 + 'px',
            'height': boxSize + 'px',
            'position': 'absolute',
            'top': (scrSz.height - boxSize) / 1.9 + 'px',
            'left': (scrSz.width - boxSize * 2) / 2 + 'px',
        };
    }
    errorStyleSetter(scrSz) {
        let boxSize = 0.1 * Math.min(scrSz.width, scrSz.height);
        return {
            'width': '100%',
            'height': boxSize + 'px',
            'position': 'absolute',
            'top': ((scrSz.height - boxSize) / 2 + boxSize + 50) + 'px',
            'text-align': 'center',
            'color': 'white'
        };
    }
    loaderStyleSetter(scrSz) {
        let boxSize = 0.4 * Math.min(scrSz.width, scrSz.height);
        return {
            'width': (boxSize * 2 - 2) + 'px',
            'height': boxSize - 16 + 'px',
            'margin-left': '1px'
        };
    }
    logoStyleSetter(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        let wdt = scrSz.width / scrSz.height < 0.75 ? boxSize * 1.2 : boxSize * 0.8;
        return {
            'width': wdt + 'px',
            'height': (scrSz.height - boxSize) + 'px',
            'position': 'absolute',
            'top': '50px',
            'padding-top': (scrSz.height - boxSize) / 8 + 'px',
            'left': (scrSz.width - wdt) / 2 + 'px',
            'font-size': (scrSz.height - boxSize) / (scrSz.isMobile ? 15 : 10) + 'px'
        };
    }
    abbrLogoStyler(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        return {
            'line-height': ((scrSz.height - boxSize) / 3) + 'px',
        };
    }
    fullLogoStyler(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        return {
            'line-height': '1px',
        };
    }
};
launcherStyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], launcherStyleService);



/***/ }),

/***/ "./src/app/modal-comp/modal-comp.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modal-comp/modal-comp.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-box {\n  width: 95%;\n  margin: auto;\n  margin-top: 5px;\n  height: 60px;\n  padding: 1%;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  cursor: move;\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  font-size: 100%;\n  position: relative;\n}\n.example-box .thumbNail {\n  width: 30px;\n  height: 40px;\n  margin-left: 5px;\n  margin-right: 5px;\n  position: relative;\n}\n.example-box .thumbNail > img {\n  height: 90%;\n  width: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n}\n.example-box .songTitle {\n  height: 35px;\n  width: 60%;\n  padding-left: 10%;\n  padding-right: 5%;\n  padding-top: 3%;\n  padding-bottom: 2%;\n  font-family: \"Ubuntu\", sans-serif;\n}\n.example-box .songTitle .title {\n  margin-bottom: 3px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.example-box .songTitle .chanell {\n  font-size: 70%;\n  color: #64ffda;\n}\n.example-box .closer {\n  position: absolute;\n  top: 20px;\n  right: 10px;\n}\n.mat-dialog-title {\n  margin: 0 0 -10px;\n  display: block;\n}\n.mat-dialog-title mat-form-field {\n  margin-left: 5px;\n  width: 230px;\n}\n.mat-dialog-title mat-form-field input {\n  padding-left: 5px;\n}\n.mat-dialog-actions {\n  padding: 16px 0;\n  display: flex;\n  justify-content: flex-end;\n  min-height: 52px;\n  align-items: center;\n  margin-bottom: -24px;\n}\n.mat-dialog-content {\n  display: block;\n  margin: 0 -24px;\n  padding: 0 11px;\n  max-height: 300px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.mat-dialog-content::-webkit-scrollbar {\n  width: 2px;\n}\n.isMobile .songTitle {\n  font-size: 80%;\n  padding-left: 8%;\n}\n.isMobile .thumbNail > img {\n  height: 70%;\n}\n.loader {\n  height: 100px;\n  position: relative;\n}\n.loader .loadText {\n  position: absolute;\n  top: 30%;\n  width: 100%;\n  text-align: center;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 400px) {\n  .songTitle {\n    font-size: 80%;\n    padding-left: 8%;\n  }\n\n  .thumbNail > img {\n    height: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtY29tcC9EOlxcQW5ndWxhclxcT1NNL3NyY1xcYXBwXFxtb2RhbC1jb21wXFxtb2RhbC1jb21wLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2RhbC1jb21wL21vZGFsLWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREdJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNEUjtBREVRO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREVRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNBWjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FETUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNISjtBRElJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDRlI7QURHUTtFQUNJLGlCQUFBO0FDRFo7QURZQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNUSjtBRFlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUNUSjtBRGFBO0VBQ0ksVUFBQTtBQ1ZKO0FEZUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNaUjtBRGVJO0VBQ0ksV0FBQTtBQ2JSO0FEaUJBO0VBRUksYUFBQTtFQUNBLGtCQUFBO0FDZko7QURnQkk7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNkSjtBRGtCRTtFQUNFO0lBQUssK0JBQUE7RUNkUDtFRGVFO0lBQU8saUNBQUE7RUNaVDtBQUNGO0FEY0U7RUFDRTtJQUFLLHVCQUFBO0VDWFA7RURZRTtJQUFPLHlCQUFBO0VDVFQ7QUFDRjtBRFdFO0VBRUU7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7RUNWTjs7RURhRTtJQUNJLFdBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtY29tcC9tb2RhbC1jb21wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYm94IHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7ICAgIFxyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnRodW1iTmFpbHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgPmltZ3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLnNvbmdUaXRsZXtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206M3B4IDtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGFuZWxse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDcwJTtcclxuICAgICAgICAgICAgY29sb3I6IzY0ZmZkYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNsb3NlcntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgfSAgXHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMCAwIC0xMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIG1pbi1oZWlnaHQ6IDUycHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTI0cHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgLTI0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4ubWF0LWRpYWxvZy1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gIH1cclxuXHJcbi5pc01vYmlsZXtcclxuXHJcbiAgICAuc29uZ1RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRodW1iTmFpbD5pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcbn0gXHJcblxyXG4ubG9hZGVyIHtcclxuICAgXHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmxvYWRUZXh0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcblxyXG4gIEBtZWRpYShtYXgtd2lkdGg6NDAwcHgpe1xyXG4gICAgICAgXHJcbiAgICAuc29uZ1RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRodW1iTmFpbD5pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gIH0gIiwiLmV4YW1wbGUtYm94IHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leGFtcGxlLWJveCAudGh1bWJOYWlsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leGFtcGxlLWJveCAudGh1bWJOYWlsID4gaW1nIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5leGFtcGxlLWJveCAuc29uZ1RpdGxlIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbn1cbi5leGFtcGxlLWJveCAuc29uZ1RpdGxlIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZXhhbXBsZS1ib3ggLnNvbmdUaXRsZSAuY2hhbmVsbCB7XG4gIGZvbnQtc2l6ZTogNzAlO1xuICBjb2xvcjogIzY0ZmZkYTtcbn1cbi5leGFtcGxlLWJveCAuY2xvc2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIG1hcmdpbjogMCAwIC0xMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYXQtZGlhbG9nLXRpdGxlIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDIzMHB4O1xufVxuLm1hdC1kaWFsb2ctdGl0bGUgbWF0LWZvcm0tZmllbGQgaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWluLWhlaWdodDogNTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogLTI0cHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIC0yNHB4O1xuICBwYWRkaW5nOiAwIDExcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAycHg7XG59XG5cbi5pc01vYmlsZSAuc29uZ1RpdGxlIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHBhZGRpbmctbGVmdDogOCU7XG59XG4uaXNNb2JpbGUgLnRodW1iTmFpbCA+IGltZyB7XG4gIGhlaWdodDogNzAlO1xufVxuXG4ubG9hZGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvYWRlciAubG9hZFRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuc29uZ1RpdGxlIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDglO1xuICB9XG5cbiAgLnRodW1iTmFpbCA+IGltZyB7XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modal-comp/modal-comp.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modal-comp/modal-comp.component.ts ***!
  \****************************************************/
/*! exports provided: ModalCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCompComponent", function() { return ModalCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/youtube-search.service */ "./src/app/services/youtube-search.service.ts");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");





let ModalCompComponent = class ModalCompComponent {
    constructor(dialogRef, data, youtube) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.youtube = youtube;
        this.searchResults = [];
        this.checkboxBool = [true];
        this.noOfTru = 1;
        this.selectIndex = 0;
        this.isEmptySearch = false;
        this.showLoading = true;
        this.titleText = '';
    }
    ngOnInit() {
        this.showLoading = true;
        this.youtube.search(this.data.search).subscribe(searchList => {
            this.searchResults = searchList;
            if (this.searchResults.length == 0) {
                this.isEmptySearch = true;
                return;
            }
            if (this.data.type == 1) {
                this.searchResults = this.searchResults.slice(0, 4);
            }
            else {
                this.searchResults = this.searchResults.slice(0, 20);
            }
            for (let result in this.searchResults) {
                this.checkboxBool.push(false);
            }
            this.showLoading = false;
            this.isEmptySearch = false;
            this.titleText = ('').concat(this.searchResults[0].title.split('|')[0].substring(0, 30));
            this.selectedVal = this.searchResults[0];
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    boolChange(value, index) {
        if (value) {
            this.noOfTru++;
        }
        else {
            this.noOfTru--;
        }
        if (this.noOfTru == 1) {
            for (let result in this.checkboxBool)
                if (this.checkboxBool[result] == true) {
                    this.titleText = ('').concat(this.searchResults[result].title.split('|')[0].substring(0, 30));
                }
        }
    }
    sendData() {
        //console.log("sending....");
        let resultArr = [];
        for (let result in this.searchResults) {
            //console.log(this.checkboxBool[result]);
            if (this.checkboxBool[result] == true) {
                resultArr.push({
                    id: this.searchResults[result].id,
                    title: this.searchResults[result].title,
                    thumbnailUrl: this.searchResults[result].thumbnailUrl
                });
            }
        }
        if (resultArr.length == 1 && this.titleText.length > 0) {
            resultArr[0].title = this.titleText;
        }
        return resultArr;
    }
};
ModalCompComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _services_youtube_search_service__WEBPACK_IMPORTED_MODULE_3__["YouTubeSearchService"] }
];
ModalCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-comp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-comp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-comp/modal-comp.component.html")).default,
        providers: [_services_screen_size_service__WEBPACK_IMPORTED_MODULE_4__["screenSizeState"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-comp.component.scss */ "./src/app/modal-comp/modal-comp.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalCompComponent);



/***/ }),

/***/ "./src/app/music-add/music-add.component.scss":
/*!****************************************************!*\
  !*** ./src/app/music-add/music-add.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".adder {\n  height: 100%;\n  width: 98%;\n  margin: auto;\n  position: relative;\n}\n.adder .box {\n  width: 100%;\n  height: 90%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n.adder .inputBox {\n  width: 65%;\n  height: 0px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 30px;\n  background: #2d2d2dad;\n  color: white;\n  padding: 20px;\n  margin-left: 3%;\n}\n.adder input:focus {\n  outline-color: transparent;\n  border-color: #64ffda;\n}\n.adder .buttons {\n  width: 15%;\n  height: 44px;\n  position: absolute;\n  top: 50%;\n  left: 83%;\n  transform: translateY(-50%);\n}\n.adder .buttons .icons {\n  padding-left: 12%;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  height: 30px;\n  width: 30px;\n}\n.adder .horizontal .inputBox {\n  width: 60%;\n  height: 10px;\n}\n.adder .horizontal .buttons {\n  width: 30%;\n  height: 54px;\n  left: 72%;\n  transform: translateY(-50%);\n}\n.adder .horizontal .buttons .icons {\n  height: 40px;\n  width: 40px;\n}\n.box.isMobile {\n  display: flex;\n  justify-content: flex-start;\n}\n.adderinputField {\n  width: 100%;\n  height: 30%;\n  padding-top: 3%;\n  align-content: center;\n  color: white;\n}\n.adderinputField > mat-form-field {\n  width: 90%;\n  height: 100%;\n  padding-left: 5%;\n}\n.adderinputField mat-error {\n  width: 84%;\n  padding-left: 8%;\n  padding-top: 0;\n  font-size: 80%;\n  text-align: right;\n}\n.isMobile .adderinputField {\n  width: 50%;\n  height: 30%;\n  padding-top: 1%;\n  align-content: center;\n  color: white;\n}\n.isMobile .adderinputField > mat-form-field {\n  width: 90%;\n  height: 100%;\n  padding-left: 5%;\n}\n.isMobile .adderinputField mat-error {\n  width: 84%;\n  padding-left: 8%;\n  padding-top: 10px;\n  font-size: 60%;\n  text-align: right;\n}\n.bottomFIeld {\n  display: flex;\n  justify-content: flex-start;\n}\n.bottomFIeld .bottom {\n  height: 100%;\n  width: 60%;\n  padding-left: 5%;\n}\n.bottomFIeld mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.isMobile .bottomFIeld {\n  display: flex;\n  justify-content: flex-start;\n}\n.isMobile .bottomFIeld .bottom {\n  height: 100%;\n  width: 70%;\n  padding-left: 5%;\n}\n.isMobile .bottomFIeld mat-form-field {\n  width: 100%;\n  height: 100%;\n}\n.icons {\n  height: 80%;\n  width: 13%;\n  padding-top: 1%;\n}\n.isMobile .icons {\n  height: 100%;\n  width: 13%;\n  padding-top: 20px;\n  padding-left: 5%;\n}\n.adderMob {\n  width: 95%;\n  height: 95%;\n  margin-top: 1%;\n  margin-left: 2.5%;\n  background: transparent;\n  display: flex;\n  justify-content: space-between;\n}\n.adderMob .box {\n  height: 100%;\n  background-color: black;\n  border: 2px solid #64ffda;\n  width: 80%;\n  border-radius: 25px;\n  display: flex;\n  justify-content: space-between;\n}\n.adderMob .box > input {\n  height: 100%;\n  width: 80%;\n  background: transparent;\n  border: none;\n  padding-left: 7%;\n  color: whitesmoke;\n}\n.adderMob .box > input:focus {\n  outline: 0;\n}\n.adderMob .box .srch {\n  color: white;\n  width: 12%;\n  font-size: 120%;\n  padding-top: 3%;\n}\n.adderMob .searIcon {\n  height: 68%;\n  padding-top: 2.5%;\n  padding-left: 3%;\n  width: 12%;\n}\n.adderMob .searIcon .icon {\n  border: 1.5px solid #64ffda;\n  border-radius: 25px;\n}\n.hideSearch {\n  position: absolute;\n  left: 0%;\n  width: 100%;\n}\n.hideSearch .searIcon {\n  width: 80%;\n  padding-top: 7%;\n  height: 90%;\n}\n.hideSearch .searIcon .icon {\n  border: none;\n  height: 85%;\n  width: 40%;\n}\n.suggestions {\n  width: 65%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.9);\n  top: 110%;\n  left: 8%;\n}\n.suggestion {\n  padding: 4%;\n  color: whitesmoke;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-size: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMtYWRkL0Q6XFxBbmd1bGFyXFxPU00vc3JjXFxhcHBcXG11c2ljLWFkZFxcbXVzaWMtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tdXNpYy1hZGQvbXVzaWMtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNFUjtBREFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNFUjtBREFJO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtBQ0VSO0FEQ0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ0NSO0FEQVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0VaO0FER1E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0RaO0FESVE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQ0ZaO0FER1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RoQjtBRFNBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ05KO0FET0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTFI7QURRSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNOUjtBRFNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDTko7QURPSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRFFJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNOUjtBRFVBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FDUEo7QURRSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNOUjtBRFdBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FDUko7QURTSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNQUjtBRFNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNQUjtBRFlBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDVEo7QURZQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEY0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDWEo7QURZSTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDVlI7QURXUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1RaO0FEV1E7RUFDSSxVQUFBO0FDVFo7QURXUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNUWjtBRFlJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDVlI7QURXUTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUNUWjtBRGNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEWUk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNWUjtBRFdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDVFo7QURlQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNaSjtBRGVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvbXVzaWMtYWRkL211c2ljLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRlcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYm94e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIC5pbnB1dEJveCB7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJkMmQyZGFkO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTsgICBcclxuICAgIH1cclxuICAgIGlucHV0OmZvY3Vze1xyXG4gICAgICAgIG91dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjRmZmRhO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnV0dG9uc3tcclxuICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogODMlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAuaWNvbnN7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgIC5ob3Jpem9udGFse1xyXG4gICAgICAgIC5pbnB1dEJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25ze1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDcyJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAuaWNvbnN7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uYm94LmlzTW9iaWxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmFkZGVyaW5wdXRGaWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICA+bWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG1hdC1lcnJvcntcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOjgwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0IDtcclxuICAgIH1cclxufVxyXG4uaXNNb2JpbGUgLmFkZGVyaW5wdXRGaWVsZHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHBhZGRpbmctdG9wOjElO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgPm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBtYXQtZXJyb3J7XHJcbiAgICAgICAgd2lkdGg6IDg0JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDglO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjYwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0IDtcclxuICAgIH1cclxufVxyXG5cclxuLmJvdHRvbUZJZWxke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC5ib3R0b217XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uaXNNb2JpbGUgLmJvdHRvbUZJZWxke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC5ib3R0b217XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uaWNvbnN7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiAxMyU7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbn1cclxuXHJcbi5pc01vYmlsZSAuaWNvbnN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTMlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5cclxuXHJcbi5hZGRlck1vYntcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIuNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuYm94e1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNjRmZmRhO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICA+aW5wdXR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3JTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgID5pbnB1dDpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNyY2h7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEyJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJJY29ue1xyXG4gICAgICAgIGhlaWdodDogNjglO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyLjUlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICAgICAgd2lkdGg6IDEyJTtcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNjRmZmRhO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5oaWRlU2VhcmNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5zZWFySWNvbntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDg1JTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWdnZXN0aW9uc3tcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICB0b3A6IDExMCU7XHJcbiAgICBsZWZ0OiA4JTtcclxufVxyXG5cclxuLnN1Z2dlc3Rpb257XHJcbiAgICBwYWRkaW5nOjQlO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zaXplOiAydmg7XHJcbn1cclxuIiwiLmFkZGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hZGRlciAuYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYWRkZXIgLmlucHV0Qm94IHtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogIzJkMmQyZGFkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbn1cbi5hZGRlciBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICM2NGZmZGE7XG59XG4uYWRkZXIgLmJ1dHRvbnMge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDgzJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmFkZGVyIC5idXR0b25zIC5pY29ucyB7XG4gIHBhZGRpbmctbGVmdDogMTIlO1xuICBwYWRkaW5nLXRvcDogN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmFkZGVyIC5ob3Jpem9udGFsIC5pbnB1dEJveCB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTBweDtcbn1cbi5hZGRlciAuaG9yaXpvbnRhbCAuYnV0dG9ucyB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogNTRweDtcbiAgbGVmdDogNzIlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uYWRkZXIgLmhvcml6b250YWwgLmJ1dHRvbnMgLmljb25zIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLmJveC5pc01vYmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmFkZGVyaW5wdXRGaWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hZGRlcmlucHV0RmllbGQgPiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cbi5hZGRlcmlucHV0RmllbGQgbWF0LWVycm9yIHtcbiAgd2lkdGg6IDg0JTtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGZvbnQtc2l6ZTogODAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmlzTW9iaWxlIC5hZGRlcmlucHV0RmllbGQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgcGFkZGluZy10b3A6IDElO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pc01vYmlsZSAuYWRkZXJpbnB1dEZpZWxkID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG4uaXNNb2JpbGUgLmFkZGVyaW5wdXRGaWVsZCBtYXQtZXJyb3Ige1xuICB3aWR0aDogODQlO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiA2MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYm90dG9tRkllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYm90dG9tRkllbGQgLmJvdHRvbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cbi5ib3R0b21GSWVsZCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pc01vYmlsZSAuYm90dG9tRkllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uaXNNb2JpbGUgLmJvdHRvbUZJZWxkIC5ib3R0b20ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG4uaXNNb2JpbGUgLmJvdHRvbUZJZWxkIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmljb25zIHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMyU7XG4gIHBhZGRpbmctdG9wOiAxJTtcbn1cblxuLmlzTW9iaWxlIC5pY29ucyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEzJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5hZGRlck1vYiB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogOTUlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYWRkZXJNb2IgLmJveCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2NGZmZGE7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hZGRlck1vYiAuYm94ID4gaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogNyU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLmFkZGVyTW9iIC5ib3ggPiBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uYWRkZXJNb2IgLmJveCAuc3JjaCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEyJTtcbiAgZm9udC1zaXplOiAxMjAlO1xuICBwYWRkaW5nLXRvcDogMyU7XG59XG4uYWRkZXJNb2IgLnNlYXJJY29uIHtcbiAgaGVpZ2h0OiA2OCU7XG4gIHBhZGRpbmctdG9wOiAyLjUlO1xuICBwYWRkaW5nLWxlZnQ6IDMlO1xuICB3aWR0aDogMTIlO1xufVxuLmFkZGVyTW9iIC5zZWFySWNvbiAuaWNvbiB7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzY0ZmZkYTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmhpZGVTZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5oaWRlU2VhcmNoIC5zZWFySWNvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctdG9wOiA3JTtcbiAgaGVpZ2h0OiA5MCU7XG59XG4uaGlkZVNlYXJjaCAuc2Vhckljb24gLmljb24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogODUlO1xuICB3aWR0aDogNDAlO1xufVxuXG4uc3VnZ2VzdGlvbnMge1xuICB3aWR0aDogNjUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgdG9wOiAxMTAlO1xuICBsZWZ0OiA4JTtcbn1cblxuLnN1Z2dlc3Rpb24ge1xuICBwYWRkaW5nOiA0JTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDJ2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/music-add/music-add.component.ts":
/*!**************************************************!*\
  !*** ./src/app/music-add/music-add.component.ts ***!
  \**************************************************/
/*! exports provided: MusicAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicAddComponent", function() { return MusicAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/musicDataFetcher.service */ "./src/app/services/musicDataFetcher.service.ts");
/* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
/* harmony import */ var _services_youtube_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/youtube-search.service */ "./src/app/services/youtube-search.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _modal_comp_modal_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-comp/modal-comp.component */ "./src/app/modal-comp/modal-comp.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











let MusicAddComponent = class MusicAddComponent {
    constructor(dialog, screenState, musicDataFetcher, dataFetcher) {
        this.dialog = dialog;
        this.screenState = screenState;
        this.musicDataFetcher = musicDataFetcher;
        this.dataFetcher = dataFetcher;
        this.title = '';
        this.searchInp = '';
        this.invalidURL = true;
        this.invalidTitle = true;
        this.inputFocused = false;
        this.isOpen = false;
        this.hideSearch = true;
        this.suggestions = [];
        this.showSuggestions = false;
        this.showSuggestionsLoading = false;
        this.playlists = [];
        this.selectedPlaylist = 0;
        this.mode = "mobile";
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.txtQueryChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    ngOnInit() {
        this.screenState.screenSize.subscribe(scrSz => {
            this.screenSt = scrSz;
        });
        this.txtQueryChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(query => this.beforeSuggestions()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(query => this.musicDataFetcher.getYoutubeAutocomplete(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(() => this.onError()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(data => this.setSuggestions(data))).subscribe();
    }
    onSelectSuggestion(query) {
        this.searchInp = query;
        this.showSuggestions = false;
        this.openDialog(0);
    }
    onError() {
        let errVal = ["", [["No results"]]];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(errVal);
    }
    beforeSuggestions() {
        this.suggestions = [];
        this.showSuggestions = true;
        this.showSuggestionsLoading = true;
    }
    hideClick() {
        if (this.isOpen) {
            this.isOpen = !this.isOpen;
            this.searchInp = "";
            this.showSuggestions = false;
            this.suggestions = [];
            setTimeout(() => {
                this.hideSearch = !this.hideSearch;
                this.onSearch.emit(this.hideSearch);
            }, 300);
        }
        else {
            this.hideSearch = !this.hideSearch;
            this.onSearch.emit(this.hideSearch);
            setTimeout(() => {
                this.isOpen = !this.isOpen;
                this.input.nativeElement.focus();
            }, 100);
        }
    }
    openDialog(type) {
        if (this.input) {
            this.input.nativeElement.blur();
        }
        if (this.input1) {
            this.input1.nativeElement.blur();
        }
        if (this.searchInp.length == 0) {
            return;
        }
        const dialogRef = this.dialog.open(_modal_comp_modal_comp_component__WEBPACK_IMPORTED_MODULE_7__["ModalCompComponent"], {
            width: '500px',
            data: { id: '',
                title: '',
                search: this.searchInp,
                type: type
            }
        });
        dialogRef.afterClosed().subscribe((results) => {
            //console.log('The dialog was closed');
            if (results && results.length > 0) {
                for (let index in results) {
                    // setTimeout(() => {
                    //   this.addValue(results[index].id,results[index].title,results[index].thumbnailUrl);
                    // }, (+index*1000));
                    this.addValue(results[index].id, results[index].title, results[index].thumbnailUrl);
                }
            }
        });
    }
    addValue(id, title, thumb) {
        let videoElem = {
            videoId: id,
            title: title.split('|')[0].substring(0, 30),
            thumbnail: thumb
        };
        if (localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') == 'true') {
            let user = localStorage.getItem('username') ? localStorage.getItem('username') : 'Guest';
            if (user != 'Guest') {
                videoElem.username = user.substring(1, user.length - 1);
                if (this.playlists[this.selectedPlaylist].id >= 0) {
                    videoElem.playlist = this.playlists[this.selectedPlaylist].playlist;
                }
                this.musicDataFetcher.saveSong(videoElem).subscribe((data) => {
                    console.log(data);
                    videoElem.id = data;
                    this.onAdd.emit(videoElem);
                });
            }
        }
        else {
            this.onAdd.emit(videoElem);
        }
    }
    onURLChange() {
        this.invalidURL = false;
    }
    setSuggestions(data) {
        let results = (JSON.parse(data[0])[1]);
        results = results.map(item => item[0]);
        this.suggestions = results.slice(0, 5);
        this.showSuggestionsLoading = false;
    }
    onChangeInput(query) {
        var regex = new RegExp("^[a-zA-Z0-9 ]{1,}$");
        if (query.length > 0 && regex.test(query)) {
            console.log("test passed");
            this.txtQueryChanged.next(query);
        }
        else {
            console.log("test failed");
            this.showSuggestions = false;
        }
    }
    onTitleChange() {
        this.invalidTitle = this.title.length == 0;
    }
    getPhotoUrl(id) {
        return "http://img.youtube.com/vi/" + id + "/hqdefault.jpg";
    }
    getIdFromUrl(url) {
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        }
        else {
            return '-1';
        }
    }
};
MusicAddComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
    { type: _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__["MusicDataFetcher"] },
    { type: _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["DataFetcher"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MusicAddComponent.prototype, "playlists", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MusicAddComponent.prototype, "selectedPlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MusicAddComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MusicAddComponent.prototype, "onAdd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MusicAddComponent.prototype, "onSearch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("input", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], MusicAddComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("input1", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], MusicAddComponent.prototype, "input1", void 0);
MusicAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-music-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music-add/music-add.component.html")).default,
        providers: [_services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__["MusicDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["DataFetcher"], _services_youtube_search_service__WEBPACK_IMPORTED_MODULE_5__["YouTubeSearchService"]],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('openClose', [
                // ...
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                    width: '80%',
                    opacity: 1,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
                    width: '5%',
                    opacity: 0.9,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('0.3s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('0.3s')
                ]),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music-add.component.scss */ "./src/app/music-add/music-add.component.scss")).default]
    })
], MusicAddComponent);



/***/ }),

/***/ "./src/app/music-player/music-player.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/music-player/music-player.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setBackground {\n  background-image: url('trianglify-lowres.png');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMtcGxheWVyL0Q6XFxBbmd1bGFyXFxPU00vc3JjXFxhcHBcXG11c2ljLXBsYXllclxcbXVzaWMtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tdXNpYy1wbGF5ZXIvbXVzaWMtcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbXVzaWMtcGxheWVyL211c2ljLXBsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXRCYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy90cmlhbmdsaWZ5LWxvd3Jlcy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSIsIi5zZXRCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy90cmlhbmdsaWZ5LWxvd3Jlcy5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/music-player/music-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/music-player/music-player.component.ts ***!
  \********************************************************/
/*! exports provided: MusicPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerComponent", function() { return MusicPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var _musicPlayerStyle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./musicPlayerStyle.service */ "./src/app/music-player/musicPlayerStyle.service.ts");
/* harmony import */ var _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/musicDataFetcher.service */ "./src/app/services/musicDataFetcher.service.ts");
/* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _music_add_music_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../music-add/music-add.component */ "./src/app/music-add/music-add.component.ts");
/* harmony import */ var _services_PlayList_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/PlayList.service */ "./src/app/services/PlayList.service.ts");
/* harmony import */ var _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../queue/queue.component */ "./src/app/queue/queue.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/loginDataFetche.service */ "./src/app/services/loginDataFetche.service.ts");












let MusicPlayerComponent = class MusicPlayerComponent {
    constructor(screenState, loginDtaFetcher, styleSetter, musicDataFetcher, playlistFetcher) {
        this.screenState = screenState;
        this.loginDtaFetcher = loginDtaFetcher;
        this.styleSetter = styleSetter;
        this.musicDataFetcher = musicDataFetcher;
        this.playlistFetcher = playlistFetcher;
        this.expanded = true;
        this.lastScreenSz = {
            height: 0,
            width: 0,
            isMobile: false
        };
        this.noOfSongAdded = 0;
        this.largePlayer = true;
        this.mobileDimset = false;
        this.defplayerQueue = [
            {
                videoId: 'P8PWN1OmZOA',
                thumbnail: "https://img.youtube.com/vi/P8PWN1OmZOA/hqdefault.jpg",
                title: 'Tu Jaane Na'
            }
        ];
        this.playlists = [
            {
                id: -1,
                playlist: 'Default',
                isDefault: 'Y',
                username: ''
            }
        ];
        this.defaultPlaylist = {
            id: -1,
            playlist: 'Default',
            isDefault: 'Y',
            username: ''
        };
        this.selectedPlaylist = 0;
        this.addable = false;
        this.initCallDone = false;
        this.currentIndex = -1;
    }
    ngOnInit() {
        this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["interval"])(25 * 60 * 1000)
            .subscribe((val) => {
            this.loginDtaFetcher.getUser('Soumyadip').subscribe(name => {
                console.log("Keep Server Alive");
            });
        });
    }
    ngAfterViewInit() {
        this.screenState.screenSize.subscribe(screen => {
            if (!this.initCallDone) {
                this.largePlayer = screen.isMobile;
                this.initCallDone = true;
            }
            this.onScreensizeChange(screen, (screen.isMobile && this.expanded));
        });
        //this.onExpCollapse(true);
        if (localStorage.getItem('loggedIn') !== null) {
            this.loggedInUser = (localStorage.getItem('loggedIn') == 'true' && localStorage.getItem('username')) ? localStorage.getItem('username') : 'Guest';
            if (this.loggedInUser != 'Guest') {
                this.usernm = this.loggedInUser.substring(1, this.loggedInUser.length - 1);
                console.log("last index", localStorage.getItem('lastIndex') != 'undefined', localStorage.getItem('lastIndex'));
                let lastPlaylist = (localStorage.getItem('playlist') != null && localStorage.getItem('playlist') != 'undefined') ? JSON.parse(localStorage.getItem('playlist')) : null;
                let lastIndexId = (localStorage.getItem('lastIndex') != null && localStorage.getItem('lastIndex') != 'undefined') ? JSON.parse(localStorage.getItem('lastIndex')) : null;
                this.playlistFetcher.getAllPlaylists(this.usernm).subscribe((playlsts) => {
                    this.playlists = this.playlists.concat(playlsts);
                    this.addable = playlsts.length < 4;
                    let defVal = '';
                    let index = 0;
                    playlsts.forEach(plst => {
                        index++;
                        if (lastPlaylist != null && plst.id == lastPlaylist) {
                            defVal = plst.playlist;
                            this.defaultPlaylist = plst;
                            this.selectedPlaylist = index;
                        }
                        else if (lastPlaylist === null && plst.isDefault == 'Y') {
                            defVal = plst.playlist;
                            this.defaultPlaylist = plst;
                            this.selectedPlaylist = index;
                        }
                    });
                    this.musicDataFetcher.getAllSongs(this.usernm).subscribe((songList) => {
                        this.playerQueue = songList;
                        if (defVal == '') {
                            this.playerQueue = this.playerQueue.filter(x => x.playlist == null);
                        }
                        else {
                            this.playerQueue = this.playerQueue.filter(x => x.playlist == defVal);
                        }
                        this.playerQueue = this.playerQueue.filter(x => x.videoId != null);
                        for (let song in this.playerQueue) {
                            if (lastIndexId != null && this.playerQueue[song].id == lastIndexId) {
                                this.currentIndex = +song;
                                break;
                            }
                        }
                    });
                });
                //this.playrComp.queueInitializer();
            }
            else {
                this.playerQueue = this.defplayerQueue;
            }
        }
    }
    onChangePlaylist(index) {
        localStorage.setItem('playlist', JSON.stringify(this.playlists[index].id));
        this.selectedPlaylist = index;
        this.musicDataFetcher.getAllSongs(this.usernm).subscribe((songList) => {
            this.playerQueue = songList;
            if (index == 0) {
                this.playerQueue = this.playerQueue.filter(x => x.playlist == null);
            }
            else {
                this.playerQueue = this.playerQueue.filter(x => x.playlist == this.playlists[index].playlist);
            }
            this.playerQueue = this.playerQueue.filter(x => x.videoId != null);
        });
        this.playrComp.player.stopVideo();
        this.currentIndex = -1;
    }
    onLargePlayerChange(isLarge) {
        this.largePlayer = isLarge;
        this.queueComp.scrollPlacement();
        //this.expanded=false;
        //this.onExpCollapse(this.expanded);
    }
    onIndexChange(index) {
        this.currentIndex = index;
        this.queueComp.scrollPlacement();
        localStorage.setItem('lastIndex', JSON.stringify(this.playerQueue[index].id));
    }
    onDeletePlaylist(index) {
        if (this.playlists[index].id == this.defaultPlaylist.id) {
            this.defaultPlaylist = {
                id: -1,
                playlist: 'Default',
                isDefault: 'Y',
                username: ''
            };
        }
        if (index == this.selectedPlaylist) {
            this.onChangePlaylist(0);
        }
        this.playlistFetcher.deletePlaylist(this.playlists[index]).subscribe(data => {
            this.playlists.splice(index, 1);
            this.addable = true;
        });
    }
    onModifyPlaylist(input) {
        if (this.playlists[input.index].id == this.defaultPlaylist.id && !input.isDefault) {
            this.defaultPlaylist = {
                id: -1,
                playlist: 'Default',
                isDefault: 'Y',
                username: ''
            };
        }
        else if (this.playlists[input.index].id != this.defaultPlaylist.id && input.isDefault) {
            let prevDefault = this.defaultPlaylist;
            if (prevDefault.id != -1) {
                prevDefault.isDefault = 'N';
                this.playlistFetcher.editPlaylist(prevDefault).subscribe(data => {
                    console.log(data);
                });
            }
        }
        this.playlists[input.index].playlist = input.title;
        this.playlists[input.index].isDefault = input.isDefault ? 'Y' : 'N';
        this.playlistFetcher.editPlaylist(this.playlists[input.index]).subscribe(data => {
            if (input.isDefault) {
                this.defaultPlaylist = this.playlists[input.index];
            }
        });
    }
    onAddPlaylist(input) {
        let newPl = {
            id: -2,
            playlist: input.title,
            username: this.usernm,
            isDefault: input.isDefault ? 'Y' : 'N'
        };
        this.playlistFetcher.addPlaylist(newPl).subscribe((data) => {
            newPl.id = data;
            this.playlists.push(newPl);
            if (this.playlists.length == 5) {
                this.addable = false;
            }
            if (input.isDefault) {
                if (this.defaultPlaylist.id != -1) {
                    this.defaultPlaylist.isDefault = 'N';
                    this.playlistFetcher.editPlaylist(this.defaultPlaylist).subscribe(data => {
                        console.log(data);
                    });
                }
                this.defaultPlaylist = newPl;
            }
        });
    }
    onExpCollapse(value) {
        this.expanded = value;
        //this.leftStyle=this.styleSetter.leftStyleSetter(this.lastScreenSz,value);
        //this.rightStyle=this.styleSetter.rightStyleSetter(this.lastScreenSz,value);
        this.onScreensizeChange(this.lastScreenSz, value);
    }
    onScreensizeChange(scrSz, expanded) {
        this.lastScreenSz = scrSz;
        if ((this.addrComp && this.addrComp.inputFocused == true) || (this.queueComp && this.queueComp.addrComp && this.queueComp.addrComp.inputFocused)) {
            return;
        }
        this.expanded = scrSz.isMobile;
        if (!expanded) {
            this.largePlayer = false;
        }
        console.log("Expanded", expanded, this.largePlayer);
        this.headerBarStyle = this.styleSetter.headerStyleSetter(scrSz);
        this.musicPlayerStyle = this.styleSetter.bodyStyleSetter(scrSz);
        this.leftStyle = expanded ? this.styleSetter.leftStyleSetter(scrSz, true) : this.styleSetter.leftStyleSetter(scrSz, scrSz.isMobile);
        this.rightStyle = expanded ? this.styleSetter.rightStyleSetter(scrSz, true) : this.styleSetter.rightStyleSetter(scrSz, scrSz.isMobile);
        this.playerStyle = expanded ? this.styleSetter.playerStyleSetter(scrSz, true) : this.styleSetter.playerStyleSetter(scrSz, scrSz.isMobile);
        this.largePlayerStyle = this.styleSetter.largePlayerStyleSetter(scrSz);
        this.adderStyle = this.styleSetter.adderStyleSetter(scrSz);
    }
    addVideo(video) {
        this.noOfSongAdded++;
        clearTimeout(this.lexInterval);
        this.lexInterval = setTimeout(() => {
            if (this.noOfSongAdded == 1) {
                this.setLexoRankNew(video);
            }
            else {
                this.rebalance(video);
            }
            this.noOfSongAdded = 0;
        }, 3000);
        this.playerQueue.push(video);
    }
    setLexoRankNew(video) {
        if (localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') == 'true') {
            let user = localStorage.getItem('username') ? localStorage.getItem('username') : 'Guest';
            if (user != 'Guest') {
                let index = this.playerQueue.length;
                let id = video.id;
                let prev = index == 0 ? 'first' : this.playerQueue[index - 1].lexoRank;
                let next = 'last';
                if (!prev) {
                    this.rebalance(video);
                }
                else {
                    this.musicDataFetcher.setLexoRank(id, prev, next).subscribe((data) => {
                        if (data == '-1') {
                            return;
                        }
                        else {
                            let valArr = data.split('@');
                            video.lexoRank = valArr[0];
                            if (valArr.length > 1 && valArr[1] == 'rebalance') {
                                this.rebalance(video);
                            }
                        }
                    });
                }
            }
        }
    }
    rebalance(video) {
        console.log("rebalancing");
        this.musicDataFetcher.rebalancePL(video.username, video.playlist).subscribe(data => {
            console.log("Rebalanced");
        });
    }
    onEditTitle(item) {
        console.log(item);
        let index = item.index;
        let title = item.title;
        this.musicDataFetcher.editTitle(this.playerQueue[index].id, title).subscribe(data => {
            if (data != -1) {
                this.playerQueue[index].title = title;
            }
        });
    }
    playSong(index) {
        this.playrComp.playIndexNumber(index);
    }
    onChangePos(index) {
        if (localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') == 'true') {
            let user = localStorage.getItem('username') ? localStorage.getItem('username') : 'Guest';
            if (user != 'Guest') {
                let id = this.playerQueue[index].id;
                let prev = index == 0 ? 'first' : this.playerQueue[index - 1].lexoRank;
                let next = index == this.playerQueue.length - 1 ? 'last' : this.playerQueue[index + 1].lexoRank;
                this.musicDataFetcher.setLexoRank(id, prev, next).subscribe((data) => {
                    if (data == '-1') {
                        return;
                    }
                    else {
                        let valArr = data.split('@');
                        this.playerQueue[index].lexoRank = valArr[0];
                        if (valArr.length > 1 && valArr[1] == 'rebalance') {
                            this.musicDataFetcher.rebalancePL(this.playerQueue[index].username, this.playerQueue[index].playlist).subscribe(data => {
                                console.log("Rebalanced");
                            });
                        }
                    }
                });
            }
        }
    }
};
MusicPlayerComponent.ctorParameters = () => [
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
    { type: _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_11__["LoginDataFetcher"] },
    { type: _musicPlayerStyle_service__WEBPACK_IMPORTED_MODULE_3__["musicStyleService"] },
    { type: _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["MusicDataFetcher"] },
    { type: _services_PlayList_service__WEBPACK_IMPORTED_MODULE_8__["PlaylistDataFetcher"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"], { read: _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"], static: false })
], MusicPlayerComponent.prototype, "playrComp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_music_add_music_add_component__WEBPACK_IMPORTED_MODULE_7__["MusicAddComponent"], { read: _music_add_music_add_component__WEBPACK_IMPORTED_MODULE_7__["MusicAddComponent"], static: false })
], MusicPlayerComponent.prototype, "addrComp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["QueueComponent"], { read: _queue_queue_component__WEBPACK_IMPORTED_MODULE_9__["QueueComponent"], static: false })
], MusicPlayerComponent.prototype, "queueComp", void 0);
MusicPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-music-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./music-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html")).default,
        providers: [_musicPlayerStyle_service__WEBPACK_IMPORTED_MODULE_3__["musicStyleService"], _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["MusicDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_5__["DataFetcher"], _services_PlayList_service__WEBPACK_IMPORTED_MODULE_8__["PlaylistDataFetcher"], _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_11__["LoginDataFetcher"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./music-player.component.scss */ "./src/app/music-player/music-player.component.scss")).default]
    })
], MusicPlayerComponent);



/***/ }),

/***/ "./src/app/music-player/musicPlayerStyle.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/music-player/musicPlayerStyle.service.ts ***!
  \**********************************************************/
/*! exports provided: musicStyleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "musicStyleService", function() { return musicStyleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let musicStyleService = class musicStyleService {
    constructor() {
    }
    headerStyleSetter(scrSz) {
        if (scrSz.isMobile) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 0.03 * (scrSz.height - 3) + 'px',
                'background-color': 'white',
            };
        }
        else {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 0.05 * (scrSz.height - 3) + 'px',
                'background-color': 'white',
            };
        }
    }
    bodyStyleSetter(scrSz) {
        if (scrSz.isMobile) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 0.97 * (scrSz.height - 3) + 'px',
            };
        }
        else {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 0.95 * (scrSz.height - 3) + 'px',
                'display': 'flex',
                'justify-content': 'flex-start'
            };
        }
    }
    leftStyleSetter(scrSz, expanded) {
        if (expanded) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 6 * (scrSz.width - 3) / 16 + 'px',
                'background-color': 'rgba(0,0,0,0.0)',
            };
        }
        if (scrSz.isMobile) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': ((9 * (scrSz.width - 3) / 16) + (0.2 * ((0.97 * (scrSz.height - 3) - (9 * (scrSz.width - 3) / 16))))) + 'px',
                'background-color': 'rgba(0,0,0,0.0)',
            };
        }
        else {
            return {
                'width': 0.7 * (scrSz.width - 3) + 'px',
                'height': 0.95 * (scrSz.height - 3) + 'px',
                'background-color': 'rgba(0,0,0,0.0)',
            };
        }
    }
    rightStyleSetter(scrSz, expanded) {
        if (expanded) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 0.97 * (scrSz.height - 3) - 5 * (scrSz.width - 3) / 16 + 'px',
                'background-color': 'rgba(0,0,0,0.0)',
            };
        }
        if (scrSz.isMobile) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 0.8 * ((0.97 * (scrSz.height - 3) - (9 * (scrSz.width - 3) / 16))) + 'px',
                'background-color': 'rgba(0,0,0,0.0)',
            };
        }
        else {
            return {
                'width': 0.3 * (scrSz.width - 3) + 'px',
                'height': 0.95 * (scrSz.height - 3) + 'px',
                'background-color': 'rgba(0,0,0,0.0)',
            };
        }
    }
    playerStyleSetter(scrSz, expanded) {
        if (expanded) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 6 * (scrSz.width - 3) / 16 + 'px',
                'background-color': 'rgba(0,0,0,0)',
            };
        }
        if (scrSz.isMobile) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 9 * (scrSz.width - 3) / 16 + 'px',
                'background-color': 'rgba(0,0,0,0)',
            };
        }
        else {
            return {
                'width': 0.7 * (scrSz.width - 3) + 'px',
                'height': 0.7 * 0.95 * (scrSz.height - 3) + 'px',
                'background-color': 'rgba(0,0,0,0)',
            };
        }
    }
    largePlayerStyleSetter(scrSz, expanded) {
        return {
            'width': (scrSz.width - 3) + 'px',
            'height': (0.97 * scrSz.height - 3) + 'px',
            'background-color': 'rgba(0,0,0,0)',
        };
    }
    adderStyleSetter(scrSz) {
        if (scrSz.isMobile) {
            return {
                'width': (scrSz.width - 3) + 'px',
                'height': 0.2 * ((0.97 * (scrSz.height - 3) - (9 * (scrSz.width - 3) / 16))) + 'px',
                'background-color': 'rgba(0,0,0,0)',
                'z-index': '999'
            };
        }
        else {
            return {
                'width': 0.7 * (scrSz.width - 3) + 'px',
                'height': 0.3 * 0.95 * (scrSz.height - 3) + 'px',
                'background-color': 'rgba(0,0,0,0)',
            };
        }
    }
};
musicStyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], musicStyleService);



/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".playr {\n  height: 100%;\n  width: 98%;\n  margin: auto;\n  position: relative;\n}\n.playr .screenSwap {\n  width: 100%;\n  height: 98%;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 5px;\n}\n.playr .initText {\n  height: 100%;\n  position: relative;\n}\n.playr .initText .textIn {\n  font-size: 250%;\n  font-family: \"Cookie\", cursive;\n  width: 100%;\n  height: 38%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n}\n.playr .repeatButton {\n  height: 70px;\n  left: 10%;\n  margin: -20px 0 0 -80px;\n  position: absolute;\n  top: 50%;\n  width: 160px;\n}\n.playr .repeatButton .icons {\n  height: 30%;\n  width: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  flex-grow: 1;\n  margin: -10px 0 0 0;\n}\n.playr .expandCollPL {\n  transform: translateY(-50%);\n  z-index: 999;\n  font-size: 150%;\n  height: 29%;\n  left: 85%;\n  position: absolute;\n  top: 11%;\n  width: 60px;\n}\n.playr .expandCollPL .icons {\n  height: 35%;\n  width: auto;\n  position: absolute;\n  top: 40%;\n  transform: translateY(-50%);\n  flex-grow: 1;\n  margin: 0px 0 0 0;\n}\n.playr .expanded.expandCollPL {\n  height: 25%;\n  top: 17%;\n}\n.playr .shuffle {\n  height: 70px;\n  left: 90%;\n  margin: -20px 0 0 -80px;\n  position: absolute;\n  top: 50%;\n  width: 160px;\n}\n.playr .shuffle .icons {\n  height: 30%;\n  width: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  flex-grow: 1;\n  margin: -10px 0 0 0;\n}\n.playr .repeatButton.up {\n  left: 50%;\n  top: 60%;\n  display: flex;\n  justify-content: center;\n  font-size: 150%;\n}\n.playr .repeatButton.hd {\n  left: 50%;\n  top: 20%;\n  display: flex;\n  justify-content: center;\n  font-size: 150%;\n}\n.playr .repeatButton .icons.isNotMobile {\n  height: 60%;\n  left: 60%;\n}\n.playr .thumbnail {\n  width: 100%;\n  left: 0;\n  position: absolute;\n  top: 25%;\n}\n.playr .largeThumb {\n  display: flex;\n  justify-content: center;\n}\n.playr .bars {\n  height: 70px;\n  left: 50%;\n  margin: -40px 0 0 -80px;\n  position: absolute;\n  top: 45%;\n  width: 160px;\n}\n.playr .bars .icons {\n  height: 150%;\n  width: auto;\n  flex-grow: 1;\n  margin: -10px 0 0 0;\n}\n@media (max-width: 400px) {\n  .playr .bars {\n    top: 45%;\n  }\n}\n.playr .bar, .playr .staticbar {\n  background: white;\n  bottom: 1px;\n  height: 30px;\n  position: absolute;\n  width: 12px;\n  -webkit-animation: sound 0ms -800ms linear infinite alternate;\n          animation: sound 0ms -800ms linear infinite alternate;\n}\n@-webkit-keyframes sound {\n  0% {\n    opacity: 0.35;\n    height: 15px;\n  }\n  100% {\n    opacity: 1;\n    height: 70px;\n  }\n}\n@keyframes sound {\n  0% {\n    opacity: 0.35;\n    height: 15px;\n  }\n  100% {\n    opacity: 1;\n    height: 70px;\n  }\n}\n.playr .bar:nth-child(1) {\n  left: 1px;\n  -webkit-animation-duration: 474ms;\n          animation-duration: 474ms;\n}\n.playr .bar:nth-child(2) {\n  left: 20px;\n  -webkit-animation-duration: 433ms;\n          animation-duration: 433ms;\n}\n.playr .bar:nth-child(3) {\n  left: 36px;\n  -webkit-animation-duration: 407ms;\n          animation-duration: 407ms;\n}\n.playr .bar:nth-child(4) {\n  left: 52px;\n  -webkit-animation-duration: 458ms;\n          animation-duration: 458ms;\n}\n.playr .bar:nth-child(5) {\n  left: 68px;\n  -webkit-animation-duration: 400ms;\n          animation-duration: 400ms;\n}\n.playr .bar:nth-child(6) {\n  left: 84px;\n  -webkit-animation-duration: 427ms;\n          animation-duration: 427ms;\n}\n.playr .bar:nth-child(7) {\n  left: 100px;\n  -webkit-animation-duration: 441ms;\n          animation-duration: 441ms;\n}\n.playr .bar:nth-child(8) {\n  left: 116px;\n  -webkit-animation-duration: 419ms;\n          animation-duration: 419ms;\n}\n.playr .bar:nth-child(9) {\n  left: 132px;\n  -webkit-animation-duration: 487ms;\n          animation-duration: 487ms;\n}\n.playr .bar:nth-child(10) {\n  left: 148px;\n  -webkit-animation-duration: 442ms;\n          animation-duration: 442ms;\n}\n.playr .staticbar:nth-child(1) {\n  left: 1px;\n  height: 30px;\n}\n.playr .staticbar:nth-child(2) {\n  left: 20px;\n  height: 70px;\n}\n.playr .staticbar:nth-child(3) {\n  left: 36px;\n  height: 50px;\n}\n.playr .staticbar:nth-child(4) {\n  left: 52px;\n  height: 30px;\n}\n.playr .staticbar:nth-child(5) {\n  left: 68px;\n  height: 70px;\n}\n.playr .staticbar:nth-child(6) {\n  left: 84px;\n  height: 50px;\n}\n.playr .staticbar:nth-child(7) {\n  left: 100px;\n  height: 30px;\n}\n.playr .staticbar:nth-child(8) {\n  left: 116px;\n  height: 70px;\n}\n.playr .staticbar:nth-child(9) {\n  left: 132px;\n  height: 50px;\n}\n.playr .staticbar:nth-child(10) {\n  left: 148px;\n  height: 30px;\n}\n.playr .utubeIcon {\n  width: 70%;\n  height: 16%;\n  position: absolute;\n  top: 88%;\n  left: 30%;\n  transform: translateY(-50%);\n  z-index: 999;\n  display: flex;\n  justify-content: space-around;\n  transition: display 3s;\n}\n.playr .utubeIcon.volClosed {\n  width: 70%;\n  left: 23%;\n}\n.playr .utubeIcon.left.volClosed {\n  width: 28%;\n  left: 0%;\n}\n.playr .utubeIcon.left {\n  width: 30%;\n  left: 0;\n  justify-content: center;\n}\n.playr .utubeIcon.left .icons {\n  width: 35%;\n}\n.playr .utubeIcon.left .volSlider {\n  width: 55%;\n  position: relative;\n}\n.playr .utubeIcon.left .slider {\n  -webkit-appearance: none;\n  position: absolute;\n  top: 45%;\n  left: 0%;\n  transform: translateY(-50%);\n  width: 100%;\n  height: 6px;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.8);\n  outline: none;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n.playr .utubeIcon.left .slider:hover {\n  opacity: 1;\n}\n.playr .utubeIcon.left .slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 7px;\n  background: #4b90ff;\n  cursor: pointer;\n}\n.playr .utubeIcon.left .slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  background: #4b90ff;\n  cursor: pointer;\n}\n.playr .expanded.utubeIcon {\n  height: 35%;\n  top: 82%;\n}\n.playr .utubeTitle {\n  color: #fff;\n  width: 85%;\n  height: 12%;\n  position: absolute;\n  top: 10%;\n  transform: translateY(-50%);\n  z-index: 999;\n  display: flex;\n  justify-content: flex-start;\n  font-size: 150%;\n}\n.playr .utubeTitle .titleNm {\n  padding-left: 20px;\n  font-family: \"Ubuntu\", sans-serif;\n}\n.playr .ellFullTime {\n  width: 86%;\n  height: 12%;\n  position: absolute;\n  top: 75%;\n  left: 7%;\n  transform: translateY(-50%);\n  z-index: 999;\n  display: flex;\n  justify-content: space-between;\n  font-size: 80%;\n  padding-top: 2%;\n  color: #fff;\n}\n.playr .expanded.ellFullTime {\n  top: 50%;\n}\n.playr .expanded.sliderPart {\n  height: 20%;\n  top: 45%;\n}\n.playr .sliderPart {\n  width: 90%;\n  height: 12%;\n  position: absolute;\n  top: 71%;\n  left: 5%;\n  transform: translateY(-50%);\n  z-index: 999;\n  display: flex;\n  justify-content: flex-start;\n  font-size: 150%;\n}\n.playr .sliderPart .slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 0px;\n  margin-top: 4px;\n  border-radius: 4px;\n  background: #c2c2c2;\n  outline: none;\n  opacity: 1;\n  transition: opacity 0.2s;\n}\n.playr .sliderPart .slider:hover {\n  opacity: 1;\n}\n.playr .sliderPart .slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 7px;\n  background: linear-gradient(135deg, #003f41 0%, #00242b 35%);\n  cursor: pointer;\n}\n.playr .sliderPart .slider::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border-radius: 7px;\n  background: linear-gradient(135deg, #003f41 0%, #00242b 35%);\n  cursor: pointer;\n}\n.playr .expanded.utubeTitle {\n  height: 10%;\n  top: 13%;\n}\n@media (max-width: 400px) {\n  .playr .utubeTitle {\n    font-size: 100%;\n  }\n}\n@media (max-width: 400px) {\n  .playr .ellFullTime {\n    font-size: 60%;\n  }\n}\n.playr .icons {\n  height: 100%;\n  flex-grow: 1;\n}\n.playr .expanded .icons {\n  height: 80%;\n}\n.loader {\n  width: 30px;\n  height: 30px;\n  border: 8px solid rgba(0, 0, 0, 0.8);\n  border-radius: 50%;\n  border-top: 8px solid #00968775;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.slider1 {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 4px;\n  border-radius: 4px;\n  background: #666;\n  outline: none;\n  opacity: 0.8;\n  transition: opacity 0.2s;\n  overflow: hidden;\n}\n.slider1::-webkit-slider-runnable-track {\n  background: #666;\n}\n/*\n * 1. Set to 0 width and remove border for a slider without a thumb\n */\n.slider1::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 0px;\n  /* 1 */\n  height: 40px;\n  background: #fff;\n  box-shadow: -100vw 0 0 100vw #64FFDB;\n  border: 0px solid #999;\n  /* 1 */\n}\n.slider1::-moz-range-track {\n  height: 40px;\n  background: #ddd;\n}\n.slider1::-moz-range-thumb {\n  background: #fff;\n  height: 40px;\n  width: 20px;\n  border: 3px solid #999;\n  border-radius: 0 !important;\n  box-shadow: -100vw 0 0 100vw #64FFDB;\n  box-sizing: border-box;\n}\n.slider1::-ms-fill-lower {\n  background-color: #64FFDB;\n}\n.slider1::-ms-thumb {\n  background: #fff;\n  border: 2px solid #999;\n  height: 40px;\n  width: 20px;\n  box-sizing: border-box;\n}\n.slider1::-ms-ticks-after {\n  display: none;\n}\n.slider1::-ms-ticks-before {\n  display: none;\n}\n.slider1::-ms-track {\n  background: #ddd;\n  color: transparent;\n  height: 40px;\n  border: none;\n}\n.slider1::-ms-tooltip {\n  display: none;\n}\n.largePlayer .expanded.utubeIcon {\n  height: 30%;\n  top: 104%;\n}\n.largePlayer .utubeIcon.left.volClosed {\n  width: 21%;\n  left: 4%;\n}\n.largePlayer .utubeIcon.volClosed {\n  left: 27%;\n}\n.largePlayer .expanded.ellFullTime {\n  top: 87%;\n  font-size: 80%;\n}\n.largePlayer .expanded.sliderPart {\n  top: 88%;\n}\n.largePlayer .repeatButton {\n  top: 71%;\n}\n.largePlayer .shuffle {\n  top: 71%;\n}\n.largePlayer .bars {\n  top: 69%;\n}\n.largePlayer .utubeTitle {\n  font-size: 150%;\n  width: 70%;\n}\n.largePlayer .expanded.expandCollPL {\n  height: 25%;\n  left: 82%;\n  top: 12%;\n}\n@media (max-height: 1000px) and (min-width: 400px) {\n  .largePlayer .utubeTitle {\n    font-size: 180%;\n  }\n}\n@media (max-height: 1000px) {\n  .largePlayer .expanded .icons {\n    height: 20%;\n  }\n}\n@media (max-height: 1000px) {\n  .largePlayer .volSlider {\n    height: 20%;\n  }\n}\nbody {\n  overflow: hidden;\n}\n.container {\n  height: 25%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.item-1 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #009687bd;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@-webkit-keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-1:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #009687bd;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 200ms;\n          animation-delay: 200ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n.item-2 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #009688;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-2:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #009688;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 400ms;\n          animation-delay: 400ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n.item-3 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #42b1a7;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-3:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #42b1a7;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 600ms;\n          animation-delay: 600ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n.item-4 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #009688;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-4:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #009688;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 800ms;\n          animation-delay: 800ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n.item-5 {\n  width: 20px;\n  height: 20px;\n  background: #f583a1;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: #64ffdbea;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.item-5:before {\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #64ffdbea;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 1000ms;\n          animation-delay: 1000ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n.animation {\n  height: 15% !important;\n  background: #f583a1;\n  border: none;\n  background-color: transparent;\n  margin: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  50%, 75% {\n    transform: scale(2.5);\n  }\n  78%, 100% {\n    opacity: 0;\n  }\n}\n.animation:before {\n  content: \"\";\n  width: 35%;\n  height: 35%;\n  border-radius: 50%;\n  background-color: blue;\n  opacity: 0.7;\n  -webkit-animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n          animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);\n  -webkit-animation-delay: 200ms;\n          animation-delay: 200ms;\n  transition: 0.5s all ease;\n  transform: scale(1);\n}\n.animation .icons {\n  height: 35% !important;\n}\n.icons.arrow {\n  top: 60% !important;\n  font-size: 1vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL0Q6XFxBbmd1bGFyXFxPU00vc3JjXFxhcHBcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENJO0VBQ0ksWUFBQTtFQUVBLGtCQUFBO0FDQVI7QURDUTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0NSO0FES0k7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0hSO0FESVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0FDSFo7QURPSTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNMUjtBRE1RO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtBQ0xaO0FEUUk7RUFDSSxXQUFBO0VBQ0EsUUFBQTtBQ05SO0FEU0k7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ1BSO0FEUVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0FDUFo7QURXSTtFQUNJLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1RSO0FEV0k7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNUUjtBRFlJO0VBQ1EsV0FBQTtFQUNBLFNBQUE7QUNWWjtBRGFJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNYUjtBRGNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDWlI7QURlSTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDYlI7QURjUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWlo7QURnQkk7RUFDSTtJQUNJLFFBQUE7RUNkVjtBQUNGO0FEaUJJO0VBQ0ksaUJBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO1VBQUEscURBQUE7QUNmVDtBRGtCSztFQUNJO0lBQ0csYUFBQTtJQUNDLFlBQUE7RUNoQlg7RURrQk87SUFDSSxVQUFBO0lBQ0EsWUFBQTtFQ2hCWDtBQUNGO0FEUUs7RUFDSTtJQUNHLGFBQUE7SUFDQyxZQUFBO0VDaEJYO0VEa0JPO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUNoQlg7QUFDRjtBRG1CSztFQUFxQixTQUFBO0VBQVcsaUNBQUE7VUFBQSx5QkFBQTtBQ2ZyQztBRGdCSztFQUFxQixVQUFBO0VBQVksaUNBQUE7VUFBQSx5QkFBQTtBQ1p0QztBRGFLO0VBQXFCLFVBQUE7RUFBWSxpQ0FBQTtVQUFBLHlCQUFBO0FDVHRDO0FEVUs7RUFBcUIsVUFBQTtFQUFZLGlDQUFBO1VBQUEseUJBQUE7QUNOdEM7QURPSztFQUFxQixVQUFBO0VBQVksaUNBQUE7VUFBQSx5QkFBQTtBQ0h0QztBRElLO0VBQXFCLFVBQUE7RUFBWSxpQ0FBQTtVQUFBLHlCQUFBO0FDQXRDO0FEQ0s7RUFBcUIsV0FBQTtFQUFhLGlDQUFBO1VBQUEseUJBQUE7QUNHdkM7QURGSztFQUFxQixXQUFBO0VBQWEsaUNBQUE7VUFBQSx5QkFBQTtBQ012QztBRExLO0VBQXFCLFdBQUE7RUFBYSxpQ0FBQTtVQUFBLHlCQUFBO0FDU3ZDO0FEUks7RUFBcUIsV0FBQTtFQUFhLGlDQUFBO1VBQUEseUJBQUE7QUNZdkM7QURUSztFQUEyQixTQUFBO0VBQVUsWUFBQTtBQ2ExQztBRFpLO0VBQTJCLFVBQUE7RUFBVyxZQUFBO0FDZ0IzQztBRGZLO0VBQTJCLFVBQUE7RUFBWSxZQUFBO0FDbUI1QztBRGxCSztFQUEyQixVQUFBO0VBQVksWUFBQTtBQ3NCNUM7QURyQks7RUFBMkIsVUFBQTtFQUFZLFlBQUE7QUN5QjVDO0FEeEJLO0VBQTJCLFVBQUE7RUFBWSxZQUFBO0FDNEI1QztBRDNCSztFQUEyQixXQUFBO0VBQWEsWUFBQTtBQytCN0M7QUQ5Qks7RUFBMkIsV0FBQTtFQUFhLFlBQUE7QUNrQzdDO0FEakNLO0VBQTJCLFdBQUE7RUFBYSxZQUFBO0FDcUM3QztBRHBDSztFQUEyQixXQUFBO0VBQWEsWUFBQTtBQ3dDN0M7QUR0Q0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNELGtCQUFBO0VBQ0MsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ3dDUjtBRHJDSTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FDdUNSO0FEbkNJO0VBQ0ksVUFBQTtFQUNBLFFBQUE7QUNxQ1I7QURsQ0k7RUFDSSxVQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0FDb0NSO0FEbkNRO0VBQ0csVUFBQTtBQ3FDWDtBRG5DUTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ3FDWjtBRG5DUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtBQ3FDWjtBRGxDVTtFQUNFLFVBQUE7QUNvQ1o7QURqQ1U7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ21DWjtBRGhDVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDa0NaO0FEOUJJO0VBQ0ksV0FBQTtFQUNBLFFBQUE7QUNnQ1I7QUQ3Qkk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDRCxrQkFBQTtFQUNDLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDK0JSO0FEOUJRO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtBQ2dDWjtBRDVCSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQzhCUjtBRDNCSTtFQUNJLFFBQUE7QUM2QlI7QUQxQkk7RUFDSSxXQUFBO0VBQ0EsUUFBQTtBQzRCUjtBRHpCSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUMyQlI7QUQxQlE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUVBLHdCQUFBO0FDNEJaO0FEekJVO0VBQ0UsVUFBQTtBQzJCWjtBRHhCVTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0FDMEJaO0FEdkJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtBQ3lCWjtBRHJCSTtFQUNJLFdBQUE7RUFDQSxRQUFBO0FDdUJSO0FEckJJO0VBQ0k7SUFDSSxlQUFBO0VDdUJWO0FBQ0Y7QURwQkk7RUFDSTtJQUNJLGNBQUE7RUNzQlY7QUFDRjtBRG5CSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDcUJSO0FEbEJJO0VBQ0ksV0FBQTtBQ29CUjtBRGZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDRCwwQ0FBQTtFQUE0QyxXQUFBO0VBQzNDLGtDQUFBO0FDbUJKO0FEaEJFO0VBQ0U7SUFBSywrQkFBQTtFQ29CUDtFRG5CRTtJQUFPLGlDQUFBO0VDc0JUO0FBQ0Y7QURwQkU7RUFDRTtJQUFLLHVCQUFBO0VDdUJQO0VEdEJFO0lBQU8seUJBQUE7RUN5QlQ7QUFDRjtBRHRCQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtFQUNBLGdCQUFBO0FDd0JKO0FEckJBO0VBQ0ksZ0JBQUE7QUN3Qko7QURyQkE7O0VBQUE7QUFHQztFQUNHLHdCQUFBO0VBQ0EsVUFBQTtFQUFZLE1BQUE7RUFDWixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQXdCLE1BQUE7QUMwQjVCO0FEdkJBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDMEJKO0FEdkJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFFQSxvQ0FBQTtFQUNBLHNCQUFBO0FDeUJKO0FEdEJBO0VBRUkseUJBQUE7QUN3Qko7QURyQkE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ3dCSjtBRHJCQTtFQUNJLGFBQUE7QUN3Qko7QURyQkE7RUFDSSxhQUFBO0FDd0JKO0FEckJBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDd0JKO0FEckJBO0VBQ0ksYUFBQTtBQ3dCSjtBRGxCSTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FDcUJSO0FEbkJJO0VBQ0ksVUFBQTtFQUNBLFFBQUE7QUNxQlI7QURuQkk7RUFDSSxTQUFBO0FDcUJSO0FEbkJJO0VBQ0ksUUFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFDSSxRQUFBO0FDcUJSO0FEbkJJO0VBQ0ksUUFBQTtBQ3FCUjtBRG5CSTtFQUNJLFFBQUE7QUNxQlI7QURuQkk7RUFDSSxRQUFBO0FDcUJSO0FEbkJJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUNxQlI7QURuQkk7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNxQlI7QURsQlE7RUFDSTtJQUNJLGVBQUE7RUNvQmQ7QUFDRjtBRHhCSTtFQU1BO0lBQ0ksV0FBQTtFQ3FCTjtBQUNGO0FEN0JJO0VBU0E7SUFDSSxXQUFBO0VDdUJOO0FBQ0Y7QURJQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0RKO0FES0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSE47QURwQ0U7RUFDRTtJQUNJLG1CQUFBO0VDc0NOO0VEcENFO0lBRUUscUJBQUE7RUNxQ0o7RURuQ0U7SUFDRSxVQUFBO0VDcUNKO0FBQ0Y7QUQvQ0U7RUFDRTtJQUNJLG1CQUFBO0VDc0NOO0VEcENFO0lBRUUscUJBQUE7RUNxQ0o7RURuQ0U7SUFDRSxVQUFBO0VDcUNKO0FBQ0Y7QUROTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUVBQUE7VUFBQSwyREFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDUVI7QUQvQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDaUNOO0FEeEVFO0VBQ0U7SUFDSSxtQkFBQTtFQzBFTjtFRHhFRTtJQUVFLHFCQUFBO0VDeUVKO0VEdkVFO0lBQ0UsVUFBQTtFQ3lFSjtBQUNGO0FEMUNNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUM0Q1I7QURuRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDcUVOO0FENUdFO0VBQ0U7SUFDSSxtQkFBQTtFQzhHTjtFRDVHRTtJQUVFLHFCQUFBO0VDNkdKO0VEM0dFO0lBQ0UsVUFBQTtFQzZHSjtBQUNGO0FEOUVNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNnRlI7QUR2R0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDeUdOO0FEaEpFO0VBQ0U7SUFDSSxtQkFBQTtFQ2tKTjtFRGhKRTtJQUVFLHFCQUFBO0VDaUpKO0VEL0lFO0lBQ0UsVUFBQTtFQ2lKSjtBQUNGO0FEbEhNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNvSFI7QUQzSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDNklOO0FEcExFO0VBQ0U7SUFDSSxtQkFBQTtFQ3NMTjtFRHBMRTtJQUVFLHFCQUFBO0VDcUxKO0VEbkxFO0lBQ0UsVUFBQTtFQ3FMSjtBQUNGO0FEdEpNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUN3SlI7QURuSkU7RUFDSSxzQkFBQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUVELDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDcUpOO0FEdE5FO0VBQ0U7SUFDSSxtQkFBQTtFQ3dOTjtFRHRORTtJQUVFLHFCQUFBO0VDdU5KO0VEck5FO0lBQ0UsVUFBQTtFQ3VOSjtBQUNGO0FEL0pNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNpS1I7QUQvSk07RUFDSSxzQkFBQTtBQ2lLVjtBRDdKRTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ2dLTiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnNjcmVlblN3YXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5OCU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaW5pdFRleHR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAudGV4dElue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICAgICAgICBmb250LWZhbWlseTogJ0Nvb2tpZScsIGN1cnNpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzOCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcGVhdEJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgIG1hcmdpbjogLTIwcHggMCAwIC04MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgLmljb25ze1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IC0xMHB4IDAgMCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXhwYW5kQ29sbFBMe1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgICAgIGhlaWdodDogMjklO1xyXG4gICAgICAgIGxlZnQ6IDg1JTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjExJTtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAuaWNvbnN7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzUlO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDAgMCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5leHBhbmRlZC5leHBhbmRDb2xsUEx7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgICAgdG9wOiAxNyU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNodWZmbGV7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIGxlZnQ6IDkwJTtcclxuICAgICAgICBtYXJnaW46IC0yMHB4IDAgMCAtODBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIC5pY29uc3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgbWFyZ2luOiAtMTBweCAwIDAgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJlcGVhdEJ1dHRvbi51cHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA2MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICB9XHJcbiAgICAucmVwZWF0QnV0dG9uLmhke1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIH1cclxuXHJcbiAgICAucmVwZWF0QnV0dG9uIC5pY29ucy5pc05vdE1vYmlsZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6NjAlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgLnRodW1ibmFpbHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI1JTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5sYXJnZVRodW1ie1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhcnMge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiAtNDBweCAwIDAgLTgwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAuaWNvbnN7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwJTtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgbWFyZ2luOiAtMTBweCAwIDAgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDo0MDBweCl7XHJcbiAgICAgICAgLmJhcnN7XHJcbiAgICAgICAgICAgIHRvcDo0NSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYXIgLC5zdGF0aWNiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgYm90dG9tOiAxcHg7XHJcbiAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICB3aWR0aDogMTJweDsgICAgICBcclxuICAgICAgICAgYW5pbWF0aW9uOiBzb3VuZCAwbXMgLTgwMG1zIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIEBrZXlmcmFtZXMgc291bmQge1xyXG4gICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IC4zNTtcclxuICAgICAgICAgICAgIGhlaWdodDogMTVweDsgXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICBvcGFjaXR5OiAxOyAgICAgICBcclxuICAgICAgICAgICAgIGhlaWdodDogNzBweDsgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5iYXI6bnRoLWNoaWxkKDEpICB7IGxlZnQ6IDFweDsgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NzRtczsgfVxyXG4gICAgIC5iYXI6bnRoLWNoaWxkKDIpICB7IGxlZnQ6IDIwcHg7IGFuaW1hdGlvbi1kdXJhdGlvbjogNDMzbXM7IH1cclxuICAgICAuYmFyOm50aC1jaGlsZCgzKSAgeyBsZWZ0OiAzNnB4OyBhbmltYXRpb24tZHVyYXRpb246IDQwN21zOyB9XHJcbiAgICAgLmJhcjpudGgtY2hpbGQoNCkgIHsgbGVmdDogNTJweDsgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NThtczsgfVxyXG4gICAgIC5iYXI6bnRoLWNoaWxkKDUpICB7IGxlZnQ6IDY4cHg7IGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXM7IH1cclxuICAgICAuYmFyOm50aC1jaGlsZCg2KSAgeyBsZWZ0OiA4NHB4OyBhbmltYXRpb24tZHVyYXRpb246IDQyN21zOyB9XHJcbiAgICAgLmJhcjpudGgtY2hpbGQoNykgIHsgbGVmdDogMTAwcHg7IGFuaW1hdGlvbi1kdXJhdGlvbjogNDQxbXM7IH1cclxuICAgICAuYmFyOm50aC1jaGlsZCg4KSAgeyBsZWZ0OiAxMTZweDsgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MTltczsgfVxyXG4gICAgIC5iYXI6bnRoLWNoaWxkKDkpICB7IGxlZnQ6IDEzMnB4OyBhbmltYXRpb24tZHVyYXRpb246IDQ4N21zOyB9XHJcbiAgICAgLmJhcjpudGgtY2hpbGQoMTApIHsgbGVmdDogMTQ4cHg7IGFuaW1hdGlvbi1kdXJhdGlvbjogNDQybXM7IH1cclxuXHJcblxyXG4gICAgIC5zdGF0aWNiYXI6bnRoLWNoaWxkKDEpICB7IGxlZnQ6IDFweDtoZWlnaHQ6IDMwcHg7IH1cclxuICAgICAuc3RhdGljYmFyOm50aC1jaGlsZCgyKSAgeyBsZWZ0OiAyMHB4O2hlaWdodDogNzBweDsgfVxyXG4gICAgIC5zdGF0aWNiYXI6bnRoLWNoaWxkKDMpICB7IGxlZnQ6IDM2cHg7IGhlaWdodDogNTBweDsgfVxyXG4gICAgIC5zdGF0aWNiYXI6bnRoLWNoaWxkKDQpICB7IGxlZnQ6IDUycHg7IGhlaWdodDogMzBweDsgfVxyXG4gICAgIC5zdGF0aWNiYXI6bnRoLWNoaWxkKDUpICB7IGxlZnQ6IDY4cHg7IGhlaWdodDogNzBweDsgfVxyXG4gICAgIC5zdGF0aWNiYXI6bnRoLWNoaWxkKDYpICB7IGxlZnQ6IDg0cHg7IGhlaWdodDogNTBweDsgfVxyXG4gICAgIC5zdGF0aWNiYXI6bnRoLWNoaWxkKDcpICB7IGxlZnQ6IDEwMHB4OyBoZWlnaHQ6IDMwcHg7IH1cclxuICAgICAuc3RhdGljYmFyOm50aC1jaGlsZCg4KSAgeyBsZWZ0OiAxMTZweDsgaGVpZ2h0OiA3MHB4OyB9XHJcbiAgICAgLnN0YXRpY2JhcjpudGgtY2hpbGQoOSkgIHsgbGVmdDogMTMycHg7IGhlaWdodDogNTBweDsgfVxyXG4gICAgIC5zdGF0aWNiYXI6bnRoLWNoaWxkKDEwKSB7IGxlZnQ6IDE0OHB4OyBoZWlnaHQ6IDMwcHg7IH1cclxuXHJcbiAgICAudXR1YmVJY29ue1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNiU7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA4OCU7XHJcbiAgICAgICAgbGVmdDozMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGRpc3BsYXkgM3M7XHJcbiAgICB9XHJcblxyXG4gICAgLnV0dWJlSWNvbi52b2xDbG9zZWR7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBsZWZ0OiAyMyU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC51dHViZUljb24ubGVmdC52b2xDbG9zZWR7XHJcbiAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgIH1cclxuXHJcbiAgICAudXR1YmVJY29uLmxlZnR7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5pY29uc3tcclxuICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudm9sU2xpZGVye1xyXG4gICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgIGxlZnQ6MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44KTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5zbGlkZXI6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGI5MGZmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGI5MGZmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGFuZGVkLnV0dWJlSWNvbntcclxuICAgICAgICBoZWlnaHQ6IDM1JTtcclxuICAgICAgICB0b3A6IDgyJTtcclxuICAgIH1cclxuXHJcbiAgICAudXR1YmVUaXRsZXtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIGhlaWdodDogMTIlO1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgICAgIC50aXRsZU5te1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVsbEZ1bGxUaW1le1xyXG4gICAgICAgIHdpZHRoOiA4NiU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMiU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNzUlO1xyXG4gICAgICAgIGxlZnQ6IDclO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5leHBhbmRlZC5lbGxGdWxsVGltZXtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZXhwYW5kZWQuc2xpZGVyUGFydHtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICB0b3A6NDUlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zbGlkZXJQYXJ0e1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMiU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNzElO1xyXG4gICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxOTQsIDE5NCwgMTk0KTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuc2xpZGVyOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgwLDYzLDY1LDEpIDAlLCByZ2IoMCwgMzYsIDQzKSAzNSUpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMCw2Myw2NSwxKSAwJSwgcmdiKDAsIDM2LCA0MykgMzUlKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5leHBhbmRlZC51dHViZVRpdGxle1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHRvcDogMTMlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhKG1heC13aWR0aDo0MDBweCl7XHJcbiAgICAgICAgLnV0dWJlVGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1heC13aWR0aDo0MDBweCl7XHJcbiAgICAgICAgLmVsbEZ1bGxUaW1le1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmljb25ze1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmV4cGFuZGVkIC5pY29uc3tcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiA4cHggc29saWQgcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICMwMDk2ODc3NTtcclxuICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgfVxyXG5cclxuXHJcbi5zbGlkZXIxeyBcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGVyMTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogIzY2NjtcclxufVxyXG5cclxuLypcclxuICogMS4gU2V0IHRvIDAgd2lkdGggYW5kIHJlbW92ZSBib3JkZXIgZm9yIGEgc2xpZGVyIHdpdGhvdXQgYSB0aHVtYlxyXG4gKi9cclxuIC5zbGlkZXIxOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMHB4OyAvKiAxICovXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogLTEwMHZ3IDAgMCAxMDB2dyAjNjRGRkRCO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzk5OTsgLyogMSAqL1xyXG59XHJcblxyXG4uc2xpZGVyMTo6LW1vei1yYW5nZS10cmFjayB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG59XHJcblxyXG4uc2xpZGVyMTo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjOTk5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm94LXNoYWRvdzogLTEwMHZ3IDAgMCAxMDB2dyByZ2JhKDEsIDIxMCwgMTg5LCAwLjYzKTtcclxuICAgIGJveC1zaGFkb3c6IC0xMDB2dyAwIDAgMTAwdncgIzY0RkZEQjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5zbGlkZXIxOjotbXMtZmlsbC1sb3dlciB7IFxyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiYSgxLCAyMTAsIDE4OSwgMC42Myk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRGRkRCO1xyXG59XHJcblxyXG4uc2xpZGVyMTo6LW1zLXRodW1iIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzk5OTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNsaWRlcjE6Oi1tcy10aWNrcy1hZnRlciB7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbn1cclxuXHJcbi5zbGlkZXIxOjotbXMtdGlja3MtYmVmb3JlIHsgXHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxufVxyXG5cclxuLnNsaWRlcjE6Oi1tcy10cmFjayB7IFxyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlcjE6Oi1tcy10b29sdGlwIHsgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi5sYXJnZVBsYXllcntcclxuICAgIC5leHBhbmRlZC51dHViZUljb257XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgdG9wOiAxMDQlO1xyXG4gICAgfVxyXG4gICAgLnV0dWJlSWNvbi5sZWZ0LnZvbENsb3NlZHtcclxuICAgICAgICB3aWR0aDogMjElO1xyXG4gICAgICAgIGxlZnQ6IDQlO1xyXG4gICAgfVxyXG4gICAgLnV0dWJlSWNvbi52b2xDbG9zZWR7XHJcbiAgICAgICAgbGVmdDogMjclO1xyXG4gICAgfVxyXG4gICAgLmV4cGFuZGVkLmVsbEZ1bGxUaW1le1xyXG4gICAgICAgIHRvcDo4NyU7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuZXhwYW5kZWQuc2xpZGVyUGFydHtcclxuICAgICAgICB0b3A6IDg4JTtcclxuICAgIH1cclxuICAgIC5yZXBlYXRCdXR0b257XHJcbiAgICAgICAgdG9wOiA3MSU7XHJcbiAgICB9XHJcbiAgICAuc2h1ZmZsZXtcclxuICAgICAgICB0b3A6IDcxJTtcclxuICAgIH1cclxuICAgIC5iYXJze1xyXG4gICAgICAgIHRvcDogNjklO1xyXG4gICAgfVxyXG4gICAgLnV0dWJlVGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAuZXhwYW5kZWQuZXhwYW5kQ29sbFBMe1xyXG4gICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgIGxlZnQ6IDgyJTtcclxuICAgICAgICB0b3A6IDEyJTtcclxuICAgIH1cclxuICAgIEBtZWRpYShtYXgtaGVpZ2h0OiAxMDAwcHgpe1xyXG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDQwMHB4KXtcclxuICAgICAgICAgICAgLnV0dWJlVGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmV4cGFuZGVkIC5pY29uc3tcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgIH1cclxuICAgIC52b2xTbGlkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuJGNvbG9yLTQ6ICMwMDk2ODg7XHJcbiRjb2xvci0zOiAjNDJiMWE3O1xyXG4kY29sb3ItMjogIzAwOTY4ODtcclxuJGNvbG9yLTU6ICM2NGZmZGJlYTtcclxuJGNvbG9yLTE6ICMwMDk2ODdiZDtcclxuXHJcbiRjb2xvcjogJGNvbG9yLTEsICRjb2xvci0yLCAkY29sb3ItMywgJGNvbG9yLTQsICRjb2xvci01O1xyXG5cclxuQG1peGluIGFuaW0oKSB7XHJcbiAgQGtleWZyYW1lcyBzY2FsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDUwJSxcclxuICAgIDc1JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcclxuICAgIH1cclxuICAgIDc4JSwgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDUge1xyXG4gICAgLml0ZW0tI3skaX0ge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjU4M2ExO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBAaW5jbHVkZSBhbmltKCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG50aCgkY29sb3IsICRpKTtcclxuICAgICAgbWFyZ2luOiA3cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBudGgoJGNvbG9yLCAkaSk7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMjAwbXMgKiAkaTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbmltYXRpb257XHJcbiAgICAgIGhlaWdodDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjZjU4M2ExO1xyXG4gICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBAaW5jbHVkZSBhbmltKCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBtYXJnaW46IDdweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIGhlaWdodDogMzUlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICBhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgICAuaWNvbnN7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1JSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbnMuYXJyb3d7XHJcbiAgICAgIHRvcDo2MCUgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxdmg7XHJcbiAgfVxyXG4gIFxyXG4gIiwiLnBsYXlyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5ciAuc2NyZWVuU3dhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk4JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wbGF5ciAuaW5pdFRleHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wbGF5ciAuaW5pdFRleHQgLnRleHRJbiB7XG4gIGZvbnQtc2l6ZTogMjUwJTtcbiAgZm9udC1mYW1pbHk6IFwiQ29va2llXCIsIGN1cnNpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGxheXIgLnJlcGVhdEJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgbGVmdDogMTAlO1xuICBtYXJnaW46IC0yMHB4IDAgMCAtODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDE2MHB4O1xufVxuLnBsYXlyIC5yZXBlYXRCdXR0b24gLmljb25zIHtcbiAgaGVpZ2h0OiAzMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAtMTBweCAwIDAgMDtcbn1cbi5wbGF5ciAuZXhwYW5kQ29sbFBMIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiA5OTk7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgaGVpZ2h0OiAyOSU7XG4gIGxlZnQ6IDg1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExJTtcbiAgd2lkdGg6IDYwcHg7XG59XG4ucGxheXIgLmV4cGFuZENvbGxQTCAuaWNvbnMge1xuICBoZWlnaHQ6IDM1JTtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IDBweCAwIDAgMDtcbn1cbi5wbGF5ciAuZXhwYW5kZWQuZXhwYW5kQ29sbFBMIHtcbiAgaGVpZ2h0OiAyNSU7XG4gIHRvcDogMTclO1xufVxuLnBsYXlyIC5zaHVmZmxlIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBsZWZ0OiA5MCU7XG4gIG1hcmdpbjogLTIwcHggMCAwIC04MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTYwcHg7XG59XG4ucGxheXIgLnNodWZmbGUgLmljb25zIHtcbiAgaGVpZ2h0OiAzMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAtMTBweCAwIDAgMDtcbn1cbi5wbGF5ciAucmVwZWF0QnV0dG9uLnVwIHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cbi5wbGF5ciAucmVwZWF0QnV0dG9uLmhkIHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cbi5wbGF5ciAucmVwZWF0QnV0dG9uIC5pY29ucy5pc05vdE1vYmlsZSB7XG4gIGhlaWdodDogNjAlO1xuICBsZWZ0OiA2MCU7XG59XG4ucGxheXIgLnRodW1ibmFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xufVxuLnBsYXlyIC5sYXJnZVRodW1iIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGxheXIgLmJhcnMge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAtNDBweCAwIDAgLTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIHdpZHRoOiAxNjBweDtcbn1cbi5wbGF5ciAuYmFycyAuaWNvbnMge1xuICBoZWlnaHQ6IDE1MCU7XG4gIHdpZHRoOiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbjogLTEwcHggMCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnBsYXlyIC5iYXJzIHtcbiAgICB0b3A6IDQ1JTtcbiAgfVxufVxuLnBsYXlyIC5iYXIsIC5wbGF5ciAuc3RhdGljYmFyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvdHRvbTogMXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEycHg7XG4gIGFuaW1hdGlvbjogc291bmQgMG1zIC04MDBtcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuQGtleWZyYW1lcyBzb3VuZCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwLjM1O1xuICAgIGhlaWdodDogMTVweDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxufVxuLnBsYXlyIC5iYXI6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogMXB4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDQ3NG1zO1xufVxuLnBsYXlyIC5iYXI6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMjBweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MzNtcztcbn1cbi5wbGF5ciAuYmFyOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDM2cHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDA3bXM7XG59XG4ucGxheXIgLmJhcjpudGgtY2hpbGQoNCkge1xuICBsZWZ0OiA1MnB4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDQ1OG1zO1xufVxuLnBsYXlyIC5iYXI6bnRoLWNoaWxkKDUpIHtcbiAgbGVmdDogNjhweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcztcbn1cbi5wbGF5ciAuYmFyOm50aC1jaGlsZCg2KSB7XG4gIGxlZnQ6IDg0cHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDI3bXM7XG59XG4ucGxheXIgLmJhcjpudGgtY2hpbGQoNykge1xuICBsZWZ0OiAxMDBweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NDFtcztcbn1cbi5wbGF5ciAuYmFyOm50aC1jaGlsZCg4KSB7XG4gIGxlZnQ6IDExNnB4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDQxOW1zO1xufVxuLnBsYXlyIC5iYXI6bnRoLWNoaWxkKDkpIHtcbiAgbGVmdDogMTMycHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDg3bXM7XG59XG4ucGxheXIgLmJhcjpudGgtY2hpbGQoMTApIHtcbiAgbGVmdDogMTQ4cHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDQybXM7XG59XG4ucGxheXIgLnN0YXRpY2JhcjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiAxcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5wbGF5ciAuc3RhdGljYmFyOm50aC1jaGlsZCgyKSB7XG4gIGxlZnQ6IDIwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cbi5wbGF5ciAuc3RhdGljYmFyOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDM2cHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5wbGF5ciAuc3RhdGljYmFyOm50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDUycHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5wbGF5ciAuc3RhdGljYmFyOm50aC1jaGlsZCg1KSB7XG4gIGxlZnQ6IDY4cHg7XG4gIGhlaWdodDogNzBweDtcbn1cbi5wbGF5ciAuc3RhdGljYmFyOm50aC1jaGlsZCg2KSB7XG4gIGxlZnQ6IDg0cHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5wbGF5ciAuc3RhdGljYmFyOm50aC1jaGlsZCg3KSB7XG4gIGxlZnQ6IDEwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ucGxheXIgLnN0YXRpY2JhcjpudGgtY2hpbGQoOCkge1xuICBsZWZ0OiAxMTZweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLnBsYXlyIC5zdGF0aWNiYXI6bnRoLWNoaWxkKDkpIHtcbiAgbGVmdDogMTMycHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5wbGF5ciAuc3RhdGljYmFyOm50aC1jaGlsZCgxMCkge1xuICBsZWZ0OiAxNDhweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnBsYXlyIC51dHViZUljb24ge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDE2JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDg4JTtcbiAgbGVmdDogMzAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRyYW5zaXRpb246IGRpc3BsYXkgM3M7XG59XG4ucGxheXIgLnV0dWJlSWNvbi52b2xDbG9zZWQge1xuICB3aWR0aDogNzAlO1xuICBsZWZ0OiAyMyU7XG59XG4ucGxheXIgLnV0dWJlSWNvbi5sZWZ0LnZvbENsb3NlZCB7XG4gIHdpZHRoOiAyOCU7XG4gIGxlZnQ6IDAlO1xufVxuLnBsYXlyIC51dHViZUljb24ubGVmdCB7XG4gIHdpZHRoOiAzMCU7XG4gIGxlZnQ6IDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBsYXlyIC51dHViZUljb24ubGVmdCAuaWNvbnMge1xuICB3aWR0aDogMzUlO1xufVxuLnBsYXlyIC51dHViZUljb24ubGVmdCAudm9sU2xpZGVyIHtcbiAgd2lkdGg6IDU1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBsYXlyIC51dHViZUljb24ubGVmdCAuc2xpZGVyIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBvdXRsaW5lOiBub25lO1xuICBvcGFjaXR5OiAwLjc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuLnBsYXlyIC51dHViZUljb24ubGVmdCAuc2xpZGVyOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wbGF5ciAudXR1YmVJY29uLmxlZnQgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZDogIzRiOTBmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlyIC51dHViZUljb24ubGVmdCAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogIzRiOTBmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlyIC5leHBhbmRlZC51dHViZUljb24ge1xuICBoZWlnaHQ6IDM1JTtcbiAgdG9wOiA4MiU7XG59XG4ucGxheXIgLnV0dWJlVGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDg1JTtcbiAgaGVpZ2h0OiAxMiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cbi5wbGF5ciAudXR1YmVUaXRsZSAudGl0bGVObSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG59XG4ucGxheXIgLmVsbEZ1bGxUaW1lIHtcbiAgd2lkdGg6IDg2JTtcbiAgaGVpZ2h0OiAxMiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDclO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDgwJTtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wbGF5ciAuZXhwYW5kZWQuZWxsRnVsbFRpbWUge1xuICB0b3A6IDUwJTtcbn1cbi5wbGF5ciAuZXhwYW5kZWQuc2xpZGVyUGFydCB7XG4gIGhlaWdodDogMjAlO1xuICB0b3A6IDQ1JTtcbn1cbi5wbGF5ciAuc2xpZGVyUGFydCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzElO1xuICBsZWZ0OiA1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZm9udC1zaXplOiAxNTAlO1xufVxuLnBsYXlyIC5zbGlkZXJQYXJ0IC5zbGlkZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNjMmMyYzI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuLnBsYXlyIC5zbGlkZXJQYXJ0IC5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnBsYXlyIC5zbGlkZXJQYXJ0IC5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDNmNDEgMCUsICMwMDI0MmIgMzUlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlyIC5zbGlkZXJQYXJ0IC5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDNmNDEgMCUsICMwMDI0MmIgMzUlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBsYXlyIC5leHBhbmRlZC51dHViZVRpdGxlIHtcbiAgaGVpZ2h0OiAxMCU7XG4gIHRvcDogMTMlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5wbGF5ciAudXR1YmVUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnBsYXlyIC5lbGxGdWxsVGltZSB7XG4gICAgZm9udC1zaXplOiA2MCU7XG4gIH1cbn1cbi5wbGF5ciAuaWNvbnMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5wbGF5ciAuZXhwYW5kZWQgLmljb25zIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi5sb2FkZXIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICMwMDk2ODc3NTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAvKiBTYWZhcmkgKi9cbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uc2xpZGVyMSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDAuODtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZXIxOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG59XG5cbi8qXG4gKiAxLiBTZXQgdG8gMCB3aWR0aCBhbmQgcmVtb3ZlIGJvcmRlciBmb3IgYSBzbGlkZXIgd2l0aG91dCBhIHRodW1iXG4gKi9cbi5zbGlkZXIxOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDBweDtcbiAgLyogMSAqL1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IC0xMDB2dyAwIDAgMTAwdncgIzY0RkZEQjtcbiAgYm9yZGVyOiAwcHggc29saWQgIzk5OTtcbiAgLyogMSAqL1xufVxuXG4uc2xpZGVyMTo6LW1vei1yYW5nZS10cmFjayB7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuLnNsaWRlcjE6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjOTk5O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IC0xMDB2dyAwIDAgMTAwdncgIzY0RkZEQjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNsaWRlcjE6Oi1tcy1maWxsLWxvd2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0RkZEQjtcbn1cblxuLnNsaWRlcjE6Oi1tcy10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OTk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zbGlkZXIxOjotbXMtdGlja3MtYWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyMTo6LW1zLXRpY2tzLWJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIxOjotbXMtdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2xpZGVyMTo6LW1zLXRvb2x0aXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGFyZ2VQbGF5ZXIgLmV4cGFuZGVkLnV0dWJlSWNvbiB7XG4gIGhlaWdodDogMzAlO1xuICB0b3A6IDEwNCU7XG59XG4ubGFyZ2VQbGF5ZXIgLnV0dWJlSWNvbi5sZWZ0LnZvbENsb3NlZCB7XG4gIHdpZHRoOiAyMSU7XG4gIGxlZnQ6IDQlO1xufVxuLmxhcmdlUGxheWVyIC51dHViZUljb24udm9sQ2xvc2VkIHtcbiAgbGVmdDogMjclO1xufVxuLmxhcmdlUGxheWVyIC5leHBhbmRlZC5lbGxGdWxsVGltZSB7XG4gIHRvcDogODclO1xuICBmb250LXNpemU6IDgwJTtcbn1cbi5sYXJnZVBsYXllciAuZXhwYW5kZWQuc2xpZGVyUGFydCB7XG4gIHRvcDogODglO1xufVxuLmxhcmdlUGxheWVyIC5yZXBlYXRCdXR0b24ge1xuICB0b3A6IDcxJTtcbn1cbi5sYXJnZVBsYXllciAuc2h1ZmZsZSB7XG4gIHRvcDogNzElO1xufVxuLmxhcmdlUGxheWVyIC5iYXJzIHtcbiAgdG9wOiA2OSU7XG59XG4ubGFyZ2VQbGF5ZXIgLnV0dWJlVGl0bGUge1xuICBmb250LXNpemU6IDE1MCU7XG4gIHdpZHRoOiA3MCU7XG59XG4ubGFyZ2VQbGF5ZXIgLmV4cGFuZGVkLmV4cGFuZENvbGxQTCB7XG4gIGhlaWdodDogMjUlO1xuICBsZWZ0OiA4MiU7XG4gIHRvcDogMTIlO1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDAwcHgpIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAubGFyZ2VQbGF5ZXIgLnV0dWJlVGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTgwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDAwcHgpIHtcbiAgLmxhcmdlUGxheWVyIC5leHBhbmRlZCAuaWNvbnMge1xuICAgIGhlaWdodDogMjAlO1xuICB9XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDEwMDBweCkge1xuICAubGFyZ2VQbGF5ZXIgLnZvbFNsaWRlciB7XG4gICAgaGVpZ2h0OiAyMCU7XG4gIH1cbn1cblxuYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5pdGVtLTEge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjU4M2ExO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg3YmQ7XG4gIG1hcmdpbjogN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUsIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICB9XG4gIDc4JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLml0ZW0tMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODdiZDtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLml0ZW0tMiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmNTgzYTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gIG1hcmdpbjogN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUsIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICB9XG4gIDc4JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLml0ZW0tMjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gIG9wYWNpdHk6IDAuNztcbiAgYW5pbWF0aW9uOiBzY2FsZSAycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMCwgMCwgMC40OSwgMS4wMik7XG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pdGVtLTMge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjU4M2ExO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJiMWE3O1xuICBtYXJnaW46IDdweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5Aa2V5ZnJhbWVzIHNjYWxlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlLCA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMi41KTtcbiAgfVxuICA3OCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5pdGVtLTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJiMWE3O1xuICBvcGFjaXR5OiAwLjc7XG4gIGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xuICBhbmltYXRpb24tZGVsYXk6IDYwMG1zO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaXRlbS00IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2Y1ODNhMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgbWFyZ2luOiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQGtleWZyYW1lcyBzY2FsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSwgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG4gIH1cbiAgNzglLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uaXRlbS00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlIGN1YmljLWJlemllcigwLCAwLCAwLjQ5LCAxLjAyKTtcbiAgYW5pbWF0aW9uLWRlbGF5OiA4MDBtcztcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLml0ZW0tNSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmNTgzYTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGZmZGJlYTtcbiAgbWFyZ2luOiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQGtleWZyYW1lcyBzY2FsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSwgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSk7XG4gIH1cbiAgNzglLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uaXRlbS01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0ZmZkYmVhO1xuICBvcGFjaXR5OiAwLjc7XG4gIGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xuICBhbmltYXRpb24tZGVsYXk6IDEwMDBtcztcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmFuaW1hdGlvbiB7XG4gIGhlaWdodDogMTUlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmNTgzYTE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUsIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjUpO1xuICB9XG4gIDc4JSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmFuaW1hdGlvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDM1JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNDksIDEuMDIpO1xuICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLmFuaW1hdGlvbiAuaWNvbnMge1xuICBoZWlnaHQ6IDM1JSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbnMuYXJyb3cge1xuICB0b3A6IDYwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDF2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var angular_page_visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-page-visibility */ "./node_modules/angular-page-visibility/fesm2015/angular-page-visibility.js");




let PlayerComponent = class PlayerComponent {
    constructor(screenState, zone) {
        this.screenState = screenState;
        this.zone = zone;
        this.initializing = true;
        this.playerQueue = [];
        this.elapsedTime = 0;
        this.songTime = 300;
        this.loadedTime = 0;
        this.loading = false;
        this.onIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.id = '';
        this.showYoutube = false;
        this.paused = true;
        this.repeatOn = 1;
        this.shuffleOn = false;
        this.isMinimized = false;
        this.queInitilized = false;
        this.minimizedCall = false;
        this.hdQuality = true;
        this.showVolSLider = false;
        this.volume = 4;
        this.volumeicons = [
            'mute',
            'one',
            'one',
            'two',
            'two'
        ];
        this.largePlayer = false;
        this.onLargePlayerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        window['angularComponentReference'] = {
            zone: zone,
            playFn: () => this.play(),
            pauseFn: () => this.pause(),
            nextFn: () => this.next(),
            prevFn: () => this.previous(),
            titleFn: () => this.getTitle(),
            showPLFn: () => this.showPL(),
            showLargePlayer: () => this.largePlayerChange(),
            component: this,
        };
    }
    logWhenPageHidden() {
        if (this.playerState == 1) {
            this.player.playVideo();
        }
    }
    OnIndChanges() {
        this.onIndexChange.emit(this.currentIndex);
    }
    ngOnInit() {
        this.screenState.screenSize.subscribe(scrSz => {
            this.screenSt = scrSz;
            let boxSize = Math.min(scrSz.width, scrSz.height / 1.5);
            this.imgStyle = {
                'width': boxSize * 0.5 + 'px',
                'height': boxSize * 0.5 + 'px',
                'border-radius': '15px',
                'box-shadow': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
            };
        });
        if (localStorage.getItem('repeatOpn') == '0' || localStorage.getItem('repeatOpn') == '1' || localStorage.getItem('repeatOpn') == '2') {
            this.repeatOn = JSON.parse(localStorage.getItem('repeatOpn'));
        }
    }
    getTitle() {
        return this.currentIndex >= 0 ? this.playerQueue[this.currentIndex].title : '';
    }
    onMinimize(event) {
        console.log("blurred");
        this.val = 1;
    }
    onResize(event) {
        this.videoHgt = this.outpt.nativeElement.offsetHeight;
        this.videoWdt = this.outpt.nativeElement.offsetWidth;
        this.player.setSize(this.videoWdt, this.videoHgt);
    }
    onSLiderChange(seekerTime) {
        //  clearInterval(this.sub);
        seekerTime = seekerTime != undefined ? seekerTime : this.elapsedTime;
        if (this.paused) {
            this.player.seekTo(seekerTime, true);
            // this.startIntervalTimer();
            return;
        }
        this.player.pauseVideo();
        console.log(seekerTime);
        this.player.seekTo(seekerTime, true);
        this.player.playVideo();
        //  this.startIntervalTimer();
        this.paused = false;
    }
    largePlayerChange() {
        let largeState = this.largePlayer ? "small" : "large";
        console.log("largePlayer|" + largeState);
        this.largePlayer = !this.largePlayer;
        this.onLargePlayerChange.emit(this.largePlayer);
    }
    onVolChange() {
        this.player.setVolume(this.volume * 25);
    }
    showPL() {
        if (this.largePlayer) {
            this.largePlayerChange();
        }
    }
    volToggle() {
        if (this.volTimeOut) {
            clearTimeout(this.volTimeOut);
        }
        this.showVolSLider = !this.showVolSLider;
        this.volTimeOut = setTimeout(() => {
            this.showVolSLider = false;
        }, 5000);
    }
    startIntervalTimer() {
        this.sub = setInterval(() => {
            this.elapsedTime = this.player.getCurrentTime();
            this.songTime = this.player.getDuration();
            this.loadedTime = this.player.getVideoLoadedFraction() * this.songTime;
            if (this.playerState == 2 && this.loadedTime <= this.elapsedTime) {
                this.loading = true;
            }
        }, 1000);
    }
    savePlayer(player) {
        this.player = player;
        this.videoHgt = this.outpt.nativeElement.offsetHeight;
        this.videoWdt = this.outpt.nativeElement.offsetWidth;
        this.player.setSize(70, 100);
        this.player.setPlaybackQuality("medium");
        this.startIntervalTimer();
        this.initializing = true;
        this.initialize();
    }
    initialize() {
        setTimeout(() => {
            if (!this.playerQueue) {
                this.initialize();
                return;
            }
            if (this.playerQueue.length == 0) {
                if (this.screenSt.isMobile) {
                    this.largePlayerChange();
                }
                this.currentIndex = -1;
                this.OnIndChanges();
            }
            else {
                this.currentIndex = this.currentIndex > 0 ? this.currentIndex : 0;
                this.OnIndChanges();
                this.player.loadVideoById(this.playerQueue[this.currentIndex].videoId);
                this.pause();
                console.log(this.paused);
            }
            this.initializing = false;
        }, 1000);
    }
    queueInitializer() {
        this.queInitilized = true;
    }
    playIndexNumber(index) {
        this.player.loadVideoById(this.playerQueue[index].videoId);
        this.currentIndex = index;
        this.OnIndChanges();
        this.paused = false;
        setTimeout(() => {
            if (this.playerState == -1) {
                this.next();
            }
        }, 5000);
    }
    play() {
        //console.log(this.player.getPlayerState);
        if (this.playerQueue.length == 0) {
            return;
        }
        if (this.currentIndex == -1) {
            this.player.loadVideoById(this.playerQueue[0].videoId);
            this.currentIndex = 0;
            this.OnIndChanges();
            this.paused = false;
            setTimeout(() => {
                if (this.playerState == -1) {
                    this.next();
                }
            }, 5000);
            return;
        }
        this.player.playVideo();
        this.paused = false;
        setTimeout(() => {
            if (this.playerState == -1) {
                this.next();
            }
        }, 5000);
    }
    pause() {
        this.paused = true;
        console.log(this.paused);
        this.player.pauseVideo();
    }
    changeRep() {
        this.repeatOn = (this.repeatOn + 1) % 3;
        localStorage.setItem('repeatOpn', JSON.stringify(this.repeatOn));
    }
    next() {
        if (this.playerQueue.length == 0 || (this.currentIndex == this.playerQueue.length - 1 && this.repeatOn == 0)) {
            return;
        }
        if (this.repeatOn == 2) {
            this.onSLiderChange(0);
            return;
        }
        if (this.currentIndex == -1) {
            this.currentIndex++;
        }
        if (this.shuffleOn) {
            let index = Math.floor(Math.random() * (this.playerQueue.length));
            let index2 = Math.floor(Math.random() * (this.playerQueue.length - 1));
            this.currentIndex = (index == this.currentIndex) ? (index + index2) % this.playerQueue.length : index;
        }
        else {
            this.currentIndex = this.currentIndex + 1 == this.playerQueue.length ? 0 : this.currentIndex + 1;
        }
        this.OnIndChanges();
        this.player.loadVideoById(this.playerQueue[this.currentIndex].videoId);
        if (this.paused) {
            this.pause();
            return;
        }
        setTimeout(() => {
            if (this.playerState == -1) {
                this.next();
            }
        }, 5000);
    }
    previous() {
        if (this.playerQueue.length == 0 || (this.currentIndex == 0 && this.repeatOn == 0)) {
            return;
        }
        if (this.repeatOn == 2 || this.elapsedTime > 10) {
            this.onSLiderChange(0);
            return;
        }
        if (this.currentIndex == -1) {
            this.currentIndex++;
        }
        this.currentIndex = this.currentIndex == 0 ? this.playerQueue.length - 1 : this.currentIndex - 1;
        this.OnIndChanges();
        this.player.loadVideoById(this.playerQueue[this.currentIndex].videoId);
        if (this.paused) {
            this.pause();
            return;
        }
        setTimeout(() => {
            if (this.playerState == -1) {
                this.next();
            }
        }, 5000);
    }
    onStateChange(event) {
        setTimeout(() => {
            this.playerState = event.data;
        }, 200);
        console.log('playerState|' + event.data);
        console.log('SongTitle|' + this.getTitle());
        console.log('SongId|' + this.playerQueue[this.currentIndex].videoId);
        if (event.data == 0) {
            this.next();
        }
        if (event.data == 2) {
            this.paused = true;
        }
        if (event.data == 1) {
            this.paused = false;
        }
    }
    hdToggle() {
        this.hdQuality = !this.hdQuality;
        if (this.hdQuality) {
            this.player.setPlaybackQuality("hd720");
            console.log(this.player.getPlaybackQuality());
        }
        else {
            this.player.setPlaybackQuality("small");
            console.log(this.player.getPlaybackQuality());
        }
    }
};
PlayerComponent.ctorParameters = () => [
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "playerQueue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "currentIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "queExpanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PlayerComponent.prototype, "onIndexChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(angular_page_visibility__WEBPACK_IMPORTED_MODULE_3__["OnPageHidden"])()
], PlayerComponent.prototype, "logWhenPageHidden", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("outpt", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], PlayerComponent.prototype, "outpt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerComponent.prototype, "largePlayer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PlayerComponent.prototype, "onLargePlayerChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:pagehide', ['$event'])
], PlayerComponent.prototype, "onMinimize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], PlayerComponent.prototype, "onResize", null);
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")).default]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/queue/queue.component.scss":
/*!********************************************!*\
  !*** ./src/app/queue/queue.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".queue {\n  height: 100%;\n  width: 98%;\n  margin: auto;\n  position: relative;\n}\n.queue .box {\n  width: 100%;\n  height: 98%;\n  background-color: #35353580;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 5px;\n}\n.queue .queueHeader {\n  height: 8%;\n  max-height: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 20px;\n}\n.queue .queueHeader .expand {\n  font-size: 90%;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #1e3d26;\n}\n.queue .queueHeader .dropbox {\n  width: 70%;\n  height: 95%;\n  color: white;\n  font-family: \"Ubuntu\", sans-serif;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.queue .queueHeader .dropbox .addPL {\n  width: 20%;\n  color: rgba(0, 0, 0, 0.8);\n}\n.queue .queueHeader .dropbox .addPL .icons {\n  width: 15%;\n  height: 60%;\n  top: 20%;\n  position: absolute;\n  left: 75%;\n}\n.queue .queueHeader .dropbox .addPL .expand.icons {\n  left: 80%;\n}\n.queue .queueHeader .dropbox .content {\n  width: 75%;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 50px;\n  position: relative;\n}\n.queue .queueHeader .dropbox .content .iconn {\n  color: white;\n  width: 10%;\n  padding-top: 5%;\n  padding-left: 6%;\n}\n.queue .queueHeader .dropbox .content .playlistName {\n  width: 70%;\n  position: absolute;\n  transform: translateY(-50%);\n  top: 50%;\n  left: 20%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.queue .queueHeader .dropbox .content .arrow {\n  width: 5%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 5%;\n}\n.queue .queueHeader .dropbox .content .arrow .icons {\n  height: 100%;\n  width: 100%;\n  rotate: 90;\n}\n.queue .queueHeader .dropbox .optionList {\n  width: 120%;\n  min-width: 230px;\n  position: absolute;\n  top: 100%;\n  left: 5px;\n  z-index: 9999;\n  background-color: #f0f0f0;\n  color: #272727;\n  border-radius: 5px;\n}\n.queue .queueHeader .dropbox .optionList .selected {\n  color: #2D5036;\n  font-size: 85%;\n  font-weight: bold;\n}\n.queue .queueHeader .dropbox .optionList .listItems {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  font-size: 80%;\n}\n.queue .queueHeader .dropbox .optionList .listItems .listItem {\n  width: 70%;\n  position: absolute;\n  top: 50%;\n  left: 5%;\n  transform: translateY(-50%);\n}\n.queue .queueHeader .dropbox .optionList .listItems .border {\n  width: 90%;\n  position: absolute;\n  top: 2.5%;\n  left: 5%;\n  transform: translateY(-50%);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n.queue .queueHeader .dropbox .optionList .listItems .listItems:nth-child(1) .border {\n  border-top: 0px solid black;\n}\n.queue .queueHeader .dropbox .optionList .listItems .optionIcon {\n  width: 30%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0;\n}\n.queue .queueHeader .dropbox .optionList .listItems .optionIcon .icons {\n  height: 100%;\n  width: 30%;\n  padding-left: 10%;\n}\n.queue .queueHeader .select-items {\n  border-radius: 10px;\n}\n.queue .example-box.loginDisclaimer {\n  margin-top: 5px;\n  height: 30px;\n  background: rgba(220, 20, 60, 0.356);\n}\n.queue .example-box.loginDisclaimer .songTitle {\n  width: 100%;\n  color: #5c0101;\n  text-align: center;\n}\n.queue .songList.smaller {\n  height: 84%;\n}\n.queue .queElements {\n  width: 95%;\n  height: 10%;\n  margin: auto;\n  position: relative;\n}\n.queue .queueElem {\n  width: 100%;\n  height: 90%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(165, 42, 42, 0.5);\n  display: flex;\n  justify-content: flex-start;\n}\n.queue .queueElem.current {\n  background: brown;\n}\n.queue .thumbNail {\n  height: 100%;\n  width: 30%;\n  margin: auto;\n  position: relative;\n}\n.queue .thumbNail > img {\n  height: 90%;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n}\n.queue .songTitle {\n  height: 100%;\n  width: 65%;\n}\n.example-list {\n  width: 500px;\n  max-width: 100%;\n  min-height: 60px;\n  padding-top: 5px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n}\n.songList {\n  height: 89%;\n  overflow: auto;\n  margin-top: 5px;\n}\n.songList::-webkit-scrollbar {\n  width: 4px;\n}\n.example-box {\n  width: 95%;\n  margin: auto;\n  margin-bottom: 5px;\n  height: 60px;\n  padding: 1%;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 5px;\n  font-size: 90%;\n  position: relative;\n}\n.example-box .thumbNail {\n  width: 60px;\n  margin-left: 5px;\n  margin-right: 5px;\n  position: relative;\n}\n.example-box .thumbNail > img {\n  height: 90%;\n  width: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n}\n.example-box .handler {\n  cursor: move;\n}\n.example-box .songTitle {\n  height: auto;\n  width: 55%;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 300;\n  line-height: 25px;\n  word-break: break-word;\n}\n.example-box .closer {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n.example-box .closer .icons {\n  height: 15px;\n  width: 15px;\n  rotate: 90;\n}\n.example-box .closer.editIcon {\n  top: 35px;\n}\n.example-box .player {\n  position: absolute;\n  bottom: 0px;\n  right: 8px;\n  z-index: 999;\n}\n.example-box .player .icons {\n  height: 25px;\n  width: 25px;\n  rotate: 90;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.current {\n  background: rgba(0, 0, 0, 0.9);\n  color: #01D2BE;\n}\n.current .thumbNail {\n  padding-left: 26px;\n}\n.adderPart {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 8%;\n  max-height: 40px;\n  width: 100%;\n  z-index: 9999;\n}\n.sendBack.adderPart {\n  width: 30%;\n  left: 84%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVldWUvRDpcXEFuZ3VsYXJcXE9TTS9zcmNcXGFwcFxccXVldWVcXHF1ZXVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWV1ZS9xdWV1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBRUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURHSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDRE47QURFTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FSO0FER007RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0FWO0FEQ1U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDWjtBRENVO0VBQ0UsU0FBQTtBQ0NaO0FERVE7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQVY7QURDVTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ1o7QURDVTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDVjtBRENVO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0YsU0FBQTtBQ0NWO0FEQVU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNFWjtBREVRO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FWO0FEQ1U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ1o7QURDVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ1o7QURBWTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNFZDtBREFZO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0FDRWQ7QURBWTtFQUNFLDJCQUFBO0FDRWQ7QURBWTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FDRWQ7QUREYztFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNHaEI7QURHTTtFQUNFLG1CQUFBO0FDRFI7QURLSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNITjtBRElNO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FETUk7RUFDRSxXQUFBO0FDSk47QURRSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTlI7QURRSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ05SO0FEUUk7RUFDSSxpQkFBQTtBQ05SO0FEUUk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05SO0FET1E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRFFJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNOUjtBRFdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNSSjtBRFlFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDVEo7QURZRTtFQUNFLFVBQUE7QUNUSjtBRFlFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVEo7QURXSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRFVRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDUlo7QURXSTtFQUNFLFlBQUE7QUNUTjtBRFdJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNUUjtBRFdJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1ROO0FEVU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNSUjtBRFdJO0VBQ0UsU0FBQTtBQ1ROO0FEV0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1ROO0FEVU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNSUjtBRGFFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDVko7QURlRTtFQUNFLFVBQUE7QUNaSjtBRGVFO0VBQ0Usc0RBQUE7QUNaSjtBRGVFO0VBQ0UsWUFBQTtBQ1pKO0FEZUU7RUFDRSxzREFBQTtBQ1pKO0FEZUU7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNaSjtBRGFJO0VBQ0Usa0JBQUE7QUNYTjtBRGVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDWko7QURjRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9xdWV1ZS9xdWV1ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWV1ZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYm94e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTglO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1ODA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAucXVldWVIZWFkZXJ7XHJcbiAgICAgIGhlaWdodDogOCU7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgIC5leHBhbmR7XHJcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzFlM2QyNjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmRyb3Bib3h7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDk1JTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuYWRkUEx7XHJcbiAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgICAgIC5pY29uc3tcclxuICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDc1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5leHBhbmQuaWNvbnN7XHJcbiAgICAgICAgICAgIGxlZnQ6IDgwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIC5pY29ubntcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNiU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGxheWxpc3ROYW1le1xyXG4gICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnJvd3tcclxuICAgICAgICAgICAgd2lkdGg6IDUlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICAuaWNvbnN7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHJvdGF0ZTogKDkwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcHRpb25MaXN0e1xyXG4gICAgICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgLnNlbGVjdGVke1xyXG4gICAgICAgICAgICBjb2xvcjogIzJENTAzNjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4NSU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpc3RJdGVtc3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgICAgICAgICAubGlzdEl0ZW17XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3JkZXJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAyLjUlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saXN0SXRlbXM6bnRoLWNoaWxkKDEpIC5ib3JkZXJ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHRpb25JY29ue1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgLmljb25ze1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2VsZWN0LWl0ZW1ze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXhhbXBsZS1ib3gubG9naW5EaXNjbGFpbWVye1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDIwLCA2MCwgMC4zNTYpO1xyXG4gICAgICAuc29uZ1RpdGxle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoOTIsIDEsIDEpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zb25nTGlzdC5zbWFsbGVye1xyXG4gICAgICBoZWlnaHQ6IDg0JTtcclxuICAgIH1cclxuICAgICBcclxuICAgIFxyXG4gICAgLnF1ZUVsZW1lbnRze1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5xdWV1ZUVsZW17XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjUpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgLnF1ZXVlRWxlbS5jdXJyZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJyb3duO1xyXG4gICAgfVxyXG4gICAgLnRodW1iTmFpbHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgID5pbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNvbmdUaXRsZXtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuLmV4YW1wbGUtbGlzdCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnNvbmdMaXN0e1xyXG4gICAgaGVpZ2h0OiA4OSU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcblxyXG4gIC5zb25nTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDRweDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWJveCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgICBcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICAudGh1bWJOYWlse1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgID5pbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhhbmRsZXJ7XHJcbiAgICAgIGN1cnNvcjogbW92ZTtcclxuICAgIH1cclxuICAgIC5zb25nVGl0bGV7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOjU1JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDsgICAgXHJcbiAgICB9XHJcbiAgICAuY2xvc2Vye1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICByaWdodDogOHB4O1xyXG4gICAgICAuaWNvbnN7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIHJvdGF0ZTogKDkwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNsb3Nlci5lZGl0SWNvbntcclxuICAgICAgdG9wOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLnBsYXllcntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAuaWNvbnN7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIHJvdGF0ZTogKDkwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcblxyXG4gIC5jdXJyZW50e1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gICAgY29sb3I6ICMwMUQyQkU7XHJcbiAgICAudGh1bWJOYWlse1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWRkZXJQYXJ0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogOCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gIH1cclxuICAuc2VuZEJhY2suYWRkZXJQYXJ0e1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgbGVmdDogODQlO1xyXG4gIH1cclxuIiwiLnF1ZXVlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xdWV1ZSAuYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1ODA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnF1ZXVlIC5xdWV1ZUhlYWRlciB7XG4gIGhlaWdodDogOCU7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG4ucXVldWUgLnF1ZXVlSGVhZGVyIC5leHBhbmQge1xuICBmb250LXNpemU6IDkwJTtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMWUzZDI2O1xufVxuLnF1ZXVlIC5xdWV1ZUhlYWRlciAuZHJvcGJveCB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogOTUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xdWV1ZSAucXVldWVIZWFkZXIgLmRyb3Bib3ggLmFkZFBMIHtcbiAgd2lkdGg6IDIwJTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cbi5xdWV1ZSAucXVldWVIZWFkZXIgLmRyb3Bib3ggLmFkZFBMIC5pY29ucyB7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogNjAlO1xuICB0b3A6IDIwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3NSU7XG59XG4ucXVldWUgLnF1ZXVlSGVhZGVyIC5kcm9wYm94IC5hZGRQTCAuZXhwYW5kLmljb25zIHtcbiAgbGVmdDogODAlO1xufVxuLnF1ZXVlIC5xdWV1ZUhlYWRlciAuZHJvcGJveCAuY29udGVudCB7XG4gIHdpZHRoOiA3NSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnF1ZXVlIC5xdWV1ZUhlYWRlciAuZHJvcGJveCAuY29udGVudCAuaWNvbm4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiA2JTtcbn1cbi5xdWV1ZSAucXVldWVIZWFkZXIgLmRyb3Bib3ggLmNvbnRlbnQgLnBsYXlsaXN0TmFtZSB7XG4gIHdpZHRoOiA3MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMjAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5xdWV1ZSAucXVldWVIZWFkZXIgLmRyb3Bib3ggLmNvbnRlbnQgLmFycm93IHtcbiAgd2lkdGg6IDUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiA1JTtcbn1cbi5xdWV1ZSAucXVldWVIZWFkZXIgLmRyb3Bib3ggLmNvbnRlbnQgLmFycm93IC5pY29ucyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHJvdGF0ZTogOTA7XG59XG4ucXVldWUgLnF1ZXVlSGVhZGVyIC5kcm9wYm94IC5vcHRpb25MaXN0IHtcbiAgd2lkdGg6IDEyMCU7XG4gIG1pbi13aWR0aDogMjMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGNvbG9yOiAjMjcyNzI3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucXVldWUgLnF1ZXVlSGVhZGVyIC5kcm9wYm94IC5vcHRpb25MaXN0IC5zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMkQ1MDM2O1xuICBmb250LXNpemU6IDg1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucXVldWUgLnF1ZXVlSGVhZGVyIC5kcm9wYm94IC5vcHRpb25MaXN0IC5saXN0SXRlbXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA4MCU7XG59XG4ucXVldWUgLnF1ZXVlSGVhZGVyIC5kcm9wYm94IC5vcHRpb25MaXN0IC5saXN0SXRlbXMgLmxpc3RJdGVtIHtcbiAgd2lkdGg6IDcwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5xdWV1ZSAucXVldWVIZWFkZXIgLmRyb3Bib3ggLm9wdGlvbkxpc3QgLmxpc3RJdGVtcyAuYm9yZGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIuNSU7XG4gIGxlZnQ6IDUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ucXVldWUgLnF1ZXVlSGVhZGVyIC5kcm9wYm94IC5vcHRpb25MaXN0IC5saXN0SXRlbXMgLmxpc3RJdGVtczpudGgtY2hpbGQoMSkgLmJvcmRlciB7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCBibGFjaztcbn1cbi5xdWV1ZSAucXVldWVIZWFkZXIgLmRyb3Bib3ggLm9wdGlvbkxpc3QgLmxpc3RJdGVtcyAub3B0aW9uSWNvbiB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICByaWdodDogMDtcbn1cbi5xdWV1ZSAucXVldWVIZWFkZXIgLmRyb3Bib3ggLm9wdGlvbkxpc3QgLmxpc3RJdGVtcyAub3B0aW9uSWNvbiAuaWNvbnMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuLnF1ZXVlIC5xdWV1ZUhlYWRlciAuc2VsZWN0LWl0ZW1zIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5xdWV1ZSAuZXhhbXBsZS1ib3gubG9naW5EaXNjbGFpbWVyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjIwLCAyMCwgNjAsIDAuMzU2KTtcbn1cbi5xdWV1ZSAuZXhhbXBsZS1ib3gubG9naW5EaXNjbGFpbWVyIC5zb25nVGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM1YzAxMDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5xdWV1ZSAuc29uZ0xpc3Quc21hbGxlciB7XG4gIGhlaWdodDogODQlO1xufVxuLnF1ZXVlIC5xdWVFbGVtZW50cyB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogMTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xdWV1ZSAucXVldWVFbGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTY1LCA0MiwgNDIsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5xdWV1ZSAucXVldWVFbGVtLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiBicm93bjtcbn1cbi5xdWV1ZSAudGh1bWJOYWlsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5xdWV1ZSAudGh1bWJOYWlsID4gaW1nIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5xdWV1ZSAuc29uZ1RpdGxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNjUlO1xufVxuXG4uZXhhbXBsZS1saXN0IHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc29uZ0xpc3Qge1xuICBoZWlnaHQ6IDg5JTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnNvbmdMaXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA0cHg7XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDElO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leGFtcGxlLWJveCAudGh1bWJOYWlsIHtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZXhhbXBsZS1ib3ggLnRodW1iTmFpbCA+IGltZyB7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZXhhbXBsZS1ib3ggLmhhbmRsZXIge1xuICBjdXJzb3I6IG1vdmU7XG59XG4uZXhhbXBsZS1ib3ggLnNvbmdUaXRsZSB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDU1JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4uZXhhbXBsZS1ib3ggLmNsb3NlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG59XG4uZXhhbXBsZS1ib3ggLmNsb3NlciAuaWNvbnMge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICByb3RhdGU6IDkwO1xufVxuLmV4YW1wbGUtYm94IC5jbG9zZXIuZWRpdEljb24ge1xuICB0b3A6IDM1cHg7XG59XG4uZXhhbXBsZS1ib3ggLnBsYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiA4cHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5leGFtcGxlLWJveCAucGxheWVyIC5pY29ucyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHJvdGF0ZTogOTA7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uY3VycmVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgY29sb3I6ICMwMUQyQkU7XG59XG4uY3VycmVudCAudGh1bWJOYWlsIHtcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xufVxuXG4uYWRkZXJQYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogOCU7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc2VuZEJhY2suYWRkZXJQYXJ0IHtcbiAgd2lkdGg6IDMwJTtcbiAgbGVmdDogODQlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/queue/queue.component.ts":
/*!******************************************!*\
  !*** ./src/app/queue/queue.component.ts ***!
  \******************************************/
/*! exports provided: QueueComponent, DialogOverviewExampleDialog, ModifyAddDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueComponent", function() { return QueueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyAddDialog", function() { return ModifyAddDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/musicDataFetcher.service */ "./src/app/services/musicDataFetcher.service.ts");
/* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var _music_add_music_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../music-add/music-add.component */ "./src/app/music-add/music-add.component.ts");








let QueueComponent = class QueueComponent {
    constructor(musicDataFetcher, dialog, screenState) {
        this.musicDataFetcher = musicDataFetcher;
        this.dialog = dialog;
        this.screenState = screenState;
        this.expanded = false;
        this.showExpand = true;
        this.isClosed = true;
        this.playlists = [];
        this.selectedPlaylist = 0;
        this.addable = false;
        this.cantAddplayList = true;
        this.hideSearch = true;
        this.selectedValue = 'Default';
        this.onIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDoubleClic = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onExpCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAddPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModifyPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeletePlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChangePlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChangePos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isRemSong = false;
        this.isEditSong = false;
        this.isGuestQueue = false;
    }
    OnIndChanges() {
        //console.log(this.currentIndex);
        this.onIndexChange.emit(this.currentIndex);
    }
    addVideo(event) {
        this.onAdd.emit(event);
    }
    hideSear(event) {
        this.hideSearch = event;
    }
    ngOnInit() {
        this.screenState.screenSize.subscribe(screen => {
            if (!screen.isMobile) {
                this.expanded = true;
                this.showExpand = false;
                this.onExpandCollapse();
            }
            else {
                this.showExpand = true;
            }
        });
        console.log("is guest", localStorage.getItem('username'));
        this.isGuestQueue = localStorage.getItem('username') == 'Guest';
    }
    scrollPlacement() {
        setTimeout(() => {
            this.divToScroll.nativeElement.scrollTop = (this.currentIndex) * 60;
        }, 200);
    }
    selectPL(index) {
        console.log(index, "selected");
        this.onChangePlaylist.emit(index);
        this.isClosed = true;
    }
    addPL() {
        let names = [];
        this.playlists.forEach(element => {
            names.push(element.playlist);
        });
        const dialogRef = this.dialog.open(ModifyAddDialog, {
            width: '250px',
            data: { title: '', default: false, type: 'Add', prevVals: names }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            if (result) {
                this.onAddPlaylist.emit({
                    title: result.title,
                    isDefault: result.default
                });
            }
        });
    }
    editPL(index) {
        let names = [];
        this.playlists.forEach(element => {
            names.push(element.playlist);
        });
        const dialogRef = this.dialog.open(ModifyAddDialog, {
            width: '280px',
            data: { title: this.playlists[index].playlist, default: this.playlists[index].id == this.defaultPlaylist.id, type: 'Modify', prevVals: names }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            if (result) {
                this.onModifyPlaylist.emit({
                    index: index,
                    title: result.title,
                    isDefault: result.default
                });
            }
            this.isClosed = true;
        });
    }
    deletePL(index) {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { title: this.playlists[index].playlist, returnVal: false, type: 'Playlists' }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            if (result && result.returnVal) {
                this.onDeletePlaylist.emit(index);
            }
        });
        this.isClosed = true;
    }
    onExpandCollapse() {
        this.expanded = !this.expanded;
        this.onExpCollapse.emit(this.expanded);
    }
    drop(event) {
        //console.log(event);
        if (event.previousIndex == this.currentIndex) {
            return;
        }
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.playerQueue, event.previousIndex, event.currentIndex);
        if (event.previousIndex > this.currentIndex && event.currentIndex <= this.currentIndex) {
            this.currentIndex++;
            this.OnIndChanges();
        }
        else if (event.previousIndex < this.currentIndex && event.currentIndex >= this.currentIndex) {
            this.currentIndex--;
            this.OnIndChanges();
        }
        this.onChangePos.emit(event.currentIndex);
    }
    remSong(index) {
        this.isRemSong = true;
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { title: this.playerQueue[index].title, returnVal: false, type: 'Queue' }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            if (result && result.returnVal) {
                if (localStorage.getItem('loggedIn') && localStorage.getItem('loggedIn') == 'true') {
                    let user = localStorage.getItem('username') ? localStorage.getItem('username') : 'Guest';
                    if (user != 'Guest') {
                        let videoElem = this.playerQueue[index];
                        this.musicDataFetcher.deleteSong(videoElem).subscribe(data => {
                            console.log(data);
                        });
                    }
                }
                if (index < this.currentIndex) {
                    this.currentIndex--;
                    this.OnIndChanges();
                }
                this.playerQueue.splice(index, 1);
            }
        });
    }
    editTitle(index) {
        this.isEditSong = true;
        const dialogRef = this.dialog.open(ModifyAddDialog, {
            width: '280px',
            data: { title: this.playerQueue[index].title, default: false, type: 'Edit', prevVals: [] }
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            if (result) {
                this.onEditTitle.emit({
                    index: index,
                    title: result.title
                });
            }
        });
    }
    playSong(index) {
        setTimeout(() => {
            if (this.isRemSong || this.isEditSong) {
                this.isRemSong = false;
                this.isEditSong = false;
                return;
            }
            this.onDoubleClic.emit(index);
        }, 100);
    }
};
QueueComponent.ctorParameters = () => [
    { type: _services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__["MusicDataFetcher"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_6__["screenSizeState"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueComponent.prototype, "playerQueue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueComponent.prototype, "currentIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueComponent.prototype, "expanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueComponent.prototype, "playlists", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueComponent.prototype, "defaultPlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueComponent.prototype, "selectedPlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QueueComponent.prototype, "addable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('divToScroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
], QueueComponent.prototype, "divToScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_music_add_music_add_component__WEBPACK_IMPORTED_MODULE_7__["MusicAddComponent"], { read: _music_add_music_add_component__WEBPACK_IMPORTED_MODULE_7__["MusicAddComponent"], static: false })
], QueueComponent.prototype, "addrComp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onIndexChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onDoubleClic", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onExpCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onAddPlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onModifyPlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onDeletePlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onChangePlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onAdd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onEditTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QueueComponent.prototype, "onChangePos", void 0);
QueueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-queue',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./queue.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/queue/queue.component.html")).default,
        providers: [_services_musicDataFetcher_service__WEBPACK_IMPORTED_MODULE_3__["MusicDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_4__["DataFetcher"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./queue.component.scss */ "./src/app/queue/queue.component.scss")).default]
    })
], QueueComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.response = {
            title: '',
            returnVal: true,
            type: 'Queue'
        };
    }
    ngOnInit() {
        this.response.title = this.data.title;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/queue/dialog-overview-example-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog);

let ModifyAddDialog = class ModifyAddDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.validName = false;
        this.blankNm = true;
        this.origNm = '';
        this.origBool = true;
    }
    ngOnInit() {
        this.origNm = this.data.title;
        if (this.origNm.length > 0) {
            this.blankNm = false;
            this.validName = true;
        }
        if (this.data.type == 'Edit') {
            this.inputStyle = {
                'min-height': '100px'
            };
        }
        else {
            this.inputStyle = {
                'min-height': '160px'
            };
        }
    }
    onNameChange() {
        if (this.data.title.length == 0) {
            this.blankNm = true;
            return;
        }
        else {
            this.blankNm = false;
        }
        if (this.data.title != this.origNm && this.data.prevVals.indexOf(this.data.title) > -1) {
            this.validName = false;
            return;
        }
        this.validName = true;
    }
    onBoolChange() {
        this.origBool = !this.origBool;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ModifyAddDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
];
ModifyAddDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modify-add-playlist-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modify-add-playlist-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/queue/modify-add-playlist-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))
], ModifyAddDialog);



/***/ }),

/***/ "./src/app/services/DataFetcher.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/DataFetcher.service.ts ***!
  \*************************************************/
/*! exports provided: DataFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFetcher", function() { return DataFetcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataFetcher = class DataFetcher {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://osm-server.herokuapp.com/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'authkey',
                'userid': '1'
            })
        };
    }
    get(uri) {
        let url = this.baseUrl.concat(uri);
        return this.http.get(url, this.httpOptions);
    }
    post(uri, request) {
        let url = this.baseUrl.concat(uri);
        return this.http.post(url, request, this.httpOptions);
    }
};
DataFetcher.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataFetcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataFetcher);



/***/ }),

/***/ "./src/app/services/PlayList.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/PlayList.service.ts ***!
  \**********************************************/
/*! exports provided: PlaylistDataFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistDataFetcher", function() { return PlaylistDataFetcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _DataFetcher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");



let PlaylistDataFetcher = class PlaylistDataFetcher {
    constructor(dataFetcher) {
        this.dataFetcher = dataFetcher;
    }
    getAllPlaylists(user) {
        let uri = "playlist/getAll/" + user;
        return this.dataFetcher.get(uri);
    }
    addPlaylist(playlist) {
        let uri = "playlist/saveItem";
        return this.dataFetcher.post(uri, playlist);
    }
    deletePlaylist(playlist) {
        let uri = "playlist/deleteItem";
        return this.dataFetcher.post(uri, playlist);
    }
    editPlaylist(playlist) {
        let uri = "playlist/editItem";
        return this.dataFetcher.post(uri, playlist);
    }
};
PlaylistDataFetcher.ctorParameters = () => [
    { type: _DataFetcher_service__WEBPACK_IMPORTED_MODULE_2__["DataFetcher"] }
];
PlaylistDataFetcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PlaylistDataFetcher);



/***/ }),

/***/ "./src/app/services/loginDataFetche.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/loginDataFetche.service.ts ***!
  \*****************************************************/
/*! exports provided: LoginDataFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDataFetcher", function() { return LoginDataFetcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _DataFetcher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");



let LoginDataFetcher = class LoginDataFetcher {
    constructor(dataFetcher) {
        this.dataFetcher = dataFetcher;
    }
    getAllUsers() {
        let uri = "login/getAllUsername";
        return this.dataFetcher.get(uri);
    }
    getAllEmails() {
        let uri = "login/getAllEmail";
        return this.dataFetcher.get(uri);
    }
    checkPassword(credential) {
        let uri = "login/check/password";
        return this.dataFetcher.post(uri, credential);
    }
    addUser(user) {
        let uri = "login/saveUser";
        return this.dataFetcher.post(uri, user);
    }
    getUser(user) {
        let uri = "login/getUser/" + user;
        return this.dataFetcher.get(uri);
    }
    sendOTP(user) {
        let uri = "mail/sendMail";
        return this.dataFetcher.post(uri, user);
    }
    getOTP() {
        let uri = "mail/getOTP";
        return this.dataFetcher.get(uri);
    }
};
LoginDataFetcher.ctorParameters = () => [
    { type: _DataFetcher_service__WEBPACK_IMPORTED_MODULE_2__["DataFetcher"] }
];
LoginDataFetcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoginDataFetcher);



/***/ }),

/***/ "./src/app/services/musicDataFetcher.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/musicDataFetcher.service.ts ***!
  \******************************************************/
/*! exports provided: MusicDataFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicDataFetcher", function() { return MusicDataFetcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _DataFetcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MusicDataFetcher = class MusicDataFetcher {
    constructor(dataFetcher) {
        this.dataFetcher = dataFetcher;
    }
    getAllSongs(user) {
        let uri = "music/getAll/" + user;
        return this.dataFetcher.get(uri);
    }
    editTitle(id, title) {
        let uri = "music/update/" + id + "/" + title;
        return this.dataFetcher.get(uri);
    }
    saveSong(item) {
        let uri = "music/saveItem";
        return this.dataFetcher.post(uri, item);
    }
    deleteSong(item) {
        let uri = "music/deleteItem";
        return this.dataFetcher.post(uri, item);
    }
    setLexoRank(id, prev, next) {
        console.log("inside call", prev, next);
        let uri = "lexo/setLexorank";
        return this.dataFetcher.post(uri, { id: id, prev: prev, next: next });
    }
    rebalancePL(usernm, playlist) {
        playlist = playlist ? playlist : "rebalanceUndefinedPL";
        let uri = "lexo/rebalance/" + usernm + "/" + playlist;
        return this.dataFetcher.get(uri);
    }
    getYoutubeAutocomplete(query) {
        let uri = "music/getSuggestions/" + query;
        return this.dataFetcher.get(uri);
    }
};
MusicDataFetcher.ctorParameters = () => [
    { type: _DataFetcher_service__WEBPACK_IMPORTED_MODULE_1__["DataFetcher"] }
];
MusicDataFetcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], MusicDataFetcher);



/***/ }),

/***/ "./src/app/services/screen-size.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/screen-size.service.ts ***!
  \*************************************************/
/*! exports provided: screenSizeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenSizeState", function() { return screenSizeState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let screenSizeState = class screenSizeState {
    constructor() {
        this.screenSizeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ width: 1280, height: 720, isMobile: true });
        this.screenSize = this.screenSizeSource.asObservable();
    }
    updatedScreenSize(wdt, hgt, isMob) {
        let newScreen = {
            width: wdt,
            height: hgt,
            isMobile: isMob
        };
        this.currentScreen = newScreen;
        this.screenSizeSource.next(newScreen);
    }
    getCurrentScreen() {
        return this.currentScreen;
    }
};
screenSizeState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], screenSizeState);



/***/ }),

/***/ "./src/app/services/youtube-search.injectables.ts":
/*!********************************************************!*\
  !*** ./src/app/services/youtube-search.injectables.ts ***!
  \********************************************************/
/*! exports provided: YouTubeServiceInjectables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeServiceInjectables", function() { return YouTubeServiceInjectables; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _youtube_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube-search.service */ "./src/app/services/youtube-search.service.ts");


const YouTubeServiceInjectables = [
    { provide: _youtube_search_service__WEBPACK_IMPORTED_MODULE_1__["YouTubeSearchService"], useClass: _youtube_search_service__WEBPACK_IMPORTED_MODULE_1__["YouTubeSearchService"] },
    { provide: _youtube_search_service__WEBPACK_IMPORTED_MODULE_1__["YOUTUBE_API_KEY"], useValue: _youtube_search_service__WEBPACK_IMPORTED_MODULE_1__["YOUTUBE_API_KEY"] },
    { provide: _youtube_search_service__WEBPACK_IMPORTED_MODULE_1__["YOUTUBE_API_URL"], useValue: _youtube_search_service__WEBPACK_IMPORTED_MODULE_1__["YOUTUBE_API_URL"] }
];


/***/ }),

/***/ "./src/app/services/youtube-search.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/youtube-search.service.ts ***!
  \****************************************************/
/*! exports provided: YOUTUBE_API_KEY, YOUTUBE_API_URL, Result, YouTubeSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_API_KEY", function() { return YOUTUBE_API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOUTUBE_API_URL", function() { return YOUTUBE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeSearchService", function() { return YouTubeSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




const YOUTUBE_API_KEY = 'AIzaSyAU6U9OdHxTCKprrmKGKNz1jOZnyxIbWSk';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
class Result {
    constructor(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.desc = obj && obj.desc || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.channelTitle = obj && obj.channelTitle || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}
let YouTubeSearchService = class YouTubeSearchService {
    constructor(http, apiKey, apiUrl) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    search(query) {
        const params = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=20`
        ].join('&');
        const queryUrl = `${this.apiUrl}?${params}`;
        console.log(queryUrl);
        return this.http.get(queryUrl).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return response['items'].map(item => {
                return new Result({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    desc: item.snippet.description,
                    channelTitle: item.snippet.channelTitle,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        }));
    }
};
YouTubeSearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [YOUTUBE_API_KEY,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [YOUTUBE_API_URL,] }] }
];
YouTubeSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(YOUTUBE_API_KEY)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(YOUTUBE_API_URL))
], YouTubeSearchService);



/***/ }),

/***/ "./src/app/sign-up/sign-up-style.service.ts":
/*!**************************************************!*\
  !*** ./src/app/sign-up/sign-up-style.service.ts ***!
  \**************************************************/
/*! exports provided: signupStyleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupStyleService", function() { return signupStyleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let signupStyleService = class signupStyleService {
    constructor() {
    }
    loginStyleSetter(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        return {
            'width': boxSize + 'px',
            'height': boxSize + 'px',
            'background-color': 'rgba(0,0,0,0.8)',
            'color': 'white',
            'position': 'absolute',
            'top': (scrSz.height - boxSize) / 2 + 'px',
            'left': (scrSz.width - boxSize) / 2 + 'px',
            'box-shadow': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        };
    }
    logoStyleSetter(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        let rat = 2 * boxSize / (scrSz.height - boxSize);
        if (rat < 1.4) {
            return {
                'width': boxSize + 'px',
                'height': (scrSz.height - boxSize) / 2 + 'px',
                'position': 'absolute',
                'top': '0px',
                'left': (scrSz.width - boxSize) / 2 + 'px',
                'font-size': (scrSz.height - boxSize) / 20 + 'px',
                'padding-top': (scrSz.height - boxSize) / 12 + 'px',
            };
        }
        else {
            return {
                'width': boxSize + 'px',
                'height': (scrSz.height - boxSize) / 2 + 'px',
                'position': 'absolute',
                'top': '0px',
                'left': (scrSz.width - boxSize) / 2 + 'px',
                'font-size': (scrSz.height - boxSize) / 20 + 'px',
                'display': 'flex',
                'justify-content': 'center'
            };
        }
    }
    abbrLogoStyler(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        return {
            'line-height': ((scrSz.height - boxSize) / 5) + 'px',
        };
    }
    imgLogoStyler(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        let rat = 2 * boxSize / (scrSz.height - boxSize);
        if (rat < 1.6) {
            return {
                'width': '100%'
            };
        }
        else {
            return {
                'height': '100%'
            };
        }
    }
    fullLogoStyler(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        return {
            'line-height': '1px',
        };
    }
    tabTextSizeSetter(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        let tabSize = 0.15 * boxSize;
        return {
            'font-size': (0.4 * tabSize) + 'px',
        };
    }
    inputTextSizeSetter(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        let tabSize = 0.15 * boxSize;
        return {
            'font-size': (0.3 * tabSize) + 'px',
        };
    }
    tabTextAlignSizeSetter(scrSz) {
        let boxSize = 0.6 * Math.min(scrSz.width, scrSz.height);
        let tabSize = 0.15 * boxSize;
        return {
            'height': (tabSize) + 'px',
            'line-height': (tabSize) + 'px',
        };
    }
};
signupStyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], signupStyleService);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".LogoContainer {\n  vertical-align: middle;\n}\n\n.abbrLogo {\n  font-size: 400%;\n  text-align: center;\n  font-family: \"Sedgwick Ave Display\", cursive;\n  -webkit-text-stroke: 1px black;\n  color: white;\n  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\n.fullLogo {\n  font-size: 150%;\n  text-align: center;\n  color: aliceblue;\n  font-family: \"Cookie\", cursive;\n}\n\n.loginTabs {\n  width: 100%;\n  height: 15%;\n  display: flex;\n  justify-content: space-evenly;\n  background-color: #009688;\n  color: #f5f5f5;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\n.loginTab {\n  width: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.headerImg {\n  height: 100%;\n}\n\n.loginTabs .activeTab {\n  background-color: #42b1a7;\n}\n\n.loginFormSection, .regFormSection {\n  width: 100%;\n  height: 85%;\n}\n\n.loginputField {\n  width: 100%;\n  height: 25%;\n  align-content: center;\n}\n\n.loginputField > mat-form-field {\n  width: 84%;\n  height: 50%;\n  padding-left: 8%;\n  padding-top: 11%;\n}\n\n.loginputField > mat-error {\n  width: 84%;\n  padding-left: 8%;\n  padding-top: 3%;\n  font-size: 55%;\n  text-align: right;\n}\n\n.loginputField input:-webkit-autofill,\n.loginputField input:-webkit-autofill:hover,\n.loginputField input:-webkit-autofill:focus,\n.loginputField textarea:-webkit-autofill,\n.loginputField textarea:-webkit-autofill:hover,\n.loginputField textarea:-webkit-autofill:focus,\n.loginputField select:-webkit-autofill,\n.loginputField select:-webkit-autofill:hover,\n.loginputField select:-webkit-autofill:focus {\n  background-color: transparent !important;\n  background-image: none !important;\n  -webkit-text-fill-color: white !important;\n  transition: background-color 5000s ease-in-out 0s;\n}\n\n.loginButton {\n  width: 100%;\n  height: 30%;\n  padding-top: 15%;\n}\n\n.loginButton .buttons {\n  height: 65%;\n  display: flex;\n  align-content: space-around;\n}\n\n.loginButton .buttons > button {\n  width: 34%;\n  height: 80%;\n  margin-left: 11%;\n  background-color: #009688;\n  color: #f5f5f5;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\n.loginButton .buttons > button:disabled {\n  background-color: #00968775;\n}\n\n.loginButton > mat-error {\n  width: 84%;\n  padding-left: 8%;\n  font-size: 70%;\n  text-align: center;\n}\n\n.reginputField {\n  width: 100%;\n  height: 17%;\n  align-content: center;\n}\n\n.reginputField > mat-form-field {\n  width: 84%;\n  height: 20%;\n  padding-left: 8%;\n  padding-top: 4%;\n}\n\n.reginputField > mat-error {\n  width: 84%;\n  padding-left: 8%;\n  padding-top: 3%;\n  font-size: 55%;\n  text-align: right;\n}\n\n.regButton {\n  width: 100%;\n  height: 28%;\n  padding-top: 9%;\n  display: flex;\n  align-content: space-around;\n}\n\n.regButton > button {\n  width: 34%;\n  height: 55%;\n  margin-left: 11%;\n  background-color: #009688;\n  color: #f5f5f5;\n  font-family: \"Ubuntu\", sans-serif;\n}\n\n.regButton > button:disabled {\n  background-color: #00968775;\n}\n\n.setBackground {\n  background: linear-gradient(45deg, #032d4c, #3a6073);\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9EOlxcQW5ndWxhclxcT1NNL3NyY1xcYXBwXFxzaWduLXVwXFxzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxzQkFBQTtBQ0FKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0QsNENBQUE7RUFDQyw4QkFBQTtFQUNBLFlBQUE7RUFDQSwrRkFDSTtBQ0ZSOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ05KOztBRFVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQ1BKOztBRFVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNQSjs7QURVQTtFQUNJLFlBQUE7QUNQSjs7QURXQTtFQUNJLHlCQUFBO0FDUko7O0FEV0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ1JKOztBRFdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ1JKOztBRFNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDUFI7O0FEU0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDUFI7O0FEVUk7Ozs7Ozs7OztFQVNJLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlEQUFBO0FDUlI7O0FEWUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDVEo7O0FEWUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDVlI7O0FEYUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUNYUjs7QURhSTtFQUNJLDJCQUFBO0FDWFI7O0FEY0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNaUjs7QURnQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDYko7O0FEY0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1pSOztBRGNJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1pSOztBRGdCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQ2JKOztBRGdCSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBQ2RSOztBRGlCSTtFQUNJLDJCQUFBO0FDZlI7O0FEbUJBO0VBRUksb0RBQUE7RUFDQSxzQkFBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uTG9nb0NvbnRhaW5lcntcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcblxyXG4uYWJickxvZ297XHJcbiAgICBmb250LXNpemU6NDAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgZm9udC1mYW1pbHk6ICdTZWRnd2ljayBBdmUgRGlzcGxheScsIGN1cnNpdmU7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzpcclxuICAgICAgICAzcHggM3B4IDAgIzAwMCxcclxuICAgICAgICAtMXB4IC0xcHggMCAjMDAwLCAgXHJcbiAgICAgICAgMXB4IC0xcHggMCAjMDAwLFxyXG4gICAgICAgIC0xcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAxcHggMXB4IDAgIzAwMDtcclxufVxyXG5cclxuLmZ1bGxMb2dve1xyXG4gICAgZm9udC1zaXplOjE1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb29raWUnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5cclxuLmxvZ2luVGFic3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgXHJcbn1cclxuLmxvZ2luVGFie1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5oZWFkZXJJbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBcclxuLmxvZ2luVGFicyAuYWN0aXZlVGFie1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYjFhNztcclxufVxyXG5cclxuLmxvZ2luRm9ybVNlY3Rpb24sLnJlZ0Zvcm1TZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLmxvZ2lucHV0RmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgPm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTElO1xyXG4gICAgfVxyXG4gICAgPm1hdC1lcnJvcntcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo1NSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodCA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbiAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLCBcclxuICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbiAgICB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLFxyXG4gICAgdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcclxuICAgIHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbiAgICBzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCxcclxuICAgIHNlbGVjdDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG4gICAgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XHJcblxyXG4gICAgfVxyXG59XHJcbi5sb2dpbkJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgLmJ1dHRvbnN7XHJcbiAgICAgICAgaGVpZ2h0OiA2NSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgID5idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTElO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgICAgICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgPmJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg3NzU7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICA+bWF0LWVycm9ye1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgICAgICBmb250LXNpemU6NzAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyIDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZ2lucHV0RmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTclO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgPm1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICB9XHJcbiAgICA+bWF0LWVycm9ye1xyXG4gICAgICAgIHdpZHRoOiA4NCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICAgICAgZm9udC1zaXplOjU1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0IDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZ0J1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyOCU7XHJcbiAgICBwYWRkaW5nLXRvcDogOSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgPmJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMzQlO1xyXG4gICAgICAgIGhlaWdodDogNTUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICAgICAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgPmJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg3NzU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZXRCYWNrZ3JvdW5ke1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy90cmlhbmdsaWZ5LWxvd3Jlcy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgIzAzMmQ0YywgIzNhNjA3Myk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59IiwiLkxvZ29Db250YWluZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYWJickxvZ28ge1xuICBmb250LXNpemU6IDQwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiU2VkZ3dpY2sgQXZlIERpc3BsYXlcIiwgY3Vyc2l2ZTtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDAgIzAwMCwgLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xufVxuXG4uZnVsbExvZ28ge1xuICBmb250LXNpemU6IDE1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ29va2llXCIsIGN1cnNpdmU7XG59XG5cbi5sb2dpblRhYnMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5sb2dpblRhYiB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlckltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luVGFicyAuYWN0aXZlVGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyYjFhNztcbn1cblxuLmxvZ2luRm9ybVNlY3Rpb24sIC5yZWdGb3JtU2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg1JTtcbn1cblxuLmxvZ2lucHV0RmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbnB1dEZpZWxkID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODQlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy10b3A6IDExJTtcbn1cbi5sb2dpbnB1dEZpZWxkID4gbWF0LWVycm9yIHtcbiAgd2lkdGg6IDg0JTtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBmb250LXNpemU6IDU1JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubG9naW5wdXRGaWVsZCBpbnB1dDotd2Via2l0LWF1dG9maWxsLFxuLmxvZ2lucHV0RmllbGQgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3Zlcixcbi5sb2dpbnB1dEZpZWxkIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG4ubG9naW5wdXRGaWVsZCB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLFxuLmxvZ2lucHV0RmllbGQgdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpob3Zlcixcbi5sb2dpbnB1dEZpZWxkIHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG4ubG9naW5wdXRGaWVsZCBzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCxcbi5sb2dpbnB1dEZpZWxkIHNlbGVjdDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuLmxvZ2lucHV0RmllbGQgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4ubG9naW5CdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIHBhZGRpbmctdG9wOiAxNSU7XG59XG4ubG9naW5CdXR0b24gLmJ1dHRvbnMge1xuICBoZWlnaHQ6IDY1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmxvZ2luQnV0dG9uIC5idXR0b25zID4gYnV0dG9uIHtcbiAgd2lkdGg6IDM0JTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gIGNvbG9yOiAjZjVmNWY1O1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbn1cbi5sb2dpbkJ1dHRvbiAuYnV0dG9ucyA+IGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODc3NTtcbn1cbi5sb2dpbkJ1dHRvbiA+IG1hdC1lcnJvciB7XG4gIHdpZHRoOiA4NCU7XG4gIHBhZGRpbmctbGVmdDogOCU7XG4gIGZvbnQtc2l6ZTogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpbnB1dEZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTclO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ucmVnaW5wdXRGaWVsZCA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDg0JTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHBhZGRpbmctbGVmdDogOCU7XG4gIHBhZGRpbmctdG9wOiA0JTtcbn1cbi5yZWdpbnB1dEZpZWxkID4gbWF0LWVycm9yIHtcbiAgd2lkdGg6IDg0JTtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBmb250LXNpemU6IDU1JTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yZWdCdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOCU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnJlZ0J1dHRvbiA+IGJ1dHRvbiB7XG4gIHdpZHRoOiAzNCU7XG4gIGhlaWdodDogNTUlO1xuICBtYXJnaW4tbGVmdDogMTElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG59XG4ucmVnQnV0dG9uID4gYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4Nzc1O1xufVxuXG4uc2V0QmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAzMmQ0YywgIzNhNjA3Myk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent, DemoConfirmDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoConfirmDialog", function() { return DemoConfirmDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen-size.service */ "./src/app/services/screen-size.service.ts");
/* harmony import */ var _sign_up_style_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-style.service */ "./src/app/sign-up/sign-up-style.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loginDataFetche.service */ "./src/app/services/loginDataFetche.service.ts");
/* harmony import */ var _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/DataFetcher.service */ "./src/app/services/DataFetcher.service.ts");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let SignUpComponent = class SignUpComponent {
    constructor(_autofill, dialog, dataFetcher, router, screenState, styleSetter) {
        this._autofill = _autofill;
        this.dialog = dialog;
        this.dataFetcher = dataFetcher;
        this.router = router;
        this.screenState = screenState;
        this.styleSetter = styleSetter;
        this.loginSelected = true;
        this.regSelected = false;
        this.otpSentOnce = false;
        this.hidePwd = true;
        this.username = '';
        this.eml = '';
        this.pwd = '';
        this.otp = '';
        this.otpVal = '-1';
        this.errorEmailMsg = 'Invalid Email';
        this.errorUserMsg = "Username can't be blank";
        this.invalidEmail = true;
        this.invalidPassword = true;
        this.invalidUsername = true;
        this.invalidOtp = true;
        this.inputFocused = false;
        this.loginError = false;
        this.showLoginText = false;
        this.loginErrorMsg = '';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.screenState.screenSize.subscribe((scrSz) => {
            this.onScreensizeChange(scrSz);
        });
        this.dataFetcher.getAllUsers().subscribe(data => {
            this.allUsername = data;
        });
        this.dataFetcher.getAllEmails().subscribe(data => {
            this.allEmail = data;
        });
    }
    showLoginError(message) {
        this.loginError = true;
        this.loginErrorMsg = message;
        setTimeout(() => {
            this.loginError = false;
            this.loginErrorMsg = '';
        }, 5000);
    }
    resetModel() {
        this.username = '';
        this.pwd = '';
        this.eml = '';
        this.otp = '';
        this.hidePwd = true;
        this.otpSentOnce = false;
        this.errorEmailMsg = 'Invalid Email';
        this.errorUserMsg = "Username can't be blank";
        this.invalidEmail = true;
        this.invalidPassword = true;
        this.invalidUsername = true;
        this.invalidOtp = true;
    }
    onScreensizeChange(scrSz) {
        if (this.inputFocused) {
            return;
        }
        this.scrSz = scrSz;
        this.loginContainer = {
            'width': (scrSz.width - 3) + 'px',
            'height': (scrSz.height - 3) + 'px',
        };
        this.loginStyle = this.styleSetter.loginStyleSetter(scrSz);
        this.logoStyle = this.styleSetter.logoStyleSetter(scrSz);
        this.abbrLogoStyle = this.styleSetter.abbrLogoStyler(scrSz);
        this.imgLogoStyle = this.styleSetter.imgLogoStyler(scrSz);
        this.fullLogoStyle = this.styleSetter.fullLogoStyler(scrSz);
        this.tabTextStyle = this.styleSetter.tabTextSizeSetter(scrSz);
        this.inputTextStyle = this.styleSetter.inputTextSizeSetter(scrSz);
        this.tabTextAlignStyle = this.styleSetter.tabTextAlignSizeSetter(scrSz);
    }
    loginClicked() {
        this.resetModel();
        this.loginSelected = true;
        this.regSelected = false;
    }
    registerClicked() {
        this.resetModel();
        this.loginSelected = false;
        this.regSelected = true;
    }
    sendOTP() {
        this.otpSentOnce = true;
        let user = {
            username: this.username,
            password: this.pwd,
            email: this.eml
        };
        this.dataFetcher.sendOTP(user).subscribe(data => {
            if (data == -1) {
                alert("OTP send not successful");
                this.otpVal = '-1';
            }
            else {
                this.dataFetcher.getOTP().subscribe(data => {
                    let decrOTP = this.otpDecryptor(JSON.stringify(data));
                    if (decrOTP == '-1') {
                        alert("error fetching OTP");
                        this.otpVal = '-1';
                    }
                    else {
                        this.otpVal = '' + decrOTP;
                    }
                });
            }
        });
    }
    otpDecryptor(value) {
        let otpParts = value.split('.');
        if (otpParts.length < 2) {
            return "-1";
        }
        return (+otpParts[0] - (+otpParts[1])) / +otpParts[1];
    }
    openMusicGuest() {
        localStorage.setItem('loggedIn', 'false');
        localStorage.setItem('username', 'Guest');
        this.navigateToDemoOrPlayer();
    }
    navigateToDemoOrPlayer() {
        if (!this.scrSz.isMobile) {
            this.router.navigateByUrl("/music");
            return;
        }
        const dialogRef = this.dialog.open(DemoConfirmDialog, {
            width: '300px',
            data: "Demo"
        });
        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            if (result && result == 'demo') {
                this.router.navigateByUrl("/demo");
            }
            else if (result && result == 'skip') {
                this.router.navigateByUrl("/music");
            }
        });
    }
    onLoginUsernameChange(username) {
        if (username.length > 0 && (this.allUsername.indexOf(username) != -1 || this.allEmail.indexOf(username) != -1)) {
            this.invalidUsername = false;
        }
        else {
            this.invalidUsername = true;
            this.errorUserMsg = username.length > 0 ? "Username not registered" : "Username can't be blank";
        }
    }
    onLoginAutofilled(event) {
        this.invalidUsername = false;
        this.invalidPassword = false;
    }
    onUsernameChange(username) {
        if (username.length > 0 && this.allUsername.indexOf(username) == -1) {
            this.invalidUsername = false;
        }
        else {
            this.invalidUsername = true;
            this.errorUserMsg = username.length > 0 ? "Username Already Taken" : "Username can't be blank";
        }
    }
    checkPasswordLogin() {
        this.showLoginText = true;
        this.dataFetcher.checkPassword({ username: this.username, password: this.pwd }).subscribe(data => {
            if (data == 1) {
                this.dataFetcher.getUser(this.username).subscribe((user) => {
                    localStorage.setItem('loggedIn', 'true');
                    console.log(user);
                    localStorage.setItem('username', JSON.stringify(user));
                    this.showLoginText = false;
                    this.navigateToDemoOrPlayer();
                });
            }
            else if (data == 0) {
                this.showLoginText = false;
                this.showLoginError("Error validating Password");
            }
            else {
                this.showLoginText = false;
                this.showLoginError("Incorrect Password.Try Again");
            }
        });
    }
    onEmailChange(email) {
        if (this.allEmail.indexOf(email) == -1 && new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]).valid) {
            this.invalidEmail = false;
        }
        else {
            this.invalidEmail = true;
            this.errorEmailMsg = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]).valid ? "Email already in use" : "Invalid Email";
        }
    }
    onPwdChange(passwd) {
        if (passwd.length < 6 || passwd.length > 20) {
            this.invalidPassword = true;
        }
        else {
            this.invalidPassword = false;
        }
    }
    onOTPChange(otp) {
        if (this.otpVal != this.otp) {
            this.invalidOtp = true;
        }
        else {
            this.invalidOtp = false;
        }
    }
    registerUser() {
        let user = {
            username: this.username,
            password: this.pwd,
            email: this.eml
        };
        this.dataFetcher.addUser(user).subscribe(data => {
            alert("Registered");
            this.resetModel();
            this.regSelected = false;
            this.loginSelected = true;
            this.allUsername.push(this.username);
            this.allEmail.push(this.eml);
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__["AutofillMonitor"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_6__["LoginDataFetcher"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_screen_size_service__WEBPACK_IMPORTED_MODULE_2__["screenSizeState"] },
    { type: _sign_up_style_service__WEBPACK_IMPORTED_MODULE_3__["signupStyleService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        providers: [_sign_up_style_service__WEBPACK_IMPORTED_MODULE_3__["signupStyleService"], _services_loginDataFetche_service__WEBPACK_IMPORTED_MODULE_6__["LoginDataFetcher"], _services_DataFetcher_service__WEBPACK_IMPORTED_MODULE_7__["DataFetcher"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")).default]
    })
], SignUpComponent);

let DemoConfirmDialog = class DemoConfirmDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DemoConfirmDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"],] }] }
];
DemoConfirmDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'demo-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/demo-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DIALOG_DATA"]))
], DemoConfirmDialog);



/***/ }),

/***/ "./src/app/styleSetter.service.ts":
/*!****************************************!*\
  !*** ./src/app/styleSetter.service.ts ***!
  \****************************************/
/*! exports provided: styleSetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleSetterService", function() { return styleSetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let styleSetterService = class styleSetterService {
    constructor(router) {
        this.router = router;
    }
    appStyleSetter(scrSz) {
        return {
            'width': (scrSz.width - 3) + 'px',
            'height': (scrSz.height - 3) + 'px',
            'border': '1px solid white',
        };
    }
    routerOutletStyleSetter(scrSz) {
        return {
            'width': (100) + '%',
            'height': (100) + '%',
        };
    }
};
styleSetterService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
styleSetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], styleSetterService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\OSM\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map