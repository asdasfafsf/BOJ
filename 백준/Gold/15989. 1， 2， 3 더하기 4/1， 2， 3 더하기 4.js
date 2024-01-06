const [n, ...testCases] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);



const max = Math.max(...testCases);
const dp = [0, 1, 2];

for (let i = dp.length; i <= max; i++) {
    dp[i] = dp[i - 1] + Math.ceil((i - 1) / 6) + (((i % 6) && 1 ) ^ 1);
}


const answer = testCases.map(elem => dp[elem]).join('\n');
console.log(answer);
