const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);


let left = 0;
let right = N - 1;

let currentDist = Number.MAX_VALUE;
let answers = [arr[0], arr.at(-1)]

while (left < right) {
    const value = arr[left] + arr[right];

    if (Math.abs(value) < Math.abs(currentDist)) {
        currentDist = value;
        answers = [arr[left], arr[right]];
    }

    if (value >= 0) {
        right--;
    } else {
        left++;
    }
}

console.log(answers.sort((a, b) => a - b).join(' '))