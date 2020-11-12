

// 음료 배열
var drinks = [
    {name: '바닐라라떼', price: 1000, qty: 5},
    {name: '아메리카노', price: 500, qty: 2},
    {name: '카페라떼', price: 800, qty: 4},
    {name: '카페모카', price: 900, qty: 0},
    {name: '에스프레소', price: 300, qty: 1},
    {name: '딸기스무디', price: 1200, qty: 3}
];

var insert_btn;  // 투입, 반환버튼
var canbuy = false;

var drink_lists;  // 음료 리스트
var drink_buttons; // 음료 선택버튼
var drink_qtys;  // 음료 수량 


// 2. 돈을 넣고 투입을 넣으면 투입금액을 인식
function insertMoney() {
    myMoney = document.getElementById('myMoney').value;
    console.log(myMoney);
  // 투입금액이 숫자가 아닌경우 버튼 비활성화 / 오류가 난다.!!!
    if(isNaN(myMoney)) {
    //     insert_btn = document.querySelector('.input button');
    //     insert.disabled = true;
        alert('현금만 넣어주세요');
        return;
    }
}


// 투입금액에 맞춰 구입 할 수 있는 음료 캐치
function possibleDrink() {
    // 음료 살 수 있는지 뺑뺑이 돌면서 확인하자!
    canBuy = false;

    // 음료 구매가능여부 확인
    for(var i = 0; i < drinks.length; i++) {
        // 품절을 먼저 체크
        if(drinks[i].qty === 0) {
            // 품절인 경우 선택 버튼은 활성화 되지 않는다.
            drink_buttons[i].disabled = true;
            // drink_buttons[i].innerText = '품절';
        }
        else if(myMoney >= drinks[i].price) {
            // 구매 가능한 음료 확인
            canBuy = true;
            // 선택버튼을 활성화
            drink_buttons[i].disabled = false;
            // 선택 가능한 음료를 background
            drink_lists[i].classList.add('selectableColor');
        } else {
            drink_buttons[i].disabled = true;
            // 선택 가능한 음료를 highlight!
            drink_lis[i].classList.add('unselectableColor');
        }
    }
}