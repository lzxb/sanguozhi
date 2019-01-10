import Person from './person';

// https://juejin.im/post/5c2f87ce5188252593122c98
export default class City {
    // 城市状态: 生产委任, 军事委任, 适应委任, 直辖
    status: 0 | 1 | 2 | 3;
    // 武将列表
    officials: Person[];
    // 太守
    satrap: Person;
    // 军师
    counsellor: Person;
    // 人口
    population: number;
    // 民忠
    manChung: number;
    // 商业
    business: number;
    // 粮草
    commissariat: number;
    // 治水
    waterControl: number;
    // 土地
    land: number;
    // 耕作
    farming: number;

    // 弓弩
    bowArrow: number;
    // 护甲
    armor: number;
    // 战马
    steed: number;
    // 战舰
    warship: number;
    // 帆船
    sailingBoat: number;
    constructor(options: City) {
        this.status = options.status;
        this.officials = options.officials;
        this.satrap = options.satrap;
        this.counsellor = options.counsellor;
        this.population = options.population;
        this.manChung = options.manChung;
        this.business = options.business;
        this.commissariat = options.commissariat;
        this.waterControl = options.waterControl;
        this.land = options.land;
        this.farming = options.farming;
        this.bowArrow = options.bowArrow;
        this.armor = options.armor;
        this.steed = options.steed;
        this.warship = options.warship;
        this.sailingBoat = options.sailingBoat;
    }
}
