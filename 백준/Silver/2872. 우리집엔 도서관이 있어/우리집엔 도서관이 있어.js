
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')
    .map(Number);

let max = input[0];


for (let i = input[0]; i >= 1; i--) {
    const num = input[i];

    if (max === num) {
        max--;
    }
}

console.log(max);