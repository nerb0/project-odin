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
  !*** ./src/scripts/home.js ***!
  \*****************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3NjcmlwdHMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDM0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQSw0QjtBQUNBO0FBQ2tDO0FBQ0U7QUFDSDs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBbUIsMEQ7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFrQjs7O0FBR3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QztBQUNBLGdDQUFnQztBQUNoQyxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDBDQUFLO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMENBQUU7QUFDbkI7QUFDQSxJQUFJLG9EQUFtQjtBQUN2QixJQUFJLG9EQUFtQjtBQUN2QjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esb0JBQW9CLHFEQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBZTtBQUNuQjtBQUNBLGNBQWMsZ0RBQWU7QUFDN0I7O0FBRUEsSUFBSSxvREFBbUI7QUFDdkIsSUFBSSxvREFBbUI7QUFDdkIsSUFBSSw4Q0FBYTtBQUNqQjtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRSIsImZpbGUiOiJob21lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3Mgb24gZXZlcnkgbm9kZXMgaW4gYW4gYXJyYXkgb2YgSFRNTCBlbGVtZW50c1xuY29uc3QgcmVtb3ZlQ2xhc3MgPSAoYXJyLCBjKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjKSlcbn1cblxuLy8gaGlkZSBub2RlIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBjaGVja1ZpZXdwb3J0ID0gKG5vZGUsIHNpemUsIGRpc3BsYXkpID0+IHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IHNpemUpIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICBcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKSA9PiB7XG4gICAgICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgc2l6ZSkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICB9LCBmYWxzZSk7XG59XG4vLyByZXNpemUgbm9kZSBiYWNrZ3JvdW5kIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBub2RlUmVzaXplID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMjAwKSAge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAndG9wJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1pbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICdjZW50ZXInO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWF4O1xuICAgIH1cbn1cbmNvbnN0IGluc2VydENoaWxkcmVuID0gKHBhcmVudCwgYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xufVxuLy8gaW5zZXJ0IHRvIG1haW4tY29udGFpbmVyXG5jb25zdCBpbnNlcnRUbyA9IChjb250ZW50LCBwYXJlbnQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudCkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoaWQpID0+e1xuICAgIC8vIHJlbW92ZSB0aGUgbWFpbiBjb250ZW50IGlmIHRoZXJlIGlzXG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZihwcmV2KSBwcmV2LnJlbW92ZSgpOyBcblxuICAgIC8vIGNyZWF0ZSBuZXcgb25lXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSBpZDtcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUNvbnRhaW5lcixcbiAgICBpbnNlcnRUbyxcbiAgICBpbnNlcnRDaGlsZHJlbixcbiAgICByZW1vdmVDbGFzcyxcbiAgICBjaGVja1ZpZXdwb3J0LFxuICAgIG5vZGVSZXNpemVcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvKiBcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9ob21lLmNzcyc7IFxuKi9cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsLmpzJztcbmltcG9ydCBiYW5kZiBmcm9tICcuLi9pbWFnZXMvNC5wbmcnO1xuaW1wb3J0IG9rIGZyb20gJy4uL2ltYWdlcy8xLnBuZyc7XG5cblxuLy8gY3JlYXRlIHRhZ2xpbmVcbmZ1bmN0aW9uIGNyZWF0ZVRhZ2xpbmUoKXtcbiAgICAvLyBjcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSB0YWdsaW5lXG4gICAgY29uc3QgdGFnbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFnbGluZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRhZ2xpbmUtY29udGFpbmVyXCJcblxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgZm9yIHRoZSBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBmaXJzdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZpcnN0VGFnLnRleHRDb250ZW50ID0gXCJDSE9OS1lcIjtcblxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgZm9yIHRoZSAybmQgYmlnZ2VzdCBmb250XG4gICAgY29uc3Qgc2Vjb25kVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Vjb25kVGFnLnRleHRDb250ZW50ID0gXCJKVUlDWVwiO1xuXG4gICAgLy8gY3JlYXRlIGEgbm9kZSBmb3IgdGhlIDJuZCBiaWdnZXN0IGZvbnRcbiAgICBjb25zdCBkb2d0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb2d0YWcudGV4dENvbnRlbnQgPSBcIkNIRUVTWVwiO1xuICAgIFxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgZm9yIHRoZSAybmQgYmlnZ2VzdCBmb250XG4gICAgY29uc3QgZXNldGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXNldGFnLnRleHRDb250ZW50ID0gXCJUYXN0eVwiO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4odGFnbGluZUNvbnRhaW5lciwgW2ZpcnN0VGFnLCBzZWNvbmRUYWcsIGRvZ3RhZywgZXNldGFnXSk7ICAgXG4gICAgcmV0dXJuIHRhZ2xpbmVDb250YWluZXI7XG59XG5cbi8vIGNyZWF0ZSBzY2hlZFxuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGUoKXtcbiAgICBjb25zdCBEQVlTID0gWydTdW5kYXknICwnTW9uZGF5JyAsJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JyAsJ0ZyaWRheScgLCdTYXR1cmRheSddXG4gICAgLyogXG4gICAgICAgIFNDSEVEVUxFXG4gICAgKi9cbiAgICAvLyBjcmVhdGUgYSBjb250YWluZXIgZm9yIHNjaGVkdWxlIGluc2lkZSB0aGUgZmVhdHVyZWQgZGl2XG4gICAgY29uc3Qgc2NoZWR1bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY2hlZHVsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNjaGVkdWxlLWNvbnRhaW5lclwiO1xuICAgIHV0aWwuY2hlY2tWaWV3cG9ydChzY2hlZHVsZUNvbnRhaW5lciwgOTAwLCAnYmxvY2snKTtcblxuXG4gICAgLy8gY3JlYXRlIHRoZSBzY2hlZHVsZSBkaXZcbiAgICBjb25zdCBzY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjaGVkdWxlLmNsYXNzTmFtZSA9IFwic2NoZWR1bGVcIjtcbiAgICAvLyBjcmVhdGUgdGhlIGhlYWRlciBmb3IgdGhlIHNjaGVkdWxlIGRpdlxuICAgIGNvbnN0IHNjaGVkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzY2hlZEhlYWRlci50ZXh0Q29udGVudCA9IFwiU2NoZWR1bGU6IFwiO1xuICAgIHNjaGVkSGVhZGVyLmNsYXNzTmFtZSA9IFwic2NoZWQtaGVhZGVyXCI7XG5cbiAgICAvLyBzZXQtdXAgdGhlIHNjaGVkdWxlIHRhYmxlL2dyaWQgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgICBjb25zdCBzY2hlZFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2NoZWRUYWJsZS5jbGFzc05hbWUgPSBcInNjaGVkLXRhYmxlXCI7IFxuICAgIGxldCBzY2hlZFRhYmxlRWxlbWVudHMgPSBbXTsgLy8gaW4tY2FzZSBvZiBlbWVyZ2VuY3ksIHVzZSB0byBtYW5pcHVsYXRlIG5vZGVcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjE7IGkrKyl7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2NoZWRUYWJsZUVsZW1lbnRzLnB1c2gobm9kZSk7XG4gICAgICAgIGlmKGklMyA9PSAwKSBub2RlLnRleHRDb250ZW50ID0gREFZU1tpLzNdO1xuICAgICAgICBlbHNlIGlmKGklMyA9PSAyKSBub2RlLnRleHRDb250ZW50ID0gXCJPUEVOXCI7XG4gICAgICAgIHNjaGVkVGFibGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICAgIC8vIEFwcGVuZCBhbGwgbmVjZXNzYXJ5IGVsZW1lbnRzIGluIG9yZGVyXG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2NoZWRIZWFkZXIpXG4gICAgc2NoZWR1bGUuYXBwZW5kQ2hpbGQoc2NoZWRUYWJsZSk7XG4gICAgc2NoZWR1bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NoZWR1bGUpO1xuICAgIHJldHVybiBzY2hlZHVsZUNvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIGRlc2NyaXB0aW9uXG5mdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbigpe1xuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb24tY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcblxuICAgIGNvbnN0IGRlc2NJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGRlc2NJbWFnZS5zcmMgPSBiYW5kZjtcbiAgICBkZXNjSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbGlnbicsJ2xlZnQnKTtcbiAgICBkZXNjSW1hZ2UuY2xhc3NOYW1lID0gJ2Rlc2MtaW1hZ2UnO1xuXG4gICAgY29uc3QgZGVzY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY1RleHQudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXFxcbiAgICAgICAgRG9uZWMgaXBzdW0gZGlhbSwgY29udmFsbGlzIGJpYmVuZHVtIGxhb3JlZXQgYXQsIHZlc3RpYnVsdW0gc2VkIHNlbS4gXFxcbiAgICAgICAgUHJhZXNlbnQgYSBlbGl0IHVsdHJpY2llcywgYmliZW5kdW0gZXJhdCBhYywgY29uZ3VlIHNlbS4gXFxcbiAgICAgICAgSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLlxcXG4gICAgICAgIEFlbmVhbiBhdWN0b3IgZnJpbmdpbGxhIGVuaW0gYXQgdHJpc3RpcXVlLiBVdCBlZmZpY2l0dXIgc29sbGljaXR1ZGluIGVyb3MgZXUgYmxhbmRpdC5cXFxuICAgICAgICBDcmFzIGNvbnNlY3RldHVyIHV0IGFudGUgYXQgcGVsbGVudGVzcXVlLiBQaGFzZWxsdXMgc3VzY2lwaXQsIGlwc3VtIGF0IGhlbmRyZXJpdCBpYWN1bGlzLCBsaWd1bGEgdXJuYSBmYXVjaWJ1cyBlcm9zLCBlZ2V0IGFsaXF1ZXQgcXVhbSBtZXR1cyB1dCBqdXN0by5cXFxuICAgICAgICBRdWlzcXVlIGluIHBvcnRhIGlwc3VtLiBVdCBhdCBmZWxpcyBtaS4gSW4gc2NlbGVyaXNxdWUgdGVtcG9yIG1hc3NhLiBBZW5lYW4gbGVjdHVzIGR1aSwgY29udmFsbGlzIHF1aXMgbmVxdWUgbmVjLCBtYWxlc3VhZGEgZGljdHVtIGlwc3VtLlxcXG4gICAgICAgIE51bmMgb3JjaSBvcmNpLCByaG9uY3VzIHBvcnRhIGFudGUgYWMsIGZldWdpYXQgYWNjdW1zYW4gcmlzdXMuIE51bmMgdGluY2lkdW50IG1hdXJpcyB2ZWwgYWxpcXVhbSBmZXJtZW50dW0uXCI7XG4gICAgZGVzY1RleHQuY2xhc3NOYW1lID0gJ2Rlc2MtdGV4dCc7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZXNjLWJ0bic7XG4gICAgY29uc3QgZGVzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlc2NCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuICAgIGRlc2NCdG4uY2xhc3NOYW1lID0gJ2J0bic7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYnRuSW1nLnNyYyA9IG9rO1xuICAgIGJ0bkltZy5jbGFzc05hbWUgPSAnYnRuLWltYWdlJztcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGJ0bkNvbnRhaW5lciwgW2J0bkltZywgZGVzY0J0bl0pO1xuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oZGVzY3JpcHRpb24sIFtkZXNjSW1hZ2UsIGRlc2NUZXh0LCBidG5Db250YWluZXJdKTtcbiAgICBkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBkZXNDb250YWluZXI7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1dGlsLmNyZWF0ZUNvbnRhaW5lcignbWFpbicpO1xuXG4gICAgLy9jcmVhdGUgYSB3aWRlIGRpdiBmb3IgZmVhdHVyZSBmb29kXG4gICAgY29uc3QgZmVhdHVyZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlZC5jbGFzc05hbWUgPSBcImZlYXR1cmVkXCI7XG4gICAgdXRpbC5ub2RlUmVzaXplKGZlYXR1cmVkLCAnMTYwdncnICwgJzEzMHZ3Jyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScgLCBcbiAgICAgICAgKCkgPT4gdXRpbC5ub2RlUmVzaXplKGZlYXR1cmVkLCAnMTUwdncnICwgJzEyMHZ3JyksXG4gICAgICAgIGZhbHNlKTtcblxuICAgIHV0aWwuaW5zZXJ0Q2hpbGRyZW4oZmVhdHVyZWQsIFtjcmVhdGVTY2hlZHVsZSgpLCBjcmVhdGVUYWdsaW5lKCldKTtcbiAgICB1dGlsLmluc2VydENoaWxkcmVuKGNvbnRlbnQsW2ZlYXR1cmVkLGNyZWF0ZURlc2NyaXB0aW9uKCldKVxuICAgIHV0aWwuaW5zZXJ0VG8oY29udGVudCwgJ21haW4tY29udGFpbmVyJyk7XG4gICAgcmV0dXJuICdob21lJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9