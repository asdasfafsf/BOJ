const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];

const getDist = (x1, y1, z1, x2, y2, z2) => Math.min(Math.abs(x1 - x2), Math.abs(y1 - y2), Math.abs(z1 - z2));

const planets1 = [];
const planets2 = [];
const planets3 = [];

for (let i = 1; i < input.length; i++) {
    planets1.push([...input[i].split(' ').map(Number), i - 1]);
    planets2.push([...input[i].split(' ').map(Number), i - 1]);
    planets3.push([...input[i].split(' ').map(Number), i - 1]);
}

planets1.sort((a, b) => a[0] - b[0]);
planets2.sort((a, b) => a[1] - b[1]);
planets3.sort((a, b) => a[2] - b[2]);


const nodes = [];

for (let i = 0; i < planets1.length - 1; i++) {
    nodes.push([planets1[i][3], planets1[i + 1][3], getDist(planets1[i][0], planets1[i][1], planets1[i][2], ...planets1[i + 1])])
    nodes.push([planets2[i][3], planets2[i + 1][3], getDist(planets2[i][0], planets2[i][1], planets2[i][2], ...planets2[i + 1])])
    nodes.push([planets3[i][3], planets3[i + 1][3], getDist(planets3[i][0], planets3[i][1], planets3[i][2], ...planets3[i + 1])])
}

nodes.sort((a, b) => a[2] - b[2]);

const parents = Array.from(Array(N), (_, k) => k);
const find = a => {
    if (a === parents[a]) {
        return a;
    }

    return (parents[a] = find(parents[a]))
}

const union = (a, b) => {
    a = find(a);
    b = find(b);

    if (a === b) {
        return;
    }

    parents[Math.max(a, b)] = Math.min(a, b);
}


let answer = 0
for (const [a, b, w] of nodes) {
    if (find(a) === find(b)) {
        continue;
    }

    union(a, b);
    answer += w;
}

console.log(answer)