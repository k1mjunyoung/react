// 단락 평가
function returnFalse() {
  console.log("returnFalse");
  return false;
}

function returnTrue() {
  console.log("returnTrue");
  return 10;
}

console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
// function printName(person) {
//   if (!person) {
//     // not person -> person이 falsy한 값이면
//     console.log("person의 값이 없음");
//     return;
//   }
//   console.log(person.name);
// }

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "Lee" }); // Lee
