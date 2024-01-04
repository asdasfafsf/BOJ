const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));


let answer = 0;
const dp = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const setupWall = (depth, current) => {
    if (depth === 3) {
        const history = [];
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (arr[i][j] === 2) {
                    spread(i, j, arr, history);
                }
            }
        }

        let sum = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (arr[i][j] === 0) {
                    sum++;
                }
            }
        }

    
        answer = Math.max(sum, answer);
        for (const [y, x] of history) {
            arr[y][x] = 0;
        }
        return;
    }


    for (let i = current; i < N * M; i++) {
        const x = i % M;
        const y = Math.floor(i / M);
        if (arr[y][x] === 0) {
            arr[y][x] = 1;
            setupWall(depth + 1, i + 1);
            arr[y][x] = 0;
        }
    }

}

const spread = (y, x, arr, history) => {
    for (const [dy, dx] of dp) {
        const [ty, tx] = [y + dy, x + dx];

        if (ty > -1 && ty < N && tx > -1 && tx < M) {
            if (arr[ty][tx] === 0) {
                arr[ty][tx] = 2;
                history.push([ty, tx]);
                spread(ty, tx, arr, history);
            }
        }
    }
}

setupWall(0, 0)

console.log(answer);
