const [num1, num2] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(Number);

console.log(num1 * (num2 % 10));
console.log(num1 * Math.floor((num2 % 100) / 10));
console.log(num1 * Math.floor(num2 / 100));
console.log(num1 * num2);