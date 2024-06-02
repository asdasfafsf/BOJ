const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];

const depth = Array.from(Array(N), () => -1);
const parents = Array.from(Array(N), () => Array(20).fill(-1));
const graph = Array.from(Array(N), () => []);
depth[0] = 0;



for (let i = 1; i < N; i++) {
    const [v1, v2] = input[i].split(' ').map(elem => elem - 1);
    graph[v2].push(v1);
    graph[v1].push(v2);
}

const recursion = node => {
    for (const nextNode of graph[node]) {
        if (depth[nextNode] === -1) {
            parents[nextNode][0] = node;
            depth[nextNode] = depth[node] + 1
            recursion(nextNode);
        }
    }
}

recursion(0);

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < N; j++) {
        if (parents[j][i] !== -1) {
            parents[j][i + 1] = parents[parents[j][i]][i];
        }
    }
}


const answer = [];


for (let i = N + 1; i < input.length; i++) {
    let [v1, v2] = input[i].split(' ').map(elem => elem - 1);

    if (depth[v1] < depth[v2]) {
        [v1, v2] = [v2, v1];
    }

    for (let i = 19; i >= 0; i--) {
        if (depth[v1] - depth[v2] >= (1 << i)) {
            v1 = parents[v1][i];
        }
    }
    if (v1 === v2) {
        answer.push(v1 + 1);
        continue;
    }

    for (let i = 19; i>= 0; i--) {
        if (parents[v1][i] !== parents[v2][i]) {
            v1 = parents[v1][i];
            v2 = parents[v2][i];
        }
    }

    answer.push(parents[v2][0] + 1)
}

console.log(answer.join('\n'))