// filter
// 기존 배열에서 특정 조건을 만족하는 요소들만 추출하여 새로운 배열을 만드는 메서드
let arr = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 30 },
];

let peopleIn30s = arr.filter((person) => person.age === 30);
console.log(peopleIn30s); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 30 }]

// map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 결과값을들 모아서 새로운 배열을 만드는 메서드
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult);

let names = arr.map((person) => person.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

// sort
// 배열을 사전순으로 정렬
let arr3 = [10, 2, 3]; // 숫자는 사전순으로 정렬되므로 10이 2보다 먼저 오게 된다.
arr3.sort((a, b) => {
  if (a > b) {
    return 1; // a가 b보다 크면 양수 반환 => a가 b보다 뒤에 오도록 정렬
  } else if (a < b) {
    return -1; // a가 b보다 작으면 음수 반환 => a가 b보다 앞에 오도록 정렬
  }
});
console.log(arr3);

// toSorted
// sort와 동일한 기능을 하지만 원본 배열을 변경하지 않고 정렬된 새로운 배열을 반환하는 메서드
let arr4 = ["c", "a", "b"];
const sortedArr = arr4.toSorted();
console.log(arr4);
console.log(sortedArr); // ["a", "b", "c"]

// join
// 배열의 모든 요소를 문자열로 변환하여 하나의 문자열로 합치는 메서드
let arr5 = ["Hello", "World"];
let joinedString = arr5.join("/");
console.log(joinedString); // "Hello World"
