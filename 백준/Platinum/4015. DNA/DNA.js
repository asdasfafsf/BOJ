const input = require('fs')
  .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');

let [M, K, R] = input.shift().split(' ').map(Number);
const DNA = ['A', 'C', 'G', 'T', 'N'];
const patterns = input[0].split('').map(elem => DNA.indexOf(elem));

const dp = Array.from({ length: M + 2}, () =>
  Array.from({ length: 11 }, () =>
    Array.from({ length: 4 }, () => 0)
  )
);


if (patterns.at(-1) === 4) {
    for (let i = 0; i < 4; i++) {
        dp[M][1][i] = 1;
    }
} else {
    dp[M][1][patterns.at(-1)] = 1;
}

for (let i = M - 1; i >= 1; i--) {
    const s = patterns[i - 1];

    if (s === 4) {
        for (let j = 1; j <= K; j++) {
            for (let ps = 0; ps < 4; ps++) {
                for (let fs = 0; fs < 4; fs++) {
                    if (fs >= ps) {
                        dp[i][j][ps] += dp[i + 1][j][fs]; 
                    } else {
                        dp[i][j][ps] += dp[i + 1][j - 1][fs];
                    }
                }
            }
        }
    } else {
        for (let j = 1; j <= K; j++) {
            for (let ps = 0; ps < 4; ps++) {
                if (ps >= s) {
                    dp[i][j][s] += dp[i + 1][j][ps]
                } else {
                    dp[i][j][s] += dp[i + 1][j - 1][ps]
                }
            }
        }
    }
}


let current = R;
let ls = 0;
const answer = [];

for (let i = 0; i < M; i++) {
    const s = patterns[i];
    let count = 0;

    if (s === 4) {
        let isOk = false;

        for (let k = 0; k < 4; k++) {
            let totalCount = 0;

            for (let j = 1; j <= K; j++) {
                if (j === K && k < ls) {
                    break;
                }

                totalCount += dp[i + 1][j][k];

                if (count + totalCount >= current) {
                    current -= count;
                    if (k < ls) {
                        K--;
                    }
                    ls = k;
                    answer.push(DNA[k]);
                    isOk = true;
                    break;
                }
            }

            count += totalCount;

            if (isOk) {
                break;
            }
        }
    } else {
        answer.push(DNA[s]);

        if (s < ls) {
            K--;
        }
        ls = s;
    }
}

console.log(answer.join(''))