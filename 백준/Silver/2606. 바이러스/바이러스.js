

const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
               

const [N, M] = input.slice(0, 2).map(Number);
const arr = input.slice(2)
    .map(elem => elem.split(' ')
    .map(Number))

const graph = Array.from({length: N + 1})
                    .map(elem => []);

arr.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
})

let counter = -1;

const dfs = (R, visited, graph) => {
    visited[R] = true;
    counter++;
    for (const node of graph[R]) {
        if (visited[node] === false) {
            dfs(node, visited, graph)
        }
    }

}
const visited = new Array(N + 1).fill(false);

dfs(1, visited, graph);

console.log(counter)