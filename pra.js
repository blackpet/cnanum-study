/**
var star = '';
// var space = '';
var starmax = 5;
for (var i = 0; i < starmax; i++) {
    star = star + ' *'

    var space = '';
    for(var j = starmax-1-i; j > 0 ; j--) {
        space = space + ' ';
    }
    console.log(space + star)
}

 */

// var star = '';
// // var space = '';
// var starmax = 5;
// for (var i = starmax; i > 0; i--) {
//     star = star + ' *'

//     var space = '';
//     for(var j = 0; j < starmax-(i-1); j++) {
//         space = space + ' ';
//     }
//     console.log(space + star)
// }

// var space = '';
// // var space = '';
// var starmax = 5;
// for (var i = 0; i < starmax; i++) {
//     space = space + ' '

//     var star = '';
//     for(var j = starmax-i; j > 0; j--) {
//         star = star + ' *';
//     }
//     console.log(space + star)
// }

// var max = 10;
// var stars = Array(max).fill('*');
// var blank = Array().fill(' ');
// for(var i = 0; i < max; i++) {
//     console.log(blank.join('') + stars.join(' '));
//     stars.pop();
//     blank.push(' ');
// }

// pyramid

var max = 20;
var stars = Array(1).fill('*');
var blank = Array(max-1).fill(' ');
for(var i = 0; i < max; i++) {
    console.log(blank.join('') + stars.join(' '));
    stars.push('*');
    blank.pop();
}