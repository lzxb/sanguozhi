define(['require', 'exports'], function(require, exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.randomNumber = function(n, m) {
        var c = m - n + 1;
        return Math.floor(Math.random() * c + n);
    };
    /**
     * 随机年龄
     */
    exports.randomAge = function() {
        return exports.randomNumber(16, 100);
    };
});
