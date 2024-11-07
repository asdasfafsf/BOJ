const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');



const [N, M] = input[0].split(' ').map(Number);
const head = input[1];
const graph = {};
const dist = {}


const pp = {};
graph[head] = []
dist[head] = 0;
for (let i = 0; i < N; i++) {
    const [child, ...parents] = input[i + 2].split(' ');

    if (!pp[child]) {
        pp[child] = parents;
    }
    dist[child] = 0;

    for (const parent of parents) {
        if (!graph[parent]) {
            graph[parent] = [];
            
        }
        dist[parent] = 0;
        graph[parent].push(child)
    }
}


dist[head] = 1;
const queue = [head];

let current = 0;

while (queue.length !== current) {
    const parent = queue[current];

    if (graph[parent]) {
        for (const child of graph[parent]) {
            const [parent1, parent2] = pp[child];
    
            const newDist = (dist[parent1] / 2) + (dist[parent2] / 2);
            dist[child] = newDist;
            queue.push(child);
        }
    }

    current++;
}
// console.log(dist)
let answer = '';
let blood = -1;
for (let i = N + 2; i < input.length; i++) {
    const name = input[i];

    if (blood < dist[name]) {
        answer = name;
        blood = dist[name];
    }

}
console.log(answer)