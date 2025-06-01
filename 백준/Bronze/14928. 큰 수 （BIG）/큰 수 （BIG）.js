const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim();

const MOD = 20000303;
let answer = 0;

for (const ch of input) {
  answer = (answer * 10 + Number(ch)) % MOD;
}

console.log(answer);