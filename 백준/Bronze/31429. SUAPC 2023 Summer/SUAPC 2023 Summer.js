const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const N = Number(input[0])

const rankData = [
  [12, 1600],
  [11, 894],
  [11, 1327],
  [10, 1311],
  [9, 1004],
  [9, 1178],
  [9, 1357],
  [8, 837],
  [7, 1055],
  [6, 556],
  [6, 773],
]

const [solved, penalty] = rankData[N - 1]
console.log(`${solved} ${penalty}`)