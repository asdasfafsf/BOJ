const [[N, M], ...banner] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



let answer = 0;

const visited = Array.from(Array(N), () => Array(M).fill(false));

const dp = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (visited[y][x] === true || banner[y][x] === 0) {
            continue;
        }
        answer++;
        const queue = [[y, x]];
        visited[y][x] = true;
        let current = 0;

        while (queue.length !== current) {
            const [cy, cx] = queue[current];

            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + cy, dx + cx];

                if (ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx] === true || banner[ny][nx] === 0) {
                    continue;
                }

                visited[ny][nx] = true;
                queue.push([ny, nx]);
            }

            current++;
        }
    }
}   

console.log(answer)
