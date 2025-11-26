const s = require('fs').readFileSync(0, 'utf-8').trim()

let cnt1 = 0
let cnt2 = 0

for (let c of s) {
    if ('aeiou'.includes(c)) cnt1++
    if ('aeiouy'.includes(c)) cnt2++
}

process.stdout.write(cnt1 + ' ' + cnt2)