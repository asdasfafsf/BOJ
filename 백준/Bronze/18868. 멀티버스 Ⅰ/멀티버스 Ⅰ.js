const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [M, N] = input[0].split(' ').map(Number);

const toRank = arr => {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    const m = new Map(sorted.map((v, i) => [v, i]));
    return arr.map(x => m.get(x)).join(',');
};

const ranks = [];
for (let i = 1; i <= M; i++) {
    ranks.push(toRank(input[i].split(' ').map(Number)));
}

let cnt = 0;
for (let i = 0; i < M; i++) {
    for (let j = i + 1; j < M; j++) {
        if (ranks[i] === ranks[j]) cnt++;
    }
}
console.log(cnt);