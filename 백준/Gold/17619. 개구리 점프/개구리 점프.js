
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, Q] = input[0].split(' ').map(Number);

const logs = [];
for (let i = 1; i <= N; i++) {
    logs.push([i - 1, ...input[i].split(' ').map(Number)]);
}

const parents = Array.from(Array(N), (_, k) => k);

logs.sort((a, b) => {
    const [c1, ax1, ax2, ay] = a;
    const [c2, bx1, bx2, by] = b;

    
    return ax1 - bx1;
})


let maxX = logs[0][2];

for (let i = 0; i < N - 1; i++) {
    const prev = logs[i];
    const next = logs[i + 1];

    if (parents[prev[0]] === parents[next[0]]) {
        continue;
    }

    maxX = Math.max(maxX, prev[2]);

    if (maxX >= next[1]) {
        parents[next[0]] = parents[prev[0]];
    } else {
        maxX = next[2];
    }
}

// console.log(parents)
const answer = [];

for (let i = N + 1; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(elem => elem - 1);

    if (parents[s] === parents[e]) {
        answer.push(1);
    } else {
        answer.push(0);
    }
}

console.log(answer.join('\n'))