const fs = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()

let n = Number(fs)

let x = 0
let y = 0

if (n === 0) {
	console.log(0, 0)
	process.exit(0)
}

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

let dir = 0
let len = 1
let count = 0

while (n > 0) {
	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < len; j++) {
			if (n === 0) break
			x += dx[dir]
			y += dy[dir]
			n--
		}
		dir = (dir + 1) % 4
		if (n === 0) break
	}
	len++
}

console.log(x, y)