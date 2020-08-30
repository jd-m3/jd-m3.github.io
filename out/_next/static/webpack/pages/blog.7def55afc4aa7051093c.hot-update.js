webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/date */ "./components/date.js");
var _jsxFileName = "C:\\Users\\macar\\Desktop\\projects\\jd-m3.github.io\\pages\\blog\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Blog(_ref) {
  var _this = this;

  var allPostsData = _ref.allPostsData;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, "Blog - ", _components_layout__WEBPACK_IMPORTED_MODULE_3__["siteTitle"])), __jsx("section", {
    className: "container mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, allPostsData.map(function (_ref2) {
    var id = _ref2.id,
        date = _ref2.date,
        title = _ref2.title;
    return __jsx("div", {
      key: id,
      "class": "card mb-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, __jsx("div", {
      "class": "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/blog/[id]",
      as: "/blog/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 33
      }
    }, title)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }
    }), __jsx("small", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }, __jsx(_components_date__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 33
      }
    }))));
  })));
}
_c = Blog;

var _c;

$RefreshReg$(_c, "Blog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCbG9nIiwiYWxsUG9zdHNEYXRhIiwic2l0ZVRpdGxlIiwibWFwIiwiaWQiLCJkYXRlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVlLFNBQVNBLElBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQzNDLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZUMsNERBQWYsQ0FESixDQURKLEVBT0k7QUFBUyxhQUFTLEVBQUMsZ0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsWUFBWSxDQUFDRSxHQUFiLENBQWlCO0FBQUEsUUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsUUFBT0MsSUFBUCxTQUFPQSxJQUFQO0FBQUEsUUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsV0FDZDtBQUFLLFNBQUcsRUFBRUYsRUFBVjtBQUFjLGVBQU0sV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBTSxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFlBQVg7QUFBd0IsUUFBRSxrQkFBV0EsRUFBWCxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRSxLQUFMLENBREosQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdEQUFEO0FBQU0sZ0JBQVUsRUFBRUQsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBTEosQ0FESixDQURjO0FBQUEsR0FBakIsQ0FETCxDQVBKLENBREo7QUEwQkg7S0EzQnVCTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuN2RlZjU1YWZjNGFhNzA1MTA5M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi8uLi9saWIvcG9zdHMnXHJcbmltcG9ydCBEYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGF0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coeyBhbGxQb3N0c0RhdGEgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIC0ge3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3M9XCJjYXJkIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nL1tpZF1cIiBhcz17YC9ibG9nLyR7aWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGFsbFBvc3RzRGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9