let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let num = +input;
let answer = 0;

while (num >= 5) {
    answer += Math.floor(num /= 5);
}

console.log(answer);