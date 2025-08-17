const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n');

const lines = input.filter(s => s.trim().length > 0);
const out = [];

for (const s of lines) {
    const r = parseFloat(s);
    if (r === 0) break;
    let sum = 0;
    let term = 1;
    for (let i = 0; i < 5; i++) {
        sum += term;
        term *= r;
    }
    out.push(sum.toFixed(2));
}

console.log(out.join('\n'));