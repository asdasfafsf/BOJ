const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

const T = Number(input[0])
let result = ''

for (let i = 1; i <= T; i++) {
	const [type, mom, dad] = input[i].split(' ')

	const parse = (s) => {
		const [f, rest] = s.split("'")
		const inch = rest.slice(0, -1)
		return Number(f) * 12 + Number(inch)
	}

	const m = parse(mom)
	const d = parse(dad)

	let mid = m + d
	if (type === 'B') mid += 5
	else mid -= 5

	mid /= 2

	const min = Math.ceil(mid - 4)
	const max = Math.floor(mid + 4)

	const toStr = (x) => {
		const f = Math.floor(x / 12)
		const inch = x % 12
		return `${f}'${inch}"`
	}

	result += `Case #${i}: ${toStr(min)} to ${toStr(max)}\n`
}

console.log(result.trim())