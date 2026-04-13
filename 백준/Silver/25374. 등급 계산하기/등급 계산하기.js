const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(/\s+/)

const N = Number(input[0])
const A = input.slice(1).map(Number)

const freq = Array(101).fill(0)
for (let i = 0; i < N; i++) {
	freq[A[i]]++
}

const percent = [4,11,23,40,60,77,89,96,100]
const threshold = Array(9).fill(0)

let cumulative = 0
let idx = 0

for (let score = 100; score >= 0; score--) {
	cumulative += freq[score]
	while (idx < 9 && cumulative * 100 >= percent[idx] * N) {
		threshold[idx] = score
		idx++
	}
}

const result = Array(9).fill(0)

for (let score = 0; score <= 100; score++) {
	if (freq[score] === 0) continue
	for (let g = 0; g < 9; g++) {
		if (score >= threshold[g]) {
			result[g] += freq[score]
			break
		}
	}
}

console.log(result.join('\n'))