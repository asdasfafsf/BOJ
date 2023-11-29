const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split(' ')
    .map(Number);


const [N, K] = input;

const cache = [];
const answer = [];
let current = K;
for (let i = N; i > 0; i--) {
    const value = i;
    const cal = current + 1 - value;

    if (cal >= 0) {
        answer.push(value);
        current = cal;
    } else {
        cache.push(value);
    }
}

console.log(answer.join(' ') + ' ' + cache.sort((a, b) => a - b).join(' '))