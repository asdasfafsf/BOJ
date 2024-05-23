const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const S = input[1];
const Q = +input[2];

const dp = Array.from({length: N}, () => Array(N).fill(0));
const dum = Array.from({length: N}, () => Array(N).fill(0));

for (let i = 0; i < N; i++) {

    for (let j = i + 1; j < N; j++) {
        const x = j;
        const y = j - i - 1;
      
        if ((x - y) % 2 === 0) {
            dp[y][x] = Math.max(dp[y + 1][x], dp[y][x - 1])
            
        } else {
            dum[y][x] = dum[y + 1][x - 1] + (S[y] === S[x] ? 1 : 0)
            dp[y][x] = Math.max(
                dum[y][x],
                dp[y][x - 1],
                dp[y + 1][x]
            )
        }
    }
}

const answer = [];

for (let i = 3; i < input.length; i++) {
    const [l, r] = input[i].split(' ').map(Number);
    answer.push(dp[l - 1][r - 1]);
}

console.log(answer.join('\n'))
