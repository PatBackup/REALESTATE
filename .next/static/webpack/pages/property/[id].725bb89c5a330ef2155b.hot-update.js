"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/property/[id]",{

/***/ "./pages/property/[id].js":
/*!********************************!*\
  !*** ./pages/property/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/avatar */ \"./node_modules/@chakra-ui/avatar/dist/chakra-ui-avatar.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! millify */ \"./node_modules/millify/dist/millify.js\");\n/* harmony import */ var _components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ImageScrollbar */ \"./components/ImageScrollbar.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/workspace/REALESTATE/pages/property/[id].js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar PropertyDetails = function PropertyDetails(_ref) {\n  var _agency$logo;\n\n  var _ref$propertyDetails = _ref.propertyDetails,\n      price = _ref$propertyDetails.price,\n      rentFrequency = _ref$propertyDetails.rentFrequency,\n      rooms = _ref$propertyDetails.rooms,\n      title = _ref$propertyDetails.title,\n      baths = _ref$propertyDetails.baths,\n      area = _ref$propertyDetails.area,\n      agency = _ref$propertyDetails.agency,\n      isVerified = _ref$propertyDetails.isVerified,\n      description = _ref$propertyDetails.description,\n      type = _ref$propertyDetails.type,\n      purpose = _ref$propertyDetails.purpose,\n      furnishingStatus = _ref$propertyDetails.furnishingStatus,\n      amenities = _ref$propertyDetails.amenities,\n      photos = _ref$propertyDetails.photos;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    maxWidth: \"1000px\",\n    margin: \"auto\",\n    p: \"4\",\n    children: [photos && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_1__.default, {\n      data: photos\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 20\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      w: \"full\",\n      p: \"6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        paddingTop: \"2\",\n        alignItems: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n          paddingRight: \"3\",\n          color: \"green.400\",\n          children: isVerified && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_4__.GoVerified, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 64\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Text, {\n          fontWeight: \"bold\",\n          fontSize: \"lg\",\n          children: [\"AED \", price, \" \", rentFrequency && \"/\".concat(rentFrequency)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n          size: \"sm\",\n          src: agency === null || agency === void 0 ? void 0 : (_agency$logo = agency.logo) === null || _agency$logo === void 0 ? void 0 : _agency$logo.url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        alignItems: \"center\",\n        p: \"1\",\n        justifyContent: \"space-between\",\n        w: \"250px\",\n        color: \"blue.400\",\n        children: [rooms, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBed, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 16\n        }, _this), \" | \", baths, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBath, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 36\n        }, _this), \" | \", (0,millify__WEBPACK_IMPORTED_MODULE_0__.default)(area), \" sqft \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsGridFill, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 70\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PropertyDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"PropertyDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUF4Qjs7S0FBTVA7O0FBb0JOLCtEQUFlQSxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb3BlcnR5L1tpZF0uanM/ZGQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFNwYWNlciwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BjaGFrcmEtdWkvYXZhdGFyJztcbmltcG9ydCB7IEZhQmVkLCBGYUJhdGggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBCc0dyaWRGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuaW1wb3J0IHsgR29WZXJpZmllZCB9IGZyb20gJ3JlYWN0LWljb25zL2dvJztcbmltcG9ydCBtaWxsaWZ5IGZyb20gJ21pbGxpZnknO1xuXG5pbXBvcnQgeyBiYXNlVXJsLCBmZXRjaEFwaSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoQXBpJztcbmltcG9ydCBJbWFnZVNjcm9sbGJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlU2Nyb2xsYmFyJztcblxuXG5jb25zdCBQcm9wZXJ0eURldGFpbHMgPSAoeyBwcm9wZXJ0eURldGFpbHM6IHsgcHJpY2UsIHJlbnRGcmVxdWVuY3ksIHJvb21zLCB0aXRsZSwgYmF0aHMsIGFyZWEsIGFnZW5jeSwgaXNWZXJpZmllZCwgZGVzY3JpcHRpb24sIHR5cGUsIHB1cnBvc2UsIGZ1cm5pc2hpbmdTdGF0dXMsIGFtZW5pdGllcywgcGhvdG9zIH0gfSkgPT4gKFxuICAgIDxCb3ggbWF4V2lkdGg9JzEwMDBweCcgbWFyZ2luPSdhdXRvJyBwPSc0Jz5cbiAgICAgICAge3Bob3RvcyAmJiA8SW1hZ2VTY3JvbGxiYXIgZGF0YT17cGhvdG9zfSAvPn1cbiAgICAgICAgPEJveCB3PSdmdWxsJyBwPSc2Jz5cbiAgICAgIDxGbGV4IHBhZGRpbmdUb3A9JzInIGFsaWduSXRlbXM9J2NlbnRlcic+XG4gICAgICAgIDxCb3ggcGFkZGluZ1JpZ2h0PSczJyBjb2xvcj0nZ3JlZW4uNDAwJz57aXNWZXJpZmllZCAmJiA8R29WZXJpZmllZCAvPn08L0JveD5cbiAgICAgICAgPFRleHQgZm9udFdlaWdodD0nYm9sZCcgZm9udFNpemU9J2xnJz5cbiAgICAgICAgICBBRUQge3ByaWNlfSB7cmVudEZyZXF1ZW5jeSAmJiBgLyR7cmVudEZyZXF1ZW5jeX1gfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgPEF2YXRhciBzaXplPSdzbScgc3JjPXthZ2VuY3k/LmxvZ28/LnVybH0+PC9BdmF0YXI+XG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPSdjZW50ZXInIHA9JzEnIGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJyB3PScyNTBweCcgY29sb3I9J2JsdWUuNDAwJz5cbiAgICAgICAge3Jvb21zfTxGYUJlZCAvPiB8IHtiYXRoc30gPEZhQmF0aCAvPiB8IHttaWxsaWZ5KGFyZWEpfSBzcWZ0IDxCc0dyaWRGaWxsIC8+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5RGV0YWlscztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyAoe3BhcmFtczoge2lkfX0pIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBcGkoYCR7YmFzZVVybH0vcHJvcGVydGllcy9kZXRhaWw/ZXh0ZXJuYWxJRD0ke2lkfWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHByb3BlcnR5RGV0YWlsczogZGF0YVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJCb3giLCJGbGV4IiwiU3BhY2VyIiwiVGV4dCIsIkF2YXRhciIsIkZhQmVkIiwiRmFCYXRoIiwiQnNHcmlkRmlsbCIsIkdvVmVyaWZpZWQiLCJtaWxsaWZ5IiwiSW1hZ2VTY3JvbGxiYXIiLCJQcm9wZXJ0eURldGFpbHMiLCJwcm9wZXJ0eURldGFpbHMiLCJwcmljZSIsInJlbnRGcmVxdWVuY3kiLCJyb29tcyIsInRpdGxlIiwiYmF0aHMiLCJhcmVhIiwiYWdlbmN5IiwiaXNWZXJpZmllZCIsImRlc2NyaXB0aW9uIiwidHlwZSIsInB1cnBvc2UiLCJmdXJuaXNoaW5nU3RhdHVzIiwiYW1lbml0aWVzIiwicGhvdG9zIiwibG9nbyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/property/[id].js\n");

/***/ }),

/***/ "./node_modules/react-icons/bs/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/bs/index.esm.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


/***/ })

});