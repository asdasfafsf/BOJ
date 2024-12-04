const [[N], ...area] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number))



const visited = Array.from(Array(N), () => Array(N).fill(false));
const queue = [[0, 0, area[0][0]]];
visited[0][0] = true;
let current = 0;


while (queue.length !== current) {
    const [y, x] = queue[current];
    const dist = area[y][x];

    for (const [dy, dx] of [[0, 1], [1, 0]]) {
        const [ny, nx] = [dy * dist + y, dx * dist + x];

        if (ny >= N || ny < 0 || nx >= N || nx < 0 || visited[ny][nx] === true) {
            continue;
        }

        visited[ny][nx] = true;
        queue.push([ny, nx, area[ny][nx]])
    }

    current++;
}

console.log(visited[N - 1][N - 1] === true ? 'HaruHaru' : 'Hing');