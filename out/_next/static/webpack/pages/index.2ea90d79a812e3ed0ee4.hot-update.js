webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\macar\\Desktop\\projects\\jd-m3.github.io\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Home() {
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_2__["siteTitle"])), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], {
    className: "jumbotron jumbotron-fluid text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "display-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Hi, I'm John."), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_typed__WEBPACK_IMPORTED_MODULE_4___default.a, {
    strings: ["Full Stack Developer", "Process Automation Expert", "Fitness Enthusiast"],
    typeSpeed: 30,
    backSpeed: 40,
    backDelay: 500,
    loop: true,
    smartBackspace: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInNpdGVUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFDLDREQUFSLENBREYsQ0FGRixFQU9FLE1BQUMsb0RBQUQ7QUFBVyxhQUFTLEVBQUMsdUNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUNFLFdBQU8sRUFBRSxDQUFDLHNCQUFELEVBQXlCLDJCQUF6QixFQUFzRCxvQkFBdEQsQ0FEWDtBQUVFLGFBQVMsRUFBRSxFQUZiO0FBR0UsYUFBUyxFQUFFLEVBSGI7QUFJRSxhQUFTLEVBQUUsR0FKYjtBQUtFLFFBQUksTUFMTjtBQU1FLGtCQUFjLE1BTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBUEYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixFQXVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0F2QkYsQ0FERjtBQWlDRDtLQWxDdUJELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmVhOTBkNzlhODEyZTNlZDBlZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBKdW1ib3Ryb24sIENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IFJlYWN0VHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiBIZXJvIFNlY3Rpb24gKi99XG4gICAgICA8SnVtYm90cm9uIGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb24tZmx1aWQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktM1wiPkhpLCBJJ20gSm9obi48L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxSZWFjdFR5cGVkXG4gICAgICAgICAgICBzdHJpbmdzPXtbXCJGdWxsIFN0YWNrIERldmVsb3BlclwiLCBcIlByb2Nlc3MgQXV0b21hdGlvbiBFeHBlcnRcIiwgXCJGaXRuZXNzIEVudGh1c2lhc3RcIl19XG4gICAgICAgICAgICB0eXBlU3BlZWQ9ezMwfVxuICAgICAgICAgICAgYmFja1NwZWVkPXs0MH1cbiAgICAgICAgICAgIGJhY2tEZWxheT17NTAwfVxuICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgc21hcnRCYWNrc3BhY2VcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSnVtYm90cm9uPlxuXG4gICAgICA8aHIgLz5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPHA+PC9wPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=