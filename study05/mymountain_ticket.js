var mountain = [
    {name: "설악대종주", price: 30000, qty: 0},
    {name: "지리화대종주", price: 45000, qty: 5},
    {name: "주작덕룡", price: 40000, qty: 3},
    {name: "영남알프스소태극", price: 60000, qty: 7},
    {name: "불수사도북", price: 10000, qty: 10}
];

var mymount ='영남알프스소태극';
var mymoney = 55000;
var canbuyticket = []; // 티켓을 따로 저장할 변수
var mymountindex = -1; // 내가 선택한 티켓의 index 부여(배열에서 절대 나올 수 없는 음수를 부여해야 한다.) 
var remainmoney = 0; // 구매 후 잔액
var isbuy = false; // 구매여부
var isempty = false; // 품절여부

console.log("======My Mountains ticket_machin=====\n");
/*
1) 산 티켓의 이름 | 금액 | 수량을 출력할 것. 
2) 금액이 모자르거나 품절 일 경우
    2-1 금액이 부족할 경우 금액이 부족합니다.
    2-2 수량이 부족할 경우 완판되었습니다.
 */
for (var i = 0; i < mountain.length; i++) {
    var m = mountain[i];
    console.log(`${m.name} / ${m.price > mymoney ? `[$${m.price}] 금액이 부족합니다.` : `[$${m.price}]`} / ${m.qty === 0 ? '완판되었습니다.' :`[수량 : ${m.qty}]`}\n`);

    // 주문 가능한 티켓을 따로 저장할 것.
    if(m.qty >0 && mymoney >= m.price) {
        canbuyticket.push(m.name);
    }

    /*
        * 자판기에 입금
        *  0. 품절 >> 품절을 안 넣을 경우 조건문이 실행되지 않음
        * 
        *  1. 현재 Loop 돌고 있는 티켓을 선택했을 때
        *   1-1 잔액 부족
        *   1-2 mymoney === m.price
        *   1-3 잔액이 남았을때 >>> 잔액을 돌려줌
        * 
        * 2. 티켓을 선택하지 않았을 때
        *   2-1 주문 가능여부 표시하기
        * */

    //0.품절
    if (m.qty === 0) {
        continue;
    }
    //1. 산을 선택했을 때
    else if (mymount){
        // 이 산이 맞는지?
        if(mymount ===m.name) {
            //내가 고른 산과 일치 하면 !
            mymountindex = i;
            // 잔액을 계산한다
            remainMoney = 5 - 10;
            // 티켓값이 부족하진 않은지 체크
            if(remainmoney >= 0) {
                isbuy = true; // 구매완료
            }else{
                console.log('투입금액이 부족하여 구매 할 수 없습니다.')
                console.log(`구매가능한 티켓 :${canbuyticket}. [티켓을 선택해주세요]`)
            }
        }
    }
}  // 반복문의 종료
console.log(`투입금액 : ${remainmoney}`);
if(mymount) {
    console.log(`선택한 산 : ${mymount}\n`);

    //티켓 구매
    if(isbuy) {
        console.log(`${mymount} 이(가) 구매되었습니다. 잔액은 ${remainmoney}원 입니다.`);
        console.log(`${mymount} 남은 수량 : ${mountain[mymountindex].qty - 1}`);
    }

    // 티켓값의 부족
    else if(remainmoney < 0) {
        console.log(`투입금액이 ${remainmoney * - 1}원 부족하여 ${mymount}을(를) 구매할 수 없습니다.`);
    }
    else {
    //구매 가능 한 티켓을 출력 / 구매가능 한 티켓이 없다면 다른 문구를 출력
    if(canbuyticket.length === 0) {
        console.log('투입금액이 부족하여 구매 가능한 티켓이 없습니다.')
    } else {
        console.log(`구매가능한 티켓 :${canbuyticket}. [티켓을 선택해주세요]`)
    }
    }
}