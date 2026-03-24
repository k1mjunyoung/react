// 객체 생성
let obj1 = new Object(); // 객체 생성자 함수 사용
let obj2 = {}; // 주로 객체 리터럴 사용

// 객체 프로퍼티(속성)
let person = {
  name: "Alice",
  age: 30,
  hobby: "listening",
  greet: function () {
    console.log("Hello, I'm " + this.name);
  },
};

// 객체 프로퍼티 접근
console.log(person.name); // 점 표기법
console.log(person["age"]); // 괄호 표기법
let property = "hobby";
console.log(person[property]); // 변수로 접근

// 객체 프로퍼티 추가
person.job = "developer";
person["favoriteColor"] = "blue";
console.log(person);

// 객체 프로퍼티 수정
person.age = 31;
person["hobby"] = "reading";
console.log(person);

// 객체 프로퍼티 삭제
delete person.job;
delete person["favoriteColor"];
console.log(person);

// 객체 프로퍼티 존재 유무 확인
let result1 = "name" in person; // true
console.log(result1);
