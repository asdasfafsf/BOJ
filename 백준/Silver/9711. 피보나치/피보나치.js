
const dp = [0n, 1n, 1n];

for (let i = dp.length; i < 10001; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]);
}

console.log(require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map(elem => elem.split(' ').map(Number))
    .map((elem,index) => `Case #${index + 1}: ${dp[elem[0]] % BigInt(elem[1])}`)
    .join('\n'))

