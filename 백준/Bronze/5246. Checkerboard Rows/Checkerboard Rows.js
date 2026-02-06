const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/);
let idx = 0;

const t = Number(input[idx++]);
let out = [];

for (let tc = 0; tc < t; tc++) {
    const p = Number(input[idx++]);
    let cnt = Array(9).fill(0); // row 1..8
    for (let i = 0; i < p; i++) {
        idx++; // col (unused)
        const r = Number(input[idx++]); // row
        if (r >= 1 && r <= 8) cnt[r]++;
    }
    let mx = 0;
    for (let r = 1; r <= 8; r++) if (cnt[r] > mx) mx = cnt[r];
    out.push(String(mx));
}

process.stdout.write(out.join('\n'));