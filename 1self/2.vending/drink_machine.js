// 음료의 array 생성
var drinks = [
    {name: '바닐라라떼', price: 1000, qty: 5},
    {name: '아메리카노', price: 500, qty: 2},
    {name: '카페라떼', price: 800, qty: 4},
    {name: '카페모카', price: 900, qty: 0},
    {name: '에스프레소', price: 300, qty: 1},
    {name: '딸기스무디', price: 1200, qty: 3}
];
// 음료를 출력할 위치
var drinkList;
drinkList = document.querySelector('.drinks');

var insert_btn;

//초기화
function init() {
    renderdrink();
}
//음료를 출력하자
function renderdrink() {
    var html = '';
    for(var i = 0; i < drinks.length; i++) {
        var d = drinks[i]
        html = html + `
        <li>
            <div>
                <h3>${d.name}</h3>
                <div class="price">${d.price}</div>
                <div class="qty">수량 : ${d.qty}</div>
                <button onclick="buydrink(0)">선택</button>
            </div>
        </li>
        `
    }
    drinkList.innerHTML = html
} 
//돈을 넣자
function insertMoney() {
    //투입금액의 위치
    var money = document.getElementById('Money').value;
    if(isNaN(money)) {
        alert('현금만 넣어주세요');
        money = document.getElementById('Money').value = '';
        return;
    }
    //투입된 금액의 위치
    var myMoney = document.getElementById('myMoney');
    myMoney.innerText = money+'원';
    money = document.getElementById('Money').value = '';
    //메세지를 바꾸자
    var message = document.getElementById('message');
    message.innerText = '음료를 선택해주세요';
}

function returnMoney() {

}

init();