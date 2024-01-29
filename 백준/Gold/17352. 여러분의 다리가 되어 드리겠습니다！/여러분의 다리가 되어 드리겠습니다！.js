const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const graph = Array.from({length: N + 1}, () => []);
const parents = Array.from({length: N + 1}, () => 0).map((elem, index) => index);


arr.forEach(([start, end], index) => {
    parents[end] = start;
    graph[end].push([start, 0]);
    graph[start].push([end, 0]);
})


const dist = Array.from({length: N + 1}, () => Infinity);
const queue = [];
let current = 0;

for (let i = 1; i < graph.length; i++) {
    if (graph[i].length > 0) {
        queue.push([i, 0]);
        dist[i] = 0;
        break;
    }
}

if (queue.length === 0) {
    queue.push([1, 0]);
    dist[1] = 0;
}


while (queue.length !== current) {
    const [node, weight] = queue[current];

    for (const [nextNode, nextWeight] of graph[node]) {
        if (dist[nextNode] === Infinity) {
            dist[nextNode] = weight + 1;
            queue.push([nextNode, weight + 1]);
        }
    }

    current++;
}
const start = queue[0][0];

for (let i = 1; i < dist.length; i++) {
    if (dist[i] === Infinity) {
        console.log(start, i);
        break;
    }
}