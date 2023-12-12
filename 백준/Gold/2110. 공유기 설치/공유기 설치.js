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

arr.sort((a, b) => a - b);

let right = Math.max(...arr);
let left = 1;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let total = 1;
    let cur = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (cur + mid <= arr[i]) {
            total++;
            cur = arr[i];
        }
    }

    if (total < N) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(right)