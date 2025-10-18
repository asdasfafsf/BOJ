const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split(' ')
    .map(Number)

const [S, K, H] = input
const sum = S + K + H

if (sum >= 100) console.log('OK')
else {
    if (S < K && S < H) console.log('Soongsil')
    else if (K < S && K < H) console.log('Korea')
    else console.log('Hanyang')
}