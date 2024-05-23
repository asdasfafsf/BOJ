const input = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const S = input[1];
// const S = Array(N).fill('A')
const Q = +input[2];

const check = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (S[i] == S[j]) {
            check[i][j] = 1;
        }
    }
}


const dp = Array.from({length: N}, () => Array(N).fill(0));
const dum = Array.from({length: N}, () => Array(N).fill(0));

for (let i = 0; i < N; i++) {

    for (let j = i + 1; j < N; j++) {
        const x = j;
        const y = j - i - 1;
      
        // console.log(`y : ${y} 번째 x : ${x} 번째 차례입니다.`)
        // if (x - y === 1) {
        //     dp[y][x] = check[y][x];
        //     // dum[y][x] = check[y][x]
        // } else {
        if ((x - y) % 2 === 0) {
            dp[y][x] = Math.max(dp[y + 1][x], dp[y][x - 1])
            
        } else {
            dum[y][x] = dum[y + 1][x - 1] + check[y][x];
            dp[y][x] = Math.max(
                dum[y][x],
                dp[y][x - 1],
                dp[y + 1][x]
            )
        }

        // }
        // console.log(`ty : ${ty} ${tx}`)
    }
}

// console.log(dp)
// console.log(dum)
const answer = [];

for (let i = 3; i < input.length; i++) {
    const [l, r] = input[i].split(' ').map(Number);
    answer.push(dp[l - 1][r - 1]);
}

// console.log(dp)
console.log(answer.join('\n'))
