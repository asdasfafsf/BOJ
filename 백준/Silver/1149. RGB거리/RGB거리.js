const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n').slice(1).map(e => e.split(' ').map(Number));

for (let i = 1; i < input.length; i++) {
    input[i][0] += Math.min(input[i - 1][1], input[i - 1][2])
    input[i][1] += Math.min(input[i - 1][0], input[i - 1][2])
    input[i][2] += Math.min(input[i - 1][0], input[i - 1][1])
}

console.log(Math.min(input.at(-1)[0], input.at(-1)[1], input.at(-1)[2]));