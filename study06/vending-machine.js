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
var drink_btns2; // 음료 삭제 버튼 array
var drink_qtys; // 수량 array
function init() {
    // array data를 화면에 동적으로 출력하자!
    renderDrinks();

    drink_lis = document.querySelectorAll('ul#drink-items li');
    drink_btns = document.querySelectorAll('.item .buy');
    drink_btns2 = document.querySelectorAll('.item .remove');
    drink_qtys = document.querySelectorAll('.qty');
    // 시작 시에는 버튼 비활성화!!
    for(var i = 0; i < drink_btns.length; i++) {
        var btn = drink_btns[i];
        var btn2 = drink_btns2[i];
        btn.disabled = true;
        btn2.disabled = true;
    }
}

// array data를 화면에 동적으로 출력하자!
function renderDrinks() {
    var drink_li_html = '';
    // array data 만큼 돌려라~
    for(var i = 0; i < drinks.length; i++) {
        var d = drinks[i];
        drink_li_html = drink_li_html + `
        <li>
          <div class="item">
            <!-- 음료마다  -->
            <h3>${d.name}</h3>
            <div class="price">${d.price.toLocaleString()}원</div>
            <div class="qty">수량 : ${d.qty.toLocaleString()}</div>
            <button class="buy" onclick="buyDrink(${i})">선택</button>
            <button class="remove" onclick="removeDrink2(${i})">삭제</button>
          </div>
        </li>`;
    }
    document.querySelector('ul#drink-items').innerHTML = drink_li_html;
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

// 자판기에 음료 품목 추가!
function addDrink() {
    // 신규 음료 forms에서 음료 정보를 가져오자!
    var frm = document.newDrink;
    var newDrinkName = frm.drink_name.value;
    var newDrinkPrice = frm.drink_price.value;
    var newDrinkQty = frm.drink_qty.value;


    drinks.push({name: newDrinkName, price: parseInt(newDrinkPrice), qty: parseInt(newDrinkQty)})
    
    // 신규 음료 추가 했으니 페이지 전체를 초기화 해주자!
    // 입력 항목 모두 초기화!
    frm.drink_name.value = '';
    frm.drink_price.value = '';
    frm.drink_qty.value = '';
    document.getElementById('myMoney').value = '';
    // 프로그램 전체를 처음부터 다시 시작!
    init();
}

function removeDrink1() {
    var drinkName = document.removeDrink.drink_name.value;

    for(var i = 0; i < drinks.length; i++) {
        if(drinks[i].name === drinkName) {
            drinks.splice(i, 1);
            break;
        }
    }
    
    document.getElementById('myMoney').value = '';
    // 프로그램 전체를 처음부터 다시 시작!
    init();
}

function removeDrink2(idx) {
    console.log('idxidx', idx);
    drinks.splice(idx, 1);
    
    document.getElementById('myMoney').value = '';
    // 프로그램 전체를 처음부터 다시 시작!
    init();
}

function removeDrink3() {
    for(var i = 0; i < drink_lis.length; i++) {
        var newDeleteBtn = document.createElement('button');
        newDeleteBtn.addEventListener('click', removeDrink4);
        newDeleteBtn.innerText = '삭제3';
        newDeleteBtn.setAttribute('idx', i);
        drink_lis[i].appendChild(newDeleteBtn);
    }
}

function removeDrink4(e) {
    console.log('i', e.target.attributes['idx'].nodeValue);
    removeDrink2(parseInt(e.target.attributes['idx'].nodeValue));
}

function removeDrink5() {
    var btns = document.querySelectorAll('#drink-items button.remove');
    for(var i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
    }
}


init();
console.log('drink_btns!!!!!!!', drink_btns);