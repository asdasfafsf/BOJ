const [L, A, B, C, D] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const koreanDays = Math.ceil(A / C);
const mathDays = Math.ceil(B / D);

const result = L - Math.max(koreanDays, mathDays);
console.log(result);