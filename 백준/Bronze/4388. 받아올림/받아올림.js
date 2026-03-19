const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')

for (let i = 0; i < input.length; i++) {
	const [a, b] = input[i].split(' ')
	if (a === '0' && b === '0') break

	let i1 = a.length - 1
	let i2 = b.length - 1
	let carry = 0
	let count = 0

	while (i1 >= 0 || i2 >= 0) {
		let sum = carry

		if (i1 >= 0) sum += a[i1--] - '0'
		if (i2 >= 0) sum += b[i2--] - '0'

		if (sum >= 10) {
			carry = 1
			count++
		} else {
			carry = 0
		}
	}

	console.log(count)
}