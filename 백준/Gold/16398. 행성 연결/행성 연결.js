const [[N], ...cost] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim().split(' ').map(Number));


const parents = Array.from(Array(N), (_, i) => i);
const find = a => {
    if (a === parents[a]) {
        return a;
    }

    return parents[a] = find(parents[a]);
}

const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) {
        return;
    }

    parents[Math.max(a, b)] = Math.min(a, b);
}


const queue = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i === j) {
            continue;
        }

        queue.push([i, j, cost[i][j]])
    }
}

queue.sort((a, b) => a[2] - b[2]);
let answer = 0n;

for (const [startNode, endNode, weight] of queue) {
    if (find(startNode) !== find(endNode)) {
        union(startNode, endNode);
        answer += BigInt(weight)
    }
}

console.log(answer.toString())