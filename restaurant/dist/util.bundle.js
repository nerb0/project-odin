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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InV0aWwuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbi8vIHJlbW92ZSB0aGUgYWN0aXZlIGNsYXNzIG9uIGV2ZXJ5IG5vZGVzIGluIGFuIGFycmF5IG9mIEhUTUwgZWxlbWVudHNcbmNvbnN0IHJlbW92ZUNsYXNzID0gKGFyciwgYykgPT4ge1xuICAgIGFyci5mb3JFYWNoKChub2RlKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYykpXG59XG5cbi8vIGhpZGUgbm9kZSBpZiB2aWV3cG9ydCBpcyBzbWFsbFxuY29uc3QgY2hlY2tWaWV3cG9ydCA9IChub2RlLCBzaXplLCBkaXNwbGF5KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCBzaXplKSBub2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCkgPT4ge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IHNpemUpIG5vZGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlbHNlIG5vZGUuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgfSk7XG59XG4vLyByZXNpemUgbm9kZSBiYWNrZ3JvdW5kIGlmIHZpZXdwb3J0IGlzIHNtYWxsXG5jb25zdCBub2RlUmVzaXplID0gKG5vZGUsIG1pbiwgbWF4KSA9PiB7XG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDAwKSAge1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAndG9wJztcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IG1pbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICdjZW50ZXInO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRTaXplID0gbWF4O1xuICAgIH1cbn1cbmNvbnN0IGluc2VydENoaWxkcmVuID0gKHBhcmVudCwgYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xufVxuLy8gaW5zZXJ0IHRvIG1haW4tY29udGFpbmVyXG5jb25zdCBpbnNlcnRUbyA9IChjb250ZW50LCBwYXJlbnQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudCkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoaWQpID0+e1xuICAgIC8vIHJlbW92ZSB0aGUgbWFpbiBjb250ZW50IGlmIHRoZXJlIGlzXG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZihwcmV2KSBwcmV2LnJlbW92ZSgpOyBcblxuICAgIC8vIGNyZWF0ZSBuZXcgb25lXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuaWQgPSBpZDtcbiAgICByZXR1cm4gY29udGVudDtcbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUNvbnRhaW5lcixcbiAgICBpbnNlcnRUbyxcbiAgICBpbnNlcnRDaGlsZHJlbixcbiAgICByZW1vdmVDbGFzcyxcbiAgICBjaGVja1ZpZXdwb3J0LFxuICAgIG5vZGVSZXNpemVcbn0iXSwic291cmNlUm9vdCI6IiJ9