const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

for (let line of input) {
	let N = Number(line)
	if (N === -1) break

	let answer = -1

	for (let k = Math.floor(Math.sqrt(N)) + 1; k >= 2; k--) {
		let temp = N
		let ok = true

		for (let i = 0; i < k; i++) {
			temp -= 1
			if (temp % k === 0) {
				temp = temp / k * (k - 1)
			} else {
				ok = false
				break
			}
		}

		if (ok && temp % k === 0) {
			answer = k
			break
		}
	}

	if (answer === -1) {
		console.log(`${N} coconuts, no solution`)
	} else {
		console.log(`${N} coconuts, ${answer} people and 1 monkey`)
	}
}