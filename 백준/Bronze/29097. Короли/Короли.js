const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const [n, m, k, a, b, c] = input[0].split(' ').map(Number)

const joffrey = n * a
const robb = m * b
const stannis = k * c

const max = Math.max(joffrey, robb, stannis)

const result = []
if (joffrey === max) result.push('Joffrey')
if (robb === max) result.push('Robb')
if (stannis === max) result.push('Stannis')

console.log(result.join(' '))