// Date
let date = new Date();
console.log(date);

let date2 = new Date("2020-01-01/10:10:10");
console.log(date2);

let date3 = new Date(2020, 0, 1, 10, 10, 10);
console.log(date3);

// Timestamp
// 특정 시간이 1970년 1월 1일 00:00:00(UTC)로부터 몇 초가 지났는지 나타내는 숫자
let timestamp = date.getTime();
console.log(timestamp);

let date4 = new Date(timestamp);
console.log(date4);

// Date Methods
console.log(date.getFullYear());
console.log(date.getMonth()); // 0부터 시작하므로 0이 1월, 1이 2월, ..., 11이 12월
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// Date Methods - Setters
date.setFullYear(2022);
date.setMonth(11);
date.setDate(25);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(0);
console.log(date);

// Date Methods - Formatting
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toTimeString());
