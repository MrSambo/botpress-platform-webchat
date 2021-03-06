botpress = typeof botpress === "object" ? botpress : {}; botpress["botpress-platform-webchat"] =
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
/******/ 	__webpack_require__.p = "/js/lite-modules/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FullscreenChat = function (_React$Component) {
	  _inherits(FullscreenChat, _React$Component);
	
	  function FullscreenChat(props) {
	    _classCallCheck(this, FullscreenChat);
	
	    return _possibleConstructorReturn(this, (FullscreenChat.__proto__ || Object.getPrototypeOf(FullscreenChat)).call(this, props));
	  }
	
	  _createClass(FullscreenChat, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(_index2.default, _extends({ fullscreen: false }, this.props));
	    }
	  }]);
	
	  return FullscreenChat;
	}(React.Component);
	
	exports.default = FullscreenChat;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _add_milliseconds = __webpack_require__(5);
	
	var _add_milliseconds2 = _interopRequireDefault(_add_milliseconds);
	
	var _is_before = __webpack_require__(8);
	
	var _is_before2 = _interopRequireDefault(_is_before);
	
	var _convo = __webpack_require__(9);
	
	var _convo2 = _interopRequireDefault(_convo);
	
	var _side = __webpack_require__(23);
	
	var _side2 = _interopRequireDefault(_side);
	
	var _style = __webpack_require__(19);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* global: window */
	
	// import { Emoji } from 'emoji-mart'
	
	var BOT_HOSTNAME = window.location.origin;
	var ANIM_DURATION = 300;
	
	var MIN_TIME_BETWEEN_SOUNDS = 10000; // 10 seconds
	
	var Web = function (_React$Component) {
	  _inherits(Web, _React$Component);
	
	  function Web(props) {
	    _classCallCheck(this, Web);
	
	    var _this = _possibleConstructorReturn(this, (Web.__proto__ || Object.getPrototypeOf(Web)).call(this, props));
	
	    _this.state = {
	      view: null,
	      textToSend: '',
	      loading: true,
	      played: false,
	      opened: false,
	      conversations: null,
	      currentConversation: null,
	      currentConversationId: null,
	      unreadCount: 0
	    };
	    return _this;
	  }
	
	  _createClass(Web, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setupSocket();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this.setUserId().then(this.fetchData.bind(this)).then(function () {
	        _this2.handleSwitchView('widget');
	        _this2.showConvoPopUp();
	
	        _this2.setState({
	          loading: false
	        });
	      });
	    }
	  }, {
	    key: 'setUserId',
	    value: function setUserId() {
	      var _this3 = this;
	
	      return new Promise(function (resolve, reject) {
	
	        var interval = setInterval(function () {
	          if (window.__BP_VISITOR_ID) {
	            clearInterval(interval);
	            _this3.userId = window.__BP_VISITOR_ID;
	            resolve();
	          }
	        }, 250);
	
	        setTimeout(function () {
	          clearInterval(interval);
	          reject();
	        }, 300000);
	      });
	    }
	  }, {
	    key: 'showConvoPopUp',
	    value: function showConvoPopUp() {
	      var _this4 = this;
	
	      if (this.state.config.welcomeMsgEnable) {
	        setTimeout(function () {
	          if (!_this4.state.opened) {
	            _this4.handleSwitchView('convo');
	          }
	        }, this.state.config.welcomeMsgDelay || 5000);
	      }
	    }
	  }, {
	    key: 'handleSwitchView',
	    value: function handleSwitchView(view) {
	      var _this5 = this;
	
	      if (view === 'side' && this.state.view !== 'side') {
	        this.setState({
	          opened: true,
	          unreadCount: 0,
	          convoTransition: 'fadeOut',
	          widgetTransition: 'fadeOut'
	        });
	
	        setTimeout(function () {
	          _this5.setState({
	            sideTransition: 'fadeIn',
	            view: view
	          });
	        }, ANIM_DURATION + 10);
	      }
	
	      if (view === 'convo') {
	        setTimeout(function () {
	          _this5.setState({
	            convoTransition: 'fadeIn',
	            view: view
	          });
	        }, ANIM_DURATION);
	      }
	
	      if (view === 'widget') {
	        this.setState({
	          convoTransition: 'fadeOut',
	          sideTransition: 'fadeOut'
	        });
	
	        if (!this.state.view || this.state.view === 'side') {
	          setTimeout(function () {
	            _this5.setState({
	              widgetTransition: 'fadeIn',
	              view: view
	            });
	          }, ANIM_DURATION);
	        }
	      }
	
	      setTimeout(function () {
	        _this5.setState({
	          view: view
	        });
	      }, ANIM_DURATION);
	
	      setTimeout(function () {
	        _this5.setState({
	          widgetTransition: null,
	          convoTransition: null,
	          sideTransition: _this5.state.sideTransition === 'fadeIn' ? 'fadeIn' : null
	        });
	      }, ANIM_DURATION * 2.1);
	    }
	  }, {
	    key: 'handleButtonClicked',
	    value: function handleButtonClicked() {
	      if (this.state.view === 'convo') {
	        this.handleSwitchView('widget');
	      } else {
	        this.handleSwitchView('side');
	      }
	    }
	  }, {
	    key: 'setupSocket',
	    value: function setupSocket() {
	      // Connect the Botpress's Web Socket to the server
	      if (this.props.bp && this.props.bp.events) {
	        this.props.bp.events.setup();
	      }
	
	      this.props.bp.events.on('guest.webchat.message', this.handleNewMessage.bind(this));
	      this.props.bp.events.on('guest.webchat.typing', this.handleBotTyping.bind(this));
	    }
	  }, {
	    key: 'fetchData',
	    value: function fetchData() {
	      return this.fetchConfig().then(this.fetchConversations.bind(this)).then(this.fetchCurrentConversation.bind(this));
	    }
	  }, {
	    key: 'fetchConversations',
	    value: function fetchConversations() {
	      var _this6 = this;
	
	      var axios = this.props.bp.axios;
	      var userId = this.userId;
	      var url = BOT_HOSTNAME + '/api/botpress-platform-webchat/conversations/' + userId;
	
	      return axios.get(url).then(function (_ref) {
	        var data = _ref.data;
	
	        _this6.setState({
	          conversations: data
	        });
	      });
	    }
	  }, {
	    key: 'fetchCurrentConversation',
	    value: function (_fetchCurrentConversation) {
	      function fetchCurrentConversation(_x) {
	        return _fetchCurrentConversation.apply(this, arguments);
	      }
	
	      fetchCurrentConversation.toString = function () {
	        return _fetchCurrentConversation.toString();
	      };
	
	      return fetchCurrentConversation;
	    }(function (convoId) {
	      var _this7 = this;
	
	      var axios = this.props.bp.axios;
	      var userId = this.userId;
	
	      var conversationIdToFetch = convoId || this.state.currentConversationId;
	      if (this.state.conversations.length > 0 && !conversationIdToFetch) {
	        conversationIdToFetch = this.state.conversations[0].id;
	        this.setState({ currentConversationId: conversationIdToFetch });
	      }
	
	      var url = BOT_HOSTNAME + '/api/botpress-platform-webchat/conversations/' + userId + '/' + conversationIdToFetch;
	
	      return axios.get(url).then(function (_ref2) {
	        var data = _ref2.data;
	
	        // Possible race condition if the current conversation changed while fetching
	        if (_this7.state.currentConversationId !== conversationIdToFetch) {
	          // In which case we simply restart fetching
	          return fetchCurrentConversation();
	        }
	
	        _this7.setState({ currentConversation: data });
	      });
	    })
	  }, {
	    key: 'fetchConfig',
	    value: function fetchConfig() {
	      var _this8 = this;
	
	      return this.props.bp.axios.get('/api/botpress-platform-webchat/config').then(function (_ref3) {
	        var data = _ref3.data;
	
	        _this8.setState({
	          config: data
	        });
	      });
	    }
	  }, {
	    key: 'handleNewMessage',
	    value: function handleNewMessage(event) {
	      this.safeUpdateCurrentConvo(event.conversationId, true, function (convo) {
	        return Object.assign({}, convo, {
	          messages: [].concat(_toConsumableArray(convo.messages), [event]),
	          typingUntil: event.userId ? convo.typingUntil : null
	        });
	      });
	    }
	  }, {
	    key: 'handleBotTyping',
	    value: function handleBotTyping(event) {
	      this.safeUpdateCurrentConvo(event.conversationId, false, function (convo) {
	        return Object.assign({}, convo, {
	          typingUntil: (0, _add_milliseconds2.default)(new Date(), event.timeInMs)
	        });
	      });
	
	      setTimeout(this.expireTyping.bind(this), event.timeInMs + 50);
	    }
	  }, {
	    key: 'expireTyping',
	    value: function expireTyping() {
	      var currentTypingUntil = this.state.currentConversation && this.state.currentConversation.typingUntil;
	
	      var timerExpired = currentTypingUntil && (0, _is_before2.default)(new Date(currentTypingUntil), new Date());
	      if (timerExpired) {
	        this.safeUpdateCurrentConvo(this.state.currentConversationId, false, function (convo) {
	          return Object.assign({}, convo, { typingUntil: null });
	        });
	      }
	    }
	  }, {
	    key: 'safeUpdateCurrentConvo',
	    value: function safeUpdateCurrentConvo(convoId, addToUnread, updater) {
	      // there's no conversation to update or our convo changed
	      if (!this.state.currentConversation || this.state.currentConversationId !== convoId) {
	
	        this.fetchConversations().then(this.fetchCurrentConversation.bind(this));
	
	        return;
	      }
	
	      // there's no focus on the actual conversation
	      if (document.hasFocus && !document.hasFocus() || this.state.view !== 'side') {
	        this.playSound();
	
	        if (addToUnread) {
	          this.increaseUnreadCount();
	        }
	      }
	
	      this.handleResetUnreadCount();
	
	      var newConvo = updater && updater(this.state.currentConversation);
	
	      if (newConvo) {
	        this.setState({ currentConversation: newConvo });
	      }
	    }
	  }, {
	    key: 'playSound',
	    value: function playSound() {
	      var _this9 = this;
	
	      if (!this.state.played && this.state.view !== 'convo') {
	        // TODO: Remove this condition (view !== 'convo') and fix transition sounds
	        var audio = new Audio('/api/botpress-platform-webchat/static/notification.mp3');
	        audio.play();
	
	        this.setState({
	          played: true
	        });
	
	        setTimeout(function () {
	          _this9.setState({
	            played: false
	          });
	        }, MIN_TIME_BETWEEN_SOUNDS);
	      }
	    }
	  }, {
	    key: 'increaseUnreadCount',
	    value: function increaseUnreadCount() {
	      this.setState({
	        unreadCount: this.state.unreadCount + 1
	      });
	    }
	  }, {
	    key: 'handleResetUnreadCount',
	    value: function handleResetUnreadCount() {
	      if (document.hasFocus && document.hasFocus() && this.state.view === 'side') {
	        this.setState({
	          unreadCount: 0
	        });
	      }
	    }
	  }, {
	    key: 'handleSendMessage',
	    value: function handleSendMessage() {
	      var _this10 = this;
	
	      var userId = window.__BP_VISITOR_ID;
	      var url = BOT_HOSTNAME + '/api/botpress-platform-webchat/messages/' + userId;
	      var config = { params: { conversationId: this.state.currentConversationId } };
	
	      return this.handleSendData({ type: 'text', text: this.state.textToSend }).then(function () {
	        _this10.handleSwitchView('side');
	        _this10.setState({ textToSend: '' });
	      });
	    }
	  }, {
	    key: 'handleTextChanged',
	    value: function handleTextChanged(event) {
	      this.setState({
	        textToSend: event.target.value
	      });
	    }
	  }, {
	    key: 'handleAddEmoji',
	    value: function handleAddEmoji(emoji, event) {
	      this.setState({
	        textToSend: this.state.textToSend + emoji.native + ' '
	      });
	    }
	  }, {
	    key: 'handleSendQuickReply',
	    value: function handleSendQuickReply(title, payload) {
	      return this.handleSendData({
	        type: 'quick_reply',
	        text: title,
	        data: { payload: payload }
	      });
	    }
	  }, {
	    key: 'handleLoginPrompt',
	    value: function handleLoginPrompt(username, password) {
	      return this.handleSendData({
	        type: 'login_prompt',
	        text: 'Provided login information',
	        data: { username: username, password: password }
	      });
	    }
	  }, {
	    key: 'handleFileUploadSend',
	    value: function handleFileUploadSend(title, payload, file) {
	      var userId = window.__BP_VISITOR_ID;
	      var url = BOT_HOSTNAME + '/api/botpress-platform-webchat/messages/' + userId + '/files';
	      var config = { params: { conversationId: this.state.currentConversationId } };
	
	      var data = new FormData();
	      data.append('file', file);
	
	      return this.props.bp.axios.post(url, data, config).then();
	    }
	  }, {
	    key: 'handleSendData',
	    value: function handleSendData(data) {
	      var userId = window.__BP_VISITOR_ID;
	      var url = BOT_HOSTNAME + '/api/botpress-platform-webchat/messages/' + userId;
	      var config = { params: { conversationId: this.state.currentConversationId } };
	      return this.props.bp.axios.post(url, data, config).then();
	    }
	  }, {
	    key: 'handleSwitchConvo',
	    value: function handleSwitchConvo(convoId) {
	      this.setState({
	        currentConversation: null,
	        currentConversationId: convoId
	      });
	
	      this.fetchCurrentConversation(convoId);
	    }
	  }, {
	    key: 'handleClosePanel',
	    value: function handleClosePanel() {
	      this.handleSwitchView('widget');
	    }
	  }, {
	    key: 'renderOpenIcon',
	    value: function renderOpenIcon() {
	      return _react2.default.createElement(
	        'svg',
	        { width: '20', height: '20', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg' },
	        _react2.default.createElement('path', { d: 'M4.583 14.894l-3.256 3.78c-.7.813-1.26.598-1.25-.46a10689.413 10689.413 0 0 1 .035-4.775V4.816a3.89 3.89 0 0 1 3.88-3.89h12.064a3.885 3.885 0 0 1 3.882 3.89v6.185a3.89 3.89 0 0 1-3.882 3.89H4.583z', fill: '#FFF', 'fill-rule': 'evenodd' })
	      );
	    }
	  }, {
	    key: 'renderCloseIcon',
	    value: function renderCloseIcon() {
	      return _react2.default.createElement(
	        'svg',
	        { width: '17', height: '17', viewBox: '0 0 17 17', xmlns: 'http://www.w3.org/2000/svg' },
	        _react2.default.createElement('path', { d: 'M16.726 15.402c.365.366.365.96 0 1.324-.178.178-.416.274-.663.274-.246 0-.484-.096-.663-.274L8.323 9.648h.353L1.6 16.726c-.177.178-.416.274-.663.274-.246 0-.484-.096-.663-.274-.365-.365-.365-.958 0-1.324L7.35 8.324v.35L.275 1.6C-.09 1.233-.09.64.274.274c.367-.365.96-.365 1.326 0l7.076 7.078h-.353L15.4.274c.366-.365.96-.365 1.326 0 .365.366.365.958 0 1.324L9.65 8.675v-.35l7.076 7.077z', fill: '#FFF', 'fill-rule': 'evenodd' })
	      );
	    }
	  }, {
	    key: 'renderUncountMessages',
	    value: function renderUncountMessages() {
	      return _react2.default.createElement(
	        'span',
	        { className: _style2.default.unread },
	        this.state.unreadCount
	      );
	    }
	  }, {
	    key: 'renderButton',
	    value: function renderButton() {
	      return _react2.default.createElement(
	        'button',
	        {
	          className: _style2.default[this.state.widgetTransition],
	          onClick: this.handleButtonClicked.bind(this),
	          style: { backgroundColor: this.state.config.foregroundColor } },
	        _react2.default.createElement(
	          'i',
	          null,
	          this.state.view === 'convo' ? this.renderCloseIcon() : this.renderOpenIcon()
	        ),
	        this.state.unreadCount > 0 ? this.renderUncountMessages() : null
	      );
	    }
	  }, {
	    key: 'renderWidget',
	    value: function renderWidget() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(_style2.default['container']) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(_style2.default['widget-container']) },
	          _react2.default.createElement(
	            'span',
	            null,
	            this.state.view === 'convo' ? _react2.default.createElement(_convo2.default, {
	              transition: this.state.convoTransition,
	              change: this.handleTextChanged.bind(this),
	              send: this.handleSendMessage.bind(this),
	              config: this.state.config,
	              text: this.state.textToSend }) : null,
	            this.renderButton()
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderSide',
	    value: function renderSide() {
	      return _react2.default.createElement(_side2.default, {
	        config: this.state.config,
	        text: this.state.textToSend,
	
	        fullscreen: this.props.fullscreen,
	        transition: !this.props.fullscreen ? this.state.sideTransition : null,
	        unreadCount: this.state.unreadCount,
	
	        currentConversation: this.state.currentConversation,
	        conversations: this.state.conversations,
	
	        addEmojiToText: this.handleAddEmoji.bind(this),
	
	        onClose: !this.props.fullscreen ? this.handleClosePanel.bind(this) : null,
	        onSwitchConvo: this.handleSwitchConvo.bind(this),
	        onTextSend: this.handleSendMessage.bind(this),
	        onTextChanged: this.handleTextChanged.bind(this),
	        onQuickReplySend: this.handleSendQuickReply.bind(this),
	        onFileUploadSend: this.handleFileUploadSend.bind(this),
	        onLoginPromptSend: this.handleLoginPrompt.bind(this) });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.loading || !this.state.view) {
	        return null;
	      }
	
	      window.parent && window.parent.postMessage({ type: 'setClass', value: 'bp-widget-web bp-widget-' + this.state.view }, '*');
	
	      var view = this.state.view !== 'side' && !this.props.fullscreen ? this.renderWidget() : this.renderSide();
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.web, onFocus: this.handleResetUnreadCount.bind(this) },
	        view
	      );
	    }
	  }]);
	
	  return Web;
	}(_react2.default.Component);
	
	exports.default = Web;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Add the specified number of milliseconds to the given date.
	 *
	 * @description
	 * Add the specified number of milliseconds to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of milliseconds to be added
	 * @returns {Date} the new date with the milliseconds added
	 *
	 * @example
	 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
	 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
	 * //=> Thu Jul 10 2014 12:45:30.750
	 */
	function addMilliseconds (dirtyDate, dirtyAmount) {
	  var timestamp = parse(dirtyDate).getTime()
	  var amount = Number(dirtyAmount)
	  return new Date(timestamp + amount)
	}
	
	module.exports = addMilliseconds


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(7)
	
	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	var DEFAULT_ADDITIONAL_DIGITS = 2
	
	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/
	
	// year tokens
	var parseTokenYY = /^(\d{2})$/
	var parseTokensYYY = [
	  /^([+-]\d{2})$/, // 0 additional digits
	  /^([+-]\d{3})$/, // 1 additional digit
	  /^([+-]\d{4})$/ // 2 additional digits
	]
	
	var parseTokenYYYY = /^(\d{4})/
	var parseTokensYYYYY = [
	  /^([+-]\d{4})/, // 0 additional digits
	  /^([+-]\d{5})/, // 1 additional digit
	  /^([+-]\d{6})/ // 2 additional digits
	]
	
	// date tokens
	var parseTokenMM = /^-(\d{2})$/
	var parseTokenDDD = /^-?(\d{3})$/
	var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
	var parseTokenWww = /^-?W(\d{2})$/
	var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/
	
	// time tokens
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/
	
	// timezone tokens
	var parseTokenTimezone = /([Z+-].*)$/
	var parseTokenTimezoneZ = /^(Z)$/
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/
	
	/**
	 * @category Common Helpers
	 * @summary Convert the given argument to an instance of Date.
	 *
	 * @description
	 * Convert the given argument to an instance of Date.
	 *
	 * If the argument is an instance of Date, the function returns its clone.
	 *
	 * If the argument is a number, it is treated as a timestamp.
	 *
	 * If an argument is a string, the function tries to parse it.
	 * Function accepts complete ISO 8601 formats as well as partial implementations.
	 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
	 *
	 * If all above fails, the function passes the given argument to Date constructor.
	 *
	 * @param {Date|String|Number} argument - the value to convert
	 * @param {Object} [options] - the object with options
	 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
	 * @returns {Date} the parsed date in the local time zone
	 *
	 * @example
	 * // Convert string '2014-02-11T11:30:30' to date:
	 * var result = parse('2014-02-11T11:30:30')
	 * //=> Tue Feb 11 2014 11:30:30
	 *
	 * @example
	 * // Parse string '+02014101',
	 * // if the additional number of digits in the extended year format is 1:
	 * var result = parse('+02014101', {additionalDigits: 1})
	 * //=> Fri Apr 11 2014 00:00:00
	 */
	function parse (argument, dirtyOptions) {
	  if (isDate(argument)) {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(argument.getTime())
	  } else if (typeof argument !== 'string') {
	    return new Date(argument)
	  }
	
	  var options = dirtyOptions || {}
	  var additionalDigits = options.additionalDigits
	  if (additionalDigits == null) {
	    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
	  } else {
	    additionalDigits = Number(additionalDigits)
	  }
	
	  var dateStrings = splitDateString(argument)
	
	  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
	  var year = parseYearResult.year
	  var restDateString = parseYearResult.restDateString
	
	  var date = parseDate(restDateString, year)
	
	  if (date) {
	    var timestamp = date.getTime()
	    var time = 0
	    var offset
	
	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }
	
	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone)
	    } else {
	      // get offset accurate to hour in timezones that change offset
	      offset = new Date(timestamp + time).getTimezoneOffset()
	      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
	    }
	
	    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
	  } else {
	    return new Date(argument)
	  }
	}
	
	function splitDateString (dateString) {
	  var dateStrings = {}
	  var array = dateString.split(parseTokenDateTimeDelimeter)
	  var timeString
	
	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }
	
	  if (timeString) {
	    var token = parseTokenTimezone.exec(timeString)
	    if (token) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }
	
	  return dateStrings
	}
	
	function parseYear (dateString, additionalDigits) {
	  var parseTokenYYY = parseTokensYYY[additionalDigits]
	  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]
	
	  var token
	
	  // YYYY or ±YYYYY
	  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
	  if (token) {
	    var yearString = token[1]
	    return {
	      year: parseInt(yearString, 10),
	      restDateString: dateString.slice(yearString.length)
	    }
	  }
	
	  // YY or ±YYY
	  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
	  if (token) {
	    var centuryString = token[1]
	    return {
	      year: parseInt(centuryString, 10) * 100,
	      restDateString: dateString.slice(centuryString.length)
	    }
	  }
	
	  // Invalid ISO-formatted year
	  return {
	    year: null
	  }
	}
	
	function parseDate (dateString, year) {
	  // Invalid ISO-formatted year
	  if (year === null) {
	    return null
	  }
	
	  var token
	  var date
	  var month
	  var week
	
	  // YYYY
	  if (dateString.length === 0) {
	    date = new Date(0)
	    date.setUTCFullYear(year)
	    return date
	  }
	
	  // YYYY-MM
	  token = parseTokenMM.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    date.setUTCFullYear(year, month)
	    return date
	  }
	
	  // YYYY-DDD or YYYYDDD
	  token = parseTokenDDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    var dayOfYear = parseInt(token[1], 10)
	    date.setUTCFullYear(year, 0, dayOfYear)
	    return date
	  }
	
	  // YYYY-MM-DD or YYYYMMDD
	  token = parseTokenMMDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    var day = parseInt(token[2], 10)
	    date.setUTCFullYear(year, month, day)
	    return date
	  }
	
	  // YYYY-Www or YYYYWww
	  token = parseTokenWww.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    return dayOfISOYear(year, week)
	  }
	
	  // YYYY-Www-D or YYYYWwwD
	  token = parseTokenWwwD.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    var dayOfWeek = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)
	  }
	
	  // Invalid ISO-formatted date
	  return null
	}
	
	function parseTime (timeString) {
	  var token
	  var hours
	  var minutes
	
	  // hh
	  token = parseTokenHH.exec(timeString)
	  if (token) {
	    hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	  }
	
	  // hh:mm or hhmm
	  token = parseTokenHHMM.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE
	  }
	
	  // hh:mm:ss or hhmmss
	  token = parseTokenHHMMSS.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE +
	      seconds * 1000
	  }
	
	  // Invalid ISO-formatted time
	  return null
	}
	
	function parseTimezone (timezoneString) {
	  var token
	  var absoluteOffset
	
	  // Z
	  token = parseTokenTimezoneZ.exec(timezoneString)
	  if (token) {
	    return 0
	  }
	
	  // ±hh
	  token = parseTokenTimezoneHH.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  // ±hh:mm or ±hhmm
	  token = parseTokenTimezoneHHMM.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  return 0
	}
	
	function dayOfISOYear (isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(0)
	  date.setUTCFullYear(isoYear, 0, 4)
	  var fourthOfJanuaryDay = date.getUTCDay() || 7
	  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date
	}
	
	module.exports = parse


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/**
	 * @category Common Helpers
	 * @summary Is the given argument an instance of Date?
	 *
	 * @description
	 * Is the given argument an instance of Date?
	 *
	 * @param {*} argument - the argument to check
	 * @returns {Boolean} the given argument is an instance of Date
	 *
	 * @example
	 * // Is 'mayonnaise' a Date?
	 * var result = isDate('mayonnaise')
	 * //=> false
	 */
	function isDate (argument) {
	  return argument instanceof Date
	}
	
	module.exports = isDate


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Common Helpers
	 * @summary Is the first date before the second one?
	 *
	 * @description
	 * Is the first date before the second one?
	 *
	 * @param {Date|String|Number} date - the date that should be before the other one to return true
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @returns {Boolean} the first date is before the second date
	 *
	 * @example
	 * // Is 10 July 1989 before 11 February 1987?
	 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> false
	 */
	function isBefore (dirtyDate, dirtyDateToCompare) {
	  var date = parse(dirtyDate)
	  var dateToCompare = parse(dirtyDateToCompare)
	  return date.getTime() < dateToCompare.getTime()
	}
	
	module.exports = isBefore


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _send = __webpack_require__(10);
	
	var _send2 = _interopRequireDefault(_send);
	
	var _input = __webpack_require__(15);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _bot_avatar = __webpack_require__(18);
	
	var _bot_avatar2 = _interopRequireDefault(_bot_avatar);
	
	var _style = __webpack_require__(21);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_NAME = 'Bot';
	var DEFAULT_WELCOME_MESSAGE = 'Hello!\n  Curious about our offer?\n  It will be a pleasure to help you getting started.\n';
	
	var Convo = function (_React$Component) {
	  _inherits(Convo, _React$Component);
	
	  function Convo(props) {
	    _classCallCheck(this, Convo);
	
	    var _this = _possibleConstructorReturn(this, (Convo.__proto__ || Object.getPrototypeOf(Convo)).call(this, props));
	
	    _this.state = {
	      text: ''
	    };
	    return _this;
	  }
	
	  _createClass(Convo, [{
	    key: 'handleTextChanged',
	    value: function handleTextChanged(event) {
	      this.setState({
	        text: event.target.value
	      });
	    }
	  }, {
	    key: 'renderSendButton',
	    value: function renderSendButton() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default['enter-prompt'] },
	          _react2.default.createElement(
	            'a',
	            null,
	            _react2.default.createElement(
	              'i',
	              { 'class': 'flex' },
	              _react2.default.createElement(
	                'svg',
	                { width: '13', height: '13', viewBox: '0 0 13 13', xmlns: 'http://www.w3.org/2000/svg' },
	                _react2.default.createElement('path', { d: 'M12.975.38c.014.043.02.087.024.132v.06c-.004.048-.014.095-.03.14-.006.017-.007.032-.014.046L7.252 12.692c-.09.19-.28.308-.49.308-.216-.002-.406-.127-.493-.32l-.537-3.41C5.56 8.18 4.55 7.1 3.478 6.86l-3.2-.72c-.18-.1-.287-.293-.277-.5.012-.206.138-.39.328-.47L12.248.04 12.3.026c.05-.015.098-.025.148-.026.02 0 .038 0 .058.003.046.004.09.013.132.028l.055.02c.056.027.11.06.154.107.053.053.085.11.11.168.008.018.013.036.018.055z', 'fill-rule': 'evenodd' })
	              )
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              'Send Message'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderPromoElement',
	    value: function renderPromoElement() {
	      var platform = 'Botpress';
	      var link = 'https://botpress.io';
	
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default['flex-minimal'] },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.element },
	            _react2.default.createElement(
	              'span',
	              null,
	              "We're ",
	              _react2.default.createElement(
	                'i',
	                null,
	                _react2.default.createElement(
	                  'svg',
	                  { width: '7', height: '13', viewBox: '0 0 7 13', xmlns: 'http://www.w3.org/2000/svg' },
	                  _react2.default.createElement(
	                    'g',
	                    { fill: 'none', 'fill-rule': 'evenodd' },
	                    _react2.default.createElement('path', { d: 'M4.127.496C4.51-.12 5.37.356 5.16 1.07L3.89 5.14H6.22c.483 0 .757.616.464 1.044l-4.338 6.34c-.407.595-1.244.082-1.01-.618L2.72 7.656H.778c-.47 0-.748-.59-.48-1.02L4.13.495z', fill: '#F6A623' }),
	                    _react2.default.createElement('path', { fill: '#FEF79E', d: 'M4.606.867L.778 7.007h2.807l-1.7 5.126 4.337-6.34H3.16' })
	                  )
	                )
	              ),
	              " by ",
	              _react2.default.createElement(
	                'a',
	                { href: link, target: '_blank' },
	                platform
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderName',
	    value: function renderName() {
	      var name = this.props.config.botName || DEFAULT_NAME;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.name,
	          style: {
	            color: this.props.config.textColorOnForeground
	          } },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'span',
	            null,
	            name
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderAvatar',
	    value: function renderAvatar() {
	      var content = _react2.default.createElement(_bot_avatar2.default, { foregroundColor: this.props.config.foregroundColor });
	
	      if (this.props.config.botAvatarUrl) {
	        content = _react2.default.createElement('div', { className: _style2.default.picture, style: { backgroundImage: 'url(' + this.props.config.botAvatarUrl + ')' } });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.avatar },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.square },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.circle,
	              style: {
	                borderColor: this.props.config.foregroundColor,
	                color: this.props.config.foregroundColor
	              } },
	            content
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderWelcomeMessage',
	    value: function renderWelcomeMessage() {
	      var message = this.props.config.welcomeMsgText || DEFAULT_WELCOME_MESSAGE;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.paragraph },
	        message
	      );
	    }
	  }, {
	    key: 'renderHeader',
	    value: function renderHeader() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.header,
	          style: {
	            color: this.props.config.textColorOnForeground,
	            backgroundColor: this.props.config.foregroundColor
	          } },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.line },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.title },
	            this.renderAvatar(),
	            this.renderName()
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.text },
	          this.renderWelcomeMessage()
	        )
	      );
	    }
	  }, {
	    key: 'renderComposer',
	    value: function renderComposer() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(_style2.default.composer) },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default['flex-column'] },
	          _react2.default.createElement(_input2.default, {
	            send: this.props.send,
	            change: this.props.change,
	            placeholder: 'Type your message...',
	            text: this.props.text,
	            config: this.props.config }),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.bottom },
	            _react2.default.createElement(_send2.default, {
	              text: this.props.text,
	              send: this.props.send,
	              config: this.props.config })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classNames = (0, _classnames2.default)(_style2.default.internal, _style2.default[this.props.transition]);
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.external },
	        _react2.default.createElement(
	          'div',
	          { className: classNames,
	            style: {
	              color: this.props.config.textColorOnBackground,
	              backgroundColor: this.props.config.backgroundColor
	            } },
	          this.renderHeader(),
	          this.renderComposer()
	        )
	      );
	    }
	  }]);
	
	  return Convo;
	}(_react2.default.Component);
	
	exports.default = Convo;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _style = __webpack_require__(11);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Send = function (_Component) {
	  _inherits(Send, _Component);
	
	  function Send(props) {
	    _classCallCheck(this, Send);
	
	    return _possibleConstructorReturn(this, (Send.__proto__ || Object.getPrototypeOf(Send)).call(this, props));
	  }
	
	  _createClass(Send, [{
	    key: 'renderSendButton',
	    value: function renderSendButton() {
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'div',
	          {
	            className: _style2.default['enter-prompt'],
	            onClick: this.props.send },
	          _react2.default.createElement(
	            'a',
	            { style: { color: this.props.config.foregroundColor } },
	            _react2.default.createElement(
	              'i',
	              { 'class': 'flex' },
	              _react2.default.createElement(
	                'svg',
	                { width: '13', height: '13', viewBox: '0 0 13 13', xmlns: 'http://www.w3.org/2000/svg' },
	                _react2.default.createElement('path', { d: 'M12.975.38c.014.043.02.087.024.132v.06c-.004.048-.014.095-.03.14-.006.017-.007.032-.014.046L7.252 12.692c-.09.19-.28.308-.49.308-.216-.002-.406-.127-.493-.32l-.537-3.41C5.56 8.18 4.55 7.1 3.478 6.86l-3.2-.72c-.18-.1-.287-.293-.277-.5.012-.206.138-.39.328-.47L12.248.04 12.3.026c.05-.015.098-.025.148-.026.02 0 .038 0 .058.003.046.004.09.013.132.028l.055.02c.056.027.11.06.154.107.053.053.085.11.11.168.008.018.013.036.018.055z', 'fill-rule': 'evenodd' })
	              )
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              'Send Message'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderPromoElement',
	    value: function renderPromoElement() {
	      var platform = 'Botpress';
	      var link = 'https://botpress.io';
	
	      return _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default['flex-minimal'] },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.element },
	            _react2.default.createElement(
	              'span',
	              null,
	              "We're ",
	              _react2.default.createElement(
	                'i',
	                null,
	                _react2.default.createElement(
	                  'svg',
	                  { width: '7', height: '13', viewBox: '0 0 7 13', xmlns: 'http://www.w3.org/2000/svg' },
	                  _react2.default.createElement(
	                    'g',
	                    { fill: 'none', 'fill-rule': 'evenodd' },
	                    _react2.default.createElement('path', { d: 'M4.127.496C4.51-.12 5.37.356 5.16 1.07L3.89 5.14H6.22c.483 0 .757.616.464 1.044l-4.338 6.34c-.407.595-1.244.082-1.01-.618L2.72 7.656H.778c-.47 0-.748-.59-.48-1.02L4.13.495z', fill: '#F6A623' }),
	                    _react2.default.createElement('path', { fill: '#FEF79E', d: 'M4.606.867L.778 7.007h2.807l-1.7 5.126 4.337-6.34H3.16' })
	                  )
	                )
	              ),
	              " by ",
	              _react2.default.createElement(
	                'a',
	                { href: link, target: '_blank',
	                  style: { color: this.props.config.foregroundColor } },
	                platform
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.footer },
	        this.props.text === '' ? this.renderPromoElement() : this.renderSendButton()
	      );
	    }
	  }]);
	
	  return Send;
	}(_react.Component);
	
	exports.default = Send;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".botpress-platform-webchat__style__footer___36Ycj {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  position: relative;\n  height: 20px;\n  font-size: 12px;\n  color: #9a9a9a; }\n  .botpress-platform-webchat__style__footer___36Ycj span .botpress-platform-webchat__style__flex-minimal___2d_b3 {\n    height: 20px;\n    position: relative;\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    display: flex; }\n    .botpress-platform-webchat__style__footer___36Ycj span .botpress-platform-webchat__style__flex-minimal___2d_b3 .botpress-platform-webchat__style__element___cUAaK {\n      display: flex;\n      align-items: center; }\n      .botpress-platform-webchat__style__footer___36Ycj span .botpress-platform-webchat__style__flex-minimal___2d_b3 .botpress-platform-webchat__style__element___cUAaK span i {\n        vertical-align: middle;\n        display: inline;\n        margin: -3px 2px;\n        font-style: italic;\n        text-align: center;\n        padding: 0; }\n      .botpress-platform-webchat__style__footer___36Ycj span .botpress-platform-webchat__style__flex-minimal___2d_b3 .botpress-platform-webchat__style__element___cUAaK span a {\n        font-weight: 500;\n        cursor: pointer;\n        text-decoration: none; }\n  .botpress-platform-webchat__style__footer___36Ycj .botpress-platform-webchat__style__enter-prompt___2A1iw {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 20px; }\n    .botpress-platform-webchat__style__footer___36Ycj .botpress-platform-webchat__style__enter-prompt___2A1iw a {\n      display: flex;\n      font-weight: 500;\n      font-size: 14px;\n      cursor: pointer;\n      text-decoration: none; }\n      .botpress-platform-webchat__style__footer___36Ycj .botpress-platform-webchat__style__enter-prompt___2A1iw a i {\n        vertical-align: middle;\n        display: inline;\n        margin: 2px 6px;\n        text-align: center;\n        padding: 0; }\n        .botpress-platform-webchat__style__footer___36Ycj .botpress-platform-webchat__style__enter-prompt___2A1iw a i svg {\n          fill: currentColor; }\n", ""]);
	
	// exports
	exports.locals = {
		"footer": "botpress-platform-webchat__style__footer___36Ycj",
		"flex-minimal": "botpress-platform-webchat__style__flex-minimal___2d_b3",
		"element": "botpress-platform-webchat__style__element___cUAaK",
		"enter-prompt": "botpress-platform-webchat__style__enter-prompt___2A1iw"
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _style = __webpack_require__(16);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Send = function (_Component) {
	  _inherits(Send, _Component);
	
	  function Send(props) {
	    _classCallCheck(this, Send);
	
	    return _possibleConstructorReturn(this, (Send.__proto__ || Object.getPrototypeOf(Send)).call(this, props));
	  }
	
	  _createClass(Send, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.textInput.focus();
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(value) {
	      if (this.props.focused) {
	        this.props.focused(value);
	      }
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (e.key === 'Enter') {
	        this.props.send();
	        e.preventDefault();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { tabIndex: '-1', className: _style2.default.input },
	        _react2.default.createElement('textarea', { tabindex: '1',
	          ref: function ref(input) {
	            _this2.textInput = input;
	          },
	          onBlur: function onBlur() {
	            return _this2.handleFocus(false);
	          },
	          onFocus: function onFocus() {
	            return _this2.handleFocus(true);
	          },
	          placeholder: this.props.placeholder,
	          onChange: this.props.change,
	          value: this.props.text,
	          onKeyPress: this.handleKeyPress.bind(this),
	          style: {
	            color: this.props.config.textColorOnBackground
	          } })
	      );
	    }
	  }]);
	
	  return Send;
	}(_react.Component);
	
	exports.default = Send;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".botpress-platform-webchat__style__input___3yaCn {\n  outline: none; }\n  .botpress-platform-webchat__style__input___3yaCn textarea {\n    font: inherit;\n    background-color: transparent;\n    min-height: 32px;\n    max-height: 96px;\n    margin-bottom: 0;\n    font-size: 14px;\n    padding: 8px;\n    width: 100%;\n    border: none;\n    resize: none;\n    line-height: 1.2; }\n", ""]);
	
	// exports
	exports.locals = {
		"input": "botpress-platform-webchat__style__input___3yaCn"
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _style = __webpack_require__(19);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BotAvatar = function BotAvatar(props) {
	
	  var color = props.foregroundColor || '#A029D3';
	
	  return React.createElement(
	    'i',
	    null,
	    React.createElement(
	      'svg',
	      { viewBox: '0 0 254 252', xmlns: 'http://www.w3.org/2000/svg' },
	      React.createElement(
	        'g',
	        { fill: 'none', 'fill-rule': 'evenodd' },
	        React.createElement('path', { d: 'M127 252c69.036 0 125-55.964 125-125S196.036 2 127 2 2 57.964 2 127s55.964 125 125 125z', className: _style2.default.color, fill: color }),
	        React.createElement('path', { d: 'M175.217 244.042c45.946-18.958 78.283-64.196 78.283-116.986 0-69.864-56.636-126.5-126.5-126.5S.5 57.192.5 127.056c0 52.898 32.469 98.212 78.564 117.101 5.747-18.068 21.627-31.698 41.055-34.382v-9.935h-71.37c-4.652 0-8.402-3.714-8.402-8.296V95.308c0-4.575 3.758-8.297 8.393-8.297h64.464V73.472h13.66V50.136c-5.305-1.859-9.106-6.874-9.106-12.77 0-7.477 6.116-13.539 13.66-13.539 7.545 0 13.661 6.062 13.661 13.54 0 5.895-3.801 10.91-9.107 12.769v23.336h13.66v13.54h59.895c4.64 0 8.41 3.714 8.41 8.296v96.236c0 4.574-3.762 8.296-8.402 8.296h-74.46v10.064c18.988 2.96 34.451 16.4 40.142 34.138z', fill: '#FFF', opacity: '.85' }),
	        React.createElement('rect', { fill: '#FFF', x: '64.365', y: '114.515', width: '130.488', height: '40.691', rx: '10' }),
	        React.createElement('ellipse', { className: _style2.default.color, fill: color, opacity: '.5', cx: '92.283', cy: '135.674', rx: '14.78', ry: '14.649' }),
	        React.createElement('ellipse', { className: _style2.default.color, fill: color, opacity: '.5', cx: '162.897', cy: '135.674', rx: '14.78', ry: '14.649' }),
	        React.createElement('ellipse', { fill: '#000', opacity: '.6', cx: '92.283', cy: '135.674', rx: '14.78', ry: '14.649' }),
	        React.createElement('ellipse', { fill: '#000', opacity: '.6', cx: '162.897', cy: '135.674', rx: '14.78', ry: '14.649' })
	      )
	    )
	  );
	};
	
	exports.default = BotAvatar;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);
	
	// module
	exports.push([module.id, "body {\n  margin: 0 !important;\n  font-family: 'Lato', sans-serif;\n  overflow: hidden; }\n\n.botpress-platform-webchat__style__web___KyLc_ button {\n  float: right;\n  fill: white;\n  cursor: pointer;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  width: 52px;\n  height: 52px;\n  cursor: pointer;\n  border-radius: 5px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  padding: 0;\n  border: none;\n  background-clip: padding-box;\n  transition: width 1s, height 1s; }\n  .botpress-platform-webchat__style__web___KyLc_ button i {\n    transition: opacity .3s ease;\n    opacity: 1;\n    fill: inherit;\n    stroke: inherit;\n    width: 100%;\n    padding: 0;\n    line-height: 0; }\n  .botpress-platform-webchat__style__web___KyLc_ button .botpress-platform-webchat__style__unread___23aWv {\n    display: block;\n    position: absolute;\n    right: 2px;\n    bottom: 54px;\n    width: 20px !important;\n    height: 20px !important;\n    border-radius: 50%;\n    line-height: 20px;\n    color: #fff;\n    background-color: #ff5d5d;\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4); }\n\n.botpress-platform-webchat__style__container___LtHgy {\n  overflow: hidden; }\n  .botpress-platform-webchat__style__container___LtHgy .botpress-platform-webchat__style__widget-container___3GITr {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    padding: 12px 12px 12px 16px;\n    flex-direction: column; }\n    .botpress-platform-webchat__style__container___LtHgy .botpress-platform-webchat__style__widget-container___3GITr * {\n      box-sizing: border-box;\n      outline: none; }\n    .botpress-platform-webchat__style__container___LtHgy .botpress-platform-webchat__style__widget-container___3GITr span {\n      flex: 1 0 auto;\n      width: 100%; }\n\n.botpress-platform-webchat__style__fadeIn___2KKLx {\n  -webkit-animation-name: botpress-platform-webchat__style__zoomIn___3fpS3;\n  animation-name: botpress-platform-webchat__style__zoomIn___3fpS3;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes botpress-platform-webchat__style__zoomIn___3fpS3 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes botpress-platform-webchat__style__zoomIn___3fpS3 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n.botpress-platform-webchat__style__fadeOut___HgrS8 {\n  -webkit-animation-name: botpress-platform-webchat__style__zoomOut___2YZKl;\n  animation-name: botpress-platform-webchat__style__zoomOut___2YZKl;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes botpress-platform-webchat__style__zoomOut___2YZKl {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@keyframes botpress-platform-webchat__style__zoomOut___2YZKl {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n", ""]);
	
	// exports
	exports.locals = {
		"web": "botpress-platform-webchat__style__web___KyLc_",
		"unread": "botpress-platform-webchat__style__unread___23aWv",
		"container": "botpress-platform-webchat__style__container___LtHgy",
		"widget-container": "botpress-platform-webchat__style__widget-container___3GITr",
		"fadeIn": "botpress-platform-webchat__style__fadeIn___2KKLx",
		"zoomIn": "botpress-platform-webchat__style__zoomIn___3fpS3",
		"fadeOut": "botpress-platform-webchat__style__fadeOut___HgrS8",
		"zoomOut": "botpress-platform-webchat__style__zoomOut___2YZKl"
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".botpress-platform-webchat__style__external___2svzf {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  margin: 32px 0 16px 16px;\n  position: relative;\n  height: 100%; }\n  .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.09);\n    border-radius: 5px; }\n    .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr {\n      -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n      border-top-left-radius: inherit;\n      border-top-right-radius: inherit; }\n      .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__line___3vtgj {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        font-weight: 500;\n        margin-bottom: 20px;\n        margin-top: 12px;\n        padding-left: 18px;\n        padding-right: 18px; }\n        .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__line___3vtgj .botpress-platform-webchat__style__title___2Fr-Y {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n          font-size: 18px; }\n          .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__line___3vtgj .botpress-platform-webchat__style__title___2Fr-Y .botpress-platform-webchat__style__avatar___1HWW- {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: reverse;\n            -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n            -webkit-box-align: end;\n            -ms-flex-align: end;\n            align-items: flex-end;\n            height: 1.4em; }\n            .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__line___3vtgj .botpress-platform-webchat__style__title___2Fr-Y .botpress-platform-webchat__style__avatar___1HWW- .botpress-platform-webchat__style__square___3VkAO {\n              -webkit-transform: translate(-10px, 12px);\n              transform: translate(-10px, 12px);\n              margin-right: 4px;\n              position: relative;\n              width: 70px;\n              height: 70px; }\n              .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__line___3vtgj .botpress-platform-webchat__style__title___2Fr-Y .botpress-platform-webchat__style__avatar___1HWW- .botpress-platform-webchat__style__square___3VkAO .botpress-platform-webchat__style__circle___aL8KF {\n                position: absolute;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                width: auto;\n                height: auto;\n                border-width: 2px;\n                border-style: solid;\n                border-radius: 50%;\n                background-color: #f8f8f8;\n                -ms-flex-negative: 0;\n                flex-shrink: 0; }\n                .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__line___3vtgj .botpress-platform-webchat__style__title___2Fr-Y .botpress-platform-webchat__style__avatar___1HWW- .botpress-platform-webchat__style__square___3VkAO .botpress-platform-webchat__style__circle___aL8KF .botpress-platform-webchat__style__picture___2ccuR {\n                  border-radius: 50%;\n                  background-size: cover;\n                  background-position: 50%;\n                  width: 100%;\n                  height: 100%; }\n          .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__line___3vtgj .botpress-platform-webchat__style__title___2Fr-Y .botpress-platform-webchat__style__name___2LQ8g {\n            font-weight: 500; }\n            .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__line___3vtgj .botpress-platform-webchat__style__title___2Fr-Y .botpress-platform-webchat__style__name___2LQ8g span {\n              color: inherit;\n              opacity: .8; }\n      .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__text___12-Rd {\n        font-size: 14px;\n        font-weight: 400;\n        min-height: 50px;\n        max-height: 150px;\n        overflow-x: hidden;\n        overflow-y: auto;\n        word-break: break-word;\n        white-space: pre-line;\n        -webkit-overflow-scrolling: touch;\n        line-height: 30px;\n        margin-top: 4px;\n        margin-bottom: 0;\n        padding-bottom: 12px;\n        padding-left: 18px;\n        padding-right: 18px; }\n        .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__text___12-Rd .botpress-platform-webchat__style__paragraph___32PaH {\n          font-weight: 300;\n          font-size: 15px;\n          word-break: break-word;\n          white-space: pre-line; }\n          .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__header___364rr .botpress-platform-webchat__style__text___12-Rd .botpress-platform-webchat__style__paragraph___32PaH p {\n            margin: 0;\n            display: block; }\n    .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__composer___32VI5 {\n      position: relative;\n      padding: 8px;\n      border-bottom-left-radius: inherit;\n      border-bottom-right-radius: inherit; }\n      .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__composer___32VI5 .botpress-platform-webchat__style__flex-column___1yGN9 {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        display: flex; }\n        .botpress-platform-webchat__style__external___2svzf .botpress-platform-webchat__style__internal___2EJRy .botpress-platform-webchat__style__composer___32VI5 .botpress-platform-webchat__style__flex-column___1yGN9 .botpress-platform-webchat__style__bottom___2tqon {\n          padding: 0 8px;\n          display: flex;\n          padding: 0 16px 12px;\n          justify-content: space-between;\n          -webkit-box-align: center; }\n\n.botpress-platform-webchat__style__fadeIn___17jV- {\n  -webkit-animation-name: botpress-platform-webchat__style__zoomIn___1zhjI;\n  animation-name: botpress-platform-webchat__style__zoomIn___1zhjI;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes botpress-platform-webchat__style__zoomIn___1zhjI {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes botpress-platform-webchat__style__zoomIn___1zhjI {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n.botpress-platform-webchat__style__fadeOut___3_apF {\n  -webkit-animation-name: botpress-platform-webchat__style__zoomOut___3vGfo;\n  animation-name: botpress-platform-webchat__style__zoomOut___3vGfo;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n@-webkit-keyframes botpress-platform-webchat__style__zoomOut___3vGfo {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@keyframes botpress-platform-webchat__style__zoomOut___3vGfo {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n", ""]);
	
	// exports
	exports.locals = {
		"external": "botpress-platform-webchat__style__external___2svzf",
		"internal": "botpress-platform-webchat__style__internal___2EJRy",
		"header": "botpress-platform-webchat__style__header___364rr",
		"line": "botpress-platform-webchat__style__line___3vtgj",
		"title": "botpress-platform-webchat__style__title___2Fr-Y",
		"avatar": "botpress-platform-webchat__style__avatar___1HWW-",
		"square": "botpress-platform-webchat__style__square___3VkAO",
		"circle": "botpress-platform-webchat__style__circle___aL8KF",
		"picture": "botpress-platform-webchat__style__picture___2ccuR",
		"name": "botpress-platform-webchat__style__name___2LQ8g",
		"text": "botpress-platform-webchat__style__text___12-Rd",
		"paragraph": "botpress-platform-webchat__style__paragraph___32PaH",
		"composer": "botpress-platform-webchat__style__composer___32VI5",
		"flex-column": "botpress-platform-webchat__style__flex-column___1yGN9",
		"bottom": "botpress-platform-webchat__style__bottom___2tqon",
		"fadeIn": "botpress-platform-webchat__style__fadeIn___17jV-",
		"zoomIn": "botpress-platform-webchat__style__zoomIn___1zhjI",
		"fadeOut": "botpress-platform-webchat__style__fadeOut___3_apF",
		"zoomOut": "botpress-platform-webchat__style__zoomOut___3vGfo"
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(4);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _distance_in_words_to_now = __webpack_require__(24);
	
	var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);
	
	var _send = __webpack_require__(10);
	
	var _send2 = _interopRequireDefault(_send);
	
	var _messages = __webpack_require__(36);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	var _input = __webpack_require__(15);
	
	var _input2 = _interopRequireDefault(_input);
	
	var _bot_avatar = __webpack_require__(18);
	
	var _bot_avatar2 = _interopRequireDefault(_bot_avatar);
	
	var _style = __webpack_require__(56);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import { Picker } from 'emoji-mart'
	
	// require('emoji-mart/css/emoji-mart.css')
	
	var Side = function (_React$Component) {
	  _inherits(Side, _React$Component);
	
	  function Side(props) {
	    _classCallCheck(this, Side);
	
	    var _this = _possibleConstructorReturn(this, (Side.__proto__ || Object.getPrototypeOf(Side)).call(this, props));
	
	    _this.state = {
	      focused: false,
	      showEmoji: false,
	      showConvos: false
	    };
	    return _this;
	  }
	
	  _createClass(Side, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (!this.props.currentConversation && nextProps.currentConversation) {
	        this.setState({ showConvos: false });
	      }
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(value) {
	      this.setState({
	        focused: value
	      });
	    }
	  }, {
	    key: 'handleEmojiClicked',
	    value: function handleEmojiClicked() {
	      this.setState({
	        showEmoji: !this.state.showEmoji
	      });
	    }
	  }, {
	    key: 'handleToggleShowConvos',
	    value: function handleToggleShowConvos() {
	      this.setState({
	        showConvos: !this.state.showConvos
	      });
	    }
	  }, {
	    key: 'renderAvatar',
	    value: function renderAvatar() {
	      var content = _react2.default.createElement(_bot_avatar2.default, { foregroundColor: this.props.config.foregroundColor });
	
	      if (this.props.config && this.props.config.botAvatarUrl) {
	        content = _react2.default.createElement('div', {
	          className: _style2.default.picture,
	          style: { backgroundImage: 'url(' + this.props.config.botAvatarUrl + ')' } });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.avatar, style: { color: this.props.config.foregroundColor } },
	        content
	      );
	    }
	  }, {
	    key: 'renderUnreadCount',
	    value: function renderUnreadCount() {
	      return _react2.default.createElement(
	        'span',
	        { className: _style2.default.unread },
	        this.props.unreadCount
	      );
	    }
	  }, {
	    key: 'renderTitle',
	    value: function renderTitle() {
	      var title = this.props.currentConversation && !this.state.showConvos ? this.props.config.botConvoTitle : 'Conversations';
	
	      var description = this.props.config.botConvoDescription;
	      var hasDescription = description && description.length > 0;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.title },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.name },
	          title,
	          this.props.unreadCount > 0 ? this.renderUnreadCount() : null
	        ),
	        hasDescription && _react2.default.createElement(
	          'div',
	          { className: _style2.default.status },
	          description
	        )
	      );
	    }
	  }, {
	    key: 'renderConvoButton',
	    value: function renderConvoButton() {
	      return _react2.default.createElement(
	        'span',
	        { className: _style2.default.icon },
	        _react2.default.createElement(
	          'i',
	          { onClick: this.handleToggleShowConvos.bind(this) },
	          _react2.default.createElement(
	            'svg',
	            { width: '24', height: '17', viewBox: '0 0 24 17', xmlns: 'http://www.w3.org/2000/svg' },
	            _react2.default.createElement('path', { d: 'M7 14.94h16c.552 0 1 .346 1 .772 0 .427-.448.773-1 .773H7c-.552 0-1-.346-1-.773 0-.426.448-.773 1-.773zM2.25 3.09H.75C.336 3.09 0 2.746 0 2.32V.773C0 .346.336 0 .75 0h1.5c.414 0 .75.346.75.773v1.545c0 .427-.336.773-.75.773zM2.25 10.303H.75c-.414 0-.75-.346-.75-.773V7.985c0-.427.336-.773.75-.773h1.5c.414 0 .75.346.75.773V9.53c0 .427-.336.773-.75.773zM2.25 17H.75c-.414 0-.75-.346-.75-.773v-1.545c0-.427.336-.773.75-.773h1.5c.414 0 .75.345.75.772v1.545c0 .427-.336.773-.75.773zM23 2.06H7c-.552 0-1-.346-1-.772 0-.427.448-.773 1-.773h16c.552 0 1 .346 1 .773 0 .426-.448.773-1 .773zM23 9.273H7c-.552 0-1-.346-1-.773 0-.427.448-.773 1-.773h16c.552 0 1 .346 1 .773 0 .427-.448.773-1 .773z' })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderCloseButton',
	    value: function renderCloseButton() {
	      if (!this.props.onClose) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'span',
	        { className: _style2.default.icon },
	        _react2.default.createElement(
	          'i',
	          { onClick: this.props.onClose },
	          _react2.default.createElement(
	            'svg',
	            { width: '17', height: '17', viewBox: '0 0 17 17', xmlns: 'http://www.w3.org/2000/svg' },
	            _react2.default.createElement('path', { d: 'M9.502 8.5l7.29 7.29c.277.278.277.727 0 1.003-.137.138-.32.207-.5.207s-.362-.07-.5-.207L8.5 9.503l-7.29 7.29c-.14.138-.32.207-.5.207-.183 0-.364-.07-.502-.207-.277-.276-.277-.725 0-1.002l7.29-7.29-7.29-7.29C-.07.932-.07.483.208.206c.277-.276.725-.276 1 0L8.5 7.497l7.29-7.29c.277-.276.725-.276 1.002 0 .277.277.277.726 0 1.002L9.502 8.5z', 'fill-rule': 'evenodd' })
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderHeader',
	    value: function renderHeader() {
	      var status = _react2.default.createElement(
	        'div',
	        { className: _style2.default.status },
	        _react2.default.createElement(
	          'svg',
	          { viewBox: '0 0 10 10' },
	          _react2.default.createElement('ellipse', { cx: '50%', cy: '50%', rx: '50%', ry: '50%' })
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          'always online'
	        )
	      );
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.header },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.left },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.line },
	            this.renderAvatar(),
	            this.renderTitle()
	          )
	        ),
	        this.renderConvoButton(),
	        this.renderCloseButton()
	      );
	    }
	  }, {
	    key: 'renderAttachmentButton',
	    value: function renderAttachmentButton() {
	      return null; // Temporary removed this feature (not implemented yet)
	
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'a',
	          null,
	          _react2.default.createElement(
	            'i',
	            null,
	            _react2.default.createElement(
	              'svg',
	              { width: '18', height: '17', viewBox: '0 0 18 17', xmlns: 'http://www.w3.org/2000/svg' },
	              _react2.default.createElement('path', { d: 'M8.455 16.5c-.19 0-.378-.076-.522-.226-.29-.303-.29-.792 0-1.093l7.66-8.013c.57-.597.885-1.392.885-2.236 0-.844-.315-1.638-.886-2.235-1.18-1.233-3.097-1.232-4.275 0L2.433 11.99c-.5.525-.742 1.03-.715 1.502.026.46.303.815.467.985.275.29.573.41.908.364.42-.054.903-.356 1.398-.874l6.973-7.295c.288-.3.755-.3 1.043 0 .29.303.29.793 0 1.093l-6.97 7.296c-.74.773-1.5 1.215-2.26 1.314-.797.104-1.535-.175-2.135-.804-.537-.562-.856-1.267-.896-1.985-.054-.933.332-1.836 1.144-2.686l8.885-9.297c1.754-1.836 4.61-1.836 6.363 0 .85.888 1.318 2.07 1.318 3.328s-.468 2.44-1.318 3.33l-7.66 8.014c-.143.15-.332.226-.52.226z', 'fill-rule': 'evenodd' })
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderEmojiButton',
	    value: function renderEmojiButton() {
	      return null; // Temporary removed this feature (emoji-mart lib is too big)
	
	      return _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'a',
	          null,
	          _react2.default.createElement(
	            'i',
	            { onClick: this.handleEmojiClicked.bind(this) },
	            _react2.default.createElement(
	              'svg',
	              { preserveAspectRatio: 'xMidYMid', width: '18', height: '18', viewBox: '0 0 24 24' },
	              _react2.default.createElement('path', { d: 'M12 24C5.38 24 0 18.62 0 12S5.38 0 12 0s12 5.38 12 12-5.38 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-2.9 0-5.56-1.75-6.9-4.57-.24-.5-.03-1.1.47-1.33.5-.24 1.1-.03 1.33.47C7.9 16.67 9.86 18 12 18c2.15 0 4.1-1.3 5.1-3.43.23-.5.83-.7 1.33-.47.5.23.7.83.47 1.33C17.58 18.25 14.93 20 12 20zm4-8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' })
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderComposer',
	    value: function renderComposer() {
	      var name = this.props.config.botName || 'Bot';
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.composer,
	          style: {
	            borderColor: this.state.focused ? this.props.config.foregroundColor : null
	          } },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default['flex-column'] },
	          _react2.default.createElement(_input2.default, { placeholder: "Reply to " + name,
	            send: this.props.onTextSend,
	            change: this.props.onTextChanged,
	            text: this.props.text,
	            focused: this.handleFocus.bind(this),
	            config: this.props.config }),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.line },
	            _react2.default.createElement(
	              'ul',
	              { className: _style2.default.elements },
	              this.renderAttachmentButton(),
	              this.renderEmojiButton()
	            ),
	            _react2.default.createElement(_send2.default, {
	              send: this.props.onTextSend,
	              text: this.props.text,
	              config: this.props.config })
	          ),
	          this.renderEmojiPicker()
	        )
	      );
	    }
	  }, {
	    key: 'renderEmojiPicker',
	    value: function renderEmojiPicker() {
	      if (!this.state.showEmoji) {
	        return null;
	      }
	
	      return null; // Temporary removed this feature (emoji-mart is too big)
	
	      // return <div className={style.emoji}>
	      //     <div className={style.inside}>
	      //       <Picker
	      //         onClick={this.props.addEmojiToText} 
	      //         set='emojione'
	      //         emojiSize={18}
	      //         perLine={10}
	      //         color={this.props.config.foregroundColor}/>
	      //     </div>
	      //   </div>
	    }
	  }, {
	    key: 'renderConversation',
	    value: function renderConversation() {
	      var messagesProps = {
	        typingUntil: this.props.currentConversation && this.props.currentConversation.typingUntil,
	        messages: this.props.currentConversation && this.props.currentConversation.messages,
	        fgColor: this.props.config && this.props.config.foregroundColor,
	        textColor: this.props.config && this.props.config.textColorOnForeground,
	        avatarUrl: this.props.config && this.props.config.botAvatarUrl,
	        onQuickReplySend: this.props.onQuickReplySend,
	        onFileUploadSend: this.props.onFileUploadSend,
	        onLoginPromptSend: this.props.onLoginPromptSend
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.conversation },
	        _react2.default.createElement(_messages2.default, messagesProps),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.bottom },
	          this.renderComposer()
	        )
	      );
	    }
	  }, {
	    key: 'renderItemConvos',
	    value: function renderItemConvos(convo, key) {
	      var _this2 = this;
	
	      var title = convo.title || convo.message_author || 'Untitled Conversation';
	      var date = (0, _distance_in_words_to_now2.default)(new Date(convo.message_sent_on || convo.created_on));
	      var message = convo.message_text || '...';
	
	      var onClick = function onClick() {
	        _this2.props.onSwitchConvo && _this2.props.onSwitchConvo(convo.id);
	
	        _this2.setState({
	          showConvos: false
	        });
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.item, key: key, onClick: onClick },
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.left },
	          this.renderAvatar()
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default.right },
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.title },
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.name },
	              title
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _style2.default.date },
	              _react2.default.createElement(
	                'span',
	                null,
	                date
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.text },
	            message
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderListOfConvos',
	    value: function renderListOfConvos() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.list },
	        this.props.conversations.map(this.renderItemConvos.bind(this))
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var fullscreen = this.props.fullscreen ? 'fullscreen' : null;
	      var classNames = (0, _classnames2.default)(_style2.default.internal, _style2.default[fullscreen], _style2.default[this.props.transition]);
	
	      return _react2.default.createElement(
	        'span',
	        { className: _style2.default.external },
	        _react2.default.createElement(
	          'div',
	          { className: classNames,
	            style: {
	              backgroundColor: this.props.config.backgroundColor,
	              color: this.props.config.textColorOnBackgound
	            } },
	          this.renderHeader(),
	          this.state.showConvos ? this.renderListOfConvos() : this.renderConversation()
	        )
	      );
	    }
	  }]);
	
	  return Side;
	}(_react2.default.Component);
	
	exports.default = Side;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var distanceInWords = __webpack_require__(25)
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given date and now in words.
	 *
	 * @description
	 * Return the distance between the given date and now in words.
	 *
	 * | Distance to now                                                   | Result              |
	 * |-------------------------------------------------------------------|---------------------|
	 * | 0 ... 30 secs                                                     | less than a minute  |
	 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
	 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
	 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
	 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
	 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
	 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
	 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
	 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
	 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
	 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
	 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
	 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
	 * | N yrs ... N yrs 3 months                                          | about N years       |
	 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
	 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
	 *
	 * With `options.includeSeconds == true`:
	 * | Distance to now     | Result               |
	 * |---------------------|----------------------|
	 * | 0 secs ... 5 secs   | less than 5 seconds  |
	 * | 5 secs ... 10 secs  | less than 10 seconds |
	 * | 10 secs ... 20 secs | less than 20 seconds |
	 * | 20 secs ... 40 secs | half a minute        |
	 * | 40 secs ... 60 secs | less than a minute   |
	 * | 60 secs ... 90 secs | 1 minute             |
	 *
	 * @param {Date|String|Number} date - the given date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
	 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // If today is 1 January 2015, what is the distance to 2 July 2014?
	 * var result = distanceInWordsToNow(
	 *   new Date(2014, 6, 2)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // If now is 1 January 2015 00:00:00,
	 * // what is the distance to 1 January 2015 00:00:15, including seconds?
	 * var result = distanceInWordsToNow(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   {includeSeconds: true}
	 * )
	 * //=> 'less than 20 seconds'
	 *
	 * @example
	 * // If today is 1 January 2015,
	 * // what is the distance to 1 January 2016, with a suffix?
	 * var result = distanceInWordsToNow(
	 *   new Date(2016, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> 'in about 1 year'
	 *
	 * @example
	 * // If today is 1 January 2015,
	 * // what is the distance to 1 August 2016 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWordsToNow(
	 *   new Date(2016, 7, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> 'pli ol 1 jaro'
	 */
	function distanceInWordsToNow (dirtyDate, dirtyOptions) {
	  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
	}
	
	module.exports = distanceInWordsToNow


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var compareDesc = __webpack_require__(26)
	var parse = __webpack_require__(6)
	var differenceInSeconds = __webpack_require__(27)
	var differenceInMonths = __webpack_require__(29)
	var enLocale = __webpack_require__(32)
	
	var MINUTES_IN_DAY = 1440
	var MINUTES_IN_ALMOST_TWO_DAYS = 2520
	var MINUTES_IN_MONTH = 43200
	var MINUTES_IN_TWO_MONTHS = 86400
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given dates in words.
	 *
	 * @description
	 * Return the distance between the given dates in words.
	 *
	 * | Distance between dates                                            | Result              |
	 * |-------------------------------------------------------------------|---------------------|
	 * | 0 ... 30 secs                                                     | less than a minute  |
	 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
	 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
	 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
	 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
	 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
	 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
	 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
	 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
	 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
	 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
	 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
	 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
	 * | N yrs ... N yrs 3 months                                          | about N years       |
	 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
	 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
	 *
	 * With `options.includeSeconds == true`:
	 * | Distance between dates | Result               |
	 * |------------------------|----------------------|
	 * | 0 secs ... 5 secs      | less than 5 seconds  |
	 * | 5 secs ... 10 secs     | less than 10 seconds |
	 * | 10 secs ... 20 secs    | less than 20 seconds |
	 * | 20 secs ... 40 secs    | half a minute        |
	 * | 40 secs ... 60 secs    | less than a minute   |
	 * | 60 secs ... 90 secs    | 1 minute             |
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date|String|Number} date - the other date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
	 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // What is the distance between 2 July 2014 and 1 January 2015?
	 * var result = distanceInWords(
	 *   new Date(2014, 6, 2),
	 *   new Date(2015, 0, 1)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // What is the distance between 1 January 2015 00:00:15
	 * // and 1 January 2015 00:00:00, including seconds?
	 * var result = distanceInWords(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   new Date(2015, 0, 1, 0, 0, 0),
	 *   {includeSeconds: true}
	 * )
	 * //=> 'less than 20 seconds'
	 *
	 * @example
	 * // What is the distance from 1 January 2016
	 * // to 1 January 2015, with a suffix?
	 * var result = distanceInWords(
	 *   new Date(2016, 0, 1),
	 *   new Date(2015, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> 'about 1 year ago'
	 *
	 * @example
	 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWords(
	 *   new Date(2016, 7, 1),
	 *   new Date(2015, 0, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> 'pli ol 1 jaro'
	 */
	function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
	  var options = dirtyOptions || {}
	
	  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)
	
	  var locale = options.locale
	  var localize = enLocale.distanceInWords.localize
	  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
	    localize = locale.distanceInWords.localize
	  }
	
	  var localizeOptions = {
	    addSuffix: Boolean(options.addSuffix),
	    comparison: comparison
	  }
	
	  var dateLeft, dateRight
	  if (comparison > 0) {
	    dateLeft = parse(dirtyDateToCompare)
	    dateRight = parse(dirtyDate)
	  } else {
	    dateLeft = parse(dirtyDate)
	    dateRight = parse(dirtyDateToCompare)
	  }
	
	  var seconds = differenceInSeconds(dateRight, dateLeft)
	  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
	  var minutes = Math.round(seconds / 60) - offset
	  var months
	
	  // 0 up to 2 mins
	  if (minutes < 2) {
	    if (options.includeSeconds) {
	      if (seconds < 5) {
	        return localize('lessThanXSeconds', 5, localizeOptions)
	      } else if (seconds < 10) {
	        return localize('lessThanXSeconds', 10, localizeOptions)
	      } else if (seconds < 20) {
	        return localize('lessThanXSeconds', 20, localizeOptions)
	      } else if (seconds < 40) {
	        return localize('halfAMinute', null, localizeOptions)
	      } else if (seconds < 60) {
	        return localize('lessThanXMinutes', 1, localizeOptions)
	      } else {
	        return localize('xMinutes', 1, localizeOptions)
	      }
	    } else {
	      if (minutes === 0) {
	        return localize('lessThanXMinutes', 1, localizeOptions)
	      } else {
	        return localize('xMinutes', minutes, localizeOptions)
	      }
	    }
	
	  // 2 mins up to 0.75 hrs
	  } else if (minutes < 45) {
	    return localize('xMinutes', minutes, localizeOptions)
	
	  // 0.75 hrs up to 1.5 hrs
	  } else if (minutes < 90) {
	    return localize('aboutXHours', 1, localizeOptions)
	
	  // 1.5 hrs up to 24 hrs
	  } else if (minutes < MINUTES_IN_DAY) {
	    var hours = Math.round(minutes / 60)
	    return localize('aboutXHours', hours, localizeOptions)
	
	  // 1 day up to 1.75 days
	  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
	    return localize('xDays', 1, localizeOptions)
	
	  // 1.75 days up to 30 days
	  } else if (minutes < MINUTES_IN_MONTH) {
	    var days = Math.round(minutes / MINUTES_IN_DAY)
	    return localize('xDays', days, localizeOptions)
	
	  // 1 month up to 2 months
	  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
	    months = Math.round(minutes / MINUTES_IN_MONTH)
	    return localize('aboutXMonths', months, localizeOptions)
	  }
	
	  months = differenceInMonths(dateRight, dateLeft)
	
	  // 2 months up to 12 months
	  if (months < 12) {
	    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
	    return localize('xMonths', nearestMonth, localizeOptions)
	
	  // 1 year up to max Date
	  } else {
	    var monthsSinceStartOfYear = months % 12
	    var years = Math.floor(months / 12)
	
	    // N years up to 1 years 3 months
	    if (monthsSinceStartOfYear < 3) {
	      return localize('aboutXYears', years, localizeOptions)
	
	    // N years 3 months up to N years 9 months
	    } else if (monthsSinceStartOfYear < 9) {
	      return localize('overXYears', years, localizeOptions)
	
	    // N years 9 months up to N year 12 months
	    } else {
	      return localize('almostXYears', years + 1, localizeOptions)
	    }
	  }
	}
	
	module.exports = distanceInWords


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Common Helpers
	 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
	 *
	 * @description
	 * Compare the two dates and return -1 if the first date is after the second,
	 * 1 if the first date is before the second or 0 if dates are equal.
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Number} the result of the comparison
	 *
	 * @example
	 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
	 * var result = compareDesc(
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * )
	 * //=> 1
	 *
	 * @example
	 * // Sort the array of dates in reverse chronological order:
	 * var result = [
	 *   new Date(1995, 6, 2),
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * ].sort(compareDesc)
	 * //=> [
	 * //   Sun Jul 02 1995 00:00:00,
	 * //   Mon Jul 10 1989 00:00:00,
	 * //   Wed Feb 11 1987 00:00:00
	 * // ]
	 */
	function compareDesc (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()
	
	  if (timeLeft > timeRight) {
	    return -1
	  } else if (timeLeft < timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}
	
	module.exports = compareDesc


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(28)
	
	/**
	 * @category Second Helpers
	 * @summary Get the number of seconds between the given dates.
	 *
	 * @description
	 * Get the number of seconds between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of seconds
	 *
	 * @example
	 * // How many seconds are between
	 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
	 * var result = differenceInSeconds(
	 *   new Date(2014, 6, 2, 12, 30, 20, 0),
	 *   new Date(2014, 6, 2, 12, 30, 7, 999)
	 * )
	 * //=> 12
	 */
	function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInSeconds


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Get the number of milliseconds between the given dates.
	 *
	 * @description
	 * Get the number of milliseconds between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of milliseconds
	 *
	 * @example
	 * // How many milliseconds are between
	 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
	 * var result = differenceInMilliseconds(
	 *   new Date(2014, 6, 2, 12, 30, 21, 700),
	 *   new Date(2014, 6, 2, 12, 30, 20, 600)
	 * )
	 * //=> 1100
	 */
	function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getTime() - dateRight.getTime()
	}
	
	module.exports = differenceInMilliseconds


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	var differenceInCalendarMonths = __webpack_require__(30)
	var compareAsc = __webpack_require__(31)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of full months between the given dates.
	 *
	 * @description
	 * Get the number of full months between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full months
	 *
	 * @example
	 * // How many full months are between 31 January 2014 and 1 September 2014?
	 * var result = differenceInMonths(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 0, 31)
	 * )
	 * //=> 7
	 */
	function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var sign = compareAsc(dateLeft, dateRight)
	  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
	  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)
	
	  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
	  // If so, result must be decreased by 1 in absolute value
	  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
	  return sign * (difference - isLastMonthNotFull)
	}
	
	module.exports = differenceInMonths


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of calendar months between the given dates.
	 *
	 * @description
	 * Get the number of calendar months between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar months
	 *
	 * @example
	 * // How many calendar months are between 31 January 2014 and 1 September 2014?
	 * var result = differenceInCalendarMonths(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 0, 31)
	 * )
	 * //=> 8
	 */
	function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
	  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()
	
	  return yearDiff * 12 + monthDiff
	}
	
	module.exports = differenceInCalendarMonths


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Common Helpers
	 * @summary Compare the two dates and return -1, 0 or 1.
	 *
	 * @description
	 * Compare the two dates and return 1 if the first date is after the second,
	 * -1 if the first date is before the second or 0 if dates are equal.
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Number} the result of the comparison
	 *
	 * @example
	 * // Compare 11 February 1987 and 10 July 1989:
	 * var result = compareAsc(
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * )
	 * //=> -1
	 *
	 * @example
	 * // Sort the array of dates:
	 * var result = [
	 *   new Date(1995, 6, 2),
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * ].sort(compareAsc)
	 * //=> [
	 * //   Wed Feb 11 1987 00:00:00,
	 * //   Mon Jul 10 1989 00:00:00,
	 * //   Sun Jul 02 1995 00:00:00
	 * // ]
	 */
	function compareAsc (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()
	
	  if (timeLeft < timeRight) {
	    return -1
	  } else if (timeLeft > timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}
	
	module.exports = compareAsc


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(33)
	var buildFormatLocale = __webpack_require__(34)
	
	/**
	 * @category Locales
	 * @summary English locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'less than a second',
	      other: 'less than {{count}} seconds'
	    },
	
	    xSeconds: {
	      one: '1 second',
	      other: '{{count}} seconds'
	    },
	
	    halfAMinute: 'half a minute',
	
	    lessThanXMinutes: {
	      one: 'less than a minute',
	      other: 'less than {{count}} minutes'
	    },
	
	    xMinutes: {
	      one: '1 minute',
	      other: '{{count}} minutes'
	    },
	
	    aboutXHours: {
	      one: 'about 1 hour',
	      other: 'about {{count}} hours'
	    },
	
	    xHours: {
	      one: '1 hour',
	      other: '{{count}} hours'
	    },
	
	    xDays: {
	      one: '1 day',
	      other: '{{count}} days'
	    },
	
	    aboutXMonths: {
	      one: 'about 1 month',
	      other: 'about {{count}} months'
	    },
	
	    xMonths: {
	      one: '1 month',
	      other: '{{count}} months'
	    },
	
	    aboutXYears: {
	      one: 'about 1 year',
	      other: 'about {{count}} years'
	    },
	
	    xYears: {
	      one: '1 year',
	      other: '{{count}} years'
	    },
	
	    overXYears: {
	      one: 'over 1 year',
	      other: 'over {{count}} years'
	    },
	
	    almostXYears: {
	      one: 'almost 1 year',
	      other: 'almost {{count}} years'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'in ' + result
	      } else {
	        return result + ' ago'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(35)
	
	function buildFormatLocale () {
	  // Note: in English, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + 'st'
	      case 2:
	        return number + 'nd'
	      case 3:
	        return number + 'rd'
	    }
	  }
	  return number + 'th'
	}
	
	module.exports = buildFormatLocale


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	var commonFormatterKeys = [
	  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
	  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
	  'H', 'HH', 'h', 'hh', 'm', 'mm',
	  's', 'ss', 'S', 'SS', 'SSS',
	  'Z', 'ZZ', 'X', 'x'
	]
	
	function buildFormattingTokensRegExp (formatters) {
	  var formatterKeys = []
	  for (var key in formatters) {
	    if (formatters.hasOwnProperty(key)) {
	      formatterKeys.push(key)
	    }
	  }
	
	  var formattingTokens = commonFormatterKeys
	    .concat(formatterKeys)
	    .sort()
	    .reverse()
	  var formattingTokensRegExp = new RegExp(
	    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	  )
	
	  return formattingTokensRegExp
	}
	
	module.exports = buildFormattingTokensRegExp


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(4);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _format = __webpack_require__(37);
	
	var _format2 = _interopRequireDefault(_format);
	
	var _difference_in_minutes = __webpack_require__(48);
	
	var _difference_in_minutes2 = _interopRequireDefault(_difference_in_minutes);
	
	var _bot_avatar = __webpack_require__(18);
	
	var _bot_avatar2 = _interopRequireDefault(_bot_avatar);
	
	var _quick_replies = __webpack_require__(49);
	
	var _quick_replies2 = _interopRequireDefault(_quick_replies);
	
	var _login_prompt = __webpack_require__(54);
	
	var _login_prompt2 = _interopRequireDefault(_login_prompt);
	
	var _file = __webpack_require__(55);
	
	var _file2 = _interopRequireDefault(_file);
	
	var _style = __webpack_require__(51);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TIME_BETWEEN_DATES = 10; // 10 minutes
	
	var MessageGroup = function (_Component) {
	  _inherits(MessageGroup, _Component);
	
	  function MessageGroup() {
	    _classCallCheck(this, MessageGroup);
	
	    return _possibleConstructorReturn(this, (MessageGroup.__proto__ || Object.getPrototypeOf(MessageGroup)).apply(this, arguments));
	  }
	
	  _createClass(MessageGroup, [{
	    key: 'renderAvatar',
	    value: function renderAvatar() {
	      var content = _react2.default.createElement(_bot_avatar2.default, { foregroundColor: this.props.fgColor });
	
	      if (this.props.avatarUrl) {
	        content = _react2.default.createElement('div', {
	          className: _style2.default.picture,
	          style: { backgroundImage: 'url(' + this.props.avatarUrl + ')' } });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.avatar, style: { color: this.props.fgColor } },
	        content
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var sample = this.props.messages[0];
	      var isBot = !sample.userId;
	
	      var className = (0, _classnames3.default)(_style2.default.message, _defineProperty({}, _style2.default.user, !isBot));
	
	      var bubbleColor = this.props.fgColor;
	      var textColor = this.props.textColor;
	
	      return _react2.default.createElement(
	        'div',
	        { className: className },
	        isBot && this.renderAvatar(),
	        _react2.default.createElement(
	          'div',
	          { className: _style2.default['message-container'] },
	          isBot && _react2.default.createElement(
	            'div',
	            { className: _style2.default['info-line'] },
	            sample.full_name
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _style2.default.group },
	            this.props.messages.map(function (data, i) {
	              return _react2.default.createElement(Message, {
	                onLoginPromptSend: _this2.props.onLoginPromptSend,
	                textColor: textColor,
	                bubbleColor: bubbleColor,
	                key: 'msg-' + i,
	                isLastOfGroup: i >= _this2.props.messages.length - 1,
	                isLastGroup: _this2.props.isLastGroup,
	                data: data });
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return MessageGroup;
	}(_react.Component);
	
	var MessageList = function (_Component2) {
	  _inherits(MessageList, _Component2);
	
	  function MessageList(props) {
	    _classCallCheck(this, MessageList);
	
	    var _this3 = _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this, props));
	
	    _this3.messagesDiv = null;
	    return _this3;
	  }
	
	  _createClass(MessageList, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      this.tryScrollToBottom();
	    }
	  }, {
	    key: 'tryScrollToBottom',
	    value: function tryScrollToBottom() {
	      try {
	        this.messagesDiv.scrollTop = this.messagesDiv.scrollHeight;
	      } catch (err) {
	        // Discard the error
	      }
	    }
	  }, {
	    key: 'renderQuickReplies',
	    value: function renderQuickReplies() {
	      var messages = this.props.messages || [];
	      var message = messages[messages.length - 1];
	      var quick_replies = message && message['message_raw'] && message['message_raw']['quick_replies'];
	
	      return _react2.default.createElement(_quick_replies2.default, {
	        quick_replies: quick_replies,
	        fgColor: this.props.fgColor,
	        onQuickReplySend: this.props.onQuickReplySend,
	        onFileUploadSend: this.props.onFileUploadSend });
	    }
	  }, {
	    key: 'renderDate',
	    value: function renderDate(date) {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.date },
	        (0, _format2.default)(new Date(date), 'MMMM Do YYYY, h:mm a'),
	        _react2.default.createElement('div', { className: _style2.default.smallLine })
	      );
	    }
	  }, {
	    key: 'renderMessageGroups',
	    value: function renderMessageGroups() {
	      var _this4 = this;
	
	      var messages = this.props.messages || [];
	      var groups = [];
	
	      var lastSpeaker = null;
	      var lastDate = null;
	      var currentGroup = null;
	
	      messages.forEach(function (m) {
	        var speaker = !!m.userId ? m.userId : 'bot';
	        var date = m.sent_on;
	
	        // Create a new group if messages are separated by more than X minutes or if different speaker
	        if (speaker !== lastSpeaker || (0, _difference_in_minutes2.default)(new Date(date), new Date(lastDate)) >= TIME_BETWEEN_DATES) {
	          currentGroup = [];
	          groups.push(currentGroup);
	        }
	
	        currentGroup.push(m);
	
	        lastSpeaker = speaker;
	        lastDate = date;
	      });
	
	      if (this.props.typingUntil) {
	        if (lastSpeaker !== 'bot') {
	          currentGroup = [];
	          groups.push(currentGroup);
	        }
	
	        currentGroup.push({
	          sent_on: new Date(),
	          userId: null,
	          message_type: 'typing'
	        });
	      }
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        groups.map(function (group, i) {
	          var lastGroup = groups[i - 1];
	          var lastDate = lastGroup && lastGroup[lastGroup.length - 1] && lastGroup[lastGroup.length - 1].sent_on;
	          var groupDate = group && group[0].sent_on;
	
	          var isDateNeeded = !groups[i - 1] || (0, _difference_in_minutes2.default)(new Date(groupDate), new Date(lastDate)) > TIME_BETWEEN_DATES;
	
	          return _react2.default.createElement(
	            'div',
	            null,
	            isDateNeeded ? _this4.renderDate(group[0].sent_on) : null,
	            _react2.default.createElement(MessageGroup, {
	              avatarUrl: _this4.props.avatarUrl,
	              fgColor: _this4.props.fgColor,
	              textColor: _this4.props.textColor,
	              key: 'msg-group-' + i,
	              onLoginPromptSend: _this4.props.onLoginPromptSend,
	              isLastGroup: i >= groups.length - 1,
	              messages: group })
	          );
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.messages, ref: function ref(m) {
	            _this5.messagesDiv = m;
	          } },
	        this.renderMessageGroups(),
	        this.renderQuickReplies()
	      );
	    }
	  }]);
	
	  return MessageList;
	}(_react.Component);
	
	exports.default = MessageList;
	
	var Message = function (_Component3) {
	  _inherits(Message, _Component3);
	
	  function Message() {
	    _classCallCheck(this, Message);
	
	    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
	  }
	
	  _createClass(Message, [{
	    key: 'render_text',
	    value: function render_text() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          this.props.data.message_text
	        )
	      );
	    }
	  }, {
	    key: 'render_quick_reply',
	    value: function render_quick_reply() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          this.props.data.message_text
	        )
	      );
	    }
	  }, {
	    key: 'render_login_prompt',
	    value: function render_login_prompt() {
	      var isLastMessage = this.props.isLastOfGroup && this.props.isLastGroup;
	      var isBotMessage = !this.props.data.userId;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_login_prompt2.default, {
	          isLastMessage: isLastMessage,
	          isBotMessage: isBotMessage,
	          bgColor: this.props.bubbleColor,
	          onLoginPromptSend: this.props.onLoginPromptSend,
	          textColor: this.props.textColor })
	      );
	    }
	  }, {
	    key: 'render_typing',
	    value: function render_typing() {
	      var _this7 = this;
	
	      var bubble = function bubble() {
	        return _react2.default.createElement('div', { className: _style2.default.typingBubble,
	          style: { backgroundColor: _this7.props.bubbleColor, color: _this7.props.textColor } });
	      };
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.typingGroup },
	        bubble(),
	        bubble(),
	        bubble()
	      );
	    }
	  }, {
	    key: 'render_file',
	    value: function render_file() {
	      return _react2.default.createElement(_file2.default, { file: this.props.data.message_data });
	    }
	  }, {
	    key: 'render_unsupported',
	    value: function render_unsupported() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          '*Unsupported message type*'
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bubbleStyle = !!this.props.data.userId ? { backgroundColor: this.props.bubbleColor, color: this.props.textColor } : null;
	
	      var renderer = (this['render_' + this.props.data.message_type] || this.render_unsupported).bind(this);
	
	      var className = _style2.default.bubble;
	
	      if (_style2.default[this.props.data.message_type]) {
	        className += ' ' + _style2.default[this.props.data.message_type];
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: className, style: bubbleStyle },
	        renderer()
	      );
	    }
	  }]);

	  return Message;
	}(_react.Component);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(38)
	var getISOWeek = __webpack_require__(42)
	var getISOYear = __webpack_require__(46)
	var parse = __webpack_require__(6)
	var isValid = __webpack_require__(47)
	var enLocale = __webpack_require__(32)
	
	/**
	 * @category Common Helpers
	 * @summary Format the date.
	 *
	 * @description
	 * Return the formatted date string in the given format.
	 *
	 * Accepted tokens:
	 * | Unit                    | Token | Result examples                  |
	 * |-------------------------|-------|----------------------------------|
	 * | Month                   | M     | 1, 2, ..., 12                    |
	 * |                         | Mo    | 1st, 2nd, ..., 12th              |
	 * |                         | MM    | 01, 02, ..., 12                  |
	 * |                         | MMM   | Jan, Feb, ..., Dec               |
	 * |                         | MMMM  | January, February, ..., December |
	 * | Quarter                 | Q     | 1, 2, 3, 4                       |
	 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
	 * | Day of month            | D     | 1, 2, ..., 31                    |
	 * |                         | Do    | 1st, 2nd, ..., 31st              |
	 * |                         | DD    | 01, 02, ..., 31                  |
	 * | Day of year             | DDD   | 1, 2, ..., 366                   |
	 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
	 * |                         | DDDD  | 001, 002, ..., 366               |
	 * | Day of week             | d     | 0, 1, ..., 6                     |
	 * |                         | do    | 0th, 1st, ..., 6th               |
	 * |                         | dd    | Su, Mo, ..., Sa                  |
	 * |                         | ddd   | Sun, Mon, ..., Sat               |
	 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
	 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
	 * | ISO week                | W     | 1, 2, ..., 53                    |
	 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
	 * |                         | WW    | 01, 02, ..., 53                  |
	 * | Year                    | YY    | 00, 01, ..., 99                  |
	 * |                         | YYYY  | 1900, 1901, ..., 2099            |
	 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
	 * |                         | GGGG  | 1900, 1901, ..., 2099            |
	 * | AM/PM                   | A     | AM, PM                           |
	 * |                         | a     | am, pm                           |
	 * |                         | aa    | a.m., p.m.                       |
	 * | Hour                    | H     | 0, 1, ... 23                     |
	 * |                         | HH    | 00, 01, ... 23                   |
	 * |                         | h     | 1, 2, ..., 12                    |
	 * |                         | hh    | 01, 02, ..., 12                  |
	 * | Minute                  | m     | 0, 1, ..., 59                    |
	 * |                         | mm    | 00, 01, ..., 59                  |
	 * | Second                  | s     | 0, 1, ..., 59                    |
	 * |                         | ss    | 00, 01, ..., 59                  |
	 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
	 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
	 * | Millisecond             | SSS   | 000, 001, ..., 999               |
	 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
	 * |                         | ZZ    | -0100, +0000, ..., +1200         |
	 * | Seconds timestamp       | X     | 512969520                        |
	 * | Milliseconds timestamp  | x     | 512969520900                     |
	 *
	 * The characters wrapped in square brackets are escaped.
	 *
	 * The result may vary by locale.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
	 * @param {Object} [options] - the object with options
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the formatted date string
	 *
	 * @example
	 * // Represent 11 February 2014 in middle-endian format:
	 * var result = format(
	 *   new Date(2014, 1, 11),
	 *   'MM/DD/YYYY'
	 * )
	 * //=> '02/11/2014'
	 *
	 * @example
	 * // Represent 2 July 2014 in Esperanto:
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = format(
	 *   new Date(2014, 6, 2),
	 *   'Do [de] MMMM YYYY',
	 *   {locale: eoLocale}
	 * )
	 * //=> '2-a de julio 2014'
	 */
	function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
	  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	  var options = dirtyOptions || {}
	
	  var locale = options.locale
	  var localeFormatters = enLocale.format.formatters
	  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
	  if (locale && locale.format && locale.format.formatters) {
	    localeFormatters = locale.format.formatters
	
	    if (locale.format.formattingTokensRegExp) {
	      formattingTokensRegExp = locale.format.formattingTokensRegExp
	    }
	  }
	
	  var date = parse(dirtyDate)
	
	  if (!isValid(date)) {
	    return 'Invalid Date'
	  }
	
	  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)
	
	  return formatFn(date)
	}
	
	var formatters = {
	  // Month: 1, 2, ..., 12
	  'M': function (date) {
	    return date.getMonth() + 1
	  },
	
	  // Month: 01, 02, ..., 12
	  'MM': function (date) {
	    return addLeadingZeros(date.getMonth() + 1, 2)
	  },
	
	  // Quarter: 1, 2, 3, 4
	  'Q': function (date) {
	    return Math.ceil((date.getMonth() + 1) / 3)
	  },
	
	  // Day of month: 1, 2, ..., 31
	  'D': function (date) {
	    return date.getDate()
	  },
	
	  // Day of month: 01, 02, ..., 31
	  'DD': function (date) {
	    return addLeadingZeros(date.getDate(), 2)
	  },
	
	  // Day of year: 1, 2, ..., 366
	  'DDD': function (date) {
	    return getDayOfYear(date)
	  },
	
	  // Day of year: 001, 002, ..., 366
	  'DDDD': function (date) {
	    return addLeadingZeros(getDayOfYear(date), 3)
	  },
	
	  // Day of week: 0, 1, ..., 6
	  'd': function (date) {
	    return date.getDay()
	  },
	
	  // Day of ISO week: 1, 2, ..., 7
	  'E': function (date) {
	    return date.getDay() || 7
	  },
	
	  // ISO week: 1, 2, ..., 53
	  'W': function (date) {
	    return getISOWeek(date)
	  },
	
	  // ISO week: 01, 02, ..., 53
	  'WW': function (date) {
	    return addLeadingZeros(getISOWeek(date), 2)
	  },
	
	  // Year: 00, 01, ..., 99
	  'YY': function (date) {
	    return addLeadingZeros(date.getFullYear(), 4).substr(2)
	  },
	
	  // Year: 1900, 1901, ..., 2099
	  'YYYY': function (date) {
	    return addLeadingZeros(date.getFullYear(), 4)
	  },
	
	  // ISO week-numbering year: 00, 01, ..., 99
	  'GG': function (date) {
	    return String(getISOYear(date)).substr(2)
	  },
	
	  // ISO week-numbering year: 1900, 1901, ..., 2099
	  'GGGG': function (date) {
	    return getISOYear(date)
	  },
	
	  // Hour: 0, 1, ... 23
	  'H': function (date) {
	    return date.getHours()
	  },
	
	  // Hour: 00, 01, ..., 23
	  'HH': function (date) {
	    return addLeadingZeros(date.getHours(), 2)
	  },
	
	  // Hour: 1, 2, ..., 12
	  'h': function (date) {
	    var hours = date.getHours()
	    if (hours === 0) {
	      return 12
	    } else if (hours > 12) {
	      return hours % 12
	    } else {
	      return hours
	    }
	  },
	
	  // Hour: 01, 02, ..., 12
	  'hh': function (date) {
	    return addLeadingZeros(formatters['h'](date), 2)
	  },
	
	  // Minute: 0, 1, ..., 59
	  'm': function (date) {
	    return date.getMinutes()
	  },
	
	  // Minute: 00, 01, ..., 59
	  'mm': function (date) {
	    return addLeadingZeros(date.getMinutes(), 2)
	  },
	
	  // Second: 0, 1, ..., 59
	  's': function (date) {
	    return date.getSeconds()
	  },
	
	  // Second: 00, 01, ..., 59
	  'ss': function (date) {
	    return addLeadingZeros(date.getSeconds(), 2)
	  },
	
	  // 1/10 of second: 0, 1, ..., 9
	  'S': function (date) {
	    return Math.floor(date.getMilliseconds() / 100)
	  },
	
	  // 1/100 of second: 00, 01, ..., 99
	  'SS': function (date) {
	    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
	  },
	
	  // Millisecond: 000, 001, ..., 999
	  'SSS': function (date) {
	    return addLeadingZeros(date.getMilliseconds(), 3)
	  },
	
	  // Timezone: -01:00, +00:00, ... +12:00
	  'Z': function (date) {
	    return formatTimezone(date.getTimezoneOffset(), ':')
	  },
	
	  // Timezone: -0100, +0000, ... +1200
	  'ZZ': function (date) {
	    return formatTimezone(date.getTimezoneOffset())
	  },
	
	  // Seconds timestamp: 512969520
	  'X': function (date) {
	    return Math.floor(date.getTime() / 1000)
	  },
	
	  // Milliseconds timestamp: 512969520900
	  'x': function (date) {
	    return date.getTime()
	  }
	}
	
	function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
	  var array = formatStr.match(formattingTokensRegExp)
	  var length = array.length
	
	  var i
	  var formatter
	  for (i = 0; i < length; i++) {
	    formatter = localeFormatters[array[i]] || formatters[array[i]]
	    if (formatter) {
	      array[i] = formatter
	    } else {
	      array[i] = removeFormattingTokens(array[i])
	    }
	  }
	
	  return function (date) {
	    var output = ''
	    for (var i = 0; i < length; i++) {
	      if (array[i] instanceof Function) {
	        output += array[i](date, formatters)
	      } else {
	        output += array[i]
	      }
	    }
	    return output
	  }
	}
	
	function removeFormattingTokens (input) {
	  if (input.match(/\[[\s\S]/)) {
	    return input.replace(/^\[|]$/g, '')
	  }
	  return input.replace(/\\/g, '')
	}
	
	function formatTimezone (offset, delimeter) {
	  delimeter = delimeter || ''
	  var sign = offset > 0 ? '-' : '+'
	  var absOffset = Math.abs(offset)
	  var hours = Math.floor(absOffset / 60)
	  var minutes = absOffset % 60
	  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
	}
	
	function addLeadingZeros (number, targetLength) {
	  var output = Math.abs(number).toString()
	  while (output.length < targetLength) {
	    output = '0' + output
	  }
	  return output
	}
	
	module.exports = format


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	var startOfYear = __webpack_require__(39)
	var differenceInCalendarDays = __webpack_require__(40)
	
	/**
	 * @category Day Helpers
	 * @summary Get the day of the year of the given date.
	 *
	 * @description
	 * Get the day of the year of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the day of year
	 *
	 * @example
	 * // Which day of the year is 2 July 2014?
	 * var result = getDayOfYear(new Date(2014, 6, 2))
	 * //=> 183
	 */
	function getDayOfYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = differenceInCalendarDays(date, startOfYear(date))
	  var dayOfYear = diff + 1
	  return dayOfYear
	}
	
	module.exports = getDayOfYear


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Year Helpers
	 * @summary Return the start of a year for the given date.
	 *
	 * @description
	 * Return the start of a year for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a year
	 *
	 * @example
	 * // The start of a year for 2 September 2014 11:55:00:
	 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
	 * //=> Wed Jan 01 2014 00:00:00
	 */
	function startOfYear (dirtyDate) {
	  var cleanDate = parse(dirtyDate)
	  var date = new Date(0)
	  date.setFullYear(cleanDate.getFullYear(), 0, 1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfYear


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(41)
	
	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_DAY = 86400000
	
	/**
	 * @category Day Helpers
	 * @summary Get the number of calendar days between the given dates.
	 *
	 * @description
	 * Get the number of calendar days between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar days
	 *
	 * @example
	 * // How many calendar days are between
	 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
	 * var result = differenceInCalendarDays(
	 *   new Date(2012, 6, 2, 0, 0),
	 *   new Date(2011, 6, 2, 23, 0)
	 * )
	 * //=> 366
	 */
	function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
	  var startOfDayLeft = startOfDay(dirtyDateLeft)
	  var startOfDayRight = startOfDay(dirtyDateRight)
	
	  var timestampLeft = startOfDayLeft.getTime() -
	    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfDayRight.getTime() -
	    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a day is not constant
	  // (e.g. it's different in the day of the daylight saving time clock shift)
	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
	}
	
	module.exports = differenceInCalendarDays


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Day Helpers
	 * @summary Return the start of a day for the given date.
	 *
	 * @description
	 * Return the start of a day for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a day
	 *
	 * @example
	 * // The start of a day for 2 September 2014 11:55:00:
	 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 02 2014 00:00:00
	 */
	function startOfDay (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfDay


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	var startOfISOWeek = __webpack_require__(43)
	var startOfISOYear = __webpack_require__(45)
	
	var MILLISECONDS_IN_WEEK = 604800000
	
	/**
	 * @category ISO Week Helpers
	 * @summary Get the ISO week of the given date.
	 *
	 * @description
	 * Get the ISO week of the given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week
	 *
	 * @example
	 * // Which week of the ISO-week numbering year is 2 January 2005?
	 * var result = getISOWeek(new Date(2005, 0, 2))
	 * //=> 53
	 */
	function getISOWeek (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)
	  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
	}
	
	module.exports = getISOWeek


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(44)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Return the start of an ISO week for the given date.
	 *
	 * @description
	 * Return the start of an ISO week for the given date.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO week
	 *
	 * @example
	 * // The start of an ISO week for 2 September 2014 11:55:00:
	 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfISOWeek (dirtyDate) {
	  return startOfWeek(dirtyDate, {weekStartsOn: 1})
	}
	
	module.exports = startOfISOWeek


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	
	/**
	 * @category Week Helpers
	 * @summary Return the start of a week for the given date.
	 *
	 * @description
	 * Return the start of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the start of a week
	 *
	 * @example
	 * // The start of a week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sun Aug 31 2014 00:00:00
	 *
	 * @example
	 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfWeek (dirtyDate, dirtyOptions) {
	  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
	
	  date.setDate(date.getDate() - diff)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfWeek


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(46)
	var startOfISOWeek = __webpack_require__(43)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Return the start of an ISO week-numbering year for the given date.
	 *
	 * @description
	 * Return the start of an ISO week-numbering year,
	 * which always starts 3 days before the year's first Thursday.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO year
	 *
	 * @example
	 * // The start of an ISO week-numbering year for 2 July 2005:
	 * var result = startOfISOYear(new Date(2005, 6, 2))
	 * //=> Mon Jan 03 2005 00:00:00
	 */
	function startOfISOYear (dirtyDate) {
	  var year = getISOYear(dirtyDate)
	  var fourthOfJanuary = new Date(0)
	  fourthOfJanuary.setFullYear(year, 0, 4)
	  fourthOfJanuary.setHours(0, 0, 0, 0)
	  var date = startOfISOWeek(fourthOfJanuary)
	  return date
	}
	
	module.exports = startOfISOYear


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(6)
	var startOfISOWeek = __webpack_require__(43)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Get the ISO week-numbering year of the given date.
	 *
	 * @description
	 * Get the ISO week-numbering year of the given date,
	 * which always starts 3 days before the year's first Thursday.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week-numbering year
	 *
	 * @example
	 * // Which ISO-week numbering year is 2 January 2005?
	 * var result = getISOYear(new Date(2005, 0, 2))
	 * //=> 2004
	 */
	function getISOYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	
	  var fourthOfJanuaryOfNextYear = new Date(0)
	  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
	  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
	  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)
	
	  var fourthOfJanuaryOfThisYear = new Date(0)
	  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
	  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
	  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)
	
	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return year + 1
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return year
	  } else {
	    return year - 1
	  }
	}
	
	module.exports = getISOYear


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(7)
	
	/**
	 * @category Common Helpers
	 * @summary Is the given date valid?
	 *
	 * @description
	 * Returns false if argument is Invalid Date and true otherwise.
	 * Invalid Date is a Date, whose time value is NaN.
	 *
	 * Time value of Date: http://es5.github.io/#x15.9.1.1
	 *
	 * @param {Date} date - the date to check
	 * @returns {Boolean} the date is valid
	 * @throws {TypeError} argument must be an instance of Date
	 *
	 * @example
	 * // For the valid date:
	 * var result = isValid(new Date(2014, 1, 31))
	 * //=> true
	 *
	 * @example
	 * // For the invalid date:
	 * var result = isValid(new Date(''))
	 * //=> false
	 */
	function isValid (dirtyDate) {
	  if (isDate(dirtyDate)) {
	    return !isNaN(dirtyDate)
	  } else {
	    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
	  }
	}
	
	module.exports = isValid


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(28)
	
	var MILLISECONDS_IN_MINUTE = 60000
	
	/**
	 * @category Minute Helpers
	 * @summary Get the number of minutes between the given dates.
	 *
	 * @description
	 * Get the number of minutes between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of minutes
	 *
	 * @example
	 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
	 * var result = differenceInMinutes(
	 *   new Date(2014, 6, 2, 12, 20, 0),
	 *   new Date(2014, 6, 2, 12, 7, 59)
	 * )
	 * //=> 12
	 */
	function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInMinutes


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _misc = __webpack_require__(50);
	
	var _style = __webpack_require__(51);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _reactFileInput = __webpack_require__(53);
	
	var _reactFileInput2 = _interopRequireDefault(_reactFileInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var QuickReply = function (_Component) {
	  _inherits(QuickReply, _Component);
	
	  function QuickReply(props) {
	    _classCallCheck(this, QuickReply);
	
	    var _this = _possibleConstructorReturn(this, (QuickReply.__proto__ || Object.getPrototypeOf(QuickReply)).call(this, props));
	
	    _this.state = { hover: false };
	    return _this;
	  }
	
	  _createClass(QuickReply, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      this.props.onQuickReplySend && this.props.onQuickReplySend(this.props.title, this.props.payload);
	    }
	  }, {
	    key: 'handleFileUpload',
	    value: function handleFileUpload(event) {
	      if (!event.target.files) {
	        return;
	      }
	
	      this.props.onFileUploadSend && this.props.onFileUploadSend(this.props.title, this.props.payload, event.target.files[0]);
	    }
	  }, {
	    key: 'renderFileUpload',
	    value: function renderFileUpload(accept) {
	      var _this2 = this;
	
	      var backgroundColor = this.state.hover ? (0, _misc.hexToRGBA)(this.props.fgColor, 0.07) : (0, _misc.hexToRGBA)(this.props.fgColor, 0);
	
	      return _react2.default.createElement(
	        'button',
	        {
	          className: _style2.default.bubble,
	          style: { color: this.props.fgColor, backgroundColor: backgroundColor },
	          onMouseOver: function onMouseOver() {
	            return _this2.setState({ hover: true });
	          },
	          onMouseOut: function onMouseOut() {
	            return _this2.setState({ hover: false });
	          } },
	        _react2.default.createElement(
	          'span',
	          null,
	          this.props.title
	        ),
	        _react2.default.createElement(_reactFileInput2.default, {
	          name: 'uploadField',
	          accept: accept,
	          className: _style2.default.filePicker,
	          placeholder: this.props.title,
	          onChange: this.handleFileUpload.bind(this) })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var backgroundColor = this.state.hover ? (0, _misc.hexToRGBA)(this.props.fgColor, 0.07) : (0, _misc.hexToRGBA)(this.props.fgColor, 0);
	
	      if (this.props.payload === 'BOTPRESS.IMAGE_UPLOAD') {
	        return this.renderFileUpload('image/*');
	      }
	
	      if (this.props.payload === 'BOTPRESS.FILE_UPLOAD') {
	        return this.renderFileUpload('*/*');
	      }
	
	      return _react2.default.createElement(
	        'button',
	        {
	          className: _style2.default.bubble,
	          style: { color: this.props.fgColor, backgroundColor: backgroundColor },
	          onClick: this.handleClick.bind(this),
	          onMouseOver: function onMouseOver() {
	            return _this3.setState({ hover: true });
	          },
	          onMouseOut: function onMouseOut() {
	            return _this3.setState({ hover: false });
	          } },
	        this.props.title
	      );
	    }
	  }]);
	
	  return QuickReply;
	}(_react.Component);
	
	var QuickReplies = function QuickReplies(props) {
	  if (!props.quick_replies) {
	    return null;
	  }
	
	  var quick_replies = props.quick_replies.map(function (qr) {
	    return _react2.default.createElement(QuickReply, _extends({}, props, qr));
	  });
	
	  return _react2.default.createElement(
	    'div',
	    { className: _style2.default.quickReplyContainer },
	    quick_replies
	  );
	};
	
	exports.default = QuickReplies;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hexToRGBA = hexToRGBA;
	function hexToRGBA(hex) {
	  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	  var r = parseInt(hex.slice(1, 3), 16);
	  var g = parseInt(hex.slice(3, 5), 16);
	  var b = parseInt(hex.slice(5, 7), 16);
	  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".botpress-platform-webchat__style__avatar___3fBbF {\n  margin-top: .15rem;\n  margin-right: .75rem;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 1.875rem;\n  height: 1.875rem; }\n  .botpress-platform-webchat__style__avatar___3fBbF .botpress-platform-webchat__style__color___1M6jC {\n    fill: currentColor; }\n  .botpress-platform-webchat__style__avatar___3fBbF .botpress-platform-webchat__style__picture___uiWi7 {\n    border-radius: 50%;\n    background-size: cover;\n    background-position: 50%;\n    width: 100%;\n    height: 100%; }\n\n.botpress-platform-webchat__style__date___3RYpm {\n  color: #9a9a9a;\n  text-align: center;\n  font-size: 12px;\n  margin: 40px 0 20px; }\n  .botpress-platform-webchat__style__date___3RYpm .botpress-platform-webchat__style__smallLine___3MArC {\n    border-bottom: solid 1px #e6e6e6;\n    margin: auto;\n    width: 80px;\n    margin-top: 5px; }\n\n.botpress-platform-webchat__style__messages___tQB_X {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow-y: auto;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  padding: 0 .65rem 1rem; }\n\n.botpress-platform-webchat__style__message___2Z-Wf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 1rem 0;\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  padding-right: 18px;\n  padding-left: 0; }\n  .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq {\n    width: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__info-line___2iX2w {\n      margin: 0 12px;\n      -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n      padding: .3125rem 0;\n      font-size: 12px;\n      color: #9a9a9a;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__group___1GcAE {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      -webkit-box-align: start;\n      -ms-flex-align: start;\n      align-items: flex-start;\n      width: 100%; }\n      .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__group___1GcAE > :not(:last-child) {\n        margin-bottom: 2px; }\n    .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__bubble___eNt_J {\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px;\n      border-top-right-radius: 8px;\n      border-bottom-right-radius: 8px;\n      max-width: 100%;\n      background-color: #f8f8f8;\n      padding: .5rem .75rem;\n      white-space: pre-wrap;\n      word-break: break-word; }\n      .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__bubble___eNt_J:first-of-type {\n        border-top-left-radius: 16px;\n        border-top-right-radius: 16px; }\n      .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__bubble___eNt_J:last-of-type {\n        border-bottom-left-radius: 16px;\n        border-bottom-right-radius: 16px; }\n      .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__bubble___eNt_J.botpress-platform-webchat__style__file___1q6sA {\n        padding: 0; }\n        .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__bubble___eNt_J.botpress-platform-webchat__style__file___1q6sA a {\n          display: block;\n          cursor: pointer;\n          border-top-left-radius: inherit;\n          border-top-right-radius: inherit;\n          border-bottom-right-radius: inherit;\n          border-bottom-left-radius: inherit; }\n          .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__bubble___eNt_J.botpress-platform-webchat__style__file___1q6sA a img {\n            max-height: 240px;\n            max-width: 100%;\n            border-top-left-radius: inherit;\n            border-top-right-radius: inherit;\n            border-bottom-right-radius: inherit;\n            border-bottom-left-radius: inherit; }\n      .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__bubble___eNt_J p {\n        margin: 0; }\n      .botpress-platform-webchat__style__message___2Z-Wf .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__bubble___eNt_J .botpress-platform-webchat__style__specialAction___2EaSP {\n        opacity: 0.6; }\n\n.botpress-platform-webchat__style__otherFile___3yT-c {\n  padding: .5rem .75rem; }\n\n.botpress-platform-webchat__style__user___2KjQ8 {\n  padding-right: 0; }\n  .botpress-platform-webchat__style__user___2KjQ8 .botpress-platform-webchat__style__message-container___1cLJq {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end; }\n    .botpress-platform-webchat__style__user___2KjQ8 .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__group___1GcAE {\n      padding-left: 60px;\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end;\n      -webkit-box-align: end;\n      -ms-flex-align: end;\n      align-items: flex-end; }\n      .botpress-platform-webchat__style__user___2KjQ8 .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__group___1GcAE .botpress-platform-webchat__style__bubble___eNt_J {\n        color: white;\n        background-color: #0176ff;\n        border-top-left-radius: 8px;\n        border-bottom-left-radius: 8px;\n        border-top-right-radius: 4px;\n        border-bottom-right-radius: 4px; }\n        .botpress-platform-webchat__style__user___2KjQ8 .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__group___1GcAE .botpress-platform-webchat__style__bubble___eNt_J:first-of-type {\n          border-top-left-radius: 16px;\n          border-top-right-radius: 16px; }\n        .botpress-platform-webchat__style__user___2KjQ8 .botpress-platform-webchat__style__message-container___1cLJq .botpress-platform-webchat__style__group___1GcAE .botpress-platform-webchat__style__bubble___eNt_J:last-of-type {\n          border-bottom-right-radius: 16px;\n          border-bottom-left-radius: 16px; }\n\n.botpress-platform-webchat__style__loginPromptContainer___SR5Cp label {\n  display: block; }\n\n.botpress-platform-webchat__style__loginPromptContainer___SR5Cp .botpress-platform-webchat__style__loginInput___jFL-7 {\n  height: 30px;\n  border: none;\n  outline: none;\n  background-color: #f8f8f8;\n  border-bottom: 1px solid #bbb;\n  width: 200px;\n  text-align: center;\n  margin: 10px;\n  font-size: 14px; }\n\n.botpress-platform-webchat__style__loginPromptContainer___SR5Cp .botpress-platform-webchat__style__loginButton___i7cOj {\n  display: block;\n  font-size: 16px;\n  height: 30px;\n  width: 130px;\n  text-align: center;\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: none;\n  outline: none;\n  background-color: black;\n  color: white; }\n\n@keyframes botpress-platform-webchat__style__typingAnimation___A3b6N {\n  0% {\n    transform: translateY(0px); }\n  28% {\n    transform: translateY(-6px); }\n  44% {\n    transform: translateY(0px); } }\n\n.botpress-platform-webchat__style__typingGroup___3DxRA {\n  align-items: center;\n  display: flex;\n  height: 17px; }\n  .botpress-platform-webchat__style__typingGroup___3DxRA .botpress-platform-webchat__style__typingBubble___2VoUG {\n    animation: botpress-platform-webchat__style__typingAnimation___A3b6N 1s infinite ease-in-out;\n    border-radius: 50%;\n    height: 6px;\n    margin-right: 4px;\n    vertical-align: middle;\n    width: 6px;\n    background-color: #4076e2;\n    color: #943e3e;\n    white-space: pre-wrap;\n    font-size: 16px;\n    direction: ltr; }\n    .botpress-platform-webchat__style__typingGroup___3DxRA .botpress-platform-webchat__style__typingBubble___2VoUG:nth-child(1) {\n      animation-delay: 200ms; }\n    .botpress-platform-webchat__style__typingGroup___3DxRA .botpress-platform-webchat__style__typingBubble___2VoUG:nth-child(2) {\n      animation-delay: 300ms; }\n    .botpress-platform-webchat__style__typingGroup___3DxRA .botpress-platform-webchat__style__typingBubble___2VoUG:nth-child(3) {\n      animation-delay: 400ms; }\n\n.botpress-platform-webchat__style__quickReplyContainer___1iL8H {\n  box-sizing: border-box;\n  display: block;\n  text-align: right;\n  text-align: right; }\n  .botpress-platform-webchat__style__quickReplyContainer___1iL8H button {\n    display: inline-block;\n    margin: 3px 2px;\n    cursor: pointer;\n    text-transform: none;\n    overflow: visible;\n    align-items: flex-start; }\n    .botpress-platform-webchat__style__quickReplyContainer___1iL8H button.botpress-platform-webchat__style__bubble___eNt_J {\n      box-shadow: none;\n      background-color: transparent;\n      font-size: 1rem;\n      padding: .4rem 0.8rem;\n      width: initial;\n      min-width: 5rem;\n      height: 40px;\n      text-align: center;\n      border: 1px solid currentColor;\n      border-radius: 20px; }\n    .botpress-platform-webchat__style__quickReplyContainer___1iL8H button .botpress-platform-webchat__style__filePicker___LVaur {\n      top: -32px !important;\n      height: 38px !important;\n      cursor: pointer; }\n", ""]);
	
	// exports
	exports.locals = {
		"avatar": "botpress-platform-webchat__style__avatar___3fBbF",
		"color": "botpress-platform-webchat__style__color___1M6jC",
		"picture": "botpress-platform-webchat__style__picture___uiWi7",
		"date": "botpress-platform-webchat__style__date___3RYpm",
		"smallLine": "botpress-platform-webchat__style__smallLine___3MArC",
		"messages": "botpress-platform-webchat__style__messages___tQB_X",
		"message": "botpress-platform-webchat__style__message___2Z-Wf",
		"message-container": "botpress-platform-webchat__style__message-container___1cLJq",
		"info-line": "botpress-platform-webchat__style__info-line___2iX2w",
		"group": "botpress-platform-webchat__style__group___1GcAE",
		"bubble": "botpress-platform-webchat__style__bubble___eNt_J",
		"file": "botpress-platform-webchat__style__file___1q6sA",
		"specialAction": "botpress-platform-webchat__style__specialAction___2EaSP",
		"otherFile": "botpress-platform-webchat__style__otherFile___3yT-c",
		"user": "botpress-platform-webchat__style__user___2KjQ8",
		"loginPromptContainer": "botpress-platform-webchat__style__loginPromptContainer___SR5Cp",
		"loginInput": "botpress-platform-webchat__style__loginInput___jFL-7",
		"loginButton": "botpress-platform-webchat__style__loginButton___i7cOj",
		"typingGroup": "botpress-platform-webchat__style__typingGroup___3DxRA",
		"typingBubble": "botpress-platform-webchat__style__typingBubble___2VoUG",
		"typingAnimation": "botpress-platform-webchat__style__typingAnimation___A3b6N",
		"quickReplyContainer": "botpress-platform-webchat__style__quickReplyContainer___1iL8H",
		"filePicker": "botpress-platform-webchat__style__filePicker___LVaur"
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	
	var FileInput = React.createClass({
	  getInitialState: function() {
	    return {
	      value: '',
	      styles: {
	        parent: {
	          position: 'relative'
	        },
	        file: {
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          opacity: 0,
	          width: '100%',
	          zIndex: 1
	        },
	        text: {
	          position: 'relative',
	          zIndex: -1
	        }
	      }
	    };
	  },
	
	  handleChange: function(e) {
	    this.setState({
	      value: e.target.value.split(/(\\|\/)/g).pop()
	    });
	    if (this.props.onChange) this.props.onChange(e);
	  },
	
	  render: function() {
	    return React.DOM.div({
	        style: this.state.styles.parent
	      },
	
	      // Actual file input
	      React.DOM.input({
	        type: 'file',
	        name: this.props.name,
	        className: this.props.className,
	        onChange: this.handleChange,
	        disabled: this.props.disabled,
	        accept: this.props.accept,
	        style: this.state.styles.file
	      }),
	
	      // Emulated file input
	      React.DOM.input({
	        type: 'text',
	        tabIndex: -1,
	        name: this.props.name + '_filename',
	        value: this.state.value,
	        className: this.props.className,
	        onChange: function() {},
	        placeholder: this.props.placeholder,
	        disabled: this.props.disabled,
	        style: this.state.styles.text
	      }));
	  }
	});
	
	module.exports = FileInput;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _misc = __webpack_require__(50);
	
	var _style = __webpack_require__(51);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginPrompt = function (_Component) {
	  _inherits(LoginPrompt, _Component);
	
	  function LoginPrompt(props) {
	    _classCallCheck(this, LoginPrompt);
	
	    var _this = _possibleConstructorReturn(this, (LoginPrompt.__proto__ || Object.getPrototypeOf(LoginPrompt)).call(this, props));
	
	    _this.state = {
	      username: '',
	      password: ''
	    };
	    return _this;
	  }
	
	  _createClass(LoginPrompt, [{
	    key: 'handleChange',
	    value: function handleChange(field) {
	      var _this2 = this;
	
	      return function (e) {
	        _this2.setState(_defineProperty({}, field, e.target.value));
	      };
	    }
	  }, {
	    key: 'handleSubmit',
	    value: function handleSubmit(event) {
	      if (this.props.onLoginPromptSend) {
	        this.props.onLoginPromptSend(this.state.username, this.state.password);
	      }
	
	      event.preventDefault();
	    }
	  }, {
	    key: 'render_bot_active',
	    value: function render_bot_active() {
	      var buttonBackgroundColor = (0, _misc.hexToRGBA)(this.props.bgColor, 1);
	      var buttonTextColor = (0, _misc.hexToRGBA)(this.props.textColor, 1);
	
	      var fieldTextColor = (0, _misc.hexToRGBA)(this.props.bgColor, 0.7);
	      var usernameLineColor = (0, _misc.hexToRGBA)(this.props.bgColor, 0.07);
	      var passwordLineColor = (0, _misc.hexToRGBA)(this.props.bgColor, 0.07);
	
	      return _react2.default.createElement(
	        'form',
	        { className: _style2.default.loginPromptContainer, onSubmit: this.handleSubmit.bind(this) },
	        _react2.default.createElement(
	          'label',
	          null,
	          _react2.default.createElement('input', {
	            style: { 'border-bottom-color': usernameLineColor, color: fieldTextColor },
	            className: _style2.default.loginInput,
	            type: 'input',
	            placeholder: 'Username',
	            onChange: this.handleChange.call(this, 'username') })
	        ),
	        _react2.default.createElement(
	          'label',
	          null,
	          _react2.default.createElement('input', {
	            style: { 'border-bottom-color': passwordLineColor, color: fieldTextColor },
	            className: _style2.default.loginInput,
	            type: 'password',
	            placeholder: 'Password',
	            onChange: this.handleChange.call(this, 'password') })
	        ),
	        _react2.default.createElement('input', {
	          style: { 'background-color': buttonBackgroundColor, color: buttonTextColor },
	          className: _style2.default.loginButton,
	          type: 'submit',
	          value: 'Submit' })
	      );
	    }
	  }, {
	    key: 'render_bot_past',
	    value: function render_bot_past() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.specialAction },
	        _react2.default.createElement(
	          'p',
	          null,
	          '* Login form *'
	        )
	      );
	    }
	  }, {
	    key: 'render_user',
	    value: function render_user() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.specialAction },
	        _react2.default.createElement(
	          'p',
	          null,
	          '* Provided credentials *'
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.isBotMessage) {
	        return this.render_user();
	      }
	
	      if (this.props.isLastMessage) {
	        return this.render_bot_active();
	      }
	
	      return this.render_bot_past();
	    }
	  }]);
	
	  return LoginPrompt;
	}(_react.Component);
	
	exports.default = LoginPrompt;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _misc = __webpack_require__(50);
	
	var _style = __webpack_require__(51);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FileMessage = function (_Component) {
	  _inherits(FileMessage, _Component);
	
	  function FileMessage(props) {
	    _classCallCheck(this, FileMessage);
	
	    var _this = _possibleConstructorReturn(this, (FileMessage.__proto__ || Object.getPrototypeOf(FileMessage)).call(this, props));
	
	    _this.state = { hover: false };
	    return _this;
	  }
	
	  _createClass(FileMessage, [{
	    key: 'renderLocalFile',
	    value: function renderLocalFile() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.otherFile },
	        _react2.default.createElement(
	          'div',
	          null,
	          this.props.file.name,
	          ' (local)'
	        )
	      );
	    }
	  }, {
	    key: 'renderRemoteFile',
	    value: function renderRemoteFile() {
	      if (this.props.file && this.props.file.mime && this.props.file.mime.includes('image/')) {
	        return this.renderRemoteImage();
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.otherFile },
	        _react2.default.createElement(
	          'a',
	          { href: this.props.file.url },
	          this.props.file.name
	        )
	      );
	    }
	  }, {
	    key: 'renderRemoteImage',
	    value: function renderRemoteImage() {
	      return _react2.default.createElement(
	        'a',
	        { href: this.props.file.url, target: '_blank' },
	        _react2.default.createElement('img', { src: this.props.file.url, title: this.props.file.name })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.props);
	
	      if (this.props.file.storage !== 'local') {
	        return this.renderRemoteFile();
	      }
	
	      return this.renderLocalFile();
	    }
	  }]);
	
	  return FileMessage;
	}(_react.Component);
	
	exports.default = FileMessage;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=botpress-platform-webchat__[name]__[local]___[hash:base64:5]!../../../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".botpress-platform-webchat__style__external___1BNU9 * {\n  box-sizing: border-box;\n  outline: none; }\n\n.botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  border-left: 1px solid #ccc;\n  visibility: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K.botpress-platform-webchat__style__fullscreen___jVih9 {\n    visibility: visible; }\n  .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    height: 60px;\n    font-weight: 500;\n    border-bottom: 1px solid #ccc;\n    box-shadow: 0 1px 0.8rem rgba(0, 0, 0, 0.05);\n    padding: 0 1rem;\n    overflow: hidden; }\n    .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n      flex: 1 1 auto; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__line___26cWZ {\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__avatar___Fj3lF {\n          padding-left: 0;\n          overflow: hidden;\n          flex-shrink: 0;\n          width: 1.875rem;\n          height: 1.875rem; }\n          .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__avatar___Fj3lF .botpress-platform-webchat__style__picture___1PvOc {\n            border-radius: 50%;\n            background-size: cover;\n            background-position: 50%;\n            width: 100%;\n            height: 100%; }\n        .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__title___MJj5o {\n          padding-left: 10px;\n          overflow: hidden;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n          flex-direction: column;\n          -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n          -webkit-box-align: start;\n          -ms-flex-align: start;\n          align-items: flex-start;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; }\n          .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__title___MJj5o .botpress-platform-webchat__style__name___2gsld {\n            font-weight: 500;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis; }\n            .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__title___MJj5o .botpress-platform-webchat__style__name___2gsld .botpress-platform-webchat__style__unread___1Ms8n {\n              display: inline-block;\n              width: 20px;\n              height: 20px;\n              margin-left: 5px;\n              text-align: center;\n              vertical-align: top;\n              border-radius: 50%;\n              line-height: 20px;\n              font-size: 12px;\n              color: #fff;\n              background-color: #ff5d5d; }\n          .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__title___MJj5o .botpress-platform-webchat__style__status___J-Mqv {\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            font-size: .75rem;\n            font-weight: 500;\n            color: #9a9a9a;\n            vertical-align: middle;\n            margin-top: 0px; }\n            .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__title___MJj5o .botpress-platform-webchat__style__status___J-Mqv svg {\n              fill: #81d135;\n              height: 8px;\n              width: 8px;\n              margin-right: 3px; }\n    .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__icon___3-4NF {\n      color: #bbb;\n      margin-left: 22px;\n      text-align: right;\n      vertical-align: middle;\n      cursor: pointer; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__icon___3-4NF:hover {\n        color: #aaa; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__header___1urkm .botpress-platform-webchat__style__icon___3-4NF svg {\n        fill: currentColor; }\n  .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj {\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    min-height: 1px; }\n    .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ {\n      border-top-width: 1px;\n      border-top-style: solid;\n      border-top-color: #eee;\n      position: relative;\n      padding: .5rem 0 0;\n      transition: border 0.3s ease; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn textarea {\n          height: 43px;\n          width: 100%;\n          border: none;\n          font-size: 1rem;\n          resize: none;\n          line-height: 1.2;\n          padding: .75rem 1rem;\n          margin-bottom: .5rem;\n          background-color: transparent;\n          font: inherit; }\n        .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn .botpress-platform-webchat__style__line___26cWZ {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          padding: 0 1rem .75rem;\n          -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center; }\n          .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__elements___vP2lC {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            list-style-type: none;\n            margin: 0;\n            padding: 0; }\n            .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__elements___vP2lC li {\n              margin-left: 0;\n              display: inline-block;\n              margin-right: 1rem; }\n              .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__elements___vP2lC li a {\n                color: #ccc; }\n                .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__elements___vP2lC li a:hover {\n                  color: #aaa; }\n                .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__elements___vP2lC li a i {\n                  -webkit-box-align: center;\n                  -ms-flex-align: center;\n                  align-items: center; }\n                  .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__conversation___c85Kj .botpress-platform-webchat__style__bottom___1lsNX .botpress-platform-webchat__style__composer___IYeWQ .botpress-platform-webchat__style__flex-column___1e3hn .botpress-platform-webchat__style__line___26cWZ .botpress-platform-webchat__style__elements___vP2lC li a i svg {\n                    fill: currentColor; }\n  .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    overflow-y: auto;\n    overflow-x: hidden; }\n    .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk {\n      height: 4.7rem;\n      border-bottom: 1px solid #eee;\n      cursor: pointer;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk:hover {\n        background-color: #fafafa; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk .botpress-platform-webchat__style__left___3E1xu {\n        position: relative; }\n        .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__avatar___Fj3lF {\n          margin: 0 .8rem;\n          width: 3.125rem;\n          height: 3.125rem;\n          -ms-flex-negative: 0;\n          flex-shrink: 0; }\n          .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk .botpress-platform-webchat__style__left___3E1xu .botpress-platform-webchat__style__avatar___Fj3lF .botpress-platform-webchat__style__picture___1PvOc {\n            background-size: cover;\n            background-position: 50%;\n            border-radius: 50%;\n            width: 100%;\n            height: 100%; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk .botpress-platform-webchat__style__right___2li81 {\n        -webkit-box-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n        padding-right: 1rem;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n        flex-direction: column;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk .botpress-platform-webchat__style__right___2li81 .botpress-platform-webchat__style__title___MJj5o {\n          -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative; }\n          .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk .botpress-platform-webchat__style__right___2li81 .botpress-platform-webchat__style__title___MJj5o .botpress-platform-webchat__style__date___HhsxQ {\n            text-align: right;\n            font-size: .875rem;\n            color: #9a9a9a;\n            position: absolute;\n            right: 0; }\n        .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__list___3AhoU .botpress-platform-webchat__style__item___3h7Uk .botpress-platform-webchat__style__right___2li81 .botpress-platform-webchat__style__text___38Uzh {\n          font-size: .875rem;\n          color: #9a9a9a;\n          max-width: 15rem;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n  .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__emoji___1xld9 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    overflow: hidden;\n    max-height: 230px; }\n    .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__emoji___1xld9 .botpress-platform-webchat__style__inside___2-82Y {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n      background: #f8f8f8;\n      box-shadow: inset 0 5px 9px -3px rgba(0, 0, 0, 0.3); }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__emoji___1xld9 .botpress-platform-webchat__style__inside___2-82Y .emoji-mart {\n        width: 100% !important;\n        border: none;\n        border-radius: 0;\n        margin-top: 6px; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__emoji___1xld9 .botpress-platform-webchat__style__inside___2-82Y .emoji-mart-anchors {\n        background-color: #f8f8f8; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__emoji___1xld9 .botpress-platform-webchat__style__inside___2-82Y .emoji-mart-search input {\n        font-size: 14px; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__emoji___1xld9 .botpress-platform-webchat__style__inside___2-82Y .emoji-mart-scroll {\n        height: 146px; }\n      .botpress-platform-webchat__style__external___1BNU9 .botpress-platform-webchat__style__internal___2QK5K .botpress-platform-webchat__style__emoji___1xld9 .botpress-platform-webchat__style__inside___2-82Y .emoji-mart-category-label {\n        font-size: 12px; }\n\n.botpress-platform-webchat__style__fadeIn___3ow2P {\n  animation-name: botpress-platform-webchat__style__slideInRight___3SrSu;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-iteration-count: 1; }\n\n@keyframes botpress-platform-webchat__style__slideInRight___3SrSu {\n  0% {\n    visibility: visible;\n    transform: translateX(100%); }\n  100% {\n    transform: translateX(0);\n    visibility: visible; } }\n\n.botpress-platform-webchat__style__fadeOut___P1Cdp {\n  animation-name: botpress-platform-webchat__style__slideOutRight___3XL1L;\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  animation-iteration-count: 1; }\n\n@-webkit-keyframes botpress-platform-webchat__style__slideOutRight___3XL1L {\n  0% {\n    transform: translateX(0);\n    visibility: visible; }\n  100% {\n    visibility: hidden;\n    transform: translateX(100%); } }\n\n@keyframes botpress-platform-webchat__style__slideOutRight___3XL1L {\n  0% {\n    transform: translateX(0);\n    visibility: visible; }\n  100% {\n    visibility: hidden;\n    transform: translateX(100%); } }\n", ""]);
	
	// exports
	exports.locals = {
		"external": "botpress-platform-webchat__style__external___1BNU9",
		"internal": "botpress-platform-webchat__style__internal___2QK5K",
		"fullscreen": "botpress-platform-webchat__style__fullscreen___jVih9",
		"header": "botpress-platform-webchat__style__header___1urkm",
		"left": "botpress-platform-webchat__style__left___3E1xu",
		"line": "botpress-platform-webchat__style__line___26cWZ",
		"avatar": "botpress-platform-webchat__style__avatar___Fj3lF",
		"picture": "botpress-platform-webchat__style__picture___1PvOc",
		"title": "botpress-platform-webchat__style__title___MJj5o",
		"name": "botpress-platform-webchat__style__name___2gsld",
		"unread": "botpress-platform-webchat__style__unread___1Ms8n",
		"status": "botpress-platform-webchat__style__status___J-Mqv",
		"icon": "botpress-platform-webchat__style__icon___3-4NF",
		"conversation": "botpress-platform-webchat__style__conversation___c85Kj",
		"bottom": "botpress-platform-webchat__style__bottom___1lsNX",
		"composer": "botpress-platform-webchat__style__composer___IYeWQ",
		"flex-column": "botpress-platform-webchat__style__flex-column___1e3hn",
		"elements": "botpress-platform-webchat__style__elements___vP2lC",
		"list": "botpress-platform-webchat__style__list___3AhoU",
		"item": "botpress-platform-webchat__style__item___3h7Uk",
		"right": "botpress-platform-webchat__style__right___2li81",
		"date": "botpress-platform-webchat__style__date___HhsxQ",
		"text": "botpress-platform-webchat__style__text___38Uzh",
		"emoji": "botpress-platform-webchat__style__emoji___1xld9",
		"inside": "botpress-platform-webchat__style__inside___2-82Y",
		"fadeIn": "botpress-platform-webchat__style__fadeIn___3ow2P",
		"slideInRight": "botpress-platform-webchat__style__slideInRight___3SrSu",
		"fadeOut": "botpress-platform-webchat__style__fadeOut___P1Cdp",
		"slideOutRight": "botpress-platform-webchat__style__slideOutRight___3XL1L"
	};

/***/ })
/******/ ]);
//# sourceMappingURL=embedded.bundle.js.map