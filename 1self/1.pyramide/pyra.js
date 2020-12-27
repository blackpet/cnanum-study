// var star = '';
// var starmax = 10;
// for(var i = 0; i < starmax; i++) {
//     star = star + ' *';
//     var space = '';
//     for(var j = starmax - i - 1; j > 0; j--) {
//         space = space + ' ';
//     }
//     console.log(space + star);
// }

var space = ' ';
var starmax = 10;
for(var i = 0; i < starmax; i++) {
    space = space + ' ';
    star = '';
    for(var j = starmax-i; j > 0; J--) {
        star = star = ' *';
    }
    console.log(space + star);
}