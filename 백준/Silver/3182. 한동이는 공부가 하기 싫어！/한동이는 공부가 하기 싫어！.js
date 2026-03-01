const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')

const N = Number(input[0])
const arr = input.slice(1).map(Number)

let answer = 1
let max = -1

for (let i = 1; i <= N; i++) {
    let visited = new Array(N + 1).fill(false)
    let count = 0
    let cur = i

    while (!visited[cur]) {
        visited[cur] = true
        count++
        cur = arr[cur - 1]
    }

    if (count > max) {
        max = count
        answer = i
    }
}

console.log(answer)