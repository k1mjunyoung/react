// forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드입니다. 배열의 각 요소에 대해 콜백 함수를 실행합니다.
let arr = [1, 2, 3];

arr.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr);

// includes
// 배열이 특정 요소를 포함하고 있는지 여부를 확인하는 메서드입니다. 배열에 특정 값이 존재하는지 확인할 때 사용됩니다.
let fruits = ["apple", "banana", "orange"];
let isIncluded = fruits.includes("banana");
console.log(isIncluded); // true

// indexOf
// 배열에서 특정 요소의 첫 번째 인덱스를 반환하는 메서드입니다. 요소가 배열에 존재하지 않으면 -1을 반환합니다.
let numbers = [10, 20, 30, 30, 40];
let index = numbers.indexOf(30);
console.log(index); // 2

// findIndex
// 배열에서 모든 요소를 순회하면서 콜백함수를 만족하는 첫 번째 요소의 인덱스를 반환하는 메서드입니다. 만족하는 요소가 없으면 -1을 반환합니다.
let people = ["Alice", "Bob", "Charlie"];
const findedIndex = people.findIndex((person) => {
  if (person.startsWith("B")) {
    return true;
  }
});
console.log(findedIndex); // 1

// 객체 배열에서 특정 조건을 만족하는 요소의 인덱스를 찾을 때 유용합니다.
let objectArr = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
console.log(objectArr.indexOf({ name: "이정환" }));

const findedIndex2 = objectArr.findIndex((obj) => obj.name === "Bob");
console.log(findedIndex2); // 1

// find
// 모든 요소를 순회하면서 콜백함수를 만족하는 첫 번째 요소를 그대로 반환하는 메서드입니다. 만족하는 요소가 없으면 undefined를 반환합니다.
let finded = people.find((person) => {
  if (person.startsWith("B")) {
    return true;
  }
});
console.log(finded); // "Bob"
