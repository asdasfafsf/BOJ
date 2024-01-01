
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' :'./input.txt')
    .toString()
    .trim()
    .split('\n');


const [N, M, R] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));

const arrs = [
    arr,
    [...arr.map(elem => [...elem])],
]

const loopCount = Math.min(N, M) / 2;

for (let c = 0; c < R; c++) {
    const ori = arrs[c % 2];
    const target = arrs[(c + 1) % 2];


    for (let l = 0; l < loopCount; l++) {

        for (let i = l; i < M - l - 1; i++) {
            target[l][i] = ori[l][i + 1];
            target[N - l - 1][i + 1] = ori[N - l - 1][i];
        }

        for (let i = l; i < N - l - 1; i++) {
            target[i + 1][l] = ori[i][l];
            target[i][M - l - 1] = ori[i + 1][M - l - 1];
        }

    }
}

console.log(arrs[R % 2].map(elem => elem.join(' ')).join('\n'));

