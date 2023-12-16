const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


const N = +input.shift();
const arr = input.map(elem => elem.split(' ').map(Number));


const downRight = Array.from({length: N}, () => Array.from({length: N}, () => 0));
const right = Array.from({length: N}, () => Array.from({length: N}, () => 0));
const down = Array.from({length: N}, () => Array.from({length: N}, () => 0));


for (let i = 1; i < N; i++) {
    const isWall = arr[0][i] === 1;

    if (isWall) {
        break;
    }
    right[0][i] = 1;   
}


for (let i = 1; i < N; i++) {
    for (let j = 1; j < N; j++) {
        const isWall = arr[i][j] === 1;

        if (isWall) {
            continue;
        }

        down[i][j] = down[i - 1][j] + downRight[i - 1][j];
        right[i][j] = right[i][j - 1] + downRight[i][j - 1];
        downRight[i][j] = (arr[i - 1][j] === 0 && arr[i][j - 1] === 0)
            ? downRight[i - 1][j - 1] + right[i - 1][j - 1] + down[i - 1][j - 1]
            : 0;
    }
}

const answer 
    = downRight[N - 1][N - 1]
    + right[N - 1][N - 1]
    + down[N - 1][N - 1];


console.log(answer)