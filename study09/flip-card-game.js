
var COLORS = ['red', 'pink', 'purple', 'indigo', 'blue', 'teal', 'green', 'lime', 'yellow', 'amber'];
// shuffled colors
var SHUFFLED_COLORS = [];

var el = document.querySelector('.cards');
var colorTxtEl; // render 이후에 할당하자!
var questionEl = document.querySelector('.question');
var whatColorEl = document.querySelector('.what-color');


// random index numbers
var idxs = [];
// count of failed
var failCount = 0;

var playTime = 0;
var playTimer; // real-time timer
var playTimerEl = document.querySelector('.play-timer');

renderCards(COLORS);

// [start]btn
function start() {
	idxs = [];
	
	// 우선 카드를 숨기고~
	el.innerHTML = '';
	// [start]btn disabled
	document.getElementById('startBtn').classList.add('disabled');
	
	// 쉐끼~ 쉐끼~ 붸붸~
	SHUFFLED_COLORS = shuffle(COLORS);
	
	// 3초 timer 동작!
	document.querySelector('.timer').classList.remove('hide');
	countdown(3);
}

// shuffle array
function shuffle(arr) {
	var _arr2 = [];
	var _idxs = [];
	
	var n; // random number
	while(true) {
		n = generateRandomNumber();
		// 신규 index check! 이미 뽑은 index 이면 pass!
		if(_idxs.indexOf(n) == -1) {
			_idxs.push(n);
			_arr2.push(arr[n]);
		}
		
		// arr 개수만큼 다 채웠으면 끝내자!
		if(arr.length == _idxs.length) {
			break;
		}
	}
	
	return _arr2;
}

function renderCards(cols) {
	var html = '';
	
	for(var i = 0; i < cols.length; i++) {
		var c = cols[i];
		html += `
    <div class="col s12 m6" onclick="chooseCard(${i})">
      <div class="card-panel ${c}">
			<span class="white-text color-txt">${c}</span>
      </div>
		</div>`;
	}
	el.innerHTML = html;
	
	// innerText of Card
	colorTxtEl = document.querySelectorAll('.card-panel .color-txt');
}

function chooseCard(i) {
	var correctIdx = idxs[idxs.length-1];
	// console.log(`i: ${i} | select: ${SHUFFLED_COLORS[i]} | correct idx: ${correctIdx}`);
	
	// 정답 확인!
	if(i === correctIdx) {
		// flip card!
		var cardPanels = document.querySelectorAll('.card-panel');
		cardPanels[i].classList.remove('grey');
		// show color text
		colorTxtEl[i].style.display = '';
		
		// end of game
		if(idxs.length == SHUFFLED_COLORS.length) {
			// stop play timer!
			clearInterval(playTimer);
			
			alert('Wow! You clear the game!!!');
			
			// enable [start]btn
			document.getElementById('startBtn').classList.remove('disabled');
			
			return;
			
		} else {
			// next question
			var n = next();
			printNextColor(n);
		}
	} else {
		failCount++;
		document.querySelector('.failed-count').innerText = failCount;
	}
}

// generate random number
function generateRandomNumber() {
	// 0 ~ 10 까지 랜덤하게 숫자를 생성하자!
	var n = Math.floor(Math.random() * 10);
	return n > 9 ? 9 : n;
}


function init() {
	// toggle [.question] visibility
	questionEl.classList.remove('hide');
	
	// hide color text
	for(var txt of colorTxtEl) {
		txt.style.display = 'none';
	}
	// change card color to gray
	var cardPanels = document.querySelectorAll('.card-panel');
	for(var c of cardPanels) {
		c.classList.add('grey');
	}

	// what is next color index??
	var n = next();
	// show next question
	printNextColor(n);
	
	// play timer start!!!
	playTimer = setInterval(updatePlayTimer, 100);
}

function updatePlayTimer() {
	playTime += 100;
	playTimerEl.innerText = playTime / 1000;
}

function countdown(sec) {
	// 화면에 남은시간 표시!
	var timer = document.querySelector('.timer');
	timer.innerText = sec;
	
	if(sec > 0) {
		setTimeout(function() {
			countdown(sec-1);
		}, 1000);
	} else {
		// timer 없애고 card 를 보여주자!
		timer.classList.add('hide');
		
		renderCards(SHUFFLED_COLORS);
		
		// 3초 뒤에 게임을 시작하자! (init)
		setTimeout(init, 3000);
	}
	
}

function next() {
	// end of game
	if(idxs.length == COLORS.length) {
		alert('Wow! You clear the game perfectly!!!');
		
		// hide control panel
		document.querySelector('.control').style.display = 'none';
		return;
	}
	
	var n;
	
	// random COLOR idx
	while(true) {
		// generate random number for COLOR index
		n = generateRandomNumber();
		
		if(idxs.indexOf(n) == -1) {
			console.log(`new idx is ${n}`);
			idxs.push(n);
			break;
		}
	}
	
	return n;
}

// print next color
function printNextColor(idx) {
	whatColorEl.innerText = SHUFFLED_COLORS[idx].toUpperCase();
}

