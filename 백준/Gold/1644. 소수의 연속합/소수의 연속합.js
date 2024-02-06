const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')


const N = +input;
const arr = [0, 0];

for (let i = 2; i <= N; i++) {
    if (arr[i] === 0) {
        continue;
    }
    
    arr[i] = 1;
    for (let j = i + i; j <= N; j += i) {
        arr[j] = 0;
    }
}

const primeNums = [];
for (let i = 0; i <= N; i++) {
    if (arr[i] === 1) {
        primeNums.push(i)
    }
}


const prefixSum = [0];
for (let i = 0; i < primeNums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + primeNums[i];
}


let answer = 0;

for (let i = 0; i < prefixSum.length; i++) {
    let left = i;
    let right = prefixSum.length - 1;

    while (left <= right) {
        const mid = (left + right) >> 1;
        const sum = prefixSum[mid] - prefixSum[i];

        if (sum == N) {
            answer++;
        }

        if (sum > N) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
}

console.log(answer)