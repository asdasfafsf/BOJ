const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
                    .toString()
                    .trim()
                    .split('\n');


const [S, q] = input;

const sNumList = S.split('').map(elem => elem.charCodeAt(0) - 97)
const dp = Array.from({length: S.length + 1})
                .map(elem => new Array(26).fill(0))


for (let i = 1; i <= sNumList.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
        dp[i][j] = dp[i - 1][j]
    }

    const sNum = sNumList[i - 1];
    dp[i][sNum] += 1;
}


const arr = input.slice(2)
                .map(elem => elem.split(' '));
let res = '';
arr.forEach(elem => {
    const [alpha] = elem;
    const code = alpha.charCodeAt(0) - 97;

    const [start, end] = elem.slice(1).map(Number);

   res += `${dp[end + 1][code] - dp[start][code]}\n`  
})

console.log(res.trim());