// Spread 연산자: 흩뿌리다, 펼치다
// 객체나 배열에 저장된 여러개의 값을 펼쳐서 개별적인 요소로 만들어주는 연산자
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2);

function funcA(a, b, c) {
  console.log(a, b, c);
}

funcA(...arr1);

// Rest 매개변수: 나머지
function funcB(one, ...args) {
  // rest 매개변수는 반드시 마지막에 위치해야 한다.
  console.log(one);
  console.log(args);
}

funcB(...arr1);
