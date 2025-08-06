const [[n, d], parents] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const children = new Array(n + 1).fill(0);


for (const parent of parents) {
    children[parent]++;
}

let answer = 0

for (let i = 0; i <= n; i++) {
    if (children[i] > d) {
        answer += Math.floor((children[i] - 2) / (d - 1));
    }
}

console.log(answer);