// 스코프
let a = 1; // 전역 변수

function funcA() {
  console.log(a);
  let b = 2; // 지역 변수
}

funcA();
// console.log(b);

if (true) {
  let c = 3; // 지역 변수
}

// console.log(c);

for (let i = 0; i < 5; i++) {
  let d = i; // 지역 변수
}

// console.log(d);

function funcB() {
  function funcC() {
    // 지역 함수
    console.log("funcC");
  }
}

// console.log(funcC);

if (true) {
  function funcD() {
    console.log("funcD"); // 함수 선언문은 블록 레벨 스코프를 가지지 않음
  }
}

funcD(); // funcD는 전역 함수로 선언됨
