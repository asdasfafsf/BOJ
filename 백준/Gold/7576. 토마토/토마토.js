const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [M, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(elem => elem.split(' ').map(Number));

const dp = [[-1, 0], [0, 1], [1, 0], [0, -1]]

const queue = [];

let counter = M * N;
arr.forEach((iv, i) => {
    iv.forEach((jv, j) => {
        if (jv === 1) {
            queue.push([j, i]);
            counter--;
        } else if (jv === -1) {
            counter--;
        }
    })
})

let current = 0;

let max = 1;
while(queue.length !== current) {
    const [x, y] = queue[current];
  
    dp.forEach(([dx, dy]) => {
        const [ty, tx] = [y + dy, x + dx];

        if (ty < 0 || tx < 0 || ty >= N || tx > M) {
            return;
        } 

        const data = arr[ty][tx]
     
        if(data === 0) {
            counter--;
            queue.push([tx, ty]);
            arr[ty][tx] = arr[y][x] + 1;
            max = Math.max(arr[ty][tx], max);
        }
    })

    current++;
}
console.log(counter ? -1 : (max - 1));