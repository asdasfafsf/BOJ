const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));


let answer = 0;
const dp = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const recursion = (depth) => {
    if (depth === 3) {
        const history = [];
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                expand(i, j, arr, history);
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


    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] === 0) {
                arr[i][j] = 1;
                recursion(depth + 1);
                arr[i][j] = 0;
            }
        }
    }
}

const expand = (y, x, arr, history) => {
    if (arr[y][x] !== 2) {
        return;
    }

    for (const [dy, dx] of dp) {
        const [ty, tx] = [y + dy, x + dx];

        if (ty > -1 && ty < N && tx > -1 && tx < M) {
            if (arr[ty][tx] === 0) {
                arr[ty][tx] = 2;
                history.push([ty, tx]);
                expand(ty, tx, arr, history);
            }
        }
    }
}

recursion(0)

console.log(answer);

