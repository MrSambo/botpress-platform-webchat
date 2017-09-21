module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/Fatalic/Documents/Development/botpress-platform-webchat";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _fs = __webpack_require__(2);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(3);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _umm = __webpack_require__(4);
	
	var _umm2 = _interopRequireDefault(_umm);
	
	var _api = __webpack_require__(8);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _socket = __webpack_require__(22);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _db = __webpack_require__(16);
	
	var _db2 = _interopRequireDefault(_db);
	
	var _botpressPlatformWebchatConfig = __webpack_require__(23);
	
	var _botpressPlatformWebchatConfig2 = _interopRequireDefault(_botpressPlatformWebchatConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var createConfigFile = function createConfigFile(bp) {
	  var name = 'botpress-platform-webchat.config.yml';
	  var file = _path2.default.join(bp.projectLocation, name);
	
	  if (!_fs2.default.existsSync(file)) {
	    _fs2.default.writeFileSync(file, _botpressPlatformWebchatConfig2.default);
	
	    bp.notifications.send({
	      level: 'info',
	      message: name + ' has been created, fill it'
	    });
	  }
	};
	
	module.exports = {
	
	  config: {
	    locale: { type: 'string', required: false, default: 'en-US' },
	
	    botName: { type: 'string', required: false, default: 'Bot' },
	    botAvatarUrl: { type: 'any', required: false, default: null },
	    botConvoTitle: { type: 'string', required: false, default: 'Support' },
	    botConvoDescription: { type: 'string', required: false, default: '' },
	
	    welcomeMsgEnable: { type: 'bool', required: false, default: false },
	    welcomeMsgDelay: { type: 'any', required: false, default: 5000 },
	    welcomeMsgText: { type: 'string', required: false, default: '' },
	
	    backgroundColor: { type: 'string', required: false, default: '#000000' },
	    textColorOnBackground: { type: 'string', required: false, default: '#666666' },
	    foregroundColor: { type: 'string', required: false, default: '#0176ff' },
	    textColorOnForeground: { type: 'string', required: false, default: '#ffffff' },
	
	    uploadsUseS3: { type: 'bool', required: false, default: false, env: 'WEBCHAT_USE_S3' },
	    uploadsS3Bucket: { type: 'string', required: false, default: 'bucket-name', env: 'WEBCHAT_S3_BUCKET' },
	    uploadsS3Region: { type: 'any', required: false, default: null, env: 'WEBCHAT_S3_REGION' },
	    uploadsS3AWSAccessKey: { type: 'any', required: false, default: null, env: 'WEBCHAT_S3_ACCESS_KEY' },
	    uploadsS3AWSAccessSecret: { type: 'any', required: false, default: null, env: 'WEBCHAT_S3_KEY_SECRET' }
	  },
	
	  init: function () {
	    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(bp, configurator) {
	      var config;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return configurator.loadAll();
	
	            case 2:
	              config = _context.sent;
	              _context.next = 5;
	              return (0, _socket2.default)(bp, config);
	
	            case 5:
	
	              bp.middlewares.load(); // TODO Fix that
	
	              createConfigFile(bp);
	
	              // Initialize UMM
	              return _context.abrupt('return', (0, _umm2.default)(bp));
	
	            case 8:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));
	
	    function init(_x, _x2) {
	      return _ref.apply(this, arguments);
	    }
	
	    return init;
	  }(),
	
	  ready: function () {
	    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(bp, configurator) {
	      var _this = this;
	
	      var config, knex, router;
	      return regeneratorRuntime.wrap(function _callee4$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              _context4.next = 2;
	              return configurator.loadAll();
	
	            case 2:
	              config = _context4.sent;
	              _context4.next = 5;
	              return bp.db.get();
	
	            case 5:
	              knex = _context4.sent;
	
	
	              // Initialize the database
	              (0, _db2.default)(knex, bp.botfile).initialize();
	
	              // Setup the APIs
	              _context4.next = 9;
	              return (0, _api2.default)(bp, config);
	
	            case 9:
	              router = _context4.sent;
	
	
	              router.get('/config', function () {
	                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
	                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                      switch (_context2.prev = _context2.next) {
	                        case 0:
	                          _context2.t0 = res;
	                          _context2.next = 3;
	                          return configurator.loadAll();
	
	                        case 3:
	                          _context2.t1 = _context2.sent;
	
	                          _context2.t0.json.call(_context2.t0, _context2.t1);
	
	                        case 5:
	                        case 'end':
	                          return _context2.stop();
	                      }
	                    }
	                  }, _callee2, _this);
	                }));
	
	                return function (_x5, _x6) {
	                  return _ref3.apply(this, arguments);
	                };
	              }());
	
	              router.post('/config', function () {
	                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
	                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                      switch (_context3.prev = _context3.next) {
	                        case 0:
	                          _context3.next = 2;
	                          return configurator.saveAll(newConfigs);
	
	                        case 2:
	                          _context3.t0 = res;
	                          _context3.next = 5;
	                          return configurator.loadAll();
	
	                        case 5:
	                          _context3.t1 = _context3.sent;
	
	                          _context3.t0.json.call(_context3.t0, _context3.t1);
	
	                        case 7:
	                        case 'end':
	                          return _context3.stop();
	                      }
	                    }
	                  }, _callee3, _this);
	                }));
	
	                return function (_x7, _x8) {
	                  return _ref4.apply(this, arguments);
	                };
	              }());
	
	            case 12:
	            case 'end':
	              return _context4.stop();
	          }
	        }
	      }, _callee4, this);
	    }));
	
	    function ready(_x3, _x4) {
	      return _ref2.apply(this, arguments);
	    }
	
	    return ready;
	  }()
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _util = __webpack_require__(5);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bluebird = __webpack_require__(7);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var QUICK_REPLY_PAYLOAD = /\<(.+)\>\s(.+)/i;
	
	// TODO Extract this logic directly to botpress's UMM
	function processQuickReplies(qrs, blocName) {
	  if (!_lodash2.default.isArray(qrs)) {
	    throw new Error('Expected quick_replies to be an array');
	  }
	
	  return qrs.map(function (qr) {
	    if (_lodash2.default.isString(qr) && QUICK_REPLY_PAYLOAD.test(qr)) {
	      var _QUICK_REPLY_PAYLOAD$ = QUICK_REPLY_PAYLOAD.exec(qr),
	          _QUICK_REPLY_PAYLOAD$2 = _slicedToArray(_QUICK_REPLY_PAYLOAD$, 3),
	          payload = _QUICK_REPLY_PAYLOAD$2[1],
	          text = _QUICK_REPLY_PAYLOAD$2[2];
	
	      // <.HELLO> becomes <BLOCNAME.HELLO>
	
	
	      if (payload.startsWith('.')) {
	        payload = blocName + payload;
	      }
	
	      return {
	        title: text,
	        payload: payload.toUpperCase()
	      };
	    }
	
	    return qr;
	  });
	}
	
	function getUserId(event) {
	  var userId = _lodash2.default.get(event, 'user.id') || _lodash2.default.get(event, 'user.userId') || _lodash2.default.get(event, 'userId') || _lodash2.default.get(event, 'raw.from') || _lodash2.default.get(event, 'raw.userId') || _lodash2.default.get(event, 'raw.user.id');
	
	  if (!userId) {
	    throw new Error('Could not find userId in the incoming event.');
	  }
	
	  return userId;
	}
	
	function PromisifyEvent(event) {
	  if (!event._promise) {
	    event._promise = new _bluebird2.default(function (resolve, reject) {
	      event._resolve = resolve;
	      event._reject = reject;
	    });
	  }
	
	  return event;
	}
	
	function _processOutgoing(_ref) {
	  var event = _ref.event,
	      blocName = _ref.blocName,
	      instruction = _ref.instruction;
	
	  var ins = Object.assign({}, instruction); // Create a shallow copy of the instruction
	
	  ////////
	  // PRE-PROCESSING
	  ////////
	
	  var optionsList = ['typing', 'quick_replies'];
	
	  var options = _lodash2.default.pick(instruction, optionsList);
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = optionsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var prop = _step.value;
	
	      delete ins[prop];
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  if (options.quick_replies) {
	    options.quick_replies = processQuickReplies(options.quick_replies, blocName);
	  }
	
	  /////////
	  /// Processing
	  /////////
	
	  if (instruction.type === 'login_prompt') {
	    var user = getUserId(event);
	
	    var raw = Object.assign({
	      to: user,
	      message: instruction.text
	    }, options, _lodash2.default.pick(event && event.raw, 'conversationId'));
	
	    return PromisifyEvent({
	      platform: 'webchat',
	      type: 'login_prompt',
	      user: { id: user },
	      raw: raw,
	      text: instruction.text
	    });
	  }
	
	  if (!_lodash2.default.isNil(instruction.text)) {
	    var _user = getUserId(event);
	
	    var _raw = Object.assign({
	      to: _user,
	      message: instruction.text
	    }, options, _lodash2.default.pick(event && event.raw, 'conversationId'));
	
	    return PromisifyEvent({
	      platform: 'webchat',
	      type: 'text',
	      user: { id: _user },
	      raw: _raw,
	      text: instruction.text
	    });
	  }
	
	  ////////////
	  /// POST-PROCESSING
	  ////////////
	
	  // Nothing to post-process yet
	
	  ////////////
	  /// INVALID INSTRUCTION
	  ////////////
	
	  var strRep = _util2.default.inspect(instruction, false, 1);
	  throw new Error('Unrecognized instruction on Web in bloc \'' + blocName + '\': ' + strRep);
	}
	
	////////////
	/// TEMPLATES
	////////////
	
	function getTemplates() {
	  return [];
	}
	
	module.exports = function (bp) {
	  var _$at = _lodash2.default.at(bp, ['umm', 'umm.registerConnector']),
	      _$at2 = _slicedToArray(_$at, 2),
	      umm = _$at2[0],
	      registerConnector = _$at2[1];
	
	  umm && registerConnector && registerConnector({
	    platform: 'webchat',
	    processOutgoing: function processOutgoing(args) {
	      return _processOutgoing(Object.assign({}, args, { bp: bp }));
	    },
	    templates: getTemplates()
	  });
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("util");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("lodash");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("bluebird");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _path = __webpack_require__(3);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _multer = __webpack_require__(9);
	
	var _multer2 = _interopRequireDefault(_multer);
	
	var _multerS = __webpack_require__(10);
	
	var _multerS2 = _interopRequireDefault(_multerS);
	
	var _awsSdk = __webpack_require__(11);
	
	var _awsSdk2 = _interopRequireDefault(_awsSdk);
	
	var _inject = __webpack_require__(12);
	
	var _inject2 = _interopRequireDefault(_inject);
	
	var _inject3 = __webpack_require__(13);
	
	var _inject4 = _interopRequireDefault(_inject3);
	
	var _notification = __webpack_require__(14);
	
	var _notification2 = _interopRequireDefault(_notification);
	
	var _serveStatic = __webpack_require__(15);
	
	var _serveStatic2 = _interopRequireDefault(_serveStatic);
	
	var _db2 = __webpack_require__(16);
	
	var _db3 = _interopRequireDefault(_db2);
	
	var _users = __webpack_require__(20);
	
	var _users2 = _interopRequireDefault(_users);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var ERR_USER_ID_REQ = "`userId` is required and must be valid";
	var ERR_MSG_TYPE = "`type` is required and must be valid";
	var ERR_CONV_ID_REQ = "`conversationId` is required and must be valid";
	
	/*
	  Supported message types:
	
	  *** type: text ***
	      text: "string", up to 360 chars
	      raw: null
	      data: null
	
	  *** type: file ***
	      text: "text associated with the file", up to 360 chars
	      raw: {
	        file_name: "lol.png"
	        file_mime: "image/png"
	      }
	      data: BINARY_DATA // max size = 10 Mb
	
	 */
	
	module.exports = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(bp, config) {
	    var sendNewMessage = function () {
	      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(userId, conversationId, payload) {
	        var sanitizedPayload, persistedPayload, message, user;
	        return regeneratorRuntime.wrap(function _callee6$(_context6) {
	          while (1) {
	            switch (_context6.prev = _context6.next) {
	              case 0:
	                if (!(!payload.text || !_lodash2.default.isString(payload.text) || payload.text.length > 360)) {
	                  _context6.next = 2;
	                  break;
	                }
	
	                throw new Error('Text must be a valid string of less than 360 chars');
	
	              case 2:
	                sanitizedPayload = _lodash2.default.pick(payload, ['text', 'type', 'data']);
	
	                // Because we don't necessarily persist what we emit/received
	
	                persistedPayload = Object.assign({}, sanitizedPayload);
	
	                // We remove the password from the persisted messages for security reasons
	
	                if (payload.type === 'login_prompt') {
	                  persistedPayload.data = _lodash2.default.omit(persistedPayload.data, ['password']);
	                }
	
	                _context6.next = 7;
	                return appendUserMessage(userId, conversationId, persistedPayload);
	
	              case 7:
	                message = _context6.sent;
	
	
	                Object.assign(message, {
	                  __room: 'visitor:' + userId // This is used to send to the relevant user's socket
	                });
	
	                bp.events.emit('guest.webchat.message', message);
	
	                _context6.next = 12;
	                return getOrCreateUser(userId);
	
	              case 12:
	                user = _context6.sent;
	                return _context6.abrupt('return', bp.middlewares.sendIncoming(Object.assign({
	                  platform: 'webchat',
	                  type: payload.type,
	                  user: user,
	                  text: payload.text,
	                  raw: Object.assign({}, sanitizedPayload, {
	                    conversationId: conversationId
	                  })
	                }, payload.data)));
	
	              case 14:
	              case 'end':
	                return _context6.stop();
	            }
	          }
	        }, _callee6, this);
	      }));
	
	      return function sendNewMessage(_x14, _x15, _x16) {
	        return _ref14.apply(this, arguments);
	      };
	    }();
	
	    var sendEvent = function () {
	      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(userId, event, data) {
	        return regeneratorRuntime.wrap(function _callee7$(_context7) {
	          while (1) {
	            switch (_context7.prev = _context7.next) {
	              case 0:
	              case 'end':
	                return _context7.stop();
	            }
	          }
	        }, _callee7, this);
	      }));
	
	      return function sendEvent(_x17, _x18, _x19) {
	        return _ref15.apply(this, arguments);
	      };
	    }();
	
	    var diskStorage, upload, awsConfig, s3, s3Storage, knex, _db, listConversations, getConversation, appendUserMessage, getOrCreateRecentConversation, _ref2, getOrCreateUser, router, asyncApi, modulePath, staticFolder, validateUserId;
	
	    return regeneratorRuntime.wrap(function _callee8$(_context8) {
	      while (1) {
	        switch (_context8.prev = _context8.next) {
	          case 0:
	            validateUserId = function validateUserId(userId) {
	              return (/[a-z0-9-_]+/i.test(userId)
	              );
	            };
	
	            diskStorage = _multer2.default.diskStorage({
	              limits: {
	                files: 1,
	                fileSize: 5242880 // 5MB
	              },
	              filename: function filename(req, file, cb) {
	                var userId = _lodash2.default.get(req, 'params.userId') || 'anonymous';
	                var ext = _path2.default.extname(file.originalname);
	
	                cb(null, userId + '_' + new Date().getTime() + ext);
	              }
	            });
	            upload = (0, _multer2.default)({ storage: diskStorage });
	
	
	            if (config.uploadsUseS3) {
	              /*
	                You can override AWS's default settings here. Example:
	                { region: 'us-east-1', apiVersion: '2014-10-01', credentials: {...} }
	               */
	              awsConfig = {
	                region: config.uploadsS3Region,
	                credentials: {
	                  accessKeyId: config.uploadsS3AWSAccessKey,
	                  secretAccessKey: config.uploadsS3AWSAccessSecret
	                }
	              };
	
	
	              if (!awsConfig.credentials.accessKeyId && !awsConfig.credentials.secretAccessKey) {
	                delete awsConfig.credentials;
	              }
	
	              if (!awsConfig.region) {
	                delete awsConfig.region;
	              }
	
	              s3 = new _awsSdk2.default.S3(awsConfig);
	              s3Storage = (0, _multerS2.default)({
	                s3: s3,
	                bucket: config.uploadsS3Bucket || 'uploads',
	                contentType: _multerS2.default.AUTO_CONTENT_TYPE,
	                cacheControl: 'max-age=31536000', // one year caching
	                acl: 'public-read',
	                key: function key(req, file, cb) {
	                  var userId = _lodash2.default.get(req, 'params.userId') || 'anonymous';
	                  var ext = _path2.default.extname(file.originalname);
	
	                  cb(null, userId + '_' + new Date().getTime() + ext);
	                }
	              });
	
	
	              upload = (0, _multer2.default)({ storage: s3Storage });
	            }
	
	            _context8.next = 6;
	            return bp.db.get();
	
	          case 6:
	            knex = _context8.sent;
	            _db = (0, _db3.default)(knex, bp.botfile), listConversations = _db.listConversations, getConversation = _db.getConversation, appendUserMessage = _db.appendUserMessage, getOrCreateRecentConversation = _db.getOrCreateRecentConversation;
	            _context8.next = 10;
	            return (0, _users2.default)(bp, config);
	
	          case 10:
	            _ref2 = _context8.sent;
	            getOrCreateUser = _ref2.getOrCreateUser;
	            router = bp.getRouter('botpress-platform-webchat', { auth: false });
	
	            asyncApi = function asyncApi(fn) {
	              return function () {
	                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
	                  return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                      switch (_context.prev = _context.next) {
	                        case 0:
	                          _context.prev = 0;
	                          _context.next = 3;
	                          return fn(req, res, next);
	
	                        case 3:
	                          _context.next = 8;
	                          break;
	
	                        case 5:
	                          _context.prev = 5;
	                          _context.t0 = _context['catch'](0);
	
	                          res.status(500).send(_context.t0 && _context.t0.message);
	
	                        case 8:
	                        case 'end':
	                          return _context.stop();
	                      }
	                    }
	                  }, _callee, undefined, [[0, 5]]);
	                }));
	
	                return function (_x3, _x4, _x5) {
	                  return _ref3.apply(this, arguments);
	                };
	              }();
	            };
	
	            router.get('/inject.js', function (req, res) {
	              res.contentType('text/javascript');
	              res.send(_inject2.default);
	            });
	
	            router.get('/inject.css', function (req, res) {
	              res.contentType('text/css');
	              res.send(_inject4.default);
	            });
	
	            modulePath = bp._loadedModules['botpress-platform-webchat'].root;
	            staticFolder = _path2.default.join(modulePath, './static');
	
	            router.use('/static', (0, _serveStatic2.default)(staticFolder));
	
	            // ?conversationId=xxx (optional)
	            router.post('/messages/:userId', asyncApi(function () {
	              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
	                var _ref5, userId, payload, _ref6, conversationId;
	
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                  while (1) {
	                    switch (_context2.prev = _context2.next) {
	                      case 0:
	                        _ref5 = req.params || {}, userId = _ref5.userId;
	
	                        if (validateUserId(userId)) {
	                          _context2.next = 3;
	                          break;
	                        }
	
	                        return _context2.abrupt('return', res.status(400).send(ERR_USER_ID_REQ));
	
	                      case 3:
	                        _context2.next = 5;
	                        return getOrCreateUser(userId);
	
	                      case 5:
	                        // Just to create the user if it doesn't exist
	
	                        payload = req.body || {};
	                        _ref6 = req.query || {}, conversationId = _ref6.conversationId;
	
	                        conversationId = conversationId && parseInt(conversationId);
	
	                        if (_lodash2.default.includes(['text', 'quick_reply', 'login_prompt'], payload.type)) {
	                          _context2.next = 10;
	                          break;
	                        }
	
	                        return _context2.abrupt('return', res.status(400).send(ERR_MSG_TYPE));
	
	                      case 10:
	                        if (conversationId) {
	                          _context2.next = 14;
	                          break;
	                        }
	
	                        _context2.next = 13;
	                        return getOrCreateRecentConversation(userId);
	
	                      case 13:
	                        conversationId = _context2.sent;
	
	                      case 14:
	                        _context2.next = 16;
	                        return sendNewMessage(userId, conversationId, payload);
	
	                      case 16:
	                        return _context2.abrupt('return', res.sendStatus(200));
	
	                      case 17:
	                      case 'end':
	                        return _context2.stop();
	                    }
	                  }
	                }, _callee2, undefined);
	              }));
	
	              return function (_x6, _x7) {
	                return _ref4.apply(this, arguments);
	              };
	            }()));
	
	            // ?conversationId=xxx (required)
	            router.post('/messages/:userId/files', upload.single('file'), asyncApi(function () {
	              var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
	                var _ref8, userId, _ref9, conversationId, payload;
	
	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                  while (1) {
	                    switch (_context3.prev = _context3.next) {
	                      case 0:
	                        _ref8 = req.params || {}, userId = _ref8.userId;
	
	                        if (validateUserId(userId)) {
	                          _context3.next = 3;
	                          break;
	                        }
	
	                        return _context3.abrupt('return', res.status(400).send(ERR_USER_ID_REQ));
	
	                      case 3:
	                        _context3.next = 5;
	                        return getOrCreateUser(userId);
	
	                      case 5:
	                        // Just to create the user if it doesn't exist
	
	                        _ref9 = req.query || {}, conversationId = _ref9.conversationId;
	
	                        conversationId = conversationId && parseInt(conversationId);
	
	                        if (conversationId) {
	                          _context3.next = 9;
	                          break;
	                        }
	
	                        return _context3.abrupt('return', res.status(400).send(ERR_CONV_ID_REQ));
	
	                      case 9:
	                        payload = {
	                          text: 'Uploaded a file [' + req.file.originalname + ']',
	                          type: 'file',
	                          data: {
	                            storage: req.file.location ? 's3' : 'local',
	                            url: req.file.location || null,
	                            name: req.file.originalname,
	                            mime: req.file.contentType || req.file.mimetype,
	                            size: req.file.size
	                          }
	                        };
	                        _context3.next = 12;
	                        return sendNewMessage(userId, conversationId, payload);
	
	                      case 12:
	                        return _context3.abrupt('return', res.sendStatus(200));
	
	                      case 13:
	                      case 'end':
	                        return _context3.stop();
	                    }
	                  }
	                }, _callee3, undefined);
	              }));
	
	              return function (_x8, _x9) {
	                return _ref7.apply(this, arguments);
	              };
	            }()));
	
	            router.get('/conversations/:userId/:conversationId', function () {
	              var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
	                var _ref11, userId, conversationId, conversation;
	
	                return regeneratorRuntime.wrap(function _callee4$(_context4) {
	                  while (1) {
	                    switch (_context4.prev = _context4.next) {
	                      case 0:
	                        _ref11 = req.params || {}, userId = _ref11.userId, conversationId = _ref11.conversationId;
	
	                        if (validateUserId(userId)) {
	                          _context4.next = 3;
	                          break;
	                        }
	
	                        return _context4.abrupt('return', res.status(400).send(ERR_USER_ID_REQ));
	
	                      case 3:
	                        _context4.next = 5;
	                        return getConversation(userId, conversationId);
	
	                      case 5:
	                        conversation = _context4.sent;
	                        return _context4.abrupt('return', res.send(conversation));
	
	                      case 7:
	                      case 'end':
	                        return _context4.stop();
	                    }
	                  }
	                }, _callee4, undefined);
	              }));
	
	              return function (_x10, _x11) {
	                return _ref10.apply(this, arguments);
	              };
	            }());
	
	            router.get('/conversations/:userId', function () {
	              var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
	                var _ref13, userId, conversations;
	
	                return regeneratorRuntime.wrap(function _callee5$(_context5) {
	                  while (1) {
	                    switch (_context5.prev = _context5.next) {
	                      case 0:
	                        _ref13 = req.params || {}, userId = _ref13.userId;
	
	                        if (validateUserId(userId)) {
	                          _context5.next = 3;
	                          break;
	                        }
	
	                        return _context5.abrupt('return', res.status(400).send(ERR_USER_ID_REQ));
	
	                      case 3:
	                        _context5.next = 5;
	                        return getOrCreateUser(userId);
	
	                      case 5:
	                        _context5.next = 7;
	                        return listConversations(userId);
	
	                      case 7:
	                        conversations = _context5.sent;
	                        return _context5.abrupt('return', res.send([].concat(_toConsumableArray(conversations))));
	
	                      case 9:
	                      case 'end':
	                        return _context5.stop();
	                    }
	                  }
	                }, _callee5, undefined);
	              }));
	
	              return function (_x12, _x13) {
	                return _ref12.apply(this, arguments);
	              };
	            }());
	
	            return _context8.abrupt('return', router);
	
	          case 24:
	          case 'end':
	            return _context8.stop();
	        }
	      }
	    }, _callee8, undefined);
	  }));
	
	  return function (_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("multer");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("multer-s3");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = require("aws-sdk");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "\"use strict\";\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/*! jQuery v3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */\n!function (a, b) {\n  \"use strict\";\n  \"object\" == (typeof module === \"undefined\" ? \"undefined\" : _typeof(module)) && \"object\" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {\n    if (!a.document) throw new Error(\"jQuery requires a window with a document\");return b(a);\n  } : b(a);\n}(\"undefined\" != typeof window ? window : undefined, function (a, b) {\n  \"use strict\";\n  var c = [],\n      d = a.document,\n      e = Object.getPrototypeOf,\n      f = c.slice,\n      g = c.concat,\n      h = c.push,\n      i = c.indexOf,\n      j = {},\n      k = j.toString,\n      l = j.hasOwnProperty,\n      m = l.toString,\n      n = m.call(Object),\n      o = {};function p(a, b) {\n    b = b || d;var c = b.createElement(\"script\");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);\n  }var q = \"3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector\",\n      r = function r(a, b) {\n    return new r.fn.init(a, b);\n  },\n      s = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g,\n      t = /^-ms-/,\n      u = /-([a-z])/g,\n      v = function v(a, b) {\n    return b.toUpperCase();\n  };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {\n      return f.call(this);\n    }, get: function get(a) {\n      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];\n    }, pushStack: function pushStack(a) {\n      var b = r.merge(this.constructor(), a);return b.prevObject = this, b;\n    }, each: function each(a) {\n      return r.each(this, a);\n    }, map: function map(a) {\n      return this.pushStack(r.map(this, function (b, c) {\n        return a.call(b, c, b);\n      }));\n    }, slice: function slice() {\n      return this.pushStack(f.apply(this, arguments));\n    }, first: function first() {\n      return this.eq(0);\n    }, last: function last() {\n      return this.eq(-1);\n    }, eq: function eq(a) {\n      var b = this.length,\n          c = +a + (a < 0 ? b : 0);return this.pushStack(c >= 0 && c < b ? [this[c]] : []);\n    }, end: function end() {\n      return this.prevObject || this.constructor();\n    }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {\n    var a,\n        b,\n        c,\n        d,\n        e,\n        f,\n        g = arguments[0] || {},\n        h = 1,\n        i = arguments.length,\n        j = !1;for (\"boolean\" == typeof g && (j = g, g = arguments[h] || {}, h++), \"object\" == (typeof g === \"undefined\" ? \"undefined\" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {\n      if (null != (a = arguments[h])) for (b in a) {\n        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));\n      }\n    }return g;\n  }, r.extend({ expando: \"jQuery\" + (q + Math.random()).replace(/\\D/g, \"\"), isReady: !0, error: function error(a) {\n      throw new Error(a);\n    }, noop: function noop() {}, isFunction: function isFunction(a) {\n      return \"function\" === r.type(a);\n    }, isWindow: function isWindow(a) {\n      return null != a && a === a.window;\n    }, isNumeric: function isNumeric(a) {\n      var b = r.type(a);return (\"number\" === b || \"string\" === b) && !isNaN(a - parseFloat(a));\n    }, isPlainObject: function isPlainObject(a) {\n      var b, c;return !(!a || \"[object Object]\" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, \"constructor\") && b.constructor, \"function\" == typeof c && m.call(c) === n));\n    }, isEmptyObject: function isEmptyObject(a) {\n      var b;for (b in a) {\n        return !1;\n      }return !0;\n    }, type: function type(a) {\n      return null == a ? a + \"\" : \"object\" == (typeof a === \"undefined\" ? \"undefined\" : _typeof(a)) || \"function\" == typeof a ? j[k.call(a)] || \"object\" : typeof a === \"undefined\" ? \"undefined\" : _typeof(a);\n    }, globalEval: function globalEval(a) {\n      p(a);\n    }, camelCase: function camelCase(a) {\n      return a.replace(t, \"ms-\").replace(u, v);\n    }, each: function each(a, b) {\n      var c,\n          d = 0;if (w(a)) {\n        for (c = a.length; d < c; d++) {\n          if (b.call(a[d], d, a[d]) === !1) break;\n        }\n      } else for (d in a) {\n        if (b.call(a[d], d, a[d]) === !1) break;\n      }return a;\n    }, trim: function trim(a) {\n      return null == a ? \"\" : (a + \"\").replace(s, \"\");\n    }, makeArray: function makeArray(a, b) {\n      var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, \"string\" == typeof a ? [a] : a) : h.call(c, a)), c;\n    }, inArray: function inArray(a, b, c) {\n      return null == b ? -1 : i.call(b, a, c);\n    }, merge: function merge(a, b) {\n      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {\n        a[e++] = b[d];\n      }return a.length = e, a;\n    }, grep: function grep(a, b, c) {\n      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {\n        d = !b(a[f], f), d !== h && e.push(a[f]);\n      }return e;\n    }, map: function map(a, b, c) {\n      var d,\n          e,\n          f = 0,\n          h = [];if (w(a)) for (d = a.length; f < d; f++) {\n        e = b(a[f], f, c), null != e && h.push(e);\n      } else for (f in a) {\n        e = b(a[f], f, c), null != e && h.push(e);\n      }return g.apply([], h);\n    }, guid: 1, proxy: function proxy(a, b) {\n      var c, d, e;if (\"string\" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {\n        return a.apply(b || this, d.concat(f.call(arguments)));\n      }, e.guid = a.guid = a.guid || r.guid++, e;\n    }, now: Date.now, support: o }), \"function\" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each(\"Boolean Number String Function Array Date RegExp Object Error Symbol\".split(\" \"), function (a, b) {\n    j[\"[object \" + b + \"]\"] = b.toLowerCase();\n  });function w(a) {\n    var b = !!a && \"length\" in a && a.length,\n        c = r.type(a);return \"function\" !== c && !r.isWindow(a) && (\"array\" === c || 0 === b || \"number\" == typeof b && b > 0 && b - 1 in a);\n  }var x = function (a) {\n    var b,\n        c,\n        d,\n        e,\n        f,\n        g,\n        h,\n        i,\n        j,\n        k,\n        l,\n        m,\n        n,\n        o,\n        p,\n        q,\n        r,\n        s,\n        t,\n        u = \"sizzle\" + 1 * new Date(),\n        v = a.document,\n        w = 0,\n        x = 0,\n        y = ha(),\n        z = ha(),\n        A = ha(),\n        B = function B(a, b) {\n      return a === b && (l = !0), 0;\n    },\n        C = {}.hasOwnProperty,\n        D = [],\n        E = D.pop,\n        F = D.push,\n        G = D.push,\n        H = D.slice,\n        I = function I(a, b) {\n      for (var c = 0, d = a.length; c < d; c++) {\n        if (a[c] === b) return c;\n      }return -1;\n    },\n        J = \"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped\",\n        K = \"[\\\\x20\\\\t\\\\r\\\\n\\\\f]\",\n        L = \"(?:\\\\\\\\.|[\\\\w-]|[^\\0-\\\\xa0])+\",\n        M = \"\\\\[\" + K + \"*(\" + L + \")(?:\" + K + \"*([*^$|!~]?=)\" + K + \"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\"|(\" + L + \"))|)\" + K + \"*\\\\]\",\n        N = \":(\" + L + \")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\\"((?:\\\\\\\\.|[^\\\\\\\\\\\"])*)\\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\" + M + \")*)|.*)\\\\)|)\",\n        O = new RegExp(K + \"+\", \"g\"),\n        P = new RegExp(\"^\" + K + \"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)\" + K + \"+$\", \"g\"),\n        Q = new RegExp(\"^\" + K + \"*,\" + K + \"*\"),\n        R = new RegExp(\"^\" + K + \"*([>+~]|\" + K + \")\" + K + \"*\"),\n        S = new RegExp(\"=\" + K + \"*([^\\\\]'\\\"]*?)\" + K + \"*\\\\]\", \"g\"),\n        T = new RegExp(N),\n        U = new RegExp(\"^\" + L + \"$\"),\n        V = { ID: new RegExp(\"^#(\" + L + \")\"), CLASS: new RegExp(\"^\\\\.(\" + L + \")\"), TAG: new RegExp(\"^(\" + L + \"|[*])\"), ATTR: new RegExp(\"^\" + M), PSEUDO: new RegExp(\"^\" + N), CHILD: new RegExp(\"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(\" + K + \"*(even|odd|(([+-]|)(\\\\d*)n|)\" + K + \"*(?:([+-]|)\" + K + \"*(\\\\d+)|))\" + K + \"*\\\\)|)\", \"i\"), bool: new RegExp(\"^(?:\" + J + \")$\", \"i\"), needsContext: new RegExp(\"^\" + K + \"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(\" + K + \"*((?:-\\\\d)?\\\\d*)\" + K + \"*\\\\)|)(?=[^-]|$)\", \"i\") },\n        W = /^(?:input|select|textarea|button)$/i,\n        X = /^h\\d$/i,\n        Y = /^[^{]+\\{\\s*\\[native \\w/,\n        Z = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,\n        $ = /[+~]/,\n        _ = new RegExp(\"\\\\\\\\([\\\\da-f]{1,6}\" + K + \"?|(\" + K + \")|.)\", \"ig\"),\n        aa = function aa(a, b, c) {\n      var d = \"0x\" + b - 65536;return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);\n    },\n        ba = /([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g,\n        ca = function ca(a, b) {\n      return b ? \"\\0\" === a ? \"\\uFFFD\" : a.slice(0, -1) + \"\\\\\" + a.charCodeAt(a.length - 1).toString(16) + \" \" : \"\\\\\" + a;\n    },\n        da = function da() {\n      m();\n    },\n        ea = ta(function (a) {\n      return a.disabled === !0 && (\"form\" in a || \"label\" in a);\n    }, { dir: \"parentNode\", next: \"legend\" });try {\n      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;\n    } catch (fa) {\n      G = { apply: D.length ? function (a, b) {\n          F.apply(a, H.call(b));\n        } : function (a, b) {\n          var c = a.length,\n              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;\n        } };\n    }function ga(a, b, d, e) {\n      var f,\n          h,\n          j,\n          k,\n          l,\n          o,\n          r,\n          s = b && b.ownerDocument,\n          w = b ? b.nodeType : 9;if (d = d || [], \"string\" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {\n        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {\n          if (9 === w) {\n            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;\n          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;\n        } else {\n          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;\n        }if (c.qsa && !A[a + \" \"] && (!q || !q.test(a))) {\n          if (1 !== w) s = b, r = a;else if (\"object\" !== b.nodeName.toLowerCase()) {\n            (k = b.getAttribute(\"id\")) ? k = k.replace(ba, ca) : b.setAttribute(\"id\", k = u), o = g(a), h = o.length;while (h--) {\n              o[h] = \"#\" + k + \" \" + sa(o[h]);\n            }r = o.join(\",\"), s = $.test(a) && qa(b.parentNode) || b;\n          }if (r) try {\n            return G.apply(d, s.querySelectorAll(r)), d;\n          } catch (x) {} finally {\n            k === u && b.removeAttribute(\"id\");\n          }\n        }\n      }return i(a.replace(P, \"$1\"), b, d, e);\n    }function ha() {\n      var a = [];function b(c, e) {\n        return a.push(c + \" \") > d.cacheLength && delete b[a.shift()], b[c + \" \"] = e;\n      }return b;\n    }function ia(a) {\n      return a[u] = !0, a;\n    }function ja(a) {\n      var b = n.createElement(\"fieldset\");try {\n        return !!a(b);\n      } catch (c) {\n        return !1;\n      } finally {\n        b.parentNode && b.parentNode.removeChild(b), b = null;\n      }\n    }function ka(a, b) {\n      var c = a.split(\"|\"),\n          e = c.length;while (e--) {\n        d.attrHandle[c[e]] = b;\n      }\n    }function la(a, b) {\n      var c = b && a,\n          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {\n        if (c === b) return -1;\n      }return a ? 1 : -1;\n    }function ma(a) {\n      return function (b) {\n        var c = b.nodeName.toLowerCase();return \"input\" === c && b.type === a;\n      };\n    }function na(a) {\n      return function (b) {\n        var c = b.nodeName.toLowerCase();return (\"input\" === c || \"button\" === c) && b.type === a;\n      };\n    }function oa(a) {\n      return function (b) {\n        return \"form\" in b ? b.parentNode && b.disabled === !1 ? \"label\" in b ? \"label\" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : \"label\" in b && b.disabled === a;\n      };\n    }function pa(a) {\n      return ia(function (b) {\n        return b = +b, ia(function (c, d) {\n          var e,\n              f = a([], c.length, b),\n              g = f.length;while (g--) {\n            c[e = f[g]] && (c[e] = !(d[e] = c[e]));\n          }\n        });\n      });\n    }function qa(a) {\n      return a && \"undefined\" != typeof a.getElementsByTagName && a;\n    }c = ga.support = {}, f = ga.isXML = function (a) {\n      var b = a && (a.ownerDocument || a).documentElement;return !!b && \"HTML\" !== b.nodeName;\n    }, m = ga.setDocument = function (a) {\n      var b,\n          e,\n          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener(\"unload\", da, !1) : e.attachEvent && e.attachEvent(\"onunload\", da)), c.attributes = ja(function (a) {\n        return a.className = \"i\", !a.getAttribute(\"className\");\n      }), c.getElementsByTagName = ja(function (a) {\n        return a.appendChild(n.createComment(\"\")), !a.getElementsByTagName(\"*\").length;\n      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {\n        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;\n      }), c.getById ? (d.filter.ID = function (a) {\n        var b = a.replace(_, aa);return function (a) {\n          return a.getAttribute(\"id\") === b;\n        };\n      }, d.find.ID = function (a, b) {\n        if (\"undefined\" != typeof b.getElementById && p) {\n          var c = b.getElementById(a);return c ? [c] : [];\n        }\n      }) : (d.filter.ID = function (a) {\n        var b = a.replace(_, aa);return function (a) {\n          var c = \"undefined\" != typeof a.getAttributeNode && a.getAttributeNode(\"id\");return c && c.value === b;\n        };\n      }, d.find.ID = function (a, b) {\n        if (\"undefined\" != typeof b.getElementById && p) {\n          var c,\n              d,\n              e,\n              f = b.getElementById(a);if (f) {\n            if (c = f.getAttributeNode(\"id\"), c && c.value === a) return [f];e = b.getElementsByName(a), d = 0;while (f = e[d++]) {\n              if (c = f.getAttributeNode(\"id\"), c && c.value === a) return [f];\n            }\n          }return [];\n        }\n      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {\n        return \"undefined\" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;\n      } : function (a, b) {\n        var c,\n            d = [],\n            e = 0,\n            f = b.getElementsByTagName(a);if (\"*\" === a) {\n          while (c = f[e++]) {\n            1 === c.nodeType && d.push(c);\n          }return d;\n        }return f;\n      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {\n        if (\"undefined\" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);\n      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {\n        o.appendChild(a).innerHTML = \"<a id='\" + u + \"'></a><select id='\" + u + \"-\\r\\\\' msallowcapture=''><option selected=''></option></select>\", a.querySelectorAll(\"[msallowcapture^='']\").length && q.push(\"[*^$]=\" + K + \"*(?:''|\\\"\\\")\"), a.querySelectorAll(\"[selected]\").length || q.push(\"\\\\[\" + K + \"*(?:value|\" + J + \")\"), a.querySelectorAll(\"[id~=\" + u + \"-]\").length || q.push(\"~=\"), a.querySelectorAll(\":checked\").length || q.push(\":checked\"), a.querySelectorAll(\"a#\" + u + \"+*\").length || q.push(\".#.+[+~]\");\n      }), ja(function (a) {\n        a.innerHTML = \"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>\";var b = n.createElement(\"input\");b.setAttribute(\"type\", \"hidden\"), a.appendChild(b).setAttribute(\"name\", \"D\"), a.querySelectorAll(\"[name=d]\").length && q.push(\"name\" + K + \"*[*^$|!~]?=\"), 2 !== a.querySelectorAll(\":enabled\").length && q.push(\":enabled\", \":disabled\"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(\":disabled\").length && q.push(\":enabled\", \":disabled\"), a.querySelectorAll(\"*,:x\"), q.push(\",.*:\");\n      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {\n        c.disconnectedMatch = s.call(a, \"*\"), s.call(a, \"[s!='']:x\"), r.push(\"!=\", N);\n      }), q = q.length && new RegExp(q.join(\"|\")), r = r.length && new RegExp(r.join(\"|\")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {\n        var c = 9 === a.nodeType ? a.documentElement : a,\n            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));\n      } : function (a, b) {\n        if (b) while (b = b.parentNode) {\n          if (b === a) return !0;\n        }return !1;\n      }, B = b ? function (a, b) {\n        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);\n      } : function (a, b) {\n        if (a === b) return l = !0, 0;var c,\n            d = 0,\n            e = a.parentNode,\n            f = b.parentNode,\n            g = [a],\n            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {\n          g.unshift(c);\n        }c = b;while (c = c.parentNode) {\n          h.unshift(c);\n        }while (g[d] === h[d]) {\n          d++;\n        }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;\n      }, n) : n;\n    }, ga.matches = function (a, b) {\n      return ga(a, null, null, b);\n    }, ga.matchesSelector = function (a, b) {\n      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, \"='$1']\"), c.matchesSelector && p && !A[b + \" \"] && (!r || !r.test(b)) && (!q || !q.test(b))) try {\n        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;\n      } catch (e) {}return ga(b, n, null, [a]).length > 0;\n    }, ga.contains = function (a, b) {\n      return (a.ownerDocument || a) !== n && m(a), t(a, b);\n    }, ga.attr = function (a, b) {\n      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],\n          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;\n    }, ga.escape = function (a) {\n      return (a + \"\").replace(ba, ca);\n    }, ga.error = function (a) {\n      throw new Error(\"Syntax error, unrecognized expression: \" + a);\n    }, ga.uniqueSort = function (a) {\n      var b,\n          d = [],\n          e = 0,\n          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {\n        while (b = a[f++]) {\n          b === a[f] && (e = d.push(f));\n        }while (e--) {\n          a.splice(d[e], 1);\n        }\n      }return k = null, a;\n    }, e = ga.getText = function (a) {\n      var b,\n          c = \"\",\n          d = 0,\n          f = a.nodeType;if (f) {\n        if (1 === f || 9 === f || 11 === f) {\n          if (\"string\" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {\n            c += e(a);\n          }\n        } else if (3 === f || 4 === f) return a.nodeValue;\n      } else while (b = a[d++]) {\n        c += e(b);\n      }return c;\n    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { \">\": { dir: \"parentNode\", first: !0 }, \" \": { dir: \"parentNode\" }, \"+\": { dir: \"previousSibling\", first: !0 }, \"~\": { dir: \"previousSibling\" } }, preFilter: { ATTR: function ATTR(a) {\n          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || \"\").replace(_, aa), \"~=\" === a[2] && (a[3] = \" \" + a[3] + \" \"), a.slice(0, 4);\n        }, CHILD: function CHILD(a) {\n          return a[1] = a[1].toLowerCase(), \"nth\" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (\"even\" === a[3] || \"odd\" === a[3])), a[5] = +(a[7] + a[8] || \"odd\" === a[3])) : a[3] && ga.error(a[0]), a;\n        }, PSEUDO: function PSEUDO(a) {\n          var b,\n              c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || \"\" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(\")\", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));\n        } }, filter: { TAG: function TAG(a) {\n          var b = a.replace(_, aa).toLowerCase();return \"*\" === a ? function () {\n            return !0;\n          } : function (a) {\n            return a.nodeName && a.nodeName.toLowerCase() === b;\n          };\n        }, CLASS: function CLASS(a) {\n          var b = y[a + \" \"];return b || (b = new RegExp(\"(^|\" + K + \")\" + a + \"(\" + K + \"|$)\")) && y(a, function (a) {\n            return b.test(\"string\" == typeof a.className && a.className || \"undefined\" != typeof a.getAttribute && a.getAttribute(\"class\") || \"\");\n          });\n        }, ATTR: function ATTR(a, b, c) {\n          return function (d) {\n            var e = ga.attr(d, a);return null == e ? \"!=\" === b : !b || (e += \"\", \"=\" === b ? e === c : \"!=\" === b ? e !== c : \"^=\" === b ? c && 0 === e.indexOf(c) : \"*=\" === b ? c && e.indexOf(c) > -1 : \"$=\" === b ? c && e.slice(-c.length) === c : \"~=\" === b ? (\" \" + e.replace(O, \" \") + \" \").indexOf(c) > -1 : \"|=\" === b && (e === c || e.slice(0, c.length + 1) === c + \"-\"));\n          };\n        }, CHILD: function CHILD(a, b, c, d, e) {\n          var f = \"nth\" !== a.slice(0, 3),\n              g = \"last\" !== a.slice(-4),\n              h = \"of-type\" === b;return 1 === d && 0 === e ? function (a) {\n            return !!a.parentNode;\n          } : function (b, c, i) {\n            var j,\n                k,\n                l,\n                m,\n                n,\n                o,\n                p = f !== g ? \"nextSibling\" : \"previousSibling\",\n                q = b.parentNode,\n                r = h && b.nodeName.toLowerCase(),\n                s = !i && !h,\n                t = !1;if (q) {\n              if (f) {\n                while (p) {\n                  m = b;while (m = m[p]) {\n                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;\n                  }o = p = \"only\" === a && !o && \"nextSibling\";\n                }return !0;\n              }if (o = [g ? q.firstChild : q.lastChild], g && s) {\n                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {\n                  if (1 === m.nodeType && ++t && m === b) {\n                    k[a] = [w, n, t];break;\n                  }\n                }\n              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {\n                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;\n              }return t -= e, t === d || t % d === 0 && t / d >= 0;\n            }\n          };\n        }, PSEUDO: function PSEUDO(a, b) {\n          var c,\n              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error(\"unsupported pseudo: \" + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, \"\", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {\n            var d,\n                f = e(a, b),\n                g = f.length;while (g--) {\n              d = I(a, f[g]), a[d] = !(c[d] = f[g]);\n            }\n          }) : function (a) {\n            return e(a, 0, c);\n          }) : e;\n        } }, pseudos: { not: ia(function (a) {\n          var b = [],\n              c = [],\n              d = h(a.replace(P, \"$1\"));return d[u] ? ia(function (a, b, c, e) {\n            var f,\n                g = d(a, null, e, []),\n                h = a.length;while (h--) {\n              (f = g[h]) && (a[h] = !(b[h] = f));\n            }\n          }) : function (a, e, f) {\n            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();\n          };\n        }), has: ia(function (a) {\n          return function (b) {\n            return ga(a, b).length > 0;\n          };\n        }), contains: ia(function (a) {\n          return a = a.replace(_, aa), function (b) {\n            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;\n          };\n        }), lang: ia(function (a) {\n          return U.test(a || \"\") || ga.error(\"unsupported lang: \" + a), a = a.replace(_, aa).toLowerCase(), function (b) {\n            var c;do {\n              if (c = p ? b.lang : b.getAttribute(\"xml:lang\") || b.getAttribute(\"lang\")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + \"-\");\n            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;\n          };\n        }), target: function target(b) {\n          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;\n        }, root: function root(a) {\n          return a === o;\n        }, focus: function focus(a) {\n          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);\n        }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {\n          var b = a.nodeName.toLowerCase();return \"input\" === b && !!a.checked || \"option\" === b && !!a.selected;\n        }, selected: function selected(a) {\n          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;\n        }, empty: function empty(a) {\n          for (a = a.firstChild; a; a = a.nextSibling) {\n            if (a.nodeType < 6) return !1;\n          }return !0;\n        }, parent: function parent(a) {\n          return !d.pseudos.empty(a);\n        }, header: function header(a) {\n          return X.test(a.nodeName);\n        }, input: function input(a) {\n          return W.test(a.nodeName);\n        }, button: function button(a) {\n          var b = a.nodeName.toLowerCase();return \"input\" === b && \"button\" === a.type || \"button\" === b;\n        }, text: function text(a) {\n          var b;return \"input\" === a.nodeName.toLowerCase() && \"text\" === a.type && (null == (b = a.getAttribute(\"type\")) || \"text\" === b.toLowerCase());\n        }, first: pa(function () {\n          return [0];\n        }), last: pa(function (a, b) {\n          return [b - 1];\n        }), eq: pa(function (a, b, c) {\n          return [c < 0 ? c + b : c];\n        }), even: pa(function (a, b) {\n          for (var c = 0; c < b; c += 2) {\n            a.push(c);\n          }return a;\n        }), odd: pa(function (a, b) {\n          for (var c = 1; c < b; c += 2) {\n            a.push(c);\n          }return a;\n        }), lt: pa(function (a, b, c) {\n          for (var d = c < 0 ? c + b : c; --d >= 0;) {\n            a.push(d);\n          }return a;\n        }), gt: pa(function (a, b, c) {\n          for (var d = c < 0 ? c + b : c; ++d < b;) {\n            a.push(d);\n          }return a;\n        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {\n      d.pseudos[b] = ma(b);\n    }for (b in { submit: !0, reset: !0 }) {\n      d.pseudos[b] = na(b);\n    }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {\n      var c,\n          e,\n          f,\n          g,\n          h,\n          i,\n          j,\n          k = z[a + \" \"];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {\n        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, \" \") }), h = h.slice(c.length));for (g in d.filter) {\n          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));\n        }if (!c) break;\n      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);\n    };function sa(a) {\n      for (var b = 0, c = a.length, d = \"\"; b < c; b++) {\n        d += a[b].value;\n      }return d;\n    }function ta(a, b, c) {\n      var d = b.dir,\n          e = b.next,\n          f = e || d,\n          g = c && \"parentNode\" === f,\n          h = x++;return b.first ? function (b, c, e) {\n        while (b = b[d]) {\n          if (1 === b.nodeType || g) return a(b, c, e);\n        }return !1;\n      } : function (b, c, i) {\n        var j,\n            k,\n            l,\n            m = [w, h];if (i) {\n          while (b = b[d]) {\n            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;\n          }\n        } else while (b = b[d]) {\n          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {\n            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;\n          }\n        }return !1;\n      };\n    }function ua(a) {\n      return a.length > 1 ? function (b, c, d) {\n        var e = a.length;while (e--) {\n          if (!a[e](b, c, d)) return !1;\n        }return !0;\n      } : a[0];\n    }function va(a, b, c) {\n      for (var d = 0, e = b.length; d < e; d++) {\n        ga(a, b[d], c);\n      }return c;\n    }function wa(a, b, c, d, e) {\n      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {\n        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));\n      }return g;\n    }function xa(a, b, c, d, e, f) {\n      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {\n        var j,\n            k,\n            l,\n            m = [],\n            n = [],\n            o = g.length,\n            p = f || va(b || \"*\", h.nodeType ? [h] : h, []),\n            q = !a || !f && b ? p : wa(p, m, a, h, i),\n            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {\n          j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {\n            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));\n          }\n        }if (f) {\n          if (e || a) {\n            if (e) {\n              j = [], k = r.length;while (k--) {\n                (l = r[k]) && j.push(q[k] = l);\n              }e(null, r = [], j, i);\n            }k = r.length;while (k--) {\n              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));\n            }\n          }\n        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);\n      });\n    }function ya(a) {\n      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[\" \"], i = g ? 1 : 0, k = ta(function (a) {\n        return a === b;\n      }, h, !0), l = ta(function (a) {\n        return I(b, a) > -1;\n      }, h, !0), m = [function (a, c, d) {\n        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;\n      }]; i < f; i++) {\n        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {\n          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {\n            for (e = ++i; e < f; e++) {\n              if (d.relative[a[e].type]) break;\n            }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: \" \" === a[i - 2].type ? \"*\" : \"\" })).replace(P, \"$1\"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));\n          }m.push(c);\n        }\n      }return ua(m);\n    }function za(a, b) {\n      var c = b.length > 0,\n          e = a.length > 0,\n          f = function f(_f, g, h, i, k) {\n        var l,\n            o,\n            q,\n            r = 0,\n            s = \"0\",\n            t = _f && [],\n            u = [],\n            v = j,\n            x = _f || e && d.find.TAG(\"*\", k),\n            y = w += null == v ? 1 : Math.random() || .1,\n            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {\n          if (e && l) {\n            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {\n              if (q(l, g || n, h)) {\n                i.push(l);break;\n              }\n            }k && (w = y);\n          }c && ((l = !q && l) && r--, _f && t.push(l));\n        }if (r += s, c && s !== r) {\n          o = 0;while (q = b[o++]) {\n            q(t, u, g, h);\n          }if (_f) {\n            if (r > 0) while (s--) {\n              t[s] || u[s] || (u[s] = E.call(i));\n            }u = wa(u);\n          }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);\n        }return k && (w = y, j = v), t;\n      };return c ? ia(f) : f;\n    }return h = ga.compile = function (a, b) {\n      var c,\n          d = [],\n          e = [],\n          f = A[a + \" \"];if (!f) {\n        b || (b = g(a)), c = b.length;while (c--) {\n          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);\n        }f = A(a, za(e, d)), f.selector = a;\n      }return f;\n    }, i = ga.select = function (a, b, c, e) {\n      var f,\n          i,\n          j,\n          k,\n          l,\n          m = \"function\" == typeof a && a,\n          n = !e && g(a = m.selector || a);if (c = c || [], 1 === n.length) {\n        if (i = n[0] = n[0].slice(0), i.length > 2 && \"ID\" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {\n          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;m && (b = b.parentNode), a = a.slice(i.shift().value.length);\n        }f = V.needsContext.test(a) ? 0 : i.length;while (f--) {\n          if (j = i[f], d.relative[k = j.type]) break;if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {\n            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;break;\n          }\n        }\n      }return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;\n    }, c.sortStable = u.split(\"\").sort(B).join(\"\") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {\n      return 1 & a.compareDocumentPosition(n.createElement(\"fieldset\"));\n    }), ja(function (a) {\n      return a.innerHTML = \"<a href='#'></a>\", \"#\" === a.firstChild.getAttribute(\"href\");\n    }) || ka(\"type|href|height|width\", function (a, b, c) {\n      if (!c) return a.getAttribute(b, \"type\" === b.toLowerCase() ? 1 : 2);\n    }), c.attributes && ja(function (a) {\n      return a.innerHTML = \"<input/>\", a.firstChild.setAttribute(\"value\", \"\"), \"\" === a.firstChild.getAttribute(\"value\");\n    }) || ka(\"value\", function (a, b, c) {\n      if (!c && \"input\" === a.nodeName.toLowerCase()) return a.defaultValue;\n    }), ja(function (a) {\n      return null == a.getAttribute(\"disabled\");\n    }) || ka(J, function (a, b, c) {\n      var d;if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;\n    }), ga;\n  }(a);r.find = x, r.expr = x.selectors, r.expr[\":\"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {\n    var d = [],\n        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {\n      if (1 === a.nodeType) {\n        if (e && r(a).is(c)) break;d.push(a);\n      }\n    }return d;\n  },\n      z = function z(a, b) {\n    for (var c = []; a; a = a.nextSibling) {\n      1 === a.nodeType && a !== b && c.push(a);\n    }return c;\n  },\n      A = r.expr.match.needsContext;function B(a, b) {\n    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();\n  }var C = /^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i,\n      D = /^.[^:#\\[\\.,]*$/;function E(a, b, c) {\n    return r.isFunction(b) ? r.grep(a, function (a, d) {\n      return !!b.call(a, d, a) !== c;\n    }) : b.nodeType ? r.grep(a, function (a) {\n      return a === b !== c;\n    }) : \"string\" != typeof b ? r.grep(a, function (a) {\n      return i.call(b, a) > -1 !== c;\n    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {\n      return i.call(b, a) > -1 !== c && 1 === a.nodeType;\n    }));\n  }r.filter = function (a, b, c) {\n    var d = b[0];return c && (a = \":not(\" + a + \")\"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {\n      return 1 === a.nodeType;\n    }));\n  }, r.fn.extend({ find: function find(a) {\n      var b,\n          c,\n          d = this.length,\n          e = this;if (\"string\" != typeof a) return this.pushStack(r(a).filter(function () {\n        for (b = 0; b < d; b++) {\n          if (r.contains(e[b], this)) return !0;\n        }\n      }));for (c = this.pushStack([]), b = 0; b < d; b++) {\n        r.find(a, e[b], c);\n      }return d > 1 ? r.uniqueSort(c) : c;\n    }, filter: function filter(a) {\n      return this.pushStack(E(this, a || [], !1));\n    }, not: function not(a) {\n      return this.pushStack(E(this, a || [], !0));\n    }, is: function is(a) {\n      return !!E(this, \"string\" == typeof a && A.test(a) ? r(a) : a || [], !1).length;\n    } });var F,\n      G = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/,\n      H = r.fn.init = function (a, b, c) {\n    var e, f;if (!a) return this;if (c = c || F, \"string\" == typeof a) {\n      if (e = \"<\" === a[0] && \">\" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {\n        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {\n          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);\n        }return this;\n      }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;\n    }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);\n  };H.prototype = r.fn, F = r(d);var I = /^(?:parents|prev(?:Until|All))/,\n      J = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {\n      var b = r(a, this),\n          c = b.length;return this.filter(function () {\n        for (var a = 0; a < c; a++) {\n          if (r.contains(this, b[a])) return !0;\n        }\n      });\n    }, closest: function closest(a, b) {\n      var c,\n          d = 0,\n          e = this.length,\n          f = [],\n          g = \"string\" != typeof a && r(a);if (!A.test(a)) for (; d < e; d++) {\n        for (c = this[d]; c && c !== b; c = c.parentNode) {\n          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {\n            f.push(c);break;\n          }\n        }\n      }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);\n    }, index: function index(a) {\n      return a ? \"string\" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;\n    }, add: function add(a, b) {\n      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));\n    }, addBack: function addBack(a) {\n      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));\n    } });function K(a, b) {\n    while ((a = a[b]) && 1 !== a.nodeType) {}return a;\n  }r.each({ parent: function parent(a) {\n      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;\n    }, parents: function parents(a) {\n      return y(a, \"parentNode\");\n    }, parentsUntil: function parentsUntil(a, b, c) {\n      return y(a, \"parentNode\", c);\n    }, next: function next(a) {\n      return K(a, \"nextSibling\");\n    }, prev: function prev(a) {\n      return K(a, \"previousSibling\");\n    }, nextAll: function nextAll(a) {\n      return y(a, \"nextSibling\");\n    }, prevAll: function prevAll(a) {\n      return y(a, \"previousSibling\");\n    }, nextUntil: function nextUntil(a, b, c) {\n      return y(a, \"nextSibling\", c);\n    }, prevUntil: function prevUntil(a, b, c) {\n      return y(a, \"previousSibling\", c);\n    }, siblings: function siblings(a) {\n      return z((a.parentNode || {}).firstChild, a);\n    }, children: function children(a) {\n      return z(a.firstChild);\n    }, contents: function contents(a) {\n      return B(a, \"iframe\") ? a.contentDocument : (B(a, \"template\") && (a = a.content || a), r.merge([], a.childNodes));\n    } }, function (a, b) {\n    r.fn[a] = function (c, d) {\n      var e = r.map(this, b, c);return \"Until\" !== a.slice(-5) && (d = c), d && \"string\" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);\n    };\n  });var L = /[^\\x20\\t\\r\\n\\f]+/g;function M(a) {\n    var b = {};return r.each(a.match(L) || [], function (a, c) {\n      b[c] = !0;\n    }), b;\n  }r.Callbacks = function (a) {\n    a = \"string\" == typeof a ? M(a) : r.extend({}, a);var b,\n        c,\n        d,\n        e,\n        f = [],\n        g = [],\n        h = -1,\n        i = function i() {\n      for (e = e || a.once, d = b = !0; g.length; h = -1) {\n        c = g.shift();while (++h < f.length) {\n          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);\n        }\n      }a.memory || (c = !1), b = !1, e && (f = c ? [] : \"\");\n    },\n        j = { add: function add() {\n        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {\n          r.each(b, function (b, c) {\n            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && \"string\" !== r.type(c) && d(c);\n          });\n        }(arguments), c && !b && i()), this;\n      }, remove: function remove() {\n        return r.each(arguments, function (a, b) {\n          var c;while ((c = r.inArray(b, f, c)) > -1) {\n            f.splice(c, 1), c <= h && h--;\n          }\n        }), this;\n      }, has: function has(a) {\n        return a ? r.inArray(a, f) > -1 : f.length > 0;\n      }, empty: function empty() {\n        return f && (f = []), this;\n      }, disable: function disable() {\n        return e = g = [], f = c = \"\", this;\n      }, disabled: function disabled() {\n        return !f;\n      }, lock: function lock() {\n        return e = g = [], c || b || (f = c = \"\"), this;\n      }, locked: function locked() {\n        return !!e;\n      }, fireWith: function fireWith(a, c) {\n        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;\n      }, fire: function fire() {\n        return j.fireWith(this, arguments), this;\n      }, fired: function fired() {\n        return !!d;\n      } };return j;\n  };function N(a) {\n    return a;\n  }function O(a) {\n    throw a;\n  }function P(a, b, c, d) {\n    var e;try {\n      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));\n    } catch (a) {\n      c.apply(void 0, [a]);\n    }\n  }r.extend({ Deferred: function Deferred(b) {\n      var c = [[\"notify\", \"progress\", r.Callbacks(\"memory\"), r.Callbacks(\"memory\"), 2], [\"resolve\", \"done\", r.Callbacks(\"once memory\"), r.Callbacks(\"once memory\"), 0, \"resolved\"], [\"reject\", \"fail\", r.Callbacks(\"once memory\"), r.Callbacks(\"once memory\"), 1, \"rejected\"]],\n          d = \"pending\",\n          e = { state: function state() {\n          return d;\n        }, always: function always() {\n          return f.done(arguments).fail(arguments), this;\n        }, \"catch\": function _catch(a) {\n          return e.then(null, a);\n        }, pipe: function pipe() {\n          var a = arguments;return r.Deferred(function (b) {\n            r.each(c, function (c, d) {\n              var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {\n                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + \"With\"](this, e ? [a] : arguments);\n              });\n            }), a = null;\n          }).promise();\n        }, then: function then(b, d, e) {\n          var f = 0;function g(b, c, d, e) {\n            return function () {\n              var h = this,\n                  i = arguments,\n                  j = function j() {\n                var a, j;if (!(b < f)) {\n                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError(\"Thenable self-resolution\");j = a && (\"object\" == (typeof a === \"undefined\" ? \"undefined\" : _typeof(a)) || \"function\" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));\n                }\n              },\n                  k = e ? j : function () {\n                try {\n                  j();\n                } catch (a) {\n                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));\n                }\n              };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));\n            };\n          }return r.Deferred(function (a) {\n            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));\n          }).promise();\n        }, promise: function promise(a) {\n          return null != a ? r.extend(a, e) : e;\n        } },\n          f = {};return r.each(c, function (a, b) {\n        var g = b[2],\n            h = b[5];e[b[1]] = g.add, h && g.add(function () {\n          d = h;\n        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {\n          return f[b[0] + \"With\"](this === f ? void 0 : this, arguments), this;\n        }, f[b[0] + \"With\"] = g.fireWith;\n      }), e.promise(f), b && b.call(f, f), f;\n    }, when: function when(a) {\n      var b = arguments.length,\n          c = b,\n          d = Array(c),\n          e = f.call(arguments),\n          g = r.Deferred(),\n          h = function h(a) {\n        return function (c) {\n          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);\n        };\n      };if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), \"pending\" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {\n        P(e[c], h(c), g.reject);\n      }return g.promise();\n    } });var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {\n    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn(\"jQuery.Deferred exception: \" + b.message, b.stack, c);\n  }, r.readyException = function (b) {\n    a.setTimeout(function () {\n      throw b;\n    });\n  };var R = r.Deferred();r.fn.ready = function (a) {\n    return R.then(a)[\"catch\"](function (a) {\n      r.readyException(a);\n    }), this;\n  }, r.extend({ isReady: !1, readyWait: 1, ready: function ready(a) {\n      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));\n    } }), r.ready.then = R.then;function S() {\n    d.removeEventListener(\"DOMContentLoaded\", S), a.removeEventListener(\"load\", S), r.ready();\n  }\"complete\" === d.readyState || \"loading\" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener(\"DOMContentLoaded\", S), a.addEventListener(\"load\", S));var T = function T(a, b, c, d, e, f, g) {\n    var h = 0,\n        i = a.length,\n        j = null == c;if (\"object\" === r.type(c)) {\n      e = !0;for (h in c) {\n        T(a, b, h, c[h], !0, f, g);\n      }\n    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {\n      return j.call(r(a), c);\n    })), b)) for (; h < i; h++) {\n      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));\n    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;\n  },\n      U = function U(a) {\n    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;\n  };function V() {\n    this.expando = r.expando + V.uid++;\n  }V.uid = 1, V.prototype = { cache: function cache(a) {\n      var b = a[this.expando];return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;\n    }, set: function set(a, b, c) {\n      var d,\n          e = this.cache(a);if (\"string\" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {\n        e[r.camelCase(d)] = b[d];\n      }return e;\n    }, get: function get(a, b) {\n      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];\n    }, access: function access(a, b, c) {\n      return void 0 === b || b && \"string\" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);\n    }, remove: function remove(a, b) {\n      var c,\n          d = a[this.expando];if (void 0 !== d) {\n        if (void 0 !== b) {\n          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;while (c--) {\n            delete d[b[c]];\n          }\n        }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);\n      }\n    }, hasData: function hasData(a) {\n      var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);\n    } };var W = new V(),\n      X = new V(),\n      Y = /^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,\n      Z = /[A-Z]/g;function $(a) {\n    return \"true\" === a || \"false\" !== a && (\"null\" === a ? null : a === +a + \"\" ? +a : Y.test(a) ? JSON.parse(a) : a);\n  }function _(a, b, c) {\n    var d;if (void 0 === c && 1 === a.nodeType) if (d = \"data-\" + b.replace(Z, \"-$&\").toLowerCase(), c = a.getAttribute(d), \"string\" == typeof c) {\n      try {\n        c = $(c);\n      } catch (e) {}X.set(a, b, c);\n    } else c = void 0;return c;\n  }r.extend({ hasData: function hasData(a) {\n      return X.hasData(a) || W.hasData(a);\n    }, data: function data(a, b, c) {\n      return X.access(a, b, c);\n    }, removeData: function removeData(a, b) {\n      X.remove(a, b);\n    }, _data: function _data(a, b, c) {\n      return W.access(a, b, c);\n    }, _removeData: function _removeData(a, b) {\n      W.remove(a, b);\n    } }), r.fn.extend({ data: function data(a, b) {\n      var c,\n          d,\n          e,\n          f = this[0],\n          g = f && f.attributes;if (void 0 === a) {\n        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, \"hasDataAttrs\"))) {\n          c = g.length;while (c--) {\n            g[c] && (d = g[c].name, 0 === d.indexOf(\"data-\") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));\n          }W.set(f, \"hasDataAttrs\", !0);\n        }return e;\n      }return \"object\" == (typeof a === \"undefined\" ? \"undefined\" : _typeof(a)) ? this.each(function () {\n        X.set(this, a);\n      }) : T(this, function (b) {\n        var c;if (f && void 0 === b) {\n          if (c = X.get(f, a), void 0 !== c) return c;if (c = _(f, a), void 0 !== c) return c;\n        } else this.each(function () {\n          X.set(this, a, b);\n        });\n      }, null, b, arguments.length > 1, null, !0);\n    }, removeData: function removeData(a) {\n      return this.each(function () {\n        X.remove(this, a);\n      });\n    } }), r.extend({ queue: function queue(a, b, c) {\n      var d;if (a) return b = (b || \"fx\") + \"queue\", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];\n    }, dequeue: function dequeue(a, b) {\n      b = b || \"fx\";var c = r.queue(a, b),\n          d = c.length,\n          e = c.shift(),\n          f = r._queueHooks(a, b),\n          g = function g() {\n        r.dequeue(a, b);\n      };\"inprogress\" === e && (e = c.shift(), d--), e && (\"fx\" === b && c.unshift(\"inprogress\"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();\n    }, _queueHooks: function _queueHooks(a, b) {\n      var c = b + \"queueHooks\";return W.get(a, c) || W.access(a, c, { empty: r.Callbacks(\"once memory\").add(function () {\n          W.remove(a, [b + \"queue\", c]);\n        }) });\n    } }), r.fn.extend({ queue: function queue(a, b) {\n      var c = 2;return \"string\" != typeof a && (b = a, a = \"fx\", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {\n        var c = r.queue(this, a, b);r._queueHooks(this, a), \"fx\" === a && \"inprogress\" !== c[0] && r.dequeue(this, a);\n      });\n    }, dequeue: function dequeue(a) {\n      return this.each(function () {\n        r.dequeue(this, a);\n      });\n    }, clearQueue: function clearQueue(a) {\n      return this.queue(a || \"fx\", []);\n    }, promise: function promise(a, b) {\n      var c,\n          d = 1,\n          e = r.Deferred(),\n          f = this,\n          g = this.length,\n          h = function h() {\n        --d || e.resolveWith(f, [f]);\n      };\"string\" != typeof a && (b = a, a = void 0), a = a || \"fx\";while (g--) {\n        c = W.get(f[g], a + \"queueHooks\"), c && c.empty && (d++, c.empty.add(h));\n      }return h(), e.promise(b);\n    } });var aa = /[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,\n      ba = new RegExp(\"^(?:([+-])=|)(\" + aa + \")([a-z%]*)$\", \"i\"),\n      ca = [\"Top\", \"Right\", \"Bottom\", \"Left\"],\n      da = function da(a, b) {\n    return a = b || a, \"none\" === a.style.display || \"\" === a.style.display && r.contains(a.ownerDocument, a) && \"none\" === r.css(a, \"display\");\n  },\n      ea = function ea(a, b, c, d) {\n    var e,\n        f,\n        g = {};for (f in b) {\n      g[f] = a.style[f], a.style[f] = b[f];\n    }e = c.apply(a, d || []);for (f in b) {\n      a.style[f] = g[f];\n    }return e;\n  };function fa(a, b, c, d) {\n    var e,\n        f = 1,\n        g = 20,\n        h = d ? function () {\n      return d.cur();\n    } : function () {\n      return r.css(a, b, \"\");\n    },\n        i = h(),\n        j = c && c[3] || (r.cssNumber[b] ? \"\" : \"px\"),\n        k = (r.cssNumber[b] || \"px\" !== j && +i) && ba.exec(r.css(a, b));if (k && k[3] !== j) {\n      j = j || k[3], c = c || [], k = +i || 1;do {\n        f = f || \".5\", k /= f, r.style(a, b, k + j);\n      } while (f !== (f = h() / i) && 1 !== f && --g);\n    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;\n  }var ga = {};function ha(a) {\n    var b,\n        c = a.ownerDocument,\n        d = a.nodeName,\n        e = ga[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, \"display\"), b.parentNode.removeChild(b), \"none\" === e && (e = \"block\"), ga[d] = e, e);\n  }function ia(a, b) {\n    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {\n      d = a[f], d.style && (c = d.style.display, b ? (\"none\" === c && (e[f] = W.get(d, \"display\") || null, e[f] || (d.style.display = \"\")), \"\" === d.style.display && da(d) && (e[f] = ha(d))) : \"none\" !== c && (e[f] = \"none\", W.set(d, \"display\", c)));\n    }for (f = 0; f < g; f++) {\n      null != e[f] && (a[f].style.display = e[f]);\n    }return a;\n  }r.fn.extend({ show: function show() {\n      return ia(this, !0);\n    }, hide: function hide() {\n      return ia(this);\n    }, toggle: function toggle(a) {\n      return \"boolean\" == typeof a ? a ? this.show() : this.hide() : this.each(function () {\n        da(this) ? r(this).show() : r(this).hide();\n      });\n    } });var ja = /^(?:checkbox|radio)$/i,\n      ka = /<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]+)/i,\n      la = /^$|\\/(?:java|ecma)script/i,\n      ma = { option: [1, \"<select multiple='multiple'>\", \"</select>\"], thead: [1, \"<table>\", \"</table>\"], col: [2, \"<table><colgroup>\", \"</colgroup></table>\"], tr: [2, \"<table><tbody>\", \"</tbody></table>\"], td: [3, \"<table><tbody><tr>\", \"</tr></tbody></table>\"], _default: [0, \"\", \"\"] };ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;function na(a, b) {\n    var c;return c = \"undefined\" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || \"*\") : \"undefined\" != typeof a.querySelectorAll ? a.querySelectorAll(b || \"*\") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;\n  }function oa(a, b) {\n    for (var c = 0, d = a.length; c < d; c++) {\n      W.set(a[c], \"globalEval\", !b || W.get(b[c], \"globalEval\"));\n    }\n  }var pa = /<|&#?\\w+;/;function qa(a, b, c, d, e) {\n    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {\n      if (f = a[n], f || 0 === f) if (\"object\" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {\n        g = g || l.appendChild(b.createElement(\"div\")), h = (ka.exec(f) || [\"\", \"\"])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {\n          g = g.lastChild;\n        }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = \"\";\n      } else m.push(b.createTextNode(f));\n    }l.textContent = \"\", n = 0;while (f = m[n++]) {\n      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), \"script\"), j && oa(g), c) {\n        k = 0;while (f = g[k++]) {\n          la.test(f.type || \"\") && c.push(f);\n        }\n      }\n    }return l;\n  }!function () {\n    var a = d.createDocumentFragment(),\n        b = a.appendChild(d.createElement(\"div\")),\n        c = d.createElement(\"input\");c.setAttribute(\"type\", \"radio\"), c.setAttribute(\"checked\", \"checked\"), c.setAttribute(\"name\", \"t\"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = \"<textarea>x</textarea>\", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;\n  }();var ra = d.documentElement,\n      sa = /^key/,\n      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,\n      ua = /^([^.]*)(?:\\.(.+)|)/;function va() {\n    return !0;\n  }function wa() {\n    return !1;\n  }function xa() {\n    try {\n      return d.activeElement;\n    } catch (a) {}\n  }function ya(a, b, c, d, e, f) {\n    var g, h;if (\"object\" == (typeof b === \"undefined\" ? \"undefined\" : _typeof(b))) {\n      \"string\" != typeof c && (d = d || c, c = void 0);for (h in b) {\n        ya(a, h, c, d, b[h], f);\n      }return a;\n    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && (\"string\" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {\n      return r().off(a), g.apply(this, arguments);\n    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {\n      r.event.add(this, b, e, d, c);\n    });\n  }r.event = { global: {}, add: function add(a, b, c, d, e) {\n      var f,\n          g,\n          h,\n          i,\n          j,\n          k,\n          l,\n          m,\n          n,\n          o,\n          p,\n          q = W.get(a);if (q) {\n        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {\n          return \"undefined\" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;\n        }), b = (b || \"\").match(L) || [\"\"], j = b.length;while (j--) {\n          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || \"\").split(\".\").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(\".\") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);\n        }\n      }\n    }, remove: function remove(a, b, c, d, e) {\n      var f,\n          g,\n          h,\n          i,\n          j,\n          k,\n          l,\n          m,\n          n,\n          o,\n          p,\n          q = W.hasData(a) && W.get(a);if (q && (i = q.events)) {\n        b = (b || \"\").match(L) || [\"\"], j = b.length;while (j--) {\n          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || \"\").split(\".\").sort(), n) {\n            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp(\"(^|\\\\.)\" + o.join(\"\\\\.(?:.*\\\\.|)\") + \"(\\\\.|$)\"), g = f = m.length;while (f--) {\n              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && (\"**\" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));\n            }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);\n          } else for (n in i) {\n            r.event.remove(a, n + b[j], c, d, !0);\n          }\n        }r.isEmptyObject(i) && W.remove(a, \"handle events\");\n      }\n    }, dispatch: function dispatch(a) {\n      var b = r.event.fix(a),\n          c,\n          d,\n          e,\n          f,\n          g,\n          h,\n          i = new Array(arguments.length),\n          j = (W.get(this, \"events\") || {})[b.type] || [],\n          k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {\n        i[c] = arguments[c];\n      }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {\n        h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {\n          b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {\n            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));\n          }\n        }return k.postDispatch && k.postDispatch.call(this, b), b.result;\n      }\n    }, handlers: function handlers(a, b) {\n      var c,\n          d,\n          e,\n          f,\n          g,\n          h = [],\n          i = b.delegateCount,\n          j = a.target;if (i && j.nodeType && !(\"click\" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {\n        if (1 === j.nodeType && (\"click\" !== a.type || j.disabled !== !0)) {\n          for (f = [], g = {}, c = 0; c < i; c++) {\n            d = b[c], e = d.selector + \" \", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);\n          }f.length && h.push({ elem: j, handlers: f });\n        }\n      }return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;\n    }, addProp: function addProp(a, b) {\n      Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {\n          if (this.originalEvent) return b(this.originalEvent);\n        } : function () {\n          if (this.originalEvent) return this.originalEvent[a];\n        }, set: function set(b) {\n          Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });\n        } });\n    }, fix: function fix(a) {\n      return a[r.expando] ? a : new r.Event(a);\n    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {\n          if (this !== xa() && this.focus) return this.focus(), !1;\n        }, delegateType: \"focusin\" }, blur: { trigger: function trigger() {\n          if (this === xa() && this.blur) return this.blur(), !1;\n        }, delegateType: \"focusout\" }, click: { trigger: function trigger() {\n          if (\"checkbox\" === this.type && this.click && B(this, \"input\")) return this.click(), !1;\n        }, _default: function _default(a) {\n          return B(a.target, \"a\");\n        } }, beforeunload: { postDispatch: function postDispatch(a) {\n          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);\n        } } } }, r.removeEvent = function (a, b, c) {\n    a.removeEventListener && a.removeEventListener(b, c);\n  }, r.Event = function (a, b) {\n    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);\n  }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function preventDefault() {\n      var a = this.originalEvent;this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();\n    }, stopPropagation: function stopPropagation() {\n      var a = this.originalEvent;this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();\n    }, stopImmediatePropagation: function stopImmediatePropagation() {\n      var a = this.originalEvent;this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();\n    } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, \"char\": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {\n      var b = a.button;return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;\n    } }, r.event.addProp), r.each({ mouseenter: \"mouseover\", mouseleave: \"mouseout\", pointerenter: \"pointerover\", pointerleave: \"pointerout\" }, function (a, b) {\n    r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {\n        var c,\n            d = this,\n            e = a.relatedTarget,\n            f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;\n      } };\n  }), r.fn.extend({ on: function on(a, b, c, d) {\n      return ya(this, a, b, c, d);\n    }, one: function one(a, b, c, d) {\n      return ya(this, a, b, c, d, 1);\n    }, off: function off(a, b, c) {\n      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + \".\" + d.namespace : d.origType, d.selector, d.handler), this;if (\"object\" == (typeof a === \"undefined\" ? \"undefined\" : _typeof(a))) {\n        for (e in a) {\n          this.off(e, b, a[e]);\n        }return this;\n      }return b !== !1 && \"function\" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {\n        r.event.remove(this, a, c, b);\n      });\n    } });var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)[^>]*)\\/>/gi,\n      Aa = /<script|<style|<link/i,\n      Ba = /checked\\s*(?:[^=]|=\\s*.checked.)/i,\n      Ca = /^true\\/(.*)/,\n      Da = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;function Ea(a, b) {\n    return B(a, \"table\") && B(11 !== b.nodeType ? b : b.firstChild, \"tr\") ? r(\">tbody\", a)[0] || a : a;\n  }function Fa(a) {\n    return a.type = (null !== a.getAttribute(\"type\")) + \"/\" + a.type, a;\n  }function Ga(a) {\n    var b = Ca.exec(a.type);return b ? a.type = b[1] : a.removeAttribute(\"type\"), a;\n  }function Ha(a, b) {\n    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {\n      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {\n        delete g.handle, g.events = {};for (e in j) {\n          for (c = 0, d = j[e].length; c < d; c++) {\n            r.event.add(b, e, j[e][c]);\n          }\n        }\n      }X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));\n    }\n  }function Ia(a, b) {\n    var c = b.nodeName.toLowerCase();\"input\" === c && ja.test(a.type) ? b.checked = a.checked : \"input\" !== c && \"textarea\" !== c || (b.defaultValue = a.defaultValue);\n  }function Ja(a, b, c, d) {\n    b = g.apply([], b);var e,\n        f,\n        h,\n        i,\n        j,\n        k,\n        l = 0,\n        m = a.length,\n        n = m - 1,\n        q = b[0],\n        s = r.isFunction(q);if (s || m > 1 && \"string\" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {\n      var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);\n    });if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {\n      for (h = r.map(na(e, \"script\"), Fa), i = h.length; l < m; l++) {\n        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, \"script\"))), c.call(a[l], j, l);\n      }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {\n        j = h[l], la.test(j.type || \"\") && !W.access(j, \"globalEval\") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, \"\"), k));\n      }\n    }return a;\n  }function Ka(a, b, c) {\n    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {\n      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, \"script\")), d.parentNode.removeChild(d));\n    }return a;\n  }r.extend({ htmlPrefilter: function htmlPrefilter(a) {\n      return a.replace(za, \"<$1></$2>\");\n    }, clone: function clone(a, b, c) {\n      var d,\n          e,\n          f,\n          g,\n          h = a.cloneNode(!0),\n          i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {\n        Ia(f[d], g[d]);\n      }if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {\n        Ha(f[d], g[d]);\n      } else Ha(a, h);return g = na(h, \"script\"), g.length > 0 && oa(g, !i && na(a, \"script\")), h;\n    }, cleanData: function cleanData(a) {\n      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {\n        if (U(c)) {\n          if (b = c[W.expando]) {\n            if (b.events) for (d in b.events) {\n              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);\n            }c[W.expando] = void 0;\n          }c[X.expando] && (c[X.expando] = void 0);\n        }\n      }\n    } }), r.fn.extend({ detach: function detach(a) {\n      return Ka(this, a, !0);\n    }, remove: function remove(a) {\n      return Ka(this, a);\n    }, text: function text(a) {\n      return T(this, function (a) {\n        return void 0 === a ? r.text(this) : this.empty().each(function () {\n          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);\n        });\n      }, null, a, arguments.length);\n    }, append: function append() {\n      return Ja(this, arguments, function (a) {\n        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {\n          var b = Ea(this, a);b.appendChild(a);\n        }\n      });\n    }, prepend: function prepend() {\n      return Ja(this, arguments, function (a) {\n        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {\n          var b = Ea(this, a);b.insertBefore(a, b.firstChild);\n        }\n      });\n    }, before: function before() {\n      return Ja(this, arguments, function (a) {\n        this.parentNode && this.parentNode.insertBefore(a, this);\n      });\n    }, after: function after() {\n      return Ja(this, arguments, function (a) {\n        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);\n      });\n    }, empty: function empty() {\n      for (var a, b = 0; null != (a = this[b]); b++) {\n        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = \"\");\n      }return this;\n    }, clone: function clone(a, b) {\n      return a = null != a && a, b = null == b ? a : b, this.map(function () {\n        return r.clone(this, a, b);\n      });\n    }, html: function html(a) {\n      return T(this, function (a) {\n        var b = this[0] || {},\n            c = 0,\n            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if (\"string\" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || [\"\", \"\"])[1].toLowerCase()]) {\n          a = r.htmlPrefilter(a);try {\n            for (; c < d; c++) {\n              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);\n            }b = 0;\n          } catch (e) {}\n        }b && this.empty().append(a);\n      }, null, a, arguments.length);\n    }, replaceWith: function replaceWith() {\n      var a = [];return Ja(this, arguments, function (b) {\n        var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));\n      }, a);\n    } }), r.each({ appendTo: \"append\", prependTo: \"prepend\", insertBefore: \"before\", insertAfter: \"after\", replaceAll: \"replaceWith\" }, function (a, b) {\n    r.fn[a] = function (a) {\n      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {\n        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());\n      }return this.pushStack(d);\n    };\n  });var La = /^margin/,\n      Ma = new RegExp(\"^(\" + aa + \")(?!px)[a-z%]+$\", \"i\"),\n      Na = function Na(b) {\n    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);\n  };!function () {\n    function b() {\n      if (i) {\n        i.style.cssText = \"box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%\", i.innerHTML = \"\", ra.appendChild(h);var b = a.getComputedStyle(i);c = \"1%\" !== b.top, g = \"2px\" === b.marginLeft, e = \"4px\" === b.width, i.style.marginRight = \"50%\", f = \"4px\" === b.marginRight, ra.removeChild(h), i = null;\n      }\n    }var c,\n        e,\n        f,\n        g,\n        h = d.createElement(\"div\"),\n        i = d.createElement(\"div\");i.style && (i.style.backgroundClip = \"content-box\", i.cloneNode(!0).style.backgroundClip = \"\", o.clearCloneStyle = \"content-box\" === i.style.backgroundClip, h.style.cssText = \"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute\", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {\n        return b(), c;\n      }, boxSizingReliable: function boxSizingReliable() {\n        return b(), e;\n      }, pixelMarginRight: function pixelMarginRight() {\n        return b(), f;\n      }, reliableMarginLeft: function reliableMarginLeft() {\n        return b(), g;\n      } }));\n  }();function Oa(a, b, c) {\n    var d,\n        e,\n        f,\n        g,\n        h = a.style;return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], \"\" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + \"\" : g;\n  }function Pa(a, b) {\n    return { get: function get() {\n        return a() ? void delete this.get : (this.get = b).apply(this, arguments);\n      } };\n  }var Qa = /^(none|table(?!-c[ea]).+)/,\n      Ra = /^--/,\n      Sa = { position: \"absolute\", visibility: \"hidden\", display: \"block\" },\n      Ta = { letterSpacing: \"0\", fontWeight: \"400\" },\n      Ua = [\"Webkit\", \"Moz\", \"ms\"],\n      Va = d.createElement(\"div\").style;function Wa(a) {\n    if (a in Va) return a;var b = a[0].toUpperCase() + a.slice(1),\n        c = Ua.length;while (c--) {\n      if (a = Ua[c] + b, a in Va) return a;\n    }\n  }function Xa(a) {\n    var b = r.cssProps[a];return b || (b = r.cssProps[a] = Wa(a) || a), b;\n  }function Ya(a, b, c) {\n    var d = ba.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || \"px\") : b;\n  }function Za(a, b, c, d, e) {\n    var f,\n        g = 0;for (f = c === (d ? \"border\" : \"content\") ? 4 : \"width\" === b ? 1 : 0; f < 4; f += 2) {\n      \"margin\" === c && (g += r.css(a, c + ca[f], !0, e)), d ? (\"content\" === c && (g -= r.css(a, \"padding\" + ca[f], !0, e)), \"margin\" !== c && (g -= r.css(a, \"border\" + ca[f] + \"Width\", !0, e))) : (g += r.css(a, \"padding\" + ca[f], !0, e), \"padding\" !== c && (g += r.css(a, \"border\" + ca[f] + \"Width\", !0, e)));\n    }return g;\n  }function $a(a, b, c) {\n    var d,\n        e = Na(a),\n        f = Oa(a, b, e),\n        g = \"border-box\" === r.css(a, \"boxSizing\", !1, e);return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), \"auto\" === f && (f = a[\"offset\" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? \"border\" : \"content\"), d, e) + \"px\");\n  }r.extend({ cssHooks: { opacity: { get: function get(a, b) {\n          if (b) {\n            var c = Oa(a, \"opacity\");return \"\" === c ? \"1\" : c;\n          }\n        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { \"float\": \"cssFloat\" }, style: function style(a, b, c, d) {\n      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {\n        var e,\n            f,\n            g,\n            h = r.camelCase(b),\n            i = Ra.test(b),\n            j = a.style;return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && \"get\" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c === \"undefined\" ? \"undefined\" : _typeof(c), \"string\" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = \"number\"), null != c && c === c && (\"number\" === f && (c += e && e[3] || (r.cssNumber[h] ? \"\" : \"px\")), o.clearCloneStyle || \"\" !== c || 0 !== b.indexOf(\"background\") || (j[b] = \"inherit\"), g && \"set\" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);\n      }\n    }, css: function css(a, b, c, d) {\n      var e,\n          f,\n          g,\n          h = r.camelCase(b),\n          i = Ra.test(b);return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && \"get\" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), \"normal\" === e && b in Ta && (e = Ta[b]), \"\" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;\n    } }), r.each([\"height\", \"width\"], function (a, b) {\n    r.cssHooks[b] = { get: function get(a, c, d) {\n        if (c) return !Qa.test(r.css(a, \"display\")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {\n          return $a(a, b, d);\n        });\n      }, set: function set(a, c, d) {\n        var e,\n            f = d && Na(a),\n            g = d && Za(a, b, d, \"border-box\" === r.css(a, \"boxSizing\", !1, f), f);return g && (e = ba.exec(c)) && \"px\" !== (e[3] || \"px\") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);\n      } };\n  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {\n    if (b) return (parseFloat(Oa(a, \"marginLeft\")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () {\n      return a.getBoundingClientRect().left;\n    })) + \"px\";\n  }), r.each({ margin: \"\", padding: \"\", border: \"Width\" }, function (a, b) {\n    r.cssHooks[a + b] = { expand: function expand(c) {\n        for (var d = 0, e = {}, f = \"string\" == typeof c ? c.split(\" \") : [c]; d < 4; d++) {\n          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];\n        }return e;\n      } }, La.test(a) || (r.cssHooks[a + b].set = Ya);\n  }), r.fn.extend({ css: function css(a, b) {\n      return T(this, function (a, b, c) {\n        var d,\n            e,\n            f = {},\n            g = 0;if (Array.isArray(b)) {\n          for (d = Na(a), e = b.length; g < e; g++) {\n            f[b[g]] = r.css(a, b[g], !1, d);\n          }return f;\n        }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);\n      }, a, b, arguments.length > 1);\n    } }), r.fn.delay = function (b, c) {\n    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || \"fx\", this.queue(c, function (c, d) {\n      var e = a.setTimeout(c, b);d.stop = function () {\n        a.clearTimeout(e);\n      };\n    });\n  }, function () {\n    var a = d.createElement(\"input\"),\n        b = d.createElement(\"select\"),\n        c = b.appendChild(d.createElement(\"option\"));a.type = \"checkbox\", o.checkOn = \"\" !== a.value, o.optSelected = c.selected, a = d.createElement(\"input\"), a.value = \"t\", a.type = \"radio\", o.radioValue = \"t\" === a.value;\n  }();var _a,\n      ab = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {\n      return T(this, r.attr, a, b, arguments.length > 1);\n    }, removeAttr: function removeAttr(a) {\n      return this.each(function () {\n        r.removeAttr(this, a);\n      });\n    } }), r.extend({ attr: function attr(a, b, c) {\n      var d,\n          e,\n          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return \"undefined\" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? _a : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && \"set\" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + \"\"), c) : e && \"get\" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));\n    }, attrHooks: { type: { set: function set(a, b) {\n          if (!o.radioValue && \"radio\" === b && B(a, \"input\")) {\n            var c = a.value;return a.setAttribute(\"type\", b), c && (a.value = c), b;\n          }\n        } } }, removeAttr: function removeAttr(a, b) {\n      var c,\n          d = 0,\n          e = b && b.match(L);if (e && 1 === a.nodeType) while (c = e[d++]) {\n        a.removeAttribute(c);\n      }\n    } }), _a = { set: function set(a, b, c) {\n      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;\n    } }, r.each(r.expr.match.bool.source.match(/\\w+/g), function (a, b) {\n    var c = ab[b] || r.find.attr;ab[b] = function (a, b, d) {\n      var e,\n          f,\n          g = b.toLowerCase();return d || (f = ab[g], ab[g] = e, e = null != c(a, b, d) ? g : null, ab[g] = f), e;\n    };\n  });var bb = /^(?:input|select|textarea|button)$/i,\n      cb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {\n      return T(this, r.prop, a, b, arguments.length > 1);\n    }, removeProp: function removeProp(a) {\n      return this.each(function () {\n        delete this[r.propFix[a] || a];\n      });\n    } }), r.extend({ prop: function prop(a, b, c) {\n      var d,\n          e,\n          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && \"set\" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && \"get\" in e && null !== (d = e.get(a, b)) ? d : a[b];\n    }, propHooks: { tabIndex: { get: function get(a) {\n          var b = r.find.attr(a, \"tabindex\");return b ? parseInt(b, 10) : bb.test(a.nodeName) || cb.test(a.nodeName) && a.href ? 0 : -1;\n        } } }, propFix: { \"for\": \"htmlFor\", \"class\": \"className\" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {\n      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;\n    }, set: function set(a) {\n      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);\n    } }), r.each([\"tabIndex\", \"readOnly\", \"maxLength\", \"cellSpacing\", \"cellPadding\", \"rowSpan\", \"colSpan\", \"useMap\", \"frameBorder\", \"contentEditable\"], function () {\n    r.propFix[this.toLowerCase()] = this;\n  });function db(a) {\n    var b = a.match(L) || [];return b.join(\" \");\n  }function eb(a) {\n    return a.getAttribute && a.getAttribute(\"class\") || \"\";\n  }r.fn.extend({ addClass: function addClass(a) {\n      var b,\n          c,\n          d,\n          e,\n          f,\n          g,\n          h,\n          i = 0;if (r.isFunction(a)) return this.each(function (b) {\n        r(this).addClass(a.call(this, b, eb(this)));\n      });if (\"string\" == typeof a && a) {\n        b = a.match(L) || [];while (c = this[i++]) {\n          if (e = eb(c), d = 1 === c.nodeType && \" \" + db(e) + \" \") {\n            g = 0;while (f = b[g++]) {\n              d.indexOf(\" \" + f + \" \") < 0 && (d += f + \" \");\n            }h = db(d), e !== h && c.setAttribute(\"class\", h);\n          }\n        }\n      }return this;\n    }, removeClass: function removeClass(a) {\n      var b,\n          c,\n          d,\n          e,\n          f,\n          g,\n          h,\n          i = 0;if (r.isFunction(a)) return this.each(function (b) {\n        r(this).removeClass(a.call(this, b, eb(this)));\n      });if (!arguments.length) return this.attr(\"class\", \"\");if (\"string\" == typeof a && a) {\n        b = a.match(L) || [];while (c = this[i++]) {\n          if (e = eb(c), d = 1 === c.nodeType && \" \" + db(e) + \" \") {\n            g = 0;while (f = b[g++]) {\n              while (d.indexOf(\" \" + f + \" \") > -1) {\n                d = d.replace(\" \" + f + \" \", \" \");\n              }\n            }h = db(d), e !== h && c.setAttribute(\"class\", h);\n          }\n        }\n      }return this;\n    }, toggleClass: function toggleClass(a, b) {\n      var c = typeof a === \"undefined\" ? \"undefined\" : _typeof(a);return \"boolean\" == typeof b && \"string\" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {\n        r(this).toggleClass(a.call(this, c, eb(this), b), b);\n      }) : this.each(function () {\n        var b, d, e, f;if (\"string\" === c) {\n          d = 0, e = r(this), f = a.match(L) || [];while (b = f[d++]) {\n            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);\n          }\n        } else void 0 !== a && \"boolean\" !== c || (b = eb(this), b && W.set(this, \"__className__\", b), this.setAttribute && this.setAttribute(\"class\", b || a === !1 ? \"\" : W.get(this, \"__className__\") || \"\"));\n      });\n    }, hasClass: function hasClass(a) {\n      var b,\n          c,\n          d = 0;b = \" \" + a + \" \";while (c = this[d++]) {\n        if (1 === c.nodeType && (\" \" + db(eb(c)) + \" \").indexOf(b) > -1) return !0;\n      }return !1;\n    } });var fb = /\\r/g;r.fn.extend({ val: function val(a) {\n      var b,\n          c,\n          d,\n          e = this[0];{\n        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {\n          var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = \"\" : \"number\" == typeof e ? e += \"\" : Array.isArray(e) && (e = r.map(e, function (a) {\n            return null == a ? \"\" : a + \"\";\n          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && \"set\" in b && void 0 !== b.set(this, e, \"value\") || (this.value = e));\n        });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && \"get\" in b && void 0 !== (c = b.get(e, \"value\")) ? c : (c = e.value, \"string\" == typeof c ? c.replace(fb, \"\") : null == c ? \"\" : c);\n      }\n    } }), r.extend({ valHooks: { option: { get: function get(a) {\n          var b = r.find.attr(a, \"value\");return null != b ? b : db(r.text(a));\n        } }, select: { get: function get(a) {\n          var b,\n              c,\n              d,\n              e = a.options,\n              f = a.selectedIndex,\n              g = \"select-one\" === a.type,\n              h = g ? null : [],\n              i = g ? f + 1 : e.length;for (d = f < 0 ? i : g ? f : 0; d < i; d++) {\n            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, \"optgroup\"))) {\n              if (b = r(c).val(), g) return b;h.push(b);\n            }\n          }return h;\n        }, set: function set(a, b) {\n          var c,\n              d,\n              e = a.options,\n              f = r.makeArray(b),\n              g = e.length;while (g--) {\n            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);\n          }return c || (a.selectedIndex = -1), f;\n        } } } }), r.each([\"radio\", \"checkbox\"], function () {\n    r.valHooks[this] = { set: function set(a, b) {\n        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;\n      } }, o.checkOn || (r.valHooks[this].get = function (a) {\n      return null === a.getAttribute(\"value\") ? \"on\" : a.value;\n    });\n  });var gb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {\n      var g,\n          h,\n          i,\n          j,\n          k,\n          m,\n          n,\n          o = [e || d],\n          p = l.call(b, \"type\") ? b.type : b,\n          q = l.call(b, \"namespace\") ? b.namespace.split(\".\") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !gb.test(p + r.event.triggered) && (p.indexOf(\".\") > -1 && (q = p.split(\".\"), p = q.shift(), q.sort()), k = p.indexOf(\":\") < 0 && \"on\" + p, b = b[r.expando] ? b : new r.Event(p, \"object\" == (typeof b === \"undefined\" ? \"undefined\" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join(\".\"), b.rnamespace = b.namespace ? new RegExp(\"(^|\\\\.)\" + q.join(\"\\\\.(?:.*\\\\.|)\") + \"(\\\\.|$)\") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {\n        if (!f && !n.noBubble && !r.isWindow(e)) {\n          for (j = n.delegateType || p, gb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {\n            o.push(h), i = h;\n          }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);\n        }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {\n          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, \"events\") || {})[b.type] && W.get(h, \"handle\"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());\n        }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;\n      }\n    }, simulate: function simulate(a, b, c) {\n      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);\n    } }), r.fn.extend({ trigger: function trigger(a, b) {\n      return this.each(function () {\n        r.event.trigger(a, b, this);\n      });\n    }, triggerHandler: function triggerHandler(a, b) {\n      var c = this[0];if (c) return r.event.trigger(a, b, c, !0);\n    } }), r.each(\"blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu\".split(\" \"), function (a, b) {\n    r.fn[b] = function (a, c) {\n      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);\n    };\n  }), r.fn.extend({ hover: function hover(a, b) {\n      return this.mouseenter(a).mouseleave(b || a);\n    } }), o.focusin = \"onfocusin\" in a, o.focusin || r.each({ focus: \"focusin\", blur: \"focusout\" }, function (a, b) {\n    var c = function c(a) {\n      r.event.simulate(b, a.target, r.event.fix(a));\n    };r.event.special[b] = { setup: function setup() {\n        var d = this.ownerDocument || this,\n            e = W.access(d, b);e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);\n      }, teardown: function teardown() {\n        var d = this.ownerDocument || this,\n            e = W.access(d, b) - 1;e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));\n      } };\n  });var hb = /\\[\\]$/,\n      ib = /\\r?\\n/g,\n      jb = /^(?:submit|button|image|reset|file)$/i,\n      kb = /^(?:input|select|textarea|keygen)/i;function lb(a, b, c, d) {\n    var e;if (Array.isArray(b)) r.each(b, function (b, e) {\n      c || hb.test(a) ? d(a, e) : lb(a + \"[\" + (\"object\" == (typeof e === \"undefined\" ? \"undefined\" : _typeof(e)) && null != e ? b : \"\") + \"]\", e, c, d);\n    });else if (c || \"object\" !== r.type(b)) d(a, b);else for (e in b) {\n      lb(a + \"[\" + e + \"]\", b[e], c, d);\n    }\n  }r.param = function (a, b) {\n    var c,\n        d = [],\n        e = function e(a, b) {\n      var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + \"=\" + encodeURIComponent(null == c ? \"\" : c);\n    };if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {\n      e(this.name, this.value);\n    });else for (c in a) {\n      lb(c, a[c], b, e);\n    }return d.join(\"&\");\n  }, r.fn.extend({ serialize: function serialize() {\n      return r.param(this.serializeArray());\n    }, serializeArray: function serializeArray() {\n      return this.map(function () {\n        var a = r.prop(this, \"elements\");return a ? r.makeArray(a) : this;\n      }).filter(function () {\n        var a = this.type;return this.name && !r(this).is(\":disabled\") && kb.test(this.nodeName) && !jb.test(a) && (this.checked || !ja.test(a));\n      }).map(function (a, b) {\n        var c = r(this).val();return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {\n          return { name: b.name, value: a.replace(ib, \"\\r\\n\") };\n        }) : { name: b.name, value: c.replace(ib, \"\\r\\n\") };\n      }).get();\n    } }), r.fn.extend({ wrapAll: function wrapAll(a) {\n      var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {\n        var a = this;while (a.firstElementChild) {\n          a = a.firstElementChild;\n        }return a;\n      }).append(this)), this;\n    }, wrapInner: function wrapInner(a) {\n      return r.isFunction(a) ? this.each(function (b) {\n        r(this).wrapInner(a.call(this, b));\n      }) : this.each(function () {\n        var b = r(this),\n            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);\n      });\n    }, wrap: function wrap(a) {\n      var b = r.isFunction(a);return this.each(function (c) {\n        r(this).wrapAll(b ? a.call(this, c) : a);\n      });\n    }, unwrap: function unwrap(a) {\n      return this.parent(a).not(\"body\").each(function () {\n        r(this).replaceWith(this.childNodes);\n      }), this;\n    } }), r.expr.pseudos.hidden = function (a) {\n    return !r.expr.pseudos.visible(a);\n  }, r.expr.pseudos.visible = function (a) {\n    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);\n  }, o.createHTMLDocument = function () {\n    var a = d.implementation.createHTMLDocument(\"\").body;return a.innerHTML = \"<form></form><form></form>\", 2 === a.childNodes.length;\n  }(), r.parseHTML = function (a, b, c) {\n    if (\"string\" != typeof a) return [];\"boolean\" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(\"\"), e = b.createElement(\"base\"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));\n  }, r.offset = { setOffset: function setOffset(a, b, c) {\n      var d,\n          e,\n          f,\n          g,\n          h,\n          i,\n          j,\n          k = r.css(a, \"position\"),\n          l = r(a),\n          m = {};\"static\" === k && (a.style.position = \"relative\"), h = l.offset(), f = r.css(a, \"top\"), i = r.css(a, \"left\"), j = (\"absolute\" === k || \"fixed\" === k) && (f + i).indexOf(\"auto\") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), \"using\" in b ? b.using.call(a, m) : l.css(m);\n    } }, r.fn.extend({ offset: function offset(a) {\n      if (arguments.length) return void 0 === a ? this : this.each(function (b) {\n        r.offset.setOffset(this, a, b);\n      });var b,\n          c,\n          d,\n          e,\n          f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 };\n    }, position: function position() {\n      if (this[0]) {\n        var a,\n            b,\n            c = this[0],\n            d = { top: 0, left: 0 };return \"fixed\" === r.css(c, \"position\") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], \"html\") || (d = a.offset()), d = { top: d.top + r.css(a[0], \"borderTopWidth\", !0), left: d.left + r.css(a[0], \"borderLeftWidth\", !0) }), { top: b.top - d.top - r.css(c, \"marginTop\", !0), left: b.left - d.left - r.css(c, \"marginLeft\", !0) };\n      }\n    }, offsetParent: function offsetParent() {\n      return this.map(function () {\n        var a = this.offsetParent;while (a && \"static\" === r.css(a, \"position\")) {\n          a = a.offsetParent;\n        }return a || ra;\n      });\n    } }), r.each({ scrollLeft: \"pageXOffset\", scrollTop: \"pageYOffset\" }, function (a, b) {\n    var c = \"pageYOffset\" === b;r.fn[a] = function (d) {\n      return T(this, function (a, d, e) {\n        var f;return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);\n      }, a, d, arguments.length);\n    };\n  }), r.each([\"top\", \"left\"], function (a, b) {\n    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {\n      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + \"px\" : c;\n    });\n  }), r.each({ Height: \"height\", Width: \"width\" }, function (a, b) {\n    r.each({ padding: \"inner\" + a, content: b, \"\": \"outer\" + a }, function (c, d) {\n      r.fn[d] = function (e, f) {\n        var g = arguments.length && (c || \"boolean\" != typeof e),\n            h = c || (e === !0 || f === !0 ? \"margin\" : \"border\");return T(this, function (b, c, e) {\n          var f;return r.isWindow(b) ? 0 === d.indexOf(\"outer\") ? b[\"inner\" + a] : b.document.documentElement[\"client\" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body[\"scroll\" + a], f[\"scroll\" + a], b.body[\"offset\" + a], f[\"offset\" + a], f[\"client\" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);\n        }, b, g ? e : void 0, g);\n      };\n    });\n  }), r.fn.extend({ bind: function bind(a, b, c) {\n      return this.on(a, null, b, c);\n    }, unbind: function unbind(a, b) {\n      return this.off(a, null, b);\n    }, delegate: function delegate(a, b, c, d) {\n      return this.on(b, a, c, d);\n    }, undelegate: function undelegate(a, b, c) {\n      return 1 === arguments.length ? this.off(a, \"**\") : this.off(b, a || \"**\", c);\n    } }), r.holdReady = function (a) {\n    a ? r.readyWait++ : r.ready(!0);\n  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, \"function\" == typeof define && define.amd && define(\"jquery\", [], function () {\n    return r;\n  });var mb = a.jQuery,\n      nb = a.$;return r.noConflict = function (b) {\n    return a.$ === r && (a.$ = nb), b && a.jQuery === r && (a.jQuery = mb), r;\n  }, b || (a.jQuery = a.$ = r), r;\n});\n\n$(function () {\n  var w = window;\n\n  var host = '';\n\n  if (w.botpressSettings) {\n    host = 'https://' + w.botpressSettings.hostname;\n  }\n\n  window.addEventListener('message', function (event) {\n    var data = event.data;\n\n    if (data && data.type && data.type === 'setClass') {\n      $('#bp-widget').attr('class', data.value);\n    }\n  });\n\n  if ($('#bp-web-widget').length <= 0) {\n\n    var style = $('<link href=\"' + host + '/api/botpress-platform-webchat/inject.css\" rel=\"stylesheet\">');\n    style.appendTo('head');\n\n    var widgetContainer = $(\"<div id='bp-web-widget'></div>\");\n    widgetContainer.appendTo('body');\n\n    $('<iframe id=\"bp-widget\">').appendTo('#bp-web-widget').attr({ src: host + '/lite/?m=platform-webchat&v=embedded' });\n  }\n});"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = ".bp-widget-web {\n  border: none;\n  display: block;\n  position: fixed;\n  visibility: none;\n  z-index: 100000;\n  max-height: 100vh;\n  max-width: 100vw;\n  transition: none;\n  background: none transparent;\n  opacity: 1;\n  font-size: 16px;    \n  letter-spacing: 0;\n  -webkit-font-smoothing: antialiased;\n  padding: 0;\n}\n\n.bp-widget-widget {\n  top: auto;\n  left: auto;\n  bottom: 24px;\n  right: 36px;\n  width: 76px !important;\n  height: 76px !important; \n}\n\n.bp-widget-convo {\n  top: auto;\n  left: auto;\n  bottom: 24px;\n  right: 36px;\n  width: 420px !important;\n  min-height: 382px !important;\n  max-height: 500px !important;\n}\n\n.bp-widget-side {\n  top: 0px;\n  left: auto;\n  bottom: 0px;\n  right: 0px;\n  width: 360px;\n  height: 100% !important;\n}\n\n@media only screen and (max-device-width: 768px) {\n  .bp-widget-side {\n    width: 100%;\n  }\n}\n"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "ID3\u0002\u0000\u0000\u0000\u0000\u001fvTSS\u0000\u0000\r\u0000Logic 10.2.2COM\u0000\u0000h\u0000engiTunNORM\u0000 000001D5 00000166 000004F8 000003C9 0000009C 00000082 00006323 000058B8 0000001A 00000000\u0000COM\u0000\u0000�\u0000engiTunSMPB\u0000 00000000 00000210 0000078C 0000000000005064 00000000 000030FB 00000000 00000000 00000000 00000000 00000000 00000000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0004\u0019)7�l`\u0000u�\u0016���\u0000\u001e�A\u0004\u0019z�\u0003�H �/P\u0000/\u001aa�9n�$T�KL�\f�V͝���\rɐԏ��`\u0014\u0018�o�w�\u0000\u0000\t@�\u0012�\u0003\u0003\u0003s�߈�����b����\u0011\u0013�̿�D\u0016\u000f��+\u0002\u0002\u000e�\u0003���\u0003�p�\u000f�� �\\\u0010qs���P \b`��\be��|\u0010v$\fr���&\u001f(\b\u001c\u0004\u001d��\u0013����\u000f��A�y{�$T�KL�\f�VM����\rɐԏ��`\u0014\u0018�sX\u0013'�\u0010��\u0000\u0010����wz�\u0010 L�;\u0007���p|\u0010\f`�����88\b8N\u001f���>��?�\b\u00061\u0018~\b\u001c��|\u001c\fe�\u0000@1(\b\u0006*\u0007��\u0001\u0007u�\u0010|\u001f\u0007\u0001\b�>2\u0003�\f\u0003�\f��s\u0000�\f/��@󇰬\f\u0002�\u0000\u0000\b\u0001�0\u0006�|\u0003\u0000h\u0000p5��M\u0003\u0003tErq@`$�Z\r�\u0003\u0010�\u001d00\u000b\u0000x.\u001f\u0002��H\u0001�X@p�#Tb;\u0013\u0002I�0i$\f�74���D\u001b\u0003\u001c\n��@���M5\u0007�\u0017V@\u0000��P08'�\u000bg��<5`7P1�\r\u0001����d@\\�6A��@bAJooz� �\\�K\u000b<d��3\u0004C��7E\u0015�A2\u000en��\u0003(8\b9\u0017��{W�ꛎ\u0003D\f\r\u0012\"�\\�\"��\"﮿�\rk�����W�m��ɗȡ0N\u0017���D\u00107u� �\b-7/���  `)\u0000�\u0006\u0004X\u0002�e\u0013?�\u0007�>[``\u0015\u0000\u0000\u0000@\u000e���\u0004�\u0018\f�\u0004���f�\u0019\\��\u0013�\u0003\u0001�\u0005�\u0016\u00000\f/\u0010Y��\u0014\u0004P�l\u0001Cp�\u0000zQp\u001b���:2\u0006`c\u00008\t(��K���k���`baP\u0018�<\u0003\u0001�]k\\\f\u0012\u0001\ffp\\�����\u0010\fG��D\bp�?�\u0017\u0014�XxZ8r�\u0014\u0000\u000b�\u0011����]Y\\ܙ\u0010�Ɇ�\rX'\u000f�����[\u0014\u0018�\u0016A\u0014A3\u0002�\u0007\"�������p�\u0004�\u0010\"�\\�'\u0019�љ���WZ�mj�^���/�r|�\u0010\u0002psȹ>A\b�8A����\u0019�t\u00104'�`\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���`\u0000\u0000\u0006�:F�\u0000\u0000�G(��`\u0000\u0010T�\u0016o�k�c�a\t��p\u0000\u0001�\u00194d3\n�&�\r��3\u0013���*lPc\u0006�\n0(\rf\u0003�\u0005�\u0004�\u0017F\u0003\u0010\u0003�\u0004�\u0014F\u0006�\f\u0006\u00038\n�\u0002(\u0006F\u0000h\u0005�@\u0013+�\u0000t\u0004\u0003��@���-�\u0000]�`R�MQ��KE�k����L3\u000eԿJ�2��M��P������=Z��Uk,��+[�\u001a��.\u001d���9e�]�jᎻ̲��8q�\u001c��˺�xh\n\u0019V�J\u0006���c���0�G�J��,�T4%�\r<$\r\u000e\u000e�E����X�w�����\u001cSy33���M�??m�DC\u000f2�C�\u001c\u0010�2&\u00113\u00132n\u0003\u0016)�\b{\u00185�)��\u0003\u0018\u0017��p\u0005��\u0000�����-��6�,���P�I@+�\"\\��%t�0�̭��Ƒ�ʥ��wg-eM^�5��֗SZ�xF�٦�W�֦�7gXZ�R���o/�̷�8�-㬿/ǝ�g )\u0002$�\u0011*\"${\u000e�\u001f,��0Kg��>X\u0017e�\u0003\u0004�ړ\u001a?_�q3\u0006(\u0018c\u0001�)\u0013\u0003�\f\u0001 ;�@�0(@\u0001*\u0000\u0006\t\u0000\\�\u0013\u0000�_�\u0000>g\u000b ��a��\fIDh4�1���=\u001e��;�D��B�\t����ʒ!9iO\u000e]�DxF@�\f\r$��\u0018\u0000\\$��r��%�\u0016\u0003��9�Fl�������`*�a\u0018\u001d�b��Vp�\t:a1��`�\u0004�`7\u0005�`�\u0001n`1��`Q\u0000���z`$�\t\u0012�yKGaiB��o�\ru9�����\f���'>�\u001a/\u001f��:|�NC��N���}X�\u0016JZ\u001e���\u001fψn\u0013hT�\u0014�\b��Nk\u001c��\u0013X�i�K�Ů�\u0016�z\u001d��*\u001a��\u0002�*�_&���4�kroj\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0002Q\u0013ŋ�Q�d\u0003\bp�8\u0010<�\u0012/�)B\u000b��U��(@\f< �LH��N\u0010���\u001a`n����  5\u0018\u0002�&�\u0000�S\u0013�\u0018H�$(�b��9��+{�2\u000er\u0000��2�GɓJ��������������E�{��\u001fa��#\n�~��\u0018\b`�\u0018+\"\u0017\u0007\u0003�\u0016\u0000P��Q\u0018,08\u000e��\u0005\u001f�1�T�@\u0014I�lIcd��Y�%\u000fb�W˽OFW\u0000\u0017o���7n��}\u001f�U�zY�������ǫ�y_���\u0006\u0018Z\u0018Ƴ3 ���HF%�\u0013�\u000eHCF\u0004\u0018\na��\u0018\u0006@1\u0018\" !�\u0005`\u001a��\u0000��pť\u0003#i/\u0000�\u0002���a��\u0010\u001cjSrL��:H��P�x\u001b\u0012,%\u0002�A\u0004l4zEM\u0018����I� �+\u0015\u0004ȥ��`��{�\u0015G/TC`\u0012��g�u������\u00008\u0001�\u000e[��ܫ��>!a�\u0018\u0011��\u001e\u001a��2\u00129�|\u0003��8\u0001�\u0018\u0010#\u0000`\u0001�.#\u0016S$\u000419RNV�\u0017!S�\u001aq0���I逤\f��S\b!������KY�\bҵf��_�\u001d�\u001b���\fd,\u0001\u000f\t�Ҋr�\u0016��w�M����7�[���l�����\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0003x\u001bC��y�n��pL8\u000f�G\n\u000f��\u0001��!A���1�N\f0Vߖ?*F�0�\u0001�0�CV\b\u0005\u0014��\u0001��6\u0000X\\\f`\u0001�_\u0019�\f��\u00100\u0001W\u0014�^�̱�1\u001c�>�����\n5��~�^\u000f�?\u0018�]\\��I\u001e�X�܊�:E�Z��w���I�����S���[���1\u0019I�2WsT<\u0013G�0q��0nA�0���\b\u00004�0\u0000���\u0014\u0002\\��Q{��H&��_�(�uF#�2�PYv\u0005̺��\u0017]�@d64T�\b���΋��P(kO��1�߳/Ρ[����������'�\u001f-�Q�n>٦\u0005�a��E��H\u0014)��\u0011!�\u0000\u0002Y�*\u0003��`\u0001���\u0000\u0004����1\u000eʋ'I6 \u000b�r����\u0016N`<7i<��@bdc�-⧖����=�Y��D�u�R\u0010W�*�e\b�,���#��T�9\u0007��v����QT����C�\u001a�\u0018t!癮�n\u001c{$@\u0018\"�6�\u001a���A����q�=���$�AF�!�\b��)�F'I�cV���n�0��8���;+�ƿZ8\u0016��cj�1ů��o\u0013ԧ�L�w\u001c��P誒�'\\�3{��\u0016�.�tޣ��\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0002�\u0011C�}�\u0000j�\u0018`��\u0000\u001fvA\u0018\u0019{\u0000\u0003�H\"�/P\u00002\u0011\u0001^0o4f6U�S1\u001e�\u00130\u0003�L0S\u0000�09��0\u0000�m0\u001c�\u0006\u000e\u0000��\u0000@�$U�֤?N�\t!l4\u0006!�æ7�i����n�/����_����U�5��_]��l��\u0006=@[�>���I�H�\u0013�\n�\u0011�\u001e�\u0006@-\u0006\u0002�\u0006�\u0003�\u0014��?�\u0000P��@*�J\u0010\u0010\u00021��@D\t\u00014\u0005�����^��H1��\u0018��\u001c�����o��UV\u0000?����ekz�W�$�\u0010����Wo��Lr\u0000�}6�\fa�O\u0000�\u0018LD\f5���Ȳ<X\ff�m��\u000f\u0003T\f\u0015� �˓\u000f�\f%p�\u0000��\u0004�\f\u0000�(���\bT\f#�H@�q\u0010�\fА����\u0018�\f\u001d��\u0000ѹU\u0003\u0005`�\fԯ�1 \u000f\u0000���\u0003\"@d\u001b\u0019\u0000�\u001e\u0000�l\f\u0003\u0001�0&\u0006�8\u0001\u0004�x���\nP\"�L\u0001P\u0002\u000b\u0000�hO\"�$ès���A\u0003�NQ\u001c���\u0017Q1\"�0.\u001a\u0013��b�D�O\u0017Ȫ�&RI3D\u00107k\u0015��|�b����� ���\u001fJ�fk�*�wA��{2I��Z����3և���u2+W_W�_W���}/R�������\u0006�ha�d\u0011\u0001�\u0006dB��e���\u0006)b��b���\u0006\u001dxH�a�\u0003�\u0006r�-\u0000`z\u0006P\u0006\u0016й�`7��\u0006\b�\\�a��Z\u0006\u0019���i��h\u0006;x��hY�p\u0007]4��\u0012@w�p\u001bx\u0000\u0006\u0003�\u0001�\u0000 a@(\u000b\u0006��!�1pt\u0000�@�l-H���\u001aX�\u0014\u0001 \"��\u0000���\fp\u0004\u0006\u0000�88�g�L�\\.\b&l&$�\u0002\u0014Ar��E��D\u000b鎡�.���p�b]�. �t�\u0017\u00104+�yT���ކ�R\u000e̚h�JZ(k�;ڥl�\nR���_�d��������.���]�����uz�����]x\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0005�:B�~�\u0000�\u0007h0��\u0000\u001c�\u001d\u0006\u000f�K��8�����0�͚1�f�6W\u0005Q1`\u0003�0�\u000411l\u0005\u001d7M�\"0�C�0��\u00160\t\u0001o0e�\u000b0�\u0002s0\u0018\r\u00191?\u0003�1:\u0004`8�\u0003�0��G06�'\u0003���ª@0�$\fB[\u0003\u001f\u0004@��0�\u000e!�\u0019\u0013\u0016M���c*'P�DII\t��(`�J�g��Ó7GB�R��V�B������Lp%S2����.?B�S �\u001f�W��7�2Ͼ���\rԇ�Ocڕ�W�\u0019\u0015q}\u001c�D^�\u0015����\u0002#�|��\u001c�\b*�\" ��WA��?��\u0018\u0004�t�\u0016\u0002\u0011�T�\u0004��\"\\�#�'��\u000e�\u0018ȢY\u0018k`�\u0019t��h��((�\u0010c��\u0017�\u0006+\u0004���-[ѼjG�S�\u0010\\\u000004�C�u?��b�M��e������~���:����/���]�����\u001dʴ�/��[�z���Y�������A`\u0004\u0005Y�!�m�d�B�\u0006�U�mIh\\\b�\r R,˚\u0017X�G���u�$r�`��\u0007aBl�uƘ\u000b��\u0019�n�\u001c���\u0018����/�r\u0018J��\u001c/�P�h�s\u0018\u001c@\u0011���0\u0019�Q0�@�\u0014C���\f���&8�#j|�\u0011\b��\u001e\u00024\u0002\u00041��\b����\u0004�\u0007\u0006\u0000p\u0001��W��f53$�\"\u000e������(�\u0003$@\u000f�\"�� \u0001Z\u000e࢓�Mɳ$K�\u0017\u00195�f�)\u0019\u0000$!377Nftݎ��\u00137M&Z��5&�7^�wS7R\n�Z�e �ޒ�nu��������ȃD=Y|����n+�\u0015\u001a���&��t��[Z����_W]tF�]��f\u000b���y���k\u0010D�$�7f\u0001�b�\u0011�B'�9J\u0006\u001eh\u0014�\b�\u0015\u0006\u0004�\n�\u0002�\u0006&\u00018\u0011f\u001c�\u0016�|8|f\u001a��\u0006�CЦ\u001d�c�\u000b(5�\u0007H\u001b&\tP\u0019�C5\u0018\u0017 \f��@/��1�8���Th\r!�>�V�F�`\u0010�:<\u0003\u0004\r)���hv(\u00006�q�����3�<���y{Ry��]UO�Sܞz\f\u0003bs�vdC��\"29�\u000b\"\f\nRe\u0017c\r�s&\u001e�m粚�\u001fy�ݍ^�wE��c�S�.ښ�=�9��Wu]݈[�c���f��7W�y�\u000bv�Gt����\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���`\u0000\u0000\tyUB\u000b���ĉh�{�^ �\u0011\u0002\u000f�\r�T !\u0005��p\u0003\f)��������\"�̯\"�\ft���(A$NQ�n�L\u0000 L\u0014�\u0015\f\u000e`\u0014�\u0011�D�*`6L;\u0002���0%�(�mM�v�\f\u001bPG�\u0016\u0000G�\u0005�2\f\t�*L,�\u0018��r\u0015�2`\u0007�\u001c\n\u0000�\u000f�\u0002\u0010\b�\u00000\u0006S\b��@\u0006�2\u0013�\u0000\u0010\u0001\u0000\u0016��wFc\u0000�\u0000\u0006�w�Ơ*\u0000[в\u0011���FC\f=�N��^#rK,��'��3�-��������\u001d�\u0004�A=^�\rgA��\u001d\u0004��q�^���j�t�r��L\u0011\u0005P�Z�����\u0011�T��ue\u0013y�H��U�\u0017jԕؿ-��~��_��-w��5������nE���a�� %g�\t\u0007D\t�_Z�a0��\u001803ت��_\u0010��l�+\u0015�x�izF�\b\u0000%A��m�링����˂��\u0010�\u0018\u0004�i�M�\u0018r����K�\u0016�ɀ�\u000b\u0018�\u0002\u0011��;��\u0004хҩ��P\u0011��]�\u0011����\u0003�\u001e�ч�\u0001���1�j]&\n}:�&\u001a��F��J\u0004�1\u0001�\fQ\u0018��u��n�һ�IO��ᡫ�ɇ��\u0007ة!7�,�<��A\u0004N��\u0012�2]�>���EϘi�\u001f؋���5C�twOAk�u~�����Rlr�0,�������?]���Y��\u0014��\u000e^9��?)��\u001eq��\r��\u001aG���dɅ4\u0013���\u0001\u0019��\u0003q�T\u0000q��\u0012ሐ?Q��\u001a���*9�L����\fɃJ\u0005\t�:\b��J\u000eQ��\u0004��0\u0002x\u0014\u0000�\u0000\u0018\u0000�\u0010\u0000H�\u0000\u0000<X\u0000\"���\u0011#w[���_\u0016*`\u0016�\u0018<\u0000dm�p�\u0000\u0006�`C�\u000fճ��ޕX�w\u001cu�g*p0\u0002\u0011�k\u000b\u0012l,\u0015b��~���HBk@�)�j\"#��4�8��\u000bL��\u000f�ꮴ��x\u001f\u001d9�+�E�D4ܺ潴�se_�����?���s<�\u0010�]�RM����~�\u001a7�L�ŵ��D�W��������̈́�!�\u001c\u00079�z\b���\f���\u0012y�\u0000\n9�x\u0001Y�\u0014���\u0014\u0002��\b�\u0001\u0004\u00053\u0001P\u0005C\u0006\f\u0015�\u0002��\u0013\u0010�#�\n\bn�M�(S\r�\u0018�\u0003�\r�\u00024\bs\u0002h\n#\u0007l\u0004�\u0001|\u0001��\u0004\u0014e��ݛ\\�:�E�l�C,`\n\u0002��\u0000�ۓ�.�F�kT�`�\r��v��\"�\u0007��s�{a��\r�u��lm�ws�m��~�O��Z�%� \u0010T��\u0013#�on���.\u0000\u001e*�w@X�g^�e8r\u0019��^�I�\u0006��\u0016\u0013@ŎY�\\��\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007v����+r��\b\u0000�n\u001b\t=\u0004\u000f�Kˠ� A�-�0[�'0K�m0L��0\u0019�+04\u0001\u00120��+4�g~0�A�0Q\u0000�0&��00��0��\u00160S\u0003\u00122bAY0�Kx;�Jq1�A�0Y\u0000\u000f\u0015\u0002���\u0005L�Q\u0002\u0000��\u0001(�\u0012\u00004�K���M;��R��4�x�\u0001�,�\u0000�\u000fR�T��i\u0010\u0002Y���=��߭��E�E2��Y�\u001f�\u000e��`W#�ҙIѦs\u0016�F*1U\n[��k��nʫFch�V)h�s���>��\u001d�\u0011)VDg�ԨB;�ЦDU3���gaS�.��nw4�6��r�\n�\u001d\u0016U=J�\u0019\u001eEe\u0018���\u0003l��\u001d�Å\u0001��\u0012\u0001��\u0006\u0007\u0000��\u0018d�\u0014b��p\b��J\u0003\u0010�L\u00010��\u0001\\ O\u0003\u0001�R�+L\u001b�\u0007\u0000l�\u0005](3\u0002p c\u0002�\u000b�\u0002$\u0004�\u0002�\u0002�\u0007�\b�P\u001fc�\f)��\u0017��|u�Y\u0019�`\u0000y@\b��=*7��ɀ\u000e�Wu����,2�n�S�ձ�\u0015\u0011\u00113\\���\u0001(5��a�-&��f��SX�i��ާ���ꐹJ�����������I��)*t���bV�\u0011o\u0019\u0015��v���C݈�˭�c�ܲ=�ޑU�$쑹7��_E\u001d5m\r:Ϲ��HL\u0019�dL;\u0010\f�\b�\u000e�\n�\u0002�\u0019�]\rZF�L1 6�\u000bp\u0019L\u0006p\u000b�\u0007 \u000e\f'�&�\u0004�F\fc��\f\tr�Lwe1�\u0006 ��\u0006�2�\b`\u0010���0�\u0000o(\u0004��\u0002�*͢�x]����))��f\u0000@\b\"�\u0001�Z�yql*���,k��Y�|�]*�=\u0014�����wUUP����|�=�Ͳ�T;f��Q�S^b�٬zn|�W(����ޮ\u0013�O2v��(ڑ-���\u0017R�������S���?ԓKl\u0016��\u0006��\u001aȐ/�\u000e�g�$8\u0006&\u0003\u0010\bF\u0003�\u0017f\u0007Pl��:�f\u0002�/�\u0002X\u0011f\u0002h\u0002&\u0002�\u0002�\u000fh1�\u0013)��\n�C\u0006\u001082'ٵ�d�\u001c�\u0017@�`�\f�\t��b\f\u0000�\u0000@\f��\u0012{��GdVi�����Z�\\\u0017���5�fŪ�Ws���n������k��nvM���کz�#L%�����x�tt΢]W\u0014ȷ�=���\u001b�C�殯V�z8oq0��Uk�n)���/�����\u0019�u.���j�u퇹�\\�o�mq�eT�s3-���L�\u0010�tɊ~�\r(�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007��@\u0003�+p�q���nZ��\u0002\u000f�m�WG�\u0001�\r�0\t\u0000�0\f��18�\u0018\n\u0000*`5\u0000�`́Nol�pa���`y\u0000�`\u0016\u0000�`\u0005�za\u0003\u0002\u0000`,\u000f�b���a�\nlo\u0019%�b-\u0003�`���`M��`R\u0001�`��T`+�Z\u0002\u0000\u0011L����S��j�*���`\u0004\u0000\\<\u0001���\u000e}��Ű�u���\u001c�kZ��~2�\u0018R��\u0019\u000eVs\u0019�@\u0000Vu:fc\u001dh͜�!��=�B�бd���\u0012U9�8���;�]HK�̗dr\u0015\u0011�QK\u0014��\u0015).U#��]�󪔦�vY]���/Ub���cܔ�9\n���\"3;\u001d\u001d��BR�q\u0013\u0001\u0010\f�\u0001\f*�\u0016L\n� \f&\u0000P\u0012\u0006\u00068i&BC_�\t8,�\u0003�\u0010�\u0002�\t�\u0004H\u0010�\u0016p\u0000�\u00169��C�1�\u0006�d&� I�\u0012�\n&\u0003h\u0001d\u0000\u001a�\u0001�7\u0003@\u00190\u0002�\u000b`Q\u0018{<w߻vb\n���T�\u001d\u0000\u0014�\u0002�>x-)bm���ￆ=�����m�ǒ뿫����\u0012�$\u0006��l�\u0013L�)ԥZ�\u0015�^�9�.��v����������޷17Dk,Ѓ�t�:D�����I,�s\u001d\u001c\u0010�Q#�U�\"&���V�Z�-FE3\u001c��V��\u0013\u001d%�K�sn�����RR`\n��`b\u0001@aހl\u000e\u0002��}\u0000��P\u0000�۔8�¦\u0001@�}\u0001D�\t\u0001d�\u0003\u0002(��\u0002���\u0017��s\u0000T\u0013 �-\f�Ç\u0001���\u0000��\u001e\u0001��\u001c\u0002��_\u0000p�3\u0000y\u0013]��m�\u001da�kvŗ�\u001a\u0001�jJ�g\u0019�%�����[����\u001cӽ�\u0015\\�C�\u0014��i�0����{�\u0014R�2;�6[J��S�؞gN�\u0018���\u0006�u?����O�������#��5�H\"}9snBF˼�q\u0002����5f�i\u0014�n�Y���\u0000>0%\u0002�0��P0\r\u0000\u00100\r@�0/\u0002L1G\u0015\u000f0S\u0000�0\u0013�i0\u0004@I\u0002\u0000�`ʀRa0��d�\u0001\u0006`p��n��f\u001b�<<\u0005%�0(\u0001�\t\u0010\"\u0016\u0003�k\"���o�<�:�\b4�\u0010\t�ZM���c2,��r������\u0002s!\u001d�8}��G�\r���b\r\n\u0011!%�w�\u0016!�\u0013EO/'ߛ+�@�8�/Vʚ��U_�\r\u0010�*{��\n\u0019������9�D��\u0005]%�Ρ��m\u00155x[b�\u001e���TIK�\f�'8�\n�D\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007Q����\u001br�����n]�\t\u0002\u000f�m��G \u0001�\u0019�\b\u0000x��\u0010@�o\u0002\b�\u0000S\u0001p\u0006�\u0005�\u000f\u0003�${����\f\u0000\u0017\f\u0000@!�\u0001@0L\u0007 Q\f\rq[\f!\u0000s�\u0003�1L��(\f\u0010��@�W\u0013\u0000�`O��`�\u0000�\u001c\u0006�\u0003�,�Ȑ���4\t\u000f�Ln�a�\u0000T\u0001q�\fb�\u000e¯q�������YT�\u000e���w'\u000f�aƍ�ls\n{��\u0019�\u0011*5α�l d�F\u0013Q�62����B@v�R!�%�\t���\u001d�-D��>.��R2\u001emD��ګfoװ�.B���T VK+�\u0019�{���(R\u0004�j�O�\u0011�4G%k\u0005��\u0004ˊ�P`#\tXa!�4 \u0000��2\u0000��\u0001\u0006�̝Qp��\u0003L��\u0001��>\u0000��-\u0000t��\u0002d��\u001b��\u0002\u0002��S\b����\f+C��D\u0015�\u0012�\u0004F\u0003\u0006\u0015@^(\u0000�\u0000\b����2�:q(\u0011ߏX��yCJ�b�p�\u001a/;ܳ�Y�������uz�V��]���/���\b|ًi�2�/�v+bє)�#��\"/����U-���|�L>.�J���͝���|ly�}�5�*��w5�-�&%�Z�jc7�7kƷ�}�hh}z|���\u0013\u0015g�^|ɬ�|�@��t\u00003\u0001�/#\u0005\u001c\t#\u0000\u001c\t�\u0000�\u0001#\u0003@\u0003#gPHc\u0003�\u0003C\u0001�\u0001�\u0000�\b\u0003\u0001,\u0005S\u0002�\n�\u0002$2�\t�\u0006�\t�&\u0003��k3\u0004-C\u0018�c1\u0003\t�\u000b��0�\u0001�\u0005P\u0017`�\u0000�\t\u001f�\r\u00002Ӕ\u0000(�\u0005'J�~ޙu$\u000fP\u0010\u0007��lRZM�Z�v�B3=��Y�mɛw%3����\u000e\u0010;���栨@l\u001c#�Q&y\u000b\"��r=J�7b\u0017r���a2�e�*��f��\u001c�\u0015y�N\u0014]�gU�ȕ$���m\u001c�Tȴ�VR:�uO������؎��\u001dP�H�U�d]#���\b\u0000\u0013\t�&0\u0015\u0004\u0003\u000b��0&\u0006�\b!\u0002=���\u0010p�03\u0004�\n�N0:\u0003�\u000e�-1���J�\u001f2\u001e\u001d�\u0010��0�\u001dC\u001c0�1;\u0005#\u0005��0\t\u0004\u0003\u0007P\u00110\"\u0001p�\r!.\u0018E��\u0001P�\u0000\u0010\u0000.k8F5�\u001e��2\u0003\u0000�Je��J��-\u001d\f\u0011v?\u0001L�z޲�S:[�\"���a~���s\u000f3�u\u001eLKD������\u001b���Q��\"*��v�\u000e�r��#�l���~���)���D\\V|��O���fgݗ̟��ݶx�W޼�|�������*��e�?��}n����[�U?�@W@\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007R����\u001br�q���nZ��\b�w\t��\u001a!\u0001�=p\u0005\u0000`:\u001a���\u0002���\u0000\u0011��\u0000邦\b��>q���\u0003A�$\u0002!��\u0002A�^\u00049��\u0007a��\u000bI�l\by��\u0019��i�\u0018Ԃ)�`(\u0018\u001b\u0001� 2�\u0002A��\u0006\u0000\u0000%b2�i��6�ÐSK�t�2X��p\u0012\u000f\u0001��Q���K,�׵���1�,y�����z\u0012jl\n��Ȝ⋾O\u000b\t���\u000f\u0004�e\u0007%۠�1E�$s�\t)_3���d9\\�UH��l/�E0�ū\t�\u0012�PCWg'fwZ(��3����Z�+*�\u001a�$9\u001c��)�$-\u001b23\u001dO�٪\u0005(�,��\f\n\u0005\\`�\u0000|\u0017\u0001���\u0000���\u00064��;H��\u0001���\u00008�F\u00000�!\u0000��f\u00014�\b4l��\u0004���\tD�e�\fEA��\u001e\u0001\u0000\u001cH\u0006!\u0002p`\u001c\u0001\u0003 \u0006��^1\r��\u0013rK����]Y\u0001��\u0010\u0000���k�'fL_._�8[�\u001d厲���mO�ͨ���F#l�ŒT�:��Y5�q��/�;��ϰU\u001d��K�E���\u001f�6_ݶ��υ#\u0010���\b������ּL��\u0011��6c�27��f�C-l�m�g�|j3*�W��q]�m�>\u001ffw�\u0015�\u0017���\u0018\u0000\u0000\u0000 �H\u0007\f\u001d�0Ð\u001a�'�\u001c��a\f?Y���\u001b\r!Ŝ��\rL\u0014\u0001���p̄l�9L;�4\u0000�11�<u�\u0007\u000e�q\u0002���&\u001e��\"كE\u0001�\u0000Ƀ� �w\u001e\"Àb�\"\u0018\u0007\u00174x\u0002@d8����H3B����dΊZ&5����=/|9r���0�AK~�\u0003.�Mzb��q�����y����}��X���2\u0016\r��\u000e0��\u0018\u0016ʽ��1TIY�8,����+�䠡�q�Ԟ8�\u001c�ΧR�({\u001d�M�N\u001a���\u0000\u001a0C\u000e#\u000f \u00060�\u0010�\t��0�&3���1E\f\u0000�-0�\t�\u000b�h0\u0002\b3\u001f�K2C\u001a�\u0007�07�\u0004�\u001a��1O\u0006�\u0006�20\u0015\nQ!C0\u001a\u0000�P.\b\u0005�*\u0019\u0001\u0010�\u001fP@h\u0006�\u0000;\u0013\u0004\u0000Rx�\u0002@\u001dM����\u0000y0\u000e&�T\u0000T.\u0019U\u0000�h]\u0007I73�p�bC�õ)��BXQ��W\u0012w��}�=�\u0013Y���H\u0013Oy��g\u000b�<O<M��d\u0013\u0012\u0005���EM\\.��5�\u0001�ZLX���/��sǆ\u0005��cċ\u0017\"Y�!@i�p�d_UN(� �Fq�\u001b���\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007p@��Crا\b w�\\\\�<�\u000fxm���\u001fA�\u0019�\u0000�1��)�~\u0004���]\u0018\b���\u0000��]�����\u0018\u0001�ك�\b�\bA��)\u0018,\u001bI�\u0000\u001c�=���[\u0014\u0018��A��o�_�!��\"�c\u00029��\u0018�\u001b\u0001(�\u0003�\u0005@���\u0004\u0002�:\u001c\u0001O�\u0013a�ʬ\r���^5�\u0014\u0000ť\u0003ڒ�K/\rj����\u0011�ȧ�����zUOY巀KD\u0014sg\u0012��P��g0�\"�\u000bU\u001bw�-v�L�,�[E��M|薶���'<�A�\u0014�IU\u001a%D�]����\f��\u001dw\u0015ݍ�h��FX�k\u001d\u001f@Z�%�\u0013\u001bIz/\u0001h\u0010�����>\r�`\u0010\bcy�hp^e�Pc�f\u0018����\u0019R;��7�(<��\u0014��F\u0017�bcZ3#F\bn\n\t�E\"\u001c`�\u001cf\u000f�0`X\u0003d��` \u0003��\u001d%\u0000�\u0000\u0010\u0002\u0016\u0000$_J��J�$�\u0001�Y�/�\u0016g�\u0000\u0001oS�>���%$��\u0000���\u0004��i���1�g���~kZͶ�m4��6�%f�V�\u000f�9��������w'r�\u001dW\u00176p�W=��E��!���.��D�\u000b�|���㥹�\u0007j�8�\u0000�Vc�ܗ�Y��\u000f]���'�`\u00030\u001a\n�\n@?0.\u0001��\u0014\u0018\u0018\u0007i�\u0001\u0010\u0018!\u0001Yu�\u0000\u0014�\u0007H\u0000����LK@X�0z��\u0007��H\u0014L\u0016@t�,\n���\"\u0001S\u0000�\u0007z�_\u0007�\t}�ڙ�zU3R3!\u001a\u0000d`�n�������o۫Kn�2�r���J���\u000bD\n�^�j\u001cY\u0011+�t.H\u0011�<F�4|*\fL�;�т��\u0004F�\f¤PmP��5v\u0018{����$2@�f��F|�WG*�\u001c���F%G�r\u00137!QEj!�\b\u0010ߝs�;E��L�i�p�h~@���)+��K�� DU,�\u000f�\u0004� \u001fL\u0001�h�4\u001e\u001bScEC0�\u0003Ҩ\b�\u0001\u0011��\u0006�\u0006��\u0010Ԛ.�a�y^�\t/Q�\u0010Y�\u000b\u0000��\u0010\u0000\u000f\u0002���\u0015�\u0001�>�8Qz�\u0014��V�_}]��\u0004�\u0003S΃,Z�2�\u0016<�\u000b�����\u0014unkq�Lm\u000b槸�Ȅmmy�\u001a�Π995\bRM�{\f���\u000f�萝���ﳯO����\u0014e�\u001d�\fF\\��/Y\u000f\u0013�����\\\u001eF\u0016Ih�_�b��ZΦ(�sq\u001c{d\u001b]��6\u000512�ta�v�!�Qt��Y�:��\u0017��{�Z�j-�wGw��\u0014M�\r$\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u00074�>��3r��\u0007�{�n\u001c�@�\u000e��ì�\u001f\u0001�\u0019�A�\u0001\u0010�0<\u0000�\u0018\u0002\u0015\u0000\u001ct2�e�,��\u000f\u0002�\u0002��@\u0000\u0012\u000b�\u0006��1�\f\u0013\u0004\u0013�8Om\u0013\u000e��0\u0002\u0003�`\u001e0:\u0001�\u000b\u0010\u001a\u0012\u0004���s)��jaI�\u000e}�\u001f\u0018\u0002Wvř��޸O0�n�\\����3��I�&\nw\u001fu؅��\u0015\u0016E���\u0014\f�(Nq�UP|Q��BG�զ�N|�Lx�g\\�F$�^���pNj�\"̳_c�.���[r�Z)f�Li�{ҵ���q6C��#x�'Ŗ�Y5\u0015*O\u000f#�M�����7��U��2��\u0010,��@�A�pT�0\u000b\rq�\u0003P\"��\u001c�����\u000b\nqm\u0004`\u0010`\u0004\u0003c��aXZ\u0006�`La�\u001fF�ʊa�\f�\u0007 v`\"\u0003&\u0002�8`�\u0000\bW\u0002[��^R}{u���ؐ\u0000\u0003\u0011�v,�L��\u0018gZ��9��1��y�=\u0019�P�+`�\u001e�=\u0013�����8I\u000eZ\u0010�+&x��0����#��G����\u0005-\u0001�\u0017�ܺRK��\u001f8�w���\u0004�\u000bT�k�\u0013\u0007��I��u\u0013�&�\n�O$�j�\u0007)'*\b���\u0018X��\n�v�<���dl���*3O�1\u0014��-��fJ\u0012'�\u001a���, }�E%��`Q�L\u0011.ѐ8@J�\u0015�\u0018\u0004\u0013��e�\u0001\u0002�J\u0001\f6%M�\u001e\f���|ژ�\\'�\u0011\u0001\u0000��\u0006�\u000b�|�x\u0001�\u0000���I���9g�b3~�z4�J;\u0016�p��0�����X�\\��\u0017h�ߵM����\u0015ɖ�D��\u001d��:x0\u001bw\f�����B�<\u0011^w�\nj��K]՗\u0017�G7�4\u0016�D��S�mn{�*�n\u001d��b�ڠƒ�=�ˌ�6;\u001e��1���:�L��\f�8Lܛ|\u0002S�KSu|�V�\u001aE�\u0018T�_�)�TQWf�}��!��\u001b��l�p/ɂ�\u0001��&`t\nf�B�`�\u0001�@5id���P�������'�sG�\u00141f\u0005@\u0004\u0000\u0000��\u0015\"\u0002\u0016\u0015\f�nS=�e{U�˪���\u0000�\u0014o+Rۯ��\u000e�k+\u001d���匭^��n-�j̜&��F}�t��n\u0010�s4:�����R&c\u0018\u0001�3@f3\u0016��O���T\u0012�v\u0011���W��\u0018��\bJ�\"\t�0�\u0003ɞ�0��dF\u0010�짪�7\t1�5\u001e���'�v�vw)�n�]\u001a�2d��\u0002�6���\u00061��9��iH�\r\u0016��`�����4�\u001a)\u001d4�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0006��?\u0003�3r��\u0007�{�n\u001a�@�\u000e��ïǞ�ޥ��`\u0000�\u001c9�`�\u000f0\u0000Z67s\u0006\u0001�@\u001a�\u0013\u0001&\"�\u0006\u0014\u0014\u0006���`\u0010��C�b\u0004\u0000�\u0007 \u0006`\u0002\u0002�\u0000$\u001a\u0002u�5\u001d�϶r�kY~\\�@X\u0000�����و�X��U��e�u�a���h{���/Q�\u0005����\u001b�T�չ�^c7��U��3����lȖ\"�\u0018���ޫP���z�d;~��y�\u000e�M\u0007C-E\u001f\u000fQ�\u001d�Ք�8�7OiC�$�@͚��\u0012��\u0015���V{��N���9\u0015t�]�\u0015*kmȦ�)\r��\u0001\u0000|�:�\u0010�\u0004�\bA�М\u001d�\u0010�\n�#�\u00004�\u0007�\b�\f`�\u000f\u0006\u0002�\u0012{B�b�J\u0017\u0001�\u0012�\u0001��C*�6Svuj~��\u0005�刨\u0016�r��g(�&�6�X����5W�e-��H\u001c��-ŚX�3\u000fҞN�E�&BE\u001e.�Vz\u00049ZY��PF\\��@��c��'�\u000eƠr\u0016�A2�ӟ:�,�ɒ���H\u0017��\u0016ET�\u0002\u0007[j'��\f���ә虎��^\u001e\\%kI�\u0013�t`�E�H�9�(a+ܚ�!\u0006��n\n\u0019��qg\u0010bHRx\u0004�'���B�\u0012m�N\u0010�1\"'��80\u0004U0\u001f�0D\u0013VŚ�BD\t\nHfxZb��j�ef\u0013 �`\u0004\u0000(�`\u0018\u0001`��\u0016\u0000�m=�X��3��Z�l%�Vϝ��޹O����~{ξ\u0017�RU��6����\u001e���I)�u�4׵�2Ѣ��[�\u000b����!���[�5\u0019x�y.˛CZ'\u0010��RӉ\"ɓ��c�YnJ�� C�T�\u001c_Fcf4�jTZ\u0016��b���7��G��\u000b[R�MUշ����&��\u001e�e��r�W��\u0006R5�YH�J]\u0001�R�Ib\u0001\\�����-�;�X�E1��5�\u0018\u001d1\f\u0010���!r��6\u0005������k�ν[�g�7t�Y\u001d.SQ,k�[�\fl�,������w^Ջ�dcP`�*�֒����\u001b%/FX�A]q;�>\n\"B����ZJ�#�\fť\"�+�u �KM0�Y����Ut�\"cqr�M��b�a[9\u0017������n$���P�dJa�ڵl��KvP�36\u001de�R�ܔ1�Jفrub��\u0017\r#s1˹�E���$E2q�I9���\u000f�Q\u001fOsM�\u0004i,z�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007u�>\u0003�3p�R\u0007�w�n\u001d�8�\u000e��˲ǟAޙ�r�\u0004\u0005\u0007��\b�3\u0001\u0004�o�3\t���-$١� \u0001�iA�����)�\n\u0018\u00186�فp\u000e\u0018\u0011\u0000q�(\b�\u0006\b�\u0004��w��\u0015y�\u0018�\u0014ի�P��k�G�ڜ�Ξ�\u000b�g�X��x�7�&5�G�\u0014y�I�6�#��}\u0001\u001f��4⫓'\u00079�2\u0019\b\u001b�y�(��I4\u001d\u0004|�%�b��\u0015�j\"}��K\u000fB�KS�����\u001c�\\�cn��\u001cA�\u0003�+G�# dqH�\u0010mSs��\u0006BN�\u0005*q�\u0011�)K[��i��\u0018�\u000e�M\u0014R��\nBH$HD,ؽ�N�P\u001b�\u0016Z�d\u0004\b\u0010��(�0\r\r�U�L\u000b\u0000�{\u0013z���\u001dO`wpb(Np\n�\u0006%ÄC\u0006\u0000C\u0004@�0X�n\u0013�=EOVԚ_MV�����\n�5�s\u0015g1�Z{�OXʷ{v)�%5:}�1(q�<��N-e�+#G���X� q�`6,��\u0017vR\tjU7(�8��\n��\u001c4��x\t��w1�]Or�RF\u001eY�9��a��\f! �\u0019\u0003� ��\b\u001cA��d\f\u0017RLԫ4e �X\"V�\u0001ǡc�ɇ.4X\u000f�1���tҞ��\n=欁BYf\u0015JW�6��\u0005\u000b\u0014\u0018� �\u0012\u001d\r\u0000Bq\b\u0012#\u0001\f\r\u0001N\r�\f4\r�+\u0000IB�\b�\"c\u0004�E`��p�A�Ι\u0002�]�8��\u000b@Br`�\u0001�\u0007�\u0016`\u0010\u0000�(L\u0000�>�\u0019�ڄ�m\\͎��\u0000��đ\u0016�ˇ)��ۼ���7WYF3�_�\"�����H�ܴ\u001c̈́�s\u000e.�L��PN��R��s�\u001aRM�U��U*[z^6���,���Q���R�\rʶ���\u0019F�:1�FDr٫k(�F�4��y��ƥjO��\u0019���-��hƷ�i�J,1�g]k�Vi��O4Hr�*\u0018���\u001a�sK��L8��|$\u0011\u0001A�\u0001@``\u0014n$�b`V�\u0005�\u0013\f@�\u0010\u0004S\u0006�Q�T΂������p��T�!<\u001a\u001c\u0018�5�\u0002e\u0003\u000e\u0003\u0012N�qPT�O�\u001aik�\u001b���\u0014\u0004\u0001\u000b�H�;v���|�����!j�����t���o\t�����\u0018ԕ���i7*��L�6����rnU��v��\u0015����ɓ\u0017uw&�/\f�Q�M�ls\u0018��ha,�F-�\b��,\u001a\u00172�Ґ��ؾ_����c\u0016ھ�\u0001����\u000f��af�1S�e�ҭ�:&\u0011�\u001f�#]�����٦���j��.ǀ\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007E��\u0003�3p�\u0012\u0007�w�n\u001d\"@�\u000e��úǟA�\u0019���x4\r/%\u00030\bX=#_0�\u000e*\u0002�@\u001a�\u0007\u000b�5���\n�\u0018\u0005�\r�\u0006\u0017��\u0013\u0003�����$\f>��zÝ皞U��v��=əi $������\u0017;t��Z���.O]��\u0019�)��\u0001S�T�.9�w!�9&���\u0007m\u001b�pcO���N�>h\u0018�&b�5��d��\u0017PS���e(�\"UZ�C9۵�g,���I\u0012&UB\u0011��ȱ\u000f.a�2\u001f���Ix\\��jrxIE�*\fʜ������56<���<�\u0002L�x�;)�vY��t�h�W���+�rfN%@��IQTp27.�0\u001c\u0014F�\u000bx�0\u0014�:d��l�3\fլ�\f(��\u0000\b\u0006\u0001\u00008\u0006\u0003� L@֢�F�e~]3�9A.�\t��\u000b\u001e\u0001[\u0012�T�4��\u001b���u^�v�/p�A�i*]Q�y�'�ѧմ�����%*�}�Է\t��s(��+EU\rf\u0018q���\u0007�\"��K[�\u00100�<��Y����Ώ@��:G�v3\nS�s����Jl$\r��\u000e{$dd��\u0017$�y,�\u0011\b\u0018��<�3��aw\u001a�\u0011GKI7\"΃�g\u001a��ᖑɫ4�&\u0019h\u001e��mfF\u0003!�\u0010\u000b�a�1�Á�4pA@8\u0001\u0018\u0002\u0000\t\u0002�P|�Ql��,��X�c\f��t\f]�\n\u001c\u0018�/\u0018\u0006\u0018�\u0012\f\u0006\b��L\u0000\u0001\u0005A���Қ,;dj.��.w.ht\u0000j0{\f��P�y#�R����a��g���ϓS�P�=��C��_�9\b�2���aN^�\\{�Y�\u001fRַY�8��v\u001a�\u0013D�7��\u0016���1+ۉ�(������u3a՗El]\u001e�>��N��G�S����Mx�Xr�<Ӫq���m�-����\b�.)\u000e�S�ݷ6�ԧo!\fw�uA��x\b\n�`�LF)�\u0001,\u0018�*�\u000e\u0000\u0018\b\u0018\u0018 \u0012�^\u0014��b�lH�\u0000�V�\u00141\u001a\u0004s\u000bPk0\u0000\u0002\u0010\u0000%\t\u0004\u0004�\u0014\u0001\tW\u0003$zI�\"�r����x�uI\u000bX2�\n��\u0014��/`Vi\u00039\u0012���˚�2�֕�Qv�q��N�G;j�\u00170�[N\u0019\tC����B6t|)��y(\u0015/jA��k ׷m�R\f�\u001b9)�U\u0019檱)roL�vBM\u0015/�����\\�Bi�9\n���G�(C]\u0017.�]Z��wy�\\d/穃�[<<\u0016H����?��'��Z-�����񧓙@\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007|�>��3r�\u0011��s�nZ�@�\u000ex�ûH\u001e�Υ��\u0005\u0002&\b\\\u0000\b\u0003\u0018\\\bqKxb\u0000�<\n\n�\f(`1\bZ�\n����lJ\u0005F$ �`~\tF\u0006�>\u001c\u0003&\u0004`L�@P\u0000\u0000�\u00004\u0000�\u0000\u0019!�\u001f\u0007�\u001av��}ܛ�ɘC�\u0018�T��X�T�\u0012�jL崜��S���Xt�hT\u0006\"yͭ\t��\u001bD㝉:m�\u000f�d\u001b\"?�N�MM��o e�\u0017)D2��L�ʽ��m�t���lY\u0016!\u001bf\u0016�I��-򅒒O\u001bf�uW��fMI\u0019\u0007��d\u0010,3Ca\u0018R�L6\u000b�Y\u0018�9�H�4�$�\\��򲬲\u0005QX�>�{Z��Ѽ�����8h\u0012`\u0001\u0001�\u0001f\u0012\r�..c\u00111�@@Pp\u0014`V7\u0014��\u0016��i\u001ckL�vP\u0018�\u0012\u0018\f\b�\u0005�\"���X h\u0000ə�;��\u0012*,���5�]�;[���^G����/�#�\u001e��f[SXٔ公>]r���o�M�s\u0012X\u0005����a��Z2k2~�UC\rq\u0013r�ց\u0012�q�\u001aMc\f�$w?��ʙO\n5\u0012\u0005�E�U�lĒ[��_\f�Ӭ�7I\u0014G�\u0001m���g��Ȣ����\u000bCJk�9�\u001bNw׆ݙ��aU7�r�iZd��32�00\u001d\u001c�Tx��j�����+\t\u0001�\u0005�}��\u0011=2�X�\u0018SB\"�0$\u00010P\u0001+�6\u0005\u0002�xŨ#��v\u0019Z�5j��Բ��\u0007�jV�\u0001evAf�;��\\����̻Ɠ˨\u0010�5��\u0002�m\u0019��W�1H�W��E&\\�T[��: �֊ͺ-\u0006}�k\u001br�{ƽ �,�d��i�F�\"n%SU�Y\u0015\u0016�]���\r���\b��e��EF�\u0016CWI*���sZp�\u000b�>�CJ\u0019\nB��[�f���}s\u0005\u0018�o<\u0014�FԚ\u000e�&�A(�z�6\u0004.p\\beK@a\te0[���[����§:\u001f\u00181�\u00030\u0010\u0004-an�C�\u001c��?�O���j5�32�m?��^w,�V+�;K��b�9\\���\\�\u000eٔ\u0011�9\u001a\u001e0�-\u0016��Vh.l�n\u00120Y\u001aYh�pԢ�S�R��4q���2�\u001e��4�����Xê�\u0015\u0011�d����R'��==j��qW\u0015\u001dCH�2Sze��DR��=Bb���$A9[\u0005��Te�Q���T\u0013�G�e���5a&%&\u0015H������\"���M�6\u0012��\u0011B�7���\b�����\u0018�\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007\u0013�=\u0003�3r�Q��s�n^V@�\u000ey-å�\u001d��%�Tk-�UbF\u0002\u0018���\n ˠ4�0X\u0004�ϰ�<�\u0011c��3\u0018\u0005#\u0007��\u0000@s\u0002�C\u0013A\u0004��˻���K��v�.6�5���S:�\u0007~�v����v�\u0017���Ļ���:$'M0\t�2Ptl\u001a\u0013R��\b頒��0���w��)(����y4��X9:��Dk)�$f�x�\u0014W�xJq�^��%\u0012�>9\u001761��$9\"W�>��M�ZX����Y\rI�\u0014�\u0004R`����\u001aX\u0004�Ό7\u000bpfIܹy rga�\u0019�GBgш�\u001e�q�a*�?�\nM����;\b\u0006\u0019J\u000e$0S�\rBL.\u000e2 ���\u0003+-��bF�\u0012 =Y�@!�I��aMMMR�4������d\u0006���v3n�+{}��˲ƛS�����U��\u001a8.ґ��I$�\u0017Ц�ڋlb�<�嫱\r�\u001b}�)\"��\u0014�z�&��~Ռ�\u0013-^1!c-\u001c�V0�]\n\u0004�\u0014^�:�\u0017���l\u000b\u000f?�\fnD�$���.A&�F顛sG\u000e�yn�p� ��=�������I$t�RW\u0010S1��$���Z��-\tn&�Jrel�_\t�E\u0017TY8���?W�\u0014�\u0011\u0019 �j�\u0010�����`aC�T\"g����p\u0000���x\u0001\u0002�\f2\u0002�\u0000�����\u001a:�ծگ�ܥ�J\u0000LZSKR�l��ν�-���|��k�fg~�4�Si\u001c\u0015C�WChX��U%�k(���E\u0011{�H�\u0013'wB\u0015A!V�*KS�8�\t��)�s��Thʹ�,H��\raE\u000b2C���Ԑ�*ғ؃4�jMY�\u001cR�$\u0019et8��s\u000ef,�kJM8�\\Z�Xfq\u0014�'��u�\r+f�$��!gnKx�:\u001a\u0015-8$��g���M�s�^��T6�w5z�\n�*; �e�\t\u0005\u001a��<Cd��;���K�\u000e*\u00102��\"1�:\u001dkJڍ�zS��ƽLl�Ջ}ܥ����.MWΖ�X��7�b婪j�uq�W\u0012�*���Z�f���ې��/\u0010Zo�ȆiI5�ZVڬ�\u0012������R�WꜱcS�u��\u0005�\"�R\u0017*�6�\u0015�*֝f�I���oj\u0013-\u0018ȉ\u0013pU'�8�ڈ�%���-z�P�)j��̖\u000bmoƒD�֒',�e\u0002�j\u0010\"�hU,h�Ka��\u0013!Bʰb� �\r$���)h[��8�p\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0007l�7��Kr�R\u0006�oIn\u0002�,�\f���*\u0001\u001b��\u0000\u0001\b[,V̲�\u0001B\u0003����P\u0001��)����.b󱗸�7>&r\u0003i�D\u0004�\u001e\u0007\u0016\u0000ѠV\u0017z�{5��\\e�y�Y�\\ε�U�jfvUnSb��o�l��vuM�:���ĄTԈ�ƕ�y�(qb$1�M\f5fUg���L�őJRY�ԕ�ٵ�4�6u\f���l\b�����M\rb�o�i\f�����\u000b�����r5y$B���B�M\fR\u0000ī\n�\u0015Y�A����\u001c�䦅�\"f1Zp�E$ɡ�nIY&�\u000eF�ƵVVz\u001a�\"iX5H�m�\u0016}M\u0013]f�P0�&��I\u001c`��ib-P,\u0016����#��>w�\u001b ;����\u0014\u0010�\b\u001e\u0002\n�E���\u001a����--�ie2��B�[ۥ�K�uܻ��[,�����*�UȚU�X��\u0002D�*��%HB��H�\t��\"��'�1Ȑ��D*z�V1���Q�\u001cD�5R���b�$��=�,M+�\u00114�r���C)*)%��Ȑ��\\YU�lի\u0006�g\u001fx�DD�$S�2�R��,\"iT?��y(�ei\u001a�ȑ4���rV�ق$I���\\V&�K�JX4�l��*5�8Ш\\�\u0016՚�A\u0007F\u0012\u0004\"�AQ@�(\u0013\r�\u001dH��QL\u0012VOE2]\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000���@\u0000\u0000\u0000\u001a\u0001��\u0001\u0000\u0000\u0003\u00006�` \u0000\u0000@\u0004�\u0007�\u0000\u0000\b\u0000���\u0000\u0000\"u�H�e�uHu@\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("serve-static");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _bluebird = __webpack_require__(7);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _moment = __webpack_require__(17);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _uuid = __webpack_require__(18);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _botpress = __webpack_require__(19);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var util = __webpack_require__(5);
	
	module.exports = function (knex, botfile) {
	  var getUserInfo = function () {
	    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userId) {
	      var user, name, avatar;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return knex('users').where({ platform: 'webchat', userId: userId }).then().get(0).then();
	
	            case 2:
	              user = _context.sent;
	              name = user && user.first_name + ' ' + user.last_name;
	              avatar = user && user.picture_url || null;
	              return _context.abrupt('return', {
	                fullName: name,
	                avatar_url: avatar
	              });
	
	            case 6:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));
	
	    return function getUserInfo(_x) {
	      return _ref.apply(this, arguments);
	    };
	  }();
	
	  var appendUserMessage = function () {
	    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userId, conversationId, _ref3) {
	      var type = _ref3.type,
	          text = _ref3.text,
	          raw = _ref3.raw,
	          data = _ref3.data;
	
	      var _ref4, fullName, avatar_url, convo, message;
	
	      return regeneratorRuntime.wrap(function _callee2$(_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              _context2.next = 2;
	              return getUserInfo(userId);
	
	            case 2:
	              _ref4 = _context2.sent;
	              fullName = _ref4.fullName;
	              avatar_url = _ref4.avatar_url;
	              _context2.next = 7;
	              return getConversation(userId, conversationId);
	
	            case 7:
	              convo = _context2.sent;
	
	              if (convo) {
	                _context2.next = 10;
	                break;
	              }
	
	              throw new Error('Conversation "' + conversationId + '" not found');
	
	            case 10:
	              message = {
	                id: _uuid2.default.v4(),
	                conversationId: conversationId,
	                userId: userId,
	                full_name: fullName,
	                avatar_url: avatar_url,
	                message_type: type,
	                message_text: text,
	                message_raw: (0, _botpress.DatabaseHelpers)(knex).json.set(raw),
	                message_data: (0, _botpress.DatabaseHelpers)(knex).json.set(data),
	                sent_on: (0, _botpress.DatabaseHelpers)(knex).date.now()
	              };
	              _context2.next = 13;
	              return knex('web_messages').insert(message).then();
	
	            case 13:
	              _context2.next = 15;
	              return knex('web_conversations').where({ id: conversationId, userId: userId }).update({ last_heard_on: (0, _botpress.DatabaseHelpers)(knex).date.now() }).then();
	
	            case 15:
	              return _context2.abrupt('return', Object.assign(message, {
	                sent_on: new Date(),
	                message_raw: (0, _botpress.DatabaseHelpers)(knex).json.get(message.message_raw),
	                message_data: (0, _botpress.DatabaseHelpers)(knex).json.get(message.message_data)
	              }));
	
	            case 16:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _callee2, this);
	    }));
	
	    return function appendUserMessage(_x2, _x3, _x4) {
	      return _ref2.apply(this, arguments);
	    };
	  }();
	
	  var appendBotMessage = function () {
	    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(botName, botAvatar, conversationId, _ref6) {
	      var type = _ref6.type,
	          text = _ref6.text,
	          raw = _ref6.raw,
	          data = _ref6.data;
	      var message;
	      return regeneratorRuntime.wrap(function _callee3$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              message = {
	                id: _uuid2.default.v4(),
	                conversationId: conversationId,
	                userId: null,
	                full_name: botName,
	                avatar_url: botAvatar,
	                message_type: type,
	                message_text: text,
	                message_raw: (0, _botpress.DatabaseHelpers)(knex).json.set(raw),
	                message_data: (0, _botpress.DatabaseHelpers)(knex).json.set(data),
	                sent_on: (0, _botpress.DatabaseHelpers)(knex).date.now()
	              };
	              _context3.next = 3;
	              return knex('web_messages').insert(message).then();
	
	            case 3:
	              return _context3.abrupt('return', Object.assign(message, {
	                sent_on: new Date(),
	                message_raw: (0, _botpress.DatabaseHelpers)(knex).json.get(message.message_raw),
	                message_data: (0, _botpress.DatabaseHelpers)(knex).json.get(message.message_data)
	              }));
	
	            case 4:
	            case 'end':
	              return _context3.stop();
	          }
	        }
	      }, _callee3, this);
	    }));
	
	    return function appendBotMessage(_x5, _x6, _x7, _x8) {
	      return _ref5.apply(this, arguments);
	    };
	  }();
	
	  var createConversation = function () {
	    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(userId) {
	      var uid, title, conversation;
	      return regeneratorRuntime.wrap(function _callee4$(_context4) {
	        while (1) {
	          switch (_context4.prev = _context4.next) {
	            case 0:
	              uid = Math.random().toString().substr(2, 6);
	              title = 'Conversation ' + uid;
	              _context4.next = 4;
	              return knex('web_conversations').insert({
	                userId: userId,
	                created_on: (0, _botpress.DatabaseHelpers)(knex).date.now(),
	                title: title
	              }).then();
	
	            case 4:
	              _context4.next = 6;
	              return knex('web_conversations').where({ title: title, userId: userId }).select('id').then().get(0).then();
	
	            case 6:
	              conversation = _context4.sent;
	
	              console.log('\n CONVO USER ID: ' + userId);
	              console.log('\n NEW CONVERSATION: ' + util.inspect(conversation));
	              return _context4.abrupt('return', conversation && conversation.id);
	
	            case 10:
	            case 'end':
	              return _context4.stop();
	          }
	        }
	      }, _callee4, this);
	    }));
	
	    return function createConversation(_x9) {
	      return _ref7.apply(this, arguments);
	    };
	  }();
	
	  var patchConversation = function () {
	    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(userId, conversationId, title, description, logoUrl) {
	      return regeneratorRuntime.wrap(function _callee5$(_context5) {
	        while (1) {
	          switch (_context5.prev = _context5.next) {
	            case 0:
	              _context5.next = 2;
	              return knex('web_conversations').where({ userId: userId, id: conversationId }).update({
	                title: title,
	                description: description,
	                logo_url: logoUrl
	              }).then();
	
	            case 2:
	            case 'end':
	              return _context5.stop();
	          }
	        }
	      }, _callee5, this);
	    }));
	
	    return function patchConversation(_x10, _x11, _x12, _x13, _x14) {
	      return _ref8.apply(this, arguments);
	    };
	  }();
	
	  var getOrCreateRecentConversation = function () {
	    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(userId) {
	      var conversations, isRecent, recents;
	      return regeneratorRuntime.wrap(function _callee6$(_context6) {
	        while (1) {
	          switch (_context6.prev = _context6.next) {
	            case 0:
	              _context6.next = 2;
	              return listConversations(userId);
	
	            case 2:
	              conversations = _context6.sent;
	
	              console.log('\n CONVERSATIONS: ' + util.inspect(conversations));
	              // TODO make this configurable
	
	              isRecent = function isRecent(d) {
	                var then = (0, _moment2.default)(d);
	                var recent = (0, _moment2.default)().subtract(6, 'hours');
	                return then.isSameOrAfter(recent);
	              };
	
	              recents = _lodash2.default.filter(conversations, function (c) {
	                return isRecent(c.last_heard_on);
	              });
	
	              recents = _lodash2.default.orderBy(recents, ['last_heard_on'], ['desc']);
	
	              if (!recents.length) {
	                _context6.next = 9;
	                break;
	              }
	
	              return _context6.abrupt('return', recents[0].id);
	
	            case 9:
	              return _context6.abrupt('return', createConversation(userId));
	
	            case 10:
	            case 'end':
	              return _context6.stop();
	          }
	        }
	      }, _callee6, this);
	    }));
	
	    return function getOrCreateRecentConversation(_x15) {
	      return _ref9.apply(this, arguments);
	    };
	  }();
	
	  var listConversations = function () {
	    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(userId) {
	      var conversations, conversationIds;
	      return regeneratorRuntime.wrap(function _callee7$(_context7) {
	        while (1) {
	          switch (_context7.prev = _context7.next) {
	            case 0:
	              _context7.next = 2;
	              return knex('web_conversations').where({ userId: userId }).orderBy(['last_heard_on'], 'desc').limit(100).then();
	
	            case 2:
	              conversations = _context7.sent;
	              conversationIds = _lodash2.default.map(conversations, function (c) {
	                return c.id;
	              });
	              return _context7.abrupt('return', knex.from(function () {
	                this.from('web_messages').whereIn('conversationId', conversationIds).groupBy('conversationId').select('conversationId', knex.raw('max(id) as msgid')).as('q1');
	              }).innerJoin('web_conversations', 'web_conversations.id', 'q1.conversationId').innerJoin('web_messages', 'web_messages.id', 'q1.msgid').orderBy('web_messages.sent_on', 'desc').select('web_conversations.id', 'web_conversations.title', 'web_conversations.description', 'web_conversations.logo_url', 'web_conversations.created_on', 'web_messages.message_type', 'web_messages.message_text', knex.raw('web_messages.full_name as message_author'), knex.raw('web_messages.avatar_url as message_author_avatar'), knex.raw('web_messages.sent_on as message_sent_on')).then());
	
	            case 5:
	            case 'end':
	              return _context7.stop();
	          }
	        }
	      }, _callee7, this);
	    }));
	
	    return function listConversations(_x16) {
	      return _ref10.apply(this, arguments);
	    };
	  }();
	
	  var getConversation = function () {
	    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(userId, conversationId) {
	      var fromId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var condition, conversation, messages;
	      return regeneratorRuntime.wrap(function _callee8$(_context8) {
	        while (1) {
	          switch (_context8.prev = _context8.next) {
	            case 0:
	              condition = { userId: userId };
	
	
	              if (conversationId && conversationId !== 'null') {
	                condition.id = conversationId;
	              }
	
	              _context8.next = 4;
	              return knex('web_conversations').where(condition).then().get(0).then();
	
	            case 4:
	              conversation = _context8.sent;
	
	              if (conversation) {
	                _context8.next = 7;
	                break;
	              }
	
	              return _context8.abrupt('return', null);
	
	            case 7:
	              _context8.next = 9;
	              return getConversationMessages(conversationId, fromId);
	
	            case 9:
	              messages = _context8.sent;
	
	
	              messages.forEach(function (m) {
	                return Object.assign(m, {
	                  message_raw: (0, _botpress.DatabaseHelpers)(knex).json.get(m.message_raw),
	                  message_data: (0, _botpress.DatabaseHelpers)(knex).json.get(m.message_data)
	                });
	              });
	
	              return _context8.abrupt('return', Object.assign({}, conversation, {
	                messages: _lodash2.default.orderBy(messages, ['sent_on'], ['asc'])
	              }));
	
	            case 12:
	            case 'end':
	              return _context8.stop();
	          }
	        }
	      }, _callee8, this);
	    }));
	
	    return function getConversation(_x17, _x18) {
	      return _ref11.apply(this, arguments);
	    };
	  }();
	
	  function initialize() {
	    if (!knex) {
	      throw new Error('you must initialize the database before');
	    }
	
	    return (0, _botpress.DatabaseHelpers)(knex).createTableIfNotExists('web_conversations', function (table) {
	      table.increments('id').primary();
	      table.string('userId');
	      table.string('title');
	      table.string('description');
	      table.string('logo_url');
	      table.timestamp('created_on');
	      table.timestamp('last_heard_on'); // The last time the user interacted with the bot. Used for "recent" conversation
	      table.timestamp('user_last_seen_on');
	      table.timestamp('bot_last_seen_on');
	    }).then(function () {
	      return (0, _botpress.DatabaseHelpers)(knex).createTableIfNotExists('web_messages', function (table) {
	        table.string('id').primary();
	        table.integer('conversationId');
	        table.string('userId');
	        table.string('message_type');
	        table.text('message_text');
	        table.jsonb('message_raw');
	        table.binary('message_data'); // Only useful if type = file
	        table.string('full_name');
	        table.string('avatar_url');
	        table.timestamp('sent_on');
	      });
	    });
	  }
	
	  function getConversationMessages(conversationId) {
	    var fromId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	    var query = knex('web_messages').where({ conversationId: conversationId });
	
	    if (fromId) {
	      query = query.andWhere('id', '<', fromId);
	    }
	
	    return query.orderBy('sent_on', 'desc').limit(20).then();
	  }
	
	  return {
	    initialize: initialize,
	    appendUserMessage: appendUserMessage,
	    appendBotMessage: appendBotMessage,
	    createConversation: createConversation,
	    patchConversation: patchConversation,
	    getConversation: getConversation,
	    listConversations: listConversations,
	    getOrCreateRecentConversation: getOrCreateRecentConversation
	  };
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("moment");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("uuid");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("botpress");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _sillyname = __webpack_require__(21);
	
	var _sillyname2 = _interopRequireDefault(_sillyname);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	module.exports = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(bp, config) {
	    var getOrCreateUser = function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userId) {
	        var throwIfNotFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	        var realUserId, user;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                realUserId = userId.startsWith('webchat:') ? userId.substr(8) : userId;
	
	                console.log('\nREAL USER ID: ' + realUserId);
	                _context.next = 4;
	                return knex('users').where({
	                  platform: 'webchat',
	                  userId: realUserId
	                }).then().get(0).then();
	
	              case 4:
	                user = _context.sent;
	
	                if (user) {
	                  _context.next = 11;
	                  break;
	                }
	
	                if (!throwIfNotFound) {
	                  _context.next = 8;
	                  break;
	                }
	
	                throw new Error('User ' + realUserId + ' not found');
	
	              case 8:
	                _context.next = 10;
	                return createNewUser(realUserId);
	
	              case 10:
	                return _context.abrupt('return', getOrCreateUser(realUserId, true));
	
	              case 11:
	                return _context.abrupt('return', user);
	
	              case 12:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      return function getOrCreateUser(_x3) {
	        return _ref2.apply(this, arguments);
	      };
	    }();
	
	    var patchUserInfo = function () {
	      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userId, fields) {
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      return function patchUserInfo(_x5, _x6) {
	        return _ref3.apply(this, arguments);
	      };
	    }();
	
	    var knex, createNewUser;
	    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            createNewUser = function createNewUser(userId) {
	              var _sillyname$split = (0, _sillyname2.default)().split(' '),
	                  _sillyname$split2 = _slicedToArray(_sillyname$split, 2),
	                  first_name = _sillyname$split2[0],
	                  last_name = _sillyname$split2[1];
	
	              var user = {
	                first_name: first_name,
	                last_name: last_name,
	                profile_pic: null,
	                id: userId,
	                platform: 'webchat'
	              };
	
	              return bp.db.saveUser(user);
	            };
	
	            _context3.next = 3;
	            return bp.db.get();
	
	          case 3:
	            knex = _context3.sent;
	            return _context3.abrupt('return', { getOrCreateUser: getOrCreateUser });
	
	          case 5:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _callee3, undefined);
	  }));
	
	  return function (_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = require("sillyname");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bluebird = __webpack_require__(7);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	var _users = __webpack_require__(20);
	
	var _users2 = _interopRequireDefault(_users);
	
	var _db2 = __webpack_require__(16);
	
	var _db3 = _interopRequireDefault(_db2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	var util = __webpack_require__(5);
	
	// CONVO USER ID: 7d334f0e- 6b7a- 4e9b- b4ed - 9b0dbfcdb6d1
	// CONVO USER ID: webchat: webchat: 7d334f0e- 6b7a- 4e9b- b4ed - 9b0dbfcdb6d1
	var outgoingTypes = ['text', 'login_prompt'];
	
	module.exports = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(bp, config) {
	    var outgoingHandler = function () {
	      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event, next) {
	        var userId, user, typing, conversationId, socketId, message;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!(event.platform !== 'webchat')) {
	                  _context.next = 2;
	                  break;
	                }
	
	                return _context.abrupt('return', next());
	
	              case 2:
	                if (_lodash2.default.includes(outgoingTypes, event.type)) {
	                  _context.next = 4;
	                  break;
	                }
	
	                return _context.abrupt('return', next('Unsupported event type: ' + event.type));
	
	              case 4:
	                userId = event.user.id.startsWith('webchat:') ? event.user.id.substr(8) : event.user.id;
	                _context.next = 7;
	                return getOrCreateUser(userId);
	
	              case 7:
	                user = _context.sent;
	                typing = parseTyping(event);
	                _context.t0 = _lodash2.default.get(event, 'raw.conversationId');
	
	                if (_context.t0) {
	                  _context.next = 14;
	                  break;
	                }
	
	                _context.next = 13;
	                return getOrCreateRecentConversation(user.userId);
	
	              case 13:
	                _context.t0 = _context.sent;
	
	              case 14:
	                conversationId = _context.t0;
	                socketId = user.id.replace('webchat:', '');
	
	                if (!typing) {
	                  _context.next = 20;
	                  break;
	                }
	
	                bp.events.emit('guest.webchat.typing', {
	                  timeInMs: typing,
	                  userId: null,
	                  __room: 'visitor:' + socketId,
	                  conversationId: conversationId
	                });
	
	                _context.next = 20;
	                return _bluebird2.default.delay(typing);
	
	              case 20:
	                _context.next = 22;
	                return appendBotMessage(bot_name, bot_avatar, conversationId, event);
	
	              case 22:
	                message = _context.sent;
	
	                bp.events.emit('guest.webchat.message', message);
	                Object.assign(message, {
	                  __room: 'visitor:' + socketId // This is used to send to the relevant user's socket
	                });
	
	                // Resolve the event promise
	                event._promise && event._resolve && event._resolve();
	
	              case 26:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      return function outgoingHandler(_x3, _x4) {
	        return _ref4.apply(this, arguments);
	      };
	    }();
	
	    var knex, _db, appendBotMessage, getOrCreateRecentConversation, _ref2, getOrCreateUser, _ref3, _ref3$bot_name, bot_name, _ref3$bot_avatar, bot_avatar;
	
	    return regeneratorRuntime.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return bp.db.get();
	
	          case 2:
	            knex = _context2.sent;
	            _db = (0, _db3.default)(knex, bp.botfile), appendBotMessage = _db.appendBotMessage, getOrCreateRecentConversation = _db.getOrCreateRecentConversation;
	            _context2.next = 6;
	            return (0, _users2.default)(bp, config);
	
	          case 6:
	            _ref2 = _context2.sent;
	            getOrCreateUser = _ref2.getOrCreateUser;
	            _ref3 = config || {}, _ref3$bot_name = _ref3.bot_name, bot_name = _ref3$bot_name === undefined ? 'Bot' : _ref3$bot_name, _ref3$bot_avatar = _ref3.bot_avatar, bot_avatar = _ref3$bot_avatar === undefined ? null : _ref3$bot_avatar;
	
	
	            bp.middlewares.register({
	              name: 'webchat.sendMessages',
	              type: 'outgoing',
	              order: 100,
	              handler: outgoingHandler,
	              module: 'botpress-platform-webchat',
	              description: 'Sends out messages that targets platform = webchat.' + ' This middleware should be placed at the end as it swallows events once sent.'
	            });
	
	          case 10:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, undefined);
	  }));
	
	  return function (_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}();
	
	function parseTyping(msg) {
	  if (msg.raw && !!msg.raw.typing) {
	    if (isNaN(msg.raw.typing)) {
	      return 1000;
	    } else {
	      return Math.max(msg.raw.typing, 500);
	    }
	  }
	
	  return false;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "# DEFAULT SETTINGS\nbotName: 'Bot' ## Name of your bot\nbotAvatarUrl: null ## Default avatar url of the image (e.g. 'https://avatars3.githubusercontent.com/u/1315508?v=4&s=400' )\nbotConvoTitle: 'Technical Support' ## Title of the first conversation with the bot\nbotConvoDescription: ''\n\n# POPUP CONVERSATION SETTINGS\nwelcomeMsgEnable: true\nwelcomeMsgDelay: 1000\nwelcomeMsgText: | ## Welcome message that shows at on pop-up (multi-lines)\n  Hey guys!\n  Curious about our offer?\n  This is the default message...\n\n# COLOR SETTINGS\nbackgroundColor: '#ffffff' ## Color of the background \ntextColorOnBackground: '#666666' ## Color of the text on the background\nforegroundColor: '#0176ff' ## Element background color (header, composer, button..)\ntextColorOnForeground: '#ffffff'  ## Element text color (header, composer, button..)\n\nuploadsUseS3: true\n#uploadsS3Bucket: bucket-name\n#uploadsS3Region: eu-west-1\n#uploadsS3AWSAccessKey: your-aws-key-name\n#uploadsS3AWSAccessSecret: secret-key"

/***/ })
/******/ ]);
//# sourceMappingURL=node.bundle.js.map