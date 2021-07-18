/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain),
/* harmony export */   "insertToMain": () => (/* binding */ insertToMain),
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidXRpbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuLy8gcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3Mgb24gZXZlcnkgbm9kZXMgaW4gYW4gYXJyYXkgb2YgSFRNTCBlbGVtZW50c1xuY29uc3QgcmVtb3ZlQ2xhc3MgPSAoYXJyLCBjKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjKSlcbn1cblxuLy8gaGlkZSBub2RlIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBjaGVja1ZpZXdwb3J0ID0gKG5vZGUpID0+IHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWxzZSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDkwMCkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xufVxuLy8gcmVzaXplIG5vZGUgYmFja2dyb3VuZCBpZiB2aWV3cG9ydCBpcyBzbWFsbFxuY29uc3Qgbm9kZVJlc2l6ZSA9IChub2RlLCBtaW4sIG1heCkgPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAwMCkgIHtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25ZID0gJ3RvcCc7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBtaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAnY2VudGVyJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1heDtcbiAgICB9XG59XG5jb25zdCBpbnNlcnRDaGlsZHJlbiA9IChwYXJlbnQsIGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbn1cbi8vIGluc2VydCB0byBtYWluLWNvbnRhaW5lclxuY29uc3QgaW5zZXJ0VG9NYWluID0gKGNvbnRlbnQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+e1xuICAgIC8vIHJlbW92ZSB0aGUgbWFpbiBjb250ZW50IGlmIHRoZXJlIGlzXG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgaWYocHJldikgcHJldi5yZW1vdmUoKTsgXG5cbiAgICAvLyBjcmVhdGUgbmV3IG9uZVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmlkID0gXCJtYWluXCI7XG4gICAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZU1haW4sXG4gICAgaW5zZXJ0VG9NYWluLFxuICAgIGluc2VydENoaWxkcmVuLFxuICAgIHJlbW92ZUNsYXNzLFxuICAgIGNoZWNrVmlld3BvcnQsXG4gICAgbm9kZVJlc2l6ZVxufSJdLCJzb3VyY2VSb290IjoiIn0=