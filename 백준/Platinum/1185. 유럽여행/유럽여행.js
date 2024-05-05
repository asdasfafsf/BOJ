const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const [N, P] = input[0].split(' ').map(Number);
const costs = [];

for (let i = 1; i < N + 1; i++) {
    costs.push(+input[i]);
}

const nodes = [];

for (let i = N + 1; i < input.length; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);

    nodes.push([s - 1, e - 1, w * 2 + costs[s - 1] + costs[e - 1]]);
}
nodes.sort((a, b) => a[2] - b[2]);

const parents = Array.from({length: N}, (_, k) => k);
const find = a => {
    if (a === parents[a]) {
        return a;
    }

    return (parents[a] = find(parents[a]));
}

const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) {
        return;
    }

    parents[Math.max(a, b)] = Math.min(a, b);
}


let sum = 0;
const graph = Array.from(Array(N), () => [])
for (const [s, e, w] of nodes) {
    if (find(s) === find(e)) {
        continue;
    }

    union(s, e);
    graph[s].push([e, w]);
    graph[e].push([s, w]);

    sum += w;
}

console.log(sum + Math.min(...costs))