const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const map = input.map(elem => elem.split(''));


const answer = [0, 0];
const visited = Array.from(Array(N), () => Array(M).fill(false));
for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (visited[y][x]) {
            continue;
        }
        const queue = [[y, x]];
        visited[y][x] = true;
        let current = 0;

        const color = map[y][x];
        const index = map[y][x] === 'B' ? 1 : 0;
        let count = 1;
        
        while (queue.length !== current) {
            const [y, x] = queue[current];

            for (const [dy, dx] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                const [ny, nx] = [dy + y, dx + x];

                if (ny >= N || ny < 0 || nx >= M || nx < 0 || visited[ny][nx] || map[ny][nx] !== color) {
                    continue;
                }

                count++;
                queue.push([ny, nx]);
                visited[ny][nx] = true;
            }

            current++;
        }

        answer[index] += Math.pow(count, 2);
    }
}

console.log(answer.join(' '))