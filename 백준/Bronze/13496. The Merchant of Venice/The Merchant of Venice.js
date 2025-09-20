const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n');

let idx = 0;
const K = parseInt(input[idx++], 10);

for (let t = 1; t <= K; t++) {
    const [n, s, d] = input[idx++].split(' ').map(Number);
    let total = 0;
    for (let i = 0; i < n; i++) {
        const [di, vi] = input[idx++].split(' ').map(Number);
        if (di / s <= d) total += vi;
    }
    console.log(`Data Set ${t}:\n${total}\n`);
}