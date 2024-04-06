const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');



let index = 0;
const answer = [];
while(true) {
    const [m, n] = input[index++].split(' ').map(Number)
    if (m === 0 && n === 0) {
        break;
    }

    const nodes = []

    let tmpIndex = index + n;
    for (; index < tmpIndex; index++) {
        nodes.push(input[index].split(' ').map(Number))
    }

    nodes.sort((a, b) => a[2] - b[2])

    let cost = nodes.reduce((pv, cv) => pv + cv[2], 0);
    const parents = Array.from(Array(m), (_, k) => k);

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

        parents[Math.max(a, b)] = Math.min(a, b);
    }

    for (let i = 0; i < nodes.length; i++) {
        const [node1, node2, weights] = nodes[i];

        if (find(node1) !== find(node2)) {
            cost -= weights;
            union(node1, node2);
        }
    }

    answer.push(cost);
}

console.log(answer.join('\n'))
