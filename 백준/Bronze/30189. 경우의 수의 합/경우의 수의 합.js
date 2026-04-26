const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(' ')
	
const n = Number(input[0])
const m = Number(input[1])

console.log((n + 1) * (m + 1))