"use strict";
(self["webpackChunkworse_weather"] = self["webpackChunkworse_weather"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n    --primary: #f70776; \n    --secondary: #c3195d; \n    --tertiary: #680747; \n    --quaternary: #141010; \n}\n\nhtml, body, div#content {\n    height: 100%;\n    width: 100%;\n    font-size: 16px;\n}\n\ndiv#content {\n\tfont-family: 'Kosugi Maru', sans-serif;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1.0rem;\n\ttransition: background-color 3.5s ease;\n}\n\ndiv#content > h1 {\n\tmargin-top: 3.2rem;\n\tfont-size: 2rem;\n\tfont-family: 'Oleo Script', cursive;\n}\n\ndiv.description {\n\ttext-align: center;\n}\n\ninput, button {\n\tz-index: 2;\n\tborder-radius: 10px;\n}\n\nimg {\n\tposition: absolute;\n\tbottom: 3px;\n\tleft: 3px;\n\twidth: 28%;\n\tborder-radius: 12px;\n}\n\nimg#currentWeatherIcon {\n\ttop: 3px;\n\tleft: 45%;\n\tmax-width: 10%;\n}\n\n.italics {\n\tfont-style: italic;\n}\n\ndiv#weatherReport {\n\ttext-align:center;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: repeat(5, 1fr);\n\theight: 45%;\n\talign-items: center;\n\tjustify-content: center;\n\trow-gap: 0.5rem;\n\tcolumn-gap: 0.75rem;\n}\n\ndiv.one {\n\tgrid-column: 1 / 2;\n\tgrid-row: 1 / 2;\n}\ndiv.two {\n\tgrid-column: 1 / 2;\n\tgrid-row: 2 / 3;\n}\ndiv.three {\n\tgrid-column: 1 / 2;\n\tgrid-row: 3 / 4;\n}\ndiv.four {\n\tgrid-column: 1 / 2;\n\tgrid-row: 4 / 5;\n}\ndiv.five {\n\tgrid-column: 1 / 2;\n\tgrid-row: 5 / 6;\n}\ndiv#feelsLike {\n\tgrid-column: 2 / 3;\n\tgrid-row: 1 / 2;\n}\ndiv#temp {\n\tgrid-column: 2 / 3;\n\tgrid-row: 2 / 3;\n}\ndiv#tempMax {\n\tgrid-column: 2 / 3;\n\tgrid-row: 3 / 4;\n}\ndiv#tempMin {\n\tgrid-column: 2 / 3;\n\tgrid-row: 4 / 5;\n}\ndiv#humidity {\n\tgrid-column: 2 / 3;\n\tgrid-row: 5 / 6;\n}\n\ndiv.result {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.result.active {\n\tanimation: myfadeIn 2s;  \n}\n\n.loader.active {\n\tborder-top: 16px solid lightblue;\n\tborder-right: 16px solid deepskyblue;\n\tborder-bottom: 16px solid orange;\n\tborder-left: 16px solid red;\n\tborder-radius: 50%;\n\twidth: 12px;\n\theight: 12px;\n\tz-index: 2;\n\tanimation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n\t0% { transform: rotate(0deg); }\n\t100% { transform: rotate(360deg); }\n}\n\n@keyframes myfadeIn {\n\t0%   { opacity: 0; }\n\t100% { opacity: 1; }\n}\n\n@media screen and (min-width: 510px) {\n\tdiv#content > h1 {\n\t\tmargin-top: 1.1rem;\n\t}\n\t\n\timg#currentWeatherIcon {\n\t\tposition: absolute;\n\t\ttop: 3px;\n\t\tleft: 0px;\n\t\tmax-height: 70px;\n\t\tmax-width: 70px;\n\t}\n}\n\n/* Make this the position when screen is wider\nimg {\n\tposition: absolute;\n\ttop: 3px;\n\tleft: 3px;\n\twidth: 25%;\n\tborder-radius: 12px;\n}*/", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;;AAEA;CACC,sCAAsC;CACtC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,WAAW;CACX,sCAAsC;AACvC;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,mCAAmC;AACpC;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,UAAU;CACV,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,SAAS;CACT,UAAU;CACV,mBAAmB;AACpB;;AAEA;CACC,QAAQ;CACR,SAAS;CACT,cAAc;AACf;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,8BAA8B;CAC9B,kCAAkC;CAClC,WAAW;CACX,mBAAmB;CACnB,uBAAuB;CACvB,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,kBAAkB;CAClB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;AACxB;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,gCAAgC;CAChC,oCAAoC;CACpC,gCAAgC;CAChC,2BAA2B;CAC3B,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,UAAU;CACV,kCAAkC;AACnC;;AAEA;CACC,KAAK,uBAAuB,EAAE;CAC9B,OAAO,yBAAyB,EAAE;AACnC;;AAEA;CACC,OAAO,UAAU,EAAE;CACnB,OAAO,UAAU,EAAE;AACpB;;AAEA;CACC;EACC,kBAAkB;CACnB;;CAEA;EACC,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gBAAgB;EAChB,eAAe;CAChB;AACD;;AAEA;;;;;;;EAOE","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n    --primary: #f70776; \n    --secondary: #c3195d; \n    --tertiary: #680747; \n    --quaternary: #141010; \n}\n\nhtml, body, div#content {\n    height: 100%;\n    width: 100%;\n    font-size: 16px;\n}\n\ndiv#content {\n\tfont-family: 'Kosugi Maru', sans-serif;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1.0rem;\n\ttransition: background-color 3.5s ease;\n}\n\ndiv#content > h1 {\n\tmargin-top: 3.2rem;\n\tfont-size: 2rem;\n\tfont-family: 'Oleo Script', cursive;\n}\n\ndiv.description {\n\ttext-align: center;\n}\n\ninput, button {\n\tz-index: 2;\n\tborder-radius: 10px;\n}\n\nimg {\n\tposition: absolute;\n\tbottom: 3px;\n\tleft: 3px;\n\twidth: 28%;\n\tborder-radius: 12px;\n}\n\nimg#currentWeatherIcon {\n\ttop: 3px;\n\tleft: 45%;\n\tmax-width: 10%;\n}\n\n.italics {\n\tfont-style: italic;\n}\n\ndiv#weatherReport {\n\ttext-align:center;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-template-rows: repeat(5, 1fr);\n\theight: 45%;\n\talign-items: center;\n\tjustify-content: center;\n\trow-gap: 0.5rem;\n\tcolumn-gap: 0.75rem;\n}\n\ndiv.one {\n\tgrid-column: 1 / 2;\n\tgrid-row: 1 / 2;\n}\ndiv.two {\n\tgrid-column: 1 / 2;\n\tgrid-row: 2 / 3;\n}\ndiv.three {\n\tgrid-column: 1 / 2;\n\tgrid-row: 3 / 4;\n}\ndiv.four {\n\tgrid-column: 1 / 2;\n\tgrid-row: 4 / 5;\n}\ndiv.five {\n\tgrid-column: 1 / 2;\n\tgrid-row: 5 / 6;\n}\ndiv#feelsLike {\n\tgrid-column: 2 / 3;\n\tgrid-row: 1 / 2;\n}\ndiv#temp {\n\tgrid-column: 2 / 3;\n\tgrid-row: 2 / 3;\n}\ndiv#tempMax {\n\tgrid-column: 2 / 3;\n\tgrid-row: 3 / 4;\n}\ndiv#tempMin {\n\tgrid-column: 2 / 3;\n\tgrid-row: 4 / 5;\n}\ndiv#humidity {\n\tgrid-column: 2 / 3;\n\tgrid-row: 5 / 6;\n}\n\ndiv.result {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.result.active {\n\tanimation: myfadeIn 2s;  \n}\n\n.loader.active {\n\tborder-top: 16px solid lightblue;\n\tborder-right: 16px solid deepskyblue;\n\tborder-bottom: 16px solid orange;\n\tborder-left: 16px solid red;\n\tborder-radius: 50%;\n\twidth: 12px;\n\theight: 12px;\n\tz-index: 2;\n\tanimation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n\t0% { transform: rotate(0deg); }\n\t100% { transform: rotate(360deg); }\n}\n\n@keyframes myfadeIn {\n\t0%   { opacity: 0; }\n\t100% { opacity: 1; }\n}\n\n@media screen and (min-width: 510px) {\n\tdiv#content > h1 {\n\t\tmargin-top: 1.1rem;\n\t}\n\t\n\timg#currentWeatherIcon {\n\t\tposition: absolute;\n\t\ttop: 3px;\n\t\tleft: 0px;\n\t\tmax-height: 70px;\n\t\tmax-width: 70px;\n\t}\n}\n\n/* Make this the position when screen is wider\nimg {\n\tposition: absolute;\n\ttop: 3px;\n\tleft: 3px;\n\twidth: 25%;\n\tborder-radius: 12px;\n}*/"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logictodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logictodo.js */ "./src/logictodo.js");


(0,_logictodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/logictodo.js":
/*!**************************!*\
  !*** ./src/logictodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ logictodo)
/* harmony export */ });
/* harmony import */ var _hot_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hot.jpg */ "./src/hot.jpg");
/* harmony import */ var _freezing_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freezing.jpg */ "./src/freezing.jpg");
/* harmony import */ var _spring_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spring.jpg */ "./src/spring.jpg");
/* harmony import */ var _beach_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beach.jpg */ "./src/beach.jpg");





function logictodo() {

    const feelsLikeBox = document.getElementById("feelsLike");
    const tempBox = document.getElementById("temp");
    const humidityBox = document.getElementById("humidity");
    const tempMaxBox = document.getElementById("tempMax");
    const tempMinBox = document.getElementById("tempMin");
    const mainContent = document.getElementById("content");
    const allResults = document.getElementsByClassName("result");
    const img = document.querySelectorAll('img')[1];
    const inputBox = document.getElementById("userInput");
    const currentIcon = document.getElementById("currentWeatherIcon");
    let outerTempHolder = null;

    function changeBasedOnTemp(x) {
        if (x <= 32) {
            mainContent.style.backgroundColor = "lightblue";
            return "freezing";
        } else if (x > 32 && x <= 55) {
            mainContent.style.backgroundColor = "deepskyblue";
            return "cold";
        } else if (x > 55 && x <= 85) {
            mainContent.style.backgroundColor = "orange";
            return "fair";
        } else {
            mainContent.style.backgroundColor = "red";
            return "hot";
        }
    }

    function showLoaders() {

        Array.prototype.forEach.call(allResults, function(ek) {
            ek.classList.remove("active");
            ek.firstChild.textContent = "";
        });

        let allLoaderList = document.querySelectorAll("div.loader");
        let allLoaderArray = [...allLoaderList];
        console.log(allLoaderArray);
        console.log("Show loaders is running");
        allLoaderArray.forEach(div => {
            div.classList.add("active");
        })

        
        /* Array.prototype.forEach.call(allLoaders, function(el) {
            el.classList.add("active");
        });  */

    }

    function hideLoaders() {
        let allActiveLoaderList = document.querySelectorAll("div.loader.active");
        let allActiveLoaderListArray = [...allActiveLoaderList];
        console.log(allActiveLoaderListArray);
        console.log("Hiding loaders now");
        allActiveLoaderListArray.forEach(div => {
            div.classList.remove("active");
        })

        /* Array.prototype.forEach.call(allLoadersActive, function(el) {
            el.classList.remove("active");
        }); */
        Array.prototype.forEach.call(allResults, function(ek) {
            ek.classList.add("active");
        });
    }

    function getCurrentDate() {
        let date = new Date();
        let formattedDate = date.toLocaleDateString();
        let afterSplit = formattedDate.split('/', 3);
        let paddedMonth = afterSplit[0].padStart(2, '0');
        let paddedDay = afterSplit[1].padStart(2, '0');
        let year = afterSplit[2];
        let yearMonthDate = `${year}-${paddedMonth}-${paddedDay}`;
        console.log(yearMonthDate);
        return yearMonthDate;
    }

    async function loaderToggle() {
        try {
            showLoaders();
            setTimeout(hideLoaders, 2000);
            setTimeout(getWeather, 2000);
        } catch(err) {
            console.error("Error: ", err);
        }
    }

    function errorFunct() {
        Array.prototype.forEach.call(allResults, function(ek) {
            ek.innerHTML = "?";
        });
    }

    async function getWeather() {
        try {
            let userZip = document.getElementById("userInput").value;
            let receivedData = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${userZip},US&appid=5b7cf4c0eefb20aaa663f88ac0154898`, {mode: 'cors'});
            let objectData = await receivedData.json();
            let receivedLon = objectData.lon;
            let receivedLat = objectData.lat;
            let actualWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${receivedLat}&lon=${receivedLon}&appid=5b7cf4c0eefb20aaa663f88ac0154898&units=imperial`, {mode: 'cors'});
            let actualWeatherObj = await actualWeather.json();
            let actualTemp = actualWeatherObj.main.temp;
            let weatherTypeFiller = actualWeatherObj.weather[0].icon;
            let imageToBeUsed = `https://openweathermap.org/img/wn/${weatherTypeFiller}@2x.png`;
            currentIcon.src = imageToBeUsed;
            outerTempHolder = actualTemp;
            //keeps loader div within result div
            feelsLikeBox.innerHTML = actualWeatherObj.main.feels_like + ' &#8457; <div class="loader"></div>';
            tempBox.innerHTML = actualTemp + ' &#8457; <div class="loader"></div>';
            tempMaxBox.innerHTML = actualWeatherObj.main.temp_max + ' &#8457; <div class="loader"></div>';
            tempMinBox.innerHTML = actualWeatherObj.main.temp_min + ' &#8457; <div class="loader"></div>';
            humidityBox.innerHTML = actualWeatherObj.main.humidity + ' % <div class="loader"></div>';
            changeBasedOnTemp(actualTemp);
            getGIF(actualTemp);
            console.log("Weather info & GIF gotten");
        }
        catch(err) {
            console.error("Error: ", err);
            errorFunct();
            img.src = "https://img.freepik.com/free-vector/404-error-background-with-ufo_23-2147767954.jpg?w=740&t=st=1678300372~exp=1678300972~hmac=3ee0fa94e3ea67235e03c924ed6157d15a098c791d4c4fa24000c0ac1551c9d2"
        }
    }

    async function getGIF(someTemp) {
        try {
            let input = null;
            if (changeBasedOnTemp(someTemp) === "freezing") {
                input = "ice";
            } else if (changeBasedOnTemp(someTemp) === "cold") {
                input = "chilly";
            } else if (changeBasedOnTemp(someTemp) === "fair") {
                input = "nice";
            } else if (changeBasedOnTemp(someTemp) === "hot") {
                input = "sweaty";
            } 

            let received = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=rjqZcTcJCZEClcVEhczepJ9Vz0M1NLsi&s=${input}`, {mode: 'cors'});
            let Data = await received.json();
            img.src = Data.data.images.original.url;
        }
  
        catch (error) {
          console.error("Error:", error);
          img.src = "https://img.freepik.com/free-vector/404-error-background-with-ufo_23-2147767954.jpg?w=740&t=st=1678300372~exp=1678300972~hmac=3ee0fa94e3ea67235e03c924ed6157d15a098c791d4c4fa24000c0ac1551c9d2"
        }
    }

    async function combinedFuncts() {
        let firstPromise = loaderToggle();
        //firstPromise.then(getWeather());
        return firstPromise;
    }

    const generateWeatherBtn = document.getElementById("weatherBtn");
    generateWeatherBtn.addEventListener('click', combinedFuncts)

    inputBox.addEventListener('keydown', e => {
        console.log(isFinite(e.key));
        if (!isFinite(e.key)) {
            if (e.key !==  "Backspace") {
                e.preventDefault();
            }
        } 
        //let toBeTyped = Number.isFinite(e);
    })
}

/***/ }),

/***/ "./src/beach.jpg":
/*!***********************!*\
  !*** ./src/beach.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe87ad9b67af25ccfe0e.jpg";

/***/ }),

/***/ "./src/freezing.jpg":
/*!**************************!*\
  !*** ./src/freezing.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a68e074a29bb0067865d.jpg";

/***/ }),

/***/ "./src/hot.jpg":
/*!*********************!*\
  !*** ./src/hot.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f54f895edefbfa09183.jpg";

/***/ }),

/***/ "./src/spring.jpg":
/*!************************!*\
  !*** ./src/spring.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8db5e95f8eeb7413072.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsNkhBQTZILE1BQU0sSUFBSSxhQUFhO0FBQ3BKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcnNlLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dvcnNlLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dvcnNlLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93b3JzZS13ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dvcnNlLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd29yc2Utd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd29yc2Utd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93b3JzZS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dvcnNlLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93b3JzZS13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd29yc2Utd2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93b3JzZS13ZWF0aGVyLy4vc3JjL2xvZ2ljdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogI2Y3MDc3NjsgXFxuICAgIC0tc2Vjb25kYXJ5OiAjYzMxOTVkOyBcXG4gICAgLS10ZXJ0aWFyeTogIzY4MDc0NzsgXFxuICAgIC0tcXVhdGVybmFyeTogIzE0MTAxMDsgXFxufVxcblxcbmh0bWwsIGJvZHksIGRpdiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5kaXYjY29udGVudCB7XFxuXFx0Zm9udC1mYW1pbHk6ICdLb3N1Z2kgTWFydScsIHNhbnMtc2VyaWY7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMS4wcmVtO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMy41cyBlYXNlO1xcbn1cXG5cXG5kaXYjY29udGVudCA+IGgxIHtcXG5cXHRtYXJnaW4tdG9wOiAzLjJyZW07XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiAnT2xlbyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG5kaXYuZGVzY3JpcHRpb24ge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbiB7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5pbWcge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDNweDtcXG5cXHRsZWZ0OiAzcHg7XFxuXFx0d2lkdGg6IDI4JTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG5pbWcjY3VycmVudFdlYXRoZXJJY29uIHtcXG5cXHR0b3A6IDNweDtcXG5cXHRsZWZ0OiA0NSU7XFxuXFx0bWF4LXdpZHRoOiAxMCU7XFxufVxcblxcbi5pdGFsaWNzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmRpdiN3ZWF0aGVyUmVwb3J0IHtcXG5cXHR0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcblxcdGhlaWdodDogNDUlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cm93LWdhcDogMC41cmVtO1xcblxcdGNvbHVtbi1nYXA6IDAuNzVyZW07XFxufVxcblxcbmRpdi5vbmUge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXHRncmlkLXJvdzogMSAvIDI7XFxufVxcbmRpdi50d28ge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXHRncmlkLXJvdzogMiAvIDM7XFxufVxcbmRpdi50aHJlZSB7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAyO1xcblxcdGdyaWQtcm93OiAzIC8gNDtcXG59XFxuZGl2LmZvdXIge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXHRncmlkLXJvdzogNCAvIDU7XFxufVxcbmRpdi5maXZlIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIDI7XFxuXFx0Z3JpZC1yb3c6IDUgLyA2O1xcbn1cXG5kaXYjZmVlbHNMaWtlIHtcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0Z3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5kaXYjdGVtcCB7XFxuXFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xcblxcdGdyaWQtcm93OiAyIC8gMztcXG59XFxuZGl2I3RlbXBNYXgge1xcblxcdGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXHRncmlkLXJvdzogMyAvIDQ7XFxufVxcbmRpdiN0ZW1wTWluIHtcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0Z3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5kaXYjaHVtaWRpdHkge1xcblxcdGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXHRncmlkLXJvdzogNSAvIDY7XFxufVxcblxcbmRpdi5yZXN1bHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3VsdC5hY3RpdmUge1xcblxcdGFuaW1hdGlvbjogbXlmYWRlSW4gMnM7ICBcXG59XFxuXFxuLmxvYWRlci5hY3RpdmUge1xcblxcdGJvcmRlci10b3A6IDE2cHggc29saWQgbGlnaHRibHVlO1xcblxcdGJvcmRlci1yaWdodDogMTZweCBzb2xpZCBkZWVwc2t5Ymx1ZTtcXG5cXHRib3JkZXItYm90dG9tOiAxNnB4IHNvbGlkIG9yYW5nZTtcXG5cXHRib3JkZXItbGVmdDogMTZweCBzb2xpZCByZWQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHdpZHRoOiAxMnB4O1xcblxcdGhlaWdodDogMTJweDtcXG5cXHR6LWluZGV4OiAyO1xcblxcdGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuXFx0MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcblxcdDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgbXlmYWRlSW4ge1xcblxcdDAlICAgeyBvcGFjaXR5OiAwOyB9XFxuXFx0MTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTEwcHgpIHtcXG5cXHRkaXYjY29udGVudCA+IGgxIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxLjFyZW07XFxuXFx0fVxcblxcdFxcblxcdGltZyNjdXJyZW50V2VhdGhlckljb24ge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR0b3A6IDNweDtcXG5cXHRcXHRsZWZ0OiAwcHg7XFxuXFx0XFx0bWF4LWhlaWdodDogNzBweDtcXG5cXHRcXHRtYXgtd2lkdGg6IDcwcHg7XFxuXFx0fVxcbn1cXG5cXG4vKiBNYWtlIHRoaXMgdGhlIHBvc2l0aW9uIHdoZW4gc2NyZWVuIGlzIHdpZGVyXFxuaW1nIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAzcHg7XFxuXFx0bGVmdDogM3B4O1xcblxcdHdpZHRoOiAyNSU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXG59Ki9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtDQUNDLHNDQUFzQztDQUN0QyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsVUFBVTtDQUNWLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztDQUNULFVBQVU7Q0FDVixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxRQUFRO0NBQ1IsU0FBUztDQUNULGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLGtDQUFrQztDQUNsQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdDQUFnQztDQUNoQyxvQ0FBb0M7Q0FDcEMsZ0NBQWdDO0NBQ2hDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixVQUFVO0NBQ1Ysa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsS0FBSyx1QkFBdUIsRUFBRTtDQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ25DOztBQUVBO0NBQ0MsT0FBTyxVQUFVLEVBQUU7Q0FDbkIsT0FBTyxVQUFVLEVBQUU7QUFDcEI7O0FBRUE7Q0FDQztFQUNDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBQ0Q7O0FBRUE7Ozs7Ozs7RUFPRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6ICNmNzA3NzY7IFxcbiAgICAtLXNlY29uZGFyeTogI2MzMTk1ZDsgXFxuICAgIC0tdGVydGlhcnk6ICM2ODA3NDc7IFxcbiAgICAtLXF1YXRlcm5hcnk6ICMxNDEwMTA7IFxcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYjY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcblxcdGZvbnQtZmFtaWx5OiAnS29zdWdpIE1hcnUnLCBzYW5zLXNlcmlmO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDEuMHJlbTtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMuNXMgZWFzZTtcXG59XFxuXFxuZGl2I2NvbnRlbnQgPiBoMSB7XFxuXFx0bWFyZ2luLXRvcDogMy4ycmVtO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LWZhbWlseTogJ09sZW8gU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuZGl2LmRlc2NyaXB0aW9uIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0LCBidXR0b24ge1xcblxcdHotaW5kZXg6IDI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaW1nIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAzcHg7XFxuXFx0bGVmdDogM3B4O1xcblxcdHdpZHRoOiAyOCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuaW1nI2N1cnJlbnRXZWF0aGVySWNvbiB7XFxuXFx0dG9wOiAzcHg7XFxuXFx0bGVmdDogNDUlO1xcblxcdG1heC13aWR0aDogMTAlO1xcbn1cXG5cXG4uaXRhbGljcyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5kaXYjd2VhdGhlclJlcG9ydCB7XFxuXFx0dGV4dC1hbGlnbjpjZW50ZXI7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG5cXHRoZWlnaHQ6IDQ1JTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHJvdy1nYXA6IDAuNXJlbTtcXG5cXHRjb2x1bW4tZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG5kaXYub25lIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIDI7XFxuXFx0Z3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5kaXYudHdvIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIDI7XFxuXFx0Z3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5kaXYudGhyZWUge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXHRncmlkLXJvdzogMyAvIDQ7XFxufVxcbmRpdi5mb3VyIHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIDI7XFxuXFx0Z3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5kaXYuZml2ZSB7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAyO1xcblxcdGdyaWQtcm93OiA1IC8gNjtcXG59XFxuZGl2I2ZlZWxzTGlrZSB7XFxuXFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xcblxcdGdyaWQtcm93OiAxIC8gMjtcXG59XFxuZGl2I3RlbXAge1xcblxcdGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXHRncmlkLXJvdzogMiAvIDM7XFxufVxcbmRpdiN0ZW1wTWF4IHtcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0Z3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5kaXYjdGVtcE1pbiB7XFxuXFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xcblxcdGdyaWQtcm93OiA0IC8gNTtcXG59XFxuZGl2I2h1bWlkaXR5IHtcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0Z3JpZC1yb3c6IDUgLyA2O1xcbn1cXG5cXG5kaXYucmVzdWx0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yZXN1bHQuYWN0aXZlIHtcXG5cXHRhbmltYXRpb246IG15ZmFkZUluIDJzOyAgXFxufVxcblxcbi5sb2FkZXIuYWN0aXZlIHtcXG5cXHRib3JkZXItdG9wOiAxNnB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG5cXHRib3JkZXItcmlnaHQ6IDE2cHggc29saWQgZGVlcHNreWJsdWU7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCBvcmFuZ2U7XFxuXFx0Ym9yZGVyLWxlZnQ6IDE2cHggc29saWQgcmVkO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR3aWR0aDogMTJweDtcXG5cXHRoZWlnaHQ6IDEycHg7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcblxcdDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG5cXHQxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG15ZmFkZUluIHtcXG5cXHQwJSAgIHsgb3BhY2l0eTogMDsgfVxcblxcdDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUxMHB4KSB7XFxuXFx0ZGl2I2NvbnRlbnQgPiBoMSB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMS4xcmVtO1xcblxcdH1cXG5cXHRcXG5cXHRpbWcjY3VycmVudFdlYXRoZXJJY29uIHtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0dG9wOiAzcHg7XFxuXFx0XFx0bGVmdDogMHB4O1xcblxcdFxcdG1heC1oZWlnaHQ6IDcwcHg7XFxuXFx0XFx0bWF4LXdpZHRoOiA3MHB4O1xcblxcdH1cXG59XFxuXFxuLyogTWFrZSB0aGlzIHRoZSBwb3NpdGlvbiB3aGVuIHNjcmVlbiBpcyB3aWRlclxcbmltZyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogM3B4O1xcblxcdGxlZnQ6IDNweDtcXG5cXHR3aWR0aDogMjUlO1xcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxufSovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9naWN0b2RvIGZyb20gJy4vbG9naWN0b2RvLmpzJztcbmxvZ2ljdG9kbygpO1xuIiwiaW1wb3J0IGhvdEljb24gZnJvbSAnLi9ob3QuanBnJztcbmltcG9ydCBmcmVlemVJY29uIGZyb20gJy4vZnJlZXppbmcuanBnJztcbmltcG9ydCBzcHJpbmdJY29uIGZyb20gJy4vc3ByaW5nLmpwZyc7XG5pbXBvcnQgYmVhY2hJY29uIGZyb20gJy4vYmVhY2guanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naWN0b2RvKCkge1xuXG4gICAgY29uc3QgZmVlbHNMaWtlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIik7XG4gICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgICBjb25zdCBodW1pZGl0eUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG4gICAgY29uc3QgdGVtcE1heEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcE1heFwiKTtcbiAgICBjb25zdCB0ZW1wTWluQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wTWluXCIpO1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVzdWx0XCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpWzFdO1xuICAgIGNvbnN0IGlucHV0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySW5wdXRcIik7XG4gICAgY29uc3QgY3VycmVudEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRXZWF0aGVySWNvblwiKTtcbiAgICBsZXQgb3V0ZXJUZW1wSG9sZGVyID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZUJhc2VkT25UZW1wKHgpIHtcbiAgICAgICAgaWYgKHggPD0gMzIpIHtcbiAgICAgICAgICAgIG1haW5Db250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRibHVlXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJmcmVlemluZ1wiO1xuICAgICAgICB9IGVsc2UgaWYgKHggPiAzMiAmJiB4IDw9IDU1KSB7XG4gICAgICAgICAgICBtYWluQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRlZXBza3libHVlXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJjb2xkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoeCA+IDU1ICYmIHggPD0gODUpIHtcbiAgICAgICAgICAgIG1haW5Db250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJmYWlyXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiaG90XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TG9hZGVycygpIHtcblxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFsbFJlc3VsdHMsIGZ1bmN0aW9uKGVrKSB7XG4gICAgICAgICAgICBlay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZWsuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBhbGxMb2FkZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5sb2FkZXJcIik7XG4gICAgICAgIGxldCBhbGxMb2FkZXJBcnJheSA9IFsuLi5hbGxMb2FkZXJMaXN0XTtcbiAgICAgICAgY29uc29sZS5sb2coYWxsTG9hZGVyQXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNob3cgbG9hZGVycyBpcyBydW5uaW5nXCIpO1xuICAgICAgICBhbGxMb2FkZXJBcnJheS5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgLyogQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhbGxMb2FkZXJzLCBmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7ICAqL1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcnMoKSB7XG4gICAgICAgIGxldCBhbGxBY3RpdmVMb2FkZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5sb2FkZXIuYWN0aXZlXCIpO1xuICAgICAgICBsZXQgYWxsQWN0aXZlTG9hZGVyTGlzdEFycmF5ID0gWy4uLmFsbEFjdGl2ZUxvYWRlckxpc3RdO1xuICAgICAgICBjb25zb2xlLmxvZyhhbGxBY3RpdmVMb2FkZXJMaXN0QXJyYXkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhpZGluZyBsb2FkZXJzIG5vd1wiKTtcbiAgICAgICAgYWxsQWN0aXZlTG9hZGVyTGlzdEFycmF5LmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8qIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYWxsTG9hZGVyc0FjdGl2ZSwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pOyAqL1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFsbFJlc3VsdHMsIGZ1bmN0aW9uKGVrKSB7XG4gICAgICAgICAgICBlay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50RGF0ZSgpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIGxldCBhZnRlclNwbGl0ID0gZm9ybWF0dGVkRGF0ZS5zcGxpdCgnLycsIDMpO1xuICAgICAgICBsZXQgcGFkZGVkTW9udGggPSBhZnRlclNwbGl0WzBdLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCBwYWRkZWREYXkgPSBhZnRlclNwbGl0WzFdLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGxldCB5ZWFyID0gYWZ0ZXJTcGxpdFsyXTtcbiAgICAgICAgbGV0IHllYXJNb250aERhdGUgPSBgJHt5ZWFyfS0ke3BhZGRlZE1vbnRofS0ke3BhZGRlZERheX1gO1xuICAgICAgICBjb25zb2xlLmxvZyh5ZWFyTW9udGhEYXRlKTtcbiAgICAgICAgcmV0dXJuIHllYXJNb250aERhdGU7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZGVyVG9nZ2xlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hvd0xvYWRlcnMoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlcnMsIDIwMDApO1xuICAgICAgICAgICAgc2V0VGltZW91dChnZXRXZWF0aGVyLCAyMDAwKTtcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvckZ1bmN0KCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFsbFJlc3VsdHMsIGZ1bmN0aW9uKGVrKSB7XG4gICAgICAgICAgICBlay5pbm5lckhUTUwgPSBcIj9cIjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VyWmlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VySW5wdXRcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgcmVjZWl2ZWREYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL3ppcD96aXA9JHt1c2VyWmlwfSxVUyZhcHBpZD01YjdjZjRjMGVlZmIyMGFhYTY2M2Y4OGFjMDE1NDg5OGAsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgICAgIGxldCBvYmplY3REYXRhID0gYXdhaXQgcmVjZWl2ZWREYXRhLmpzb24oKTtcbiAgICAgICAgICAgIGxldCByZWNlaXZlZExvbiA9IG9iamVjdERhdGEubG9uO1xuICAgICAgICAgICAgbGV0IHJlY2VpdmVkTGF0ID0gb2JqZWN0RGF0YS5sYXQ7XG4gICAgICAgICAgICBsZXQgYWN0dWFsV2VhdGhlciA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtyZWNlaXZlZExhdH0mbG9uPSR7cmVjZWl2ZWRMb259JmFwcGlkPTViN2NmNGMwZWVmYjIwYWFhNjYzZjg4YWMwMTU0ODk4JnVuaXRzPWltcGVyaWFsYCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICAgICAgbGV0IGFjdHVhbFdlYXRoZXJPYmogPSBhd2FpdCBhY3R1YWxXZWF0aGVyLmpzb24oKTtcbiAgICAgICAgICAgIGxldCBhY3R1YWxUZW1wID0gYWN0dWFsV2VhdGhlck9iai5tYWluLnRlbXA7XG4gICAgICAgICAgICBsZXQgd2VhdGhlclR5cGVGaWxsZXIgPSBhY3R1YWxXZWF0aGVyT2JqLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgICAgICAgIGxldCBpbWFnZVRvQmVVc2VkID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJUeXBlRmlsbGVyfUAyeC5wbmdgO1xuICAgICAgICAgICAgY3VycmVudEljb24uc3JjID0gaW1hZ2VUb0JlVXNlZDtcbiAgICAgICAgICAgIG91dGVyVGVtcEhvbGRlciA9IGFjdHVhbFRlbXA7XG4gICAgICAgICAgICAvL2tlZXBzIGxvYWRlciBkaXYgd2l0aGluIHJlc3VsdCBkaXZcbiAgICAgICAgICAgIGZlZWxzTGlrZUJveC5pbm5lckhUTUwgPSBhY3R1YWxXZWF0aGVyT2JqLm1haW4uZmVlbHNfbGlrZSArICcgJiM4NDU3OyA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+JztcbiAgICAgICAgICAgIHRlbXBCb3guaW5uZXJIVE1MID0gYWN0dWFsVGVtcCArICcgJiM4NDU3OyA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+JztcbiAgICAgICAgICAgIHRlbXBNYXhCb3guaW5uZXJIVE1MID0gYWN0dWFsV2VhdGhlck9iai5tYWluLnRlbXBfbWF4ICsgJyAmIzg0NTc7IDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj4nO1xuICAgICAgICAgICAgdGVtcE1pbkJveC5pbm5lckhUTUwgPSBhY3R1YWxXZWF0aGVyT2JqLm1haW4udGVtcF9taW4gKyAnICYjODQ1NzsgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2Pic7XG4gICAgICAgICAgICBodW1pZGl0eUJveC5pbm5lckhUTUwgPSBhY3R1YWxXZWF0aGVyT2JqLm1haW4uaHVtaWRpdHkgKyAnICUgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2Pic7XG4gICAgICAgICAgICBjaGFuZ2VCYXNlZE9uVGVtcChhY3R1YWxUZW1wKTtcbiAgICAgICAgICAgIGdldEdJRihhY3R1YWxUZW1wKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2VhdGhlciBpbmZvICYgR0lGIGdvdHRlblwiKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycik7XG4gICAgICAgICAgICBlcnJvckZ1bmN0KCk7XG4gICAgICAgICAgICBpbWcuc3JjID0gXCJodHRwczovL2ltZy5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci80MDQtZXJyb3ItYmFja2dyb3VuZC13aXRoLXVmb18yMy0yMTQ3NzY3OTU0LmpwZz93PTc0MCZ0PXN0PTE2NzgzMDAzNzJ+ZXhwPTE2NzgzMDA5NzJ+aG1hYz0zZWUwZmE5NGUzZWE2NzIzNWUwM2M5MjRlZDYxNTdkMTVhMDk4Yzc5MWQ0YzRmYTI0MDAwYzBhYzE1NTFjOWQyXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEdJRihzb21lVGVtcCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChjaGFuZ2VCYXNlZE9uVGVtcChzb21lVGVtcCkgPT09IFwiZnJlZXppbmdcIikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gXCJpY2VcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlQmFzZWRPblRlbXAoc29tZVRlbXApID09PSBcImNvbGRcIikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gXCJjaGlsbHlcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhbmdlQmFzZWRPblRlbXAoc29tZVRlbXApID09PSBcImZhaXJcIikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gXCJuaWNlXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoYW5nZUJhc2VkT25UZW1wKHNvbWVUZW1wKSA9PT0gXCJob3RcIikge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gXCJzd2VhdHlcIjtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGxldCByZWNlaXZlZCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmFuc2xhdGU/YXBpX2tleT1yanFaY1RjSkNaRUNsY1ZFaGN6ZXBKOVZ6ME0xTkxzaSZzPSR7aW5wdXR9YCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICAgICAgbGV0IERhdGEgPSBhd2FpdCByZWNlaXZlZC5qc29uKCk7XG4gICAgICAgICAgICBpbWcuc3JjID0gRGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgIGltZy5zcmMgPSBcImh0dHBzOi8vaW1nLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yLzQwNC1lcnJvci1iYWNrZ3JvdW5kLXdpdGgtdWZvXzIzLTIxNDc3Njc5NTQuanBnP3c9NzQwJnQ9c3Q9MTY3ODMwMDM3Mn5leHA9MTY3ODMwMDk3Mn5obWFjPTNlZTBmYTk0ZTNlYTY3MjM1ZTAzYzkyNGVkNjE1N2QxNWEwOThjNzkxZDRjNGZhMjQwMDBjMGFjMTU1MWM5ZDJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY29tYmluZWRGdW5jdHMoKSB7XG4gICAgICAgIGxldCBmaXJzdFByb21pc2UgPSBsb2FkZXJUb2dnbGUoKTtcbiAgICAgICAgLy9maXJzdFByb21pc2UudGhlbihnZXRXZWF0aGVyKCkpO1xuICAgICAgICByZXR1cm4gZmlyc3RQcm9taXNlO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlV2VhdGhlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckJ0blwiKTtcbiAgICBnZW5lcmF0ZVdlYXRoZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb21iaW5lZEZ1bmN0cylcblxuICAgIGlucHV0Qm94LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaXNGaW5pdGUoZS5rZXkpKTtcbiAgICAgICAgaWYgKCFpc0Zpbml0ZShlLmtleSkpIHtcbiAgICAgICAgICAgIGlmIChlLmtleSAhPT0gIFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIC8vbGV0IHRvQmVUeXBlZCA9IE51bWJlci5pc0Zpbml0ZShlKTtcbiAgICB9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==