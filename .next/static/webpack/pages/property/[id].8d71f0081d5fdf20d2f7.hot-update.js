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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/avatar */ \"./node_modules/@chakra-ui/avatar/dist/chakra-ui-avatar.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\n/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! millify */ \"./node_modules/millify/dist/millify.js\");\n/* harmony import */ var _components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ImageScrollbar */ \"./components/ImageScrollbar.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/workspace/REALESTATE/pages/property/[id].js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar PropertyDetails = function PropertyDetails(_ref) {\n  var _agency$logo;\n\n  var _ref$propertyDetails = _ref.propertyDetails,\n      price = _ref$propertyDetails.price,\n      rentFrequency = _ref$propertyDetails.rentFrequency,\n      rooms = _ref$propertyDetails.rooms,\n      title = _ref$propertyDetails.title,\n      baths = _ref$propertyDetails.baths,\n      area = _ref$propertyDetails.area,\n      agency = _ref$propertyDetails.agency,\n      isVerified = _ref$propertyDetails.isVerified,\n      description = _ref$propertyDetails.description,\n      type = _ref$propertyDetails.type,\n      purpose = _ref$propertyDetails.purpose,\n      furnishingStatus = _ref$propertyDetails.furnishingStatus,\n      amenities = _ref$propertyDetails.amenities,\n      photos = _ref$propertyDetails.photos;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    maxWidth: \"1000px\",\n    margin: \"auto\",\n    p: \"4\",\n    children: [photos && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_1__.default, {\n      data: photos\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 20\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      w: \"full\",\n      p: \"6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        paddingTop: \"2\",\n        alignItems: \"center\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {\n          paddingRight: \"3\",\n          color: \"green.400\",\n          children: isVerified && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_go__WEBPACK_IMPORTED_MODULE_4__.GoVerified, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 72\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Text, {\n          fontWeight: \"bold\",\n          fontSize: \"lg\",\n          children: [\"AED \", price, \" \", rentFrequency && \"/\".concat(rentFrequency)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n          size: \"sm\",\n          src: agency === null || agency === void 0 ? void 0 : (_agency$logo = agency.logo) === null || _agency$logo === void 0 ? void 0 : _agency$logo.url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        alignItems: \"center\",\n        p: \"1\",\n        justifyContent: \"space-between\",\n        w: \"250px\",\n        color: \"blue.400\",\n        children: [rooms, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBed, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 24\n        }, _this), \" | \", baths, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBath, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 44\n        }, _this), \" | \", (0,millify__WEBPACK_IMPORTED_MODULE_0__.default)(area), \" sqft \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsGridFill, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 78\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PropertyDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"PropertyDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRG9CO0FBQUEsQ0FBeEI7O0tBQU1QOztBQW9CTiwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9wZXJ0eS9baWRdLmpzP2RkOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBTcGFjZXIsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAY2hha3JhLXVpL2F2YXRhcic7XG5pbXBvcnQgeyBGYUJlZCwgRmFCYXRoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgQnNHcmlkRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcbmltcG9ydCB7IEdvVmVyaWZpZWQgfSBmcm9tICdyZWFjdC1pY29ucy9nbyc7XG5pbXBvcnQgbWlsbGlmeSBmcm9tICdtaWxsaWZ5JztcblxuaW1wb3J0IHsgYmFzZVVybCwgZmV0Y2hBcGkgfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaEFwaSc7XG5pbXBvcnQgSW1hZ2VTY3JvbGxiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbWFnZVNjcm9sbGJhcic7XG5cblxuY29uc3QgUHJvcGVydHlEZXRhaWxzID0gKHsgcHJvcGVydHlEZXRhaWxzOiB7IHByaWNlLCByZW50RnJlcXVlbmN5LCByb29tcywgdGl0bGUsIGJhdGhzLCBhcmVhLCBhZ2VuY3ksIGlzVmVyaWZpZWQsIGRlc2NyaXB0aW9uLCB0eXBlLCBwdXJwb3NlLCBmdXJuaXNoaW5nU3RhdHVzLCBhbWVuaXRpZXMsIHBob3RvcyB9IH0pID0+IChcbiAgICA8Qm94IG1heFdpZHRoPScxMDAwcHgnIG1hcmdpbj0nYXV0bycgcD0nNCc+XG4gICAgICAgIHtwaG90b3MgJiYgPEltYWdlU2Nyb2xsYmFyIGRhdGE9e3Bob3Rvc30gLz59XG4gICAgICAgIDxCb3ggdz0nZnVsbCcgcD0nNic+XG4gICAgICAgICAgICA8RmxleCBwYWRkaW5nVG9wPScyJyBhbGlnbkl0ZW1zPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIDxCb3ggcGFkZGluZ1JpZ2h0PSczJyBjb2xvcj0nZ3JlZW4uNDAwJz57aXNWZXJpZmllZCAmJiA8R29WZXJpZmllZCAvPn08L0JveD5cbiAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBmb250U2l6ZT0nbGcnPlxuICAgICAgICAgICAgICAgICAgICBBRUQge3ByaWNlfSB7cmVudEZyZXF1ZW5jeSAmJiBgLyR7cmVudEZyZXF1ZW5jeX1gfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPSdzbScgc3JjPXthZ2VuY3k/LmxvZ28/LnVybH0+PC9BdmF0YXI+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPSdjZW50ZXInIHA9JzEnIGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJyB3PScyNTBweCcgY29sb3I9J2JsdWUuNDAwJz5cbiAgICAgICAgICAgICAgICB7cm9vbXN9PEZhQmVkIC8+IHwge2JhdGhzfSA8RmFCYXRoIC8+IHwge21pbGxpZnkoYXJlYSl9IHNxZnQgPEJzR3JpZEZpbGwgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnR5RGV0YWlscztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtczogeyBpZCB9IH0pIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBcGkoYCR7YmFzZVVybH0vcHJvcGVydGllcy9kZXRhaWw/ZXh0ZXJuYWxJRD0ke2lkfWApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHByb3BlcnR5RGV0YWlsczogZGF0YVxuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6WyJCb3giLCJGbGV4IiwiU3BhY2VyIiwiVGV4dCIsIkF2YXRhciIsIkZhQmVkIiwiRmFCYXRoIiwiQnNHcmlkRmlsbCIsIkdvVmVyaWZpZWQiLCJtaWxsaWZ5IiwiSW1hZ2VTY3JvbGxiYXIiLCJQcm9wZXJ0eURldGFpbHMiLCJwcm9wZXJ0eURldGFpbHMiLCJwcmljZSIsInJlbnRGcmVxdWVuY3kiLCJyb29tcyIsInRpdGxlIiwiYmF0aHMiLCJhcmVhIiwiYWdlbmN5IiwiaXNWZXJpZmllZCIsImRlc2NyaXB0aW9uIiwidHlwZSIsInB1cnBvc2UiLCJmdXJuaXNoaW5nU3RhdHVzIiwiYW1lbml0aWVzIiwicGhvdG9zIiwibG9nbyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/property/[id].js\n");

/***/ })

});