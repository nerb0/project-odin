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




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InV0aWwuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8vIHJlbW92ZSB0aGUgYWN0aXZlIGNsYXNzIG9uIGV2ZXJ5IG5vZGVzIGluIGFuIGFycmF5IG9mIEhUTUwgZWxlbWVudHNcbmNvbnN0IHJlbW92ZUFjdGl2ZUxpc3QgPSAoYXJyKSA9PntcbiAgICBhcnIuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbn1cblxuLy8gaGlkZSBub2RlIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBjaGVja1ZpZXdwb3J0ID0gKG5vZGUpID0+IHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDcwMCkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWxzZSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDcwMCkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVsc2Ugbm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xufVxuLy8gcmVzaXplIG5vZGUgYmFja2dyb3VuZCBpZiB2aWV3cG9ydCBpcyBzbWFsbFxuY29uc3Qgbm9kZVJlc2l6ZSA9IChub2RlLCBtaW4sIG1heCkgPT4ge1xuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNzAwKSAge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAndG9wJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1pbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICdjZW50ZXInO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWF4O1xuICAgIH1cbn1cbi8vIGluc2VydCB0byBtYWluLWNvbnRhaW5lclxuY29uc3QgaW5zZXJ0VG9NYWluID0gKGNvbnRlbnQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5cblxuZXhwb3J0IHtcbiAgICBpbnNlcnRUb01haW4sXG4gICAgcmVtb3ZlQWN0aXZlTGlzdCxcbiAgICBjaGVja1ZpZXdwb3J0LFxuICAgIG5vZGVSZXNpemVcbn0iXSwic291cmNlUm9vdCI6IiJ9