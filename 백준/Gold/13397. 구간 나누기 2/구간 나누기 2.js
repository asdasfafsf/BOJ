const [[N, M], [...nums]] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

let left = 0;
let right = 10000;

while (left <= right) {
    const mid = (left + right) >> 1;

    let min = nums[0];
    let max = nums[0];
    let count = 0;

    for (let i = 0; i < N; i++) {
        min = Math.min(nums[i], min);
        max = Math.max(nums[i], max);

        let next = max - min;

        if (next > mid) {
            i--;
            count++;
            min = 10001;
            max = 0;
        }
    }

    if (count < M) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(left)