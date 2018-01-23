import {print_to_console} from './print_to_console.js';

let validate_local_storage = () => {
    print_to_console('Start','Verify Local Storage')
    if (typeof(Storage) !== "undefined") {
        print_to_console('Local Storage is available')
    } else {
        print_to_console(`
            Sorry Local storage is not supported by your browser.
            Please upgrade your browser or contact Akhtar
        `)
        // Terminate Program here
    }
    print_to_console('End','Verify Local Storage')
}

export {validate_local_storage};