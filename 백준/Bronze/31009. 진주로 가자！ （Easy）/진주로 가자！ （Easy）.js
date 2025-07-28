const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
let jinjuCost = 0;
let costs = [];

for (let i = 1; i <= N; i++) {
    {
        const [D, C] = input[i].split(' ');
        const cost = +C;
        if (D === 'jinju') {
            jinjuCost = cost;
        }
        costs.push(cost);
    }
}

let count = 0;
for (let i = 0; i < N; i++) {
    {
        if (costs[i] > jinjuCost) {
            count++;
        }
    }
}

console.log(jinjuCost);
console.log(count);