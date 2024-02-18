const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const maxDepth = 5;
let answer = 0;
let count = 0;
let pruningCount = 0;
const answers = Array.from({length: 11}, () => 0);


const isChange = (board, newBoard) => {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] !== newBoard[i][j]) {
                return true;
            }
        }
    }

    return false;
}

const recursion = (depth, d, board) => {
    count++;
    let currentMax = 0;
    const newBoard = board.map(elem => elem.map(elemElem => {
        currentMax = Math.max(currentMax, elemElem);
        return elemElem;
    }));
    
    if (d === 0) {
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
                    currentMax = Math.max(newBoard[curY][x], currentMax);
                } else {
                    curY++;
                    newBoard[curY][x] = newBoard[y][x];
                    if (curY !== y) {
                        newBoard[y][x] = 0;
                    }
                }
            }
        }
    } else if (d === 1) {
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
                    currentMax = Math.max(currentMax, newBoard[y][curX]);
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
    } else if (d === 2) {
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
                    currentMax = Math.max(newBoard[y][curX], currentMax);
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
                    currentMax = Math.max(currentMax, newBoard[curY][x]);
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

    answer = Math.max(currentMax, answer);
    if (!isChange(board, newBoard)) {
        return;
    }

    if (depth === maxDepth - 1) {
        if (currentMax > answers[depth + 1]) {
            answers[depth + 1] = Math.max(answers[depth + 1], currentMax);

            for (let i = maxDepth; i > 0; i--) {
                answers[i - 1] = (answers[i] / 2);
            }
        }   

        return;
    }

    if (currentMax <= answers[depth + 1]) {
        pruningCount++;
        return;
    }

    recursion(depth + 1, (d + 0) % 4, newBoard);
    recursion(depth + 1, (d + 1) % 4, newBoard);
    recursion(depth + 1, (d + 2) % 4, newBoard);
    recursion(depth + 1, (d + 3) % 4, newBoard);
}

answer = Math.max(answer, ... arr.flat());
recursion(0, 0, arr)
recursion(0, 1, arr)
recursion(0, 2, arr)
recursion(0, 3, arr)

console.log(answer);