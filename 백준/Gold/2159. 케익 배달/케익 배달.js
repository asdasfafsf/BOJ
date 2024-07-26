const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const customers = [];

for (let i = 1; i < input.length; i++) {
    const [nx, ny] = input[i].split(' ').map(Number);
    customers.push([nx, ny]);
}
const calculate = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
const directions = [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1]];
const dp = Array.from(Array(N + 1), () => Array(5).fill(Infinity));
dp[0] = Array(5).fill(1);
dp[0][0] = 0;


for (let i = 1; i < customers.length; i++) {
    const [px, py] = customers[i - 1];
    const [cx, cy] = customers[i];


    for (let d = 0; d < directions.length; d++) {
        const [dx, dy] = directions[d];
        const [cdx, cdy] = [cx + dx, cy + dy];

        for (let pd = 0; pd < directions.length; pd++) {
            const [pdx, pdy] = directions[pd];
            const [ppdx, ppdy] = [px + pdx, py + pdy];
            const dist = calculate(ppdx, ppdy, cdx, cdy);

            dp[i][d] = Math.min(dp[i][d], dp[i - 1][pd] + dist)
        }
    }
}

console.log(Math.min(...dp.at(-1)))