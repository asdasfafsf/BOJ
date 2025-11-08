const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const N = parseInt(input[0])

for (let i = 1; i <= N; i++) {
  const [id, s, m, t] = input[i].split(' ')
  const S = Number(s), M = Number(m), T = Number(t)
  const total = S + M + T
  const pass =
    total >= 55 &&
    S >= 35 * 0.3 &&
    M >= 25 * 0.3 &&
    T >= 40 * 0.3
      ? 'PASS'
      : 'FAIL'
  console.log(`${id} ${total} ${pass}`)
}