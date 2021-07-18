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
    
    taglineContainer.appendChild(firstTag);
    taglineContainer.appendChild(secondTag);
    taglineContainer.appendChild(dogtag);
    taglineContainer.appendChild(esetag);

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
    btnContainer.appendChild(btnImg);
    btnContainer.appendChild(descBtn)
    description.appendChild(descImage);
    description.appendChild(descText);
    desContainer.appendChild(description);
    description.appendChild(btnContainer);
    return desContainer;
}


function createHome(){
    // remove the main content if there is
    const prev = document.getElementById('main');
    if(prev) prev.remove(); 

    // create new one
    const content = document.createElement('div');
    content.id = "main";
    content.className = "content";
    
    //create a wide div for feature food
    const featured = document.createElement('div');
    featured.className = "featured";
    _util_js__WEBPACK_IMPORTED_MODULE_2__.nodeResize(featured, '150vw' , '120vw');
    window.addEventListener('resize' , 
        () => _util_js__WEBPACK_IMPORTED_MODULE_2__.nodeResize(featured, '150vw' , '120vw'),
        false);

    // featuredBg.id='<a href="http://www.freepik.com">Designed by roserodionova / Freepik</a>';
    // featured.appendChild(featuredBg);
    featured.appendChild(createSchedule());
    featured.appendChild(createTagline());
    content.appendChild(featured);
    content.appendChild(createDescription());
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertToMain(content);
    return 'home';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "insertToMain": () => (/* binding */ insertToMain),
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
    if(window.innerWidth < 700) node.style.display = "none";
    else node.style.display = "block";
    
    window.addEventListener('resize',() => {
        if(window.innerWidth < 700) node.style.display = "none";
        else node.style.display = "block";
    });
}
// resize node background if viewport is small
const nodeResize = (node, min, max) => {
    if(window.innerWidth < 700)  {
        node.style.backgroundPositionY = 'top';
        node.style.backgroundSize = min;
    }
    else {
        node.style.backgroundPositionY = 'center';
        node.style.backgroundSize = max;
    }
}
// insert to main-container
const insertToMain = (content) => document.getElementById('main-container').appendChild(content);





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
___CSS_LOADER_EXPORT___.push([module.id, ".featured{\n    box-sizing: border-box;\n    position: relative;\n    height: min(400px, 45vh);\n    background: url(https://wallpapercave.com/wp/wp4056191.jpg) no-repeat right;\n    background-attachment: fixed;\n    background-position-y: center;\n    box-shadow: inset 0 0 10em 10em #00000060;\n    padding:10px;\n    background-size: 100vw;\n    width: 100%;\n}\n.tagline-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: 2fr 2fr 1fr 1fr;\n    padding:10px;\n    height:100%;\n    width: 80%;\n}\n.tagline-container > *{\n    display: flex;\n    font-family: 'Montserrat';\n    font-weight: 900;\n    margin: 0;\n    align-items: center;\n    justify-content: flex-start;\n    box-sizing: border-box;\n}\n.tagline-container > :first-child{\n    color: white;\n    font-size: clamp(60px, 12vh, 140px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(2){\n    color: white;\n    font-size: clamp(50px, 10vh, 100px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(3){\n    color: white;\n    font-size: clamp(30px, 6vh, 60px);\n}\n.tagline-container > :last-child{\n    color: white;\n    font-size: clamp(20px, 6vh, 40px);\n}\n.schedule-container{\n    box-sizing: border-box;\n    position: absolute;\n    padding: 10px;\n    height: 100%;\n    width: 300px;\n    right:0;\n}\n.schedule{\n    box-sizing:border-box;\n    padding: 10px;\n    background-color: #ffffff6c;\n    height: 90%;\n}\n.sched-header{\n    height:4%; \n    font-family: 'Work Sans';\n    font-size: clamp(1.2rem, 3vh, 2rem);\n    margin:0;\n    text-align: center;\n}\n.sched-table{\n    box-sizing: border-box;\n    display: grid;\n    font-family: 'Montserrat';\n    padding: 10px;\n    font-size: 13px;\n    grid-template-columns: 1fr 2fr 1fr;\n    width: 100%;\n    height: 90%;\n}\n.sched-table > *{\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n}\n.sched-table > :nth-child(3n+3){\n    box-sizing: border-box;\n    border-bottom: 2px solid #1cac1c;\n    margin: 0 5px\n}\n.sched-table > :nth-child(3n + 2){\n    width: 100%;\n    border-bottom: 1px dotted #000000;\n}\n.description-container{\n    box-sizing: border-box;\n    margin-left:clamp(15%, 2vw, 25%);\n    margin-right:clamp(15%, 2vw, 25%);\n    height:500px;\n    padding:20px;\n}\n.description{\n    height: 100%;\n}\n.desc-image{\n    height:clamp(100px, 20vw, 250px);\n}\n.desc-text{\n    font-family: 'Montserrat';\n    font-size: clamp(14px,2vw,25px);\n    margin-top: 50px;\n    text-align: justify;\n    word-wrap: break-word;\n}\n.btn{\n    border: none;\n    background-color: transparent;\n    font-family: 'Montserrat';\n    font-size: clamp(12px, 3vw, 20px);\n    width: 100%;\n    text-align: center;\n}\n.desc-btn{\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 25px;\n    width: min(200px,30%);\n    padding: 8px 20px;\n    border-radius: 100px;\n    margin: 0 auto;\n    margin-top: 70px;\n    background-color: #f5c113;\n}\n.btn-image{\n    text-align: left;\n    height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;IACxB,2EAA2E;IAC3E,4BAA4B;IAC5B,6BAA6B;IAC7B,yCAAyC;IACzC,YAAY;IACZ,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,UAAU;AACd;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,SAAS;IACT,mBAAmB;IACnB,2BAA2B;IAC3B,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,cAAc;AAClB;AACA;IACI,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,OAAO;AACX;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,2BAA2B;IAC3B,WAAW;AACf;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,mCAAmC;IACnC,QAAQ;IACR,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,eAAe;IACf,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,gCAAgC;IAChC;AACJ;AACA;IACI,WAAW;IACX,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,gCAAgC;IAChC,iCAAiC;IACjC,YAAY;IACZ,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,yBAAyB;IACzB,+BAA+B;IAC/B,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,yBAAyB;IACzB,iCAAiC;IACjC,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;IACd,gBAAgB;IAChB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,YAAY;AAChB","sourcesContent":[".featured{\n    box-sizing: border-box;\n    position: relative;\n    height: min(400px, 45vh);\n    background: url(https://wallpapercave.com/wp/wp4056191.jpg) no-repeat right;\n    background-attachment: fixed;\n    background-position-y: center;\n    box-shadow: inset 0 0 10em 10em #00000060;\n    padding:10px;\n    background-size: 100vw;\n    width: 100%;\n}\n.tagline-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: 2fr 2fr 1fr 1fr;\n    padding:10px;\n    height:100%;\n    width: 80%;\n}\n.tagline-container > *{\n    display: flex;\n    font-family: 'Montserrat';\n    font-weight: 900;\n    margin: 0;\n    align-items: center;\n    justify-content: flex-start;\n    box-sizing: border-box;\n}\n.tagline-container > :first-child{\n    color: white;\n    font-size: clamp(60px, 12vh, 140px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(2){\n    color: white;\n    font-size: clamp(50px, 10vh, 100px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(3){\n    color: white;\n    font-size: clamp(30px, 6vh, 60px);\n}\n.tagline-container > :last-child{\n    color: white;\n    font-size: clamp(20px, 6vh, 40px);\n}\n.schedule-container{\n    box-sizing: border-box;\n    position: absolute;\n    padding: 10px;\n    height: 100%;\n    width: 300px;\n    right:0;\n}\n.schedule{\n    box-sizing:border-box;\n    padding: 10px;\n    background-color: #ffffff6c;\n    height: 90%;\n}\n.sched-header{\n    height:4%; \n    font-family: 'Work Sans';\n    font-size: clamp(1.2rem, 3vh, 2rem);\n    margin:0;\n    text-align: center;\n}\n.sched-table{\n    box-sizing: border-box;\n    display: grid;\n    font-family: 'Montserrat';\n    padding: 10px;\n    font-size: 13px;\n    grid-template-columns: 1fr 2fr 1fr;\n    width: 100%;\n    height: 90%;\n}\n.sched-table > *{\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n}\n.sched-table > :nth-child(3n+3){\n    box-sizing: border-box;\n    border-bottom: 2px solid #1cac1c;\n    margin: 0 5px\n}\n.sched-table > :nth-child(3n + 2){\n    width: 100%;\n    border-bottom: 1px dotted #000000;\n}\n.description-container{\n    box-sizing: border-box;\n    margin-left:clamp(15%, 2vw, 25%);\n    margin-right:clamp(15%, 2vw, 25%);\n    height:500px;\n    padding:20px;\n}\n.description{\n    height: 100%;\n}\n.desc-image{\n    height:clamp(100px, 20vw, 250px);\n}\n.desc-text{\n    font-family: 'Montserrat';\n    font-size: clamp(14px,2vw,25px);\n    margin-top: 50px;\n    text-align: justify;\n    word-wrap: break-word;\n}\n.btn{\n    border: none;\n    background-color: transparent;\n    font-family: 'Montserrat';\n    font-size: clamp(12px, 3vw, 20px);\n    width: 100%;\n    text-align: center;\n}\n.desc-btn{\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 25px;\n    width: min(200px,30%);\n    padding: 8px 20px;\n    border-radius: 100px;\n    margin: 0 auto;\n    margin-top: 70px;\n    background-color: #f5c113;\n}\n.btn-image{\n    text-align: left;\n    height: 100%;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    width:100vw;\n    overflow-x: hidden;\n}\n#header{\n    height: fit-content;\n    text-align: center;\n}\n.logo{\n    height: 40px;\n    margin-bottom: -15px;\n}\n.logoText{\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 0;\n    user-select: none;\n    color: #f5c113;\n    text-shadow: 0 1px #272727, 0 -1px #272727,\n        1px 0 #272727, -1px 0 #272727;\n}\n.link-container{\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #979797;\n}\n#links{\n    width: 350px;\n    height: 25px;\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    text-align: center;\n    align-items: flex-end;\n    user-select: none;\n    padding-bottom: 5px;\n}\n#links > a{\n    position: relative;\n    font-family: 'Work Sans';\n    font-size: 15px;\n    margin: 0px 10px;\n    transition: font-size 0.3s,\n        opacity 0.4s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active{\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active){\n    opacity: 0.5;\n}\n#links > a:not(.active):hover{\n    opacity: 1;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active):active{\n    font-size: 20px;\n}\n#links > a:after{\n    transition: opacity 0.5s,\n        left 0.3s,\n        right 0.3s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:100px;\n    right:100px;\n    bottom: -5px;\n}\n#links > a:not(.active):hover:after{\n    content: \"\";\n    position: absolute;\n    opacity: 0.4;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active::after{\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    border-bottom: 2px solid #272727;\n    left:20px;\n    right:20px;\n    bottom: -5px;\n}\n.featured{\n    width:100%;\n}\n\n\n@font-face {\n    font-family: 'Satisfy';\n    src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Work Sans';\n    src: url(https://fonts.gstatic.com/s/worksans/v9/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2) format('woff2');\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,cAAc;IACd;qCACiC;AACrC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,gCAAgC;AACpC;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,qCAAqC;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,eAAe;IACf,gBAAgB;IAChB;oBACgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;AACA;IACI;;kBAEc;AAClB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,UAAU;IACV,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,UAAU;AACd;;;AAGA;IACI,sBAAsB;IACtB,8FAA8F;AAClG;AACA;IACI,wBAAwB;IACxB,kHAAkH;AACtH","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway:wght@900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');\nbody{\n    margin: 0;\n    width:100vw;\n    overflow-x: hidden;\n}\n#header{\n    height: fit-content;\n    text-align: center;\n}\n.logo{\n    height: 40px;\n    margin-bottom: -15px;\n}\n.logoText{\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 0;\n    user-select: none;\n    color: #f5c113;\n    text-shadow: 0 1px #272727, 0 -1px #272727,\n        1px 0 #272727, -1px 0 #272727;\n}\n.link-container{\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #979797;\n}\n#links{\n    width: 350px;\n    height: 25px;\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    text-align: center;\n    align-items: flex-end;\n    user-select: none;\n    padding-bottom: 5px;\n}\n#links > a{\n    position: relative;\n    font-family: 'Work Sans';\n    font-size: 15px;\n    margin: 0px 10px;\n    transition: font-size 0.3s,\n        opacity 0.4s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active{\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active){\n    opacity: 0.5;\n}\n#links > a:not(.active):hover{\n    opacity: 1;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active):active{\n    font-size: 20px;\n}\n#links > a:after{\n    transition: opacity 0.5s,\n        left 0.3s,\n        right 0.3s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:100px;\n    right:100px;\n    bottom: -5px;\n}\n#links > a:not(.active):hover:after{\n    content: \"\";\n    position: absolute;\n    opacity: 0.4;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active::after{\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    border-bottom: 2px solid #272727;\n    left:20px;\n    right:20px;\n    bottom: -5px;\n}\n.featured{\n    width:100%;\n}\n\n\n@font-face {\n    font-family: 'Satisfy';\n    src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Work Sans';\n    src: url(https://fonts.gstatic.com/s/worksans/v9/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2) format('woff2');\n}"],"sourceRoot":""}]);
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/home.js */ "./src/scripts/home.js");
/* harmony import */ var _scripts_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/util.js */ "./src/scripts/util.js");
/* harmony import */ var _images_logo2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo2.png */ "./src/images/logo2.png");







const something = () => {
    console.log('waw')
}
let current = 'home';
let tabFunction = {
    home: _scripts_home_js__WEBPACK_IMPORTED_MODULE_1__.default,
    menu: something,
    contact: something
}
function initiatePage(){
    // get div#content
    const body = document.getElementById('content');
    const footer = document.createElement('div');
    
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
    logo.src = _images_logo2_png__WEBPACK_IMPORTED_MODULE_3__

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
                _scripts_util_js__WEBPACK_IMPORTED_MODULE_2__.removeActiveList(Object.values(tabList));
                link.classList.add('active')
                tabFunction[current]();
            }
        }
    });
    // add the links to the subcontainer
    Object.values(tabList).forEach((link) => {
        links.appendChild(link);
    });

    footer.className = "footer";

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
    body.appendChild(footer);
}   



initiatePage();
(0,_scripts_home_js__WEBPACK_IMPORTED_MODULE_1__.default)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/MDAwMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/OTYwNCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNEO0FBQ007QUFDRTtBQUNIOzs7QUFHakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFrQjs7O0FBR3RCO0FBQ0E7QUFDQTtB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Q3BDO0FBQ0E7QUFDQSxDOzs7O0FBSUE7QUFDQSx5REFBVSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaG9tZS5jc3MnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IGJhbmRmIGZyb20gJy4uL2ltYWdlcy80LnBuZyc7XG5pbXBvcnQgb2sgZnJvbSAnLi4vaW1hZ2VzLzEucG5nJztcblxuXG4vLyBjcmVhdGUgdGFnbGluZVxuZnVuY3Rpb24gY3JlYXRlVGFnbGluZSgpe1xuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3IgdGhlIHRhZ2xpbmVcbiAgICBjb25zdCB0YWdsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWdsaW5lQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFnbGluZS1jb250YWluZXJcIlxuXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IGZpcnN0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3RUYWcudGV4dENvbnRlbnQgPSBcIkNIT05LWVwiO1xuXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIDJuZCBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBzZWNvbmRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRUYWcudGV4dENvbnRlbnQgPSBcIkpVSUNZXCI7XG5cbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgMm5kIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IGRvZ3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvZ3RhZy50ZXh0Q29udGVudCA9IFwiQ0hFRVNZXCI7XG4gICAgXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIDJuZCBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBlc2V0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlc2V0YWcudGV4dENvbnRlbnQgPSBcIlRhc3R5XCI7XG4gICAgXG4gICAgdGFnbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdFRhZyk7XG4gICAgdGFnbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRUYWcpO1xuICAgIHRhZ2xpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9ndGFnKTtcbiAgICB0YWdsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGVzZXRhZyk7XG5cbiAgICByZXR1cm4gdGFnbGluZUNvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIHNjaGVkXG5mdW5jdGlvbiBjcmVhdGVTY2hlZHVsZSgpe1xuICAgIGNvbnN0IERBWVMgPSBbJ1N1bmRheScgLCdNb25kYXknICwnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknICwnRnJpZGF5JyAsJ1NhdHVyZGF5J11cbiAgICAvKiBcbiAgICAgICAgU0NIRURVTEVcbiAgICAqL1xuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3Igc2NoZWR1bGUgaW5zaWRlIHRoZSBmZWF0dXJlZCBkaXZcbiAgICBjb25zdCBzY2hlZHVsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2NoZWR1bGUtY29udGFpbmVyXCI7XG4gICAgdXRpbC5jaGVja1ZpZXdwb3J0KHNjaGVkdWxlQ29udGFpbmVyKTtcblxuXG4gICAgLy8gY3JlYXRlIHRoZSBzY2hlZHVsZSBkaXZcbiAgICBjb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlLmNsYXNzTmFtZSA9IFwic2NoZWR1bGVcIjtcbiAgICAvLyBjcmVhdGUgdGhlIGhlYWRlciBmb3IgdGhlIHNjaGVkdWxlIGRpdlxuICAgIGNvbnN0IHNjaGVkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzY2hlZEhlYWRlci50ZXh0Q29udGVudCA9IFwiU2NoZWR1bGU6IFwiO1xuICAgIHNjaGVkSGVhZGVyLmNsYXNzTmFtZSA9IFwic2NoZWQtaGVhZGVyXCI7XG5cbiAgICAvLyBzZXQtdXAgdGhlIHNjaGVkdWxlIHRhYmxlL2dyaWQgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgICBjb25zdCBzY2hlZFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NoZWRUYWJsZS5jbGFzc05hbWUgPSBcInNjaGVkLXRhYmxlXCI7IFxuICAgIGxldCBzY2hlZFRhYmxlRWxlbWVudHMgPSBbXTsgLy8gaW4tY2FzZSBvZiBlbWVyZ2VuY3ksIHVzZSB0byBtYW5pcHVsYXRlIG5vZGVcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjE7IGkrKyl7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2NoZWRUYWJsZUVsZW1lbnRzLnB1c2gobm9kZSk7XG4gICAgICAgIGlmKGklMyA9PSAwKSBub2RlLnRleHRDb250ZW50ID0gREFZU1tpLzNdO1xuICAgICAgICBlbHNlIGlmKGklMyA9PSAyKSBub2RlLnRleHRDb250ZW50ID0gXCJPUEVOXCI7XG4gICAgICAgIHNjaGVkVGFibGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIC8vIEFwcGVuZCBhbGwgbmVjZXNzYXJ5IGVsZW1lbnRzIGluIG9yZGVyXG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2NoZWRIZWFkZXIpXG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2NoZWRUYWJsZSk7XG4gICAgc2NoZWR1bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuICAgIHJldHVybiBzY2hlZHVsZUNvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIGRlc2NyaXB0aW9uXG5mdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbigpe1xuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcblxuICAgIGNvbnN0IGRlc2NJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGRlc2NJbWFnZS5zcmMgPSBiYW5kZjtcbiAgICBkZXNjSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbGlnbicsJ2xlZnQnKTtcbiAgICBkZXNjSW1hZ2UuY2xhc3NOYW1lID0gJ2Rlc2MtaW1hZ2UnO1xuXG4gICAgY29uc3QgZGVzY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY1RleHQudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXFxcbiAgICAgICAgRG9uZWMgaXBzdW0gZGlhbSwgY29udmFsbGlzIGJpYmVuZHVtIGxhb3JlZXQgYXQsIHZlc3RpYnVsdW0gc2VkIHNlbS4gXFxcbiAgICAgICAgUHJhZXNlbnQgYSBlbGl0IHVsdHJpY2llcywgYmliZW5kdW0gZXJhdCBhYywgY29uZ3VlIHNlbS4gXFxcbiAgICAgICAgSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLlxcXG4gICAgICAgIEFlbmVhbiBhdWN0b3IgZnJpbmdpbGxhIGVuaW0gYXQgdHJpc3RpcXVlLiBVdCBlZmZpY2l0dXIgc29sbGljaXR1ZGluIGVyb3MgZXUgYmxhbmRpdC5cXFxuICAgICAgICBDcmFzIGNvbnNlY3RldHVyIHV0IGFudGUgYXQgcGVsbGVudGVzcXVlLiBQaGFzZWxsdXMgc3VzY2lwaXQsIGlwc3VtIGF0IGhlbmRyZXJpdCBpYWN1bGlzLCBsaWd1bGEgdXJuYSBmYXVjaWJ1cyBlcm9zLCBlZ2V0IGFsaXF1ZXQgcXVhbSBtZXR1cyB1dCBqdXN0by5cXFxuICAgICAgICBRdWlzcXVlIGluIHBvcnRhIGlwc3VtLiBVdCBhdCBmZWxpcyBtaS4gSW4gc2NlbGVyaXNxdWUgdGVtcG9yIG1hc3NhLiBBZW5lYW4gbGVjdHVzIGR1aSwgY29udmFsbGlzIHF1aXMgbmVxdWUgbmVjLCBtYWxlc3VhZGEgZGljdHVtIGlwc3VtLlxcXG4gICAgICAgIE51bmMgb3JjaSBvcmNpLCByaG9uY3VzIHBvcnRhIGFudGUgYWMsIGZldWdpYXQgYWNjdW1zYW4gcmlzdXMuIE51bmMgdGluY2lkdW50IG1hdXJpcyB2ZWwgYWxpcXVhbSBmZXJtZW50dW0uXCI7XG4gICAgZGVzY1RleHQuY2xhc3NOYW1lID0gJ2Rlc2MtdGV4dCc7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZXNjLWJ0bic7XG4gICAgY29uc3QgZGVzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlc2NCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuICAgIGRlc2NCdG4uY2xhc3NOYW1lID0gJ2J0bic7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYnRuSW1nLnNyYyA9IG9rO1xuICAgIGJ0bkltZy5jbGFzc05hbWUgPSAnYnRuLWltYWdlJzsgXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NCdG4pXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY0ltYWdlKTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjVGV4dCk7XG4gICAgZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICAgIHJldHVybiBkZXNDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIC8vIHJlbW92ZSB0aGUgbWFpbiBjb250ZW50IGlmIHRoZXJlIGlzXG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgaWYocHJldikgcHJldi5yZW1vdmUoKTsgXG5cbiAgICAvLyBjcmVhdGUgbmV3IG9uZVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gXCJtYWluXCI7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcbiAgICBcbiAgICAvL2NyZWF0ZSBhIHdpZGUgZGl2IGZvciBmZWF0dXJlIGZvb2RcbiAgICBjb25zdCBmZWF0dXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkLmNsYXNzTmFtZSA9IFwiZmVhdHVyZWRcIjtcbiAgICB1dGlsLm5vZGVSZXNpemUoZmVhdHVyZWQsICcxNTB2dycgLCAnMTIwdncnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyAsIFxuICAgICAgICAoKSA9PiB1dGlsLm5vZGVSZXNpemUoZmVhdHVyZWQsICcxNTB2dycgLCAnMTIwdncnKSxcbiAgICAgICAgZmFsc2UpO1xuXG4gICAgLy8gZmVhdHVyZWRCZy5pZD0nPGEgaHJlZj1cImh0dHA6Ly93d3cuZnJlZXBpay5jb21cIj5EZXNpZ25lZCBieSByb3Nlcm9kaW9ub3ZhIC8gRnJlZXBpazwvYT4nO1xuICAgIC8vIGZlYXR1cmVkLmFwcGVuZENoaWxkKGZlYXR1cmVkQmcpO1xuICAgIGZlYXR1cmVkLmFwcGVuZENoaWxkKGNyZWF0ZVNjaGVkdWxlKCkpO1xuICAgIGZlYXR1cmVkLmFwcGVuZENoaWxkKGNyZWF0ZVRhZ2xpbmUoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmZWF0dXJlZCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXNjcmlwdGlvbigpKTtcbiAgICB1dGlsLmluc2VydFRvTWFpbihjb250ZW50KTtcbiAgICByZXR1cm4gJ2hvbWUnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lOyIsIlxuLy8gcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3Mgb24gZXZlcnkgbm9kZXMgaW4gYW4gYXJyYXkgb2YgSFRNTCBlbGVtZW50c1xuY29uc3QgcmVtb3ZlQWN0aXZlTGlzdCA9IChhcnIpID0+e1xuICAgIGFyci5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxufVxuXG4vLyBoaWRlIG5vZGUgaWYgdmlld3BvcnQgaXMgc21hbGxcbmNvbnN0IGNoZWNrVmlld3BvcnQgPSAobm9kZSkgPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNzAwKSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNzAwKSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWxzZSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG59XG4vLyByZXNpemUgbm9kZSBiYWNrZ3JvdW5kIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBub2RlUmVzaXplID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCA3MDApICB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICd0b3AnO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWluO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJ2NlbnRlcic7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBtYXg7XG4gICAgfVxufVxuLy8gaW5zZXJ0IHRvIG1haW4tY29udGFpbmVyXG5jb25zdCBpbnNlcnRUb01haW4gPSAoY29udGVudCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cblxuXG5leHBvcnQge1xuICAgIGluc2VydFRvTWFpbixcbiAgICByZW1vdmVBY3RpdmVMaXN0LFxuICAgIGNoZWNrVmlld3BvcnQsXG4gICAgbm9kZVJlc2l6ZVxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZlYXR1cmVke1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluKDQwMHB4LCA0NXZoKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3A0MDU2MTkxLmpwZykgbm8tcmVwZWF0IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwZW0gMTBlbSAjMDAwMDAwNjA7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDFmciAxZnI7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+ICp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6Zmlyc3QtY2hpbGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2MHB4LCAxMnZoLCAxNDBweCk7XFxuICAgIG1hcmdpbjotMTBweCAwO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgMTB2aCwgMTAwcHgpO1xcbiAgICBtYXJnaW46LTEwcHggMDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDZ2aCwgNjBweCk7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpsYXN0LWNoaWxke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgNnZoLCA0MHB4KTtcXG59XFxuLnNjaGVkdWxlLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcmlnaHQ6MDtcXG59XFxuLnNjaGVkdWxle1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY2YztcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC1oZWFkZXJ7XFxuICAgIGhlaWdodDo0JTsgXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDN2aCwgMnJlbSk7XFxuICAgIG1hcmdpbjowO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC10YWJsZSA+ICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24rMyl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWNhYzFjO1xcbiAgICBtYXJnaW46IDAgNXB4XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24gKyAyKXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDAwMDtcXG59XFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLWxlZnQ6Y2xhbXAoMTUlLCAydncsIDI1JSk7XFxuICAgIG1hcmdpbi1yaWdodDpjbGFtcCgxNSUsIDJ2dywgMjUlKTtcXG4gICAgaGVpZ2h0OjUwMHB4O1xcbiAgICBwYWRkaW5nOjIwcHg7XFxufVxcbi5kZXNjcmlwdGlvbntcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZGVzYy1pbWFnZXtcXG4gICAgaGVpZ2h0OmNsYW1wKDEwMHB4LCAyMHZ3LCAyNTBweCk7XFxufVxcbi5kZXNjLXRleHR7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwydncsMjVweCk7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCAzdncsIDIwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGVzYy1idG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogbWluKDIwMHB4LDMwJSk7XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDcwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxufVxcbi5idG4taW1hZ2V7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDJFQUEyRTtJQUMzRSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osT0FBTztBQUNYO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFNBQVM7SUFDVCx3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQztBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmVhdHVyZWR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBtaW4oNDAwcHgsIDQ1dmgpO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDQwNTYxOTEuanBnKSBuby1yZXBlYXQgcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBlbSAxMGVtICMwMDAwMDA2MDtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyZnIgMWZyIDFmcjtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gKntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpmaXJzdC1jaGlsZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDYwcHgsIDEydmgsIDE0MHB4KTtcXG4gICAgbWFyZ2luOi0xMHB4IDA7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMil7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg1MHB4LCAxMHZoLCAxMDBweCk7XFxuICAgIG1hcmdpbjotMTBweCAwO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bnRoLWNoaWxkKDMpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMzBweCwgNnZoLCA2MHB4KTtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOmxhc3QtY2hpbGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCA2dmgsIDQwcHgpO1xcbn1cXG4uc2NoZWR1bGUtY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICByaWdodDowO1xcbn1cXG4uc2NoZWR1bGV7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjZjO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuLnNjaGVkLWhlYWRlcntcXG4gICAgaGVpZ2h0OjQlOyBcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgM3ZoLCAycmVtKTtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNjaGVkLXRhYmxle1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuLnNjaGVkLXRhYmxlID4gKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnNjaGVkLXRhYmxlID4gOm50aC1jaGlsZCgzbiszKXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxY2FjMWM7XFxuICAgIG1hcmdpbjogMCA1cHhcXG59XFxuLnNjaGVkLXRhYmxlID4gOm50aC1jaGlsZCgzbiArIDIpe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjMDAwMDAwO1xcbn1cXG4uZGVzY3JpcHRpb24tY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tbGVmdDpjbGFtcCgxNSUsIDJ2dywgMjUlKTtcXG4gICAgbWFyZ2luLXJpZ2h0OmNsYW1wKDE1JSwgMnZ3LCAyNSUpO1xcbiAgICBoZWlnaHQ6NTAwcHg7XFxuICAgIHBhZGRpbmc6MjBweDtcXG59XFxuLmRlc2NyaXB0aW9ue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5kZXNjLWltYWdle1xcbiAgICBoZWlnaHQ6Y2xhbXAoMTAwcHgsIDIwdncsIDI1MHB4KTtcXG59XFxuLmRlc2MtdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LDJ2dywyNXB4KTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4uYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIDN2dywgMjBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5kZXNjLWJ0bntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiBtaW4oMjAwcHgsMzAlKTtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzExMztcXG59XFxuLmJ0bi1pbWFnZXtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmZhbWlseT1SYWxld2F5OndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4jaGVhZGVye1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sb2dve1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbn1cXG4ubG9nb1RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6ICNmNWMxMTM7XFxuICAgIHRleHQtc2hhZG93OiAwIDFweCAjMjcyNzI3LCAwIC0xcHggIzI3MjcyNyxcXG4gICAgICAgIDFweCAwICMyNzI3MjcsIC0xcHggMCAjMjcyNzI3O1xcbn1cXG4ubGluay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NztcXG59XFxuI2xpbmtze1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4jbGlua3MgPiBhe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW46IDBweCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyxcXG4gICAgICAgIG9wYWNpdHkgMC40cztcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjMwcHg7XFxuICAgIHJpZ2h0OjMwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmFjdGl2ZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKXtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTpob3ZlcntcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphY3RpdmV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuI2xpbmtzID4gYTphZnRlcntcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzLFxcbiAgICAgICAgbGVmdCAwLjNzLFxcbiAgICAgICAgcmlnaHQgMC4zcztcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjEwMHB4O1xcbiAgICByaWdodDoxMDBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTpob3ZlcjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDozMHB4O1xcbiAgICByaWdodDozMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5hY3RpdmU6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDoyMHB4O1xcbiAgICByaWdodDoyMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5mZWF0dXJlZHtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2F0aXNmeSc7XFxuICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zYXRpc2Z5L3YxMS9yUDJIcDJ5bjZsa0c1MExvQ1pPSUhRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy93b3Jrc2Fucy92OS9RR1lfel93TmFoR0FkcVE0M1JoVmNJZ1lUMlh6NXUzMkswblhCaThKcGcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Q7cUNBQ2lDO0FBQ3JDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtvQkFDZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJOztrQkFFYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0Qiw4RkFBOEY7QUFDbEc7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixrSEFBa0g7QUFDdEhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAOTAwJmRpc3BsYXk9c3dhcCcpO1xcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG59XFxuLmxvZ29UZXh0e1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiAjZjVjMTEzO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggIzI3MjcyNywgMCAtMXB4ICMyNzI3MjcsXFxuICAgICAgICAxcHggMCAjMjcyNzI3LCAtMXB4IDAgIzI3MjcyNztcXG59XFxuLmxpbmstY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XFxufVxcbiNsaW5rc3tcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuI2xpbmtzID4gYXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MsXFxuICAgICAgICBvcGFjaXR5IDAuNHM7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDozMHB4O1xcbiAgICByaWdodDozMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5hY3RpdmV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSl7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWN0aXZle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNsaW5rcyA+IGE6YWZ0ZXJ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyxcXG4gICAgICAgIGxlZnQgMC4zcyxcXG4gICAgICAgIHJpZ2h0IDAuM3M7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDoxMDBweDtcXG4gICAgcmlnaHQ6MTAwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6aG92ZXI6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MzBweDtcXG4gICAgcmlnaHQ6MzBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uYWN0aXZlOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MjBweDtcXG4gICAgcmlnaHQ6MjBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uZmVhdHVyZWR7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcblxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NhdGlzZnknO1xcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc2F0aXNmeS92MTEvclAySHAyeW42bGtHNTBMb0NaT0lIUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvd29ya3NhbnMvdjkvUUdZX3pfd05haEdBZHFRNDNSaFZjSWdZVDJYejV1MzJLMG5YQmk4SnBnLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tICcuL3NjcmlwdHMvaG9tZS5qcyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vc2NyaXB0cy91dGlsLmpzJztcbmltcG9ydCBsb2cgZnJvbSAnLi9pbWFnZXMvbG9nbzIucG5nJztcblxuXG5cbmNvbnN0IHNvbWV0aGluZyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnd2F3Jylcbn1cbmxldCBjdXJyZW50ID0gJ2hvbWUnO1xubGV0IHRhYkZ1bmN0aW9uID0ge1xuICAgIGhvbWU6IGNyZWF0ZUhvbWUsXG4gICAgbWVudTogc29tZXRoaW5nLFxuICAgIGNvbnRhY3Q6IHNvbWV0aGluZ1xufVxuZnVuY3Rpb24gaW5pdGlhdGVQYWdlKCl7XG4gICAgLy8gZ2V0IGRpdiNjb250ZW50XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgdGhlIGhlYWRlclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gY29udGFpbmVyIGZvciBsaW5rcyB0byBjZW50ZXIgdGhlIHRleHQgXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAvLyBsaW5rcyBzdWJjb250YWluZXIsIHVzZSBmb3Igbm90IGFmZmVjdGluZyB0aGUgb3RoZXIgbGluayB3aGVuIGhvdmVyaW5nXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5rQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibGluay1jb250YWluZXJcIjtcbiAgICBsaW5rcy5pZCA9IFwibGlua3NcIjtcbiAgICBjb250YWluZXIuaWQgPSBcImhlYWRlclwiO1xuXG4gICAgLy8gY3JlYXRlIGxvZ28gdGVtcGxhdGUgZm9yIHRoZSB3ZWJwYWdlXG4gICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ29UZXh0LmNsYXNzTmFtZSA9IFwibG9nb1RleHRcIjtcbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nb1RleHQudGV4dENvbnRlbnQgPSBcIkJvcmdpciBGZXZlclwiO1xuICAgIGxvZ28uY2xhc3NOYW1lID0gXCJsb2dvXCI7XG4gICAgbG9nby5zcmMgPSBsb2dcblxuICAgIC8vIGNyZWF0ZSB0aGUgZWxlbWVudCBmb3IgdGhlIGxpbmtzXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZS5pZCA9IFwiaG9tZVwiO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCI7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgY29uc3QgdGFiTGlzdCA9IHtob21lLG1lbnUsIGNvbnRhY3R9XG5cbiAgICAvLyBpbnNlcnQgdGhlIGVsZW1lbnRzIHRvIGFuIG9iamVjdCBzbyBvdGhlciBzY3JpcHRzIHdpbGwgYmUgYWJsZSB0byBhY2Nlc3MgdGhlIGVsZW1lbnRzLlxuICAgIHRhYkxpc3RbY3VycmVudF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAvLyBzZXQgb25jbGljayBmdW5jdGlvbmFsaXR5IGZvciB0aGUgbGlua1xuICAgIE9iamVjdC52YWx1ZXModGFiTGlzdCkuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsaW5rLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZighbGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gbGluay5pZDtcbiAgICAgICAgICAgICAgICB1dGlsLnJlbW92ZUFjdGl2ZUxpc3QoT2JqZWN0LnZhbHVlcyh0YWJMaXN0KSk7XG4gICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIHRhYkZ1bmN0aW9uW2N1cnJlbnRdKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBhZGQgdGhlIGxpbmtzIHRvIHRoZSBzdWJjb250YWluZXJcbiAgICBPYmplY3QudmFsdWVzKHRhYkxpc3QpLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGlua3MuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG5cbiAgICBmb290ZXIuY2xhc3NOYW1lID0gXCJmb290ZXJcIjtcblxuICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBjb250ZW50IG9mIGVhY2ggdGFiXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG5cbiAgICAvLyBhZGQgdGhlIHN1YmNvbnRhaW5lciB0byB0aGUgbWFpbiBsaW5rIGNvbnRhaW5lclxuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua3MpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pOyAvLyBhZGQgdGhlIGxvZ28gaW4gYSBjb250YWluZXIgdG8gY2VudGVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTsgXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpOyAvLyBhZGQgdGhlIGxvZ28gZmlyc3QgYmVjYXVzZVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7IC8vIGluc2VydCB0aGUgbGlua3MgYWZ0ZXJcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn0gICBcblxuXG5cbmluaXRpYXRlUGFnZSgpO1xuY3JlYXRlSG9tZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==