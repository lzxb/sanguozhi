var __importDefault =
    (this && this.__importDefault) ||
    function(mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
define([
    'require',
    'exports',
    './controller/city',
    './controller/person'
], function(require, exports, city_1, person_1) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    city_1 = __importDefault(city_1);
    person_1 = __importDefault(person_1);
    // 创建城市列表
    var cityArr = city_1.default.randomList(100);
    // 创建人物列表
    var personArr = person_1.default.randomList(cityArr, 100);
    console.log(personArr);
    var Test = /** @class */ (function() {
        function Test() {}
        return Test;
    })();
    exports.default = Test;
});
