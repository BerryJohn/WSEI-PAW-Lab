/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/client.ts ***!
  \***********************/
let socket = new WebSocket("ws://localhost:8080");
socket.onopen = function (e) {
    alert("Connected");
    socket.send("Hello!");
};
socket.onopen = function (e) {
    alert("Connected");
    socket.send("Hello!");
};
document.getElementById('send').addEventListener('click', () => {
    socket.send('new message');
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWI3Ly4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwXCIpO1xyXG5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGFsZXJ0KFwiQ29ubmVjdGVkXCIpO1xyXG4gICAgc29ja2V0LnNlbmQoXCJIZWxsbyFcIik7XHJcbn07XHJcbnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgYWxlcnQoXCJDb25uZWN0ZWRcIik7XHJcbiAgICBzb2NrZXQuc2VuZChcIkhlbGxvIVwiKTtcclxufTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNvY2tldC5zZW5kKCduZXcgbWVzc2FnZScpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==