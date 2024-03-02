const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


let index = -1;
const answer = [];
const dp = Array.from(Array(100001), () => Array(3).fill(0));
while (true) {
    const line = input[++index];

    const N = +line;
    const graph = [];

    for (let i = 0; i < N; i++) {
        graph.push(input[++index].split(' ').map(Number));
    }

    dp[0][1] = graph[0][1];
    dp[0][2] = dp[0][1] + graph[0][2];

    dp[1][0] = dp[0][1] + graph[1][0];
    dp[1][1] = Math.min(dp[1][0], dp[0][1], dp[0][2]) + graph[1][1];
    dp[1][2] = Math.min(dp[1][1], dp[0][1], dp[0][2]) + graph[1][2];


    for (let i = 2; i < graph.length; i++) {
        dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]) + graph[i][0];
        dp[i][1] = Math.min(dp[i][0], dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + graph[i][1];
        dp[i][2] = Math.min(dp[i][1], dp[i - 1][1], dp[i - 1][2]) + graph[i][2];
    }

    answer.push(`${answer.length + 1}. ${dp[N - 1][1]}`)
    if (input[index + 1] === '0') {
        break;
    }
}

console.log(answer.join('\n'))