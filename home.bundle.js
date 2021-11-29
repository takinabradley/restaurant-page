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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  const main = document.querySelector('#main');
  main.innerHTML = '';

  const hero = document.createElement('section');
  hero.classList.add('hero');

  const heroHeading = document.createElement('h2');
  heroHeading.textContent = "Furl your sails, you deserve another drink."

  const heroPara = document.createElement('p');
  heroPara.textContent = "Copper Bottom Saloon & Inn is an exclusive island-retreat for any sailer weathered enough to secure their ship to our docks. Stay as long as you like, drink as much as you like, but take your booty elsewhere if it comes with trouble in tow."

  main.appendChild(hero);
  hero.appendChild(heroHeading);
  hero.appendChild(heroPara);


  const about = document.createElement('section');
  about.classList.add('about');

  const aboutHeading = document.createElement('h2');
  aboutHeading.textContent = "How do you find us?"

  const aboutPara = document.createElement('p');
  aboutPara.textContent = "You stumble upon a map- literally! A ruthless swashbuckler like you in bound to find equally as ruthless friends. Friends of the Inn are selective, but are known to tip off those with enough notoriety to our retreat. If you manage to find us, we'll ensure you're safe comfortable."

  main.appendChild(about);
  about.appendChild(aboutHeading);
  about.appendChild(aboutPara);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgY29uc3QgaGVyb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZXJvSGVhZGluZy50ZXh0Q29udGVudCA9IFwiRnVybCB5b3VyIHNhaWxzLCB5b3UgZGVzZXJ2ZSBhbm90aGVyIGRyaW5rLlwiXG5cbiAgY29uc3QgaGVyb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhlcm9QYXJhLnRleHRDb250ZW50ID0gXCJDb3BwZXIgQm90dG9tIFNhbG9vbiAmIElubiBpcyBhbiBleGNsdXNpdmUgaXNsYW5kLXJldHJlYXQgZm9yIGFueSBzYWlsZXIgd2VhdGhlcmVkIGVub3VnaCB0byBzZWN1cmUgdGhlaXIgc2hpcCB0byBvdXIgZG9ja3MuIFN0YXkgYXMgbG9uZyBhcyB5b3UgbGlrZSwgZHJpbmsgYXMgbXVjaCBhcyB5b3UgbGlrZSwgYnV0IHRha2UgeW91ciBib290eSBlbHNld2hlcmUgaWYgaXQgY29tZXMgd2l0aCB0cm91YmxlIGluIHRvdy5cIlxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVybyk7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0hlYWRpbmcpO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9QYXJhKTtcblxuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuXG4gIGNvbnN0IGFib3V0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGFib3V0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiSG93IGRvIHlvdSBmaW5kIHVzP1wiXG5cbiAgY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhYm91dFBhcmEudGV4dENvbnRlbnQgPSBcIllvdSBzdHVtYmxlIHVwb24gYSBtYXAtIGxpdGVyYWxseSEgQSBydXRobGVzcyBzd2FzaGJ1Y2tsZXIgbGlrZSB5b3UgaW4gYm91bmQgdG8gZmluZCBlcXVhbGx5IGFzIHJ1dGhsZXNzIGZyaWVuZHMuIEZyaWVuZHMgb2YgdGhlIElubiBhcmUgc2VsZWN0aXZlLCBidXQgYXJlIGtub3duIHRvIHRpcCBvZmYgdGhvc2Ugd2l0aCBlbm91Z2ggbm90b3JpZXR5IHRvIG91ciByZXRyZWF0LiBJZiB5b3UgbWFuYWdlIHRvIGZpbmQgdXMsIHdlJ2xsIGVuc3VyZSB5b3UncmUgc2FmZSBjb21mb3J0YWJsZS5cIlxuXG4gIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dEhlYWRpbmcpO1xuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFBhcmEpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9