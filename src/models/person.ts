export default class Person {
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
    public constructor(data: Person) {
        this.name = data.name;
        this.age = data.age;
        this.force = data.force;
        this.politics = data.politics;
        this.charm = data.charm;
        this.leadTroops = data.leadTroops;
        this.ambition = data.ambition;
    }
}
