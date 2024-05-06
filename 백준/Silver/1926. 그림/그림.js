
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input
    .slice(1)
    .map(elem => elem.split(' ').map(Number));


const dp = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const visited = arr.map(elem => elem.map(elemElem => false));


let count = 0;
let maxArea = 0;
let currentArea = 0;

const dfs = (y, x) => {
    currentArea++;
    visited[y][x] = true;

    for (const [dy, dx] of dp) {
        const [ty, tx] = [dy + y, dx + x];

        if (ty > -1 && ty < n && tx > -1 && tx < m) {

            if (visited[ty][tx] === false && arr[ty][tx] === 1) {
                dfs(ty, tx);
            }
        }
    }
}


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (visited[i][j] === false && arr[i][j] === 1) {
            count++;
            currentArea = 0;
            dfs(i, j);
            maxArea = Math.max(maxArea, currentArea);
        }
    }
}

console.log(count);
console.log(maxArea)