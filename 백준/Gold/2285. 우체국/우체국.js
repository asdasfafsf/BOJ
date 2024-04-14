const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = BigInt(input[0]);
const arr = input.slice(1).map(elem =>  elem.split(' ').map(BigInt));

arr.sort((a, b) => Number(a[0] - b[0]));
const sum = arr.reduce((pv, cv) => pv + cv[1], 0n);
const mid = (sum + 1n) / 2n;

let answer = 0;
let count = 0n;
for (let i = 0; i < arr.length; i++) {
    count += arr[i][1];

    if (count >= mid) {
        answer = arr[i][0];
        break;
    }
}

console.log(answer.toString());