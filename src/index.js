"use strict";
//Import required modules
import {print_to_console} from './functions/print_to_console.js';
print_to_console('Hello Star by print_to_console from index.js');
//Not available outside webpack

//Global availibility in index.html or say outside webpack
window.log = print_to_console;

// alternative to DOMContentLoaded
document.onreadystatechange = () => {
    if (document.readyState == 'interactive') {
        log('Document is ready')
    }
}

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