const arr = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number)
    
arr.pop();


const dp = Array.from({length: arr.length + 1}, () => Array.from({length: 5}, () => Array.from({length: 5}, () => Infinity)))

dp[0][0][0] = 0;


for (let i = 1; i <= arr.length; i++) {
    const nextPoint = arr[i - 1];

    for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
            let dist = 4;
            if (k === 0) {
                if (nextPoint === 0) {
                    dist = 0;
                } else {
                    dist = 2;
                }
            } else if (k === nextPoint) {
                dist = 1;
            } else if (Math.abs(k - nextPoint) === 1 || Math.abs(k - nextPoint) === 3) {
                dist = 3;
            }

            dp[i][nextPoint][j] = Math.min(dp[i][nextPoint][j], dp[i - 1][k][j] + dist);
            dp[i][j][nextPoint] = Math.min(dp[i][j][nextPoint], dp[i - 1][j][k] + dist);
        }
    }
}

console.log(Math.min(...dp.at(-1).flat()))