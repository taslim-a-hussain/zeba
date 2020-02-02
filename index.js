'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/zeba.min.js');
} else {
    module.exports = require('./dist/zeba.js');
}