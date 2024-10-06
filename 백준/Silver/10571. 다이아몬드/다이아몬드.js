const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .trim()
    .split('\n')


let index = 0;
let T = +input[0];


while(T--) {
    const N = +input[++index];
    const diamonds = [];
    const dp = []

    for (let i = 0; i < N; i++) {
        const [w, c] = input[++index].split(' ').map(Number);
        diamonds.push([w, c]);
    }


    for (let i = 0; i < N; i++) {
        dp[i] = 1;

        for (let j = 0; j < i; j++) {
            if (diamonds[i][0] > diamonds[j][0] && diamonds[i][1] < diamonds[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(Math.max(...dp));
}
