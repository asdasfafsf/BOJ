const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const P = input[1].split(' ').map(Number);
const M = +input[2];

if (P.length === 1) {
    console.log(0);
    process.exit(0);
}


const dp = [];


let minIndex = 1;
let minValue = P[1]
for (let i = 2; i < P.length; i++) {
    if (P[i] <= minValue) {
        minIndex = i;
        minValue = P[i];
    }
}

if (minValue > M) {
    console.log(0);
    process.exit(0);
}


let remainder = M - minValue;
dp.push(minIndex);

minIndex = 0;
minValue = P[0];
let maxLen = Math.floor(remainder / minValue);

for (let i = 1; i < P.length; i++) {
    const curLen = Math.floor(remainder / P[i]);

    if (curLen > maxLen) {
        maxLen = curLen;
        minIndex = i;
        minValue = P[i];
    }
}

maxLen && maxLen++

while (dp.length < maxLen) {
    dp.push(minIndex);
    remainder -= minValue
}


for (let i = 0; i < dp.length; i++) {

    for (let p = P.length - 1; p >= 0; p--) {
        const amount = P[p] - P[dp[i]];

        if (remainder - amount >= 0) {
            dp[i] = p;
            remainder -= amount;
            break;
        }
        // console.log(amount)
    }
}

console.log(dp.join(''));