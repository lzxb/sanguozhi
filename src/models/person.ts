import City from './city';

export default interface Person {
    id: number;
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
}
