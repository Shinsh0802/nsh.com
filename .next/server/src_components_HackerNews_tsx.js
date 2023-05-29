"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_HackerNews_tsx";
exports.ids = ["src_components_HackerNews_tsx"];
exports.modules = {

/***/ "./src/components/HackerNews.tsx":
/*!***************************************!*\
  !*** ./src/components/HackerNews.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HackerNews)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ \"nanoid\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/fetcher */ \"./src/lib/fetcher.ts\");\n/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-timeago */ \"react-timeago\");\n/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_timeago__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/utils */ \"./src/lib/utils.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, nanoid__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, nanoid__WEBPACK_IMPORTED_MODULE_2__, swr__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* eslint-disable react-hooks/rules-of-hooks */ \n\n\n\n\n\n\nfunction HackerNews() {\n    const { data: news , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(`/api/hacker-news`, _lib_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const isLoadingInitialData = !news && !error;\n    if (isLoadingInitialData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n            align: \"stretch\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {\n                    height: \"68px\"\n                }, void 0, false, {\n                    fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {\n                    height: \"68px\"\n                }, void 0, false, {\n                    fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {\n                    height: \"68px\"\n                }, void 0, false, {\n                    fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {\n                    height: \"68px\"\n                }, void 0, false, {\n                    fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {\n                    height: \"68px\"\n                }, void 0, false, {\n                    fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n        align: \"stretch\",\n        children: news?.map((n)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                p: 3,\n                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"gray.100\", \"gray.900\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        fontSize: \"md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                            href: n.link,\n                            target: \"_blank\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: n.title\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                fontSize: \"xs\",\n                                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.getHostname)(n.link)\n                            }, void 0, false, {\n                                fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                fontSize: \"xs\",\n                                color: \"gray.500\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_timeago__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    date: n.published\n                                }, void 0, false, {\n                                    fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(), true, {\n                fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/shinesh/Documents/Source/nsh.com/src/components/HackerNews.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IYWNrZXJOZXdzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTZDLEdBQzdDO0FBTzBCO0FBQ007QUFDUDtBQUNZO0FBRUQ7QUFDTztBQUU1QixTQUFTVyxVQUFVLEdBQUc7SUFDbkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdQLCtDQUFNLENBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFQyxvREFBTyxDQUFDO0lBQzFFLE1BQU1PLG9CQUFvQixHQUFHLENBQUNGLElBQUksSUFBSSxDQUFDQyxLQUFLO0lBRTVDLElBQUlDLG9CQUFvQixFQUFFO1FBQ3hCLHFCQUNFLDhEQUFDWCxvREFBTTtZQUFDWSxLQUFLLEVBQUMsU0FBUzs7OEJBQ3JCLDhEQUFDYixzREFBUTtvQkFBQ2MsTUFBTSxFQUFDLE1BQU07Ozs7O3dCQUFHOzhCQUMxQiw4REFBQ2Qsc0RBQVE7b0JBQUNjLE1BQU0sRUFBQyxNQUFNOzs7Ozt3QkFBRzs4QkFDMUIsOERBQUNkLHNEQUFRO29CQUFDYyxNQUFNLEVBQUMsTUFBTTs7Ozs7d0JBQUc7OEJBQzFCLDhEQUFDZCxzREFBUTtvQkFBQ2MsTUFBTSxFQUFDLE1BQU07Ozs7O3dCQUFHOzhCQUMxQiw4REFBQ2Qsc0RBQVE7b0JBQUNjLE1BQU0sRUFBQyxNQUFNOzs7Ozt3QkFBRzs7Ozs7O2dCQUNuQixDQUNUO0lBQ0osQ0FBQztJQUVELHFCQUNFLDhEQUFDYixvREFBTTtRQUFDWSxLQUFLLEVBQUMsU0FBUztrQkFDcEJILElBQUksRUFBRUssR0FBRyxDQUFDLENBQUNDLENBQVEsaUJBQ2xCLDhEQUFDbkIsaURBQUc7Z0JBQ0ZvQixDQUFDLEVBQUUsQ0FBQztnQkFDSkMsRUFBRSxFQUFFaEIsbUVBQWlCLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQzs7a0NBRzdDLDhEQUFDTCxpREFBRzt3QkFBQ3NCLFFBQVEsRUFBQyxJQUFJO2tDQUNoQiw0RUFBQ3BCLGtEQUFJOzRCQUFDcUIsSUFBSSxFQUFFSixDQUFDLENBQUNLLElBQUk7NEJBQUVDLE1BQU0sRUFBQyxRQUFRO3NDQUNqQyw0RUFBQ0MsS0FBRztnQ0FBQ0MsdUJBQXVCLEVBQUU7b0NBQUVDLE1BQU0sRUFBRVQsQ0FBQyxDQUFDVSxLQUFLO2lDQUFFOzs7OztvQ0FBUTs7Ozs7Z0NBQ3BEOzs7Ozs0QkFDSDtrQ0FDTiw4REFBQzVCLG9EQUFNOzswQ0FDTCw4REFBQ0QsaURBQUc7Z0NBQUNzQixRQUFRLEVBQUMsSUFBSTswQ0FBRVosdURBQVcsQ0FBQ1MsQ0FBQyxDQUFDSyxJQUFJLENBQUM7Ozs7O29DQUFPOzBDQUM5Qyw4REFBQ3hCLGlEQUFHO2dDQUFDc0IsUUFBUSxFQUFDLElBQUk7Z0NBQUNRLEtBQUssRUFBQyxVQUFVOzBDQUNqQyw0RUFBQ3JCLHNEQUFPO29DQUFDc0IsSUFBSSxFQUFFWixDQUFDLENBQUNhLFNBQVM7Ozs7O3dDQUFJOzs7OztvQ0FDMUI7Ozs7Ozs0QkFDQzs7ZUFaSjFCLDhDQUFNLEVBQUU7Ozs7b0JBYVQsQ0FDTjs7Ozs7WUFDSyxDQUNUO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25xc29uLmNvbS8uL3NyYy9jb21wb25lbnRzL0hhY2tlck5ld3MudHN4P2QyZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cbmltcG9ydCB7XG4gIEJveCxcbiAgSFN0YWNrLFxuICBMaW5rLFxuICBTa2VsZXRvbixcbiAgVlN0YWNrLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tICduYW5vaWQnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vbGliL2ZldGNoZXInO1xuaW1wb3J0IHsgSU5ld3MgfSBmcm9tICcuLi9saWIvdHlwZXMnO1xuaW1wb3J0IFRpbWVBZ28gZnJvbSAncmVhY3QtdGltZWFnbyc7XG5pbXBvcnQgeyBnZXRIb3N0bmFtZSB9IGZyb20gJy4uL2xpYi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhY2tlck5ld3MoKSB7XG4gIGNvbnN0IHsgZGF0YTogbmV3cywgZXJyb3IgfSA9IHVzZVNXUjxJTmV3c1tdPihgL2FwaS9oYWNrZXItbmV3c2AsIGZldGNoZXIpO1xuICBjb25zdCBpc0xvYWRpbmdJbml0aWFsRGF0YSA9ICFuZXdzICYmICFlcnJvcjtcblxuICBpZiAoaXNMb2FkaW5nSW5pdGlhbERhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZTdGFjayBhbGlnbj1cInN0cmV0Y2hcIj5cbiAgICAgICAgPFNrZWxldG9uIGhlaWdodD1cIjY4cHhcIiAvPlxuICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PVwiNjhweFwiIC8+XG4gICAgICAgIDxTa2VsZXRvbiBoZWlnaHQ9XCI2OHB4XCIgLz5cbiAgICAgICAgPFNrZWxldG9uIGhlaWdodD1cIjY4cHhcIiAvPlxuICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PVwiNjhweFwiIC8+XG4gICAgICA8L1ZTdGFjaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VlN0YWNrIGFsaWduPVwic3RyZXRjaFwiPlxuICAgICAge25ld3M/Lm1hcCgobjogSU5ld3MpID0+IChcbiAgICAgICAgPEJveFxuICAgICAgICAgIHA9ezN9XG4gICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjEwMCcsICdncmF5LjkwMCcpfVxuICAgICAgICAgIGtleT17bmFub2lkKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94IGZvbnRTaXplPVwibWRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e24ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBuLnRpdGxlIH19PjwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgICA8Qm94IGZvbnRTaXplPVwieHNcIj57Z2V0SG9zdG5hbWUobi5saW5rKX08L0JveD5cbiAgICAgICAgICAgIDxCb3ggZm9udFNpemU9XCJ4c1wiIGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgICAgPFRpbWVBZ28gZGF0ZT17bi5wdWJsaXNoZWR9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApKX1cbiAgICA8L1ZTdGFjaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJIU3RhY2siLCJMaW5rIiwiU2tlbGV0b24iLCJWU3RhY2siLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIm5hbm9pZCIsInVzZVNXUiIsImZldGNoZXIiLCJUaW1lQWdvIiwiZ2V0SG9zdG5hbWUiLCJIYWNrZXJOZXdzIiwiZGF0YSIsIm5ld3MiLCJlcnJvciIsImlzTG9hZGluZ0luaXRpYWxEYXRhIiwiYWxpZ24iLCJoZWlnaHQiLCJtYXAiLCJuIiwicCIsImJnIiwiZm9udFNpemUiLCJocmVmIiwibGluayIsInRhcmdldCIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidGl0bGUiLCJjb2xvciIsImRhdGUiLCJwdWJsaXNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/HackerNews.tsx\n");

/***/ }),

/***/ "./src/lib/fetcher.ts":
/*!****************************!*\
  !*** ./src/lib/fetcher.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetcher)\n/* harmony export */ });\nasync function fetcher(input, init) {\n    const res = await fetch(input, init);\n    return res.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2ZldGNoZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLE9BQU8sQ0FDbkNDLEtBQWtCLEVBQ2xCQyxJQUFrQixFQUNIO0lBQ2YsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0gsS0FBSyxFQUFFQyxJQUFJLENBQUM7SUFDcEMsT0FBT0MsR0FBRyxDQUFDRSxJQUFJLEVBQUUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnFzb24uY29tLy4vc3JjL2xpYi9mZXRjaGVyLnRzPzZhN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcjxKU09OID0gYW55PihcbiAgaW5wdXQ6IFJlcXVlc3RJbmZvLFxuICBpbml0PzogUmVxdWVzdEluaXRcbik6IFByb21pc2U8SlNPTj4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChpbnB1dCwgaW5pdCk7XG4gIHJldHVybiByZXMuanNvbigpO1xufVxuIl0sIm5hbWVzIjpbImZldGNoZXIiLCJpbnB1dCIsImluaXQiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/fetcher.ts\n");

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHostname\": () => (/* binding */ getHostname)\n/* harmony export */ });\nconst getHostname = (url)=>{\n    if (!url) return \"\";\n    return new URL(url).hostname;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsR0FBOEIsR0FBYTtJQUNyRSxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNwQixPQUFPLElBQUlDLEdBQUcsQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLFFBQVEsQ0FBQztBQUMvQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ucXNvbi5jb20vLi9zcmMvbGliL3V0aWxzLnRzPzdjMWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldEhvc3RuYW1lID0gKHVybDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IHN0cmluZyA9PiB7XG4gIGlmICghdXJsKSByZXR1cm4gJyc7XG4gIHJldHVybiBuZXcgVVJMKHVybCkuaG9zdG5hbWU7XG59O1xuIl0sIm5hbWVzIjpbImdldEhvc3RuYW1lIiwidXJsIiwiVVJMIiwiaG9zdG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/utils.ts\n");

/***/ })

};
;