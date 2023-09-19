const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n');


const [N, K] = input[0].split(' ').map(Number);
const arr = [0, ...input[1].split(' '), 0].map(Number);

for (let i = 1; i < arr.length - 1; i++) {
    arr[i] += arr[i - 1];
}

let start = 0;
let end = start + K;
let max = arr[end] - arr[start];


while (end < arr.length - 1) {
    const sv = arr[start];
    const ev = arr[end];

    max = Math.max(ev - sv, max);

    start++;
    end++;
}

console.log(max);