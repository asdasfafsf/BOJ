const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const n = BigInt(input[0])
const r = n % 8n

let ans
if (r === 1n) ans = 1
else if (r === 2n || r === 0n) ans = 2
else if (r === 3n || r === 7n) ans = 3
else if (r === 4n || r === 6n) ans = 4
else ans = 5

process.stdout.write(String(ans))