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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\nbody {\n  font-family: 'El Messiri', sans-serif;\n  background-color: #f1f2f5;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  font-size: 1.4rem;\n  color: #361d32;\n}\n\nform input[type='submit'] {\n  background: inherit;\n  border: none;\n}\n\nheader,\n.main {\n  max-width: 100%;\n  margin: 0 20px;\n}\n\n.main {\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  flex-direction: column;\n}\n\n.header-div {\n  align-content: center;\n  justify-content: space-between;\n}\n\n.refresh-div {\n  position: relative;\n}\n\n.pending-count {\n  position: absolute;\n  color: #fff;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: red;\n  z-index: 1;\n  top: -30%;\n  right: -30%;\n  font-size: 0.8rem;\n  padding: 2px;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.task-list {\n  flex-direction: column;\n}\n\n.task-container {\n  position: relative;\n}\n\n.checkbox,\n.delete-button {\n  flex: 0 1 0;\n}\n\n.editable {\n  flex: 2 1 0;\n  font-size: 1rem;\n  outline: none;\n}\n\n.editable:hover,\n.editable:focus {\n  background: #ffffbe;\n}\n\n.editable.complete {\n  text-decoration: line-through;\n  font-weight: 600;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-none {\n  display: none;\n}\n\n.task-list,\n.delete-button,\n.drag-button,\ninput[type=text],\ninput[type=button] {\n  background-color: inherit;\n  border: none;\n}\n\ninput[type=text] {\n  outline: none;\n  flex: 1 1 0;\n  font-style: italic;\n  font-size: 1rem;\n}\n\ninput[type=button] {\n  flex: 0 1 0;\n}\n\n.delete-button {\n  color: #b71c1c;\n  cursor: pointer;\n  padding: 0;\n  z-index: 1000;\n}\n\n.delete-button:hover {\n  opacity: 0.8;\n  font-size: 1.6rem;\n}\n\n.drag-button {\n  padding: 0;\n  font-size: 1.3rem;\n  cursor: move;\n}\n\n.refresh-div,\ninput[type=button],\n.drag-button,\n.clear-button {\n  opacity: 0.5;\n}\n\n.refresh-div,\ninput[type=button],\n.clear-button {\n  cursor: pointer;\n}\n\n.clear-button {\n  border: none;\n  padding: 15px 0;\n  font-size: 1.05rem;\n}\n\n.draggable {\n  align-items: center;\n}\n\n.refresh-div:hover,\ninput[type=button]:hover,\n.clear-button:hover,\n.drag-button:hover {\n  opacity: 1;\n}\n\n.header-div,\n.task-form,\n.draggable {\n  padding: 10px;\n  border-bottom: 1px solid #e3e3e3;\n}\n\nfooter {\n  position: absolute;\n  border-top: 1px solid #e3e3e3;\n  height: 50px;\n  padding: 10px 0;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nsmall {\n  color: #361d32;\n}\n\n.draggable.dragging {\n  background-color: #eee;\n  border: 1px solid #333;\n}\n\n.alert {\n  position: relative;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.alert-success {\n  background-color: #eceff1;\n  border: solid 1px green;\n  color: green;\n}\n\n.alert-danger {\n  background-color: #eceff1;\n  border: solid 1px #b71c1c;\n  color: #b71c1c;\n}\n\n.alert-close-btn {\n  position: absolute;\n  color: inherit;\n  background-color: inherit;\n  font-size: inherit;\n  border: none;\n  padding: 0 5px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.instructions {\n  margin: 0 auto;\n  padding: 20px;\n  width: 100%;\n}\n\n@media only screen and (min-width: 768px) {\n  .main {\n    margin: 0 auto;\n    width: 35%;\n    padding: 0;\n  }\n\n  .alert {\n    max-width: 35%;\n  }\n\n  .instructions {\n    width: 35%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAGA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;EACrC,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;;;;EAKE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,eAAe;EACf,UAAU;EACV,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,YAAY;AACd;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;;;EAIE,UAAU;AACZ;;AAEA;;;EAGE,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,QAAQ;EACR,MAAM;EACN,SAAS;AACX;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;AACb;;AAEA;EACE;IACE,cAAc;IACd,UAAU;IACV,UAAU;EACZ;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=El+Messiri&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Icons&display=swap\");\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\nbody {\n  font-family: 'El Messiri', sans-serif;\n  background-color: #f1f2f5;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  align-items: center;\n  justify-content: center;\n  padding: 20px 0;\n  font-size: 1.4rem;\n  color: #361d32;\n}\n\nform input[type='submit'] {\n  background: inherit;\n  border: none;\n}\n\nheader,\n.main {\n  max-width: 100%;\n  margin: 0 20px;\n}\n\n.main {\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  flex-direction: column;\n}\n\n.header-div {\n  align-content: center;\n  justify-content: space-between;\n}\n\n.refresh-div {\n  position: relative;\n}\n\n.pending-count {\n  position: absolute;\n  color: #fff;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: red;\n  z-index: 1;\n  top: -30%;\n  right: -30%;\n  font-size: 0.8rem;\n  padding: 2px;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.task-list {\n  flex-direction: column;\n}\n\n.task-container {\n  position: relative;\n}\n\n.checkbox,\n.delete-button {\n  flex: 0 1 0;\n}\n\n.editable {\n  flex: 2 1 0;\n  font-size: 1rem;\n  outline: none;\n}\n\n.editable:hover,\n.editable:focus {\n  background: #ffffbe;\n}\n\n.editable.complete {\n  text-decoration: line-through;\n  font-weight: 600;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-none {\n  display: none;\n}\n\n.task-list,\n.delete-button,\n.drag-button,\ninput[type=text],\ninput[type=button] {\n  background-color: inherit;\n  border: none;\n}\n\ninput[type=text] {\n  outline: none;\n  flex: 1 1 0;\n  font-style: italic;\n  font-size: 1rem;\n}\n\ninput[type=button] {\n  flex: 0 1 0;\n}\n\n.delete-button {\n  color: #b71c1c;\n  cursor: pointer;\n  padding: 0;\n  z-index: 1000;\n}\n\n.delete-button:hover {\n  opacity: 0.8;\n  font-size: 1.6rem;\n}\n\n.drag-button {\n  padding: 0;\n  font-size: 1.3rem;\n  cursor: move;\n}\n\n.refresh-div,\ninput[type=button],\n.drag-button,\n.clear-button {\n  opacity: 0.5;\n}\n\n.refresh-div,\ninput[type=button],\n.clear-button {\n  cursor: pointer;\n}\n\n.clear-button {\n  border: none;\n  padding: 15px 0;\n  font-size: 1.05rem;\n}\n\n.draggable {\n  align-items: center;\n}\n\n.refresh-div:hover,\ninput[type=button]:hover,\n.clear-button:hover,\n.drag-button:hover {\n  opacity: 1;\n}\n\n.header-div,\n.task-form,\n.draggable {\n  padding: 10px;\n  border-bottom: 1px solid #e3e3e3;\n}\n\nfooter {\n  position: absolute;\n  border-top: 1px solid #e3e3e3;\n  height: 50px;\n  padding: 10px 0;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nsmall {\n  color: #361d32;\n}\n\n.draggable.dragging {\n  background-color: #eee;\n  border: 1px solid #333;\n}\n\n.alert {\n  position: relative;\n  font-weight: 500;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.alert-success {\n  background-color: #eceff1;\n  border: solid 1px green;\n  color: green;\n}\n\n.alert-danger {\n  background-color: #eceff1;\n  border: solid 1px #b71c1c;\n  color: #b71c1c;\n}\n\n.alert-close-btn {\n  position: absolute;\n  color: inherit;\n  background-color: inherit;\n  font-size: inherit;\n  border: none;\n  padding: 0 5px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.instructions {\n  margin: 0 auto;\n  padding: 20px;\n  width: 100%;\n}\n\n@media only screen and (min-width: 768px) {\n  .main {\n    margin: 0 auto;\n    width: 35%;\n    padding: 0;\n  }\n\n  .alert {\n    max-width: 35%;\n  }\n\n  .instructions {\n    width: 35%;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _helpers_showAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/showAlert */ "./src/assets/js/helpers/showAlert.js");
/* harmony import */ var _helpers_getElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getElement */ "./src/assets/js/helpers/getElement.js");
/* harmony import */ var _helpers_dragHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/dragHandler */ "./src/assets/js/helpers/dragHandler.js");
/* harmony import */ var _helpers_getElementAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/getElementAll */ "./src/assets/js/helpers/getElementAll.js");
/* harmony import */ var _helpers_refactorIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/refactorIndex */ "./src/assets/js/helpers/refactorIndex.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => ({

  taskView: new _views_taskView__WEBPACK_IMPORTED_MODULE_0__.default(),
  newDescription: '',

  handleAddTask() {
    (0,_helpers_getElement__WEBPACK_IMPORTED_MODULE_3__.default)('.task-form').addEventListener('submit', (event) => {
      event.preventDefault();
      const description = (0,_helpers_getElement__WEBPACK_IMPORTED_MODULE_3__.default)('.descInput').value;
      const taskDescriptions = _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks.map((task) => task.description);
      if (!description) {
        (0,_helpers_showAlert__WEBPACK_IMPORTED_MODULE_2__.default)("Task description can't be blank!", 'danger');
      } else if (description === taskDescriptions.find((t) => t === String(description))) {
        (0,_helpers_showAlert__WEBPACK_IMPORTED_MODULE_2__.default)('Duplicate task descriptions not accepted!', 'danger');
      } else {
        const task = new _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default(description);
        _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.addTask(task);
        (0,_helpers_getElement__WEBPACK_IMPORTED_MODULE_3__.default)('.descInput').value = '';
        window.location.reload();
      }
    });
  },

  handletoggleTaskStatus() {
    (0,_helpers_getElementAll__WEBPACK_IMPORTED_MODULE_5__.default)('.checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const task = _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks[Number(checkbox.getAttribute('data-id')) - 1];
        _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.toggleTaskStatus(task);
        window.location.reload();
      });
    });
  },

  handleClearCompleted() {
    (0,_helpers_getElement__WEBPACK_IMPORTED_MODULE_3__.default)('.clear-button').addEventListener('click', () => {
      if (_models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks.filter((task) => task.complete === true).length > 0) {
        const notComplete = _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks.filter((task) => task.complete === false);
        (0,_helpers_refactorIndex__WEBPACK_IMPORTED_MODULE_6__.default)(notComplete);
        _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks = notComplete;
        _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.refreshStorage();
        window.location.reload();
      } else {
        (0,_helpers_showAlert__WEBPACK_IMPORTED_MODULE_2__.default)('No complete taks at the moment', 'danger');
      }
    });
  },

  handleEditTask() {
    const editables = (0,_helpers_getElementAll__WEBPACK_IMPORTED_MODULE_5__.default)('.editable');
    editables.forEach((editable) => {
      editable.addEventListener('input', (event) => {
        this.newDescription = event.target.textContent;
      });
    });

    editables.forEach((editable) => {
      editable.addEventListener('focusout', (event) => {
        if (this.newDescription) {
          const task = _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks[Number(event.target.getAttribute('data-id'))];
          _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.editTask(task, this.newDescription);
          this.newDescription = '';
          window.location.reload();
        }
      });
    });
  },

  handleDeleteTask() {
    document.querySelectorAll('.delete').forEach((delBtn) => {
      delBtn.addEventListener('click', (event) => {
        const tasks = [..._models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks];
        tasks.splice(Number(event.target.getAttribute('data-id')) - 1, 1);
        (0,_helpers_refactorIndex__WEBPACK_IMPORTED_MODULE_6__.default)(tasks);
        _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks = tasks;
        _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.refreshStorage();
        window.location.reload();
      });
    });
  },

  init() {
    if (localStorage.getItem('tasks') === null) {
      _models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.refreshStorage();
    }
    this.taskView.showTasks(_models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks);
    (0,_helpers_dragHandler__WEBPACK_IMPORTED_MODULE_4__.default)(_models_taskModel__WEBPACK_IMPORTED_MODULE_1__.default.tasks);
    this.handleAddTask();
    this.handletoggleTaskStatus();
    this.handleClearCompleted();
    this.handleEditTask();
    this.handleDeleteTask();
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
/* harmony import */ var _refactorIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refactorIndex */ "./src/assets/js/helpers/refactorIndex.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((tasks) => {
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
      draggedItem = tasks.splice(draggedId - 1, 1);
    });

    item.addEventListener('dragend', (event) => {
      event.target.classList.remove('dragging');
      window.location.reload();
    });
  });

  taskList.addEventListener('dragover', (event) => {
    event.preventDefault();
    const afterNode = dragAfterNode(taskList, event.clientY);
    const draggable = (0,_getElement__WEBPACK_IMPORTED_MODULE_1__.default)('.dragging');
    if (afterNode) {
      taskList.insertBefore(draggable, afterNode);
    } else {
      taskList.appendChild(draggable);
    }
  });

  taskList.addEventListener('drop', (event) => {
    event.preventDefault();
    const afterNode = dragAfterNode(taskList, event.clientY);
    if (!afterNode) {
      tasks = [...tasks, ...draggedItem];
      (0,_refactorIndex__WEBPACK_IMPORTED_MODULE_2__.default)(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    if (afterNode) {
      if (draggedId > Number(afterNode.getAttribute('data-id')) - 1) {
        tasks.splice(Number(afterNode.getAttribute('data-id')) - 1, 0, draggedItem[0]);
        (0,_refactorIndex__WEBPACK_IMPORTED_MODULE_2__.default)(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        tasks.splice(Number(afterNode.getAttribute('data-id')) - 2, 0, draggedItem[0]);
        (0,_refactorIndex__WEBPACK_IMPORTED_MODULE_2__.default)(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
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

/***/ "./src/assets/js/helpers/refactorIndex.js":
/*!************************************************!*\
  !*** ./src/assets/js/helpers/refactorIndex.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((tasks) => {
  tasks.forEach((task) => {
    task.index = tasks.indexOf(task) + 1;
  });
});

/***/ }),

/***/ "./src/assets/js/helpers/showAlert.js":
/*!********************************************!*\
  !*** ./src/assets/js/helpers/showAlert.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getElement */ "./src/assets/js/helpers/getElement.js");
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ "./src/assets/js/helpers/createElement.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((message, className) => {
  if ((0,_getElement__WEBPACK_IMPORTED_MODULE_0__.default)('.alert')) {
    (0,_getElement__WEBPACK_IMPORTED_MODULE_0__.default)('.alert').remove();
  }
  const div = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('div', { class: `alert alert-${className}` });
  const closeBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', { class: 'alert-close-btn' }, 'X');
  closeBtn.addEventListener('click', () => {
    (0,_getElement__WEBPACK_IMPORTED_MODULE_0__.default)('.alert').remove();
  });
  div.append(document.createTextNode(message), closeBtn);
  document.body.insertBefore(div, (0,_getElement__WEBPACK_IMPORTED_MODULE_0__.default)('.main'));
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
  constructor(description) {
    this.index = TaskModel.tasks.length > 0 ? TaskModel.tasks[
      TaskModel.tasks.length - 1].index + 1 : 1;
    this.description = description;
    this.complete = false;
  }

  static toggleTaskStatus(task) {
    task.complete = !task.complete;
    TaskModel.refreshStorage();
  }

  static tasks = JSON.parse(localStorage.getItem('tasks')) || []

  static refreshStorage() {
    localStorage.setItem('tasks', JSON.stringify(TaskModel.tasks));
  }

  static addTask(task) {
    TaskModel.tasks.push(task);
    TaskModel.refreshStorage();
  }

  static editTask(task, newDescription) {
    task.description = newDescription;
    TaskModel.refreshStorage();
  }

  static deleteTask(index) {
    TaskModel.tasks.splice(index, 1);
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
      class: 'descInput',
      name: 'task',
    });
    this.submit = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('input', {
      type: 'submit',
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
        const { index, description, complete } = task;

        const listItem = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('li', { class: 'task-container d-flex draggable', 'data-id': `${index}`, draggable: true });

        const checkbox = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('input', { type: 'checkbox', 'data-id': `${index}`, class: 'checkbox' });
        checkbox.checked = complete;

        const taskDesc = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('span', {
          contentEditable: true,
          class: `${task.complete ? 'editable complete' : 'editable'}`,
          'data-id': `${index}`,
        }, description);

        const deleteButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', {
          class: 'delete material-icons delete-button',
          'data-id': `${index}`,
        }, 'delete');

        const dragButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__.default)('button', {
          class: 'more_vert material-icons drag-button',
          'data-id': `${index}`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2NvbnRyb2xsZXJzL3Rhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvanMvaGVscGVycy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvanMvaGVscGVycy9kcmFnSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvZ2V0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvZ2V0RWxlbWVudEFsbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvcmVmYWN0b3JJbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc2hvd0FsZXJ0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvanMvbW9kZWxzL3Rhc2tNb2RlbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL2pzL3ZpZXdzL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix3SEFBd0g7QUFDeEgsNEhBQTRIO0FBQzVIO0FBQ0EsZ3RCQUFndEIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLDZCQUE2QixHQUFHLFVBQVUsMENBQTBDLDhCQUE4QixHQUFHLFFBQVEscUJBQXFCLEdBQUcsWUFBWSx3QkFBd0IsNEJBQTRCLG9CQUFvQixzQkFBc0IsbUJBQW1CLEdBQUcsK0JBQStCLHdCQUF3QixpQkFBaUIsR0FBRyxvQkFBb0Isb0JBQW9CLG1CQUFtQixHQUFHLFdB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LHlEQUF5RCxNQUFNLG9CQUFvQjs7QUFFakkseUJBQXlCLCtEQUFhLFdBQVcsaUNBQWlDLE1BQU0sc0JBQXNCO0FBQzlHOztBQUVBLHlCQUF5QiwrREFBYTtBQUN0QztBQUNBLG9CQUFvQixpREFBaUQ7QUFDckUsd0JBQXdCLE1BQU07QUFDOUIsU0FBUzs7QUFFVCw2QkFBNkIsK0RBQWE7QUFDMUM7QUFDQSx3QkFBd0IsTUFBTTtBQUM5QixTQUFTOztBQUVULDJCQUEyQiwrREFBYTtBQUN4QztBQUNBLHdCQUF3QixNQUFNO0FBQzlCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7OztVQzdFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNvQzs7QUFFcEUsOEVBQWMsVSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FbCtNZXNzaXJpJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK0ljb25zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdFbCBNZXNzaXJpJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGNvbG9yOiAjMzYxZDMyO1xcbn1cXG5cXG5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmhlYWRlcixcXG4ubWFpbiB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2IoMCAwIDAgLyAxNSUpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlci1kaXYge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucmVmcmVzaC1kaXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGVuZGluZy1jb3VudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgei1pbmRleDogMTtcXG4gIHRvcDogLTMwJTtcXG4gIHJpZ2h0OiAtMzAlO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBwYWRkaW5nOiAycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja2JveCxcXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBmbGV4OiAwIDEgMDtcXG59XFxuXFxuLmVkaXRhYmxlIHtcXG4gIGZsZXg6IDIgMSAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmVkaXRhYmxlOmhvdmVyLFxcbi5lZGl0YWJsZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmJlO1xcbn1cXG5cXG4uZWRpdGFibGUuY29tcGxldGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stbGlzdCxcXG4uZGVsZXRlLWJ1dHRvbixcXG4uZHJhZy1idXR0b24sXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZmxleDogMSAxIDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICBmbGV4OiAwIDEgMDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgY29sb3I6ICNiNzFjMWM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5kcmFnLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi5yZWZyZXNoLWRpdixcXG5pbnB1dFt0eXBlPWJ1dHRvbl0sXFxuLmRyYWctYnV0dG9uLFxcbi5jbGVhci1idXR0b24ge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ucmVmcmVzaC1kaXYsXFxuaW5wdXRbdHlwZT1idXR0b25dLFxcbi5jbGVhci1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVmcmVzaC1kaXY6aG92ZXIsXFxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLFxcbi5jbGVhci1idXR0b246aG92ZXIsXFxuLmRyYWctYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5oZWFkZXItZGl2LFxcbi50YXNrLWZvcm0sXFxuLmRyYWdnYWJsZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlM2UzZTM7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTNlMztcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuc21hbGwge1xcbiAgY29sb3I6ICMzNjFkMzI7XFxufVxcblxcbi5kcmFnZ2FibGUuZHJhZ2dpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxufVxcblxcbi5hbGVydCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmFsZXJ0LXN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYWxlcnQtZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjE7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjYjcxYzFjO1xcbiAgY29sb3I6ICNiNzFjMWM7XFxufVxcblxcbi5hbGVydC1jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1haW4ge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5hbGVydCB7XFxuICAgIG1heC13aWR0aDogMzUlO1xcbiAgfVxcblxcbiAgLmluc3RydWN0aW9ucyB7XFxuICAgIHdpZHRoOiAzNSU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7RUFLRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7O0VBSUUsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVsK01lc3NpcmkmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnMmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0VsIE1lc3NpcmknLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjJmNTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6ICMzNjFkMzI7XFxufVxcblxcbmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaGVhZGVyLFxcbi5tYWluIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYigwIDAgMCAvIDE1JSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyLWRpdiB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZWZyZXNoLWRpdiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wZW5kaW5nLWNvdW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiAtMzAlO1xcbiAgcmlnaHQ6IC0zMCU7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrYm94LFxcbi5kZWxldGUtYnV0dG9uIHtcXG4gIGZsZXg6IDAgMSAwO1xcbn1cXG5cXG4uZWRpdGFibGUge1xcbiAgZmxleDogMiAxIDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZWRpdGFibGU6aG92ZXIsXFxuLmVkaXRhYmxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmYmU7XFxufVxcblxcbi5lZGl0YWJsZS5jb21wbGV0ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1saXN0LFxcbi5kZWxldGUtYnV0dG9uLFxcbi5kcmFnLWJ1dHRvbixcXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9YnV0dG9uXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4OiAxIDEgMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gIGZsZXg6IDAgMSAwO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBjb2xvcjogI2I3MWMxYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLmRyYWctYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLnJlZnJlc2gtZGl2LFxcbmlucHV0W3R5cGU9YnV0dG9uXSxcXG4uZHJhZy1idXR0b24sXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5yZWZyZXNoLWRpdixcXG5pbnB1dFt0eXBlPWJ1dHRvbl0sXFxuLmNsZWFyLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcbn1cXG5cXG4uZHJhZ2dhYmxlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZWZyZXNoLWRpdjpob3ZlcixcXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXFxuLmNsZWFyLWJ1dHRvbjpob3ZlcixcXG4uZHJhZy1idXR0b246aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmhlYWRlci1kaXYsXFxuLnRhc2stZm9ybSxcXG4uZHJhZ2dhYmxlIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZTNlMztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTNlM2UzO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBjb2xvcjogIzM2MWQzMjtcXG59XFxuXFxuLmRyYWdnYWJsZS5kcmFnZ2luZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG59XFxuXFxuLmFsZXJ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uYWxlcnQtc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5hbGVydC1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNiNzFjMWM7XFxuICBjb2xvcjogI2I3MWMxYztcXG59XFxuXFxuLmFsZXJ0LWNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubWFpbiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgLmFsZXJ0IHtcXG4gICAgbWF4LXdpZHRoOiAzNSU7XFxuICB9XFxuXFxuICAuaW5zdHJ1Y3Rpb25zIHtcXG4gICAgd2lkdGg6IDM1JTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IFRhc2tWaWV3IGZyb20gJy4uL3ZpZXdzL3Rhc2tWaWV3JztcbmltcG9ydCBUYXNrTW9kZWwgZnJvbSAnLi4vbW9kZWxzL3Rhc2tNb2RlbCc7XG5pbXBvcnQgc2hvd0FsZXJ0IGZyb20gJy4uL2hlbHBlcnMvc2hvd0FsZXJ0JztcbmltcG9ydCBnZXRFbGVtZW50IGZyb20gJy4uL2hlbHBlcnMvZ2V0RWxlbWVudCc7XG5pbXBvcnQgZHJhZ0hhbmRsZXIgZnJvbSAnLi4vaGVscGVycy9kcmFnSGFuZGxlcic7XG5pbXBvcnQgZ2V0RWxlbWVudEFsbCBmcm9tICcuLi9oZWxwZXJzL2dldEVsZW1lbnRBbGwnO1xuaW1wb3J0IHJlZmFjdG9ySW5kZXggZnJvbSAnLi4vaGVscGVycy9yZWZhY3RvckluZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKHtcblxuICB0YXNrVmlldzogbmV3IFRhc2tWaWV3KCksXG4gIG5ld0Rlc2NyaXB0aW9uOiAnJyxcblxuICBoYW5kbGVBZGRUYXNrKCkge1xuICAgIGdldEVsZW1lbnQoJy50YXNrLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldEVsZW1lbnQoJy5kZXNjSW5wdXQnKS52YWx1ZTtcbiAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbnMgPSBUYXNrTW9kZWwudGFza3MubWFwKCh0YXNrKSA9PiB0YXNrLmRlc2NyaXB0aW9uKTtcbiAgICAgIGlmICghZGVzY3JpcHRpb24pIHtcbiAgICAgICAgc2hvd0FsZXJ0KFwiVGFzayBkZXNjcmlwdGlvbiBjYW4ndCBiZSBibGFuayFcIiwgJ2RhbmdlcicpO1xuICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbiA9PT0gdGFza0Rlc2NyaXB0aW9ucy5maW5kKCh0KSA9PiB0ID09PSBTdHJpbmcoZGVzY3JpcHRpb24pKSkge1xuICAgICAgICBzaG93QWxlcnQoJ0R1cGxpY2F0ZSB0YXNrIGRlc2NyaXB0aW9ucyBub3QgYWNjZXB0ZWQhJywgJ2RhbmdlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrTW9kZWwoZGVzY3JpcHRpb24pO1xuICAgICAgICBUYXNrTW9kZWwuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgZ2V0RWxlbWVudCgnLmRlc2NJbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGV0b2dnbGVUYXNrU3RhdHVzKCkge1xuICAgIGdldEVsZW1lbnRBbGwoJy5jaGVja2JveCcpLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrTW9kZWwudGFza3NbTnVtYmVyKGNoZWNrYm94LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSAtIDFdO1xuICAgICAgICBUYXNrTW9kZWwudG9nZ2xlVGFza1N0YXR1cyh0YXNrKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgaGFuZGxlQ2xlYXJDb21wbGV0ZWQoKSB7XG4gICAgZ2V0RWxlbWVudCgnLmNsZWFyLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKFRhc2tNb2RlbC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGUgPT09IHRydWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgbm90Q29tcGxldGUgPSBUYXNrTW9kZWwudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbXBsZXRlID09PSBmYWxzZSk7XG4gICAgICAgIHJlZmFjdG9ySW5kZXgobm90Q29tcGxldGUpO1xuICAgICAgICBUYXNrTW9kZWwudGFza3MgPSBub3RDb21wbGV0ZTtcbiAgICAgICAgVGFza01vZGVsLnJlZnJlc2hTdG9yYWdlKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dBbGVydCgnTm8gY29tcGxldGUgdGFrcyBhdCB0aGUgbW9tZW50JywgJ2RhbmdlcicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZUVkaXRUYXNrKCkge1xuICAgIGNvbnN0IGVkaXRhYmxlcyA9IGdldEVsZW1lbnRBbGwoJy5lZGl0YWJsZScpO1xuICAgIGVkaXRhYmxlcy5mb3JFYWNoKChlZGl0YWJsZSkgPT4ge1xuICAgICAgZWRpdGFibGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5uZXdEZXNjcmlwdGlvbiA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZWRpdGFibGVzLmZvckVhY2goKGVkaXRhYmxlKSA9PiB7XG4gICAgICBlZGl0YWJsZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5uZXdEZXNjcmlwdGlvbikge1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrTW9kZWwudGFza3NbTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSldO1xuICAgICAgICAgIFRhc2tNb2RlbC5lZGl0VGFzayh0YXNrLCB0aGlzLm5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgICB0aGlzLm5ld0Rlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBoYW5kbGVEZWxldGVUYXNrKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUnKS5mb3JFYWNoKChkZWxCdG4pID0+IHtcbiAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IFsuLi5UYXNrTW9kZWwudGFza3NdO1xuICAgICAgICB0YXNrcy5zcGxpY2UoTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgLSAxLCAxKTtcbiAgICAgICAgcmVmYWN0b3JJbmRleCh0YXNrcyk7XG4gICAgICAgIFRhc2tNb2RlbC50YXNrcyA9IHRhc2tzO1xuICAgICAgICBUYXNrTW9kZWwucmVmcmVzaFN0b3JhZ2UoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgaW5pdCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpIHtcbiAgICAgIFRhc2tNb2RlbC5yZWZyZXNoU3RvcmFnZSgpO1xuICAgIH1cbiAgICB0aGlzLnRhc2tWaWV3LnNob3dUYXNrcyhUYXNrTW9kZWwudGFza3MpO1xuICAgIGRyYWdIYW5kbGVyKFRhc2tNb2RlbC50YXNrcyk7XG4gICAgdGhpcy5oYW5kbGVBZGRUYXNrKCk7XG4gICAgdGhpcy5oYW5kbGV0b2dnbGVUYXNrU3RhdHVzKCk7XG4gICAgdGhpcy5oYW5kbGVDbGVhckNvbXBsZXRlZCgpO1xuICAgIHRoaXMuaGFuZGxlRWRpdFRhc2soKTtcbiAgICB0aGlzLmhhbmRsZURlbGV0ZVRhc2soKTtcbiAgfSxcbn0pOyIsImV4cG9ydCBkZWZhdWx0ICh0YWcsIGF0dHJpYnV0ZXMgPSB7fSwgdGV4dENvbnRlbnQgPSAnJykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICByZXR1cm4gZWxlbWVudDtcbn07IiwiaW1wb3J0IGdldEVsZW1lbnRBbGwgZnJvbSAnLi9nZXRFbGVtZW50QWxsJztcbmltcG9ydCBnZXRFbGVtZW50IGZyb20gJy4vZ2V0RWxlbWVudCc7XG5pbXBvcnQgcmVmYWN0b3JJbmRleCBmcm9tICcuL3JlZmFjdG9ySW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCAodGFza3MpID0+IHtcbiAgY29uc3QgdGFza0l0ZW1zID0gZ2V0RWxlbWVudEFsbCgnLnRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZ2V0RWxlbWVudCgnLnRhc2stbGlzdCcpO1xuICBsZXQgZHJhZ2dlZElkID0gMDtcbiAgbGV0IGRyYWdnZWRJdGVtID0gbnVsbDtcblxuICBjb25zdCBkcmFnQWZ0ZXJOb2RlID0gKGNvbnRhaW5lciwgeSkgPT4ge1xuICAgIGNvbnN0IGRyYWdnYWJsZU5vZGVzID0gWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpJyldO1xuXG4gICAgcmV0dXJuIGRyYWdnYWJsZU5vZGVzLnJlZHVjZSgoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHkgLSBjYXJkLnRvcCAtIChjYXJkLmhlaWdodCAvIDIpO1xuICAgICAgaWYgKG9mZnNldCA8IDAgJiYgb2Zmc2V0ID4gY2xvc2VzdC5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHsgb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgfSwgeyBvZmZzZXQ6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSB9KS5lbGVtZW50O1xuICB9O1xuXG4gIHRhc2tJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgZHJhZ2dlZElkID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICBkcmFnZ2VkSXRlbSA9IHRhc2tzLnNwbGljZShkcmFnZ2VkSWQgLSAxLCAxKTtcbiAgICB9KTtcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZnRlck5vZGUgPSBkcmFnQWZ0ZXJOb2RlKHRhc2tMaXN0LCBldmVudC5jbGllbnRZKTtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBnZXRFbGVtZW50KCcuZHJhZ2dpbmcnKTtcbiAgICBpZiAoYWZ0ZXJOb2RlKSB7XG4gICAgICB0YXNrTGlzdC5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlck5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWZ0ZXJOb2RlID0gZHJhZ0FmdGVyTm9kZSh0YXNrTGlzdCwgZXZlbnQuY2xpZW50WSk7XG4gICAgaWYgKCFhZnRlck5vZGUpIHtcbiAgICAgIHRhc2tzID0gWy4uLnRhc2tzLCAuLi5kcmFnZ2VkSXRlbV07XG4gICAgICByZWZhY3RvckluZGV4KHRhc2tzKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgfVxuXG4gICAgaWYgKGFmdGVyTm9kZSkge1xuICAgICAgaWYgKGRyYWdnZWRJZCA+IE51bWJlcihhZnRlck5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIC0gMSkge1xuICAgICAgICB0YXNrcy5zcGxpY2UoTnVtYmVyKGFmdGVyTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgLSAxLCAwLCBkcmFnZ2VkSXRlbVswXSk7XG4gICAgICAgIHJlZmFjdG9ySW5kZXgodGFza3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFza3Muc3BsaWNlKE51bWJlcihhZnRlck5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpIC0gMiwgMCwgZHJhZ2dlZEl0ZW1bMF0pO1xuICAgICAgICByZWZhY3RvckluZGV4KHRhc2tzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChzZWxlY3RvcikgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHJldHVybiBlbGVtZW50O1xufTsiLCJleHBvcnQgZGVmYXVsdCAoc2VsZWN0b3IpID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufTsiLCJleHBvcnQgZGVmYXVsdCAodGFza3MpID0+IHtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHRhc2suaW5kZXggPSB0YXNrcy5pbmRleE9mKHRhc2spICsgMTtcbiAgfSk7XG59OyIsImltcG9ydCBnZXRFbGVtZW50IGZyb20gJy4vZ2V0RWxlbWVudCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCAobWVzc2FnZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGlmIChnZXRFbGVtZW50KCcuYWxlcnQnKSkge1xuICAgIGdldEVsZW1lbnQoJy5hbGVydCcpLnJlbW92ZSgpO1xuICB9XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6IGBhbGVydCBhbGVydC0ke2NsYXNzTmFtZX1gIH0pO1xuICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgY2xhc3M6ICdhbGVydC1jbG9zZS1idG4nIH0sICdYJyk7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdldEVsZW1lbnQoJy5hbGVydCcpLnJlbW92ZSgpO1xuICB9KTtcbiAgZGl2LmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtZXNzYWdlKSwgY2xvc2VCdG4pO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShkaXYsIGdldEVsZW1lbnQoJy5tYWluJykpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTW9kZWwge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuaW5kZXggPSBUYXNrTW9kZWwudGFza3MubGVuZ3RoID4gMCA/IFRhc2tNb2RlbC50YXNrc1tcbiAgICAgIFRhc2tNb2RlbC50YXNrcy5sZW5ndGggLSAxXS5pbmRleCArIDEgOiAxO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlVGFza1N0YXR1cyh0YXNrKSB7XG4gICAgdGFzay5jb21wbGV0ZSA9ICF0YXNrLmNvbXBsZXRlO1xuICAgIFRhc2tNb2RlbC5yZWZyZXNoU3RvcmFnZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW11cblxuICBzdGF0aWMgcmVmcmVzaFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoVGFza01vZGVsLnRhc2tzKSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XG4gICAgVGFza01vZGVsLnRhc2tzLnB1c2godGFzayk7XG4gICAgVGFza01vZGVsLnJlZnJlc2hTdG9yYWdlKCk7XG4gIH1cblxuICBzdGF0aWMgZWRpdFRhc2sodGFzaywgbmV3RGVzY3JpcHRpb24pIHtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgVGFza01vZGVsLnJlZnJlc2hTdG9yYWdlKCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlVGFzayhpbmRleCkge1xuICAgIFRhc2tNb2RlbC50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIFRhc2tNb2RlbC5yZWZyZXNoU3RvcmFnZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgZ2V0RWxlbWVudCBmcm9tICcuLi9oZWxwZXJzL2dldEVsZW1lbnQnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vaGVscGVycy9jcmVhdGVFbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1ZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW4gPSBnZXRFbGVtZW50KCcubWFpbicpO1xuXG4gICAgdGhpcy5oZWFkZXJEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzOiAnaGVhZGVyLWRpdiBkLWZsZXgnIH0pO1xuICAgIHRoaXMuaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgeyB9LCBcIlRvZGF5J3MgVG8gRG9cIik7XG4gICAgdGhpcy5yZWZyZXNoRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ3JlZnJlc2gtZGl2JyB9KTtcbiAgICB0aGlzLnJlZnJlc2hJY29uID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3M6ICdtYXRlcmlhbC1pY29ucyByZWZyZXNoLWljb24nIH0sICdhdXRvcmVuZXcnKTtcbiAgICB0aGlzLnBlbmRpbmdDb3VudCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzOiAncGVuZGluZy1jb3VudCBkLWZsZXgnIH0pO1xuICAgIHRoaXMucmVmcmVzaERpdi5hcHBlbmQodGhpcy5yZWZyZXNoSWNvbiwgdGhpcy5wZW5kaW5nQ291bnQpO1xuICAgIHRoaXMuaGVhZGVyRGl2LmFwcGVuZCh0aGlzLmhlYWRpbmcsIHRoaXMucmVmcmVzaERpdik7XG5cbiAgICB0aGlzLnRhc2tGb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsIHsgY2xhc3M6ICd0YXNrLWZvcm0gZC1mbGV4JyB9KTtcbiAgICB0aGlzLmlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBwbGFjZWhvbGRlcjogJ0FkZCB0byB5b3VyIGxpc3QuLi4nLFxuICAgICAgY2xhc3M6ICdkZXNjSW5wdXQnLFxuICAgICAgbmFtZTogJ3Rhc2snLFxuICAgIH0pO1xuICAgIHRoaXMuc3VibWl0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICB0eXBlOiAnc3VibWl0JyxcbiAgICAgIHRhYmluZGV4OiAnLTEnLFxuICAgICAgdGl0bGU6ICdDbGljayB0aGlzIG9yIHByZXNzIGVudGVyIHRvIHN1Ym1pdC4nLFxuICAgIH0pO1xuICAgIHRoaXMuc3VibWl0LnZhbHVlID0gJ1xcdTIxQjInO1xuXG4gICAgdGhpcy50YXNrRm9ybS5hcHBlbmQodGhpcy5pbnB1dCwgdGhpcy5zdWJtaXQpO1xuXG4gICAgdGhpcy50YXNrTGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgeyBjbGFzczogJ3Rhc2stbGlzdCBkLWZsZXgnIH0pO1xuXG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgIGNsYXNzOiAnY2xlYXItYnV0dG9uJyxcbiAgICB9LCAnQ2xlYXIgYWxsIGNvbXBsZXRlZCcpO1xuXG4gICAgdGhpcy5tYWluLmFwcGVuZCh0aGlzLmhlYWRlckRpdiwgdGhpcy50YXNrRm9ybSwgdGhpcy50YXNrTGlzdCwgdGhpcy5jbGVhckJ1dHRvbik7XG4gIH1cblxuICBzaG93VGFza3ModGFza3MpIHtcbiAgICB3aGlsZSAodGhpcy50YXNrTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnRhc2tMaXN0LnJlbW92ZUNoaWxkKHRoaXMudGFza0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgdGhpcy5wZW5kaW5nQ291bnQudGV4dENvbnRlbnQgPSBgJHt0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGUgPT09IGZhbHNlKS5sZW5ndGh9YDtcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlIH0gPSB0YXNrO1xuXG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlRWxlbWVudCgnbGknLCB7IGNsYXNzOiAndGFzay1jb250YWluZXIgZC1mbGV4IGRyYWdnYWJsZScsICdkYXRhLWlkJzogYCR7aW5kZXh9YCwgZHJhZ2dhYmxlOiB0cnVlIH0pO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IHR5cGU6ICdjaGVja2JveCcsICdkYXRhLWlkJzogYCR7aW5kZXh9YCwgY2xhc3M6ICdjaGVja2JveCcgfSk7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBjb21wbGV0ZTtcblxuICAgICAgICBjb25zdCB0YXNrRGVzYyA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgICAgY29udGVudEVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNsYXNzOiBgJHt0YXNrLmNvbXBsZXRlID8gJ2VkaXRhYmxlIGNvbXBsZXRlJyA6ICdlZGl0YWJsZSd9YCxcbiAgICAgICAgICAnZGF0YS1pZCc6IGAke2luZGV4fWAsXG4gICAgICAgIH0sIGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgY2xhc3M6ICdkZWxldGUgbWF0ZXJpYWwtaWNvbnMgZGVsZXRlLWJ1dHRvbicsXG4gICAgICAgICAgJ2RhdGEtaWQnOiBgJHtpbmRleH1gLFxuICAgICAgICB9LCAnZGVsZXRlJyk7XG5cbiAgICAgICAgY29uc3QgZHJhZ0J1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICAgICBjbGFzczogJ21vcmVfdmVydCBtYXRlcmlhbC1pY29ucyBkcmFnLWJ1dHRvbicsXG4gICAgICAgICAgJ2RhdGEtaWQnOiBgJHtpbmRleH1gLFxuICAgICAgICAgIHRpdGxlOiAnSG9sZCBhbmQgZHJhZyBpdGVtLCBkcm9wIHRvIHJlb3JkZXIuJyxcbiAgICAgICAgfSwgJ21vcmVfdmVydCcpO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGVja2JveCwgdGFza0Rlc2MsIGRlbGV0ZUJ1dHRvbiwgZHJhZ0J1dHRvbik7XG4gICAgICAgIHRoaXMudGFza0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrQ29udHJvbGxlciBmcm9tICcuL2Fzc2V0cy9qcy9jb250cm9sbGVycy90YXNrQ29udHJvbGxlcic7XG5cblRhc2tDb250cm9sbGVyKCkuaW5pdCgpOyJdLCJzb3VyY2VSb290IjoiIn0=