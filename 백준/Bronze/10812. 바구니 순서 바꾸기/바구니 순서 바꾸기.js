const input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const N = input[idx++], M = input[idx++];

const arr = Array.from({ length: N }, (_, i) => i + 1);

for (let t = 0; t < M; t++) {
    const i = input[idx++] - 1;
    const j = input[idx++] - 1;
    const k = input[idx++] - 1;

    const left = arr.slice(i, k);
    const right = arr.slice(k, j + 1);
    const rotated = right.concat(left);

    for (let p = 0; p < rotated.length; p++) arr[i + p] = rotated[p];
}

process.stdout.write(arr.join(' '));