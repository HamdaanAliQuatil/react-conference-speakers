self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Hamdaan\\Desktop\\react-conference-speakers\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();






function SpeakerList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useRequestSpeakers = useRequestSpeakers(2000),
      speakersData = _useRequestSpeakers.speakersData,
      request_s = _useRequestSpeakers.request_s,
      error = _useRequestSpeakers.error,
      _onFavouriteToggle = _useRequestSpeakers.onFavouriteToggle;

  if (hasErrored === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this);
  } // if (isLoading) return <div>Loading...</div>;


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_4__.default, {
      type: "media",
      rows: 10,
      ready: isLoading === false,
      className: "speakerslist-placeholder",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavouriteToggle: function onFavouriteToggle() {
              _onFavouriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 18
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_s(SpeakerList, "VvK+OVQRhTt9kA7pEslLdrmFXAQ=", true);

_c = SpeakerList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakerList);

var _c;

$RefreshReg$(_c, "SpeakerList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb25zIiwidXNlUmVxdWVzdFNwZWFrZXJzIiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdF9zIiwiZXJyb3IiLCJvbkZhdm91cml0ZVRvZ2dsZSIsImhhc0Vycm9yZWQiLCJpc0xvYWRpbmciLCJtYXAiLCJzcGVha2VyIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsNEJBS2pDQyxrQkFBa0IsQ0FBQyxJQUFELENBTGU7QUFBQSxNQUduQ0MsWUFIbUMsdUJBR25DQSxZQUhtQztBQUFBLE1BR3JCQyxTQUhxQix1QkFHckJBLFNBSHFCO0FBQUEsTUFHVkMsS0FIVSx1QkFHVkEsS0FIVTtBQUFBLE1BSW5DQyxrQkFKbUMsdUJBSW5DQSxpQkFKbUM7O0FBU3JDLE1BQUlDLFVBQVUsS0FBSyxJQUFuQixFQUF3QjtBQUN0Qix3QkFDRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ1M7QUFBQSxtREFBZ0NGLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0QsR0Fmb0MsQ0FpQnJDOzs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNFLDhEQUFDLHNEQUFEO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxVQUFJLEVBQUUsRUFGUjtBQUdFLFdBQUssRUFBRUcsU0FBUyxLQUFLLEtBSHZCO0FBSUUsZUFBUyxFQUFDLDBCQUpaO0FBQUEsNkJBTUE7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxrQkFDR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCLFVBQVVDLE9BQVYsRUFBbUI7QUFDbkMsOEJBQU8sOERBQUMsNkNBQUQ7QUFDUCxtQkFBTyxFQUFFQSxPQURGO0FBRVAsd0JBQVksRUFBRVQsWUFGUDtBQUdQLDZCQUFpQixFQUFFLDZCQUFNO0FBQ3ZCSyxnQ0FBaUIsQ0FBQ0ksT0FBTyxDQUFDQyxFQUFULENBQWpCO0FBQ0M7QUFMSSxhQUFjRCxPQUFPLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFRRCxTQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0dBMUNRWCxXOztLQUFBQSxXO0FBNENULCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBlODFjMjJjOTEwMzliMjFkMGM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckxpc3QoeyBzaG93U2Vzc2lvbnMgfSkge1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBzcGVha2Vyc0RhdGEsIHJlcXVlc3RfcywgZXJyb3IsXHJcbiAgICBvbkZhdm91cml0ZVRvZ2dsZSxcclxuICB9ID0gdXNlUmVxdWVzdFNwZWFrZXJzKDIwMDApXHJcblxyXG4gIFxyXG5cclxuICBpZiAoaGFzRXJyb3JlZCA9PT0gdHJ1ZSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIC8vIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxSZWFjdFBsYWNlSG9sZGVyIFxyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgcm93cz17MTB9XHJcbiAgICAgICAgcmVhZHk9e2lzTG9hZGluZyA9PT0gZmFsc2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCJcclxuICAgICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSBcclxuICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XHJcbiAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuICAgICAgICAgIG9uRmF2b3VyaXRlVG9nZ2xlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uRmF2b3VyaXRlVG9nZ2xlKHNwZWFrZXIuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9