const [[N], ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));



const dp = Array.from({length: N}, () => Array.from({length: N}, () => 0));


for (let i = 1; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i + j >= N) {
            break;
        }

        dp[j][i + j] = Infinity
        for (let k = j; k < i + j; k++) {
            dp[j][i + j] = Math.min(
                dp[j][i + j], 
                dp[j][k] + dp[k + 1][i + j] + arr[j][0] * arr[k][1] * arr[i + j][1]
            );
        }   
    }
}

console.log(dp[0][N - 1]);