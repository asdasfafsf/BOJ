const fs = require('fs')
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');


const N = +input[0];
const arr = input[1].split(' ').map(Number);
const answer = Array.from({length: N}, () => 0);


for (let i = 0; i < arr.length; i++) {
    let index = 0;
    for (let j = 0; j < arr.length; j++) {
        if (answer[j] === 0) {
            if (arr[i] === index) {
                answer[j] = i + 1;
                break;
            }
            index++;
        }
    }
}

console.log(answer.join(' '));