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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! millify */ \"./node_modules/millify/dist/millify.js\");\n/* harmony import */ var _components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ImageScrollbar */ \"./components/ImageScrollbar.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/workspace/REALESTATE/pages/property/[id].js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar PropertyDetails = function PropertyDetails(_ref) {\n  var _ref$propertyDetails = _ref.propertyDetails,\n      price = _ref$propertyDetails.price,\n      rentFrequency = _ref$propertyDetails.rentFrequency,\n      rooms = _ref$propertyDetails.rooms,\n      title = _ref$propertyDetails.title,\n      baths = _ref$propertyDetails.baths,\n      area = _ref$propertyDetails.area,\n      agency = _ref$propertyDetails.agency,\n      isVerified = _ref$propertyDetails.isVerified,\n      description = _ref$propertyDetails.description,\n      type = _ref$propertyDetails.type,\n      purpose = _ref$propertyDetails.purpose,\n      furnishingStatus = _ref$propertyDetails.furnishingStatus,\n      amenities = _ref$propertyDetails.amenities,\n      photos = _ref$propertyDetails.photos;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    maxWidth: \"1000px\",\n    margin: \"auto\",\n    p: \"4\",\n    children: [photos && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_1__.default, {\n      data: photos\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 20\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      paddingRight: \"3\",\n      color: \"green.400\",\n      children: isVerified && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_4__.GoVerified, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 64\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      fontWeight: \"bold\",\n      fontSize: \"lg\",\n      children: [\"AED \", (0,millify__WEBPACK_IMPORTED_MODULE_0__.default)(price), \" \", rentFrequency && \"/\".concat(rentFrequency)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PropertyDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"PropertyDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9wZXJ0eS9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OztBQUdBLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxrQ0FBR0MsZUFBSDtBQUFBLE1BQXNCQyxLQUF0Qix3QkFBc0JBLEtBQXRCO0FBQUEsTUFBNkJDLGFBQTdCLHdCQUE2QkEsYUFBN0I7QUFBQSxNQUE0Q0MsS0FBNUMsd0JBQTRDQSxLQUE1QztBQUFBLE1BQW1EQyxLQUFuRCx3QkFBbURBLEtBQW5EO0FBQUEsTUFBMERDLEtBQTFELHdCQUEwREEsS0FBMUQ7QUFBQSxNQUFpRUMsSUFBakUsd0JBQWlFQSxJQUFqRTtBQUFBLE1BQXVFQyxNQUF2RSx3QkFBdUVBLE1BQXZFO0FBQUEsTUFBK0VDLFVBQS9FLHdCQUErRUEsVUFBL0U7QUFBQSxNQUEyRkMsV0FBM0Ysd0JBQTJGQSxXQUEzRjtBQUFBLE1BQXdHQyxJQUF4Ryx3QkFBd0dBLElBQXhHO0FBQUEsTUFBOEdDLE9BQTlHLHdCQUE4R0EsT0FBOUc7QUFBQSxNQUF1SEMsZ0JBQXZILHdCQUF1SEEsZ0JBQXZIO0FBQUEsTUFBeUlDLFNBQXpJLHdCQUF5SUEsU0FBekk7QUFBQSxNQUFvSkMsTUFBcEosd0JBQW9KQSxNQUFwSjtBQUFBLHNCQUNwQiw4REFBQyxrREFBRDtBQUFLLFlBQVEsRUFBQyxRQUFkO0FBQXVCLFVBQU0sRUFBQyxNQUE5QjtBQUFxQyxLQUFDLEVBQUMsR0FBdkM7QUFBQSxlQUNLQSxNQUFNLGlCQUFJLDhEQUFDLCtEQUFEO0FBQWdCLFVBQUksRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURmLGVBRUksOERBQUMsa0RBQUQ7QUFBSyxrQkFBWSxFQUFDLEdBQWxCO0FBQXNCLFdBQUssRUFBQyxXQUE1QjtBQUFBLGdCQUF5Q04sVUFBVSxpQkFBSSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJLDhEQUFDLG1EQUFEO0FBQU0sZ0JBQVUsRUFBQyxNQUFqQjtBQUF3QixjQUFRLEVBQUMsSUFBakM7QUFBQSx5QkFDT1gsZ0RBQU8sQ0FBQ0ksS0FBRCxDQURkLE9BQ3dCQyxhQUFhLGVBQVFBLGFBQVIsQ0FEckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRG9CO0FBQUEsQ0FBeEI7O0tBQU1IOztBQVdOLCtEQUFlQSxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb3BlcnR5L1tpZF0uanM/ZGQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZsZXgsIFNwYWNlciwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BjaGFrcmEtdWkvYXZhdGFyJztcbmltcG9ydCB7IEZhQmVkLCBGYUJhdGggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBCc0dyaWRGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xuaW1wb3J0IHsgR29WZXJpZmllZCB9IGZyb20gJ3JlYWN0LWljb25zL2dvJztcbmltcG9ydCBtaWxsaWZ5IGZyb20gJ21pbGxpZnknO1xuXG5pbXBvcnQgeyBiYXNlVXJsLCBmZXRjaEFwaSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoQXBpJztcbmltcG9ydCBJbWFnZVNjcm9sbGJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltYWdlU2Nyb2xsYmFyJztcblxuXG5jb25zdCBQcm9wZXJ0eURldGFpbHMgPSAoeyBwcm9wZXJ0eURldGFpbHM6IHsgcHJpY2UsIHJlbnRGcmVxdWVuY3ksIHJvb21zLCB0aXRsZSwgYmF0aHMsIGFyZWEsIGFnZW5jeSwgaXNWZXJpZmllZCwgZGVzY3JpcHRpb24sIHR5cGUsIHB1cnBvc2UsIGZ1cm5pc2hpbmdTdGF0dXMsIGFtZW5pdGllcywgcGhvdG9zIH0gfSkgPT4gKFxuICAgIDxCb3ggbWF4V2lkdGg9JzEwMDBweCcgbWFyZ2luPSdhdXRvJyBwPSc0Jz5cbiAgICAgICAge3Bob3RvcyAmJiA8SW1hZ2VTY3JvbGxiYXIgZGF0YT17cGhvdG9zfSAvPn1cbiAgICAgICAgPEJveCBwYWRkaW5nUmlnaHQ9JzMnIGNvbG9yPSdncmVlbi40MDAnPntpc1ZlcmlmaWVkICYmIDxHb1ZlcmlmaWVkIC8+fTwvQm94PlxuICAgICAgICA8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBmb250U2l6ZT0nbGcnPlxuICAgICAgICAgIEFFRCB7bWlsbGlmeShwcmljZSl9IHtyZW50RnJlcXVlbmN5ICYmIGAvJHtyZW50RnJlcXVlbmN5fWB9XG4gICAgICAgIDwvVGV4dD5cbiAgICA8L0JveD5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlEZXRhaWxzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzICh7cGFyYW1zOiB7aWR9fSkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFwaShgJHtiYXNlVXJsfS9wcm9wZXJ0aWVzL2RldGFpbD9leHRlcm5hbElEPSR7aWR9YCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcHJvcGVydHlEZXRhaWxzOiBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIkJveCIsIkZsZXgiLCJTcGFjZXIiLCJUZXh0IiwiQXZhdGFyIiwiRmFCZWQiLCJGYUJhdGgiLCJCc0dyaWRGaWxsIiwiR29WZXJpZmllZCIsIm1pbGxpZnkiLCJJbWFnZVNjcm9sbGJhciIsIlByb3BlcnR5RGV0YWlscyIsInByb3BlcnR5RGV0YWlscyIsInByaWNlIiwicmVudEZyZXF1ZW5jeSIsInJvb21zIiwidGl0bGUiLCJiYXRocyIsImFyZWEiLCJhZ2VuY3kiLCJpc1ZlcmlmaWVkIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwicHVycG9zZSIsImZ1cm5pc2hpbmdTdGF0dXMiLCJhbWVuaXRpZXMiLCJwaG90b3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/property/[id].js\n");

/***/ })

});