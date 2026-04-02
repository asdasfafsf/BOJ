const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(' ')

let A = Number(input[0])
let B = Number(input[1])

let arr = []
let num = 1

while (arr.length < B) {
	for (let i = 0; i < num; i++) {
		arr.push(num)
	}
	num++
}

let sum = 0

for (let i = A - 1; i < B; i++) {
	sum += arr[i]
}

console.log(sum)