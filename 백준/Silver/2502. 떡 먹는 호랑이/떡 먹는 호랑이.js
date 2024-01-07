const [D, K] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);




const dp = [0, 1, 1];

for (let i = dp.length; i <= D; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}


const a = dp[D - 2];
const b = dp[D - 1];

let x = 0;
let y = 0;

for (let i = 1; i <= K; i++) {
    const cal = (K - (b * i)) / a;

    if (cal === parseInt(cal) && cal > 0) {
        if (i > cal) {
            x = cal;
            y = i;
            // break;
        }
    }
}

console.log(Math.min(x, y));
console.log(Math.max(x, y));


