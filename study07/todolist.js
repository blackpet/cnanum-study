// 내가 해야 할일
// 


var todo_list = [
    {todo:'짜장면해먹기'},
    {todo:'Javascript Array 공부하기'},
    {todo:'도시락 싸기'},
    {todo:'오픈할 샵 구매품목 정리하기'}
    ];
var complete_list = [
    {todo:'CSS Flex 공부'},
    {todo:'밥먹기'},
];

var todo_li_html = '';
var todoOl;
var completeOl;

todoOl = document.querySelectorAll('#todo_list li')
completeOl = document.querySelectorAll('#complete_list li')

renderingcon();
console.log('after rendering');


//for문을 이용하여 array를 출력하자

function rendering(){
    for(var i=0; i<todo_list.length; i++) {
        var t = todo_list[i];
        todo_li_html = todo_li_html+
        `<li>${t.todo}</li>`;
        console.log(todo_li_html);
    }
    document.querySelector('#todo_list').innerHTML=todo_li_html;  
}

// var a ={
//     b:function todo(){
//         for(var i=0; i<todo_list.length; i++) {
//             var t = todo_list[i];
//             todo_li_html = todo_li_html+
//             `<li>${t.todo}</li>`;
//             console.log(todo_li_html);
//         }
//         document.querySelector('#todo_list').innerHTML=todo_li_html;  
//     },
//     c:function complete(){
//         for(var i=0; i<todo_list.length; i++) {
//             var t = todo_list[i];
//             todo_li_html = todo_li_html+
//             `<li>${t.todo}</li>`;
//             console.log(todo_li_html);
//         }
//         document.querySelector('#todo_list').innerHTML=todo_li_html;  
//     }
    
// }