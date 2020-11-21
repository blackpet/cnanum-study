// 해야 할 일 리스트 array
var t_lists = [
    {todo : '저녁먹기'},
    {todo : '샤워하기'},
    {todo : '잠자기'}
];
// 완료 한 일 리스트 array
var c_lists = [
    {todo : '출근하기'},
    {todo : '퇴근하기'}
];

var todos = [
    {todo: '저녁먹기', complete: false},
    {todo: '샤워하기', complete: false},
    {todo: '잠자기', complete: true},
    {todo: '퇴근하기', complete: false},
    {todo: '출근하기', complete: true},
]


var tListOl; // t_list의 할 일
var cListOl; // 완료 한 일

tListOl = document.querySelector('.w_list'); // 할 일 리스트 불러오기
cListOl = document.querySelector('.c_list'); // 할 일 리스트 불러오기

// 프로그램을 처음부터 다시 시작
function init() {
    renderList(false, tListOl); // 할 일 리스트 출력
    renderList(true, cListOl); // 완료한 일 리스트 출력 
}
/**
 * 현재 / array를 2개로 나누어 할 일과 완료한 일이 지정되어있다
 *  / 할일과 완료한 일이 각각의 함수로 저장되어있다.
 * 변경 / array릏 1개로 합치고 함수를 만들 때
 * 첫번째 인자값으로 완료여부의 true, false를 지정(array의)
 * 두번째 인자값으론 위치를 지정
 * complete 변수를 선언하자
 * 
 */
function renderList(isComplete, el) {
    var html = '';
    // for(var i = 0; i < todos.length; i++) {
    //     if(isComplete == todos[i].complete) {
    //         html = html + `
    //         <li>
    //             <div class="todo">${todos[i].todo}</div>`;
    //         if(todos[i].complete == false) {
    //             html = html + '<button>완료</button>';
    //         }
    //         html = html + '</li>';
    //     }
    // }
    
    // for(var i = 0; i < todos.length; i++) {
    //     if(isComplete == todos[i].complete) {
    //         html = html + `
    //         <li>
    //             <div class="todo">${todos[i].todo}</div>
    //             ${todos[i].complete == false ? `<button onclick="completeBtn(${i})">완료</button>` : ''}
    //         </li>`;
    //     }
    // }
    
    for(var i = 0; i < todos.length; i++) {
        if(isComplete == todos[i].complete) {
            // 미완료 할일인 경우는 button을 추가해야 한다!
            var btn = '';
            if(todos[i].complete == false) {
                btn = `<button onclick="completeBtn(${i})">완료</button>`;
            }

            html = html + `
            <li>
                <div class="todo">${todos[i].todo}</div>
                ${btn}
            </li>`;
        }
    }
    el.innerHTML = html;
}

// tList 동적으로 출력
function renderList2(lists, ListOl) {
    var wwork_li_html = '';
    for(var i = 0; i < lists.length; i++){
        wwork_li_html = wwork_li_html + `
        <li>
        <div class="works">${lists[i].todo}</div>
        <button onclick="completeBtn(${i})">완료</button>
        </li>`;
        console.log(wwork_li_html)
    }
    ListOl.innerHTML = wwork_li_html;
}

// cList 동적으로 출력
function rendercList() {
    var cwork_li_html = '';
    for (var i = 0; i < c_lists.length; i++){
        var c = c_lists[i];
        cwork_li_html = cwork_li_html + `
        <li>
        <div class="works">${c.todo}</div>
        </li>`;
    }
    document.querySelector('.c_list ol').innerHTML = cwork_li_html;
}

// 해야할 일을 tList에 추가
function addWorkBtn() {
    // 해야 할 일(value)을 가져와서 등록
    var newWork = document.newWork.new_work;
    todos.push({todo : newWork.value, complete : false});
    newWork.value = '';
    // 초기화
    init();
}

// 완료버튼을 누르면 cList로 이동
function completeBtn(idx) {
    console.log(idx);
    //conplete false를 true로 변경
    todos[idx].complete = true;
    init();
}


init();