

const fs = require('fs')


const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(elem => elem.split(''));
const visited = arr.map(elem => elem.map(e => false));



const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const queue = [];

for (let i = 0; i < arr.length && !queue.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 'I') {
            queue.push([i, j]);
            visited[i][j] = true;
            break;
        }
    }
}



let current = 0;
let count = 0;

while (queue.length !== current) {
    const [cy, cx] = queue[current];

    if (arr[cy][cx] === 'P') {
        count++;
    }

    for (let i = 0; i < dp.length; i++) {
        const [dy, dx] = dp[i];
        const [ty, tx] = [dy + cy, dx + cx];


        if (ty > -1 && tx > -1 && ty < N && tx < M && visited[ty][tx] === false && arr[ty][tx] !== 'X') {
            queue.push([ty, tx]);
            visited[ty][tx] = true;
        }
    }

    current++;
}

console.log(count || 'TT')