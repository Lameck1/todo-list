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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\nbody {\n  font-family: 'El Messiri', sans-serif;\n  background-color: #f1f2f5;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  font-size: 1.4rem;\n  color: #361d32;\n}\n\nheader,\n.main {\n  max-width: 100%;\n  margin: 0 20px;\n}\n\n.main {\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  flex-direction: column;\n}\n\n.header-div {\n  align-content: center;\n  justify-content: space-between;\n}\n\n.refresh-div {\n  position: relative;\n}\n\n.pending-count {\n  position: absolute;\n  color: #fff;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: red;\n  z-index: 1;\n  top: -30%;\n  right: -30%;\n  font-size: 0.8rem;\n  padding: 2px;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.task-list {\n  flex-direction: column;\n}\n\n.checkbox,\n.delete-button {\n  flex: 0 1 0;\n}\n\n.editable {\n  flex: 2 1 0;\n  font-size: 1rem;\n  outline: none;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-none {\n  display: none;\n}\n\n.task-list,\n.delete-button,\n.drag-button,\ninput[type=text],\ninput[type=button] {\n  background-color: inherit;\n  border: none;\n}\n\ninput[type=text] {\n  outline: none;\n  flex: 1 1 0;\n  font-style: italic;\n  font-size: 1rem;\n}\n\ninput[type=button] {\n  flex: 0 1 0;\n}\n\n.drag-button {\n  padding: 0;\n  font-size: 1.3rem;\n  cursor: move;\n}\n\n.refresh-div,\ninput[type=button],\n.drag-button,\n.clear-button {\n  opacity: 0.5;\n}\n\n.refresh-div,\ninput[type=button],\n.clear-button {\n  cursor: pointer;\n}\n\n.clear-button {\n  border: none;\n  padding: 15px 0;\n  font-size: 1.05rem;\n}\n\n.draggable {\n  align-items: center;\n}\n\n.refresh-div:hover,\ninput[type=button]:hover,\n.clear-button:hover,\n.drag-button:hover {\n  opacity: 1;\n}\n\n.header-div,\n.task-form,\n.draggable {\n  padding: 10px;\n  border-bottom: 1px solid #e3e3e3;\n}\n\nfooter {\n  position: absolute;\n  border-top: 1px solid #e3e3e3;\n  height: 50px;\n  padding: 10px 0;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nsmall {\n  color: #361d32;\n}\n\n.draggable.dragging {\n  background-color: #eee;\n  border: 1px solid #333;\n}\n\n@media only screen and (min-width: 768px) {\n  .main {\n    margin: 0 auto;\n    width: 35%;\n    padding: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAGA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;EACrC,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;;;;EAKE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,YAAY;AACd;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;EAIE,UAAU;AACZ;;AAEA;;;EAGE,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE;IACE,cAAc;IACd,UAAU;IACV,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=El+Messiri&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Icons&display=swap\");\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\nbody {\n  font-family: 'El Messiri', sans-serif;\n  background-color: #f1f2f5;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  font-size: 1.4rem;\n  color: #361d32;\n}\n\nheader,\n.main {\n  max-width: 100%;\n  margin: 0 20px;\n}\n\n.main {\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  flex-direction: column;\n}\n\n.header-div {\n  align-content: center;\n  justify-content: space-between;\n}\n\n.refresh-div {\n  position: relative;\n}\n\n.pending-count {\n  position: absolute;\n  color: #fff;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: red;\n  z-index: 1;\n  top: -30%;\n  right: -30%;\n  font-size: 0.8rem;\n  padding: 2px;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.task-list {\n  flex-direction: column;\n}\n\n.checkbox,\n.delete-button {\n  flex: 0 1 0;\n}\n\n.editable {\n  flex: 2 1 0;\n  font-size: 1rem;\n  outline: none;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-none {\n  display: none;\n}\n\n.task-list,\n.delete-button,\n.drag-button,\ninput[type=text],\ninput[type=button] {\n  background-color: inherit;\n  border: none;\n}\n\ninput[type=text] {\n  outline: none;\n  flex: 1 1 0;\n  font-style: italic;\n  font-size: 1rem;\n}\n\ninput[type=button] {\n  flex: 0 1 0;\n}\n\n.drag-button {\n  padding: 0;\n  font-size: 1.3rem;\n  cursor: move;\n}\n\n.refresh-div,\ninput[type=button],\n.drag-button,\n.clear-button {\n  opacity: 0.5;\n}\n\n.refresh-div,\ninput[type=button],\n.clear-button {\n  cursor: pointer;\n}\n\n.clear-button {\n  border: none;\n  padding: 15px 0;\n  font-size: 1.05rem;\n}\n\n.draggable {\n  align-items: center;\n}\n\n.refresh-div:hover,\ninput[type=button]:hover,\n.clear-button:hover,\n.drag-button:hover {\n  opacity: 1;\n}\n\n.header-div,\n.task-form,\n.draggable {\n  padding: 10px;\n  border-bottom: 1px solid #e3e3e3;\n}\n\nfooter {\n  position: absolute;\n  border-top: 1px solid #e3e3e3;\n  height: 50px;\n  padding: 10px 0;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nsmall {\n  color: #361d32;\n}\n\n.draggable.dragging {\n  background-color: #eee;\n  border: 1px solid #333;\n}\n\n@media only screen and (min-width: 768px) {\n  .main {\n    margin: 0 auto;\n    width: 35%;\n    padding: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _helpers_dragHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/dragHandler */ "./src/assets/js/helpers/dragHandler.js");
/* harmony import */ var _helpers_getElementAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getElementAll */ "./src/assets/js/helpers/getElementAll.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => ({

  taskModel: new _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default(),
  taskView: new _views_taskView__WEBPACK_IMPORTED_MODULE_0__.default(),

  handletoggleTaskStatus() {
    (0,_helpers_getElementAll__WEBPACK_IMPORTED_MODULE_3__.default)('.checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.toggleTaskStatus(Number(checkbox.getAttribute('data-id')));
        localStorage.setItem('tasks', JSON.stringify(_models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks));
        window.location.reload();
      });
    });
  },

  init() {
    if (localStorage.getItem('tasks') === null) {
      _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.refreshStorage();
    }
    this.taskView.showTasks(_models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks);
    (0,_helpers_dragHandler__WEBPACK_IMPORTED_MODULE_2__.default)(this.taskView, _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks);
    this.handletoggleTaskStatus();
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

/***/ "./src/assets/js/helpers/dragHandler.js":
/*!**********************************************!*\
  !*** ./src/assets/js/helpers/dragHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getElementAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElementAll */ "./src/assets/js/helpers/getElementAll.js");
/* harmony import */ var _getElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getElement */ "./src/assets/js/helpers/getElement.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((view, tasks) => {
  const taskItems = (0,_getElementAll__WEBPACK_IMPORTED_MODULE_0__.default)('.task-container');
  const taskList = (0,_getElement__WEBPACK_IMPORTED_MODULE_1__.default)('.task-list');
  let draggedId = 0;
  let draggedItem = null;

  const dragAfterNode = (container, y) => {
    const draggableNodes = [...container.querySelectorAll('.draggable:not(.dragging)')];

    return draggableNodes.reduce((closest, child) => {
      const card = child.getBoundingClientRect();
      const offset = y - card.top - (card.height / 2);
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  };

  taskItems.forEach((item) => {
    item.addEventListener('dragstart', (event) => {
      event.target.classList.add('dragging');
      draggedId = Number(event.target.getAttribute('data-id'));
      draggedItem = tasks.splice(draggedId, 1);
    });

    item.addEventListener('dragend', (event) => {
      event.target.classList.remove('dragging');
    });
  });

  taskList.addEventListener('dragover', (event) => {
    event.preventDefault();
    const afterNode = dragAfterNode(taskList, event.clientY);
    const draggable = (0,_getElement__WEBPACK_IMPORTED_MODULE_1__.default)('.dragging');
    if (afterNode === null) {
      taskList.appendChild(draggable);
    } else {
      taskList.insertBefore(draggable, afterNode);
    }
  });

  taskList.addEventListener('drop', (event) => {
    event.preventDefault();
    const afterNode = dragAfterNode(taskList, event.clientY);
    if (!afterNode) {
      tasks = [...tasks, ...draggedItem];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      view.showTasks(tasks);
      window.location.reload();
    }

    if (afterNode) {
      if (draggedId > Number(afterNode.getAttribute('data-id'))) {
        tasks.splice(Number(afterNode.getAttribute('data-id')), 0, draggedItem[0]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        view.showTasks(tasks);
        window.location.reload();
      } else {
        tasks.splice(Number(afterNode.getAttribute('data-id')) - 1, 0, draggedItem[0]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        view.showTasks(tasks);
        window.location.reload();
      }
    }
  });
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

/***/ "./src/assets/js/helpers/getElementAll.js":
/*!************************************************!*\
  !*** ./src/assets/js/helpers/getElementAll.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((selector) => {
  const elements = document.querySelectorAll(selector);
  return elements;
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
  static tasks = JSON.parse(localStorage.getItem('tasks'));

  static samples = [
    { id: 1, description: 'Take child to school', complete: false },
    { id: 2, description: 'Learn about webpack', complete: true },
    { id: 3, description: 'Pick child from school', complete: false },
    { id: 4, description: 'Go shopping for groceries', complete: true },
  ];

  static refreshStorage() {
    localStorage.setItem('tasks', JSON.stringify(TaskModel.samples));
  }

  static toggleTaskStatus(index) {
    const task = TaskModel.tasks[index];
    task.complete = !task.complete;
    TaskModel.refreshStorage();
  }
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
      title: 'Click this or press enter to submit.',
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

    if (tasks.length) {
      this.pendingCount.textContent = `${tasks.filter((task) => task.complete === false).length}`;
      tasks.forEach((task) => {
        const { description, complete } = task;

        const listItem = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('li', { class: 'task-container d-flex draggable', 'data-id': `${tasks.indexOf(task)}`, draggable: true });

        const checkbox = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('input', { type: 'checkbox', 'data-id': `${tasks.indexOf(task)}`, class: 'checkbox' });
        checkbox.checked = complete;

        const taskDesc = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('span', {
          contentEditable: true,
          class: 'editable',
          'data-id': `${tasks.indexOf(task)}`,
        }, description);

        const deleteButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', {
          class: 'delete material-icons delete-button d-none',
          'data-id': `${tasks.indexOf(task)}`,
        }, 'delete');

        const dragButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', {
          class: 'more_vert material-icons drag-button',
          'data-id': `${tasks.indexOf(task)}`,
          title: 'Hold and drag item, drop to reorder.',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2NvbnRyb2xsZXJzL3Rhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvanMvaGVscGVycy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvanMvaGVscGVycy9kcmFnSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvZ2V0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvZ2V0RWxlbWVudEFsbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL21vZGVscy90YXNrTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Fzc2V0cy9qcy92aWV3cy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysd0hBQXdIO0FBQ3hILDRIQUE0SDtBQUM1SDtBQUNBLGd0QkFBZ3RCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQiw2QkFBNkIsR0FBRyxVQUFVLDBDQUEwQyw4QkFBOEIsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFlBQVksd0JBQXdCLDRCQUE0QixvQkFBb0Isc0JBQXNCLG1CQUFtQixHQUFHLG9CQUFvQixvQkFBb0IsbUJBQW1CLEdBQUcsV0FBVywyQkFBMkIsMkNBQTJDLDJCQUEyQixHQUFHLGlCQUFpQiwwQkFBMEIsbUNBQW1DLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDBCQUEwQixlQUFlLGNBQWMsZ0JBQWdCLHNCQUFzQixp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O1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDb0M7O0FBRXBFLDhFQUFjLFUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RWwrTWVzc2lyaSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtJY29ucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnRWwgTWVzc2lyaScsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmY1O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjb2xvcjogIzM2MWQzMjtcXG59XFxuXFxuaGVhZGVyLFxcbi5tYWluIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE1JSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyLWRpdiB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZWZyZXNoLWRpdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wZW5kaW5nLWNvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAtMzAlO1xcbiAgcmlnaHQ6IC0zMCU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNoZWNrYm94LFxcbi5kZWxldGUtYnV0dG9uIHtcXG4gIGZsZXg6IDAgMSAwO1xcbn1cXG5cXG4uZWRpdGFibGUge1xcbiAgZmxleDogMiAxIDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stbGlzdCxcXG4uZGVsZXRlLWJ1dHRvbixcXG4uZHJhZy1idXR0b24sXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZmxleDogMSAxIDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICBmbGV4OiAwIDEgMDtcXG59XFxuXFxuLmRyYWctYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLnJlZnJlc2gtZGl2LFxcbmlucHV0W3R5cGU9YnV0dG9uXSxcXG4uZHJhZy1idXR0b24sXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5yZWZyZXNoLWRpdixcXG5pbnB1dFt0eXBlPWJ1dHRvbl0sXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWZyZXNoLWRpdjpob3ZlcixcXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXFxuLmNsZWFyLWJ1dHRvbjpob3ZlcixcXG4uZHJhZy1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmhlYWRlci1kaXYsXFxuLnRhc2stZm9ybSxcXG4uZHJhZ2dhYmxlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTNlM2UzO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBjb2xvcjogIzM2MWQzMjtcXG59XFxuXFxuLmRyYWdnYWJsZS5kcmFnZ2luZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4ge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7OztFQUtFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLFVBQVU7QUFDWjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FbCtNZXNzaXJpJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiAjMzYxZDMyO1xcbn1cXG5cXG5oZWFkZXIsXFxuLm1haW4ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiKDAgMCAwIC8gMTUlKTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXItZGl2IHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnJlZnJlc2gtZGl2IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBlbmRpbmctY291bnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHotaW5kZXg6IDE7XFxuICB0b3A6IC0zMCU7XFxuICByaWdodDogLTMwJTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2hlY2tib3gsXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgZmxleDogMCAxIDA7XFxufVxcblxcbi5lZGl0YWJsZSB7XFxuICBmbGV4OiAyIDEgMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0LFxcbi5kZWxldGUtYnV0dG9uLFxcbi5kcmFnLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4OiAxIDEgMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIGZsZXg6IDAgMSAwO1xcbn1cXG5cXG4uZHJhZy1idXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4ucmVmcmVzaC1kaXYsXFxuaW5wdXRbdHlwZT1idXR0b25dLFxcbi5kcmFnLWJ1dHRvbixcXG4uY2xlYXItYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnJlZnJlc2gtZGl2LFxcbmlucHV0W3R5cGU9YnV0dG9uXSxcXG4uY2xlYXItYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBmb250LXNpemU6IDEuMDVyZW07XFxufVxcblxcbi5kcmFnZ2FibGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlZnJlc2gtZGl2OmhvdmVyLFxcbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlcixcXG4uY2xlYXItYnV0dG9uOmhvdmVyLFxcbi5kcmFnLWJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaGVhZGVyLWRpdixcXG4udGFzay1mb3JtLFxcbi5kcmFnZ2FibGUge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlM2UzO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlM2UzZTM7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbnNtYWxsIHtcXG4gIGNvbG9yOiAjMzYxZDMyO1xcbn1cXG5cXG4uZHJhZ2dhYmxlLmRyYWdnaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgVGFza1ZpZXcgZnJvbSAnLi4vdmlld3MvdGFza1ZpZXcnO1xuaW1wb3J0IFRhc2tNb2RlbCBmcm9tICcuLi9tb2RlbHMvdGFza01vZGVsJztcbmltcG9ydCBkcmFnSGFuZGxlciBmcm9tICcuLi9oZWxwZXJzL2RyYWdIYW5kbGVyJztcbmltcG9ydCBnZXRFbGVtZW50QWxsIGZyb20gJy4uL2hlbHBlcnMvZ2V0RWxlbWVudEFsbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+ICh7XG5cbiAgdGFza01vZGVsOiBuZXcgVGFza01vZGVsKCksXG4gIHRhc2tWaWV3OiBuZXcgVGFza1ZpZXcoKSxcblxuICBoYW5kbGV0b2dnbGVUYXNrU3RhdHVzKCkge1xuICAgIGdldEVsZW1lbnRBbGwoJy5jaGVja2JveCcpLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIFRhc2tNb2RlbC50b2dnbGVUYXNrU3RhdHVzKE51bWJlcihjaGVja2JveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShUYXNrTW9kZWwudGFza3MpKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpIHtcbiAgICAgIFRhc2tNb2RlbC5yZWZyZXNoU3RvcmFnZSgpO1xuICAgIH1cbiAgICB0aGlzLnRhc2tWaWV3LnNob3dUYXNrcyhUYXNrTW9kZWwudGFza3MpO1xuICAgIGRyYWdIYW5kbGVyKHRoaXMudGFza1ZpZXcsIFRhc2tNb2RlbC50YXNrcyk7XG4gICAgdGhpcy5oYW5kbGV0b2dnbGVUYXNrU3RhdHVzKCk7XG4gIH0sXG59KTsiLCJleHBvcnQgZGVmYXVsdCAodGFnLCBhdHRyaWJ1dGVzID0ge30sIHRleHRDb250ZW50ID0gJycpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59OyIsImltcG9ydCBnZXRFbGVtZW50QWxsIGZyb20gJy4vZ2V0RWxlbWVudEFsbCc7XG5pbXBvcnQgZ2V0RWxlbWVudCBmcm9tICcuL2dldEVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCAodmlldywgdGFza3MpID0+IHtcbiAgY29uc3QgdGFza0l0ZW1zID0gZ2V0RWxlbWVudEFsbCgnLnRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZ2V0RWxlbWVudCgnLnRhc2stbGlzdCcpO1xuICBsZXQgZHJhZ2dlZElkID0gMDtcbiAgbGV0IGRyYWdnZWRJdGVtID0gbnVsbDtcblxuICBjb25zdCBkcmFnQWZ0ZXJOb2RlID0gKGNvbnRhaW5lciwgeSkgPT4ge1xuICAgIGNvbnN0IGRyYWdnYWJsZU5vZGVzID0gWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpJyldO1xuXG4gICAgcmV0dXJuIGRyYWdnYWJsZU5vZGVzLnJlZHVjZSgoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHkgLSBjYXJkLnRvcCAtIChjYXJkLmhlaWdodCAvIDIpO1xuICAgICAgaWYgKG9mZnNldCA8IDAgJiYgb2Zmc2V0ID4gY2xvc2VzdC5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHsgb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50O1xuICB9O1xuXG4gIHRhc2tJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgZHJhZ2dlZElkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICBkcmFnZ2VkSXRlbSA9IHRhc2tzLnNwbGljZShkcmFnZ2VkSWQsIDEpO1xuICAgIH0pO1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFmdGVyTm9kZSA9IGRyYWdBZnRlck5vZGUodGFza0xpc3QsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IGdldEVsZW1lbnQoJy5kcmFnZ2luZycpO1xuICAgIGlmIChhZnRlck5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tMaXN0Lmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyTm9kZSk7XG4gICAgfVxuICB9KTtcblxuICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZnRlck5vZGUgPSBkcmFnQWZ0ZXJOb2RlKHRhc2tMaXN0LCBldmVudC5jbGllbnRZKTtcbiAgICBpZiAoIWFmdGVyTm9kZSkge1xuICAgICAgdGFza3MgPSBbLi4udGFza3MsIC4uLmRyYWdnZWRJdGVtXTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICB2aWV3LnNob3dUYXNrcyh0YXNrcyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgaWYgKGFmdGVyTm9kZSkge1xuICAgICAgaWYgKGRyYWdnZWRJZCA+IE51bWJlcihhZnRlck5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpKSB7XG4gICAgICAgIHRhc2tzLnNwbGljZShOdW1iZXIoYWZ0ZXJOb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSwgMCwgZHJhZ2dlZEl0ZW1bMF0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgICB2aWV3LnNob3dUYXNrcyh0YXNrcyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tzLnNwbGljZShOdW1iZXIoYWZ0ZXJOb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSAtIDEsIDAsIGRyYWdnZWRJdGVtWzBdKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAgICAgdmlldy5zaG93VGFza3ModGFza3MpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICByZXR1cm4gZWxlbWVudDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgKHNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIHJldHVybiBlbGVtZW50cztcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza01vZGVsIHtcbiAgc3RhdGljIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG5cbiAgc3RhdGljIHNhbXBsZXMgPSBbXG4gICAgeyBpZDogMSwgZGVzY3JpcHRpb246ICdUYWtlIGNoaWxkIHRvIHNjaG9vbCcsIGNvbXBsZXRlOiBmYWxzZSB9LFxuICAgIHsgaWQ6IDIsIGRlc2NyaXB0aW9uOiAnTGVhcm4gYWJvdXQgd2VicGFjaycsIGNvbXBsZXRlOiB0cnVlIH0sXG4gICAgeyBpZDogMywgZGVzY3JpcHRpb246ICdQaWNrIGNoaWxkIGZyb20gc2Nob29sJywgY29tcGxldGU6IGZhbHNlIH0sXG4gICAgeyBpZDogNCwgZGVzY3JpcHRpb246ICdHbyBzaG9wcGluZyBmb3IgZ3JvY2VyaWVzJywgY29tcGxldGU6IHRydWUgfSxcbiAgXTtcblxuICBzdGF0aWMgcmVmcmVzaFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoVGFza01vZGVsLnNhbXBsZXMpKTtcbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVUYXNrU3RhdHVzKGluZGV4KSB7XG4gICAgY29uc3QgdGFzayA9IFRhc2tNb2RlbC50YXNrc1tpbmRleF07XG4gICAgdGFzay5jb21wbGV0ZSA9ICF0YXNrLmNvbXBsZXRlO1xuICAgIFRhc2tNb2RlbC5yZWZyZXNoU3RvcmFnZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgZ2V0RWxlbWVudCBmcm9tICcuLi9oZWxwZXJzL2dldEVsZW1lbnQnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9jcmVhdGVFbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1ZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW4gPSBnZXRFbGVtZW50KCcubWFpbicpO1xuXG4gICAgdGhpcy5oZWFkZXJEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaGVhZGVyLWRpdiBkLWZsZXgnIH0pO1xuICAgIHRoaXMuaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgeyB9LCBcIlRvZGF5J3MgVG8gRG9cIik7XG4gICAgdGhpcy5yZWZyZXNoRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3JlZnJlc2gtZGl2JyB9KTtcbiAgICB0aGlzLnJlZnJlc2hJY29uID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3M6ICdtYXRlcmlhbC1pY29ucyByZWZyZXNoLWljb24nIH0sICdhdXRvcmVuZXcnKTtcbiAgICB0aGlzLnBlbmRpbmdDb3VudCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzOiAncGVuZGluZy1jb3VudCBkLWZsZXgnIH0pO1xuICAgIHRoaXMucmVmcmVzaERpdi5hcHBlbmQodGhpcy5yZWZyZXNoSWNvbiwgdGhpcy5wZW5kaW5nQ291bnQpO1xuICAgIHRoaXMuaGVhZGVyRGl2LmFwcGVuZCh0aGlzLmhlYWRpbmcsIHRoaXMucmVmcmVzaERpdik7XG5cbiAgICB0aGlzLnRhc2tGb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsIHsgY2xhc3M6ICd0YXNrLWZvcm0gZC1mbGV4JyB9KTtcbiAgICB0aGlzLmlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ0FkZCB0byB5b3VyIGxpc3QuLi4nLFxuICAgICAgbmFtZTogJ3Rhc2snLFxuICAgIH0pO1xuICAgIHRoaXMuc3VibWl0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgIHRhYmluZGV4OiAnLTEnLFxuICAgICAgdGl0bGU6ICdDbGljayB0aGlzIG9yIHByZXNzIGVudGVyIHRvIHN1Ym1pdC4nLFxuICAgIH0pO1xuICAgIHRoaXMuc3VibWl0LnZhbHVlID0gJ1xcdTIxQjInO1xuXG4gICAgdGhpcy50YXNrRm9ybS5hcHBlbmQodGhpcy5pbnB1dCwgdGhpcy5zdWJtaXQpO1xuXG4gICAgdGhpcy50YXNrTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgeyBjbGFzczogJ3Rhc2stbGlzdCBkLWZsZXgnIH0pO1xuXG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzOiAnY2xlYXItYnV0dG9uJyxcbiAgICB9LCAnQ2xlYXIgYWxsIGNvbXBsZXRlZCcpO1xuXG4gICAgdGhpcy5tYWluLmFwcGVuZCh0aGlzLmhlYWRlckRpdiwgdGhpcy50YXNrRm9ybSwgdGhpcy50YXNrTGlzdCwgdGhpcy5jbGVhckJ1dHRvbik7XG4gIH1cblxuICBzaG93VGFza3ModGFza3MpIHtcbiAgICB3aGlsZSAodGhpcy50YXNrTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnRhc2tMaXN0LnJlbW92ZUNoaWxkKHRoaXMudGFza0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wZW5kaW5nQ291bnQudGV4dENvbnRlbnQgPSBgJHt0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGUgPT09IGZhbHNlKS5sZW5ndGh9YDtcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgY29tcGxldGUgfSA9IHRhc2s7XG5cbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBjcmVhdGVFbGVtZW50KCdsaScsIHsgY2xhc3M6ICd0YXNrLWNvbnRhaW5lciBkLWZsZXggZHJhZ2dhYmxlJywgJ2RhdGEtaWQnOiBgJHt0YXNrcy5pbmRleE9mKHRhc2spfWAsIGRyYWdnYWJsZTogdHJ1ZSB9KTtcblxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyB0eXBlOiAnY2hlY2tib3gnLCAnZGF0YS1pZCc6IGAke3Rhc2tzLmluZGV4T2YodGFzayl9YCwgY2xhc3M6ICdjaGVja2JveCcgfSk7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBjb21wbGV0ZTtcblxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgICAgY29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNsYXNzOiAnZWRpdGFibGUnLFxuICAgICAgICAgICdkYXRhLWlkJzogYCR7dGFza3MuaW5kZXhPZih0YXNrKX1gLFxuICAgICAgICB9LCBkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgIGNsYXNzOiAnZGVsZXRlIG1hdGVyaWFsLWljb25zIGRlbGV0ZS1idXR0b24gZC1ub25lJyxcbiAgICAgICAgICAnZGF0YS1pZCc6IGAke3Rhc2tzLmluZGV4T2YodGFzayl9YCxcbiAgICAgICAgfSwgJ2RlbGV0ZScpO1xuXG4gICAgICAgIGNvbnN0IGRyYWdCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgY2xhc3M6ICdtb3JlX3ZlcnQgbWF0ZXJpYWwtaWNvbnMgZHJhZy1idXR0b24nLFxuICAgICAgICAgICdkYXRhLWlkJzogYCR7dGFza3MuaW5kZXhPZih0YXNrKX1gLFxuICAgICAgICAgIHRpdGxlOiAnSG9sZCBhbmQgZHJhZyBpdGVtLCBkcm9wIHRvIHJlb3JkZXIuJyxcbiAgICAgICAgfSwgJ21vcmVfdmVydCcpO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGVja2JveCwgdGFza0Rlc2MsIGRlbGV0ZUJ1dHRvbiwgZHJhZ0J1dHRvbik7XG4gICAgICAgIHRoaXMudGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrQ29udHJvbGxlciBmcm9tICcuL2Fzc2V0cy9qcy9jb250cm9sbGVycy90YXNrQ29udHJvbGxlcic7XG5cblRhc2tDb250cm9sbGVyKCkuaW5pdCgpOyJdLCJzb3VyY2VSb290IjoiIn0=