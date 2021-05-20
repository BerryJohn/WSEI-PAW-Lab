/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menuContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #7ad3da;\n  height: 100vh;\n  width: 150px;\n}\n.menuContainer ul {\n  padding: 0px;\n}\n.menuContainer ul li {\n  list-style: none;\n  cursor: pointer;\n  margin-top: 2px;\n  padding: 10px;\n  background-color: #16de8b;\n  transition: 0.2s;\n  border-radius: 2px;\n}\n.menuContainer ul li:hover {\n  background-color: aliceblue;\n}\n\n.board {\n  position: relative;\n  width: 600px;\n  height: 600px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.board .playerinfo {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  top: -30px;\n  left: 285px;\n  font-size: 30px;\n}\n\n.field {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 180px;\n  height: 180px;\n  margin: 10px;\n  background-color: rgba(211, 255, 198, 0.966);\n  font-size: 144px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.field:hover {\n  background-color: rgba(161, 248, 134, 0.966);\n}\n\n.winner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: none;\n  position: absolute;\n  width: 300px;\n  height: 150px;\n  background: linear-gradient(0deg, #1296aa 0%, #00ffbe 100%);\n  font-size: 24px;\n  right: calc(50% - 150px);\n  top: calc(50% - 75px);\n}\n\n.gameContainer {\n  background: #1296aa;\n  background: linear-gradient(0deg, #1296aa 0%, #00ffbe 100%);\n  flex-grow: 1;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nbody {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  min-height: 100vh;\n  font-family: sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/_menuContainer.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_veriables.scss","webpack://./src/styles/styles.scss","webpack://./src/styles/_ticktactoe.scss","webpack://./src/styles/_gameContainer.scss"],"names":[],"mappings":"AAGA;ECFI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EDK/B,yBEJY;EFKZ,aAAA;EACA,YAAA;AGCJ;AHAI;EACI,YAAA;AGER;AHDQ;EACI,gBAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;EACA,yBEbG;EFcH,gBAAA;EACA,kBAAA;AGGZ;AHFY;EACI,2BAAA;AGIhB;;ACpBA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;ADuBJ;ACtBI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;ADwBR;;ACpBA;EHlBI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EGqB/B,YAAA;EACA,aAAA;EACA,YAAA;EACA,4CFjBU;EEkBV,gBAAA;EACA,eAAA;EACA,gBAAA;AD0BJ;ACzBI;EACI,4CFrBY;ACgDpB;;ACvBA;EHhCI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EGmC/B,aAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,2DFpCU;EEqCV,eAAA;EACA,wBAAA;EACA,qBAAA;AD6BJ;;AEjEA;EACI,mBAAA;EACA,2DHLU;EGMV,YAAA;EACA,iBAAA;EJTA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;AEkFnC;;AA9EA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;AAiFF","sourcesContent":["\r\n@import '_mixins.scss';\r\n\r\n.menuContainer{\r\n    @include flex-center();\r\n    background-color: $bg-left-color;\r\n    height:100vh;\r\n    width:150px;\r\n    ul{\r\n        padding:0px;\r\n        li{\r\n            list-style: none;\r\n            cursor: pointer;\r\n            margin-top:2px;\r\n            padding:10px;\r\n            background-color: $button-color;\r\n            transition: .2s;\r\n            border-radius:2px;\r\n            &:hover{\r\n                background-color: aliceblue;\r\n            }\r\n        }  \r\n    }\r\n\r\n}","@mixin flex-center($flex-direction:column){\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: $flex-direction;\r\n}","\r\n$bg-left-color: rgb(122, 211, 218);\r\n$button-color: rgb(22, 222, 139);\r\n$bg-gradient: linear-gradient(0deg, rgba(18,150,170,1) 0%, rgba(0,255,190,1) 100%);\r\n\r\n// TicTacToe\r\n\r\n$field-color: rgba(211, 255, 198, 0.966);\r\n$field-hover-color: rgba(161, 248, 134, 0.966);","@import '_veriables.scss';\r\n@import '_menuContainer.scss';\r\n@import '_gameContainer.scss';\r\n\r\nbody {\r\n  margin:0px;\r\n  padding:0px;\r\n  display:flex;\r\n  min-height: 100vh;\r\n  font-family: sans-serif;\r\n}","@import '_mixins.scss';\r\n@import '_veriables.scss';\r\n\r\n.board{\r\n    position: relative;\r\n    width:600px;\r\n    height:600px;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    .playerinfo{\r\n        position: absolute;\r\n        width:30px;\r\n        height:30px;\r\n        top:-30px;\r\n        left:300px - 15px;\r\n        font-size:30px;\r\n    }\r\n}\r\n\r\n.field{\r\n    @include flex-center();\r\n    width:180px;\r\n    height:180px;\r\n    margin:10px;\r\n    background-color: $field-color;\r\n    font-size:144px;\r\n    cursor: pointer;\r\n    transition:.2s;\r\n    &:hover{\r\n        background-color: $field-hover-color;\r\n    }\r\n}\r\n\r\n.winner{\r\n    @include flex-center();\r\n    display:none;\r\n    position: absolute;\r\n    width:300px;\r\n    height:150px;\r\n    background: $bg-gradient;\r\n    font-size:24px;\r\n    right:calc(50% - 150px);\r\n    top:calc(50% - 75px);\r\n}","\r\n@import '_mixins.scss';\r\n@import '_veriables.scss';\r\n\r\n@import '_ticktactoe.scss';\r\n\r\n.gameContainer{\r\n    background: rgb(18,150,170);\r\n    background: $bg-gradient;\r\n    flex-grow:1;\r\n    min-height: 100vh;\r\n    @include flex-center();\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../lab2b-ticktoe/src/Classes/board.ts":
/*!*********************************************!*\
  !*** ../lab2b-ticktoe/src/Classes/board.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
        var playerInfo = document.createElement('div');
        playerInfo.classList.add('playerinfo');
        var player = document.createElement('span');
        player.id = 'currentPlayer';
        playerInfo.appendChild(player);
        this._board.appendChild(playerInfo);
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


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BattleShips = void 0;
var decorators_1 = __webpack_require__(/*! ../decorators */ "./src/decorators.ts");
var BattleShips = /** @class */ (function () {
    function BattleShips() {
        this.name = "Statki";
    }
    BattleShips.prototype.getGameElement = function () {
        if (!this.isDisabled) {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode("Hello BattleShips"));
            return div;
        }
    };
    __decorate([
        decorators_1.watch
    ], BattleShips.prototype, "getGameElement", null);
    BattleShips = __decorate([
        decorators_1.disabled
    ], BattleShips);
    return BattleShips;
}());
exports.BattleShips = BattleShips;


/***/ }),

/***/ "./src/decorators.ts":
/*!***************************!*\
  !*** ./src/decorators.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.watch = exports.enabled = exports.disabled = void 0;
function disabled(constructorFn) {
    constructorFn.prototype.isDisabled = true;
}
exports.disabled = disabled;
function enabled(constructorFn) {
    constructorFn.prototype.isDisabled = false;
}
exports.enabled = enabled;
function watch(target, propKey, descriptor) {
    var originalFn = target[propKey];
    descriptor.value = function (param) {
        console.log(target.constructor.name + " is running!");
        return originalFn.call(this, param);
    };
}
exports.watch = watch;


/***/ }),

/***/ "./src/game.enum.ts":
/*!**************************!*\
  !*** ./src/game.enum.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
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


Object.defineProperty(exports, "__esModule", ({ value: true }));
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TicTacToe = void 0;
var board_1 = __webpack_require__(/*! ../../../lab2b-ticktoe/src/Classes/board */ "../lab2b-ticktoe/src/Classes/board.ts");
var decorators_1 = __webpack_require__(/*! ../decorators */ "./src/decorators.ts");
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Kółko i krzyżyk";
    }
    TicTacToe.prototype.getGameElement = function () {
        if (!this.isDisabled) {
            var div = document.createElement('div');
            var divWinner = document.createElement('div');
            divWinner.classList.add('winner');
            div.appendChild(divWinner);
            div.classList.add('board');
            var game = new board_1.board(3, div);
            game.init();
            return div;
        }
    };
    __decorate([
        decorators_1.watch
    ], TicTacToe.prototype, "getGameElement", null);
    TicTacToe = __decorate([
        decorators_1.enabled
    ], TicTacToe);
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var game_enum_1 = __webpack_require__(/*! ./game.enum */ "./src/game.enum.ts");
var gameFactory_class_1 = __webpack_require__(/*! ./gameFactory.class */ "./src/gameFactory.class.ts");
__webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
var App = /** @class */ (function () {
    function App() {
        this._gameFactory = new gameFactory_class_1.gameFactory();
        this.initMenu();
    }
    App.prototype.changeGame = function (name) {
        var game = this._gameFactory.createGame(game_enum_1.Games[name]);
        try {
            this.gameContainer.innerHTML = ''; //clear
            this.gameContainer.appendChild(game.getGameElement());
        }
        catch (_a) {
            console.log('Error');
        }
    };
    App.prototype.initMenu = function () {
        var _this = this;
        var menuContainer = (document.createElement('div')); // kontener menu dostępnych gier
        menuContainer.classList.add('menuContainer');
        this.gameContainer = (document.createElement('div')); // kontener główny ekranu z grą
        this.gameContainer.classList.add('gameContainer');
        var list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartoťciach enum'a
        for (var element in game_enum_1.Games) {
            if (isNaN(Number(element))) {
                var gameName = (document.createElement('li'));
                {
                    gameName.innerText = "" + element;
                    gameName.addEventListener('click', function (e) {
                        var newGameName = e.target.innerText;
                        _this.changeGame(newGameName);
                    });
                    list.appendChild(gameName);
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8yMDNiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbGFiMmItdGlja3RvZS9zcmMvQ2xhc3Nlcy9ib2FyZC50cyIsIndlYnBhY2s6Ly8vLi4vbGFiMmItdGlja3RvZS9zcmMvQ2xhc3Nlcy9jZWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXR0bGVzaGlwcy9iYXR0bGVzaGlwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5lbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lRmFjdG9yeS5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL3RpY3RhY3RvZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpb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QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1lbnVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FkM2RhO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuLm1lbnVDb250YWluZXIgdWwge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG4ubWVudUNvbnRhaW5lciB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNmRlOGI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4ubWVudUNvbnRhaW5lciB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5ib2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmJvYXJkIC5wbGF5ZXJpbmZvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdG9wOiAtMzBweDtcXG4gIGxlZnQ6IDI4NXB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDI1NSwgMTk4LCAwLjk2Nik7XFxuICBmb250LXNpemU6IDE0NHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuLmZpZWxkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAyNDgsIDEzNCwgMC45NjYpO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzEyOTZhYSAwJSwgIzAwZmZiZSAxMDAlKTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDE1MHB4KTtcXG4gIHRvcDogY2FsYyg1MCUgLSA3NXB4KTtcXG59XFxuXFxuLmdhbWVDb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogIzEyOTZhYTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTI5NmFhIDAlLCAjMDBmZmJlIDEwMCUpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19tZW51Q29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL192ZXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdGlja3RhY3RvZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19nYW1lQ29udGFpbmVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUNGSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUorQjtFREsvQix5QkVKWTtFRktaLGFBQUE7RUFDQSxZQUFBO0FHQ0o7QUhBSTtFQUNJLFlBQUE7QUdFUjtBSERRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkViRztFRmNILGdCQUFBO0VBQ0Esa0JBQUE7QUdHWjtBSEZZO0VBQ0ksMkJBQUE7QUdJaEI7O0FDcEJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FEdUJKO0FDdEJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRHdCUjs7QUNwQkE7RUhsQkksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFKK0I7RUdxQi9CLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDRDRmpCVTtFRWtCVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDBCSjtBQ3pCSTtFQUNJLDRDRnJCWTtBQ2dEcEI7O0FDdkJBO0VIaENJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBSitCO0VHbUMvQixhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJERnBDVTtFRXFDVixlQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBRDZCSjs7QUVqRUE7RUFDSSxtQkFBQTtFQUNBLDJESExVO0VHTVYsWUFBQTtFQUNBLGlCQUFBO0VKVEEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFKK0I7QUVrRm5DOztBQTlFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFpRkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuQGltcG9ydCAnX21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4ubWVudUNvbnRhaW5lcntcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWxlZnQtY29sb3I7XFxyXFxuICAgIGhlaWdodDoxMDB2aDtcXHJcXG4gICAgd2lkdGg6MTUwcHg7XFxyXFxuICAgIHVse1xcclxcbiAgICAgICAgcGFkZGluZzowcHg7XFxyXFxuICAgICAgICBsaXtcXHJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjJweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1jb2xvcjtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoycHg7XFxyXFxuICAgICAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0gIFxcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiLFwiQG1peGluIGZsZXgtY2VudGVyKCRmbGV4LWRpcmVjdGlvbjpjb2x1bW4pe1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xcclxcbn1cIixcIlxcclxcbiRiZy1sZWZ0LWNvbG9yOiByZ2IoMTIyLCAyMTEsIDIxOCk7XFxyXFxuJGJ1dHRvbi1jb2xvcjogcmdiKDIyLCAyMjIsIDEzOSk7XFxyXFxuJGJnLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxOCwxNTAsMTcwLDEpIDAlLCByZ2JhKDAsMjU1LDE5MCwxKSAxMDAlKTtcXHJcXG5cXHJcXG4vLyBUaWNUYWNUb2VcXHJcXG5cXHJcXG4kZmllbGQtY29sb3I6IHJnYmEoMjExLCAyNTUsIDE5OCwgMC45NjYpO1xcclxcbiRmaWVsZC1ob3Zlci1jb2xvcjogcmdiYSgxNjEsIDI0OCwgMTM0LCAwLjk2Nik7XCIsXCJAaW1wb3J0ICdfdmVyaWFibGVzLnNjc3MnO1xcclxcbkBpbXBvcnQgJ19tZW51Q29udGFpbmVyLnNjc3MnO1xcclxcbkBpbXBvcnQgJ19nYW1lQ29udGFpbmVyLnNjc3MnO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOjBweDtcXHJcXG4gIHBhZGRpbmc6MHB4O1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XCIsXCJAaW1wb3J0ICdfbWl4aW5zLnNjc3MnO1xcclxcbkBpbXBvcnQgJ192ZXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLmJvYXJke1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOjYwMHB4O1xcclxcbiAgICBoZWlnaHQ6NjAwcHg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC13cmFwOndyYXA7XFxyXFxuICAgIC5wbGF5ZXJpbmZve1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6MzBweDtcXHJcXG4gICAgICAgIGhlaWdodDozMHB4O1xcclxcbiAgICAgICAgdG9wOi0zMHB4O1xcclxcbiAgICAgICAgbGVmdDozMDBweCAtIDE1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6MzBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmllbGR7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XFxyXFxuICAgIHdpZHRoOjE4MHB4O1xcclxcbiAgICBoZWlnaHQ6MTgwcHg7XFxyXFxuICAgIG1hcmdpbjoxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmllbGQtY29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZToxNDRweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOi4ycztcXHJcXG4gICAgJjpob3ZlcntcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWVsZC1ob3Zlci1jb2xvcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ud2lubmVye1xcclxcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6MzAwcHg7XFxyXFxuICAgIGhlaWdodDoxNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogJGJnLWdyYWRpZW50O1xcclxcbiAgICBmb250LXNpemU6MjRweDtcXHJcXG4gICAgcmlnaHQ6Y2FsYyg1MCUgLSAxNTBweCk7XFxyXFxuICAgIHRvcDpjYWxjKDUwJSAtIDc1cHgpO1xcclxcbn1cIixcIlxcclxcbkBpbXBvcnQgJ19taXhpbnMuc2Nzcyc7XFxyXFxuQGltcG9ydCAnX3ZlcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG5AaW1wb3J0ICdfdGlja3RhY3RvZS5zY3NzJztcXHJcXG5cXHJcXG4uZ2FtZUNvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4LDE1MCwxNzApO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkYmctZ3JhZGllbnQ7XFxyXFxuICAgIGZsZXgtZ3JvdzoxO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmJvYXJkID0gdm9pZCAwO1xyXG52YXIgY2VsbF8xID0gcmVxdWlyZShcIi4vY2VsbFwiKTtcclxudmFyIGJvYXJkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gYm9hcmQoc2l6ZSwgYm9hcmQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNb3ZlID0gJ08nO1xyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0dXMgPSB0cnVlOyAvLyAwID0gZmluaXNoZWRcclxuICAgICAgICB0aGlzLl9hbGxNb3ZlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5fYmFzZSA9IHNpemU7XHJcbiAgICAgICAgdmFyIGFsbENlbGxzID0gTWF0aC5wb3coc2l6ZSwgMik7XHJcbiAgICAgICAgdGhpcy5fYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLl9jZWxsQXJyID0gbmV3IEFycmF5KGFsbENlbGxzKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbENlbGxzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWVsZCcpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gXCJcIiArIGk7XHJcbiAgICAgICAgICAgIHZhciBuZXdDZWxsID0gbmV3IGNlbGxfMS5jZWxsKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBuZXdDZWxsLl9odG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLm1vdmUoZS50YXJnZXQpOyB9KTtcclxuICAgICAgICAgICAgdGhpcy5fY2VsbEFycltpXSA9IG5ld0NlbGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYm9hcmQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX2NlbGxBcnI7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICB0aGlzLl9ib2FyZC5hcHBlbmRDaGlsZChlbGVtZW50Ll9odG1sRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGxheWVySW5mby5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJpbmZvJyk7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBwbGF5ZXIuaWQgPSAnY3VycmVudFBsYXllcic7XHJcbiAgICAgICAgcGxheWVySW5mby5hcHBlbmRDaGlsZChwbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuX2JvYXJkLmFwcGVuZENoaWxkKHBsYXllckluZm8pO1xyXG4gICAgfTtcclxuICAgIGJvYXJkLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRDZWxsID0gdGhpcy5fY2VsbEFyci5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5faHRtbEVsZW1lbnQgPT0gZXY7IH0pO1xyXG4gICAgICAgIGlmIChjdXJyZW50Q2VsbFswXS5fdmFsdWUgPT0gJycgJiYgdGhpcy5fZ2FtZVN0YXR1cykge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2VsbFswXS5jaGFuZ2VWYWx1ZSh0aGlzLl9jdXJyZW50TW92ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsbE1vdmVzKys7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tXaW4ocGFyc2VJbnQoY3VycmVudENlbGxbMF0uX2h0bWxFbGVtZW50LmlkKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGJvYXJkLnByb3RvdHlwZS5jaGFuZ2VQbGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRNb3ZlID09PSAnTycpXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRNb3ZlID0gJ1gnO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudE1vdmUgPSAnTyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRQbGF5ZXInKS5pbm5lckhUTUwgPSB0aGlzLl9jdXJyZW50TW92ZTtcclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUuY2hlY2tXaW4gPSBmdW5jdGlvbiAoY3VycklkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9iYXNlOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlICE9ICcnIHx8IHRoaXMuX2NlbGxBcnJbaSArIHRoaXMuX2Jhc2VdLl92YWx1ZSAhPSAnJyB8fCB0aGlzLl9jZWxsQXJyW2kgKyAyICogdGhpcy5fYmFzZV0uX3ZhbHVlICE9ICcnKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbaSArIHRoaXMuX2Jhc2VdLl92YWx1ZSAmJiB0aGlzLl9jZWxsQXJyW2ldLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyW2kgKyAyICogdGhpcy5fYmFzZV0uX3ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFdpbm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2Jhc2UgKiB0aGlzLl9iYXNlOyBpICs9IHRoaXMuX2Jhc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlICE9ICcnIHx8IHRoaXMuX2NlbGxBcnJbaSArIDFdLl92YWx1ZSAhPSAnJyB8fCB0aGlzLl9jZWxsQXJyW2kgKyAyXS5fdmFsdWUgIT0gJycpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2VsbEFycltpXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycltpICsgMV0uX3ZhbHVlICYmIHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbaSArIDJdLl92YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbMF0uX3ZhbHVlICE9ICcnICYmIHRoaXMuX2NlbGxBcnJbNF0uX3ZhbHVlICE9ICcnICYmIHRoaXMuX2NlbGxBcnJbOF0uX3ZhbHVlICE9ICcnKVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2VsbEFyclswXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycls0XS5fdmFsdWUgJiYgdGhpcy5fY2VsbEFyclswXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycls4XS5fdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxXaW5uZXIoKTtcclxuICAgICAgICBpZiAodGhpcy5fY2VsbEFyclsyXS5fdmFsdWUgIT0gJycgJiYgdGhpcy5fY2VsbEFycls0XS5fdmFsdWUgIT0gJycgJiYgdGhpcy5fY2VsbEFycls2XS5fdmFsdWUgIT0gJycpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jZWxsQXJyWzJdLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyWzRdLl92YWx1ZSAmJiB0aGlzLl9jZWxsQXJyWzJdLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyWzZdLl92YWx1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbFdpbm5lcigpO1xyXG4gICAgICAgIC8vZHJhd1xyXG4gICAgICAgIGlmICh0aGlzLl9hbGxNb3ZlcyA9PSB0aGlzLl9jZWxsQXJyLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5jYWxsRHJhdygpO1xyXG4gICAgfTtcclxuICAgIGJvYXJkLnByb3RvdHlwZS5jYWxsV2lubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcclxuICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIlBsYXllcjogXCIgKyB0aGlzLl9jdXJyZW50TW92ZSArIFwiIGhhcyB3b25cIjtcclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUuY2FsbERyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcicpO1xyXG4gICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiRFJBV1wiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBib2FyZDtcclxufSgpKTtcclxuZXhwb3J0cy5ib2FyZCA9IGJvYXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNlbGwgPSB2b2lkIDA7XHJcbnZhciBjZWxsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gY2VsbChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLl9odG1sRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjZWxsLnByb3RvdHlwZS5jaGFuZ2VWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5faHRtbEVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBjZWxsO1xyXG59KCkpO1xyXG5leHBvcnRzLmNlbGwgPSBjZWxsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkJhdHRsZVNoaXBzID0gdm9pZCAwO1xyXG52YXIgZGVjb3JhdG9yc18xID0gcmVxdWlyZShcIi4uL2RlY29yYXRvcnNcIik7XHJcbnZhciBCYXR0bGVTaGlwcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhdHRsZVNoaXBzKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU3RhdGtpXCI7XHJcbiAgICB9XHJcbiAgICBCYXR0bGVTaGlwcy5wcm90b3R5cGUuZ2V0R2FtZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIZWxsbyBCYXR0bGVTaGlwc1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXY7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGRlY29yYXRvcnNfMS53YXRjaFxyXG4gICAgXSwgQmF0dGxlU2hpcHMucHJvdG90eXBlLCBcImdldEdhbWVFbGVtZW50XCIsIG51bGwpO1xyXG4gICAgQmF0dGxlU2hpcHMgPSBfX2RlY29yYXRlKFtcclxuICAgICAgICBkZWNvcmF0b3JzXzEuZGlzYWJsZWRcclxuICAgIF0sIEJhdHRsZVNoaXBzKTtcclxuICAgIHJldHVybiBCYXR0bGVTaGlwcztcclxufSgpKTtcclxuZXhwb3J0cy5CYXR0bGVTaGlwcyA9IEJhdHRsZVNoaXBzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLndhdGNoID0gZXhwb3J0cy5lbmFibGVkID0gZXhwb3J0cy5kaXNhYmxlZCA9IHZvaWQgMDtcclxuZnVuY3Rpb24gZGlzYWJsZWQoY29uc3RydWN0b3JGbikge1xyXG4gICAgY29uc3RydWN0b3JGbi5wcm90b3R5cGUuaXNEaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuZXhwb3J0cy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG5mdW5jdGlvbiBlbmFibGVkKGNvbnN0cnVjdG9yRm4pIHtcclxuICAgIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxufVxyXG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xyXG5mdW5jdGlvbiB3YXRjaCh0YXJnZXQsIHByb3BLZXksIGRlc2NyaXB0b3IpIHtcclxuICAgIHZhciBvcmlnaW5hbEZuID0gdGFyZ2V0W3Byb3BLZXldO1xyXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChwYXJhbSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5jb25zdHJ1Y3Rvci5uYW1lICsgXCIgaXMgcnVubmluZyFcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRm4uY2FsbCh0aGlzLCBwYXJhbSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMud2F0Y2ggPSB3YXRjaDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5HYW1lcyA9IHZvaWQgMDtcclxudmFyIEdhbWVzO1xyXG4oZnVuY3Rpb24gKEdhbWVzKSB7XHJcbiAgICBHYW1lc1tHYW1lc1tcIlRpY1RhY1RvZVwiXSA9IDFdID0gXCJUaWNUYWNUb2VcIjtcclxuICAgIEdhbWVzW0dhbWVzW1wiQmF0dGxlU2hpcHNcIl0gPSAyXSA9IFwiQmF0dGxlU2hpcHNcIjtcclxufSkoR2FtZXMgPSBleHBvcnRzLkdhbWVzIHx8IChleHBvcnRzLkdhbWVzID0ge30pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nYW1lRmFjdG9yeSA9IHZvaWQgMDtcclxudmFyIGdhbWVfZW51bV8xID0gcmVxdWlyZShcIi4vZ2FtZS5lbnVtXCIpO1xyXG52YXIgdGljdGFjdG9lXzEgPSByZXF1aXJlKFwiLi90aWN0YWN0b2UvdGljdGFjdG9lXCIpO1xyXG52YXIgYmF0dGxlc2hpcHNfMSA9IHJlcXVpcmUoXCIuL2JhdHRsZXNoaXBzL2JhdHRsZXNoaXBzXCIpO1xyXG52YXIgZ2FtZUZhY3RvcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBnYW1lRmFjdG9yeSgpIHtcclxuICAgIH1cclxuICAgIGdhbWVGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVHYW1lID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGdhbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBnYW1lX2VudW1fMS5HYW1lcy5UaWNUYWNUb2U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRpY3RhY3RvZV8xLlRpY1RhY1RvZSgpO1xyXG4gICAgICAgICAgICBjYXNlIGdhbWVfZW51bV8xLkdhbWVzLkJhdHRsZVNoaXBzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBiYXR0bGVzaGlwc18xLkJhdHRsZVNoaXBzKCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2R1cGEnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZ2FtZUZhY3Rvcnk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZ2FtZUZhY3RvcnkgPSBnYW1lRmFjdG9yeTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSB2b2lkIDA7XHJcbnZhciBib2FyZF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL2xhYjJiLXRpY2t0b2Uvc3JjL0NsYXNzZXMvYm9hcmRcIik7XHJcbnZhciBkZWNvcmF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZGVjb3JhdG9yc1wiKTtcclxudmFyIFRpY1RhY1RvZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRpY1RhY1RvZSgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkvDs8WCa28gaSBrcnp5xbx5a1wiO1xyXG4gICAgfVxyXG4gICAgVGljVGFjVG9lLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHZhciBkaXZXaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2V2lubmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2V2lubmVyKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbiAgICAgICAgICAgIHZhciBnYW1lID0gbmV3IGJvYXJkXzEuYm9hcmQoMywgZGl2KTtcclxuICAgICAgICAgICAgZ2FtZS5pbml0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXY7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGRlY29yYXRvcnNfMS53YXRjaFxyXG4gICAgXSwgVGljVGFjVG9lLnByb3RvdHlwZSwgXCJnZXRHYW1lRWxlbWVudFwiLCBudWxsKTtcclxuICAgIFRpY1RhY1RvZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgICAgIGRlY29yYXRvcnNfMS5lbmFibGVkXHJcbiAgICBdLCBUaWNUYWNUb2UpO1xyXG4gICAgcmV0dXJuIFRpY1RhY1RvZTtcclxufSgpKTtcclxuZXhwb3J0cy5UaWNUYWNUb2UgPSBUaWNUYWNUb2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZ2FtZV9lbnVtXzEgPSByZXF1aXJlKFwiLi9nYW1lLmVudW1cIik7XHJcbnZhciBnYW1lRmFjdG9yeV9jbGFzc18xID0gcmVxdWlyZShcIi4vZ2FtZUZhY3RvcnkuY2xhc3NcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuc2Nzc1wiKTtcclxudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lRmFjdG9yeSA9IG5ldyBnYW1lRmFjdG9yeV9jbGFzc18xLmdhbWVGYWN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0TWVudSgpO1xyXG4gICAgfVxyXG4gICAgQXBwLnByb3RvdHlwZS5jaGFuZ2VHYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgZ2FtZSA9IHRoaXMuX2dhbWVGYWN0b3J5LmNyZWF0ZUdhbWUoZ2FtZV9lbnVtXzEuR2FtZXNbbmFtZV0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy9jbGVhclxyXG4gICAgICAgICAgICB0aGlzLmdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZS5nZXRHYW1lRWxlbWVudCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBcHAucHJvdG90eXBlLmluaXRNZW51ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG1lbnVDb250YWluZXIgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpOyAvLyBrb250ZW5lciBtZW51IGRvc3TEmXBueWNoIGdpZXJcclxuICAgICAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpOyAvLyBrb250ZW5lciBnxYLDs3dueSBla3JhbnUgeiBncsSFXHJcbiAgICAgICAgdGhpcy5nYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVDb250YWluZXInKTtcclxuICAgICAgICB2YXIgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7IC8vIGxpc3RhIHBvenljamkgdyBtZW51IGRvc3TEmXBueWNoIGdpZXJcclxuICAgICAgICAvLyBUT0RPOiBaYWltcGxlbWVudHVqIHd6b3J6ZWMgZmFicnlraS9tZXRvZHkgZmFicnlrdWrEhWNlaiwgdGFrIGFieSBuYSBwb2RzdGF3aWUga29ua3JldG5laiB3YXJ0b8WbY2kgeiBlbnVtXHJcbiAgICAgICAgLy8gendyw7NjacSHIG9iaWVrdCBncnkuIFogdGVnbyBvYmlla3R1IG1vxbxuYSBuYXN0xJlwbmllIHBvYnJhxIcgbmF6d8SZIGdyeSBpIGRvZGHEhyBkbyBtZW51IG9yYXogbWV0b2TEmSB6d3JhY2FqxIVjxIVcclxuICAgICAgICAvLyBzYW3EhSBncsSZIGkgcG8ga2xpa25pxJljaXUgdyB3eWJyYW55IGVsZW1lbnQgbGlzdHkgd3l3b8WCeXdhxIcgasSFLCBhYnkgZG9rbGVqYcSHIHphd2FydG/Fm8SHIGRvIGdhbWVDb250YWluZXIuXHJcbiAgICAgICAgLy8gQWJ5IHd5xZt3aWV0bGnEhyBtZW51IG5hbGXFvHkgbmFwaXNhxIcgcMSZdGzEmSwga3TDs3RhIHByemVpdGVydWplIHBvIHdzenlzdGtpY2ggd2FydG/FpWNpYWNoIGVudW0nYVxyXG4gICAgICAgIGZvciAodmFyIGVsZW1lbnQgaW4gZ2FtZV9lbnVtXzEuR2FtZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihlbGVtZW50KSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBnYW1lTmFtZSA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpKTtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZS5pbm5lclRleHQgPSBcIlwiICsgZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdHYW1lTmFtZSA9IGUudGFyZ2V0LmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlR2FtZShuZXdHYW1lTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChnYW1lTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nYW1lQ29udGFpbmVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBwO1xyXG59KCkpO1xyXG5uZXcgQXBwKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=