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
      request_Status = _useRequestSpeakers.request_Status,
      error = _useRequestSpeakers.error,
      _onFavouriteToggle = _useRequestSpeakers.onFavouriteToggle;

  if (request_Status === react_placeholder__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILUR) {
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

_s(SpeakerList, "TIvV3h1Htwr7YoXF3IjAPMzM98k=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb25zIiwidXNlUmVxdWVzdFNwZWFrZXJzIiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdF9TdGF0dXMiLCJlcnJvciIsIm9uRmF2b3VyaXRlVG9nZ2xlIiwiUkVRVUVTVF9TVEFUVVMiLCJpc0xvYWRpbmciLCJtYXAiLCJzcGVha2VyIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsNEJBS2pDQyxrQkFBa0IsQ0FBQyxJQUFELENBTGU7QUFBQSxNQUduQ0MsWUFIbUMsdUJBR25DQSxZQUhtQztBQUFBLE1BR3JCQyxjQUhxQix1QkFHckJBLGNBSHFCO0FBQUEsTUFHTEMsS0FISyx1QkFHTEEsS0FISztBQUFBLE1BSW5DQyxrQkFKbUMsdUJBSW5DQSxpQkFKbUM7O0FBU3JDLE1BQUlGLGNBQWMsS0FBS0csb0VBQXZCLEVBQTZDO0FBQzNDLHdCQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSx5Q0FDUztBQUFBLG1EQUFnQ0YsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRCxHQWZvQyxDQWlCckM7OztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsMkJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBRSxFQUZSO0FBR0UsV0FBSyxFQUFFRyxTQUFTLEtBQUssS0FIdkI7QUFJRSxlQUFTLEVBQUMsMEJBSlo7QUFBQSw2QkFNQTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNHTCxZQUFZLENBQUNNLEdBQWIsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNuQyw4QkFBTyw4REFBQyw2Q0FBRDtBQUNQLG1CQUFPLEVBQUVBLE9BREY7QUFFUCx3QkFBWSxFQUFFVCxZQUZQO0FBR1AsNkJBQWlCLEVBQUUsNkJBQU07QUFDdkJLLGdDQUFpQixDQUFDSSxPQUFPLENBQUNDLEVBQVQsQ0FBakI7QUFDQztBQUxJLGFBQWNELE9BQU8sQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQVFELFNBVEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7R0ExQ1FYLFc7O0tBQUFBLFc7QUE0Q1QsK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2UzYjcwMTRlNTY2ZWIxMTFhZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyLCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHNwZWFrZXJzRGF0YSwgcmVxdWVzdF9TdGF0dXMsIGVycm9yLFxyXG4gICAgb25GYXZvdXJpdGVUb2dnbGUsXHJcbiAgfSA9IHVzZVJlcXVlc3RTcGVha2VycygyMDAwKVxyXG5cclxuICBcclxuXHJcbiAgaWYgKHJlcXVlc3RfU3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVIpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICA8UmVhY3RQbGFjZUhvbGRlciBcclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgIHJvd3M9ezEwfVxyXG4gICAgICAgIHJlYWR5PXtpc0xvYWRpbmcgPT09IGZhbHNlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXHJcbiAgICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgcmV0dXJuIDxTcGVha2VyIGtleT17c3BlYWtlci5pZH0gXHJcbiAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XHJcbiAgICAgICAgICBvbkZhdm91cml0ZVRvZ2dsZT17KCkgPT4ge1xyXG4gICAgICAgICAgICBvbkZhdm91cml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==