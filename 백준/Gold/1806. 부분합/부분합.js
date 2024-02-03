const [[N, M], [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const prefixSum = [0, arr[0]];

for (let i = 1; i < arr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
}

let left = 0;
let right = 1;
let answer = N + 1;

while (right < prefixSum.length && left <= right) {
    const value = prefixSum[right] - prefixSum[left];

    if (value < M) {
        right++;
    } else if (value >= M) {
        answer = Math.min(answer, right - left);
        left++;
    }
}


console.log(answer === N + 1 ? 0 : answer);