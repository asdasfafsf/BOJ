const input = require('fs')
   .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
   .toString()
   .trim()
   .split('\n')
   .map(elem => elem.split(' '));

const [R, C] = input.shift().map(Number);
const map = input;

const prefixA = Array.from(Array(R + 1), () => Array(C + 1).fill(0));
const prefixB = Array.from(Array(R + 1), () => Array(C + 1).fill(0));
const dp = Array.from(Array(R + 1), () => Array(C + 1).fill(0));

for (let y = 1; y <= R; y++) {
    for (let x = 1; x <= C; x++) {
        const elem = map[y - 1][x - 1];
        const ab = elem[0];
        const num = Number(elem.slice(1));

        prefixA[y][x] = prefixA[y - 1][x] + prefixA[y][x - 1] - prefixA[y - 1][x - 1];
        prefixB[y][x] = prefixB[y - 1][x] + prefixB[y][x - 1] - prefixB[y - 1][x - 1];

        if (ab === 'A') {
            prefixA[y][x] += num;
        } else {
            prefixB[y][x] += num;
        }
    }
}

for (let y = 1; y <= R; y++) {
    for (let x = 1; x <= C; x++) {
        const option1 = y > 1 && x > 1 ? dp[y - 1][x - 1] + (prefixB[y - 1][x] - prefixB[y - 1][x - 1]) + (prefixA[y][x - 1] - prefixA[y - 1][x - 1]) : 0;
        const option2 = x > 1 ? dp[y][x - 1] + (prefixB[y - 1][x] - prefixB[y - 1][x - 1]) : 0;
        const option3 = y > 1 ? dp[y - 1][x] + (prefixA[y][x - 1] - prefixA[y - 1][x - 1]) : 0;

        dp[y][x] = Math.max(option1, option2, option3);
    }
}

console.log(dp[R][C]);