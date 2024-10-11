const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')


const [N, M] = input[0].split(' ').map(Number)


const map = [];
let totalDot = 0;
for (let i = 1; i < input.length; i++) {
    map.push(input[i].split(''));

    totalDot += map.at(-1).reduce((pv, cv) => (cv === '.' ? 1 : 0) + pv, 0);
}



const visited = Array.from(Array(N), () => Array(M).fill(false));
const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let eated = 0;
let exit = 0;

for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (visited[y][x] ||'X. '.includes(map[y][x])) {
            continue;
        }

        const queue = [[y, x]];
        visited[y][x] = true;
        let current = 0;
        let isOk = false;

        while (queue.length !== current) {
            const [cy, cx] = queue[current];

            for (const [dy, dx] of dp) {
                const [ny, nx] = [dy + cy, dx + cx];

                if (ny >= N || ny < 0 || nx >= M || nx < 0 || visited[ny][nx] || !'. '.includes(map[ny][nx])) {
                    continue;
                }

                if (map[ny][nx] === '.') {
                    isOk = true;
                    eated++;
                }

                queue.push([ny, nx]);
                visited[ny][nx] = true;
            }

            current++;
        }

        if (isOk) {
            exit++;
        }
    }
}

console.log(exit, (totalDot - eated));