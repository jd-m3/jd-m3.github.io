webpackHotUpdate_N_E("pages/blog/[id]",{

/***/ "./pages/blog/[id].js":
/*!****************************!*\
  !*** ./pages/blog/[id].js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/date */ "./components/date.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\macar\\Desktop\\projects\\jd-m3.github.io\\pages\\blog\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Post(_ref) {
  var postData = _ref.postData;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, postData.title)), __jsx("article", {
    className: "container mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingXl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, postData.title), __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.lightText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dateString: postData.date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  })), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: postData.contentHtml
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })));
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy8uanMiXSwibmFtZXMiOlsiUG9zdCIsInBvc3REYXRhIiwidGl0bGUiLCJ1dGlsU3R5bGVzIiwiaGVhZGluZ1hsIiwibGlnaHRUZXh0IiwiZGF0ZSIsIl9faHRtbCIsImNvbnRlbnRIdG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQTRCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3ZDLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxRQUFRLENBQUNDLEtBQWpCLENBREosQ0FESixFQUlJO0FBQVMsYUFBUyxFQUFDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUVDLCtEQUFVLENBQUNDLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0NILFFBQVEsQ0FBQ0MsS0FBL0MsQ0FESixFQUVJO0FBQUssYUFBUyxFQUFFQywrREFBVSxDQUFDRSxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFNLGNBQVUsRUFBRUosUUFBUSxDQUFDSyxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FGSixFQUtJO0FBQUssMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFTixRQUFRLENBQUNPO0FBQW5CLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQUpKLENBREo7QUFjSDtLQWZ1QlIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL1tpZF0uMGMxMzMxMzY3NTk1MzVhM2U3YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi9saWIvcG9zdHMnXHJcbmltcG9ydCBEYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGF0ZSdcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdERhdGEgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cG9zdERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nWGx9Pntwb3N0RGF0YS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlnaHRUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0ZSBkYXRlU3RyaW5nPXtwb3N0RGF0YS5kYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0RGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9