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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var print_to_console = function print_to_console() {
	var _console;

	(_console = console).log.apply(_console, arguments);
};
exports.print_to_console = print_to_console;
// same as above
// module.exports = print_to_console

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _print_to_console = __webpack_require__(0);

var _validate_local_storage = __webpack_require__(2);

var _load_chat_history = __webpack_require__(3);

var _scroll_page_to_bottom = __webpack_require__(4);

(0, _print_to_console.print_to_console)('Hello, Star!');

document.onreadystatechange = function () {
    if (document.readyState == 'interactive') {
        (0, _print_to_console.print_to_console)('Document is ready');
        (0, _validate_local_storage.validate_local_storage)();
        (0, _load_chat_history.load_chat_history)();
        (0, _scroll_page_to_bottom.scroll_page_to_bottom)();
        (0, _print_to_console.print_to_console)('Set focus to Message box');
        $('#message-to-send').focus();
    }
};

$(document).on('click', '.star-cmd, .other-message', function (e) {
    $('#message-to-send').val($(this).html());
    $('#message-to-send').trigger("enterKey");
});

$('#message-to-send').keydown(function (e) {
    if (e.keyCode == 13) {
        event.preventDefault();
        $(this).trigger("enterKey");
    }
    if (e.keyCode == 38) {
        event.preventDefault();
        $(this).trigger("enterKey");
    }
});

$('#message-to-send').bind("enterKey", function (e) {
    $(".chat-history ul li").removeClass("msg-active");
    var $cmd = $('#message-to-send');

    var $timeStamp = new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    var $user = 'Akhtar Shamim';
    var $list = $('.chat-history ul');

    $list.append('<li class="clearfix msg-active"><div class="message-data align-right"><span class="message-data-time" > ' + $timeStamp + '</span> &nbsp; &nbsp;<span class="message-data-name-me" > ' + $user + ' </span> <i class="fa fa-circle me"></i></div><div class="message other-message float-right"> ' + $cmd.val() + '</div></li>');
    $list.append('<li class="message-data-typing msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' + $timeStamp + '</span></div><i class="fa fa-circle online"></i><i class="fa fa-circle online" style="color: #7CB6E8"></i><i class="fa fa-circle online" style="color:#0275D8"></i></li>');

    switch ($cmd.val().toUpperCase()) {
        case "LOGIN":
            $('#message-to-send').attr('type', 'password');
            break;
        case "LOGOUT":
            $.post("apex_authentication.logout?p_app_id=2020");
            break;
        case "CLS":
        case "CLEAR":
            $(".chat-history ul li").remove();
            break;
        case "DELETE CHAT HISTORY":
            $(".chat-history ul li").remove();
            localStorage.removeItem("lsStarChatHistory");
            break;
        default:
            if ($cmd.val().substring(0, 3).toUpperCase() == "@INV") {
                $list.append('<li class="msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' + $timeStamp + '</span></div><div id="tmpdata" class="message my-message"></div></li>');
                console.log('f?p=2020:4:5658628967473::::P4_NEW:' + $cmd.val().substring(8) + ' form');
                $("#tmpdata").load('f?p=2020:4:5658628967473::::P4_NEW:' + $cmd.val().substring(8) + ' form');
                $('.message-data-typing').remove();
            } else if ($cmd.val().substring(0, 4).toUpperCase() == "STAR") {
                $list.append('<li class="msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' + $timeStamp + '</span></div><div class="message my-message"> Star 2017</div></li>');
                $('.message-data-typing').remove();
                console.log('success');
            } else {
                apex.server.process('PR_USER_CMD', { x01: $cmd.val() }, { dataType: 'text',
                    async: true,
                    beforeSend: function beforeSend() {
                        console.log('Before Send');
                    },
                    success: function success(data) {
                        $list.append('<li class="msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' + $timeStamp + '</span></div><div class="message my-message"> ' + data + '</div></li>');
                        console.log('success');
                    },
                    complete: function complete() {
                        $('.message-data-typing').remove();
                        console.log('complete');
                    }
                });
            }
            break;
        //End Switch
    }
    $cmd.val('');
    if ($list.html()) {
        localStorage.lsStarChatHistory = $list.html();
    }
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate_local_storage = undefined;

var _print_to_console = __webpack_require__(0);

var validate_local_storage = function validate_local_storage() {
    (0, _print_to_console.print_to_console)('Start', 'Verify Local Storage');
    if (typeof Storage !== "undefined") {
        (0, _print_to_console.print_to_console)('Local Storage is available');
    } else {
        (0, _print_to_console.print_to_console)('\n            Sorry Local storage is not supported by your browser.\n            Please upgrade your browser or contact Akhtar\n        ');
        // Terminate Program here
    }
    (0, _print_to_console.print_to_console)('End', 'Verify Local Storage');
};

exports.validate_local_storage = validate_local_storage;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.load_chat_history = undefined;

var _print_to_console = __webpack_require__(0);

var load_chat_history = function load_chat_history() {
    (0, _print_to_console.print_to_console)('Start Chat History from Local Storage');
    $('.chat-history ul').append(localStorage.lsStarChatHistory);
    (0, _print_to_console.print_to_console)('End Chat History from Local Storage');
};
exports.load_chat_history = load_chat_history;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scroll_page_to_bottom = undefined;

var _print_to_console = __webpack_require__(0);

var scroll_page_to_bottom = function scroll_page_to_bottom() {
    (0, _print_to_console.print_to_console)('Start', ' Scroll Page to bottom');
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
    (0, _print_to_console.print_to_console)('End', 'Scroll Page to bottom');
};
exports.scroll_page_to_bottom = scroll_page_to_bottom;

/***/ })
/******/ ]);