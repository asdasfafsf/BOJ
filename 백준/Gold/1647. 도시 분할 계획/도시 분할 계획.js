const [[N, M], ...edges] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

edges.sort((a, b) => {
    return a[2] - b[2];
})

const parents = Array.from({length: N + 1}, () => 0).map((elem, index) => index);

const find = A => {
    if (parents[A] === A) {
        return A;
    }

    return (parents[A] = find(parents[A]));
}

const union = (A, B) => {
    A = find(A);
    B = find(B);

    if (A === B) {
        return;
    }
    parents[Math.min(A, B)] = Math.max(A, B);
}

let answer = 0;
let count = 0;
for (let i = 0; i < edges.length && count < N - 2; i++) {
    const [node1, node2, weight] = edges[i];
    const par1 = find(node1);
    const par2 = find(node2);

    if (par1 !== par2) {
        union(node1, node2);
        answer += weight;
        count++;
    }
}

console.log(answer);