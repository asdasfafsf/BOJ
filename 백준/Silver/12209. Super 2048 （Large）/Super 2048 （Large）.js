const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

let T = +input[0];
let index = 0;
const answer = [];

while(T--) {
    const [N, direction] = input[++index].split(' ');
    const board = [];
    for (let i = 0; i < +N; i++) {
        board.push(input[++index].split(' ').map(Number));
    }

    const newBoard = board.map(elem => [...elem]);

    if (direction === 'up') {
        for (let x = 0; x < N; x++) {
            let curY = 0;
            for (let y = 1; y < N; y++) {
                if (newBoard[y][x] === 0) {
                    continue;
                }

                if (newBoard[curY][x] === 0) {
                    newBoard[curY][x] = newBoard[y][x];
                    newBoard[y][x] = 0;
                } else if (newBoard[curY][x] === newBoard[y][x]) {
                    newBoard[curY][x] *= 2;
                    newBoard[y][x] = 0;
                    curY++;
                } else {
                    curY++;
                    newBoard[curY][x] = newBoard[y][x];
                    if (curY !== y) {
                        newBoard[y][x] = 0;
                    }
                }
            }
        }
    } else if (direction === 'left') {
        for (let y = 0; y < N; y++) {
            let curX = 0;
            for (let x = 1; x < N; x++) {
                if (newBoard[y][x] === 0) {
                    continue;
                }

                if (newBoard[y][curX] === 0) {
                    newBoard[y][curX] = newBoard[y][x];
                    newBoard[y][x] = 0;
                } else if (newBoard[y][curX] === newBoard[y][x]) {
                    newBoard[y][curX] *= 2;
                    newBoard[y][x] = 0;
                    curX++;
                } else {
                    curX++;
                    newBoard[y][curX] = newBoard[y][x];

                    if (curX !== x) {
                        newBoard[y][x] = 0;
                    }
                }
            }
        }
    } else if (direction === 'right') {
        for (let y = 0; y < N; y++) {
            let curX = N - 1;
            for (let x = N - 2; x >= 0; x--) {
                if (newBoard[y][x] === 0) {
                    continue;
                }

                if (newBoard[y][curX] === 0) {
                    newBoard[y][curX] = newBoard[y][x];
                    newBoard[y][x] = 0;
                } else if (newBoard[y][curX] === newBoard[y][x]) {
                    newBoard[y][curX] *= 2;
                    newBoard[y][x] = 0;
                    curX--;
                } else {
                    curX--;
                    newBoard[y][curX] = newBoard[y][x];
                    if (curX !== x) {
                        newBoard[y][x] = 0;
                    }
                }
            }
        }
    } else {
        for (let x = 0; x < N; x++) {
            let curY = N - 1;
            for (let y = N - 2; y >= 0; y--) {
                if (newBoard[y][x] === 0) {
                    continue;
                }
                
                if (newBoard[curY][x] === 0) {
                    newBoard[curY][x] = newBoard[y][x];
                    newBoard[y][x] = 0; 
                } else if (newBoard[curY][x] === newBoard[y][x]) {
                    newBoard[curY][x] *= 2;
                    newBoard[y][x] = 0;
                    curY--;
                } else {
                    curY--;
                    newBoard[curY][x] = newBoard[y][x];
                    if (curY !== y) {
                        newBoard[y][x] = 0;
                    }
                }
            }
        }
    }

    answer.push(`Case #${answer.length + 1}:\n${newBoard.map(row => row.join(' ')).join('\n')}`);
}

console.log(answer.join('\n'))