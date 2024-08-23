const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const [R, G, B] = input[1].split(' ').map(Number);
const board = Array.from(Array(N), () => Array(M).fill(''));
const colors = ['R', 'G', 'B'];
const counts = { 'R': R, 'G': G, 'B': B };

for (let k = 0; k <= N + M - 2; k++) {
    for (let i = 0; i < N; i++) {
        let j = k - i;
        if (j < 0 || j >= M) continue;

        colors.sort((a, b) => counts[b] - counts[a]);

        for (const color of colors) {
            let isOk = true;
            if (i > 0 && board[i - 1][j] === color) {
                isOk = false;
            }
            if (j > 0 && board[i][j - 1] === color) {
                isOk = false;
            }
            if (isOk && counts[color] > 0) {
                board[i][j] = color;
                counts[color]--;
                break;
            }
        }
    }
}

if (Object.values(counts).every(count => count === 0)) {
    console.log('YES');
    console.log(board.map(elem => elem.join('')).join('\n'))
} else {
    console.log('NO');
}