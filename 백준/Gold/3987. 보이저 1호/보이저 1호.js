const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const [cy, cx] = input.pop().split(' ').map(v => v - 1);
const map = input.map(elem => elem.split(''));

const dp = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const ds = 'URDL';

let maxDirection = -1;
let max = -1;

for (let d = 0; d < 4; d++) {
    const visited = Array.from({ length: 4 }, () =>
        Array.from({ length: N }, () => Array(M).fill(false))
    );
    visited[d][cy][cx] = true;

    let y = cy;
    let x = cx;
    let dir = d;
    let dist = 1;

    while (true) {
        const [dy, dx] = dp[dir];
        const ny = y + dy;
        const nx = x + dx;

        if (ny < 0 || ny >= N || nx < 0 || nx >= M) {
            break;
        }

        y = ny;
        x = nx;
        dist++;

        if (visited[dir][y][x]) {
            console.log(ds[d]);
            console.log('Voyager');
            process.exit(0);
        }

        visited[dir][y][x] = true;

        if (map[y][x] === '/') {
            dir = dir ^ 1;
        } else if (map[y][x] === '\\') {
            dir = dir ^ 3;
        } else if (map[y][x] === 'C') {
            dist--;
            break;
        }
    }

    if (dist > max) {
        max = dist;
        maxDirection = d;
    }
}


console.log(ds[maxDirection]);
console.log(max);