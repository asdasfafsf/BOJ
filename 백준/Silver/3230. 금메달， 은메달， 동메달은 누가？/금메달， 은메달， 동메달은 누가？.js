const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

let [N, M] = input[0].split(' ').map(Number)

let first = []
for (let i = 1; i <= N; i++) {
    first.push(Number(input[i]))
}

let second = []
for (let i = N + 1; i <= N + M; i++) {
    second.push(Number(input[i]))
}

let firstRank = []
for (let i = 0; i < N; i++) {
    firstRank.splice(first[i] - 1, 0, i + 1)
}

let finalists = firstRank.slice(0, M)

let secondRank = []
for (let i = 0; i < M; i++) {
    secondRank.splice(second[i] - 1, 0, finalists[M - 1 - i])
}

console.log(secondRank[0])
console.log(secondRank[1])
console.log(secondRank[2])