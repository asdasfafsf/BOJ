const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
let cnt = 0
for (let i = 1; i <= N; i++) {
  let yes = [...input[i]].filter(v => v === 'O').length
  if (yes > M / 2) cnt++
}
console.log(cnt)