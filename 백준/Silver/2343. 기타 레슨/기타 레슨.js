
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);


let low = Math.max(...arr);
let high = arr.reduce((pv, cv) => pv + cv, 0);


while(low <= high) {
    let count = 0;
    let sum = 0;
    let mid = low + high >> 1

    for (let i = 0; i < n; i++) {
        if (sum + arr[i] > mid) {
            sum = 0;
            count++;
        }

        sum += arr[i];
    }

    if (sum !== 0) {
        count++;
    }

    if (count <= m) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
}

console.log(low)