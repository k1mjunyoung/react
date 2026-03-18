// 콜백함수
// 나중에 실행되는
function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

function sub() {
  console.log("I am sub");
}

main(sub);

main(() => {
  console.log("I am sub");
});

// 콜백함수 활용
function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, (i) => {
  console.log(i);
});

// function repeatDouble(count) {
//   for (let i = 1; i <= count; i++) {
//     console.log(i * 2);
//   }
// }

repeat(5, (i) => {
  console.log(i * 2);
});
