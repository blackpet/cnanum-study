'use strict';

// Array ~!

// 배열을 어떻게 선언하는가 

const arr1 = new Array();
const arr2 = [1.2];

// 인덱스를 통해 어떻게 array에 접근하는가 

const color = ['red', 'blue'];

//1. hardcoding~!
// console.log(color. length);
// console.log(color[1]);
// console.log(color);

// 2. for문을 사용해서 접근
// for (let i = 0; i < color.length; i++) {
//   console.log(color[i]);
// }

// 3. array method를 이용하여 접근
// color.forEach(function(color) {
//   console.log(color);
// })
// 익명함수니까! 화살표 함수를 사용해서 한줄로 표현할 수 있다.
// color.forEach((color) => console.log(color));



// 데이터를 추가 삭제
// 1. 데이터를 뒤에 추가
// color.push('black');
// console.log(color);

// note!!! shift, unshift 는 pop과 push에 비해 동작 속도가 많이 느리다 !!
// Why ? 
// 뒤에서 데이터를 변형하면 기존의 데이터가 움직이지 않아도 되는데
// 앞에 데이터를 넣게 되면 기존의 데이터가 움직여야 하기에 그 움직임으로 인해 느려진다.

// 지정된 데이터를 삭제 
// color.splice(1, 1);
// console.log(color);


