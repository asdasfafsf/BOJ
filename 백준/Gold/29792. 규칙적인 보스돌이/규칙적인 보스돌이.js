const input = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n');


const [N, M, K] = input[0].split(' ').map(Number);
const damages = [];

for (let i = 1; i <= N; i++) {
    damages.push(+input[i]);
}

const bosses = [];

for (let i = N + 1; i < input.length; i++) {
    bosses.push(input[i].split(' ').map(Number));
}


damages.sort((a, b) => b - a);

let answer = 0;

for (let d = 0; d < M; d++) {
    const damage = damages[d];

    const dp = Array.from(Array(K + 1), () => Array(901).fill(0));

    for (let i = 1; i <= K; i++) {
        const [P, Q] = bosses[i - 1];
        const need = Math.ceil((P - 0.1) / damage);

        for (let j = 1; j <= 900; j++) {
            const deal = damage * j;
            
            if (j < need) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - need] + Q);
            }
        }
    }
    answer += dp[K][900];
}

console.log(answer);