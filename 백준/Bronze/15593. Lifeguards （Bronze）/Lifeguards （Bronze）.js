const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number)

let idx = 0
const N = input[idx++]

const a = []
for (let i = 0; i < N; i++) {
    const s = input[idx++]
    const e = input[idx++]
    a.push([s, e])
}

const covered = new Array(1000).fill(0)

for (let i = 0; i < N; i++) {
    const [s, e] = a[i]
    for (let t = s; t < e; t++) covered[t]++
}

let total = 0
for (let t = 0; t < 1000; t++) if (covered[t] > 0) total++

let ans = 0
for (let i = 0; i < N; i++) {
    const [s, e] = a[i]
    let unique = 0
    for (let t = s; t < e; t++) if (covered[t] === 1) unique++
    ans = Math.max(ans, total - unique)
}

process.stdout.write(String(ans))