
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const [N, M] = input[0].split(' ').map(Number);


const arr = input
    .slice(1)
    .map(elem => elem.split(' ').map(Number));

const rSums = Array.from({length: M}, () => 0);
const cSums = Array.from({length: N}, () => 0);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        cSums[i] += arr[i][j];
    }
}

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        rSums[i] += arr[j][i];
    }
}

let answer = -999999;


for (let i = 0; i < M; i++) {
    const rSum1 = rSums[i];

    for (let j = i + 1; j < M; j++) {
        const rSum2 = rSums[j];

        for (let k = 0; k < N; k++) {
            const cSum1 = cSums[k];

            for (let l = k + 1; l < N; l++) {
                const cSum2 = cSums[l]

                const cal = 
                    cSum1 
                    + cSum2 
                    + rSum1 
                    + rSum2
                    - arr[k][i]
                    - arr[k][j]
                    - arr[l][j]
                    - arr[l][i]
                    + (l - k - 1) * (j - i - 1)
               
                answer = Math.max(answer, cal)
                
            }
        }
    }
}

console.log(answer)