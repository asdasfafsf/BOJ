const [N, M] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);


let digit = 1;
let count = 9;
let start = 0;
let current = M;

while (current > count * digit) {
    current = current - (digit * count);
    start = start + count;
    count = count * 10;
    digit++;
}

const answer = (start + 1) + Math.floor((current - 1) /digit)

if (answer > N) {
    console.log(-1);
} else {
    console.log(answer.toString().charAt((current - 1) % digit))
}
