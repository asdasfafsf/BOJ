const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')


const [N, M] = input.shift().split(' ').map(Number);
const list = input.map(Number);

list.sort((a, b) => a - b);

let answer = Infinity;
let left = 0;
let right = 0;

while (right < N && left < N) {
    const value = list[right] - list[left];

    if (value < M) {
        right++;
    } else {
        answer = Math.min(answer, value);
        left++;
    }
}


console.log(answer);