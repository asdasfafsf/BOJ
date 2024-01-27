const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')


const [N, K] = input[0].split(' ').map(Number);
const lines = input.slice(1).map(elem => elem.split('').map(Number));


const queue = [[0, 0, 0]];
const visited = lines.map(elem => elem.map(elem => false));
visited[0][0] = true;

let current = 0;
let answer = 0;
while(queue.length !== current) {
    const [lineNumber, point, time] = queue[current];

    if (point + 1 >= N || point + K >= N) {
        answer = 1;
        break;
    } 


    for (const [nextLineNumber, nextPoint, nextTime] of [[lineNumber, point + 1, time + 1], [lineNumber, point - 1, time + 1], [(lineNumber + 1) % 2, point + K, time + 1]]) {
        if (lines[nextLineNumber][nextPoint] === 1 && visited[nextLineNumber][nextPoint] === false) {
            if (nextPoint >= nextTime) {
                visited[nextLineNumber][nextPoint] = true;
                queue.push([nextLineNumber, nextPoint, nextTime])
            }
        }
    }

    
    current++;
}

console.log(answer)