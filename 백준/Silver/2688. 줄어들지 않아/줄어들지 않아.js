const [N, ...arr] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);



const dp = Array.from({length: 66}, () => Array.from({length: 10}, () => 0)); 
        

 for (let i = 0; i <= 9; i++) {
    dp[1][i] = 1;
 }
 for (let k = 2; k <= 65; k++) {
     for (let i = 0; i <= 9; i++) {
         for (let j = i; j <= 9; j++) {
            dp[k][i] += dp[k - 1][j];
         }
     }
 }

console.log(arr.map(elem => dp[elem + 1][0]).join('\n'))