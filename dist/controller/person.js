define(['require', 'exports', '../utils/random'], function(
    require,
    exports,
    random_1
) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var Person = /** @class */ (function() {
        function Person(data) {
            this.id = data.id;
            this.name = data.name;
            this.age = data.age;
            this.force = data.force;
            this.politics = data.politics;
            this.charm = data.charm;
            this.leadTroops = data.leadTroops;
            this.ambition = data.ambition;
            this.city = data.city;
            this.visible = data.visible;
            console.log(this.city);
            this.city.$addPerson(this);
        }
        /**
         * 随机创建人物
         */
        Person.randomList = function(cityArr, num) {
            if (cityArr.length <= 0) {
                throw new Error('city list cannot be empty');
            }
            var list = [];
            for (var i = 0; i < num; i++) {
                var name_1 = '';
                var len = random_1.randomNumber(5, 8);
                while (len--) {
                    name_1 += String.fromCharCode(
                        65 + random_1.randomNumber(0, 25)
                    );
                }
                var city =
                    cityArr[random_1.randomNumber(0, cityArr.length - 1)];
                list.push(
                    new Person({
                        id: i + 1,
                        name: name_1,
                        // 年龄
                        age: random_1.randomNumber(16, 100),
                        // 武力值
                        force: random_1.randomNumber(1, 100),
                        // 政治
                        politics: random_1.randomNumber(1, 100),
                        // 魅力
                        charm: random_1.randomNumber(1, 100),
                        // 领兵
                        leadTroops: random_1.randomNumber(1, 100),
                        // 野心
                        ambition: random_1.randomNumber(1, 100),
                        // 所在城市
                        city: city,
                        // 是否可见
                        visible: false
                    })
                );
            }
            return list;
        };
        return Person;
    })();
    exports.default = Person;
});
