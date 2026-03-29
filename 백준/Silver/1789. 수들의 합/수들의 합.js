const fs = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()

let S = BigInt(fs)

let sum = 0n
let index = 0n

while (true) {
	let next = index + 1n
	if (sum + next > S) break
	sum += next
	index++
}

console.log(index.toString())