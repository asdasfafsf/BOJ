const fs = require('fs')
// const input = +fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('/dev/stdin')
                    .toString()
                    .trim()
                    .split('\n')
                    .map(elem => elem.split(' ').map(Number));



const [arr] = input.slice(1);
const dp = arr.map(elem => elem);


for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i]) {
            dp[i] =  Math.max(dp[i], arr[i] + dp[j]);
        }
    }
}

console.log(Math.max(...dp));