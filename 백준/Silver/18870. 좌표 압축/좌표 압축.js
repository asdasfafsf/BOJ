
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');

const N = +input.at(0);
const arr = input[1].split(' ').map(Number);


const sorted = Object.fromEntries([...new Set(arr)]
    .sort((a, b) => a - b)
    .map((elem, index) => [elem, index]))

for (let i = 0; i < arr.length; i++) {
    arr[i] = sorted[arr[i]];
}
console.log(arr.join(' '))