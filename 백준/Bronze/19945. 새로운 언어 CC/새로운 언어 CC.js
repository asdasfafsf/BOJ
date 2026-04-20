const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()

let n = Number(input)

if (n === 0) {
	console.log(1)
} else if (n < 0) {
	console.log(32)
} else {
	let cnt = 0
	while (n > 0) {
		n = Math.floor(n / 2)
		cnt++
	}
	console.log(cnt)
}