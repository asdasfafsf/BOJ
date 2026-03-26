const fs = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()

let result = 0

for (let index = 0; index < fs.length; index++) {
	result = result * 26 + (fs.charCodeAt(index) - 64)
}

console.log(result)