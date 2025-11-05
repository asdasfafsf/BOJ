const input = require('fs').readFileSync(0, 'utf-8').trim()
const [K, D, A] = input.split('/').map(Number)
if (K + A < D || D === 0) console.log('hasu')
else console.log('gosu')
