const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')

let line = 0;
const [R, C] = input[0].split(' ').map(Number);
line++;

const blocks = [];
for (let i = 0; i < R; i++) {
    blocks.push(input[line].split(' ').map(Number));
    line++;
}

const visited = Array.from({length: R}, () => Array.from({length: C}, () => Infinity));

const count = +input[line];
line++;
const dp = [];

for (let i = 0; i < count; i++) {
    dp.push(input[line++].split(' ').map(Number));
}

const queue = [];

for (let i = 0; i < blocks[0].length; i++) {
    const block = blocks[0][i];

    if (block === 1) {
        queue.push([0, i, 0])
        visited[0][i] = 0;
    }
}

let current = 0;


while (queue.length !== current) {
    const [cy, cx, cw] = queue[current];

    for (const [dy, dx] of dp) {
        const [ty, tx, tw] = [cy + dy, cx + dx, cw + 1];
    
        if (ty < R && ty > -1 && tx > -1 && tx < C && blocks[ty][tx] === 1 && tw < visited[ty][tx]) {
            queue.push([ty, tx, tw]);
            visited[ty][tx] = tw;
        }
    }

    current++;
}

const answer = Math.min(...visited.at(-1));
console.log(answer === Infinity ? -1 : answer)