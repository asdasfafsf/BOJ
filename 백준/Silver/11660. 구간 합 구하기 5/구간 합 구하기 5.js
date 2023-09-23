const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n')
                    .map(elem => elem.split(' ').map(Number));




const [N, M] = input[0];
const arr = input.slice(1, N + 1);
const data = input.slice(-M);


const dp = Array.from({length: N + 1})
                .map(elem => new Array(N + 1).fill(0));

for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
        dp[i][j] = arr[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
}


let res = '';
data.forEach(elem => {
    const [sy, sx, ey, ex] = elem;
    const result = dp[ey][ex] - (dp[ey][sx - 1] + dp[sy - 1][ex] - dp[sy - 1][sx - 1])
    res += result + '\n';
})

console.log(res.trim());