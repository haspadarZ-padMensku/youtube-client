/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppController */ \"./src/js/AppController.js\");\n/* harmony import */ var _AppView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppView */ \"./src/js/AppView.js\");\n/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppModel */ \"./src/js/AppModel.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.controller = new _AppController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _AppView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.model = new _AppModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  _createClass(App, [{\n    key: \"lazyLoad\",\n    value: function lazyLoad() {\n      var _this = this;\n\n      var isReqestNextChunk = this.view.videos.pagesAmount - this.view.videos.currentPage <= 2;\n\n      if (isReqestNextChunk) {\n        this.controller.getVideos(this.model.getQuery(), function (data) {\n          _this.controller.getInfo(_this.model.storeVideosId(data), function (info) {\n            _this.model.storeVideosInfo(info);\n          });\n        }, this.model.nextPageToken);\n      }\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this2 = this;\n\n      var query = '';\n      this.view.listenScreanSize();\n      document.querySelector('#user-search').addEventListener('keydown', function (e) {\n        if (e.key === 'Enter') {\n          query = document.querySelector('#user-search').value.replace(/[ ]{1,}/g, '+');\n          if (query !== _this2.model.query) _this2.model.reset();\n\n          _this2.model.setQuery(query);\n\n          _this2.controller.getVideos(_this2.model.getQuery(), function (data) {\n            _this2.controller.getInfo(_this2.model.storeVideosId(data), function (info) {\n              _this2.model.storeVideosInfo(info);\n\n              _this2.view.drawVideos(_this2.model.tempVideosInfo, _this2.model.isQueryChange(), 'init');\n            });\n          });\n        }\n      });\n      document.querySelector('.next-btn').addEventListener('click', function () {\n        _this2.model.setQuery(query);\n\n        _this2.view.drawVideos(_this2.model.tempVideosInfo, _this2.model.isQueryChange(), 'next');\n\n        _this2.lazyLoad();\n      });\n      document.querySelector('.prev-btn').addEventListener('click', function () {\n        _this2.model.setQuery(query);\n\n        _this2.view.drawVideos(_this2.model.tempVideosInfo, _this2.model.isQueryChange(), 'prev');\n      });\n      window.addEventListener('resize', function () {\n        _this2.view.drawVideos(_this2.model.tempVideosInfo, _this2.model.isQueryChange(), 'resize');\n      });\n      var swipe = document.querySelector('.clips-row-container');\n      var videos;\n      var startX;\n      var endX;\n      var isTouched = false;\n      var delta = 0;\n      swipe.addEventListener('touchstart', function (e) {\n        isTouched = true;\n        startX = e.targetTouches[0].pageX;\n      });\n      swipe.addEventListener('touchend', function (e) {\n        videos.style.transition = 'all 0.5s';\n        isTouched = false;\n\n        if (isTouched === false) {\n          endX = e.changedTouches[e.changedTouches.length - 1].pageX;\n        }\n\n        if (startX !== endX) {\n          if (isTouched === false && Math.abs(delta) >= 25) {\n            if (delta < 0) {\n              _this2.model.setQuery(query);\n\n              _this2.view.drawVideos(_this2.model.tempVideosInfo, _this2.model.isQueryChange(), 'next');\n\n              _this2.lazyLoad();\n            } else {\n              _this2.model.setQuery(query);\n\n              _this2.view.drawVideos(_this2.model.tempVideosInfo, _this2.model.isQueryChange(), 'prev');\n            }\n          } else {\n            videos.style.left = '0';\n          }\n        }\n      });\n      swipe.addEventListener('touchmove', function (e) {\n        isTouched = true;\n        var touch = e.targetTouches[0];\n        videos = document.querySelector('.clips-row.current');\n        videos.style.transition = 'all 0s';\n        var width = document.body.clientWidth;\n        delta = (touch.pageX - startX) * 100 / width;\n\n        if (delta > 0) {\n          videos.style.left = \"\".concat(Math.abs(delta), \"%\");\n        } else {\n          videos.style.left = \"-\".concat(Math.abs(delta), \"%\");\n        }\n      });\n    }\n  }]);\n\n  return App;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/App.js?");

/***/ }),

/***/ "./src/js/AppController.js":
/*!*********************************!*\
  !*** ./src/js/AppController.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppController; });\n/* harmony import */ var _YouTubeAPILoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YouTubeAPILoader */ \"./src/js/YouTubeAPILoader.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar AppController =\n/*#__PURE__*/\nfunction (_YouTubeAPILoader) {\n  _inherits(AppController, _YouTubeAPILoader);\n\n  function AppController() {\n    _classCallCheck(this, AppController);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(AppController).apply(this, arguments));\n  }\n\n  _createClass(AppController, [{\n    key: \"getVideos\",\n    value: function getVideos(q, callback) {\n      var pageToken = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n\n      if (typeof q !== 'undefined') {\n        _get(_getPrototypeOf(AppController.prototype), \"getResp\", this).call(this, {\n          endpoint: 'search',\n          options: {\n            type: 'video',\n            part: 'snippet',\n            maxResults: '15',\n            pageToken: \"\".concat(pageToken),\n            q: \"\".concat(q)\n          }\n        }, callback);\n      }\n    }\n  }, {\n    key: \"getInfo\",\n    value: function getInfo(arrayOfId, callback) {\n      _get(_getPrototypeOf(AppController.prototype), \"getResp\", this).call(this, {\n        endpoint: 'videos',\n        options: {\n          id: \"\".concat(arrayOfId),\n          part: 'snippet,statistics'\n        }\n      }, callback);\n    }\n  }]);\n\n  return AppController;\n}(_YouTubeAPILoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/js/AppController.js?");

/***/ }),

/***/ "./src/js/AppModel.js":
/*!****************************!*\
  !*** ./src/js/AppModel.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppModel; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AppModel =\n/*#__PURE__*/\nfunction () {\n  function AppModel() {\n    _classCallCheck(this, AppModel);\n\n    this.queryOld = '';\n    this.query = '';\n    this.tempVideosId = [];\n    this.tempVideosInfo = [];\n    this.prevPageToken = '';\n    this.nextPageToken = '';\n  }\n\n  _createClass(AppModel, [{\n    key: \"setQuery\",\n    value: function setQuery(value) {\n      this.queryOld = this.query;\n      this.query = value;\n    }\n  }, {\n    key: \"getQuery\",\n    value: function getQuery() {\n      return this.query;\n    }\n  }, {\n    key: \"isQueryChange\",\n    value: function isQueryChange() {\n      return this.query !== this.queryOld;\n    }\n  }, {\n    key: \"storeVideosId\",\n    value: function storeVideosId(data) {\n      this.tempVideosId = [];\n\n      for (var i = 0; i < data.items.length; i++) {\n        this.tempVideosId.push(data.items[i].id.videoId);\n      }\n\n      this.prevPageToken = data.prevPageToken || '';\n      this.nextPageToken = data.nextPageToken || '';\n      return this.tempVideosId.join();\n    }\n  }, {\n    key: \"storeVideosInfo\",\n    value: function storeVideosInfo(data) {\n      for (var i = 0; i < data.items.length; i++) {\n        this.tempVideosInfo.push(data.items[i]);\n      }\n\n      return this.tempVideosInfo;\n    }\n  }, {\n    key: \"getTempVideosInfo\",\n    value: function getTempVideosInfo() {\n      return this.tempVideosInfo;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.tempVideosId = [];\n      this.tempVideosInfo = [];\n      this.queryOld = this.query;\n      this.query = '';\n      this.prevPageToken = '';\n      this.nextPageToken = '';\n    }\n  }]);\n\n  return AppModel;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/AppModel.js?");

/***/ }),

/***/ "./src/js/AppView.js":
/*!***************************!*\
  !*** ./src/js/AppView.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppView; });\n/* harmony import */ var _Videos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Videos */ \"./src/js/Videos.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AppView =\n/*#__PURE__*/\nfunction () {\n  function AppView() {\n    _classCallCheck(this, AppView);\n\n    this.videos = new _Videos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.userScrean = document.body.clientWidth;\n  }\n\n  _createClass(AppView, [{\n    key: \"listenScreanSize\",\n    value: function listenScreanSize() {\n      var _this = this;\n\n      window.addEventListener('resize', function () {\n        _this.userScrean = document.body.clientWidth;\n        return _this.userScrean;\n      });\n    }\n  }, {\n    key: \"drawVideos\",\n    value: function drawVideos(data, isQueryChange) {\n      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'next';\n      this.videos.draw(data, isQueryChange, this.userScrean, direction);\n    }\n  }]);\n\n  return AppView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/AppView.js?");

/***/ }),

/***/ "./src/js/Videos.js":
/*!**************************!*\
  !*** ./src/js/Videos.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Videos; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Videos =\n/*#__PURE__*/\nfunction () {\n  function Videos() {\n    _classCallCheck(this, Videos);\n\n    this.amountOnScrean = 0;\n    this.prevAmountOnScrean = 0;\n    this.targetVideo = 0;\n    this.pagesAmount = 0;\n    this.currentPage = 0;\n    this.pageCountDiv = '';\n  }\n\n  _createClass(Videos, [{\n    key: \"clearBottomNav\",\n    value: function clearBottomNav() {\n      this.pageCountDiv = document.querySelector('.pagesCount');\n      var pageCountSpan = document.querySelector('.pagesCount span');\n\n      if (pageCountSpan) {\n        pageCountSpan.innerHTML = '';\n        pageCountSpan.remove();\n      }\n    }\n  }, {\n    key: \"pastBottomNav\",\n    value: function pastBottomNav() {\n      var span = document.createElement('span');\n      span.innerHTML = \"\".concat(this.currentPage, \" / \").concat(this.pagesAmount);\n      this.pageCountDiv.appendChild(span);\n    }\n  }, {\n    key: \"drawDots\",\n    value: function drawDots() {\n      var block = document.querySelectorAll('.dot');\n      block.forEach(function (i) {\n        var j = i;\n        j.innerHTML = '';\n        j.classList.remove('current-dot');\n      });\n      var check = this.currentPage % 4;\n      var currentPagePlace = check === 0 ? block.length - 1 : check - 1;\n      block[currentPagePlace].innerHTML = this.currentPage;\n      block[currentPagePlace].classList.add('current-dot');\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(data, isQueryChange, userScrean, direction) {\n      var clipsRow = document.querySelector('.clips-row.current');\n      var clipsRowPrev = document.querySelector('.clips-row.prev');\n      var clipsRowNext = document.querySelector('.clips-row.next');\n\n      if (clipsRow.hasChildNodes()) {\n        if (isQueryChange) {\n          this.targetVideo = 0;\n        }\n      }\n\n      this.amountOnScrean = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getAmountOnScrean\"])(userScrean);\n\n      if (direction === 'init') {\n        if (isQueryChange) {\n          this.clearBottomNav();\n          this.pagesAmount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"countPagesAmount\"])(data, this.amountOnScrean);\n          this.currentPage = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"countCurrentPage\"])(this.amountOnScrean, this.targetVideo);\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRowPrev);\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRowNext);\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRow);\n          clipsRow.classList.remove('current');\n          clipsRow.classList.add('prev');\n          var begin = this.currentPage * this.amountOnScrean - this.amountOnScrean;\n          var length = begin + this.amountOnScrean;\n\n          for (begin; begin < length; begin++) {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"postVideos\"])(data, clipsRowNext, begin);\n          }\n\n          clipsRowNext.classList.remove('next');\n          clipsRowNext.classList.add('current');\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRowPrev);\n          clipsRowPrev.classList.remove('prev');\n          clipsRowPrev.classList.add('next');\n          this.pastBottomNav();\n          this.drawDots();\n        }\n      }\n\n      if (direction === 'next') {\n        if (clipsRow.hasChildNodes()) {\n          this.clearBottomNav();\n          this.pagesAmount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"countPagesAmount\"])(data, this.amountOnScrean);\n          this.targetVideo += this.amountOnScrean;\n          this.currentPage = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"countCurrentPage\"])(this.amountOnScrean, this.targetVideo);\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRowPrev);\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRowNext);\n          clipsRow.classList.remove('current');\n          clipsRow.classList.add('prev');\n          clipsRow.style.left = '-100%';\n\n          var _begin = this.currentPage * this.amountOnScrean - this.amountOnScrean;\n\n          var _length = _begin + this.amountOnScrean;\n\n          for (_begin; _begin < _length; _begin++) {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"postVideos\"])(data, clipsRowNext, _begin);\n          }\n\n          clipsRowNext.classList.remove('next');\n          clipsRowNext.classList.add('current');\n          clipsRowNext.style.left = '0';\n          clipsRowPrev.classList.remove('prev');\n          clipsRowPrev.classList.add('next');\n          clipsRowPrev.style.left = '100%';\n          this.pastBottomNav();\n          this.drawDots();\n        }\n      }\n\n      if (direction === 'prev') {\n        if (this.currentPage > 1) {\n          this.clearBottomNav();\n          this.targetVideo -= this.amountOnScrean;\n          this.pagesAmount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"countPagesAmount\"])(data, this.amountOnScrean);\n          this.currentPage = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"countCurrentPage\"])(this.amountOnScrean, this.targetVideo);\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRowPrev);\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRowNext);\n\n          var _begin2 = this.currentPage * this.amountOnScrean - this.amountOnScrean;\n\n          clipsRow.classList.remove('current');\n          clipsRow.classList.add('next');\n          clipsRow.style.left = '100%';\n\n          var _length2 = _begin2 + this.amountOnScrean;\n\n          for (_begin2; _begin2 < _length2; _begin2++) {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"postVideos\"])(data, clipsRowPrev, _begin2);\n          }\n\n          clipsRowPrev.classList.remove('prev');\n          clipsRowPrev.classList.add('current');\n          clipsRowPrev.style.left = '0';\n          clipsRowNext.classList.remove('next');\n          clipsRowNext.classList.add('prev');\n          clipsRowNext.style.left = '-100%';\n          this.pastBottomNav();\n          this.drawDots();\n        } else {\n          clipsRow.style.left = '0';\n        }\n      }\n\n      if (direction === 'resize') {\n        if (this.prevAmountOnScrean !== this.amountOnScrean) {\n          if (clipsRow.hasChildNodes()) {\n            this.clearBottomNav();\n            this.pagesAmount = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"countPagesAmount\"])(data, this.amountOnScrean);\n            this.currentPage = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"countCurrentPage\"])(this.amountOnScrean, this.targetVideo);\n\n            var _begin3 = this.currentPage * this.amountOnScrean - this.amountOnScrean;\n\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])(clipsRow);\n\n            var _length3 = _begin3 + this.amountOnScrean;\n\n            for (_begin3; _begin3 < _length3; _begin3++) {\n              Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"postVideos\"])(data, clipsRow, _begin3);\n            }\n\n            this.pastBottomNav();\n            this.drawDots();\n          }\n        }\n\n        this.prevAmountOnScrean = this.amountOnScrean;\n      }\n    }\n  }]);\n\n  return Videos;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Videos.js?");

/***/ }),

/***/ "./src/js/YouTubeAPILoader.js":
/*!************************************!*\
  !*** ./src/js/YouTubeAPILoader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return YouTubeAPILoader; });\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar YouTubeAPILoader =\n/*#__PURE__*/\nfunction () {\n  function YouTubeAPILoader() {\n    _classCallCheck(this, YouTubeAPILoader);\n\n    this.baseLink = 'https://www.googleapis.com/youtube/v3/';\n    this.settings = {\n      key: 'AIzaSyCVyPVUjDEDR9lTtF7_tPdxU3wZzlrBBRI'\n    };\n  }\n\n  _createClass(YouTubeAPILoader, [{\n    key: \"makeUrl\",\n    value: function makeUrl(options, endpoint) {\n      var urlOptions = _objectSpread({}, this.settings, options);\n\n      var url = \"\".concat(this.baseLink).concat(endpoint, \"?\");\n      /* for (const i in urlOptions) {\r\n        if (urlOptions[i] !== '') url += `${i}=${urlOptions[i]}&`;\r\n      } */\n\n      Object.keys(urlOptions).forEach(function (key) {\n        if (urlOptions[key] !== '') url += \"\".concat(key, \"=\").concat(urlOptions[key], \"&\");\n      });\n      return url.slice(0, -1);\n    }\n  }, {\n    key: \"getResp\",\n    value: function getResp(_ref, callback) {\n      var endpoint = _ref.endpoint,\n          _ref$options = _ref.options,\n          options = _ref$options === void 0 ? {} : _ref$options;\n      fetch(this.makeUrl(options, endpoint)).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return callback(data);\n      });\n    }\n  }]);\n\n  return YouTubeAPILoader;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/YouTubeAPILoader.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/js/init.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/js/App.js\");\n\n\nwindow.onload = Object(_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar app = new _App__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\napp.start();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\nfunction init() {\n  var main = document.createElement('main');\n  main.className = 'page-main';\n  main.innerHTML = \"<section class=\\\"user-search\\\">\\n                      <input type=\\\"text\\\" name=\\\"user-search\\\" id=\\\"user-search\\\" placeholder=\\\"Input your request and press Enter\\\">\\n                    </section>\\n                    <section class=\\\"clips-row-container\\\">\\n                      <div class=\\\"clips-row prev\\\"></div>\\n                      <div class=\\\"clips-row current\\\"></div>\\n                      <div class=\\\"clips-row next\\\"></div>\\n                    </section>\\n                    <section class=\\\"bottom-nav\\\">\\n                      <button class=\\\"prev-btn\\\"><</button>\\n                      <div class=\\\"pagesCount\\\"></div>\\n                      <div class=\\\"nav-dots\\\">\\n                        <div class=\\\"dot\\\"></div>\\n                        <div class=\\\"dot\\\"></div>\\n                        <div class=\\\"dot\\\"></div>\\n                        <div class=\\\"dot\\\"></div>\\n                      </div>\\n                      <button class=\\\"next-btn\\\">></button>\\n                    </section>\";\n  document.body.appendChild(main);\n}\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: postVideos, getAmountOnScrean, clearPage, countPagesAmount, countCurrentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postVideos\", function() { return postVideos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAmountOnScrean\", function() { return getAmountOnScrean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPage\", function() { return clearPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countPagesAmount\", function() { return countPagesAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countCurrentPage\", function() { return countCurrentPage; });\nvar postVideos = function postVideos(data, htmlContainer, i) {\n  var basicVideoLink = 'https://www.youtube.com/watch?v=';\n  var videoTitle = data[i].snippet.title;\n  var videoImg = data[i].snippet.thumbnails.medium.url;\n  var videoDescription = data[i].snippet.description;\n  var videoPublished = data[i].snippet.publishedAt.slice(0, 10);\n  var videoViews = data[i].statistics.viewCount;\n  var videoAuthor = data[i].snippet.channelTitle;\n  var videoLink = \"\".concat(basicVideoLink).concat(data[i].id);\n  var div = document.createElement('div');\n  div.setAttribute('data-video-number', \"\".concat(i));\n  div.className = 'clips-item';\n  div.innerHTML = \"<figure class=\\\"clip-image\\\">\\n                    <img src=\\\"\".concat(videoImg, \"\\\" alt=\\\"clip image\\\" width=\\\"320px\\\" height=\\\"180px\\\">\\n                    <p class=\\\"clip-image__link\\\">\\n                      <a href=\\\"\").concat(videoLink, \"\\\" target=\\\"_blank\\\">\").concat(videoTitle, \"</a>\\n                    </p>\\n                    </figure>\\n                    <div class=\\\"clip-info\\\">\\n                      <div class=\\\"clip-info__author\\\">\\n                        <i>Name</i>\\n                        <span>\").concat(videoAuthor, \"</span>\\n                      </div>\\n                      <div class=\\\"clip-info__date\\\">\\n                        <i>Date</i>\\n                        <span>\").concat(videoPublished, \"</span>\\n                      </div>\\n                      <div class=\\\"clip-info__views\\\">\\n                        <i>Views</i>\\n                        <span>\").concat(videoViews, \"</span>\\n                      </div>\\n                    </div>\\n                    <p class=\\\"clip-description\\\">\").concat(videoDescription, \"</p>\");\n  htmlContainer.appendChild(div);\n}; // eslint-disable-next-line consistent-return\n\n\nvar getAmountOnScrean = function getAmountOnScrean(userScrean) {\n  var MOBILE_WIDTH = 700;\n  var LOW_WIDTH = 1040;\n  var MEDIUM_WIDTH = 1400;\n  if (userScrean <= MOBILE_WIDTH) return 1;\n  if (userScrean > MOBILE_WIDTH && userScrean <= LOW_WIDTH) return 2;\n  if (userScrean > LOW_WIDTH && userScrean <= MEDIUM_WIDTH) return 3;\n  if (userScrean > MEDIUM_WIDTH) return 4;\n};\n\nvar clearPage = function clearPage(container) {\n  var videos = container.querySelectorAll('.clips-item');\n\n  for (var i = videos.length - 1; i >= 0; i--) {\n    videos[i].remove();\n  }\n};\n\nvar countPagesAmount = function countPagesAmount(data, amountOnScrean) {\n  return Math.ceil(data.length / amountOnScrean);\n};\n\nvar countCurrentPage = function countCurrentPage(amountOnScrean, targetVideo) {\n  var result = 0;\n  result = Math.ceil((targetVideo + 1) / amountOnScrean);\n  return result;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });