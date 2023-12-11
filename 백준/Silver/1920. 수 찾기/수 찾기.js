const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

const answer = [];
const targets = input[3].split(' ').map(Number);

for (const target of targets) {
    let left = 0;
    let right = arr.length - 1;
    
    
    let res = 0;
    while (left <= right) {
        const mid = (left + right) >> 1;

        if (arr[mid] === target) {
            res = 1;
            break;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    answer.push(res);
}

console.log(answer.join('\n'))