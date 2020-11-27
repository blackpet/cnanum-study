// to do list 목록 만들기
var todoList = [
    {todo: '저녁먹기', complete: false},
    {todo: '샤워하기', complete: true},
    {todo: '잠자기', complete: false},
    {todo: '출근하기', complete: true},
    {todo: '퇴근하기', complete: false},
];
// 출력할 위치를 가져오자
var tList; // todolist 위치를 가져옴
tList = document.querySelector('.todo_list');
var cList; // completelist 위치를 가져옴
cList = document.querySelector('.com_list');

// 프로그램을 새로 시작
function init() {
    // tList.innerHTML = '';
    // cList.innerHTML = '';
    renderList(false, tList);
    renderList(true, cList);
}
/*
리스트를 동적으로 출력하자
반복문의 횟수는 array의 length만큼 돌자
1. todo를 했다면(true) complete list에 출력하고
2. todo를 안했다면 (false) todo list에 출력되도록 하고 
    완료를 할 수 있는 button을 추가한다.
*/
// function renderList(bl,el) {
//     var html ='';
//     for(var i = 0; i < todoList.length; i++) {
//         // todolist index 변수
//         var t = todoList[i];
//         // bl에 입력한 boolean과 todo.complete의 boolean값이 같니
//         if(bl == t.complete) {
//             var btn = '';
//             // todo.complete의 값이 false니
//             if(t.complete == false) {
//                 btn = btn + `
//                 <button onclick="complete(${i})">완료함</button>`
//             };
//             html = html + `
//             <li>
//                 <div class="todoList">${t.todo}</div>
//                 ${btn}
//             </li>`;
//         };
//     el.innerHTML = html;
//     };
// };

function renderList(bl,el) {
    var html ='';
    for(var i = 0; i < todoList.length; i++) {
        // todolist index 변수
        var t = todoList[i];
        // bl에 입력한 boolean과 todo.complete의 boolean값이 같니
        if(bl == t.complete) {
            var btn = '';
            // todo.complete의 값이 false니
            if(t.complete == false) {
                btn = `
                <button onclick="complete(${i})">완료함</button>`
            };
            html = html + `
            <li>
                <div class="todoList">${t.todo}</div>
                ${btn}
            </li>`;
        };
    };
    el.innerHTML = html;
};




// 할 일 추가 버튼을 누르면 todoList에 추가
function addList() {
    var addList = document.newTodo.new_todo;
    if(addList != null){
        todoList.push({todo: addList.value, complete: false});
        addList = '';
    }
    init();
}

function complete(idx) {
    console.log(idx);
    // 버튼을 누르면 complete = true로 변경하자.
    todoList[idx].complete = true;
    init();
}

init();