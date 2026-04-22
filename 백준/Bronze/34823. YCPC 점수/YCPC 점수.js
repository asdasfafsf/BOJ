const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(' ')

const y = +input[0]
const c = +input[1]
const p = +input[2]

console.log(Math.min(y, p, Math.floor(c / 2)))