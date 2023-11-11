const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const N = +input.shift();
const cards = input.shift().split(' ').map(Number);
const dp = Array.from({length: N}, () => 0);

for (let i = 0; i < cards.length; i++) {
    dp[i] = cards[i];
}



for (let i = 1; i < dp.length; i++) {
    const len = Math.ceil(i / 2);

    for (let j = 1; j <= len; j++) {
        dp[i] = Math.max(dp[i], dp[i - j] + dp[j - 1])
    }
}

console.log(dp.at(-1))