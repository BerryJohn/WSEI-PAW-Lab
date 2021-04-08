/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/battleships/battleships.ts":
/*!****************************************!*\
  !*** ./src/battleships/battleships.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.BattleShips = void 0;
var BattleShips = /** @class */ (function () {
    function BattleShips() {
        this.name = "Statki";
    }
    BattleShips.prototype.getGameElement = function () {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    };
    return BattleShips;
}());
exports.BattleShips = BattleShips;


/***/ }),

/***/ "./src/game.enum.ts":
/*!**************************!*\
  !*** ./src/game.enum.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Games = void 0;
var Games;
(function (Games) {
    Games[Games["TicTacToe"] = 1] = "TicTacToe";
    Games[Games["BattleShips"] = 2] = "BattleShips";
})(Games = exports.Games || (exports.Games = {}));


/***/ }),

/***/ "./src/gameFactory.class.ts":
/*!**********************************!*\
  !*** ./src/gameFactory.class.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.gameFactory = void 0;
var game_enum_1 = __webpack_require__(/*! ./game.enum */ "./src/game.enum.ts");
var tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ "./src/tictactoe/tictactoe.ts");
var battleships_1 = __webpack_require__(/*! ./battleships/battleships */ "./src/battleships/battleships.ts");
var gameFactory = /** @class */ (function () {
    function gameFactory() {
    }
    gameFactory.prototype.createGame = function (game) {
        switch (game) {
            case game_enum_1.Games.TicTacToe:
                return new tictactoe_1.TicTacToe();
            case game_enum_1.Games.BattleShips:
                return new battleships_1.BattleShips();
            default:
                console.warn('dupa');
                break;
        }
    };
    return gameFactory;
}());
exports.gameFactory = gameFactory;


/***/ }),

/***/ "./src/tictactoe/tictactoe.ts":
/*!************************************!*\
  !*** ./src/tictactoe/tictactoe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.TicTacToe = void 0;
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Kółko i krzyżyk";
    }
    TicTacToe.prototype.getGameElement = function () {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello TicTacToe"));
        return div;
    };
    return TicTacToe;
}());
exports.TicTacToe = TicTacToe;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

exports.__esModule = true;
var game_enum_1 = __webpack_require__(/*! ./game.enum */ "./src/game.enum.ts");
var gameFactory_class_1 = __webpack_require__(/*! ./gameFactory.class */ "./src/gameFactory.class.ts");
var App = /** @class */ (function () {
    function App() {
        this._gameFactory = new gameFactory_class_1.gameFactory();
        this.initMenu();
    }
    App.prototype.changeGame = function (name) {
        var game = this._gameFactory.createGame(game_enum_1.Games[name]);
        this.gameContainer.innerHTML = ''; //clear
        this.gameContainer.appendChild(game.getGameElement());
    };
    App.prototype.initMenu = function () {
        var _this = this;
        var menuContainer = (document.createElement('div')); // kontener menu dostępnych gier
        this.gameContainer = (document.createElement('div')); // kontener główny ekranu z grą
        var list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartoťciach enum'a
        for (var element in game_enum_1.Games) {
            if (isNaN(Number(element))) {
                var gameName = (document.createElement('li'));
                gameName.innerText = "" + element;
                gameName.addEventListener('click', function (e) {
                    var newGameName = e.target.innerText;
                    _this.changeGame(newGameName);
                });
                list.appendChild(gameName);
            }
        }
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(this.gameContainer);
    };
    return App;
}());
new App();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmF0dGxlc2hpcHMvYmF0dGxlc2hpcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuZW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZUZhY3RvcnkuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpY3RhY3RvZS90aWN0YWN0b2UudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1CQUFtQjs7Ozs7Ozs7Ozs7QUNkTjtBQUNiLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QixhQUFhLEtBQUs7Ozs7Ozs7Ozs7O0FDUGxDO0FBQ2Isa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QyxrQkFBa0IsbUJBQU8sQ0FBQywyREFBdUI7QUFDakQsb0JBQW9CLG1CQUFPLENBQUMsbUVBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUI7Ozs7Ozs7Ozs7O0FDdEJOO0FBQ2Isa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpQkFBaUI7Ozs7Ozs7VUNkakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLGtCQUFrQjtBQUNsQixrQkFBa0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2QywwQkFBMEIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdELGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5CYXR0bGVTaGlwcyA9IHZvaWQgMDtcclxudmFyIEJhdHRsZVNoaXBzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmF0dGxlU2hpcHMoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTdGF0a2lcIjtcclxuICAgIH1cclxuICAgIEJhdHRsZVNoaXBzLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSGVsbG8gQmF0dGxlU2hpcHNcIikpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJhdHRsZVNoaXBzO1xyXG59KCkpO1xyXG5leHBvcnRzLkJhdHRsZVNoaXBzID0gQmF0dGxlU2hpcHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkdhbWVzID0gdm9pZCAwO1xyXG52YXIgR2FtZXM7XHJcbihmdW5jdGlvbiAoR2FtZXMpIHtcclxuICAgIEdhbWVzW0dhbWVzW1wiVGljVGFjVG9lXCJdID0gMV0gPSBcIlRpY1RhY1RvZVwiO1xyXG4gICAgR2FtZXNbR2FtZXNbXCJCYXR0bGVTaGlwc1wiXSA9IDJdID0gXCJCYXR0bGVTaGlwc1wiO1xyXG59KShHYW1lcyA9IGV4cG9ydHMuR2FtZXMgfHwgKGV4cG9ydHMuR2FtZXMgPSB7fSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5nYW1lRmFjdG9yeSA9IHZvaWQgMDtcclxudmFyIGdhbWVfZW51bV8xID0gcmVxdWlyZShcIi4vZ2FtZS5lbnVtXCIpO1xyXG52YXIgdGljdGFjdG9lXzEgPSByZXF1aXJlKFwiLi90aWN0YWN0b2UvdGljdGFjdG9lXCIpO1xyXG52YXIgYmF0dGxlc2hpcHNfMSA9IHJlcXVpcmUoXCIuL2JhdHRsZXNoaXBzL2JhdHRsZXNoaXBzXCIpO1xyXG52YXIgZ2FtZUZhY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBnYW1lRmFjdG9yeSgpIHtcclxuICAgIH1cclxuICAgIGdhbWVGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVHYW1lID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGdhbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBnYW1lX2VudW1fMS5HYW1lcy5UaWNUYWNUb2U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRpY3RhY3RvZV8xLlRpY1RhY1RvZSgpO1xyXG4gICAgICAgICAgICBjYXNlIGdhbWVfZW51bV8xLkdhbWVzLkJhdHRsZVNoaXBzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBiYXR0bGVzaGlwc18xLkJhdHRsZVNoaXBzKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2R1cGEnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZ2FtZUZhY3Rvcnk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZ2FtZUZhY3RvcnkgPSBnYW1lRmFjdG9yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuVGljVGFjVG9lID0gdm9pZCAwO1xyXG52YXIgVGljVGFjVG9lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGljVGFjVG9lKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiS8OzxYJrbyBpIGtyennFvHlrXCI7XHJcbiAgICB9XHJcbiAgICBUaWNUYWNUb2UucHJvdG90eXBlLmdldEdhbWVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyBUaWNUYWNUb2VcIikpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRpY1RhY1RvZTtcclxufSgpKTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSBUaWNUYWNUb2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIGdhbWVfZW51bV8xID0gcmVxdWlyZShcIi4vZ2FtZS5lbnVtXCIpO1xyXG52YXIgZ2FtZUZhY3RvcnlfY2xhc3NfMSA9IHJlcXVpcmUoXCIuL2dhbWVGYWN0b3J5LmNsYXNzXCIpO1xyXG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVGYWN0b3J5ID0gbmV3IGdhbWVGYWN0b3J5X2NsYXNzXzEuZ2FtZUZhY3RvcnkoKTtcclxuICAgICAgICB0aGlzLmluaXRNZW51KCk7XHJcbiAgICB9XHJcbiAgICBBcHAucHJvdG90eXBlLmNoYW5nZUdhbWUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHZhciBnYW1lID0gdGhpcy5fZ2FtZUZhY3RvcnkuY3JlYXRlR2FtZShnYW1lX2VudW1fMS5HYW1lc1tuYW1lXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvL2NsZWFyXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWUuZ2V0R2FtZUVsZW1lbnQoKSk7XHJcbiAgICB9O1xyXG4gICAgQXBwLnByb3RvdHlwZS5pbml0TWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBtZW51Q29udGFpbmVyID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTsgLy8ga29udGVuZXIgbWVudSBkb3N0xJlwbnljaCBnaWVyXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTsgLy8ga29udGVuZXIgZ8WCw7N3bnkgZWtyYW51IHogZ3LEhVxyXG4gICAgICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTsgLy8gbGlzdGEgcG96eWNqaSB3IG1lbnUgZG9zdMSZcG55Y2ggZ2llclxyXG4gICAgICAgIC8vIFRPRE86IFphaW1wbGVtZW50dWogd3pvcnplYyBmYWJyeWtpL21ldG9keSBmYWJyeWt1asSFY2VqLCB0YWsgYWJ5IG5hIHBvZHN0YXdpZSBrb25rcmV0bmVqIHdhcnRvxZtjaSB6IGVudW1cclxuICAgICAgICAvLyB6d3LDs2NpxIcgb2JpZWt0IGdyeS4gWiB0ZWdvIG9iaWVrdHUgbW/FvG5hIG5hc3TEmXBuaWUgcG9icmHEhyBuYXp3xJkgZ3J5IGkgZG9kYcSHIGRvIG1lbnUgb3JheiBtZXRvZMSZIHp3cmFjYWrEhWPEhVxyXG4gICAgICAgIC8vIHNhbcSFIGdyxJkgaSBwbyBrbGlrbmnEmWNpdSB3IHd5YnJhbnkgZWxlbWVudCBsaXN0eSB3eXdvxYJ5d2HEhyBqxIUsIGFieSBkb2tsZWphxIcgemF3YXJ0b8WbxIcgZG8gZ2FtZUNvbnRhaW5lci5cclxuICAgICAgICAvLyBBYnkgd3nFm3dpZXRsacSHIG1lbnUgbmFsZcW8eSBuYXBpc2HEhyBwxJl0bMSZLCBrdMOzdGEgcHJ6ZWl0ZXJ1amUgcG8gd3N6eXN0a2ljaCB3YXJ0b8WlY2lhY2ggZW51bSdhXHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBnYW1lX2VudW1fMS5HYW1lcykge1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4oTnVtYmVyKGVsZW1lbnQpKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdhbWVOYW1lID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUuaW5uZXJUZXh0ID0gXCJcIiArIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0dhbWVOYW1lID0gZS50YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZUdhbWUobmV3R2FtZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGdhbWVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdhbWVDb250YWluZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBcHA7XHJcbn0oKSk7XHJcbm5ldyBBcHAoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==