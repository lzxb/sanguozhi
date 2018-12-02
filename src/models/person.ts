class Person {
  // 姓名
  name: string;
  // 年龄
  age: number;
  // 武力值
  force: number;
  public constructor(data: Person) {
    this.name = data.name;
    this.age = data.age;
    this.force = data.force;
  }
}
