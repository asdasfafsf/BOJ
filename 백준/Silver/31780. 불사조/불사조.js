const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(' ')

const X = Number(input[0])
const M = Number(input[1])

console.log(X * (M + 1))