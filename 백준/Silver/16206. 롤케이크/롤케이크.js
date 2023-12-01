const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const cakes = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => {
        const aR = a % 10;
        const bR = b % 10;

        if (aR === 0 && bR === 0) {
            return a - b;
        } else if (aR === 0) {
            return -1;
        } else if (bR === 0) {
            return 1;
        } 

        return b - a;
    })

let count = 0;
let pieces = 0;

for (let i = 0; i < cakes.length && count < M; i++) {
    const cake = cakes[i];

    if (cake === 10) {
        pieces++;
        continue;
    }

    let cutCount = Math.floor((cake - 0.1) / 10);
    if (count + cutCount <= M) {
        count += cutCount;
        pieces += cutCount
        if (cake % 10 === 0) {
            pieces++;
        }   
    } else {
        const able = M - count;
        count += able;
        pieces += able;

        if (cake - (10 * able) === 10) {
            pieces++;
        }
    }
}

console.log(pieces)