
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
	.toString()
    .trim()
	.split('\n')

const EMPTY = '.';
const WHITE = 'W';
const BLACK = 'B'


const N = +input.shift();
const points = input.map(elem => elem.split(' ').map(elem => elem - 1));
const board = Array.from(Array(6), () => Array(6).fill(EMPTY));

board[2][2] = WHITE;
board[2][3] = BLACK;
board[3][2] = BLACK;
board[3][3] = WHITE;


let turn = BLACK;
let enemey = WHITE;
const dp = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];


let ii = 0;
for (const [r, c] of points) {
    board[r][c] = turn;

    for (const [dy, dx] of dp) {
        let count = 0;
        let isEdge = false;

        for (let i = 1; i < 6; i++) {
            const [ny, nx] = [dy * i, dx * i];
            const [nr, nc] = [ny + r, nx + c];

            if (nr >= 6 || nr < 0 || nc >= 6 || nc < 0) {
                continue;
            }

            if (board[nr][nc] === turn) {
                count = i;
                isEdge = true;
                break;
            }

            if (board[nr][nc] !== enemey) {
                break;
            }
        }

        if (isEdge) {
            for (let i = 0; i < count; i++) {
                const [ny, nx] = [dy * i, dx * i];
                const [nr, nc] = [ny + r, nx + c];

                board[nr][nc] = turn;
            }
        }
    }

    turn = turn === BLACK ? WHITE : BLACK;
    enemey = enemey === BLACK ? WHITE : BLACK;

    // console.log(board.map(elem => elem.join('')).join('\n'))
    // console.log()
    ii++;
}


let bCount = 0;
let wCount = 0;

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === BLACK) {
            bCount++;
        } else if (board[i][j] === WHITE) {
            wCount++;
        }
    }
}

console.log(board.map(elem => elem.join('')).join('\n'))
console.log(bCount > wCount ? 'Black' : 'White')