const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')

let N = Number(input[0])
let sum = 0

for (let i = 1; i <= N; i++) {
    let [w, h] = input[i].split(' ').map(Number)
    if (w === 136) sum += 1000
    else if (w === 142) sum += 5000
    else if (w === 148) sum += 10000
    else if (w === 154) sum += 50000
}

console.log(sum)