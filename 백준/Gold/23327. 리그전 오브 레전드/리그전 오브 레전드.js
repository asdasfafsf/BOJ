const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const [N, Q] = input[0].split(' ').map(Number);
const teams = input[1].split(' ').map(Number);

const prefixSum = [0];

for (let i = 1; i <= teams.length; i++) {
    prefixSum.push(teams[i - 1] + prefixSum[i - 1])
}

const prefixMul = [0, 0];

for (let i = 1; i < prefixSum.length - 1; i++) {
    prefixMul.push(prefixMul[i] + prefixSum[i] * teams[i])
}

const answer = []
for (let i = 2; i < input.length; i++) {
    const [l, r] = input[i].split(' ').map(Number);
    const sum1 = prefixMul[r] - prefixMul[l - 1];
    const sum3 = prefixSum[l - 1] * (prefixSum[r] - prefixSum[l - 1]);

    answer.push(sum1 - sum3);
}

console.log(answer.join('\n'))