"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["index"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendAboutElements: () => (/* binding */ appendAboutElements)
/* harmony export */ });
const mainContent = document.getElementById("content");
// create elements
const aboutSection = document.createElement("section");
const aboutHeading = document.createElement("h2");
const aboutDetails = document.createElement("p");
const ctaButton = document.createElement("button");
const ctaLink = document.createElement("a");
// add element ids
aboutSection.id = "about";
// text content;
aboutHeading.textContent = "We are Nekochan's Cafe";
aboutDetails.textContent =
  "A delightful blend of aromatic coffee, cozy ambiance, and playful feline companions. Our cafe is a haven for coffee lovers and cat enthusiasts alike. Join us for a unique experience where exceptional brews meet the charm of adorable resident cats. Indulge in the joy of coffee, books, and feline company at Nekochan's Cafe.";
ctaLink.textContent = "Check out our Menu!";
// add styling classes

// function to append elements
function appendAboutElements() {
  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(aboutDetails);
  aboutSection.appendChild(ctaButton);
  ctaButton.appendChild(ctaLink);
  mainContent.appendChild(aboutSection);
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendContactElements: () => (/* binding */ appendContactElements)
/* harmony export */ });
const mainContent = document.getElementById("content");
// create elements
const contactSection = document.createElement("section");
const contactHeading = document.createElement("h2");
const contactAddress = document.createElement("p");
const contactInfo = document.createElement("p");
const contactHours = document.createElement("p");
// add element ids
contactSection.id = "contact";
// add text content
contactHeading.textContent = "Reach us here";
contactAddress.textContent =
  "Nekochan's Cafe 123 Whisker Lane Purrington City, CA 98765 United States";
contactInfo.textContent = "Phone: (555) 123-4567 Email: info@nekochanscafe.com";
contactHours.textContent =
  "Business Hours: Monday to Friday: 8:00 AM - 6:00 PM Saturday and Sunday: 9:00 AM - 5:00 PM";

// add styling classes
// function to append elements
function appendContactElements() {
  mainContent.appendChild(contactSection);
  contactSection.appendChild(contactHeading);
  contactSection.appendChild(contactAddress);
  contactSection.appendChild(contactInfo);
  contactSection.appendChild(contactHours);
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendHomeElements: () => (/* binding */ appendHomeElements)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");


const mainContent = document.getElementById("content");
// create elements
const homeSection = document.createElement("section");
const homeHeader = document.createElement('Header');
const homeHeading = document.createElement('h1')
const homeMotto = document.createElement('p')
const homeMain = document.createElement('div')
const homeDetails = document.createElement('p')
const ctaButton = document.createElement('button')
const homeSocials = document.createElement('div')
// add element ids
homeSection.id = "home"
// add text content
homeHeading.textContent = "Nekochan's Cafe";
homeMotto.textContent = "A Purr-fect Blend of Coffee and Companionship"
homeDetails.textContent = "Indulge in the charm of our cozy cafe, where every visit is a delightful adventure."
ctaButton.textContent = "Contact us"
// add cta eventlistener
ctaButton.addEventListener('click', () =>{
    mainContent.innerHTML = ""
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_0__.appendContactElements)();
    console.log('hi');
})
// add styling classes
// function to append elements
function appendHomeElements(){
    homeHeader.appendChild(homeHeading);
    homeHeader.appendChild(homeMotto);
    homeMain.appendChild(homeDetails);
    homeMain.appendChild(ctaButton);
    homeSection.appendChild(homeHeader);
    homeSection.appendChild(homeMain);
    homeSection.appendChild(homeSocials);
    mainContent.appendChild(homeSection);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");








const pageBody = document.querySelector('body')
const mainContent = document.getElementById('content');
const navigation = document.getElementById("nav");
// append main sections
pageBody.insertBefore(navigation, mainContent);
(0,_nav__WEBPACK_IMPORTED_MODULE_0__.appendNavElements)();
(0,_home__WEBPACK_IMPORTED_MODULE_3__.appendHomeElements)();
// tab switching events
const tabs = document.querySelectorAll('button');
tabs.forEach((tab)=>{
  tab.addEventListener("click", switchTabs);

})
function switchTabs(e){
    mainContent.innerHTML = "";
    switch (e.target.id) {
      case "about-btn":
        (0,_about__WEBPACK_IMPORTED_MODULE_1__.appendAboutElements)();
        break;
      case "contact-btn":
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.appendContactElements)();
        break;
      case "home-btn":
        (0,_home__WEBPACK_IMPORTED_MODULE_3__.appendHomeElements)();
        break;
      case "menu-btn":
        (0,_menu__WEBPACK_IMPORTED_MODULE_4__.appendMenuElements)();
        break;
      default:
        mainContent.innerHTML = "";
        break;
    }
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendMenuElements: () => (/* binding */ appendMenuElements)
/* harmony export */ });
const mainContent = document.getElementById('content');
// create elements
const menuSection = document.createElement('section');
for(let i= 1; i<=4; i++ ){
    const menuItem = document.createElement('div');
    menuItem.className = "menuItem";
    const menuFood = document.createElement('div');
    const menuDetail = document.createElement('div');
    const foodName = document.createElement('h3');
    const foodDetail = document.createElement('p');
    menuItem.id = `menuitem-${i}`
    menuDetail.appendChild(foodName);
    menuDetail.appendChild(foodDetail);
    menuItem.appendChild(menuDetail);
    menuItem.appendChild(menuFood);
};
console.log(menuItem);

// add element ids
// add text content
// add styling classes
// function to append elements
function appendMenuElements(){
    const menuItem = document.querySelectorAll(".menuItem")
    menuItem.forEach((itrem)=>{
        mainContent.appendChild(menuItem)
    })
}


/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendNavElements: () => (/* binding */ appendNavElements)
/* harmony export */ });
//page heading and navigation tabs
const navigation = document.getElementById("nav");
// create elements
const navSection = document.createElement("div");
const tabSection = document.createElement("div");
const mainHeading = document.createElement("span");
const homeButton = document.createElement("button");
const aboutButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");
const line = document.createElement("hr");
// add element ids
homeButton.id = "home-btn";
aboutButton.id = "about-btn";
menuButton.id = "menu-btn";
contactButton.id = "contact-btn";
// text content for navigation
mainHeading.textContent = "Nekochan's Cafe";
homeButton.textContent = "Home";
aboutButton.textContent = "About";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";
// adding classes for styling

// append elements to the navigation;
function appendNavElements() {
  navSection.appendChild(mainHeading);
  navSection.appendChild(tabSection);
  tabSection.appendChild(homeButton);
  tabSection.appendChild(aboutButton);
  tabSection.appendChild(menuButton);
  tabSection.appendChild(contactButton);
  tabSection.appendChild(line);
  navigation.appendChild(navSection);
  navigation.appendChild(tabSection)
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBcUI7QUFDekI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEN5QztBQUNJO0FBQ0c7QUFDTjtBQUNFOzs7O0FBSTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBaUI7QUFDakIseURBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQW1CO0FBQzNCO0FBQ0E7QUFDQSxRQUFRLCtEQUFxQjtBQUM3QjtBQUNBO0FBQ0EsUUFBUSx5REFBa0I7QUFDMUI7QUFDQTtBQUNBLFFBQVEseURBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuLy8gY3JlYXRlIGVsZW1lbnRzXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmNvbnN0IGFib3V0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmNvbnN0IGFib3V0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgY3RhQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGN0YUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbi8vIGFkZCBlbGVtZW50IGlkc1xuYWJvdXRTZWN0aW9uLmlkID0gXCJhYm91dFwiO1xuLy8gdGV4dCBjb250ZW50O1xuYWJvdXRIZWFkaW5nLnRleHRDb250ZW50ID0gXCJXZSBhcmUgTmVrb2NoYW4ncyBDYWZlXCI7XG5hYm91dERldGFpbHMudGV4dENvbnRlbnQgPVxuICBcIkEgZGVsaWdodGZ1bCBibGVuZCBvZiBhcm9tYXRpYyBjb2ZmZWUsIGNvenkgYW1iaWFuY2UsIGFuZCBwbGF5ZnVsIGZlbGluZSBjb21wYW5pb25zLiBPdXIgY2FmZSBpcyBhIGhhdmVuIGZvciBjb2ZmZWUgbG92ZXJzIGFuZCBjYXQgZW50aHVzaWFzdHMgYWxpa2UuIEpvaW4gdXMgZm9yIGEgdW5pcXVlIGV4cGVyaWVuY2Ugd2hlcmUgZXhjZXB0aW9uYWwgYnJld3MgbWVldCB0aGUgY2hhcm0gb2YgYWRvcmFibGUgcmVzaWRlbnQgY2F0cy4gSW5kdWxnZSBpbiB0aGUgam95IG9mIGNvZmZlZSwgYm9va3MsIGFuZCBmZWxpbmUgY29tcGFueSBhdCBOZWtvY2hhbidzIENhZmUuXCI7XG5jdGFMaW5rLnRleHRDb250ZW50ID0gXCJDaGVjayBvdXQgb3VyIE1lbnUhXCI7XG4vLyBhZGQgc3R5bGluZyBjbGFzc2VzXG5cbi8vIGZ1bmN0aW9uIHRvIGFwcGVuZCBlbGVtZW50c1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEFib3V0RWxlbWVudHMoKSB7XG4gIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dEhlYWRpbmcpO1xuICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXREZXRhaWxzKTtcbiAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGN0YUJ1dHRvbik7XG4gIGN0YUJ1dHRvbi5hcHBlbmRDaGlsZChjdGFMaW5rKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcbn1cblxuIiwiY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4vLyBjcmVhdGUgZWxlbWVudHNcbmNvbnN0IGNvbnRhY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5jb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmNvbnN0IGNvbnRhY3RBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgY29udGFjdEhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyBhZGQgZWxlbWVudCBpZHNcbmNvbnRhY3RTZWN0aW9uLmlkID0gXCJjb250YWN0XCI7XG4vLyBhZGQgdGV4dCBjb250ZW50XG5jb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiUmVhY2ggdXMgaGVyZVwiO1xuY29udGFjdEFkZHJlc3MudGV4dENvbnRlbnQgPVxuICBcIk5la29jaGFuJ3MgQ2FmZSAxMjMgV2hpc2tlciBMYW5lIFB1cnJpbmd0b24gQ2l0eSwgQ0EgOTg3NjUgVW5pdGVkIFN0YXRlc1wiO1xuY29udGFjdEluZm8udGV4dENvbnRlbnQgPSBcIlBob25lOiAoNTU1KSAxMjMtNDU2NyBFbWFpbDogaW5mb0BuZWtvY2hhbnNjYWZlLmNvbVwiO1xuY29udGFjdEhvdXJzLnRleHRDb250ZW50ID1cbiAgXCJCdXNpbmVzcyBIb3VyczogTW9uZGF5IHRvIEZyaWRheTogODowMCBBTSAtIDY6MDAgUE0gU2F0dXJkYXkgYW5kIFN1bmRheTogOTowMCBBTSAtIDU6MDAgUE1cIjtcblxuLy8gYWRkIHN0eWxpbmcgY2xhc3Nlc1xuLy8gZnVuY3Rpb24gdG8gYXBwZW5kIGVsZW1lbnRzXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGFjdEVsZW1lbnRzKCkge1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbik7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RIb3Vycyk7XG59XG4iLCJpbXBvcnQgeyBhcHBlbmRDb250YWN0RWxlbWVudHMgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuLy8gY3JlYXRlIGVsZW1lbnRzXG5jb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0hlYWRlcicpO1xuY29uc3QgaG9tZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG5jb25zdCBob21lTW90dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbmNvbnN0IGhvbWVNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnN0IGhvbWVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5jb25zdCBjdGFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29uc3QgaG9tZVNvY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gYWRkIGVsZW1lbnQgaWRzXG5ob21lU2VjdGlvbi5pZCA9IFwiaG9tZVwiXG4vLyBhZGQgdGV4dCBjb250ZW50XG5ob21lSGVhZGluZy50ZXh0Q29udGVudCA9IFwiTmVrb2NoYW4ncyBDYWZlXCI7XG5ob21lTW90dG8udGV4dENvbnRlbnQgPSBcIkEgUHVyci1mZWN0IEJsZW5kIG9mIENvZmZlZSBhbmQgQ29tcGFuaW9uc2hpcFwiXG5ob21lRGV0YWlscy50ZXh0Q29udGVudCA9IFwiSW5kdWxnZSBpbiB0aGUgY2hhcm0gb2Ygb3VyIGNvenkgY2FmZSwgd2hlcmUgZXZlcnkgdmlzaXQgaXMgYSBkZWxpZ2h0ZnVsIGFkdmVudHVyZS5cIlxuY3RhQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCJcbi8vIGFkZCBjdGEgZXZlbnRsaXN0ZW5lclxuY3RhQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxuICAgIGFwcGVuZENvbnRhY3RFbGVtZW50cygpO1xuICAgIGNvbnNvbGUubG9nKCdoaScpO1xufSlcbi8vIGFkZCBzdHlsaW5nIGNsYXNzZXNcbi8vIGZ1bmN0aW9uIHRvIGFwcGVuZCBlbGVtZW50c1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEhvbWVFbGVtZW50cygpe1xuICAgIGhvbWVIZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZUhlYWRpbmcpO1xuICAgIGhvbWVIZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZU1vdHRvKTtcbiAgICBob21lTWFpbi5hcHBlbmRDaGlsZChob21lRGV0YWlscyk7XG4gICAgaG9tZU1haW4uYXBwZW5kQ2hpbGQoY3RhQnV0dG9uKTtcbiAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcbiAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChob21lTWFpbik7XG4gICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZVNvY2lhbHMpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKTtcbn0iLCJpbXBvcnQge2FwcGVuZE5hdkVsZW1lbnRzfSAgZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQge2FwcGVuZEFib3V0RWxlbWVudHN9ICBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHthcHBlbmRDb250YWN0RWxlbWVudHN9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7YXBwZW5kSG9tZUVsZW1lbnRzfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBhcHBlbmRNZW51RWxlbWVudHMgfSBmcm9tIFwiLi9tZW51XCI7XG5cblxuXG5jb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xuLy8gYXBwZW5kIG1haW4gc2VjdGlvbnNcbnBhZ2VCb2R5Lmluc2VydEJlZm9yZShuYXZpZ2F0aW9uLCBtYWluQ29udGVudCk7XG5hcHBlbmROYXZFbGVtZW50cygpO1xuYXBwZW5kSG9tZUVsZW1lbnRzKCk7XG4vLyB0YWIgc3dpdGNoaW5nIGV2ZW50c1xuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xudGFicy5mb3JFYWNoKCh0YWIpPT57XG4gIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoVGFicyk7XG5cbn0pXG5mdW5jdGlvbiBzd2l0Y2hUYWJzKGUpe1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xuICAgICAgY2FzZSBcImFib3V0LWJ0blwiOlxuICAgICAgICBhcHBlbmRBYm91dEVsZW1lbnRzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvbnRhY3QtYnRuXCI6XG4gICAgICAgIGFwcGVuZENvbnRhY3RFbGVtZW50cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJob21lLWJ0blwiOlxuICAgICAgICBhcHBlbmRIb21lRWxlbWVudHMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVudS1idG5cIjpcbiAgICAgICAgYXBwZW5kTWVudUVsZW1lbnRzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIiwiY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuLy8gY3JlYXRlIGVsZW1lbnRzXG5jb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmZvcihsZXQgaT0gMTsgaTw9NDsgaSsrICl7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc05hbWUgPSBcIm1lbnVJdGVtXCI7XG4gICAgY29uc3QgbWVudUZvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51RGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGZvb2REZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW0uaWQgPSBgbWVudWl0ZW0tJHtpfWBcbiAgICBtZW51RGV0YWlsLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51RGV0YWlsLmFwcGVuZENoaWxkKGZvb2REZXRhaWwpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVEZXRhaWwpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVGb29kKTtcbn07XG5jb25zb2xlLmxvZyhtZW51SXRlbSk7XG5cbi8vIGFkZCBlbGVtZW50IGlkc1xuLy8gYWRkIHRleHQgY29udGVudFxuLy8gYWRkIHN0eWxpbmcgY2xhc3Nlc1xuLy8gZnVuY3Rpb24gdG8gYXBwZW5kIGVsZW1lbnRzXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kTWVudUVsZW1lbnRzKCl7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVJdGVtXCIpXG4gICAgbWVudUl0ZW0uZm9yRWFjaCgoaXRyZW0pPT57XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtKVxuICAgIH0pXG59XG4iLCIvL3BhZ2UgaGVhZGluZyBhbmQgbmF2aWdhdGlvbiB0YWJzXG5jb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4vLyBjcmVhdGUgZWxlbWVudHNcbmNvbnN0IG5hdlNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdGFiU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcbi8vIGFkZCBlbGVtZW50IGlkc1xuaG9tZUJ1dHRvbi5pZCA9IFwiaG9tZS1idG5cIjtcbmFib3V0QnV0dG9uLmlkID0gXCJhYm91dC1idG5cIjtcbm1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnRuXCI7XG5jb250YWN0QnV0dG9uLmlkID0gXCJjb250YWN0LWJ0blwiO1xuLy8gdGV4dCBjb250ZW50IGZvciBuYXZpZ2F0aW9uXG5tYWluSGVhZGluZy50ZXh0Q29udGVudCA9IFwiTmVrb2NoYW4ncyBDYWZlXCI7XG5ob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5hYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbm1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbmNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbi8vIGFkZGluZyBjbGFzc2VzIGZvciBzdHlsaW5nXG5cbi8vIGFwcGVuZCBlbGVtZW50cyB0byB0aGUgbmF2aWdhdGlvbjtcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROYXZFbGVtZW50cygpIHtcbiAgbmF2U2VjdGlvbi5hcHBlbmRDaGlsZChtYWluSGVhZGluZyk7XG4gIG5hdlNlY3Rpb24uYXBwZW5kQ2hpbGQodGFiU2VjdGlvbik7XG4gIHRhYlNlY3Rpb24uYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gIHRhYlNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xuICB0YWJTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICB0YWJTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICB0YWJTZWN0aW9uLmFwcGVuZENoaWxkKGxpbmUpO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKG5hdlNlY3Rpb24pO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKHRhYlNlY3Rpb24pXG59XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9