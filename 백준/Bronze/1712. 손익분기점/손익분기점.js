let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);


if (B >= C) {
    console.log(-1);
} else {
    const res = Math.floor(A/(C-B)) + 1;
    console.log(res);
}