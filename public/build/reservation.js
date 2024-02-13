(self["webpackChunk"] = self["webpackChunk"] || []).push([["reservation"],{

/***/ "./assets/scripts/reservation.js":
/*!***************************************!*\
  !*** ./assets/scripts/reservation.js ***!
  \***************************************/
/***/ (() => {

function show(id) {
  document.getElementById(id).classList.remove('hidden');
}
document.getElementById('reservation_date').addEventListener('change', function () {
  show('hour');
});
document.getElementById('hour').addEventListener('change', function () {
  show('number');
  show('contact');
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/scripts/reservation.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXJ2YXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxTQUFTQSxJQUFJQSxDQUFDQyxFQUFFLEVBQUU7RUFDZEMsUUFBUSxDQUFDQyxjQUFjLENBQUNGLEVBQUUsQ0FBQyxDQUFDRyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDMUQ7QUFFQUgsUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07RUFDekVOLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUZFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtFQUM3RE4sSUFBSSxDQUFDLFFBQVEsQ0FBQztFQUNkQSxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3Jlc2VydmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNob3coaWQpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb25fZGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIHNob3coJ2hvdXInKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIHNob3coJ251bWJlcicpO1xyXG4gICAgc2hvdygnY29udGFjdCcpO1xyXG59KTsiXSwibmFtZXMiOlsic2hvdyIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9