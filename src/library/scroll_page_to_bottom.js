import {print_to_console} from './print_to_console.js';

let scroll_page_to_bottom = () => {
    print_to_console('Start Scroll Page to bottom')
    $('html, body').animate({scrollTop:$(document).height()}, 'slow')
    print_to_console('End Scroll Page to bottom')            
}
export {scroll_page_to_bottom};