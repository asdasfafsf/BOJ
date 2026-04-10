const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(' ')

let A = BigInt(input[0])
let B = BigInt(input[1])

let integer = A / B
let remainder = A % B

let result = integer.toString()

if (remainder === 0n) {
	console.log(result)
	process.exit(0)
}

result += '.'

for (let i = 0; i < 1000; i++) {
	remainder *= 10n
	result += (remainder / B).toString()
	remainder %= B

	if (remainder === 0n) break
}

console.log(result)