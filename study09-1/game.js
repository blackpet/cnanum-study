// 색상 array 만들기
var colors = [
    {color: "red"},
    {color: "yellow"},
    {color: "purple"},
    {color: "blue"},
    {color: "lime"},
    {color: "green"},
    {color: "pink"},
    {color: "amber"},
    {color: "brown"},
    {color: "teal"},
];
var newColors;
var quizColors;

var idx = -1;

var shuffleidx;

// colorList의 위치
var cList = document.querySelector('.row');

var quizList = document.querySelector('.whatColor');

function init(){
    rendercolor(colors);
}
function startBtn(){
    newColors = shuffle(colors);
    rendercolor(newColors);
    quizColors = shuffle(newColors);
    blockBtn();
    quizBtn2();
}

// function quizBtn() {
//     for(var i = 0; i < newColors.length; i++) {
//         if(newColors[i].color === quizList.color){
//             quizList.innerText = newColors[num].color;
//         }
//     }
//     num++;
// }

function quizBtn2() {
    idx++;
    if(quizColors.length == idx) {
        setTimeout(function() {
            alert('문제를 다 풀었습니다.');
        }, 100);
        return;
    }
    quizList.innerText = quizColors[idx].color;
}

function openColor(selectIdx) {
    var cards = document.querySelectorAll('.card-panel');
    cards[selectIdx].classList.remove('grey');
    cards[selectIdx].querySelector('div').style.visibility = 'visible';

}

function clickColor(selectColor, selectIdx) {
    if(selectColor == quizColors[idx].color) {
        openColor(selectIdx);
        quizBtn2();
    }else {
        console.log('틀렸습니다. 다시풀어주세요');
    }
}

function resultBtn() {
    var cards = document.querySelectorAll('.card-panel');
}

// 카드를 섞자
function shuffle(array)  {
    var arr = [];
    shuffleidx = [];
    for(var i = 0; i < array.length; i++) {
        var num;
        while(true){
            num = Math.floor(Math.random() * array.length);
            if(shuffleidx.indexOf(num) == -1) break;
        }
        shuffleidx.push(num);
        arr.push(array[num]);
    }
    return arr;
}
// 카드를 출력하자
function rendercolor(array) {
    var html = '';
    for(var i = 0; i < array.length; i++){
        var c = array[i];
        html = html + `
        <div class="col s12 m3" onclick="clickColor('${c.color}',${i})">
            <div class="card-panel ${c.color}">
                <div class="white-text">${c.color}</div>
            </div>
        </div>
        `
    }
    cList.innerHTML = html;
}

//색깔을 가리자
function blockBtn() {
    var cards = document.querySelectorAll('.card-panel');
    for(var i = 0; i < cards.length; i++) {
        cards[i].classList.add('grey');
        cards[i].querySelector('div').style.visibility = 'hidden';
    }
}

init();