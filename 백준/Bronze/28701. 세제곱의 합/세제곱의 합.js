const N = Number(require('fs')
    .readFileSync(0, 'utf-8')
    .trim())

const sum = (N * (N + 1)) / 2
const squareOfSum = sum ** 2
let sumOfCubes = 0

for (let i = 1; i <= N; i++) {
    sumOfCubes += i ** 3
}

console.log(sum)
console.log(squareOfSum)
console.log(sumOfCubes)