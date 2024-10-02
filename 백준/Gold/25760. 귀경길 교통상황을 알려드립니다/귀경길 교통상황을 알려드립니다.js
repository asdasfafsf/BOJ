const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')

let index = 0;
const N = +input[index];

const graph = Array.from(Array(N + 1), () => []);

for (let i = 1; i < N; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    graph[s].push(e);
    graph[e].push(s);
}

const depths = Array.from(Array(N + 1), () => Infinity);
const dfs = (depth, start) => {
    for (const node of graph[start]) {
        if (depths[node] >= depth + 1) {
            depths[node] = depth + 1;
            dfs(depth + 1, node);
        }
    }
}

depths[1] = 1;
dfs(1, 1);

const nodes = [0, ...input.at(-1).split(' ').map(Number)];
const arr = [];
for (let i = 1; i <= N; i++) {
    if (nodes[i] === 1) {
        arr.push(depths[i]);
    }
}

let time = 0;
let answer = 0;

arr.sort((a, b) => b - a);

for (let i = 0; i < arr.length; i++) {
    answer = Math.max(answer, arr[i] + time);
    time++;
}

console.log(answer)