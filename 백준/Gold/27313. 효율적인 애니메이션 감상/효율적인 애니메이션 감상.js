const [[N, M, K], l] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const newL = l.filter(elem => elem <= M)
    .sort((a, b) => a - b);
const arr = [];

for (let i = 0; i < newL.length; i++) {
    if (i < K) {
        arr.push(newL[i]);
    } else {
        if (arr[i - K] + newL[i] > M) {
            break;
        }
        arr.push(arr[i - K] + newL[i])
    }
}

console.log(arr.length)