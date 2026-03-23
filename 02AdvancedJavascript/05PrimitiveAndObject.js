// 원시타입: 불변값(immutable value) 메모리 값 수정 X
// 객체타입: 가변값(mutable value) 메모리 값 수정 O, Side effect 발생 가능 -> Spread 연산자로 복사하여 사용(깊은 복사)
// o1 === o2 -> 얕은 비교(참조값을 기준으로 비교)
// JSON.stringify(o1) === JSON.stringify(o2) -> 깊은 비교(객체를 문자열로 변환하여 비교)
