const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')



const [N, L, K] = input[0].split(' ').map(Number);
const resistances = input.slice(1).map(Number);

resistances.sort((a, b) => a - b);

let participatingCount = 0;
let currentL = L;

for (let i = 0; i < N; i++) {
  if (currentL >= resistances[i]) {
    participatingCount++;
    currentL += K;
  } else {
    break;
  }
}

console.log(participatingCount);