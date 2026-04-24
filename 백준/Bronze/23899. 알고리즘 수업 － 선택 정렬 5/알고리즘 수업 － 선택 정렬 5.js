const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

const n = +input[0]
const A = input[1].split(' ').map(Number)
const B = input[2].split(' ').map(Number)

let same = true
for (let i = 0; i < n; i++) {
	if (A[i] !== B[i]) {
		same = false
		break
	}
}
if (same) {
	console.log(1)
	process.exit(0)
}

const sorted = [...A].sort((a, b) => a - b)
const pos = new Map()
for (let i = 0; i < n; i++) pos.set(A[i], i)

for (let last = n - 1; last >= 1; last--) {
	const target = sorted[last]
	const idx = pos.get(target)

	if (idx !== last) {
		const tmp = A[last]
		A[last] = A[idx]
		A[idx] = tmp

		pos.set(A[idx], idx)
		pos.set(A[last], last)
	}

	let ok = true
	for (let i = 0; i < n; i++) {
		if (A[i] !== B[i]) {
			ok = false
			break
		}
	}
	if (ok) {
		console.log(1)
		process.exit(0)
	}
}

console.log(0)