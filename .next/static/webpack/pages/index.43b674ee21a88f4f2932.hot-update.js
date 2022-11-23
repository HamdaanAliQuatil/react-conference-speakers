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
      requestStatus = _useRequestSpeakers.requestStatus,
      error = _useRequestSpeakers.error,
      _onFavouriteToggle = _useRequestSpeakers.onFavouriteToggle;

  if (requestStatus === react_placeholder__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
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
      ready: requestSt === false,
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

_s(SpeakerList, "nP/pfPb79m+ghFjCRSEIeWnU3Hs=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb25zIiwidXNlUmVxdWVzdFNwZWFrZXJzIiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwib25GYXZvdXJpdGVUb2dnbGUiLCJSRVFVRVNUX1NUQVRVUyIsInJlcXVlc3RTdCIsIm1hcCIsInNwZWFrZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFBQSw0QkFLakNDLGtCQUFrQixDQUFDLElBQUQsQ0FMZTtBQUFBLE1BR25DQyxZQUhtQyx1QkFHbkNBLFlBSG1DO0FBQUEsTUFHckJDLGFBSHFCLHVCQUdyQkEsYUFIcUI7QUFBQSxNQUdOQyxLQUhNLHVCQUdOQSxLQUhNO0FBQUEsTUFJbkNDLGtCQUptQyx1QkFJbkNBLGlCQUptQzs7QUFTckMsTUFBSUYsYUFBYSxLQUFLRyxxRUFBdEIsRUFBNkM7QUFDM0Msd0JBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLHlDQUNTO0FBQUEsbURBQWdDRixLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtELEdBZm9DLENBaUJyQzs7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDRSw4REFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFFLEVBRlI7QUFHRSxXQUFLLEVBQUVHLFNBQVMsS0FBSyxLQUh2QjtBQUlFLGVBQVMsRUFBQywwQkFKWjtBQUFBLDZCQU1BO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0dMLFlBQVksQ0FBQ00sR0FBYixDQUFpQixVQUFVQyxPQUFWLEVBQW1CO0FBQ25DLDhCQUFPLDhEQUFDLDZDQUFEO0FBQ1AsbUJBQU8sRUFBRUEsT0FERjtBQUVQLHdCQUFZLEVBQUVULFlBRlA7QUFHUCw2QkFBaUIsRUFBRSw2QkFBTTtBQUN2QkssZ0NBQWlCLENBQUNJLE9BQU8sQ0FBQ0MsRUFBVCxDQUFqQjtBQUNDO0FBTEksYUFBY0QsT0FBTyxDQUFDQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBUUQsU0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQTFDUVgsVzs7S0FBQUEsVztBQTRDVCwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40M2I2NzRlZTIxYTg4ZjRmMjkzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIsIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgc3BlYWtlcnNEYXRhLCByZXF1ZXN0U3RhdHVzLCBlcnJvcixcclxuICAgIG9uRmF2b3VyaXRlVG9nZ2xlLFxyXG4gIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMClcclxuXHJcbiAgXHJcblxyXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLy8gaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgPFJlYWN0UGxhY2VIb2xkZXIgXHJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcclxuICAgICAgICByb3dzPXsxMH1cclxuICAgICAgICByZWFkeT17cmVxdWVzdFN0ID09PSBmYWxzZX1cclxuICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgIHJldHVybiA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG4gICAgICAgICAgb25GYXZvdXJpdGVUb2dnbGU9eygpID0+IHtcclxuICAgICAgICAgICAgb25GYXZvdXJpdGVUb2dnbGUoc3BlYWtlci5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3RQbGFjZUhvbGRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=