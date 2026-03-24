// 상수 객체
const animal = {
  type: "개",
  name: "뽀삐",
  color: "갈색",
};

// 상수 객체는 재할당이 불가능하지만, 객체의 속성은 변경할 수 있다.
animal.type = "고양이";
animal.name = "나비";
delete animal.color;

console.log(animal);

// 메서드
// 값이 함수인 프로퍼티
const person = {
  name: "홍길동",
  // 메서드 선언
  sayHi() {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  },
};

person.sayHi();
person["sayHi"]();
