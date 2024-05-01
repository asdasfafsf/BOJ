const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const weights = input[1].split(' ').map(Number);
const graph = Array.from(Array(N), () => []);


for (let i = 2; i < input.length; i++) {
    const [s, e] = input[i].split(' ').map(elem => elem - 1);

    graph[s].push(e);
    graph[e].push(s);
}

const dp = Array.from(Array(N), () => [0, 0]);
const visited = Array(N).fill(false);


const recursion = (node) => {
    visited[node] = true;
    dp[node][1] = weights[node];

    for (const nextNode of graph[node]) {
        if (visited[nextNode]) {
            continue;
        }

        recursion(nextNode);

        dp[node][1] += dp[nextNode][0];
        dp[node][0] += Math.max(dp[nextNode][1], dp[nextNode][0]);
    }
}

recursion(0)

console.log(Math.max(dp[0][0], dp[0][1]))