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

/***/ "./src/images/logo2.png":
/*!******************************!*\
  !*** ./src/images/logo2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80626b4ff57449b3b493.png";

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
    const drawer =  document.createElement('div');
    drawer.id = "mini-drawer";
    drawer.className = "mini-drawer";
    
    const burgerBtn = document.createElement('button');
    burgerBtn.textContent = "Burgers";
    burgerBtn.id = "burgers";
    burgerBtn.className = "drawer-btn curr";
    const drinkBtn = document.createElement('button');
    drinkBtn.textContent = "Drinks";
    drinkBtn.id = "drinks";
    drinkBtn.className = "drawer-btn";
    const comboBtn = document.createElement('button');
    comboBtn.textContent = "Combo";
    comboBtn.id = "combos";
    comboBtn.className = "drawer-btn";
    let buttons = [burgerBtn, drinkBtn, comboBtn];
    buttons.forEach((button) => {
        button.classList.add("btn");
        button.onclick = () =>{
            if(!button.classList.contains('curr')){
                const newMeal = createMeals(Math.floor(Math.random() * 8 + 2), options[button.id]);
                _util_js__WEBPACK_IMPORTED_MODULE_0__.insertTo(newMeal, 'meal-container');
                _util_js__WEBPACK_IMPORTED_MODULE_0__.removeClass(buttons, 'curr')
                button.classList.add('curr')
            }
        }
    })
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(drawer, [burgerBtn, drinkBtn, comboBtn]);

    if(window.innerWidth < 1160) {
        menuContainer.style.gridTemplateColumns = '1fr';
        drawer.style.display = "grid"
    }
    else {
        menuContainer.style.gridTemplateColumns = '8fr 2fr';
        drawer.style.display = "none"
    }

    window.onresize = () => {
        if(window.innerWidth < 1160) {
            menuContainer.style.gridTemplateColumns = '1fr';
            drawer.style.display = "grid"
        }
        else {
            menuContainer.style.gridTemplateColumns = '8fr 2fr';
            drawer.style.display = "none"
        }
    }
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(menuContainer, [initiateMeal(9, options.burgers), createOptions()]);
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(content, [drawer, menuContainer]);
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
/* harmony export */   "current": () => (/* binding */ current),
/* harmony export */   "setCurrent": () => (/* binding */ setCurrent),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "insertTo": () => (/* binding */ insertTo),
/* harmony export */   "insertChildren": () => (/* binding */ insertChildren),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "checkViewport": () => (/* binding */ checkViewport),
/* harmony export */   "nodeResize": () => (/* binding */ nodeResize)
/* harmony export */ });
let current = "home"
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

const setCurrent = (curr) => current = curr; 



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
/******/ 			// no module.id needed
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
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./src/scripts/util.js");
/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/4.png */ "./src/images/4.png");
/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/1.png */ "./src/images/1.png");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");
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
    btnContainer.onclick = () => {
        _util_js__WEBPACK_IMPORTED_MODULE_0__.setCurrent('menu');
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.default)();
    }

    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(btnContainer, [btnImg, descBtn]);
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(description, [descImage, descText, btnContainer]);
    desContainer.appendChild(description);
    return desContainer;
}

// new create Schedule
function createSchedule(){
    const scheduleContainer = document.createElement('div');
    scheduleContainer.className = "schedule-container";

    const logo = document.createElement('div');
    logo.className = "material-icons-sharp sched-logo"
    logo.textContent = "schedule"
    const schedOneCont = document.createElement('div');
    const schedOne = document.createElement('h1');
    schedOne.className = "sched-one";
    schedOneCont.className = "open";
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(schedOneCont, [logo, schedOne]);

    const schedTwoCont = document.createElement('div');
    const schedTwo = document.createElement('h1');
    schedTwo.className = "sched-two";
    schedTwoCont.className = "open";
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(schedTwoCont, [logo.cloneNode(true), schedTwo]);

    const schedTreeCont = document.createElement('div');
    const schedTree = document.createElement('h1');
    schedTree.className = "sched-tree";
    schedTreeCont.className = "closed";
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(schedTreeCont, [logo.cloneNode(true), schedTree]);

    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(scheduleContainer, [schedOneCont, schedTwoCont, schedTreeCont]);
    return scheduleContainer;
}
function createHome(){
    const content = _util_js__WEBPACK_IMPORTED_MODULE_0__.createContainer('main');

    //create a wide div for feature food
    const featured = document.createElement('div');
    featured.className = "featured";
    window.onresize = () => {
        _util_js__WEBPACK_IMPORTED_MODULE_0__.nodeResize(featured, '160vw' , '130vw');
    };

    _util_js__WEBPACK_IMPORTED_MODULE_0__.nodeResize(featured, '160vw' , '130vw');
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(featured, [createTagline()]);
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertChildren(content,[featured, createSchedule(), createDescription()])
    _util_js__WEBPACK_IMPORTED_MODULE_0__.insertTo(content, 'main-container');
    return 'home';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSw0QjtBQUNBO0FBQ2tDO0FBQ087QUFDTDtBQUNBOztBQUVwQztBQUNBLGNBQWMsOENBQU07QUFDcEIsYUFBYSwwQ0FBSztBQUNsQixhQUFhLDBDQUFLO0FBQ2xCOztBQUVBO0FBQ0EsNkJBQTZCLHFEQUFvQjtBQUNqRDtBQUNBLHdGQUF3RixrQ0FBa0M7QUFDMUg7O0FBRUE7QUFDQSw0RkFBNEYsa0NBQWtDO0FBQzlIO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRLEdBQUcsRUFBRTtBQUMvQztBQUNBO0FBQ0EsbUNBQW1DLHdDQUF3QztBQUMzRTs7QUFFQTtBQUNBLFFBQVEsb0RB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQW1COztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQW1COztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQW1COztBQUV2QixJQUFJLG9EQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQWU7QUFDdkI7O0FBRUEsSUFBSSxnREFBZTtBQUNuQixJQUFJLG9EQUFtQjtBQUN2QixJQUFJLG9EQUFtQjtBQUN2QixJQUFJLDhDQUFhO0FBQ2pCO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFIiwiZmlsZSI6ImhvbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWVudS5jc3MnOyBcbiovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgYm9yZ2lyIGZyb20gJy4uL2ltYWdlcy9sb2dvMi5wbmcnO1xuaW1wb3J0IGRyaW5rIGZyb20gJy4uL2ltYWdlcy8zLnBuZyc7XG5pbXBvcnQgY29tYm8gZnJvbSAnLi4vaW1hZ2VzLzQucG5nJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBidXJnZXJzOiBbYm9yZ2lyLCBcIkJ1cmdlclwiXSxcbiAgICBkcmlua3M6IFtkcmluaywgXCJEcmlua1wiXSxcbiAgICBjb21ib3M6IFtjb21ibywgXCJDb21ib1wiXSxcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVhbHMobGVuLCB0eXBlKXtcbiAgICBjb25zdCBtZWFsU3ViQ29udGFpbmVyID0gdXRpbC5jcmVhdGVDb250YWluZXIoJ21lYWxTdWJDb250YWluZXInKTtcbiAgICBtZWFsU3ViQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVhbC1zdWItY29udGFpbmVyXCI7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMTYwKSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7TWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aC8yMDApfSwgMWZyKWA7XG4gICAgZWxzZSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAncmVwZWF0KDUsIDFmciknO1xuICAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDExNjApIG1lYWxTdWJDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoLzIwMCl9LCAxZnIpYDtcbiAgICAgICAgZWxzZSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KDUsIDFmcilgOztcbiAgICB9KVxuICAgIGNvbnN0IG1lYWxzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBtZWFsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbWVhbEltYWdlLnNyYyA9IHR5cGVbMF07XG4gICAgICAgIG1lYWxJbWFnZS5jbGFzc05hbWUgPSAnbWVhbC1pbWFnZSc7XG4gICAgICAgIGNvbnN0IG1lYWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbWVhbE5hbWUudGV4dENvbnRlbnQgPSBgJHt0eXBlWzFdfVske2l9XWA7XG4gICAgICAgIG1lYWxOYW1lLmNsYXNzTmFtZSA9ICdtZWFsLW5hbWUnO1xuICAgICAgICBjb25zdCBtZWFsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG1lYWxQcmljZS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwICsgMjApICsgaX0uMDBgO1xuICAgICAgICBtZWFsUHJpY2UuY2xhc3NOYW1lID0gJ21lYWwtcHJpY2UnO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZHVwbGljYXRpbmcgYm9yZGVycztcbiAgICAgICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtZWFsLCBbbWVhbEltYWdlLCBtZWFsTmFtZSwgbWVhbFByaWNlXSk7XG4gICAgICAgIG1lYWxzLnB1c2gobWVhbCk7XG4gICAgfVxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVhbFN1YkNvbnRhaW5lciwgbWVhbHMpO1xuICAgIHJldHVybiBtZWFsU3ViQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWF0ZU1lYWwobGVuLCB0eXBlKXtcbiAgICBjb25zdCBtZWFsQ29udGFpbmVyID0gdXRpbC5jcmVhdGVDb250YWluZXIoJ21lYWwtY29udGFpbmVyJyk7XG4gICAgbWVhbENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVhbC1jb250YWluZXInO1xuICAgIGNvbnN0IG1lYWxTdWJDb250YWluZXIgPSBjcmVhdGVNZWFscyhsZW4sIHR5cGUpO1xuICAgIFxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVhbENvbnRhaW5lciwgW21lYWxTdWJDb250YWluZXJdKTtcbiAgICByZXR1cm4gbWVhbENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucygpe1xuICAgIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3B0aW9ucy1jb250YWluZXJcIjtcbiAgICB1dGlsLmNoZWNrVmlld3BvcnQob3B0aW9uc0NvbnRhaW5lciwgMTE2MCwgJ2dyaWQnKTtcblxuICAgIGNvbnN0IGJ1cmdlck9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1cmdlck9wdC50ZXh0Q29udGVudCA9IFwiQnVyZ2Vyc1wiO1xuICAgIGJ1cmdlck9wdC5pZCA9IFwiYnVyZ2Vyc1wiO1xuICAgIGJ1cmdlck9wdC5jbGFzc05hbWUgPSBcImN1cnJlbnRcIjtcbiAgICBjb25zdCBkcmlua3NPcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkcmlua3NPcHQudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIGRyaW5rc09wdC5pZCA9IFwiZHJpbmtzXCI7XG4gICAgY29uc3QgY29tYm9PcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21ib09wdC50ZXh0Q29udGVudCA9IFwiQ29tYm9zXCI7XG4gICAgY29tYm9PcHQuaWQgPSBcImNvbWJvc1wiO1xuXG4gICAgbGV0IGJ1dHRvbnMgPSBbYnVyZ2VyT3B0LCBkcmlua3NPcHQsIGNvbWJvT3B0XTtcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PntcbiAgICAgICAgICAgIGlmKCFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50Jykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01lYWwgPSBjcmVhdGVNZWFscyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4ICsgMiksIG9wdGlvbnNbYnV0dG9uLmlkXSk7XG4gICAgICAgICAgICAgICAgdXRpbC5pbnNlcnRUbyhuZXdNZWFsLCAnbWVhbC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB1dGlsLnJlbW92ZUNsYXNzKGJ1dHRvbnMsICdjdXJyZW50JylcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB1dGlsLmluc2VydENoaWxkcmVuKG9wdGlvbnNDb250YWluZXIsIGJ1dHRvbnMpO1xuICAgIHJldHVybiBvcHRpb25zQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgY29udGVudCA9IHV0aWwuY3JlYXRlQ29udGFpbmVyKCdtYWluJyk7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGRyYXdlciA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmF3ZXIuaWQgPSBcIm1pbmktZHJhd2VyXCI7XG4gICAgZHJhd2VyLmNsYXNzTmFtZSA9IFwibWluaS1kcmF3ZXJcIjtcbiAgICBcbiAgICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXJnZXJCdG4udGV4dENvbnRlbnQgPSBcIkJ1cmdlcnNcIjtcbiAgICBidXJnZXJCdG4uaWQgPSBcImJ1cmdlcnNcIjtcbiAgICBidXJnZXJCdG4uY2xhc3NOYW1lID0gXCJkcmF3ZXItYnRuIGN1cnJcIjtcbiAgICBjb25zdCBkcmlua0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyaW5rQnRuLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgICBkcmlua0J0bi5pZCA9IFwiZHJpbmtzXCI7XG4gICAgZHJpbmtCdG4uY2xhc3NOYW1lID0gXCJkcmF3ZXItYnRuXCI7XG4gICAgY29uc3QgY29tYm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21ib0J0bi50ZXh0Q29udGVudCA9IFwiQ29tYm9cIjtcbiAgICBjb21ib0J0bi5pZCA9IFwiY29tYm9zXCI7XG4gICAgY29tYm9CdG4uY2xhc3NOYW1lID0gXCJkcmF3ZXItYnRuXCI7XG4gICAgbGV0IGJ1dHRvbnMgPSBbYnVyZ2VyQnRuLCBkcmlua0J0biwgY29tYm9CdG5dO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+e1xuICAgICAgICAgICAgaWYoIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnInKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWVhbCA9IGNyZWF0ZU1lYWxzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDggKyAyKSwgb3B0aW9uc1tidXR0b24uaWRdKTtcbiAgICAgICAgICAgICAgICB1dGlsLmluc2VydFRvKG5ld01lYWwsICdtZWFsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHV0aWwucmVtb3ZlQ2xhc3MoYnV0dG9ucywgJ2N1cnInKVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXJyJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihkcmF3ZXIsIFtidXJnZXJCdG4sIGRyaW5rQnRuLCBjb21ib0J0bl0pO1xuXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMTYwKSB7XG4gICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInO1xuICAgICAgICBkcmF3ZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnOGZyIDJmcic7XG4gICAgICAgIGRyYXdlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE2MCkge1xuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcic7XG4gICAgICAgICAgICBkcmF3ZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnOGZyIDJmcic7XG4gICAgICAgICAgICBkcmF3ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtZW51Q29udGFpbmVyLCBbaW5pdGlhdGVNZWFsKDksIG9wdGlvbnMuYnVyZ2VycyksIGNyZWF0ZU9wdGlvbnMoKV0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oY29udGVudCwgW2RyYXdlciwgbWVudUNvbnRhaW5lcl0pO1xuICAgIHV0aWwuaW5zZXJ0VG8oY29udGVudCwgJ21haW4tY29udGFpbmVyJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnUiLCJsZXQgY3VycmVudCA9IFwiaG9tZVwiXG4vLyByZW1vdmUgdGhlIGFjdGl2ZSBjbGFzcyBvbiBldmVyeSBub2RlcyBpbiBhbiBhcnJheSBvZiBIVE1MIGVsZW1lbnRzXG5jb25zdCByZW1vdmVDbGFzcyA9IChhcnIsIGMpID0+IHtcbiAgICBhcnIuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGMpKVxufVxuXG4vLyBoaWRlIG5vZGUgaWYgdmlld3BvcnQgaXMgc21hbGxcbmNvbnN0IGNoZWNrVmlld3BvcnQgPSAobm9kZSwgc2l6ZSwgZGlzcGxheSkgPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgc2l6ZSkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWxzZSBub2RlLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpID0+IHtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCBzaXplKSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWxzZSBub2RlLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIH0sIGZhbHNlKTtcbn1cbi8vIHJlc2l6ZSBub2RlIGJhY2tncm91bmQgaWYgdmlld3BvcnQgaXMgc21hbGxcbmNvbnN0IG5vZGVSZXNpemUgPSAobm9kZSwgbWluLCBtYXgpID0+IHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDEyMDApICB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICd0b3AnO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWluO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJ2NlbnRlcic7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBtYXg7XG4gICAgfVxufVxuY29uc3QgaW5zZXJ0Q2hpbGRyZW4gPSAocGFyZW50LCBhcnIpID0+IHtcbiAgICBhcnIuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG59XG4vLyBpbnNlcnQgdG8gbWFpbi1jb250YWluZXJcbmNvbnN0IGluc2VydFRvID0gKGNvbnRlbnQsIHBhcmVudCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50KS5hcHBlbmRDaGlsZChjb250ZW50KTtcbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IChpZCkgPT57XG4gICAgLy8gcmVtb3ZlIHRoZSBtYWluIGNvbnRlbnQgaWYgdGhlcmUgaXNcbiAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmKHByZXYpIHByZXYucmVtb3ZlKCk7IFxuXG4gICAgLy8gY3JlYXRlIG5ldyBvbmVcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9IGlkO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuXG5jb25zdCBzZXRDdXJyZW50ID0gKGN1cnIpID0+IGN1cnJlbnQgPSBjdXJyOyBcblxuZXhwb3J0IHtcbiAgICBjdXJyZW50LFxuICAgIHNldEN1cnJlbnQsXG4gICAgY3JlYXRlQ29udGFpbmVyLFxuICAgIGluc2VydFRvLFxuICAgIGluc2VydENoaWxkcmVuLFxuICAgIHJlbW92ZUNsYXNzLFxuICAgIGNoZWNrVmlld3BvcnQsXG4gICAgbm9kZVJlc2l6ZVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8qIFxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2hvbWUuY3NzJzsgXG4qL1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwuanMnO1xuaW1wb3J0IGJhbmRmIGZyb20gJy4uL2ltYWdlcy80LnBuZyc7XG5pbXBvcnQgb2sgZnJvbSAnLi4vaW1hZ2VzLzEucG5nJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudS5qcyc7XG5cbi8vIGNyZWF0ZSB0YWdsaW5lXG5mdW5jdGlvbiBjcmVhdGVUYWdsaW5lKCl7XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmVyIGZvciB0aGUgdGFnbGluZVxuICAgIGNvbnN0IHRhZ2xpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhZ2xpbmVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0YWdsaW5lLWNvbnRhaW5lclwiXG5cbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgYmlnZ2VzdCBmb250XG4gICAgY29uc3QgZmlyc3RUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmaXJzdFRhZy50ZXh0Q29udGVudCA9IFwiQ0hPTktZXCI7XG5cbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgMm5kIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IHNlY29uZFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZFRhZy50ZXh0Q29udGVudCA9IFwiSlVJQ1lcIjtcblxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgZm9yIHRoZSAybmQgYmlnZ2VzdCBmb250XG4gICAgY29uc3QgZG9ndGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9ndGFnLnRleHRDb250ZW50ID0gXCJDSEVFU1lcIjtcbiAgICBcbiAgICAvLyBjcmVhdGUgYSBub2RlIGZvciB0aGUgMm5kIGJpZ2dlc3QgZm9udFxuICAgIGNvbnN0IGVzZXRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVzZXRhZy50ZXh0Q29udGVudCA9IFwiVGFzdHlcIjtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKHRhZ2xpbmVDb250YWluZXIsIFtmaXJzdFRhZywgc2Vjb25kVGFnLCBkb2d0YWcsIGVzZXRhZ10pOyAgIFxuICAgIHJldHVybiB0YWdsaW5lQ29udGFpbmVyO1xufVxuXG5cbi8vIGNyZWF0ZSBkZXNjcmlwdGlvblxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oKXtcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCBkZXNjSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZXNjSW1hZ2Uuc3JjID0gYmFuZGY7XG4gICAgZGVzY0ltYWdlLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCdsZWZ0Jyk7XG4gICAgZGVzY0ltYWdlLmNsYXNzTmFtZSA9ICdkZXNjLWltYWdlJztcblxuICAgIGNvbnN0IGRlc2NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NUZXh0LnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxcXG4gICAgICAgIERvbmVjIGlwc3VtIGRpYW0sIGNvbnZhbGxpcyBiaWJlbmR1bSBsYW9yZWV0IGF0LCB2ZXN0aWJ1bHVtIHNlZCBzZW0uIFxcXG4gICAgICAgIFByYWVzZW50IGEgZWxpdCB1bHRyaWNpZXMsIGJpYmVuZHVtIGVyYXQgYWMsIGNvbmd1ZSBzZW0uIFxcXG4gICAgICAgIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy5cXFxuICAgICAgICBBZW5lYW4gYXVjdG9yIGZyaW5naWxsYSBlbmltIGF0IHRyaXN0aXF1ZS4gVXQgZWZmaWNpdHVyIHNvbGxpY2l0dWRpbiBlcm9zIGV1IGJsYW5kaXQuXFxcbiAgICAgICAgQ3JhcyBjb25zZWN0ZXR1ciB1dCBhbnRlIGF0IHBlbGxlbnRlc3F1ZS4gUGhhc2VsbHVzIHN1c2NpcGl0LCBpcHN1bSBhdCBoZW5kcmVyaXQgaWFjdWxpcywgbGlndWxhIHVybmEgZmF1Y2lidXMgZXJvcywgZWdldCBhbGlxdWV0IHF1YW0gbWV0dXMgdXQganVzdG8uXFxcbiAgICAgICAgUXVpc3F1ZSBpbiBwb3J0YSBpcHN1bS4gVXQgYXQgZmVsaXMgbWkuIEluIHNjZWxlcmlzcXVlIHRlbXBvciBtYXNzYS4gQWVuZWFuIGxlY3R1cyBkdWksIGNvbnZhbGxpcyBxdWlzIG5lcXVlIG5lYywgbWFsZXN1YWRhIGRpY3R1bSBpcHN1bS5cXFxuICAgICAgICBOdW5jIG9yY2kgb3JjaSwgcmhvbmN1cyBwb3J0YSBhbnRlIGFjLCBmZXVnaWF0IGFjY3Vtc2FuIHJpc3VzLiBOdW5jIHRpbmNpZHVudCBtYXVyaXMgdmVsIGFsaXF1YW0gZmVybWVudHVtLlwiO1xuICAgIGRlc2NUZXh0LmNsYXNzTmFtZSA9ICdkZXNjLXRleHQnO1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVzYy1idG4nO1xuICAgIGNvbnN0IGRlc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZXNjQnRuLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcbiAgICBkZXNjQnRuLmNsYXNzTmFtZSA9ICdidG4nO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJ0bkltZy5zcmMgPSBvaztcbiAgICBidG5JbWcuY2xhc3NOYW1lID0gJ2J0bi1pbWFnZSc7XG4gICAgYnRuQ29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHV0aWwuc2V0Q3VycmVudCgnbWVudScpO1xuICAgICAgICBjcmVhdGVNZW51KCk7XG4gICAgfVxuXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihidG5Db250YWluZXIsIFtidG5JbWcsIGRlc2NCdG5dKTtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGRlc2NyaXB0aW9uLCBbZGVzY0ltYWdlLCBkZXNjVGV4dCwgYnRuQ29udGFpbmVyXSk7XG4gICAgZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gZGVzQ29udGFpbmVyO1xufVxuXG4vLyBuZXcgY3JlYXRlIFNjaGVkdWxlXG5mdW5jdGlvbiBjcmVhdGVTY2hlZHVsZSgpe1xuICAgIGNvbnN0IHNjaGVkdWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NoZWR1bGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJzY2hlZHVsZS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtc2hhcnAgc2NoZWQtbG9nb1wiXG4gICAgbG9nby50ZXh0Q29udGVudCA9IFwic2NoZWR1bGVcIlxuICAgIGNvbnN0IHNjaGVkT25lQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNjaGVkT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBzY2hlZE9uZS5jbGFzc05hbWUgPSBcInNjaGVkLW9uZVwiO1xuICAgIHNjaGVkT25lQ29udC5jbGFzc05hbWUgPSBcIm9wZW5cIjtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKHNjaGVkT25lQ29udCwgW2xvZ28sIHNjaGVkT25lXSk7XG5cbiAgICBjb25zdCBzY2hlZFR3b0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzY2hlZFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgc2NoZWRUd28uY2xhc3NOYW1lID0gXCJzY2hlZC10d29cIjtcbiAgICBzY2hlZFR3b0NvbnQuY2xhc3NOYW1lID0gXCJvcGVuXCI7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihzY2hlZFR3b0NvbnQsIFtsb2dvLmNsb25lTm9kZSh0cnVlKSwgc2NoZWRUd29dKTtcblxuICAgIGNvbnN0IHNjaGVkVHJlZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzY2hlZFRyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHNjaGVkVHJlZS5jbGFzc05hbWUgPSBcInNjaGVkLXRyZWVcIjtcbiAgICBzY2hlZFRyZWVDb250LmNsYXNzTmFtZSA9IFwiY2xvc2VkXCI7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihzY2hlZFRyZWVDb250LCBbbG9nby5jbG9uZU5vZGUodHJ1ZSksIHNjaGVkVHJlZV0pO1xuXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihzY2hlZHVsZUNvbnRhaW5lciwgW3NjaGVkT25lQ29udCwgc2NoZWRUd29Db250LCBzY2hlZFRyZWVDb250XSk7XG4gICAgcmV0dXJuIHNjaGVkdWxlQ29udGFpbmVyO1xufVxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1dGlsLmNyZWF0ZUNvbnRhaW5lcignbWFpbicpO1xuXG4gICAgLy9jcmVhdGUgYSB3aWRlIGRpdiBmb3IgZmVhdHVyZSBmb29kXG4gICAgY29uc3QgZmVhdHVyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlZC5jbGFzc05hbWUgPSBcImZlYXR1cmVkXCI7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xuICAgICAgICB1dGlsLm5vZGVSZXNpemUoZmVhdHVyZWQsICcxNjB2dycgLCAnMTMwdncnKTtcbiAgICB9O1xuXG4gICAgdXRpbC5ub2RlUmVzaXplKGZlYXR1cmVkLCAnMTYwdncnICwgJzEzMHZ3Jyk7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihmZWF0dXJlZCwgW2NyZWF0ZVRhZ2xpbmUoKV0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oY29udGVudCxbZmVhdHVyZWQsIGNyZWF0ZVNjaGVkdWxlKCksIGNyZWF0ZURlc2NyaXB0aW9uKCldKVxuICAgIHV0aWwuaW5zZXJ0VG8oY29udGVudCwgJ21haW4tY29udGFpbmVyJyk7XG4gICAgcmV0dXJuICdob21lJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9