const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

let N = +input[0]
let arr = input[1] ? input[1].split(' ').map(Number) : []

let res = []

for (let i = 0; i < N; i++) {
	if (arr[i] === i + 1) {
		continue
	}
	let index = i
	while (arr[index] !== i + 1) {
		index++
	}
	res.push([i + 1, index + 1])
	let l = i, r = index
	while (l < r) {
		let tmp = arr[l]
		arr[l] = arr[r]
		arr[r] = tmp
		l++
		r--
	}
}

console.log(res.length)
for (let i = 0; i < res.length; i++) {
	console.log(res[i][0], res[i][1])
}