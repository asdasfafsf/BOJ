const [[N, M, K], ...skillList] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));

const S = skillList.length;
const dp = Array.from(Array(S + 1), () => Array(M + 1).fill(Infinity));
dp[0][0] = 0;

for (let s = 1; s <= S; s++) {
    const [X, Y] = skillList[s - 1];

    for (let d = 0; d <= M; d++) {
        if (dp[s - 1][d] === Infinity) {
            continue;
        }

        dp[s][d] = Math.min(dp[s][d], dp[s - 1][d]);

        const maxCount = Math.floor((M - d) / Y);
        
        for (let c = 1; c <= maxCount; c++) {
            const damage = d + c * Y;
            if (damage > M) { 
                break;
            }

            const mana = dp[s - 1][d] + (c * X) + (c * (c - 1) / 2) * K;
            dp[s][damage] = Math.min(dp[s][damage], mana)
        }
    }
}

const answer = dp[S][M] === Infinity ? -1 : dp[S][M];
console.log(answer);

