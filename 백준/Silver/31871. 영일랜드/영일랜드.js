const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const M = +input[1];

const nodes = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity))
const visited = Array(N + 1).fill(false);
for (let i = 2; i < input.length; i++) {
    const [a, b, w] = input[i].split(' ').map(Number);

    if (nodes[a][b] === Infinity) {
        nodes[a][b] = w;
    } else {
        nodes[a][b] = Math.max(nodes[a][b], w)
    }
}

let answer = 0;

const recursion = (depth, current, value) => {
    if (depth === N) {
        if (nodes[current][0] !== Infinity) {
            answer = Math.max(value + nodes[current][0], answer);
        }
        return;
    }
    for (let i = 1; i <= N; i++) {
        if (visited[i] === false && nodes[current][i] !== Infinity) {
            visited[i] = true;
            recursion(depth + 1, i, value + nodes[current][i]);
            visited[i] = false;
        }
    }
}


for (let i = 1; i <= N; i++) {
    if (nodes[0][i] !== Infinity) {
        visited[i] = true;
        recursion(1, i, nodes[0][i]);
        visited[i] = false;
    }
}

console.log((answer === Infinity || answer === 0) ? -1 : answer);