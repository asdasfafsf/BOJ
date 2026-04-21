const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(/\s+/)

let P = +input[0]
let N = +input[1]
let arr = input.slice(2).map(Number).sort((a,b)=>a-b)

let i = 0

for (; i < N; i++) {
	if (P >= 200) {
		console.log(i)
		process.exit(0)
	}
	P += arr[i]
}

console.log(N)