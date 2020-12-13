// 1. 10개의 color가 담긴 array를 만든다
var colors = Array(10);

var shuffledColors;
var shuffledQuestion;

// 문제 index 
var questionIdx = -1; // 문제 출력 시 next index 로 출력할거야!!

/**
 * 2. 스타트버튼을 누르면 
 *  - color가 섞이고 
 *  - 3초의 타이머가 돌며 
 *  - 섞인 color를 보여주고 타이머가 끝나면 
 *  - color가 가려진다.
 */

/**
 * game start!!
 */
function start() {
    shuffledColors = shuffle(colors);
    shuffledQuestion = shuffle(shuffledColors);

    // 섞인 카드를 보여주자!
    renderCards(shuffledColors);

    // 3초 카운트다운
    countdown3s(); // wait....

    hiddenCards();

    startTimer();

    printQuestion();
}

/**
 * shuffle array
 * @param {Array} colors 
 */
function shuffle(colors) {}

/**
 * start 3 sec countdown
 */
function countdown3s() {}

/**
 * render colors[] cards
 * @param {Array} colors 
 */
function renderCards(colors) {}

function hiddenCards() {}

function printQuestion() {
    questionIdx++;
    if(questionIdx == shuffledQuestion.length) {
        endGame();
        return;
    }

    // TODO idx 문제 출력!
}

function startTimer() {}

function stopTimer() {}

function openCard(cardIdx) {}

function clickCard(cardIdx) {
    // idx번 카드의 color와 질문의 color가 같냐?
    if(correct(questionIdx, cardIdx)) {
        openCard(cardIdx);
        printQuestion();
    } else {
        // 틀린횟수 증가
        increaseWrongCount();
        alert('땡~');
    }
}

function correct(questionIdx, cardIdx) {}

function endGame() {
    stopTimer();
    alert('다 풀었다~ 시간은: __ / 틀릿횟수: __');
}

function increaseWrongCount() {}

function init() {
    // render original colors card!
    renderCards(colors);
}
