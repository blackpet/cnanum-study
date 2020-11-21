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


var tListOl; // t_list의 할 일
var cListOl; // 완료 한 일

tListOl = document.querySelector('.w_list'); // 할 일 리스트 불러오기
cListOl = document.querySelector('.c_list'); // 할 일 리스트 불러오기

// 프로그램을 처음부터 다시 시작
function init() {
    renderList(t_lists, tListOl); // 할 일 리스트 출력
    renderList(c_lists, cListOl); // 완료한 일 리스트 출력 
}

// tList 동적으로 출력
function renderList(lists, ListOl) {
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

// // cList 동적으로 출력
// function rendercList() {
//     var cwork_li_html = '';
//     for (var i = 0; i < c_lists.length; i++){
//         var c = c_lists[i];
//         cwork_li_html = cwork_li_html + `
//         <li>
//         <div class="works">${c.todo}</div>
//         </li>`;
//     }
//     document.querySelector('.c_list ol').innerHTML = cwork_li_html;
// }

// 해야할 일을 tList에 추가
function addWorkBtn() {
    // 해야 할 일(value)을 가져와서 등록
    var newWork = document.newWork.new_work;
    t_lists.push({todo : newWork.value});
    newWork.value = '';
    // 초기화
    init();
}

// 완료버튼을 누르면 cList로 이동
function completeBtn(idx) {
    for(var i = 0; i < t_lists.length; i++){
        var completeName = t_lists[i];value
    }
    c_lists.push({todo : completeName});
    // 초기화
    init();
}


init();