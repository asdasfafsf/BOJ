const [[n], a] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(BigInt));


a.sort((a, b) => Number(a) - Number(b));
let sum = a.reduce((pv, cv) => pv + cv, 0n);
let answer = 0n;

for (let i = 0; i < a.length - 1; i++) {
    sum -= a[i];
    answer += (sum * a[i]);
}
console.log(answer.toString());
