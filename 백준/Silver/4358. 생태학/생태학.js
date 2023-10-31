

const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')


const datas = {};
for (let i = 0; i < input.length; i++) {
    const key = input[i];

    if (!datas[key]) {
        datas[key] = 0;
    } 
    datas[key]++;
}

const answer = Object.keys(datas)
    .sort()
    .map(key => `${key} ${((datas[key] / input.length) * 100).toFixed(4)}`);

console.log(answer.join('\n').trim())