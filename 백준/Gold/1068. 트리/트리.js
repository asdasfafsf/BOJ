
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const parents = input[1].split(' ').map(Number);
const removed = +input[2];


const graph = Array.from({length: N}, () => []);
for (let i = 0; i < parents.length; i++) {
    const parent = parents[i];

    if (parent > -1 && i !== removed) {
        graph[parent].push(i)
    }
}

const queue = [removed];
let current = 0;

while(queue.length !== current) {
    const node = queue[current];

    for (const child of graph[node]) {
        queue.push(child)
    }

    graph[node] = undefined;

    current++;
}

const answer = graph.reduce((pv, cv) => pv + (cv?.length === 0 ? 1 : 0), 0)
console.log(answer)