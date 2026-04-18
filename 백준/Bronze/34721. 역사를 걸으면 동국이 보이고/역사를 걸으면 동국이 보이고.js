const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()

let N = Number(input)
let result = ''

for (let i = 0; i < N; i++) {
	result += 'I love DGU\n'
}

console.log(result.trim())