const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

const [J, N] = input[0].split(' ').map(Number)

let count = 0

for (let i = 1; i <= N; i++) {
	let s = input[i]
	let size = 0
	for (let j = 0; j < s.length; j++) {
		const c = s[j]
		if (c === ' ') size += 1
		else if (c >= 'A' && c <= 'Z') size += 4
		else size += 2
	}
	if (size <= J) count++
}

console.log(count)