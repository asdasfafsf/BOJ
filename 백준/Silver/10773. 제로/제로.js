

const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(Number);


const K = input[0];
const arr = input.slice(1);


const queue = [];
let current = 0;

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num === 0) {
        if (current > 0) {
            current--;
        }
    } else {
        queue[current] = num;
        current++;
    }
}

console.log(queue.slice(0, current).reduce((pv, cv) => pv + cv, 0))