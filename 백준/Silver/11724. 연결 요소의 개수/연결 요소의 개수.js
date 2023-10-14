
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({length: N + 1}, () => []);


for (let i = 1; i < input.length; i++) {
    const [V, E] = input[i].split(' ').map(Number);

    graph[V].push(E);
    graph[E].push(V);

}

const visited = new Array(N + 1).fill(false);

const dfs = (start, graph) => {
    visited[start] = true;

    for (const node of graph[start]) {
        if (visited[node] === false) {
            dfs(node, graph);
        }
    }
}

let connect = 0;

for (let i = 1; i <= N; i++) {
    if (visited[i] === false) {
        connect++;
        dfs(i, graph);
    }
}

console.log(connect)