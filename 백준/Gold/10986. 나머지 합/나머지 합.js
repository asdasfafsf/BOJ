const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n');


const [N, M] = input[0].split(' ').map(Number);
const arr = input.at(1).split(' ').map(Number);
const acc = new Array(arr.length + 1).fill(0);
const dp = new Array(M + 1).fill(0)

for (let i = 1; i < acc.length; i++) {
    acc[i] = (acc[i - 1] + arr[i - 1]) % (M);
    dp[acc[i]]++
}

const res = dp.filter(elem => elem >= 2)
            .reduce((pv, cv) => pv + ((cv * (cv - 1)) / 2), 0) + dp[0]


console.log(res);