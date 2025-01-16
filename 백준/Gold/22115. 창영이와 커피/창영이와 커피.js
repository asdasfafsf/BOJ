const [[N, K], caffeines] = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n')
   .map(elem => elem.split(' ').map(Number));


const dp = Array.from(Array(N + 1), () => Array(K + 1).fill(Infinity));

dp[0][0] = 0;
for (let i = 1; i <= N; i++) {
    const caffeine =  caffeines[i - 1]

    for (let j = 0; j <= K; j++) {
        if (j - caffeine < 0) {
            dp[i][j] = dp[i - 1][j];
        } else {
            dp[i][j] = Math.min(dp[i - 1][j - caffeine] + 1, dp[i - 1][j])
        }

    }
}

// console.log(dp.map(elem => elem.join(' ')).join('\n'))

if (dp[N][K] === Infinity) {
    console.log(-1);
} else {
    console.log(dp[N][K]);
}