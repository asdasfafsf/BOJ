const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(elem => elem.trim().split('').map(Number));
const answer = arr.map(elem => elem.map(elemElen => 0));
const visited = arr.map(elem => elem.map(elemElen => false));

const root = arr.map(elem => elem.map(elemElen => []));

const dp = [[1, 0], [-1, 0], [0, 1], [0, -1]];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (arr[i][j] !== 0 || visited[i][j] === true) {
            continue
        }

        const queue = [[i, j]];
        visited[i][j] = true;
        let current = 0;

        while (queue.length !== current) {
            const [cy, cx] = queue[current];

            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + cy, dx + cx];

                if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
                    continue;
                }
                if (visited[ny][nx] === false && arr[ny][nx] === 0) {
                    queue.push([ny, nx])
                    visited[ny][nx] = true;
                }
            }

            current++;
        }

        for (const [y, x] of queue) {
            root[y][x] = queue;
        }
    }
}


for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (root[y][x].length === 0) {
            const list = [];

            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + y, dx + x];

                if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
                    continue;
                }

                if (root[ny][nx].length !== 0) {
                    if (!list.includes(root[ny][nx])) {
                        list.push(root[ny][nx])
                    }
                }
            }

            const a = list
                .map(elem => elem.length)
                .reduce((pv, cv) => (pv + cv) % 10, 1);

            answer[y][x] = a;
        }
    }
}

console.log(answer.map(elem => elem.join('')).join('\n'))