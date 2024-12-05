const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');
    
    
let N = +input[0];
let index = 0;


while(N--) {
    const [r, c] = input[++index].split(' ').map(Number);
    const map = [];

    let [startX, startY] = [0, 0];
    let [destX, destY] = [0, 0];


    for (let y = 0; y < r; y++) {
        map.push(input[++index].split(''));

        for (let x = 0; x < c; x++) {
            if (map[y][x] === 'S') {
                [startX, startY] = [x, y];
            }

            if (map[y][x] === 'F') {
                [destX, destY] = [x, y];
            }
        }
    }

    
    const UP = 0;
    const RIGHT = 1;
    const DOWN = 2;
    const LEFT = 3;

    const dp = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const queue = [[startY, startX, 0, UP], [startY, startX, 0, RIGHT], [startY, startX, 0, DOWN], [startY, startX, 0, LEFT]];
    let current = 0;

    const dist = [];
    dist.push(Array.from(Array(r), () => Array(c).fill(Infinity)));
    dist.push(Array.from(Array(r), () => Array(c).fill(Infinity)));
    dist.push(Array.from(Array(r), () => Array(c).fill(Infinity)));
    dist.push(Array.from(Array(r), () => Array(c).fill(Infinity)));
    for (let i = 0; i < 4; i++) {
        dist[i][startY][startX] = 0;
    }


    while (queue.length !== current) {
        const [y, x, w, d] = queue[current];
        const nw = w + 1;

        for (let i = 0; i < 2; i++) {
            const nd = (d + i) % 4;
            const [dy, dx] = dp[nd];
            const [ny, nx] = [dy + y, dx + x];

            if (ny >= r || ny < 0 || nx >= c || nx < 0 
            || map[ny][nx] === 'X' 
            || dist[nd][ny][nx] <= nw) {
                continue;
            }

            queue.push([ny, nx, nw, nd]);
            dist[nd][ny][nx] = nw;

        }

        current++;

    }

    const result = Math.min(
        dist[UP][destY][destX],
        dist[DOWN][destY][destX],
        dist[RIGHT][destY][destX],
        dist[LEFT][destY][destX],
    )

    console.log(result);
}