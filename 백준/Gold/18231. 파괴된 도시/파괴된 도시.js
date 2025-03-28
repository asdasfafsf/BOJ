const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(line => line.split(' ').map(Number));

let index = 0;
const [N, M] = input[index++];
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
    const [u, v] = input[index++];
    graph[u].push(v);
    graph[v].push(u);
}

const [K] = input[index++];
const destroyedList = input[index++];
const destroyed = new Set(destroyedList);

const bombCandidates = [];

for (let i = 1; i <= N; i++) {
    if (!destroyed.has(i)) continue;

    let valid = true;
    for (const neighbor of graph[i]) {
        if (!destroyed.has(neighbor)) {
            valid = false;
            break;
        }
    }

    if (valid) bombCandidates.push(i);
}

const simulatedDestroyed = new Set();
for (const node of bombCandidates) {
    simulatedDestroyed.add(node);
    for (const neighbor of graph[node]) {
        simulatedDestroyed.add(neighbor);
    }
}

if (destroyedList.every(d => simulatedDestroyed.has(d)) && simulatedDestroyed.size === destroyed.size) {
    console.log(bombCandidates.length);
    console.log(bombCandidates.join(' '));
} else {
    console.log(-1);
}