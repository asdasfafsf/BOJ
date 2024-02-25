const [[N], [r1, c1, r2, c2]] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const dp = [[-2, -1], [-2, 1], [0, -2], [0, 2], [2, -1], [2, 1]]
const dists = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));
const canVisit = (r, c) => r >= 0 && r < N && c >= 0 && c < N;


const queue = [[r1, c1, 0]];
dists[r1][c1] = 0;

let current = 0;


while (queue.length !== current) {
    const [cr, cc, cd] = queue[current];
    const nd = cd + 1;

    if (cd > dists[cr][cc]) {
        dists[cr][cc] = cd;
        continue;
    }

    for (const [dr, dc] of dp) {
        const [nr, nc] = [dr + cr, cc + dc];

        if (!canVisit(nr, nc)) {
            continue;
        }

        if (dists[nr][nc] > nd) {
            dists[nr][nc] = nd;
            queue.push([nr, nc, nd]);
        }
    }

    current++;
}

console.log(dists[r2][c2] === Infinity ? -1 : dists[r2][c2])