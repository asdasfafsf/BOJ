const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const M = +input[1];

const graph = Array.from(Array(N), () => []);
const reversedGraph = Array.from(Array(N), () => []);

for (let i = 2; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(elem => elem - 1);

    graph[s].push(e);
    reversedGraph[e].push(s);
}

const answer = [];

for (let i = 0; i < N; i++) {
    const stack = [i]
    const visited = Array(N).fill(false);
    visited[i] = true;

    let count = N - 1;

    while (stack.length) {
        const node = stack.pop();

        for (const nextNode of graph[node]) {
            if (visited[nextNode]) {
                continue;
            }
            count--;
            stack.push(nextNode);
            visited[nextNode] = true;
        }
    }

    const rStack = [i]
    const rVisited = Array(N).fill(false);
    rVisited[i] = true;

    while (rStack.length) {
        const node = rStack.pop();
        for (const nextNode of reversedGraph[node]) {
            if (rVisited[nextNode]) {
                continue;
            } 
            count--;
            rStack.push(nextNode);
            rVisited[nextNode] = true;
        }
    }

    answer.push(count);
}

console.log(answer.join('\n'))