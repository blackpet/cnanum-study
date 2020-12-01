// 색상 array 만들기
var colors = [
    {id: 1, color: "red"},
    {id: 2, color: "yellow"},
    {id: 3, color: "purple"},
    {id: 4, color: "blue"},
    {id: 5, color: "lime"},
    {id: 6, color: "green"},
    {id: 7, color: "pink"},
    {id: 8, color: "amber"},
    {id: 9, color: "brown"},
    {id: 10, color: "teal"},
];
// 색상array를 랜덤 배치하기 위한 aray
var shufflecards = [];
// 질문할 idx를 담자
var idxs = [];
// colorList의 위치
var cList;  
cList = document.querySelector('.row');
// 타이머 위치
var timer = document.querySelector('.timer');
// 스타트버튼의 위치
var start_btn = document.querySelector('stratBtn');
start_btn = false;
// 질문의 위치
var question = document.querySelector('.question');
// 질문 색상이름의 위치
var whatColor = document.querySelector('.whatColor')
//문제색깔의 이름 위치
var colorName = document.querySelectorAll('.white-text');

var choiceColor;
// 초기화를 하자
function init() {
    question.style.display = 'none';
    rendercard()
}

// 시작 전 카드를 출력하자
function rendercard() {
    var html ='';
    for(var i = 0; i < colors.length; i++) {
        var c = colors[i];
        html = html + `
        <div class="col s12 m3" onclick="choice(${i})">
            <div class="card-panel ${c.color}">
                <div class="white-text">${c.color}</div>
            </div>
        </div>
        `
    }
    cList.innerHTML = html;
}

// startBtn을 누르자
function startBtn() {
    countdown(3)
    shufflecard()
    shufflepick()
    rendercard2()
}

//카운트다운을 하자 / 카운트가 끝나면 startOpt를 실행하자
function countdown(sec) {
    timer.innerText = sec;

    if(sec > 0){
        setTimeout(function() {
            countdown(sec-1);
        }, 1000);
    } else {
        startOpt()
	}
}
// 게임이 시작되면 아래 옵션을 시작
function startOpt() {
    start_btn.disabled = true;
    timer.innerText = 'Start!';
    question.style.display = 'block';
    blocker()
    WhatQuestion()
}

// 카운트다운이 끝나면 카드를 가리자
function blocker() {
    //카드색 이름의 위치 - 
    var colorName = document.querySelectorAll('.white-text');
    for(var text of colorName) {
        text.style.display = 'none';
    }
    // 카드색깔의 위치 - 전역변수에 선언되면 왜 안먹히는가?
    var cardPanels = document.querySelectorAll('.card-panel');
    for(var color of cardPanels) {
    color.classList.add('black');
    }
}

// 카드를 섞어라
function shufflecard() {
    for(var i = 0; i < colors.length; i++) {
        var num;
        while(true) {
            num = Math.floor(Math.random() * 10); // 0 ~ 9 중 하나
            // arr2 (복사본)에 이미 추출된 index number 이냐?
            if(shufflecards.indexOf(num) == -1) {
                break;
            }
        }
        shufflecards.push(num);
    }
}

// 섞인 카드를 출력
function rendercard2() {
    var html ='';
    for(var i = 0; i < colors.length; i++) {
        var c = colors[shufflecards[i]];
        html = html + `
        <div class="col s12 m3" onclick="choice(${i})">
            <div class="card-panel ${c.color}">
                <div class="white-text">${c.color}</div>
            </div>
        </div>
        `
    }
    cList.innerHTML = html;
}

// 질문을 섞어라
function shufflepick() {
    for(var i = 0; i < colors.length; i++) {
        // var idx = [];
        while(true) {
            idx = Math.floor(Math.random() * 10); // 0 ~ 9 중 하나
            // arr2 (복사본)에 이미 추출된 index number 이냐?
            if(idxs.indexOf(idx) == -1) {
                break;
            }
        }
        idxs.push(idx);
    }
console.log(idx)
}

//질문을 출력하자
function WhatQuestion(idx) {
    whatColor.innerHTML = shufflecards[idx];
}









init();
