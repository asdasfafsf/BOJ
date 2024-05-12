const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.trim());

const N = +input[0];
const dist = [];
const ori = []
let isOk = true;


for (let i = 1; i < input.length; i++) {
    dist.push(input[i].trim().split(' ').map(elem => elem.trim()).map(Number));
    ori.push (input[i].trim().split(' ').map(elem => elem.trim()).map(Number));
}

for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
                isOk = false;
            }
        }
    }
}

// console.log(dist);

if (isOk) {
    const parents = Array.from(Array(N), (_, k) => k);
    const find = a => {
        if (parents[a] === a) {
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

    const nodes = []
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            nodes.push([y, x, dist[y][x]]);
        }
    }

    nodes.sort((a, b) => a[2] - b[2]);
    // console.log(nodes)
    const answer = [];
    for (const [a, b, w] of nodes) {
        if (find(a) === find(b)) {
            continue;
        }

        union(a, b);
        answer.push([a, b, w]);
    }

    if (answer.length) {
        console.log(answer.length);
        console.log(answer.map(elem => `${elem[0] + 1} ${elem[1] + 1} ${elem[2]}`).join('\n'))
    } else {
        console.log(-1)
    }
} else {
    console.log(-1);
}