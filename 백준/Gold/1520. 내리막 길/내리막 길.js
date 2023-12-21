const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const [M, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));
const dp = Array.from({length: M}, () => Array.from({length: N}, () => -1));

const points = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const recursion = (y, x) => {
    if (y === M - 1 && x === N - 1) {
        return 1;
    }
 
    if (dp[y][x] === -1) {
        dp[y][x] = 0;
    }
    
    for (const [dy, dx] of points) {
        const [ty, tx] = [y + dy, x + dx];

        if (ty > - 1 && ty < M && tx > -1 && tx < N && arr[y][x] > arr[ty][tx]) {
            if (dp[ty][tx] < 0) {
                dp[y][x] += recursion(ty, tx);
            } else {
                dp[y][x] += dp[ty][tx];
            }
           
        }
    }

    return dp[y][x];
}

console.log(recursion(0, 0));
