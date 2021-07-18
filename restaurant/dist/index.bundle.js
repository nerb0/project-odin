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

/***/ "./src/images/3.png":
/*!**************************!*\
  !*** ./src/images/3.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fba0f953309ce40cdb4d.png";

/***/ }),

/***/ "./src/images/4.png":
/*!**************************!*\
  !*** ./src/images/4.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cdf56b472ca5a8b2ecf7.png";

/***/ }),

/***/ "./src/images/5.png":
/*!**************************!*\
  !*** ./src/images/5.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42ed44846862d620a86c.png";

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

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26115b1db8eb442d5280.png";

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/map.png */ "./src/images/map.png");
/* harmony import */ var _images_5_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/5.png */ "./src/images/5.png");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
/* 
import '../styles/style.css';
import '../styles/contact.css'; 
*/





// initialization of the contacts container
function createInfo(){
}

// initialization of the map container
function createMap(){
    const mapContainer = document.createElement('div');
    mapContainer.className = "map-container";

    // create node for the map
    const mapImage = new Image();
    mapImage.src = _images_map_png__WEBPACK_IMPORTED_MODULE_0__;
    mapImage.className = "map-image";

    // create container for the arrow and the message
    const mapGps = document.createElement('a');
    mapGps.href = "https://www.google.com/maps/place/Borgir,+Reykjav%C3%ADk,+Iceland/@64.153419,-21.7948849,16z/data=!3m1!4b1!4m5!3m4!1s0x48d6746b117bf057:0x572733c919578781!8m2!3d64.1529167!4d-21.7914103"
    mapGps.target = "_blank";
    mapGps.className = "map-gps";
    const mapMessage = document.createElement('a');
    mapMessage.className = 'map-message';

    // set the image for the arrow
    const mapArrow = new Image();
    mapArrow.src = _images_5_png__WEBPACK_IMPORTED_MODULE_1__;
    mapArrow.className = 'map-arrow';

    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(mapGps, [mapArrow,mapMessage]);
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(mapContainer, [mapImage,mapGps]);
    return mapContainer;
}

function createContact(){
    const content = _util_js__WEBPACK_IMPORTED_MODULE_2__.createContainer('main');

    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(content, [createMap()])
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertTo(content, 'main-container')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

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
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/4.png */ "./src/images/4.png");
/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/1.png */ "./src/images/1.png");
/* 
import '../styles/style.css';
import '../styles/home.css'; 
*/





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
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(taglineContainer, [firstTag, secondTag, dogtag, esetag]);   
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
    _util_js__WEBPACK_IMPORTED_MODULE_0__.checkViewport(scheduleContainer, 900, 'block');


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
    descImage.src = _images_4_png__WEBPACK_IMPORTED_MODULE_1__;
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
    btnImg.src = _images_1_png__WEBPACK_IMPORTED_MODULE_2__;
    btnImg.className = 'btn-image';
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(btnContainer, [btnImg, descBtn]);
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(description, [descImage, descText, btnContainer]);
    desContainer.appendChild(description);
    return desContainer;
}


function createHome(){
    const content = _util_js__WEBPACK_IMPORTED_MODULE_0__.createContainer('main');

    //create a wide div for feature food
    const featured = document.createElement('div');
    featured.className = "featured";
    _util_js__WEBPACK_IMPORTED_MODULE_0__.nodeResize(featured, '160vw' , '130vw');
    window.addEventListener('resize' , 
        () => _util_js__WEBPACK_IMPORTED_MODULE_0__.nodeResize(featured, '150vw' , '120vw'),
        false);

    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(featured, [createSchedule(), createTagline()]);
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(content,[featured,createDescription()])
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertTo(content, 'main-container');
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
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
/* harmony import */ var _images_logo2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo2.png */ "./src/images/logo2.png");
/* harmony import */ var _images_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/3.png */ "./src/images/3.png");
/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/4.png */ "./src/images/4.png");
/* 
import '../styles/style.css';
import '../styles/menu.css'; 
*/





const options = {
    burgers: [_images_logo2_png__WEBPACK_IMPORTED_MODULE_1__, "Burger"],
    drinks: [_images_3_png__WEBPACK_IMPORTED_MODULE_2__, "Drink"],
    combos: [_images_4_png__WEBPACK_IMPORTED_MODULE_3__, "Combo"],
}

function createMeals(len, type){
    const mealSubContainer = _util_js__WEBPACK_IMPORTED_MODULE_0__.createContainer('mealSubContainer');
    mealSubContainer.className = "meal-sub-container";
    if(window.innerWidth < 1160) mealSubContainer.style.gridTemplateColumns = `repeat(${Math.floor(window.innerWidth/200)}, 1fr)`;
    else mealSubContainer.style.gridTemplateColumns = 'repeat(5, 1fr)';
     
    window.addEventListener('resize', () => {
        if(window.innerWidth < 1160) mealSubContainer.style.gridTemplateColumns = `repeat(${Math.floor(window.innerWidth/200)}, 1fr)`;
        else mealSubContainer.style.gridTemplateColumns = `repeat(5, 1fr)`;;
    })
    const meals = [];
    for(let i = 0; i < len; i++){
        const meal = document.createElement('div');
        const mealImage = new Image();
        mealImage.src = type[0];
        mealImage.className = 'meal-image';
        const mealName = document.createElement('h1');
        mealName.textContent = `${type[1]}[${i}]`;
        mealName.className = 'meal-name';
        const mealPrice = document.createElement('p');
        mealPrice.textContent = `${Math.floor(Math.random() * 20 + 20) + i}.00`;
        mealPrice.className = 'meal-price';

        // Remove the duplicating borders;
        _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(meal, [mealImage, mealName, mealPrice]);
        meals.push(meal);
    }
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(mealSubContainer, meals);
    return mealSubContainer;
}

function initiateMeal(len, type){
    const mealContainer = _util_js__WEBPACK_IMPORTED_MODULE_0__.createContainer('meal-container');
    mealContainer.className = 'meal-container';
    const mealSubContainer = createMeals(len, type);
    
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(mealContainer, [mealSubContainer]);
    return mealContainer;
}

function createOptions(){
    const optionsContainer = document.createElement('div');
    optionsContainer.className = "options-container";
    _util_js__WEBPACK_IMPORTED_MODULE_0__.checkViewport(optionsContainer, 1160, 'grid');

    const burgerOpt = document.createElement('button');
    burgerOpt.textContent = "Burgers";
    burgerOpt.id = "burgers";
    burgerOpt.className = "current";
    const drinksOpt = document.createElement('button');
    drinksOpt.textContent = "Drinks";
    drinksOpt.id = "drinks";
    const comboOpt = document.createElement('button');
    comboOpt.textContent = "Combos";
    comboOpt.id = "combos";

    let buttons = [burgerOpt, drinksOpt, comboOpt];
    buttons.forEach((button) => {
        button.classList.add("btn");
        button.onclick = () =>{
            if(!button.classList.contains('current')){
                const newMeal = createMeals(Math.floor(Math.random() * 8 + 2), options[button.id]);
                _util_js__WEBPACK_IMPORTED_MODULE_0__.insertTo(newMeal, 'meal-container');
                _util_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(buttons, 'current')
                button.classList.add('current')
            }
            
        }
    })

    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(optionsContainer, buttons);
    return optionsContainer;
}

function createMenu(){
    const content = _util_js__WEBPACK_IMPORTED_MODULE_0__.createContainer('main');
    const menuContainer = document.createElement('div');
    menuContainer.className = "menu-container";
    if(window.innerWidth < 1160) menuContainer.style.gridTemplateColumns = '1fr';
    else menuContainer.style.gridTemplateColumns = '8fr 2fr';
     
    window.addEventListener('resize', () => {
        if(window.innerWidth < 1160) menuContainer.style.gridTemplateColumns = '1fr';
        else menuContainer.style.gridTemplateColumns = '8fr 2fr';
    })
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(menuContainer, [initiateMeal(9, options.burgers), createOptions()]);
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(content, [menuContainer]);
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertTo(content, 'main-container');
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
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "insertTo": () => (/* binding */ insertTo),
/* harmony export */   "insertChildren": () => (/* binding */ insertChildren),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "checkViewport": () => (/* binding */ checkViewport),
/* harmony export */   "nodeResize": () => (/* binding */ nodeResize)
/* harmony export */ });

// remove the active class on every nodes in an array of HTML elements
const removeClass = (arr, c) => {
    arr.forEach((node) => node.classList.remove(c))
}

// hide node if viewport is small
const checkViewport = (node, size, display) => {
    if(window.innerWidth < size) node.style.display = "none";
    else node.style.display = display;
    
    window.addEventListener('resize',() => {
        if(window.innerWidth < size) node.style.display = "none";
        else node.style.display = display;
    }, false);
}
// resize node background if viewport is small
const nodeResize = (node, min, max) => {
    if(window.innerWidth < 1200)  {
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
const insertTo = (content, parent) => document.getElementById(parent).appendChild(content);
const createContainer = (id) =>{
    // remove the main content if there is
    const prev = document.getElementById(id);
    if(prev) prev.remove(); 

    // create new one
    const content = document.createElement('div');
    content.id = id;
    return content;
}




/***/ }),

/***/ "../../../../node_modules/css-loader/dist/cjs.js!./src/styles/contact.css":
/*!********************************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/cjs.js!./src/styles/contact.css ***!
  \********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".map-container{\n    position: relative;\n    width: 100%;\n}\n.map-image{\n    width:100%;\n}\n.map-gps{\n    position:absolute;\n    display: grid;\n    grid-template-rows: 8fr 1fr;\n    top: 45%;\n    right: 50%;\n    text-align: center;\n    font-family: 'Work Sans';\n    font-size: clamp(10px, 2vw, 13px);\n}\n.map-arrow{\n    position: relative;\n    height: min(3vw, 50px)\n}\n.map-message{\n    position:relative;\n}\n.map-arrow:hover{\n    height: min(3.2vw, 55px)\n}\n.map-message::after{\n    text-decoration: none;\n    position:absolute;\n    content: \"\";\n    opacity: 0;\n    width: 100px;\n    left:-25px;\n    transition: opacity 0.4s;\n    color:black\n}\n.map-arrow:hover + .map-message::after{\n    opacity: 1;\n    content: \"We are here\";\n}", "",{"version":3,"sources":["webpack://./src/styles/contact.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,2BAA2B;IAC3B,QAAQ;IACR,UAAU;IACV,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;AACrC;AACA;IACI,kBAAkB;IAClB;AACJ;AACA;IACI,iBAAiB;AACrB;AACA;IACI;AACJ;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB;AACJ;AACA;IACI,UAAU;IACV,sBAAsB;AAC1B","sourcesContent":[".map-container{\n    position: relative;\n    width: 100%;\n}\n.map-image{\n    width:100%;\n}\n.map-gps{\n    position:absolute;\n    display: grid;\n    grid-template-rows: 8fr 1fr;\n    top: 45%;\n    right: 50%;\n    text-align: center;\n    font-family: 'Work Sans';\n    font-size: clamp(10px, 2vw, 13px);\n}\n.map-arrow{\n    position: relative;\n    height: min(3vw, 50px)\n}\n.map-message{\n    position:relative;\n}\n.map-arrow:hover{\n    height: min(3.2vw, 55px)\n}\n.map-message::after{\n    text-decoration: none;\n    position:absolute;\n    content: \"\";\n    opacity: 0;\n    width: 100px;\n    left:-25px;\n    transition: opacity 0.4s;\n    color:black\n}\n.map-arrow:hover + .map-message::after{\n    opacity: 1;\n    content: \"We are here\";\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ".featured{\n    box-sizing: border-box;\n    position: relative;\n    height: min(400px, 45vh);\n    background: url(https://wallpapercave.com/wp/wp4056191.jpg) no-repeat right;\n    background-attachment: fixed;\n    background-position-y: center;\n    box-shadow: inset 0 0 10em 10em #00000060;\n    padding:10px;\n    background-size: 100vw;\n    width: 100%;\n}\n.tagline-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: 2fr 2fr 1fr 1fr;\n    padding:10px;\n    height:100%;\n    width: 80%;\n}\n.tagline-container > *{\n    display: flex;\n    font-family: 'Montserrat';\n    font-weight: 900;\n    margin: 0;\n    align-items: center;\n    justify-content: flex-start;\n    box-sizing: border-box;\n}\n.tagline-container > :first-child{\n    color: white;\n    font-size: clamp(60px, 12vh, 140px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(2){\n    color: white;\n    font-size: clamp(50px, 10vh, 100px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(3){\n    color: white;\n    font-size: clamp(30px, 6vh, 60px);\n}\n.tagline-container > :last-child{\n    color: white;\n    font-size: clamp(20px, 6vh, 40px);\n}\n.schedule-container{\n    box-sizing: border-box;\n    position: absolute;\n    padding: 10px;\n    height: 100%;\n    width: 300px;\n    right:0;\n}\n.schedule{\n    box-sizing:border-box;\n    padding: 10px;\n    background-color: #f5c01380;\n    height: 90%;\n}\n.sched-header{\n    height:4%; \n    font-family: 'Work Sans';\n    font-size: clamp(1.2rem, 3vh, 2rem);\n    margin:0;\n    text-align: center;\n}\n.sched-table{\n    box-sizing: border-box;\n    display: grid;\n    font-family: 'Montserrat';\n    padding: 10px;\n    font-size: 13px;\n    grid-template-columns: 1fr 2fr 1fr;\n    width: 100%;\n    height: 90%;\n}\n.sched-table > *{\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n}\n.sched-table > :nth-child(3n+3){\n    box-sizing: border-box;\n    border-bottom: 2px solid #1cac1c;\n    font-weight: 700;\n    color:white;\n    margin: 0 5px\n}\n.sched-table > :nth-child(3n + 2){\n    width: 100%;\n    border-bottom: 1px dotted #000000;\n}\n.description-container{\n    box-sizing: border-box;\n    margin-top: 50px;\n    margin-left:clamp(15%, 2vw, 25%);\n    margin-right:clamp(15%, 2vw, 25%);\n    padding:20px;\n}\n.desc-image{\n    height:clamp(100px, 20vw, 250px);\n}\n.desc-text{\n    font-family: 'Montserrat';\n    font-size: clamp(14px,2vw,25px);\n    margin-top: 50px;\n    text-align: justify;\n    word-wrap: break-word;\n}\n.desc-btn{\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 25px;\n    width: min(200px,30%);\n    padding: 8px 20px;\n    border-radius: 100px;\n    margin: 50px auto;\n    background-color: #f5c113;\n}\n.btn-image{\n    text-align: left;\n    height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,wBAAwB;IACxB,2EAA2E;IAC3E,4BAA4B;IAC5B,6BAA6B;IAC7B,yCAAyC;IACzC,YAAY;IACZ,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,UAAU;AACd;AACA;IACI,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,SAAS;IACT,mBAAmB;IACnB,2BAA2B;IAC3B,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,cAAc;AAClB;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,cAAc;AAClB;AACA;IACI,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,YAAY;IACZ,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,OAAO;AACX;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,2BAA2B;IAC3B,WAAW;AACf;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,mCAAmC;IACnC,QAAQ;IACR,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,eAAe;IACf,kCAAkC;IAClC,WAAW;IACX,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,qBAAqB;IACrB,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,gCAAgC;IAChC,gBAAgB;IAChB,WAAW;IACX;AACJ;AACA;IACI,WAAW;IACX,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,gCAAgC;IAChC,iCAAiC;IACjC,YAAY;AAChB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,yBAAyB;IACzB,+BAA+B;IAC/B,gBAAgB;IAChB,mBAAmB;IACnB,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,YAAY;AAChB","sourcesContent":[".featured{\n    box-sizing: border-box;\n    position: relative;\n    height: min(400px, 45vh);\n    background: url(https://wallpapercave.com/wp/wp4056191.jpg) no-repeat right;\n    background-attachment: fixed;\n    background-position-y: center;\n    box-shadow: inset 0 0 10em 10em #00000060;\n    padding:10px;\n    background-size: 100vw;\n    width: 100%;\n}\n.tagline-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: 2fr 2fr 1fr 1fr;\n    padding:10px;\n    height:100%;\n    width: 80%;\n}\n.tagline-container > *{\n    display: flex;\n    font-family: 'Montserrat';\n    font-weight: 900;\n    margin: 0;\n    align-items: center;\n    justify-content: flex-start;\n    box-sizing: border-box;\n}\n.tagline-container > :first-child{\n    color: white;\n    font-size: clamp(60px, 12vh, 140px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(2){\n    color: white;\n    font-size: clamp(50px, 10vh, 100px);\n    margin:-10px 0;\n}\n.tagline-container > :nth-child(3){\n    color: white;\n    font-size: clamp(30px, 6vh, 60px);\n}\n.tagline-container > :last-child{\n    color: white;\n    font-size: clamp(20px, 6vh, 40px);\n}\n.schedule-container{\n    box-sizing: border-box;\n    position: absolute;\n    padding: 10px;\n    height: 100%;\n    width: 300px;\n    right:0;\n}\n.schedule{\n    box-sizing:border-box;\n    padding: 10px;\n    background-color: #f5c01380;\n    height: 90%;\n}\n.sched-header{\n    height:4%; \n    font-family: 'Work Sans';\n    font-size: clamp(1.2rem, 3vh, 2rem);\n    margin:0;\n    text-align: center;\n}\n.sched-table{\n    box-sizing: border-box;\n    display: grid;\n    font-family: 'Montserrat';\n    padding: 10px;\n    font-size: 13px;\n    grid-template-columns: 1fr 2fr 1fr;\n    width: 100%;\n    height: 90%;\n}\n.sched-table > *{\n    box-sizing: border-box;\n    display: flex;\n    align-items: flex-end;\n    justify-content: center;\n}\n.sched-table > :nth-child(3n+3){\n    box-sizing: border-box;\n    border-bottom: 2px solid #1cac1c;\n    font-weight: 700;\n    color:white;\n    margin: 0 5px\n}\n.sched-table > :nth-child(3n + 2){\n    width: 100%;\n    border-bottom: 1px dotted #000000;\n}\n.description-container{\n    box-sizing: border-box;\n    margin-top: 50px;\n    margin-left:clamp(15%, 2vw, 25%);\n    margin-right:clamp(15%, 2vw, 25%);\n    padding:20px;\n}\n.desc-image{\n    height:clamp(100px, 20vw, 250px);\n}\n.desc-text{\n    font-family: 'Montserrat';\n    font-size: clamp(14px,2vw,25px);\n    margin-top: 50px;\n    text-align: justify;\n    word-wrap: break-word;\n}\n.desc-btn{\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 25px;\n    width: min(200px,30%);\n    padding: 8px 20px;\n    border-radius: 100px;\n    margin: 50px auto;\n    background-color: #f5c113;\n}\n.btn-image{\n    text-align: left;\n    height: 100%;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".menu-container{\n    display:grid;\n    grid-template-columns: 8fr 2fr;\n    width: 100%;\n    min-height: 800px;\n}\n.meal-container{\n    padding:10px;\n    border-right: 1px solid #e0e0e0;\n}\n.meal-sub-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    border: 1px solid #f5c113;\n}\n.meal-sub-container > div{\n    cursor: pointer;\n    padding:10px 5px;\n    position: relative;\n    height: min(300px, 30vw);\n    transition: background-color 0.3s;\n    text-align: center;\n}\n.meal-sub-container > div:hover{\n    background-color: #f5c113;\n}\n.meal-sub-container > div:hover::after{\n    border-color: white;    \n}\n.meal-name{\n    font-size: clamp(10px, 4vw, 30px);\n    font-family: 'Work Sans';\n}\n.meal-image{\n    height: min(50%, 200px);\n}\n.meal-price{\n    font-family: 'Work Sans';\n    text-align: center;\n    background-color: #f5c113;\n    width:60px;\n    border-radius: 10px;\n    transition: background-color 0.3s;\n}\n.meal-sub-container > div:hover .meal-price{\n    background-color: white;\n}\n.meal-sub-container > div::after{\n    position: absolute;\n    content: \"\";\n    padding: 3px;\n    display: inline-block;\n    border-right:3px solid #f5c113;\n    border-bottom:3px solid #f5c113;\n    transform: rotate(-45deg);\n    right: 10px;\n    bottom:10px;\n}\n\n\n.options-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    height: 400px;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n}\n.options-container > button:not(.current){\n    box-sizing: border-box;\n    height:60px;\n    width:200px;\n    background-color: #f5c113;\n    border-radius: 50px;\n    transition: background-color 0.5s;\n}\n.options-container > button:hover:not(.current){\n    height:70px;\n}\n.options-container > button:active:not(.current){\n    height:55px;\n}\n.current{\n    cursor: default;\n    background-color: white;\n    border: 2px solid #f5c113;\n    height:60px;\n    width:200px;\n    border-radius: 50px\n}\n.no-border-right{\n    border-right: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,8BAA8B;IAC9B,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,+BAA+B;AACnC;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;IACjC,kBAAkB;AACtB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,iCAAiC;IACjC,wBAAwB;AAC5B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,yBAAyB;IACzB,UAAU;IACV,mBAAmB;IACnB,iCAAiC;AACrC;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,+BAA+B;IAC/B,yBAAyB;IACzB,WAAW;IACX,WAAW;AACf;;;AAGA;IACI,sBAAsB;IACtB,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,mBAAmB;IACnB,iCAAiC;AACrC;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;AACA;IACI,eAAe;IACf,uBAAuB;IACvB,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX;AACJ;AACA;IACI,kBAAkB;AACtB","sourcesContent":[".menu-container{\n    display:grid;\n    grid-template-columns: 8fr 2fr;\n    width: 100%;\n    min-height: 800px;\n}\n.meal-container{\n    padding:10px;\n    border-right: 1px solid #e0e0e0;\n}\n.meal-sub-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    border: 1px solid #f5c113;\n}\n.meal-sub-container > div{\n    cursor: pointer;\n    padding:10px 5px;\n    position: relative;\n    height: min(300px, 30vw);\n    transition: background-color 0.3s;\n    text-align: center;\n}\n.meal-sub-container > div:hover{\n    background-color: #f5c113;\n}\n.meal-sub-container > div:hover::after{\n    border-color: white;    \n}\n.meal-name{\n    font-size: clamp(10px, 4vw, 30px);\n    font-family: 'Work Sans';\n}\n.meal-image{\n    height: min(50%, 200px);\n}\n.meal-price{\n    font-family: 'Work Sans';\n    text-align: center;\n    background-color: #f5c113;\n    width:60px;\n    border-radius: 10px;\n    transition: background-color 0.3s;\n}\n.meal-sub-container > div:hover .meal-price{\n    background-color: white;\n}\n.meal-sub-container > div::after{\n    position: absolute;\n    content: \"\";\n    padding: 3px;\n    display: inline-block;\n    border-right:3px solid #f5c113;\n    border-bottom:3px solid #f5c113;\n    transform: rotate(-45deg);\n    right: 10px;\n    bottom:10px;\n}\n\n\n.options-container{\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    height: 400px;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n}\n.options-container > button:not(.current){\n    box-sizing: border-box;\n    height:60px;\n    width:200px;\n    background-color: #f5c113;\n    border-radius: 50px;\n    transition: background-color 0.5s;\n}\n.options-container > button:hover:not(.current){\n    height:70px;\n}\n.options-container > button:active:not(.current){\n    height:55px;\n}\n.current{\n    cursor: default;\n    background-color: white;\n    border: 2px solid #f5c113;\n    height:60px;\n    width:200px;\n    border-radius: 50px\n}\n.no-border-right{\n    border-right: none;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n    width:100vw;\n    overflow-x: hidden;\n}\n#header{\n    height: fit-content;\n    text-align: center;\n}\n.logo{\n    height: 40px;\n    margin-bottom: -15px;\n}\n.logoText{\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 0;\n    user-select: none;\n    color: #f5c113;\n    text-shadow: 0 1px #272727, 0 -1px #272727,\n        1px 0 #272727, -1px 0 #272727;\n}\n.link-container{\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #979797;\n}\n#links{\n    width: 350px;\n    height: 25px;\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    text-align: center;\n    align-items: flex-end;\n    user-select: none;\n    padding-bottom: 5px;\n}\n#links > a{\n    position: relative;\n    font-family: 'Work Sans';\n    font-size: 15px;\n    margin: 0px 10px;\n    transition: font-size 0.3s,\n        opacity 0.4s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active{\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active){\n    opacity: 0.5;\n}\n#links > a:not(.active):hover{\n    opacity: 1;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active):active{\n    font-size: 20px;\n}\n#links > a:after{\n    transition: opacity 0.5s,\n        left 0.3s,\n        right 0.3s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:100px;\n    right:100px;\n    bottom: -5px;\n}\n#links > a:not(.active):hover:after{\n    content: \"\";\n    position: absolute;\n    opacity: 0.4;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active::after{\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    border-bottom: 2px solid #272727;\n    left:20px;\n    right:20px;\n    bottom: -5px;\n}\n.featured{\n    width:100%;\n}\n.footer{\n    width:100%;\n    background-color: #575757;\n    padding: 5px 5px;\n    font-size: 12px;\n    font-family: 'Work Sans';\n    height: 25  px;\n    display: flex;\n    align-items: center;\n}\n.footer *{\n    margin: 0;\n}\n.footer a{\n    text-decoration: none;\n    font-weight: bold;\n    color: white;\n}\n.credits{\n    width: calc(100% - 50px);\n}\n.github{\n    padding:3px;\n    height: 20px;\n    border-radius: 50%;\n}\n.github:hover{\n    background-color: white;\n}\n#main{\n    animation: fade-in 1s;\n}\n.btn{\n    border: none;\n    background-color: transparent;\n    font-family: 'Montserrat';\n    font-size: clamp(12px, 3vw, 20px);\n    width: 100%;\n    text-align: center;\n    cursor: pointer;\n}\n@keyframes fade-in{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n}\n@font-face {\n    font-family: 'Satisfy';\n    src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Work Sans';\n    src: url(https://fonts.gstatic.com/s/worksans/v9/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2) format('woff2');\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,oBAAoB;AACxB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,mBAAmB;IACnB,SAAS;IACT,iBAAiB;IACjB,cAAc;IACd;qCACiC;AACrC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,gCAAgC;AACpC;AACA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,qCAAqC;IACrC,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,eAAe;IACf,gBAAgB;IAChB;oBACgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,UAAU;IACV,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;AACA;IACI;;kBAEc;AAClB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,UAAU;IACV,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,UAAU;IACV,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,cAAc;IACd,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,SAAS;AACb;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,6BAA6B;IAC7B,yBAAyB;IACzB,iCAAiC;IACjC,WAAW;IACX,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI,sBAAsB;IACtB,8FAA8F;AAClG;AACA;IACI,wBAAwB;IACxB,kHAAkH;AACtH","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway:wght@900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');\nbody{\n    margin: 0;\n    width:100vw;\n    overflow-x: hidden;\n}\n#header{\n    height: fit-content;\n    text-align: center;\n}\n.logo{\n    height: 40px;\n    margin-bottom: -15px;\n}\n.logoText{\n    font-family: 'Raleway';\n    font-size: 30px;\n    font-weight: bolder;\n    margin: 0;\n    user-select: none;\n    color: #f5c113;\n    text-shadow: 0 1px #272727, 0 -1px #272727,\n        1px 0 #272727, -1px 0 #272727;\n}\n.link-container{\n    display: flex;\n    justify-content: center;\n    border-bottom: 1px solid #979797;\n}\n#links{\n    width: 350px;\n    height: 25px;\n    display:grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    text-align: center;\n    align-items: flex-end;\n    user-select: none;\n    padding-bottom: 5px;\n}\n#links > a{\n    position: relative;\n    font-family: 'Work Sans';\n    font-size: 15px;\n    margin: 0px 10px;\n    transition: font-size 0.3s,\n        opacity 0.4s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active{\n    position: relative;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active){\n    opacity: 0.5;\n}\n#links > a:not(.active):hover{\n    opacity: 1;\n    cursor: pointer;\n    font-size: 18px;\n    font-weight: bold;\n}\n#links > a:not(.active):active{\n    font-size: 20px;\n}\n#links > a:after{\n    transition: opacity 0.5s,\n        left 0.3s,\n        right 0.3s;\n}\n#links > a:not(.active):after{\n    content: \"\";\n    position: absolute;\n    opacity: 0;\n    border-bottom: 2px solid #272727;\n    left:100px;\n    right:100px;\n    bottom: -5px;\n}\n#links > a:not(.active):hover:after{\n    content: \"\";\n    position: absolute;\n    opacity: 0.4;\n    border-bottom: 2px solid #272727;\n    left:30px;\n    right:30px;\n    bottom: -5px;\n}\n.active::after{\n    content: \"\";\n    position: absolute;\n    opacity: 1;\n    border-bottom: 2px solid #272727;\n    left:20px;\n    right:20px;\n    bottom: -5px;\n}\n.featured{\n    width:100%;\n}\n.footer{\n    width:100%;\n    background-color: #575757;\n    padding: 5px 5px;\n    font-size: 12px;\n    font-family: 'Work Sans';\n    height: 25  px;\n    display: flex;\n    align-items: center;\n}\n.footer *{\n    margin: 0;\n}\n.footer a{\n    text-decoration: none;\n    font-weight: bold;\n    color: white;\n}\n.credits{\n    width: calc(100% - 50px);\n}\n.github{\n    padding:3px;\n    height: 20px;\n    border-radius: 50%;\n}\n.github:hover{\n    background-color: white;\n}\n#main{\n    animation: fade-in 1s;\n}\n.btn{\n    border: none;\n    background-color: transparent;\n    font-family: 'Montserrat';\n    font-size: clamp(12px, 3vw, 20px);\n    width: 100%;\n    text-align: center;\n    cursor: pointer;\n}\n@keyframes fade-in{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n}\n@font-face {\n    font-family: 'Satisfy';\n    src: url(https://fonts.gstatic.com/s/satisfy/v11/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format('woff2');\n}\n@font-face {\n    font-family: 'Work Sans';\n    src: url(https://fonts.gstatic.com/s/worksans/v9/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXBi8Jpg.woff2) format('woff2');\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/contact.css":
/*!********************************!*\
  !*** ./src/styles/contact.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./contact.css */ "../../../../node_modules/css-loader/dist/cjs.js!./src/styles/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/contact.css */ "./src/styles/contact.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _scripts_home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/home.js */ "./src/scripts/home.js");
/* harmony import */ var _scripts_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _scripts_contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/contact.js */ "./src/scripts/contact.js");
/* harmony import */ var _scripts_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/util.js */ "./src/scripts/util.js");
/* harmony import */ var _images_logo2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/logo2.png */ "./src/images/logo2.png");
/* harmony import */ var _images_github_64_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/github-64.png */ "./src/images/github-64.png");













let current = 'contact';
let tabFunction = {
    home: _scripts_home_js__WEBPACK_IMPORTED_MODULE_4__.default,
    menu: _scripts_menu_js__WEBPACK_IMPORTED_MODULE_5__.default,
    contact: _scripts_contact_js__WEBPACK_IMPORTED_MODULE_6__.default
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

    const github = new Image()
    const about = document.createElement('a');
    about.href = "https://arch-bsoj.github.io/project-odin/";
    about.target = "_blank"
    github.className = 'github';
    github.src = _images_github_64_png__WEBPACK_IMPORTED_MODULE_9__;
    github.setAttribute('align', 'right')
    about.appendChild(github)
    credits.appendChild(creditLink);
    footer.appendChild(credits);
    footer.appendChild(about);
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
    logo.src = _images_logo2_png__WEBPACK_IMPORTED_MODULE_8__

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
                _scripts_util_js__WEBPACK_IMPORTED_MODULE_7__.removeClass(Object.values(tabList), 'active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9jb250YWN0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvY29udGFjdC5jc3M/MjFiNSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9ob21lLmNzcz8wMDAwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL21lbnUuY3NzP2Q5NjQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzk2MDQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFw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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLG9DOztBQUVBLGdDQUFnQztBQUNoQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLEM7OztBQUdBO0FBQ0EiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvY29udGFjdC5jc3MnOyBcbiovXG5cbmltcG9ydCBtYXAgZnJvbSAnLi4vaW1hZ2VzL21hcC5wbmcnO1xuaW1wb3J0IGFycm93IGZyb20gJy4uL2ltYWdlcy81LnBuZyc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5cbi8vIGluaXRpYWxpemF0aW9uIG9mIHRoZSBjb250YWN0cyBjb250YWluZXJcbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKXtcbn1cblxuLy8gaW5pdGlhbGl6YXRpb24gb2YgdGhlIG1hcCBjb250YWluZXJcbmZ1bmN0aW9uIGNyZWF0ZU1hcCgpe1xuICAgIGNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hcENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1hcC1jb250YWluZXJcIjtcblxuICAgIC8vIGNyZWF0ZSBub2RlIGZvciB0aGUgbWFwXG4gICAgY29uc3QgbWFwSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXBJbWFnZS5zcmMgPSBtYXA7XG4gICAgbWFwSW1hZ2UuY2xhc3NOYW1lID0gXCJtYXAtaW1hZ2VcIjtcblxuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBhcnJvdyBhbmQgdGhlIG1lc3NhZ2VcbiAgICBjb25zdCBtYXBHcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWFwR3BzLmhyZWYgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9Cb3JnaXIsK1JleWtqYXYlQzMlQURrLCtJY2VsYW5kL0A2NC4xNTM0MTksLTIxLjc5NDg4NDksMTZ6L2RhdGE9ITNtMSE0YjEhNG01ITNtNCExczB4NDhkNjc0NmIxMTdiZjA1NzoweDU3MjczM2M5MTk1Nzg3ODEhOG0yITNkNjQuMTUyOTE2NyE0ZC0yMS43OTE0MTAzXCJcbiAgICBtYXBHcHMudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBtYXBHcHMuY2xhc3NOYW1lID0gXCJtYXAtZ3BzXCI7XG4gICAgY29uc3QgbWFwTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBtYXBNZXNzYWdlLmNsYXNzTmFtZSA9ICdtYXAtbWVzc2FnZSc7XG5cbiAgICAvLyBzZXQgdGhlIGltYWdlIGZvciB0aGUgYXJyb3dcbiAgICBjb25zdCBtYXBBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICAgIG1hcEFycm93LnNyYyA9IGFycm93O1xuICAgIG1hcEFycm93LmNsYXNzTmFtZSA9ICdtYXAtYXJyb3cnO1xuXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtYXBHcHMsIFttYXBBcnJvdyxtYXBNZXNzYWdlXSk7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtYXBDb250YWluZXIsIFttYXBJbWFnZSxtYXBHcHNdKTtcbiAgICByZXR1cm4gbWFwQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCl7XG4gICAgY29uc3QgY29udGVudCA9IHV0aWwuY3JlYXRlQ29udGFpbmVyKCdtYWluJyk7XG5cbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGNvbnRlbnQsIFtjcmVhdGVNYXAoKV0pXG4gICAgdXRpbC5pbnNlcnRUbyhjb250ZW50LCAnbWFpbi1jb250YWluZXInKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0IiwiLyogXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvaG9tZS5jc3MnOyBcbiovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgYmFuZGYgZnJvbSAnLi4vaW1hZ2VzLzQucG5nJztcbmltcG9ydCBvayBmcm9tICcuLi9pbWFnZXMvMS5wbmcnO1xuXG5cbi8vIGNyZWF0ZSB0YWdsaW5lXG5mdW5jdGlvbiBjcmVhdGVUYWdsaW5lKCl7XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmVyIGZvciB0aGUgdGFnbGluZVxuICAgIGNvbnN0IHRhZ2xpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhZ2xpbmVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YWdsaW5lLWNvbnRhaW5lclwiXG5cbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgYmlnZ2VzdCBmb250XG4gICAgY29uc3QgZmlyc3RUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaXJzdFRhZy50ZXh0Q29udGVudCA9IFwiQ0hPTktZXCI7XG5cbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgMm5kIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IHNlY29uZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZFRhZy50ZXh0Q29udGVudCA9IFwiSlVJQ1lcIjtcblxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgZm9yIHRoZSAybmQgYmlnZ2VzdCBmb250XG4gICAgY29uc3QgZG9ndGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9ndGFnLnRleHRDb250ZW50ID0gXCJDSEVFU1lcIjtcbiAgICBcbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgMm5kIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IGVzZXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVzZXRhZy50ZXh0Q29udGVudCA9IFwiVGFzdHlcIjtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKHRhZ2xpbmVDb250YWluZXIsIFtmaXJzdFRhZywgc2Vjb25kVGFnLCBkb2d0YWcsIGVzZXRhZ10pOyAgIFxuICAgIHJldHVybiB0YWdsaW5lQ29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGUgc2NoZWRcbmZ1bmN0aW9uIGNyZWF0ZVNjaGVkdWxlKCl7XG4gICAgY29uc3QgREFZUyA9IFsnU3VuZGF5JyAsJ01vbmRheScgLCdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScgLCdGcmlkYXknICwnU2F0dXJkYXknXVxuICAgIC8qIFxuICAgICAgICBTQ0hFRFVMRVxuICAgICovXG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmVyIGZvciBzY2hlZHVsZSBpbnNpZGUgdGhlIGZlYXR1cmVkIGRpdlxuICAgIGNvbnN0IHNjaGVkdWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NoZWR1bGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJzY2hlZHVsZS1jb250YWluZXJcIjtcbiAgICB1dGlsLmNoZWNrVmlld3BvcnQoc2NoZWR1bGVDb250YWluZXIsIDkwMCwgJ2Jsb2NrJyk7XG5cblxuICAgIC8vIGNyZWF0ZSB0aGUgc2NoZWR1bGUgZGl2XG4gICAgY29uc3Qgc2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY2hlZHVsZS5jbGFzc05hbWUgPSBcInNjaGVkdWxlXCI7XG4gICAgLy8gY3JlYXRlIHRoZSBoZWFkZXIgZm9yIHRoZSBzY2hlZHVsZSBkaXZcbiAgICBjb25zdCBzY2hlZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2NoZWRIZWFkZXIudGV4dENvbnRlbnQgPSBcIlNjaGVkdWxlOiBcIjtcbiAgICBzY2hlZEhlYWRlci5jbGFzc05hbWUgPSBcInNjaGVkLWhlYWRlclwiO1xuXG4gICAgLy8gc2V0LXVwIHRoZSBzY2hlZHVsZSB0YWJsZS9ncmlkIGluc2lkZSB0aGUgY29udGFpbmVyXG4gICAgY29uc3Qgc2NoZWRUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkVGFibGUuY2xhc3NOYW1lID0gXCJzY2hlZC10YWJsZVwiOyBcbiAgICBsZXQgc2NoZWRUYWJsZUVsZW1lbnRzID0gW107IC8vIGluLWNhc2Ugb2YgZW1lcmdlbmN5LCB1c2UgdG8gbWFuaXB1bGF0ZSBub2RlXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDIxOyBpKyspe1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNjaGVkVGFibGVFbGVtZW50cy5wdXNoKG5vZGUpO1xuICAgICAgICBpZihpJTMgPT0gMCkgbm9kZS50ZXh0Q29udGVudCA9IERBWVNbaS8zXTtcbiAgICAgICAgZWxzZSBpZihpJTMgPT0gMikgbm9kZS50ZXh0Q29udGVudCA9IFwiT1BFTlwiO1xuICAgICAgICBzY2hlZFRhYmxlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgICAvLyBBcHBlbmQgYWxsIG5lY2Vzc2FyeSBlbGVtZW50cyBpbiBvcmRlclxuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKHNjaGVkSGVhZGVyKVxuICAgIHNjaGVkdWxlLmFwcGVuZENoaWxkKHNjaGVkVGFibGUpO1xuICAgIHNjaGVkdWxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjaGVkdWxlKTtcbiAgICByZXR1cm4gc2NoZWR1bGVDb250YWluZXI7XG59XG5cbi8vIGNyZWF0ZSBkZXNjcmlwdGlvblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oKXtcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCBkZXNjSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZXNjSW1hZ2Uuc3JjID0gYmFuZGY7XG4gICAgZGVzY0ltYWdlLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCdsZWZ0Jyk7XG4gICAgZGVzY0ltYWdlLmNsYXNzTmFtZSA9ICdkZXNjLWltYWdlJztcblxuICAgIGNvbnN0IGRlc2NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NUZXh0LnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxcXG4gICAgICAgIERvbmVjIGlwc3VtIGRpYW0sIGNvbnZhbGxpcyBiaWJlbmR1bSBsYW9yZWV0IGF0LCB2ZXN0aWJ1bHVtIHNlZCBzZW0uIFxcXG4gICAgICAgIFByYWVzZW50IGEgZWxpdCB1bHRyaWNpZXMsIGJpYmVuZHVtIGVyYXQgYWMsIGNvbmd1ZSBzZW0uIFxcXG4gICAgICAgIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy5cXFxuICAgICAgICBBZW5lYW4gYXVjdG9yIGZyaW5naWxsYSBlbmltIGF0IHRyaXN0aXF1ZS4gVXQgZWZmaWNpdHVyIHNvbGxpY2l0dWRpbiBlcm9zIGV1IGJsYW5kaXQuXFxcbiAgICAgICAgQ3JhcyBjb25zZWN0ZXR1ciB1dCBhbnRlIGF0IHBlbGxlbnRlc3F1ZS4gUGhhc2VsbHVzIHN1c2NpcGl0LCBpcHN1bSBhdCBoZW5kcmVyaXQgaWFjdWxpcywgbGlndWxhIHVybmEgZmF1Y2lidXMgZXJvcywgZWdldCBhbGlxdWV0IHF1YW0gbWV0dXMgdXQganVzdG8uXFxcbiAgICAgICAgUXVpc3F1ZSBpbiBwb3J0YSBpcHN1bS4gVXQgYXQgZmVsaXMgbWkuIEluIHNjZWxlcmlzcXVlIHRlbXBvciBtYXNzYS4gQWVuZWFuIGxlY3R1cyBkdWksIGNvbnZhbGxpcyBxdWlzIG5lcXVlIG5lYywgbWFsZXN1YWRhIGRpY3R1bSBpcHN1bS5cXFxuICAgICAgICBOdW5jIG9yY2kgb3JjaSwgcmhvbmN1cyBwb3J0YSBhbnRlIGFjLCBmZXVnaWF0IGFjY3Vtc2FuIHJpc3VzLiBOdW5jIHRpbmNpZHVudCBtYXVyaXMgdmVsIGFsaXF1YW0gZmVybWVudHVtLlwiO1xuICAgIGRlc2NUZXh0LmNsYXNzTmFtZSA9ICdkZXNjLXRleHQnO1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVzYy1idG4nO1xuICAgIGNvbnN0IGRlc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZXNjQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgICBkZXNjQnRuLmNsYXNzTmFtZSA9ICdidG4nO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJ0bkltZy5zcmMgPSBvaztcbiAgICBidG5JbWcuY2xhc3NOYW1lID0gJ2J0bi1pbWFnZSc7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihidG5Db250YWluZXIsIFtidG5JbWcsIGRlc2NCdG5dKTtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGRlc2NyaXB0aW9uLCBbZGVzY0ltYWdlLCBkZXNjVGV4dCwgYnRuQ29udGFpbmVyXSk7XG4gICAgZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gZGVzQ29udGFpbmVyO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgICBjb25zdCBjb250ZW50ID0gdXRpbC5jcmVhdGVDb250YWluZXIoJ21haW4nKTtcblxuICAgIC8vY3JlYXRlIGEgd2lkZSBkaXYgZm9yIGZlYXR1cmUgZm9vZFxuICAgIGNvbnN0IGZlYXR1cmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZWQuY2xhc3NOYW1lID0gXCJmZWF0dXJlZFwiO1xuICAgIHV0aWwubm9kZVJlc2l6ZShmZWF0dXJlZCwgJzE2MHZ3JyAsICcxMzB2dycpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnICwgXG4gICAgICAgICgpID0+IHV0aWwubm9kZVJlc2l6ZShmZWF0dXJlZCwgJzE1MHZ3JyAsICcxMjB2dycpLFxuICAgICAgICBmYWxzZSk7XG5cbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGZlYXR1cmVkLCBbY3JlYXRlU2NoZWR1bGUoKSwgY3JlYXRlVGFnbGluZSgpXSk7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihjb250ZW50LFtmZWF0dXJlZCxjcmVhdGVEZXNjcmlwdGlvbigpXSlcbiAgICB1dGlsLmluc2VydFRvKGNvbnRlbnQsICdtYWluLWNvbnRhaW5lcicpO1xuICAgIHJldHVybiAnaG9tZSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiLyogXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWVudS5jc3MnOyBcbiovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgYm9yZ2lyIGZyb20gJy4uL2ltYWdlcy9sb2dvMi5wbmcnO1xuaW1wb3J0IGRyaW5rIGZyb20gJy4uL2ltYWdlcy8zLnBuZyc7XG5pbXBvcnQgY29tYm8gZnJvbSAnLi4vaW1hZ2VzLzQucG5nJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBidXJnZXJzOiBbYm9yZ2lyLCBcIkJ1cmdlclwiXSxcbiAgICBkcmlua3M6IFtkcmluaywgXCJEcmlua1wiXSxcbiAgICBjb21ib3M6IFtjb21ibywgXCJDb21ib1wiXSxcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVhbHMobGVuLCB0eXBlKXtcbiAgICBjb25zdCBtZWFsU3ViQ29udGFpbmVyID0gdXRpbC5jcmVhdGVDb250YWluZXIoJ21lYWxTdWJDb250YWluZXInKTtcbiAgICBtZWFsU3ViQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVhbC1zdWItY29udGFpbmVyXCI7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMTYwKSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7TWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aC8yMDApfSwgMWZyKWA7XG4gICAgZWxzZSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAncmVwZWF0KDUsIDFmciknO1xuICAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDExNjApIG1lYWxTdWJDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoLzIwMCl9LCAxZnIpYDtcbiAgICAgICAgZWxzZSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KDUsIDFmcilgOztcbiAgICB9KVxuICAgIGNvbnN0IG1lYWxzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBtZWFsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbWVhbEltYWdlLnNyYyA9IHR5cGVbMF07XG4gICAgICAgIG1lYWxJbWFnZS5jbGFzc05hbWUgPSAnbWVhbC1pbWFnZSc7XG4gICAgICAgIGNvbnN0IG1lYWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbWVhbE5hbWUudGV4dENvbnRlbnQgPSBgJHt0eXBlWzFdfVske2l9XWA7XG4gICAgICAgIG1lYWxOYW1lLmNsYXNzTmFtZSA9ICdtZWFsLW5hbWUnO1xuICAgICAgICBjb25zdCBtZWFsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG1lYWxQcmljZS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwICsgMjApICsgaX0uMDBgO1xuICAgICAgICBtZWFsUHJpY2UuY2xhc3NOYW1lID0gJ21lYWwtcHJpY2UnO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZHVwbGljYXRpbmcgYm9yZGVycztcbiAgICAgICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtZWFsLCBbbWVhbEltYWdlLCBtZWFsTmFtZSwgbWVhbFByaWNlXSk7XG4gICAgICAgIG1lYWxzLnB1c2gobWVhbCk7XG4gICAgfVxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVhbFN1YkNvbnRhaW5lciwgbWVhbHMpO1xuICAgIHJldHVybiBtZWFsU3ViQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWF0ZU1lYWwobGVuLCB0eXBlKXtcbiAgICBjb25zdCBtZWFsQ29udGFpbmVyID0gdXRpbC5jcmVhdGVDb250YWluZXIoJ21lYWwtY29udGFpbmVyJyk7XG4gICAgbWVhbENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVhbC1jb250YWluZXInO1xuICAgIGNvbnN0IG1lYWxTdWJDb250YWluZXIgPSBjcmVhdGVNZWFscyhsZW4sIHR5cGUpO1xuICAgIFxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVhbENvbnRhaW5lciwgW21lYWxTdWJDb250YWluZXJdKTtcbiAgICByZXR1cm4gbWVhbENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucygpe1xuICAgIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3B0aW9ucy1jb250YWluZXJcIjtcbiAgICB1dGlsLmNoZWNrVmlld3BvcnQob3B0aW9uc0NvbnRhaW5lciwgMTE2MCwgJ2dyaWQnKTtcblxuICAgIGNvbnN0IGJ1cmdlck9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1cmdlck9wdC50ZXh0Q29udGVudCA9IFwiQnVyZ2Vyc1wiO1xuICAgIGJ1cmdlck9wdC5pZCA9IFwiYnVyZ2Vyc1wiO1xuICAgIGJ1cmdlck9wdC5jbGFzc05hbWUgPSBcImN1cnJlbnRcIjtcbiAgICBjb25zdCBkcmlua3NPcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkcmlua3NPcHQudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIGRyaW5rc09wdC5pZCA9IFwiZHJpbmtzXCI7XG4gICAgY29uc3QgY29tYm9PcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21ib09wdC50ZXh0Q29udGVudCA9IFwiQ29tYm9zXCI7XG4gICAgY29tYm9PcHQuaWQgPSBcImNvbWJvc1wiO1xuXG4gICAgbGV0IGJ1dHRvbnMgPSBbYnVyZ2VyT3B0LCBkcmlua3NPcHQsIGNvbWJvT3B0XTtcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PntcbiAgICAgICAgICAgIGlmKCFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50Jykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01lYWwgPSBjcmVhdGVNZWFscyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4ICsgMiksIG9wdGlvbnNbYnV0dG9uLmlkXSk7XG4gICAgICAgICAgICAgICAgdXRpbC5pbnNlcnRUbyhuZXdNZWFsLCAnbWVhbC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB1dGlsLnJlbW92ZUNsYXNzKGJ1dHRvbnMsICdjdXJyZW50JylcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB1dGlsLmluc2VydENoaWxkcmVuKG9wdGlvbnNDb250YWluZXIsIGJ1dHRvbnMpO1xuICAgIHJldHVybiBvcHRpb25zQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgY29udGVudCA9IHV0aWwuY3JlYXRlQ29udGFpbmVyKCdtYWluJyk7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LWNvbnRhaW5lclwiO1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE2MCkgbWVudUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcic7XG4gICAgZWxzZSBtZW51Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnOGZyIDJmcic7XG4gICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE2MCkgbWVudUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcic7XG4gICAgICAgIGVsc2UgbWVudUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzhmciAyZnInO1xuICAgIH0pXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtZW51Q29udGFpbmVyLCBbaW5pdGlhdGVNZWFsKDksIG9wdGlvbnMuYnVyZ2VycyksIGNyZWF0ZU9wdGlvbnMoKV0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oY29udGVudCwgW21lbnVDb250YWluZXJdKTtcbiAgICB1dGlsLmluc2VydFRvKGNvbnRlbnQsICdtYWluLWNvbnRhaW5lcicpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudSIsIlxuLy8gcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3Mgb24gZXZlcnkgbm9kZXMgaW4gYW4gYXJyYXkgb2YgSFRNTCBlbGVtZW50c1xuY29uc3QgcmVtb3ZlQ2xhc3MgPSAoYXJyLCBjKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjKSlcbn1cblxuLy8gaGlkZSBub2RlIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBjaGVja1ZpZXdwb3J0ID0gKG5vZGUsIHNpemUsIGRpc3BsYXkpID0+IHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IHNpemUpIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgc2l6ZSkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICB9LCBmYWxzZSk7XG59XG4vLyByZXNpemUgbm9kZSBiYWNrZ3JvdW5kIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBub2RlUmVzaXplID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMjAwKSAge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAndG9wJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1pbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICdjZW50ZXInO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWF4O1xuICAgIH1cbn1cbmNvbnN0IGluc2VydENoaWxkcmVuID0gKHBhcmVudCwgYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xufVxuLy8gaW5zZXJ0IHRvIG1haW4tY29udGFpbmVyXG5jb25zdCBpbnNlcnRUbyA9IChjb250ZW50LCBwYXJlbnQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudCkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoaWQpID0+e1xuICAgIC8vIHJlbW92ZSB0aGUgbWFpbiBjb250ZW50IGlmIHRoZXJlIGlzXG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZihwcmV2KSBwcmV2LnJlbW92ZSgpOyBcblxuICAgIC8vIGNyZWF0ZSBuZXcgb25lXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSBpZDtcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUNvbnRhaW5lcixcbiAgICBpbnNlcnRUbyxcbiAgICBpbnNlcnRDaGlsZHJlbixcbiAgICByZW1vdmVDbGFzcyxcbiAgICBjaGVja1ZpZXdwb3J0LFxuICAgIG5vZGVSZXNpemVcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYXAtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWFwLWltYWdle1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG4ubWFwLWdwc3tcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDFmcjtcXG4gICAgdG9wOiA0NSU7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEwcHgsIDJ2dywgMTNweCk7XFxufVxcbi5tYXAtYXJyb3d7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBtaW4oM3Z3LCA1MHB4KVxcbn1cXG4ubWFwLW1lc3NhZ2V7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG4ubWFwLWFycm93OmhvdmVye1xcbiAgICBoZWlnaHQ6IG1pbigzLjJ2dywgNTVweClcXG59XFxuLm1hcC1tZXNzYWdlOjphZnRlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgbGVmdDotMjVweDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xcbiAgICBjb2xvcjpibGFja1xcbn1cXG4ubWFwLWFycm93OmhvdmVyICsgLm1hcC1tZXNzYWdlOjphZnRlcntcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29udGVudDogXFxcIldlIGFyZSBoZXJlXFxcIjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsUUFBUTtJQUNSLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCO0FBQ0o7QUFDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1hcC1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5tYXAtaW1hZ2V7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcbi5tYXAtZ3Bze1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgMWZyO1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTBweCwgMnZ3LCAxM3B4KTtcXG59XFxuLm1hcC1hcnJvd3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IG1pbigzdncsIDUwcHgpXFxufVxcbi5tYXAtbWVzc2FnZXtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcbi5tYXAtYXJyb3c6aG92ZXJ7XFxuICAgIGhlaWdodDogbWluKDMuMnZ3LCA1NXB4KVxcbn1cXG4ubWFwLW1lc3NhZ2U6OmFmdGVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBsZWZ0Oi0yNXB4O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XFxuICAgIGNvbG9yOmJsYWNrXFxufVxcbi5tYXAtYXJyb3c6aG92ZXIgKyAubWFwLW1lc3NhZ2U6OmFmdGVye1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb250ZW50OiBcXFwiV2UgYXJlIGhlcmVcXFwiO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZmVhdHVyZWR7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBtaW4oNDAwcHgsIDQ1dmgpO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDQwNTYxOTEuanBnKSBuby1yZXBlYXQgcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBlbSAxMGVtICMwMDAwMDA2MDtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyZnIgMWZyIDFmcjtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gKntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpmaXJzdC1jaGlsZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDYwcHgsIDEydmgsIDE0MHB4KTtcXG4gICAgbWFyZ2luOi0xMHB4IDA7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMil7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg1MHB4LCAxMHZoLCAxMDBweCk7XFxuICAgIG1hcmdpbjotMTBweCAwO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bnRoLWNoaWxkKDMpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMzBweCwgNnZoLCA2MHB4KTtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOmxhc3QtY2hpbGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCA2dmgsIDQwcHgpO1xcbn1cXG4uc2NoZWR1bGUtY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICByaWdodDowO1xcbn1cXG4uc2NoZWR1bGV7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzAxMzgwO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuLnNjaGVkLWhlYWRlcntcXG4gICAgaGVpZ2h0OjQlOyBcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgM3ZoLCAycmVtKTtcXG4gICAgbWFyZ2luOjA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNjaGVkLXRhYmxle1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuLnNjaGVkLXRhYmxlID4gKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnNjaGVkLXRhYmxlID4gOm50aC1jaGlsZCgzbiszKXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxY2FjMWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBtYXJnaW46IDAgNXB4XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24gKyAyKXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDAwMDtcXG59XFxuLmRlc2NyaXB0aW9uLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6Y2xhbXAoMTUlLCAydncsIDI1JSk7XFxuICAgIG1hcmdpbi1yaWdodDpjbGFtcCgxNSUsIDJ2dywgMjUlKTtcXG4gICAgcGFkZGluZzoyMHB4O1xcbn1cXG4uZGVzYy1pbWFnZXtcXG4gICAgaGVpZ2h0OmNsYW1wKDEwMHB4LCAyMHZ3LCAyNTBweCk7XFxufVxcbi5kZXNjLXRleHR7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwydncsMjVweCk7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLmRlc2MtYnRue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IG1pbigyMDBweCwzMCUpO1xcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjMTEzO1xcbn1cXG4uYnRuLWltYWdle1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QiwyRUFBMkU7SUFDM0UsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLE9BQU87QUFDWDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZlYXR1cmVke1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluKDQwMHB4LCA0NXZoKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3A0MDU2MTkxLmpwZykgbm8tcmVwZWF0IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwZW0gMTBlbSAjMDAwMDAwNjA7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDFmciAxZnI7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+ICp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6Zmlyc3QtY2hpbGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2MHB4LCAxMnZoLCAxNDBweCk7XFxuICAgIG1hcmdpbjotMTBweCAwO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgMTB2aCwgMTAwcHgpO1xcbiAgICBtYXJnaW46LTEwcHggMDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDZ2aCwgNjBweCk7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpsYXN0LWNoaWxke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgNnZoLCA0MHB4KTtcXG59XFxuLnNjaGVkdWxlLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcmlnaHQ6MDtcXG59XFxuLnNjaGVkdWxle1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMwMTM4MDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC1oZWFkZXJ7XFxuICAgIGhlaWdodDo0JTsgXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDN2aCwgMnJlbSk7XFxuICAgIG1hcmdpbjowO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC10YWJsZSA+ICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24rMyl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWNhYzFjO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgbWFyZ2luOiAwIDVweFxcbn1cXG4uc2NoZWQtdGFibGUgPiA6bnRoLWNoaWxkKDNuICsgMil7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDAwMDA7XFxufVxcbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OmNsYW1wKDE1JSwgMnZ3LCAyNSUpO1xcbiAgICBtYXJnaW4tcmlnaHQ6Y2xhbXAoMTUlLCAydncsIDI1JSk7XFxuICAgIHBhZGRpbmc6MjBweDtcXG59XFxuLmRlc2MtaW1hZ2V7XFxuICAgIGhlaWdodDpjbGFtcCgxMDBweCwgMjB2dywgMjUwcHgpO1xcbn1cXG4uZGVzYy10ZXh0e1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsMnZ3LDI1cHgpO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5kZXNjLWJ0bntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiBtaW4oMjAwcHgsMzAlKTtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzExMztcXG59XFxuLmJ0bi1pbWFnZXtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWVudS1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4ZnIgMmZyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogODAwcHg7XFxufVxcbi5tZWFsLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xcbn1cXG4ubWVhbC1zdWItY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjMTEzO1xcbn1cXG4ubWVhbC1zdWItY29udGFpbmVyID4gZGl2e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6MTBweCA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBtaW4oMzAwcHgsIDMwdncpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1lYWwtc3ViLWNvbnRhaW5lciA+IGRpdjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzExMztcXG59XFxuLm1lYWwtc3ViLWNvbnRhaW5lciA+IGRpdjpob3Zlcjo6YWZ0ZXJ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7ICAgIFxcbn1cXG4ubWVhbC1uYW1le1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEwcHgsIDR2dywgMzBweCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG59XFxuLm1lYWwtaW1hZ2V7XFxuICAgIGhlaWdodDogbWluKDUwJSwgMjAwcHgpO1xcbn1cXG4ubWVhbC1wcmljZXtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxuICAgIHdpZHRoOjYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLm1lYWwtc3ViLWNvbnRhaW5lciA+IGRpdjpob3ZlciAubWVhbC1wcmljZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXIgPiBkaXY6OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyLXJpZ2h0OjNweCBzb2xpZCAjZjVjMTEzO1xcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCAjZjVjMTEzO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgYm90dG9tOjEwcHg7XFxufVxcblxcblxcbi5vcHRpb25zLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ub3B0aW9ucy1jb250YWluZXIgPiBidXR0b246bm90KC5jdXJyZW50KXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OjYwcHg7XFxuICAgIHdpZHRoOjIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjMTEzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XFxufVxcbi5vcHRpb25zLWNvbnRhaW5lciA+IGJ1dHRvbjpob3Zlcjpub3QoLmN1cnJlbnQpe1xcbiAgICBoZWlnaHQ6NzBweDtcXG59XFxuLm9wdGlvbnMtY29udGFpbmVyID4gYnV0dG9uOmFjdGl2ZTpub3QoLmN1cnJlbnQpe1xcbiAgICBoZWlnaHQ6NTVweDtcXG59XFxuLmN1cnJlbnR7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNWMxMTM7XFxuICAgIGhlaWdodDo2MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweFxcbn1cXG4ubm8tYm9yZGVyLXJpZ2h0e1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDJmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbn1cXG4ubWVhbC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcXG59XFxuLm1lYWwtc3ViLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzExMztcXG59XFxuLm1lYWwtc3ViLWNvbnRhaW5lciA+IGRpdntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOjEwcHggNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluKDMwMHB4LCAzMHZ3KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXIgPiBkaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXIgPiBkaXY6aG92ZXI6OmFmdGVye1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlOyAgICBcXG59XFxuLm1lYWwtbmFtZXtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCA0dncsIDMwcHgpO1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxufVxcbi5tZWFsLWltYWdle1xcbiAgICBoZWlnaHQ6IG1pbig1MCUsIDIwMHB4KTtcXG59XFxuLm1lYWwtcHJpY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjMTEzO1xcbiAgICB3aWR0aDo2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXIgPiBkaXY6aG92ZXIgLm1lYWwtcHJpY2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWVhbC1zdWItY29udGFpbmVyID4gZGl2OjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlci1yaWdodDozcHggc29saWQgI2Y1YzExMztcXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgI2Y1YzExMztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvdHRvbToxMHB4O1xcbn1cXG5cXG5cXG4ub3B0aW9ucy1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm9wdGlvbnMtY29udGFpbmVyID4gYnV0dG9uOm5vdCguY3VycmVudCl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDo2MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzExMztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xcbn1cXG4ub3B0aW9ucy1jb250YWluZXIgPiBidXR0b246aG92ZXI6bm90KC5jdXJyZW50KXtcXG4gICAgaGVpZ2h0OjcwcHg7XFxufVxcbi5vcHRpb25zLWNvbnRhaW5lciA+IGJ1dHRvbjphY3RpdmU6bm90KC5jdXJyZW50KXtcXG4gICAgaGVpZ2h0OjU1cHg7XFxufVxcbi5jdXJyZW50e1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjVjMTEzO1xcbiAgICBoZWlnaHQ6NjBweDtcXG4gICAgd2lkdGg6MjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHhcXG59XFxuLm5vLWJvcmRlci1yaWdodHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmZhbWlseT1SYWxld2F5OndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4jaGVhZGVye1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sb2dve1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbn1cXG4ubG9nb1RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6ICNmNWMxMTM7XFxuICAgIHRleHQtc2hhZG93OiAwIDFweCAjMjcyNzI3LCAwIC0xcHggIzI3MjcyNyxcXG4gICAgICAgIDFweCAwICMyNzI3MjcsIC0xcHggMCAjMjcyNzI3O1xcbn1cXG4ubGluay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NztcXG59XFxuI2xpbmtze1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4jbGlua3MgPiBhe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW46IDBweCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyxcXG4gICAgICAgIG9wYWNpdHkgMC40cztcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjMwcHg7XFxuICAgIHJpZ2h0OjMwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmFjdGl2ZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKXtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTpob3ZlcntcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphY3RpdmV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuI2xpbmtzID4gYTphZnRlcntcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzLFxcbiAgICAgICAgbGVmdCAwLjNzLFxcbiAgICAgICAgcmlnaHQgMC4zcztcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjEwMHB4O1xcbiAgICByaWdodDoxMDBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTpob3ZlcjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDozMHB4O1xcbiAgICByaWdodDozMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5hY3RpdmU6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDoyMHB4O1xcbiAgICByaWdodDoyMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5mZWF0dXJlZHtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuLmZvb3RlcntcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTc1NztcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGhlaWdodDogMjUgIHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyICp7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmZvb3RlciBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jcmVkaXRze1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XFxufVxcbi5naXRodWJ7XFxuICAgIHBhZGRpbmc6M3B4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmdpdGh1Yjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNtYWlue1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcbi5idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwgM3Z3LCAyMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW57XFxuICAgIGZyb217XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRve1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRpc2Z5JztcXG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3NhdGlzZnkvdjExL3JQMkhwMnluNmxrRzUwTG9DWk9JSFEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3dvcmtzYW5zL3Y5L1FHWV96X3dOYWhHQWRxUTQzUmhWY0lnWVQyWHo1dTMySzBuWEJpOEpwZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZDtxQ0FDaUM7QUFDckM7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO29CQUNnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0k7O2tCQUVjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsOEZBQThGO0FBQ2xHO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsa0hBQWtIO0FBQ3RIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDAmZmFtaWx5PVJhbGV3YXk6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbiNoZWFkZXJ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvZ297XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxufVxcbi5sb2dvVGV4dHtcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjb2xvcjogI2Y1YzExMztcXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4ICMyNzI3MjcsIDAgLTFweCAjMjcyNzI3LFxcbiAgICAgICAgMXB4IDAgIzI3MjcyNywgLTFweCAwICMyNzI3Mjc7XFxufVxcbi5saW5rLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xcbn1cXG4jbGlua3N7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbiNsaW5rcyA+IGF7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbjogMHB4IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzLFxcbiAgICAgICAgb3BhY2l0eSAwLjRzO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MzBweDtcXG4gICAgcmlnaHQ6MzBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uYWN0aXZle1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpe1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmhvdmVye1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFjdGl2ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jbGlua3MgPiBhOmFmdGVye1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsXFxuICAgICAgICBsZWZ0IDAuM3MsXFxuICAgICAgICByaWdodCAwLjNzO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MTAwcHg7XFxuICAgIHJpZ2h0OjEwMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmhvdmVyOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjMwcHg7XFxuICAgIHJpZ2h0OjMwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmFjdGl2ZTo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjIwcHg7XFxuICAgIHJpZ2h0OjIwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmZlYXR1cmVke1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG4uZm9vdGVye1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU3O1xcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgaGVpZ2h0OiAyNSAgcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXIgKntcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4uZm9vdGVyIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNyZWRpdHN7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcXG59XFxuLmdpdGh1YntcXG4gICAgcGFkZGluZzozcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4uZ2l0aHViOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuI21haW57XFxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAxcztcXG59XFxuLmJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCAzdncsIDIwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1pbntcXG4gICAgZnJvbXtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgdG97XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1NhdGlzZnknO1xcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc2F0aXNmeS92MTEvclAySHAyeW42bGtHNTBMb0NaT0lIUS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvd29ya3NhbnMvdjkvUUdZX3pfd05haEdBZHFRNDNSaFZjSWdZVDJYejV1MzJLMG5YQmk4SnBnLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvY29udGFjdC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9tZW51LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2hvbWUuY3NzJztcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vc2NyaXB0cy9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vc2NyaXB0cy9tZW51LmpzJztcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gJy4vc2NyaXB0cy9jb250YWN0LmpzJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi9zY3JpcHRzL3V0aWwuanMnO1xuaW1wb3J0IGxvZyBmcm9tICcuL2ltYWdlcy9sb2dvMi5wbmcnO1xuaW1wb3J0IGdoIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi02NC5wbmcnO1xuXG5cblxubGV0IGN1cnJlbnQgPSAnY29udGFjdCc7XG5sZXQgdGFiRnVuY3Rpb24gPSB7XG4gICAgaG9tZTogY3JlYXRlSG9tZSxcbiAgICBtZW51OiBjcmVhdGVNZW51LFxuICAgIGNvbnRhY3Q6IGNyZWF0ZUNvbnRhY3Rcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc05hbWUgPSBcImZvb3RlclwiO1xuXG4gICAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjcmVkaXRzLnRleHRDb250ZW50ID0gJ0ljb25zIGRlc2lnbmVkIGJ5ICc7XG4gICAgY3JlZGl0cy5jbGFzc05hbWUgPSAnY3JlZGl0cyc7XG4gICAgY29uc3QgY3JlZGl0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjcmVkaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3ZlY3RvcnMvbG9nb1wiXG4gICAgY3JlZGl0TGluay50ZXh0Q29udGVudCA9ICdyb3Nlcm9kaW9ub3ZhIC8gRnJlZXBpayc7XG5cbiAgICBjb25zdCBnaXRodWIgPSBuZXcgSW1hZ2UoKVxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFib3V0LmhyZWYgPSBcImh0dHBzOi8vYXJjaC1ic29qLmdpdGh1Yi5pby9wcm9qZWN0LW9kaW4vXCI7XG4gICAgYWJvdXQudGFyZ2V0ID0gXCJfYmxhbmtcIlxuICAgIGdpdGh1Yi5jbGFzc05hbWUgPSAnZ2l0aHViJztcbiAgICBnaXRodWIuc3JjID0gZ2g7XG4gICAgZ2l0aHViLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCAncmlnaHQnKVxuICAgIGFib3V0LmFwcGVuZENoaWxkKGdpdGh1YilcbiAgICBjcmVkaXRzLmFwcGVuZENoaWxkKGNyZWRpdExpbmspO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXRzKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgIHJldHVybiBmb290ZXJcbn1cblxuZnVuY3Rpb24gaW5pdGlhdGVQYWdlKCl7XG4gICAgLy8gZ2V0IGRpdiNjb250ZW50XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgdGhlIGhlYWRlclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gY29udGFpbmVyIGZvciBsaW5rcyB0byBjZW50ZXIgdGhlIHRleHQgXG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAvLyBsaW5rcyBzdWJjb250YWluZXIsIHVzZSBmb3Igbm90IGFmZmVjdGluZyB0aGUgb3RoZXIgbGluayB3aGVuIGhvdmVyaW5nXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaW5rQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibGluay1jb250YWluZXJcIjtcbiAgICBsaW5rcy5pZCA9IFwibGlua3NcIjtcbiAgICBjb250YWluZXIuaWQgPSBcImhlYWRlclwiO1xuXG4gICAgLy8gY3JlYXRlIGxvZ28gdGVtcGxhdGUgZm9yIHRoZSB3ZWJwYWdlXG4gICAgY29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvZ29UZXh0LmNsYXNzTmFtZSA9IFwibG9nb1RleHRcIjtcbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nb1RleHQudGV4dENvbnRlbnQgPSBcIkJvcmdpciBGZXZlclwiO1xuICAgIGxvZ28uY2xhc3NOYW1lID0gXCJsb2dvXCI7XG4gICAgbG9nby5zcmMgPSBsb2dcblxuICAgIC8vIGNyZWF0ZSB0aGUgZWxlbWVudCBmb3IgdGhlIGxpbmtzXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZS5pZCA9IFwiaG9tZVwiO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0XCI7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgY29uc3QgdGFiTGlzdCA9IHtob21lLG1lbnUsIGNvbnRhY3R9XG5cbiAgICAvLyBpbnNlcnQgdGhlIGVsZW1lbnRzIHRvIGFuIG9iamVjdCBzbyBvdGhlciBzY3JpcHRzIHdpbGwgYmUgYWJsZSB0byBhY2Nlc3MgdGhlIGVsZW1lbnRzLlxuICAgIHRhYkxpc3RbY3VycmVudF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAvLyBzZXQgb25jbGljayBmdW5jdGlvbmFsaXR5IGZvciB0aGUgbGlua1xuICAgIE9iamVjdC52YWx1ZXModGFiTGlzdCkuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsaW5rLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZighbGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gbGluay5pZDtcbiAgICAgICAgICAgICAgICB1dGlsLnJlbW92ZUNsYXNzKE9iamVjdC52YWx1ZXModGFiTGlzdCksICdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgdGFiRnVuY3Rpb25bY3VycmVudF0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGFkZCB0aGUgbGlua3MgdG8gdGhlIHN1YmNvbnRhaW5lclxuICAgIE9iamVjdC52YWx1ZXModGFiTGlzdCkuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsaW5rcy5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcblxuXG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgdGhlIGNvbnRlbnQgb2YgZWFjaCB0YWJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcblxuICAgIC8vIGFkZCB0aGUgc3ViY29udGFpbmVyIHRvIHRoZSBtYWluIGxpbmsgY29udGFpbmVyXG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rcylcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7IC8vIGFkZCB0aGUgbG9nbyBpbiBhIGNvbnRhaW5lciB0byBjZW50ZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb1RleHQpOyBcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTsgLy8gYWRkIHRoZSBsb2dvIGZpcnN0IGJlY2F1c2VcbiAgICBib2R5LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpOyAvLyBpbnNlcnQgdGhlIGxpbmtzIGFmdGVyXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn0gICBcblxuXG5pbml0aWF0ZVBhZ2UoKTtcbnRhYkZ1bmN0aW9uW2N1cnJlbnRdKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9