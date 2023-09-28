const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
               


const [N, M, R] = input[0].split(' ').map(Number);
const arr = input.slice(1)
                .map(elem => elem.split(' ').map(Number));

const graph = Array.from({length: N + 1})
                .map(elem => []);


arr.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
})

graph.forEach(elem => elem.sort((a, b) => a - b));
const visited = new Array(N + 1).fill(false);


let count = 0;
let answer = new Array(N).fill(0);
const dfs = (R) => {
    visited[R] = true;
    answer[R - 1] = ++count;

    for (const node of graph[R]) {
        if (visited[node] === false) {
            dfs(node);
        }
    }
}


dfs(R);

console.log(answer.join('\n'));
