// 반복문
for (let idx = 0; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 현재 반복을 건너뛰고 다음 반복으로 이동
  }

  console.log(idx);

  if (idx >= 5) {
    break; // 반복문을 완전히 종료
  }
}
