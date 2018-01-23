"use strict";

import {print_to_console} from './library/print_to_console.js';
import {scroll_page_to_bottom} from './library/scroll_page_to_bottom.js';
import {load_chat_history} from './library/load_chat_history.js';

print_to_console('Hello, Star!');

document.onreadystatechange = () => {
    if (document.readyState == 'interactive') {
        print_to_console('Document is ready')
        
        print_to_console('Start Verify Local Storage')
        if (typeof(Storage) !== "undefined") {
            print_to_console('Local Storage is available')
        } else {
            print_to_console(`
                Sorry Local storage is not supported by your browser.
                Please upgrade your browser or contact Akhtar
            `)
            // Terminate Program here
        }
        print_to_console('End Verify Local Storage')
        load_chat_history()
        scroll_page_to_bottom()
    }
}