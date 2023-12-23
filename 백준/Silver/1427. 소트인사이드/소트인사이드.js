const answer = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('')
    .sort((a, b) => b - a)
    .join('');

console.log(answer);