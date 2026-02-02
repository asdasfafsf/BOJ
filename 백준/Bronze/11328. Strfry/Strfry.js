const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/);

let idx = 0;
const T = Number(input[idx++]);
let out = [];

for (let t = 0; t < T; t++) {
    const a = input[idx++] || '';
    const b = input[idx++] || '';

    if (a.length !== b.length) {
        out.push('Impossible');
        continue;
    }

    const cnt = new Array(26).fill(0);
    for (let i = 0; i < a.length; i++) cnt[a.charCodeAt(i) - 97]++;
    for (let i = 0; i < b.length; i++) cnt[b.charCodeAt(i) - 97]--;

    let ok = true;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] !== 0) {
            ok = false;
            break;
        }
    }

    out.push(ok ? 'Possible' : 'Impossible');
}

process.stdout.write(out.join('\n'));