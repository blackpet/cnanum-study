/**
 * TODO 
 * --DONE-- 1. 주문 완료 시 수량 차감
 * --DONE-- 2. 주문 음료가 품절일 시 처리
 * 
 */

var drinks = [
  { name: "콜라", price: 500, qty: 0 },
  { name: "사이다", price: 600, qty: 1 },
  { name: "환타", price: 800, qty: 0 },
];

var myDrink = '콜라';
var myMoney = 600;

// 투입한 금액 표시!
// 선택한 음료가 있을 경우! 주문 메세지도 출력!
console.log(
  `${myMoney}원을 ${
    myDrink ? `넣고 ${myDrink}를 주문하였습니다.` : "넣었습니다."
  }\n`
);

console.log("====== My Vending Machine Drinks List =======");

// 자판기의 음료 종류 | 금액 | 수량을 출력하자!
for (var i = 0; i < drinks.length; i++) {
  var d = drinks[i];
  console.log(`${d.name} / $${d.price} [수량:${d.qty}]`);

  // 주문 가능!!
  if (myMoney >= d.price) {
    // 선택한 음료가 없으면!
    if (!myDrink) {
      console.log("주문 가능한 음료");
    }
    // 이 음료를 선택했니?
    if (myDrink === d.name) {
        // 품절이냐?
        if(d.qty === 0) {
            console.log(`안타깝네요~ 주문하신 ${myDrink}는(은) 품절되었습니다.`);
            console.log("돈은 고스란히 돌려드립니다.\n");

            continue;
        }
      console.log(`${myDrink} 가 나옵니다!`);
      console.log(`남은 수량: ${d.qty-1 === 0 ? '품절되었습니다. 당신은 럭키가이~' : d.qty-1}`)
      if (myMoney > d.price) {
        console.log(`잔액 $${myMoney - d.price}을 거슬러 드립니다~`);
      }
    }
  } else {
    // 주문 불가 음료
    // 이 음료를 선택했니?
    if (myDrink === d.name) {
      console.log("금액이 부족합니다. 주문할 수 없습니다.");
      console.log("돈은 고스란히 돌려드립니다.");
    }
  }
  console.log("\n");
}

if (myMoney === 0) console.log("에비~~ 돈없으면 저리가~~~");
