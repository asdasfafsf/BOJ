const [str1, str2] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .sort((a, b) => a.length - b.length);


const dp = Array.from(Array(str1.length + 1), () => Array(str2.length + 1).fill(0));


for (let i = 1; i <= str1.length; i++) {
    const s1 = str1[i - 1]
    for (let j = 1; j <= str2.length; j++) {
        const s2 = str2[j - 1];
        if (s1 === s2) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
    }
}

console.log(dp[str1.length][str2.length])