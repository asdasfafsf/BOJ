const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

const s = input;
const n = s.length;

let ans = 'z'.repeat(n);

for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        const a = s.slice(0, i).split('').reverse().join('');
        const b = s.slice(i, j).split('').reverse().join('');
        const c = s.slice(j).split('').reverse().join('');
        const t = a + b + c;
        if (t < ans) ans = t;
    }
}

console.log(ans);