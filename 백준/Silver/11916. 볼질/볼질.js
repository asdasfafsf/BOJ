const input = require('fs')
	.readFileSync(0, 'utf-8')
	.trim()
	.split(/\s+/)

let Q = +input[0]

let base1 = 0
let base2 = 0
let base3 = 0
let cnt = 0
let ans = 0

for (let i = 1; i <= Q; i++) {
	let x = +input[i]

	if (x === 1) {
		cnt++
	} else if (x === 2) {
		cnt = 4
	} else {
		cnt++
		if (base3) {
			base3 = 0
			ans++
		}
		if (base2) {
			base2 = 0
			base3 = 1
		}
		if (base1) {
			base1 = 0
			base2 = 1
		}
	}

	if (cnt === 4) {
		cnt = 0

		if (base1) {
			if (base2) {
				if (base3) {
					base3 = 0
					ans++
				}
				base2 = 0
				base3 = 1
			}
			base1 = 0
			base2 = 1
		}
		base1 = 1
	}
}

console.log(ans)