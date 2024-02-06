const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());


let min = Number.MAX_VALUE;

for (let i = 1; i < input; i++) {
    min = i.toString().split('').map(e => parseInt(e)).reduce((a, b) => a + b, 0) + i === input ? Math.min(i, min) : min;
}

if (min === Number.MAX_VALUE) {
    min = 0;
}

console.log(min);