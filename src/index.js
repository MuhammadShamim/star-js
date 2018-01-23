"use strict";

{/* <script type="text/javascript">
$('body').on('click', '.fullscreen', function(event){
    event.preventDefault();
    var panel = $(this).closest('div.card');
    var icon = $(this).find('i:first');
    icon.toggleClass('fa-window-maximize').toggleClass('fa-window-minimize');
    panel.toggleClass('star-card-fullscreen');
    setTimeout(function() {
        $(window).trigger('resize');
    }, 100);
});

$('#message-to-send').bind("enterKey",function(e){
$(".chat-history ul li").removeClass("msg-active");
$cmd = $('#message-to-send');

$timeStamp = new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
$user = 'APEX_PUBLIC_USER'
$list = $('.chat-history ul');

$list.append('<li class="clearfix msg-active"><div class="message-data align-right"><span class="message-data-time" > ' + $timeStamp + '</span> &nbsp; &nbsp;<span class="message-data-name-me" > ' + $user + ' </span> <i class="fa fa-circle me"></i></div><div class="message other-message float-right"> ' + $cmd.val() + '</div></li>');
$list.append( '<li class="message-data-typing msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' + $timeStamp + '</span></div><i class="fa fa-circle online"></i><i class="fa fa-circle online" style="color: #7CB6E8"></i><i class="fa fa-circle online" style="color:#0275D8"></i></li>');

switch ( $cmd.val().toUpperCase() ) {
    case "LOGIN":
                    $('#message-to-send').attr('type','password')
        break;
    case "LOGOUT":
                $.post( "apex_authentication.logout?p_app_id=2020&p_session_id=5658628967473" );
        break;
    case "CLS":
    case "CLEAR":
        $(".chat-history ul li").remove();
        break;
    default:
        if( $cmd.val().substring(0,3).toUpperCase() == "@INV" ) {
            $list.append('<li class="msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' +  $timeStamp + '</span></div><div id="tmpdata" class="message my-message"></div></li>');                                 
            console.log( 'f?p=2020:4:5658628967473::::P4_NEW:' + $cmd.val().substring(8) + ' form' );
            $("#tmpdata").load('f?p=2020:4:5658628967473::::P4_NEW:' + $cmd.val().substring(8) + ' form')
            $('.message-data-typing').remove();
        }

        else if( $cmd.val().substring(0,4).toUpperCase() == "STAR" ) {
            $list.append('<li class="msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' +  $timeStamp + '</span></div><div class="message my-message"> Star 2017</div></li>');
            $('.message-data-typing').remove();
            console.log('success');
        }
        else {
            apex.server.process(
            'PR_USER_CMD'
            , { x01: $cmd.val() }
            , { dataType: 'text'
                , async: true
                , beforeSend: function(){
                    console.log('Before Send')
                }
                , success: function(data) {                      
                    $list.append('<li class="msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' +  $timeStamp + '</span></div><div class="message my-message"> ' + data + '</div></li>');                     
                    console.log('success');
                }
                , complete: function(){
                    $('.message-data-typing').remove();
                    console.log('complete');
                }
            });
        }
        
        break;
    //End Switch
}
$cmd.val( '' );
if( $list.html() ) {
    localStorage.lsStarChatHistory = $list.html();
}
$('html, body').animate({scrollTop:$(document).height()}, 'slow');
});

$('#message-to-send').keydown(function(e){
if(e.keyCode == 13) {    
    event.preventDefault();
    $(this).trigger("enterKey");
}
if(e.keyCode == 38) {    
    event.preventDefault();
    $(this).trigger("enterKey");
}
});

$(document).on('click','.star-cmd, .other-message',function(e){
$('#message-to-send').val( $(this).html() );
$('#message-to-send').trigger("enterKey");
});

//Document is Ready
$( document ).ready(function() {
console.log( "Star: Checking Local Storage" );
if (typeof(Storage) !== "undefined") {
    console.log( "Hello, Star!" );
    $('.chat-history ul').append(localStorage.lsStarChatHistory);
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
} else {
    console.log( "Sorry Local storage is not supported by your browser. Please upgrade your browserPlease contact Akhtar" );
}
});
</script> */}

// import {init, next} from './app.js';
// init();
// next();

// import * as app from './app.js';
// import {print_to_console} from './functions/print_to_console.js';
// print_to_console('Hello Star by print_to_console from index.js');
//Not available outside webpack

//Global availibility in index.html or say outside webpack
// window.log = print_to_console;

// app.init();
// app.next();

// alternative to DOMContentLoaded
// document.onreadystatechange = () => {
//     if (document.readyState == 'interactive') {
//         log('Document is ready')
//     }
// }

/*
let log = require('./print_to_console.js');
let nvl = require('./nvl.js');
let report = require('./data_report.js');

((window)=>{
    // 'use strict';
    let define_Star = () => {
        let Star = {}

        Star.log = log

        Star.nvl = nvl
        
        Star.report = report

        return Star
    }
    //define globally if it doesn't already exist
    if(typeof(Star) === 'undefined'){
        window.Star = define_Star()
    }
})(window)
*/