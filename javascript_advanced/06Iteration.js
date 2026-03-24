// 배열 순회
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of 반복문 -> 배열의 요소를 순회
for (let item of arr) {
  console.log(item);
}

// 객체 순회
let person = {
  name: "Alice",
  age: 30,
  hobby: "reading",
};

// Object.keys() 메서드로 객체의 키를 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// Object.values() 메서드로 객체의 값을 배열로 반환
let velues = Object.values(person);
console.log(velues);

for (let value of velues) {
  console.log(value);
}

// for in 반복문 -> 객체의 키를 순회
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
