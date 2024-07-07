const [[N], ...roads] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const graph = Array.from(Array(N), () => []);

for (const [A, B, C] of roads) {
    graph[A - 1].push([B - 1, C])
    graph[B - 1].push([A - 1, C])
}

const dist = Array(N).fill(Infinity);
const queue = [[0, 0]];
let current = 0;
dist[0] = 0;

while (queue.length !== current) {
    const [node, weight] = queue[current];

    for (const [nextNode, nextWeight] of graph[node]) {
        const newWeight = weight + nextWeight;

        if (dist[nextNode] === Infinity) {
            dist[nextNode] = newWeight;
            queue.push([nextNode, newWeight])
        }
    }

    current++;
}
console.log(Math.max(...dist));