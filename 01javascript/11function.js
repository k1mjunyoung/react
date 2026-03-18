// 함수 선언
function greeting() {
  console.log("Hello, World!");
}

// 함수 호출
greeting();

//////////////////////////////////////////

// 호이스팅
// 함수 선언문은 호이스팅이 발생하여, 함수 선언 이전에도 호출이 가능
console.log(getArea(10, 20));

function getArea(width, height) {
  function another() {
    // 중첩함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
