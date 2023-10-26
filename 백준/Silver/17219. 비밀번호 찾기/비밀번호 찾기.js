const fs = require('fs')


const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);

const obj = {};

let cur = 0;

for (let i = 0; i < N; i++) {
    const [name, value] = input[++cur].split(' ');
    obj[name] = value;
}


const answer = []
for (let i = 0; i < M; i++) {
    answer.push(obj[input[++cur]]);
}

console.log(answer.join('\n'))