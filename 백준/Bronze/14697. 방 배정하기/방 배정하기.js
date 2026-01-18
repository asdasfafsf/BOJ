const input = require('fs').readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number)
const [A, B, C, N] = input

let ok = 0
for (let i = 0; i * A <= N && !ok; i++) {
    for (let j = 0; i * A + j * B <= N && !ok; j++) {
        const rem = N - i * A - j * B
        if (rem >= 0 && rem % C === 0) ok = 1
    }
}

process.stdout.write(String(ok))