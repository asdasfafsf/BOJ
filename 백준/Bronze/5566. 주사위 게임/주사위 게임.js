const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').toString().trim().split(/\s+/);
let idx = 0;

const N = Number(input[idx++]);
const M = Number(input[idx++]);

const move = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) move[i] = Number(input[idx++]);

let pos = 1;

for (let j = 1; j <= M; j++) {
    const d = Number(input[idx++]);
    pos += d;
    if (pos >= N) {
        console.log(j);
        process.exit(0);
    }
    pos += move[pos];
    if (pos >= N) {
        console.log(j);
        process.exit(0);
    }
}