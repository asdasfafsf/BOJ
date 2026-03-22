const fs = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

let index = 1
let N = Number(fs[0])

let deque = new Array(N * 2)
let front = N
let back = N

let result = []

for (let i = 0; i < N; i++) {
	let command = fs[index++].split(' ').map(Number)
	let type = command[0]

	if (type === 1) {
		deque[--front] = command[1]
	} else if (type === 2) {
		deque[back++] = command[1]
	} else if (type === 3) {
		if (front === back) {
			result.push(-1)
		} else {
			result.push(deque[front++])
		}
	} else if (type === 4) {
		if (front === back) {
			result.push(-1)
		} else {
			result.push(deque[--back])
		}
	} else if (type === 5) {
		result.push(back - front)
	} else if (type === 6) {
		result.push(front === back ? 1 : 0)
	} else if (type === 7) {
		if (front === back) {
			result.push(-1)
		} else {
			result.push(deque[front])
		}
	} else if (type === 8) {
		if (front === back) {
			result.push(-1)
		} else {
			result.push(deque[back - 1])
		}
	}
}

console.log(result.join('\n'))