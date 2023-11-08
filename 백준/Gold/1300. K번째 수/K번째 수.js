const fs = require('fs')
const [N, k] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(Number)



let left = 1;
let right = k;


while (left <= right) {
    const mid = (left + right) >> 1
    let count = 0;

    let remainder = 0;

    for (let i = N; i > 0; i--) {
        let num = Math.floor(mid / i);

        if (num > N) {
            remainder = i;
            break;
        }

        count += num;
    }

    count += remainder * N;

    if (count < k) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}


console.log(left);