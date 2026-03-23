const input = require('fs')
	.readFileSync(0,'utf-8')
	.trim()
	.split('\n')

const N = +input[0]
const A = input[1].split(' ').map(Number)

let answer = 0

for (let index = 1; index < N - 1; index++) {
	answer = Math.max(answer, A[index] + Math.min(A[index - 1], A[index + 1]))
}

answer = Math.max(answer, A[0])
answer = Math.max(answer, A[N - 1])

console.log(answer)