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
___CSS_LOADER_EXPORT___.push([module.id, ".menuContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #7ad3da;\n  height: 100vh;\n  width: 150px;\n}\n.menuContainer ul {\n  padding: 0px;\n}\n.menuContainer ul li {\n  list-style: none;\n  cursor: pointer;\n  margin-top: 2px;\n  padding: 10px;\n  background-color: #16de8b;\n  transition: 0.2s;\n  border-radius: 2px;\n}\n.menuContainer ul li:hover {\n  background-color: aliceblue;\n}\n\n.board {\n  position: relative;\n  width: 600px;\n  height: 600px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.field {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 180px;\n  height: 180px;\n  margin: 10px;\n  background-color: rgba(211, 255, 198, 0.966);\n  font-size: 144px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.field:hover {\n  background-color: rgba(161, 248, 134, 0.966);\n}\n\n.winner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  display: none;\n  position: absolute;\n  width: 300px;\n  height: 150px;\n  background: linear-gradient(0deg, #1296aa 0%, #00ffbe 100%);\n  font-size: 24px;\n  right: calc(50% - 150px);\n  top: calc(50% - 75px);\n}\n\n.gameContainer {\n  background: #1296aa;\n  background: linear-gradient(0deg, #1296aa 0%, #00ffbe 100%);\n  flex-grow: 1;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\nbody {\n  margin: 0px;\n  padding: 0px;\n  display: flex;\n  min-height: 100vh;\n  font-family: sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/styles/_menuContainer.scss","webpack://./src/styles/_mixins.scss","webpack://./src/styles/_veriables.scss","webpack://./src/styles/styles.scss","webpack://./src/styles/_ticktactoe.scss","webpack://./src/styles/_gameContainer.scss"],"names":[],"mappings":"AAGA;ECFI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EDK/B,yBEJY;EFKZ,aAAA;EACA,YAAA;AGCJ;AHAI;EACI,YAAA;AGER;AHDQ;EACI,gBAAA;EACA,eAAA;EACA,eAAA;EACA,aAAA;EACA,yBEbG;EFcH,gBAAA;EACA,kBAAA;AGGZ;AHFY;EACI,2BAAA;AGIhB;;ACpBA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;ADuBJ;;ACpBA;EHVI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EGa/B,YAAA;EACA,aAAA;EACA,YAAA;EACA,4CFTU;EEUV,gBAAA;EACA,eAAA;EACA,gBAAA;AD0BJ;ACzBI;EACI,4CFbY;ACwCpB;;ACvBA;EHxBI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;EG2B/B,aAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,2DF5BU;EE6BV,eAAA;EACA,wBAAA;EACA,qBAAA;AD6BJ;;AEzDA;EACI,mBAAA;EACA,2DHLU;EGMV,YAAA;EACA,iBAAA;EJTA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAJ+B;AE0EnC;;AAtEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;AAyEF","sourcesContent":["\r\n@import '_mixins.scss';\r\n\r\n.menuContainer{\r\n    @include flex-center();\r\n    background-color: $bg-left-color;\r\n    height:100vh;\r\n    width:150px;\r\n    ul{\r\n        padding:0px;\r\n        li{\r\n            list-style: none;\r\n            cursor: pointer;\r\n            margin-top:2px;\r\n            padding:10px;\r\n            background-color: $button-color;\r\n            transition: .2s;\r\n            border-radius:2px;\r\n            &:hover{\r\n                background-color: aliceblue;\r\n            }\r\n        }  \r\n    }\r\n\r\n}","@mixin flex-center($flex-direction:column){\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: $flex-direction;\r\n}","\r\n$bg-left-color: rgb(122, 211, 218);\r\n$button-color: rgb(22, 222, 139);\r\n$bg-gradient: linear-gradient(0deg, rgba(18,150,170,1) 0%, rgba(0,255,190,1) 100%);\r\n\r\n// TicTacToe\r\n\r\n$field-color: rgba(211, 255, 198, 0.966);\r\n$field-hover-color: rgba(161, 248, 134, 0.966);","@import '_veriables.scss';\r\n@import '_menuContainer.scss';\r\n@import '_gameContainer.scss';\r\n\r\nbody {\r\n  margin:0px;\r\n  padding:0px;\r\n  display:flex;\r\n  min-height: 100vh;\r\n  font-family: sans-serif;\r\n}","@import '_mixins.scss';\r\n@import '_veriables.scss';\r\n\r\n.board{\r\n    position: relative;\r\n    width:600px;\r\n    height:600px;\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n}\r\n\r\n.field{\r\n    @include flex-center();\r\n    width:180px;\r\n    height:180px;\r\n    margin:10px;\r\n    background-color: $field-color;\r\n    font-size:144px;\r\n    cursor: pointer;\r\n    transition:.2s;\r\n    &:hover{\r\n        background-color: $field-hover-color;\r\n    }\r\n}\r\n\r\n.winner{\r\n    @include flex-center();\r\n    display:none;\r\n    position: absolute;\r\n    width:300px;\r\n    height:150px;\r\n    background: $bg-gradient;\r\n    font-size:24px;\r\n    right:calc(50% - 150px);\r\n    top:calc(50% - 75px);\r\n}","\r\n@import '_mixins.scss';\r\n@import '_veriables.scss';\r\n\r\n@import '_ticktactoe.scss';\r\n\r\n.gameContainer{\r\n    background: rgb(18,150,170);\r\n    background: $bg-gradient;\r\n    flex-grow:1;\r\n    min-height: 100vh;\r\n    @include flex-center();\r\n}"],"sourceRoot":""}]);
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
/******/ 			id: moduleId,
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

exports.__esModule = true;
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
        this.gameContainer.innerHTML = ''; //clear
        this.gameContainer.appendChild(game.getGameElement());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZXMuc2Nzcz8yMDNiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbGFiMmItdGlja3RvZS9zcmMvQ2xhc3Nlcy9ib2FyZC50cyIsIndlYnBhY2s6Ly8vLi4vbGFiMmItdGlja3RvZS9zcmMvQ2xhc3Nlcy9jZWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXR0bGVzaGlwcy9iYXR0bGVzaGlwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5lbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lRmFjdG9yeS5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGljdGFjdG9lL3RpY3RhY3RvZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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LHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7OztBQ05hO0FBQ2Isa0JBQWtCO0FBQ2xCLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZDLDBCQUEwQixtQkFBTyxDQUFDLHVEQUFxQjtBQUN2RCxtQkFBTyxDQUFDLHNEQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tZW51Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdhZDNkYTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTUwcHg7XFxufVxcbi5tZW51Q29udGFpbmVyIHVsIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuLm1lbnVDb250YWluZXIgdWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTZkZThiO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLm1lbnVDb250YWluZXIgdWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjU1LCAxOTgsIDAuOTY2KTtcXG4gIGZvbnQtc2l6ZTogMTQ0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG4uZmllbGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDI0OCwgMTM0LCAwLjk2Nik7XFxufVxcblxcbi53aW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMTI5NmFhIDAlLCAjMDBmZmJlIDEwMCUpO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTUwcHgpO1xcbiAgdG9wOiBjYWxjKDUwJSAtIDc1cHgpO1xcbn1cXG5cXG4uZ2FtZUNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiAjMTI5NmFhO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMxMjk2YWEgMCUsICMwMGZmYmUgMTAwJSk7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX21lbnVDb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3ZlcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL190aWNrdGFjdG9lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2dhbWVDb250YWluZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQ0ZJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBSitCO0VESy9CLHlCRUpZO0VGS1osYUFBQTtFQUNBLFlBQUE7QUdDSjtBSEFJO0VBQ0ksWUFBQTtBR0VSO0FIRFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRWJHO0VGY0gsZ0JBQUE7RUFDQSxrQkFBQTtBR0daO0FIRlk7RUFDSSwyQkFBQTtBR0loQjs7QUNwQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUR1Qko7O0FDcEJBO0VIVkksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFKK0I7RUdhL0IsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNENGVFU7RUVVVixnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDBCSjtBQ3pCSTtFQUNJLDRDRmJZO0FDd0NwQjs7QUN2QkE7RUh4QkksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFKK0I7RUcyQi9CLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkRGNUJVO0VFNkJWLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FENkJKOztBRXpEQTtFQUNJLG1CQUFBO0VBQ0EsMkRITFU7RUdNVixZQUFBO0VBQ0EsaUJBQUE7RUpUQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUorQjtBRTBFbkM7O0FBdEVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQXlFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG5AaW1wb3J0ICdfbWl4aW5zLnNjc3MnO1xcclxcblxcclxcbi5tZW51Q29udGFpbmVye1xcclxcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctbGVmdC1jb2xvcjtcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcbiAgICB3aWR0aDoxNTBweDtcXHJcXG4gICAgdWx7XFxyXFxuICAgICAgICBwYWRkaW5nOjBweDtcXHJcXG4gICAgICAgIGxpe1xcclxcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MnB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWNvbG9yO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjJweDtcXHJcXG4gICAgICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XCIsXCJAbWl4aW4gZmxleC1jZW50ZXIoJGZsZXgtZGlyZWN0aW9uOmNvbHVtbil7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleC1kaXJlY3Rpb247XFxyXFxufVwiLFwiXFxyXFxuJGJnLWxlZnQtY29sb3I6IHJnYigxMjIsIDIxMSwgMjE4KTtcXHJcXG4kYnV0dG9uLWNvbG9yOiByZ2IoMjIsIDIyMiwgMTM5KTtcXHJcXG4kYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE4LDE1MCwxNzAsMSkgMCUsIHJnYmEoMCwyNTUsMTkwLDEpIDEwMCUpO1xcclxcblxcclxcbi8vIFRpY1RhY1RvZVxcclxcblxcclxcbiRmaWVsZC1jb2xvcjogcmdiYSgyMTEsIDI1NSwgMTk4LCAwLjk2Nik7XFxyXFxuJGZpZWxkLWhvdmVyLWNvbG9yOiByZ2JhKDE2MSwgMjQ4LCAxMzQsIDAuOTY2KTtcIixcIkBpbXBvcnQgJ192ZXJpYWJsZXMuc2Nzcyc7XFxyXFxuQGltcG9ydCAnX21lbnVDb250YWluZXIuc2Nzcyc7XFxyXFxuQGltcG9ydCAnX2dhbWVDb250YWluZXIuc2Nzcyc7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46MHB4O1xcclxcbiAgcGFkZGluZzowcHg7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cIixcIkBpbXBvcnQgJ19taXhpbnMuc2Nzcyc7XFxyXFxuQGltcG9ydCAnX3ZlcmlhYmxlcy5zY3NzJztcXHJcXG5cXHJcXG4uYm9hcmR7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6NjAwcHg7XFxyXFxuICAgIGhlaWdodDo2MDBweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6d3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxke1xcclxcbiAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcigpO1xcclxcbiAgICB3aWR0aDoxODBweDtcXHJcXG4gICAgaGVpZ2h0OjE4MHB4O1xcclxcbiAgICBtYXJnaW46MTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZpZWxkLWNvbG9yO1xcclxcbiAgICBmb250LXNpemU6MTQ0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjouMnM7XFxyXFxuICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmllbGQtaG92ZXItY29sb3I7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLndpbm5lcntcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXIoKTtcXHJcXG4gICAgZGlzcGxheTpub25lO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOjMwMHB4O1xcclxcbiAgICBoZWlnaHQ6MTUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRiZy1ncmFkaWVudDtcXHJcXG4gICAgZm9udC1zaXplOjI0cHg7XFxyXFxuICAgIHJpZ2h0OmNhbGMoNTAlIC0gMTUwcHgpO1xcclxcbiAgICB0b3A6Y2FsYyg1MCUgLSA3NXB4KTtcXHJcXG59XCIsXCJcXHJcXG5AaW1wb3J0ICdfbWl4aW5zLnNjc3MnO1xcclxcbkBpbXBvcnQgJ192ZXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuQGltcG9ydCAnX3RpY2t0YWN0b2Uuc2Nzcyc7XFxyXFxuXFxyXFxuLmdhbWVDb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigxOCwxNTAsMTcwKTtcXHJcXG4gICAgYmFja2dyb3VuZDogJGJnLWdyYWRpZW50O1xcclxcbiAgICBmbGV4LWdyb3c6MTtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyKCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuYm9hcmQgPSB2b2lkIDA7XHJcbnZhciBjZWxsXzEgPSByZXF1aXJlKFwiLi9jZWxsXCIpO1xyXG52YXIgYm9hcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBib2FyZChzaXplLCBib2FyZCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1vdmUgPSAnTyc7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXR1cyA9IHRydWU7IC8vIDAgPSBmaW5pc2hlZFxyXG4gICAgICAgIHRoaXMuX2FsbE1vdmVzID0gMDtcclxuICAgICAgICB0aGlzLl9iYXNlID0gc2l6ZTtcclxuICAgICAgICB2YXIgYWxsQ2VsbHMgPSBNYXRoLnBvdyhzaXplLCAyKTtcclxuICAgICAgICB0aGlzLl9ib2FyZCA9IGJvYXJkO1xyXG4gICAgICAgIHRoaXMuX2NlbGxBcnIgPSBuZXcgQXJyYXkoYWxsQ2VsbHMpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsQ2VsbHM7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpZWxkJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBcIlwiICsgaTtcclxuICAgICAgICAgICAgdmFyIG5ld0NlbGwgPSBuZXcgY2VsbF8xLmNlbGwoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIG5ld0NlbGwuX2h0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gX3RoaXMubW92ZShlLnRhcmdldCk7IH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9jZWxsQXJyW2ldID0gbmV3Q2VsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBib2FyZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fY2VsbEFycjsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIHRoaXMuX2JvYXJkLmFwcGVuZENoaWxkKGVsZW1lbnQuX2h0bWxFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYm9hcmQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICB2YXIgY3VycmVudENlbGwgPSB0aGlzLl9jZWxsQXJyLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLl9odG1sRWxlbWVudCA9PSBldjsgfSk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRDZWxsWzBdLl92YWx1ZSA9PSAnJyAmJiB0aGlzLl9nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDZWxsWzBdLmNoYW5nZVZhbHVlKHRoaXMuX2N1cnJlbnRNb3ZlKTtcclxuICAgICAgICAgICAgdGhpcy5fYWxsTW92ZXMrKztcclxuICAgICAgICAgICAgdGhpcy5jaGVja1dpbihwYXJzZUludChjdXJyZW50Q2VsbFswXS5faHRtbEVsZW1lbnQuaWQpKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYm9hcmQucHJvdG90eXBlLmNoYW5nZVBsYXllciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudE1vdmUgPT09ICdPJylcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudE1vdmUgPSAnWCc7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50TW92ZSA9ICdPJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudFBsYXllcicpLmlubmVySFRNTCA9IHRoaXMuX2N1cnJlbnRNb3ZlO1xyXG4gICAgfTtcclxuICAgIGJvYXJkLnByb3RvdHlwZS5jaGVja1dpbiA9IGZ1bmN0aW9uIChjdXJySWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2Jhc2U7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2VsbEFycltpXS5fdmFsdWUgIT0gJycgfHwgdGhpcy5fY2VsbEFycltpICsgdGhpcy5fYmFzZV0uX3ZhbHVlICE9ICcnIHx8IHRoaXMuX2NlbGxBcnJbaSArIDIgKiB0aGlzLl9iYXNlXS5fdmFsdWUgIT0gJycpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2VsbEFycltpXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycltpICsgdGhpcy5fYmFzZV0uX3ZhbHVlICYmIHRoaXMuX2NlbGxBcnJbaV0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbaSArIDIgKiB0aGlzLl9iYXNlXS5fdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsV2lubmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fYmFzZSAqIHRoaXMuX2Jhc2U7IGkgKz0gdGhpcy5fYmFzZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2VsbEFycltpXS5fdmFsdWUgIT0gJycgfHwgdGhpcy5fY2VsbEFycltpICsgMV0uX3ZhbHVlICE9ICcnIHx8IHRoaXMuX2NlbGxBcnJbaSArIDJdLl92YWx1ZSAhPSAnJylcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jZWxsQXJyW2ldLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyW2kgKyAxXS5fdmFsdWUgJiYgdGhpcy5fY2VsbEFycltpXS5fdmFsdWUgPT0gdGhpcy5fY2VsbEFycltpICsgMl0uX3ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbFdpbm5lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY2VsbEFyclswXS5fdmFsdWUgIT0gJycgJiYgdGhpcy5fY2VsbEFycls0XS5fdmFsdWUgIT0gJycgJiYgdGhpcy5fY2VsbEFycls4XS5fdmFsdWUgIT0gJycpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jZWxsQXJyWzBdLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyWzRdLl92YWx1ZSAmJiB0aGlzLl9jZWxsQXJyWzBdLl92YWx1ZSA9PSB0aGlzLl9jZWxsQXJyWzhdLl92YWx1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbFdpbm5lcigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jZWxsQXJyWzJdLl92YWx1ZSAhPSAnJyAmJiB0aGlzLl9jZWxsQXJyWzRdLl92YWx1ZSAhPSAnJyAmJiB0aGlzLl9jZWxsQXJyWzZdLl92YWx1ZSAhPSAnJylcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NlbGxBcnJbMl0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbNF0uX3ZhbHVlICYmIHRoaXMuX2NlbGxBcnJbMl0uX3ZhbHVlID09IHRoaXMuX2NlbGxBcnJbNl0uX3ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsV2lubmVyKCk7XHJcbiAgICAgICAgLy9kcmF3XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fYWxsTW92ZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hbGxNb3ZlcyA9PSB0aGlzLl9jZWxsQXJyLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5jYWxsRHJhdygpO1xyXG4gICAgfTtcclxuICAgIGJvYXJkLnByb3RvdHlwZS5jYWxsV2lubmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKTtcclxuICAgICAgICBpbmZvLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBcIlBsYXllcjogXCIgKyB0aGlzLl9jdXJyZW50TW92ZSArIFwiIGhhcyB3b25cIjtcclxuICAgIH07XHJcbiAgICBib2FyZC5wcm90b3R5cGUuY2FsbERyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcicpO1xyXG4gICAgICAgIGluZm8uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBpbmZvLmlubmVySFRNTCA9IFwiRFJBV1wiO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBib2FyZDtcclxufSgpKTtcclxuZXhwb3J0cy5ib2FyZCA9IGJvYXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5jZWxsID0gdm9pZCAwO1xyXG52YXIgY2VsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGNlbGwoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5faHRtbEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY2VsbC5wcm90b3R5cGUuY2hhbmdlVmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fdmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2h0bWxFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX3ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gY2VsbDtcclxufSgpKTtcclxuZXhwb3J0cy5jZWxsID0gY2VsbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuQmF0dGxlU2hpcHMgPSB2b2lkIDA7XHJcbnZhciBCYXR0bGVTaGlwcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhdHRsZVNoaXBzKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU3RhdGtpXCI7XHJcbiAgICB9XHJcbiAgICBCYXR0bGVTaGlwcy5wcm90b3R5cGUuZ2V0R2FtZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhlbGxvIEJhdHRsZVNoaXBzXCIpKTtcclxuICAgICAgICByZXR1cm4gZGl2O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCYXR0bGVTaGlwcztcclxufSgpKTtcclxuZXhwb3J0cy5CYXR0bGVTaGlwcyA9IEJhdHRsZVNoaXBzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuZXhwb3J0cy5HYW1lcyA9IHZvaWQgMDtcclxudmFyIEdhbWVzO1xyXG4oZnVuY3Rpb24gKEdhbWVzKSB7XHJcbiAgICBHYW1lc1tHYW1lc1tcIlRpY1RhY1RvZVwiXSA9IDFdID0gXCJUaWNUYWNUb2VcIjtcclxuICAgIEdhbWVzW0dhbWVzW1wiQmF0dGxlU2hpcHNcIl0gPSAyXSA9IFwiQmF0dGxlU2hpcHNcIjtcclxufSkoR2FtZXMgPSBleHBvcnRzLkdhbWVzIHx8IChleHBvcnRzLkdhbWVzID0ge30pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbmV4cG9ydHMuZ2FtZUZhY3RvcnkgPSB2b2lkIDA7XHJcbnZhciBnYW1lX2VudW1fMSA9IHJlcXVpcmUoXCIuL2dhbWUuZW51bVwiKTtcclxudmFyIHRpY3RhY3RvZV8xID0gcmVxdWlyZShcIi4vdGljdGFjdG9lL3RpY3RhY3RvZVwiKTtcclxudmFyIGJhdHRsZXNoaXBzXzEgPSByZXF1aXJlKFwiLi9iYXR0bGVzaGlwcy9iYXR0bGVzaGlwc1wiKTtcclxudmFyIGdhbWVGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZ2FtZUZhY3RvcnkoKSB7XHJcbiAgICB9XHJcbiAgICBnYW1lRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlR2FtZSA9IGZ1bmN0aW9uIChnYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChnYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZV9lbnVtXzEuR2FtZXMuVGljVGFjVG9lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0aWN0YWN0b2VfMS5UaWNUYWNUb2UoKTtcclxuICAgICAgICAgICAgY2FzZSBnYW1lX2VudW1fMS5HYW1lcy5CYXR0bGVTaGlwczpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgYmF0dGxlc2hpcHNfMS5CYXR0bGVTaGlwcygpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdkdXBhJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGdhbWVGYWN0b3J5O1xyXG59KCkpO1xyXG5leHBvcnRzLmdhbWVGYWN0b3J5ID0gZ2FtZUZhY3Rvcnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLlRpY1RhY1RvZSA9IHZvaWQgMDtcclxudmFyIGJvYXJkXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vbGFiMmItdGlja3RvZS9zcmMvQ2xhc3Nlcy9ib2FyZFwiKTtcclxudmFyIFRpY1RhY1RvZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRpY1RhY1RvZSgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkvDs8WCa28gaSBrcnp5xbx5a1wiO1xyXG4gICAgfVxyXG4gICAgVGljVGFjVG9lLnByb3RvdHlwZS5nZXRHYW1lRWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmFyIGRpdldpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdldpbm5lci5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2V2lubmVyKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICAgICAgICB2YXIgZ2FtZSA9IG5ldyBib2FyZF8xLmJvYXJkKDMsIGRpdik7XHJcbiAgICAgICAgZ2FtZS5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGljVGFjVG9lO1xyXG59KCkpO1xyXG5leHBvcnRzLlRpY1RhY1RvZSA9IFRpY1RhY1RvZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgZ2FtZV9lbnVtXzEgPSByZXF1aXJlKFwiLi9nYW1lLmVudW1cIik7XHJcbnZhciBnYW1lRmFjdG9yeV9jbGFzc18xID0gcmVxdWlyZShcIi4vZ2FtZUZhY3RvcnkuY2xhc3NcIik7XHJcbnJlcXVpcmUoXCIuL3N0eWxlcy9zdHlsZXMuc2Nzc1wiKTtcclxudmFyIEFwcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFwcCgpIHtcclxuICAgICAgICB0aGlzLl9nYW1lRmFjdG9yeSA9IG5ldyBnYW1lRmFjdG9yeV9jbGFzc18xLmdhbWVGYWN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5pbml0TWVudSgpO1xyXG4gICAgfVxyXG4gICAgQXBwLnByb3RvdHlwZS5jaGFuZ2VHYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB2YXIgZ2FtZSA9IHRoaXMuX2dhbWVGYWN0b3J5LmNyZWF0ZUdhbWUoZ2FtZV9lbnVtXzEuR2FtZXNbbmFtZV0pO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy9jbGVhclxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lLmdldEdhbWVFbGVtZW50KCkpO1xyXG4gICAgfTtcclxuICAgIEFwcC5wcm90b3R5cGUuaW5pdE1lbnUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgbWVudUNvbnRhaW5lciA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7IC8vIGtvbnRlbmVyIG1lbnUgZG9zdMSZcG55Y2ggZ2llclxyXG4gICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRhaW5lciA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7IC8vIGtvbnRlbmVyIGfFgsOzd255IGVrcmFudSB6IGdyxIVcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZUNvbnRhaW5lcicpO1xyXG4gICAgICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTsgLy8gbGlzdGEgcG96eWNqaSB3IG1lbnUgZG9zdMSZcG55Y2ggZ2llclxyXG4gICAgICAgIC8vIFRPRE86IFphaW1wbGVtZW50dWogd3pvcnplYyBmYWJyeWtpL21ldG9keSBmYWJyeWt1asSFY2VqLCB0YWsgYWJ5IG5hIHBvZHN0YXdpZSBrb25rcmV0bmVqIHdhcnRvxZtjaSB6IGVudW1cclxuICAgICAgICAvLyB6d3LDs2NpxIcgb2JpZWt0IGdyeS4gWiB0ZWdvIG9iaWVrdHUgbW/FvG5hIG5hc3TEmXBuaWUgcG9icmHEhyBuYXp3xJkgZ3J5IGkgZG9kYcSHIGRvIG1lbnUgb3JheiBtZXRvZMSZIHp3cmFjYWrEhWPEhVxyXG4gICAgICAgIC8vIHNhbcSFIGdyxJkgaSBwbyBrbGlrbmnEmWNpdSB3IHd5YnJhbnkgZWxlbWVudCBsaXN0eSB3eXdvxYJ5d2HEhyBqxIUsIGFieSBkb2tsZWphxIcgemF3YXJ0b8WbxIcgZG8gZ2FtZUNvbnRhaW5lci5cclxuICAgICAgICAvLyBBYnkgd3nFm3dpZXRsacSHIG1lbnUgbmFsZcW8eSBuYXBpc2HEhyBwxJl0bMSZLCBrdMOzdGEgcHJ6ZWl0ZXJ1amUgcG8gd3N6eXN0a2ljaCB3YXJ0b8WlY2lhY2ggZW51bSdhXHJcbiAgICAgICAgZm9yICh2YXIgZWxlbWVudCBpbiBnYW1lX2VudW1fMS5HYW1lcykge1xyXG4gICAgICAgICAgICBpZiAoaXNOYU4oTnVtYmVyKGVsZW1lbnQpKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGdhbWVOYW1lID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUuaW5uZXJUZXh0ID0gXCJcIiArIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0dhbWVOYW1lID0gZS50YXJnZXQuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoYW5nZUdhbWUobmV3R2FtZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGdhbWVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdhbWVDb250YWluZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBcHA7XHJcbn0oKSk7XHJcbm5ldyBBcHAoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==