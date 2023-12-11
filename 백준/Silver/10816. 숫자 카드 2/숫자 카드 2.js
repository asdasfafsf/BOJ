const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const arr = input[1].split(' ').map(Number);
const map = {};

for (const index of arr) {
    if (!map[index]) {
        map[index] = 0;
    }

    map[index]++;
}

const answer = [];
const targets = input[3].split(' ').map(Number);

for (const target of targets) {
    answer.push(map[target] ?? 0)
}

console.log(answer.join(' '))
