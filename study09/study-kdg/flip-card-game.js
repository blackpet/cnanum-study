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

// colorList의 위치를 가져옴
var cList;  
cList = document.querySelector('.row');

// 타이머 위치를 가져옴
var timer = document.querySelector('.timer');

function init() {
    rendercard()
}

function countdown(sec) {
    timer.innerText = sec;
    if(sec > 0){
        setTimeout(function() {
            countdown(sec-1);
        }, 1000);
    } else {
        timer.innerText = 'Start!';
    }
}

function rendercard() {
    var html ='';
    var t = 0;

    for(;true;) {
        if(Math.floor(Math.random()*10) == 3){
            break;
        } else {
            console.log('에헤라디야~');
        }
    }
    var num;
    while(true) {
        num = Math.floor(Math.random()*10);
        if(새삥이냐(num)){
            break;
        }
    }

    for(var i = 0; i < colors.length; i++) {
        var c = colors[i];
        html = html + `
        <div class="col s12 m3">
            <div class="card-panel ${c.color}">
                <span class="white-text">${c.color}</span>
            </div>
        </div>
        `
    }
    cList.innerHTML = html;
}

function 새삥이냐(n) {

}

// init();

// 원본
var arr1 = ['a', 'b', 'c', 'r', 'g', 'k', 'i', 'p', 'x', 'o'];
// 원본의 섞은 값의 index
var arr2 = [];

function shuffle() {
    for(var i = 0; i < colors.length; i++) {

        var num;
        while(true) {
            num = Math.floor(Math.random() * 10); // 0 ~ 9 중 하나
            // arr2 (복사본)에 이미 추출된 index number 이냐?
            if(arr2.indexOf(num) == -1) {
                break;
            }
        }
        arr2.push(num);
        console.log(arr2);
    }
}

function printShuffledCard() {
    for(var i = 0; i < arr2.length; i++) {
        console.log(colors[arr2[i]]);
    }
}

shuffle();

printShuffledCard();
