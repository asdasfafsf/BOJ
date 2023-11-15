const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


const [N, D] = input[0].split(' ').map(Number);
const arr = input
    .slice(1)
    .map(elem => elem.split(' ').map(Number))
    .filter(([s, d, w]) => d - s > w && d <= D);


const graph = Array.from({length: D + 1}, () => []);

for (let i = 0; i < arr.length; i++) {
    const [s, d, w] = arr[i];
    graph[d].push([s, w]);
}

const dp = Array.from({length: D}, () => 0).map((elem, index) => index);
for (let i = 1; i <= D; i++) {
    const dests = graph[i];
    dp[i] = dp[i - 1] + 1;

    for (let j = 0; j < dests.length; j++) {
        const [s, w] = dests[j];
        dp[i] = Math.min(w + dp[s], dp[i])
    }
    
}

console.log(dp.at(-1))