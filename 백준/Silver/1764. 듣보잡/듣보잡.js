const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const [N, M] = input[0].split(' ').map(Number);


const obj = {};
for (let i = 0; i < N; i++) {
    obj[input[i + 1]] = 1;
}


const res = [];
for (let i = 0; i < M; i++) {
    const name = input[N + i + 1];

    if (obj[name]) {
        res.push(name);
    }
}

res.sort();
console.log(res.length);
console.log(res.join('\n'))