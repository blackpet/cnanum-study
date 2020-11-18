// 해야 할 일 리스트 array
var w_lists = [
    {work : '저녁먹기'},
    {work : '샤워하기'},
    {work : '잠자기'}
];
// 완료 한 일 리스트 array
var c_lists = [
    {work : '출근하기'},
    {work : '퇴근하기'}
];


var w_works; // w_list의 할 일
var c_works; // 완료 한 일

// 프로그램을 처음부터 다시 시작
function init() {
    renderW_works(); // 할 일 리스트 출력
    renderC_works(); // 완료한 일 리스트 출력 

w_works = document.querySelectorAll('.w_list') // 할 일 리스트 불러오기
c_works = document.querySelectorAll('.c_list') // 할 일 리스트 불러오기

}

// w_works 동적으로 출력하자
function renderW_works() {
    var wwork_li_html = '';
    for(var i = 0; i < w_lists.length; i++){
        var w = w_lists[i];
        wwork_li_html = wwork_li_html + `
        <li>
        <div class="works">${w.work}</div>
        <form name="complete" onsubmit="return false;">
        <button onclick="completeBtn()">완료</button>
        </form>
        </li>`;
    }
    document.querySelector('.w_list ol').innerHTML = wwork_li_html;
}

// c_works 동적으로 출력하자
function renderC_works() {
    var cwork_li_html = '';
    for (var i = 0; i < c_lists.length; i++){
        var c = c_lists[i];
        cwork_li_html = cwork_li_html + `
        <li>
        <div class="works">${c.work}</div>
        </li>`;
    }
    document.querySelector('.c_list ol').innerHTML = cwork_li_html;
}

// 해야할 일을 w_works에 추가
function addWorkBtn() {
    // 해야 할 일(value)을 가져와서 등록하자
    var newWorkName = document.newWork.new_work.value;
    w_lists.push({work : newWorkName});
    form.new_work.value = '';
    // 무언가 변경이 되었다면 초기화를 하자
    init();
}

// 완료버튼을 누르면 c_works로 이동
function completeBtn() {
    for(var i = 0; i < w_lists.length; i++){
        var completeName = w_lists[i];value
    }
    c_lists.push({work : completeName});
    // 무언가 변경이 되었다면 초기화를 하자.
    init();
}


renderW_works();
renderC_works();