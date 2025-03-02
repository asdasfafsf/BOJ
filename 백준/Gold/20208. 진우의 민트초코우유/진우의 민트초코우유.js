const [[N, M, H], ...map] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

let [sy, sx] = [-1, -1];
const mint = [];

for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
        if (map[y][x] === 1) {
            [sy, sx] = [y, x];
        } else if (map[y][x] === 2) {
            mint.push([y, x]);
        }
    }
}

mint.push([sy, sx]);
mint.reverse();

const dist = Array.from(Array(mint.length), () => Array(mint.length).fill(0));

for (let i = 0; i < mint.length; i++) {
    const [sy, sx] = mint[i];
    for (let j = 0; j < mint.length; j++) {
        if (i !== j) {
            const [ey, ex] = mint[j];
            dist[i][j] = Math.abs(sy - ey) + Math.abs(sx - ex);
        }
    }
}

let answer = 0;

const recursion = (depth, visited, current, hp) => {
    if (hp >= dist[current][0]) {
        answer = Math.max(answer, depth);
    }

    for (let i = 1; i < mint.length; i++) {
        if (visited[i] || dist[current][i] > hp) {
            continue;
        }
        visited[i] = true;
        recursion(depth + 1, visited, i, hp - dist[current][i] + H);
        visited[i] = false;
    }
};

const visited = Array(N + 1).fill(false);
visited[0] = true;
recursion(0, visited, 0, M);

console.log(answer);