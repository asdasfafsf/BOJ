const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

let index = 0;
const [n, m, q] = input[index++];

const graph = Array.from(Array(n + 1), () => []);

for (let i = 0; i < m; i++) {
    const [s, e] = input[index++];
    graph[e].push(s)
}

const dists = [[]];
for (let i = 1; i <= n; i++) {
    const queue = [[i, 0]];
    const dist = Array(n + 1).fill(Infinity);
    dist[i] = 0;
    let current = 0;

    while (queue.length !== current) {
        const [node, weight] = queue[current];

        for (const nextNode of graph[node]) {
            if (dist[nextNode] > weight + 1) {
                dist[nextNode] = weight + 1;
                queue.push([nextNode, weight + 1]);
            }
        }
        current++;
    }

    dists.push(dist);
}

for (let i = 0; i < q; i++) {
    const [u, v] = input[index++];
    let answer = Infinity;

    for (let x = 1; x <= n; x++) {
        const du = dists[u][x];
        const dv = dists[v][x];
        if (du !== Infinity && dv !== Infinity) {
            answer = Math.min(answer, Math.max(du, dv));
        }
    }

    console.log(answer === Infinity ? -1 : answer);
}