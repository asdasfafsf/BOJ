const input = require('fs')
    .readFileSync(0, 'utf-8')
    .trim()
    .split('\n')

const n = Number(input[0])
const board = Array.from({ length: 101 }, () => Array(101).fill(0))

for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(' ').map(Number)
    for (let r = x; r < x + 10; r++) {
        for (let c = y; c < y + 10; c++) {
            board[r][c] = 1
        }
    }
}

let ans = 0
const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (board[i][j] === 1) {
            for (let d = 0; d < 4; d++) {
                const nx = i + dx[d]
                const ny = j + dy[d]
                if (nx < 0 || ny < 0 || nx >= 100 || ny >= 100 || board[nx][ny] === 0) {
                    ans++
                }
            }
        }
    }
}

console.log(ans)