/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../lab2b-ticktoe/src/Classes/board.ts":
/*!*********************************************!*\
  !*** ../lab2b-ticktoe/src/Classes/board.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.board = void 0;
var cell_1 = __webpack_require__(/*! ./cell */ "../lab2b-ticktoe/src/Classes/cell.ts");
var board = /** @class */ (function () {
    function board(size, board) {
        var _this = this;
        this._currentMove = 'O';
        this._gameStatus = true; // 0 = finished
        this._allMoves = 0;
        this._base = size;
        var allCells = Math.pow(size, 2);
        this._board = board;
        this._cellArr = new Array(allCells);
        for (var i = 0; i < allCells; i++) {
            var element = document.createElement('div');
            element.classList.add('field');
            element.id = "" + i;
            var newCell = new cell_1.cell(element);
            newCell._htmlElement.addEventListener('mouseup', function (e) { return _this.move(e.target); });
            this._cellArr[i] = newCell;
        }
    }
    board.prototype.init = function () {
        for (var _i = 0, _a = this._cellArr; _i < _a.length; _i++) {
            var element = _a[_i];
            this._board.appendChild(element._htmlElement);
        }
    };
    board.prototype.move = function (ev) {
        var currentCell = this._cellArr.filter(function (el) { return el._htmlElement == ev; });
        if (currentCell[0]._value == '' && this._gameStatus) {
            currentCell[0].changeValue(this._currentMove);
            this._allMoves++;
            this.checkWin(parseInt(currentCell[0]._htmlElement.id));
            this.changePlayer();
        }
    };
    board.prototype.changePlayer = function () {
        if (this._currentMove === 'O')
            this._currentMove = 'X';
        else
            this._currentMove = 'O';
        document.querySelector('#currentPlayer').innerHTML = this._currentMove;
    };
    board.prototype.checkWin = function (currId) {
        for (var i = 0; i < this._base; i++) {
            if (this._cellArr[i]._value != '' || this._cellArr[i + this._base]._value != '' || this._cellArr[i + 2 * this._base]._value != '')
                if (this._cellArr[i]._value == this._cellArr[i + this._base]._value && this._cellArr[i]._value == this._cellArr[i + 2 * this._base]._value)
                    this.callWinner();
        }
        for (var i = 0; i < this._base * this._base; i += this._base) {
            if (this._cellArr[i]._value != '' || this._cellArr[i + 1]._value != '' || this._cellArr[i + 2]._value != '')
                if (this._cellArr[i]._value == this._cellArr[i + 1]._value && this._cellArr[i]._value == this._cellArr[i + 2]._value)
                    this.callWinner();
        }
        if (this._cellArr[0]._value != '' && this._cellArr[4]._value != '' && this._cellArr[8]._value != '')
            if (this._cellArr[0]._value == this._cellArr[4]._value && this._cellArr[0]._value == this._cellArr[8]._value)
                this.callWinner();
        if (this._cellArr[2]._value != '' && this._cellArr[4]._value != '' && this._cellArr[6]._value != '')
            if (this._cellArr[2]._value == this._cellArr[4]._value && this._cellArr[2]._value == this._cellArr[6]._value)
                this.callWinner();
        //draw
        console.log(this._allMoves);
        if (this._allMoves == this._cellArr.length)
            this.callDraw();
    };
    board.prototype.callWinner = function () {
        this._gameStatus = false;
        var info = document.querySelector('.winner');
        info.style.display = 'flex';
        info.innerHTML = "Player: " + this._currentMove + " has won";
    };
    board.prototype.callDraw = function () {
        this._gameStatus = false;
        var info = document.querySelector('.winner');
        info.style.display = 'flex';
        info.innerHTML = "DRAW";
    };
    return board;
}());
exports.board = board;


/***/ }),

/***/ "../lab2b-ticktoe/src/Classes/cell.ts":
/*!********************************************!*\
  !*** ../lab2b-ticktoe/src/Classes/cell.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.cell = void 0;
var cell = /** @class */ (function () {
    function cell(element) {
        this._value = '';
        this._htmlElement = element;
    }
    cell.prototype.changeValue = function (newValue) {
        if (this._value === '') {
            this._value = newValue;
            this._htmlElement.innerHTML = this._value;
        }
    };
    return cell;
}());
exports.cell = cell;


/***/ }),

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.TicTacToe = void 0;
var board_1 = __webpack_require__(/*! ../../../lab2b-ticktoe/src/Classes/board */ "../lab2b-ticktoe/src/Classes/board.ts");
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Kółko i krzyżyk";
    }
    TicTacToe.prototype.getGameElement = function () {
        var div = document.createElement('div');
        var divWinner = document.createElement('div');
        divWinner.classList.add('winner');
        div.appendChild(divWinner);
        div.classList.add('board');
        var game = new board_1.board(3, div);
        game.init();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbGFiMmItdGlja3RvZS9zcmMvQ2xhc3Nlcy9ib2FyZC50cyIsIndlYnBhY2s6Ly8vLi4vbGFiMmItdGlja3RvZS9zcmMvQ2xhc3Nlcy9jZWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXR0bGVzaGlwcy9iYXR0bGVzaGlwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5lbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lRmFjdG9yeS5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL3RpY3RhY3RvZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsYUFBYSxtQkFBTyxDQUFDLG9EQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSw2QkFBNkIsRUFBRTtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQkFBZ0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCw4QkFBOEIsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxhQUFhOzs7Ozs7Ozs7OztBQ2pGQTtBQUNiLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFlBQVk7Ozs7Ozs7Ozs7O0FDaEJDO0FBQ2Isa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQkFBbUI7Ozs7Ozs7Ozs7O0FDZE47QUFDYixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEIsYUFBYSxLQUFLOzs7Ozs7Ozs7OztBQ1BsQztBQUNiLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsa0JBQWtCLG1CQUFPLENBQUMsdUNBQWE7QUFDdkMsa0JBQWtCLG1CQUFPLENBQUMsMkRBQXVCO0FBQ2pELG9CQUFvQixtQkFBTyxDQUFDLG1FQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsbUJBQW1COzs7Ozs7Ozs7OztBQ3RCTjtBQUNiLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsY0FBYyxtQkFBTyxDQUFDLHVGQUEwQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUJBQWlCOzs7Ozs7O1VDcEJqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2Isa0JBQWtCO0FBQ2xCLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZDLDBCQUEwQixtQkFBTyxDQUFDLHVEQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCw2REFBNkQ7QUFDN0QsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLmJvYXJkID0gdm9pZCAwO1xyXG52YXIgY2VsbF8xID0gcmVxdWlyZShcIi4vY2VsbFwiKTtcclxudmFyIGJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gYm9hcmQoc2l6ZSwgYm9hcmQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNb3ZlID0gJ08nO1xyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0dXMgPSB0cnVlOyAvLyAwID0gZmluaXNoZWRcclxuICAgICAgICB0aGlzLl9hbGxNb3ZlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5fYmFzZSA9IHNpemU7XHJcbiAgICAgICAgdmFyIGFsbENlbGxzID0gTWF0aC5wb3coc2l6ZSwgMik7XHJcbiAgICAgICAgdGhpcy5fYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLl9jZWxsQXJyID0gbmV3IEFycmF5KGFsbENlbGxzKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbENlbGxzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gXCJcIiArIGk7XHJcbiAgICAgICAgICAgIHZhciBuZXdDZWxsID0gbmV3IGNlbGxfMS5jZWxsKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBuZXdDZWxsLl9odG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLm1vdmUoZS50YXJnZXQpOyB9KTtcclxuICAgICAgICAgICAgdGhpcy5fY2VsbEFycltpXSA9IG5ld0NlbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYm9hcmQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX2NlbGxBcnI7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5hcHBlbmRDaGlsZChlbGVtZW50Ll9odG1sRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGJvYXJkLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRDZWxsID0gdGhpcy5fY2VsbEFyci5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5faHRtbEVsZW1lbnQgPT0gZXY7IH0pO1xyXG4gICAgICAgIGlmIChjdXJyZW50Q2VsbFswXS5fdmFsdWUgPT0gJycgJiYgdGhpcy5fZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2VsbFswXS5jaGFuZ2VWYWx1ZSh0aGlzLl9jdXJyZW50TW92ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsbE1vdmVzKys7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tXaW4ocGFyc2VJbnQoY3VycmVudENlbGxbMF0uX2h0bWxFbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGJvYXJkLnByb3RvdHlwZS5jaGFuZ2VQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRNb3ZlID09PSAnTycpXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRNb3ZlID0gJ1gnO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudE1vdmUgPSAnTyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRQbGF5ZXInKS5pbm5lckhUTUwgPSB0aGlzLl9jdXJyZW50TW92ZTtcclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUuY2hlY2tXaW4gPSBmdW5jdGlvbiAoY3VycklkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9iYXNlOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlICE9ICcnIHx8IHRoaXMuX2NlbGxBcnJbaSArIHRoaXMuX2Jhc2VdLl92YWx1ZSAhPSAnJyB8fCB0aGlzLl9jZWxsQXJyW2kgKyAyICogdGhpcy5fYmFzZV0uX3ZhbHVlICE9ICcnKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbaSArIHRoaXMuX2Jhc2VdLl92YWx1ZSAmJiB0aGlzLl9jZWxsQXJyW2ldLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyW2kgKyAyICogdGhpcy5fYmFzZV0uX3ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFdpbm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2Jhc2UgKiB0aGlzLl9iYXNlOyBpICs9IHRoaXMuX2Jhc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlICE9ICcnIHx8IHRoaXMuX2NlbGxBcnJbaSArIDFdLl92YWx1ZSAhPSAnJyB8fCB0aGlzLl9jZWxsQXJyW2kgKyAyXS5fdmFsdWUgIT0gJycpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2VsbEFycltpXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycltpICsgMV0uX3ZhbHVlICYmIHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbaSArIDJdLl92YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbMF0uX3ZhbHVlICE9ICcnICYmIHRoaXMuX2NlbGxBcnJbNF0uX3ZhbHVlICE9ICcnICYmIHRoaXMuX2NlbGxBcnJbOF0uX3ZhbHVlICE9ICcnKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2VsbEFyclswXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycls0XS5fdmFsdWUgJiYgdGhpcy5fY2VsbEFyclswXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycls4XS5fdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoKTtcclxuICAgICAgICBpZiAodGhpcy5fY2VsbEFyclsyXS5fdmFsdWUgIT0gJycgJiYgdGhpcy5fY2VsbEFycls0XS5fdmFsdWUgIT0gJycgJiYgdGhpcy5fY2VsbEFycls2XS5fdmFsdWUgIT0gJycpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jZWxsQXJyWzJdLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyWzRdLl92YWx1ZSAmJiB0aGlzLl9jZWxsQXJyWzJdLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyWzZdLl92YWx1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbFdpbm5lcigpO1xyXG4gICAgICAgIC8vZHJhd1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FsbE1vdmVzKTtcclxuICAgICAgICBpZiAodGhpcy5fYWxsTW92ZXMgPT0gdGhpcy5fY2VsbEFyci5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuY2FsbERyYXcoKTtcclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUuY2FsbFdpbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XHJcbiAgICAgICAgaW5mby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gXCJQbGF5ZXI6IFwiICsgdGhpcy5fY3VycmVudE1vdmUgKyBcIiBoYXMgd29uXCI7XHJcbiAgICB9O1xyXG4gICAgYm9hcmQucHJvdG90eXBlLmNhbGxEcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcclxuICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIkRSQVdcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuYm9hcmQgPSBib2FyZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuY2VsbCA9IHZvaWQgMDtcclxudmFyIGNlbGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBjZWxsKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuX2h0bWxFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGNlbGwucHJvdG90eXBlLmNoYW5nZVZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9odG1sRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLl92YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNlbGw7XHJcbn0oKSk7XHJcbmV4cG9ydHMuY2VsbCA9IGNlbGw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLkJhdHRsZVNoaXBzID0gdm9pZCAwO1xyXG52YXIgQmF0dGxlU2hpcHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCYXR0bGVTaGlwcygpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlN0YXRraVwiO1xyXG4gICAgfVxyXG4gICAgQmF0dGxlU2hpcHMucHJvdG90eXBlLmdldEdhbWVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyBCYXR0bGVTaGlwc1wiKSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmF0dGxlU2hpcHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQmF0dGxlU2hpcHMgPSBCYXR0bGVTaGlwcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuR2FtZXMgPSB2b2lkIDA7XHJcbnZhciBHYW1lcztcclxuKGZ1bmN0aW9uIChHYW1lcykge1xyXG4gICAgR2FtZXNbR2FtZXNbXCJUaWNUYWNUb2VcIl0gPSAxXSA9IFwiVGljVGFjVG9lXCI7XHJcbiAgICBHYW1lc1tHYW1lc1tcIkJhdHRsZVNoaXBzXCJdID0gMl0gPSBcIkJhdHRsZVNoaXBzXCI7XHJcbn0pKEdhbWVzID0gZXhwb3J0cy5HYW1lcyB8fCAoZXhwb3J0cy5HYW1lcyA9IHt9KSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLmdhbWVGYWN0b3J5ID0gdm9pZCAwO1xyXG52YXIgZ2FtZV9lbnVtXzEgPSByZXF1aXJlKFwiLi9nYW1lLmVudW1cIik7XHJcbnZhciB0aWN0YWN0b2VfMSA9IHJlcXVpcmUoXCIuL3RpY3RhY3RvZS90aWN0YWN0b2VcIik7XHJcbnZhciBiYXR0bGVzaGlwc18xID0gcmVxdWlyZShcIi4vYmF0dGxlc2hpcHMvYmF0dGxlc2hpcHNcIik7XHJcbnZhciBnYW1lRmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGdhbWVGYWN0b3J5KCkge1xyXG4gICAgfVxyXG4gICAgZ2FtZUZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZUdhbWUgPSBmdW5jdGlvbiAoZ2FtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZ2FtZSkge1xyXG4gICAgICAgICAgICBjYXNlIGdhbWVfZW51bV8xLkdhbWVzLlRpY1RhY1RvZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGljdGFjdG9lXzEuVGljVGFjVG9lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZV9lbnVtXzEuR2FtZXMuQmF0dGxlU2hpcHM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGJhdHRsZXNoaXBzXzEuQmF0dGxlU2hpcHMoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZHVwYScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBnYW1lRmFjdG9yeTtcclxufSgpKTtcclxuZXhwb3J0cy5nYW1lRmFjdG9yeSA9IGdhbWVGYWN0b3J5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSB2b2lkIDA7XHJcbnZhciBib2FyZF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2xhYjJiLXRpY2t0b2Uvc3JjL0NsYXNzZXMvYm9hcmRcIik7XHJcbnZhciBUaWNUYWNUb2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUaWNUYWNUb2UoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJLw7PFgmtvIGkga3J6ecW8eWtcIjtcclxuICAgIH1cclxuICAgIFRpY1RhY1RvZS5wcm90b3R5cGUuZ2V0R2FtZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZhciBkaXZXaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZXaW5uZXIuY2xhc3NMaXN0LmFkZCgnd2lubmVyJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGRpdldpbm5lcik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbiAgICAgICAgdmFyIGdhbWUgPSBuZXcgYm9hcmRfMS5ib2FyZCgzLCBkaXYpO1xyXG4gICAgICAgIGdhbWUuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRpY1RhY1RvZTtcclxufSgpKTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSBUaWNUYWNUb2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIGdhbWVfZW51bV8xID0gcmVxdWlyZShcIi4vZ2FtZS5lbnVtXCIpO1xyXG52YXIgZ2FtZUZhY3RvcnlfY2xhc3NfMSA9IHJlcXVpcmUoXCIuL2dhbWVGYWN0b3J5LmNsYXNzXCIpO1xyXG52YXIgQXBwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVGYWN0b3J5ID0gbmV3IGdhbWVGYWN0b3J5X2NsYXNzXzEuZ2FtZUZhY3RvcnkoKTtcclxuICAgICAgICB0aGlzLmluaXRNZW51KCk7XHJcbiAgICB9XHJcbiAgICBBcHAucHJvdG90eXBlLmNoYW5nZUdhbWUgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHZhciBnYW1lID0gdGhpcy5fZ2FtZUZhY3RvcnkuY3JlYXRlR2FtZShnYW1lX2VudW1fMS5HYW1lc1tuYW1lXSk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvL2NsZWFyXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWUuZ2V0R2FtZUVsZW1lbnQoKSk7XHJcbiAgICB9O1xyXG4gICAgQXBwLnByb3RvdHlwZS5pbml0TWVudSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBtZW51Q29udGFpbmVyID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTsgLy8ga29udGVuZXIgbWVudSBkb3N0xJlwbnljaCBnaWVyXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTsgLy8ga29udGVuZXIgZ8WCw7N3bnkgZWtyYW51IHogZ3LEhVxyXG4gICAgICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTsgLy8gbGlzdGEgcG96eWNqaSB3IG1lbnUgZG9zdMSZcG55Y2ggZ2llclxyXG4gICAgICAgIC8vIFRPRE86IFphaW1wbGVtZW50dWogd3pvcnplYyBmYWJyeWtpL21ldG9keSBmYWJyeWt1asSFY2VqLCB0YWsgYWJ5IG5hIHBvZHN0YXdpZSBrb25rcmV0bmVqIHdhcnRvxZtjaSB6IGVudW1cclxuICAgICAgICAvLyB6d3LDs2NpxIcgb2JpZWt0IGdyeS4gWiB0ZWdvIG9iaWVrdHUgbW/FvG5hIG5hc3TEmXBuaWUgcG9icmHEhyBuYXp3xJkgZ3J5IGkgZG9kYcSHIGRvIG1lbnUgb3JheiBtZXRvZMSZIHp3cmFjYWrEhWPEhVxyXG4gICAgICAgIC8vIHNhbcSFIGdyxJkgaSBwbyBrbGlrbmnEmWNpdSB3IHd5YnJhbnkgZWxlbWVudCBsaXN0eSB3eXdvxYJ5d2HEhyBqxIUsIGFieSBkb2tsZWphxIcgemF3YXJ0b8WbxIcgZG8gZ2FtZUNvbnRhaW5lci5cclxuICAgICAgICAvLyBBYnkgd3nFm3dpZXRsacSHIG1lbnUgbmFsZcW8eSBuYXBpc2HEhyBwxJl0bMSZLCBrdMOzdGEgcHJ6ZWl0ZXJ1amUgcG8gd3N6eXN0a2ljaCB3YXJ0b8WlY2lhY2ggZW51bSdhXHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBnYW1lX2VudW1fMS5HYW1lcykge1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4oTnVtYmVyKGVsZW1lbnQpKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdhbWVOYW1lID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUuaW5uZXJUZXh0ID0gXCJcIiArIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0dhbWVOYW1lID0gZS50YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZUdhbWUobmV3R2FtZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGdhbWVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdhbWVDb250YWluZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBcHA7XHJcbn0oKSk7XHJcbm5ldyBBcHAoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==