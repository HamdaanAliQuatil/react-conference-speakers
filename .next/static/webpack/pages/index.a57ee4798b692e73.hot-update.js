"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersToolbar.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakersToolbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SpeakersToolbar(param) {\n    var theme = param.theme, setTheme = param.setTheme;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), showSessions = ref[0], setShowSessions = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Session\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(e) {\n                                                return setShowSessions(e.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 18,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 15,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: theme,\n                                        onChange: function(e) {\n                                            return setTheme(e.target.value);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hamdaan\\\\Desktop\\\\react-conference-speakers\\\\src\\\\components\\\\SpeakersToolbar.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersToolbar, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBaUM7QUFFakMsU0FBU0MsZUFBZSxDQUFDLEtBRXhCLEVBQUM7UUFERUMsS0FBSyxHQURnQixLQUV4QixDQURHQSxLQUFLLEVBQUVDLFFBQVEsR0FETSxLQUV4QixDQURVQSxRQUFROztJQUVmLElBQXdDSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQS9DSSxZQUFZLEdBQXFCSixHQUFjLEdBQW5DLEVBQUVLLGVBQWUsR0FBSUwsR0FBYyxHQUFsQjtJQUdwQyxxQkFDSSw4REFBQ00sU0FBTztRQUFDQyxTQUFTLEVBQUMsMkJBQTJCO2tCQUMxQyw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsV0FBVztzQkFDdEIsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyx5QkFBeUI7MEJBQ3BDLDRFQUFDRSxJQUFFO29CQUNIRixTQUFTLEVBQUMsd0NBQXdDOztzQ0FDOUMsOERBQUNHLElBQUU7NEJBQUNILFNBQVMsRUFBQyxnQ0FBZ0M7OzhDQUMxQyw4REFBQ0ksR0FBQzs4Q0FBQyxzQkFBd0I7Ozs7O3dDQUFJOzhDQUMvQiw4REFBQ0MsT0FBSztvQ0FBQ0wsU0FBUyxFQUFDLEtBQUs7O3NEQUNsQiw4REFBQ00sT0FBSzs0Q0FBQ0MsSUFBSSxFQUFDLFVBQVU7NENBQ3RCQyxPQUFPLEVBQUVYLFlBQVk7NENBQ3JCWSxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzt1REFBS1osZUFBZSxDQUFDWSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDOzZDQUFBOzs7OztnREFDaEQ7c0RBQ04sOERBQUNJLE1BQUk7NENBQUNaLFNBQVMsRUFBQyxRQUFROzs7OztnREFBUTs7Ozs7O3dDQUN4Qjs7Ozs7O2dDQUNQO3NDQUNMLDhEQUFDRyxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsNkNBQTZDOzs4Q0FDdkQsOERBQUNhLFFBQU07OENBQUMsT0FBSzs7Ozs7d0NBQVM7OENBQ3RCLDhEQUFDUixPQUFLO29DQUFDTCxTQUFTLEVBQUMsVUFBVTs4Q0FDdkIsNEVBQUNjLFFBQU07d0NBQ1BkLFNBQVMsRUFBQyxvQkFBb0I7d0NBQzlCZSxLQUFLLEVBQUVwQixLQUFLO3dDQUNaYyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttREFBS2QsUUFBUSxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0ksS0FBSyxDQUFDO3lDQUFBOzswREFFckMsOERBQUNDLFFBQU07Z0RBQUNELEtBQUssRUFBQyxPQUFPOzBEQUFDLE9BQUs7Ozs7O29EQUFTOzBEQUNwQyw4REFBQ0MsUUFBTTtnREFBQ0QsS0FBSyxFQUFDLE1BQU07MERBQUMsTUFBSTs7Ozs7b0RBQVM7Ozs7Ozs0Q0FDN0I7Ozs7O3dDQUNMOzs7Ozs7Z0NBQ1A7Ozs7Ozt3QkFDSjs7Ozs7b0JBQ0g7Ozs7O2dCQUNKOzs7OztZQUNBLENBQ2I7QUFDTCxDQUFDO0dBeENRckIsZUFBZTtBQUFmQSxLQUFBQSxlQUFlO0FBMEN4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzVG9vbGJhci5qcz8xZWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2Vyc1Rvb2xiYXIoe1xyXG4gICAgdGhlbWUsIHNldFRoZW1lXHJcbn0pe1xyXG4gICAgY29uc3QgW3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b29scm93IGQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5TaG93IFNlc3Npb24mbmJzcDsmbmJzcDs8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dTZXNzaW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNob3dTZXNzaW9ucyhlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LW1kLXJvdyBtbC1zbS01IG1sLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGhlbWU8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRoZW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPkxpZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+RGFyazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNUb29sYmFyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNwZWFrZXJzVG9vbGJhciIsInRoZW1lIiwic2V0VGhlbWUiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwidWwiLCJsaSIsImIiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzcGFuIiwic3Ryb25nIiwic2VsZWN0IiwidmFsdWUiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolbar.js\n"));

/***/ })

});