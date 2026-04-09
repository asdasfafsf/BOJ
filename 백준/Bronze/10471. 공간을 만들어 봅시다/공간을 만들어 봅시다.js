const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(/\s+/)

let index = 0
const W = Number(input[index++])
const P = Number(input[index++])

const arr = [0]

for (let i = 0; i < P; i++) {
	arr.push(Number(input[index++]))
}

arr.push(W)

const set = new Set()

for (let i = 0; i < arr.length; i++) {
	for (let j = i + 1; j < arr.length; j++) {
		set.add(arr[j] - arr[i])
	}
}

const result = Array.from(set).sort((a, b) => a - b)

console.log(result.join(' '))