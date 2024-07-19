const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());


const [N, M] = input[0].split(' ').map(Number);

const graph = Array.from(Array(26), () => []);
const visited = Array(26).fill(false);
const depth = Array.from(Array(26), () => 0);
const knowns = input.at(-1).split(' ').slice(1).map(elem => elem.charCodeAt(0) - 'A'.charCodeAt(0));

const map = {};
knowns.forEach(elem => map[elem] = true);

for (let i = 1; i < input.length - 1; i++) {
    const [s, e] = input[i].split(' ').map(elem => elem.charCodeAt(0) - 'A'.charCodeAt(0));
    depth[e]++;
    graph[s].push(e);
}

const queue = [];
let root = 0;
for (let i = 0; i < depth.length; i++) {
    if (depth[i] === 0 && graph[i].length > 0) {
        root++;
        queue.push(i);
        visited[i] = true;
    }
}

let current = 0;

while (queue.length !== current) {
    const node = queue[current];

    if (map[node]) {
        current++;
        continue;   
    }

    for (const nextNode of graph[node]) {
        if (!visited[nextNode] && !map[nextNode]) {
            queue.push(nextNode);
            visited[nextNode] = true;
        }
    }

    current++;
}

console.log(queue.length - root)