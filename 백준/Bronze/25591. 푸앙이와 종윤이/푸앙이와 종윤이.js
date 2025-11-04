const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)
let [x, y] = input
let a = 100 - x
let b = 100 - y
let c = 100 - (a + b)
let d = a * b
let q = Math.trunc(d / 100)
let r = d % 100
c += q
console.log(a, b, c - q, d, q, r)
let front = c
let back = r
if (front >= 0 && front < 10) front = front % 10
if (back >= 0 && back < 10) back = back % 10
console.log(front, back)