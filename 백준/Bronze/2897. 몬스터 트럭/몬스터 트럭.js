const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

const [R, C] = input[0].split(' ').map(Number)
const grid = input.slice(1)

const result = [0, 0, 0, 0, 0]

for (let i = 0; i < R - 1; i++) {
	for (let j = 0; j < C - 1; j++) {
		let count = 0
		let blocked = false

		for (let dx = 0; dx < 2; dx++) {
			for (let dy = 0; dy < 2; dy++) {
				const cell = grid[i + dx][j + dy]
				if (cell === '#') {
					blocked = true
				}
				if (cell === 'X') {
					count++
				}
			}
		}

		if (!blocked) {
			result[count]++
		}
	}
}

console.log(result.join('\n'))