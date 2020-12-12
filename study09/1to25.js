var size = 25;
var i = 0;
var numbers = Array(size).fill().map(_ => ++i);
var time = 0;
var timeInterval = 10;
var timerId;
var nextNum = -1;
var failCnt = 0;

function init() {
	render();
	initRecords();
}

function initRecords() {
	var rankings = [], recents = [];
	var limit = 10;
	
	// retrieve records from db
	var ref = db.collection('1to25');
	
	// ranking
	ref.orderBy('time').limit(limit).get().then(function(querySnapshot) {
		// store data to array
		querySnapshot.forEach(doc => rankings.push(doc.data()));
		// render!
		renderRecords(document.querySelector('.ranking'), rankings);
		
	}).catch(function(error) {
		console.error(error);
	});
	
	// recent
	ref.orderBy('date', 'desc').limit(limit).get().then(function(querySnapshot) {
		// store data to array
		querySnapshot.forEach(doc => recents.push(doc.data()));
		// render!
		renderRecords(document.querySelector('.recent'), recents);
		
	}).catch(function(error) {
		console.error(error);
	});
}

function renderRecords(el, records) {
	var html = records.reduce((html, r, idx) =>
		html += `<li>${idx+1}. ${r.name} : ${r.time.toFixed(2)}s (${new Date(r.date.seconds).toLocaleString()})</li>`
	, '');
	el.innerHTML = html;
}

function start() {
	// init timer
	if(timerId) {
		clearInterval(timerId);
		time = 0;
	}
	
	numbers = shuffle();
	render();
	
	// init nextNum
	nextNum = 1;
	
	// start timer
	timerId = setInterval(timer, timeInterval);
}

function shuffle() {
	var idxs = [];
	while(true) {
		var n = randomNumber(1, size);
		// add idxs not exists
		if(!idxs.includes(n)) {
			idxs.push(n);
		}
		if(idxs.length == size) break;
	}
	console.log(idxs);
	
	return idxs;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function render() {
	var panel = document.getElementById('panel');
	var html = numbers.reduce((html, n, idx) => 
		html += `
			<div class="num num-${idx}">
				<div onclick="clickNumber(${n}, ${idx});">${n}</div>
			</div>`
		, '');
	panel.innerHTML = html;
}

function timer() {
	document.getElementById('timer').innerText = (time / 1000).toFixed(2);
	time += timeInterval;
}

function clickNumber(n, idx) {
	// correct??
	if(n === nextNum) {
		blockNumber(idx);
		
		// end?
		if(nextNum === numbers.length) {
			endGame();
		}
		++nextNum; // 다음 찾을 번호
	} else {
		++failCnt;
	}
}

function endGame() {
	clearInterval(timerId);
	var name = prompt('Do you want to save your record?\n\nEnter your name to save');
	if(name) {
		// TODO save to firebase
		saveToDb(name, time);
	} else {
		console.log('deny to save');
	}
}

// save to firebase firestore
function saveToDb(name, time) {
	db.collection('1to25').add({
		name: name,
		time: (time / 1000),
		date: new Date()
	}).then(function(docRef) {
		console.log('save to db');
		// init records
		initRecords();
	}).catch(function(error) {
		console.log('[saveToDb] error occured!!');
		console.log(error);
	});
}

// block number after correct
function blockNumber(idx) {
	var block = document.createElement('div');
	block.classList.add('block');

	// block number for prevent click
	document.querySelector(`.num-${idx}`).insertAdjacentElement('afterbegin', block);
}


init();

function testEndGame() {
	var dummyTime = randomNumber(10000, 30000);
	
	var name = prompt('Do you want to save your record?\n\nEnter your name to save');
	if(name) {
		saveToDb(name, dummyTime);
	}
}