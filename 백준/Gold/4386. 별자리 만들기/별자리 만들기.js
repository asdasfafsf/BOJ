const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number))


const getDist = ([x1, y1], [x2, y2]) => {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}
const nodes = [];

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        if (i === j) {
            continue;
        }

        nodes.push([i, j, getDist(arr[i], arr[j])]);
    }
}
const parents = Array.from({length: N}, (_, i) => i);
nodes.sort((a, b) => a.at(-1) - b.at(-1));

const find = (a) => {
    if (parents[a] === a) {
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

let answer = 0;
let count = 0;
for (const node of nodes) {
    const [a, b, weight] = node;
    const [ap, bp] = [find(a), find(b)];

    if (ap === bp) {
        continue;
    }

    union(a, b);
    count++;
    answer += weight;

    if (count > N - 1) {
        break;
    }
}
console.log(answer.toFixed(2))