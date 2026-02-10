const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const [N, L, D] = input;

const total = N * L + (N - 1) * 5;

const isMusic = (t) => {
    if (t >= total) return false;
    const block = L + 5;
    const r = t % block;
    return r < L;
};

let ans = 0;
for (let t = 0; t <= total + D; t += D) {
    if (!isMusic(t)) {
        ans = t;
        break;
    }
}

process.stdout.write(String(ans));