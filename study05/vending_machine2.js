var drinks = [
  { name: "콜라", price: 500, qty: 10 },
  { name: "사이다", price: 600, qty: 1 },
  { name: "환타", price: 800, qty: 5 },
];

var myDrink = '콜라';
var myMoney = 200;
var canBuyDrinks = [];
var remainMoney = 0; // 구매 후 잔액
var isBuy = false; // 구매 여부
var isEmpty = false; // 품절 여부
var myDrinkIndex = -1; // 내가 선택한 음료의 index


console.log("====== My Vending Machine Drinks List =======\n");

// 자판기의 음료 종류 | 금액 | 수량을 출력하자!
for (var i = 0; i < drinks.length; i++) {
  var d = drinks[i];
  console.log(`${d.name} / $${d.price} ${d.qty === 0 ? '품절' : `[수량:${d.qty}]`}\n`);

  // 주문 가능한 음료를 따로 저장해 놓자!
  if(d.qty > 0 && myMoney >= d.price) {
    canBuyDrinks.push(d.name);
  }

  /**
   * 자판기에 돈을 넣었어요~
   * 0. 품절
   *
   * 1. 현재 loop 돌고 있는 음료를 선택 했을 때
   *  1-1) 잔액이 부족합니다.
   *  1-2) 똑떨어질 때
   *  1-3) 잔액이 남았을 때
   *
   * 2. 음료를 선택 안했을 때
   *  2-1) 주문 가능여부 표시
   */

  // 0. 품절
  if (d.qty === 0) {
    continue;
  }
  // 1. 음료를 선택 했을 때
  else if (myDrink) {
    // 이 음료 맞아?
    if(myDrink === d.name) {
      // 이 음료가 내 음료 입니다~!
      myDrinkIndex = i;
      // 잔액 계산부터 하자~
      remainMoney = myMoney - d.price;

      // 돈은 충분해?
      if(remainMoney >= 0) {
        isBuy = true; // 샀다!!!
      }
    }
  }
} // end of for

console.log(`투입금액: ${myMoney}`);
if(myDrink) {
  console.log(`선택음료: ${myDrink}`);
  
  // 샀냐?
  if(isBuy) {
    console.log(`${myDrink} 가 나왔습니다. 잔액은 ${remainMoney} 입니다.`);
    console.log(`${myDrink} 남은 수량: ${drinks[myDrinkIndex].qty - 1}`);
  } 
  // 못샀다! 돈이 모지란다!
  else if(remainMoney < 0) {
    console.log(`잔액이 ${remainMoney * -1}원 부족하여 ${myDrink}을(를) 주문할 수 없습니다.`);
  }
} else {
  // 선택 가능한 음료를 보여주자! 선택 가능한 음료가 하나도 없으면 니 돈이 부족한거야!!!
  if(canBuyDrinks.length === 0) {
    console.log('돈이 부족해서 아무것도 살 수 없어요~~ 수돗가로 가세요~');
  } else {
    console.log(`주문 가능한 음료: ${canBuyDrinks}. 음료를 선택해 주세요.`);
  }
}
