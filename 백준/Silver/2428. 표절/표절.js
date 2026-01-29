const fs = require('fs');

const data = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let idx = 0;
const N = Number(data[idx++]);
const a = new Array(N);
for (let i = 0; i < N; i++) a[i] = Number(data[idx++]);

a.sort((x, y) => x - y);

let ans = 0;

for (let j = 0; j < N; j++) {
    const target = 9 * a[j];
    let l = 0, r = j;
    while (l < r) {
        const m = (l + r) >> 1;
        if (10 * a[m] >= target) r = m;
        else l = m + 1;
    }
    ans += j - l;
}

process.stdout.write(String(ans));