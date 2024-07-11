const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const K = +input[1];

const board = [];
for (let i = 2; i < N + 2; i++) {
    board.push(input[i].split(' ').map(Number));
}

const damages = input.at(-1).split(' ').map(Number);

const bonus = Array.from(Array(N), () => Array(N).fill(false));

const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let answer = 0;

const recursion = (depth, currentBoard, value, currentBonus) => {
    if (depth === K) {
        answer = Math.max(value, answer);
        return;
    }

    const damage = damages[depth];

    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            if (currentBoard[y][x] === 0) continue; 

            let score = 0;
            const initialHealth = currentBoard[y][x];

            if (initialHealth >= 10) {  
                score = initialHealth;
                currentBoard[y][x] = 0;
                recursion(depth + 1, currentBoard.map(row => [...row]), value + score, currentBonus.map(row => [...row]));
                currentBoard[y][x] = initialHealth;
                break;
            }

            if (initialHealth <= damage) {  // 표적 파괴
                score = currentBonus[y][x] ? initialHealth : board[y][x];
                currentBoard[y][x] = 0;

                const history = [];
                for (const [dy, dx] of dp) {
                    const ny = y + dy;
                    const nx = x + dx;

                    if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;

                    if (currentBoard[ny][nx] === 0) {
                        history.push([ny, nx]);
                        currentBonus[ny][nx] = true;
                        currentBoard[ny][nx] = Math.floor(board[y][x] / 4);
                    }
                }

                recursion(depth + 1, currentBoard.map(row => [...row]), value + score, currentBonus.map(row => [...row]));

                currentBoard[y][x] = initialHealth;
                for (const [ny, nx] of history) {
                    currentBoard[ny][nx] = 0;
                    currentBonus[ny][nx] = false;
                }
            } else { 
                currentBoard[y][x] -= damage;
                recursion(depth + 1, currentBoard.map(row => [...row]), value, currentBonus.map(row => [...row]));
                currentBoard[y][x] = initialHealth;
            }

            break;  
        }
    }
};

recursion(0, board.map(row => [...row]), 0, bonus.map(row => [...row]));

console.log(answer);