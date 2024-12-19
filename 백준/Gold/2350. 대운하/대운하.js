class PriorityQueue {
    constructor() {
        this.heap = [null]
    }
}

const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

const nodes = [];

for (let i = 1; i <= M; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);
    nodes.push([s - 1, e - 1, w]);
}

nodes.sort((a, b) => b[2] - a[2]);

const parents = Array.from(Array(N), (_, k) => k);

const find = (a) => {
    if (a === parents[a]) {
        return a;
    }

    return (parents[a] = find(parents[a]));
}

const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) {
        return;
    }

    parents[Math.min(a, b)] = Math.max(a, b);
}


const answer = [];
for(let i = M + 1; i < input.length; i++) {
    const [n1, n2] = input[i].split(' ').map(elem => elem - 1);

    for (let p = 0; p < parents.length; p++) {
        parents[p] = p;
    }

    let maxWidth = Infinity;
    let isConnect = false;
    for (const [s, e, w] of nodes) {
        if (find(s) === find(e)) {
            continue;
        }

        union(s, e);
        maxWidth = Math.min(w, maxWidth);

        if (find(n1) === find(n2)) {
            isConnect = true;
            break;
        }
    }

    answer.push(isConnect ?  maxWidth : -1);
}
console.log(answer.join('\n'))