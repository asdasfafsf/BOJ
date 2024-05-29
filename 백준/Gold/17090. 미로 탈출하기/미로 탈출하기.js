const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const visited = Array.from(Array(N), () => Array(M).fill(0));
const miro = input.slice(1).map(elem => elem.split(''));

const moveMap = {
    'R': [0, 1],
    'D': [1, 0],
    'L': [0, -1],
    'U': [-1, 0]
}


let answer = 0;

for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (visited[y][x] !== 0) {
            continue;
        }

        const queue = [[y, x]];
        visited[y][x] = 1;
        let current = 0;

        let isOk = false;

        while (queue.length !== current) {
            const [cy, cx] = queue[current];
            const action = miro[cy][cx];

            const [dy, dx] = moveMap[action];
            const [ny, nx] = [dy + cy, dx + cx];

            if (ny >= N || ny < 0 || nx >= M || nx < 0) {
                isOk = true;
                break;
            }

            if (visited[ny][nx] !== 0) {
                if (visited[ny][nx] === 2) {
                    isOk = true;
                }
                break;
            }

            queue.push([ny, nx]);
            visited[ny][nx] = 1;
            current++;
        }

        if (isOk) {
            queue.forEach(([y, x]) => visited[y][x] = 2);
            answer += queue.length;
        }
    }
}

console.log(answer)
              