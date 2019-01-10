import Model from '../models/person';
import { randomNumber } from '../utils/random';
import City from './city';

export default class Person implements Model {
    /**
     * 随机创建人物
     */
    public static randomList = (cityArr: City[], num: number): Person[] => {
        if (cityArr.length <= 0) {
            throw new Error(`city list cannot be empty`);
        }
        const list = [];
        for (let i = 0; i < num; i++) {
            let name = '';
            let len = randomNumber(5, 8);
            while (len--) {
                name += String.fromCharCode(65 + randomNumber(0, 25));
            }
            const city: City = cityArr[randomNumber(0, cityArr.length - 1)];
            list.push(
                new Person({
                    id: i + 1,
                    name: name,
                    // 年龄
                    age: randomNumber(16, 100),
                    // 武力值
                    force: randomNumber(1, 100),
                    // 政治
                    politics: randomNumber(1, 100),
                    // 魅力
                    charm: randomNumber(1, 100),
                    // 领兵
                    leadTroops: randomNumber(1, 100),
                    // 野心
                    ambition: randomNumber(1, 100),
                    // 所在城市
                    city,
                    // 是否可见
                    visible: false
                })
            );
        }
        return list;
    };
    readonly id: number;
    // 姓名
    name: string;
    // 年龄
    age: number;
    // 武力值
    force: number;
    // 政治
    politics: number;
    // 魅力
    charm: number;
    // 领兵
    leadTroops: number;
    // 野心
    ambition: number;
    // 所在城市
    city: City;
    // 是否可见
    visible: boolean;
    constructor(data: Person) {
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
}
