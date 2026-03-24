// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  // 기본값
  return a * b;
}

// CommonJS 방식으로 모듈을 내보내는 방법
// module.exports = {
//   // add: add,
//   // sub: sub,
//   add,
//   sub,
// };

// ES6 방식으로 모듈을 내보내는 방법
// export { add, sub };
