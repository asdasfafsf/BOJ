const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let t = Number(input[0]);
let idx = 1;

let out = [];
for (let i = 0; i < t; i++) {
    let N = Number(input[idx++]);
    let last2 = N % 100;
    let next = N + 1;
    if (next % last2 === 0) out.push("Good");
    else out.push("Bye");
}

console.log(out.join('\n'));