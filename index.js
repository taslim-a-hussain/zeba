'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/zeba.min.js');
} else {
    module.exports = require('./dist/zeba.js');
}

const str = require('./src/zeba');

let input = '    this    is the     input.';

input = new str(input).fullTrim().capitilize();

console.log(input.string);