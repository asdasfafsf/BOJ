const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



const [N, M] = input[0].split(' ').map(Number);
const dp = {
    'N': [-1, 0],
    'W': [0, -1],
    'E': [0, 1],
    'S': [1, 0]
};


const map = [];

for (let i = 1; i < input.length; i++) {
    map.push(input[i].split(''));
}


let answer = 0;
let cycle = 1;

const visited = Array.from(Array(N), () => Array(N).fill(0));

for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
        if (visited[y][x] > 0) {
            continue;
        }

        visited[y][x] = cycle;
        answer++;

        const stack = [[y, x]];

        while (stack.length) {
            const [cy, cx] = stack.pop();
            const [dy, dx] = dp[map[cy][cx]];
            const [ny, nx] = [dy + cy, dx + cx];

            if (ny >= N || ny < 0 || nx >= M || nx < 0) {
                continue;
            }

            if (visited[ny][nx] > 0) {
                if (visited[ny][nx] !== cycle) {
                    answer--;
                }
                break;
            }

            stack.push([ny, nx])
            visited[ny][nx] = cycle;
        }

        cycle++;
    }
}

console.log(answer)