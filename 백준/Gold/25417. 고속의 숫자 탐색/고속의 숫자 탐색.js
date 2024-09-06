const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')


const board = [];
let [ay, ax] = [-1, -1]
for (let i = 0; i < 5; i++) {
    board.push(input[i].split(' ').map(Number));


    for (let x = 0; x < 5; x++) {
        if (board[i][x] === 1) {
            [ay, ax] = [i, x];
        }
    }
}

const [r, c] = input.at(-1).split(' ').map(Number);

const dist = Array.from(Array(5), () => Array(5).fill(Infinity));


const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const queue = [[r, c, 0]];
dist[r][c] = 0;
let current = 0;


const canAccess = (y, x) => !(y > 4 || y < 0 || x > 4 || x < 0)

while (queue.length !== current) {
    const [y, x, w] = queue[current];
    const nw = w + 1;

    for (const [dy, dx] of dp) {
        const [ny, nx] = [dy + y, dx + x];
        if (canAccess(ny, nx) && board[ny][nx] !== -1 && dist[ny][nx] > nw) {
            queue.push([ny, nx, nw]);
            dist[ny][nx] = nw;
        }

        let [cy, cx] = [y, x];
        for (let r = 1; r <= 5; r++) {
            const [ny, nx] = [dy * r + y, dx * r + x];

            if (!canAccess(ny, nx)) {
                break;
            }

            if (board[ny][nx] === -1) {
                break;
            }

            [cy, cx] = [ny, nx];
            if (board[ny][nx] === 7) {
                break;
            }
        }

        if (dist[cy][cx] > nw) {
            dist[cy][cx] = nw;
            queue.push([cy, cx, nw])
        }
    }

    current++;
}


if (dist[ay][ax] === Infinity) {
    console.log(-1)
} else {
    console.log(dist[ay][ax])
}