"use strict";

import {print_to_console} from './library/print_to_console.js';
import {validate_local_storage} from './library/validate_local_storage.js';
import {load_chat_history} from './library/load_chat_history.js';
import {scroll_page_to_bottom} from './library/scroll_page_to_bottom.js';

print_to_console('Hello, Star!');

document.onreadystatechange = () => {
    if (document.readyState == 'interactive') {
        print_to_console('Document is ready')
        validate_local_storage()
        load_chat_history()
        scroll_page_to_bottom()     
        print_to_console('Set focus to Message box')           
        $('#message-to-send').focus()
    }
}

$(document).on('click','.star-cmd, .other-message',function(e){
    $('#message-to-send').val( $(this).html() );
    $('#message-to-send').trigger("enterKey");
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

$('#message-to-send').bind("enterKey",function(e){
    $(".chat-history ul li").removeClass("msg-active");
    let $cmd = $('#message-to-send');

    let $timeStamp = new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    let $user = 'Akhtar Shamim'
    let $list = $('.chat-history ul');

    $list.append('<li class="clearfix msg-active"><div class="message-data align-right"><span class="message-data-time" > ' + $timeStamp + '</span> &nbsp; &nbsp;<span class="message-data-name-me" > ' + $user + ' </span> <i class="fa fa-circle me"></i></div><div class="message other-message float-right"> ' + $cmd.val() + '</div></li>');
    $list.append( '<li class="message-data-typing msg-active"><div class="message-data"><span class="message-data-name"><i class="fa fa-circle online"></i> Star</span><span class="message-data-time">' + $timeStamp + '</span></div><i class="fa fa-circle online"></i><i class="fa fa-circle online" style="color: #7CB6E8"></i><i class="fa fa-circle online" style="color:#0275D8"></i></li>');
    
    switch ( $cmd.val().toUpperCase() ) {
        case "LOGIN":
            $('#message-to-send').attr('type','password')
            break;
        case "LOGOUT":
            $.post( "apex_authentication.logout?p_app_id=2020" );
            break;
        case "CLS":
        case "CLEAR":
            $(".chat-history ul li").remove();
            break;
        case "DELETE CHAT HISTORY":
            $(".chat-history ul li").remove();
            localStorage.removeItem("lsStarChatHistory")
            break
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