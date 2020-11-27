
var timer = document.querySelector('.timer');

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

countdown(5);




document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.fixed-action-btn');
var opt = {direction: 'left'};
var instances = M.FloatingActionButton.init(elems, opt);
});