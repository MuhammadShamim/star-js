import {print_to_console} from './print_to_console.js';

let load_chat_history = () => {
    print_to_console('Start Chat History from Local Storage')
    $('.chat-history ul').append(localStorage.lsStarChatHistory)
    print_to_console('End Chat History from Local Storage')
}
export {load_chat_history};