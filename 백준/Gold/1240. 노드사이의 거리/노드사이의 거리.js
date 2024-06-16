const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .toString()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const dist = Array.from(Array(N), () => Array(N).fill(Infinity));
const graph = Array.from(Array(N), () => []);
for (let i = 1; i < N; i++) {
    const [v1, v2, weight] = input[i].split(' ').map(Number);
    graph[v1 - 1].push([v2 - 1, weight]);
    graph[v2 - 1].push([v1 - 1, weight]);
}


for (let i = 0; i < N; i++) {
    dist[i][i] = 0;
}

let count = 0;
for (let i = 0; i < N; i++) {
    const queue = [[i, 0]];
    let current = 0;

    while (queue.length !== current) {
        const [node, weight] = queue[current];

        for (const [nextNode, nextWeight] of graph[node]) {
            if (dist[i][nextNode] > weight + nextWeight) {
                dist[i][nextNode] = weight + nextWeight;
                queue.push([nextNode, weight + nextWeight]);
            }
        }

        current++;
        count++;
    }
}

const answer = [];
for (let i = N; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(elem => elem - 1);
    answer.push(dist[s][e])
}

console.log(answer.join('\n'))