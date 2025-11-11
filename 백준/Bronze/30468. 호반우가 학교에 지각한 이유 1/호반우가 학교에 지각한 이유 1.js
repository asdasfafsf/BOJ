const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)
const [STR, DEX, INT, LUK, N] = input
const sum = STR + DEX + INT + LUK
const target = N * 4
console.log(Math.max(0, target - sum))