const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

const N = Number(input[0])
const P = Number(input[2])

console.log(N * P)