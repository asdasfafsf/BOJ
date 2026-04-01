const fs = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

let A = fs[0]
let B = fs[1]

if (A === B) {
	console.log(0)
} else {
	console.log(1550)
}