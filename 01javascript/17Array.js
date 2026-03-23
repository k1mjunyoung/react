// 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 주로 배열 리터럴
let arrC = [
  1,
  2,
  3,
  true,
  null,
  undefined,
  "Hello",
  [4, 5, 6],
  { name: "John", age: 30 },
  () => console.log("Hello, World!"),
];
console.log(arrC);

// 배열 요소 접근
console.log(arrC[0]);
console.log(arrC[8]);

arrC[0] = 10; // 배열 요소 수정
console.log(arrC[0]);
