
const fs = require('fs')
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt' )
    .toString()
    .trim()
    .split('\n');



const N = +input.shift() * 2 + 1;
const M = +input.shift();
const str = input.shift();

let curLen = 1;
let result = 0;
for (let i = 0; i < M;) {

    if (str[i] === 'I' && str[i + 1] === 'O' && str[i + 2] === 'I') {
        curLen += 2;
        i+=2;

        if (curLen  >= N) {
            result++;
        }
    } else {
        curLen = 1;
        i++
    }
}

console.log(result);