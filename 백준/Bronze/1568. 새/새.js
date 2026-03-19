const input = require('fs').readFileSync(0, 'utf-8').trim()
let n = Number(input)

let k = 1
let t = 0

while (n > 0) {
	if (n < k) k = 1
	n -= k
	k++
	t++
}

console.log(t)