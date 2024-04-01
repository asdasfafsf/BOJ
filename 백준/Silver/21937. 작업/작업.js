const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);

for (let i = 1; i < input.length - 1; i++) {
    const [e, s] = input[i].split(' ').map(Number);
    graph[s].push(e);
}

const X = +input.at(-1);
let answer = -1;
const recursion = (node) => {
    answer++;

    for (const nextNode of graph[node]) {
        if (visited[nextNode] === false) {
            visited[nextNode] = true;
            recursion(nextNode);
        }
    }
}
recursion(X)
console.log(answer);