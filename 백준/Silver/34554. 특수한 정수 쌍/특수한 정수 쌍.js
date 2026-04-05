const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

const T = +input[0]
const maxN = 10001
const isPrime = Array(maxN + 1).fill(true)
isPrime[0] = isPrime[1] = false

for (let i = 2; i * i <= maxN; i++) {
	if (isPrime[i]) {
		for (let j = i * i; j <= maxN; j += i) {
			isPrime[j] = false
		}
	}
}

let result = []
for (let i = 1; i <= T; i++) {
	const N = +input[i]
	if (isPrime[N + 1]) {
		result.push('1')
		result.push(`1 ${N + 1}`)
	} else {
		result.push('0')
	}
}

console.log(result.join('\n'))