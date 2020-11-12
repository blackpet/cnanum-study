/** 
 * 1. 돈을 넣기 전에는 선택버튼을 비활성화 한다.
 * 2. 돈을 넣고 투입을 넣으면 투입금액을 인식
 * 3. 투입금액에 맞춰 구매할 수 있는 음료 인식 
 * 3-1. 투입금액에 맞춰 구매 할 수 있는  음료에 불이 들어오고 선택버튼이 활성화된다.
 * 3-2. 수량이 0인 경우에는 버튼의 글씨가 품절로 바뀌며 버튼은 비활성화를 유지한다.
 * 3-3. 투입금액으로 살 수 없는 음료는 비활성화를 유지한다. 
 * 4. 음료를 선택하면 투입금액에서 음료의 가격이 차감, 수량을 -1 시키고 음료가 나온다.
 * 4-1. 현재의 잔액으로 살 수 있는 음료가 다시 세팅된다.
 * 4-2. 현재의 잔액으로 살 수 있는 음료가 없을 경우 자동 반환
*/


// 음료 배열
var drinks = [
    {name: '바닐라라떼', price: 1000, qty: 5},
    {name: '아메리카노', price: 500, qty: 2},
    {name: '카페라떼', price: 800, qty: 4},
    {name: '카페모카', price: 900, qty: 0},
    {name: '에스프레소', price: 300, qty: 1},
    {name: '딸기스무디', price: 1200, qty: 3}
];

// myMoney 변수의 값은 0을 넣는다.
var myMoney = 0; // 투입금액
var canBuy = false;  // 투입금액이 음료값보다 크거나 같다
var drink_lists;  // 음료 리스트
var drink_buttons; // 음료 선택버튼
var drink_qtys;  // 음료 수량 
var insert_btn;  // 투입, 반환버튼

// 1. 돈을 넣기 전 
function init() {
    drink_lists = document.querySelectorAll('li');
    drink_buttons = document.querySelectorAll('li button');
    drink_qtys = document.querySelectorAll('.qty');
    // 시작 시에는 버튼 비활성화!!
    for(var i = 0; i < drink_buttons.length; i++) {
        var btn = drink_buttons[i];
        btn.disabled = true;
    }
}

// 2. 돈을 넣고 투입을 넣으면 투입금액을 인식
function insertMoney() {
    myMoney = document.getElementById('myMoney').value;
    console.log('money', myMoney);
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
    canbuy = false;  // 음료 구매가능여부 확인
    for(var i = 0; i < drinks.length; i++) {
        // 품절인 경우 선택 버튼은 활성화 되지 않는다.
        if(drinks[i].qty === 0) {
            drink_buttons[i].disabled = true;
        }

        else if(myMoney >=drinks[i].price) {
            canBuy = true;
            drink_buttons[i].disabled = false;
        }
    }

}


init();

