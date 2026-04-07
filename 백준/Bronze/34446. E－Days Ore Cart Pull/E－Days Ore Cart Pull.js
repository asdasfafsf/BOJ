const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(/\s+/)

let m = +input[0]

console.log(m * 2)