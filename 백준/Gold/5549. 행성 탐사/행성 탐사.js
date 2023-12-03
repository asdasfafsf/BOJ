const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

let index = 0;
const [M, N] = input[index].split(' ').map(Number);
const K = +input[++index];

const prefixSumJ = Array.from({length: M}, () => Array.from({length: N}, () => 0));
const prefixSumI = Array.from({length: M}, () => Array.from({length: N}, () => 0));
const prefixSumO = Array.from({length: M}, () => Array.from({length: N}, () => 0));

const arr = [];

for (let i = 0; i < M; i++) {
    arr.push(input[++index].split(''));
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        const area = arr[i][j];

        if (area === 'J') {
            prefixSumJ[i][j]++;
        } else if (area === 'I') {
            prefixSumI[i][j]++;
        } else if (area === 'O') {
            prefixSumO[i][j]++;
        }
    }
}

for (let i = 1; i < M; i++) {
    prefixSumI[i][0] = prefixSumI[i - 1][0] + prefixSumI[i][0];
    prefixSumJ[i][0] = prefixSumJ[i - 1][0] + prefixSumJ[i][0];
    prefixSumO[i][0] = prefixSumO[i - 1][0] + prefixSumO[i][0];
}

for (let i = 1; i < N; i++) {
    prefixSumI[0][i] = prefixSumI[0][i - 1] + prefixSumI[0][i];
    prefixSumJ[0][i] = prefixSumJ[0][i - 1] + prefixSumJ[0][i];
    prefixSumO[0][i] = prefixSumO[0][i - 1] + prefixSumO[0][i];
}

for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
        prefixSumI[i][j] = prefixSumI[i - 1][j] + prefixSumI[i][j - 1] + (arr[i][j] === 'I' ? 1 : 0) - prefixSumI[i - 1][j - 1]
        prefixSumJ[i][j] = prefixSumJ[i - 1][j] + prefixSumJ[i][j - 1] + (arr[i][j] === 'J' ? 1 : 0) - prefixSumJ[i - 1][j - 1]
        prefixSumO[i][j] = prefixSumO[i - 1][j] + prefixSumO[i][j - 1] + (arr[i][j] === 'O' ? 1 : 0) - prefixSumO[i - 1][j - 1]
    
    }
}


const answer = [];

for (let i = 0; i < K; i++) {
    const [sy, sx, ey, ex] = input[++index].split(' ').map(elem => elem - 1);
    const J =
        prefixSumJ[ey][ex]
        - (!sx ? 0 : prefixSumJ[ey][sx - 1]) 
        - (!sy ? 0 : prefixSumJ[sy - 1][ex])
        + (!(sy && sx) ? 0 : prefixSumJ[sy - 1][sx - 1])
    const O =
        prefixSumO[ey][ex]
        - (!sx ? 0 : prefixSumO[ey][sx - 1]) 
        - (!sy ? 0 : prefixSumO[sy - 1][ex])
        + (!(sy && sx) ? 0 : prefixSumO[sy - 1][sx - 1])
    const I = 
        prefixSumI[ey][ex]
        - (!sx ? 0 : prefixSumI[ey][sx - 1]) 
        - (!sy ? 0 : prefixSumI[sy - 1][ex])
        + (!(sy && sx) ? 0 : prefixSumI[sy - 1][sx - 1])
    
    answer.push(`${J} ${O} ${I}`);
}

console.log(answer.join('\n'))