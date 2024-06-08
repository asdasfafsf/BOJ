
const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, Q] = input[0].split(' ').map(Number);

const logs = [];
for (let i = 1; i <= N; i++) {
    logs.push([i - 1, ...input[i].split(' ').map(elem => elem - 1)]);
}

const parents = Array.from(Array(N), (_, k) => k);
const find = a => {
    if (a === parents[a]) {
        return a;
    }

    return parents[a] = find(parents[a])
}

const union = (a, b) => {
    a = find(a);
    b = find(b);
    if (a === b) {
        return;
    }

    parents[Math.max(a, b)] = Math.min(a, b);
}

logs.sort((a, b) => {
    const [c1, ax1, ax2, ay] = a;
    const [c2, bx1, bx2, by] = b;

    if (ax1 === bx1) {
        if (ax2 === bx2) {
            return ay - by;
        }
  
        return ax2 - bx2;
    }

    return ax1 - bx1;
})

// console.log(logs)
const canJump = (a, b) => {
    const [c1, ax1, ax2, ay] = a;
    const [c2, bx1, bx2, by] = b;


    return ax2 >= bx1;
}


for (let i = 0; i < N - 1; i++) {
    const prev = logs[i];
    const next = logs[i + 1];

    if (find(prev[0]) === find[next[0]]) {
        continue;
    }

    if (canJump(prev, next)) {
        union(prev[0], next[0]);
    }
}

// console.log(parents)
const answer = [];

for (let i = N + 1; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(elem => elem - 1);

    if (find(s) === find(e)) {
        answer.push(1);
    } else {
        answer.push(0);
    }
}

console.log(answer.join('\n'))