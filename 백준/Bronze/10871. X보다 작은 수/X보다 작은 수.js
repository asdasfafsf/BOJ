const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const result = A.filter(num => num < X).join(' ');
console.log(result);
