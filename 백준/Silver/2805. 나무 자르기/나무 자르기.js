
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ')
    .map(Number);

  
let [left, right] = [0, Math.max(...arr)];
let mid = (left + right) >> 1;

const cal = (arr, mid) => arr.reduce((pv, cv) => pv + Math.max(0,(cv - mid)), 0)
let sum = cal(arr, mid);

while (left <= right) {
    sum = cal(arr, mid);

    if (sum >= M) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
    mid = (left + right) >> 1;
}


console.log(right)



