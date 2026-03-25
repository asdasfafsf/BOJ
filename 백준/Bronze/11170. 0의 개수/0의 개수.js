const fs = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

let T = Number(fs[0])
let idx = 1
let result = ''

while (T--) {
	let [N, M] = fs[idx++].split(' ').map(Number)
	let count = 0

	for (let i = N; i <= M; i++) {
		let str = i.toString()
		for (let j = 0; j < str.length; j++) {
			if (str[j] === '0') count++
		}
	}

	result += count + '\n'
}

console.log(result)