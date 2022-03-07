"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst App = ({ users  })=>{\n    console.log(users);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: \"test\"\n    }, void 0, false, {\n        fileName: \"Z:\\\\workspace\\\\monorepo\\\\packages\\\\app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 18,\n        columnNumber: 10\n    }, undefined));\n};\nconst getServerSideProps = async (context)=>{\n    const query = `\n    query {\n      users{\n        id\n        firstName\n        lastName\n        email\n      }\n    }`;\n    const { data: { data: { users  } ,  } ,  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`http://localhost:3001/graphql`, {\n        query\n    });\n    return {\n        props: {\n            users\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFFQTtBQWFsQixLQUFLLENBQUNFLEdBQUcsSUFBeUIsQ0FBQyxDQUFDQyxLQUFLLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDdERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBQ2pCLE1BQU0sNkVBQUVHLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQUs7a0JBQUMsQ0FBSTs7Ozs7O0FBQ2xDLENBQUM7QUFFTSxLQUFLLENBQUNDLGtCQUFrQixVQUE4QkMsT0FBTyxHQUFLLENBQUM7SUFDeEUsS0FBSyxDQUFDQyxLQUFLLElBQUk7Ozs7Ozs7O0tBUVo7SUFDSCxLQUFLLENBQUMsQ0FBQyxDQUNMQyxJQUFJLEVBQUUsQ0FBQyxDQUNMQSxJQUFJLEVBQUUsQ0FBQyxDQUFDUixLQUFLLEVBQUMsQ0FBQyxJQUNqQixDQUFDLElBQ0gsQ0FBQyxHQUFHLEtBQUssQ0FBQ0gsaURBQVUsRUFBRSw2QkFBNkIsR0FBRyxDQUFDO1FBQUNVLEtBQUs7SUFBQyxDQUFDO0lBQy9ELE1BQU0sQ0FBQyxDQUFDO1FBQUNHLEtBQUssRUFBRSxDQUFDO1lBQUNWLEtBQUs7UUFBQyxDQUFDO0lBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsaUVBQWVELEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0Btb25vcmVwby9hcHAvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgVXNlcnMgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XG4gIHVzZXJzOiBVc2Vyc1tdO1xufVxuXG5leHBvcnQgY29uc3QgQXBwOiBOZXh0UGFnZTxQYWdlUHJvcHM+ID0gKHsgdXNlcnMgfSkgPT4ge1xuICBjb25zb2xlLmxvZyh1c2Vycyk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPnRlc3Q8L2Rpdj47XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBxdWVyeSB7XG4gICAgICB1c2Vyc3tcbiAgICAgICAgaWRcbiAgICAgICAgZmlyc3ROYW1lXG4gICAgICAgIGxhc3ROYW1lXG4gICAgICAgIGVtYWlsXG4gICAgICB9XG4gICAgfWA7XG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7XG4gICAgICBkYXRhOiB7IHVzZXJzIH0sXG4gICAgfSxcbiAgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ncmFwaHFsYCwgeyBxdWVyeSB9KTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlcnMgfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJBcHAiLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJkYXRhIiwicG9zdCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();