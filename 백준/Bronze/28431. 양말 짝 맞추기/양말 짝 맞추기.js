const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number)

const cnt = {}
for (let i = 0; i < 5; i++) {
    const v = input[i]
    cnt[v] = (cnt[v] || 0) + 1
}

for (const k in cnt) {
    if (cnt[k] % 2 === 1) {
        console.log(k)
        break
    }
}