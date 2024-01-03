const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')


const [N, K] = input[0].split(' ').map(Number);
const [S, X, Y] = input.at(-1).split(' ').map(Number);

const arr = input.slice(1, -1).map(elem => elem.split(' ').map(Number));
const dp  = [[1, 0], [-1, 0], [0, 1], [0, -1]];


const arrs = [
    arr,
    arr.map(elem => elem.map(elem => elem))
]


for (let s = 0; s < S; s++) {
    const current = arrs[s % 2];
    const target = arrs[(s + 1) % 2];


    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            if (target[y][x] !== 0) {
                continue;
            }
            for (const [dy, dx] of dp) {
                const [ty, tx] = [dy + y, dx + x];

                if (ty > -1 && ty < N && tx > - 1 && tx < N) {
                    if (current[ty][tx] !== 0) {
                        if (target[y][x] === 0) {
                            target[y][x] = current[ty][tx];
                        } else {
                            target[y][x] = Math.min(target[y][x], current[ty][tx]);
                        }
                    }
                }
            }
        }
    }
}

console.log(arrs[S % 2][X - 1][Y - 1]);