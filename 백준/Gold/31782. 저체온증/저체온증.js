const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M, K] = input.shift().split(' ').map(Number);
const map = input.map(elem => elem.split(''));
const directions = [[1, 0], [0, -1], [-1, 0], [0, 1]];

const recovery = (map) => {
    const queue = [];
    const visited = Array.from(Array(N), () => Array(M).fill(false));
    let changed = false;
    let head = 0;

    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (map[y][x] === '.' && !visited[y][x]) {
                let count = 0;
                for (const [dy, dx] of directions) {
                    const [ny, nx] = [y + dy, x + dx];
                    if (ny >= 0 && ny < N && nx >= 0 && nx < M && map[ny][nx] === 'O') {
                        count++;
                    }
                }
                if (count >= 2) {
                    map[y][x] = 'O';
                    changed = true;
                    queue.push([y, x]);
                }
            }
        }
    }

    while (queue.length > head) {
        const [y, x] = queue[head++];
        for (const [dy, dx] of directions) {
            const [ny, nx] = [y + dy, x + dx];
            if (ny >= 0 && ny < N && nx >= 0 && nx < M && map[ny][nx] === '.' && !visited[ny][nx]) {
                let count = 0;
                for (const [ddy, ddx] of directions) {
                    const [nny, nnx] = [ny + ddy, nx + ddx];
                    if (nny >= 0 && nny < N && nnx >= 0 && nnx < M && map[nny][nnx] === 'O') {
                        count++;
                    }
                }
                if (count >= 2) {
                    map[ny][nx] = 'O';
                    visited[ny][nx] = true;
                    queue.push([ny, nx]);
                }
            }
        }
    }
    return changed;
};

while (recovery(map));

const visited = Array.from(Array(N), () => Array(M).fill(false));
let result = 0;

for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (map[y][x] === 'O' && !visited[y][x]) {
            const queue = [[y, x]];
            let group = [];
            let current = 0;
            let minX = x, maxX = x, minY = y, maxY = y;
            visited[y][x] = true;

            while (queue.length !== current) {
                const [cy, cx] = queue[current];
                group.push([cy, cx]);
                minX = Math.min(minX, cx);
                maxX = Math.max(maxX, cx);
                minY = Math.min(minY, cy);
                maxY = Math.max(maxY, cy);
                for (const [dy, dx] of directions) {
                    const [ny, nx] = [dy + cy, dx + cx];
                    if (ny >= 0 && ny < N && nx >= 0 && nx < M && map[ny][nx] === 'O' && !visited[ny][nx]) {
                        visited[ny][nx] = true;
                        queue.push([ny, nx]);
                    }
                }
                current++;
            }

            const width = maxX - minX + 1;
            const height = maxY - minY + 1;

            if (width > K && height > K) {
                result += group.length;
            }
        }
    }
}

console.log(result);