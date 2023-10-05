const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(elem => elem.split('').map(Number));

const dp = [[-1, 0], [1, 0], [0, 1], [0, -1]];

const queue = [[0, 0, 0]];
const isVisited = [new Array(N).fill(0).map(elem => new Array(M).fill(-2).map(elem => -2)),
                    new Array(N).fill(0).map(elem => new Array(M).fill(-2).map(elem => -2))]
let current = 0;

isVisited[0][0][0] = 0;
isVisited[1][0][0] = 0;

while(queue.length !== current) {
    const [cy, cx, broken] = queue[current];

    dp.forEach(([dy, dx]) => {
        const [ny, nx] = [cy + dy, cx + dx];

        if (ny < 0 || nx < 0 || nx >= M || ny >= N) {
            return;
        }

        const next = arr[ny][nx];


        if (next === 1) {
            if (broken === 0 && isVisited[1][ny][nx] === -2) {
                queue.push([ny, nx, 1])
                isVisited[1][ny][nx] = isVisited[0][cy][cx] + 1;
            }
        } else {
            if (isVisited[broken][ny][nx] === -2) {
                queue.push([ny, nx, broken])
                isVisited[broken][ny][nx]= isVisited[broken][cy][cx]+ 1;
            }
        }
 

        
    })

    current++;
}

const none = isVisited[0].at(-1).at(-1) + 1;
const broken = isVisited[1].at(-1).at(-1) + 1;

if (broken === -1) {
    console.log(none);
} else if (none === -1) {
    console.log(broken);
} else {
    console.log(Math.min(none, broken))
}
