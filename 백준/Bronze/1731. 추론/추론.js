const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const n = +input[0]
const a = []
for (let i = 1; i <= n; i++) a.push(+input[i])

const d = a[1] - a[0]
let isArithmetic = true
for (let i = 2; i < n; i++) {
    if (a[i] - a[i-1] !== d) {
        isArithmetic = false
        break
    }
}

if (isArithmetic) {
    console.log(a[n-1] + d)
} else {
    const r = a[1] / a[0]
    console.log(a[n-1] * r)
}