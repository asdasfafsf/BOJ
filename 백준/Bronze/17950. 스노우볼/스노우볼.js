const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split('\n')

const [H, x] = input[0].split(' ').map(Number)
const MOD = 1000000007

let p = x % MOD
let ans = 0

for (let i = 1; i <= H; i++) {
	const c = Number(input[i])
	ans = (ans + c * p) % MOD
	p = (p * x) % MOD
}

console.log(ans)