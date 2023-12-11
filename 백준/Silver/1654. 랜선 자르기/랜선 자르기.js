const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const [K, N] = input[0].split(' ').map(Number);
const arr = [];


for (let i = 1; i < input.length; i++) {
    arr.push(+input[i])
}

let right = Math.max(...arr);
let left = 1;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let total = arr.reduce((pv, cv) => pv + Math.floor(cv / mid), 0);

    if (total < N) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(right)