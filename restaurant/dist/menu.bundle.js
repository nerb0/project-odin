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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL21lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBLDRCO0FBQ0E7QUFDa0M7QUFDTztBQUNMO0FBQ0E7O0FBRXBDO0FBQ0EsY0FBYyw4Q0FBTTtBQUNwQixhQUFhLDBDQUFLO0FBQ2xCLGFBQWEsMENBQUs7QUFDbEI7O0FBRUE7QUFDQSw2QkFBNkIscURBQW9CO0FBQ2pEO0FBQ0Esd0ZBQXdGLGtDQUFrQztBQUMxSDs7QUFFQTtBQUNBLDRGQUE0RixrQ0FBa0M7QUFDOUg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVEsR0FBRyxFQUFFO0FBQy9DO0FBQ0E7QUFDQSxtQ0FBbUMsd0NBQXdDO0FBQzNFOztBQUVBO0FBQ0EsUUFBUSxvREFBbUI7QUFDM0I7QUFDQTtBQUNBLElBQUksb0RBQW1CO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIscURBQW9CO0FBQzlDO0FBQ0E7O0FBRUEsSUFBSSxvREFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFrQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFhO0FBQzdCLGdCQUFnQixpREFBZ0I7QUFDaEM7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSxvREFBbUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxREFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQWE7QUFDN0IsZ0JBQWdCLGlEQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxvREFBbUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFtQjtBQUN2QixJQUFJLG9EQUFtQjtBQUN2QixJQUFJLDhDQUFhO0FBQ2pCO0FBQ0EsaUVBQWUsVSIsImZpbGUiOiJtZW51LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3Mgb24gZXZlcnkgbm9kZXMgaW4gYW4gYXJyYXkgb2YgSFRNTCBlbGVtZW50c1xuY29uc3QgcmVtb3ZlQ2xhc3MgPSAoYXJyLCBjKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjKSlcbn1cblxuLy8gaGlkZSBub2RlIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBjaGVja1ZpZXdwb3J0ID0gKG5vZGUsIHNpemUsIGRpc3BsYXkpID0+IHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IHNpemUpIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgc2l6ZSkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICB9LCBmYWxzZSk7XG59XG4vLyByZXNpemUgbm9kZSBiYWNrZ3JvdW5kIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBub2RlUmVzaXplID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMjAwKSAge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAndG9wJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1pbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICdjZW50ZXInO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWF4O1xuICAgIH1cbn1cbmNvbnN0IGluc2VydENoaWxkcmVuID0gKHBhcmVudCwgYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xufVxuLy8gaW5zZXJ0IHRvIG1haW4tY29udGFpbmVyXG5jb25zdCBpbnNlcnRUbyA9IChjb250ZW50LCBwYXJlbnQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudCkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoaWQpID0+e1xuICAgIC8vIHJlbW92ZSB0aGUgbWFpbiBjb250ZW50IGlmIHRoZXJlIGlzXG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZihwcmV2KSBwcmV2LnJlbW92ZSgpOyBcblxuICAgIC8vIGNyZWF0ZSBuZXcgb25lXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSBpZDtcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUNvbnRhaW5lcixcbiAgICBpbnNlcnRUbyxcbiAgICBpbnNlcnRDaGlsZHJlbixcbiAgICByZW1vdmVDbGFzcyxcbiAgICBjaGVja1ZpZXdwb3J0LFxuICAgIG5vZGVSZXNpemVcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tZW51LmNzcyc7IFxuKi9cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCBib3JnaXIgZnJvbSAnLi4vaW1hZ2VzL2xvZ28yLnBuZyc7XG5pbXBvcnQgZHJpbmsgZnJvbSAnLi4vaW1hZ2VzLzMucG5nJztcbmltcG9ydCBjb21ibyBmcm9tICcuLi9pbWFnZXMvNC5wbmcnO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICAgIGJ1cmdlcnM6IFtib3JnaXIsIFwiQnVyZ2VyXCJdLFxuICAgIGRyaW5rczogW2RyaW5rLCBcIkRyaW5rXCJdLFxuICAgIGNvbWJvczogW2NvbWJvLCBcIkNvbWJvXCJdLFxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZWFscyhsZW4sIHR5cGUpe1xuICAgIGNvbnN0IG1lYWxTdWJDb250YWluZXIgPSB1dGlsLmNyZWF0ZUNvbnRhaW5lcignbWVhbFN1YkNvbnRhaW5lcicpO1xuICAgIG1lYWxTdWJDb250YWluZXIuY2xhc3NOYW1lID0gXCJtZWFsLXN1Yi1jb250YWluZXJcIjtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDExNjApIG1lYWxTdWJDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoLzIwMCl9LCAxZnIpYDtcbiAgICBlbHNlIG1lYWxTdWJDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICdyZXBlYXQoNSwgMWZyKSc7XG4gICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTE2MCkgbWVhbFN1YkNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke01hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGgvMjAwKX0sIDFmcilgO1xuICAgICAgICBlbHNlIG1lYWxTdWJDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoNSwgMWZyKWA7O1xuICAgIH0pXG4gICAgY29uc3QgbWVhbHMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgICBjb25zdCBtZWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1lYWxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtZWFsSW1hZ2Uuc3JjID0gdHlwZVswXTtcbiAgICAgICAgbWVhbEltYWdlLmNsYXNzTmFtZSA9ICdtZWFsLWltYWdlJztcbiAgICAgICAgY29uc3QgbWVhbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBtZWFsTmFtZS50ZXh0Q29udGVudCA9IGAke3R5cGVbMV19WyR7aX1dYDtcbiAgICAgICAgbWVhbE5hbWUuY2xhc3NOYW1lID0gJ21lYWwtbmFtZSc7XG4gICAgICAgIGNvbnN0IG1lYWxQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbWVhbFByaWNlLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAgKyAyMCkgKyBpfS4wMGA7XG4gICAgICAgIG1lYWxQcmljZS5jbGFzc05hbWUgPSAnbWVhbC1wcmljZSc7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBkdXBsaWNhdGluZyBib3JkZXJzO1xuICAgICAgICB1dGlsLmluc2VydENoaWxkcmVuKG1lYWwsIFttZWFsSW1hZ2UsIG1lYWxOYW1lLCBtZWFsUHJpY2VdKTtcbiAgICAgICAgbWVhbHMucHVzaChtZWFsKTtcbiAgICB9XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtZWFsU3ViQ29udGFpbmVyLCBtZWFscyk7XG4gICAgcmV0dXJuIG1lYWxTdWJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGluaXRpYXRlTWVhbChsZW4sIHR5cGUpe1xuICAgIGNvbnN0IG1lYWxDb250YWluZXIgPSB1dGlsLmNyZWF0ZUNvbnRhaW5lcignbWVhbC1jb250YWluZXInKTtcbiAgICBtZWFsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZWFsLWNvbnRhaW5lcic7XG4gICAgY29uc3QgbWVhbFN1YkNvbnRhaW5lciA9IGNyZWF0ZU1lYWxzKGxlbiwgdHlwZSk7XG4gICAgXG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihtZWFsQ29udGFpbmVyLCBbbWVhbFN1YkNvbnRhaW5lcl0pO1xuICAgIHJldHVybiBtZWFsQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25zKCl7XG4gICAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wdGlvbnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJvcHRpb25zLWNvbnRhaW5lclwiO1xuICAgIHV0aWwuY2hlY2tWaWV3cG9ydChvcHRpb25zQ29udGFpbmVyLCAxMTYwLCAnZ3JpZCcpO1xuXG4gICAgY29uc3QgYnVyZ2VyT3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnVyZ2VyT3B0LnRleHRDb250ZW50ID0gXCJCdXJnZXJzXCI7XG4gICAgYnVyZ2VyT3B0LmlkID0gXCJidXJnZXJzXCI7XG4gICAgYnVyZ2VyT3B0LmNsYXNzTmFtZSA9IFwiY3VycmVudFwiO1xuICAgIGNvbnN0IGRyaW5rc09wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRyaW5rc09wdC50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XG4gICAgZHJpbmtzT3B0LmlkID0gXCJkcmlua3NcIjtcbiAgICBjb25zdCBjb21ib09wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbWJvT3B0LnRleHRDb250ZW50ID0gXCJDb21ib3NcIjtcbiAgICBjb21ib09wdC5pZCA9IFwiY29tYm9zXCI7XG5cbiAgICBsZXQgYnV0dG9ucyA9IFtidXJnZXJPcHQsIGRyaW5rc09wdCwgY29tYm9PcHRdO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIpO1xuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+e1xuICAgICAgICAgICAgaWYoIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQnKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TWVhbCA9IGNyZWF0ZU1lYWxzKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDggKyAyKSwgb3B0aW9uc1tidXR0b24uaWRdKTtcbiAgICAgICAgICAgICAgICB1dGlsLmluc2VydFRvKG5ld01lYWwsICdtZWFsLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHV0aWwucmVtb3ZlQ2xhc3MoYnV0dG9ucywgJ2N1cnJlbnQnKVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4ob3B0aW9uc0NvbnRhaW5lciwgYnV0dG9ucyk7XG4gICAgcmV0dXJuIG9wdGlvbnNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcbiAgICBjb25zdCBjb250ZW50ID0gdXRpbC5jcmVhdGVDb250YWluZXIoJ21haW4nKTtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnUtY29udGFpbmVyXCI7XG4gICAgY29uc3QgZHJhd2VyID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRyYXdlci5pZCA9IFwibWluaS1kcmF3ZXJcIjtcbiAgICBkcmF3ZXIuY2xhc3NOYW1lID0gXCJtaW5pLWRyYXdlclwiO1xuICAgIFxuICAgIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1cmdlckJ0bi50ZXh0Q29udGVudCA9IFwiQnVyZ2Vyc1wiO1xuICAgIGJ1cmdlckJ0bi5pZCA9IFwiYnVyZ2Vyc1wiO1xuICAgIGJ1cmdlckJ0bi5jbGFzc05hbWUgPSBcImRyYXdlci1idG4gY3VyclwiO1xuICAgIGNvbnN0IGRyaW5rQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZHJpbmtCdG4udGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIGRyaW5rQnRuLmlkID0gXCJkcmlua3NcIjtcbiAgICBkcmlua0J0bi5jbGFzc05hbWUgPSBcImRyYXdlci1idG5cIjtcbiAgICBjb25zdCBjb21ib0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbWJvQnRuLnRleHRDb250ZW50ID0gXCJDb21ib1wiO1xuICAgIGNvbWJvQnRuLmlkID0gXCJjb21ib3NcIjtcbiAgICBjb21ib0J0bi5jbGFzc05hbWUgPSBcImRyYXdlci1idG5cIjtcbiAgICBsZXQgYnV0dG9ucyA9IFtidXJnZXJCdG4sIGRyaW5rQnRuLCBjb21ib0J0bl07XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT57XG4gICAgICAgICAgICBpZighYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnY3VycicpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNZWFsID0gY3JlYXRlTWVhbHMoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCArIDIpLCBvcHRpb25zW2J1dHRvbi5pZF0pO1xuICAgICAgICAgICAgICAgIHV0aWwuaW5zZXJ0VG8obmV3TWVhbCwgJ21lYWwtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgdXRpbC5yZW1vdmVDbGFzcyhidXR0b25zLCAnY3VycicpXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2N1cnInKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGRyYXdlciwgW2J1cmdlckJ0biwgZHJpbmtCdG4sIGNvbWJvQnRuXSk7XG5cbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDExNjApIHtcbiAgICAgICAgbWVudUNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcic7XG4gICAgICAgIGRyYXdlci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCJcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICc4ZnIgMmZyJztcbiAgICAgICAgZHJhd2VyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMTYwKSB7XG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyJztcbiAgICAgICAgICAgIGRyYXdlci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICc4ZnIgMmZyJztcbiAgICAgICAgICAgIGRyYXdlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICB1dGlsLmluc2VydENoaWxkcmVuKG1lbnVDb250YWluZXIsIFtpbml0aWF0ZU1lYWwoOSwgb3B0aW9ucy5idXJnZXJzKSwgY3JlYXRlT3B0aW9ucygpXSk7XG4gICAgdXRpbC5pbnNlcnRDaGlsZHJlbihjb250ZW50LCBbZHJhd2VyLCBtZW51Q29udGFpbmVyXSk7XG4gICAgdXRpbC5pbnNlcnRUbyhjb250ZW50LCAnbWFpbi1jb250YWluZXInKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnUiXSwic291cmNlUm9vdCI6IiJ9