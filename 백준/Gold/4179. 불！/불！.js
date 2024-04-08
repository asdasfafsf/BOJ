const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());


const [R, C] = input[0].split(' ').map(Number);
const map = input.slice(1).map(elem => elem.split(''));

const fQueue = [];
const fDist = Array.from(Array(R), () => Array(C).fill(-1));
const jQueue = [];
const jDist = Array.from(Array(R), () => Array(C).fill(-1));


for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {

        if (map[i][j] === 'J') {
            jQueue.push([i, j, 0])
            jDist[i][j] = 0;
        } else if (map[i][j] === 'F') {
            fQueue.push([i, j, 0]);
            fDist[i][j] = 0;
        }
    }
}


const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
let current = 0;

while (fQueue.length !== current) {
    const [cy, cx, cw] = fQueue[current];
    const nw = cw + 1;
    for (const [dy, dx] of dp) {
        const [ny, nx] = [dy + cy, dx + cx];

        if (ny >= R || ny < 0 || nx >= C || nx < 0 || fDist[ny][nx] !== -1 || map[ny][nx] === '#') {
            continue;
        }

        fQueue.push([ny, nx, nw]);
        fDist[ny][nx] = nw;
    }

    current++;
}

current = 0;

while (jQueue.length !== current) {
    const [cy, cx, cw] = jQueue[current];
    const nw = cw + 1;
    for (const [dy, dx] of dp) {
        const [ny, nx] = [dy + cy, dx + cx];

        if (ny >= R || ny < 0 || nx >= C || nx < 0 || jDist[ny][nx] !== -1 || map[ny][nx] === '#' || (fDist[ny][nx] <= nw && fDist[ny][nx] !== -1)) {
            continue;
        }

        jQueue.push([ny, nx, nw]);
        jDist[ny][nx] = nw;
    }

    current++;
}

let answer = 999999999999;

for (const [y, x, w] of jQueue) {
    for (const [dy, dx] of dp) {
        const [ny, nx] = [dy + y, dx + x];

        if (ny >= R || ny < 0 || nx >= C || nx < 0) {
            answer = Math.min(w, answer);
        }
    }
}
console.log(answer === 999999999999 ? 'IMPOSSIBLE' : answer + 1);