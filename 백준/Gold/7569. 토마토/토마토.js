const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [M, N, H] = input[0].split(' ').map(Number);
const arrList = input.slice(1).map(elem => elem.split(' ').map(Number));
const arr = Array.from({length: H})
    .map((elem, index) => {
        return arrList.slice(index * N, (index + 1) * N);
    });
const dp = [[0, 0, 1], [0, 0, -1], [0, 1, 0], [0, -1, 0], [-1, 0, 0], [1, 0, 0]]

const queue = [];

let counter = M * N * H;
arr.forEach((zv, z) => {
    zv.forEach((yv, y) => {
        yv.forEach((xv, x) => {
            if (xv === 1) {
                queue.push([z, y, x]);
                counter--;
            } else if (xv === -1) {
                counter--;
            }
        })

    })
})


let current = 0;
let max = 1;
while(queue.length !== current) {
    const [z, y, x] = queue[current];
  
    dp.forEach(([dz, dy, dx]) => {
        const [tz, ty, tx] = [z + dz, y + dy, x + dx,];
        
        if (ty < 0 || tx < 0 || ty >= N || tx >= M || tz < 0 || tz >= H) {
            return;
        } 

        const data = arr[tz][ty][tx];
     
        if(data === 0) {
            counter--;
            queue.push([tz, ty, tx]);
            arr[tz][ty][tx] = arr[z][y][x] + 1;
            max = Math.max(arr[tz][ty][tx], max);
        }
    })

    current++;
}

console.log(counter ? -1 : (max - 1));