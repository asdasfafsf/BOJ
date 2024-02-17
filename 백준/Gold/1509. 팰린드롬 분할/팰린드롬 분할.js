const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();




const check = Array.from({length: input.length}, () => Array.from(Array(input.length), () => 0));



for (let i = 0; i < input.length; i++) {
    check[i][i] = 1;
}

for (let i = 0; i < input.length; i++) {

    for (let j = i + 1; j < input.length; j++) {
        const x = j;
        const y = j - i - 1;
        const char1 = input.charAt(y);
        const char2 = input.charAt(x);

        const ty1 = y + 1;
        const tx1 = y + 1;

        const ty2 = y + 1;
        const tx2 = (x - y) === 1 ? x : x - 1;

        if (char1 === char2 && check[ty1][tx1] === 1 && check[ty2][tx2] === 1) {
            check[y][x] = 1;
        }
    }
}

const len = input.length;
const dp = Array.from({length: len}, () => Infinity);


for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
        if (check[j][i] === 1) {
            dp[i] = Math.min(dp[i], (j - 1 >= 0 ? dp[j - 1] : 0) + 1);
        } else {
            dp[i] = Math.min(dp[i], dp[i - 1] + 1);
        }
    }
}

console.log(dp[len - 1]);