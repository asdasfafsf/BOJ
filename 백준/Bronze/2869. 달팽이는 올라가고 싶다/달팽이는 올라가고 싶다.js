let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const V = parseInt(input[2]);

let answer = 1 + Math.ceil((V - A) / (A - B));

console.log(answer);