define(['require', 'exports', '../utils/random'], function(
    require,
    exports,
    random_1
) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var City = /** @class */ (function() {
        function City(data) {
            // 武将列表
            this.peoples = [];
            // 太守
            this.satrap = null;
            // 军师
            this.counsellor = null;
            this.id = data.id;
            this.name = data.name;
            this.status = data.status;
            this.population = data.population;
            this.manChung = data.manChung;
            this.business = data.business;
            this.commissariat = data.commissariat;
            this.waterControl = data.waterControl;
            this.land = data.land;
            this.farming = data.farming;
            this.bowArrow = data.bowArrow;
            this.armor = data.armor;
            this.steed = data.steed;
            this.warship = data.warship;
            this.sailingBoat = data.sailingBoat;
        }
        City.prototype.$addPerson = function(person) {
            if (this.peoples.includes(person)) return;
            this.peoples.push(person);
        };
        /**
         * 随机创建城市
         */
        City.randomList = function(num) {
            var list = [];
            for (var i = 0; i < num; i++) {
                var name_1 = '';
                var len = random_1.randomNumber(5, 8);
                while (len--) {
                    name_1 += String.fromCharCode(
                        65 + random_1.randomNumber(0, 25)
                    );
                }
                list.push(
                    new City({
                        id: i + 1,
                        // 城市名称
                        name: name_1,
                        // 城市状态: 生产委任, 军事委任, 适应委任, 直辖
                        status: 2,
                        // 武将列表
                        peoples: [],
                        // 太守
                        satrap: null,
                        // 军师
                        counsellor: null,
                        // 人口
                        population: random_1.randomNumber(50000, 200000),
                        // 民忠
                        manChung: random_1.randomNumber(10, 40),
                        // 商业
                        business: random_1.randomNumber(300, 800),
                        // 粮草
                        commissariat: 500,
                        // 治水
                        waterControl: random_1.randomNumber(0, 10),
                        // 土地
                        land: random_1.randomNumber(10, 20),
                        // 耕作
                        farming: 0,
                        // 弓弩
                        bowArrow: 15,
                        // 护甲
                        armor: 15,
                        // 战马
                        steed: 15,
                        // 战舰
                        warship: 15,
                        // 帆船
                        sailingBoat: 15
                    })
                );
            }
            return list;
        };
        return City;
    })();
    exports.default = City;
});
