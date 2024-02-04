const [[N], arr, [M], ...questions] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(elem => elem.split(' ').map(Number));


const dp = Array.from({length: N + 1}, () => Array.from({length: N + 1}, () => 0));
const stack = [0, ...arr, 0];

for (let y = 1; y <= N; y++) {
    for (let x = y + 1; x <= N; x++) {
        dp[y][x] = 1;
    }
}

for (let y = 1; y <= N; y++) {
    dp[y][y] = 1;
    for (let x = 1; x <= y; x++) {
        if (stack[y] === stack[x] && dp[y - 1][x + 1] === 1) {
            dp[y][x] = 1;
        }
    }
}

// console.log(dp.map(elem => elem.join(' ')).join('\n'));

const answer = questions.map(([x, y]) => dp[y][x]).join('\n');
console.log(answer);