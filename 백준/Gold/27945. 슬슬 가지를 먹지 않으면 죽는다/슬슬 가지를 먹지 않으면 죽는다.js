const [[N, M], ...nodes] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


nodes.sort((a, b) => a[2] - b[2]);

const graph = Array.from(Array(N + 1), () => [])
for (const [s, e, w] of nodes) {
    graph[s].push([e, w]);
    graph[e].push([s, w]);
}

const find = (a, parents) => {
    if (a === parents[a]) {
        return a;
    }

    return (parents[a] = find(parents[a], parents));
}


const union = (a, b, parents) => {
    a = find(a, parents);
    b = find(b, parents);

    if (a === b) {
        return
    }

    parents[Math.max(a, b)] = Math.min(a, b);
}

const parents = Array.from(Array(N + 1), (_, k) => k);
let answer = 1;

for (const [a, b, w] of nodes) {
    if (w > answer) {
        continue;
    }

    if (find(a, parents) === find(b, parents)) {
        continue;
    }

    union(a, b, parents);
    answer++;
}

console.log(answer)