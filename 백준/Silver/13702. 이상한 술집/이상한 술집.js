const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const amounts = input.map(Number);

let left = 1;
let right = Math.max(...amounts);
let answer = 0;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    for (const amount of amounts) {
        count += Math.floor(amount / mid);
    }

    if (count >= K) {
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);