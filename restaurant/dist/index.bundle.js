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
    const infoContainer = document.createElement('div');
    infoContainer.className = 'info-container'

    const addressContainer = document.createElement('div');
    addressContainer.className = "address-container"
    const addressHeader = document.createElement('h1');
    addressHeader.textContent = "ADDRESS";
    addressHeader.className = "header";
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container'
    const streetLogo = new Image(30, 30);
    streetLogo.className = 'address-logo sub-header'
    streetLogo.src = _images_5_png__WEBPACK_IMPORTED_MODULE_1__;
    const street = document.createElement('h2');
    street.textContent = "0000 Some street 00";
    street.className = 'street sub-header'
    const city = document.createElement('h2');
    city.textContent = "some city, some state";
    city.className = 'sub-header'

    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(textContainer, [streetLogo, street, document.createElement('div'), city])
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(addressContainer, [addressHeader,textContainer])

    const phoneContainer = document.createElement('div');
    phoneContainer.className = "phone-container"
    const phoneHeader = document.createElement('h1');
    phoneHeader.textContent = "Contact Us:";
    phoneHeader.className = "header";
    const numContainer = document.createElement('div');
    numContainer.className = 'number-container'
    const phoneLogo = document.createElement('div');
    phoneLogo.className = "material-icons-sharp num-logo";
    phoneLogo.textContent = "phone"
    const phoneOne = document.createElement('h2');
    phoneOne.textContent = "000-0000-000-0";
    phoneOne.className = "sub-header";
    const phoneTwo = document.createElement('h2');
    phoneTwo.textContent = "000-0000-000-0";
    phoneTwo.className = "sub-header";
    
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(numContainer, [phoneLogo, phoneOne, phoneLogo.cloneNode(true), phoneTwo])
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(phoneContainer, [phoneHeader, numContainer])

    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(infoContainer, [addressContainer, phoneContainer])
    return infoContainer
}

function createForm(){
    const formContainer = document.createElement('form');
    formContainer.className = 'form-container'
    formContainer.setAttribute('action', "javascript:void(0);");
    const formHeader =  document.createElement('h1');
    formHeader.textContent = "Send a Message:"
    formHeader.className = "form-header header"

    // container for the two name input
    const nameContainer = document.createElement('div');
    nameContainer.className = 'name-input-container';

    /* 
        Each input is on a container since
        the input tag does not have pseudo elements
    */
    let firstPlace = document.createElement('div'); 
    firstPlace.className = 'first-container';
    const firstContainer = document.createElement('div');
    firstContainer.className = "input-container";
    const firstName =  document.createElement('input');
    firstName.className = 'first-name-input';
    firstName.setAttribute('required', '');
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(firstContainer, [firstName, firstPlace])

    const lastPlace = document.createElement('div'); 
    lastPlace.className = 'last-container';
    const lastContainer = document.createElement('div');
    lastContainer.className = "input-container";
    const lastName =  document.createElement('input');
    lastName.className = 'last-name-input';
    lastName.setAttribute('required', '');
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(lastContainer, [lastName, lastPlace])
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(nameContainer, [firstContainer, lastContainer])

    const emailPlace = document.createElement('div'); 
    emailPlace.className = 'email-container';
    const emailContainer = document.createElement('div')
    emailContainer.className = "input-container";
    const emailInput = document.createElement('input')
    emailInput.className = "email-input";
    emailInput.setAttribute('required', '');
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(emailContainer, [emailInput, emailPlace])

    const msgPlace = document.createElement('div'); 
    msgPlace.className = 'msg-container ';
    const messageContainer = document.createElement('div')
    messageContainer.className = "msg-input-container input-container";
    const messageInput = document.createElement('textarea')
    messageInput.className = "msg-input";
    messageInput.setAttribute('required', 'true');
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(messageContainer, [messageInput, msgPlace])


    const submitButton = document.createElement('button')
    submitButton.className = "submit-btn btn";
    submitButton.textContent = "Send Message";

    
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(formContainer, [formHeader,nameContainer, emailContainer, messageContainer, submitButton])
    return formContainer;
}

// initialization of the map container
function createMap(){
    const mapContainer = document.createElement('div');
    mapContainer.className = "map-container";
    
    // create container for the arrow and the message since image does not have pseudo-elements
    const mapGps = document.createElement('a');
    mapGps.href = "https://www.google.com/maps/place/Borgir,+Reykjav%C3%ADk,+Iceland/@64.153419,-21.7948849,16z/data=!3m1!4b1!4m5!3m4!1s0x48d6746b117bf057:0x572733c919578781!8m2!3d64.1529167!4d-21.7914103"
    mapGps.target = "_blank";
    mapGps.className = "map-gps";
    const mapMessage = document.createElement('a');
    mapMessage.className = 'map-message';

    // set the image node for the arrow
    const mapArrow = new Image();
    mapArrow.src = _images_5_png__WEBPACK_IMPORTED_MODULE_1__;
    mapArrow.className = 'map-arrow';

    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(mapGps, [mapArrow,mapMessage]);
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(mapContainer, [mapGps]);
    return mapContainer;
}

function createContact(){
    const content = _util_js__WEBPACK_IMPORTED_MODULE_2__.createContainer('main'); // deletes and create the main sub-container
    const contacts = document.createElement('div');
    contacts.className = 'contact-container'

    if(window.innerWidth < 900) contacts.style.gridTemplateColumns = '1fr';
    else  contacts.style.gridTemplateColumns = 'repeat(2, 1fr)';
    window.onresize = () => {
        if(window.innerWidth < 900) contacts.style.gridTemplateColumns = '1fr';
        else  contacts.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(contacts, [createInfo(), createForm()])
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertChildren(content, [createMap(), contacts])
    _util_js__WEBPACK_IMPORTED_MODULE_2__.insertTo(content, 'main-container');
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/map.png */ "./src/images/map.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons+Sharp:wght@400&display=inline-block);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".map-container{\n    position: relative;\n    width: 100%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    height: 500px;  \n}\n.map-image{\n    height:max(500px, 40vw);\n}\n.map-gps{\n    position:absolute;\n    display: grid;\n    grid-template-rows: 10fr 1fr;\n    top: 50%;\n    right: 50%;\n    text-align: center;\n    font-family: 'Work Sans';\n    font-size: clamp(10px, 2vw, 13px);\n}\n.map-arrow{\n    position: relative;\n    height: min(3vw, 50px)\n}\n.map-message{\n    position:relative;\n}\n.map-arrow:hover{\n    height: min(3.2vw, 55px)\n}\n.map-message::after{\n    text-decoration: none;\n    position:absolute;\n    content: \"\";\n    opacity: 0;\n    width: 100px;\n    left:-25px;\n    transition: opacity 0.4s;\n    color:black\n}\n.map-arrow:hover + .map-message::after{\n    opacity: 1;\n    content: \"We are here\";\n}\n\n\n.contact-container{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    margin: 40px 15%;\n    font-family: 'Work Sans';\n}\n.contact-container *{\n    margin:0;\n}\n.text-container, .number-container{\n    margin:20px 0;\n    display:grid;\n    grid-template-columns: 1fr 8fr;\n    height:100px;\n}\n.text-container + .number-container > *{\n    display: flex;\n    align-items: center;\n}\n.num-logo{\n    color:#f5c113;\n}\n\n.form-container{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 4fr 1fr;\n    row-gap:20px;\n    align-items: center;\n    width: 100%;\n}\n.header{\n    font-size: clamp(25px, 4vw,35px);\n}\n.sub-header{\n    font-size: clamp(20px, 3vw,25px);\n}\n.form-header{\n    align-self: flex-start;\n}\n.name-input-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap:20px;\n}\ninput{\n    font-size: 15px;\n    outline:none;\n    border: none;\n    border-bottom: 3px solid #f5c113;\n    width: 100%;\n}\n.msg-input-container{\n    align-self: flex-start;\n}\n.msg-input{\n    outline: none;\n    border: none;\n    border-bottom: 3px solid #f5c113;\n    width: 100%;\n    max-height:150px;\n    min-height:30px;\n    resize:vertical;\n}\n\n\n.first-container::after{\n    content: \"First Name\"\n}\n.last-container::after{\n    content: \"Last Name\"\n}\n.email-container::after{\n    content: \"Email\"\n}\n.msg-container::after{\n    content: \"Message\";\n}\n.input-container{\n    position:relative;\n}\ninput ~ div::after ,textarea ~ div::after{\n    font-family: 'Work Sans';\n    font-size: clamp(15px, 2vw,20px);\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0.5;\n    user-select: none;\n    pointer-events: none;\n    transition: opacity 0.3s,\n        top 0.3s,\n        font-size 0.3s;\n}\ninput:focus-within ~ div::after, textarea:focus-within ~ div::after,  input:valid ~ div::after, textarea:valid ~ div::after{\n    opacity: 1;\n    top:-20px;\n    font-size: clamp(10px, 2vw,15px);\n    color: #be950f;\n    font-weight: bold;\n}\n.submit-btn{\n    justify-self: center;\n    width:200px;\n    padding:5px 10px;\n    border-radius: 40px;\n    transition: background-color 0.5s;\n    font-size: clamp(17px, 2vw,25px);\n}\n.submit-btn:hover{\n    background-color: #f5c113;\n}", "",{"version":3,"sources":["webpack://./src/styles/contact.css"],"names":[],"mappings":"AAGA;IACI,kBAAkB;IAClB,WAAW;IACX,mDAAkC;IAClC,2BAA2B;IAC3B,aAAa;AACjB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,4BAA4B;IAC5B,QAAQ;IACR,UAAU;IACV,kBAAkB;IAClB,wBAAwB;IACxB,iCAAiC;AACrC;AACA;IACI,kBAAkB;IAClB;AACJ;AACA;IACI,iBAAiB;AACrB;AACA;IACI;AACJ;AACA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,YAAY;IACZ,UAAU;IACV,wBAAwB;IACxB;AACJ;AACA;IACI,UAAU;IACV,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,oCAAoC;IACpC,gBAAgB;IAChB,wBAAwB;AAC5B;AACA;IACI,QAAQ;AACZ;AACA;IACI,aAAa;IACb,YAAY;IACZ,8BAA8B;IAC9B,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,YAAY;IACZ,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,QAAQ;AACZ;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,WAAW;AACf;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,eAAe;AACnB;;;AAGA;IACI;AACJ;AACA;IACI;AACJ;AACA;IACI;AACJ;AACA;IACI,kBAAkB;AACtB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,gCAAgC;IAChC,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB;;sBAEkB;AACtB;AACA;IACI,UAAU;IACV,SAAS;IACT,gCAAgC;IAChC,cAAc;IACd,iBAAiB;AACrB;AACA;IACI,oBAAoB;IACpB,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,iCAAiC;IACjC,gCAAgC;AACpC;AACA;IACI,yBAAyB;AAC7B","sourcesContent":["@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Sharp:wght@400&display=inline-block');\n\n\n.map-container{\n    position: relative;\n    width: 100%;\n    background: url(../images/map.png);\n    background-position: center;\n    height: 500px;  \n}\n.map-image{\n    height:max(500px, 40vw);\n}\n.map-gps{\n    position:absolute;\n    display: grid;\n    grid-template-rows: 10fr 1fr;\n    top: 50%;\n    right: 50%;\n    text-align: center;\n    font-family: 'Work Sans';\n    font-size: clamp(10px, 2vw, 13px);\n}\n.map-arrow{\n    position: relative;\n    height: min(3vw, 50px)\n}\n.map-message{\n    position:relative;\n}\n.map-arrow:hover{\n    height: min(3.2vw, 55px)\n}\n.map-message::after{\n    text-decoration: none;\n    position:absolute;\n    content: \"\";\n    opacity: 0;\n    width: 100px;\n    left:-25px;\n    transition: opacity 0.4s;\n    color:black\n}\n.map-arrow:hover + .map-message::after{\n    opacity: 1;\n    content: \"We are here\";\n}\n\n\n.contact-container{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    margin: 40px 15%;\n    font-family: 'Work Sans';\n}\n.contact-container *{\n    margin:0;\n}\n.text-container, .number-container{\n    margin:20px 0;\n    display:grid;\n    grid-template-columns: 1fr 8fr;\n    height:100px;\n}\n.text-container + .number-container > *{\n    display: flex;\n    align-items: center;\n}\n.num-logo{\n    color:#f5c113;\n}\n\n.form-container{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 4fr 1fr;\n    row-gap:20px;\n    align-items: center;\n    width: 100%;\n}\n.header{\n    font-size: clamp(25px, 4vw,35px);\n}\n.sub-header{\n    font-size: clamp(20px, 3vw,25px);\n}\n.form-header{\n    align-self: flex-start;\n}\n.name-input-container{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap:20px;\n}\ninput{\n    font-size: 15px;\n    outline:none;\n    border: none;\n    border-bottom: 3px solid #f5c113;\n    width: 100%;\n}\n.msg-input-container{\n    align-self: flex-start;\n}\n.msg-input{\n    outline: none;\n    border: none;\n    border-bottom: 3px solid #f5c113;\n    width: 100%;\n    max-height:150px;\n    min-height:30px;\n    resize:vertical;\n}\n\n\n.first-container::after{\n    content: \"First Name\"\n}\n.last-container::after{\n    content: \"Last Name\"\n}\n.email-container::after{\n    content: \"Email\"\n}\n.msg-container::after{\n    content: \"Message\";\n}\n.input-container{\n    position:relative;\n}\ninput ~ div::after ,textarea ~ div::after{\n    font-family: 'Work Sans';\n    font-size: clamp(15px, 2vw,20px);\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0.5;\n    user-select: none;\n    pointer-events: none;\n    transition: opacity 0.3s,\n        top 0.3s,\n        font-size 0.3s;\n}\ninput:focus-within ~ div::after, textarea:focus-within ~ div::after,  input:valid ~ div::after, textarea:valid ~ div::after{\n    opacity: 1;\n    top:-20px;\n    font-size: clamp(10px, 2vw,15px);\n    color: #be950f;\n    font-weight: bold;\n}\n.submit-btn{\n    justify-self: center;\n    width:200px;\n    padding:5px 10px;\n    border-radius: 40px;\n    transition: background-color 0.5s;\n    font-size: clamp(17px, 2vw,25px);\n}\n.submit-btn:hover{\n    background-color: #f5c113;\n}"],"sourceRoot":""}]);
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

/***/ "../../../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!******************************************************************!*\
  !*** ../../../../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \******************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9jb250YWN0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL2NvbnRhY3QuY3NzPzIxYjUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/MDAwMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy9tZW51LmNzcz9kOTY0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz85NjA0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSwrQjtBQUNBOztBQUVvQztBQUNBO0FBQ0Y7OztBQUdsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksb0RBQW1CO0FBQ3ZCLElBQUksb0RBQW1COztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLG9EQUFtQjtBQUN2QixJQUFJLG9EQUFtQjs7QUFFdkIsSUFBSSxvREFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBbUI7O0FBRXZCLG9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBbUI7QUFDdkIsSUFBSSxvREFBbUI7O0FBRXZCLHFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBbUI7O0FBRXZCLG1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFB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QUFDRTtBQUNIO0FBQ0E7QUFDZ0I7QUFDQTtBQUNNO0FBQ1A7QUFDTDtBQUNHOzs7O0FBSXhDO0FBQ0E7QUFDQSxVQUFVLHFEQUFVO0FBQ3BCLFVBQVUscURBQVU7QUFDcEIsYUFBYSx3REFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFHOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxvQzs7QUFFQSxnQ0FBZ0M7QUFDaEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxDOzs7QUFHQTtBQUNBIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2NvbnRhY3QuY3NzJzsgXG4qL1xuXG5pbXBvcnQgbWFwIGZyb20gJy4uL2ltYWdlcy9tYXAucG5nJztcbmltcG9ydCBhcnJvdyBmcm9tICcuLi9pbWFnZXMvNS5wbmcnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuXG5cbi8vIGluaXRpYWxpemF0aW9uIG9mIHRoZSBjb250YWN0cyBjb250YWluZXJcbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKXtcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaW5mby1jb250YWluZXInXG5cbiAgICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZHJlc3MtY29udGFpbmVyXCJcbiAgICBjb25zdCBhZGRyZXNzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhZGRyZXNzSGVhZGVyLnRleHRDb250ZW50ID0gXCJBRERSRVNTXCI7XG4gICAgYWRkcmVzc0hlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICd0ZXh0LWNvbnRhaW5lcidcbiAgICBjb25zdCBzdHJlZXRMb2dvID0gbmV3IEltYWdlKDMwLCAzMCk7XG4gICAgc3RyZWV0TG9nby5jbGFzc05hbWUgPSAnYWRkcmVzcy1sb2dvIHN1Yi1oZWFkZXInXG4gICAgc3RyZWV0TG9nby5zcmMgPSBhcnJvdztcbiAgICBjb25zdCBzdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN0cmVldC50ZXh0Q29udGVudCA9IFwiMDAwMCBTb21lIHN0cmVldCAwMFwiO1xuICAgIHN0cmVldC5jbGFzc05hbWUgPSAnc3RyZWV0IHN1Yi1oZWFkZXInXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IFwic29tZSBjaXR5LCBzb21lIHN0YXRlXCI7XG4gICAgY2l0eS5jbGFzc05hbWUgPSAnc3ViLWhlYWRlcidcblxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4odGV4dENvbnRhaW5lciwgW3N0cmVldExvZ28sIHN0cmVldCwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGNpdHldKVxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oYWRkcmVzc0NvbnRhaW5lciwgW2FkZHJlc3NIZWFkZXIsdGV4dENvbnRhaW5lcl0pXG5cbiAgICBjb25zdCBwaG9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicGhvbmUtY29udGFpbmVyXCJcbiAgICBjb25zdCBwaG9uZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcGhvbmVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXM6XCI7XG4gICAgcGhvbmVIZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcbiAgICBjb25zdCBudW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBudW1Db250YWluZXIuY2xhc3NOYW1lID0gJ251bWJlci1jb250YWluZXInXG4gICAgY29uc3QgcGhvbmVMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmVMb2dvLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtc2hhcnAgbnVtLWxvZ29cIjtcbiAgICBwaG9uZUxvZ28udGV4dENvbnRlbnQgPSBcInBob25lXCJcbiAgICBjb25zdCBwaG9uZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVPbmUudGV4dENvbnRlbnQgPSBcIjAwMC0wMDAwLTAwMC0wXCI7XG4gICAgcGhvbmVPbmUuY2xhc3NOYW1lID0gXCJzdWItaGVhZGVyXCI7XG4gICAgY29uc3QgcGhvbmVUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBob25lVHdvLnRleHRDb250ZW50ID0gXCIwMDAtMDAwMC0wMDAtMFwiO1xuICAgIHBob25lVHdvLmNsYXNzTmFtZSA9IFwic3ViLWhlYWRlclwiO1xuICAgIFxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obnVtQ29udGFpbmVyLCBbcGhvbmVMb2dvLCBwaG9uZU9uZSwgcGhvbmVMb2dvLmNsb25lTm9kZSh0cnVlKSwgcGhvbmVUd29dKVxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4ocGhvbmVDb250YWluZXIsIFtwaG9uZUhlYWRlciwgbnVtQ29udGFpbmVyXSlcblxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oaW5mb0NvbnRhaW5lciwgW2FkZHJlc3NDb250YWluZXIsIHBob25lQ29udGFpbmVyXSlcbiAgICByZXR1cm4gaW5mb0NvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCl7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRhaW5lcidcbiAgICBmb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIpO1xuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJTZW5kIGEgTWVzc2FnZTpcIlxuICAgIGZvcm1IZWFkZXIuY2xhc3NOYW1lID0gXCJmb3JtLWhlYWRlciBoZWFkZXJcIlxuXG4gICAgLy8gY29udGFpbmVyIGZvciB0aGUgdHdvIG5hbWUgaW5wdXRcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbmFtZS1pbnB1dC1jb250YWluZXInO1xuXG4gICAgLyogXG4gICAgICAgIEVhY2ggaW5wdXQgaXMgb24gYSBjb250YWluZXIgc2luY2VcbiAgICAgICAgdGhlIGlucHV0IHRhZyBkb2VzIG5vdCBoYXZlIHBzZXVkbyBlbGVtZW50c1xuICAgICovXG4gICAgbGV0IGZpcnN0UGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgZmlyc3RQbGFjZS5jbGFzc05hbWUgPSAnZmlyc3QtY29udGFpbmVyJztcbiAgICBjb25zdCBmaXJzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW5wdXQtY29udGFpbmVyXCI7XG4gICAgY29uc3QgZmlyc3ROYW1lID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZmlyc3ROYW1lLmNsYXNzTmFtZSA9ICdmaXJzdC1uYW1lLWlucHV0JztcbiAgICBmaXJzdE5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGZpcnN0Q29udGFpbmVyLCBbZmlyc3ROYW1lLCBmaXJzdFBsYWNlXSlcblxuICAgIGNvbnN0IGxhc3RQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBsYXN0UGxhY2UuY2xhc3NOYW1lID0gJ2xhc3QtY29udGFpbmVyJztcbiAgICBjb25zdCBsYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGFzdENvbnRhaW5lci5jbGFzc05hbWUgPSBcImlucHV0LWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGxhc3ROYW1lID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbGFzdE5hbWUuY2xhc3NOYW1lID0gJ2xhc3QtbmFtZS1pbnB1dCc7XG4gICAgbGFzdE5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGxhc3RDb250YWluZXIsIFtsYXN0TmFtZSwgbGFzdFBsYWNlXSlcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKG5hbWVDb250YWluZXIsIFtmaXJzdENvbnRhaW5lciwgbGFzdENvbnRhaW5lcl0pXG5cbiAgICBjb25zdCBlbWFpbFBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGVtYWlsUGxhY2UuY2xhc3NOYW1lID0gJ2VtYWlsLWNvbnRhaW5lcic7XG4gICAgY29uc3QgZW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVtYWlsQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW5wdXQtY29udGFpbmVyXCI7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBlbWFpbElucHV0LmNsYXNzTmFtZSA9IFwiZW1haWwtaW5wdXRcIjtcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihlbWFpbENvbnRhaW5lciwgW2VtYWlsSW5wdXQsIGVtYWlsUGxhY2VdKVxuXG4gICAgY29uc3QgbXNnUGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgbXNnUGxhY2UuY2xhc3NOYW1lID0gJ21zZy1jb250YWluZXIgJztcbiAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZXNzYWdlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibXNnLWlucHV0LWNvbnRhaW5lciBpbnB1dC1jb250YWluZXJcIjtcbiAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgbWVzc2FnZUlucHV0LmNsYXNzTmFtZSA9IFwibXNnLWlucHV0XCI7XG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVzc2FnZUNvbnRhaW5lciwgW21lc3NhZ2VJbnB1dCwgbXNnUGxhY2VdKVxuXG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSBcInN1Ym1pdC1idG4gYnRuXCI7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTZW5kIE1lc3NhZ2VcIjtcblxuICAgIFxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oZm9ybUNvbnRhaW5lciwgW2Zvcm1IZWFkZXIsbmFtZUNvbnRhaW5lciwgZW1haWxDb250YWluZXIsIG1lc3NhZ2VDb250YWluZXIsIHN1Ym1pdEJ1dHRvbl0pXG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XG59XG5cbi8vIGluaXRpYWxpemF0aW9uIG9mIHRoZSBtYXAgY29udGFpbmVyXG5mdW5jdGlvbiBjcmVhdGVNYXAoKXtcbiAgICBjb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXBDb250YWluZXIuY2xhc3NOYW1lID0gXCJtYXAtY29udGFpbmVyXCI7XG4gICAgXG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgdGhlIGFycm93IGFuZCB0aGUgbWVzc2FnZSBzaW5jZSBpbWFnZSBkb2VzIG5vdCBoYXZlIHBzZXVkby1lbGVtZW50c1xuICAgIGNvbnN0IG1hcEdwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBtYXBHcHMuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlL0JvcmdpciwrUmV5a2phdiVDMyVBRGssK0ljZWxhbmQvQDY0LjE1MzQxOSwtMjEuNzk0ODg0OSwxNnovZGF0YT0hM20xITRiMSE0bTUhM200ITFzMHg0OGQ2NzQ2YjExN2JmMDU3OjB4NTcyNzMzYzkxOTU3ODc4MSE4bTIhM2Q2NC4xNTI5MTY3ITRkLTIxLjc5MTQxMDNcIlxuICAgIG1hcEdwcy50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIG1hcEdwcy5jbGFzc05hbWUgPSBcIm1hcC1ncHNcIjtcbiAgICBjb25zdCBtYXBNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1hcE1lc3NhZ2UuY2xhc3NOYW1lID0gJ21hcC1tZXNzYWdlJztcblxuICAgIC8vIHNldCB0aGUgaW1hZ2Ugbm9kZSBmb3IgdGhlIGFycm93XG4gICAgY29uc3QgbWFwQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXBBcnJvdy5zcmMgPSBhcnJvdztcbiAgICBtYXBBcnJvdy5jbGFzc05hbWUgPSAnbWFwLWFycm93JztcblxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWFwR3BzLCBbbWFwQXJyb3csbWFwTWVzc2FnZV0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWFwQ29udGFpbmVyLCBbbWFwR3BzXSk7XG4gICAgcmV0dXJuIG1hcENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1dGlsLmNyZWF0ZUNvbnRhaW5lcignbWFpbicpOyAvLyBkZWxldGVzIGFuZCBjcmVhdGUgdGhlIG1haW4gc3ViLWNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdHMuY2xhc3NOYW1lID0gJ2NvbnRhY3QtY29udGFpbmVyJ1xuXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCA5MDApIGNvbnRhY3RzLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyJztcbiAgICBlbHNlICBjb250YWN0cy5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJ3JlcGVhdCgyLCAxZnIpJztcbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgOTAwKSBjb250YWN0cy5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcic7XG4gICAgICAgIGVsc2UgIGNvbnRhY3RzLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAncmVwZWF0KDIsIDFmciknO1xuICAgIH1cbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGNvbnRhY3RzLCBbY3JlYXRlSW5mbygpLCBjcmVhdGVGb3JtKCldKVxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oY29udGVudCwgW2NyZWF0ZU1hcCgpLCBjb250YWN0c10pXG4gICAgdXRpbC5pbnNlcnRUbyhjb250ZW50LCAnbWFpbi1jb250YWluZXInKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdCIsIi8qIFxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2hvbWUuY3NzJzsgXG4qL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IGJhbmRmIGZyb20gJy4uL2ltYWdlcy80LnBuZyc7XG5pbXBvcnQgb2sgZnJvbSAnLi4vaW1hZ2VzLzEucG5nJztcblxuXG4vLyBjcmVhdGUgdGFnbGluZVxuZnVuY3Rpb24gY3JlYXRlVGFnbGluZSgpe1xuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3IgdGhlIHRhZ2xpbmVcbiAgICBjb25zdCB0YWdsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YWdsaW5lQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGFnbGluZS1jb250YWluZXJcIlxuXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IGZpcnN0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3RUYWcudGV4dENvbnRlbnQgPSBcIkNIT05LWVwiO1xuXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIDJuZCBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBzZWNvbmRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWNvbmRUYWcudGV4dENvbnRlbnQgPSBcIkpVSUNZXCI7XG5cbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgMm5kIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IGRvZ3RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvZ3RhZy50ZXh0Q29udGVudCA9IFwiQ0hFRVNZXCI7XG4gICAgXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIDJuZCBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBlc2V0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlc2V0YWcudGV4dENvbnRlbnQgPSBcIlRhc3R5XCI7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbih0YWdsaW5lQ29udGFpbmVyLCBbZmlyc3RUYWcsIHNlY29uZFRhZywgZG9ndGFnLCBlc2V0YWddKTsgICBcbiAgICByZXR1cm4gdGFnbGluZUNvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIHNjaGVkXG5mdW5jdGlvbiBjcmVhdGVTY2hlZHVsZSgpe1xuICAgIGNvbnN0IERBWVMgPSBbJ1N1bmRheScgLCdNb25kYXknICwnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknICwnRnJpZGF5JyAsJ1NhdHVyZGF5J11cbiAgICAvKiBcbiAgICAgICAgU0NIRURVTEVcbiAgICAqL1xuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3Igc2NoZWR1bGUgaW5zaWRlIHRoZSBmZWF0dXJlZCBkaXZcbiAgICBjb25zdCBzY2hlZHVsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2NoZWR1bGUtY29udGFpbmVyXCI7XG4gICAgdXRpbC5jaGVja1ZpZXdwb3J0KHNjaGVkdWxlQ29udGFpbmVyLCA5MDAsICdibG9jaycpO1xuXG5cbiAgICAvLyBjcmVhdGUgdGhlIHNjaGVkdWxlIGRpdlxuICAgIGNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NoZWR1bGUuY2xhc3NOYW1lID0gXCJzY2hlZHVsZVwiO1xuICAgIC8vIGNyZWF0ZSB0aGUgaGVhZGVyIGZvciB0aGUgc2NoZWR1bGUgZGl2XG4gICAgY29uc3Qgc2NoZWRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNjaGVkSGVhZGVyLnRleHRDb250ZW50ID0gXCJTY2hlZHVsZTogXCI7XG4gICAgc2NoZWRIZWFkZXIuY2xhc3NOYW1lID0gXCJzY2hlZC1oZWFkZXJcIjtcblxuICAgIC8vIHNldC11cCB0aGUgc2NoZWR1bGUgdGFibGUvZ3JpZCBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICAgIGNvbnN0IHNjaGVkVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY2hlZFRhYmxlLmNsYXNzTmFtZSA9IFwic2NoZWQtdGFibGVcIjsgXG4gICAgbGV0IHNjaGVkVGFibGVFbGVtZW50cyA9IFtdOyAvLyBpbi1jYXNlIG9mIGVtZXJnZW5jeSwgdXNlIHRvIG1hbmlwdWxhdGUgbm9kZVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyMTsgaSsrKXtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzY2hlZFRhYmxlRWxlbWVudHMucHVzaChub2RlKTtcbiAgICAgICAgaWYoaSUzID09IDApIG5vZGUudGV4dENvbnRlbnQgPSBEQVlTW2kvM107XG4gICAgICAgIGVsc2UgaWYoaSUzID09IDIpIG5vZGUudGV4dENvbnRlbnQgPSBcIk9QRU5cIjtcbiAgICAgICAgc2NoZWRUYWJsZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gICAgLy8gQXBwZW5kIGFsbCBuZWNlc3NhcnkgZWxlbWVudHMgaW4gb3JkZXJcbiAgICBzY2hlZHVsZS5hcHBlbmRDaGlsZChzY2hlZEhlYWRlcilcbiAgICBzY2hlZHVsZS5hcHBlbmRDaGlsZChzY2hlZFRhYmxlKTtcbiAgICBzY2hlZHVsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XG4gICAgcmV0dXJuIHNjaGVkdWxlQ29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGUgZGVzY3JpcHRpb25cbmZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKCl7XG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgZGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNDb250YWluZXIuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvbi1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuXG4gICAgY29uc3QgZGVzY0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZGVzY0ltYWdlLnNyYyA9IGJhbmRmO1xuICAgIGRlc2NJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsaWduJywnbGVmdCcpO1xuICAgIGRlc2NJbWFnZS5jbGFzc05hbWUgPSAnZGVzYy1pbWFnZSc7XG5cbiAgICBjb25zdCBkZXNjVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjVGV4dC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cXFxuICAgICAgICBEb25lYyBpcHN1bSBkaWFtLCBjb252YWxsaXMgYmliZW5kdW0gbGFvcmVldCBhdCwgdmVzdGlidWx1bSBzZWQgc2VtLiBcXFxuICAgICAgICBQcmFlc2VudCBhIGVsaXQgdWx0cmljaWVzLCBiaWJlbmR1bSBlcmF0IGFjLCBjb25ndWUgc2VtLiBcXFxuICAgICAgICBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuXFxcbiAgICAgICAgQWVuZWFuIGF1Y3RvciBmcmluZ2lsbGEgZW5pbSBhdCB0cmlzdGlxdWUuIFV0IGVmZmljaXR1ciBzb2xsaWNpdHVkaW4gZXJvcyBldSBibGFuZGl0LlxcXG4gICAgICAgIENyYXMgY29uc2VjdGV0dXIgdXQgYW50ZSBhdCBwZWxsZW50ZXNxdWUuIFBoYXNlbGx1cyBzdXNjaXBpdCwgaXBzdW0gYXQgaGVuZHJlcml0IGlhY3VsaXMsIGxpZ3VsYSB1cm5hIGZhdWNpYnVzIGVyb3MsIGVnZXQgYWxpcXVldCBxdWFtIG1ldHVzIHV0IGp1c3RvLlxcXG4gICAgICAgIFF1aXNxdWUgaW4gcG9ydGEgaXBzdW0uIFV0IGF0IGZlbGlzIG1pLiBJbiBzY2VsZXJpc3F1ZSB0ZW1wb3IgbWFzc2EuIEFlbmVhbiBsZWN0dXMgZHVpLCBjb252YWxsaXMgcXVpcyBuZXF1ZSBuZWMsIG1hbGVzdWFkYSBkaWN0dW0gaXBzdW0uXFxcbiAgICAgICAgTnVuYyBvcmNpIG9yY2ksIHJob25jdXMgcG9ydGEgYW50ZSBhYywgZmV1Z2lhdCBhY2N1bXNhbiByaXN1cy4gTnVuYyB0aW5jaWR1bnQgbWF1cmlzIHZlbCBhbGlxdWFtIGZlcm1lbnR1bS5cIjtcbiAgICBkZXNjVGV4dC5jbGFzc05hbWUgPSAnZGVzYy10ZXh0JztcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5Db250YWluZXIuY2xhc3NOYW1lID0gJ2Rlc2MtYnRuJztcbiAgICBjb25zdCBkZXNjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVzY0J0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XG4gICAgZGVzY0J0bi5jbGFzc05hbWUgPSAnYnRuJztcbiAgICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBidG5JbWcuc3JjID0gb2s7XG4gICAgYnRuSW1nLmNsYXNzTmFtZSA9ICdidG4taW1hZ2UnO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oYnRuQ29udGFpbmVyLCBbYnRuSW1nLCBkZXNjQnRuXSk7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihkZXNjcmlwdGlvbiwgW2Rlc2NJbWFnZSwgZGVzY1RleHQsIGJ0bkNvbnRhaW5lcl0pO1xuICAgIGRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgcmV0dXJuIGRlc0NvbnRhaW5lcjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCl7XG4gICAgY29uc3QgY29udGVudCA9IHV0aWwuY3JlYXRlQ29udGFpbmVyKCdtYWluJyk7XG5cbiAgICAvL2NyZWF0ZSBhIHdpZGUgZGl2IGZvciBmZWF0dXJlIGZvb2RcbiAgICBjb25zdCBmZWF0dXJlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVkLmNsYXNzTmFtZSA9IFwiZmVhdHVyZWRcIjtcbiAgICB1dGlsLm5vZGVSZXNpemUoZmVhdHVyZWQsICcxNjB2dycgLCAnMTMwdncnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyAsIFxuICAgICAgICAoKSA9PiB1dGlsLm5vZGVSZXNpemUoZmVhdHVyZWQsICcxNTB2dycgLCAnMTIwdncnKSxcbiAgICAgICAgZmFsc2UpO1xuXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihmZWF0dXJlZCwgW2NyZWF0ZVNjaGVkdWxlKCksIGNyZWF0ZVRhZ2xpbmUoKV0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oY29udGVudCxbZmVhdHVyZWQsY3JlYXRlRGVzY3JpcHRpb24oKV0pXG4gICAgdXRpbC5pbnNlcnRUbyhjb250ZW50LCAnbWFpbi1jb250YWluZXInKTtcbiAgICByZXR1cm4gJ2hvbWUnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lOyIsIi8qIFxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL21lbnUuY3NzJzsgXG4qL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IGJvcmdpciBmcm9tICcuLi9pbWFnZXMvbG9nbzIucG5nJztcbmltcG9ydCBkcmluayBmcm9tICcuLi9pbWFnZXMvMy5wbmcnO1xuaW1wb3J0IGNvbWJvIGZyb20gJy4uL2ltYWdlcy80LnBuZyc7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgYnVyZ2VyczogW2JvcmdpciwgXCJCdXJnZXJcIl0sXG4gICAgZHJpbmtzOiBbZHJpbmssIFwiRHJpbmtcIl0sXG4gICAgY29tYm9zOiBbY29tYm8sIFwiQ29tYm9cIl0sXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lYWxzKGxlbiwgdHlwZSl7XG4gICAgY29uc3QgbWVhbFN1YkNvbnRhaW5lciA9IHV0aWwuY3JlYXRlQ29udGFpbmVyKCdtZWFsU3ViQ29udGFpbmVyJyk7XG4gICAgbWVhbFN1YkNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lYWwtc3ViLWNvbnRhaW5lclwiO1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE2MCkgbWVhbFN1YkNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke01hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGgvMjAwKX0sIDFmcilgO1xuICAgIGVsc2UgbWVhbFN1YkNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJ3JlcGVhdCg1LCAxZnIpJztcbiAgICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMTYwKSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7TWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aC8yMDApfSwgMWZyKWA7XG4gICAgICAgIGVsc2UgbWVhbFN1YkNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCg1LCAxZnIpYDs7XG4gICAgfSlcbiAgICBjb25zdCBtZWFscyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgIGNvbnN0IG1lYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbWVhbEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1lYWxJbWFnZS5zcmMgPSB0eXBlWzBdO1xuICAgICAgICBtZWFsSW1hZ2UuY2xhc3NOYW1lID0gJ21lYWwtaW1hZ2UnO1xuICAgICAgICBjb25zdCBtZWFsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG1lYWxOYW1lLnRleHRDb250ZW50ID0gYCR7dHlwZVsxXX1bJHtpfV1gO1xuICAgICAgICBtZWFsTmFtZS5jbGFzc05hbWUgPSAnbWVhbC1uYW1lJztcbiAgICAgICAgY29uc3QgbWVhbFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtZWFsUHJpY2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCArIDIwKSArIGl9LjAwYDtcbiAgICAgICAgbWVhbFByaWNlLmNsYXNzTmFtZSA9ICdtZWFsLXByaWNlJztcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGR1cGxpY2F0aW5nIGJvcmRlcnM7XG4gICAgICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVhbCwgW21lYWxJbWFnZSwgbWVhbE5hbWUsIG1lYWxQcmljZV0pO1xuICAgICAgICBtZWFscy5wdXNoKG1lYWwpO1xuICAgIH1cbiAgICB1dGlsLmluc2VydENoaWxkcmVuKG1lYWxTdWJDb250YWluZXIsIG1lYWxzKTtcbiAgICByZXR1cm4gbWVhbFN1YkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhdGVNZWFsKGxlbiwgdHlwZSl7XG4gICAgY29uc3QgbWVhbENvbnRhaW5lciA9IHV0aWwuY3JlYXRlQ29udGFpbmVyKCdtZWFsLWNvbnRhaW5lcicpO1xuICAgIG1lYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21lYWwtY29udGFpbmVyJztcbiAgICBjb25zdCBtZWFsU3ViQ29udGFpbmVyID0gY3JlYXRlTWVhbHMobGVuLCB0eXBlKTtcbiAgICBcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKG1lYWxDb250YWluZXIsIFttZWFsU3ViQ29udGFpbmVyXSk7XG4gICAgcmV0dXJuIG1lYWxDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoKXtcbiAgICBjb25zdCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9uc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9wdGlvbnMtY29udGFpbmVyXCI7XG4gICAgdXRpbC5jaGVja1ZpZXdwb3J0KG9wdGlvbnNDb250YWluZXIsIDExNjAsICdncmlkJyk7XG5cbiAgICBjb25zdCBidXJnZXJPcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXJnZXJPcHQudGV4dENvbnRlbnQgPSBcIkJ1cmdlcnNcIjtcbiAgICBidXJnZXJPcHQuaWQgPSBcImJ1cmdlcnNcIjtcbiAgICBidXJnZXJPcHQuY2xhc3NOYW1lID0gXCJjdXJyZW50XCI7XG4gICAgY29uc3QgZHJpbmtzT3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJpbmtzT3B0LnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgICBkcmlua3NPcHQuaWQgPSBcImRyaW5rc1wiO1xuICAgIGNvbnN0IGNvbWJvT3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tYm9PcHQudGV4dENvbnRlbnQgPSBcIkNvbWJvc1wiO1xuICAgIGNvbWJvT3B0LmlkID0gXCJjb21ib3NcIjtcblxuICAgIGxldCBidXR0b25zID0gW2J1cmdlck9wdCwgZHJpbmtzT3B0LCBjb21ib09wdF07XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT57XG4gICAgICAgICAgICBpZighYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudCcpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNZWFsID0gY3JlYXRlTWVhbHMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCArIDIpLCBvcHRpb25zW2J1dHRvbi5pZF0pO1xuICAgICAgICAgICAgICAgIHV0aWwuaW5zZXJ0VG8obmV3TWVhbCwgJ21lYWwtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgdXRpbC5yZW1vdmVDbGFzcyhidXR0b25zLCAnY3VycmVudCcpXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihvcHRpb25zQ29udGFpbmVyLCBidXR0b25zKTtcbiAgICByZXR1cm4gb3B0aW9uc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1dGlsLmNyZWF0ZUNvbnRhaW5lcignbWFpbicpO1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDExNjApIG1lbnVDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInO1xuICAgIGVsc2UgbWVudUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzhmciAyZnInO1xuICAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDExNjApIG1lbnVDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInO1xuICAgICAgICBlbHNlIG1lbnVDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICc4ZnIgMmZyJztcbiAgICB9KVxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVudUNvbnRhaW5lciwgW2luaXRpYXRlTWVhbCg5LCBvcHRpb25zLmJ1cmdlcnMpLCBjcmVhdGVPcHRpb25zKCldKTtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGNvbnRlbnQsIFttZW51Q29udGFpbmVyXSk7XG4gICAgdXRpbC5pbnNlcnRUbyhjb250ZW50LCAnbWFpbi1jb250YWluZXInKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnUiLCJcbi8vIHJlbW92ZSB0aGUgYWN0aXZlIGNsYXNzIG9uIGV2ZXJ5IG5vZGVzIGluIGFuIGFycmF5IG9mIEhUTUwgZWxlbWVudHNcbmNvbnN0IHJlbW92ZUNsYXNzID0gKGFyciwgYykgPT4ge1xuICAgIGFyci5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYykpXG59XG5cbi8vIGhpZGUgbm9kZSBpZiB2aWV3cG9ydCBpcyBzbWFsbFxuY29uc3QgY2hlY2tWaWV3cG9ydCA9IChub2RlLCBzaXplLCBkaXNwbGF5KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCBzaXplKSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IHNpemUpIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgfSwgZmFsc2UpO1xufVxuLy8gcmVzaXplIG5vZGUgYmFja2dyb3VuZCBpZiB2aWV3cG9ydCBpcyBzbWFsbFxuY29uc3Qgbm9kZVJlc2l6ZSA9IChub2RlLCBtaW4sIG1heCkgPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTIwMCkgIHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJ3RvcCc7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBtaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAnY2VudGVyJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1heDtcbiAgICB9XG59XG5jb25zdCBpbnNlcnRDaGlsZHJlbiA9IChwYXJlbnQsIGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbn1cbi8vIGluc2VydCB0byBtYWluLWNvbnRhaW5lclxuY29uc3QgaW5zZXJ0VG8gPSAoY29udGVudCwgcGFyZW50KSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQpLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKGlkKSA9PntcbiAgICAvLyByZW1vdmUgdGhlIG1haW4gY29udGVudCBpZiB0aGVyZSBpc1xuICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYocHJldikgcHJldi5yZW1vdmUoKTsgXG5cbiAgICAvLyBjcmVhdGUgbmV3IG9uZVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gaWQ7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVDb250YWluZXIsXG4gICAgaW5zZXJ0VG8sXG4gICAgaW5zZXJ0Q2hpbGRyZW4sXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgY2hlY2tWaWV3cG9ydCxcbiAgICBub2RlUmVzaXplXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9tYXAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytTaGFycDp3Z2h0QDQwMCZkaXNwbGF5PWlubGluZS1ibG9jayk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFwLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwMHB4OyAgXFxufVxcbi5tYXAtaW1hZ2V7XFxuICAgIGhlaWdodDptYXgoNTAwcHgsIDQwdncpO1xcbn1cXG4ubWFwLWdwc3tcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTBmciAxZnI7XFxuICAgIHRvcDogNTAlO1xcbiAgICByaWdodDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCAydncsIDEzcHgpO1xcbn1cXG4ubWFwLWFycm93e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluKDN2dywgNTBweClcXG59XFxuLm1hcC1tZXNzYWdle1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuLm1hcC1hcnJvdzpob3ZlcntcXG4gICAgaGVpZ2h0OiBtaW4oMy4ydncsIDU1cHgpXFxufVxcbi5tYXAtbWVzc2FnZTo6YWZ0ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGxlZnQ6LTI1cHg7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcXG4gICAgY29sb3I6YmxhY2tcXG59XFxuLm1hcC1hcnJvdzpob3ZlciArIC5tYXAtbWVzc2FnZTo6YWZ0ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGNvbnRlbnQ6IFxcXCJXZSBhcmUgaGVyZVxcXCI7XFxufVxcblxcblxcbi5jb250YWN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBtYXJnaW46IDQwcHggMTUlO1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxufVxcbi5jb250YWN0LWNvbnRhaW5lciAqe1xcbiAgICBtYXJnaW46MDtcXG59XFxuLnRleHQtY29udGFpbmVyLCAubnVtYmVyLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luOjIwcHggMDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnI7XFxuICAgIGhlaWdodDoxMDBweDtcXG59XFxuLnRleHQtY29udGFpbmVyICsgLm51bWJlci1jb250YWluZXIgPiAqe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubnVtLWxvZ297XFxuICAgIGNvbG9yOiNmNWMxMTM7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciA0ZnIgMWZyO1xcbiAgICByb3ctZ2FwOjIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uaGVhZGVye1xcbiAgICBmb250LXNpemU6IGNsYW1wKDI1cHgsIDR2dywzNXB4KTtcXG59XFxuLnN1Yi1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgM3Z3LDI1cHgpO1xcbn1cXG4uZm9ybS1oZWFkZXJ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcbi5uYW1lLWlucHV0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOjIwcHg7XFxufVxcbmlucHV0e1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG91dGxpbmU6bm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y1YzExMztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5tc2ctaW5wdXQtY29udGFpbmVye1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubXNnLWlucHV0e1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVjMTEzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDoxNTBweDtcXG4gICAgbWluLWhlaWdodDozMHB4O1xcbiAgICByZXNpemU6dmVydGljYWw7XFxufVxcblxcblxcbi5maXJzdC1jb250YWluZXI6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiRmlyc3QgTmFtZVxcXCJcXG59XFxuLmxhc3QtY29udGFpbmVyOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIkxhc3QgTmFtZVxcXCJcXG59XFxuLmVtYWlsLWNvbnRhaW5lcjo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJFbWFpbFxcXCJcXG59XFxuLm1zZy1jb250YWluZXI6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiTWVzc2FnZVxcXCI7XFxufVxcbi5pbnB1dC1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5pbnB1dCB+IGRpdjo6YWZ0ZXIgLHRleHRhcmVhIH4gZGl2OjphZnRlcntcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDE1cHgsIDJ2dywyMHB4KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsXFxuICAgICAgICB0b3AgMC4zcyxcXG4gICAgICAgIGZvbnQtc2l6ZSAwLjNzO1xcbn1cXG5pbnB1dDpmb2N1cy13aXRoaW4gfiBkaXY6OmFmdGVyLCB0ZXh0YXJlYTpmb2N1cy13aXRoaW4gfiBkaXY6OmFmdGVyLCAgaW5wdXQ6dmFsaWQgfiBkaXY6OmFmdGVyLCB0ZXh0YXJlYTp2YWxpZCB+IGRpdjo6YWZ0ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDotMjBweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCAydncsMTVweCk7XFxuICAgIGNvbG9yOiAjYmU5NTBmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnN1Ym1pdC1idG57XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgcGFkZGluZzo1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDE3cHgsIDJ2dywyNXB4KTtcXG59XFxuLnN1Ym1pdC1idG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29udGFjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1EQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEI7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFVBQVU7SUFDVix3QkFBd0I7SUFDeEI7QUFDSjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsUUFBUTtBQUNaO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEI7O3NCQUVrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucytTaGFycDp3Z2h0QDQwMCZkaXNwbGF5PWlubGluZS1ibG9jaycpO1xcblxcblxcbi5tYXAtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL21hcC5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNTAwcHg7ICBcXG59XFxuLm1hcC1pbWFnZXtcXG4gICAgaGVpZ2h0Om1heCg1MDBweCwgNDB2dyk7XFxufVxcbi5tYXAtZ3Bze1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMGZyIDFmcjtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEwcHgsIDJ2dywgMTNweCk7XFxufVxcbi5tYXAtYXJyb3d7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBtaW4oM3Z3LCA1MHB4KVxcbn1cXG4ubWFwLW1lc3NhZ2V7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG4ubWFwLWFycm93OmhvdmVye1xcbiAgICBoZWlnaHQ6IG1pbigzLjJ2dywgNTVweClcXG59XFxuLm1hcC1tZXNzYWdlOjphZnRlcntcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgbGVmdDotMjVweDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xcbiAgICBjb2xvcjpibGFja1xcbn1cXG4ubWFwLWFycm93OmhvdmVyICsgLm1hcC1tZXNzYWdlOjphZnRlcntcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY29udGVudDogXFxcIldlIGFyZSBoZXJlXFxcIjtcXG59XFxuXFxuXFxuLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIG1hcmdpbjogNDBweCAxNSU7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG59XFxuLmNvbnRhY3QtY29udGFpbmVyICp7XFxuICAgIG1hcmdpbjowO1xcbn1cXG4udGV4dC1jb250YWluZXIsIC5udW1iZXItY29udGFpbmVye1xcbiAgICBtYXJnaW46MjBweCAwO1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbn1cXG4udGV4dC1jb250YWluZXIgKyAubnVtYmVyLWNvbnRhaW5lciA+ICp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5udW0tbG9nb3tcXG4gICAgY29sb3I6I2Y1YzExMztcXG59XFxuXFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDRmciAxZnI7XFxuICAgIHJvdy1nYXA6MjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjVweCwgNHZ3LDM1cHgpO1xcbn1cXG4uc3ViLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAzdncsMjVweCk7XFxufVxcbi5mb3JtLWhlYWRlcntcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuLm5hbWUtaW5wdXQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6MjBweDtcXG59XFxuaW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgb3V0bGluZTpub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVjMTEzO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLm1zZy1pbnB1dC1jb250YWluZXJ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcbi5tc2ctaW5wdXR7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWMxMTM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OjE1MHB4O1xcbiAgICBtaW4taGVpZ2h0OjMwcHg7XFxuICAgIHJlc2l6ZTp2ZXJ0aWNhbDtcXG59XFxuXFxuXFxuLmZpcnN0LWNvbnRhaW5lcjo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJGaXJzdCBOYW1lXFxcIlxcbn1cXG4ubGFzdC1jb250YWluZXI6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiTGFzdCBOYW1lXFxcIlxcbn1cXG4uZW1haWwtY29udGFpbmVyOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIkVtYWlsXFxcIlxcbn1cXG4ubXNnLWNvbnRhaW5lcjo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJNZXNzYWdlXFxcIjtcXG59XFxuLmlucHV0LWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcbmlucHV0IH4gZGl2OjphZnRlciAsdGV4dGFyZWEgfiBkaXY6OmFmdGVye1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTVweCwgMnZ3LDIwcHgpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyxcXG4gICAgICAgIHRvcCAwLjNzLFxcbiAgICAgICAgZm9udC1zaXplIDAuM3M7XFxufVxcbmlucHV0OmZvY3VzLXdpdGhpbiB+IGRpdjo6YWZ0ZXIsIHRleHRhcmVhOmZvY3VzLXdpdGhpbiB+IGRpdjo6YWZ0ZXIsICBpbnB1dDp2YWxpZCB+IGRpdjo6YWZ0ZXIsIHRleHRhcmVhOnZhbGlkIH4gZGl2OjphZnRlcntcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOi0yMHB4O1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEwcHgsIDJ2dywxNXB4KTtcXG4gICAgY29sb3I6ICNiZTk1MGY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc3VibWl0LWJ0bntcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOjIwMHB4O1xcbiAgICBwYWRkaW5nOjVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTdweCwgMnZ3LDI1cHgpO1xcbn1cXG4uc3VibWl0LWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzExMztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZlYXR1cmVke1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluKDQwMHB4LCA0NXZoKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd2FsbHBhcGVyY2F2ZS5jb20vd3Avd3A0MDU2MTkxLmpwZykgbm8tcmVwZWF0IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwZW0gMTBlbSAjMDAwMDAwNjA7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMmZyIDFmciAxZnI7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+ICp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6Zmlyc3QtY2hpbGR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg2MHB4LCAxMnZoLCAxNDBweCk7XFxuICAgIG1hcmdpbjotMTBweCAwO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNTBweCwgMTB2aCwgMTAwcHgpO1xcbiAgICBtYXJnaW46LTEwcHggMDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOm50aC1jaGlsZCgzKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDMwcHgsIDZ2aCwgNjBweCk7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpsYXN0LWNoaWxke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgNnZoLCA0MHB4KTtcXG59XFxuLnNjaGVkdWxlLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgcmlnaHQ6MDtcXG59XFxuLnNjaGVkdWxle1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMwMTM4MDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC1oZWFkZXJ7XFxuICAgIGhlaWdodDo0JTsgXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDN2aCwgMnJlbSk7XFxuICAgIG1hcmdpbjowO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcbi5zY2hlZC10YWJsZSA+ICp7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zY2hlZC10YWJsZSA+IDpudGgtY2hpbGQoM24rMyl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWNhYzFjO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgbWFyZ2luOiAwIDVweFxcbn1cXG4uc2NoZWQtdGFibGUgPiA6bnRoLWNoaWxkKDNuICsgMil7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDAwMDA7XFxufVxcbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OmNsYW1wKDE1JSwgMnZ3LCAyNSUpO1xcbiAgICBtYXJnaW4tcmlnaHQ6Y2xhbXAoMTUlLCAydncsIDI1JSk7XFxuICAgIHBhZGRpbmc6MjBweDtcXG59XFxuLmRlc2MtaW1hZ2V7XFxuICAgIGhlaWdodDpjbGFtcCgxMDBweCwgMjB2dywgMjUwcHgpO1xcbn1cXG4uZGVzYy10ZXh0e1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsMnZ3LDI1cHgpO1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5kZXNjLWJ0bntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiBtaW4oMjAwcHgsMzAlKTtcXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzExMztcXG59XFxuLmJ0bi1pbWFnZXtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsMkVBQTJFO0lBQzNFLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixPQUFPO0FBQ1g7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksU0FBUztJQUNULHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsUUFBUTtJQUNSLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mZWF0dXJlZHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IG1pbig0MDBweCwgNDV2aCk7XFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3dhbGxwYXBlcmNhdmUuY29tL3dwL3dwNDA1NjE5MS5qcGcpIG5vLXJlcGVhdCByaWdodDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMGVtIDEwZW0gIzAwMDAwMDYwO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFnbGluZS1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDJmciAxZnIgMWZyO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiAqe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOmZpcnN0LWNoaWxke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNjBweCwgMTJ2aCwgMTQwcHgpO1xcbiAgICBtYXJnaW46LTEwcHggMDtcXG59XFxuLnRhZ2xpbmUtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKXtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDUwcHgsIDEwdmgsIDEwMHB4KTtcXG4gICAgbWFyZ2luOi0xMHB4IDA7XFxufVxcbi50YWdsaW5lLWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMyl7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgzMHB4LCA2dmgsIDYwcHgpO1xcbn1cXG4udGFnbGluZS1jb250YWluZXIgPiA6bGFzdC1jaGlsZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDIwcHgsIDZ2aCwgNDBweCk7XFxufVxcbi5zY2hlZHVsZS1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIHJpZ2h0OjA7XFxufVxcbi5zY2hlZHVsZXtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjMDEzODA7XFxuICAgIGhlaWdodDogOTAlO1xcbn1cXG4uc2NoZWQtaGVhZGVye1xcbiAgICBoZWlnaHQ6NCU7IFxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAzdmgsIDJyZW0pO1xcbiAgICBtYXJnaW46MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2NoZWQtdGFibGV7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbn1cXG4uc2NoZWQtdGFibGUgPiAqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uc2NoZWQtdGFibGUgPiA6bnRoLWNoaWxkKDNuKzMpe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFjYWMxYztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIG1hcmdpbjogMCA1cHhcXG59XFxuLnNjaGVkLXRhYmxlID4gOm50aC1jaGlsZCgzbiArIDIpe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjMDAwMDAwO1xcbn1cXG4uZGVzY3JpcHRpb24tY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDpjbGFtcCgxNSUsIDJ2dywgMjUlKTtcXG4gICAgbWFyZ2luLXJpZ2h0OmNsYW1wKDE1JSwgMnZ3LCAyNSUpO1xcbiAgICBwYWRkaW5nOjIwcHg7XFxufVxcbi5kZXNjLWltYWdle1xcbiAgICBoZWlnaHQ6Y2xhbXAoMTAwcHgsIDIwdncsIDI1MHB4KTtcXG59XFxuLmRlc2MtdGV4dHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LDJ2dywyNXB4KTtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4uZGVzYy1idG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogbWluKDIwMHB4LDMwJSk7XFxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxufVxcbi5idG4taW1hZ2V7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1lbnUtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDJmcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbn1cXG4ubWVhbC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6MTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcXG59XFxuLm1lYWwtc3ViLWNvbnRhaW5lcntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzExMztcXG59XFxuLm1lYWwtc3ViLWNvbnRhaW5lciA+IGRpdntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOjEwcHggNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWluKDMwMHB4LCAzMHZ3KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXIgPiBkaXY6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXIgPiBkaXY6aG92ZXI6OmFmdGVye1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlOyAgICBcXG59XFxuLm1lYWwtbmFtZXtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCA0dncsIDMwcHgpO1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxufVxcbi5tZWFsLWltYWdle1xcbiAgICBoZWlnaHQ6IG1pbig1MCUsIDIwMHB4KTtcXG59XFxuLm1lYWwtcHJpY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjMTEzO1xcbiAgICB3aWR0aDo2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXIgPiBkaXY6aG92ZXIgLm1lYWwtcHJpY2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWVhbC1zdWItY29udGFpbmVyID4gZGl2OjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlci1yaWdodDozcHggc29saWQgI2Y1YzExMztcXG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgI2Y1YzExMztcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGJvdHRvbToxMHB4O1xcbn1cXG5cXG5cXG4ub3B0aW9ucy1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm9wdGlvbnMtY29udGFpbmVyID4gYnV0dG9uOm5vdCguY3VycmVudCl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGhlaWdodDo2MHB4O1xcbiAgICB3aWR0aDoyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzExMztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xcbn1cXG4ub3B0aW9ucy1jb250YWluZXIgPiBidXR0b246aG92ZXI6bm90KC5jdXJyZW50KXtcXG4gICAgaGVpZ2h0OjcwcHg7XFxufVxcbi5vcHRpb25zLWNvbnRhaW5lciA+IGJ1dHRvbjphY3RpdmU6bm90KC5jdXJyZW50KXtcXG4gICAgaGVpZ2h0OjU1cHg7XFxufVxcbi5jdXJyZW50e1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjVjMTEzO1xcbiAgICBoZWlnaHQ6NjBweDtcXG4gICAgd2lkdGg6MjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHhcXG59XFxuLm5vLWJvcmRlci1yaWdodHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tZW51LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhmciAyZnI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcXG59XFxuLm1lYWwtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOjEwcHg7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXJ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDFmcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWMxMTM7XFxufVxcbi5tZWFsLXN1Yi1jb250YWluZXIgPiBkaXZ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzoxMHB4IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IG1pbigzMDBweCwgMzB2dyk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWVhbC1zdWItY29udGFpbmVyID4gZGl2OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjMTEzO1xcbn1cXG4ubWVhbC1zdWItY29udGFpbmVyID4gZGl2OmhvdmVyOjphZnRlcntcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgICAgXFxufVxcbi5tZWFsLW5hbWV7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTBweCwgNHZ3LCAzMHB4KTtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbn1cXG4ubWVhbC1pbWFnZXtcXG4gICAgaGVpZ2h0OiBtaW4oNTAlLCAyMDBweCk7XFxufVxcbi5tZWFsLXByaWNle1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YzExMztcXG4gICAgd2lkdGg6NjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4ubWVhbC1zdWItY29udGFpbmVyID4gZGl2OmhvdmVyIC5tZWFsLXByaWNle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm1lYWwtc3ViLWNvbnRhaW5lciA+IGRpdjo6YWZ0ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXItcmlnaHQ6M3B4IHNvbGlkICNmNWMxMTM7XFxuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICNmNWMxMTM7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBib3R0b206MTBweDtcXG59XFxuXFxuXFxuLm9wdGlvbnMtY29udGFpbmVye1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5vcHRpb25zLWNvbnRhaW5lciA+IGJ1dHRvbjpub3QoLmN1cnJlbnQpe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6NjBweDtcXG4gICAgd2lkdGg6MjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWMxMTM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcXG59XFxuLm9wdGlvbnMtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyOm5vdCguY3VycmVudCl7XFxuICAgIGhlaWdodDo3MHB4O1xcbn1cXG4ub3B0aW9ucy1jb250YWluZXIgPiBidXR0b246YWN0aXZlOm5vdCguY3VycmVudCl7XFxuICAgIGhlaWdodDo1NXB4O1xcbn1cXG4uY3VycmVudHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y1YzExMztcXG4gICAgaGVpZ2h0OjYwcHg7XFxuICAgIHdpZHRoOjIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4XFxufVxcbi5uby1ib3JkZXItcmlnaHR7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9UmFsZXdheTp3Z2h0QDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2lkdGg6MTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubG9nb3tcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG59XFxuLmxvZ29UZXh0e1xcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGNvbG9yOiAjZjVjMTEzO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggIzI3MjcyNywgMCAtMXB4ICMyNzI3MjcsXFxuICAgICAgICAxcHggMCAjMjcyNzI3LCAtMXB4IDAgIzI3MjcyNztcXG59XFxuLmxpbmstY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5Nzk3OTc7XFxufVxcbiNsaW5rc3tcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuI2xpbmtzID4gYXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MsXFxuICAgICAgICBvcGFjaXR5IDAuNHM7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDozMHB4O1xcbiAgICByaWdodDozMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5hY3RpdmV7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSl7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6aG92ZXJ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWN0aXZle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNsaW5rcyA+IGE6YWZ0ZXJ7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyxcXG4gICAgICAgIGxlZnQgMC4zcyxcXG4gICAgICAgIHJpZ2h0IDAuM3M7XFxufVxcbiNsaW5rcyA+IGE6bm90KC5hY3RpdmUpOmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDoxMDBweDtcXG4gICAgcmlnaHQ6MTAwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6aG92ZXI6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MzBweDtcXG4gICAgcmlnaHQ6MzBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uYWN0aXZlOjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyNzI3Mjc7XFxuICAgIGxlZnQ6MjBweDtcXG4gICAgcmlnaHQ6MjBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4uZmVhdHVyZWR7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcbi5mb290ZXJ7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc7XFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnO1xcbiAgICBoZWlnaHQ6IDI1ICBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvb3RlciAqe1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5mb290ZXIgYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY3JlZGl0c3tcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbn1cXG4uZ2l0aHVie1xcbiAgICBwYWRkaW5nOjNweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi5naXRodWI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4jbWFpbntcXG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDFzO1xcbn1cXG4uYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEycHgsIDN2dywgMjBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQGtleWZyYW1lcyBmYWRlLWlue1xcbiAgICBmcm9te1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0b3tcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2F0aXNmeSc7XFxuICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9zYXRpc2Z5L3YxMS9yUDJIcDJ5bjZsa0c1MExvQ1pPSUhRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy93b3Jrc2Fucy92OS9RR1lfel93TmFoR0FkcVE0M1JoVmNJZ1lUMlh6NXUzMkswblhCaThKcGcud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Q7cUNBQ2lDO0FBQ3JDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtvQkFDZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJOztrQkFFYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhGQUE4RjtBQUNsRztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtIQUFrSDtBQUN0SFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwJmZhbWlseT1SYWxld2F5OndnaHRAOTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA5MDAmZGlzcGxheT1zd2FwJyk7XFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDoxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4jaGVhZGVye1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sb2dve1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbn1cXG4ubG9nb1RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgY29sb3I6ICNmNWMxMTM7XFxuICAgIHRleHQtc2hhZG93OiAwIDFweCAjMjcyNzI3LCAwIC0xcHggIzI3MjcyNyxcXG4gICAgICAgIDFweCAwICMyNzI3MjcsIC0xcHggMCAjMjcyNzI3O1xcbn1cXG4ubGluay1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5NztcXG59XFxuI2xpbmtze1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4jbGlua3MgPiBhe1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW46IDBweCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyxcXG4gICAgICAgIG9wYWNpdHkgMC40cztcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjMwcHg7XFxuICAgIHJpZ2h0OjMwcHg7XFxuICAgIGJvdHRvbTogLTVweDtcXG59XFxuLmFjdGl2ZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKXtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTpob3ZlcntcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTphY3RpdmV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuI2xpbmtzID4gYTphZnRlcntcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzLFxcbiAgICAgICAgbGVmdCAwLjNzLFxcbiAgICAgICAgcmlnaHQgMC4zcztcXG59XFxuI2xpbmtzID4gYTpub3QoLmFjdGl2ZSk6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjcyNzI3O1xcbiAgICBsZWZ0OjEwMHB4O1xcbiAgICByaWdodDoxMDBweDtcXG4gICAgYm90dG9tOiAtNXB4O1xcbn1cXG4jbGlua3MgPiBhOm5vdCguYWN0aXZlKTpob3ZlcjphZnRlcntcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMC40O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDozMHB4O1xcbiAgICByaWdodDozMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5hY3RpdmU6OmFmdGVye1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI3MjcyNztcXG4gICAgbGVmdDoyMHB4O1xcbiAgICByaWdodDoyMHB4O1xcbiAgICBib3R0b206IC01cHg7XFxufVxcbi5mZWF0dXJlZHtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuLmZvb3RlcntcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTc1NztcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2Fucyc7XFxuICAgIGhlaWdodDogMjUgIHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZm9vdGVyICp7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmZvb3RlciBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jcmVkaXRze1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XFxufVxcbi5naXRodWJ7XFxuICAgIHBhZGRpbmc6M3B4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuLmdpdGh1Yjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbiNtYWlue1xcbiAgICBhbmltYXRpb246IGZhZGUtaW4gMXM7XFxufVxcbi5idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTJweCwgM3Z3LCAyMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUtaW57XFxuICAgIGZyb217XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRve1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTYXRpc2Z5JztcXG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3NhdGlzZnkvdjExL3JQMkhwMnluNmxrRzUwTG9DWk9JSFEud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJztcXG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3dvcmtzYW5zL3Y5L1FHWV96X3dOYWhHQWRxUTQzUmhWY0lnWVQyWHo1dTMySzBuWEJpOEpwZy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9jb250YWN0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21lbnUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaG9tZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9zY3JpcHRzL2hvbWUuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9zY3JpcHRzL21lbnUuanMnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9zY3JpcHRzL2NvbnRhY3QuanMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3NjcmlwdHMvdXRpbC5qcyc7XG5pbXBvcnQgbG9nIGZyb20gJy4vaW1hZ2VzL2xvZ28yLnBuZyc7XG5pbXBvcnQgZ2ggZnJvbSAnLi9pbWFnZXMvZ2l0aHViLTY0LnBuZyc7XG5cblxuXG5sZXQgY3VycmVudCA9ICdjb250YWN0JztcbmxldCB0YWJGdW5jdGlvbiA9IHtcbiAgICBob21lOiBjcmVhdGVIb21lLFxuICAgIG1lbnU6IGNyZWF0ZU1lbnUsXG4gICAgY29udGFjdDogY3JlYXRlQ29udGFjdFxufVxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyXCI7XG5cbiAgICBjb25zdCBjcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNyZWRpdHMudGV4dENvbnRlbnQgPSAnSWNvbnMgZGVzaWduZWQgYnkgJztcbiAgICBjcmVkaXRzLmNsYXNzTmFtZSA9ICdjcmVkaXRzJztcbiAgICBjb25zdCBjcmVkaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNyZWRpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vdmVjdG9ycy9sb2dvXCJcbiAgICBjcmVkaXRMaW5rLnRleHRDb250ZW50ID0gJ3Jvc2Vyb2Rpb25vdmEgLyBGcmVlcGlrJztcblxuICAgIGNvbnN0IGdpdGh1YiA9IG5ldyBJbWFnZSgpXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYWJvdXQuaHJlZiA9IFwiaHR0cHM6Ly9hcmNoLWJzb2ouZ2l0aHViLmlvL3Byb2plY3Qtb2Rpbi9cIjtcbiAgICBhYm91dC50YXJnZXQgPSBcIl9ibGFua1wiXG4gICAgZ2l0aHViLmNsYXNzTmFtZSA9ICdnaXRodWInO1xuICAgIGdpdGh1Yi5zcmMgPSBnaDtcbiAgICBnaXRodWIuc2V0QXR0cmlidXRlKCdhbGlnbicsICdyaWdodCcpXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoZ2l0aHViKVxuICAgIGNyZWRpdHMuYXBwZW5kQ2hpbGQoY3JlZGl0TGluayk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdHMpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5mdW5jdGlvbiBpbml0aWF0ZVBhZ2UoKXtcbiAgICAvLyBnZXQgZGl2I2NvbnRlbnRcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciB0aGUgaGVhZGVyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBjb250YWluZXIgZm9yIGxpbmtzIHRvIGNlbnRlciB0aGUgdGV4dCBcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIC8vIGxpbmtzIHN1YmNvbnRhaW5lciwgdXNlIGZvciBub3QgYWZmZWN0aW5nIHRoZSBvdGhlciBsaW5rIHdoZW4gaG92ZXJpbmdcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmtDb250YWluZXIuY2xhc3NOYW1lID0gXCJsaW5rLWNvbnRhaW5lclwiO1xuICAgIGxpbmtzLmlkID0gXCJsaW5rc1wiO1xuICAgIGNvbnRhaW5lci5pZCA9IFwiaGVhZGVyXCI7XG5cbiAgICAvLyBjcmVhdGUgbG9nbyB0ZW1wbGF0ZSBmb3IgdGhlIHdlYnBhZ2VcbiAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbG9nb1RleHQuY2xhc3NOYW1lID0gXCJsb2dvVGV4dFwiO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiQm9yZ2lyIEZldmVyXCI7XG4gICAgbG9nby5jbGFzc05hbWUgPSBcImxvZ29cIjtcbiAgICBsb2dvLnNyYyA9IGxvZ1xuXG4gICAgLy8gY3JlYXRlIHRoZSBlbGVtZW50IGZvciB0aGUgbGlua3NcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBob21lLmlkID0gXCJob21lXCI7XG4gICAgbWVudS5pZCA9IFwibWVudVwiO1xuICAgIGNvbnRhY3QuaWQgPSBcImNvbnRhY3RcIjtcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb25zdCB0YWJMaXN0ID0ge2hvbWUsbWVudSwgY29udGFjdH1cblxuICAgIC8vIGluc2VydCB0aGUgZWxlbWVudHMgdG8gYW4gb2JqZWN0IHNvIG90aGVyIHNjcmlwdHMgd2lsbCBiZSBhYmxlIHRvIGFjY2VzcyB0aGUgZWxlbWVudHMuXG4gICAgdGFiTGlzdFtjdXJyZW50XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgIC8vIHNldCBvbmNsaWNrIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBsaW5rXG4gICAgT2JqZWN0LnZhbHVlcyh0YWJMaXN0KS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmsub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKCFsaW5rLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBsaW5rLmlkO1xuICAgICAgICAgICAgICAgIHV0aWwucmVtb3ZlQ2xhc3MoT2JqZWN0LnZhbHVlcyh0YWJMaXN0KSwgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB0YWJGdW5jdGlvbltjdXJyZW50XSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gYWRkIHRoZSBsaW5rcyB0byB0aGUgc3ViY29udGFpbmVyXG4gICAgT2JqZWN0LnZhbHVlcyh0YWJMaXN0KS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxpbmtzLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xuXG5cbiAgICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciB0aGUgY29udGVudCBvZiBlYWNoIHRhYlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmlkID0gXCJtYWluLWNvbnRhaW5lclwiO1xuXG4gICAgLy8gYWRkIHRoZSBzdWJjb250YWluZXIgdG8gdGhlIG1haW4gbGluayBjb250YWluZXJcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtzKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTsgLy8gYWRkIHRoZSBsb2dvIGluIGEgY29udGFpbmVyIHRvIGNlbnRlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvVGV4dCk7IFxuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpOyAvLyBhZGQgdGhlIGxvZ28gZmlyc3QgYmVjYXVzZVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7IC8vIGluc2VydCB0aGUgbGlua3MgYWZ0ZXJcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufSAgIFxuXG5cbmluaXRpYXRlUGFnZSgpO1xudGFiRnVuY3Rpb25bY3VycmVudF0oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=