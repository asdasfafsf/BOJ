const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [R, C] = input.shift().split(' ').map(Number);
const madang = input.map(elem => elem.split(''));
const visited = Array.from(Array(R), () => Array(C).fill(false));


let wolf = 0;
let sheep = 0;

for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
        if (madang[r][c] === '#' || visited[r][c] === true) {
            continue;
        }

        let sheepsAtArea = 0;
        let wolfsAtArea = 0;

        let current = 0;
        const queue = [[r, c]]
        visited[r][c] = true;

        while (queue.length !== current) {
            const [cr, cc] = queue[current];

            if (madang[cr][cc] === 'v') {
                wolfsAtArea++;
            } else if (madang[cr][cc] === 'o') {
                sheepsAtArea++;
            }

            for (const [dr, dc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
                const [nr, nc] = [dr + cr, dc + cc];

                if (nr >= R || nr < 0 || nc >= C || nc < 0 || visited[nr][nc] === true || madang[nr][nc] === '#') {
                    continue;
                }

                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }

            current++;
        }

        if (wolfsAtArea < sheepsAtArea) {
            sheep += sheepsAtArea;
        } else {
            wolf += wolfsAtArea;
        }

    }
}

console.log(sheep, wolf)