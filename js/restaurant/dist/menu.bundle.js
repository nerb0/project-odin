/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  !*** ./src/scripts/menu.js ***!
  \*****************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEM7Ozs7Ozs7O1VDN0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0EsNEI7QUFDQTtBQUNrQztBQUNPO0FBQ0w7QUFDQTs7QUFFcEM7QUFDQSxjQUFjLDhDQUFNO0FBQ3BCLGFBQWEsMENBQUs7QUFDbEIsYUFBYSwwQ0FBSztBQUNsQjs7QUFFQTtBQUNBLDZCQUE2QixxREFBb0I7QUFDakQ7QUFDQSx3RkFBd0Ysa0NBQWtDO0FBQzFIOztBQUVBO0FBQ0EsNEZBQTRGLGtDQUFrQztBQUM5SDtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUSxHQUFHLEVBQUU7QUFDL0M7QUFDQTtBQUNBLG1DQUFtQyx3Q0FBd0M7QUFDM0U7O0FBRUE7QUFDQSxRQUFRLG9EQUFtQjtBQUMzQjtBQUNBO0FBQ0EsSUFBSSxvREFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixxREFBb0I7QUFDOUM7QUFDQTs7QUFFQSxJQUFJLG9EQUFtQjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQWtCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQWE7QUFDN0IsZ0JBQWdCLGlEQUFnQjtBQUNoQztBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLG9EQUFtQjtBQUN2QjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHFEQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBYTtBQUM3QixnQkFBZ0IsaURBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLG9EQUFtQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQW1CO0FBQ3ZCLElBQUksb0RBQW1CO0FBQ3ZCLElBQUksOENBQWE7QUFDakI7O0FBRUEsaUVBQWUsVSIsImZpbGUiOiJtZW51LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBjdXJyZW50ID0gXCJob21lXCJcbi8vIHJlbW92ZSB0aGUgYWN0aXZlIGNsYXNzIG9uIGV2ZXJ5IG5vZGVzIGluIGFuIGFycmF5IG9mIEhUTUwgZWxlbWVudHNcbmNvbnN0IHJlbW92ZUNsYXNzID0gKGFyciwgYykgPT4ge1xuICAgIGFyci5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYykpXG59XG5cbi8vIGhpZGUgbm9kZSBpZiB2aWV3cG9ydCBpcyBzbWFsbFxuY29uc3QgY2hlY2tWaWV3cG9ydCA9IChub2RlLCBzaXplLCBkaXNwbGF5KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCBzaXplKSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IHNpemUpIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgfSwgZmFsc2UpO1xufVxuLy8gcmVzaXplIG5vZGUgYmFja2dyb3VuZCBpZiB2aWV3cG9ydCBpcyBzbWFsbFxuY29uc3Qgbm9kZVJlc2l6ZSA9IChub2RlLCBtaW4sIG1heCkgPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTIwMCkgIHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJ3RvcCc7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBtaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAnY2VudGVyJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1heDtcbiAgICB9XG59XG5jb25zdCBpbnNlcnRDaGlsZHJlbiA9IChwYXJlbnQsIGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbn1cbi8vIGluc2VydCB0byBtYWluLWNvbnRhaW5lclxuY29uc3QgaW5zZXJ0VG8gPSAoY29udGVudCwgcGFyZW50KSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnQpLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKGlkKSA9PntcbiAgICAvLyByZW1vdmUgdGhlIG1haW4gY29udGVudCBpZiB0aGVyZSBpc1xuICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYocHJldikgcHJldi5yZW1vdmUoKTsgXG5cbiAgICAvLyBjcmVhdGUgbmV3IG9uZVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gaWQ7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmNvbnN0IHNldEN1cnJlbnQgPSAoY3VycikgPT4gY3VycmVudCA9IGN1cnI7IFxuXG5leHBvcnQge1xuICAgIGN1cnJlbnQsXG4gICAgc2V0Q3VycmVudCxcbiAgICBjcmVhdGVDb250YWluZXIsXG4gICAgaW5zZXJ0VG8sXG4gICAgaW5zZXJ0Q2hpbGRyZW4sXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgY2hlY2tWaWV3cG9ydCxcbiAgICBub2RlUmVzaXplXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLyogXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvbWVudS5jc3MnOyBcbiovXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4vdXRpbC5qcyc7XG5pbXBvcnQgYm9yZ2lyIGZyb20gJy4uL2ltYWdlcy9sb2dvMi5wbmcnO1xuaW1wb3J0IGRyaW5rIGZyb20gJy4uL2ltYWdlcy8zLnBuZyc7XG5pbXBvcnQgY29tYm8gZnJvbSAnLi4vaW1hZ2VzLzQucG5nJztcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBidXJnZXJzOiBbYm9yZ2lyLCBcIkJ1cmdlclwiXSxcbiAgICBkcmlua3M6IFtkcmluaywgXCJEcmlua1wiXSxcbiAgICBjb21ib3M6IFtjb21ibywgXCJDb21ib1wiXSxcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVhbHMobGVuLCB0eXBlKXtcbiAgICBjb25zdCBtZWFsU3ViQ29udGFpbmVyID0gdXRpbC5jcmVhdGVDb250YWluZXIoJ21lYWxTdWJDb250YWluZXInKTtcbiAgICBtZWFsU3ViQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVhbC1zdWItY29udGFpbmVyXCI7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMTYwKSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7TWF0aC5mbG9vcih3aW5kb3cuaW5uZXJXaWR0aC8yMDApfSwgMWZyKWA7XG4gICAgZWxzZSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAncmVwZWF0KDUsIDFmciknO1xuICAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDExNjApIG1lYWxTdWJDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoLzIwMCl9LCAxZnIpYDtcbiAgICAgICAgZWxzZSBtZWFsU3ViQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KDUsIDFmcilgOztcbiAgICB9KVxuICAgIGNvbnN0IG1lYWxzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBtZWFsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbWVhbEltYWdlLnNyYyA9IHR5cGVbMF07XG4gICAgICAgIG1lYWxJbWFnZS5jbGFzc05hbWUgPSAnbWVhbC1pbWFnZSc7XG4gICAgICAgIGNvbnN0IG1lYWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbWVhbE5hbWUudGV4dENvbnRlbnQgPSBgJHt0eXBlWzFdfVske2l9XWA7XG4gICAgICAgIG1lYWxOYW1lLmNsYXNzTmFtZSA9ICdtZWFsLW5hbWUnO1xuICAgICAgICBjb25zdCBtZWFsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG1lYWxQcmljZS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwICsgMjApICsgaX0uMDBgO1xuICAgICAgICBtZWFsUHJpY2UuY2xhc3NOYW1lID0gJ21lYWwtcHJpY2UnO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZHVwbGljYXRpbmcgYm9yZGVycztcbiAgICAgICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtZWFsLCBbbWVhbEltYWdlLCBtZWFsTmFtZSwgbWVhbFByaWNlXSk7XG4gICAgICAgIG1lYWxzLnB1c2gobWVhbCk7XG4gICAgfVxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVhbFN1YkNvbnRhaW5lciwgbWVhbHMpO1xuICAgIHJldHVybiBtZWFsU3ViQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWF0ZU1lYWwobGVuLCB0eXBlKXtcbiAgICBjb25zdCBtZWFsQ29udGFpbmVyID0gdXRpbC5jcmVhdGVDb250YWluZXIoJ21lYWwtY29udGFpbmVyJyk7XG4gICAgbWVhbENvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVhbC1jb250YWluZXInO1xuICAgIGNvbnN0IG1lYWxTdWJDb250YWluZXIgPSBjcmVhdGVNZWFscyhsZW4sIHR5cGUpO1xuICAgIFxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4obWVhbENvbnRhaW5lciwgW21lYWxTdWJDb250YWluZXJdKTtcbiAgICByZXR1cm4gbWVhbENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucygpe1xuICAgIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHRpb25zQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3B0aW9ucy1jb250YWluZXJcIjtcbiAgICB1dGlsLmNoZWNrVmlld3BvcnQob3B0aW9uc0NvbnRhaW5lciwgMTE2MCwgJ2dyaWQnKTtcblxuICAgIGNvbnN0IGJ1cmdlck9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1cmdlck9wdC50ZXh0Q29udGVudCA9IFwiQnVyZ2Vyc1wiO1xuICAgIGJ1cmdlck9wdC5pZCA9IFwiYnVyZ2Vyc1wiO1xuICAgIGJ1cmdlck9wdC5jbGFzc05hbWUgPSBcImN1cnJlbnRcIjtcbiAgICBjb25zdCBkcmlua3NPcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkcmlua3NPcHQudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIGRyaW5rc09wdC5pZCA9IFwiZHJpbmtzXCI7XG4gICAgY29uc3QgY29tYm9PcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21ib09wdC50ZXh0Q29udGVudCA9IFwiQ29tYm9zXCI7XG4gICAgY29tYm9PcHQuaWQgPSBcImNvbWJvc1wiO1xuXG4gICAgbGV0IGJ1dHRvbnMgPSBbYnVyZ2VyT3B0LCBkcmlua3NPcHQsIGNvbWJvT3B0XTtcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PntcbiAgICAgICAgICAgIGlmKCFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50Jykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld01lYWwgPSBjcmVhdGVNZWFscyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4ICsgMiksIG9wdGlvbnNbYnV0dG9uLmlkXSk7XG4gICAgICAgICAgICAgICAgdXRpbC5pbnNlcnRUbyhuZXdNZWFsLCAnbWVhbC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICB1dGlsLnJlbW92ZUNsYXNzKGJ1dHRvbnMsICdjdXJyZW50JylcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB1dGlsLmluc2VydENoaWxkcmVuKG9wdGlvbnNDb250YWluZXIsIGJ1dHRvbnMpO1xuICAgIHJldHVybiBvcHRpb25zQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgY29uc3QgY29udGVudCA9IHV0aWwuY3JlYXRlQ29udGFpbmVyKCdtYWluJyk7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZW51LWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGRyYXdlciA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmF3ZXIuaWQgPSBcIm1pbmktZHJhd2VyXCI7XG4gICAgZHJhd2VyLmNsYXNzTmFtZSA9IFwibWluaS1kcmF3ZXJcIjtcbiAgICBcbiAgICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXJnZXJCdG4udGV4dENvbnRlbnQgPSBcIkJ1cmdlcnNcIjtcbiAgICBidXJnZXJCdG4uaWQgPSBcImJ1cmdlcnNcIjtcbiAgICBidXJnZXJCdG4uY2xhc3NOYW1lID0gXCJkcmF3ZXItYnRuIGN1cnJcIjtcbiAgICBjb25zdCBkcmlua0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyaW5rQnRuLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgICBkcmlua0J0bi5pZCA9IFwiZHJpbmtzXCI7XG4gICAgZHJpbmtCdG4uY2xhc3NOYW1lID0gXCJkcmF3ZXItYnRuXCI7XG4gICAgY29uc3QgY29tYm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21ib0J0bi50ZXh0Q29udGVudCA9IFwiQ29tYm9cIjtcbiAgICBjb21ib0J0bi5pZCA9IFwiY29tYm9zXCI7XG4gICAgY29tYm9CdG4uY2xhc3NOYW1lID0gXCJkcmF3ZXItYnRuXCI7XG4gICAgbGV0IGJ1dHRvbnMgPSBbYnVyZ2VyQnRuLCBkcmlua0J0biwgY29tYm9CdG5dO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+e1xuICAgICAgICAgICAgaWYoIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnInKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWVhbCA9IGNyZWF0ZU1lYWxzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDggKyAyKSwgb3B0aW9uc1tidXR0b24uaWRdKTtcbiAgICAgICAgICAgICAgICB1dGlsLmluc2VydFRvKG5ld01lYWwsICdtZWFsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHV0aWwucmVtb3ZlQ2xhc3MoYnV0dG9ucywgJ2N1cnInKVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXJyJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihkcmF3ZXIsIFtidXJnZXJCdG4sIGRyaW5rQnRuLCBjb21ib0J0bl0pO1xuXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMTYwKSB7XG4gICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInO1xuICAgICAgICBkcmF3ZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnOGZyIDJmcic7XG4gICAgICAgIGRyYXdlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE2MCkge1xuICAgICAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcic7XG4gICAgICAgICAgICBkcmF3ZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnOGZyIDJmcic7XG4gICAgICAgICAgICBkcmF3ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtZW51Q29udGFpbmVyLCBbaW5pdGlhdGVNZWFsKDksIG9wdGlvbnMuYnVyZ2VycyksIGNyZWF0ZU9wdGlvbnMoKV0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oY29udGVudCwgW2RyYXdlciwgbWVudUNvbnRhaW5lcl0pO1xuICAgIHV0aWwuaW5zZXJ0VG8oY29udGVudCwgJ21haW4tY29udGFpbmVyJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnUiXSwic291cmNlUm9vdCI6IiJ9