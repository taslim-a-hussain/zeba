'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/zeba.min.js');
} else {
    module.exports = require('./dist/zeba.js');
}


const str = require('./dist/zeba.min');


let text = '  this is     the text.';
    text = new str(text).fullTrim('-');
    console.log(text.string);