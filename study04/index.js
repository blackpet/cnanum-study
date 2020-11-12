// console.log('hihi~~');

// 1. 변수
// var myname = '심재호';
// var myage = 19;
// var yourage = 88;
// var yourname = mynam
// console.log('1.name: ' + myname + '\nage: ' + myage + '\nyour name:' + yourname);
// console.log(`2.name: \t${myname}\nage: \t\t${myage}\nyour name: \t${yourname}`)
// console.log(myage + yourage);
// console.log(yourname);


// 2. 조건문
// var myage = 26;
// var yourage = 23;
// if(myage > yourage) {
//         console.log('어린노무시키가 눈 안까냐!!');
// } else if(myage == yourage) {
//         console.log('방갑다 칭구야!!');
// } else {
//         console.log('식사하셨습니까 행님~');
// }
// 
// 3. 반복문
// 구구단 5단 출력
// console.log('** 구구단 5단 **');
// for(var i = 1; i < 10; i++) { // ${변수, 수식}
// console.log(`5 * ${i} = ${5+i}`);
//     // console.log('5 * ' + i + ' = ' + (5 + i));
// }
// 
// 4. 피라미드 만들기
console. log('**피라미드 만들기**')
var z = "";
for(var i = 0; i < 10; i++){
    for (var j = 1; j <= i; j++) {
        z += "*";
    } z += "\n";
}

console.log(z);
