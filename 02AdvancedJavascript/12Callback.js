// 음식 주문
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 2000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `${food} (식은)`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const frozenFood = `${food} (냉동됨)`;
    callback(frozenFood);
  }, 2000);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (frozenFood) => {
      // 콜백 지옥 -> Promise로 해결
      console.log(frozenFood);
    });
  });
});
