import Person from './person';

export default interface City {
    id: number;
    // 城市名称
    name: string;
    // 城市状态: 生产委任, 军事委任, 适应委任, 直辖
    status: 0 | 1 | 2 | 3;
    // 武将列表
    peoples: Person[];
    // 太守
    satrap: Person | null;
    // 军师
    counsellor: Person | null;
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
}
