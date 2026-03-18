// 함수 표현식 (Function Expression)
// 호이스팅 : 함수 선언문은 호이스팅이 발생하여 함수 선언 이전에도 호출이 가능하지만, 함수 표현식은 호이스팅이 발생하지 않아 함수 표현식 이전에는 호출이 불가능함
function funcA() {
  console.log("function a");
}

let varA = funcA; // 함수는 일급 객체이므로 변수에 할당 가능
console.log(varA);
varA(); // 변수에 할당된 함수를 호출

let varB = function () {
  // 익명 함수
  console.log("function b");
};

varB(); // 익명 함수는 함수 이름이 없으므로, 변수에 할당된 함수를 호출해야 함
// funcB(); // ReferenceError: funcB is not defined, 함수 이름은 함수 내부에서만 유효

// 화살표함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10)); // 4
