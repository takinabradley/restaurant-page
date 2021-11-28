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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcblxuXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuXG4gIGNvbnN0IGhlcm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVyb0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkZ1cmwgeW91ciBzYWlscywgeW91IGRlc2VydmUgYW5vdGhlciBkcmluay5cIlxuXG4gIGNvbnN0IGhlcm9QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoZXJvUGFyYS50ZXh0Q29udGVudCA9IFwiQ29wcGVyIEJvdHRvbSBTYWxvb24gJiBJbm4gaXMgYW4gZXhjbHVzaXZlIGlzbGFuZC1yZXRyZWF0IGZvciBhbnkgc2FpbGVyIHdlYXRoZXJlZCBlbm91Z2ggdG8gc2VjdXJlIHRoZWlyIHNoaXAgdG8gb3VyIGRvY2tzLiBTdGF5IGFzIGxvbmcgYXMgeW91IGxpa2UsIGRyaW5rIGFzIG11Y2ggYXMgeW91IGxpa2UsIGJ1dCB0YWtlIHlvdXIgYm9vdHkgZWxzZXdoZXJlIGlmIGl0IGNvbWVzIHdpdGggdHJvdWJsZSBpbiB0b3cuXCJcblxuICBtYWluLmFwcGVuZENoaWxkKGhlcm8pO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9IZWFkaW5nKTtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvUGFyYSk7XG5cblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICBjb25zdCBhYm91dEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhYm91dEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhvdyBkbyB5b3UgZmluZCB1cz9cIlxuXG4gIGNvbnN0IGFib3V0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXRQYXJhLnRleHRDb250ZW50ID0gXCJZb3Ugc3R1bWJsZSB1cG9uIGEgbWFwLSBsaXRlcmFsbHkhIEEgcnV0aGxlc3Mgc3dhc2hidWNrbGVyIGxpa2UgeW91IGluIGJvdW5kIHRvIGZpbmQgZXF1YWxseSBhcyBydXRobGVzcyBmcmllbmRzLiBGcmllbmRzIG9mIHRoZSBJbm4gYXJlIHNlbGVjdGl2ZSwgYnV0IGFyZSBrbm93biB0byB0aXAgb2ZmIHRob3NlIHdpdGggZW5vdWdoIG5vdG9yaWV0eSB0byBvdXIgcmV0cmVhdC4gSWYgeW91IG1hbmFnZSB0byBmaW5kIHVzLCB3ZSdsbCBlbnN1cmUgeW91J3JlIHNhZmUgY29tZm9ydGFibGUuXCJcblxuICBtYWluLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkaW5nKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==