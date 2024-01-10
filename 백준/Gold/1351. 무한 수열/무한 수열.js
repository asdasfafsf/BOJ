const [N, P, Q] = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);




const dp = [1];


const recursion = current => {
    if (!dp[current]) {
        dp[current] = recursion(Math.floor(current / P)) + recursion(Math.floor(current / Q))
    }

    return dp[current];
}


console.log(recursion(N))