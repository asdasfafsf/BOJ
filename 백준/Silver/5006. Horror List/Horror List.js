const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n')


const [N, H, L] = input[0].split(' ').map(Number);
const nodes = input[1].split(' ').map(Number).sort();
const graph = Array.from(Array(N), () => []);

for (let i = 2; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(Number);
    graph[s].push(e);
    graph[e].push(s);
}


const dists = Array(N).fill(Infinity);
const queue = nodes.map(elem => [elem, 0])
nodes.forEach(elem => dists[elem] = 0)

let current = 0;


while (queue.length !== current) {
    const [node, dist] = queue[current];
    const nextDist = dist + 1;

    for (const nextNode of graph[node]) {
        if (dists[nextNode] < nextDist) {
            continue;
        }
        
        dists[nextNode] = nextDist
        queue.push([nextNode, nextDist]);
    }

    current++;
}

let answer = 0;
let value = 0;

for (let i = dists.length - 1; i >= 0; i--) {
    if (value <= dists[i]) {
        answer = i;
        value = dists[i];
    }
}

console.log(answer)


