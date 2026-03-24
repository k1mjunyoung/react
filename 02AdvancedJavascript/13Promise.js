// Promise: 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
// 대기(pending)
// 해결(resolve) -> 성공(fulfilled)
// 거부(reject) -> 실패(rejected)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수(executor)
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("숫자가 아닙니다.");
      }
    }, 1000);
  });

  return promise;
}

// then 메서드: Promise가 해결(resolve)되었을 때 실행되는 콜백 함수 등록
// promise.then((value) => {
//   console.log(value);
// });

// catch 메서드: Promise가 거부(reject)되었을 때 실행되는 콜백 함수 등록
// promise.catch((error) => {
//   console.error(error);
// });

// Promise 체이닝
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// const p = add10(0);
add10(0)
  .then((result) => {
    console.log(result); // 10

    // const newP = add10(result); // 콜백지옥
    // newP.then((newResult) => {
    //   console.log(newResult); // 20
    // });

    return add10(result); // Promise 체이닝: 새로운 Promise 반환
  })
  .then((result) => {
    console.log(result); // 20
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 30
    return add10(0);
  })
  .then((result) => {
    console.log(result); // 40
  })
  .catch((error) => {
    console.error(error);
  });
