

const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n')



const N = +input[0];
const arr = input[1].split(' ').map(Number);
const sums = arr.map(elem => 0);


for (let i = 1; i < sums.length; i++) {
    const prevSum = arr[i - 1];
    const curSum = arr[i];

    sums[i] = sums[i - 1];
    if (prevSum > curSum) {
        sums[i]++;
    } 
}

const answer = [];
for (let i = 3; i < input.length; i++) {
    const [start, end] = input[i].split(' ').map(Number);

    answer.push(sums[end - 1] - sums[start - 1])
}

console.log(answer.join('\n'))

