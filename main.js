/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=El+Messiri&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Material+Icons&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\nbody {\n  font-family: 'El Messiri', sans-serif;\n  background-color: #f1f2f5;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  font-size: 1.4rem;\n  color: #361d32;\n}\n\nheader,\n.main {\n  margin: 0 auto;\n  width: 35%;\n}\n\n.main {\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  flex-direction: column;\n}\n\n.header-div {\n  align-content: center;\n  justify-content: space-between;\n}\n\n.refresh-div {\n  position: relative;\n}\n\n.pending-count {\n  position: absolute;\n  color: #fff;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: red;\n  z-index: 1;\n  top: -6px;\n  right: -6px;\n  font-size: 0.8rem;\n  padding: 2px;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.task-list {\n  flex-direction: column;\n}\n\n.checkbox,\n.delete-button {\n  flex: 0 1 0;\n}\n\n.editable {\n  flex: 2 1 0;\n  font-size: 1rem;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-none {\n  display: none;\n}\n\n.task-list,\n.delete-button,\n.drag-button,\ninput[type=text],\ninput[type=button] {\n  background-color: inherit;\n  border: none;\n}\n\ninput[type=text] {\n  outline: none;\n  flex: 1 1 0;\n  font-style: italic;\n  font-size: 1rem;\n}\n\ninput[type=button] {\n  flex: 0 1 0;\n}\n\n.refresh-div,\ninput[type=button],\n.drag-button,\n.clear-button {\n  opacity: 0.5;\n}\n\n.drag-button {\n  padding: 0;\n  font-size: 1.1rem;\n}\n\n.clear-button {\n  border: none;\n  padding: 15px 0;\n  font-size: 1.05rem;\n}\n\n.task-container {\n  align-items: center;\n}\n\n.refresh-div:hover,\ninput[type=button]:hover,\n.drag-button:hover,\n.clear-button:hover {\n  opacity: 1;\n}\n\n.header-div,\n.task-form,\n.task-container {\n  padding: 10px;\n  border-bottom: 1px solid #e3e3e3;\n}\n\nfooter {\n  position: absolute;\n  border-top: 1px solid #e3e3e3;\n  height: 50px;\n  padding: 10px 0;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nsmall {\n  color: #361d32;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAGA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;EACrC,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;EAEE,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;;;;EAKE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;EAIE,UAAU;AACZ;;AAEA;;;EAGE,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,cAAc;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=El+Messiri&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Icons&display=swap\");\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\nbody {\n  font-family: 'El Messiri', sans-serif;\n  background-color: #f1f2f5;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  font-size: 1.4rem;\n  color: #361d32;\n}\n\nheader,\n.main {\n  margin: 0 auto;\n  width: 35%;\n}\n\n.main {\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  flex-direction: column;\n}\n\n.header-div {\n  align-content: center;\n  justify-content: space-between;\n}\n\n.refresh-div {\n  position: relative;\n}\n\n.pending-count {\n  position: absolute;\n  color: #fff;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: red;\n  z-index: 1;\n  top: -6px;\n  right: -6px;\n  font-size: 0.8rem;\n  padding: 2px;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.task-list {\n  flex-direction: column;\n}\n\n.checkbox,\n.delete-button {\n  flex: 0 1 0;\n}\n\n.editable {\n  flex: 2 1 0;\n  font-size: 1rem;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-none {\n  display: none;\n}\n\n.task-list,\n.delete-button,\n.drag-button,\ninput[type=text],\ninput[type=button] {\n  background-color: inherit;\n  border: none;\n}\n\ninput[type=text] {\n  outline: none;\n  flex: 1 1 0;\n  font-style: italic;\n  font-size: 1rem;\n}\n\ninput[type=button] {\n  flex: 0 1 0;\n}\n\n.refresh-div,\ninput[type=button],\n.drag-button,\n.clear-button {\n  opacity: 0.5;\n}\n\n.drag-button {\n  padding: 0;\n  font-size: 1.1rem;\n}\n\n.clear-button {\n  border: none;\n  padding: 15px 0;\n  font-size: 1.05rem;\n}\n\n.task-container {\n  align-items: center;\n}\n\n.refresh-div:hover,\ninput[type=button]:hover,\n.drag-button:hover,\n.clear-button:hover {\n  opacity: 1;\n}\n\n.header-div,\n.task-form,\n.task-container {\n  padding: 10px;\n  border-bottom: 1px solid #e3e3e3;\n}\n\nfooter {\n  position: absolute;\n  border-top: 1px solid #e3e3e3;\n  height: 50px;\n  padding: 10px 0;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nsmall {\n  color: #361d32;\n}\n"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/assets/js/controllers/taskController.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/controllers/taskController.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/taskView */ "./src/assets/js/views/taskView.js");
/* harmony import */ var _models_taskModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/taskModel */ "./src/assets/js/models/taskModel.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => ({

  taskView: new _views_taskView__WEBPACK_IMPORTED_MODULE_0__.default(),
  taskModel: new _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default(),

  init() {
    this.taskView.showTasks(_models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks);
  },
}));

/***/ }),

/***/ "./src/assets/js/helpers/createElement.js":
/*!************************************************!*\
  !*** ./src/assets/js/helpers/createElement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((tag, attributes = {}, textContent = '') => {
  const element = document.createElement(tag);
  const keys = Object.keys(attributes);
  keys.forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
  element.textContent = textContent;
  return element;
});

/***/ }),

/***/ "./src/assets/js/helpers/getElement.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/getElement.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((selector) => {
  const element = document.querySelector(selector);
  return element;
});

/***/ }),

/***/ "./src/assets/js/models/taskModel.js":
/*!*******************************************!*\
  !*** ./src/assets/js/models/taskModel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskModel)
/* harmony export */ });
class TaskModel {
  static tasks = [
    { id: 1, description: 'Take child to school', complete: false },
    { id: 2, description: 'Learn about webpack', complete: true },
    { id: 3, description: 'Pick child from school', complete: false },
    { id: 4, description: 'Go shopping for groceries', complete: true },
  ]
}


/***/ }),

/***/ "./src/assets/js/views/taskView.js":
/*!*****************************************!*\
  !*** ./src/assets/js/views/taskView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskView)
/* harmony export */ });
/* harmony import */ var _helpers_getElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/getElement */ "./src/assets/js/helpers/getElement.js");
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/createElement */ "./src/assets/js/helpers/createElement.js");



class TaskView {
  constructor() {
    this.main = (0,_helpers_getElement__WEBPACK_IMPORTED_MODULE_0__.default)('.main');

    this.headerDiv = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', { class: 'header-div d-flex' });
    this.heading = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('h2', { }, "Today's To Do");
    this.refreshDiv = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', { class: 'refresh-div' });
    this.refreshIcon = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('span', { class: 'material-icons refresh-icon' }, 'autorenew');
    this.pendingCount = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('span', { class: 'pending-count d-flex' });
    this.refreshDiv.append(this.refreshIcon, this.pendingCount);
    this.headerDiv.append(this.heading, this.refreshDiv);

    this.taskForm = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('form', { class: 'task-form d-flex' });
    this.input = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('input', {
      type: 'text',
      placeholder: 'Add to your list...',
      name: 'task',
    });
    this.submit = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('input', {
      type: 'button',
      tabindex: '-1',
      title: 'click this or press enter to submit',
    });
    this.submit.value = '\u21B2';

    this.taskForm.append(this.input, this.submit);

    this.taskList = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('ul', { class: 'task-list d-flex' });

    this.clearButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', {
      class: 'clear-button',
    }, 'Clear all completed');

    this.main.append(this.headerDiv, this.taskForm, this.taskList, this.clearButton);
  }

  showTasks(tasks) {
    while (this.taskList.firstChild) {
      this.taskList.removeChild(this.taskList.firstChild);
    }

    this.pendingCount.textContent = `${tasks.filter((task) => task.complete === false).length}`;

    if (tasks.length) {
      tasks.forEach((task) => {
        const { id, description, complete } = task;

        const listItem = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('li', { class: 'task-container d-flex' });

        const checkbox = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('input', { type: 'checkbox', 'data-id': `${id}`, class: 'checkbox' });
        checkbox.checked = complete;

        const taskDesc = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('span', {
          contenEditable: true,
          class: 'editable',
          'data-id': `${id}`,
        }, description);

        const deleteButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', {
          class: 'delete material-icons delete-button d-none',
          'data-id': `${id}`,
        }, 'delete');

        const dragButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', {
          class: 'more_vert material-icons drag-button',
          'data-id': `${id}`,
        }, 'more_vert');

        listItem.append(checkbox, taskDesc, deleteButton, dragButton);
        this.taskList.appendChild(listItem);
      });
    }
  }
}


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_js_controllers_taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/controllers/taskController */ "./src/assets/js/controllers/taskController.js");



(0,_assets_js_controllers_taskController__WEBPACK_IMPORTED_MODULE_1__.default)().init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2NvbnRyb2xsZXJzL3Rhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvanMvaGVscGVycy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvanMvaGVscGVycy9nZXRFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvanMvbW9kZWxzL3Rhc2tNb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL3ZpZXdzL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix3SEFBd0g7QUFDeEgsNEhBQTRIO0FBQzVIO0FBQ0EsZ3RCQUFndEIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLDZCQUE2QixHQUFHLFVBQVUsMENBQTBDLDhCQUE4QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsWUFBWSx3QkFBd0IsNEJBQTRCLG9CQUFvQixzQkFBc0IsbUJBQW1CLEdBQUcsb0JBQW9CLG1CQUFtQixlQUFlLEdBQUcsV0FBVywyQkFBMkIsMkNBQTJDLDJCQUEyQixHQUFHLGlCQUFpQiwwQkFBMEIsbUNBQW1DLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDBCQUEwQixlQUFlLGNBQWMsZ0JBQWdCLHNCQUFzQixpQkFBaUIsd0JBQXdCLDRCQUE0QixlQUFlLEdBQUcsZ0JBQWdCLDJCQUEyQixHQUFHLGdDQUFnQyxnQkFBZ0IsR0FBRyxlQUFlLGdCQUFnQixvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcs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QVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FbCtNZXNzaXJpJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiAjMzYxZDMyO1xcbn1cXG5cXG5oZWFkZXIsXFxuLm1haW4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE1JSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyLWRpdiB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZWZyZXNoLWRpdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wZW5kaW5nLWNvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAtNnB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoZWNrYm94LFxcbi5kZWxldGUtYnV0dG9uIHtcXG4gIGZsZXg6IDAgMSAwO1xcbn1cXG5cXG4uZWRpdGFibGUge1xcbiAgZmxleDogMiAxIDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0LFxcbi5kZWxldGUtYnV0dG9uLFxcbi5kcmFnLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4OiAxIDEgMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIGZsZXg6IDAgMSAwO1xcbn1cXG5cXG4ucmVmcmVzaC1kaXYsXFxuaW5wdXRbdHlwZT1idXR0b25dLFxcbi5kcmFnLWJ1dHRvbixcXG4uY2xlYXItYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmRyYWctYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVmcmVzaC1kaXY6aG92ZXIsXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxcbi5kcmFnLWJ1dHRvbjpob3ZlcixcXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5oZWFkZXItZGl2LFxcbi50YXNrLWZvcm0sXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTNlM2UzO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBjb2xvcjogIzM2MWQzMjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7O0VBS0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7Ozs7RUFJRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FbCtNZXNzaXJpJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiAjMzYxZDMyO1xcbn1cXG5cXG5oZWFkZXIsXFxuLm1haW4ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB3aWR0aDogMzUlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE1JSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyLWRpdiB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZWZyZXNoLWRpdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wZW5kaW5nLWNvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAtNnB4O1xcbiAgcmlnaHQ6IC02cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoZWNrYm94LFxcbi5kZWxldGUtYnV0dG9uIHtcXG4gIGZsZXg6IDAgMSAwO1xcbn1cXG5cXG4uZWRpdGFibGUge1xcbiAgZmxleDogMiAxIDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0LFxcbi5kZWxldGUtYnV0dG9uLFxcbi5kcmFnLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4OiAxIDEgMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIGZsZXg6IDAgMSAwO1xcbn1cXG5cXG4ucmVmcmVzaC1kaXYsXFxuaW5wdXRbdHlwZT1idXR0b25dLFxcbi5kcmFnLWJ1dHRvbixcXG4uY2xlYXItYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmRyYWctYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVmcmVzaC1kaXY6aG92ZXIsXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxcbi5kcmFnLWJ1dHRvbjpob3ZlcixcXG4uY2xlYXItYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5oZWFkZXItZGl2LFxcbi50YXNrLWZvcm0sXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTNlM2UzO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBjb2xvcjogIzM2MWQzMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IFRhc2tWaWV3IGZyb20gJy4uL3ZpZXdzL3Rhc2tWaWV3JztcbmltcG9ydCBUYXNrTW9kZWwgZnJvbSAnLi4vbW9kZWxzL3Rhc2tNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XG5cbiAgdGFza1ZpZXc6IG5ldyBUYXNrVmlldygpLFxuICB0YXNrTW9kZWw6IG5ldyBUYXNrTW9kZWwoKSxcblxuICBpbml0KCkge1xuICAgIHRoaXMudGFza1ZpZXcuc2hvd1Rhc2tzKFRhc2tNb2RlbC50YXNrcyk7XG4gIH0sXG59KTsiLCJleHBvcnQgZGVmYXVsdCAodGFnLCBhdHRyaWJ1dGVzID0ge30sIHRleHRDb250ZW50ID0gJycpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59OyIsImV4cG9ydCBkZWZhdWx0IChzZWxlY3RvcikgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBlbGVtZW50O1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTW9kZWwge1xuICBzdGF0aWMgdGFza3MgPSBbXG4gICAgeyBpZDogMSwgZGVzY3JpcHRpb246ICdUYWtlIGNoaWxkIHRvIHNjaG9vbCcsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgIHsgaWQ6IDIsIGRlc2NyaXB0aW9uOiAnTGVhcm4gYWJvdXQgd2VicGFjaycsIGNvbXBsZXRlOiB0cnVlIH0sXG4gICAgeyBpZDogMywgZGVzY3JpcHRpb246ICdQaWNrIGNoaWxkIGZyb20gc2Nob29sJywgY29tcGxldGU6IGZhbHNlIH0sXG4gICAgeyBpZDogNCwgZGVzY3JpcHRpb246ICdHbyBzaG9wcGluZyBmb3IgZ3JvY2VyaWVzJywgY29tcGxldGU6IHRydWUgfSxcbiAgXVxufVxuIiwiaW1wb3J0IGdldEVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9nZXRFbGVtZW50JztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2hlbHBlcnMvY3JlYXRlRWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYWluID0gZ2V0RWxlbWVudCgnLm1haW4nKTtcblxuICAgIHRoaXMuaGVhZGVyRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2hlYWRlci1kaXYgZC1mbGV4JyB9KTtcbiAgICB0aGlzLmhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoMicsIHsgfSwgXCJUb2RheSdzIFRvIERvXCIpO1xuICAgIHRoaXMucmVmcmVzaERpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdyZWZyZXNoLWRpdicgfSk7XG4gICAgdGhpcy5yZWZyZXNoSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzOiAnbWF0ZXJpYWwtaWNvbnMgcmVmcmVzaC1pY29uJyB9LCAnYXV0b3JlbmV3Jyk7XG4gICAgdGhpcy5wZW5kaW5nQ291bnQgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzczogJ3BlbmRpbmctY291bnQgZC1mbGV4JyB9KTtcbiAgICB0aGlzLnJlZnJlc2hEaXYuYXBwZW5kKHRoaXMucmVmcmVzaEljb24sIHRoaXMucGVuZGluZ0NvdW50KTtcbiAgICB0aGlzLmhlYWRlckRpdi5hcHBlbmQodGhpcy5oZWFkaW5nLCB0aGlzLnJlZnJlc2hEaXYpO1xuXG4gICAgdGhpcy50YXNrRm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7IGNsYXNzOiAndGFzay1mb3JtIGQtZmxleCcgfSk7XG4gICAgdGhpcy5pbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgcGxhY2Vob2xkZXI6ICdBZGQgdG8geW91ciBsaXN0Li4uJyxcbiAgICAgIG5hbWU6ICd0YXNrJyxcbiAgICB9KTtcbiAgICB0aGlzLnN1Ym1pdCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICB0YWJpbmRleDogJy0xJyxcbiAgICAgIHRpdGxlOiAnY2xpY2sgdGhpcyBvciBwcmVzcyBlbnRlciB0byBzdWJtaXQnLFxuICAgIH0pO1xuICAgIHRoaXMuc3VibWl0LnZhbHVlID0gJ1xcdTIxQjInO1xuXG4gICAgdGhpcy50YXNrRm9ybS5hcHBlbmQodGhpcy5pbnB1dCwgdGhpcy5zdWJtaXQpO1xuXG4gICAgdGhpcy50YXNrTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgeyBjbGFzczogJ3Rhc2stbGlzdCBkLWZsZXgnIH0pO1xuXG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzOiAnY2xlYXItYnV0dG9uJyxcbiAgICB9LCAnQ2xlYXIgYWxsIGNvbXBsZXRlZCcpO1xuXG4gICAgdGhpcy5tYWluLmFwcGVuZCh0aGlzLmhlYWRlckRpdiwgdGhpcy50YXNrRm9ybSwgdGhpcy50YXNrTGlzdCwgdGhpcy5jbGVhckJ1dHRvbik7XG4gIH1cblxuICBzaG93VGFza3ModGFza3MpIHtcbiAgICB3aGlsZSAodGhpcy50YXNrTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnRhc2tMaXN0LnJlbW92ZUNoaWxkKHRoaXMudGFza0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgdGhpcy5wZW5kaW5nQ291bnQudGV4dENvbnRlbnQgPSBgJHt0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGUgPT09IGZhbHNlKS5sZW5ndGh9YDtcblxuICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlIH0gPSB0YXNrO1xuXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlRWxlbWVudCgnbGknLCB7IGNsYXNzOiAndGFzay1jb250YWluZXIgZC1mbGV4JyB9KTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAnY2hlY2tib3gnLCAnZGF0YS1pZCc6IGAke2lkfWAsIGNsYXNzOiAnY2hlY2tib3gnIH0pO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gY29tcGxldGU7XG5cbiAgICAgICAgY29uc3QgdGFza0Rlc2MgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICAgIGNvbnRlbkVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNsYXNzOiAnZWRpdGFibGUnLFxuICAgICAgICAgICdkYXRhLWlkJzogYCR7aWR9YCxcbiAgICAgICAgfSwgZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICAgICBjbGFzczogJ2RlbGV0ZSBtYXRlcmlhbC1pY29ucyBkZWxldGUtYnV0dG9uIGQtbm9uZScsXG4gICAgICAgICAgJ2RhdGEtaWQnOiBgJHtpZH1gLFxuICAgICAgICB9LCAnZGVsZXRlJyk7XG5cbiAgICAgICAgY29uc3QgZHJhZ0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICAgICBjbGFzczogJ21vcmVfdmVydCBtYXRlcmlhbC1pY29ucyBkcmFnLWJ1dHRvbicsXG4gICAgICAgICAgJ2RhdGEtaWQnOiBgJHtpZH1gLFxuICAgICAgICB9LCAnbW9yZV92ZXJ0Jyk7XG5cbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNoZWNrYm94LCB0YXNrRGVzYywgZGVsZXRlQnV0dG9uLCBkcmFnQnV0dG9uKTtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0IFRhc2tDb250cm9sbGVyIGZyb20gJy4vYXNzZXRzL2pzL2NvbnRyb2xsZXJzL3Rhc2tDb250cm9sbGVyJztcblxuVGFza0NvbnRyb2xsZXIoKS5pbml0KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==