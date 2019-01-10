import City from './controller/city';
import Person from './controller/person';

// 创建城市列表
const cityArr = City.randomList(100);
// 创建人物列表
const personArr = Person.randomList(cityArr, 100);
console.log(personArr);

class Test {}
export default Test;
