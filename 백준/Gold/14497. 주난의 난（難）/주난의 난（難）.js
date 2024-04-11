const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());

const [N, M] = input[0].split(' ').map(Number);
const [y1, x1, y2, x2] = input[1].split(' ').map(elem => elem -1);


const map = input.slice(2).map(elem => elem.split(''));

const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let answer = 90000;

const recursion = (depth, y, x, map) => {
    const newMap = map.map(elem => [...elem]);
    let current = 0;
    const queue = [[y, x]];
    const visited = Array.from(Array(N), () => Array(M).fill(false));
    visited[y][x] = true;

    let isClear = false;

    while (queue.length !== current && !isClear) {
        const [cy, cx] = queue[current];

        for (const [dy, dx] of dp) {
            const [ny, nx] = [cy + dy, dx + cx];

            if (ny < 0 || ny >= N || nx < 0 || nx >= M || visited[ny][nx]) {
                continue;
            }

            visited[ny][nx] = true;

            if (newMap[ny][nx] === '1') {
                newMap[ny][nx] = '0';
                continue;
            }

            if (newMap[ny][nx] === '#') {
                isClear = true;
                break;
            }

            queue.push([ny, nx]);
        }

        current++;
    }

    if (isClear) {
        answer = Math.min(answer, depth);
        return;
    }

    recursion(depth + 1, y, x, newMap);
}

recursion(1, y1, x1, map);

console.log(answer)