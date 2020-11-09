console.log('vending-machine script!!!');

var drinks = [
    {name: '콜라', price: 500, qty: 5},
    {name: '사이다', price: 700, qty: 10},
    {name: '환타', price: 550, qty: 0},
    {name: '2%', price: 1000, qty: 7}
];
var myMoney = 0; // 투입금액
var canBuy = false; // 음료를 살 수 있는 금액이다!

/**
 * 자판기를 초기화 하자!
 * 1. 돈 넣기 전에는 버튼 누를 생각하지 마라!
 */
var drink_lis; // 음료 item LI array
var drink_btns; // 음료 선택 버튼 array
var drink_qtys; // 수량 array
function init() {
    drink_lis = document.querySelectorAll('li');
    drink_btns = document.querySelectorAll('li button');
    drink_qtys = document.querySelectorAll('.qty');
    // 시작 시에는 버튼 비활성화!!
    for(var i = 0; i < drink_btns.length; i++) {
        var btn = drink_btns[i];
        btn.disabled = true;
    }
}

// 돈넣고~ 음료먹기~
function insertCoin() {
    myMoney = document.getElementById('myMoney').value;
    console.log('coin', myMoney);

    // 금액은 숫자로만 입력 가능하다!
    if(isNaN(myMoney)) {
        alert('숫자로 입력해 주세요!!!');
        return;
    }

    // 먹은 음료는 치우자!
    document.getElementById('drink-my-drink').innerText = '';
    
    // 투입한 금액으로 선택 가능한 음료는 활성화 하자!
    canBuyDrinkEnable();
}

// 살 수 있는 음료는 활성화 하자!
function canBuyDrinkEnable() {
    // 음료 살 수 있는지 뺑뺑이 돌면서 확인하자!
    canBuy = false;

    // data array를 돌면서 구매 가능한 음료의 btn 을 활성화 하자!
    for(var i = 0; i < drinks.length; i++) {
        // 품절 체크!!
        if(drinks[i].qty === 0) {
            // 버튼 라벨을 "품절" 로 바꾸자!
            drink_btns[i].innerText = '품절';
        }
        else if(myMoney >= drinks[i].price) {
            // 살 수 있는 음료가 있다!
            canBuy = true;

            drink_btns[i].disabled = false;
            // 선택 가능한 음료를 highlight!
            drink_lis[i].classList.add('selectable');
        } else {
            drink_btns[i].disabled = true;
            // 선택 가능한 음료를 highlight!
            drink_lis[i].classList.remove('selectable');
        }
    }
}

/**
 * 음료 구매!!
 * 1. 투입금액 차감
 * 2. 선택음료 수량 차감
 * 3. 음료가 나온다~ 맛나게 먹자!!
 * 4. 잔액이 음료 금액보다 적으면 돌려주자!
 */
function buyDrink(idx) {
    // 1. 투입금액 차감
    myMoney = myMoney - drinks[idx].price;
    document.getElementById('myMoney').value = myMoney;

    // 2. 선택음료 수량 차감
    drinks[idx].qty = drinks[idx].qty - 1;
    drink_qtys[idx].innerText = `수량 : ${drinks[idx].qty}`;

    // 3. 음료가 나온다~ 맛나게 먹자!!
    document.getElementById('drink-my-drink').innerText = `${drinks[idx].name} 냠냠~~ 캬아아아아아~~`;

    // 잔액으로 다시 확인하자!
    canBuyDrinkEnable();

    // 잔액이 부족하면 거스름돈을 돌려주자!
    if(!canBuy) {
        document.getElementById('remain-money').innerText = `거스름돈은 ${myMoney}원 입니다.`;
    } else {
        document.getElementById('remain-money').innerText = '';
    }
}


init();
console.log('drink_btns!!!!!!!', drink_btns);