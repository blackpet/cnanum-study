// 기본 array 만들기
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25,];

// start버튼을 누르면 섞인 number가 담길 array
var newNums = [];

// nums의 index를 가져오자
var idx = 0;

//맞춘 숫자는 비활성화 하자
var disibled = false;

// 틀린횟수를 담자
var misscount = 0;


//게임시간을 위한 변수
var intv;
var time = 0;
var timeIntv = 10;

// 숫자의 위치를 출력할 위치
var numList = document.querySelector('.numbers');

//초기화
function init() {
    renderNum(nums)
};

//화면에 출력
function renderNum(arr) {
    var html = '';
    for(var i = 0; i < arr.length; i++) {
        var num = arr[i];
        html = html + `
        <button class="number" onclick="clickNum(${num}, ${i})">${num}</button>
        `
    };
    numList.innerHTML = html;
};

// 스타트버튼을 누르면
function gameStart() {
    newNums = suffleNum(nums);
    renderNum(newNums);
    intv = setInterval(timeCount,timeIntv);
};

//game count start!
function timeCount() {
    document.getElementById('countDown').innerText = (time / 1000);
    time = time + timeIntv;
};

// 숫자를 섞을 함수
function suffleNum(arr) {
    var newArr = [];
    shuffleidx = [];
    for(var i = 0; i < arr.length; i++) {
        var num = 0;
        while(true){
            num = Math.floor(Math.random() * arr.length);
            if(shuffleidx.indexOf(num) == -1) break;
        }
        shuffleidx.push(num);
        newArr.push(arr[num]);
    }
    return newArr;
};

// 숫자를 클릭하자
    // 맞다면 다음숫자로, 틀리다면 다시 풀어라
function clickNum(selectNum, selectIdx) {
    if(selectNum == nums[idx]) {
        console.log(4356)
        disabledNum(selectIdx);
        nextNum();
    }else {
        console.log(12312)
        misscount = misscount + 1;
    }
};
// 숫자를 비활성화하자.
function disabledNum(selectIdx) {
    var numsList = document.querySelectorAll('.number');
    numsList[selectIdx].disabled = 'true';
};

// 다음숫자로 넘어가자
function nextNum() {
idx++;
    if(newNums.length == idx) {
        clearInterval(intv)
        alert('다 풀었습니다. 걸린시간 :' + (time / 1000)+'초 / 틀린 횟수 : ' + misscount + '회')
    }
    return;
};console.log(newNums[idx]);


init()