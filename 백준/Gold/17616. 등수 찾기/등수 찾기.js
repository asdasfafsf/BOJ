const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M, X] = input[0].split(' ').map(Number);


const graph = Array.from(Array(N), () => []);
const reversedGraph = Array.from(Array(N), () => []);


for (let i = 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(' ').map(elem => elem - 1);
    graph[n1].push(n2);
    reversedGraph[n2].push(n1);
}


let n = 0;
const recursion = (start, graph, visited, depth) => {
    n++;
    visited[start] = true;

    for (const nextNode of graph[start]) {
        if (visited[nextNode]) {
            continue;
        }

        recursion(nextNode, graph, visited);
    }
}

n = 0;
recursion(X - 1, graph, Array(N).fill(false))
const max = N - n + 1;

n = 0;
recursion(X - 1, reversedGraph, Array(N).fill(false))
const min = n;

console.log(min, max)