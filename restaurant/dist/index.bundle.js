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

/***/ "./src/images/github-64.png":
/*!**********************************!*\
  !*** ./src/images/github-64.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b039b2d83982c8256af3.png";

/***/ }),

/***/ "./src/images/logo2.png":
/*!******************************!*\
  !*** ./src/images/logo2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80626b4ff57449b3b493.png";

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");





function createMenu(){
    const content = _util_js__WEBPACK_IMPORTED_MODULE_2__.createMain();
    const menuContainer = document.createElement('div');
    menuContainer.className = "menu-container";
    

    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(content, [menuContainer]);
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertToMain(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

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

/***/ "../../../../node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*****************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".menu-container{\n    height:500px;\n    width:100%;\n    background-color: #e0e0e0;\n}", "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,UAAU;IACV,yBAAyB;AAC7B","sourcesContent":[".menu-container{\n    height:500px;\n    width:100%;\n    background-color: #e0e0e0;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    width:100vw;\n    overflow-x: hidden;\n}\n#header{\n    height: fit-content;\n    text-align: center;\n}\n.logo{\n    height: 40px;\n    margin-bottom: -15px;\n}\n.logoText{\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 0;\n    user-select: none;\n    color: #f5c113;\n    text-shadow: 0 1px #272727, 0 -1px #272727,\n        1px 0 #272727, -1px 0 #272727;\n}\n.link-container{\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #979797;\n}\n#links{\n    width: 350px;\n    height: 25px;\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    text-align: center;\n    align-items: flex-end;\n    user-select: none;\n    padding-bottom: 5px;\n}\n#links > a{\n    position: relative;\n    font-family: 'Work Sans';\n    font-size: 15px;\n    margin: 0px 10px;\n    transition: font-size 0.3s,\n        opacity 0.4s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active{\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active){\n    opacity: 0.5;\n}\n#links > a:not(.active):hover{\n    opacity: 1;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active):active{\n    font-size: 20px;\n}\n#links > a:after{\n    transition: opacity 0.5s,\n        left 0.3s,\n        right 0.3s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:100px;\n    right:100px;\n    bottom: -5px;\n}\n#links > a:not(.active):hover:after{\n    content: \"\";\n    position: absolute;\n    opacity: 0.4;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active::after{\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    border-bottom: 2px solid #272727;\n    left:20px;\n    right:20px;\n    bottom: -5px;\n}\n.featured{\n    width:100%;\n}\n.footer{\n    margin-top: 40px;\n    width:100%;\n    background-color: #575757;\n    padding: 5px 5px;\n    font-size: 12px;\n    font-family: 'Work Sans';\n    height: 20px;\n    display: flex;\n    align-items: center;\n}\n.footer *{\n    margin: 0;\n}\n.footer a{\n    text-decoration: none;\n    font-weight: bold;\n    color: white;\n}\n.credits{\n    width: calc(100% - 20px);\n}\n.github{\n    \n    height: 15px;\n    width: 15px;\n}\n#main{\n    animation: fade-in 1s;\n}\n.transition{\n    animation: fade-out 1s;\n}\n@keyframes fade-in{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n}\n@keyframes fade-out{\n    from{\n        opacity: 1;\n    }\n    to{\n        opacity: 0;\n    }\n}\n@font-face {\n    font-family: 'Satisfy';\n    src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Work Sans';\n    src: url(https://fonts.gstatic.com/s/worksans/v9/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2) format('woff2');\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,cAAc;IACd;qCACiC;AACrC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,gCAAgC;AACpC;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,qCAAqC;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,eAAe;IACf,gBAAgB;IAChB;oBACgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;AACA;IACI;;kBAEc;AAClB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,UAAU;IACV,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;IAChB,UAAU;IACV,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,SAAS;AACb;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,wBAAwB;AAC5B;AACA;;IAEI,YAAY;IACZ,WAAW;AACf;AACA;IACI,qBAAqB;AACzB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI,sBAAsB;IACtB,8FAA8F;AAClG;AACA;IACI,wBAAwB;IACxB,kHAAkH;AACtH","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway:wght@900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');\nbody{\n    margin: 0;\n    width:100vw;\n    overflow-x: hidden;\n}\n#header{\n    height: fit-content;\n    text-align: center;\n}\n.logo{\n    height: 40px;\n    margin-bottom: -15px;\n}\n.logoText{\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 0;\n    user-select: none;\n    color: #f5c113;\n    text-shadow: 0 1px #272727, 0 -1px #272727,\n        1px 0 #272727, -1px 0 #272727;\n}\n.link-container{\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #979797;\n}\n#links{\n    width: 350px;\n    height: 25px;\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    text-align: center;\n    align-items: flex-end;\n    user-select: none;\n    padding-bottom: 5px;\n}\n#links > a{\n    position: relative;\n    font-family: 'Work Sans';\n    font-size: 15px;\n    margin: 0px 10px;\n    transition: font-size 0.3s,\n        opacity 0.4s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active{\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active){\n    opacity: 0.5;\n}\n#links > a:not(.active):hover{\n    opacity: 1;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active):active{\n    font-size: 20px;\n}\n#links > a:after{\n    transition: opacity 0.5s,\n        left 0.3s,\n        right 0.3s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:100px;\n    right:100px;\n    bottom: -5px;\n}\n#links > a:not(.active):hover:after{\n    content: \"\";\n    position: absolute;\n    opacity: 0.4;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active::after{\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    border-bottom: 2px solid #272727;\n    left:20px;\n    right:20px;\n    bottom: -5px;\n}\n.featured{\n    width:100%;\n}\n.footer{\n    margin-top: 40px;\n    width:100%;\n    background-color: #575757;\n    padding: 5px 5px;\n    font-size: 12px;\n    font-family: 'Work Sans';\n    height: 20px;\n    display: flex;\n    align-items: center;\n}\n.footer *{\n    margin: 0;\n}\n.footer a{\n    text-decoration: none;\n    font-weight: bold;\n    color: white;\n}\n.credits{\n    width: calc(100% - 20px);\n}\n.github{\n    \n    height: 15px;\n    width: 15px;\n}\n#main{\n    animation: fade-in 1s;\n}\n.transition{\n    animation: fade-out 1s;\n}\n@keyframes fade-in{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n}\n@keyframes fade-out{\n    from{\n        opacity: 1;\n    }\n    to{\n        opacity: 0;\n    }\n}\n@font-face {\n    font-family: 'Satisfy';\n    src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Work Sans';\n    src: url(https://fonts.gstatic.com/s/worksans/v9/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2) format('woff2');\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./menu.css */ "../../../../node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/home.js */ "./src/scripts/home.js");
/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _scripts_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/util.js */ "./src/scripts/util.js");
/* harmony import */ var _images_logo2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/logo2.png */ "./src/images/logo2.png");
/* harmony import */ var _images_github_64_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/github-64.png */ "./src/images/github-64.png");









const something = () => {
    console.log('waw')
}
let current = 'menu';
let tabFunction = {
    home: _scripts_home_js__WEBPACK_IMPORTED_MODULE_1__.default,
    menu: _scripts_menu_js__WEBPACK_IMPORTED_MODULE_2__.default,
    contact: something
}
function createFooter(){
    const footer = document.createElement('div');
    footer.className = "footer";

    const credits = document.createElement('p');
    credits.textContent = 'Icons designed by ';
    credits.className = 'credits';
    const creditLink = document.createElement('a');
    creditLink.href = "https://www.freepik.com/vectors/logo"
    creditLink.textContent = 'roserodionova / Freepik';

    const about = new Image()
    about.className = 'github';
    about.src = _images_github_64_png__WEBPACK_IMPORTED_MODULE_5__;
    about.setAttribute('align', 'right')
    credits.appendChild(creditLink);
    credits.appendChild(about);
    footer.appendChild(credits);

    return footer
}

function initiatePage(){
    // get div#content
    const body = document.getElementById('content');
    
    // create container for the header
    const container = document.createElement('div');

    // container for links to center the text 
    const linkContainer = document.createElement('div'); 
    // links subcontainer, use for not affecting the other link when hovering
    const links = document.createElement('div');
    linkContainer.className = "link-container";
    links.id = "links";
    container.id = "header";

    // create logo template for the webpage
    const logoText = document.createElement('h1');
    logoText.className = "logoText";
    const logo = new Image();
    logoText.textContent = "Borgir Fever";
    logo.className = "logo";
    logo.src = _images_logo2_png__WEBPACK_IMPORTED_MODULE_4__

    // create the element for the links
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');
    home.id = "home";
    menu.id = "menu";
    contact.id = "contact";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
    const tabList = {home,menu, contact}

    // insert the elements to an object so other scripts will be able to access the elements.
    tabList[current].classList.add('active');

    // set onclick functionality for the link
    Object.values(tabList).forEach((link) => {
        link.onclick = () => {
            if(!link.classList.contains('active')){
                current = link.id;
                _scripts_util_js__WEBPACK_IMPORTED_MODULE_3__.removeActiveList(Object.values(tabList));
                link.classList.add('active')
                tabFunction[current]();
            }
        }
    });
    // add the links to the subcontainer
    Object.values(tabList).forEach((link) => {
        links.appendChild(link);
    });


    // Create container for the content of each tab
    const main = document.createElement('div');
    main.id = "main-container";

    // add the subcontainer to the main link container
    linkContainer.appendChild(links)
    container.appendChild(logo); // add the logo in a container to center
    container.appendChild(logoText); 

    body.appendChild(container); // add the logo first because
    body.appendChild(linkContainer); // insert the links after
    body.appendChild(main);
    body.appendChild(createFooter());
}   


initiatePage();
tabFunction[current]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/MDAwMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tZW51LmNzcz9kOTY0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz85NjA0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ007QUFDRTtBQUNIOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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bXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaG9tZS5jc3MnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IGJhbmRmIGZyb20gJy4uL2ltYWdlcy80LnBuZyc7XG5pbXBvcnQgb2sgZnJvbSAnLi4vaW1hZ2VzLzEucG5nJztcblxuXG4vLyBjcmVhdGUgdGFnbGluZVxuZnVuY3Rpb24gY3JlYXRlVGFnbGluZSgpe1xuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3IgdGhlIHRhZ2xpbmVcbiAgICBjb25zdCB0YWdsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWdsaW5lQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFnbGluZS1jb250YWluZXJcIlxuXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IGZpcnN0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3RUYWcudGV4dENvbnRlbnQgPSBcIkNIT05LWVwiO1xuXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIDJuZCBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBzZWNvbmRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRUYWcudGV4dENvbnRlbnQgPSBcIkpVSUNZXCI7XG5cbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgMm5kIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IGRvZ3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvZ3RhZy50ZXh0Q29udGVudCA9IFwiQ0hFRVNZXCI7XG4gICAgXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIDJuZCBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBlc2V0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlc2V0YWcudGV4dENvbnRlbnQgPSBcIlRhc3R5XCI7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbih0YWdsaW5lQ29udGFpbmVyLCBbZmlyc3RUYWcsIHNlY29uZFRhZywgZG9ndGFnLCBlc2V0YWddKTsgICBcbiAgICByZXR1cm4gdGFnbGluZUNvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIHNjaGVkXG5mdW5jdGlvbiBjcmVhdGVTY2hlZHVsZSgpe1xuICAgIGNvbnN0IERBWVMgPSBbJ1N1bmRheScgLCdNb25kYXknICwnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknICwnRnJpZGF5JyAsJ1NhdHVyZGF5J11cbiAgICAvKiBcbiAgICAgICAgU0NIRURVTEVcbiAgICAqL1xuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3Igc2NoZWR1bGUgaW5zaWRlIHRoZSBmZWF0dXJlZCBkaXZcbiAgICBjb25zdCBzY2hlZHVsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2NoZWR1bGUtY29udGFpbmVyXCI7XG4gICAgdXRpbC5jaGVja1ZpZXdwb3J0KHNjaGVkdWxlQ29udGFpbmVyKTtcblxuXG4gICAgLy8gY3JlYXRlIHRoZSBzY2hlZHVsZSBkaXZcbiAgICBjb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlLmNsYXNzTmFtZSA9IFwic2NoZWR1bGVcIjtcbiAgICAvLyBjcmVhdGUgdGhlIGhlYWRlciBmb3IgdGhlIHNjaGVkdWxlIGRpdlxuICAgIGNvbnN0IHNjaGVkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzY2hlZEhlYWRlci50ZXh0Q29udGVudCA9IFwiU2NoZWR1bGU6IFwiO1xuICAgIHNjaGVkSGVhZGVyLmNsYXNzTmFtZSA9IFwic2NoZWQtaGVhZGVyXCI7XG5cbiAgICAvLyBzZXQtdXAgdGhlIHNjaGVkdWxlIHRhYmxlL2dyaWQgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgICBjb25zdCBzY2hlZFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NoZWRUYWJsZS5jbGFzc05hbWUgPSBcInNjaGVkLXRhYmxlXCI7IFxuICAgIGxldCBzY2hlZFRhYmxlRWxlbWVudHMgPSBbXTsgLy8gaW4tY2FzZSBvZiBlbWVyZ2VuY3ksIHVzZSB0byBtYW5pcHVsYXRlIG5vZGVcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjE7IGkrKyl7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2NoZWRUYWJsZUVsZW1lbnRzLnB1c2gobm9kZSk7XG4gICAgICAgIGlmKGklMyA9PSAwKSBub2RlLnRleHRDb250ZW50ID0gREFZU1tpLzNdO1xuICAgICAgICBlbHNlIGlmKGklMyA9PSAyKSBub2RlLnRleHRDb250ZW50ID0gXCJPUEVOXCI7XG4gICAgICAgIHNjaGVkVGFibGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIC8vIEFwcGVuZCBhbGwgbmVjZXNzYXJ5IGVsZW1lbnRzIGluIG9yZGVyXG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2NoZWRIZWFkZXIpXG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2NoZWRUYWJsZSk7XG4gICAgc2NoZWR1bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuICAgIHJldHVybiBzY2hlZHVsZUNvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIGRlc2NyaXB0aW9uXG5mdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbigpe1xuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcblxuICAgIGNvbnN0IGRlc2NJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGRlc2NJbWFnZS5zcmMgPSBiYW5kZjtcbiAgICBkZXNjSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbGlnbicsJ2xlZnQnKTtcbiAgICBkZXNjSW1hZ2UuY2xhc3NOYW1lID0gJ2Rlc2MtaW1hZ2UnO1xuXG4gICAgY29uc3QgZGVzY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY1RleHQudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXFxcbiAgICAgICAgRG9uZWMgaXBzdW0gZGlhbSwgY29udmFsbGlzIGJpYmVuZHVtIGxhb3JlZXQgYXQsIHZlc3RpYnVsdW0gc2VkIHNlbS4gXFxcbiAgICAgICAgUHJhZXNlbnQgYSBlbGl0IHVsdHJpY2llcywgYmliZW5kdW0gZXJhdCBhYywgY29uZ3VlIHNlbS4gXFxcbiAgICAgICAgSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLlxcXG4gICAgICAgIEFlbmVhbiBhdWN0b3IgZnJpbmdpbGxhIGVuaW0gYXQgdHJpc3RpcXVlLiBVdCBlZmZpY2l0dXIgc29sbGljaXR1ZGluIGVyb3MgZXUgYmxhbmRpdC5cXFxuICAgICAgICBDcmFzIGNvbnNlY3RldHVyIHV0IGFudGUgYXQgcGVsbGVudGVzcXVlLiBQaGFzZWxsdXMgc3VzY2lwaXQsIGlwc3VtIGF0IGhlbmRyZXJpdCBpYWN1bGlzLCBsaWd1bGEgdXJuYSBmYXVjaWJ1cyBlcm9zLCBlZ2V0IGFsaXF1ZXQgcXVhbSBtZXR1cyB1dCBqdXN0by5cXFxuICAgICAgICBRdWlzcXVlIGluIHBvcnRhIGlwc3VtLiBVdCBhdCBmZWxpcyBtaS4gSW4gc2NlbGVyaXNxdWUgdGVtcG9yIG1hc3NhLiBBZW5lYW4gbGVjdHVzIGR1aSwgY29udmFsbGlzIHF1aXMgbmVxdWUgbmVjLCBtYWxlc3VhZGEgZGljdHVtIGlwc3VtLlxcXG4gICAgICAgIE51bmMgb3JjaSBvcmNpLCByaG9uY3VzIHBvcnRhIGFudGUgYWMsIGZldWdpYXQgYWNjdW1zYW4gcmlzdXMuIE51bmMgdGluY2lkdW50IG1hdXJpcyB2ZWwgYWxpcXVhbSBmZXJtZW50dW0uXCI7XG4gICAgZGVzY1RleHQuY2xhc3NOYW1lID0gJ2Rlc2MtdGV4dCc7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZXNjLWJ0bic7XG4gICAgY29uc3QgZGVzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlc2NCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuICAgIGRlc2NCdG4uY2xhc3NOYW1lID0gJ2J0bic7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYnRuSW1nLnNyYyA9IG9rO1xuICAgIGJ0bkltZy5jbGFzc05hbWUgPSAnYnRuLWltYWdlJztcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGJ0bkNvbnRhaW5lciwgW2J0bkltZywgZGVzY0J0bl0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oZGVzY3JpcHRpb24sIFtkZXNjSW1hZ2UsIGRlc2NUZXh0LCBidG5Db250YWluZXJdKTtcbiAgICBkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBkZXNDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1dGlsLmNyZWF0ZU1haW4oKTtcbiAgICBcbiAgICAvL2NyZWF0ZSBhIHdpZGUgZGl2IGZvciBmZWF0dXJlIGZvb2RcbiAgICBjb25zdCBmZWF0dXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkLmNsYXNzTmFtZSA9IFwiZmVhdHVyZWRcIjtcbiAgICB1dGlsLm5vZGVSZXNpemUoZmVhdHVyZWQsICcxNTB2dycgLCAnMTIwdncnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyAsIFxuICAgICAgICAoKSA9PiB1dGlsLm5vZGVSZXNpemUoZmVhdHVyZWQsICcxNTB2dycgLCAnMTIwdncnKSxcbiAgICAgICAgZmFsc2UpO1xuXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihmZWF0dXJlZCwgW2NyZWF0ZVNjaGVkdWxlKCksIGNyZWF0ZVRhZ2xpbmUoKV0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oY29udGVudCxbZmVhdHVyZWQsY3JlYXRlRGVzY3JpcHRpb24oKV0pXG4gICAgdXRpbC5pbnNlcnRUb01haW4oY29udGVudCk7XG4gICAgcmV0dXJuICdob21lJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWVudS5jc3MnO1xuaW1wb3J0ICcuL3V0aWwuanMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgY29udGVudCA9IHV0aWwuY3JlYXRlTWFpbigpO1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcbiAgICBcblxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oY29udGVudCwgW21lbnVDb250YWluZXJdKTtcbiAgICB1dGlsLmluc2VydFRvTWFpbihjb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudSIsIlxuLy8gcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3Mgb24gZXZlcnkgbm9kZXMgaW4gYW4gYXJyYXkgb2YgSFRNTCBlbGVtZW50c1xuY29uc3QgcmVtb3ZlQWN0aXZlTGlzdCA9IChhcnIpID0+e1xuICAgIGFyci5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxufVxuXG4vLyBoaWRlIG5vZGUgaWYgdmlld3BvcnQgaXMgc21hbGxcbmNvbnN0IGNoZWNrVmlld3BvcnQgPSAobm9kZSkgPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgOTAwKSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgOTAwKSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWxzZSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG59XG4vLyByZXNpemUgbm9kZSBiYWNrZ3JvdW5kIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBub2RlUmVzaXplID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDAwKSAge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAndG9wJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1pbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICdjZW50ZXInO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWF4O1xuICAgIH1cbn1cbmNvbnN0IGluc2VydENoaWxkcmVuID0gKHBhcmVudCwgYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xufVxuLy8gaW5zZXJ0IHRvIG1haW4tY29udGFpbmVyXG5jb25zdCBpbnNlcnRUb01haW4gPSAoY29udGVudCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT57XG4gICAgLy8gcmVtb3ZlIHRoZSBtYWluIGNvbnRlbnQgaWYgdGhlcmUgaXNcbiAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBpZihwcmV2KSBwcmV2LnJlbW92ZSgpOyBcblxuICAgIC8vIGNyZWF0ZSBuZXcgb25lXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSBcIm1haW5cIjtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTWFpbixcbiAgICBpbnNlcnRUb01haW4sXG4gICAgaW5zZXJ0Q2hpbGRyZW4sXG4gICAgcmVtb3ZlQWN0aXZlTGlzdCxcbiAgICBjaGVja1ZpZXdwb3J0LFxuICAgIG5vZGVSZXNpemVcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mZWF0dXJlZHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IG1pbig0MDBweCwgNDV2aCk7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwNDA1NjE5MS5qcGcpIG5vLXJlcGVhdCByaWdodDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMGVtIDEwZW0gIzAwMDAwMDYwO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFnbGluZS1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDJmciAxZnIgMWZyO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiAqe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOmZpcnN0LWNoaWxke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNjBweCwgMTJ2aCwgMTQwcHgpO1xcbiAgICBtYXJnaW46LTEwcHggMDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHgsIDEwdmgsIDEwMHB4KTtcXG4gICAgbWFyZ2luOi0xMHB4IDA7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMyl7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgzMHB4LCA2dmgsIDYwcHgpO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bGFzdC1jaGlsZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDIwcHgsIDZ2aCwgNDBweCk7XFxufVxcbi5zY2hlZHVsZS1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHJpZ2h0OjA7XFxufVxcbi5zY2hlZHVsZXtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNmM7XFxuICAgIGhlaWdodDogOTAlO1xcbn1cXG4uc2NoZWQtaGVhZGVye1xcbiAgICBoZWlnaHQ6NCU7IFxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAzdmgsIDJyZW0pO1xcbiAgICBtYXJnaW46MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2NoZWQtdGFibGV7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbn1cXG4uc2NoZWQtdGFibGUgPiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc2NoZWQtdGFibGUgPiA6bnRoLWNoaWxkKDNuKzMpe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFjYWMxYztcXG4gICAgbWFyZ2luOiAwIDVweFxcbn1cXG4uc2NoZWQtdGFibGUgPiA6bnRoLWNoaWxkKDNuICsgMil7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDAwMDA7XFxufVxcbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi1sZWZ0OmNsYW1wKDE1JSwgMnZ3LCAyNSUpO1xcbiAgICBtYXJnaW4tcmlnaHQ6Y2xhbXAoMTUlLCAydncsIDI1JSk7XFxuICAgIHBhZGRpbmc6MjBweDtcXG59XFxuLmRlc2MtaW1hZ2V7XFxuICAgIGhlaWdodDpjbGFtcCgxMDBweCwgMjB2dywgMjUwcHgpO1xcbn1cXG4uZGVzYy10ZXh0e1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsMnZ3LDI1cHgpO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwgM3Z3LCAyMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRlc2MtYnRue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IG1pbigyMDBweCwzMCUpO1xcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjMTEzO1xcbn1cXG4uYnRuLWltYWdle1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QiwyRUFBMkU7SUFDM0UsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLE9BQU87QUFDWDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEM7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mZWF0dXJlZHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IG1pbig0MDBweCwgNDV2aCk7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwNDA1NjE5MS5qcGcpIG5vLXJlcGVhdCByaWdodDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMGVtIDEwZW0gIzAwMDAwMDYwO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFnbGluZS1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDJmciAxZnIgMWZyO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiAqe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOmZpcnN0LWNoaWxke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNjBweCwgMTJ2aCwgMTQwcHgpO1xcbiAgICBtYXJnaW46LTEwcHggMDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHgsIDEwdmgsIDEwMHB4KTtcXG4gICAgbWFyZ2luOi0xMHB4IDA7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMyl7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgzMHB4LCA2dmgsIDYwcHgpO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bGFzdC1jaGlsZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDIwcHgsIDZ2aCwgNDBweCk7XFxufVxcbi5zY2hlZHVsZS1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHJpZ2h0OjA7XFxufVxcbi5zY2hlZHVsZXtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNmM7XFxuICAgIGhlaWdodDogOTAlO1xcbn1cXG4uc2NoZWQtaGVhZGVye1xcbiAgICBoZWlnaHQ6NCU7IFxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAzdmgsIDJyZW0pO1xcbiAgICBtYXJnaW46MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2NoZWQtdGFibGV7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbn1cXG4uc2NoZWQtdGFibGUgPiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc2NoZWQtdGFibGUgPiA6bnRoLWNoaWxkKDNuKzMpe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFjYWMxYztcXG4gICAgbWFyZ2luOiAwIDVweFxcbn1cXG4uc2NoZWQtdGFibGUgPiA6bnRoLWNoaWxkKDNuICsgMil7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDAwMDA7XFxufVxcbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi1sZWZ0OmNsYW1wKDE1JSwgMnZ3LCAyNSUpO1xcbiAgICBtYXJnaW4tcmlnaHQ6Y2xhbXAoMTUlLCAydncsIDI1JSk7XFxuICAgIHBhZGRpbmc6MjBweDtcXG59XFxuLmRlc2MtaW1hZ2V7XFxuICAgIGhlaWdodDpjbGFtcCgxMDBweCwgMjB2dywgMjUwcHgpO1xcbn1cXG4uZGVzYy10ZXh0e1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsMnZ3LDI1cHgpO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwgM3Z3LCAyMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRlc2MtYnRue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IG1pbigyMDBweCwzMCUpO1xcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjMTEzO1xcbn1cXG4uYnRuLWltYWdle1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tZW51LWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OjUwMHB4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnUtY29udGFpbmVye1xcbiAgICBoZWlnaHQ6NTAwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZmFtaWx5PVJhbGV3YXk6d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbiNoZWFkZXJ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvZ297XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxufVxcbi5sb2dvVGV4dHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogI2Y1YzExMztcXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4ICMyNzI3MjcsIDAgLTFweCAjMjcyNzI3LFxcbiAgICAgICAgMXB4IDAgIzI3MjcyNywgLTFweCAwICMyNzI3Mjc7XFxufVxcbi5saW5rLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xcbn1cXG4jbGlua3N7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbiNsaW5rcyA+IGF7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbjogMHB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzLFxcbiAgICAgICAgb3BhY2l0eSAwLjRzO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MzBweDtcXG4gICAgcmlnaHQ6MzBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uYWN0aXZle1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpe1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmhvdmVye1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFjdGl2ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jbGlua3MgPiBhOmFmdGVye1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsXFxuICAgICAgICBsZWZ0IDAuM3MsXFxuICAgICAgICByaWdodCAwLjNzO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MTAwcHg7XFxuICAgIHJpZ2h0OjEwMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmhvdmVyOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjMwcHg7XFxuICAgIHJpZ2h0OjMwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmFjdGl2ZTo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjIwcHg7XFxuICAgIHJpZ2h0OjIwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmZlYXR1cmVke1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG4uZm9vdGVye1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU3O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyICp7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmZvb3RlciBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jcmVkaXRze1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcbi5naXRodWJ7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG4jbWFpbntcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbn1cXG4udHJhbnNpdGlvbntcXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAxcztcXG59XFxuQGtleWZyYW1lcyBmYWRlLWlue1xcbiAgICBmcm9te1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBmYWRlLW91dHtcXG4gICAgZnJvbXtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgdG97XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NhdGlzZnknO1xcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc2F0aXNmeS92MTEvclAySHAyeW42bGtHNTBMb0NaT0lIUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvd29ya3NhbnMvdjkvUUdZX3pfd05haEdBZHFRNDNSaFZjSWdZVDJYejV1MzJLMG5YQmk4SnBnLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztJQUNkO3FDQUNpQztBQUNyQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEI7b0JBQ2dCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSTs7a0JBRWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qiw4RkFBOEY7QUFDbEc7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixrSEFBa0g7QUFDdEhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAOTAwJmRpc3BsYXk9c3dhcCcpO1xcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG59XFxuLmxvZ29UZXh0e1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiAjZjVjMTEzO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggIzI3MjcyNywgMCAtMXB4ICMyNzI3MjcsXFxuICAgICAgICAxcHggMCAjMjcyNzI3LCAtMXB4IDAgIzI3MjcyNztcXG59XFxuLmxpbmstY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XFxufVxcbiNsaW5rc3tcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuI2xpbmtzID4gYXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MsXFxuICAgICAgICBvcGFjaXR5IDAuNHM7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDozMHB4O1xcbiAgICByaWdodDozMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5hY3RpdmV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSl7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWN0aXZle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNsaW5rcyA+IGE6YWZ0ZXJ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyxcXG4gICAgICAgIGxlZnQgMC4zcyxcXG4gICAgICAgIHJpZ2h0IDAuM3M7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDoxMDBweDtcXG4gICAgcmlnaHQ6MTAwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6aG92ZXI6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MzBweDtcXG4gICAgcmlnaHQ6MzBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uYWN0aXZlOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MjBweDtcXG4gICAgcmlnaHQ6MjBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uZmVhdHVyZWR7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcbi5mb290ZXJ7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXIgKntcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4uZm9vdGVyIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNyZWRpdHN7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuLmdpdGh1YntcXG4gICAgXFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcbiNtYWlue1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcbi50cmFuc2l0aW9ue1xcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDFzO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW57XFxuICAgIGZyb217XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRve1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0e1xcbiAgICBmcm9te1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2F0aXNmeSc7XFxuICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zYXRpc2Z5L3YxMS9yUDJIcDJ5bjZsa0c1MExvQ1pPSUhRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy93b3Jrc2Fucy92OS9RR1lfel93TmFoR0FkcVE0M1JoVmNJZ1lUMlh6NXUzMkswblhCaThKcGcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuL3NjcmlwdHMvaG9tZS5qcyc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL3NjcmlwdHMvbWVudS5qcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vc2NyaXB0cy91dGlsLmpzJztcbmltcG9ydCBsb2cgZnJvbSAnLi9pbWFnZXMvbG9nbzIucG5nJztcbmltcG9ydCBnaCBmcm9tICcuL2ltYWdlcy9naXRodWItNjQucG5nJztcblxuXG5cbmNvbnN0IHNvbWV0aGluZyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnd2F3Jylcbn1cbmxldCBjdXJyZW50ID0gJ21lbnUnO1xubGV0IHRhYkZ1bmN0aW9uID0ge1xuICAgIGhvbWU6IGNyZWF0ZUhvbWUsXG4gICAgbWVudTogY3JlYXRlTWVudSxcbiAgICBjb250YWN0OiBzb21ldGhpbmdcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc05hbWUgPSBcImZvb3RlclwiO1xuXG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjcmVkaXRzLnRleHRDb250ZW50ID0gJ0ljb25zIGRlc2lnbmVkIGJ5ICc7XG4gICAgY3JlZGl0cy5jbGFzc05hbWUgPSAnY3JlZGl0cyc7XG4gICAgY29uc3QgY3JlZGl0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjcmVkaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3ZlY3RvcnMvbG9nb1wiXG4gICAgY3JlZGl0TGluay50ZXh0Q29udGVudCA9ICdyb3Nlcm9kaW9ub3ZhIC8gRnJlZXBpayc7XG5cbiAgICBjb25zdCBhYm91dCA9IG5ldyBJbWFnZSgpXG4gICAgYWJvdXQuY2xhc3NOYW1lID0gJ2dpdGh1Yic7XG4gICAgYWJvdXQuc3JjID0gZ2g7XG4gICAgYWJvdXQuc2V0QXR0cmlidXRlKCdhbGlnbicsICdyaWdodCcpXG4gICAgY3JlZGl0cy5hcHBlbmRDaGlsZChjcmVkaXRMaW5rKTtcbiAgICBjcmVkaXRzLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmZ1bmN0aW9uIGluaXRpYXRlUGFnZSgpe1xuICAgIC8vIGdldCBkaXYjY29udGVudFxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBoZWFkZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGNvbnRhaW5lciBmb3IgbGlua3MgdG8gY2VudGVyIHRoZSB0ZXh0IFxuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgLy8gbGlua3Mgc3ViY29udGFpbmVyLCB1c2UgZm9yIG5vdCBhZmZlY3RpbmcgdGhlIG90aGVyIGxpbmsgd2hlbiBob3ZlcmluZ1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlua0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImxpbmstY29udGFpbmVyXCI7XG4gICAgbGlua3MuaWQgPSBcImxpbmtzXCI7XG4gICAgY29udGFpbmVyLmlkID0gXCJoZWFkZXJcIjtcblxuICAgIC8vIGNyZWF0ZSBsb2dvIHRlbXBsYXRlIGZvciB0aGUgd2VicGFnZVxuICAgIGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsb2dvVGV4dC5jbGFzc05hbWUgPSBcImxvZ29UZXh0XCI7XG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gXCJCb3JnaXIgRmV2ZXJcIjtcbiAgICBsb2dvLmNsYXNzTmFtZSA9IFwibG9nb1wiO1xuICAgIGxvZ28uc3JjID0gbG9nXG5cbiAgICAvLyBjcmVhdGUgdGhlIGVsZW1lbnQgZm9yIHRoZSBsaW5rc1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGhvbWUuaWQgPSBcImhvbWVcIjtcbiAgICBtZW51LmlkID0gXCJtZW51XCI7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnN0IHRhYkxpc3QgPSB7aG9tZSxtZW51LCBjb250YWN0fVxuXG4gICAgLy8gaW5zZXJ0IHRoZSBlbGVtZW50cyB0byBhbiBvYmplY3Qgc28gb3RoZXIgc2NyaXB0cyB3aWxsIGJlIGFibGUgdG8gYWNjZXNzIHRoZSBlbGVtZW50cy5cbiAgICB0YWJMaXN0W2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgLy8gc2V0IG9uY2xpY2sgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGxpbmtcbiAgICBPYmplY3QudmFsdWVzKHRhYkxpc3QpLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGluay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYoIWxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGxpbmsuaWQ7XG4gICAgICAgICAgICAgICAgdXRpbC5yZW1vdmVBY3RpdmVMaXN0KE9iamVjdC52YWx1ZXModGFiTGlzdCkpO1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB0YWJGdW5jdGlvbltjdXJyZW50XSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gYWRkIHRoZSBsaW5rcyB0byB0aGUgc3ViY29udGFpbmVyXG4gICAgT2JqZWN0LnZhbHVlcyh0YWJMaXN0KS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xuXG5cbiAgICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciB0aGUgY29udGVudCBvZiBlYWNoIHRhYlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmlkID0gXCJtYWluLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gYWRkIHRoZSBzdWJjb250YWluZXIgdG8gdGhlIG1haW4gbGluayBjb250YWluZXJcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTsgLy8gYWRkIHRoZSBsb2dvIGluIGEgY29udGFpbmVyIHRvIGNlbnRlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvVGV4dCk7IFxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpOyAvLyBhZGQgdGhlIGxvZ28gZmlyc3QgYmVjYXVzZVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7IC8vIGluc2VydCB0aGUgbGlua3MgYWZ0ZXJcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufSAgIFxuXG5cbmluaXRpYXRlUGFnZSgpO1xudGFiRnVuY3Rpb25bY3VycmVudF0oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=