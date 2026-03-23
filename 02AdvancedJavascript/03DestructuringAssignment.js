// 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [a, b, c, d = 9] = arr;
console.log(a, b, c, d); // 1 2 3 9

// 객체의 구조 분해 할당
let person = { name: "Lee", age: 20, hobby: "tennis" };
let { name, age, hobby, address = "Seoul" } = person;
console.log(name, age, hobby, address); // Lee 20 tennis Seoul

// 객체 구조 분호 할당을 이용해서 함수의 매개변수 받는 방법
const func = ({ name, age, hobby, address }) => {
  console.log(name, age, hobby, address);
};

func(person);
