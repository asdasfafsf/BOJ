
const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(Number);



const gcd = (a, b) => {
    [a, b] = [Math.max(a, b), Math.min(a, b)];
    let tmp = 0;

    while (a % b !== 0) {
        tmp = a % b;
        a = b;
        b = tmp;
    }

    return b;
}

const dp = [0, 3];
const max = Math.max(...input.slice(1));

for (let i = 2; i <= max; i++) {
    let count = 0;
    for (let j = 1; j < i; j++) {
        if (gcd(i, j) === 1) {
            count++;
        }
    }
    dp[i] = dp[i - 1] + 2 * count;
}


const answer = [];
for (let i = 1; i < input.length; i++) {
    answer.push(dp[input[i]]);
}

console.log(answer.join('\n'))