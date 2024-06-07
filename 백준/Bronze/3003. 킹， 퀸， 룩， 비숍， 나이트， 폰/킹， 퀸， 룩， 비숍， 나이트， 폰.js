
console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
	.toString()
	.split(" ")
	.map(Number)
    .map((elem, index) => [1, 1, 2, 2, 2, 8][index] - elem)
    .join(' '))
