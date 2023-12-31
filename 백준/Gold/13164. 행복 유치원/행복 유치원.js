
const [[N, K], [...arr]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const dist = Array.from({length: arr.length - 1}, () => 0);


for (let i = 0; i < dist.length; i++) {
    dist[i] = arr[i + 1] - arr[i];
}

dist.sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < (N - K); i++) {
    answer += dist[i];
}

console.log(answer);