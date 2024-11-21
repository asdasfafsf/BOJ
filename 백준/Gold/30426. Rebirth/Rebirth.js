const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, M, K] = input[0].split(' ').map(Number);

const nodes = [];
for (let i = 1; i <= K; i++) {
    nodes.push(input[i].split(' ').map(Number));
}
const miaSet = new Set();
for (let i = K + 2; i < input.length; i++) {
    miaSet.add(+input[i]);
}

const stack = [[M, -1]];
const dp = Array.from(Array(K + 1), () => Array(N).fill(false));

while (stack.length) {
    const [node, count] = stack.pop();

    if (node === 0 && count === K - 1) {
        console.log('utopia');
        process.exit(0);
    }
    const nextCount = count + 1;

    if (nextCount >= K) continue;

    const [g, y] = nodes[nextCount];
    const [cg, cy] = [(g + node) % N, (y + node) % N];

    if (!miaSet.has(cg) && !dp[nextCount][cg]) {
        stack.push([cg, nextCount]);
        dp[nextCount][cg] = true;
    }
    if (!miaSet.has(cy) && !dp[nextCount][cy]) {
        stack.push([cy, nextCount]);
        dp[nextCount][cy] = true;
    }
}

console.log('dystopia');