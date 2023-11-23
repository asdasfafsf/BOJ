const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({length: N + 1}, () => [])

for (let i = 1; i < input.length; i++) {
    const [start, end] = input[i].split(' ').map(Number);

    graph[start].push(end);
    graph[end].push(start);
}

const queue = [[1, 0]];
let current = 0;

const visited = Array.from({length: N + 1}, () => 0);
visited[1] = 1;

let nodes = [];
let maxDistance = 0;

while (queue.length !== current) {
    const [node, weight] = queue[current];

    if (weight > maxDistance) {
        maxDistance = weight;
        nodes = [node];
    } else if (weight === maxDistance) {
        nodes.push(node)
    }

    for (const childNode of graph[node]) {

        if (visited[childNode] === 0) {
            queue.push([childNode, weight + 1]);
            visited[childNode] = 1;
        }
    }

    current++;
}

console.log(Math.min(...nodes), maxDistance, nodes.length)