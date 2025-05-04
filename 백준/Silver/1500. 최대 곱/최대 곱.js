const [S, K] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


let count = K;
const s = Math.floor(S / K);
let remainder = ((S) - (s * K));

let answer = 1;
while (count--) { 
    if (remainder > 0) {
        answer *= (s + 1);
        remainder--;
    } else {
        answer *= s;
    }
}

console.log(answer);