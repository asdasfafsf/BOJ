const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const N = +input[0];
const arr = input
    .slice(1)
    .map(elem => elem.split(''));

const dist = arr.map(elem => elem.map(elem => 0));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < N; k++) {
            if (j === k) {
                continue;
            }

            if (arr[j][k] === 'Y') {
                dist[j][k] = 1
            } else if(arr[j][i] === 'Y' && arr[i][k] === 'Y') {
                dist[j][k] = 1;
            }
        }
    }
}


console.log(Math.max(...dist.map(elem => elem.reduce((pv, cv) => pv + cv), 0)));