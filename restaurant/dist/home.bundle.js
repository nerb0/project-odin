/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/1.png":
/*!**************************!*\
  !*** ./src/images/1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1473b986a59b7caed62e.png";

/***/ }),

/***/ "./src/images/4.png":
/*!**************************!*\
  !*** ./src/images/4.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdf56b472ca5a8b2ecf7.png";

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "insertToMain": () => (/* binding */ insertToMain),
/* harmony export */   "insertChildren": () => (/* binding */ insertChildren),
/* harmony export */   "removeActiveList": () => (/* binding */ removeActiveList),
/* harmony export */   "checkViewport": () => (/* binding */ checkViewport),
/* harmony export */   "nodeResize": () => (/* binding */ nodeResize)
/* harmony export */ });

// remove the active class on every nodes in an array of HTML elements
const removeActiveList = (arr) =>{
    arr.forEach((node) => node.classList.remove('active'))
}

// hide node if viewport is small
const checkViewport = (node) => {
    if(window.innerWidth < 900) node.style.display = "none";
    else node.style.display = "block";
    
    window.addEventListener('resize',() => {
        if(window.innerWidth < 900) node.style.display = "none";
        else node.style.display = "block";
    });
}
// resize node background if viewport is small
const nodeResize = (node, min, max) => {
    if(window.innerWidth < 1000)  {
        node.style.backgroundPositionY = 'top';
        node.style.backgroundSize = min;
    }
    else {
        node.style.backgroundPositionY = 'center';
        node.style.backgroundSize = max;
    }
}
const insertChildren = (parent, arr) => {
    arr.forEach((node) => {
        parent.appendChild(node);
    });
}
// insert to main-container
const insertToMain = (content) => document.getElementById('main-container').appendChild(content);
const createMain = () =>{
    // remove the main content if there is
    const prev = document.getElementById('main');
    if(prev) prev.remove(); 

    // create new one
    const content = document.createElement('div');
    content.id = "main";
    content.className = "content";
    return content;
}




/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*****************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".featured{\n    box-sizing: border-box;\n    position: relative;\n    height: min(400px, 45vh);\n    background: url(https://wallpapercave.com/wp/wp4056191.jpg) no-repeat right;\n    background-attachment: fixed;\n    background-position-y: center;\n    box-shadow: inset 0 0 10em 10em #00000060;\n    padding:10px;\n    background-size: 100vw;\n    width: 100%;\n}\n.tagline-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: 2fr 2fr 1fr 1fr;\n    padding:10px;\n    height:100%;\n    width: 80%;\n}\n.tagline-container > *{\n    display: flex;\n    font-family: 'Montserrat';\n    font-weight: 900;\n    margin: 0;\n    align-items: center;\n    justify-content: flex-start;\n    box-sizing: border-box;\n}\n.tagline-container > :first-child{\n    color: white;\n    font-size: clamp(60px, 12vh, 140px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(2){\n    color: white;\n    font-size: clamp(50px, 10vh, 100px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(3){\n    color: white;\n    font-size: clamp(30px, 6vh, 60px);\n}\n.tagline-container > :last-child{\n    color: white;\n    font-size: clamp(20px, 6vh, 40px);\n}\n.schedule-container{\n    box-sizing: border-box;\n    position: absolute;\n    padding: 10px;\n    height: 100%;\n    width: 300px;\n    right:0;\n}\n.schedule{\n    box-sizing:border-box;\n    padding: 10px;\n    background-color: #ffffff6c;\n    height: 90%;\n}\n.sched-header{\n    height:4%; \n    font-family: 'Work Sans';\n    font-size: clamp(1.2rem, 3vh, 2rem);\n    margin:0;\n    text-align: center;\n}\n.sched-table{\n    box-sizing: border-box;\n    display: grid;\n    font-family: 'Montserrat';\n    padding: 10px;\n    font-size: 13px;\n    grid-template-columns: 1fr 2fr 1fr;\n    width: 100%;\n    height: 90%;\n}\n.sched-table > *{\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n}\n.sched-table > :nth-child(3n+3){\n    box-sizing: border-box;\n    border-bottom: 2px solid #1cac1c;\n    margin: 0 5px\n}\n.sched-table > :nth-child(3n + 2){\n    width: 100%;\n    border-bottom: 1px dotted #000000;\n}\n.description-container{\n    box-sizing: border-box;\n    margin-left:clamp(15%, 2vw, 25%);\n    margin-right:clamp(15%, 2vw, 25%);\n    padding:20px;\n}\n.desc-image{\n    height:clamp(100px, 20vw, 250px);\n}\n.desc-text{\n    font-family: 'Montserrat';\n    font-size: clamp(14px,2vw,25px);\n    margin-top: 50px;\n    text-align: justify;\n    word-wrap: break-word;\n}\n.btn{\n    border: none;\n    background-color: transparent;\n    font-family: 'Montserrat';\n    font-size: clamp(12px, 3vw, 20px);\n    width: 100%;\n    text-align: center;\n}\n.desc-btn{\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 25px;\n    width: min(200px,30%);\n    padding: 8px 20px;\n    border-radius: 100px;\n    margin: 0 auto;\n    background-color: #f5c113;\n}\n.btn-image{\n    text-align: left;\n    height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;IACxB,2EAA2E;IAC3E,4BAA4B;IAC5B,6BAA6B;IAC7B,yCAAyC;IACzC,YAAY;IACZ,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,UAAU;AACd;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,SAAS;IACT,mBAAmB;IACnB,2BAA2B;IAC3B,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,cAAc;AAClB;AACA;IACI,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,OAAO;AACX;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,2BAA2B;IAC3B,WAAW;AACf;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,mCAAmC;IACnC,QAAQ;IACR,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,eAAe;IACf,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,gCAAgC;IAChC;AACJ;AACA;IACI,WAAW;IACX,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,gCAAgC;IAChC,iCAAiC;IACjC,YAAY;AAChB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,yBAAyB;IACzB,+BAA+B;IAC/B,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,yBAAyB;IACzB,iCAAiC;IACjC,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,YAAY;AAChB","sourcesContent":[".featured{\n    box-sizing: border-box;\n    position: relative;\n    height: min(400px, 45vh);\n    background: url(https://wallpapercave.com/wp/wp4056191.jpg) no-repeat right;\n    background-attachment: fixed;\n    background-position-y: center;\n    box-shadow: inset 0 0 10em 10em #00000060;\n    padding:10px;\n    background-size: 100vw;\n    width: 100%;\n}\n.tagline-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: 2fr 2fr 1fr 1fr;\n    padding:10px;\n    height:100%;\n    width: 80%;\n}\n.tagline-container > *{\n    display: flex;\n    font-family: 'Montserrat';\n    font-weight: 900;\n    margin: 0;\n    align-items: center;\n    justify-content: flex-start;\n    box-sizing: border-box;\n}\n.tagline-container > :first-child{\n    color: white;\n    font-size: clamp(60px, 12vh, 140px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(2){\n    color: white;\n    font-size: clamp(50px, 10vh, 100px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(3){\n    color: white;\n    font-size: clamp(30px, 6vh, 60px);\n}\n.tagline-container > :last-child{\n    color: white;\n    font-size: clamp(20px, 6vh, 40px);\n}\n.schedule-container{\n    box-sizing: border-box;\n    position: absolute;\n    padding: 10px;\n    height: 100%;\n    width: 300px;\n    right:0;\n}\n.schedule{\n    box-sizing:border-box;\n    padding: 10px;\n    background-color: #ffffff6c;\n    height: 90%;\n}\n.sched-header{\n    height:4%; \n    font-family: 'Work Sans';\n    font-size: clamp(1.2rem, 3vh, 2rem);\n    margin:0;\n    text-align: center;\n}\n.sched-table{\n    box-sizing: border-box;\n    display: grid;\n    font-family: 'Montserrat';\n    padding: 10px;\n    font-size: 13px;\n    grid-template-columns: 1fr 2fr 1fr;\n    width: 100%;\n    height: 90%;\n}\n.sched-table > *{\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n}\n.sched-table > :nth-child(3n+3){\n    box-sizing: border-box;\n    border-bottom: 2px solid #1cac1c;\n    margin: 0 5px\n}\n.sched-table > :nth-child(3n + 2){\n    width: 100%;\n    border-bottom: 1px dotted #000000;\n}\n.description-container{\n    box-sizing: border-box;\n    margin-left:clamp(15%, 2vw, 25%);\n    margin-right:clamp(15%, 2vw, 25%);\n    padding:20px;\n}\n.desc-image{\n    height:clamp(100px, 20vw, 250px);\n}\n.desc-text{\n    font-family: 'Montserrat';\n    font-size: clamp(14px,2vw,25px);\n    margin-top: 50px;\n    text-align: justify;\n    word-wrap: break-word;\n}\n.btn{\n    border: none;\n    background-color: transparent;\n    font-family: 'Montserrat';\n    font-size: clamp(12px, 3vw, 20px);\n    width: 100%;\n    text-align: center;\n}\n.desc-btn{\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 25px;\n    width: min(200px,30%);\n    padding: 8px 20px;\n    border-radius: 100px;\n    margin: 0 auto;\n    background-color: #f5c113;\n}\n.btn-image{\n    text-align: left;\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway:wght@900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    width:100vw;\n    overflow-x: hidden;\n}\n#header{\n    height: fit-content;\n    text-align: center;\n}\n.logo{\n    height: 40px;\n    margin-bottom: -15px;\n}\n.logoText{\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 0;\n    user-select: none;\n    color: #f5c113;\n    text-shadow: 0 1px #272727, 0 -1px #272727,\n        1px 0 #272727, -1px 0 #272727;\n}\n.link-container{\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #979797;\n}\n#links{\n    width: 350px;\n    height: 25px;\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    text-align: center;\n    align-items: flex-end;\n    user-select: none;\n    padding-bottom: 5px;\n}\n#links > a{\n    position: relative;\n    font-family: 'Work Sans';\n    font-size: 15px;\n    margin: 0px 10px;\n    transition: font-size 0.3s,\n        opacity 0.4s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active{\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active){\n    opacity: 0.5;\n}\n#links > a:not(.active):hover{\n    opacity: 1;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active):active{\n    font-size: 20px;\n}\n#links > a:after{\n    transition: opacity 0.5s,\n        left 0.3s,\n        right 0.3s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:100px;\n    right:100px;\n    bottom: -5px;\n}\n#links > a:not(.active):hover:after{\n    content: \"\";\n    position: absolute;\n    opacity: 0.4;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active::after{\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    border-bottom: 2px solid #272727;\n    left:20px;\n    right:20px;\n    bottom: -5px;\n}\n.featured{\n    width:100%;\n}\n.footer{\n    width:100%;\n    background-color: #575757;\n    padding: 5px 5px;\n    font-size: 12px;\n    font-family: 'Work Sans';\n    height: 20px;\n    display: flex;\n    align-items: center;\n}\n.footer *{\n    margin: 0;\n}\n.footer a{\n    text-decoration: none;\n    font-weight: bold;\n    color: white;\n}\n.credits{\n    width: calc(100% - 20px);\n}\n.github{\n    \n    height: 15px;\n    width: 15px;\n}\n#main{\n    animation: fade-in 1s;\n}\n@keyframes fade-in{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n}\n@font-face {\n    font-family: 'Satisfy';\n    src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Work Sans';\n    src: url(https://fonts.gstatic.com/s/worksans/v9/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2) format('woff2');\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,cAAc;IACd;qCACiC;AACrC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,gCAAgC;AACpC;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,qCAAqC;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,eAAe;IACf,gBAAgB;IAChB;oBACgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;AACA;IACI;;kBAEc;AAClB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,UAAU;IACV,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;IACV,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,SAAS;AACb;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,wBAAwB;AAC5B;AACA;;IAEI,YAAY;IACZ,WAAW;AACf;AACA;IACI,qBAAqB;AACzB;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI,sBAAsB;IACtB,8FAA8F;AAClG;AACA;IACI,wBAAwB;IACxB,kHAAkH;AACtH","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway:wght@900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');\nbody{\n    margin: 0;\n    width:100vw;\n    overflow-x: hidden;\n}\n#header{\n    height: fit-content;\n    text-align: center;\n}\n.logo{\n    height: 40px;\n    margin-bottom: -15px;\n}\n.logoText{\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 0;\n    user-select: none;\n    color: #f5c113;\n    text-shadow: 0 1px #272727, 0 -1px #272727,\n        1px 0 #272727, -1px 0 #272727;\n}\n.link-container{\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #979797;\n}\n#links{\n    width: 350px;\n    height: 25px;\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    text-align: center;\n    align-items: flex-end;\n    user-select: none;\n    padding-bottom: 5px;\n}\n#links > a{\n    position: relative;\n    font-family: 'Work Sans';\n    font-size: 15px;\n    margin: 0px 10px;\n    transition: font-size 0.3s,\n        opacity 0.4s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active{\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active){\n    opacity: 0.5;\n}\n#links > a:not(.active):hover{\n    opacity: 1;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active):active{\n    font-size: 20px;\n}\n#links > a:after{\n    transition: opacity 0.5s,\n        left 0.3s,\n        right 0.3s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:100px;\n    right:100px;\n    bottom: -5px;\n}\n#links > a:not(.active):hover:after{\n    content: \"\";\n    position: absolute;\n    opacity: 0.4;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active::after{\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    border-bottom: 2px solid #272727;\n    left:20px;\n    right:20px;\n    bottom: -5px;\n}\n.featured{\n    width:100%;\n}\n.footer{\n    width:100%;\n    background-color: #575757;\n    padding: 5px 5px;\n    font-size: 12px;\n    font-family: 'Work Sans';\n    height: 20px;\n    display: flex;\n    align-items: center;\n}\n.footer *{\n    margin: 0;\n}\n.footer a{\n    text-decoration: none;\n    font-weight: bold;\n    color: white;\n}\n.credits{\n    width: calc(100% - 20px);\n}\n.github{\n    \n    height: 15px;\n    width: 15px;\n}\n#main{\n    animation: fade-in 1s;\n}\n@keyframes fade-in{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n}\n@font-face {\n    font-family: 'Satisfy';\n    src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Work Sans';\n    src: url(https://fonts.gstatic.com/s/worksans/v9/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2) format('woff2');\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!**********************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \**********************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./home.css */ "../../../../node_modules/css-loader/dist/cjs.js!./src/styles/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "../../../../node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!********************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!********************************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*******************************************************************************!*\
  !*** ../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*******************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/4.png */ "./src/images/4.png");
/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/1.png */ "./src/images/1.png");







// create tagline
function createTagline(){
    // create a container for the tagline
    const taglineContainer = document.createElement('div')
    taglineContainer.className = "tagline-container"

    // create a node for the biggest font
    const firstTag = document.createElement('div');
    firstTag.textContent = "CHONKY";

    // create a node for the 2nd biggest font
    const secondTag = document.createElement('div');
    secondTag.textContent = "JUICY";

    // create a node for the 2nd biggest font
    const dogtag = document.createElement('div');
    dogtag.textContent = "CHEESY";
    
    // create a node for the 2nd biggest font
    const esetag = document.createElement('div');
    esetag.textContent = "Tasty";
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(taglineContainer, [firstTag, secondTag, dogtag, esetag]);   
    return taglineContainer;
}

// create sched
function createSchedule(){
    const DAYS = ['Sunday' ,'Monday' ,'Tuesday', 'Wednesday', 'Thursday' ,'Friday' ,'Saturday']
    /* 
        SCHEDULE
    */
    // create a container for schedule inside the featured div
    const scheduleContainer = document.createElement('div');
    scheduleContainer.className = "schedule-container";
    _util_js__WEBPACK_IMPORTED_MODULE_2__.checkViewport(scheduleContainer);


    // create the schedule div
    const schedule = document.createElement('div');
    schedule.className = "schedule";
    // create the header for the schedule div
    const schedHeader = document.createElement('h3');
    schedHeader.textContent = "Schedule: ";
    schedHeader.className = "sched-header";

    // set-up the schedule table/grid inside the container
    const schedTable = document.createElement('div');
    schedTable.className = "sched-table"; 
    let schedTableElements = []; // in-case of emergency, use to manipulate node
    for(let i = 0; i < 21; i++){
        const node = document.createElement('div');
        schedTableElements.push(node);
        if(i%3 == 0) node.textContent = DAYS[i/3];
        else if(i%3 == 2) node.textContent = "OPEN";
        schedTable.appendChild(node);
    }
    // Append all necessary elements in order
    schedule.appendChild(schedHeader)
    schedule.appendChild(schedTable);
    scheduleContainer.appendChild(schedule);
    return scheduleContainer;
}

// create description
function createDescription(){
    // create container for description
    const desContainer = document.createElement('div');
    desContainer.className = "description-container";

    const description = document.createElement('div');
    description.className = "description";

    const descImage = new Image();
    descImage.src = _images_4_png__WEBPACK_IMPORTED_MODULE_3__;
    descImage.setAttribute('align','left');
    descImage.className = 'desc-image';

    const descText = document.createElement('p');
    descText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Donec ipsum diam, convallis bibendum laoreet at, vestibulum sed sem. \
        Praesent a elit ultricies, bibendum erat ac, congue sem. \
        Interdum et malesuada fames ac ante ipsum primis in faucibus.\
        Aenean auctor fringilla enim at tristique. Ut efficitur sollicitudin eros eu blandit.\
        Cras consectetur ut ante at pellentesque. Phasellus suscipit, ipsum at hendrerit iaculis, ligula urna faucibus eros, eget aliquet quam metus ut justo.\
        Quisque in porta ipsum. Ut at felis mi. In scelerisque tempor massa. Aenean lectus dui, convallis quis neque nec, malesuada dictum ipsum.\
        Nunc orci orci, rhoncus porta ante ac, feugiat accumsan risus. Nunc tincidunt mauris vel aliquam fermentum.";
    descText.className = 'desc-text';
    const btnContainer = document.createElement('div');
    btnContainer.className = 'desc-btn';
    const descBtn = document.createElement('button');
    descBtn.textContent = "Order Now";
    descBtn.className = 'btn';
    const btnImg = new Image();
    btnImg.src = _images_1_png__WEBPACK_IMPORTED_MODULE_4__;
    btnImg.className = 'btn-image';
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(btnContainer, [btnImg, descBtn]);
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(description, [descImage, descText, btnContainer]);
    desContainer.appendChild(description);
    return desContainer;
}


function createHome(){
    const content = _util_js__WEBPACK_IMPORTED_MODULE_2__.createMain();
    
    //create a wide div for feature food
    const featured = document.createElement('div');
    featured.className = "featured";
    _util_js__WEBPACK_IMPORTED_MODULE_2__.nodeResize(featured, '150vw' , '120vw');
    window.addEventListener('resize' , 
        () => _util_js__WEBPACK_IMPORTED_MODULE_2__.nodeResize(featured, '150vw' , '120vw'),
        false);

    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(featured, [createSchedule(), createTagline()]);
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(content,[featured,createDescription()])
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertToMain(content);
    return 'home';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/MDAwMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/OTYwNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc2NyaXB0cy9ob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ3FJO0FBQzdCO0FBQ3hHLDhCQUE4QixtRkFBMkIs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QUVBLElBQUksb0RBQW1CO0FBQ3ZCLElBQUksb0RBQW1CO0FBQ3ZCLElBQUksa0RBQWlCO0FBQ3JCO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFIiwiZmlsZSI6ImhvbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyByZW1vdmUgdGhlIGFjdGl2ZSBjbGFzcyBvbiBldmVyeSBub2RlcyBpbiBhbiBhcnJheSBvZiBIVE1MIGVsZW1lbnRzXG5jb25zdCByZW1vdmVBY3RpdmVMaXN0ID0gKGFycikgPT57XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG59XG5cbi8vIGhpZGUgbm9kZSBpZiB2aWV3cG9ydCBpcyBzbWFsbFxuY29uc3QgY2hlY2tWaWV3cG9ydCA9IChub2RlKSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCA5MDApIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpID0+IHtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCA5MDApIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcbn1cbi8vIHJlc2l6ZSBub2RlIGJhY2tncm91bmQgaWYgdmlld3BvcnQgaXMgc21hbGxcbmNvbnN0IG5vZGVSZXNpemUgPSAobm9kZSwgbWluLCBtYXgpID0+IHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMDApICB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICd0b3AnO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWluO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJ2NlbnRlcic7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBtYXg7XG4gICAgfVxufVxuY29uc3QgaW5zZXJ0Q2hpbGRyZW4gPSAocGFyZW50LCBhcnIpID0+IHtcbiAgICBhcnIuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG59XG4vLyBpbnNlcnQgdG8gbWFpbi1jb250YWluZXJcbmNvbnN0IGluc2VydFRvTWFpbiA9IChjb250ZW50KSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKS5hcHBlbmRDaGlsZChjb250ZW50KTtcbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PntcbiAgICAvLyByZW1vdmUgdGhlIG1haW4gY29udGVudCBpZiB0aGVyZSBpc1xuICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIGlmKHByZXYpIHByZXYucmVtb3ZlKCk7IFxuXG4gICAgLy8gY3JlYXRlIG5ldyBvbmVcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9IFwibWFpblwiO1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVNYWluLFxuICAgIGluc2VydFRvTWFpbixcbiAgICBpbnNlcnRDaGlsZHJlbixcbiAgICByZW1vdmVBY3RpdmVMaXN0LFxuICAgIGNoZWNrVmlld3BvcnQsXG4gICAgbm9kZVJlc2l6ZVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZlYXR1cmVke1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluKDQwMHB4LCA0NXZoKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3A0MDU2MTkxLmpwZykgbm8tcmVwZWF0IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwZW0gMTBlbSAjMDAwMDAwNjA7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDFmciAxZnI7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+ICp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6Zmlyc3QtY2hpbGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2MHB4LCAxMnZoLCAxNDBweCk7XFxuICAgIG1hcmdpbjotMTBweCAwO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgMTB2aCwgMTAwcHgpO1xcbiAgICBtYXJnaW46LTEwcHggMDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDZ2aCwgNjBweCk7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpsYXN0LWNoaWxke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgNnZoLCA0MHB4KTtcXG59XFxuLnNjaGVkdWxlLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcmlnaHQ6MDtcXG59XFxuLnNjaGVkdWxle1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY2YztcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC1oZWFkZXJ7XFxuICAgIGhlaWdodDo0JTsgXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDN2aCwgMnJlbSk7XFxuICAgIG1hcmdpbjowO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC10YWJsZSA+ICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24rMyl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWNhYzFjO1xcbiAgICBtYXJnaW46IDAgNXB4XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24gKyAyKXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDAwMDtcXG59XFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLWxlZnQ6Y2xhbXAoMTUlLCAydncsIDI1JSk7XFxuICAgIG1hcmdpbi1yaWdodDpjbGFtcCgxNSUsIDJ2dywgMjUlKTtcXG4gICAgcGFkZGluZzoyMHB4O1xcbn1cXG4uZGVzYy1pbWFnZXtcXG4gICAgaGVpZ2h0OmNsYW1wKDEwMHB4LCAyMHZ3LCAyNTBweCk7XFxufVxcbi5kZXNjLXRleHR7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwydncsMjVweCk7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCAzdncsIDIwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGVzYy1idG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogbWluKDIwMHB4LDMwJSk7XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxufVxcbi5idG4taW1hZ2V7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDJFQUEyRTtJQUMzRSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osT0FBTztBQUNYO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQztBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZlYXR1cmVke1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluKDQwMHB4LCA0NXZoKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3A0MDU2MTkxLmpwZykgbm8tcmVwZWF0IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwZW0gMTBlbSAjMDAwMDAwNjA7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDFmciAxZnI7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+ICp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6Zmlyc3QtY2hpbGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2MHB4LCAxMnZoLCAxNDBweCk7XFxuICAgIG1hcmdpbjotMTBweCAwO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgMTB2aCwgMTAwcHgpO1xcbiAgICBtYXJnaW46LTEwcHggMDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDZ2aCwgNjBweCk7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpsYXN0LWNoaWxke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgNnZoLCA0MHB4KTtcXG59XFxuLnNjaGVkdWxlLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcmlnaHQ6MDtcXG59XFxuLnNjaGVkdWxle1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY2YztcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC1oZWFkZXJ7XFxuICAgIGhlaWdodDo0JTsgXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDN2aCwgMnJlbSk7XFxuICAgIG1hcmdpbjowO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC10YWJsZSA+ICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24rMyl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWNhYzFjO1xcbiAgICBtYXJnaW46IDAgNXB4XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24gKyAyKXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDAwMDtcXG59XFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLWxlZnQ6Y2xhbXAoMTUlLCAydncsIDI1JSk7XFxuICAgIG1hcmdpbi1yaWdodDpjbGFtcCgxNSUsIDJ2dywgMjUlKTtcXG4gICAgcGFkZGluZzoyMHB4O1xcbn1cXG4uZGVzYy1pbWFnZXtcXG4gICAgaGVpZ2h0OmNsYW1wKDEwMHB4LCAyMHZ3LCAyNTBweCk7XFxufVxcbi5kZXNjLXRleHR7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwydncsMjVweCk7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCAzdncsIDIwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGVzYy1idG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogbWluKDIwMHB4LDMwJSk7XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxufVxcbi5idG4taW1hZ2V7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG59XFxuLmxvZ29UZXh0e1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiAjZjVjMTEzO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggIzI3MjcyNywgMCAtMXB4ICMyNzI3MjcsXFxuICAgICAgICAxcHggMCAjMjcyNzI3LCAtMXB4IDAgIzI3MjcyNztcXG59XFxuLmxpbmstY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XFxufVxcbiNsaW5rc3tcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuI2xpbmtzID4gYXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MsXFxuICAgICAgICBvcGFjaXR5IDAuNHM7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDozMHB4O1xcbiAgICByaWdodDozMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5hY3RpdmV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSl7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWN0aXZle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNsaW5rcyA+IGE6YWZ0ZXJ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyxcXG4gICAgICAgIGxlZnQgMC4zcyxcXG4gICAgICAgIHJpZ2h0IDAuM3M7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDoxMDBweDtcXG4gICAgcmlnaHQ6MTAwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6aG92ZXI6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MzBweDtcXG4gICAgcmlnaHQ6MzBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uYWN0aXZlOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MjBweDtcXG4gICAgcmlnaHQ6MjBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uZmVhdHVyZWR7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcbi5mb290ZXJ7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXIgKntcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4uZm9vdGVyIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNyZWRpdHN7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuLmdpdGh1YntcXG4gICAgXFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcbiNtYWlue1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbntcXG4gICAgZnJvbXtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG97XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NhdGlzZnknO1xcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc2F0aXNmeS92MTEvclAySHAyeW42bGtHNTBMb0NaT0lIUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvd29ya3NhbnMvdjkvUUdZX3pfd05haEdBZHFRNDNSaFZjSWdZVDJYejV1MzJLMG5YQmk4SnBnLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztJQUNkO3FDQUNpQztBQUNyQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7b0JBQ2dCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSTs7a0JBRWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsOEZBQThGO0FBQ2xHO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsa0hBQWtIO0FBQ3RIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZmFtaWx5PVJhbGV3YXk6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbiNoZWFkZXJ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvZ297XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxufVxcbi5sb2dvVGV4dHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogI2Y1YzExMztcXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4ICMyNzI3MjcsIDAgLTFweCAjMjcyNzI3LFxcbiAgICAgICAgMXB4IDAgIzI3MjcyNywgLTFweCAwICMyNzI3Mjc7XFxufVxcbi5saW5rLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xcbn1cXG4jbGlua3N7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbiNsaW5rcyA+IGF7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbjogMHB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzLFxcbiAgICAgICAgb3BhY2l0eSAwLjRzO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MzBweDtcXG4gICAgcmlnaHQ6MzBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uYWN0aXZle1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpe1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmhvdmVye1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFjdGl2ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jbGlua3MgPiBhOmFmdGVye1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsXFxuICAgICAgICBsZWZ0IDAuM3MsXFxuICAgICAgICByaWdodCAwLjNzO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MTAwcHg7XFxuICAgIHJpZ2h0OjEwMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmhvdmVyOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjMwcHg7XFxuICAgIHJpZ2h0OjMwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmFjdGl2ZTo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjIwcHg7XFxuICAgIHJpZ2h0OjIwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmZlYXR1cmVke1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG4uZm9vdGVye1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU3O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyICp7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmZvb3RlciBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jcmVkaXRze1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcbi5naXRodWJ7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG4jbWFpbntcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW57XFxuICAgIGZyb217XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRve1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRpc2Z5JztcXG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3NhdGlzZnkvdjExL3JQMkhwMnluNmxrRzUwTG9DWk9JSFEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3dvcmtzYW5zL3Y5L1FHWV96X3dOYWhHQWRxUTQzUmhWY0lnWVQyWHo1dTMySzBuWEJpOEpwZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2hvbWUuY3NzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCBiYW5kZiBmcm9tICcuLi9pbWFnZXMvNC5wbmcnO1xuaW1wb3J0IG9rIGZyb20gJy4uL2ltYWdlcy8xLnBuZyc7XG5cblxuLy8gY3JlYXRlIHRhZ2xpbmVcbmZ1bmN0aW9uIGNyZWF0ZVRhZ2xpbmUoKXtcbiAgICAvLyBjcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSB0YWdsaW5lXG4gICAgY29uc3QgdGFnbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFnbGluZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhZ2xpbmUtY29udGFpbmVyXCJcblxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgZm9yIHRoZSBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBmaXJzdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0VGFnLnRleHRDb250ZW50ID0gXCJDSE9OS1lcIjtcblxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgZm9yIHRoZSAybmQgYmlnZ2VzdCBmb250XG4gICAgY29uc3Qgc2Vjb25kVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Vjb25kVGFnLnRleHRDb250ZW50ID0gXCJKVUlDWVwiO1xuXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIDJuZCBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBkb2d0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2d0YWcudGV4dENvbnRlbnQgPSBcIkNIRUVTWVwiO1xuICAgIFxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgZm9yIHRoZSAybmQgYmlnZ2VzdCBmb250XG4gICAgY29uc3QgZXNldGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXNldGFnLnRleHRDb250ZW50ID0gXCJUYXN0eVwiO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4odGFnbGluZUNvbnRhaW5lciwgW2ZpcnN0VGFnLCBzZWNvbmRUYWcsIGRvZ3RhZywgZXNldGFnXSk7ICAgXG4gICAgcmV0dXJuIHRhZ2xpbmVDb250YWluZXI7XG59XG5cbi8vIGNyZWF0ZSBzY2hlZFxuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGUoKXtcbiAgICBjb25zdCBEQVlTID0gWydTdW5kYXknICwnTW9uZGF5JyAsJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JyAsJ0ZyaWRheScgLCdTYXR1cmRheSddXG4gICAgLyogXG4gICAgICAgIFNDSEVEVUxFXG4gICAgKi9cbiAgICAvLyBjcmVhdGUgYSBjb250YWluZXIgZm9yIHNjaGVkdWxlIGluc2lkZSB0aGUgZmVhdHVyZWQgZGl2XG4gICAgY29uc3Qgc2NoZWR1bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY2hlZHVsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNjaGVkdWxlLWNvbnRhaW5lclwiO1xuICAgIHV0aWwuY2hlY2tWaWV3cG9ydChzY2hlZHVsZUNvbnRhaW5lcik7XG5cblxuICAgIC8vIGNyZWF0ZSB0aGUgc2NoZWR1bGUgZGl2XG4gICAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY2hlZHVsZS5jbGFzc05hbWUgPSBcInNjaGVkdWxlXCI7XG4gICAgLy8gY3JlYXRlIHRoZSBoZWFkZXIgZm9yIHRoZSBzY2hlZHVsZSBkaXZcbiAgICBjb25zdCBzY2hlZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2NoZWRIZWFkZXIudGV4dENvbnRlbnQgPSBcIlNjaGVkdWxlOiBcIjtcbiAgICBzY2hlZEhlYWRlci5jbGFzc05hbWUgPSBcInNjaGVkLWhlYWRlclwiO1xuXG4gICAgLy8gc2V0LXVwIHRoZSBzY2hlZHVsZSB0YWJsZS9ncmlkIGluc2lkZSB0aGUgY29udGFpbmVyXG4gICAgY29uc3Qgc2NoZWRUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkVGFibGUuY2xhc3NOYW1lID0gXCJzY2hlZC10YWJsZVwiOyBcbiAgICBsZXQgc2NoZWRUYWJsZUVsZW1lbnRzID0gW107IC8vIGluLWNhc2Ugb2YgZW1lcmdlbmN5LCB1c2UgdG8gbWFuaXB1bGF0ZSBub2RlXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDIxOyBpKyspe1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNjaGVkVGFibGVFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICBpZihpJTMgPT0gMCkgbm9kZS50ZXh0Q29udGVudCA9IERBWVNbaS8zXTtcbiAgICAgICAgZWxzZSBpZihpJTMgPT0gMikgbm9kZS50ZXh0Q29udGVudCA9IFwiT1BFTlwiO1xuICAgICAgICBzY2hlZFRhYmxlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgICAvLyBBcHBlbmQgYWxsIG5lY2Vzc2FyeSBlbGVtZW50cyBpbiBvcmRlclxuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKHNjaGVkSGVhZGVyKVxuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKHNjaGVkVGFibGUpO1xuICAgIHNjaGVkdWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjaGVkdWxlKTtcbiAgICByZXR1cm4gc2NoZWR1bGVDb250YWluZXI7XG59XG5cbi8vIGNyZWF0ZSBkZXNjcmlwdGlvblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oKXtcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCBkZXNjSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZXNjSW1hZ2Uuc3JjID0gYmFuZGY7XG4gICAgZGVzY0ltYWdlLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCdsZWZ0Jyk7XG4gICAgZGVzY0ltYWdlLmNsYXNzTmFtZSA9ICdkZXNjLWltYWdlJztcblxuICAgIGNvbnN0IGRlc2NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NUZXh0LnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxcXG4gICAgICAgIERvbmVjIGlwc3VtIGRpYW0sIGNvbnZhbGxpcyBiaWJlbmR1bSBsYW9yZWV0IGF0LCB2ZXN0aWJ1bHVtIHNlZCBzZW0uIFxcXG4gICAgICAgIFByYWVzZW50IGEgZWxpdCB1bHRyaWNpZXMsIGJpYmVuZHVtIGVyYXQgYWMsIGNvbmd1ZSBzZW0uIFxcXG4gICAgICAgIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy5cXFxuICAgICAgICBBZW5lYW4gYXVjdG9yIGZyaW5naWxsYSBlbmltIGF0IHRyaXN0aXF1ZS4gVXQgZWZmaWNpdHVyIHNvbGxpY2l0dWRpbiBlcm9zIGV1IGJsYW5kaXQuXFxcbiAgICAgICAgQ3JhcyBjb25zZWN0ZXR1ciB1dCBhbnRlIGF0IHBlbGxlbnRlc3F1ZS4gUGhhc2VsbHVzIHN1c2NpcGl0LCBpcHN1bSBhdCBoZW5kcmVyaXQgaWFjdWxpcywgbGlndWxhIHVybmEgZmF1Y2lidXMgZXJvcywgZWdldCBhbGlxdWV0IHF1YW0gbWV0dXMgdXQganVzdG8uXFxcbiAgICAgICAgUXVpc3F1ZSBpbiBwb3J0YSBpcHN1bS4gVXQgYXQgZmVsaXMgbWkuIEluIHNjZWxlcmlzcXVlIHRlbXBvciBtYXNzYS4gQWVuZWFuIGxlY3R1cyBkdWksIGNvbnZhbGxpcyBxdWlzIG5lcXVlIG5lYywgbWFsZXN1YWRhIGRpY3R1bSBpcHN1bS5cXFxuICAgICAgICBOdW5jIG9yY2kgb3JjaSwgcmhvbmN1cyBwb3J0YSBhbnRlIGFjLCBmZXVnaWF0IGFjY3Vtc2FuIHJpc3VzLiBOdW5jIHRpbmNpZHVudCBtYXVyaXMgdmVsIGFsaXF1YW0gZmVybWVudHVtLlwiO1xuICAgIGRlc2NUZXh0LmNsYXNzTmFtZSA9ICdkZXNjLXRleHQnO1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVzYy1idG4nO1xuICAgIGNvbnN0IGRlc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZXNjQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgICBkZXNjQnRuLmNsYXNzTmFtZSA9ICdidG4nO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJ0bkltZy5zcmMgPSBvaztcbiAgICBidG5JbWcuY2xhc3NOYW1lID0gJ2J0bi1pbWFnZSc7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihidG5Db250YWluZXIsIFtidG5JbWcsIGRlc2NCdG5dKTtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGRlc2NyaXB0aW9uLCBbZGVzY0ltYWdlLCBkZXNjVGV4dCwgYnRuQ29udGFpbmVyXSk7XG4gICAgZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gZGVzQ29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgICBjb25zdCBjb250ZW50ID0gdXRpbC5jcmVhdGVNYWluKCk7XG4gICAgXG4gICAgLy9jcmVhdGUgYSB3aWRlIGRpdiBmb3IgZmVhdHVyZSBmb29kXG4gICAgY29uc3QgZmVhdHVyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlZC5jbGFzc05hbWUgPSBcImZlYXR1cmVkXCI7XG4gICAgdXRpbC5ub2RlUmVzaXplKGZlYXR1cmVkLCAnMTUwdncnICwgJzEyMHZ3Jyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScgLCBcbiAgICAgICAgKCkgPT4gdXRpbC5ub2RlUmVzaXplKGZlYXR1cmVkLCAnMTUwdncnICwgJzEyMHZ3JyksXG4gICAgICAgIGZhbHNlKTtcblxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oZmVhdHVyZWQsIFtjcmVhdGVTY2hlZHVsZSgpLCBjcmVhdGVUYWdsaW5lKCldKTtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGNvbnRlbnQsW2ZlYXR1cmVkLGNyZWF0ZURlc2NyaXB0aW9uKCldKVxuICAgIHV0aWwuaW5zZXJ0VG9NYWluKGNvbnRlbnQpO1xuICAgIHJldHVybiAnaG9tZSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==