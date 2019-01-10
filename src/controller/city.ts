import Model from '../models/city';
import { randomNumber } from '../utils/random';
import Person from './person';

export default class City implements Model {
    /**
     * 随机创建城市
     */
    public static randomList = (num: number): City[] => {
        const list = [];
        for (let i = 0; i < num; i++) {
            let name = '';
            let len = randomNumber(5, 8);
            while (len--) {
                name += String.fromCharCode(65 + randomNumber(0, 25));
            }
            list.push(
                new City({
                    id: i + 1,
                    // 城市名称
                    name: name,
                    // 城市状态: 生产委任, 军事委任, 适应委任, 直辖
                    status: 2,
                    // 武将列表
                    peoples: [],
                    // 太守
                    satrap: null,
                    // 军师
                    counsellor: null,
                    // 人口
                    population: randomNumber(50000, 200000),
                    // 民忠
                    manChung: randomNumber(10, 40),
                    // 商业
                    business: randomNumber(300, 800),
                    // 粮草
                    commissariat: 500,
                    // 治水
                    waterControl: randomNumber(0, 10),
                    // 土地
                    land: randomNumber(10, 20),
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
    readonly id: number;
    // 城市名称
    name: string;
    // 城市状态: 生产委任, 军事委任, 适应委任, 直辖
    status: 0 | 1 | 2 | 3;
    // 武将列表
    peoples: Person[] = [];
    // 太守
    satrap: Person | null = null;
    // 军师
    counsellor: Person | null = null;
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
    public constructor(data: Model) {
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
    $addPerson(person: Person): void {
        if (this.peoples.includes(person)) return;
        this.peoples.push(person);
    }
}
