// 활용 사례
function printName(person) {
  if (!person) {
    // not person -> person이 falsy한 값이면
    console.log("person의 값이 없음");
    return;
  }

  console.log(person.name);
}

let person;
printName(person); // TypeError: Cannot read property 'name' of undefined
