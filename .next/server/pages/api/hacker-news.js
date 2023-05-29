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
exports.id = "pages/api/hacker-news";
exports.ids = ["pages/api/hacker-news"];
exports.modules = {

/***/ "rss-to-json":
/*!******************************!*\
  !*** external "rss-to-json" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("rss-to-json");

/***/ }),

/***/ "(api)/./src/lib/top-hacker-news.ts":
/*!************************************!*\
  !*** ./src/lib/top-hacker-news.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTopNews\": () => (/* binding */ getTopNews)\n/* harmony export */ });\nconst { parse  } = __webpack_require__(/*! rss-to-json */ \"rss-to-json\");\nconst HACKER_NEWS_RSS = \"https://news.ycombinator.com/rss\";\nconst getTopNews = async ()=>{\n    try {\n        const { items  } = await parse(HACKER_NEWS_RSS);\n        return items;\n    } catch (error) {\n        console.error(\"\\uD83D\\uDE80 ~ getTopNews ~ error\", error);\n        return [];\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3RvcC1oYWNrZXItbmV3cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxLQUFLLEdBQUUsR0FBR0MsbUJBQU8sQ0FBQyxnQ0FBYSxDQUFDO0FBRXhDLE1BQU1DLGVBQWUsR0FBRyxrQ0FBa0M7QUFFbkQsTUFBTUMsVUFBVSxHQUFHLFVBQVk7SUFDcEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUcsTUFBTUosS0FBSyxDQUFDRSxlQUFlLENBQUM7UUFDOUMsT0FBT0UsS0FBSyxDQUFDO0lBQ2YsRUFBRSxPQUFPQyxLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsbUNBQXdCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQy9DLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25xc29uLmNvbS8uL3NyYy9saWIvdG9wLWhhY2tlci1uZXdzLnRzPzQ3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBwYXJzZSB9ID0gcmVxdWlyZSgncnNzLXRvLWpzb24nKTtcblxuY29uc3QgSEFDS0VSX05FV1NfUlNTID0gJ2h0dHBzOi8vbmV3cy55Y29tYmluYXRvci5jb20vcnNzJztcblxuZXhwb3J0IGNvbnN0IGdldFRvcE5ld3MgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gYXdhaXQgcGFyc2UoSEFDS0VSX05FV1NfUlNTKTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign8J+agCB+IGdldFRvcE5ld3MgfiBlcnJvcicsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicGFyc2UiLCJyZXF1aXJlIiwiSEFDS0VSX05FV1NfUlNTIiwiZ2V0VG9wTmV3cyIsIml0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/top-hacker-news.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/hacker-news.ts":
/*!**************************************!*\
  !*** ./src/pages/api/hacker-news.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_top_hacker_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/top-hacker-news */ \"(api)/./src/lib/top-hacker-news.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    const items = await (0,_lib_top_hacker_news__WEBPACK_IMPORTED_MODULE_0__.getTopNews)();\n    res.status(200).json(items);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2hhY2tlci1uZXdzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNkVBQTZFO0FBRXRCO0FBR3hDLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUE2QixFQUM3QjtJQUNBLE1BQU1DLEtBQUssR0FBRyxNQUFNSixnRUFBVSxFQUFFO0lBQ2hDRyxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUMsQ0FBQztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnFzb24uY29tLy4vc3JjL3BhZ2VzL2FwaS9oYWNrZXItbmV3cy50cz83OThhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IGdldFRvcE5ld3MgfSBmcm9tICcuLi8uLi9saWIvdG9wLWhhY2tlci1uZXdzJztcbmltcG9ydCB7IElOZXdzIH0gZnJvbSAnLi4vLi4vbGliL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8SU5ld3NbXT5cbikge1xuICBjb25zdCBpdGVtcyA9IGF3YWl0IGdldFRvcE5ld3MoKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oaXRlbXMpO1xufVxuIl0sIm5hbWVzIjpbImdldFRvcE5ld3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaXRlbXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/hacker-news.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/hacker-news.ts"));
module.exports = __webpack_exports__;

})();