const input = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const science = input.slice(0, 4).sort((a, b) => b - a);
const historyGeo = input.slice(4, 6);

let sum = science[0] + science[1] + science[2] + Math.max(historyGeo[0], historyGeo[1]);
console.log(sum);