const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)
const [N, W, H, L] = input
console.log(Math.min(N, Math.floor(W / L) * Math.floor(H / L)))