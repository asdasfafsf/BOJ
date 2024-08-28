const str = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()

const N = str.length;
const dp = Array.from(Array(N + 2), () => Array(N + 2).fill(0));


for (let i = 1; i <= N; i++) {
    for (let x = i; x <= N; x++) {
        const y = x - i + 1;
        if (str[y - 1] === str[x - 1]) {
            dp[y][x] = (((dp[y + 1][x] + dp[y][x - 1]) % 10007) + 1) % 10007;
        } else {
            dp[y][x] = (((((dp[y + 1][x] + dp[y][x - 1]) % 10007) - (dp[y + 1][x - 1] % 10007))) + 10007) % 10007;
        }

    }
}

// console.log(dp.map(elem => elem.map(elem => elem.toString().padStart(5, ' ')).join('')).join('\n'))
console.log(dp[1][N])